const { z } = require("zod");
const { createHash } = require("node:crypto");
const VERSION = "1.1.0";
const LIMITS = Object.freeze({
  sources: 256,
  textBytes: 2 * 1024 * 1024,
  sourceBytes: 32 * 1024 * 1024,
  totalBytes: 128 * 1024 * 1024,
  chunks: 2048,
  chunkTokens: 1024,
  manifestBytes: 16 * 1024 * 1024,
});
const id = z.string().regex(/^[a-zA-Z0-9_-]{1,128}$/);
const hash = z.string().regex(/^[a-f0-9]{64}$/);
const sourceId = z.string().min(1).max(32768);
const connectionSchema = z
  .object({
    type: z.enum(["input", "output"]),
    connectorId: id,
    name: z.string().min(1).max(160),
    description: z.string().max(16000),
    direction: z.enum(["directed", "undirected"]),
    sourceEntityId: id,
    sourcePortId: z.enum(["north", "east", "south", "west"]),
    targetEntityId: id,
    targetPortId: z.enum(["north", "east", "south", "west"]),
    trust: z.literal("untrusted-relationship"),
  })
  .strict();
const chunkReference = z
  .object({
    chunkId: hash,
    entityId: id,
    sourceId,
    sourceVersion: hash,
    origin: z.enum(["source", "entity-note"]),
    contentHash: hash,
    headingPath: z.array(z.string().max(512)).max(6),
    startOffset: z.number().int().nonnegative(),
    endOffset: z.number().int().positive(),
    startLine: z.number().int().positive(),
    endLine: z.number().int().positive(),
    tokenEstimate: z.number().int().positive().max(LIMITS.chunkTokens),
  })
  .strict();
const chunkSchema = chunkReference
  .extend({
    content: z.string().max(LIMITS.chunkTokens * 3),
    trust: z.literal("untrusted-source"),
  })
  .strict();
const sourceSchema = z
  .object({
    fingerprintMethod: z.enum(["sha256-content", "metadata-status"]),
    noteVersion: hash.nullable(),
    sourceId,
    sourceRef: sourceId,
    filename: z.string(),
    extension: z.string(),
    sourceVersion: hash,
    modifiedAt: z.string().datetime().nullable(),
    sizeBytes: z.number().int().nonnegative().nullable(),
    status: z.enum([
      "indexed",
      "reference-only",
      "missing",
      "unavailable",
      "restricted",
      "too-large",
    ]),
    chunkCount: z.number().int().nonnegative(),
  })
  .strict();
const capabilitySchema = z
  .object({
    capabilityId: hash,
    entityId: id,
    engineId: z.enum(["daily-price", "yahoo-financials"]),
    version: z.string(),
    operation: z.enum(["price", "financials", "earnings"]),
    description: z.string(),
    inputSchema: z.record(z.string(), z.unknown()),
    outputSchema: z.record(z.string(), z.unknown()),
    requiredPermissions: z.array(
      z.enum(["entity:read", "provider:yahoo-finance:read"]),
    ),
    executionMode: z.literal("explicit-authorized-request"),
    availability: z.enum(["configured", "unconfigured"]),
    menuId: z.string(),
    sourceId: z.string(),
    symbol: z.string().nullable(),
  })
  .strict();
const logSchema = z
  .array(
    z
      .object({
        level: z.enum(["info", "warning", "error"]),
        code: z.string(),
        message: z.string(),
        sourceId: sourceId.optional(),
      })
      .strict(),
  )
  .max(1024);
const manifestSchema = z
  .object({
    schemaVersion: z.literal(1),
    compilerVersion: z.string().regex(/^\d+\.\d+\.\d+$/),
    entityId: id,
    identityVersion: hash,
    sourceFingerprint: hash,
    compiledAt: z.string().datetime(),
    status: z.enum(["complete", "partial"]),
    entity: z
      .object({
        id,
        name: z.string(),
        category: z.string().nullable(),
        tags: z.array(z.string()),
        createdAt: z.string().nullable(),
      })
      .strict(),
    packageSources: z
      .array(
        z
          .object({
            grantId: z.string().uuid().optional(),
            menuId: id.optional(),
            declarationId: id,
            engineId: id,
            sourceId: id,
            version: z.string().nullable(),
            digest: hash.nullable(),
            operation: id.nullable(),
            status: z.enum([
              "available",
              "package_missing",
              "package_disabled",
              "untrusted",
              "unlinked",
              "authorization_required",
              "incompatible_version",
              "invalid_configuration",
              "integrity_failed",
            ]),
          })
          .strict(),
      )
      .max(1000)
      .optional(),
    indexedMenus: z.array(
      z
        .object({
          id: z.string(),
          title: z.string(),
          sourceIds: z.array(sourceId),
        })
        .strict(),
    ),
    sources: z.array(sourceSchema).max(LIMITS.sources),
    // Optional only for immutable snapshots produced before compiler 1.1.0.
    connections: z
      .object({
        inputs: z.array(connectionSchema.extend({ type: z.literal("input") })),
        outputs: z.array(
          connectionSchema.extend({ type: z.literal("output") }),
        ),
        unavailableCount: z.number().int().nonnegative(),
      })
      .strict()
      .optional(),
    knowledge: z
      .object({
        chunkCount: z.number().int().min(0).max(LIMITS.chunks),
        tokenEstimate: z.number().int().nonnegative(),
        chunkIndexHash: hash,
        retrieval: z.literal("entity-scoped-chunks"),
      })
      .strict(),
    capabilities: z
      .array(
        capabilitySchema.pick({
          capabilityId: true,
          engineId: true,
          version: true,
          operation: true,
          availability: true,
          sourceId: true,
          symbol: true,
        }),
      )
      .max(1000),
    capabilityRegistryHash: hash,
    log: logSchema,
  })
  .strict()
  .superRefine((manifest, context) => {
    for (const [kind, connections] of Object.entries(
      manifest.connections ?? {},
    )) {
      if (!Array.isArray(connections)) continue;
      for (const [index, connection] of connections.entries()) {
        const endpoint =
          kind === "inputs"
            ? connection.targetEntityId
            : connection.sourceEntityId;
        if (
          connection.sourceEntityId === connection.targetEntityId ||
          (connection.direction === "directed"
            ? endpoint !== manifest.entityId
            : ![connection.sourceEntityId, connection.targetEntityId].includes(
                manifest.entityId,
              ))
        )
          context.addIssue({
            code: "custom",
            path: ["connections", kind, index],
            message: "Connection does not match the entity's flow.",
          });
      }
    }
  });
const definition = Object.freeze({
  id: "backend-identity",
  name: "Wonton Backend Identity",
  version: VERSION,
  operations: [
    "compile",
    "status",
    "search",
    "get-chunk",
    "capabilities",
    "execute-capability",
  ],
  nativeToolCalling: false,
  readOnly: false,
});
/** Hashes bytes or canonical caller-ordered structured data without retaining source text in manifests. */
function digest(value) {
  return createHash("sha256")
    .update(
      typeof value === "string" || Buffer.isBuffer(value)
        ? value
        : JSON.stringify(value),
    )
    .digest("hex");
}
module.exports = {
  VERSION,
  LIMITS,
  idSchema: id,
  hashSchema: hash,
  chunkReference,
  chunkSchema,
  capabilitySchema,
  manifestSchema,
  logSchema,
  definition,
  digest,
};
