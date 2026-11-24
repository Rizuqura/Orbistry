const { z } = require("zod");
const identifier = z.string().regex(/^[a-zA-Z0-9_-]{1,128}$/);
const position = z
  .object({
    x: z.number().finite().min(-1e9).max(1e9),
    y: z.number().finite().min(-1e9).max(1e9),
  })
  .strict();
const anchor = z.enum(["north", "east", "south", "west"]);
// Legacy anchors are visual attachment points, not Input/Output permissions.
const legacyConnectorSchema = z
  .object({
    id: identifier,
    sourceEntityId: identifier,
    sourcePortId: anchor,
    targetEntityId: identifier,
    targetPortId: anchor,
    name: z.string().trim().min(1).max(160),
    definition: z.string().max(16000),
    direction: z.enum(["directed", "undirected"]),
  })
  .strict()
  .refine(
    /** Retains the existing prohibition on self-connections and permits every geometric anchor pair. */
    (value) => value.sourceEntityId !== value.targetEntityId,
    "Choose another entity.",
  );
const connectionSchema = z
  .object({
    id: identifier,
    source: z
      .object({
        entityId: identifier,
        portId: z.literal("output"),
        anchorId: anchor.optional(),
      })
      .strict(),
    target: z
      .object({
        entityId: identifier,
        portId: z.literal("input"),
        anchorId: anchor.optional(),
      })
      .strict(),
    metadata: z
      .object({
        name: z.string().trim().min(1).max(160),
        purpose: z.string().max(16000),
      })
      .strict(),
    direction: z.enum(["directed", "undirected"]),
  })
  .strict();

module.exports = {
  identifier,
  position,
  legacyConnectorSchema,
  connectionSchema,
};
