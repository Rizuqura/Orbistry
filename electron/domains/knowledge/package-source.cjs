const {
  EnginePackageRegistry,
} = require("../../engines/registry/registry.cjs");
const { readKnowledgeIndex } = require("./knowledge-store.cjs");
const { validateData } = require("../../engines/contracts/contract.cjs");

/** Resolves one applied declaration. Only a live automatic Entity link permits the card's explicit Run action. */
async function packageSource(
  root,
  { id, declarationId },
  active,
  run = false,
  assignment = null,
) {
  /** Re-read authoritative configuration for admission and again before publication. */
  async function reference() {
    if (!active()) throw new Error("Universe changed.");
    const state = await readKnowledgeIndex(root, id);
    const source = state.menus
      .flatMap((menu) => menu.packageSources ?? [])
      .find((item) => item.id === declarationId);
    if (!source) throw new Error("Source is no longer applied to this Entity.");
    return source;
  }
  const source = await reference();
  let digest, operation;
  const registry = new EnginePackageRegistry(root, {
    authorize: async (request) => {
      await reference();
      return (
        (!assignment ||
          (assignment.digest === digest &&
            assignment.operation === operation &&
            assignment.approved &&
            (await assignment.authorize()))) &&
        active() &&
        request.entityId === id &&
        request.engineId === source.engineId &&
        request.operation === operation &&
        request.digest === digest
      );
    },
  });
  const state = await registry.read();
  if (!Object.hasOwn(state.packages, source.engineId))
    return { status: "package_missing" };
  const checked = await registry.installed(source.engineId, state);
  if (checked.record.disabled) return { status: "package_disabled" };
  if (!checked.record.trusted) return { status: "untrusted" };
  const contribution = checked.manifest.sources?.find(
    (item) => item.id === source.sourceId,
  );
  if (
    !contribution ||
    Number(checked.manifest.engine_version.split(".")[0]) !== source.major
  )
    return { status: "incompatible_version" };
  operation = contribution.operation;
  digest = checked.digest;
  const op = checked.manifest.operations.find((item) => item.id === operation);
  try {
    validateData(op.input_schema, source.input);
  } catch (error) {
    if (error.code === "ENGINE_DATA_INVALID")
      return { status: "invalid_configuration" };
    throw error;
  }
  const link = state.links.find(
    (item) =>
      item.entityId === id &&
      item.engineId === source.engineId &&
      item.digest === digest,
  );
  if (!link?.operations.includes(operation)) return { status: "unlinked" };
  if (
    (link.policy !== "automatic" && !assignment?.approved) ||
    (op.network === "outbound" && !link.allowNetwork)
  )
    return { status: "authorization_required" };
  if (!active()) throw new Error("Universe changed.");
  if (!run) return { status: "available" };
  const { receipt, data } = await registry.execute({
    entityId: id,
    engineId: source.engineId,
    operation,
    input: source.input,
    approved: assignment?.approved === true,
  });
  return { status: "completed", executionId: receipt.executionId, data };
}
module.exports = { packageSource };
