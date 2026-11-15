const fs = require("node:fs/promises");
const path = require("node:path");
const { createHash } = require("node:crypto");
const { rejectSymlink, writeTextAtomic } = require("./ai/json-store.cjs");
const {
  loadWorldView,
  withWorldViewMutation,
} = require("./worldview-store.cjs");
// Execute only statically bundled application modules. Universe copies are managed package artifacts.
const {
  INDEX_VERSION,
  updateTagIndex,
} = require("./engines/tag-association/indexer.cjs");
const { compareText } = require("./engines/tag-association/normalizer.cjs");
const { searchEntities } = require("./engines/tag-association/search.cjs");
const {
  getAssociationStatistics,
} = require("./engines/tag-association/association.cjs");
const sessions = new Map();
const MODULES = [
  "indexer.cjs",
  "normalizer.cjs",
  "association.cjs",
  "search.cjs",
];

/** Hashes deterministic metadata or package text for source revisions and accidental cache corruption detection. Pure. */
function digest(text) {
  return createHash("sha256").update(text).digest("hex");
}

/** Resolves one fixed internal package/cache path, rejecting linked parents and files. No renderer-supplied path segments are accepted. */
async function enginePath(root, ...parts) {
  let target = await fs.realpath(root);
  for (const part of [".engine", "tag-association", ...parts]) {
    target = path.join(target, part);
    await rejectSymlink(target);
  }
  return target;
}

