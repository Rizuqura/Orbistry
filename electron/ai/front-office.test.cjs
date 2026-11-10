const assert = require("node:assert/strict");
const test = require("node:test");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const {
  createBaselineObserver,
} = require("./llm-front-office/observability.cjs");
const { validateTrace } = require("./llm-front-office/contracts.cjs");
const { exportTraces } = require("./llm-front-office/export.cjs");

function fixture(options = {}) {
  let tick = 0;
  const observer = createBaselineObserver({
    requestId: "request-1",
    runId: "run-1",
    conversationId: "private-conversation-id",
    providerId: "openrouter",
    modelId: "example/model",
    wallClock: () => Date.parse("2026-10-30T00:00:00Z") + tick,
    clock: () => tick,
    ...options,
  });
  return { observer, advance: (ms) => (tick += ms) };
}

function request(overrides = {}) {
  return {
    model: "example/model",
    messages: [{ role: "user", content: "PRIVATE_PROMPT_SENTINEL" }],
    settings: { outputLimit: 2048, streaming: true },
    ...overrides,
  };
}

function response(overrides = {}) {
  return {
    model: "example/actual-model",
    provider: "openrouter",
    content: "PRIVATE_RESPONSE_SENTINEL",
    usage: { promptTokens: 10, completionTokens: 4 },
    finishReason: "stop",
    diagnostics: {
      firstTokenMs: 7,
      headers: { Authorization: "KEY_SENTINEL" },
    },
    ...overrides,
  };
}

test("request stages correlate by ID, strip sensitive metadata and preserve the first failure", () => {
  const { observer, advance } = fixture();
  observer.stage("REQUEST_RECEIVED", "ok", {
    prompt: "PRIVATE_PROMPT_SENTINEL",
    headers: { Authorization: "KEY_SENTINEL" },
  });
  advance(20);
  observer.stage("MODEL_CANDIDATES_EVALUATED", "error", {
    candidateCount: 3,
    errorCode: "MODEL_UNAVAILABLE",
    rawBody: "PRIVATE_RESPONSE_SENTINEL",
  });
  observer.stage("REQUEST_COMPLETED", "error");
  observer.stage("PRIVATE_UNKNOWN_STAGE", "ok");
  observer.finish("failed", { code: "MODEL_UNAVAILABLE" });
  const trace = observer.snapshot();
  assert.equal(trace.failedStage, "MODEL_CANDIDATES_EVALUATED");
  assert.equal(trace.stages.length, 3);
  assert.ok(trace.stages.every((s) => s.requestId === "request-1"));
  assert.equal(trace.stages[1].elapsedMs, 20);
  assert.doesNotMatch(exportTraces([trace]), /SENTINEL|Authorization|PRIVATE_/);
});

test("metrics CLI extracts only a run's metrics and refuses to overwrite exports", async (t) => {
  const directory = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-metrics-"),
  );
  t.after(() => fs.rm(directory, { recursive: true, force: true }));
  const input = path.join(directory, "run.json");
  const output = path.join(directory, "metrics.json");
  const { observer } = fixture();
  observer.finish("succeeded");
  await fs.writeFile(
    input,
    JSON.stringify({
      userMessage: "PRIVATE_PROMPT_SENTINEL",
      response: "PRIVATE_RESPONSE_SENTINEL",
      diagnostics: { frontOffice: observer.snapshot(), apiKey: "KEY_SENTINEL" },
    }),
  );
  const invoke = () =>
    spawnSync(
      process.execPath,
      [
        path.resolve(
          __dirname,
          "../../scripts/front-office-metrics-export.cjs",
        ),
        input,
        "--output",
        output,
      ],
      { encoding: "utf8" },
    );
  const first = invoke();
  assert.equal(first.status, 0, first.stderr);
  const exported = await fs.readFile(output, "utf8");
  assert.doesNotMatch(exported, /SENTINEL/);
  assert.equal(JSON.parse(exported)[0].runId, "run-1");
  assert.equal(invoke().status, 1);
  assert.equal(await fs.readFile(output, "utf8"), exported);
  await fs.writeFile(input, "PRIVATE_BAD_JSON_SENTINEL");
  const invalid = invoke();
  assert.equal(invalid.status, 1);
  assert.doesNotMatch(invalid.stderr, /SENTINEL/);
});

