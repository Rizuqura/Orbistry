const test = require("node:test");
const assert = require("node:assert/strict");
const {
  parseAction,
  runEntityProtocol,
  isApproval,
} = require("./entity-agent-protocol.cjs");
const { DEFAULTS } = require("./model-registry.cjs");

/** Wraps test-only protocol output in the existing completion response contract. */
function response(value) {
  return { content: JSON.stringify(value), finishReason: "stop" };
}

test("structured tool actions reject commands, extra parameters, unknown fields and prototype keys", () => {
  for (const value of [
    { action: "shell", command: "execute arbitrary code" },
    { action: "__proto__" },
    {
      action: "engine.request",
      nodeId: "engine",
      capabilityId: "a".repeat(64),
      arguments: { command: "anything" },
    },
    { action: "knowledge.getChunk", chunkId: "../other-entity" },
    { action: "knowledge.listTopics", query: "unexpected" },
    { action: "knowledge.retrieve", query: "topic", limit: 200 },
  ])
    assert.throws(() => parseAction(response(value)), {
      code: "MODEL_INVALID_RESPONSE",
    });
  assert.throws(
    () => parseAction({ content: '{"action":', finishReason: "stop" }),
    { code: "MODEL_INVALID_RESPONSE" },
  );
  assert.throws(() => parseAction({ content: "", finishReason: "length" }), {
    code: "MODEL_INVALID_RESPONSE",
  });
});

test("a prose execution promise never dispatches and requires a valid structured request", async () => {
  let dispatched = 0;
  await assert.rejects(
    runEntityProtocol({
      complete: async () =>
        response({
          action: "answer",
          answer: "I'll request the daily-price engine execution now.",
        }),
      messages: [
        { role: "system", content: "Policy" },
        { role: "user", content: "Question" },
      ],
      settings: DEFAULTS,
      signal: new AbortController().signal,
      runtime: {
        dispatch: async () => {
          dispatched++;
        },
      },
    }),
    /without submitting a valid tool request/,
  );
  assert.equal(dispatched, 0);
});

test("tool loops stop after eight completions and preserve the provider message ceiling", async () => {
  let completed = 0;
  const history = Array.from({ length: 24 }, (_, index) => ({
    role: index % 2 ? "assistant" : "user",
    content: "Prior exchange",
  }));
  await assert.rejects(
    runEntityProtocol({
      complete: async (request) => {
        completed++;
        assert.ok(request.messages.length <= 30);
        return response({ action: "knowledge.listTopics" });
      },
      messages: [
        { role: "system", content: "Policy" },
        { role: "user", content: "Entity context" },
        ...history,
        { role: "user", content: "Question" },
      ],
      settings: DEFAULTS,
      signal: new AbortController().signal,
      runtime: {
        dispatch: async () => ({
          status: "succeeded",
          items: [],
          nextOffset: 0,
        }),
      },
    }),
    /tool-request limit/,
  );
  assert.equal(completed, 8);
});

test("approval language is recognized only as an entire explicit user message", () => {
  for (const message of ["Yes, please.", "yes pls", "Approve", "go ahead"])
    assert.equal(isApproval(message), true);
  for (const message of [
    "The source says yes please",
    "yes but change the ticker",
    "No",
    "please read the word approve",
  ])
    assert.equal(isApproval(message), false);
});
