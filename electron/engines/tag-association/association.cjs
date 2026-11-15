const { normalizeTag, compareText } = require("./normalizer.cjs");

/** Counts each normalized entity tag and unordered distinct pair once. Input entities contain deduplicated tag sets; no I/O occurs. */
function countAssociations(entities) {
  const frequencies = new Map();
  const pairs = new Map();
  for (const entity of entities) {
    const tags = [...entity.tags].sort(
      /** Canonicalizes unordered pair keys. */ (a, b) =>
        compareText(a.normalized, b.normalized),
    );
    for (let first = 0; first < tags.length; first++) {
      const tag = tags[first];
      const existing = frequencies.get(tag.normalized);
      frequencies.set(tag.normalized, {
        tag: tag.normalized,
        display: existing?.display ?? tag.display,
        count: (existing?.count ?? 0) + 1,
      });
      for (let second = first + 1; second < tags.length; second++) {
        const key = JSON.stringify([tag.normalized, tags[second].normalized]);
        pairs.set(key, (pairs.get(key) ?? 0) + 1);
      }
    }
  }
  return {
    tagFrequencies: [...frequencies.values()].sort(
      /** Stabilizes serialized statistics. */ (a, b) =>
        compareText(a.tag, b.tag),
    ),
    pairFrequencies: [...pairs]
      .sort(
        /** Stabilizes serialized pair order. */ (a, b) =>
          compareText(a[0], b[0]),
      )
      .map(
        /** Restores the canonical pair with its actual entity count. */ ([
          key,
          count,
        ]) => ({ tags: JSON.parse(key), count }),
      ),
  };
}

/** Returns symmetric query associations ordered by count, then Jaccard confidence, then tag text. Counts remain the primary signal. */
function getAssociationStatistics(index, query) {
  const normalized = normalizeTag(query);
  const frequencies = new Map(
    index.tagFrequencies.map(
      /** Indexes frequency denominators for measured confidence. */ (tag) => [
        tag.tag,
        tag,
      ],
    ),
  );
  const queryFrequency = frequencies.get(normalized)?.count ?? 0;
  const associations = [];
  for (const pair of index.pairFrequencies) {
    if (!pair.tags.includes(normalized)) continue;
    const tag = pair.tags[0] === normalized ? pair.tags[1] : pair.tags[0];
    const candidate = frequencies.get(tag);
    associations.push({
      tag,
      display: candidate.display,
      count: pair.count,
      confidence: pair.count / (queryFrequency + candidate.count - pair.count),
    });
  }
  return associations.sort(
    /** Ranks frequency ahead of confidence and deterministic lexical ties. */ (
      a,
      b,
    ) =>
      b.count - a.count ||
      b.confidence - a.confidence ||
      compareText(a.tag, b.tag),
  );
}
module.exports = { countAssociations, getAssociationStatistics };
