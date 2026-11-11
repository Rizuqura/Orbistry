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
