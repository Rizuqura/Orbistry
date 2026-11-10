const test = require("node:test");
const assert = require("node:assert/strict");
const { fixtures } = require("./llm-front-office/evaluation/fixtures.cjs");
const {
  runEvaluation,
  summarize,
  score,
  wilson,
  reportCsv,
  reportMarkdown,
  evidenceRecords,
} = require("./llm-front-office/evaluation/harness.cjs");
const { createLLMClient } = require("./llm-front-office/provider-gateway.cjs");
const {
  defaultConfig,
} = require("./llm-front-office/experiment-contracts.cjs");

test("evaluation suite contains 40 cases, three 25-turn conversations and nine positioned long contexts", () => {
  const cases = fixtures();
  assert.equal(cases.length, 40);
  assert.equal(new Set(cases.map((c) => c.id)).size, 40);
  assert.equal(cases.filter((c) => c.turns.length === 25).length, 3);
  assert.equal(cases.filter((c) => c.task === "retrieval").length, 9);
  assert.equal(
    cases.reduce((n, c) => n + c.turns.length, 0),
    112,
  );
});

test("A/B canonical histories and settings hash identically while model changes stay visible", async () => {
  const calls = [];
  const cases = fixtures().filter((c) => c.id === "conversation-1");
  const client =
    (scenario) =>
    async ({ messages, turn, settings }) => {
      calls.push({ scenario, messages: structuredClone(messages), settings });
      return {
        content: turn.expected,
        finishReason: "stop",
        model: scenario === "C" ? "changed/model" : "fixed/model",
        provider: "openrouter",
        usage: null,
      };
    };
  const result = await runEvaluation({
    cases,
    clients: { A: client("A"), B: client("B"), C: client("C") },
    model: "fixed/model",
    provider: "openrouter",
    settings: { temperature: 0.2, maxOutputTokens: 128 },
    repetitions: 2,
    maxCalls: 150,
    evidence: "mock",
  });
  assert.equal(result.rows.length, 150);
  assert.deepEqual(evidenceRecords(result), []);
  for (let repeat = 1; repeat <= 2; repeat++)
    for (let turn = 1; turn <= 25; turn++) {
      const a = result.rows.find(
          (r) =>
            r.scenario === "A" &&
            r.repetition === repeat &&
            r.turn_index === turn,
        ),
        b = result.rows.find(
          (r) =>
            r.scenario === "B" &&
            r.repetition === repeat &&
            r.turn_index === turn,
        );
      assert.equal(a.control_hash, b.control_hash);
    }
  assert.equal(
    calls
      .find((c) => c.scenario === "A" && c.messages.length === 49)
      .messages[0].content.includes("SESSION_1"),
    true,
  );
  assert.equal(
    result.rows.find((r) => r.scenario === "C").model,
    "changed/model",
  );
  assert.match(reportMarkdown(result), /mock/);
  assert.doesNotMatch(
    reportCsv(result.rows),
    /Remember the fictional|Return only the session/,
  );
});

test("evaluation rejects an insufficient explicit cap before any provider call", async () => {
  let calls = 0;
  await assert.rejects(
    runEvaluation({
      cases: fixtures().slice(0, 1),
      clients: {
        A: async () => {
          calls++;
        },
      },
      model: "example/model",
      provider: "openrouter",
      settings: {},
      repetitions: 3,
      maxCalls: 2,
    }),
  );
  assert.equal(calls, 0);
});

test("quality distinguishes successful execution from incorrect answers and unreviewed rubrics", () => {
  assert.deepEqual(score({ expected: "GOOD" }, "BAD"), {
    quality: 0,
    format: true,
  });
  assert.equal(
    score({ canonical: "Human rubric" }, "Fluent prose").quality,
    null,
  );
  assert.equal(
    score({ jsonExpected: { answer: 1 } }, '{"answer":2}').quality,
    0,
  );
  assert.equal(score({ jsonExpected: { answer: 1 } }, "invalid").format, false);
  assert.equal(wilson(0, 0), null);
  assert.ok(wilson(1, 1)[0] < 1);
  const rows = [
    {
      scenario: "A",
      quality_score: 1,
      format_pass: true,
      error_class: null,
      cost_usd_estimated: null,
      ttft_ms: null,
      e2e_ms: 10,
    },
    {
      scenario: "A",
      quality_score: 0,
      format_pass: true,
      error_class: null,
      cost_usd_estimated: null,
      ttft_ms: null,
      e2e_ms: 20,
    },
    {
      scenario: "A",
      quality_score: null,
      format_pass: true,
      error_class: null,
      cost_usd_estimated: null,
      ttft_ms: null,
      e2e_ms: 30,
    },
  ];
  const s = summarize(rows)[0];
  assert.equal(s.executionSuccessRate, 1);
  assert.equal(s.successfulAnswerRate, 0.5);
  assert.equal(s.scoredSampleSize, 2);
  assert.equal(s.unscoredSampleSize, 1);
  assert.equal(s.costPerSuccessfulAnswer, null);
  assert.equal(s.medianTtftMs, null);
});

