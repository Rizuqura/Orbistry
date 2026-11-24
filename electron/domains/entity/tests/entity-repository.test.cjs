const assert = require("node:assert/strict");
const test = require("node:test");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { EntityService } = require("../index.cjs");
const legacy = require("../worldview-store.cjs");
const { WorldViewService } = require("../../worldview/index.cjs");
const { registerWorldViewIpc } = require("../../../core/ipc/worldview-ipc.cjs");

/** Creates an empty disposable Universe and removes only its verified temporary directory. */
async function fixture(t) {
  const prefix = path.join(os.tmpdir(), "orbistry-entity-oop-");
  const root = await fs.mkdtemp(prefix);
  t.after(async () => {
    assert.ok(path.resolve(root).startsWith(path.resolve(prefix)));
    await fs.rm(root, { recursive: true, force: true });
  });
  return { root };
}

/** Builds a combined legacy chip to exercise the same upsert as the renderer. */
function chip(id) {
  return {
    id,
    name: id,
    color: "#112233",
    icon: "star",
    tags: ["A", "A"],
    position: { x: 4, y: -1 },
  };
}

/** Exercises real cross-domain writes, reference-only lookup and preservation of YAML extension fields and stored body. */
test("Entity-only edits preserve WorldView placement, edges and legacy companion ownership", async (t) => {
  const context = await fixture(t);
  const { root } = context;
  const entity = new EntityService({
    authorization: ({ entityId }) => entityId === "a",
  });
  const world = new WorldViewService({ authorization: () => true });
  await assert.rejects(entity.load(context, "a"), { code: "ENOENT" });
  assert.deepEqual(await fs.readdir(root), []);
  await world.saveChip(context, chip("a"));
  await world.saveChip(context, chip("b"));
  const edge = {
    id: "ab",
    sourceEntityId: "a",
    targetEntityId: "b",
    sourcePortId: "west",
    targetPortId: "north",
    name: "supplies",
    definition: "",
    direction: "directed",
  };
  await world.createConnection(context, edge);
  const file = path.join(root, ".wonnyy", "worldview", "entities", "a.md");
  const record = legacy.parseEntityIndex(await fs.readFile(file, "utf8"), "a");
  record.metadata.custom = { revision: 7 };
  record.metadata.position.layer = 9;
  record.body = "Human notes\r\nretain this line.\n";
  await fs.writeFile(file, legacy.serializeEntityIndex(record));
  await fs.writeFile(path.join(root, "report.md"), "original");
  await entity.assignSources(context, "a", ["report.md", "report.md"]);
  const withSource = legacy.parseEntityIndex(
    await fs.readFile(file, "utf8"),
    "a",
  );
  withSource.metadata.sources[0].extension_property = ["keep"];
  await fs.writeFile(file, legacy.serializeEntityIndex(withSource));
  await entity.assignSources(context, "a", ["report.md"]);
  await Promise.all([
    entity.rename(context, "a", "After"),
    entity.updateMetadata(context, "a", { tags: ["same", "same"] }),
  ]);
  const logical = await entity.load(context, "a");
  assert.deepEqual(Object.keys(logical).sort(), [
    "createdAt",
    "key",
    "metadata",
    "sourceReferences",
  ]);
  assert.equal(logical.key, "a");
  assert.equal(logical.createdAt, record.metadata.created_at);
  assert.equal(logical.metadata.name, "After");
  assert.equal(logical.metadata.icon, "star");
  assert.deepEqual(logical.metadata.tags, ["same", "same"]);
  assert.deepEqual(
    logical.sourceReferences.map((s) => s.source_id),
    ["report.md"],
  );
  const saved = legacy.parseEntityIndex(await fs.readFile(file, "utf8"), "a");
  assert.deepEqual(saved.metadata.position, record.metadata.position);
  assert.deepEqual(saved.metadata.custom, record.metadata.custom);
  assert.equal(saved.body, record.body);
  assert.deepEqual(saved.metadata.sources[0].extension_property, ["keep"]);
  const state = await world.load(context);
  assert.deepEqual(state.connectors, [edge]);
  await world.saveChip(context, {
    ...state.chips.find((item) => item.id === "a"),
    position: { x: 100, y: -10 },
  });
  assert.deepEqual(await entity.load(context, "a"), logical);
  const references = await entity.getContextReferences(context, "a");
  assert.deepEqual(references.knowledgeCard, {
    entityId: "a",
    menus: [{ id: "overview", title: "Overview" }],
  });
  for (const field of [
    "appliedIndex",
    "backendIdentity",
    "capabilityLinks",
    "agentAssignments",
  ])
    assert.deepEqual(references[field], { entityId: "a" });
  await assert.rejects(entity.getContextReferences(context, "b"), {
    code: "ENTITY_ACCESS_DENIED",
  });
  assert.deepEqual(
    await fs
      .readdir(path.join(root, ".wonnyy", "worldview"))
      .then((names) => names.sort()),
    ["connectors", "entities"],
  );
  assert.deepEqual((await fs.readdir(root)).sort(), [".wonnyy", "report.md"]);
});

