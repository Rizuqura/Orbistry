const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const {
  defaultConfig,
  validateConfig,
} = require("./llm-front-office/experiment-contracts.cjs");
const {
  normalizeRequest,
  conversationMessages,
  buildRequirements,
} = require("./llm-front-office/request-intake.cjs");
const { checkBudget } = require("./llm-front-office/token-budget.cjs");
const { routeModels } = require("./llm-front-office/model-router.cjs");
const { sortProfiles } = require("./llm-front-office/catalog-sort.cjs");
const {
  reliabilityProfile,
} = require("./llm-front-office/long-context-reliability.cjs");
const { ReliabilityController } = require("./llm-front-office/reliability.cjs");
const {
  createLLMClient,
  consumeStream,
  consumeCompletion,
} = require("./llm-front-office/provider-gateway.cjs");
const {
  processResponse,
} = require("./llm-front-office/response-processor.cjs");
const { FrontOfficeService } = require("./llm-front-office/service.cjs");
const { ChatService } = require("./chat-service.cjs");
const { ModelRuntimeError } = require("./model-errors.cjs");
const { readModelRun } = require("./run-store.cjs");
const { publicError } = require("./llm-front-office/errors.cjs");
const { retainedTraces } = require("./llm-front-office/telemetry-store.cjs");

function profile(overrides = {}) {
  return {
    deploymentId: "openrouter:example/model",
    modelId: "example/model",
    logicalModelId: "example/model",
    providerId: "openrouter",
    label: "Example",
    inputModalities: ["text"],
    outputModalities: ["text"],
    tools: "unknown",
    vision: "unknown",
    structuredOutput: "unknown",
    supportedParameters: null,
    contextTokens: 32768,
    maxOutputTokens: 8192,
    inputUsdPerMillion: 1,
    outputUsdPerMillion: 2,
    source: {
      kind: "provider-catalog",
      url: "https://openrouter.ai/api/v1/models",
      checkedAt: new Date().toISOString(),
    },
    credentialConfigured: true,
    ...overrides,
  };
}
function config() {
  const c = defaultConfig();
  c.enabled = true;
  c.routing.selectedDeploymentId = "openrouter:example/model";
  c.generation.maxOutputTokens = 128;
  c.reliability.backoffMs = 0;
  return c;
}
function requirements(c = config()) {
  return buildRequirements(
    { task: "general" },
    [{ role: "user", content: "Hello" }],
    c,
    c.routing.selectedDeploymentId,
  );
}
const answer = (model = profile(), content = "Fixture answer") => ({
  provider: model.providerId,
  model: model.modelId,
  content,
  finishReason: "stop",
  usage: { promptTokens: 10, completionTokens: 2, totalDurationNs: 1 },
});

test("canonical-only output-cap catalog remains eligible and is sent without dropping the cap", async () => {
  for (const cap of ["max_completion_tokens", "max_tokens"]) {
    const c = config();
    delete c.generation.streaming; // Existing saved configs retain streaming.
    const p = profile({ supportedParameters: ["temperature", cap] });
    assert.equal(routeModels(requirements(c), [p], [], c).primary.model, p);
    let body;
    const client = createLLMClient({
      model: p,
      transport: "direct",
      config: c,
      registry: {
        providerFor: () => ({
          request: async (_, init, consume) => {
            body = JSON.parse(init.body);
            return consume(sse(streamEvents()), () => {});
          },
        }),
      },
    });
    await client.complete({ messages: [{ role: "user", content: "Hello" }] });
    assert.equal(body[cap], 128);
    assert.equal(
      body[cap === "max_tokens" ? "max_completion_tokens" : "max_tokens"],
      undefined,
    );
    assert.equal(body.stream, true);
  }
  assert.throws(
    () =>
      routeModels(
        requirements(),
        [profile({ supportedParameters: ["temperature"] })],
        [],
        config(),
      ),
    { code: "MODEL_UNAVAILABLE" },
  );
});

