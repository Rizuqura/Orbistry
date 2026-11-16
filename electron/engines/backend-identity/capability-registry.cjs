const { z } = require("zod");
const { digest, capabilitySchema } = require("./schema.cjs");
const argumentsSchema = z.object({ force: z.boolean().optional() }).strict();

/** Registers only literal Yahoo operations already validated by the applied Knowledge Card parser. This function never probes a provider or loads code from indexed text. */
function discoverCapabilities(entityId, index) {
  const definitions =
    require("../../ai/engine-registry.cjs").ENGINE_DEFINITIONS;
  const capabilities = [];
  for (const menu of index.menus) {
    for (const source of [
      ...(menu.prices ?? []).map((item) => ({ ...item, kind: "price" })),
      ...(menu.finance ?? []),
    ]) {
      const engineId =
        source.kind === "price" ? "daily-price" : "yahoo-financials";
      const definition = definitions[engineId];
      if (!definition?.operations.includes(source.kind))
        throw new Error(
          "Applied capability is not registered by the application.",
        );
      const symbol = source.symbol ?? index.priceSymbol ?? null;
      const output =
        source.kind === "price"
          ? require("../daily-price/index.cjs").snapshotSchema
          : require("../yahoo-financials/index.cjs").snapshotSchema;
      capabilities.push(
        capabilitySchema.parse({
          capabilityId: digest([
            entityId,
            menu.id,
            source.id,
            engineId,
            source.kind,
          ]),
          entityId,
          engineId,
          version: definition.version,
          operation: source.kind,
          description: `Retrieve ${source.kind} for the explicitly indexed ${symbol ?? "unconfigured ticker"}; provider availability is checked only on execution.`,
          inputSchema: z.toJSONSchema(argumentsSchema),
          outputSchema: {
            type: "object",
            required: ["snapshot", "cached", "stale", "warning"],
            properties: {
              snapshot: z.toJSONSchema(output),
              cached: { type: "boolean" },
              stale: { type: "boolean" },
              warning: { type: ["string", "null"] },
            },
          },
          requiredPermissions: ["entity:read", "provider:yahoo-finance:read"],
          executionMode: "explicit-authorized-request",
          availability: symbol ? "configured" : "unconfigured",
          menuId: menu.id,
          sourceId: source.id,
          symbol,
        }),
      );
    }
  }
  return capabilities;
}
/** Routes a currently revalidated declaration to the existing authorized service; callers cannot substitute ticker, root, module, script or operation. */
async function executeCapability(root, entityId, capability, raw) {
  const args = argumentsSchema.parse(raw ?? {});
  if (
    capability.entityId !== entityId ||
    capability.availability !== "configured"
  )
    throw new Error("Capability is not configured for this entity.");
  if (capability.engineId === "daily-price" && capability.operation === "price")
    return require("../../daily-price-service.cjs").getIndexedPrice(
      root,
      entityId,
      capability.menuId,
      capability.sourceId,
      args.force ?? false,
    );
  if (
    capability.engineId === "yahoo-financials" &&
    ["financials", "earnings"].includes(capability.operation)
  )
    return require("../../financial-service.cjs").getIndexedFinance(
      root,
      entityId,
      capability.menuId,
      capability.sourceId,
      args.force ?? false,
    );
  throw new Error("Unsupported entity capability.");
}
module.exports = { discoverCapabilities, executeCapability };
