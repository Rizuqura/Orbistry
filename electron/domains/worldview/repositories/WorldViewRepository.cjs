const entities = require("../../entity/worldview-store.cjs");
const connections = require("./legacy-connection-store.cjs");
const { WorldView } = require("../model/WorldView.cjs");
const { Connection } = require("../model/Connection.cjs");

/** Adapts the existing combined Entity/layout and connection storage; creates no new files or persisted revision scheme. */
class WorldViewRepository {
  /** Allows existing storage adapters to be injected for isolated tests; no reads occur during construction. */
  constructor({ entityStore = entities, connectionStore = connections } = {}) {
    this.entities = entityStore;
    this.connections = connectionStore;
  }
  /** Loads the compatible UI DTO and a metadata-free aggregate. Legacy dangling records stay in the DTO, outside the valid aggregate. */
  async read(root, { metadataOnly = false } = {}) {
    const state = await this.entities.loadWorldView(root, { metadataOnly });
    const relationships = await this.connections.loadConnectors(root);
    const ids = new Set(state.chips.map((chip) => chip.id));
    const world = new WorldView({
      id: "default",
      memberships: state.chips.map((chip) => ({
        entityId: chip.id,
        position: chip.position,
      })),
      connections: relationships.connectors
        .filter(
          (edge) =>
            ids.has(edge.sourceEntityId) && ids.has(edge.targetEntityId),
        )
        .map((edge) => Connection.fromLegacy(edge).getSnapshot()),
    });
    return {
      world,
      dto: {
        ...state,
        connectors: relationships.connectors,
        issues: [...state.issues, ...relationships.issues],
      },
    };
  }
  /** Builds a small placement-only aggregate for affected endpoints; avoids loading the full map on each connection mutation. */
  async endpointWorld(root, entityIds) {
    const memberships = [];
    for (const entityId of new Set(entityIds)) {
      const entity = await this.entities.readWorldViewChip(root, entityId);
      memberships.push({ entityId: entity.id, position: entity.position });
    }
    return new WorldView({ id: "default", memberships });
  }
  /** Saves through the existing serialized, compare-before-write Entity adapter, preserving unknown YAML, sources and body. */
  saveChip(root, chip) {
    return this.entities.saveWorldViewChip(root, chip);
  }
  /** Preserves legacy deletion: removes the Entity index, not sources or historical connection records. */
  deleteChip(root, id) {
    return this.entities.deleteWorldViewChip(root, id);
  }
  /** Uses the original queued creation/idempotency and live endpoint checks, closing read-to-write races. */
  createConnection(root, record) {
    return this.connections.createConnector(root, record);
  }
  /** Retains the original expected-record CAS and immutable endpoint checks inside the shared root queue. */
  updateConnection(root, record, previous) {
    return this.connections.updateConnector(root, record, previous);
  }
  /** Deletes the exact relationship using the original serialized safe-path boundary. */
  deleteConnection(root, id) {
    return this.connections.deleteConnector(root, id);
  }
  /** Reads saved endpoint identities for authorization, never accepting ownership claims from a delete payload. Missing/damaged records retain legacy root-authorized cleanup semantics. */
  async connectionEntities(root, connectionId) {
    const { connectors } = await this.connections.loadConnectors(root);
    const record = connectors.find(
      (connection) => connection.id === connectionId,
    );
    return record ? [record.sourceEntityId, record.targetEntityId] : [];
  }
}
module.exports = { WorldViewRepository };
