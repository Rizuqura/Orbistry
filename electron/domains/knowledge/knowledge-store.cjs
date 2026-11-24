const path = require("node:path");
const yaml = require("js-yaml");
const { writeTextAtomic } = require("../../core/persistence/json-store.cjs");
const {
  readWorldViewChip,
  withWorldViewMutation,
} = require("../entity/worldview-store.cjs");
const { readVaultPreview } = require("../universe/vault-service.cjs");
const { parseKnowledgeIndex } = require("../indexing/knowledge-index.cjs");
const { normalizeSymbol } = require("../../engines/daily-price/index.cjs");
const {
  readRecord,
  resolveKnowledgeSource,
} = require("./knowledge-source-access.cjs");

/** Returns only logical editor state, excluding filesystem paths and internal serialization fields. */
function publicState(record) {
  return {
    draft: record.draft,
    applied: record.applied,
    menus: record.menus,
    revision: record.revision,
    ...(record.metadata?.price_symbol !== undefined
      ? { priceSymbol: normalizeSymbol(record.metadata.price_symbol) }
      : {}),
    ...(Array.isArray(record.metadata?.source_notes)
      ? { sourceNotes: record.metadata.source_notes }
      : {}),
  };
}

/** Loads the logical index only for an existing entity; absent companion files resolve to an empty landing state. */
async function readKnowledgeIndex(rootPath, id) {
  await readWorldViewChip(rootPath, id);
  return publicState(await readRecord(rootPath, id));
}

/** Validates file assignments and parsed source declarations without retrieving market data. Yahoo ticker fields can be configured in the applied card. */
async function validateKnowledgeIndex(rootPath, id, draft) {
  const parsed = parseKnowledgeIndex(draft);
  const chip = await readWorldViewChip(rootPath, id);
  const assigned = new Map(
    chip.sources.map((source) => [source.sourceId, source]),
  );
  for (const menu of parsed.menus) {
    for (const component of [menu, ...(menu.carousels ?? [])])
      component.sourceIds.forEach((sourceId, index) => {
        const source = assigned.get(sourceId);
        if (!source)
          parsed.errors.push({
            line: component.sourceLines[index],
            message: `Source ID “${sourceId}” is unknown or not assigned to this entity.`,
          });
        else if (source.status !== "available")
          parsed.errors.push({
            line: component.sourceLines[index],
            message: `Source “${sourceId}” is ${source.status}. Check its original Universe location.`,
          });
        else if (
          component !== menu &&
          ![".png", ".jpg", ".jpeg"].includes(source.extension.toLowerCase())
        )
          parsed.errors.push({
            line: component.sourceLines[index],
            message: "Image viewers support PNG and JPEG sources.",
          });
      });
  }
  return parsed;
}

/** Saves draft or applies a fully valid index atomically under the same queue as entity-source mutations. Conflicts reject without writes. */
async function saveKnowledgeIndex(rootPath, id, draft, revision, apply) {
  if (
    typeof draft !== "string" ||
    Buffer.byteLength(draft, "utf8") > 256 * 1024
  )
    throw new Error("Index draft must be text within 256 KB.");
  return withWorldViewMutation(rootPath, async function writeIndex() {
    await readWorldViewChip(rootPath, id);
    const record = await readRecord(rootPath, id);
    if (record.revision !== revision)
      throw new Error(
        "Knowledge index changed on disk. Reload the saved index before trying again.",
      );
    if (apply) {
      const parsed = await validateKnowledgeIndex(rootPath, id, draft);
      if (parsed.errors.length)
        return { ...publicState(record), validation: parsed, saved: false };
      record.applied = draft;
    }
    record.draft = draft;
    const metadata = {
      ...record.metadata,
      schema_version: 1,
      entity_id: id,
      draft,
      has_applied: record.applied !== null,
    };
    const text = `---\n${yaml.dump(metadata, { schema: yaml.JSON_SCHEMA, sortKeys: true, lineWidth: -1, noRefs: true })}---\n${record.applied ?? ""}`;
    if (Buffer.byteLength(text, "utf8") > 2 * 1024 * 1024)
      throw new Error(
        "Knowledge index metadata exceeds the 2 MB document limit. The saved index was preserved.",
      );
    await writeTextAtomic(record.target, text, record.original);
    return { ...publicState(await readRecord(rootPath, id)), saved: true };
  });
}

