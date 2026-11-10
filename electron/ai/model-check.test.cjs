const test = require("node:test");
const assert = require("node:assert/strict");
const { checkRemoteModel } = require("./model-check.cjs");
const { registerAiIpc, API_VERSION } = require("./ipc.cjs");
const { ModelRuntimeError } = require("./model-errors.cjs");

test("both remote providers receive only a synthetic source and bounded check settings", async () => {
  for (const providerId of ["gemini", "nvidia"]) {
    const controller = new AbortController();
    const result = await checkRemoteModel(
      {
        complete: async (request) => {
          assert.equal(request.signal, controller.signal);
          assert.equal(request.settings.absoluteTimeoutMs, 30000);
          assert.equal(request.settings.providerId, providerId);
          assert.equal(request.messages.length, 3);
          assert.equal(
            JSON.parse(request.messages[1].content).sourceId,
            "orbistry-model-check",
          );
          assert.equal(request.format.properties.answer.type, "string");
          return { content: '{"answer":"40%"}', finishReason: "stop" };
        },
      },
      providerId,
      "test-model",
      controller.signal,
    );
    assert.equal(result.passed, true);
    assert.equal(result.providerId, providerId);
  }
});

test("check results distinguish wrong answers, truncation, and rate limiting", async () => {
  for (const response of [
    { content: '{"answer":"25%"}', finishReason: "stop" },
    { content: '{"answer":"40%"}', finishReason: "length" },
  ])
    assert.equal(
      (
        await checkRemoteModel(
          { complete: async () => response },
          "gemini",
          "test",
        )
      ).passed,
      false,
    );
  const result = await checkRemoteModel(
    {
      complete: async () => {
        throw new ModelRuntimeError("RATE_LIMITED", "Wait before retrying.");
      },
    },
    "nvidia",
    "test",
  );
  assert.equal(result.code, "RATE_LIMITED");
});

test("remote check IPC requires handshake, validates input, and cancellation belongs to the initiating window", async () => {
  const handlers = new Map();
  let entered;
  const started = new Promise((resolve) => {
    entered = resolve;
  });
  registerAiIpc({
    ipcMain: { handle: (name, fn) => handlers.set(name, fn) },
    service: { exclusive: (fn) => fn() },
    registry: {
      providerFor: () => ({
        complete: (request) =>
          new Promise((resolve, reject) => {
            entered();
            request.signal.addEventListener(
              "abort",
              () => reject(request.signal.reason),
              { once: true },
            );
          }),
      }),
    },
  });
  const event = { sender: { id: 1 } };
  const input = { providerId: "nvidia", model: "nvidia/test" };
  assert.equal(
    (await handlers.get("ai:checkRemoteModel")(event, input)).error.code,
    "MODEL_RESTART_REQUIRED",
  );
  handlers.get("ai:handshake")(event, API_VERSION);
  assert.equal(
    (
      await handlers.get("ai:checkRemoteModel")(event, {
        ...input,
        source: "PRIVATE",
      })
    ).error.code,
    "MODEL_INVALID_REQUEST",
  );
  const running = handlers.get("ai:checkRemoteModel")(event, input);
  await started;
  await handlers.get("ai:stopModelChecks")(event);
  assert.equal((await running).value.code, "MODEL_CANCELLED");
});
