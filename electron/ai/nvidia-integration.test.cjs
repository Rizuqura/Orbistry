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
const { NvidiaProvider } = require("./providers/nvidia-provider.cjs");
const {
  createOnlineSmokeFetch,
} = require("../../scripts/fixtures/online-smoke-fetch.cjs");
test("NVIDIA preserves source isolation, bounded history, identity, retry and restart across model switches", async (t) => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-nvidia-chat-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const { state, fetchImpl } = createOnlineSmokeFetch();
  const provider = new NvidiaProvider({
    fetchImpl,
    credentials: {
      get: async () => "nvapi-synthetic-smoke-key",
      status: async () => ({ configured: true }),
    },
  });
  const registry = new ModelRegistry(
    new ProviderRegistry({ nvidia: provider }),
    path.join(root, "settings"),
  );
  await registry.save({
    providerId: "nvidia",
    modelId: "nvidia/nemotron-smoke",
  });
  await fs.writeFile(path.join(root, "a.md"), "ALPHA allocation is 25%.");
  await fs.writeFile(path.join(root, "b.md"), "BETA allocation is 40%.");
  await fs.writeFile(path.join(root, "private.md"), "NEVER_TRANSMIT");
  await stations.addContext(root, ["a.md"]);
  let service = new ChatService({ registry, provider });
  const scope = { activeStationIds: [], matchMode: "any" };
  const alpha = await createBound(service, root, scope);
  const input = (chat) => ({
    ...scope,
    conversationId: chat.id,
    expectedContextId: chat.contextIdentity.id,
    requestId: randomUUID(),
    userMessage: "What allocation?",
  });
  let result;
  for (let i = 0; i < 14; i++)
    result = await service.run(root, 1, input(alpha));
  assert.equal(result.run.provider, "nvidia");
  assert.equal(result.run.diagnostics.includedExchanges, 12);
  assert.equal(result.run.diagnostics.droppedExchanges, 1);
  assert.equal(result.conversation.messages.at(-1).provider, "nvidia");
  assert.doesNotMatch(
    JSON.stringify(state.requests),
    /NEVER_TRANSMIT|BETA|Hidden reasoning/,
  );
  const before = JSON.stringify(alpha.contextIdentity);
  await registry.save({ modelId: "deepseek-ai/deepseek-smoke" });
  result = await service.run(root, 1, input(alpha));
  assert.equal(result.run.model, "deepseek-ai/deepseek-smoke");
  assert.equal(JSON.stringify(result.conversation.contextIdentity), before);
  state.status = 429;
  const failed = input(alpha);
  await assert.rejects(service.run(root, 1, failed), { code: "RATE_LIMITED" });
  state.status = 200;
  result = await service.run(root, 1, {
    ...input(alpha),
    retryOf: failed.requestId,
  });
  assert.equal(
    result.conversation.messages.filter((m) => m.role === "user").length,
    16,
  );
  await stations.clearContext(root);
  await stations.addContext(root, ["b.md"]);
  const beta = await createBound(service, root, scope);
  for (let i = 0; i < 10; i++) result = await service.run(root, 1, input(beta));
  assert.doesNotMatch(JSON.stringify(state.requests.at(-1)), /ALPHA|25%/);
  service = new ChatService({ registry, provider });
  await service.resume(root, alpha.id);
  result = await service.run(root, 1, input(alpha));
  assert.match(result.conversation.messages.at(-1).content, /ALPHA/);
  assert.equal(result.conversation.id, alpha.id);
  const records = await fs.readdir(path.join(root, ".wonnyy", "model-runs"));
  for (const file of records)
    assert.doesNotMatch(
      await fs.readFile(path.join(root, ".wonnyy", "model-runs", file), "utf8"),
      /nvapi-synthetic-smoke-key|Hidden reasoning/,
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
