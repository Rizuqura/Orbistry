const { normalizeTag, compareText } = require("./normalizer.cjs");
const { getAssociationStatistics } = require("./association.cjs");

/** Searches one immutable World index. Exact tags precede name/partial lexical matches, followed by strongest-count associations, with no duplicate entities. */
function searchEntities(index, query) {
  const normalizedQuery = normalizeTag(query);
  const associations = normalizedQuery
    ? getAssociationStatistics(index, normalizedQuery)
    : [];
  const associationMap = new Map(
    associations.map(
      /** Preserves association ranking for entity evidence. */ (value) => [
        value.tag,
        value,
      ],
    ),
  );
  const suggestions = normalizedQuery
    ? index.tagFrequencies.filter(
        /** Offers phrase-preserving lexical typing assistance. */ (value) =>
          value.tag.includes(normalizedQuery) && value.tag !== normalizedQuery,
      )
    : [];
  const ranked = [];
  if (normalizedQuery)
    for (const entity of index.entities) {
      const exact = entity.tags.find(
        /** Matches the entire normalized phrase before partial lookup. */ (
          tag,
        ) => tag.normalized === normalizedQuery,
      );
      const partial = entity.tags.filter(
        /** Matches contiguous phrases without splitting keywords. */ (tag) =>
          tag.normalized.includes(normalizedQuery),
      );
      const related = entity.tags
        .map(
          /** Resolves measured evidence while preserving this entity's assigned tag spelling. */ (
            tag,
          ) => {
            const association = associationMap.get(tag.normalized);
            return association
              ? { ...association, display: tag.display }
              : null;
          },
        )
        .filter(Boolean)
        .sort(
          /** Chooses strongest evidence without summing correlated tag counts. */ (
            a,
            b,
          ) =>
            b.count - a.count ||
            b.confidence - a.confidence ||
            compareText(a.tag, b.tag),
        );
      const name = normalizeTag(entity.name);
      let priority;
      let matchType;
      let matchField;
      let matchedTag = null;
      if (exact) {
        priority = 0;
        matchType = "exact";
        matchField = "tag";
        matchedTag = exact.display;
      } else if (name === normalizedQuery) {
        priority = 1;
        matchType = "exact";
        matchField = "name";
      } else if (partial.length) {
        priority = 2;
        matchType = "partial";
        matchField = "tag";
        matchedTag = partial[0].display;
      } else if (name.includes(normalizedQuery)) {
        priority = 3;
        matchType = "partial";
        matchField = "name";
      } else if (related.length) {
        priority = 4;
        matchType = "associated";
        matchField = "tag";
        matchedTag = related[0].display;
      } else continue;
      ranked.push({
        priority,
        entityId: entity.id,
        name: entity.name,
        worldId: index.worldId,
        matchedTag,
        matchType,
        matchField,
        cooccurrence: matchType === "associated" ? related[0].count : null,
        confidence: matchType === "associated" ? related[0].confidence : null,
        matchedTags: [
          ...new Set([
            ...partial.map(
              /** Exposes lexical matching display tags. */ (tag) =>
                tag.display,
            ),
            ...related.map(
              /** Exposes every related tag without adding evidence scores. */ (
                tag,
              ) => tag.display,
            ),
          ]),
        ],
      });
    }
  ranked.sort(
    /** Applies exact/direct lexical priority, measured association rank, then stable entity-name/ID ties. */ (
      a,
      b,
    ) =>
      a.priority - b.priority ||
      (b.cooccurrence ?? 0) - (a.cooccurrence ?? 0) ||
      (b.confidence ?? 0) - (a.confidence ?? 0) ||
      compareText(normalizeTag(a.name), normalizeTag(b.name)) ||
      compareText(a.entityId, b.entityId),
  );
  return {
    query,
    normalizedQuery,
    worldId: index.worldId,
    revision: index.revision,
    results: ranked.map(
      /** Removes the internal ordering tier from public result metadata. */ ({
        priority,
        ...result
      }) => result,
    ),
    suggestions,
    associations,
  };
}
module.exports = { searchEntities };
