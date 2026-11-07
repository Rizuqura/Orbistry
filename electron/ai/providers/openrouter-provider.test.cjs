const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenRouterProvider } = require("./openrouter-provider.cjs");
const { DEFAULTS } = require("../model-registry.cjs");
const { validateAnswer } = require("../response-validation.cjs");
const { PLAN_FORMAT } = require("../dataset-planner.cjs");
const credentials = {
  get: async (id) => {
    assert.equal(id, "openrouter");
    return "sk-or-synthetic-private-key";
  },
  status: async () => ({ configured: true, secureStorageAvailable: true }),
};
const request = (extra) => ({
  model: "vendor/test:free",
  messages: [
    { role: "system", content: "Use the supplied sources." },
    { role: "user", content: "Summarize" },
  ],
  settings: {
    ...DEFAULTS,
    providerId: "openrouter",
    modelId: "vendor/test:free",
  },
  ...extra,
});
function sse(events) {
  return new Response(
    ": OPENROUTER PROCESSING\n\n" +
      events.map((value) => `data: ${JSON.stringify(value)}\n\n`).join("") +
      "data: [DONE]\n\n",
    { headers: { "content-type": "text/event-stream" } },
  );
}
const part = (content, finish_reason = null) => ({
  model: "vendor/test:free",
  choices: [{ index: 0, delta: { content }, finish_reason }],
});

test("OpenRouter accepts live-catalog alias slugs and isolates malformed rows", async () => {
  const provider = new OpenRouterProvider({
    credentials,
    fetchImpl: async (url, init) =>
      url.endsWith("/models")
        ? Response.json({
            data: [
              {
                id: "~vendor/model-latest",
                name: null,
                architecture: null,
                context_length: 1000000,
              },
              { id: "vendor/normal" },
              { id: "invalid slug with spaces" },
              { id: "vendor/bad-limit", context_length: -1 },
              null,
            ],
          })
        : sse([part("40%", "stop")]),
  });
  assert.deepEqual(
    (await provider.listModels()).map((model) => model.name),
    ["~vendor/model-latest", "vendor/normal"],
  );
  assert.equal(
    (
      await require("../model-check.cjs").checkRemoteModel(
        provider,
        "openrouter",
        "~vendor/model-latest",
      )
    ).passed,
    true,
  );
  const invalid = new OpenRouterProvider({
    credentials,
    fetchImpl: async () =>
      Response.json({ data: [{ id: "invalid slug" }, null] }),
  });
  await assert.rejects(invalid.listModels(), {
    code: "MODEL_INVALID_RESPONSE",
  });
});