test("nonstreaming completion preserves visible text and usage without invented deltas or TTFT", async () => {
  for (const content of [
    "Hello",
    [
      { type: "text", text: "Hel" },
      { type: "text", text: "lo" },
    ],
  ]) {
    const stages = [];
    const result = await consumeCompletion(
      Response.json({
        model: "example/model",
        choices: [{ message: { content }, finish_reason: "stop" }],
        usage: {
          prompt_tokens: 12,
          completion_tokens: 4,
          completion_tokens_details: { reasoning_tokens: 1 },
        },
      }),
      () => {},
      {
        onContent: () => assert.fail("No synthetic stream delta"),
        onStage: (...args) => stages.push(args),
      },
      "openrouter",
      "example/model",
    );
    assert.equal(result.content, "Hello");
    assert.equal(result.usage.promptTokens, 12);
    assert.equal(result.reasoningTokens, 1);
    assert.equal(result.diagnostics.firstTokenMs, null);
    assert.deepEqual(stages, [
      ["FIRST_CONTENT_RECEIVED", "buffered", { contentCharacters: 5 }],
    ]);
    assert.equal(processResponse(result, config().generation).valid, true);
  }
  const empty = await consumeCompletion(
    Response.json({
      choices: [{ message: { content: null }, finish_reason: "stop" }],
    }),
    () => {},
    {},
    "openrouter",
    "example/model",
  );
  assert.throws(() => processResponse(empty, config().generation), {
    code: "MODEL_INVALID_RESPONSE",
  });
  const c = config();
  c.generation.streaming = false;
  const client = createLLMClient({
    model: profile(),
    transport: "direct",
    config: c,
    registry: {
      providerFor: () => ({
        request: async (_, init, consume) => {
          assert.equal(JSON.parse(init.body).stream, false);
          return consume(
            Response.json({
              choices: [
                { message: { content: "Hello" }, finish_reason: "stop" },
              ],
            }),
            () => {},
          );
        },
      }),
    },
  });
  assert.equal(
    (await client.complete({ messages: [{ role: "user", content: "Hello" }] }))
      .content,
    "Hello",
  );
});

test("native experimental gateway uses the NVIDIA deployment thinking switch too", async () => {
  const { NvidiaProvider } = require("./providers/nvidia-provider.cjs");
  const c = config();
  for (const modelId of [
    "nvidia/nemotron-3.5-lightning-30b-a3b",
    "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
  ]) {
    const model = profile({
      providerId: "nvidia",
      modelId,
    });
    const adapter = new NvidiaProvider({
      credentials: { get: async () => "synthetic-only" },
      fetchImpl: async (_, init) => {
        const body = JSON.parse(init.body);
        assert.deepEqual(body.chat_template_kwargs, { enable_thinking: false });
        assert.equal(body.max_tokens, 128);
        assert.deepEqual(body.messages, [{ role: "user", content: "Hello" }]);
        return sse(streamEvents());
      },
    });
    const client = createLLMClient({
      model,
      transport: "direct",
      config: c,
      registry: { providerFor: () => adapter },
    });
    assert.equal(
      (
        await client.complete({
          messages: [{ role: "user", content: "Hello" }],
        })
      ).content,
      "Hello α",
    );
  }
});

async function fixture(t, behavior) {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-front-office-"),
  );
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const calls = [];
  const registry = {
    file: path.join(root, "app", "model-settings.json"),
    providerFor: () => ({
      listModels: async () => [
        {
          name: "example/model",
          displayName: "Example",
          contextLength: 32768,
          outputLimit: 8192,
          frontOfficeMetadata: {
            inputUsdPerMillion: 1,
            outputUsdPerMillion: 2,
          },
        },
      ],
    }),
  };
  const credentials = {
    status: async () => ({ configured: true }),
    get: async () => "synthetic-fixture-credential",
  };
  const normal = new ChatService({
    registry,
    agents: { get: () => assert.fail("No agent access in experiment") },
    knowledge: {
      prepareBrainScope: () => assert.fail("No context access in experiment"),
    },
  });
  const service = new FrontOfficeService({
    directory: path.dirname(registry.file),
    service: normal,
    registry,
    credentials,
    clientFactory: ({ model }) => ({
      complete: async (request) => {
        calls.push(request);
        return behavior
          ? behavior(request, model, calls.length)
          : answer(model);
      },
    }),
  });
  await service.saveConfig(config());
  await service.refresh("openrouter");
  const conversation = await service.create(root);
  const input = (text) => ({
    conversationId: conversation.id,
    requestId: randomUUID(),
    userMessage: text,
  });
  return {
    root,
    service,
    normal,
    registry,
    credentials,
    calls,
    conversation,
    input,
  };
}

