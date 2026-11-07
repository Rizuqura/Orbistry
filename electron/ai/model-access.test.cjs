const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const {
  ModelAccess,
  identifyProvider,
  providedPreview,
} = require("./model-access.cjs");
const { CapabilityRegistry } = require("./llm-front-office/model-registry.cjs");

// Synthetic credentials only. Never load a developer's local secrets in tests.
const key = "sk-or-synthetic-test-credential";
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status });
function harness(fetchImpl) {
  const writes = [];
  const service = new ModelAccess(
    { save: async (value) => writes.push(value) },
    { fetchImpl },
  );
  return { service, writes };
}

test("automatic prefix recognition never sprays an unknown credential", async () => {
  const { service, writes } = harness(() => assert.fail("No request allowed"));
  assert.equal(identifyProvider("nvapi-synthetic").providerId, "nvidia");
  assert.equal(identifyProvider("AIza-synthetic").providerId, "gemini");
  assert.equal(identifyProvider("AQ.synthetic").providerId, "gemini");
  assert.equal(
    (await service.connect({ apiKey: "unknown-synthetic" })).state,
    "unrecognized",
  );
  assert.deepEqual(writes, []);
});

test("authenticated OpenRouter check precedes catalog fetch and encrypted-store commit", async () => {
  const requests = [];
  const { service, writes } = harness(async (url, init) => {
    requests.push(url);
    assert.equal(new URL(url).origin, "https://openrouter.ai");
    assert.equal(init.headers.Authorization, `Bearer ${key}`);
    assert.equal(init.redirect, "error");
    assert.equal(new URL(url).search, "");
    assert.equal(init.method, undefined); // no generation request
    return url.endsWith("auth/key")
      ? json({ data: {} })
      : json({ data: [{ id: "vendor/model", name: "Catalog model" }] });
  });
  const result = await service.connect({ apiKey: key });
  assert.equal(result.state, "verified");
  assert.equal(result.credentialScope, "user_byok");
  assert.deepEqual(requests, [
    "https://openrouter.ai/api/v1/auth/key",
    "https://openrouter.ai/api/v1/models",
  ]);
  assert.equal(writes.length, 1);
  assert.doesNotMatch(JSON.stringify(result), new RegExp(key));
  assert.equal((await service.connect({ apiKey: key })).saved, false);
  assert.equal(requests.length, 2, "Repeated checks are rate limited");
});

test("invalid and unreachable replacements preserve the existing credential and sanitize errors", async () => {
  for (const response of [
    () => json({ secret: key }, 401),
    () => {
      throw new Error(key);
    },
  ]) {
    const { service, writes } = harness(response);
    const result = await service.connect({ apiKey: key });
    assert.equal(result.saved, false);
    assert.ok(["invalid", "unreachable"].includes(result.state));
    assert.doesNotMatch(JSON.stringify(result), new RegExp(key));
    assert.deepEqual(writes, []);
  }
});

test("NVIDIA catalog listing never claims key verification or invokes paid inference", async () => {
  const { service, writes } = harness(async (url) => {
    assert.equal(url, "https://integrate.api.nvidia.com/v1/models");
    return json({ data: [{ id: "vendor/model" }] });
  });
  const result = await service.connect({ apiKey: "nvapi-synthetic-test" });
  assert.equal(result.state, "identified_unverified");
  assert.equal(result.saved, true);
  assert.equal(writes.length, 1);
});

test("Gemini keys are detected automatically and sent only to Google", async () => {
  const { service } = harness(async (url, init) => {
    assert.match(
      url,
      /^https:\/\/generativelanguage.googleapis.com\/v1beta\/models\?/,
    );
    assert.equal(init.headers["x-goog-api-key"], "AIza-synthetic-key");
    return json({ models: [] });
  });
  assert.equal(
    (
      await service.connect({
        apiKey: "AIza-synthetic-key",
      })
    ).state,
    "verified",
  );
});

test("custom URLs, credential scopes and client developer flags are rejected without echoing input", async () => {
  const { service } = harness(() => assert.fail("No request allowed"));
  for (const extra of [
    { providerId: "nvidia" },
    { endpoint: "http://127.0.0.1" },
    { credentialScope: "developer_local" },
    { devView: true },
  ]) {
    await assert.rejects(
      service.connect({ apiKey: key, ...extra }),
      (error) => !error.message.includes(key),
    );
  }
});

test("public preview uses the canonical favorite IDs, filters errors and exposes only non-executable metadata", () => {
  const profile = (id, extra = {}) => ({
    deploymentId: `nvidia:${id}`,
    modelId: id,
    providerId: "nvidia",
    label: id,
    apiKey: key,
    ...extra,
  });
  const catalog = {
    favorites: ["nvidia:starred", "nvidia:failed", "nvidia:unavailable"],
    profiles: [
      profile("starred"),
      profile("recommended", { recommended: true, favorite: true }),
      profile("failed"),
      profile("unavailable", { availability: "unavailable" }),
    ],
  };
  const original = JSON.stringify(catalog);
  const result = providedPreview(catalog, (id) => ({
    failures: id.endsWith(":failed") ? 1 : 0,
  }));
  assert.deepEqual(
    result.map((row) => row.modelId),
    ["starred"],
  );
  assert.equal(result[0].availability, "unverified");
  assert.equal(result[0].executable, false);
  assert.doesNotMatch(JSON.stringify(result), new RegExp(key));
  assert.equal(JSON.stringify(catalog), original);
  assert.deepEqual(providedPreview({ ...catalog, favorites: [] }), []);
});

test("favorites survive catalog refresh and restart without migration or new defaults", async () => {
  const directory = await fs.mkdtemp(
    path.join(os.tmpdir(), "qterminal-favorites-"),
  );
  try {
    const registry = {
      providerFor: () => ({
        listModels: async () => [
          {
            name: "vendor/model",
            capabilities: ["completion"],
            contextLength: null,
          },
        ],
      }),
    };
    const credentials = { status: async () => ({ configured: false }) };
    const catalog = new CapabilityRegistry(directory, registry, credentials);
    await catalog.refresh("nvidia");
    assert.deepEqual((await catalog.read()).favorites, []);
    await catalog.favorite({
      deploymentId: "nvidia:vendor/model",
      favorite: true,
    });
    await catalog.refresh("nvidia");
    const restarted = new CapabilityRegistry(directory, registry, credentials);
    assert.deepEqual((await restarted.read()).favorites, [
      "nvidia:vendor/model",
    ]);
    assert.equal(providedPreview(await restarted.state()).length, 1);
  } finally {
    await fs.rm(directory, { recursive: true, force: true });
  }
});
