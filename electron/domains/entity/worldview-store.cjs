const fs = require("node:fs/promises");
const path = require("node:path");
const yaml = require("js-yaml");
const { z } = require("zod");
const {
  serialQueue,
  rejectSymlink,
  writeTextAtomic,
} = require("../../core/persistence/json-store.cjs");
const { statVaultSource } = require("../universe/vault-service.cjs");

const {
  entityKey: idSchema,
  sourceReference,
} = require("./contracts/entity-schema.cjs");
const { Entity } = require("./model/Entity.cjs");

const placementSchema = z.object({
  x: z.number().finite().min(-1e9).max(1e9),
  y: z.number().finite().min(-1e9).max(1e9),
});
const queues = new Map();

const columns = {
  name: "name",
  tags: "tags",
  color: "color",
  icon: "icon",
  iconImage: "icon_image",
  category: "category",
  knowledgeMenus: "knowledge_menus",
};

/** Returns a protected metadata directory inside the existing Vault metadata namespace, without creating it. */
async function indexDirectory(rootPath) {
  const root = await fs.realpath(rootPath);
  let directory = root;
  for (const part of [".wonnyy", "worldview", "entities"]) {
    directory = path.join(directory, part);
    await rejectSymlink(directory);
  }
  return directory;
}

/** Validates renderer-owned fields while excluding transient source statuses and server-owned associations. */
function validateChip(chip) {
  try {
    const entity = new Entity({ key: chip?.id, metadata: chip });
    return {
      id: entity.key,
      ...entity.getSnapshot().metadata,
      position: placementSchema.parse(chip.position),
    };
  } catch (error) {
    if (error instanceof z.ZodError)
      throw new Error("Invalid WorldView chip metadata.");
    throw error;
  }
}

/** Parses only the entity metadata document, preserving unknown frontmatter and the complete Markdown body. */
function parseEntityIndex(text, expectedId) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/.exec(text);
  if (!match)
    throw new Error("Entity index needs YAML frontmatter delimited by ---.");
  const metadata = yaml.load(match[1], { schema: yaml.JSON_SCHEMA });
  if (
    !metadata ||
    metadata.schema_version !== 1 ||
    metadata.entity_id !== expectedId
  )
    throw new Error("Entity index schema or ID does not match its filename.");
  if (!Array.isArray(metadata.sources) || metadata.sources.length > 5000)
    throw new Error("Entity source index is malformed or too large.");
  const seen = new Set();
  for (const item of metadata.sources) {
    const parsed = sourceReference.safeParse(item);
    if (!parsed.success || seen.has(item.source_id))
      throw new Error(
        "Entity source references must be unique portable Vault references.",
      );
    seen.add(item.source_id);
  }
  const chip = validateChip({
    id: metadata.entity_id,
    name: metadata.name,
    icon: metadata.icon ?? "",
    iconImage: metadata.icon_image ?? undefined,
    color: metadata.color,
    category: metadata.category ?? undefined,
    tags: metadata.tags ?? [],
    position: metadata.position,
    knowledgeMenus: metadata.knowledge_menus ?? [
      { id: "overview", title: "Overview" },
    ],
  });
  return {
    metadata,
    body: match[2],
    original: text,
    chip: {
      ...chip,
      createdAt:
        typeof metadata.created_at === "string"
          ? metadata.created_at
          : undefined,
    },
  };
}

/** Serializes deterministic YAML frontmatter and preserves user-authored body and unrelated metadata. */
function serializeEntityIndex(record) {
  const text = `---\n${yaml.dump(record.metadata, { schema: yaml.JSON_SCHEMA, sortKeys: true, lineWidth: -1, noRefs: true })}---\n${record.body}`;
  if (Buffer.byteLength(text, "utf8") > 2 * 1024 * 1024)
    throw new Error(
      "Entity metadata exceeds the 2 MB index limit. Unassign some files or reduce its notes.",
    );
  return text;
}

/** Reads a bounded, non-linked entity index; missing records are returned only when explicitly allowed. */
async function readRecord(rootPath, id, allowMissing = false) {
  idSchema.parse(id);
  const target = path.join(await indexDirectory(rootPath), `${id}.md`);
  try {
    await rejectSymlink(target);
    const stat = await fs.stat(target);
    if (!stat.isFile() || stat.size > 2 * 1024 * 1024)
      throw new Error(
        "Entity index must be a Markdown file smaller than 2 MB.",
      );
    return parseEntityIndex(await fs.readFile(target, "utf8"), id);
  } catch (error) {
    if (allowMissing && error.code === "ENOENT") return null;
    throw error;
  }
}

