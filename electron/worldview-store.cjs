const fs = require("node:fs/promises");
const path = require("node:path");
const yaml = require("js-yaml");
const { z } = require("zod");
const {
  serialQueue,
  rejectSymlink,
  writeTextAtomic,
} = require("./ai/json-store.cjs");
const { statVaultSource } = require("./vault-service.cjs");

const idSchema = z.string().regex(/^[a-zA-Z0-9_-]{1,128}$/);
const sourceSchema = z
  .object({
    source_id: z.string().min(1).max(32768),
    source_ref: z.string().min(1).max(32768),
    filename: z.string().min(1),
    extension: z.string(),
    size_bytes: z
      .number()
      .int()
      .nonnegative()
      .max(Number.MAX_SAFE_INTEGER)
      .nullable(),
    origin: z.literal("universe"),
  })
  .passthrough();
const chipSchema = z.object({
  id: idSchema,
  name: z.string().trim().min(1).max(80),
  icon: z.string().max(32).default(""),
  iconImage: z
    .string()
    .max(500000)
    .regex(/^data:image\/png;base64,[A-Za-z0-9+/=]+$/)
    .optional(),
  color: z.string().regex(/^#[a-f0-9]{6}$/i),
  category: z.string().max(80).optional(),
  tags: z.array(z.string().max(500)).max(100),
  position: z.object({
    x: z.number().finite().min(-1e9).max(1e9),
    y: z.number().finite().min(-1e9).max(1e9),
  }),
});
const queues = new Map();

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
  const result = chipSchema.safeParse(chip);
  if (!result.success) throw new Error("Invalid WorldView chip metadata.");
  return result.data;
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
    const parsed = sourceSchema.safeParse(item);
    if (
      !parsed.success ||
      item.source_id !== item.source_ref ||
      seen.has(item.source_id)
    )
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

/** Loads all entity records independently so one damaged index cannot blank or overwrite the rest of the world. */
async function loadWorldView(rootPath) {
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
      chips.push(
        await resolveRecord(
          rootPath,
          await readRecord(rootPath, entry.name.slice(0, -3)),
        ),
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

/** Saves one chip while preserving server-owned source associations, unknown YAML, and body text. */
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
      position: { ...record.metadata.position, ...chip.position },
    });
    record.chip = { ...chip, createdAt: record.metadata.created_at };
    await writeTextAtomic(
      path.join(await indexDirectory(rootPath), `${chip.id}.md`),
      serializeEntityIndex(record),
      record.original,
    );
    return resolveRecord(rootPath, record);
  });
}

/** Adds unique file references after authoritative stat validation; never reads or copies source contents. */
async function assignWorldViewFiles(rootPath, id, references) {
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
    const existing = new Map(
      record.metadata.sources.map(
        /** Maps stored references without replacing unrelated source metadata. */ function sourcePair(
          source,
        ) {
          return [source.source_id, source];
        },
      ),
    );
    for (const reference of new Set(references)) {
      const resolved = await statVaultSource(rootPath, reference);
      if (!resolved.stats.isFile())
        throw new Error(
          "Only files can be assigned; folders are navigation containers.",
        );
      existing.set(reference, {
        ...existing.get(reference),
        source_id: reference,
        source_ref: reference,
        filename: resolved.entry.name,
        extension: resolved.entry.extension,
        size_bytes: resolved.entry.sizeBytes,
        origin: "universe",
      });
    }
    if (existing.size > 5000)
      throw new Error("This entity supports up to 5000 file associations.");
    record.metadata.sources = [...existing.values()].sort(
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
    await writeTextAtomic(
      path.join(await indexDirectory(rootPath), `${id}.md`),
      serializeEntityIndex(record),
      record.original,
    );
    return resolveRecord(rootPath, record);
  });
}

/** Removes only an association from the Markdown index; the original Universe source is never modified. */
async function unassignWorldViewFile(rootPath, id, sourceId) {
  idSchema.parse(id);
  if (typeof sourceId !== "string")
    throw new Error("Choose an assigned source.");
  return mutate(rootPath, async function unassignFile() {
    const record = await readRecord(rootPath, id);
    record.metadata.sources = record.metadata.sources.filter(
      /** Retains every association other than the exact requested source ID. */ function keepSource(
        source,
      ) {
        return source.source_id !== sourceId;
      },
    );
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

module.exports = {
  loadWorldView,
  saveWorldViewChip,
  assignWorldViewFiles,
  unassignWorldViewFile,
  deleteWorldViewChip,
  parseEntityIndex,
  serializeEntityIndex,
};
