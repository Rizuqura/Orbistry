const { normalizeEntityTags, compareText } = require("./normalizer.cjs");
const { countAssociations } = require("./association.cjs");
const INDEX_VERSION = 1;

/** Builds a serializable index solely from persisted entity IDs, names and assigned tags within the supplied World. Never mutates inputs. */
function buildTagIndex(worldId, sourceEntities, revision) {
  const entities = sourceEntities
    .map(
      /** Copies authoritative display metadata into independent normalized tag sets. */ (
        entity,
      ) => ({
        id: entity.id,
        name: entity.name,
        tags: normalizeEntityTags(entity.tags),
      }),
    )
    .sort(
      /** Stabilizes display spelling and record order by identity. */ (a, b) =>
        compareText(a.id, b.id),
    );
  return {
    version: INDEX_VERSION,
    worldId,
    revision,
    entities,
    ...countAssociations(entities),
  };
}

/** Updates derived data using a deterministic full rebuild when persisted metadata revision changes; unchanged revisions reuse the index. */
function updateTagIndex(index, worldId, sourceEntities, revision) {
  if (
    index?.version === INDEX_VERSION &&
    index.worldId === worldId &&
    index.revision === revision
  )
    return index;
  return buildTagIndex(worldId, sourceEntities, revision);
}
module.exports = { INDEX_VERSION, buildTagIndex, updateTagIndex };
