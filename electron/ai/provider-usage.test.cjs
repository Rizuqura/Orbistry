const test = require("node:test");
const assert = require("node:assert/strict");
const {
  ProviderUsageService,
  observeProviderUsage,
} = require("./provider-usage.cjs");
function fixture(fetchImpl) {
  let provider = "ollama",
    agent = null,
    time = 1000,
    calls = 0;
  const keys = {
    gemini: "secret-gemini-A",
    nvidia: "secret-nvidia-A",
    openrouter: "secret-openrouter-A",
  };
  const credentials = {
    get: async (id) => {
      if (!keys[id]) throw Error("No key");
      return keys[id];
    },
  };
  const service = new ProviderUsageService({
    credentials,
    registry: { read: async () => ({ providerId: provider }) },
    agents: { get: async () => agent },
    now: () => time,
    fetchImpl: async (...args) => {
      calls++;
      return fetchImpl
        ? fetchImpl(...args)
        : Response.json({
            data: {
              limit: 100,
              limit_remaining: 75,
              limit_reset: "weekly",
              usage_weekly: 25,
            },
          });
    },
  });
  return {
    service,
    credentials,
    keys,
    provider: (v) => (provider = v),
    agent: (v) => (agent = v),
    calls: () => calls,
    advance: (n) => (time += n),
  };
}
test("budgets follow every provider without fetching or inventing non-OpenRouter balances", async () => {
  const f = fixture();
  for (const provider of ["ollama", "gemini", "nvidia", "openrouter"]) {
    f.provider(provider);
    await f.service.record(
      provider,
      { promptTokens: 12, completionTokens: 3 },
      f.keys[provider],
    );
    const s = await f.service.get();
    assert.equal(s.provider, provider);
    assert.equal(s.inputTokens, 12);
    assert.equal(s.outputTokens, 3);
    assert.equal(s.status, "ready");
    if (provider !== "openrouter") {
      assert.equal(s.remainingUsd, null);
      assert.equal(s.limitUsd, null);
      assert.equal(s.resetAt, null);
      assert.equal(s.dataSource, "local_meter");
    }
    assert.doesNotMatch(JSON.stringify(s), /secret-|Authorization|Bearer/);
  }
  assert.equal(f.calls(), 1);
});
test("an active agent model overrides global provider selection for its allowance", async () => {
  const f = fixture();
  f.provider("gemini");
  f.agent({ runtimeModel: { providerId: "openrouter", modelId: "model" } });
  const s = await f.service.get({ agentId: "agent" });
  assert.equal(s.provider, "openrouter");
  assert.equal(s.remainingUsd, 75);
  f.agent({ runtimeModel: { providerId: "nvidia", modelId: "model" } });
  const n = await f.service.get({ agentId: "agent" });
  assert.equal(n.provider, "nvidia");
  assert.equal(n.remainingUsd, null);
  f.agent({ runtimeModel: { providerId: null, modelId: null } });
  assert.equal((await f.service.get({ agentId: "agent" })).provider, "gemini");
});
test("provider switches preserve separate session meters while credential rotation clears only that key", async () => {
  const f = fixture();
  f.provider("gemini");
  await f.service.record(
    "gemini",
    { promptTokens: 100, completionTokens: 10 },
    f.keys.gemini,
  );
  f.provider("nvidia");
  await f.service.record(
    "nvidia",
    { promptTokens: 40, completionTokens: 4 },
    f.keys.nvidia,
  );
  assert.equal((await f.service.get()).inputTokens, 40);
  f.service.selectionChanged();
  f.provider("gemini");
  assert.equal((await f.service.get()).inputTokens, 100);
  const previous = (await f.service.get()).safeKeyAlias,
    oldKey = f.keys.gemini;
  f.keys.gemini = "secret-gemini-B";
  f.service.invalidate("gemini");
  const s = await f.service.get();
  assert.notEqual(s.safeKeyAlias, previous);
  assert.equal(s.inputTokens, null);
  await f.service.record(
    "gemini",
    { promptTokens: 900, completionTokens: 900 },
    oldKey,
  );
  assert.equal((await f.service.get()).inputTokens, null);
  f.keys.gemini = null;
  assert.equal((await f.service.get()).status, "unconfigured");
  f.provider("nvidia");
  assert.equal((await f.service.get()).inputTokens, 40);
});
test("late credit responses cannot repopulate a new provider or key", async () => {
  let release;
  const f = fixture(() => new Promise((resolve) => (release = resolve)));
  f.provider("openrouter");
  const pending = f.service.get();
  while (!release) await new Promise((resolve) => setImmediate(resolve));
  f.provider("gemini");
  release(
    Response.json({
      data: { limit: 100, limit_remaining: 75, limit_reset: "weekly" },
    }),
  );
  const s = await pending;
  assert.equal(s.provider, "gemini");
  assert.equal(s.remainingUsd, null);
  assert.equal(s.safeKeyAlias, (await f.service.get()).safeKeyAlias);
});
test("token accounting accepts reported zero and partial counts but excludes invalid or superseded measurements", async () => {
  const f = fixture();
  f.provider("nvidia");
  await f.service.record(
    "nvidia",
    { promptTokens: 0, completionTokens: null },
    f.keys.nvidia,
  );
  let s = await f.service.get();
  assert.equal(s.inputTokens, 0);
  assert.equal(s.outputTokens, null);
  const version = f.service.version("nvidia");
  f.service.invalidate("nvidia");
  await f.service.record(
    "nvidia",
    { promptTokens: 999, completionTokens: 9 },
    f.keys.nvidia,
    version,
  );
  assert.equal((await f.service.get()).inputTokens, null);
  await f.service.record(
    "nvidia",
    { promptTokens: -2, completionTokens: NaN },
    f.keys.nvidia,
  );
  assert.equal((await f.service.get()).inputTokens, null);
});
test("completion observers measure every successful transport once and never change inference outcomes", async () => {
  const f = fixture();
  let events = 0;
  const adapter = {
    complete: async () => ({
      content: "ok",
      usage: { promptTokens: 16, completionTokens: 2 },
    }),
  };
  observeProviderUsage(
    adapter,
    "nvidia",
    f.credentials,
    f.service,
    () => events++,
  );
  await adapter.complete({});
  f.provider("nvidia");
  assert.equal((await f.service.get()).inputTokens, 16);
  assert.equal(events, 1);
  const failing = {
    complete: async () => {
      throw Error("Cancelled");
    },
  };
  observeProviderUsage(
    failing,
    "nvidia",
    f.credentials,
    f.service,
    () => events++,
  );
  await assert.rejects(failing.complete({}), /Cancelled/);
  assert.equal((await f.service.get()).inputTokens, 16);
  const safe = { complete: async () => ({ content: "successful" }) };
  observeProviderUsage(
    safe,
    "nvidia",
    f.credentials,
    {
      version: () => 0,
      record: async () => {
        throw Error("Observer failed");
      },
    },
    () => {},
  );
  assert.equal((await safe.complete({})).content, "successful");
});
