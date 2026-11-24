const { createHash, randomUUID } = require("node:crypto");
const fs = require("node:fs/promises");
const { loadConnectors } = require("../../domains/entity/connector-store.cjs");
const { ModelRuntimeError } = require("../model-errors.cjs");
const grants = new WeakSet();

/** Creates a safe jurisdiction failure without copying source content or neighboring entity metadata. */
function denied(code = "AGENT_ASSIGNMENT_MISMATCH") {
  return new ModelRuntimeError(
    code,
    "The request no longer matches its authorized entity assignment.",
  );
}

/** Derives a descriptive contract from existing authorization; this object is never accepted as a permission grant. */
async function jurisdiction(root, binding) {
  return Object.freeze({
    agentId: binding.assignment.agentId,
    assignmentId: binding.assignment.id,
    entityId: binding.assignment.entityId,
    universeId: createHash("sha256")
      .update(await fs.realpath(root))
      .digest("hex"),
    jurisdiction: Object.freeze({
      knowledgeRead: "connected-knowledge-node-only",
      knowledgeUpdate: "authorized-engine-operations-only",
      localEngineExecution: "applied-node-policy",
      connectorMetadataRead: true,
      crossEntityKnowledgeRead: false,
      crossEntityEngineExecution: false,
      directAgentDelegation: false,
    }),
  });
}

/** Issues an in-process assignment grant, bound to the live Entity and applied graph. Neither renderer JSON nor model booleans can mint one. */
async function issueDispatch({
  service,
  root,
  assignmentId,
  scope,
  taskId = randomUUID(),
  operation = "knowledge_review",
  expectedAssignment,
  prepareChunks = async (_, chunks) => chunks,
}) {
  const initial = await service.binding(root, assignmentId);
  if (
    expectedAssignment &&
    JSON.stringify(initial.assignment) !== JSON.stringify(expectedAssignment)
  )
    throw denied();
  const owner = JSON.stringify(initial.assignment);
  const revision = initial.agent.construction?.activeRevision;
  const universe = await fs.realpath(root);
  const contract = await jurisdiction(root, initial);
  const grant = Object.freeze({
    taskId,
    origin: "assigned_entity",
    operation,
    jurisdiction: contract,
    contract: scope?.contract ?? contract,
    prepareChunks,
    /** Revalidates membership, navigation and graph at every privileged boundary, including after asynchronous provider work. */
    assert: async (entityId) => {
      if (!grants.has(grant)) throw denied();
      if (entityId !== initial.assignment.entityId)
        throw new ModelRuntimeError(
          "ENTITY_ACCESS_DENIED",
          "Entity is outside this assignment's jurisdiction.",
        );
      service.root(root);
      if ((await fs.realpath(root)) !== universe) throw denied();
      let live;
      try {
        live = await service.binding(root, assignmentId);
      } catch {
        throw denied();
      }
      if (
        JSON.stringify(live.assignment) !== owner ||
        live.agent.construction?.activeRevision !== revision
      )
        throw denied();
      if (scope) await scope.assert(entityId);
    },
  });
  grants.add(grant);
  await grant.assert(initial.assignment.entityId);
  return grant;
}

/** Rejects fabricated/revoked dispatch objects before starting any worker LLM task. */
async function assertDispatch(grant, entityId) {
  if (!grants.has(grant)) throw denied("GATEWAY_DISPATCH_REQUIRED");
  await grant.assert(entityId);
}

/** Ends one dispatch lifecycle; retained callbacks cannot initiate autonomous follow-up work. */
function revokeDispatch(grant) {
  grants.delete(grant);
}

/** Exposes only relationship endpoints and labels already visible in WorldView. Free-form definitions/private neighbor state never cross this boundary. */
async function connectorMetadata(root, entityId) {
  const { connectors, issues } = await loadConnectors(root);
  if (issues.length)
    throw new ModelRuntimeError(
      "MODEL_STORAGE_INVALID",
      "Connector metadata is incomplete. Repair the relationship records before inspection.",
    );
  return connectors
    .filter(
      (link) =>
        link.sourceEntityId === entityId || link.targetEntityId === entityId,
    )
    .map((link) => ({
      connectorId: link.id,
      direction:
        link.direction === "undirected"
          ? "undirected"
          : link.sourceEntityId === entityId
            ? "outgoing"
            : "incoming",
      sourceEntityId: link.sourceEntityId,
      targetEntityId: link.targetEntityId,
      relationshipType: link.name,
    }));
}

module.exports = {
  jurisdiction,
  issueDispatch,
  assertDispatch,
  revokeDispatch,
  connectorMetadata,
  denied,
};
