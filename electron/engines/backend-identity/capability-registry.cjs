const { z } = require("zod");
const { digest, capabilitySchema } = require("./schema.cjs");
const argumentsSchema = z.object({ force: z.boolean().optional() }).strict();

/** Identifies only implemented read-only adapters. Standing permission never extends to arbitrary registered code or write operations. */
function isReadOnlyOperation(engineId, operation) {
  return (
    (engineId === "daily-price" && operation === "price") ||
    (engineId === "yahoo-financials" &&
      ["financials", "earnings"].includes(operation))
  );
}

/** Registers validated literal Yahoo declarations through shared Engine definitions, without bootstrapping the AI registry. Returns data-only contracts; never probes a provider or loads indexed code. */
function discoverCapabilities(entityId, index) {
  const definitions = require("../definitions.cjs").ENGINE_DEFINITIONS;
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
          ? require("../contracts/yahoo-legacy/daily.cjs").snapshotSchema
          : require("../contracts/yahoo-legacy/financials.cjs").snapshotSchema;
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
module.exports = {
  discoverCapabilities,
  executeCapability,
  isReadOnlyOperation,
};
