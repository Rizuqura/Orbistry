const { identifier } = require("../contracts/worldview-schema.cjs");
const { requireInvariant } = require("../contracts/worldview-errors.cjs");

/** Filters one-hop relationship DTOs only. Undirected edges are visible in both directions; never traverses or reads neighbor knowledge. */
function directConnections(connections, entityId, direction = "both") {
  identifier.parse(entityId);
  requireInvariant(
    ["both", "input", "output"].includes(direction),
    "INVALID_DIRECTION",
    "Choose input, output or both.",
  );
  return connections
    .filter((connection) => {
      const source = connection.source.entityId === entityId,
        target = connection.target.entityId === entityId;
      return direction === "both" || connection.direction === "undirected"
        ? source || target
        : direction === "output"
          ? source
          : target;
    })
    .map((connection) => structuredClone(connection));
}
module.exports = { directConnections };
