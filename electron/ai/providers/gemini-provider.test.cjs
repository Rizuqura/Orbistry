const test = require("node:test");
const assert = require("node:assert/strict");
const { GeminiProvider } = require("./gemini-provider.cjs");
const { DEFAULTS } = require("../model-registry.cjs");
const { ANSWER_FORMAT } = require("../orchestrator.cjs");
const { ModelRuntimeError } = require("../model-errors.cjs");
const { PLAN_FORMAT, planFormat } = require("../dataset-planner.cjs");
const credentials = {
  get: async () => "test-secret-key",
  status: async () => ({ configured: true, secureStorageAvailable: true }),
};

test("Gemini forwards only the host-owned assignment protocol schema when structured output is requested", async () => {
  const { responseFormat } = require("../entity-agent-protocol.cjs");
  const action = { action: "knowledge.listTopics", offset: 0, limit: 100 };
  const provider = new GeminiProvider({
    credentials,
    fetchImpl: async (_url, init) => {
      assert.deepEqual(
        JSON.parse(init.body).generationConfig.responseJsonSchema,
        responseFormat,
      );
      return stream([chunk(JSON.stringify(action), "STOP")]);
    },
  });
  const result = await provider.complete({
    ...request(),
    format: responseFormat,
    structuredOutput: true,
  });
  assert.deepEqual(JSON.parse(result.content), action);
});
const request = () => ({
  model: "gemini-test",
  settings: { ...DEFAULTS, providerId: "gemini", modelId: "gemini-test" },
  format: ANSWER_FORMAT,
  messages: [
    { role: "system", content: "Policy" },
    { role: "user", content: "Approved source" },
    { role: "assistant", content: "Prior answer" },
    { role: "user", content: "Follow-up" },
  ],
});
const chunk = (text, finishReason) => ({
  candidates: [
    {
      index: 0,
      content: { parts: [{ text }] },
      ...(finishReason ? { finishReason } : {}),
    },
  ],
  modelVersion: "gemini-test-001",
  usageMetadata: { promptTokenCount: 30, candidatesTokenCount: 8 },
});
function stream(values, split = false) {
  const bytes = Buffer.from(
    values.map((v) => `data: ${JSON.stringify(v)}\r\n\r\n`).join(""),
  );
  return new Response(
    new ReadableStream({
      start(controller) {
        if (split)
          for (const byte of bytes) controller.enqueue(Uint8Array.of(byte));
        else controller.enqueue(bytes);
        controller.close();
      },
    }),
    { headers: { "content-type": "text/event-stream" } },
  );
}

test("Gemini accepts the controlled dataset planning schema and returns its JSON unchanged", async () => {
  const plan = { queries: [{ sourceId: "sales.csv", operation: "profile" }] };
  const provider = new GeminiProvider({
    credentials,
    fetchImpl: async (_url, init) => {
      assert.deepEqual(
        JSON.parse(init.body).generationConfig.responseJsonSchema,
        PLAN_FORMAT,
      );
      return stream([chunk(JSON.stringify(plan), "STOP")]);
    },
  });
  const result = await provider.complete({ ...request(), format: PLAN_FORMAT });
  assert.deepEqual(JSON.parse(result.content), plan);
});

test("Gemini forwards dataset-specific name constraints intact", async () => {
  const format = planFormat([
    {
      sourceId: "sales.csv",
      type: "csv",
      content: JSON.stringify({ columns: [{ name: "amount" }] }),
    },
  ]);
  const provider = new GeminiProvider({
    credentials,
    fetchImpl: async (_url, init) => {
      assert.deepEqual(
        JSON.parse(init.body).generationConfig.responseJsonSchema,
        format,
      );
      return stream([
        chunk(
          '{"queries":[{"sourceId":"sales.csv","operation":"profile"}]}',
          "STOP",
        ),
      ]);
    },
  });
  const result = await provider.complete({ ...request(), format });
  assert.equal(JSON.parse(result.content).queries[0].sourceId, "sales.csv");
});

test("Gemini normalizes split UTF-8 SSE, roles, JSON schema, hidden thinking and actual model identity", async () => {
  const seen = [];
  const provider = new GeminiProvider({
    credentials,
    fetchImpl: async (url, init) => {
      assert.equal(
        url,
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-test:streamGenerateContent?alt=sse",
      );
      assert.equal(init.redirect, "error");
      assert.equal(init.headers["x-goog-api-key"], "test-secret-key");
      const payload = JSON.parse(init.body);
      assert.equal(payload.systemInstruction.parts[0].text, "Policy");
      assert.deepEqual(
        payload.contents.map((m) => m.role),
        ["user", "model", "user"],
      );
      assert.deepEqual(
        payload.generationConfig.responseJsonSchema,
        ANSWER_FORMAT,
      );
      return stream(
        [
          {
            candidates: [
              {
                content: {
                  parts: [{ text: "private thought", thought: true }],
                },
              },
            ],
          },
          chunk('{"answer":"日本 ', null),
          chunk('25%"}', "STOP"),
        ],
        true,
      );
    },
  });
  const result = await provider.complete({
    ...request(),
    onContent: (text) => seen.push(text),
  });
  assert.equal(result.content, '{"answer":"日本 25%"}');
  assert.equal(result.model, "gemini-test-001");
  assert.equal(result.usage.promptTokens, 30);
  assert.ok(result.diagnostics.firstTokenMs >= 0);
  assert.ok(seen.length > 0);
  assert.doesNotMatch(seen.join(""), /private thought/);
  seen.length = 0;
  const hidden = request();
  hidden.settings.streaming = false;
  await provider.complete({ ...hidden, onContent: (text) => seen.push(text) });
  assert.equal(seen.length, 0);
});

