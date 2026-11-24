const { z } = require("zod");
const path = require("node:path");
const {
  idSchema,
  hashSchema,
} = require("../../engines/backend-identity/schema.cjs");
const { readWorldViewChip } = require("../entity/worldview-store.cjs");
const {
  createIdentityRuntime,
} = require("../../engines/backend-identity/identity-runtime.cjs");
const inputSchema = z
  .object({
    vaultPath: z.string(),
    id: idSchema,
    version: hashSchema.optional(),
    query: z.string().max(200).optional(),
    offset: z.number().int().min(0).max(2048).optional(),
    limit: z.number().int().min(1).max(20).optional(),
  })
  .strict();
/** Restricts the inspector to local reading/manual compilation. There is deliberately no renderer capability-execution or caller-supplied permission endpoint. */
async function inspect(root, operation, raw) {
  const input = inputSchema.parse(raw);
  if (path.resolve(input.vaultPath) !== path.resolve(root))
    throw new Error("Universe changed. Reopen the identity inspector.");
  const runtime = createIdentityRuntime({
    /** The outer trusted IPC verifies the active root; this policy additionally verifies entity existence on every operation. */
    async authorize({ root: requestedRoot, entityId, permission }) {
      if (
        requestedRoot !== root ||
        !["entity:read", "knowledge:read", "identity:compile"].includes(
          permission,
        )
      )
        return false;
      await readWorldViewChip(root, entityId);
      return true;
    },
  });
  const scope = {
    root,
    entityId: input.id,
    version: input.version,
    query: input.query,
    offset: input.offset,
    limit: input.limit,
  };
  if (operation === "status") return runtime.getIdentity(scope);
  if (operation === "generate") return runtime.generate(scope);
  if (operation === "chunks") return runtime.searchChunks(scope);
  if (operation === "capabilities") return runtime.listCapabilities(scope);
  throw new Error("Unsupported identity inspector operation.");
}
module.exports = { inspect };
