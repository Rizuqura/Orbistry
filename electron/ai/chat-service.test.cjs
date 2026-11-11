const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const stations = require("../station-service.cjs");
const { ChatService } = require("./chat-service.cjs");
const { ModelRegistry, DEFAULTS } = require("./model-registry.cjs");
const { readModelRun } = require("./run-store.cjs");
const { budgetHistory } = require("./history-budget.cjs");
const { answerPrefix, validateAnswer } = require("./response-validation.cjs");

const scopeInput = { activeStationIds: [], matchMode: "any" };
const repeatedSummary =
  "The document describes the company, its customer segments, trading products, custody services, wallet infrastructure, revenue sources, research observations, and operating risks. It provides an overview of the business and its financial metrics.";

test("repeat requests, repeated questions, and short factual answers remain valid", () => {
  const history = [
    { role: "user", content: "Summarize this." },
    { role: "assistant", content: repeatedSummary },
  ];
  const response = {
    content: JSON.stringify({ answer: repeatedSummary }),
    finishReason: "stop",
  };
  for (const question of [
    "Summarize this.",
    "Repeat the previous answer verbatim.",
  ])
    assert.equal(validateAnswer(response, question, history), repeatedSummary);
  assert.equal(
    validateAnswer(
      { content: '{"answer":"25%"}', finishReason: "stop" },
      "What percentage?",
      [
        { role: "user", content: "What allocation?" },
        { role: "assistant", content: "25%" },
      ],
    ),
    "25%",
  );
});
const { ModelRuntimeError } = require("./model-errors.cjs");
async function fixture(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-chat-test-"));
  t.after(async () => {
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  });
  const calls = [];
  const provider = {
    listModels: async () => [
      { name: "qwen3:4b", size: 2000, capabilities: ["completion"] },
      { name: "qwen3:1.7b", size: 1000, capabilities: ["completion"] },
    ],
    getStatus: async () => ({
      online: true,
      error: null,
      models: await provider.listModels(),
    }),
    complete: async (request) => {
      calls.push(request);
      if (request.format?.properties?.queries)
        return {
          model: request.model,
          provider: "ollama",
          finishReason: "stop",
          content: JSON.stringify({
            queries: [{ sourceId: "numbers.csv", operation: "profile" }],
          }),
          usage: null,
        };
      request.onContent?.('{"answer":"Source answer."}');
      return {
        model: request.model,
        provider: "ollama",
        content: '{"answer":"Source answer."}',
        finishReason: "stop",
        createdAt: new Date().toISOString(),
        usage: null,
      };
    },
  };
  const registry = new ModelRegistry(provider, path.join(root, "settings"));
  await registry.save({ modelId: "qwen3:4b" });
  const service = new ChatService({ provider, registry });
  await fs.writeFile(
    path.join(root, "a.md"),
    "The A source only contains ALPHA.",
  );
  await fs.writeFile(
    path.join(root, "b.md"),
    "The B source only contains BETA.",
  );
  await stations.addContext(root, ["a.md"]);
  const conversation = await createBound(service, root, scopeInput);
  const input = (chat = conversation, extra = {}) => ({
    ...scopeInput,
    conversationId: chat.id,
    requestId: randomUUID(),
    userMessage: "Summarize this.",
    expectedContextId: chat.contextIdentity.id,
    ...extra,
  });
  return { root, calls, provider, registry, service, conversation, input };
}

test("resubmitting the latest failed prompt reuses its user message across repeated errors and recovery", async (t) => {
  const f = await fixture(t);
  const complete = f.provider.complete;
  f.provider.complete = async () => {
    throw new ModelRuntimeError("MODEL_OFFLINE", "Synthetic failure");
  };
  for (let i = 0; i < 3; i++)
    await assert.rejects(f.service.run(f.root, 1, f.input()), {
      code: "MODEL_OFFLINE",
    });
  let chat = (await f.service.list(f.root))[0];
  assert.equal(chat.messages.length, 1);
  assert.equal(new Set(chat.attempts.map((a) => a.userMessageId)).size, 1);
  assert.equal(chat.attempts.length, 3);
  f.provider.complete = complete;
  const result = await f.service.run(f.root, 1, f.input());
  assert.equal(result.conversation.messages.length, 2);
  assert.equal(result.conversation.attempts.length, 4);
  // The same text after success is a new, intentionally submitted turn.
  assert.equal(
    (await f.service.run(f.root, 1, f.input())).conversation.messages.length,
    4,
  );
});

