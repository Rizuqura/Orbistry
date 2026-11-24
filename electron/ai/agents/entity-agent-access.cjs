const { randomUUID } = require("node:crypto");
const {
  isReadOnlyOperation,
} = require("../../engines/backend-identity/capability-registry.cjs");

/** Returns a cloned graph with standing access for implemented read adapters and a connected Knowledge node. Used only by an explicitly requested configuration migration; preserves all other nodes, edges and settings. */
function withReadOnlyAccess(graph) {
  const updated = structuredClone(graph);
  for (const node of updated.nodes) {
    if (
      node.kind === "Engine" &&
      isReadOnlyOperation(node.config.engineId, node.config.operation)
    )
      node.config.permissionPolicy = "read-only-auto";
  }
  const llm = updated.nodes.find((node) => node.kind === "LLM");
  if (!llm) throw new Error("The assigned graph has no LLM node.");
  let knowledge = updated.nodes.find((node) => node.kind === "Knowledge");
  if (!knowledge) {
    knowledge = {
      id: "knowledge-" + randomUUID(),
      kind: "Knowledge",
      x: 64,
      y: 240,
      config: { mode: "preview-only", maxTokens: 2000 },
    };
    updated.nodes.push(knowledge);
  }
  if (
    !updated.edges.some(
      (edge) => edge.from === knowledge.id && edge.to === llm.id,
    )
  )
    updated.edges.push({ from: knowledge.id, to: llm.id });
  return updated;
}

module.exports = { withReadOnlyAccess };
