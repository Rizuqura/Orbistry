const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
const { randomUUID } = require("node:crypto");
const { selectTool, TOOL_NAME } = require("./engine-chat.cjs");
const { DEFAULTS } = require("./model-registry.cjs");
const { ChatService } = require("./chat-service.cjs");
const { AgentStore } = require("./agent-store.cjs");
const { readModelRun } = require("./run-store.cjs");
const classes = {
  ollama: require("./providers/ollama-provider.cjs").OllamaProvider,
  gemini: require("./providers/gemini-provider.cjs").GeminiProvider,
  nvidia: require("./providers/nvidia-provider.cjs").NvidiaProvider,
  openrouter: require("./providers/openrouter-provider.cjs").OpenRouterProvider,
};
function native(providerId, args = { month: "2026-10" }, kind = "call") {
  const func = {
    name: kind === "unknown" ? "run_shell" : TOOL_NAME,
    arguments: providerId === "ollama" ? args : JSON.stringify(args),
  };
  const calls =
    kind === "text" ? [] : [{ id: "call_1", type: "function", function: func }];
  if (kind === "parallel") calls.push(calls[0]);
  if (providerId === "gemini")
    return {
      candidates: [
        {
          finishReason: "STOP",
          content: {
            parts:
              kind === "text"
                ? [{ text: '{"name":"chronoz_get_report","arguments":{}}' }]
                : calls.map((call) => ({
                    functionCall: { name: call.function.name, args },
                  })),
          },
        },
      ],
    };
  if (providerId === "ollama")
    return {
      done: true,
      done_reason: "stop",
      message: {
        role: "assistant",
        content:
          kind === "text" ? '{"name":"chronoz_get_report","arguments":{}}' : "",
        tool_calls: calls,
      },
    };
  return {
    choices: [
      {
        finish_reason: calls.length ? "tool_calls" : "stop",
        message: { role: "assistant", content: "", tool_calls: calls },
      },
    ],
  };
}
function providerFixture(id) {
  const calls = [];
  let payload = native(id);
  const provider = new classes[id]({
    credentials: { get: async () => "synthetic-test-key-never-log" },
    fetchImpl: async (url, init) => {
      calls.push({ url: String(url), body: JSON.parse(init.body) });
      init.signal?.throwIfAborted();
      return new Response(JSON.stringify(payload), {
        headers: { "Content-Type": "application/json" },
      });
    },
  });
  const settings = {
    ...DEFAULTS,
    providerId: id,
    modelId:
      id === "gemini"
        ? "gemini-test"
        : id === "ollama"
          ? "qwen3:4b"
          : "test/tool-model",
    contextWindow: 32768,
  };
  return { calls, provider, settings, payload: (value) => (payload = value) };
}
for (const id of Object.keys(classes))
  test(`${id}: actual provider transport uses native functions, strictly validates args and never executes text emulation`, async () => {
    const f = providerFixture(id),
      run = () =>
        selectTool(f.provider, id, {
          model: f.settings.modelId,
          settings: f.settings,
          question: "Get my October 2026 CHronoZ macro report.",
        });
    assert.deepEqual((await run()).call.arguments, { month: "2026-10" });
    const body = f.calls[0].body;
    assert.ok(body.tools.length === 1);
    if (id === "gemini") {
      const declaration = body.tools[0].functionDeclarations[0];
      assert.equal(declaration.parameters, undefined);
      assert.equal(
        declaration.parametersJsonSchema.additionalProperties,
        false,
      );
    }
    assert.equal(
      id === "gemini"
        ? body.generationConfig.temperature
        : id === "ollama"
          ? body.options.temperature
          : body.temperature,
      f.settings.temperature,
    );
    assert.equal(body.stream ?? false, false);
    assert.ok(!JSON.stringify(body).includes("synthetic-test-key"));
    f.payload(native(id, {}, "text"));
    assert.equal((await run()).call, null);
    f.payload(native(id, {}));
    assert.deepEqual((await run()).call.arguments, {});
    for (const args of [
      { month: "2026-13" },
      { month: "../2026-10" },
      { command: "whoami" },
      { path: "C:\\anything" },
      { operation: "monthly_run" },
      { apiKey: "bad" },
    ]) {
      f.payload(native(id, args));
      await assert.rejects(run(), { code: "MODEL_INVALID_RESPONSE" });
    }
    for (const kind of ["unknown", "parallel"]) {
      f.payload(native(id, {}, kind));
      await assert.rejects(run(), { code: "MODEL_INVALID_RESPONSE" });
    }
    const controller = new AbortController();
    controller.abort();
    await assert.rejects(
      selectTool(f.provider, id, {
        model: f.settings.modelId,
        settings: f.settings,
        question: "get report",
        signal: controller.signal,
      }),
    );
  });