test("deleting answers or whole turns persists without rewriting immutable runs or other turns", async (t) => {
  const f = await fixture(t);
  const first = await f.service.run(f.root, 1, f.input());
  const second = await f.service.run(
    f.root,
    1,
    f.input(undefined, { userMessage: "Another question." }),
  );
  const record = await readModelRun(f.root, first.run.runId);
  let chat = await f.service.deleteMessage(f.root, {
    conversationId: first.conversation.id,
    messageId: first.conversation.messages[1].id,
  });
  assert.equal(chat.messages.length, 3);
  assert.equal(chat.attempts.length, 2);
  const restarted = new ChatService({
    provider: f.provider,
    registry: f.registry,
  });
  chat = (await restarted.list(f.root))[0];
  assert.equal(chat.messages.length, 3);
  chat = await restarted.deleteMessage(f.root, {
    conversationId: chat.id,
    messageId: second.conversation.messages[2].id,
  });
  assert.equal(chat.messages.length, 1);
  assert.equal(chat.attempts.length, 1);
  assert.deepEqual(await readModelRun(f.root, first.run.runId), record);
  assert.equal(
    (await readModelRun(f.root, second.run.runId)).status,
    "succeeded",
  );
  // Repeated deletion is harmless, and the final prompt can also be removed.
  await restarted.deleteMessage(f.root, {
    conversationId: chat.id,
    messageId: second.conversation.messages[2].id,
  });
  chat = await restarted.deleteMessage(f.root, {
    conversationId: chat.id,
    messageId: chat.messages[0].id,
  });
  assert.deepEqual(chat.messages, []);
  assert.deepEqual(chat.attempts, []);
  await assert.rejects(
    restarted.deleteMessage(f.root, {
      conversationId: "../escape",
      messageId: "invalid",
    }),
    { code: "MODEL_INVALID_REQUEST" },
  );
});

test("edited prompts after failures create independent turns and failed turns can be deleted", async (t) => {
  const f = await fixture(t);
  f.provider.complete = async () => {
    throw new ModelRuntimeError("MODEL_OFFLINE", "Synthetic failure");
  };
  await assert.rejects(f.service.run(f.root, 1, f.input()));
  await assert.rejects(
    f.service.run(
      f.root,
      1,
      f.input(undefined, { userMessage: "A different question." }),
    ),
  );
  const before = (await f.service.list(f.root))[0];
  assert.equal(before.messages.length, 2);
  const after = await f.service.deleteMessage(f.root, {
    conversationId: before.id,
    messageId: before.messages[1].id,
  });
  assert.equal(after.messages.length, 1);
  assert.equal(after.attempts.length, 1);
});

test("cancellation is owner-bound, prevents duplicates, and permits an immediate retry", async (t) => {
  const f = await fixture(t);
  const normal = f.provider.complete;
  let entered;
  const started = new Promise((resolve) => {
    entered = resolve;
  });
  f.provider.complete = (request) =>
    new Promise((_, reject) => {
      entered();
      request.signal.addEventListener(
        "abort",
        () => reject(request.signal.reason),
        { once: true },
      );
    });
  const input = f.input();
  const running = f.service.run(f.root, 1, input);
  const rejected = assert.rejects(running, { code: "MODEL_CANCELLED" });
  await started;
  assert.equal(await f.service.cancel(2, input.requestId), false);
  await assert.rejects(f.service.run(f.root, 1, input), { code: "MODEL_BUSY" });
  await f.service.cancel(1, input.requestId);
  await rejected;
  const chat = (await f.service.list(f.root))[0];
  assert.equal(chat.attempts[0].status, "cancelled");
  assert.equal(chat.messages.length, 1);
  f.provider.complete = normal;
  const result = await f.service.run(
    f.root,
    1,
    f.input(chat, { retryOf: input.requestId }),
  );
  assert.equal(result.conversation.messages.length, 2);
});

test("restart recovers only pending references and deletion retains audits without resurrection", async (t) => {
  const f = await fixture(t);
  const result = await f.service.run(f.root, 1, f.input());
  const { store } = await f.service.store(f.root);
  await store.update(f.conversation.id, (value) => {
    value.messages = value.messages.filter(
      (message) => message.role === "user",
    );
    value.attempts[0].status = "pending";
  });
  const restarted = new ChatService({
    provider: f.provider,
    registry: f.registry,
  });
  assert.equal((await restarted.list(f.root))[0].messages.length, 2);
  await restarted.remove(f.root, f.conversation.id);
  assert.equal(
    (await readModelRun(f.root, result.run.runId)).response,
    "Source answer.",
  );
  assert.deepEqual(
    await new ChatService({ provider: f.provider, registry: f.registry }).list(
      f.root,
    ),
    [],
  );
});

