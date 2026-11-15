/** Normalizes matching text consistently without changing persisted spelling or inferring aliases. Pure, accepts strings only. */
function normalizeTag(value) {
  if (typeof value !== "string")
    throw new TypeError("Search text must be a string.");
  return value.normalize("NFKC").trim().replace(/\s+/gu, " ").toLowerCase();
}

/** Returns unique normalized tags with their first original spelling for display. Reads only the supplied persisted tag array. */
function normalizeEntityTags(tags) {
  const unique = new Map();
  for (const display of tags) {
    const normalized = normalizeTag(display);
    if (normalized && !unique.has(normalized))
      unique.set(normalized, { normalized, display });
  }
  return [...unique.values()];
}

/** Compares normalized strings using stable code-point ordering independent of machine locale. */
function compareText(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
module.exports = { normalizeTag, normalizeEntityTags, compareText };