/** Resolves recorded references using stat only; missing sources remain associated with an explicit status. */
async function resolveSources(rootPath, recorded) {
  const sources = [];
  for (const source of recorded) {
    const value = {
      sourceId: source.source_id,
      sourceRef: source.source_ref,
      filename: source.filename,
      extension: source.extension,
      origin: "universe",
      sizeBytes: null,
      recordedSizeBytes: source.size_bytes,
      status: "unavailable",
    };
    try {
      const resolved = await statVaultSource(rootPath, source.source_ref);
      if (!resolved.stats.isFile())
        throw new Error("The assigned source is no longer a file.");
      value.filename = resolved.entry.name;
      value.extension = resolved.entry.extension;
      value.sizeBytes = resolved.entry.sizeBytes;
      value.status = value.sizeBytes === null ? "unavailable" : "available";
      if (value.sizeBytes === null)
        value.message = "Byte metadata is unavailable.";
    } catch (error) {
      value.status = error.code === "ENOENT" ? "missing" : "unavailable";
      value.message =
        value.status === "missing"
          ? "Original Universe file is missing."
          : error.message;
    }
    sources.push(value);
  }
  return sources;
}

/** Returns a renderable chip reconstructed from its Markdown record and current authoritative byte metadata. */
async function resolveRecord(rootPath, record) {
  return {
    ...record.chip,
    sources: await resolveSources(rootPath, record.metadata.sources),
    indexRef: `.wonnyy/worldview/entities/${record.chip.id}.md`,
  };
}

/** Loads persisted entity records independently. metadataOnly omits source stat resolution for tag search; no source contents are read. */
async function loadWorldView(rootPath, { metadataOnly = false } = {}) {
  const directory = await indexDirectory(rootPath);
  let entries;
  try {
    entries = await fs.readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT")
      return { rootPath, indexDirectory: directory, chips: [], issues: [] };
    throw error;
  }
  const chips = [];
  const issues = [];
  for (const entry of entries.sort(
    /** Sorts metadata filenames for deterministic restoration. */ function compareFiles(
      a,
      b,
    ) {
      return a.name.localeCompare(b.name);
    },
  )) {
    if (!entry.name.endsWith(".md")) continue;
    try {
      if (!entry.isFile() || entry.isSymbolicLink())
        throw new Error("Linked or non-file entity indexes are not supported.");
      const record = await readRecord(rootPath, entry.name.slice(0, -3));
      chips.push(
        metadataOnly ? record.chip : await resolveRecord(rootPath, record),
      );
    } catch (error) {
      issues.push({ index: entry.name, message: error.message });
    }
  }
  chips.sort(
    /** Restores creation order independently of UUID filenames. */ function compareCreation(
      a,
      b,
    ) {
      return (
        (a.createdAt ?? "").localeCompare(b.createdAt ?? "") ||
        a.id.localeCompare(b.id)
      );
    },
  );
  return { rootPath, indexDirectory: directory, chips, issues };
}

/** Serializes mutations per real Universe root; failed operations do not poison subsequent writes. */
async function mutate(rootPath, operation) {
  const root = await fs.realpath(rootPath);
  if (!queues.has(root)) queues.set(root, serialQueue());
  return queues.get(root)(operation);
}

/** Saves chip appearance and menu configuration while preserving source associations, unknown YAML, and body text. */
async function saveWorldViewChip(rootPath, input) {
  const chip = validateChip(input);
  return mutate(rootPath, async function saveChipRecord() {
    const old = await readRecord(rootPath, chip.id, true);
    const record = old ?? {
      original: null,
      metadata: { schema_version: 1, entity_id: chip.id, sources: [] },
      body: "# Entity Source Index\n\nSource metadata and associations only. No file content parsing has been performed.\n",
    };
    Object.assign(record.metadata, {
      created_at: record.metadata.created_at ?? new Date().toISOString(),
      name: chip.name,
      icon: chip.icon,
      icon_image: chip.iconImage ?? null,
      color: chip.color,
      category: chip.category ?? null,
      tags: chip.tags,
      knowledge_menus: chip.knowledgeMenus ??
        record.metadata.knowledge_menus ?? [
          { id: "overview", title: "Overview" },
        ],
      position: { ...record.metadata.position, ...chip.position },
    });
    record.chip = {
      ...chip,
      knowledgeMenus: record.metadata.knowledge_menus,
      createdAt: record.metadata.created_at,
    };
    await writeTextAtomic(
      path.join(await indexDirectory(rootPath), `${chip.id}.md`),
      serializeEntityIndex(record),
      record.original,
    );
    return resolveRecord(rootPath, record);
  });
}

