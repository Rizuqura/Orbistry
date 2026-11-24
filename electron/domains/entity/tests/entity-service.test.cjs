const test = require("node:test");
const assert = require("node:assert/strict");
const { EntityService } = require("../index.cjs");

/** Exercises each boundary with a forged grant and a repository that has no usable operations. */
test("Entity service denies by default and ignores renderer claims and truthy grants", async () => {
  const context = { root: "fixture", authorized: true, entityIds: ["a", "b"] };
  for (const authorization of [
    undefined,
    () => ({ allowed: true }),
    () => false,
  ]) {
    const service = new EntityService({ repository: {}, authorization });
    for (const request of [
      () => service.load(context, "a"),
      () => service.getContextReferences(context, "b"),
      () => service.rename(context, "a", "renamed"),
      () => service.assignSources(context, "a", ["secret.md"]),
      () => service.unassignSource(context, "a", "secret.md"),
    ])
      await assert.rejects(request, { code: "ENTITY_ACCESS_DENIED" });
  }
});

/** Prevents disclosure after admission changes while an Entity record is being read. */
test("Entity read rechecks the scoped host policy before returning data", async () => {
  let active = true;
  const authorization = ({ root, entityId, operation }) =>
    active && root === "fixture" && entityId === "a" && operation === "read";
  const service = new EntityService({
    authorization,
    repository: {
      async load() {
        active = false;
        return { key: "a", metadata: { name: "private" } };
      },
    },
  });
  await assert.rejects(service.load({ root: "fixture" }, "a"), {
    code: "ENTITY_ACCESS_DENIED",
  });
});
