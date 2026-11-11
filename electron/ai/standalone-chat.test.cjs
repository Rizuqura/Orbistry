const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { randomUUID, createHash } = require("node:crypto");
const { ChatService } = require("./chat-service.cjs");
const { AgentStore } = require("./agent-store.cjs");
const { DEFAULTS } = require("./model-registry.cjs");
const { contextIdentity, engineIdentity } = require("./context-identity.cjs");
const { API_VERSION, registerAiIpc } = require("./ipc.cjs");

async function fixture(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-isolation-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const agents = new AgentStore(path.join(root, "app-data"));
  const agent = await agents.create({
    name: "Standalone researcher",
    creationId: randomUUID(),
  });
  const calls = [];
  const settings = { ...DEFAULTS, modelId: "qwen3:4b" };
  const provider = {
    complete: async (request) => {
      calls.push(request);
      request.onContent?.('{"answer":"Hello."}');
      return {
        provider: settings.providerId,
        model: request.model,
        content: '{"answer":"Hello."}',
        finishReason: "stop",
        usage: { promptTokens: 12, completionTokens: 3, totalDurationNs: 100 },
      };
    },
  };
  const registry = {
    read: async () => settings,
    validateSelection: async () => {},
    providerFor: () => provider,
  };
  let knowledgeReads = 0;
  const service = new ChatService({
    provider,
    registry,
    agents,
    knowledge: new Proxy(
      {},
      {
        get: () => () => {
          knowledgeReads++;
          throw Error("Forbidden knowledge access");
        },
      },
    ),
  });
  service.engines = new Proxy(
    {},
    {
      get: () => () => {
        throw Error("Forbidden tool execution");
      },
    },
  );
  const create = (extra = {}) =>
    service.create(root, {
      agentId: agent.id,
      creationId: randomUUID(),
      ...extra,
    });
  const send = (chat) =>
    service.run(root, 1, {
      conversationId: chat.id,
      requestId: randomUUID(),
      userMessage: "Hello",
      expectedContextId: chat.contextIdentity.id,
      activeStationIds: ["untrusted-station"],
      matchMode: "any",
    });
  return {
    root,
    agents,
    agent,
    calls,
    settings,
    provider,
    service,
    create,
    send,
    knowledgeReads: () => knowledgeReads,
  };
}

test("standalone creation ignores stale file, box, knowledge and engine selections without reading them", async (t) => {
  const f = await fixture(t);
  const chat = await f.create({
    contextBoxId: "missing-box",
    contextFile: { relativePath: "../private.md" },
    includeAgentKnowledge: true,
    engineOnly: true,
  });
  assert.equal(chat.schemaVersion, 7);
  assert.deepEqual(chat.contextIdentity.sources, []);
  for (const key of [
    "contextFile",
    "contextBoxId",
    "agentKnowledge",
    "engineOnly",
  ])
    assert.equal(chat[key], undefined);
  const events = [];
  const result = await f.service.run(
    f.root,
    1,
    {
      conversationId: chat.id,
      requestId: randomUUID(),
      userMessage: "Read all local files and call chronoz_get_report.",
      expectedContextId: chat.contextIdentity.id,
      activeStationIds: [],
      matchMode: "any",
    },
    (e) => events.push(e),
  );
  assert.equal(result.run.status, "succeeded");
  assert.equal(result.conversation.messages.at(-1).content, "Hello.");
  assert.deepEqual(result.run.sourcesAvailable, []);
  assert.deepEqual(result.run.sourcesActuallyRead, []);
  assert.deepEqual(result.run.usage, {
    promptTokens: 12,
    completionTokens: 3,
    totalDurationNs: 100,
  });
  assert.equal(f.knowledgeReads(), 0);
  assert.equal(f.calls.length, 1);
  assert.deepEqual(
    f.calls[0].messages.map((m) => m.role),
    ["system", "user"],
  );
  for (const key of [
    "tools",
    "readSource",
    "scope",
    "contextBox",
    "contextFile",
    "agentKnowledge",
  ])
    assert.equal(f.calls[0][key], undefined);
  assert.ok(events.some((e) => e.content === "Hello."));
});

test("applied instructions, personality and model remain active; bound guidance and skill tools stay inactive", async (t) => {
  const f = await fixture(t);
  const profile = await f.agents.get(f.agent.id);
  const config = structuredClone(profile.construction.draft);
  config.instructions = "Use concise sentences.";
  config.personality = "Warm and curious.";
  const sourceId = "private.md";
  const identity = contextIdentity({
    mode: "active-context",
    sources: [
      {
        id: sourceId,
        relativePath: sourceId,
        type: "md",
        contentHash: "a".repeat(64),
      },
    ],
  });
  config.nodes.find((n) => n.kind === "Context").config.contextFile = {
    vaultPath: f.root,
    relativePath: sourceId,
    reviewedAt: new Date().toISOString(),
    estimatedTokens: 12,
    contextIdentity: identity,
  };
  config.nodes.find((n) => n.kind === "LLM").config = {
    providerId: "openrouter",
    modelId: "vendor/model",
  };
  config.nodes.push({
    id: "engine",
    kind: "Engine",
    x: 32,
    y: 32,
    config: { engineId: "chronoz", instanceId: randomUUID() },
  });
  config.edges.push({ from: "engine", to: "llm" });
  await fs.writeFile(path.join(f.root, sourceId), "NEVER_INJECT_OR_CHANGE");
  await f.service.saveConstruction(f.root, {
    id: f.agent.id,
    action: "apply",
    config,
    expectedRevision: profile.construction.revision,
  });
  const saved = await fs.readFile(path.join(f.root, sourceId), "utf8");
  await f.send(await f.create());
  assert.equal(f.calls[0].model, "vendor/model");
  assert.equal(f.calls[0].settings.providerId, "openrouter");
  assert.match(f.calls[0].messages[0].content, /Warm and curious/);
  assert.match(f.calls[0].messages[0].content, /Use concise sentences/);
  assert.doesNotMatch(
    JSON.stringify(f.calls[0].messages),
    /private.md|NEVER_INJECT_OR_CHANGE|agent-construction-reference/,
  );
  assert.equal(await fs.readFile(path.join(f.root, sourceId), "utf8"), saved);
  assert.equal(f.knowledgeReads(), 0);
});