test("experiment intake rejects unknown context/persona/tool fields and oversized input", () => {
  const base = {
    conversationId: "chat",
    requestId: "request",
    userMessage: "Hello",
  };
  for (const extra of [
    { contextBoxId: "private" },
    { system: "persona" },
    { tools: [] },
    { messages: [] },
    { userMessage: "x".repeat(200001) },
    { userMessage: " " },
    { conversationId: "../other" },
  ])
    assert.throws(() => normalizeRequest({ ...base, ...extra }), {
      code: "MODEL_INVALID_REQUEST",
    });
  assert.equal(normalizeRequest(base).transport, "direct");
});

test("configuration validates bounds, loopback-only URL, unknown fields and JSON schema subset", () => {
  for (const change of [
    (c) => (c.apiKey = "PRIVATE"),
    (c) => (c.reliability.maxAttempts = 100),
    (c) => (c.gateway.baseUrl = "https://example.com/v1"),
    (c) => (c.gateway.baseUrl = "http://127.0.0.1:4000/v1/../other"),
    (c) => (c.gateway.baseUrl = "http://127.0.0.1:99999/v1"),
    (c) =>
      (c.generation.jsonSchema = { type: "object", $ref: "http://private" }),
    (c) =>
      (c.generation.jsonSchema = { type: "object", properties: { a: null } }),
  ]) {
    const c = config();
    change(c);
    assert.throws(() => validateConfig(c), { code: "MODEL_INVALID_REQUEST" });
  }
  const fresh = defaultConfig();
  fresh.routing.allowedProviders.pop();
  assert.equal(defaultConfig().routing.allowedProviders.length, 2);
});

test("requirements are deterministic with no hidden classification/model calls", () => {
  const r = requirements();
  assert.equal(r.needsTools, false);
  assert.equal(r.minimumReliability, null);
  assert.equal(r.latencyTarget, null);
  assert.equal(r.requiredModalities[0], "text");
  assert.ok(r.expectedInputTokens > 0);
});

test("budget rejects complete-history overflow, output overflow and unverifiable cost caps", () => {
  const c = config();
  const r = requirements(c);
  assert.equal(
    checkBudget({ ...r, expectedInputTokens: 9000 }, profile(), c).eligible,
    false,
  );
  assert.equal(
    checkBudget(r, profile({ maxOutputTokens: 64 }), c).eligible,
    false,
  );
  c.budget.maxEstimatedUsd = 0.01;
  r.costCap = 0.01;
  assert.equal(
    checkBudget(r, profile({ inputUsdPerMillion: null }), c).eligible,
    false,
  );
  assert.equal(
    checkBudget(
      r,
      profile({ inputUsdPerMillion: 0, outputUsdPerMillion: 0 }),
      c,
    ).estimatedCostUsd,
    0,
  );
});

test("manual routing preserves the exact deployment or rejects; never uses another model", () => {
  const c = config();
  const p = profile();
  const other = profile({
    deploymentId: "nvidia:example/other",
    providerId: "nvidia",
    modelId: "example/other",
  });
  assert.equal(
    routeModels(requirements(c), [other, p], [], c).primary.model.deploymentId,
    p.deploymentId,
  );
  assert.throws(
    () =>
      routeModels(
        requirements(c),
        [other, { ...p, credentialConfigured: false }],
        [],
        c,
      ),
    { code: "MODEL_UNAVAILABLE" },
  );
});

test("router rejects unknown JSON, unsupported parameters, closed provider policy and unhealthy circuits", () => {
  const c = config();
  const r = requirements(c);
  r.requiresJsonSchema = true;
  assert.throws(() => routeModels(r, [profile()], [], c), {
    code: "MODEL_UNAVAILABLE",
  });
  for (const p of [
    profile({ supportedParameters: ["temperature"] }),
    profile({ inputModalities: [] }),
    profile({ credentialConfigured: false }),
  ])
    assert.throws(() => routeModels(requirements(c), [p], [], c), {
      code: "MODEL_UNAVAILABLE",
    });
  assert.throws(
    () => routeModels(requirements(c), [profile()], [], c, () => false),
    { code: "MODEL_UNAVAILABLE" },
  );
  c.routing.allowedProviders = ["nvidia"];
  assert.throws(() => routeModels(requirements(c), [profile()], [], c), {
    code: "MODEL_UNAVAILABLE",
  });
});

