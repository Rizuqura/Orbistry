const {
  connectionSchema,
  legacyConnectorSchema,
} = require("../contracts/worldview-schema.cjs");
const { requireInvariant } = require("../contracts/worldview-errors.cjs");

/** Immutable relationship value: owns endpoints and descriptive metadata, never Entity knowledge or access grants. */
class Connection {
  #snapshot;
  /** Validates explicit Output-to-Input roles and distinct endpoints; copies caller state without I/O. */
  constructor(snapshot) {
    this.#snapshot = connectionSchema.parse(snapshot);
    requireInvariant(
      this.#snapshot.source.entityId !== this.#snapshot.target.entityId,
      "INVALID_ENDPOINT",
      "Choose another entity.",
    );
  }
  /** Converts existing geometric-port DTOs into logical endpoints; preserves anchors and undirected semantics. */
  static fromLegacy(record) {
    const item = legacyConnectorSchema.parse(record);
    return new Connection({
      id: item.id,
      source: {
        entityId: item.sourceEntityId,
        portId: "output",
        anchorId: item.sourcePortId,
      },
      target: {
        entityId: item.targetEntityId,
        portId: "input",
        anchorId: item.targetPortId,
      },
      metadata: { name: item.name, purpose: item.definition },
      direction: item.direction,
    });
  }
  /** Returns an independent serializable value; caller edits cannot mutate the connection. */
  getSnapshot() {
    return structuredClone(this.#snapshot);
  }
  /** Returns a new value with the same ID/endpoints; validation occurs before replacing any metadata. */
  withMetadata(metadata, direction = this.#snapshot.direction) {
    return new Connection({ ...this.getSnapshot(), metadata, direction });
  }
  /** Produces the original wire/storage shape. Missing visual anchors reject rather than inventing a placement. */
  toLegacy() {
    const item = this.#snapshot;
    return legacyConnectorSchema.parse({
      id: item.id,
      sourceEntityId: item.source.entityId,
      sourcePortId: item.source.anchorId,
      targetEntityId: item.target.entityId,
      targetPortId: item.target.anchorId,
      name: item.metadata.name,
      definition: item.metadata.purpose,
      direction: item.direction,
    });
  }
}
module.exports = { Connection };