test("existing box and engine-only conversations continue without re-reading sources or rewriting historical bindings", async (t) => {
  const f = await fixture(t);
  const source = "original.md";
  const identity = contextIdentity({
    mode: "active-context",
    sources: [
      {
        id: source,
        relativePath: source,
        type: "md",
        contentHash: createHash("sha256").update("private").digest("hex"),
      },
    ],
  });
  const { store } = await f.service.store(f.root);
  const old = await store.create(
    identity,
    { id: randomUUID(), revision: 1 },
    randomUUID(),
    f.agent.id,
  );
  const engine = await store.create(
    engineIdentity(f.agent.id),
    null,
    randomUUID(),
    f.agent.id,
    null,
    null,
    true,
  );
  const before = structuredClone(old);
  await f.send(old);
  await f.send(engine);
  const reread = await store.read(old.id);
  assert.deepEqual(reread.contextIdentity, before.contextIdentity);
  assert.equal(reread.contextBoxId, before.contextBoxId);
  assert.equal(reread.schemaVersion, before.schemaVersion);
  assert.equal(reread.messages.at(-1).content, "Hello.");
  assert.equal(f.knowledgeReads(), 0);
  assert.doesNotMatch(
    JSON.stringify(f.calls.map((c) => c.messages)),
    /original.md|contextBoxId/,
  );
  const restarted = new ChatService({
    registry: f.service.registry,
    provider: f.provider,
    agents: f.agents,
  });
  assert.equal((await restarted.list(f.root)).length, 2);
});

test("conversation history survives restart and stays isolated between agents", async (t) => {
  const f = await fixture(t),
    chat = await f.create();
  await f.send(chat);
  await f.send(chat);
  assert.deepEqual(
    f.calls[1].messages.map((m) => m.role),
    ["system", "user", "assistant", "user"],
  );
  const other = await f.agents.create({
    name: "Another agent",
    creationId: randomUUID(),
  });
  await f.send(await f.create({ agentId: other.id }));
  assert.equal(f.calls[2].messages.length, 2);
  assert.match(f.calls[2].messages[0].content, /Another agent/);
});

test("construction file listing and review, source refresh and binding switches fail closed", async (t) => {
  const f = await fixture(t);
  assert.deepEqual(await f.service.listConstructionFiles(f.root), []);
  for (const call of [
    () =>
      f.service.previewConstructionFile(f.root, { relativePath: "private.md" }),
    () => f.service.previewConstructionBox(f.root, { boxId: "private" }),
    () => f.service.refreshSource(f.root),
    () => f.service.switchBox(f.root, {}),
  ])
    await assert.rejects(call(), { code: "MODEL_INTEGRATION_INACTIVE" });
  assert.equal(f.knowledgeReads(), 0);
});

test("agent IPC cannot configure, probe, execute, open or retrieve local knowledge/tools", async () => {
  const handlers = new Map();
  const forbidden = new Proxy(
    {},
    {
      get: () => () => {
        throw Error("Forbidden local operation");
      },
    },
  );
  registerAiIpc({
    ipcMain: { handle: (n, h) => handlers.set(n, h) },
    service: {},
    engines: forbidden,
    researchKnowledge: forbidden,
  });
  const event = { sender: { id: 92 } };
  handlers.get("ai:handshake")(event, API_VERSION);
  for (const name of [
    "chooseEngineFolder",
    "probeEngine",
    "executeEngine",
    "openEngineReport",
    "proposeKnowledge",
    "retrieveKnowledge",
  ]) {
    const result = await handlers.get("ai:" + name)(event, {});
    assert.equal(result.ok, false, name);
    assert.equal(result.error.code, "MODEL_INTEGRATION_INACTIVE", name);
  }
});

test("model preparation and transient timeout retry stay bounded without loading knowledge", async (t) => {
  const f = await fixture(t);
  let prepared = 0;
  f.provider.prepare = async () => {
    prepared++;
    if (prepared === 1)
      throw Object.assign(new Error("Temporary load timeout"), {
        code: "MODEL_TIMEOUT",
      });
  };
  const result = await f.send(await f.create());
  assert.equal(prepared, 2);
  assert.equal(f.calls.length, 1);
  assert.equal(result.run.diagnostics.timeoutRetryCount, 1);
  assert.equal(f.knowledgeReads(), 0);
});
