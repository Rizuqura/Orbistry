const test = require("node:test");
const assert = require("node:assert/strict");
const { createRequestLogger } = require("./request-logger.cjs");
const {
  createBaselineObserver,
} = require("./llm-front-office/observability.cjs");
const { DEFAULTS } = require("./model-registry.cjs");
const { ANSWER_FORMAT } = require("./orchestrator.cjs");
const { ModelRuntimeError } = require("./model-errors.cjs");
const { registerAiIpc, API_VERSION } = require("./ipc.cjs");
const { NvidiaProvider } = require("./providers/nvidia-provider.cjs");
const { OpenRouterProvider } = require("./providers/openrouter-provider.cjs");
const { GeminiProvider } = require("./providers/gemini-provider.cjs");
const { OllamaProvider } = require("./providers/ollama-provider.cjs");

function capture(options = {}) {
  const lines = [];
  const logger = createRequestLogger({
    enabled: true,
    requestId: "request-1",
    runId: "run-1",
    write: (line) => lines.push(line),
    ...options,
  });
  return {
    logger,
    lines,
    records: () =>
      lines.map((line) => JSON.parse(line.slice(line.indexOf("{")))),
  };
}

test("terminal stages allowlist metadata and never serialize input, paths, credentials or raw errors", () => {
  const c = capture();
  c.logger.step("REQUEST_RECEIVED", {
    messageCharacters: 12,
    prompt: "PRIVATE_PROMPT",
    constructor: "PRIVATE_CONSTRUCTOR",
    headers: { Authorization: "Bearer PRIVATE_KEY" },
    path: "C:/PRIVATE_FILE",
  });
  c.logger.update({
    provider: "nvidia",
    model: "nvidia/test",
    userMessage: "PRIVATE_PROMPT",
  });
  c.logger.step("HTTP_REQUEST_STARTED");
  c.logger.fail(
    Object.assign(new Error("PRIVATE_ERROR_BODY"), { code: "AUTH_INVALID" }),
  );
  c.logger.finish("error", { code: "AUTH_INVALID" });
  c.logger.step("PRIVATE_UNKNOWN_STAGE", { answer: "PRIVATE_ANSWER" });
  assert.doesNotMatch(c.lines.join("\n"), /PRIVATE_|Bearer|Authorization/);
  const rows = c.records();
  assert.ok(
    rows.every((r) => r.requestId === "request-1" && r.runId === "run-1"),
  );
  assert.equal(rows.at(-1).failedStage, "HTTP_REQUEST_STARTED");
  assert.equal(rows.at(-1).errorCode, "AUTH_INVALID");
  assert.equal(rows.at(-1).stage, "REQUEST_COMPLETED");
});

test("logging is optional and a broken stdout cannot fail inference", async () => {
  const disabled = capture({ enabled: false });
  disabled.logger.step("REQUEST_RECEIVED");
  disabled.logger.finish();
  assert.equal(disabled.lines.length, 0);
  const c = capture({
    write: () => {
      throw Error("closed terminal");
    },
  });
  const observer = createBaselineObserver({
    requestLogger: c.logger,
    enabled: false,
    requestId: "request-1",
    runId: "run-1",
    providerId: "ollama",
    modelId: "qwen3:4b",
  });
  const result = { content: "Done.", finishReason: "stop", usage: null };
  assert.equal(
    await observer.complete(
      { complete: async () => result },
      { model: "qwen3:4b", messages: [] },
    ),
    result,
  );
  assert.equal(observer.snapshot(), null);
});

test("a later attempt failure keeps its own boundary while preserving the first recovered error", () => {
  const c = capture();
  c.logger.step(
    "OUTPUT_VALIDATION_FAILED",
    { errorCode: "MODEL_INVALID_RESPONSE" },
    "error",
  );
  c.logger.step("ANSWER_REPAIR_STARTED", { attempt: 2 });
  c.logger.step("HTTP_REQUEST_STARTED", { callIndex: 2 });
  c.logger.fail({ code: "REMOTE_TIMEOUT" });
  c.logger.finish("error", { code: "REMOTE_TIMEOUT" });
  assert.equal(c.records().at(-1).firstErrorStage, "OUTPUT_VALIDATION_FAILED");
  assert.equal(c.records().at(-1).failedStage, "HTTP_REQUEST_STARTED");
});

test("waiting messages stop when the provider call completes, and first-content logging is bounded", async () => {
  const c = capture({ heartbeatMs: 5 });
  const observer = createBaselineObserver({
    requestLogger: c.logger,
    runId: "run-1",
    providerId: "nvidia",
    modelId: "nvidia/test",
  });
  await observer.complete(
    {
      complete: async (request) => {
        await new Promise((resolve) => setTimeout(resolve, 25));
        request.onDiagnostic("HTTP_RESPONSE_RECEIVED", { httpStatus: 200 });
        for (let i = 0; i < 100; i++)
          request.onDiagnostic("FIRST_CONTENT_RECEIVED", {
            contentCharacters: i + 1,
          });
        return { content: "Done.", finishReason: "stop", usage: null };
      },
    },
    { model: "nvidia/test", messages: [] },
  );
  const count = c.lines.length;
  await new Promise((resolve) => setTimeout(resolve, 25));
  assert.equal(c.lines.length, count);
  assert.ok(
    c
      .records()
      .some(
        (r) => r.stage === "LLM_WAITING" && r.waitingFor === "http_response",
      ),
  );
  assert.equal(
    c.records().filter((r) => r.stage === "FIRST_CONTENT_RECEIVED").length,
    1,
  );
});

function sse(events, done = true) {
  return new Response(
    events.map((e) => `data: ${JSON.stringify(e)}\n\n`).join("") +
      (done ? "data: [DONE]\n\n" : ""),
    { headers: { "content-type": "text/event-stream" } },
  );
}