test("unrecorded pending turns become interrupted and corrupt snapshots remain intact", async (t) => {
  const f = await fixture(t);
  const { store } = await f.service.store(f.root);
  await store.update(f.conversation.id, (value) => {
    const userMessageId = randomUUID();
    value.messages.push({
      id: userMessageId,
      conversationId: value.id,
      role: "user",
      content: "Question",
      createdAt: new Date().toISOString(),
    });
    value.attempts.push({
      requestId: randomUUID(),
      runId: randomUUID(),
      userMessageId,
      status: "pending",
      contextIdentity: value.contextIdentity,
    });
  });
  const restarted = new ChatService({
    provider: f.provider,
    registry: f.registry,
  });
  assert.equal(
    (await restarted.list(f.root))[0].attempts[0].status,
    "interrupted",
  );
  await fs.writeFile(store.file(f.conversation.id), "broken");
  await assert.rejects(restarted.list(f.root), {
    code: "MODEL_STORAGE_INVALID",
  });
  assert.equal(
    await fs.readFile(store.file(f.conversation.id), "utf8"),
    "broken",
  );
});

test("budgeting drops whole exchanges and never truncates source", () => {
  const base = [{ role: "user", content: "a".repeat(1000) }];
  const history = Array.from({ length: 24 }, (_, i) => ({
    role: i % 2 ? "assistant" : "user",
    content: "h".repeat(600),
  }));
  const result = budgetHistory(base, history, {
    contextWindow: 2048,
    outputLimit: 512,
  });
  assert.equal(result.history.length % 2, 0);
  assert.ok(result.diagnostics.droppedExchanges > 0);
  assert.throws(
    () => budgetHistory([{ content: "a".repeat(20_000) }], [], DEFAULTS),
    { code: "MODEL_CONTEXT_TOO_LARGE" },
  );
});

test("answer decoding hides framing and thinking; final validation rejects incomplete results", () => {
  assert.equal(answerPrefix('{"answer":"Hello \\uD83D'), "");
  assert.equal(answerPrefix('{"answer":"Hello \\uD83D\\uDE00!"}'), "Hello 😀!");
  assert.equal(
    answerPrefix('{"answer":"I need to inspect the document first."}'),
    "",
  );
  for (const content of [
    '{"answer":""}',
    '{"answer":"I need to inspect the file."}',
    '{"answer":"ok","extra":true}',
    "invalid",
  ])
    assert.throws(() => validateAnswer({ content, finishReason: "stop" }));
  assert.throws(() =>
    validateAnswer({ content: '{"answer":"ok"}', finishReason: "length" }),
  );
});

test("snapshot failure after audit publication recovers exactly once without another model call", async (t) => {
  const f = await fixture(t);
  const { store } = await f.service.store(f.root);
  const write = store.write.bind(store);
  store.write = async (value) => {
    if (value.attempts.some((attempt) => attempt.status === "succeeded"))
      throw Object.assign(new Error("Simulated disk failure"), {
        code: "MODEL_STORAGE_FAILED",
      });
    return write(value);
  };
  await assert.rejects(f.service.run(f.root, 1, f.input()), {
    code: "MODEL_STORAGE_FAILED",
  });
  const restarted = new ChatService({
    provider: f.provider,
    registry: f.registry,
  });
  assert.equal((await restarted.list(f.root))[0].messages.length, 2);
  assert.equal(f.calls.length, 1);
  assert.equal((await restarted.list(f.root))[0].messages.length, 2);
});

test("knowledge changes reserve admission before awaiting cancellation", async (t) => {
  const f = await fixture(t);
  let release;
  const gate = new Promise((resolve) => {
    release = resolve;
  });
  const changing = f.service.changeKnowledge(async () => {
    await gate;
  });
  await assert.rejects(f.service.run(f.root, 1, f.input()), {
    code: "MODEL_BUSY",
  });
  await assert.rejects(createBound(f.service, f.root, scopeInput), {
    code: "MODEL_BUSY",
  });
  release();
  await changing;
  await f.service.run(f.root, 1, f.input());
});

test("vault changes wait for in-flight mutations and keep admission reserved through the queue", async (t) => {
  const f = await fixture(t);
  const order = [];
  let release;
  const gate = new Promise((resolve) => {
    release = resolve;
  });
  const scanning = f.service.exclusive(async () => {
    order.push("scan");
    await gate;
  });
  const switching = f.service.changeKnowledge(async () => {
    order.push("switch");
    await assert.rejects(f.service.run(f.root, 1, f.input()), {
      code: "MODEL_BUSY",
    });
    return "new vault";
  });
  const refreshing = f.service.changeKnowledge(async () => {
    order.push("refresh");
  });
  // Attach handlers before releasing the blocked scan, including on regressions.
  const results = Promise.allSettled([scanning, switching, refreshing]);
  await assert.rejects(createBound(f.service, f.root, scopeInput), {
    code: "MODEL_BUSY",
  });
  release();
  const settled = await results;
  assert.deepEqual(
    settled.map((result) => result.status),
    ["fulfilled", "fulfilled", "fulfilled"],
  );
  assert.equal(settled[1].value, "new vault");
  assert.deepEqual(order, ["scan", "switch", "refresh"]);
  await f.service.run(f.root, 1, f.input());
});