test("OpenRouter discovers text-capable model slugs and limits without exposing credentials", async () => {
  const provider = new OpenRouterProvider({
    credentials,
    fetchImpl: async (url, init) => {
      assert.equal(url, "https://openrouter.ai/api/v1/models");
      assert.equal(
        init.headers.Authorization,
        "Bearer sk-or-synthetic-private-key",
      );
      assert.equal(init.headers["X-OpenRouter-Title"], "Orbistry");
      assert.equal(init.redirect, "error");
      assert.equal(init.body, undefined);
      return Response.json({
        data: [
          {
            id: "vendor/test:free",
            name: "Test Chat",
            context_length: 64000,
            architecture: {
              input_modalities: ["text", "image"],
              output_modalities: ["text"],
            },
            top_provider: { max_completion_tokens: 4096 },
          },
          {
            id: "vendor/image",
            architecture: { output_modalities: ["image"] },
          },
          {
            id: "vendor/audio",
            architecture: {
              input_modalities: ["audio"],
              output_modalities: ["text"],
            },
          },
        ],
      });
    },
  });
  const status = await provider.getStatus();
  assert.equal(status.online, true);
  assert.equal(status.models.length, 1);
  assert.equal(status.models[0].name, "vendor/test:free");
  assert.equal(status.models[0].contextLength, 64000);
  assert.equal(status.models[0].outputLimit, 4096);
  assert.doesNotMatch(JSON.stringify(status), /sk-or/);
});
test("OpenRouter streaming discards reasoning, ignores comments, consumes trailing usage and keeps provider identity", async () => {
  const seen = [];
  const provider = new OpenRouterProvider({
    credentials,
    fetchImpl: async (url, init) => {
      assert.equal(url, "https://openrouter.ai/api/v1/chat/completions");
      const body = JSON.parse(init.body);
      assert.equal(body.model, "vendor/test:free");
      assert.equal(body.stream, true);
      return sse([
        {
          choices: [
            { delta: { reasoning: "Private reasoning" }, finish_reason: null },
          ],
        },
        part("Supported "),
        part("answer.", "stop"),
        {
          choices: [{ delta: {}, finish_reason: "stop" }],
          usage: { prompt_tokens: 17, completion_tokens: 6 },
        },
      ]);
    },
  });
  const result = await provider.complete(
    request({ onContent: (text) => seen.push(text) }),
  );
  assert.equal(validateAnswer(result), "Supported answer.");
  assert.equal(result.provider, "openrouter");
  assert.equal(result.usage.promptTokens, 17);
  assert.equal(result.usage.completionTokens, 6);
  assert.doesNotMatch(JSON.stringify(seen), /Private reasoning|sk-or/);
});
test("OpenRouter preserves analytical JSON plans and supports full multi-source history", async () => {
  const plan = { queries: [{ sourceId: "data.csv", operation: "profile" }] };
  const provider = new OpenRouterProvider({
    credentials,
    fetchImpl: async (_, init) => {
      const body = JSON.parse(init.body);
      assert.match(
        body.messages[0].content,
        /JSON object matching this schema/,
      );
      assert.equal(body.messages.length, 60);
      return sse([part(JSON.stringify(plan), "stop")]);
    },
  });
  const result = await provider.complete(
    request({
      format: PLAN_FORMAT,
      messages: [
        { role: "system", content: "Plan CSV analysis" },
        ...Array.from({ length: 59 }, () => ({
          role: "user",
          content: "Source or history",
        })),
      ],
    }),
  );
  assert.deepEqual(JSON.parse(result.content), plan);
});
test("OpenRouter HTTP and in-stream failures are sanitized and distinguish insufficient credits", async () => {
  for (const [status, code] of [
    [401, "AUTH_INVALID"],
    [402, "PAYMENT_REQUIRED"],
    [429, "RATE_LIMITED"],
    [503, "REMOTE_SERVER_ERROR"],
  ]) {
    for (const streaming of [false, true]) {
      const provider = new OpenRouterProvider({
        credentials,
        fetchImpl: async () =>
          streaming
            ? sse([
                {
                  error: {
                    code: status,
                    message: "sk-or-synthetic-private-key",
                  },
                },
              ])
            : new Response("sk-or-synthetic-private-key", { status }),
      });
      await assert.rejects(provider.complete(request()), (error) => {
        assert.equal(error.code, code);
        assert.doesNotMatch(error.message, /sk-or/);
        assert.match(error.message, /OpenRouter/);
        return true;
      });
    }
  }
});
test("OpenRouter rejects incomplete streams and honors cancellation", async () => {
  const incomplete = new OpenRouterProvider({
    credentials,
    fetchImpl: async () => sse([part("Partial")]),
  });
  await assert.rejects(incomplete.complete(request()), {
    code: "MODEL_INVALID_RESPONSE",
  });
  const controller = new AbortController();
  controller.abort(
    new (require("../model-errors.cjs").ModelRuntimeError)(
      "MODEL_CANCELLED",
      "Stopped",
    ),
  );
  await assert.rejects(
    incomplete.complete(request({ signal: controller.signal })),
    { code: "MODEL_CANCELLED" },
  );
});