/** Stats all selected Vault files before a single queued write. The service may recheck its grant after resolution. */
async function assignWorldViewFiles(rootPath, id, references, beforeWrite) {
  idSchema.parse(id);
  if (
    !Array.isArray(references) ||
    !references.length ||
    references.length > 500 ||
    references.some(
      /** Rejects non-text source references before filesystem access. */ function invalidRef(
        ref,
      ) {
        return typeof ref !== "string";
      },
    )
  )
    throw new Error("Select 1 to 500 Universe files.");
  return mutate(rootPath, async function assignFiles() {
    const record = await readRecord(rootPath, id);
    const entity = entityFromRecord(record);
    // Keep extension fields when refreshing a previously recorded reference.
    const existing = new Map(
      record.metadata.sources.map((source) => [source.source_id, source]),
    );
    for (const reference of new Set(references)) {
      const resolved = await statVaultSource(rootPath, reference);
      if (!resolved.stats.isFile())
        throw new Error(
          "Only files can be assigned; folders are navigation containers.",
        );
      entity.attachSource({
        source_id: reference,
        source_ref: reference,
        filename: resolved.entry.name,
        extension: resolved.entry.extension,
        size_bytes: resolved.entry.sizeBytes,
        origin: "universe",
      });
    }
    record.metadata.sources = entity
      .getSnapshot()
      .sourceReferences.map((source) => ({
        ...existing.get(source.source_id),
        ...source,
      }))
      .sort(
        /** Keeps source serialization independent of picker order. */ function compareSources(
          a,
          b,
        ) {
          return a.source_id < b.source_id
            ? -1
            : a.source_id > b.source_id
              ? 1
              : 0;
        },
      );
    await beforeWrite?.();
    await writeTextAtomic(
      path.join(await indexDirectory(rootPath), `${id}.md`),
      serializeEntityIndex(record),
      record.original,
    );
    return resolveRecord(rootPath, record);
  });
}

/** Removes one recorded association after the optional host recheck. The original Vault file stays in place. */
async function unassignWorldViewFile(rootPath, id, sourceId, beforeWrite) {
  idSchema.parse(id);
  if (typeof sourceId !== "string")
    throw new Error("Choose an assigned source.");
  return mutate(rootPath, async function unassignFile() {
    const record = await readRecord(rootPath, id);
    const entity = entityFromRecord(record);
    entity.detachSource(sourceId);
    record.metadata.sources = record.metadata.sources.filter((source) =>
      entity.hasSource(source.source_id),
    );
    await beforeWrite?.();
    await writeTextAtomic(
      path.join(await indexDirectory(rootPath), `${id}.md`),
      serializeEntityIndex(record),
      record.original,
    );
    return resolveRecord(rootPath, record);
  });
}

/** Deletes only a validated entity index following user confirmation; no source file is removed. */
async function deleteWorldViewChip(rootPath, id) {
  idSchema.parse(id);
  return mutate(rootPath, async function deleteIndex() {
    const record = await readRecord(rootPath, id, true);
    if (!record) return;
    const target = path.join(await indexDirectory(rootPath), `${id}.md`);
    await rejectSymlink(target);
    await fs.unlink(target);
  });
}

/** Projects one schema-v1 record into Entity-owned state without resolving a source or opening a companion. */
function entityFromRecord(record) {
  return new Entity({
    key: record.chip.id,
    createdAt: record.chip.createdAt,
    metadata: record.chip,
    sourceReferences: record.metadata.sources,
  });
}

/** Reads one bounded record and projects its known fields. Original YAML and Markdown stay inside the store. */
async function readEntitySnapshot(root, id) {
  return entityFromRecord(await readRecord(root, id)).getSnapshot();
}

/** Applies only validated Entity fields inside the WorldView queue. An external edit or revoked grant aborts the replacement. */
async function patchEntityMetadata(root, id, changes, beforeWrite) {
  idSchema.parse(id);
  return mutate(
    root,
    /** Patches the latest YAML without replacing placement, source data, unknown fields or the body. */ async function writeMetadataPatch() {
      const record = await readRecord(root, id);
      const entity = entityFromRecord(record);
      entity.updateMetadata(changes);
      const snapshot = entity.getSnapshot();
      for (const [field, column] of Object.entries(columns)) {
        if (Object.hasOwn(changes, field))
          record.metadata[column] = snapshot.metadata[field] ?? null;
      }
      await beforeWrite?.();
      await writeTextAtomic(
        path.join(await indexDirectory(root), id + ".md"),
        serializeEntityIndex(record),
        record.original,
      );
      return snapshot;
    },
  );
}

module.exports = {
  readEntitySnapshot,
  patchEntityMetadata,
  withWorldViewMutation: mutate,
  readWorldViewChip,
  loadWorldView,
  saveWorldViewChip,
  assignWorldViewFiles,
  unassignWorldViewFile,
  deleteWorldViewChip,
  parseEntityIndex,
  serializeEntityIndex,
};

/** Reads one existing entity and current assignment metadata for guarded Knowledge Card operations. */
async function readWorldViewChip(rootPath, id) {
  return resolveRecord(rootPath, await readRecord(rootPath, id));
}
