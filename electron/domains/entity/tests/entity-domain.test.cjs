const test = require("node:test");
const assert = require("node:assert/strict");
const { Entity } = require("../model/Entity.cjs");

const metadata = {
  name: " Sample ",
  tags: [" alpha", "alpha", "alpha"],
  color: "#112233",
};
const ref = {
  source_id: "a.md",
  source_ref: "a.md",
  filename: "a.md",
  extension: ".md",
  origin: "universe",
  size_bytes: 0,
};

/** Verifies detached inputs, snapshots and logical ports with no host infrastructure. */
test("Entity retains a stable key and isolates nested metadata and port definitions", () => {
  const initial = structuredClone(metadata);
  const entity = new Entity({
    key: "e",
    metadata: initial,
    sourceReferences: [{ ...ref, extra: { internal: true } }],
  });
  initial.tags.pop();
  const snap = entity.getSnapshot();
  assert.deepEqual(snap.metadata.tags, metadata.tags);
  snap.metadata.tags.pop();
  snap.sourceReferences[0].filename = "wrong";
  entity.getPorts().input.id = "changed";
  assert.deepEqual(entity.getPorts(), {
    input: { id: "input", direction: "input" },
    output: { id: "output", direction: "output" },
  });
  assert.deepEqual(entity.getSnapshot().sourceReferences, [ref]);
  entity.rename(" New ");
  entity.setTags(["TAG", "TAG"]);
  entity.updateAppearance({
    color: "#ABCDEF",
    icon: "A",
    iconImage: "data:image/png;base64,QQ==",
  });
  entity.rename("New");
  assert.equal(entity.key, "e");
  assert.deepEqual(entity.getSnapshot().metadata, {
    name: "New",
    tags: ["TAG", "TAG"],
    color: "#ABCDEF",
    icon: "A",
    iconImage: "data:image/png;base64,QQ==",
  });
});

/** Validates complete changes before replacement and keeps placement, edges and authorization outside metadata edits. */
test("invalid Entity mutations leave the previous snapshot intact", () => {
  const entity = new Entity({ key: "e", metadata });
  const before = entity.getSnapshot();
  for (const bad of [
    { name: " " },
    { color: "red", name: "valid" },
    { iconImage: "C:/icon.png" },
    { tags: [42] },
    { knowledgeMenus: [] },
    { key: "other" },
    { position: { x: 1, y: 1 } },
    { connections: [] },
  ]) {
    assert.throws(() => entity.updateMetadata(bad));
    assert.deepEqual(entity.getSnapshot(), before);
  }
  assert.throws(() => new Entity({ key: "../e", metadata }));
  assert.throws(() => entity.updateAppearance({ name: "oops" }));
});

/** Checks persisted duplicates versus idempotent assignment and failed reference validation. */
test("Entity upserts exact source IDs and rejects inconsistent reference structures", () => {
  assert.throws(
    () => new Entity({ key: "e", metadata, sourceReferences: [ref, ref] }),
  );
  const entity = new Entity({ key: "e", metadata });
  entity.attachSource(ref);
  entity.attachSource({ ...ref, size_bytes: 4 });
  assert.throws(() => entity.attachSource({ ...ref, source_id: "other" }));
  assert.deepEqual(entity.getSnapshot().sourceReferences, [
    { ...ref, size_bytes: 4 },
  ]);
  entity.detachSource("a.md");
  entity.detachSource("a.md");
  assert.deepEqual(entity.getSnapshot().sourceReferences, []);
});