test("auto routing and fallback require explicit policy and deterministic ties", () => {
  const c = config();
  c.routing.mode = "auto";
  const r = requirements(c);
  const p = profile();
  const alternate = profile({
    providerId: "nvidia",
    deploymentId: "nvidia:example/model",
  });
  const x = routeModels(r, [p, alternate], [], c);
  const y = routeModels(r, [alternate, p], [], c);
  assert.equal(x.primary.model.deploymentId, y.primary.model.deploymentId);
  assert.equal(x.fallback.length, 0);
  c.routing.allowFallback = true;
  assert.equal(routeModels(r, [p, alternate], [], c).fallback.length, 0);
  c.routing.allowCrossProviderFallback = true;
  assert.equal(routeModels(r, [p, alternate], [], c).fallback.length, 1);
  assert.throws(
    () => routeModels(r, [profile({ contextTokens: null })], [], c),
    { code: "MODEL_UNAVAILABLE" },
  );
});

test("long-context strict/warn/allow policies distinguish unverified metadata from failure", () => {
  const c = config();
  assert.match(
    routeModels(requirements(c), [profile()], [], c).warnings.join(" "),
    /unverified/,
  );
  c.routing.unverifiedContext = "strict";
  assert.throws(() => routeModels(requirements(c), [profile()], [], c), {
    code: "MODEL_UNAVAILABLE",
  });
  c.routing.unverifiedContext = "allow";
  assert.equal(
    routeModels(requirements(c), [profile()], [], c).warnings.length,
    0,
  );
});

test("evidence ignores stale/version mismatches and requires position coverage without extrapolation", () => {
  const p = profile();
  const base = {
    deploymentId: p.deploymentId,
    modelVersion: p.modelId,
    task: "retrieval",
    benchmark: "needle",
    dataset: "synthetic",
    methodology: "Exact needle; repeated trials",
    repetitions: 3,
    score: 1,
    successRate: 1,
    contextTokens: 4096,
    contextMeasurement: "provider-reported",
    transport: "direct",
    checkedAt: new Date().toISOString(),
    medianTtftMs: 20,
    medianE2eMs: 50,
    uncertainty: 0.1,
  };
  assert.equal(
    reliabilityProfile(p, [{ ...base, position: "middle" }], "retrieval", 30)
      .testedContextTokens,
    null,
  );
  const rows = ["beginning", "middle", "end"].map((position) => ({
    ...base,
    position,
  }));
  assert.equal(
    reliabilityProfile(p, rows, "retrieval", 30).testedContextTokens,
    4096,
  );
  assert.equal(
    reliabilityProfile(
      p,
      rows.map((r) => ({ ...r, modelVersion: "other/model" })),
      "retrieval",
      30,
    ).status,
    "unverified",
  );
  assert.equal(reliabilityProfile(p, rows, "general", 30).status, "unverified");
  assert.equal(
    reliabilityProfile(
      p,
      rows.map((r) => ({ ...r, checkedAt: "2020-01-01T00:00:00Z" })),
      "retrieval",
      30,
    ).status,
    "unverified",
  );
});

test("catalog sorts missing scores last and uses capability/capacity then stable ID ties", () => {
  const a = profile({ deploymentId: "openrouter:a/model" });
  const b = profile({ deploymentId: "openrouter:b/model", vision: true });
  assert.equal(sortProfiles([a, b])[0].deploymentId, b.deploymentId);
  assert.equal(
    sortProfiles(
      [
        { ...a, evidence: { qualityScore: 0.9 } },
        { ...b, evidence: { qualityScore: null } },
      ],
      "quality",
    )[0].deploymentId,
    a.deploymentId,
  );
  assert.equal(sortProfiles([b, a], "price")[0].deploymentId, a.deploymentId);
});

test("JSON validation checks nested schema and never performs a repair call", () => {
  const g = {
    format: "json",
    jsonSchema: {
      type: "object",
      properties: { answer: { type: "integer" } },
      required: ["answer"],
      additionalProperties: false,
    },
  };
  assert.equal(
    processResponse({ content: '{"answer":7}', finishReason: "stop" }, g).valid,
    true,
  );
  assert.equal(
    processResponse({ content: '{"answer":"7"}', finishReason: "stop" }, g)
      .valid,
    false,
  );
  assert.equal(
    processResponse({ content: "not JSON", finishReason: "stop" }, g).reason,
    "invalid_json",
  );
  assert.throws(
    () => processResponse({ content: "partial", finishReason: "length" }, g),
    { code: "MODEL_INVALID_RESPONSE" },
  );
});

