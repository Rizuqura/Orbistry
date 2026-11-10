const assert = require("node:assert/strict");
const http = require("node:http");
const test = require("node:test");
const { OllamaProvider, validateBaseUrl } = require("./ollama-provider.cjs");

async function withServer(handler, run) {
  const server = http.createServer(handler);
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  try {
    await run(`http://127.0.0.1:${address.port}`);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

function json(response, status, value) {
  response.writeHead(status, { "Content-Type": "application/json" });
  response.end(JSON.stringify(value));
}

test("Ollama provider accepts only local unauthenticated HTTP endpoints", () => {
  assert.equal(
    validateBaseUrl("http://localhost:11434"),
    "http://localhost:11434",
  );
  assert.throws(
    () => validateBaseUrl("https://ollama.com"),
    (error) => error.code === "MODEL_INVALID_REQUEST",
  );
  assert.throws(
    () => validateBaseUrl("http://example.com:11434"),
    (error) => error.code === "MODEL_INVALID_REQUEST",
  );
  assert.throws(
    () => validateBaseUrl("http://user:secret@localhost:11434"),
    (error) => error.code === "MODEL_INVALID_REQUEST",
  );
});

test("Ollama provider lists installed models with normalized metadata", async () => {
  await withServer(
    (request, response) => {
      assert.equal(request.url, "/api/tags");
      json(response, 200, {
        models: [
          {
            name: "qwen3:4b",
            model: "qwen3:4b",
            size: 2_497_293_931,
            digest: "digest",
            modified_at: "2026-09-02T00:00:00Z",
            details: {
              family: "qwen3",
              parameter_size: "4.0B",
              quantization_level: "Q4_K_M",
              context_length: 262144,
            },
            capabilities: ["completion", "thinking"],
          },
        ],
      });
    },
    async (baseUrl) => {
      const provider = new OllamaProvider({ baseUrl });
      const status = await provider.getStatus();
      assert.equal(status.online, true);
      assert.deepEqual(status.models[0], {
        name: "qwen3:4b",
        model: "qwen3:4b",
        size: 2_497_293_931,
        digest: "digest",
        modifiedAt: "2026-09-02T00:00:00Z",
        family: "qwen3",
        parameterSize: "4.0B",
        quantization: "Q4_K_M",
        contextLength: 262144,
        capabilities: ["completion", "thinking"],
      });
    },
  );
});

test("M7.1 connectivity proof sends no vault context and requires the exact response", async () => {
  let chatBody;
  await withServer(
    async (request, response) => {
      if (request.url === "/api/tags") {
        json(response, 200, {
          models: [
            { name: "qwen3:4b", model: "qwen3:4b", size: 100, details: {} },
          ],
        });
        return;
      }
      assert.equal(request.url, "/api/chat");
      const chunks = [];
      for await (const chunk of request) chunks.push(chunk);
      chatBody = JSON.parse(Buffer.concat(chunks).toString("utf8"));
      json(response, 200, {
        model: "qwen3:4b",
        created_at: "2026-09-03T00:00:00Z",
        message: { role: "assistant", content: '{"status":"ORBISTRY ONLINE"}' },
        done: true,
        done_reason: "stop",
        prompt_eval_count: 14,
        eval_count: 4,
        total_duration: 1000,
      });
    },
    async (baseUrl) => {
      const provider = new OllamaProvider({ baseUrl });
      const result = await provider.testModel("qwen3:4b");
      assert.equal(result.passed, true);
      assert.equal(result.sources.length, 0);
      assert.deepEqual(chatBody.messages, [
        { role: "user", content: "Return the required connectivity status." },
      ]);
      assert.equal(chatBody.stream, false);
      assert.equal(chatBody.think, false);
      assert.equal(chatBody.options.num_ctx, 8192);
      assert.equal(chatBody.options.num_predict, 768);
      assert.equal(chatBody.format.properties.status.const, "ORBISTRY ONLINE");
      assert.equal("tools" in chatBody, false);
      assert.equal("context" in chatBody, false);
    },
  );
});

test("Ollama provider reports missing models before attempting generation", async () => {
  let chatCalled = false;
  await withServer(
    (request, response) => {
      if (request.url === "/api/chat") chatCalled = true;
      json(response, 200, { models: [] });
    },
    async (baseUrl) => {
      const provider = new OllamaProvider({ baseUrl });
      await assert.rejects(
        () => provider.testModel("qwen3:4b"),
        (error) => error.code === "MODEL_NOT_FOUND",
      );
      assert.equal(chatCalled, false);
    },
  );
});

test("Ollama provider converts unreachable runtimes into a structured offline status", async () => {
  const provider = new OllamaProvider({
    baseUrl: "http://127.0.0.1:1",
    statusTimeoutMs: 100,
  });
  const status = await provider.getStatus();
  assert.equal(status.online, false);
  assert.equal(status.error.code, "MODEL_OFFLINE");
});

test("Ollama provider cancels only the request attached to the supplied signal", async () => {
  const provider = new OllamaProvider({
    fetchImpl: (_url, options) =>
      new Promise((_resolve, reject) => {
        options.signal.addEventListener(
          "abort",
          () =>
            reject(Object.assign(new Error("aborted"), { name: "AbortError" })),
          { once: true },
        );
      }),
  });
  const controller = new AbortController();
  const pending = provider.complete({
    model: "qwen3:4b",
    messages: [{ role: "user", content: "Question" }],
    signal: controller.signal,
  });
  controller.abort();
  await assert.rejects(pending, (error) => error.code === "MODEL_CANCELLED");
});

test("Ollama provider allows five minutes for a cold completion by default", () => {
  const provider = new OllamaProvider({ fetchImpl: async () => {} });
  assert.equal(provider.completionTimeoutMs, 300_000);
});