/** Resolves one applied named carousel using stable entity/group IDs. Never processes its sources. */
async function resolveKnowledgeCarousel(rootPath, id, carouselId) {
  await readWorldViewChip(rootPath, id);
  const record = await readRecord(rootPath, id);
  const group = record.menus
    .flatMap((menu) => menu.carousels ?? [])
    .find((item) => item.id === carouselId);
  if (!group)
    throw new Error("Choose a carousel from the current applied index.");
  return group;
}

/** Reads a referenced original through guarded viewers. XLSX computation runs outside the entity write queue and reauthorizes before returning. */
async function previewKnowledgeSource(rootPath, id, sourceId) {
  const source = await resolveKnowledgeSource(rootPath, id, sourceId);
  if (path.extname(source.sourceRef).toLowerCase() === ".xlsx")
    return require("../../excel-service.cjs").excelService.request(
      rootPath,
      id,
      sourceId,
    );
  return withWorldViewMutation(rootPath, async function previewSource() {
    const source = await resolveKnowledgeSource(rootPath, id, sourceId);
    return readVaultPreview(rootPath, source.sourceRef);
  });
}

/** Saves bounded human notes in the existing entity companion using revision checks and current source authorization. No source file is written. */
async function saveKnowledgeNote(rootPath, id, sourceId, text, revision) {
  if (typeof text !== "string" || text.length > 16000)
    throw new Error("Notes must be text within 16000 characters.");
  return withWorldViewMutation(rootPath, async function saveSourceNote() {
    await resolveKnowledgeSource(rootPath, id, sourceId);
    const record = await readRecord(rootPath, id);
    if (record.revision !== revision)
      throw new Error(
        "Knowledge Card changed on disk. Reopen it before saving these notes.",
      );
    const notes = Array.isArray(record.metadata.source_notes)
      ? record.metadata.source_notes
      : [];
    record.metadata.source_notes = [
      ...notes.filter((note) => note.sourceId !== sourceId),
      { sourceId, text },
    ];
    const serialized = `---\n${yaml.dump(record.metadata, { schema: yaml.JSON_SCHEMA, sortKeys: true, lineWidth: -1, noRefs: true })}---\n${record.applied ?? ""}`;
    if (Buffer.byteLength(serialized, "utf8") > 2 * 1024 * 1024)
      throw new Error("Knowledge Card notes exceed the metadata size limit.");
    await writeTextAtomic(record.target, serialized, record.original);
    return publicState(await readRecord(rootPath, id));
  });
}

/** Saves or removes an entity's Yahoo ticker in its existing companion, preserving editor text and checking the expected revision. Writes metadata only. */
async function savePriceSymbol(rootPath, id, input, revision) {
  const symbol = input === "" ? "" : normalizeSymbol(input);
  return withWorldViewMutation(rootPath, async function writePriceSymbol() {
    await readWorldViewChip(rootPath, id);
    const record = await readRecord(rootPath, id);
    if (record.revision !== revision)
      throw new Error(
        "Knowledge Card changed. Reopen it before saving the ticker.",
      );
    const metadata = {
      ...record.metadata,
      schema_version: 1,
      entity_id: id,
      draft: record.draft,
      has_applied: record.applied !== null,
    };
    if (symbol) metadata.price_symbol = symbol;
    else delete metadata.price_symbol;
    const serialized = `---\n${yaml.dump(metadata, { schema: yaml.JSON_SCHEMA, sortKeys: true, lineWidth: -1, noRefs: true })}---\n${record.applied ?? ""}`;
    if (Buffer.byteLength(serialized) > 2 * 1024 * 1024)
      throw new Error("Knowledge Card metadata exceeds 2 MB.");
    await writeTextAtomic(record.target, serialized, record.original);
    return publicState(await readRecord(rootPath, id));
  });
}

module.exports = {
  readKnowledgeIndex,
  validateKnowledgeIndex,
  saveKnowledgeIndex,
  previewKnowledgeSource,
  resolveKnowledgeSource,
  resolveKnowledgeCarousel,
  saveKnowledgeNote,
  savePriceSymbol,
};