test("a failed queued operation does not block the next vault change", async (t) => {
  const f = await fixture(t);
  const failing = f.service.changeKnowledge(async () => {
    throw new Error("Unreadable folder");
  });
  const switching = f.service.changeKnowledge(async () => "recovered");
  const results = await Promise.allSettled([failing, switching]);
  assert.equal(results[0].status, "rejected");
  assert.deepEqual(results[1], { status: "fulfilled", value: "recovered" });
  await f.service.run(f.root, 1, f.input());
});

test("queued vault changes wait for generation cancellation cleanup", async (t) => {
  const f = await fixture(t);
  let started;
  let aborted;
  let release;
  const generating = new Promise((resolve) => {
    started = resolve;
  });
  const cancelling = new Promise((resolve) => {
    aborted = resolve;
  });
  const cleanup = new Promise((resolve) => {
    release = resolve;
  });
  f.provider.complete = (request) =>
    new Promise((_, reject) => {
      started();
      request.signal.addEventListener(
        "abort",
        () => {
          aborted();
          void cleanup.then(() => reject(request.signal.reason));
        },
        { once: true },
      );
    });
  const stopped = assert.rejects(f.service.run(f.root, 1, f.input()), {
    code: "MODEL_CANCELLED",
  });
  await generating;
  let switched = false;
  const changing = f.service.changeKnowledge(async () => {
    switched = true;
    assert.equal(f.service.active, null);
    assert.equal(
      (await f.service.list(f.root))[0].attempts[0].status,
      "cancelled",
    );
  });
  await cancelling;
  assert.equal(switched, false);
  await assert.rejects(f.service.run(f.root, 1, f.input()), {
    code: "MODEL_BUSY",
  });
  release();
  await Promise.all([stopped, changing]);
  assert.equal(switched, true);
});

test("model registry preserves missing selections and validates unknown model capabilities", async (t) => {
  const f = await fixture(t);
  f.provider.listModels = async () => [
    { name: "other:small", capabilities: ["embedding"], size: 100 },
  ];
  const state = await f.registry.state();
  assert.equal(state.settings.modelId, "qwen3:4b");
  assert.equal(state.models[0].profile, "unprofiled");
  await assert.rejects(f.registry.save({ modelId: "other:small" }), {
    code: "MODEL_INVALID_REQUEST",
  });
  await assert.rejects(f.registry.validateSelection(await f.registry.read()), {
    code: "MODEL_NOT_FOUND",
  });
});

test("a timeout after partial output never starts a second generation", async (t) => {
  const f = await fixture(t);
  let calls = 0;
  f.provider.complete = async (request) => {
    calls++;
    request.onContent('{"answer":"Partial');
    throw new ModelRuntimeError("MODEL_TIMEOUT", "Stream stalled");
  };
  await assert.rejects(f.service.run(f.root, 1, f.input()), {
    code: "MODEL_TIMEOUT",
  });
  assert.equal(calls, 1);
  assert.equal(f.service.active, null);
});

test("missing models never trigger an implicit pull or generation", async (t) => {
  const f = await fixture(t);
  let pulls = 0;
  f.provider.pull = async () => {
    pulls++;
  };
  f.provider.listModels = async () => [];
  for (let i = 0; i < 2; i++)
    await assert.rejects(f.service.run(f.root, 1, f.input()), {
      code: "MODEL_NOT_FOUND",
    });
  assert.equal(pulls, 0);
  assert.equal(f.calls.length, 0);
});

test("repeated context abstention never invokes answer repair", () => {
  const answer =
    "CONTEXT INSUFFICIENT: " +
    "The approved source does not establish the requested information. ".repeat(
      4,
    );
  assert.equal(
    validateAnswer(
      { finishReason: "stop", content: JSON.stringify({ answer }) },
      "A different question",
      [
        { role: "user", content: "Earlier question" },
        { role: "assistant", content: answer },
      ],
    ),
    answer.trim(),
  );
});

async function createBound(service, root, _scope) {
  const box = await service.saveBox(root, {
    name: "Test " + require("node:crypto").randomUUID(),
  });
  return service.create(root, {
    contextBoxId: box.id,
    creationId: require("node:crypto").randomUUID(),
  });
}
