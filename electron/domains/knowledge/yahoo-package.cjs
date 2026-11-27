const {
  EnginePackageRegistry,
} = require("../../engines/registry/registry.cjs");
/** Admits a legacy source against the installed package, version, current Entity link and network consent.
 * Returns a checked operation plus a recheck for cache hits and post-fetch revocation. */
async function admitYahoo(root, entityId, operation, stillApplied) {
  const engineId = "yahoo-finance";
  const registry = new EnginePackageRegistry(root, {
    authorize: async (request) =>
      request.entityId === entityId &&
      request.engineId === engineId &&
      request.operation === operation &&
      request.digest === digest &&
      (await stillApplied()) === true,
  });
  const checked = await registry.installed(engineId);
  const digest = checked.digest;
  const source = checked.manifest.sources?.find(
    (item) => item.id === operation && item.operation === operation,
  );
  if (!source || checked.manifest.engine_version.split(".")[0] !== "1")
    throw new Error("Incompatible Yahoo Finance package.");
  /** Checks current grant identity so revoking and relinking does not revive an in-flight read. */
  async function grant() {
    const state = await registry.read(),
      pkg = state.packages[engineId],
      current = pkg?.versions[pkg.active];
    if (!current) throw new Error("Yahoo Finance package is missing.");
    if (current.disabled) throw new Error("Yahoo Finance package is disabled.");
    if (!current.trusted || current.digest !== digest)
      throw new Error("Review and trust the current Yahoo Finance package.");
    const link = state.links.find(
      (item) =>
        item.entityId === entityId &&
        item.engineId === engineId &&
        item.digest === digest &&
        item.operations.includes(operation),
    );
    if (!link)
      throw new Error("Link the Yahoo Finance operation to this Entity.");
    if (!link.allowNetwork || link.policy !== "automatic")
      throw new Error(
        "Automatic read and network authorization are required for this card.",
      );
    if ((await stillApplied()) !== true)
      throw new Error("The applied source changed.");
    return JSON.stringify(link);
  }
  const initial = await grant();
  return {
    key: initial,
    /** Performs a receipt-backed request with the exact listing and optional history range. */
    async fetch(input) {
      const result = await registry.execute({
        entityId,
        engineId,
        operation,
        input,
      });
      return result.data;
    },
    /** Rejects stale grants before releasing either cached or newly fetched data. */
    async verify() {
      if ((await grant()) !== initial)
        throw new Error("Package authorization changed.");
    },
  };
}
module.exports = { admitYahoo };