test("reliability retries only transient errors, bounds attempts and never retries partial streams", async () => {
  const c = config();
  const plan = routeModels(requirements(c), [profile()], [], c);
  for (const code of [
    "AUTH_INVALID",
    "MODEL_INVALID_REQUEST",
    "REMOTE_SERVER_ERROR",
  ]) {
    let count = 0;
    const control = new ReliabilityController();
    await assert.rejects(
      control.execute(plan, c, async () => {
        count++;
        throw new ModelRuntimeError(code, "PRIVATE");
      }),
      { code },
    );
    assert.equal(count, code === "REMOTE_SERVER_ERROR" ? 2 : 1);
  }
  let count = 0;
  await assert.rejects(
    new ReliabilityController().execute(plan, c, async (_, signal, partial) => {
      count++;
      partial();
      throw new ModelRuntimeError("REMOTE_SERVER_ERROR", "PRIVATE");
    }),
    { code: "REMOTE_SERVER_ERROR" },
  );
  assert.equal(count, 1);
});

test("circuit cooldown blocks unhealthy endpoints and permits later recovery", async () => {
  let now = 0;
  const control = new ReliabilityController(() => now);
  const c = config();
  c.reliability.circuitThreshold = 1;
  const plan = routeModels(requirements(c), [profile()], [], c);
  await assert.rejects(
    control.execute(plan, c, async () => {
      throw new ModelRuntimeError("REMOTE_SERVER_ERROR", "PRIVATE");
    }),
  );
  assert.equal(control.healthy(profile().deploymentId), false);
  now = c.reliability.cooldownMs + 1;
  assert.equal(control.healthy(profile().deploymentId), true);
});

test("cumulative reservations prevent retry spending beyond token/cost cap", async () => {
  const c = config();
  const r = requirements(c);
  c.budget.maxTotalTokens = checkBudget(r, profile(), c).totalTokens;
  const plan = routeModels(r, [profile()], [], c);
  let count = 0;
  await assert.rejects(
    new ReliabilityController().execute(plan, c, async () => {
      count++;
      throw new ModelRuntimeError("REMOTE_SERVER_ERROR", "PRIVATE");
    }),
    { code: "MODEL_CONTEXT_TOO_LARGE" },
  );
  assert.equal(count, 1);
});

test("total deadline and owner cancellation end even uncooperative provider promises", async () => {
  const c = config();
  c.reliability.deadlineMs = 20;
  const plan = routeModels(requirements(c), [profile()], [], c);
  await assert.rejects(
    new ReliabilityController().execute(plan, c, () => new Promise(() => {})),
    { code: "MODEL_TIMEOUT" },
  );
  const controller = new AbortController();
  controller.abort(new ModelRuntimeError("MODEL_CANCELLED", "Stopped"));
  let count = 0;
  await assert.rejects(
    new ReliabilityController().execute(
      plan,
      c,
      async () => {
        count++;
      },
      { signal: controller.signal },
    ),
    { code: "MODEL_CANCELLED" },
  );
  assert.equal(count, 0);
});

function sse(events, split = 7) {
  const text =
    ": heartbeat\r\n\r\n" +
    events
      .map(
        (e) => `data: ${typeof e === "string" ? e : JSON.stringify(e)}\r\n\r\n`,
      )
      .join("");
  const bytes = new TextEncoder().encode(text);
  return new Response(
    new ReadableStream({
      start(controller) {
        for (let i = 0; i < bytes.length; i += split)
          controller.enqueue(bytes.slice(i, i + split));
        controller.close();
      },
    }),
    { headers: { "Content-Type": "text/event-stream" } },
  );
}
const streamEvents = () => [
  {
    model: "example/model",
    choices: [{ index: 0, delta: { content: "Hello α" } }],
  },
  { choices: [{ delta: {}, finish_reason: "stop" }] },
  {
    choices: [],
    usage: {
      prompt_tokens: 12,
      completion_tokens: 3,
      completion_tokens_details: { reasoning_tokens: 1 },
    },
  },
  "[DONE]",
];

test("normalized SSE survives split UTF-8/comments and preserves trailing usage and finish reasons", async () => {
  const chunks = [];
  const value = await consumeStream(
    sse(streamEvents()),
    () => {},
    { onContent: (text) => chunks.push(text) },
    "nvidia",
    "example/model",
  );
  assert.equal(value.content, "Hello α");
  assert.deepEqual(chunks, ["Hello α"]);
  assert.equal(value.usage.promptTokens, 12);
  assert.equal(value.reasoningTokens, 1);
  assert.equal(value.finishReason, "stop");
  await assert.rejects(
    consumeStream(
      sse([{ choices: [{ delta: { content: "bad" } }] }, "[DONE]"]),
      () => {},
      {},
      "openrouter",
      "example/model",
    ),
    { code: "MODEL_INVALID_RESPONSE" },
  );
});

