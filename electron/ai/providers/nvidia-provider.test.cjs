const test = require("node:test");
const assert = require("node:assert/strict");
const { NvidiaProvider } = require("./nvidia-provider.cjs");
const { DEFAULTS } = require("../model-registry.cjs");
const { ModelRuntimeError } = require("../model-errors.cjs");
const { validateAnswer, answerPrefix } = require("../response-validation.cjs");
const { PLAN_FORMAT } = require("../dataset-planner.cjs");

test("NVIDIA preserves structured dataset requests without answer wrapping", async () => {
  const plan = { queries: [{ sourceId: "sales.csv", operation: "profile" }] };
  const provider = new NvidiaProvider({
    credentials,
    fetchImpl: async (_url, init) => {
      assert.match(
        JSON.parse(init.body).messages[0].content,
        /JSON object matching this schema/,
      );
      assert.doesNotMatch(
        JSON.parse(init.body).messages[0].content,
        /Write the completed answer directly/,
      );
      return stream([part(JSON.stringify(plan), "stop")]);
    },
  });
  const result = await provider.complete({ ...request(), format: PLAN_FORMAT });
  assert.deepEqual(JSON.parse(result.content), plan);
});

test("NVIDIA normalizes task answers without requiring model-generated JSON", async () => {
  for (const [raw, expected] of [
    [
      "1. Cash: 25%.\n2. Bonds: 40%.\n3. Stocks: 35%.",
      "1. Cash: 25%.\n2. Bonds: 40%.\n3. Stocks: 35%.",
    ],
    ['```json\n{"answer":"Bonds: 40%."}\n```', "Bonds: 40%."],
    ['{"bonds":40}', '{"bonds":40}'],
  ]) {
    const seen = [];
    const provider = new NvidiaProvider({
      credentials,
      fetchImpl: async () =>
        stream([part(raw.slice(0, 8)), part(raw.slice(8), "stop")], true),
    });
    const result = await provider.complete({
      ...request(),
      onContent: (value) => seen.push(answerPrefix(value)),
    });
    assert.equal(validateAnswer(result), expected);
    assert.equal(seen.at(-1), expected);
  }
});

test("NVIDIA normalization retains planning and truncated-envelope rejection", async () => {
  const provider = new NvidiaProvider({
    credentials,
    fetchImpl: async () =>
      stream([part("I need to analyze the source first.", "stop")]),
  });
  const result = await provider.complete(request());
  assert.throws(() => validateAnswer(result), {
    code: "MODEL_INVALID_RESPONSE",
  });
  const malformed = new NvidiaProvider({
    credentials,
    fetchImpl: async () => stream([part('{"answer":"unfinished', "stop")]),
  });
  await assert.rejects(malformed.complete(request()), {
    code: "MODEL_INVALID_RESPONSE",
  });
});
const credentials = {
  get: async (id) => {
    assert.equal(id, "nvidia");
    return "nvapi-test-secret";
  },
  status: async () => ({ configured: true, secureStorageAvailable: true }),
};

test("verified NVIDIA instruct modes disable thinking without changing output caps or guessing other deployments", async () => {
  const supported = [
    "nvidia/nemotron-3.5-lightning-30b-a3b",
    "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
  ];
  for (const model of [
    ...supported,
    "nvidia/unverified-nemotron-reasoning",
    "deepseek-ai/deepseek-r1",
    "nvidia/test",
  ]) {
    const provider = new NvidiaProvider({
      credentials,
      fetchImpl: async (_, init) => {
        const body = JSON.parse(init.body);
        assert.equal(body.max_tokens, 6000);
        assert.deepEqual(
          body.chat_template_kwargs,
          supported.includes(model) ? { enable_thinking: false } : undefined,
        );
        return stream([part("ORBISTRY_OK", "stop")]);
      },
    });
    assert.equal(
      validateAnswer(
        await provider.complete({
          ...request(),
          model,
          settings: { ...request().settings, outputLimit: 6000 },
        }),
      ),
      "ORBISTRY_OK",
    );
  }
});

test("reasoning-only truncation reports counts without leaking hidden text or claiming context overflow", async () => {
  const provider = new NvidiaProvider({
    credentials,
    fetchImpl: async () =>
      stream([
        {
          choices: [
            {
              delta: { reasoning_content: "PRIVATE_REASONING_SENTINEL" },
              finish_reason: "length",
            },
          ],
        },
      ]),
  });
  await assert.rejects(provider.complete(request()), (error) => {
    assert.equal(error.code, "MODEL_INVALID_RESPONSE");
    assert.equal(error.details.visibleCharacters, 0);
    assert.equal(error.details.reasoningCharacters, 26);
    assert.match(error.message, /internal reasoning/);
    assert.doesNotMatch(
      JSON.stringify({ message: error.message, details: error.details }),
      /PRIVATE_REASONING_SENTINEL/,
    );
    return true;
  });
});