test("Gemini errors are actionable, bounded, and never expose provider bodies or secrets", async () => {
  for (const [status, code] of [
    [401, "AUTH_INVALID"],
    [403, "AUTH_INVALID"],
    [404, "MODEL_UNAVAILABLE"],
    [429, "RATE_LIMITED"],
    [503, "REMOTE_SERVER_ERROR"],
    [400, "AUTH_INVALID"],
  ]) {
    let calls = 0;
    const provider = new GeminiProvider({
      credentials,
      fetchImpl: async () => {
        calls++;
        return new Response("API_KEY_INVALID test-secret-key source-secret", {
          status,
          headers: { "retry-after": status === 503 ? "60" : "7" },
        });
      },
    });
    await assert.rejects(provider.complete(request()), (error) => {
      assert.equal(error.code, code);
      assert.doesNotMatch(JSON.stringify(error), /test-secret|source-secret/);
      if (status === 429) assert.equal(error.details.retryAfterSeconds, 7);
      return true;
    });
    assert.equal(calls, 1);
  }
});

test("Gemini transport never retries rejected requests", async () => {
  for (const status of [429, 500, 502, 503, 504]) {
    let calls = 0;
    const provider = new GeminiProvider({
      credentials,
      fetchImpl: async () => {
        calls++;
        return new Response("private body", { status });
      },
    });
    await assert.rejects(provider.complete(request()), {
      code: status === 429 ? "RATE_LIMITED" : "REMOTE_SERVER_ERROR",
    });
    assert.equal(calls, 1);
  }
});

test("Gemini rejects truncation, blocked output, malformed chunks, missing finish and oversized streams", async () => {
  for (const values of [
    [chunk("answer", "MAX_TOKENS")],
    [{ promptFeedback: { blockReason: "SAFETY" } }],
    [chunk("answer")],
    [{ candidates: "bad" }],
    [chunk("x".repeat(2 * 1024 * 1024), "STOP")],
  ]) {
    const provider = new GeminiProvider({
      credentials,
      fetchImpl: async () => stream(values),
    });
    await assert.rejects(provider.complete(request()), (error) =>
      ["MODEL_INVALID_RESPONSE", "REMOTE_CONTENT_BLOCKED"].includes(error.code),
    );
  }
});

test("Gemini discovers paginated text models and never sends context with discovery", async () => {
  let calls = 0;
  const provider = new GeminiProvider({
    credentials,
    fetchImpl: async (url, init) => {
      assert.equal(init.body, undefined);
      calls++;
      if (calls === 2) assert.match(url, /pageToken=next/);
      return Response.json({
        models: [
          {
            name: calls === 1 ? "models/gemini-test" : "models/gemini-test-tts",
            supportedGenerationMethods: ["generateContent"],
            inputTokenLimit: 32768,
            outputTokenLimit: 8192,
          },
        ],
        ...(calls === 1 ? { nextPageToken: "next" } : {}),
      });
    },
  });
  assert.deepEqual(
    (await provider.listModels()).map((m) => m.name),
    ["gemini-test"],
  );
  assert.equal(calls, 2);
});

test("Gemini aborts stalled streams and preserves cancellation distinctly from timeout", async () => {
  const provider = new GeminiProvider({
    credentials,
    fetchImpl: async (_url, init) =>
      new Response(
        new ReadableStream({
          start(controller) {
            init.signal.addEventListener(
              "abort",
              () => controller.error(init.signal.reason),
              { once: true },
            );
          },
        }),
        { headers: { "content-type": "text/event-stream" } },
      ),
  });
  const controller = new AbortController();
  const pending = provider.complete({
    ...request(),
    signal: controller.signal,
  });
  setTimeout(
    () => controller.abort(new ModelRuntimeError("MODEL_CANCELLED", "Stopped")),
    20,
  );
  await assert.rejects(pending, { code: "MODEL_CANCELLED" });
  const slow = request();
  slow.settings.inactivityTimeoutMs = 1000;
  await assert.rejects(provider.complete(slow), { code: "REMOTE_TIMEOUT" });
});

test("Gemini fails before network access for missing credentials and invalid model path", async () => {
  let calls = 0;
  const provider = new GeminiProvider({
    credentials: {
      get: async () => {
        throw new ModelRuntimeError("AUTH_REQUIRED", "Configure key");
      },
    },
    fetchImpl: async () => {
      calls++;
    },
  });
  await assert.rejects(provider.complete(request()), { code: "AUTH_REQUIRED" });
  await assert.rejects(
    provider.complete({ ...request(), model: "../other?key=secret" }),
    { code: "MODEL_INVALID_REQUEST" },
  );
  assert.equal(calls, 0);
});

test("statistics plans retain structured JSON through the provider", async () => {
  const { STATISTICS_FORMAT } = require("../statistics.cjs");
  const plan = { calculations: [], limitation: "Need input values." };
  const provider = new GeminiProvider({
    credentials,
    fetchImpl: async () => stream([chunk(JSON.stringify(plan), "STOP")]),
  });
  const result = await provider.complete({
    ...request(),
    format: STATISTICS_FORMAT,
  });
  assert.deepEqual(JSON.parse(result.content), plan);
});
