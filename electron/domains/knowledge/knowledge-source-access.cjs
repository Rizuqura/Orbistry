const fs = require("node:fs/promises");
const path = require("node:path");
const yaml = require("js-yaml");
const { createHash } = require("node:crypto");
const { rejectSymlink } = require("../../core/persistence/json-store.cjs");
const { readWorldViewChip } = require("../entity/worldview-store.cjs");
const { parseKnowledgeIndex } = require("../indexing/knowledge-index.cjs");

/** Resolves an entity-specific companion document inside the existing protected metadata namespace. */
async function knowledgePath(rootPath, id) {
  if (typeof id !== "string" || !/^[a-zA-Z0-9_-]{1,128}$/.test(id))
    throw new Error("Invalid entity ID.");
  let directory = await fs.realpath(rootPath);
  for (const part of [".wonnyy", "worldview", "knowledge"]) {
    directory = path.join(directory, part);
    await rejectSymlink(directory);
  }
  const target = path.join(directory, `${id}.md`);
  await rejectSymlink(target);
  return target;
}

/** Reads a bounded manual-index companion with an optimistic version token; damaged records throw and are never overwritten. */
async function readRecord(rootPath, id) {
  const target = await knowledgePath(rootPath, id);
  let original;
  try {
    const stats = await fs.stat(target);
    if (!stats.isFile() || stats.size > 2 * 1024 * 1024)
      throw new Error(
        "Knowledge index must be a metadata document within 2 MB.",
      );
    original = await fs.readFile(target, "utf8");
  } catch (error) {
    if (error.code === "ENOENT")
      return {
        target,
        original: null,
        revision: null,
        draft: "",
        applied: null,
        menus: [],
      };
    throw error;
  }
  const match = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/.exec(
    original,
  );
  if (!match)
    throw new Error(
      "Knowledge index has invalid frontmatter. Repair it before saving.",
    );
  const metadata = yaml.load(match[1], { schema: yaml.JSON_SCHEMA });
  if (
    !metadata ||
    metadata.schema_version !== 1 ||
    metadata.entity_id !== id ||
    typeof metadata.draft !== "string" ||
    typeof metadata.has_applied !== "boolean"
  )
    throw new Error("Knowledge index metadata is invalid.");
  const applied = metadata.has_applied ? match[2] : null;
  const parsed = parseKnowledgeIndex(applied ?? "", {
    allowLegacyParsing: true,
  });
  if (parsed.errors.length)
    throw new Error(
      "The saved applied index is malformed. Repair its declarations before saving.",
    );
  return {
    target,
    original,
    metadata,
    revision: createHash("sha256").update(original).digest("hex"),
    draft: metadata.draft,
    applied,
    menus: parsed.menus,
  };
}

/** Authorizes legacy or grouped applied references against current assignments for preview/locating. Broken references throw. */
async function resolveKnowledgeSource(rootPath, id, sourceId) {
  const record = await readRecord(rootPath, id);
  const chip = await readWorldViewChip(rootPath, id);
  if (
    typeof sourceId !== "string" ||
    !record.menus.some((menu) =>
      [menu, ...(menu.carousels ?? [])].some((component) =>
        component.sourceIds.includes(sourceId),
      ),
    )
  )
    throw new Error("Choose a source referenced by an applied index menu.");
  const source = chip.sources.find((item) => item.sourceId === sourceId);
  if (!source)
    throw new Error(
      "This source was unassigned from the entity. Correct the index or assign it again.",
    );
  if (source.status !== "available")
    throw new Error("Original Universe source is missing or unavailable.");
  return source;
}

module.exports = { readRecord, resolveKnowledgeSource };
