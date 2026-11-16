const { z } = require("zod");
const { idSchema, hashSchema } = require("./schema.cjs");
const compiler = require("./identity-compiler.cjs");
const store = require("./snapshot-store.cjs");
const registry = require("./capability-registry.cjs");
const scopeSchema = z.object({
  root: z.string().min(1).max(32768),
  entityId: idSchema,
  actor: z.unknown().optional(),
  version: hashSchema.optional(),
});

/** Creates a provider-independent internal runtime. Authorization is supplied by trusted host code, never by indexed content, renderer grants or a model prompt. */
function createIdentityRuntime({ authorize } = {}) {
  if (typeof authorize !== "function")
    throw new Error(
      "Identity runtime requires a backend authorization policy.",
    );
  /** Checks each permission against the original actor, root and entity before any snapshot/source access. */
  async function permit(scope, permissions) {
    scopeSchema.parse(scope);
    for (const permission of new Set(["entity:read", ...permissions]))
      if (
        (await authorize({
          actor: scope.actor,
          root: scope.root,
          entityId: scope.entityId,
          permission,
        })) !== true
      )
        throw new Error("Backend identity permission denied.");
  }
  /** Rejects stale or mismatched versions before serving chunks or requesting provider work. */
  async function fresh(scope) {
    const result = await compiler.status(scope.root, scope.entityId);
    if (result.status !== "fresh" || !result.manifest)
      throw new Error(
        "Backend identity is missing or stale. Generate it before retrieving knowledge or executing a capability.",
      );
    if (scope.version && scope.version !== result.manifest.identityVersion)
      throw new Error(
        "Backend identity version changed. Reopen the current identity.",
      );
    return result.manifest;
  }
  /** Rechecks authorization and source freshness after asynchronous reads/provider work; revoked access cannot return old source content. */
  async function finish(scope, permissions, manifest) {
    await permit(scope, permissions);
    const current = await fresh(scope);
    if (current.identityVersion !== manifest.identityVersion)
      throw new Error(
        "Identity changed during this operation. Retry with the current version.",
      );
  }
  /** Returns a compact identity manifest with on-demand freshness, without reading all chunk bodies. */
  async function getIdentity(scope) {
    await permit(scope, []);
    const result = await compiler.status(scope.root, scope.entityId);
    await permit(scope, []);
    return result;
  }
  /** Performs explicitly authorized manual compilation with the existing compiler, independent of any LLM connection. */
  async function generate(scope) {
    await permit(scope, ["identity:compile", "knowledge:read"]);
    const result = await compiler.generate(scope.root, scope.entityId);
    await finish(
      scope,
      ["identity:compile", "knowledge:read"],
      result.manifest,
    );
    return result;
  }
  /** Retrieves a manifest-member chunk for the selected entity and version, enforcing original-source freshness before and after access. */
  async function getChunk(scope) {
    hashSchema.parse(scope.chunkId);
    await permit(scope, ["knowledge:read"]);
    const manifest = await fresh(scope);
    const index = await store.index(scope.root, manifest, "chunks");
    const reference = index.find((item) => item.chunkId === scope.chunkId);
    if (!reference)
      throw new Error("Chunk is not part of this entity identity.");
    const chunk = await store.getChunk(scope.root, scope.entityId, reference);
    await finish(scope, ["knowledge:read"], manifest);
    return chunk;
  }
  /** Searches bounded chunk pages locally. Ranking is lexical and content is explicitly untrusted; no embeddings, provider calls or prompt concatenation occur. */
  async function searchChunks(scope) {
    const {
      query = "",
      offset = 0,
      limit = 10,
    } = z
      .object({
        query: z.string().max(200).optional(),
        offset: z.number().int().min(0).max(2048).optional(),
        limit: z.number().int().min(1).max(20).optional(),
      })
      .parse(scope);
    await permit(scope, ["knowledge:read"]);
    const manifest = await fresh(scope);
    const references = await store.index(scope.root, manifest, "chunks");
    const terms = [
      ...new Set(
        query.toLocaleLowerCase("en").match(/[\p{L}\p{N}_-]+/gu) ?? [],
      ),
    ].slice(0, 16);
    const ranked = [];
    for (const [ordinal, reference] of references.entries()) {
      if (!terms.length) {
        ranked.push({ reference, ordinal, score: 0 });
        continue;
      }
      const chunk = await store.getChunk(scope.root, scope.entityId, reference);
      const metadata =
        `${chunk.sourceId} ${chunk.headingPath.join(" ")}`.toLocaleLowerCase(
          "en",
        );
      const body = chunk.content.toLocaleLowerCase("en");
      const score = terms.reduce(
        (sum, term) =>
          sum +
          (metadata.includes(term) ? 3 : 0) +
          (body.includes(term) ? 1 : 0),
        0,
      );
      if (score) ranked.push({ reference, ordinal, score });
    }
    ranked.sort((a, b) => b.score - a.score || a.ordinal - b.ordinal);
    const items = [];
    for (const item of ranked.slice(offset, offset + limit))
      items.push(
        await store.getChunk(scope.root, scope.entityId, item.reference),
      );
    await finish(scope, ["knowledge:read"], manifest);
    return {
      items,
      total: ranked.length,
      offset,
      nextOffset:
        offset + items.length < ranked.length ? offset + items.length : null,
      version: manifest.identityVersion,
    };
  }
  /** Discovers compiled capability contracts only; availability means configured, not a successful network probe. */
  async function listCapabilities(scope) {
    await permit(scope, []);
    const manifest = await fresh(scope);
    const capabilities = await store.index(
      scope.root,
      manifest,
      "capabilities",
    );
    await finish(scope, [], manifest);
    return capabilities;
  }
  /** Executes one explicitly requested current declaration after backend grants. Registry values are rebuilt from the live index, never trusted as executable snapshot instructions. */
  async function executeCapability(scope) {
    hashSchema.parse(scope.capabilityId);
    await permit(scope, ["capability:execute"]);
    const manifest = await fresh(scope);
    const live = await compiler.capture(scope.root, scope.entityId);
    const capability = live.capabilities.find(
      (item) => item.capabilityId === scope.capabilityId,
    );
    if (
      !capability ||
      !manifest.capabilities.some(
        (item) => item.capabilityId === capability.capabilityId,
      )
    )
      throw new Error("Capability is not declared by this entity identity.");
    await permit(scope, [
      "capability:execute",
      ...capability.requiredPermissions,
    ]);
    const result = await registry.executeCapability(
      scope.root,
      scope.entityId,
      capability,
      scope.arguments,
    );
    await finish(
      scope,
      ["capability:execute", ...capability.requiredPermissions],
      manifest,
    );
    return result;
  }
  return Object.freeze({
    getIdentity,
    generate,
    getChunk,
    searchChunks,
    listCapabilities,
    executeCapability,
  });
}
module.exports = { createIdentityRuntime };
