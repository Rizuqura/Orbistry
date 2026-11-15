const { createHash } = require("node:crypto");
const { normalizeSymbol } = require("./engines/daily-price/index.cjs");

/** Parses headings, file references, literal yahooPrice calls and image views with line errors. Parsing produces data and performs no network or code execution. */
function parseKnowledgeIndex(text, { allowLegacyParsing = false } = {}) {
  const menus = [];
  const errors = [];
  const titles = new Set();
  let current = null;
  let group = null;
  /** Adds one validated portable reference to its own source/group container, preserving legacy duplicate rules. */
  function addSource(container, sourceId, line) {
    if (
      sourceId.length > 32768 ||
      /[\\:\0]/.test(sourceId) ||
      sourceId.split("/").some((part) => !part || part === "." || part === "..")
    ) {
      errors.push({
        line,
        message: "Use an existing portable Universe source ID.",
      });
      return;
    }
    if (container.sourceIds.includes(sourceId)) {
      errors.push({
        line,
        message: `Duplicate source declaration “${sourceId}” in this component.`,
      });
      return;
    }
    container.sourceIds.push(sourceId);
    container.sourceLines.push(line);
  }
  if (typeof text !== "string" || Buffer.byteLength(text, "utf8") > 256 * 1024)
    return {
      menus,
      errors: [
        { line: 1, message: "Index declarations must be text within 256 KB." },
      ],
    };
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (!line) continue;
    const heading = /^#\s+([^#].*?)\s*$/.exec(line);
    const source = /^source:\s*(.+)$/.exec(line);
    if (group) {
      if (line.startsWith("]")) {
        const view = /^\]\.view\((carousel|timeline)\)$/.exec(line);
        if (view) group.view = view[1];
        else if (!(
          allowLegacyParsing && line === "].parse(image).view(carousel)"
        ))
          errors.push({
            line: index + 1,
            message:
              "Use ].view(carousel) or ].view(timeline). Processing operations are unavailable in this viewer.",
          });
        if (!group.sourceIds.length && group.view !== "timeline")
          errors.push({
            line: group.line,
            message: "A carousel requires at least one assigned image.",
          });
        if (group.sourceIds.length > 50)
          errors.push({
            line: group.line,
            message: "A carousel supports up to 50 images.",
          });
        group = null;
      } else if (source && /^yahooPrice\s*\(/i.test(source[1]))
        errors.push({
          line: index + 1,
          message: "Place yahooPrice sources directly under a menu heading.",
        });
      else if (source) addSource(group, source[1].trim(), index + 1);
      else
        errors.push({
          line: index + 1,
          message:
            "Expected source: assigned-image-id, ].view(carousel) or ].view(timeline).",
        });
      continue;
    }
    const declaration = /^([A-Za-z][A-Za-z0-9_]{0,63})\s*=\s*\[$/.exec(line);
    if (declaration) {
      if (!current) {
        errors.push({
          line: index + 1,
          message: "Place Carousel declarations under a level-one heading.",
        });
        continue;
      }
      if (!current.carousels) current.carousels = [];
      const name = declaration[1];
      if (
        current.carousels.some(
          (item) => item.name.toLowerCase() === name.toLowerCase(),
        )
      )
        errors.push({
          line: index + 1,
          message: `Duplicate carousel identifier “${name}” in this menu.`,
        });
      group = {
        id: `carousel-${createHash("sha256").update(`${current.id}:${name.toLowerCase()}`).digest("hex").slice(0, 24)}`,
        name,
        sourceIds: [],
        sourceLines: [],
        line: index + 1,
        view: "carousel",
      };
      current.carousels.push(group);
      continue;
    }
    if (heading) {
      const title = heading[1].trim();
      const key = title.normalize("NFKC").replace(/\s+/g, " ").toLowerCase();
      if (title.length > 80)
        errors.push({
          line: index + 1,
          message: "Menu titles must be at most 80 characters.",
        });
      if (titles.has(key))
        errors.push({
          line: index + 1,
          message: `Ambiguous duplicate menu title “${title}”.`,
        });
      titles.add(key);
      current = {
        id: `index-${createHash("sha256").update(key).digest("hex").slice(0, 24)}`,
        title,
        sourceIds: [],
        line: index + 1,
        sourceLines: [],
      };
      menus.push(current);
      continue;
    }
    if (source) {
      const sourceId = source[1].trim();
      if (!current) {
        errors.push({
          line: index + 1,
          message: "Place source declarations under a level-one heading.",
        });
        continue;
      }
      if (/^yahooPrice\s*\(/i.test(sourceId)) {
        const call = /^yahooPrice\s*\(\s*(?:"([^"]+)"|'([^']+)')?\s*\)$/.exec(
          sourceId,
        );
        if (!call) {
          errors.push({
            line: index + 1,
            message: 'Use yahooPrice("TICKER") or yahooPrice().',
          });
          continue;
        }
        let symbol = null;
        try {
          if (call[1] || call[2]) symbol = normalizeSymbol(call[1] ?? call[2]);
        } catch (error) {
          errors.push({ line: index + 1, message: error.message });
          continue;
        }
        const id = `price-${createHash("sha256")
          .update(`${current.id}:${symbol ?? "default"}`)
          .digest("hex")
          .slice(0, 24)}`;
        if (current.prices?.some((price) => price.id === id))
          errors.push({
            line: index + 1,
            message: "Duplicate yahooPrice source in this menu.",
          });
        else {
          if (!current.prices) current.prices = [];
          current.prices.push({ id, symbol, line: index + 1 });
        }
      } else addSource(current, sourceId, index + 1);
      continue;
    }
    errors.push({
      line: index + 1,
      message: "Expected # Menu title or source: existing-source-id.",
    });
  }
  if (group)
    errors.push({
      line: group.line,
      message: "Unclosed carousel declaration.",
    });
  if (menus.length > 100)
    errors.push({ line: 1, message: "An index supports up to 100 menus." });
  return { menus, errors };
}

module.exports = { parseKnowledgeIndex };