test("baseline observer preserves adapter receiver, request, callbacks and response identity", async () => {
  const { observer, advance } = fixture();
  const signal = new AbortController().signal;
  const contents = [];
  let starts = 0;
  const input = request({
    signal,
    onContent(value) {
      assert.equal(this, input);
      contents.push(value);
    },
    onGenerationStarted() {
      assert.equal(this, input);
      starts++;
    },
  });
  const output = response();
  const provider = {
    async complete(value) {
      assert.equal(this, provider);
      assert.equal(value.signal, signal);
      assert.equal(value.messages, input.messages);
      assert.equal(value.settings, input.settings);
      advance(10);
      value.onGenerationStarted();
      value.onContent("partial");
      advance(15);
      value.onContent("complete");
      return output;
    },
  };
  assert.equal(await observer.complete(provider, input), output);
  observer.finish("succeeded");
  const trace = observer.snapshot();
  assert.equal(starts, 1);
  assert.deepEqual(contents, ["partial", "complete"]);
  assert.equal(trace.durationMs, 25);
  assert.equal(trace.providerCallCount, 1);
  assert.equal(trace.reportedPromptTokens, 10);
  assert.equal(trace.reportedCompletionTokens, 4);
  assert.equal(trace.usageCoverage, "complete");
  assert.equal(trace.estimatedCostUsd, null);
  assert.equal(trace.calls[0].firstContentMs, 10);
  assert.equal(trace.calls[0].adapterFirstTokenMs, 7);
  assert.equal(trace.calls[0].durationMs, 25);
  assert.equal(trace.calls[0].actualModelId, "example/actual-model");
  assert.equal(trace.calls[0].estimatedInputTokens, 20);
  assert.match(trace.sessionPseudonym, /^[a-f0-9]{64}$/);
  assert.doesNotMatch(
    JSON.stringify(trace),
    /PRIVATE_|KEY_SENTINEL|private-conversation/,
  );
  assert.equal(input.onContent.name, "onContent");
});

test("planner, generation and repair calls retain separate usage and partial totals", async () => {
  const { observer } = fixture();
  const provider = { complete: async () => response() };
  await observer.complete(provider, request(), "dataset-planning");
  await observer.complete(provider, request(), "statistics-planning");
  await observer.complete(provider, request());
  await observer.complete(
    { complete: async () => response({ usage: null }) },
    request(),
    "answer-repair",
  );
  observer.finish("succeeded");
  const trace = observer.snapshot();
  assert.equal(trace.providerCallCount, 4);
  assert.equal(trace.reportedPromptTokens, 30);
  assert.equal(trace.reportedCompletionTokens, 12);
  assert.equal(trace.usageCoverage, "partial");
  assert.deepEqual(
    trace.calls.map((c) => c.phase),
    ["dataset-planning", "statistics-planning", "generation", "answer-repair"],
  );
  assert.equal(trace.calls[3].reportedCompletionTokens, null);
});

test("missing, negative, fractional and infinite usage stays unknown; real zero is retained", async () => {
  for (const value of [undefined, null, -1, 0.5, Infinity, NaN, "10"]) {
    const { observer } = fixture();
    await observer.complete(
      { complete: async () => response({ usage: { promptTokens: value } }) },
      request(),
    );
    const trace = observer.snapshot();
    assert.equal(trace.reportedPromptTokens, null);
    assert.equal(trace.reportedCompletionTokens, null);
    assert.equal(trace.usageCoverage, "none");
  }
  const { observer } = fixture();
  await observer.complete(
    {
      complete: async () =>
        response({ usage: { promptTokens: 0, completionTokens: 0 } }),
    },
    request(),
  );
  assert.equal(observer.snapshot().reportedPromptTokens, 0);
  assert.equal(observer.snapshot().usageCoverage, "complete");
});

test("unknown usage on failure is not counted as free or erased by later success", async () => {
  const { observer } = fixture();
  const error = Object.assign(new Error("PRIVATE_PROVIDER_BODY"), {
    code: "REMOTE_SERVER_ERROR",
    headers: { Authorization: "KEY_SENTINEL" },
  });
  await assert.rejects(
    observer.complete(
      {
        complete: async () => {
          throw error;
        },
      },
      request(),
    ),
    (e) => e === error,
  );
  await observer.complete({ complete: async () => response() }, request());
  observer.finish("succeeded");
  const trace = observer.snapshot();
  assert.equal(trace.calls[0].errorCode, "REMOTE_SERVER_ERROR");
  assert.equal(trace.calls[0].reportedPromptTokens, null);
  assert.equal(trace.usageCoverage, "partial");
  assert.equal(trace.providerCallCount, 2);
  assert.doesNotMatch(JSON.stringify(trace), /PRIVATE_|KEY_SENTINEL/);
});

test("a failed partial stream is observed once with no retry or duplicate callback", async () => {
  const { observer } = fixture();
  let calls = 0;
  const chunks = [];
  const failure = Object.assign(new Error("PRIVATE_ERROR"), {
    code: "REMOTE_TIMEOUT",
  });
  await assert.rejects(
    observer.complete(
      {
        async complete(value) {
          calls++;
          value.onContent("partial");
          throw failure;
        },
      },
      request({ onContent: (text) => chunks.push(text) }),
    ),
    (e) => e === failure,
  );
  observer.finish("failed", failure);
  const trace = observer.snapshot();
  assert.equal(calls, 1);
  assert.deepEqual(chunks, ["partial"]);
  assert.equal(trace.status, "failed");
  assert.equal(trace.errorCode, "REMOTE_TIMEOUT");
  assert.equal(trace.calls[0].contentCallbackObserved, true);
  assert.equal(trace.calls[0].status, "failed");
});