test("direct and LiteLLM clients send identical messages/options without hidden system instructions", async () => {
  const c = config();
  const bodies = [];
  const direct = createLLMClient({
    model: profile(),
    transport: "direct",
    config: c,
    registry: {
      providerFor: () => ({
        request: async (_, init, consume) => {
          bodies.push(JSON.parse(init.body));
          return consume(sse(streamEvents()), () => {});
        },
      }),
    },
  });
  const input = { messages: [{ role: "user", content: "Only this question" }] };
  await direct.complete(input);
  assert.deepEqual(bodies[0].messages, input.messages);
  assert.equal(
    bodies[0].messages.some((m) => m.role === "system"),
    false,
  );
  assert.throws(
    () =>
      createLLMClient({ model: profile(), transport: "litellm", config: c }),
    { code: "MODEL_INVALID_REQUEST" },
  );
  assert.equal(bodies[0].max_tokens, 128);
  assert.equal(bodies[0].stream, true);
});

test("public errors never copy arbitrary credential-bearing messages or details", () => {
  const safe = publicError(
    new ModelRuntimeError("AUTH_INVALID", "KEY_SENTINEL", {
      Authorization: "KEY_SENTINEL",
    }),
  );
  assert.equal(safe.code, "AUTH_INVALID");
  assert.doesNotMatch(JSON.stringify(safe), /KEY_SENTINEL|Authorization/);
});

test("experimental mode persists in existing stores and never accesses agent/context paths", async (t) => {
  const f = await fixture(t);
  const events = [];
  const input = f.input("A private synthetic question");
  const result = await f.service.run(f.root, 1, input, (e) => events.push(e));
  assert.equal(result.conversation.schemaVersion, 5);
  assert.equal(result.run.schemaVersion, 3);
  assert.equal(result.conversation.messages.length, 2);
  assert.deepEqual(f.calls[0].messages, [
    { role: "user", content: input.userMessage },
  ]);
  assert.equal((await f.normal.list(f.root)).length, 0);
  assert.equal((await f.service.list(f.root)).length, 1);
  assert.equal(
    (await readModelRun(f.root, result.run.runId)).diagnostics.frontOffice.mode,
    "experiment",
  );
  assert.equal(result.run.diagnostics.frontOffice.historyMessages, 0);
  assert.equal(result.run.diagnostics.frontOffice.usageCoverage, "complete");
  assert.equal(events[0].type, "start");
  assert.equal(events.at(-1).type, "finish");
  const exported = await f.service.export(f.root, "json");
  assert.doesNotMatch(exported, /private synthetic question|Fixture answer/);
  await f.service.run(f.root, 1, input);
  assert.equal(f.calls.length, 1);
  await assert.rejects(
    f.service.run(f.root, 1, { ...input, userMessage: "Different" }),
    { code: "MODEL_INVALID_REQUEST" },
  );
  await assert.rejects(
    f.normal.run(f.root, 1, {
      ...input,
      expectedContextId: "a".repeat(64),
      activeStationIds: [],
      matchMode: "any",
    }),
    { code: "MODEL_INVALID_REQUEST" },
  );
});

test("25-turn experiment retains all history and manual session pin across settings changes", async (t) => {
  const f = await fixture(t);
  for (let i = 0; i < 25; i++)
    await f.service.run(f.root, 1, f.input(`Turn ${i}`));
  assert.equal(f.calls.at(-1).messages.length, 49);
  assert.equal(f.calls.at(-1).messages[0].content, "Turn 0");
  const c = await f.service.config();
  c.routing.selectedDeploymentId = "nvidia:other/model";
  c.routing.mode = "auto";
  await f.service.saveConfig(c);
  const result = await f.service.run(
    f.root,
    1,
    f.input("The pinned model stays selected"),
  );
  assert.equal(result.run.model, "example/model");
  assert.equal(
    result.run.diagnostics.frontOffice.requestedModelId,
    "example/model",
  );
});

