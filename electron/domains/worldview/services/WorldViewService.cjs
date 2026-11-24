const { identifier } = require("../contracts/worldview-schema.cjs");
const { requireInvariant } = require("../contracts/worldview-errors.cjs");
const { Connection } = require("../model/Connection.cjs");
const { WorldView } = require("../model/WorldView.cjs");
const {
  WorldViewRepository,
} = require("../repositories/WorldViewRepository.cjs");

/** Coordinates WorldView invariants with trusted host authorization and compatible persistence. Never invokes knowledge readers, inference or Engines. */
class WorldViewService {
  /** Host supplies authority; absent/false/truthy non-boolean admission denies. Context must be constructed by trusted backend code. */
  constructor({
    repository = new WorldViewRepository(),
    authorization = async () => false,
  } = {}) {
    this.repository = repository;
    this.authorization = authorization;
  }
  /** Requires literal-true admission for the operation and Entity scope; no renderer-supplied approval flags are interpreted here. */
  async permit(context, operation, entityIds = []) {
    requireInvariant(
      (await this.authorization({ ...context, operation, entityIds })) === true,
      "WORLDVIEW_ACCESS_DENIED",
      "WorldView operation is not authorized.",
    );
  }
  /** Reads the existing DTO after host admission, then rechecks before disclosing it across IPC. */
  async load(context) {
    await this.permit(context, "read");
    const { dto } = await this.repository.read(context.root);
    await this.permit(context, "read");
    return dto;
  }
  /** Compatibility save for the existing combined metadata/placement IPC. Only placement/membership is modeled here; Entity validation/persistence stays in its adapter. */
  async saveChip(context, chip) {
    await this.permit(context, "save", [chip?.id]);
    // The existing save IPC is an upsert, not a duplicate-membership request.
    // Validate the affected placement without scanning unrelated Entity records.
    const world = new WorldView({ id: "default" });
    try {
      world.addEntity(chip?.id, { x: chip?.position?.x, y: chip?.position?.y });
    } catch (error) {
      // Preserve the established save IPC's safe validation message. Other
      // invariant/programming errors remain visible rather than being suppressed.
      if (error.name === "ZodError")
        throw new Error("Invalid WorldView chip metadata.");
      throw error;
    }
    await this.permit(context, "save", [chip.id]);
    return this.repository.saveChip(context.root, chip);
  }
  /** Removes membership via the existing deletion boundary. Physical dangling connections remain readable for legacy compatibility; no source is deleted. */
  async removeEntity(context, entityId) {
    identifier.parse(entityId);
    await this.permit(context, "remove", [entityId]);
    const { world } = await this.repository.read(context.root, {
      metadataOnly: true,
    });
    world.removeEntity(entityId);
    await this.permit(context, "remove", [entityId]);
    return this.repository.deleteChip(context.root, entityId);
  }
  /** Validates logical endpoints and membership before compatible, queued creation. Exact retries are still accepted by storage. */
  async createConnection(context, record) {
    const value = Connection.fromLegacy(record),
      edge = value.getSnapshot(),
      ids = [edge.source.entityId, edge.target.entityId];
    await this.permit(context, "connect", ids);
    const world = await this.repository.endpointWorld(context.root, ids);
    world.connect(value);
    await this.permit(context, "connect", ids);
    return this.repository.createConnection(context.root, value.toLegacy());
  }
  /** Updates metadata through the existing expected-snapshot contract. Persistence rechecks endpoints and concurrent edits. */
  async updateConnection(context, record, previous) {
    const value = Connection.fromLegacy(record),
      edge = value.getSnapshot(),
      ids = [edge.source.entityId, edge.target.entityId];
    await this.permit(context, "update-connection", ids);
    const { world } = await this.repository.read(context.root, {
      metadataOnly: true,
    });
    // Legacy storage determines missing/dangling-record and stale-edit errors;
    // do not silently repair or delete those records during this logical refactor.
    if (world.getSnapshot().connections.some((item) => item.id === edge.id))
      world.updateConnection(edge.id, edge.metadata, edge.direction);
    await this.permit(context, "update-connection", ids);
    return this.repository.updateConnection(
      context.root,
      value.toLegacy(),
      previous,
    );
  }
  /** Deletes only a named connection after backend authorization; no Entity or knowledge mutation follows. */
  async disconnect(context, connectionId) {
    identifier.parse(connectionId);
    await this.permit(context, "disconnect");
    const entityIds = await this.repository.connectionEntities(
      context.root,
      connectionId,
    );
    await this.permit(context, "disconnect", entityIds);
    return this.repository.deleteConnection(context.root, connectionId);
  }
  /** Returns a one-hop metadata-only page for an admitted member. No neighbor knowledge, private Identity, engine work or onward traversal is requested. */
  async listDirectConnections(context, { entityId, direction = "both" }) {
    identifier.parse(entityId);
    await this.permit(context, "connections:read", [entityId]);
    const { world } = await this.repository.read(context.root, {
      metadataOnly: true,
    });
    requireInvariant(
      world
        .getSnapshot()
        .memberships.some((member) => member.entityId === entityId),
      "ENTITY_NOT_FOUND",
      "Entity is not in this WorldView.",
    );
    const items = world.getDirectConnections(entityId, direction);
    await this.permit(context, "connections:read", [entityId]);
    return { worldviewId: "default", revision: world.revision, items };
  }
}
module.exports = { WorldViewService };