test("cancellation preserves the original signal/reason and records cancelled", async () => {
  const { observer } = fixture();
  const controller = new AbortController();
  const reason = Object.assign(new Error("stopped"), {
    code: "MODEL_CANCELLED",
  });
  controller.abort(reason);
  await assert.rejects(
    observer.complete(
      { complete: async (value) => value.signal.throwIfAborted() },
      request({ signal: controller.signal }),
    ),
    (e) => e === reason,
  );
  observer.finish("cancelled", reason);
  assert.equal(observer.snapshot().calls[0].status, "cancelled");
  assert.equal(observer.snapshot().status, "cancelled");
});

test("callback errors propagate without being mistaken for successful inference", async () => {
  const { observer } = fixture();
  const failure = new Error("PRIVATE_CALLBACK_ERROR");
  await assert.rejects(
    observer.complete(
      { complete: async (value) => value.onContent("partial") },
      request({
        onContent: () => {
          throw failure;
        },
      }),
    ),
    (e) => e === failure,
  );
  assert.equal(observer.snapshot().calls[0].errorCode, "MODEL_INTERNAL_ERROR");
});

test("estimate failure cannot bypass the adapter's request validation", async () => {
  const { observer } = fixture();
  const failure = Object.assign(new Error("bad request"), {
    code: "MODEL_INVALID_REQUEST",
  });
  let calls = 0;
  await assert.rejects(
    observer.complete(
      {
        complete: async () => {
          calls++;
          throw failure;
        },
      },
      request({ messages: null }),
    ),
    (e) => e === failure,
  );
  assert.equal(calls, 1);
  assert.equal(observer.snapshot().calls[0].estimatedInputTokens, null);
});

test("no callbacks means TTFT stays unknown rather than becoming total duration", async () => {
  const { observer, advance } = fixture();
  await observer.complete(
    {
      complete: async (value) => {
        assert.equal("onContent" in value, false);
        assert.equal("onGenerationStarted" in value, false);
        advance(50);
        return response({ diagnostics: {} });
      },
    },
    request({ settings: { streaming: false } }),
  );
  const call = observer.snapshot().calls[0];
  assert.equal(call.firstContentMs, null);
  assert.equal(call.adapterFirstTokenMs, null);
  assert.equal(call.durationMs, 50);
});

test("disabled metrics pass the original request object and produce no trace", async () => {
  const { observer } = fixture({ enabled: false });
  const input = request();
  const output = response();
  assert.equal(
    await observer.complete(
      {
        complete: async (value) => {
          assert.equal(value, input);
          return output;
        },
      },
      input,
    ),
    output,
  );
  observer.finish("succeeded");
  assert.equal(observer.snapshot(), null);
});

test("preflight/no-provider runs finish with unknown usage and independent snapshots", () => {
  const { observer } = fixture();
  observer.finish("failed", { code: "MODEL_CONTEXT_TOO_LARGE" });
  const snapshot = observer.snapshot();
  snapshot.calls.push({ private: "SENTINEL" });
  assert.equal(observer.snapshot().providerCallCount, 0);
  assert.equal(observer.snapshot().usageCoverage, "none");
  assert.equal(observer.snapshot().reportedPromptTokens, null);
});

test("exports strip extra sensitive fields recursively and reject malformed fields generically", async () => {
  const { observer } = fixture();
  await observer.complete(
    { complete: async () => response({ finishReason: "PRIVATE_REASON" }) },
    request(),
  );
  observer.finish("succeeded");
  const trace = observer.snapshot();
  trace.apiKey = "KEY_SENTINEL";
  trace.messages = [{ content: "PROMPT_SENTINEL" }];
  trace.calls[0].response = "RESPONSE_SENTINEL";
  trace.calls[0].headers = { Authorization: "BEARER_SENTINEL" };
  const json = exportTraces([trace]);
  assert.doesNotMatch(json, /SENTINEL|PRIVATE_REASON|Authorization/);
  assert.equal(JSON.parse(json)[0].calls[0].finishReason, "other");
  const csv = exportTraces([trace], "csv");
  assert.match(csv, /usageCoverage/);
  assert.match(csv, /"complete"/);
  assert.equal(csv.split("\r\n").length, 3);
  assert.doesNotMatch(csv, /SENTINEL/);
  for (const value of [null, {}, { ...trace, status: "PRIVATE_BAD_STATUS" }]) {
    assert.throws(() => validateTrace(value), {
      name: "TypeError",
      message: "Invalid front-office metrics trace.",
    });
  }
  assert.throws(() => exportTraces([trace], "PRIVATE_FORMAT"), TypeError);
  assert.equal(exportTraces([], "json"), "[]\n");
});