test("active reasoning resets inactivity timeout while the total deadline stays bounded", async () => {
  const provider = new NvidiaProvider({
    credentials,
    fetchImpl: async (_, init) => {
      let timer,
        abort,
        count = 0;
      return new Response(
        new ReadableStream({
          start(controller) {
            abort = () => {
              clearInterval(timer);
              controller.error(init.signal.reason);
            };
            init.signal.addEventListener("abort", abort, { once: true });
            timer = setInterval(() => {
              const value =
                count++ < 5
                  ? { choices: [{ delta: { reasoning_content: "hidden" } }] }
                  : part("ORBISTRY_OK", "stop");
              controller.enqueue(
                new TextEncoder().encode(`data: ${JSON.stringify(value)}\n\n`),
              );
              if (count === 6) {
                clearInterval(timer);
                init.signal.removeEventListener("abort", abort);
                controller.close();
              }
            }, 250);
          },
          cancel() {
            clearInterval(timer);
            init.signal.removeEventListener("abort", abort);
          },
        }),
        { headers: { "content-type": "text/event-stream" } },
      );
    },
  });
  const value = await provider.complete({
    ...request(),
    settings: {
      ...request().settings,
      inactivityTimeoutMs: 1000,
      absoluteTimeoutMs: 5000,
    },
  });
  assert.equal(validateAnswer(value), "ORBISTRY_OK");
  await assert.rejects(
    provider.complete({
      ...request(),
      settings: {
        ...request().settings,
        inactivityTimeoutMs: 1000,
        absoluteTimeoutMs: 1000,
      },
    }),
    { code: "REMOTE_TIMEOUT" },
  );
});
const request = () => ({
  model: "nvidia/test",
  settings: { ...DEFAULTS, providerId: "nvidia", modelId: "nvidia/test" },
  messages: [
    { role: "system", content: "Return JSON" },
    { role: "user", content: "Approved source" },
  ],
});
const part = (content, finish_reason = null) => ({
  model: "nvidia/test-resolved",
  choices: [{ index: 0, delta: { content }, finish_reason }],
});
function stream(events, split = false) {
  const bytes = Buffer.from(
    events.map((e) => "data: " + JSON.stringify(e) + "\r\n\r\n").join(""),
  );
  return new Response(
    new ReadableStream({
      start(c) {
        if (split) for (const b of bytes) c.enqueue(Uint8Array.of(b));
        else c.enqueue(bytes);
        c.close();
      },
    }),
    { headers: { "content-type": "text/event-stream" } },
  );
}