for (const providerId of ["nvidia", "openrouter", "gemini", "ollama"]) {
  test(`${providerId} emits transport and first-content diagnostics with buffered UI and no private payload`, async () => {
    const c = capture();
    const model =
      providerId === "nvidia"
        ? "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning"
        : providerId === "gemini"
          ? "gemini-test"
          : providerId === "openrouter"
            ? "vendor/model"
            : "qwen3:4b";
    c.logger.update({ provider: providerId, model });
    const fetchImpl = async () =>
      providerId === "ollama"
        ? new Response(
            JSON.stringify({
              model,
              done: true,
              done_reason: "stop",
              message: { content: '{"answer":"Done."}' },
            }) + "\n",
          )
        : providerId === "gemini"
          ? sse(
              [
                {
                  modelVersion: model,
                  candidates: [
                    {
                      index: 0,
                      content: {
                        parts: [
                          { thought: true, text: "PRIVATE_REASONING" },
                          { text: '{"answer":"Done."}' },
                        ],
                      },
                      finishReason: "STOP",
                    },
                  ],
                },
              ],
              false,
            )
          : sse([
              {
                choices: [
                  { delta: { reasoning_content: "PRIVATE_REASONING" } },
                ],
              },
              {
                model,
                choices: [
                  { delta: { content: "Done." }, finish_reason: "stop" },
                ],
              },
            ]);
    const credentials = { get: async () => "nvapi-PRIVATE_KEY" };
    const provider =
      providerId === "nvidia"
        ? new NvidiaProvider({ credentials, fetchImpl })
        : providerId === "openrouter"
          ? new OpenRouterProvider({ credentials, fetchImpl })
          : providerId === "gemini"
            ? new GeminiProvider({ credentials, fetchImpl })
            : new OllamaProvider({ fetchImpl });
    const observer = createBaselineObserver({
      requestLogger: c.logger,
      runId: "run-1",
      providerId,
      modelId: model,
    });
    const result = await observer.complete(provider, {
      id: "run-1",
      model,
      format: ANSWER_FORMAT,
      contextWindow: 8192,
      messages: [
        { role: "system", content: "PRIVATE_SYSTEM" },
        { role: "user", content: "PRIVATE_PROMPT and PRIVATE_SOURCE" },
      ],
      settings: { ...DEFAULTS, providerId, modelId: model, streaming: false },
    });
    assert.ok(result.content.includes("Done."));
    const stages = c.records().map((r) => r.stage);
    for (const required of [
      "LLM_REQUEST_STARTED",
      "HTTP_REQUEST_STARTED",
      "HTTP_RESPONSE_RECEIVED",
      "STREAM_STARTED",
      "FIRST_CONTENT_RECEIVED",
      "STREAM_COMPLETED",
      "RESPONSE_NORMALIZED",
      "LLM_RESPONSE_RECEIVED",
    ])
      assert.ok(stages.includes(required), required);
    assert.equal(
      stages.filter((s) => s === "FIRST_CONTENT_RECEIVED").length,
      1,
    );
    assert.doesNotMatch(c.lines.join("\n"), /PRIVATE_|Authorization/);
  });
}

test("HTTP rejection is attributed to the failing provider boundary, not a successful normalization", async () => {
  const c = capture();
  const observer = createBaselineObserver({
    requestLogger: c.logger,
    runId: "run-1",
    providerId: "nvidia",
    modelId: "nvidia/test",
  });
  const provider = new NvidiaProvider({
    credentials: { get: async () => "PRIVATE_KEY" },
    fetchImpl: async () => new Response("PRIVATE_BODY", { status: 401 }),
  });
  await assert.rejects(
    observer.complete(provider, {
      model: "nvidia/test",
      messages: [
        { role: "system", content: "PRIVATE_SYSTEM" },
        { role: "user", content: "PRIVATE_PROMPT" },
      ],
      settings: DEFAULTS,
    }),
    { code: "AUTH_INVALID" },
  );
  c.logger.finish("error", { code: "AUTH_INVALID" });
  assert.ok(
    c
      .records()
      .some(
        (r) => r.httpStatus === 401 && r.stage === "HTTP_RESPONSE_RECEIVED",
      ),
  );
  assert.equal(c.records().at(-1).failedStage, "HTTP_RESPONSE_RECEIVED");
  assert.ok(!c.records().some((r) => r.stage === "RESPONSE_NORMALIZED"));
  assert.doesNotMatch(c.lines.join("\n"), /PRIVATE_/);
});

test("IPC admission failures also produce a completed request trace", async () => {
  const handlers = new Map(),
    c = capture();
  registerAiIpc({
    getVault: () => "synthetic-vault",
    ipcMain: { handle: (name, fn) => handlers.set(name, fn) },
    requestLoggerFactory: () => c.logger,
    service: {
      run: async () => {
        throw new ModelRuntimeError("MODEL_BUSY", "PRIVATE_ERROR_BODY");
      },
    },
  });
  const event = { sender: { id: 1 } };
  handlers.get("ai:handshake")(event, API_VERSION);
  const result = await handlers.get("ai:chat")(event, {
    requestId: "request-1",
    userMessage: "PRIVATE_PROMPT",
  });
  assert.equal(result.error.code, "MODEL_BUSY");
  assert.equal(c.records()[0].stage, "REQUEST_RECEIVED");
  assert.equal(c.records().at(-1).stage, "REQUEST_COMPLETED");
  assert.equal(c.records().at(-1).errorCode, "MODEL_BUSY");
  assert.doesNotMatch(c.lines.join("\n"), /PRIVATE_/);
});
