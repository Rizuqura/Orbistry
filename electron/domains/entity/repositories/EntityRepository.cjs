const store = require("../worldview-store.cjs");

/** Maps logical Entity edits onto the shared v1 Markdown record. Callers supply an authorized root and key. */
class EntityRepository {
  /** Loads only the bounded Entity record. Missing or damaged records propagate to the trusted caller. */
  async load(root, entityId) {
    return store.readEntitySnapshot(root, entityId);
  }

  /** Returns scoped lookup inputs for existing companion APIs. No package links, versions or assignments are assumed to exist. */
  async getContextReferences(root, entityId) {
    const { key, metadata } = await this.load(root, entityId);
    return {
      knowledgeCard: { entityId: key, menus: metadata.knowledgeMenus },
      appliedIndex: { entityId: key },
      backendIdentity: { entityId: key },
      capabilityLinks: { entityId: key },
      agentAssignments: { entityId: key },
    };
  }

  /** Reads the latest placement and sources inside the shared queue and persists only requested metadata columns. */
  updateMetadata(root, entityId, changes, beforeWrite) {
    return store.patchEntityMetadata(root, entityId, changes, beforeWrite);
  }

  /** Uses the existing Vault stat, batch limit, root queue and source-status DTO for assignment. */
  assignSources(root, entityId, references, beforeWrite) {
    return store.assignWorldViewFiles(root, entityId, references, beforeWrite);
  }

  /** Removes only the recorded association and returns the compatible chip DTO. */
  unassignSource(root, entityId, sourceId, beforeWrite) {
    return store.unassignWorldViewFile(root, entityId, sourceId, beforeWrite);
  }
}
module.exports = { EntityRepository };