/** Ensures revocation during a queued mutation or an invalid batch leaves even the original bytes unchanged. */
test("Entity writes recheck admission before persistence and require trusted Vault validation", async (t) => {
  const context = await fixture(t);
  const { root } = context;
  await legacy.saveWorldViewChip(root, chip("a"));
  await fs.writeFile(path.join(root, "ok.md"), "original");
  const file = path.join(root, ".wonnyy", "worldview", "entities", "a.md");
  const original = await fs.readFile(file, "utf8");
  let calls = 0;
  const revoked = new EntityService({ authorization: () => ++calls === 1 });
  await assert.rejects(revoked.rename(context, "a", "Denied"), {
    code: "ENTITY_ACCESS_DENIED",
  });
  calls = 0;
  await assert.rejects(revoked.assignSources(context, "a", ["ok.md"]), {
    code: "ENTITY_ACCESS_DENIED",
  });
  const service = new EntityService({ authorization: () => true });
  await assert.rejects(
    service.assignSources(context, "a", ["ok.md", "../outside"]),
  );
  await assert.rejects(
    service.updateMetadata(context, "a", { name: "valid", color: "invalid" }),
  );
  assert.equal(await fs.readFile(file, "utf8"), original);
});

/** Checks captured-root rejection and the current assignment DTO through the production operation table. */
test("guarded source IPC retains the chip DTO and only detaches an association", async (t) => {
  const { root } = await fixture(t);
  await legacy.saveWorldViewChip(root, chip("a"));
  await fs.writeFile(path.join(root, "doc.md"), "original");
  const handlers = new Map();
  registerWorldViewIpc(
    { handle: (name, fn) => handlers.set(name, fn) },
    () => root,
    {},
  );
  const assign = handlers.get("worldview:assign");
  const input = { id: "a", vaultPath: root, sourceRefs: ["doc.md"] };
  assert.equal(
    (
      await assign(null, {
        ...input,
        vaultPath: root + "-different",
        authorized: true,
      })
    ).ok,
    false,
  );
  const assigned = await assign(null, input);
  assert.equal(assigned.ok, true);
  assert.equal(assigned.value.sources[0].status, "available");
  assert.equal(assigned.value.id, "a");
  assert.deepEqual(assigned.value.position, chip("a").position);
  const removed = await handlers.get("worldview:unassign")(null, {
    vaultPath: root,
    id: "a",
    sourceId: "doc.md",
  });
  assert.deepEqual(removed.value.sources, []);
  assert.equal(
    await fs.readFile(path.join(root, "doc.md"), "utf8"),
    "original",
  );
});

/** Simulates an out-of-process writer between the queued read and atomic replacement. */
test("Entity metadata patch detects an external edit and preserves the other writer's bytes", async (t) => {
  const { root } = await fixture(t);
  await legacy.saveWorldViewChip(root, chip("a"));
  const file = path.join(root, ".wonnyy", "worldview", "entities", "a.md");
  const edited = (await fs.readFile(file, "utf8")) + "\nExternal note.\n";
  let admissions = 0;
  const service = new EntityService({
    authorization: async () => {
      if (++admissions === 2) await fs.writeFile(file, edited);
      return true;
    },
  });
  await assert.rejects(
    service.rename({ root }, "a", "Lost update"),
    /changed on disk/,
  );
  assert.equal(await fs.readFile(file, "utf8"), edited);
});