test("overflow rejects before dispatch and keeps the full existing history", async (t) => {
  const f = await fixture(t);
  await f.service.run(f.root, 1, f.input("First turn"));
  const before = f.calls.length;
  await assert.rejects(f.service.run(f.root, 1, f.input("x".repeat(30000))), {
    code: "MODEL_UNAVAILABLE",
  });
  assert.equal(f.calls.length, before);
  const conversation = await f.service.read(f.root, f.conversation.id);
  assert.equal(conversation.messages[0].content, "First turn");
  assert.equal(conversation.attempts.at(-1).status, "failed");
});

test("partial output failure is persisted once and explicit retry reuses the user message", async (t) => {
  let failure = true;
  const f = await fixture(t, async (request, model) => {
    if (failure) {
      request.onContent("Partial response");
      throw new ModelRuntimeError("REMOTE_SERVER_ERROR", "PRIVATE_BODY");
    }
    return answer(model);
  });
  const input = f.input("Question");
  const events = [];
  await assert.rejects(
    f.service.run(f.root, 1, input, (e) => events.push(e)),
    { code: "REMOTE_SERVER_ERROR" },
  );
  assert.equal(f.calls.length, 1);
  assert.equal(events.at(-1).type, "error");
  assert.equal(events.at(-1).trace.calls[0].contentCallbackObserved, true);
  failure = false;
  const result = await f.service.run(f.root, 1, {
    ...input,
    requestId: randomUUID(),
    retryOf: input.requestId,
  });
  assert.equal(
    result.conversation.messages.filter((m) => m.role === "user").length,
    1,
  );
  assert.equal(result.conversation.attempts.length, 2);
  assert.doesNotMatch(JSON.stringify(result.conversation), /PRIVATE_BODY/);
});

test("owner-bound cancellation prevents more attempts and releases shared admission", async (t) => {
  let started;
  const ready = new Promise((resolve) => {
    started = resolve;
  });
  const f = await fixture(t, (request) => {
    started();
    return new Promise((_, reject) =>
      request.signal.addEventListener(
        "abort",
        () => reject(request.signal.reason),
        { once: true },
      ),
    );
  });
  const input = f.input("Wait");
  const running = f.service.run(f.root, 7, input);
  const rejected = assert.rejects(running, { code: "MODEL_CANCELLED" });
  await ready;
  assert.equal(await f.normal.cancel(8, input.requestId), false);
  assert.equal(await f.normal.cancel(7, input.requestId), true);
  await rejected;
  assert.equal(f.calls.length, 1);
  assert.equal(f.normal.active, null);
  assert.equal(
    (await f.service.read(f.root, f.conversation.id)).attempts.at(-1).status,
    "cancelled",
  );
});

test("pending experiment recovers a published result without another provider call", async (t) => {
  const f = await fixture(t);
  const { store } = await f.normal.store(f.root);
  const original = store.update.bind(store);
  let writes = 0;
  store.update = (id, operation) => {
    if (++writes === 2)
      throw new ModelRuntimeError(
        "MODEL_STORAGE_FAILED",
        "fixture snapshot failure",
      );
    return original(id, operation);
  };
  await assert.rejects(f.service.run(f.root, 1, f.input("Recover")));
  const restarted = new ChatService({ registry: f.registry });
  const { store: recovered } = await restarted.store(f.root);
  const value = await recovered.read(f.conversation.id);
  assert.equal(value.attempts[0].status, "succeeded");
  assert.equal(value.messages.length, 2);
  assert.equal(f.calls.length, 1);
});

test("model overrides validate unknown fields, survive refresh and retain original provenance", async (t) => {
  const f = await fixture(t);
  assert.throws(
    () =>
      f.service.catalog.override({
        deploymentId: "openrouter:example/model",
        patch: { apiKey: "PRIVATE" },
      }),
    { code: "MODEL_INVALID_REQUEST" },
  );
  await f.service.catalog.override({
    deploymentId: "openrouter:example/model",
    patch: { structuredOutput: true, maxOutputTokens: 4096 },
  });
  await f.service.refresh("openrouter");
  const p = (await f.service.state()).profiles[0];
  assert.equal(p.structuredOutput, true);
  assert.equal(p.source.kind, "local-override");
  assert.equal(p.catalogSource.kind, "provider-catalog");
  assert.equal(p.evidence.qualityScore, null);
});

