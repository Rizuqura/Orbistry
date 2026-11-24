const { entityKey } = require("../contracts/entity-schema.cjs");
const { EntityRepository } = require("../repositories/EntityRepository.cjs");

/** @typedef {{root: string, entityId: string, operation: string}} AdmissionRequest */
/** @typedef {(request: AdmissionRequest) => boolean|Promise<boolean>} EntityAuthorization */

/** Backend application boundary. Policies come from the trusted host and are evaluated for the actual root, Entity and operation. */
class EntityService {
  #repository;
  #authorization;

  /** Inject the host policy and optionally a repository for isolated tests. Omitting authorization denies every call.
   * @param {{repository?: EntityRepository, authorization?: EntityAuthorization}} options Trusted main-process dependencies.
   */
  constructor({
    repository = new EntityRepository(),
    authorization = () => false,
  } = {}) {
    this.#repository = repository;
    this.#authorization = authorization;
  }

  /** Requires a literal grant for this scope. The host may re-evaluate membership or active-Universe state. */
  async #permit(root, entityId, operation) {
    entityKey.parse(entityId);
    if ((await this.#authorization({ root, entityId, operation })) !== true) {
      const error = new Error("Entity operation is not authorized.");
      error.code = "ENTITY_ACCESS_DENIED";
      throw error;
    }
  }

  /** Admits a single repository operation, then rechecks before disclosing its DTO. A later denial cannot undo a committed write. */
  async #run(root, entityId, operation, perform) {
    await this.#permit(root, entityId, operation);
    // Mutating adapters also call this inside the queue, immediately before persistence.
    const recheck = () => this.#permit(root, entityId, operation);
    const dto = await perform(recheck);
    await this.#permit(root, entityId, operation);
    return dto;
  }

  /** Returns detached metadata and recorded references. Associated resources use this same scoped key at their own boundaries. */
  load({ root }, entityId) {
    return this.#run(root, entityId, "read", () =>
      this.#repository.load(root, entityId),
    );
  }

  /** Admits a metadata read before returning scoped lookup inputs for the authoritative companion stores. */
  getContextReferences({ root }, entityId) {
    return this.#run(root, entityId, "read", () =>
      this.#repository.getContextReferences(root, entityId),
    );
  }

  /** Changes only the display name of an existing record, under the metadata-edit policy. */
  rename(context, entityId, name) {
    return this.updateMetadata(context, entityId, { name });
  }

  /** Applies a bounded Entity-only patch to the latest existing record. Placement and connections have independent owners. */
  updateMetadata({ root }, entityId, changes) {
    return this.#run(root, entityId, "edit-metadata", (recheck) =>
      this.#repository.updateMetadata(root, entityId, changes, recheck),
    );
  }

  /** Resolves all requested Vault references through existing trusted storage before writing one batch. */
  assignSources({ root }, entityId, references) {
    return this.#run(root, entityId, "assign-sources", (recheck) =>
      this.#repository.assignSources(root, entityId, references, recheck),
    );
  }

  /** Detaches one recorded reference under host authorization and retains the original Vault file. */
  unassignSource({ root }, entityId, sourceId) {
    return this.#run(root, entityId, "unassign-source", (recheck) =>
      this.#repository.unassignSource(root, entityId, sourceId, recheck),
    );
  }
}
module.exports = { EntityService };
