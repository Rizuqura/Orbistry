const test = require("node:test"),
  assert = require("node:assert/strict"),
  fs = require("node:fs/promises"),
  os = require("node:os"),
  path = require("node:path");
const { resetBackend } = require("./backend-reset.cjs");
const { ChatService } = require("./chat/chat-service.cjs");
const { ModelRegistry } = require("./model-registry.cjs");
const { ProviderRegistry } = require("./provider-registry.cjs");

/** Seeds disposable history, credentials and protected data without touching the user's profile. */
async function fixture(t) {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-backend-reset-"),
  );
  t.after(async () => {
    assert.ok(root.startsWith(path.resolve(os.tmpdir()) + path.sep));
    await fs.rm(root, { recursive: true, force: true });
  });
  const profile = path.join(root, "profile"),
    vault = path.join(root, "Universe");
  await fs.mkdir(profile);
  await fs.mkdir(vault);
  const put = async (base, relative, value) => {
    const file = path.join(base, relative);
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, JSON.stringify(value));
    return file;
  };
  await put(profile, "provider-credentials.json", {
    schemaVersion: 1,
    gemini: "Z2VtaW5p",
    huggingface: "aGY=",
    nvidia: "bnZpZGlh",
  });
  await put(profile, "model-settings.json", {
    ...require("./model-registry.cjs").DEFAULTS,
    providerId: "nvidia",
    modelId: "existing-model",
  });
  await put(profile, "huggingface-infrastructure.json", {
    models: ["old-model"],
  });
  for (const name of [
    "conversations/old.json",
    "model-runs/old.json",
    "front-office-metrics/old.json",
    "worldview/agents/gateway-tasks/old.json",
  ])
    await put(vault, ".wonnyy/" + name, { content: "old history" });
  const protectedFiles = [];
  protectedFiles.push(
    await put(profile, "agents.json", {
      construction: { active: "retain graph" },
    }),
  );
  protectedFiles.push(await put(profile, "engines.json", { engine: "retain" }));
  for (const name of [
    "assignments.json",
    "executions/retained.json",
    "results/retained.json",
  ])
    protectedFiles.push(
      await put(vault, ".wonnyy/worldview/agents/" + name, { retained: name }),
    );
  protectedFiles.push(
    await put(vault, "original-source.md", { untouched: true }),
  );
  const session = await put(
    vault,
    ".wonnyy/worldview/agents/sessions/assignment.json",
    {
      messages: [{ content: "old conversation" }],
      error: "old",
      executions: [{ id: "retained-execution" }],
      requests: [{ status: "awaiting-approval" }],
    },
  );
  return { root, profile, vault, protectedFiles, session };
}

test("Universe reset rejects generation without invoking providers, tools or history storage", async () => {
  let calls = 0;
  const service = new ChatService({
    provider: { complete: () => calls++ },
    registry: { read: () => calls++ },
  });
  await assert.rejects(
    service.run("missing-vault", 1, {
      userMessage: "ask all agents for price",
    }),
    { code: "UNIVERSE_CHAT_RESET" },
  );
  assert.equal(calls, 0);
  assert.equal(service.stores.size, 0);
  assert.deepEqual(await service.gatewayActivity(), []);
});

test("preview and repeated reset preserve NVIDIA, construction, assignments, sources and Engine evidence", async (t) => {
  const f = await fixture(t),
    before = await Promise.all(
      f.protectedFiles.map((file) => fs.readFile(file, "utf8")),
    );
  const preview = await resetBackend(f);
  assert.equal(preview.applied, false);
  assert.equal(preview.historyFiles, 4);
  assert.ok(
    (await fs.readFile(f.session, "utf8")).includes("old conversation"),
  );
  const result = await resetBackend({ ...f, apply: true });
  assert.equal(result.constructionAndAssignmentsPreserved, true);
  assert.deepEqual(
    await Promise.all(
      f.protectedFiles.map((file) => fs.readFile(file, "utf8")),
    ),
    before,
  );
  const credentials = JSON.parse(
    await fs.readFile(path.join(f.profile, "provider-credentials.json")),
  );
  assert.deepEqual(credentials, {
    schemaVersion: 1,
    gemini: null,
    nvidia: "bnZpZGlh",
  });
  const session = JSON.parse(await fs.readFile(f.session));
  assert.deepEqual(session.messages, []);
  assert.equal(session.error, null);
  assert.deepEqual(session.executions, [{ id: "retained-execution" }]);
  assert.equal(session.requests[0].status, "cancelled");
  assert.equal((await resetBackend({ ...f, apply: true })).historyFiles, 0);
  assert.equal(
    (await fs.readdir(path.join(f.vault, ".wonnyy"))).includes("conversations"),
    false,
  );
});

test("reset refuses a linked deletion target before clearing any history", async (t) => {
  const f = await fixture(t),
    outside = path.join(f.root, "outside");
  await fs.mkdir(outside);
  const marker = path.join(outside, "retain.txt");
  await fs.writeFile(marker, "retain");
  const link = path.join(f.vault, ".wonnyy/conversations");
  await fs.rm(link, { recursive: true });
  await fs.symlink(outside, link, "junction");
  await assert.rejects(
    resetBackend({ ...f, apply: true }),
    /Linked reset targets/,
  );
  assert.equal(await fs.readFile(marker, "utf8"), "retain");
  assert.ok(
    (await fs.readFile(f.session, "utf8")).includes("old conversation"),
  );
});

test("NVIDIA-only registry defaults to NVIDIA and rejects removed providers", async () => {
  const registry = new ModelRegistry(
    new ProviderRegistry({ nvidia: {} }),
    os.tmpdir(),
  );
  registry.file = path.join(
    os.tmpdir(),
    "missing-settings-" + require("node:crypto").randomUUID(),
  );
  assert.equal((await registry.read()).providerId, "nvidia");
  assert.throws(() => registry.providerFor("huggingface"), /not supported/);
});
