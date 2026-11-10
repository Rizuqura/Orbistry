const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const stations = require("../station-service.cjs");
const { ChatService } = require("./chat-service.cjs");
const { ModelRegistry } = require("./model-registry.cjs");
const { ProviderRegistry } = require("./provider-registry.cjs");
const { GeminiProvider } = require("./providers/gemini-provider.cjs");

test("local to Gemini and back preserves authorization, bounded history, provenance, retries and restart", async (t) => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-online-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const sent = [];
  let status = 200;
  const local = {
    listModels: async () => [
      { name: "qwen3:4b", capabilities: ["completion"] },
    ],
    getStatus: async () => ({
      online: true,
      models: await local.listModels(),
      error: null,
    }),
    complete: async (request) => ({
      model: request.model,
      provider: "ollama",
      content: '{"answer":"ALPHA 25%"}',
      finishReason: "stop",
      usage: null,
    }),
  };
  const gemini = new GeminiProvider({
    credentials: {
      get: async () => "test-secret-key",
      status: async () => ({ configured: true, secureStorageAvailable: true }),
    },
    fetchImpl: async (_url, init) => {
      if (!init.body)
        return Response.json({
          models: [
            {
              name: "models/gemini-test",
              supportedGenerationMethods: ["generateContent"],
              inputTokenLimit: 32768,
              outputTokenLimit: 8192,
            },
          ],
        });
      const body = JSON.parse(init.body);
      sent.push(body);
      if (status !== 200)
        return new Response("test-secret-key", {
          status,
          headers: { "retry-after": "1" },
        });
      const source = JSON.parse(body.contents[0].parts[0].text);
      const answer = source.content.includes("ALPHA")
        ? "ALPHA 25%"
        : "BETA 40%";
      return new Response(
        `data: ${JSON.stringify({ candidates: [{ content: { parts: [{ text: JSON.stringify({ answer }) }] }, finishReason: "STOP" }], modelVersion: "gemini-test-001" })}\n\n`,
        { headers: { "content-type": "text/event-stream" } },
      );
    },
  });
  const registry = new ModelRegistry(
    new ProviderRegistry({ ollama: local, gemini }),
    path.join(root, "settings"),
  );
  await registry.save({ modelId: "qwen3:4b" });
  await fs.writeFile(path.join(root, "a.md"), "ALPHA allocation 25%.");
  await fs.writeFile(path.join(root, "b.md"), "BETA allocation 40%.");
  await fs.writeFile(path.join(root, "private.md"), "DO_NOT_SEND_THIS");
  await stations.addContext(root, ["a.md"]);
  let service = new ChatService({ registry, provider: local });
  const scope = { activeStationIds: [], matchMode: "any" };
  const alpha = await createBound(service, root, scope);
  const input = (chat = alpha) => ({
    ...scope,
    conversationId: chat.id,
    expectedContextId: chat.contextIdentity.id,
    requestId: randomUUID(),
    userMessage: "What allocation?",
  });
  await service.run(root, 1, input());
  const before = await fs.readFile(
    path.join(root, ".wonnyy", "stations.json"),
    "utf8",
  );
  await registry.save({ providerId: "gemini", modelId: "gemini-test" });
  assert.equal(
    await fs.readFile(path.join(root, ".wonnyy", "stations.json"), "utf8"),
    before,
  );
  let result;
  for (let i = 0; i < 14; i++) result = await service.run(root, 1, input());
  assert.equal(result.conversation.id, alpha.id);
  assert.equal(result.run.provider, "gemini");
  assert.equal(result.run.model, "gemini-test-001");
  assert.equal(result.run.diagnostics.executionLocation, "remote");
  assert.equal(result.run.diagnostics.includedExchanges, 12);
  assert.equal(result.run.diagnostics.droppedExchanges, 2);
  assert.equal(result.conversation.messages.at(-1).provider, "gemini");
  assert.ok(
    sent[0].contents.some(
      (m) => m.role === "model" && m.parts[0].text === "ALPHA 25%",
    ),
  );
  assert.doesNotMatch(JSON.stringify(sent), /DO_NOT_SEND_THIS|BETA/);
  status = 429;
  const failed = input();
  await assert.rejects(service.run(root, 1, failed), { code: "RATE_LIMITED" });
  const failure = (await service.list(root))[0];
  assert.equal(failure.attempts.at(-1).status, "failed");
  assert.equal(
    sent.length,
    15,
    "no automatic remote retry or provider failover",
  );
  status = 200;
  result = await service.run(root, 1, {
    ...input(),
    retryOf: failed.requestId,
  });
  assert.equal(
    result.conversation.messages.filter((m) => m.role === "user").length,
    16,
    "retry reuses failed question",
  );
  await stations.clearContext(root);
  await stations.addContext(root, ["b.md"]);
  const beta = await createBound(service, root, scope);
  for (let i = 0; i < 10; i++) await service.run(root, 1, input(beta));
  assert.doesNotMatch(JSON.stringify(sent.at(-1)), /ALPHA|25%/);
  service = new ChatService({ registry, provider: local });
  assert.equal((await service.list(root)).length, 2);
  await service.resume(root, alpha.id);
  await registry.save({ providerId: "ollama", modelId: "qwen3:4b" });
  result = await service.run(root, 1, input());
  assert.equal(result.run.provider, "ollama");
  assert.equal(
    result.conversation.contextIdentity.id,
    alpha.contextIdentity.id,
  );
  await assert.rejects(registry.save({ providerId: "unknown" }), {
    code: "MODEL_INVALID_REQUEST",
  });
  assert.equal((await registry.read()).providerId, "ollama");
  const records = await fs.readdir(path.join(root, ".wonnyy", "model-runs"));
  for (const file of records)
    assert.doesNotMatch(
      await fs.readFile(path.join(root, ".wonnyy", "model-runs", file), "utf8"),
      /test-secret-key/,
    );
});

async function createBound(service, root, _scope) {
  const box = await service.saveBox(root, {
    name: "Test " + require("node:crypto").randomUUID(),
  });
  return service.create(root, {
    contextBoxId: box.id,
    creationId: require("node:crypto").randomUUID(),
  });
}