test("failed evaluation calls retain unknown billing and redact raw errors", async () => {
  const result = await runEvaluation({
    cases: fixtures().slice(0, 1),
    clients: {
      A: async () => {
        throw new Error("PRIVATE_SENTINEL");
      },
    },
    model: "example/model",
    provider: "openrouter",
    settings: {},
    repetitions: 2,
    maxCalls: 2,
  });
  assert.equal(result.rows[0].error_class, "MODEL_INTERNAL_ERROR");
  assert.equal(result.rows[0].cost_usd_estimated, null);
  assert.doesNotMatch(JSON.stringify(result), /PRIVATE_SENTINEL/);
});

test("LiteLLM HTTP adapter authenticates loopback and preserves A/B payload options without leaking the key", async (t) => {
  const calls = [];
  const config = defaultConfig();
  config.gateway.enabled = true;
  config.generation.maxOutputTokens = 128;
  const raw =
    'data: {"model":"example/model","choices":[{"delta":{"content":"OK"},"finish_reason":null}]}\n\ndata: {"choices":[{"delta":{},"finish_reason":"stop"}],"usage":{"prompt_tokens":2,"completion_tokens":1}}\n\ndata: [DONE]\n\n';
  t.mock.method(globalThis, "fetch", async (url, init) => {
    calls.push({
      url,
      body: JSON.parse(init.body),
      auth: init.headers.Authorization,
    });
    return new Response(raw, {
      headers: { "Content-Type": "text/event-stream" },
    });
  });
  const aliases = [];
  const client = createLLMClient({
    model: { providerId: "nvidia", modelId: "example/model" },
    transport: "litellm",
    config,
    credentials: {
      get: async (alias) => {
        aliases.push(alias);
        return "synthetic-gateway-secret";
      },
    },
  });
  const messages = [{ role: "user", content: "Only this question" }];
  const result = await client.complete({ messages });
  assert.equal(calls[0].url, "http://127.0.0.1:4000/v1/chat/completions");
  assert.equal(calls[0].body.model, "nvidia_nim/example/model");
  assert.deepEqual(calls[0].body.messages, messages);
  assert.equal(calls[0].body.temperature, config.generation.temperature);
  assert.equal(calls[0].body.max_tokens, 128);
  assert.deepEqual(aliases, ["litellm"]);
  assert.equal(calls[0].auth, "Bearer synthetic-gateway-secret");
  assert.doesNotMatch(JSON.stringify(result), /synthetic-gateway-secret/);
});

for (const provider of ["openrouter", "nvidia"]) {
  const prefix = provider === "openrouter" ? "OPENROUTER" : "NVIDIA";
  const enabled =
    process.env.ORBISTRY_FRONT_OFFICE_LIVE === "1" &&
    process.env[`${prefix}_API_KEY`] &&
    process.env[`${prefix}_TEST_MODEL`];
  test(
    `optional live ${provider} experiment`,
    {
      skip: !enabled
        ? `Live ${provider} skipped: explicit ORBISTRY_FRONT_OFFICE_LIVE=1 and dedicated key/test-model environment settings are required. Account entitlement/quota was not assumed.`
        : false,
    },
    async () => {
      const {
        OpenRouterProvider,
      } = require("./providers/openrouter-provider.cjs");
      const { NvidiaProvider } = require("./providers/nvidia-provider.cjs");
      const credentials = { get: async () => process.env[`${prefix}_API_KEY`] };
      const adapter =
        provider === "openrouter"
          ? new OpenRouterProvider({ credentials })
          : new NvidiaProvider({ credentials });
      const config = defaultConfig();
      config.generation.maxOutputTokens = 128;
      const model = {
        providerId: provider,
        modelId: process.env[`${prefix}_TEST_MODEL`],
      };
      const response = await createLLMClient({
        model,
        transport: "direct",
        config,
        registry: { providerFor: () => adapter },
      }).complete({
        messages: [
          { role: "user", content: "Reply exactly ORBISTRY ONLINE." },
        ],
      });
      assert.equal(response.finishReason, "stop");
      assert.equal(response.content.trim(), "ORBISTRY ONLINE.");
    },
  );
}