/** Reads bounded derived/package text, returning null only for missing files. Links, oversize records and I/O failures throw. */
async function readOptionalText(target) {
  await rejectSymlink(target);
  try {
    const stats = await fs.stat(target);
    if (!stats.isFile() || stats.size > 32 * 1024 * 1024)
      throw new Error("Engine metadata must be a file within 32 MB.");
    return await fs.readFile(target, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
}

/** Installs the actual bundled modules and manifest under this Universe. Never imports or executes the Universe copies; failures propagate to memory fallback. */
async function preparePackage(root) {
  const hashes = {};
  for (const filename of MODULES) {
    const code = await fs.readFile(
      path.join(__dirname, "engines", "tag-association", filename),
      "utf8",
    );
    hashes[filename] = digest(code);
    const target = await enginePath(root, filename);
    const original = await readOptionalText(target);
    if (original !== code) await writeTextAtomic(target, code, original);
  }
  const manifest = `${JSON.stringify({ name: "tag-association", version: "1.0.0", indexVersion: INDEX_VERSION, runtime: "application-bundled", inputs: ["persisted-entity-name", "persisted-entity-tags"], modules: hashes }, null, 2)}\n`;
  const target = await enginePath(root, "manifest.json");
  const original = await readOptionalText(target);
  if (original !== manifest) await writeTextAtomic(target, manifest, original);
}

/** Restores a checksum-verified, World/revision-scoped cache. Missing/stale caches return null; corrupt payloads throw for visible rebuilding. */
async function readCache(root, worldId, revision) {
  const text = await readOptionalText(
    await enginePath(root, "cache", "index.json"),
  );
  if (text === null) return null;
  const cache = JSON.parse(text);
  if (
    cache.index?.version !== INDEX_VERSION ||
    cache.index.worldId !== worldId ||
    cache.index.revision !== revision
  )
    return null;
  if (
    cache.checksum !== digest(JSON.stringify(cache.index)) ||
    !Array.isArray(cache.index.entities) ||
    !Array.isArray(cache.index.tagFrequencies) ||
    !Array.isArray(cache.index.pairFrequencies)
  )
    throw new Error("Search cache integrity check failed.");
  return cache.index;
}

/** Saves reconstructable derived data atomically. A size or permissions error leaves the authoritative entity metadata untouched. */
async function writeCache(root, index) {
  const text = `${JSON.stringify({ checksum: digest(JSON.stringify(index)), index })}\n`;
  if (Buffer.byteLength(text, "utf8") > 32 * 1024 * 1024)
    throw new Error(
      "Search cache exceeds 32 MB; search is available in memory.",
    );
  const target = await enginePath(root, "cache", "index.json");
  await writeTextAtomic(target, text, await readOptionalText(target));
}

/**
 * Resolves the current single World from its real Universe root and persisted entity metadata.
 * Reuses matching revisions, restores derived caches, or rebuilds changed metadata. Serializes with entity writes.
 * Package/cache failures return visible warnings with a working in-memory index; entity read failures propagate.
 */
async function getTagIndex(rootPath, rebuild = false) {
  const root = await fs.realpath(rootPath);
  return withWorldViewMutation(
    root,
    /** Reads a consistent persisted snapshot and manages only reconstructable package/cache artifacts. */ async function resolveCurrentWorldIndex() {
      const worldId = `world-${digest(process.platform === "win32" ? root.toLowerCase() : root).slice(0, 32)}`;
      const metadata = await loadWorldView(root, { metadataOnly: true });
      const entities = metadata.chips
        .map(
          /** Selects eligible persisted fields, excluding files, inferred tags and relationships. */ (
            chip,
          ) => ({ id: chip.id, name: chip.name, tags: chip.tags }),
        )
        .sort(
          /** Makes revisions independent of file enumeration and creation timestamps. */ (
            a,
            b,
          ) => compareText(a.id, b.id),
        );
      const revision = digest(
        JSON.stringify({ version: INDEX_VERSION, worldId, entities }),
      );
      const previous = sessions.get(worldId);
      if (!rebuild && previous?.index.revision === revision)
        return {
          ...previous,
          warnings: [
            ...previous.warnings,
            ...metadata.issues.map(
              /** Surfaces damaged entity indexes excluded by the existing loader. */ (
                issue,
              ) => `${issue.index}: ${issue.message}`,
            ),
          ],
        };
      const warnings = [];
      let index = null;
      let cacheState = "rebuilt";
      try {
        await preparePackage(root);
        if (!rebuild) {
          try {
            index = await readCache(root, worldId, revision);
          } catch (error) {
            warnings.push(`Search cache will be rebuilt. ${error.message}`);
          }
        }
        if (index) cacheState = "restored";
        else {
          index = updateTagIndex(null, worldId, entities, revision);
          await writeCache(root, index);
        }
      } catch (error) {
        index = updateTagIndex(null, worldId, entities, revision);
        cacheState = "memory";
        warnings.push(
          `Search is using memory because its engine package/cache could not be saved. ${error.message}`,
        );
      }
      const value = { index, cacheState, warnings };
      sessions.set(worldId, value);
      return {
        ...value,
        warnings: [
          ...warnings,
          ...metadata.issues.map(
            /** Reports skipped invalid metadata without hiding healthy search results. */ (
              issue,
            ) => `${issue.index}: ${issue.message}`,
          ),
        ],
      };
    },
  );
}

/** Searches only the current persisted World, returning measured result explanations plus cache warnings. Invalid queries throw before I/O. */
async function searchWorldTags(root, query) {
  if (typeof query !== "string" || query.length > 500)
    throw new Error("Search query must be text within 500 characters.");
  const state = await getTagIndex(root);
  return {
    ...searchEntities(state.index, query),
    cacheState: state.cacheState,
    warnings: state.warnings,
  };
}

/** Rebuilds disposable cache data explicitly and exposes the resulting World/version/status without changing entity metadata. */
async function rebuildWorldTagCache(root) {
  const state = await getTagIndex(root, true);
  return {
    worldId: state.index.worldId,
    revision: state.index.revision,
    cacheState: state.cacheState,
    warnings: state.warnings,
  };
}

/** Returns current measured tag/pair statistics for the requested phrase within this Universe's World only. */
async function getWorldTagStatistics(root, query) {
  if (typeof query !== "string" || query.length > 500)
    throw new Error("Invalid statistics query.");
  const state = await getTagIndex(root);
  return {
    worldId: state.index.worldId,
    revision: state.index.revision,
    tagFrequencies: state.index.tagFrequencies,
    pairFrequencies: state.index.pairFrequencies,
    associations: getAssociationStatistics(state.index, query),
    warnings: state.warnings,
  };
}
module.exports = {
  getTagIndex,
  searchWorldTags,
  rebuildWorldTagCache,
  getWorldTagStatistics,
};
