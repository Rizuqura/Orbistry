const {
  entityKey,
  metadataSchema,
  sourceReference,
} = require("../contracts/entity-schema.cjs");

// Create-time defaults must not overwrite unrelated fields during a patch.
const metadataPatch = metadataSchema
  .extend({ icon: metadataSchema.shape.icon.removeDefault() })
  .partial()
  .strict();
const appearancePatch = metadataPatch
  .pick({ icon: true, iconImage: true, color: true })
  .strict();
const MAX_SOURCES = 5000;

/** @typedef {{ id: string, title: string }} KnowledgeMenu */
/** @typedef {{name: string, tags: string[], color: string, icon?: string, iconImage?: string, category?: string, knowledgeMenus?: KnowledgeMenu[]}} EntityMetadata */
/** @typedef {{source_id: string, source_ref: string, filename: string, extension: string, origin: "universe", size_bytes: number|null}} SourceReference */
/** @typedef {{key: string, createdAt?: string, metadata: EntityMetadata, sourceReferences?: SourceReference[]}} EntitySnapshot */

/** Entity-owned state within one Universe. The host supplies recorded references and handles storage and permissions. */
class Entity {
  #key;
  #createdAt;
  #metadata;
  #sources = new Map();

  /** Restores schema-v1 fields without resolving Vault files or opening associated subsystems. Rejects duplicate stored IDs.
   * @param {EntitySnapshot} snapshot Recorded metadata from the host, or initial values for a new Entity.
   */
  constructor({ key, createdAt, metadata, sourceReferences = [] }) {
    this.#key = entityKey.parse(key);
    if (createdAt !== undefined && typeof createdAt !== "string")
      throw new Error("Invalid Entity creation timestamp.");
    this.#createdAt = createdAt;
    this.#metadata = metadataSchema.parse(metadata);
    if (
      !Array.isArray(sourceReferences) ||
      sourceReferences.length > MAX_SOURCES
    )
      throw new Error("Entity source index is malformed or too large.");
    for (const reference of sourceReferences) {
      const source = sourceReference.parse(reference);
      if (this.#sources.has(source.source_id))
        throw new Error(
          "Entity source references must be unique portable Vault references.",
        );
      this.#sources.set(source.source_id, source);
    }
  }

  /** Stable within the Universe across edits, moves and connection changes. */
  get key() {
    return this.#key;
  }

  /** Returns fresh endpoint definitions. WorldView owns visual anchors and saved relationships. */
  getPorts() {
    return {
      input: { id: "input", direction: "input" },
      output: { id: "output", direction: "output" },
    };
  }

  /** Applies only declared metadata fields after the entire candidate passes validation. */
  updateMetadata(changes) {
    const patch = metadataPatch.parse(changes);
    if (
      Object.hasOwn(patch, "knowledgeMenus") &&
      patch.knowledgeMenus === undefined
    )
      throw new Error("Supply menu definitions including Overview.");
    this.#metadata = metadataSchema.parse({ ...this.#metadata, ...patch });
  }

  /** Trims and validates the display name while retaining the key. */
  rename(name) {
    this.updateMetadata({ name });
  }

  /** Preserves stored tag order, duplicates and spelling, as required by the existing backend contract. */
  setTags(tags) {
    this.updateMetadata({ tags });
  }

  /** Updates the color, glyph or bounded PNG data URL together after validating their shape. */
  updateAppearance(changes) {
    this.updateMetadata(appearancePatch.parse(changes));
  }

  /** Upserts one structurally valid reference. The storage adapter verifies the actual Vault file before calling. */
  attachSource(reference) {
    const source = sourceReference.parse(reference);
    if (
      !this.#sources.has(source.source_id) &&
      this.#sources.size >= MAX_SOURCES
    )
      throw new Error("This entity supports up to 5000 file associations.");
    this.#sources.set(source.source_id, source);
  }

  /** Tests exact association identity without exposing stored source metadata. */
  hasSource(sourceId) {
    return this.#sources.has(sourceId);
  }

  /** Removes an exact recorded ID. Repeating a removal has no further effect. */
  detachSource(sourceId) {
    if (typeof sourceId !== "string")
      throw new Error("Choose an assigned source.");
    this.#sources.delete(sourceId);
  }

  /** Returns detached Entity state in recorded order, suitable for backend DTOs or persistence mapping.
   * @returns {EntitySnapshot} A new serializable object with a source-reference array.
   */
  getSnapshot() {
    return structuredClone({
      key: this.#key,
      ...(this.#createdAt === undefined ? {} : { createdAt: this.#createdAt }),
      metadata: this.#metadata,
      sourceReferences: [...this.#sources.values()],
    });
  }
}

module.exports = { Entity };
