const { EnginePackageRegistry } = require("../registry/registry.cjs");
/** Describes configured package sources for Identity without loading code, authorizing execution or copying provider data. */
async function describePackageSources(root, entityId, index) {
  const declarations = index.menus.flatMap((menu) => [
    ...(menu.packageSources ?? []).map((ref) => ({ ...ref, menuId: menu.id })),
    ...(menu.prices ?? []).map((item) => ({
      id: item.id,
      engineId: "yahoo-finance",
      sourceId: "price",
      major: 1,
    })),
    ...(menu.finance ?? []).map((item) => ({
      id: item.id,
      engineId: "yahoo-finance",
      sourceId: item.kind,
      major: 1,
    })),
  ]);
  if (!declarations.length) return [];
  if (declarations.length > 1000)
    throw new Error("Entity exceeds its package source limit.");
  const registry = new EnginePackageRegistry(root),
    state = await registry.read(),
    packages = new Map();
  const descriptions = [];
  for (const ref of declarations) {
    let status = "package_missing",
      version = null,
      digest = null,
      operation = null,
      grantId = null;
    if (Object.hasOwn(state.packages, ref.engineId)) {
      if (!packages.has(ref.engineId)) {
        try {
          packages.set(
            ref.engineId,
            await registry.installed(ref.engineId, state),
          );
        } catch (error) {
          if (
            ![
              "ENOENT",
              "ENGINE_INTEGRITY_FAILED",
              "ENGINE_CHANGED",
              "ENGINE_JSON_INVALID",
              "ENGINE_FILE_INVALID",
              "ENGINE_SIGNATURE_INVALID",
              "ENGINE_PACKAGE_TOO_LARGE",
              "ENGINE_MANIFEST_INVALID",
              "ENGINE_PATH_INVALID",
              "ENGINE_SCHEMA_INVALID",
            ].includes(error.code)
          )
            throw error;
          packages.set(ref.engineId, null);
        }
      }
      const pkg = packages.get(ref.engineId);
      status = "integrity_failed";
      if (pkg) {
        digest = pkg.digest;
        version = pkg.manifest.engine_version;
        operation =
          pkg.manifest.sources?.find((item) => item.id === ref.sourceId)
            ?.operation ?? null;
        const link = state.links.find(
          (item) =>
            item.entityId === entityId &&
            item.engineId === ref.engineId &&
            item.digest === digest,
        );
        grantId = link?.grantId ?? null;
        const contract = pkg.manifest.operations.find(
          (item) => item.id === operation,
        );
        if (pkg.record.disabled) status = "package_disabled";
        else if (!pkg.record.trusted) status = "untrusted";
        else if (!contract || Number(version.split(".")[0]) !== ref.major)
          status = "incompatible_version";
        else if (ref.input && !validInput(contract, ref.input))
          status = "invalid_configuration";
        else if (!link?.operations.includes(operation)) status = "unlinked";
        else if (
          link.policy === "manual" ||
          (contract.network === "outbound" && !link.allowNetwork)
        )
          status = "authorization_required";
        else status = "available";
      }
    }
    descriptions.push({
      ...(ref.menuId ? { menuId: ref.menuId } : {}),
      declarationId: ref.id,
      engineId: ref.engineId,
      sourceId: ref.sourceId,
      version,
      digest,
      operation,
      status,
      ...(grantId ? { grantId } : {}),
    });
  }
  return descriptions;
}
/** Marks an invalid saved argument locally without invalidating the rest of the Identity. */
function validInput(contract, input) {
  try {
    require("../contracts/contract.cjs").validateData(
      contract.input_schema,
      input,
    );
    return true;
  } catch (error) {
    if (error.code === "ENGINE_DATA_INVALID") return false;
    throw error;
  }
}
module.exports = { describePackageSources };