test("metrics retention prunes only metrics and leaves immutable runs and conversations", async (t) => {
  const f = await fixture(t);
  const result = await f.service.run(f.root, 1, f.input("Retain"));
  const metrics = path.join(
    f.root,
    ".wonnyy",
    "front-office-metrics",
    `${result.run.runId}.json`,
  );
  const value = JSON.parse(await fs.readFile(metrics, "utf8"));
  value.startedAt = value.completedAt = "2020-01-01T00:00:00Z";
  await fs.writeFile(metrics, JSON.stringify(value));
  assert.equal((await retainedTraces(f.root, 1)).length, 0);
  assert.equal(
    (await readModelRun(f.root, result.run.runId)).status,
    "succeeded",
  );
  assert.equal((await f.service.list(f.root)).length, 1);
});

test("auto fallback across providers requires explicit consent and discloses the switch", async (t) => {
  const f = await fixture(t, async (request, model, index) => {
    if (index === 1)
      throw new ModelRuntimeError(
        "REMOTE_SERVER_ERROR",
        "PRIVATE_PROVIDER_BODY",
      );
    return answer(model);
  });
  await f.service.refresh("nvidia");
  const c = await f.service.config();
  c.routing.mode = "auto";
  c.routing.allowFallback = true;
  c.routing.allowCrossProviderFallback = true;
  await f.service.saveConfig(c);
  const conversation = await f.service.create(f.root);
  const events = [];
  const result = await f.service.run(
    f.root,
    1,
    {
      conversationId: conversation.id,
      requestId: randomUUID(),
      userMessage: "A synthetic fallback test",
    },
    (e) => events.push(e),
  );
  assert.equal(result.run.diagnostics.attempts.length, 2);
  assert.equal(result.run.diagnostics.attempts[1].fallback, true);
  assert.notEqual(
    result.run.diagnostics.attempts[0].deploymentId,
    result.run.diagnostics.attempts[1].deploymentId,
  );
  assert.equal(result.run.diagnostics.frontOffice.routing.fallbackUsed, true);
  assert.equal(result.run.diagnostics.frontOffice.usageCoverage, "partial");
  assert.equal(result.run.diagnostics.frontOffice.estimatedCostUsd, null);
  assert.equal(events.filter((e) => e.type === "attempt").length, 2);
});

test("invalid JSON is transparently labeled without another model call", async (t) => {
  const f = await fixture(t, async (_, model) => answer(model, "not JSON"));
  await f.service.catalog.override({
    deploymentId: "openrouter:example/model",
    patch: { structuredOutput: true },
  });
  const c = await f.service.config();
  c.generation.format = "json";
  await f.service.saveConfig(c);
  const result = await f.service.run(
    f.root,
    1,
    f.input("Return a JSON answer"),
  );
  assert.equal(f.calls.length, 1);
  assert.equal(result.run.diagnostics.validation.valid, false);
  assert.equal(result.run.diagnostics.frontOffice.formatPass, false);
  assert.equal(result.run.response, "not JSON");
});

test("stale price/capacity metadata cannot justify automatic routing or cost caps", () => {
  const c = config();
  const p = profile({
    source: { ...profile().source, checkedAt: "2020-01-01T00:00:00Z" },
  });
  c.routing.mode = "auto";
  assert.throws(() => routeModels(requirements(c), [p], [], c), {
    code: "MODEL_UNAVAILABLE",
  });
  c.routing.mode = "manual";
  c.budget.maxEstimatedUsd = 1;
  assert.throws(() => routeModels(requirements(c), [p], [], c), {
    code: "MODEL_UNAVAILABLE",
  });
});

test("raw debugging is an explicit private-run opt-in and never enters metrics export", async (t) => {
  const f = await fixture(t);
  const first = await f.service.run(f.root, 1, f.input("PRIVATE_DEBUG_FIRST"));
  assert.equal(first.run.diagnostics.debug, undefined);
  const c = await f.service.config();
  c.telemetry.rawPromptLogging = true;
  c.telemetry.rawResponseLogging = true;
  await f.service.saveConfig(c);
  const second = await f.service.run(
    f.root,
    1,
    f.input("PRIVATE_DEBUG_SECOND"),
  );
  assert.equal(
    second.run.diagnostics.debug.messages[0].content,
    "PRIVATE_DEBUG_FIRST",
  );
  assert.equal(second.run.diagnostics.debug.response, "Fixture answer");
  assert.doesNotMatch(
    await f.service.export(f.root, "json"),
    /PRIVATE_DEBUG|Fixture answer|debug/,
  );
});
