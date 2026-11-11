const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { readFile, readBinding } = require("./ai/construction-context.cjs");
const { listMemoryFiles, isMemoryPath } = require("./agent-memory-source.cjs");
const { ChatService } = require("./ai/chat-service.cjs");
const knowledge = require("./station-service.cjs");
const { scanVault } = require("./vault-service.cjs");
const memory = "agentContext.memory/contract.md";
async function fixture(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-memory-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  await fs.mkdir(path.join(root, "agentContext.memory"));
  await fs.writeFile(
    path.join(root, memory),
    "# Reviewed contract\nOnly verified claims.",
  );
  await fs.writeFile(path.join(root, "research.md"), "# Research");
  const service = {
    knowledge,
    store: async (v) => ({ root: await fs.realpath(v) }),
  };
  return { root, service };
}
test("settings can review hidden memory and list it without indexing it", async (t) => {
  const { root, service } = await fixture(t);
  const snapshot = await scanVault(root);
  assert.deepEqual(
    snapshot.entries.map((e) => e.name),
    ["research.md"],
  );
  assert.deepEqual(await listMemoryFiles(root), [memory]);
  const result = await readFile(service, root, memory);
  assert.equal(result.binding.relativePath, memory);
  assert.equal(
    result.sources[0].content,
    "# Reviewed contract\nOnly verified claims.",
  );
  assert.equal(result.binding.contextIdentity.sources.length, 1);
  await readBinding(service, root, result.binding);
});
test("Agent construction cannot list any Vault or hidden memory files", async (t) => {
  const { root } = await fixture(t);
  const service = new ChatService({ agents: {} });
  service.store = async () => ({ root });
  const files = await service.listConstructionFiles(root);
  assert.deepEqual(files, []);
});
test("universe scope cannot acquire hidden memory implicitly", async (t) => {
  const { root } = await fixture(t);
  const scope = await knowledge.prepareBrainScope(root, {
    ownerId: "test-universe",
    activeStationIds: [],
    matchMode: "any",
  });
  assert(
    !scope.sources.some((s) =>
      s.relativePath.startsWith("agentContext.memory/"),
    ),
  );
});
test("reviewed memory scope is owner-bound and denies other files", async (t) => {
  const { root } = await fixture(t);
  const scope = await knowledge.prepareBrainScope(
    root,
    { ownerId: "review-owner", activeStationIds: [], matchMode: "any" },
    [{ sourceId: memory, relativePath: memory }],
    true,
  );
  assert.equal(scope.sources.length, 1);
  await assert.rejects(
    knowledge.readBrainSource(root, {
      ownerId: "different-owner",
      scopeId: scope.id,
      sourceId: memory,
    }),
  );
  await assert.rejects(
    knowledge.readBrainSource(root, {
      ownerId: "review-owner",
      scopeId: scope.id,
      sourceId: "research.md",
    }),
  );
});
test("changed and missing bound memory are rejected", async (t) => {
  const { root, service } = await fixture(t);
  const result = await readFile(service, root, memory);
  await fs.writeFile(path.join(root, memory), "Changed");
  await assert.rejects(readBinding(service, root, result.binding));
  await fs.unlink(path.join(root, memory));
  await assert.rejects(readBinding(service, root, result.binding));
});
test("bindings cannot be reused for another vault", async (t) => {
  const a = await fixture(t),
    b = await fixture(t);
  const result = await readFile(a.service, a.root, memory);
  await assert.rejects(readBinding(b.service, b.root, result.binding));
});
test("traversal and unsupported memory types are rejected", () => {
  for (const p of [
    "agentContext.memory/../research.md",
    "agentContext.memory/contract.js",
    "../agentContext.memory/contract.md",
    "agentContext.memory\\contract.md",
    "agentContext.memory/./contract.md",
  ])
    assert.equal(isMemoryPath(p), false, p);
});
test("mixed explicitly approved memory and research remain scoped", async (t) => {
  const { root } = await fixture(t);
  const scope = await knowledge.prepareBrainScope(
    root,
    { ownerId: "mixed-owner", activeStationIds: [], matchMode: "any" },
    [memory, "research.md"].map((p) => ({ sourceId: p, relativePath: p })),
    true,
  );
  assert.equal(scope.sources.length, 2);
  for (const source of scope.sources)
    await knowledge.readBrainSource(root, {
      ownerId: "mixed-owner",
      scopeId: scope.id,
      sourceId: source.id,
    });
});