async function chatFixture(t) {
  const root = await fs.realpath(
    await fs.mkdtemp(path.join(os.tmpdir(), "qterminal-engine-chat-")),
  );
  t.after(async () => {
    assert.ok(root.startsWith((await fs.realpath(os.tmpdir())) + path.sep));
    await fs.rm(root, { recursive: true, force: true });
  });
  const agents = new AgentStore(path.join(root, "profile"));
  const agent = await agents.create({
    name: "Report assistant",
    creationId: randomUUID(),
  });
  const instanceId = randomUUID(),
    nodeId = "engine-" + randomUUID();
  const graph = structuredClone(agent.construction.draft);
  graph.nodes.push({
    id: nodeId,
    kind: "Engine",
    x: 64,
    y: 368,
    config: { engineId: "chronoz", instanceId },
  });
  graph.edges.push({ from: nodeId, to: "llm" });
  await agents.saveConstruction({
    id: agent.id,
    expectedRevision: 0,
    action: "apply",
    config: graph,
  });
  const p = providerFixture("ollama");
  const service = new ChatService({
    provider: p.provider,
    registry: {
      read: async () => p.settings,
      validateSelection: async () => {},
      providerFor: () => p.provider,
    },
    agents,
    knowledge: {
      prepareBrainScope: () => {
        throw new Error("Engine-only chat must not read research context");
      },
    },
  });
  const executions = [];
  service.engines = {
    registration: async () => ({ approved: true }),
    binding: async ({ agentId, instanceId: instance }) => {
      const current = await agents.get(agentId);
      assert.ok(
        current.construction.active.nodes.some(
          (n) => n.config.instanceId === instance,
        ),
      );
    },
    execute: async (owner, input, options) => {
      executions.push({ owner, input, options });
      options.signal?.throwIfAborted();
      return {
        status: "PARTIAL",
        diagnostic: "verified",
        attachment: {
          runId: randomUUID(),
          month: "2026-10",
          researchStatus: "PARTIAL",
          sha256: "a".repeat(64),
          sourcePath: "C:\\approved\\outputs\\2026-10\\chronoz_report.pdf",
        },
      };
    },
  };
  const chat = await service.create(root, {
    engineOnly: true,
    agentId: agent.id,
    creationId: randomUUID(),
  });
  const input = {
    conversationId: chat.id,
    requestId: randomUUID(),
    expectedContextId: chat.contextIdentity.id,
    userMessage: "Get my October 2026 CHronoZ macro report.",
    activeStationIds: [],
    matchMode: "any",
  };
  return { root, agents, agent, service, executions, p, chat, input, graph };
}
test("source-free native tool chat persists verified PDF attachments, provenance and idempotent replay across restart", async (t) => {
  const f = await chatFixture(t);
  assert.equal(f.chat.schemaVersion, 6);
  assert.deepEqual(f.chat.contextIdentity.sources, []);
  const result = await f.service.run(f.root, 77, f.input);
  const answer = result.conversation.messages.at(-1);
  assert.match(answer.content, /PDF retrieved and verified/);
  assert.equal(answer.engineReports.length, 1);
  assert.equal(answer.engineReports[0].researchStatus, "PARTIAL");
  assert.deepEqual(answer.sources, []);
  assert.equal(f.executions.length, 1);
  assert.equal(f.executions[0].options.chatRunId, result.run.runId);
  assert.equal(f.executions[0].input.agentId, f.agent.id);
  assert.equal(
    (await readModelRun(f.root, result.run.runId)).diagnostics.nativeTool,
    TOOL_NAME,
  );
  assert.equal(
    (await f.service.run(f.root, 77, f.input)).run.runId,
    result.run.runId,
  );
  assert.equal(f.executions.length, 1);
  const restarted = new ChatService({ agents: f.agents });
  assert.equal(
    (await restarted.resume(f.root, f.chat.id)).messages.at(-1).engineReports[0]
      .runId,
    answer.engineReports[0].runId,
  );
});
test("prose pretending to call tools creates no attachment; invalid arguments fail durably without executing", async (t) => {
  const f = await chatFixture(t);
  f.p.payload(native("ollama", {}, "text"));
  const result = await f.service.run(f.root, 77, f.input);
  assert.deepEqual(result.conversation.messages.at(-1).engineReports, []);
  assert.equal(f.executions.length, 0);
  f.p.payload(native("ollama", { command: "whoami" }));
  await assert.rejects(
    f.service.run(f.root, 77, { ...f.input, requestId: randomUUID() }),
    { code: "MODEL_INVALID_RESPONSE" },
  );
  const chat = await f.service.resume(f.root, f.chat.id);
  assert.equal(chat.attempts.at(-1).status, "failed");
  assert.equal(f.executions.length, 0);
});
test("an applied graph without an approved local bundle advertises no model tool", async (t) => {
  const f = await chatFixture(t);
  f.service.engines.registration = async () => null;
  await assert.rejects(
    f.service.run(f.root, 77, f.input),
    /approve the CHronoZ bundle/,
  );
  assert.equal(f.p.calls.length, 0);
  assert.equal(f.executions.length, 0);
});
test("source-free creation cannot smuggle research bindings or borrow another agent's Engine", async (t) => {
  const f = await chatFixture(t);
  for (const patch of [
    { contextBoxId: "anything" },
    { contextFile: {} },
    { includeAgentKnowledge: true },
  ])
    await assert.rejects(
      f.service.create(f.root, {
        engineOnly: true,
        agentId: f.agent.id,
        creationId: randomUUID(),
        ...patch,
      }),
      { code: "MODEL_INVALID_REQUEST" },
    );
  const other = await f.agents.create({
    name: "No Engine",
    creationId: randomUUID(),
  });
  await assert.rejects(
    f.service.create(f.root, {
      engineOnly: true,
      agentId: other.id,
      creationId: randomUUID(),
    }),
    /Apply an Engine binding/,
  );
  const graph = structuredClone(f.graph);
  graph.nodes.pop();
  graph.edges.pop();
  await f.agents.saveConstruction({
    id: f.agent.id,
    action: "apply",
    expectedRevision: 1,
    config: graph,
  });
  await assert.rejects(
    f.service.run(f.root, 77, f.input),
    /no applied Engine binding/,
  );
  assert.equal(f.p.calls.length, 0);
  assert.equal(f.executions.length, 0);
});
test("stopping native tool selection cancels the chat attempt and never dispatches an engine", async (t) => {
  const f = await chatFixture(t);
  let started;
  const ready = new Promise((resolve) => (started = resolve));
  f.p.provider.fetch = async (_, init) =>
    new Promise((_, reject) => {
      started();
      const stop = () => reject(new DOMException("Stopped", "AbortError"));
      init.signal.addEventListener("abort", stop, { once: true });
      if (init.signal.aborted) stop();
    });
  const running = f.service.run(f.root, 77, f.input);
  const rejected = assert.rejects(running, { code: "MODEL_CANCELLED" });
  await ready;
  assert.equal(await f.service.cancel(66, f.input.requestId), false);
  assert.equal(await f.service.cancel(77, f.input.requestId), true);
  await rejected;
  const saved = await f.service.resume(f.root, f.chat.id);
  assert.equal(saved.attempts.at(-1).status, "cancelled");
  assert.equal(f.executions.length, 0);
});
test("a reviewed research chat can retrieve a PDF without misrepresenting it as read evidence", async (t) => {
  const f = await chatFixture(t);
  f.service.knowledge = require("../station-service.cjs");
  await fs.writeFile(path.join(f.root, "a.md"), "Reviewed synthetic evidence.");
  const box = await f.service.editBox(f.root, {
    action: "create",
    name: "Evidence",
    paths: ["a.md"],
  });
  const chat = await f.service.create(f.root, {
    contextBoxId: box.id,
    creationId: randomUUID(),
    agentId: f.agent.id,
  });
  const result = await f.service.run(f.root, 77, {
    ...f.input,
    conversationId: chat.id,
    expectedContextId: chat.contextIdentity.id,
  });
  assert.equal(result.conversation.messages.at(-1).engineReports.length, 1);
  assert.deepEqual(result.run.sourcesActuallyRead, []);
  assert.equal(result.run.contextIdentity.sources.length, 1);
  assert.equal(
    (await f.service.resume(f.root, chat.id)).messages.at(-1).engineReports
      .length,
    1,
  );
  f.p.payload(native("ollama", {}, "text"));
  f.p.provider.prepare = async () => {};
  const researchRequests = [];
  f.p.provider.complete = async (request) => {
    researchRequests.push(request);
    return {
      model: request.model,
      provider: "ollama",
      content: '{"answer":"Source answer."}',
      finishReason: "stop",
      createdAt: new Date().toISOString(),
      usage: null,
    };
  };
  const research = await f.service.run(f.root, 77, {
    ...f.input,
    requestId: randomUUID(),
    conversationId: chat.id,
    expectedContextId: chat.contextIdentity.id,
    userMessage: "Summarize the reviewed source.",
  });
  assert.equal(research.run.sourcesActuallyRead[0].relativePath, "a.md");
  assert.equal(
    research.run.diagnostics.engineToolSelection.nativeFunctionRequested,
    false,
  );
  assert.ok(researchRequests.length > 0);
  await assert.rejects(
    f.service.switchBox(f.root, {
      conversationId: f.chat.id,
      contextBoxId: box.id,
    }),
    /Start a new research chat/,
  );
});
