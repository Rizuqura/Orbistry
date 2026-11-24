const { createHash } = require("node:crypto");
const { identifier, position } = require("../contracts/worldview-schema.cjs");
const { requireInvariant } = require("../contracts/worldview-errors.cjs");
const { Connection } = require("./Connection.cjs");
const { directConnections } = require("../queries/connection-queries.cjs");

/** Pure WorldView aggregate. Holds references/placement/connections only; no Entity metadata, UI camera, filesystem or providers. */
class WorldView {
  #id;
  #members = new Map();
  #connections = new Map();
  /** Restores a serializable snapshot, rejecting duplicate membership, duplicate edges or missing endpoints. */
  constructor({ id, memberships = [], connections = [] }) {
    this.#id = identifier.parse(id);
    for (const member of memberships)
      this.addEntity(member.entityId, member.position);
    for (const connection of connections) this.connect(connection);
  }
  /** Adds one existing Entity reference and its placement; duplicate IDs reject without changing state. */
  addEntity(entityId, placement) {
    identifier.parse(entityId);
    requireInvariant(
      !this.#members.has(entityId),
      "DUPLICATE_MEMBERSHIP",
      "Entity is already in this WorldView.",
    );
    this.#members.set(entityId, position.parse(placement));
  }
  /** Updates placement without changing identity or Entity-owned metadata; unknown members reject. */
  moveEntity(entityId, placement) {
    requireInvariant(
      this.#members.has(entityId),
      "ENTITY_NOT_FOUND",
      "Entity is not in this WorldView.",
    );
    this.#members.set(entityId, position.parse(placement));
  }
  /** Removes membership and incident edges from this snapshot; does not delete an Entity or any persisted record. */
  removeEntity(entityId) {
    identifier.parse(entityId);
    this.#members.delete(entityId);
    for (const connection of this.getDirectConnections(entityId))
      this.#connections.delete(connection.id);
  }
  /** Adds a structurally valid edge with unique identity; allows existing multiple-edge-per-anchor behavior. */
  connect(value) {
    const connection =
      value instanceof Connection ? value : new Connection(value);
    const snapshot = connection.getSnapshot();
    requireInvariant(
      !this.#connections.has(snapshot.id),
      "DUPLICATE_CONNECTION",
      "A different relationship already uses this identity.",
    );
    requireInvariant(
      this.#members.has(snapshot.source.entityId) &&
        this.#members.has(snapshot.target.entityId),
      "INVALID_ENDPOINT",
      "Connection endpoints must belong to this WorldView.",
    );
    this.#connections.set(snapshot.id, connection);
  }
  /** Removes only an edge; repeated removal is harmless and does not affect endpoints. */
  disconnect(connectionId) {
    identifier.parse(connectionId);
    this.#connections.delete(connectionId);
  }
  /** Changes metadata/direction while preserving identity and endpoint references. */
  updateConnection(connectionId, metadata, direction) {
    const existing = this.#connections.get(connectionId);
    requireInvariant(
      existing,
      "CONNECTION_NOT_FOUND",
      "Relationship is unavailable.",
    );
    this.#connections.set(
      connectionId,
      existing.withMetadata(metadata, direction),
    );
  }
  /** Returns direct descriptive edges only; no recursive traversal, data transfer or permission effects. */
  getDirectConnections(entityId, direction = "both") {
    return directConnections(
      [...this.#connections.values()].map((connection) =>
        connection.getSnapshot(),
      ),
      entityId,
      direction,
    );
  }
  /** Exports deterministic detached state. Entity metadata and transient renderer state are intentionally absent. */
  getSnapshot() {
    return {
      id: this.#id,
      memberships: [...this.#members]
        .map(([entityId, position]) => ({
          entityId,
          position: structuredClone(position),
        }))
        .sort((a, b) => a.entityId.localeCompare(b.entityId)),
      connections: [...this.#connections.values()]
        .map((connection) => connection.getSnapshot())
        .sort((a, b) => a.id.localeCompare(b.id)),
    };
  }
  /** Content revision for this in-memory graph only; not an Entity/Identity revision or a persisted global concurrency token. */
  get revision() {
    return createHash("sha256")
      .update(JSON.stringify(this.getSnapshot()))
      .digest("hex");
  }
}
module.exports = { WorldView };
