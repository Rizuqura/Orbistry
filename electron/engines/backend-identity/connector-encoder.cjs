/** Encodes relationship metadata from the selected entity's perspective. Geometric ports never determine flow, and descriptions remain data rather than executable capabilities. */
function encodeConnections(entityId, connectors, unavailableCount = 0) {
  const inputs = [],
    outputs = [];
  for (const connector of [...connectors].sort((a, b) =>
    a.id < b.id ? -1 : a.id > b.id ? 1 : 0,
  )) {
    const outgoing = connector.sourceEntityId === entityId;
    const incoming = connector.targetEntityId === entityId;
    if (!incoming && !outgoing) continue;
    const connection = {
      connectorId: connector.id,
      name: connector.name,
      description: connector.definition,
      direction: connector.direction,
      sourceEntityId: connector.sourceEntityId,
      sourcePortId: connector.sourcePortId,
      targetEntityId: connector.targetEntityId,
      targetPortId: connector.targetPortId,
      trust: "untrusted-relationship",
    };
    if (incoming || connector.direction === "undirected")
      inputs.push({ type: "input", ...connection });
    if (outgoing || connector.direction === "undirected")
      outputs.push({ type: "output", ...connection });
  }
  return { inputs, outputs, unavailableCount };
}
module.exports = { encodeConnections };
