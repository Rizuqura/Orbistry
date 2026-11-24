const test = require("node:test"),
  assert = require("node:assert/strict"),
  fs = require("node:fs/promises"),
  os = require("node:os"),
  path = require("node:path");
const { randomUUID } = require("node:crypto");
const { ChatService } = require("./chat/chat-service.cjs");
const { EntityAgentService } = require("./agents/entity-agents.cjs");
const { registerAiIpc, API_VERSION } = require("./ipc.cjs");
const { resetBackend } = require("./backend-reset.cjs");

/** Creates a disposable reset fixture; no user profile, keys or sources are read. */
async function fixture(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-audit-"));
  t.after(async () => {
    assert.ok(root.startsWith(path.resolve(os.tmpdir()) + path.sep));
    await fs.rm(root, { recursive: true, force: true });
  });
  const profile = path.join(root, "profile"),
    vault = path.join(root, "Universe");
  await fs.mkdir(profile);
  await fs.mkdir(vault);
  const history = path.join(vault, ".wonnyy/conversations/history.json");
  await fs.mkdir(path.dirname(history), { recursive: true });
  await fs.writeFile(history, "preserve-until-valid");
  return { root, profile, vault, history };
}

test("assigned IPC cancellation reaches only the requesting owner and releases admission", async (t) => {
  const service = new ChatService({});
  const handlers = new Map();
  let started, release;
  const ready = new Promise((resolve) => {
    started = resolve;
  });
  t.mock.method(EntityAgentService.prototype, "send", async (_, signal) => {
    started();
    return new Promise((resolve) => {
      release = () => resolve({ cancelled: signal?.aborted ?? false });
      signal?.addEventListener("abort", release, { once: true });
    });
  });
  registerAiIpc({
    ipcMain: { handle: (name, callback) => handlers.set(name, callback) },
    service,
    getVault: () => "fixture",
  });
  const owner = { sender: { id: 1 } },
    other = { sender: { id: 2 } };
  handlers.get("ai:handshake")(owner, API_VERSION);
  handlers.get("ai:handshake")(other, API_VERSION);
  const requestId = randomUUID();
  const pending = handlers.get("ai:sendEntityAgent")(owner, { requestId });
  await ready;
  try {
    assert.equal(
      (await handlers.get("ai:cancel")(other, requestId)).value,
      false,
    );
    assert.equal(
      (await handlers.get("ai:cancel")(owner, randomUUID())).value,
      false,
    );
    assert.equal(
      (await handlers.get("ai:cancel")(owner, requestId)).value,
      true,
    );
    assert.equal((await pending).value.cancelled, true);
    assert.equal(service.active, null);
    assert.equal(service.pendingMutations, 0);
  } finally {
    release();
    await pending;
  }
});

test("reset rejects malformed credential/settings schemas before deleting any history", async (t) => {
  for (const [name, value] of [
    [
      "provider-credentials.json",
      { schemaVersion: 1, gemini: null, nvidia: [] },
    ],
    ["model-settings.json", { providerId: "nvidia", modelId: "partial" }],
  ]) {
    const f = await fixture(t);
    await fs.writeFile(path.join(f.profile, name), JSON.stringify(value));
    await assert.rejects(resetBackend({ ...f, apply: true }));
    assert.equal(await fs.readFile(f.history, "utf8"), "preserve-until-valid");
    assert.deepEqual(
      JSON.parse(await fs.readFile(path.join(f.profile, name))),
      value,
    );
  }
});

test("reset rejects overlapping roots before destructive work", async (t) => {
  const f = await fixture(t);
  await assert.rejects(
    resetBackend({
      profile: path.dirname(f.history),
      vault: f.vault,
      apply: true,
    }),
    /overlap/i,
  );
  assert.equal(await fs.readFile(f.history, "utf8"), "preserve-until-valid");
});

test("reset preview does not load retained Engine result bodies", async (t) => {
  const f = await fixture(t),
    file = path.join(f.vault, ".wonnyy/worldview/agents/results/large.json");
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, "synthetic-body".repeat(10000));
  const canonical = await fs.realpath(file);
  const read = fs.readFile;
  let reads = 0;
  t.mock.method(fs, "readFile", async (name, ...args) => {
    if (name === canonical) reads++;
    return read(name, ...args);
  });
  const result = await resetBackend(f);
  assert.equal(result.applied, false);
  assert.equal(reads, 0);
});

test("reset preflight rejects invalid configuration targets and request entries without clearing history", async (t) => {
  const directory = await fixture(t);
  await fs.mkdir(
    path.join(directory.profile, "huggingface-infrastructure.json"),
  );
  await assert.rejects(
    resetBackend({ ...directory, apply: true }),
    /regular file/,
  );
  assert.equal(
    await fs.readFile(directory.history, "utf8"),
    "preserve-until-valid",
  );
  const session = await fixture(t),
    file = path.join(
      session.vault,
      ".wonnyy/worldview/agents/sessions/one.json",
    );
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(
    file,
    JSON.stringify({ messages: [], executions: [], requests: [null] }),
  );
  await assert.rejects(
    resetBackend({ ...session, apply: true }),
    /Invalid assigned session/,
  );
  assert.equal(
    await fs.readFile(session.history, "utf8"),
    "preserve-until-valid",
  );
});

test("vault changes cancel an assigned request before waiting for its mutation slot", async () => {
  const service = new ChatService({});
  let started, timer;
  const ready = new Promise((resolve) => {
    started = resolve;
  });
  const pending = service.runAssignedRequest(
    1,
    randomUUID(),
    (signal) =>
      new Promise((resolve) => {
        started();
        signal.addEventListener("abort", () => resolve("cancelled"), {
          once: true,
        });
      }),
  );
  await ready;
  const changed = service.changeKnowledge(() => "changed");
  try {
    const result = await Promise.race([
      Promise.all([pending, changed]),
      new Promise((_, reject) => {
        timer = setTimeout(
          () =>
            reject(Error("Vault change waited behind uncancelled inference")),
          500,
        );
      }),
    ]);
    assert.deepEqual(result, ["cancelled", "changed"]);
  } finally {
    clearTimeout(timer);
    await service.cancelAll();
    await pending;
    await changed;
  }
});

test("immediate cancellation prevents queued provider preparation", async () => {
  const service = new ChatService({}),
    requestId = randomUUID();
  let calls = 0;
  const pending = service.runAssignedRequest(1, requestId, () => calls++);
  const failure = assert.rejects(pending, { code: "MODEL_CANCELLED" });
  assert.equal(await service.cancel(1, requestId), true);
  await failure;
  assert.equal(calls, 0);
  assert.equal(service.active, null);
});