test("NVIDIA discovers distinct candidates without sending context, and keeps unconfigured status offline", async () => {
  const provider = new NvidiaProvider({
    credentials,
    fetchImpl: async (url, init) => {
      assert.equal(url, "https://integrate.api.nvidia.com/v1/models");
      assert.equal(init.headers.Authorization, "Bearer nvapi-test-secret");
      assert.equal(init.redirect, "error");
      assert.equal(init.body, undefined);
      return Response.json({
        data: [
          { id: "nvidia/test" },
          { id: "nvidia/test" },
          { id: "nvidia/embed-test" },
          { id: "deepseek-ai/test" },
        ],
      });
    },
  });
  assert.deepEqual(
    (await provider.listModels()).map((m) => m.name),
    ["nvidia/test", "deepseek-ai/test"],
  );
  assert.equal((await provider.getStatus()).online, true);
  const empty = new NvidiaProvider({
    credentials: { status: async () => ({ configured: false }) },
    fetchImpl: () => assert.fail(),
  });
  assert.equal((await empty.getStatus()).online, false);
});
test("NVIDIA streams split UTF8 final content, discards reasoning and records resolved identity", async () => {
  const seen = [];
  const provider = new NvidiaProvider({
    credentials,
    fetchImpl: async (url, init) => {
      assert.equal(url, "https://integrate.api.nvidia.com/v1/chat/completions");
      const body = JSON.parse(init.body);
      assert.equal(body.model, "nvidia/test");
      assert.equal(body.messages[1].content, "Approved source");
      assert.equal(body.stream, true);
      return stream(
        [
          {
            choices: [
              {
                delta: {
                  reasoning_content: "private reasoning",
                  reasoning: "hidden",
                },
              },
            ],
          },
          part('{"answer":"Hello '),
          part('world"}', "stop"),
        ],
        true,
      );
    },
  });
  const result = await provider.complete({
    ...request(),
    onContent: (c) => seen.push(c),
  });
  assert.equal(result.content, '{"answer":"Hello world"}');
  assert.equal(result.provider, "nvidia");
  assert.equal(result.model, "nvidia/test-resolved");
  assert.doesNotMatch(seen.join(""), /private|hidden/);
});
test("NVIDIA failures remain bounded and sanitized", async () => {
  for (const [status, code] of [
    [400, "REMOTE_REQUEST_INVALID"],
    [401, "AUTH_INVALID"],
    [403, "AUTH_INVALID"],
    [404, "MODEL_UNAVAILABLE"],
    [429, "RATE_LIMITED"],
    [503, "REMOTE_SERVER_ERROR"],
  ]) {
    let calls = 0;
    const provider = new NvidiaProvider({
      credentials,
      fetchImpl: async () => {
        calls++;
        return new Response("nvapi-test-secret source-secret", {
          status,
          headers: { "retry-after": "11" },
        });
      },
    });
    await assert.rejects(provider.complete(request()), (error) => {
      assert.equal(error.code, code);
      assert.equal(error.details.retryAfterSeconds, 11);
      assert.doesNotMatch(error.message, /secret/);
      return true;
    });
    assert.equal(calls, 1);
  }
});
test("NVIDIA transport never retries rejected requests", async () => {
  for (const status of [429, 500, 502, 503, 504]) {
    let calls = 0;
    const provider = new NvidiaProvider({
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

test("NVIDIA rejects malformed, truncated and inline reasoning streams without retrying", async () => {
  for (const events of [
    [part("text")],
    [part("text", "length")],
    [{ choices: "bad" }],
    [part("<think>secret</think>", "stop")],
    [part("x".repeat(2 * 1024 * 1024), "stop")],
  ]) {
    let calls = 0;
    const provider = new NvidiaProvider({
      credentials,
      fetchImpl: async () => {
        calls++;
        return stream(events);
      },
    });
    await assert.rejects(provider.complete(request()), {
      code: "MODEL_INVALID_RESPONSE",
    });
    assert.equal(calls, 1);
  }
});
test("NVIDIA aborts pending requests on cancellation and original deadline", async () => {
  for (const cancel of [false, true]) {
    const controller = new AbortController();
    const provider = new NvidiaProvider({
      credentials,
      fetchImpl: async (_, init) =>
        new Promise((resolve, reject) => {
          init.signal.addEventListener(
            "abort",
            () => reject(init.signal.reason),
            { once: true },
          );
          if (cancel)
            setTimeout(
              () =>
                controller.abort(
                  new ModelRuntimeError("MODEL_CANCELLED", "Stopped"),
                ),
              5,
            );
        }),
    });
    await assert.rejects(
      provider.request("models", {}, () => assert.fail(), {
        signal: controller.signal,
        absoluteMs: 20,
      }),
      { code: cancel ? "MODEL_CANCELLED" : "REMOTE_TIMEOUT" },
    );
  }
});
test("NVIDIA synthetic check validates IDs, requires expected JSON, and never receives vault data", async () => {
  let calls = 0;
  const provider = new NvidiaProvider({
    credentials,
    fetchImpl: async (_, init) => {
      calls++;
      const body = JSON.parse(init.body);
      assert.equal(body.messages.length, 2);
      assert.doesNotMatch(JSON.stringify(body), /Approved source/);
      return stream([part('{"answer":"NVIDIA ONLINE"}', "stop")]);
    },
  });
  assert.equal((await provider.probe("nvidia/test")).passed, true);
  await assert.rejects(provider.probe("https://untrusted.invalid"), {
    code: "MODEL_INVALID_REQUEST",
  });
  assert.equal(calls, 1);
});

test("statistics plans retain structured JSON through the provider", async () => {
  const { STATISTICS_FORMAT } = require("../statistics.cjs");
  const plan = { calculations: [], limitation: "Need input values." };
  const provider = new NvidiaProvider({
    credentials,
    fetchImpl: async () => stream([part(JSON.stringify(plan), "stop")]),
  });
  const result = await provider.complete({
    ...request(),
    format: STATISTICS_FORMAT,
  });
  assert.deepEqual(JSON.parse(result.content), plan);
});
