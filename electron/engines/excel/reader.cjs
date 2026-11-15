const path = require("node:path");
const { createHash } = require("node:crypto");
const { openArchive, scanXml } = require("./archive.cjs");
const { LIMITS, VERSION } = require("./limits.cjs");
const {
  BUILTIN_FORMATS,
  columnLabel,
  coordinate,
  sourceRange,
  decodeString,
  scalar,
} = require("./cells.cjs");
const MAIN_NAMESPACES = new Set([
  "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
  "http://purl.oclc.org/ooxml/spreadsheetml/main",
]);

/** Resolves package-internal relationship targets without filesystem access, URI fetching or parent traversal outside the archive. */
function partTarget(base, target) {
  if (typeof target !== "string" || /[\\?#]|^[a-z][a-z0-9+.-]*:/i.test(target))
    throw new Error("Unsupported package relationship target.");
  const resolved = path.posix.normalize(
    target.startsWith("/")
      ? target.slice(1)
      : path.posix.join(path.posix.dirname(base), target),
  );
  if (resolved === ".." || resolved.startsWith("../"))
    throw new Error("Workbook relationship escapes its package.");
  return resolved;
}

/** Loads inert package relationships. External references are recorded but never followed. */
async function relationships(archive, name, base) {
  const result = new Map();
  scanXml(await archive.read(name), {
    /** Records each distinct relationship by its workbook-local identity. */
    open(tag, attributes) {
      if (tag !== "Relationship") return;
      if (!attributes.Id || result.has(attributes.Id))
        throw new Error("Duplicate or missing package relationship ID.");
      result.set(attributes.Id, {
        type: attributes.Type,
        external: attributes.TargetMode === "External",
        target:
          attributes.TargetMode === "External"
            ? attributes.Target
            : partTarget(base, attributes.Target),
      });
    },
  });
  return result;
}

/** Reads explicit style indices and number formats without applying visual layout or locale heuristics. */
async function readStyles(archive, name) {
  const formats = new Map(
    Object.entries(BUILTIN_FORMATS).map(([id, code]) => [Number(id), code]),
  );
  const styles = [];
  if (!name) return [{ id: 0, code: "General" }];
  let inCellFormats = false;
  scanXml(await archive.read(name), {
    /** Retains only number-format metadata relevant to scalar meaning. */
    open(tag, attributes) {
      if (tag === "numFmt")
        formats.set(Number(attributes.numFmtId), attributes.formatCode);
      if (tag === "cellXfs") inCellFormats = true;
      if (tag === "xf" && inCellFormats) {
        const id = Number(attributes.numFmtId ?? 0);
        styles.push({ id, code: formats.get(id) ?? `builtin:${id}` });
      }
    },
    /** Ends the cell-format collection so style-XF records cannot be confused with cell styles. */
    close(tag) {
      if (tag === "cellXfs") inCellFormats = false;
    },
  });
  return styles.length ? styles : [{ id: 0, code: "General" }];
}

/** Reads shared rich text as plain text in run order, excluding phonetic annotation text. */
async function readStrings(archive, name) {
  if (!name) return [];
  const strings = [];
  let active = false;
  let phonetic = false;
  let inText = false;
  let value = "";
  scanXml(await archive.read(name), {
    /** Tracks the current shared string and its visible text runs. */
    open(tag) {
      if (tag === "si") {
        active = true;
        value = "";
      }
      if (tag === "rPh") phonetic = true;
      if (tag === "t") inText = true;
    },
    /** Accumulates bounded source text, preserving whitespace and embedded line breaks. */
    text(text) {
      if (active && inText && !phonetic) value += text;
      if (value.length > LIMITS.textLength)
        throw new Error("Workbook string exceeds 65536 characters.");
    },
    /** Stores one shared string without expanding it into duplicate cells. */
    close(tag) {
      if (tag === "t") inText = false;
      if (tag === "rPh") phonetic = false;
      if (tag === "si") {
        strings.push(decodeString(value));
        active = false;
        if (strings.length > LIMITS.cells)
          throw new Error("Workbook has too many shared strings.");
      }
    },
  });
  return strings;
}

/** Scans sparse cells in source coordinates, deriving occupied bounds from meaningful data and merge extents rather than a potentially stale dimension. */
function scanSheet(bytes, sheet, context) {
  const cells = [];
  const merges = [];
  const warnings = new Set();
  const seen = new Set();
  let cell = null;
  let field = null;
  let phonetic = false;
  let rootSeen = false;
  let row = 0;
  let previousColumn = 0;
  let count = 0;
  scanXml(bytes, {
    /** Tracks source cell records; unrelated worksheet features remain inert and produce explicit warnings. */
    open(tag, attributes, namespace) {
      if (!rootSeen) {
        if (tag !== "worksheet" || !MAIN_NAMESPACES.has(namespace))
          throw new Error("Unsupported worksheet XML namespace or root.");
        rootSeen = true;
      }
      if (tag === "row") {
        row = Number(attributes.r ?? row + 1);
        previousColumn = 0;
      }
      if (tag === "c") {
        if (++count + context.cellCount > LIMITS.cells)
          throw new Error("Workbook exceeds 100000 stored cells.");
        const address =
          attributes.r ?? `${columnLabel(previousColumn + 1)}${row}`;
        const position = coordinate(address);
        if (position.row !== row || seen.has(address))
          throw new Error("Duplicate cell or inconsistent row coordinate.");
        seen.add(address);
        previousColumn = position.column;
        cell = {
          address,
          ...position,
          storageType: attributes.t ?? "n",
          styleIndex: Number(attributes.s ?? 0),
          raw: "",
          inline: "",
          expression: "",
          formula: null,
          hasValue: false,
          hasInline: false,
        };
      }
      if (cell && tag === "f") {
        cell.formula = { ...attributes };
        field = "expression";
      }
      if (cell && tag === "v") {
        cell.hasValue = true;
        field = "raw";
      }
      if (cell && tag === "is") cell.hasInline = true;
      if (cell && tag === "rPh") phonetic = true;
      if (cell && tag === "t" && !phonetic) field = "inline";
      if (tag === "mergeCell") {
        sourceRange(attributes.ref);
        merges.push(attributes.ref);
      }
      if (
        [
          "drawing",
          "legacyDrawing",
          "conditionalFormatting",
          "dataValidations",
          "hyperlinks",
          "extLst",
          "tableParts",
        ].includes(tag)
      )
        warnings.add(
          `${tag} is retained only in the original workbook; no behavior is executed.`,
        );
    },
    /** Captures raw scalar/formula text without coercing empty values into zero. */
    text(value) {
      if (cell && field) {
        cell[field] += value;
        if (cell[field].length > LIMITS.textLength)
          throw new Error("Cell text exceeds 65536 characters.");
      }
    },
    /** Finalizes each explicit value/formula independently, preserving missing caches and sparse blank positions. */
    close(tag) {
      if (["v", "f", "t"].includes(tag)) field = null;
      if (tag === "rPh") phonetic = false;
      if (tag !== "c" || !cell) return;
      const style = context.styles[cell.styleIndex];
      if (!style) throw new Error("Invalid worksheet style reference.");
      const meaningful =
        cell.formula !== null ||
        cell.hasInline ||
        (cell.hasValue && (cell.raw !== "" || cell.storageType === "str"));
      if (meaningful) {
        const raw = cell.storageType === "inlineStr" ? cell.inline : cell.raw;
        const cached =
          cell.hasInline ||
          (cell.hasValue && (raw !== "" || cell.storageType === "str"))
            ? scalar(
                raw,
                cell.storageType,
                style.code,
                style.id,
                context.strings,
                context.dateSystem,
              )
            : null;
        const output = {
          coordinate: cell.address,
          row: cell.row,
          column: cell.column,
          storageType: cell.storageType,
          styleIndex: cell.styleIndex,
          numberFormatId: style.id,
          numberFormat: style.code,
          rawValue: cell.hasValue || cell.hasInline ? raw : null,
          type: cell.formula ? "formula" : cached.type,
          value: cached?.value ?? null,
          display: cached?.display ?? "",
          ...(cached?.displayWarning
            ? { displayWarning: cached.displayWarning }
            : {}),
        };
        if (cell.formula) {
          output.formula = {
            expression: cell.expression || null,
            attributes: cell.formula,
            cached: cached
              ? { status: "available", ...cached }
              : { status: "missing" },
          };
          if (!cell.expression)
            warnings.add(
              "Shared/dependent formula expression is absent in this cell; its source attributes are preserved without translation.",
            );
          if (!cached)
            warnings.add(
              "Some formulas have no cached result; no recalculation was performed.",
            );
        }
        if (cached?.displayWarning) warnings.add(cached.displayWarning);
        cells.push(output);
      }
      cell = null;
    },
  });
  if (!rootSeen) throw new Error("Empty worksheet XML part.");
  context.cellCount += count;
  cells.sort(function sourceOrder(a, b) {
    return a.row - b.row || a.column - b.column;
  });
  let bounds = null;
  /** Expands occupied bounds while leaving all unstored interior cells implicit and blank. */
  function include(
    startRow,
    startColumn,
    endRow = startRow,
    endColumn = startColumn,
  ) {
    if (!bounds) bounds = { startRow, startColumn, endRow, endColumn };
    else {
      bounds.startRow = Math.min(bounds.startRow, startRow);
      bounds.startColumn = Math.min(bounds.startColumn, startColumn);
      bounds.endRow = Math.max(bounds.endRow, endRow);
      bounds.endColumn = Math.max(bounds.endColumn, endColumn);
    }
  }
  for (const item of cells) include(item.row, item.column);
  for (const range of merges) {
    const b = sourceRange(range);
    include(b.startRow, b.startColumn, b.endRow, b.endColumn);
  }
  if (merges.length)
    warnings.add(
      "Merged ranges are listed separately; covered cells are not filled with the anchor value.",
    );
  return {
    ...sheet,
    range: bounds
      ? `${columnLabel(bounds.startColumn)}${bounds.startRow}:${columnLabel(bounds.endColumn)}${bounds.endRow}`
      : null,
    bounds,
    cells,
    merges,
    warnings: [...warnings],
  };
}

/** Reads a bounded OOXML workbook into the authoritative structured model. No file writes, formula execution, link resolution or network access occurs. */
async function readWorkbook(bytes, filename) {
  if (
    typeof filename !== "string" ||
    path.extname(filename).toLowerCase() !== ".xlsx"
  )
    throw new Error("Only .xlsx workbooks are supported.");
  const archive = await openArchive(bytes);
  let validType = false;
  scanXml(await archive.read("[Content_Types].xml"), {
    /** Rejects macro-enabled workbook content even when renamed with an XLSX extension. */
    open(tag, attributes) {
      if (
        attributes.ContentType?.includes("macroEnabled") ||
        attributes.ContentType?.includes("vbaProject")
      )
        throw new Error("Macro-enabled workbooks are unsupported.");
      if (
        tag === "Override" &&
        attributes.ContentType ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"
      )
        validType = true;
    },
  });
  if (!validType) throw new Error("Unsupported XLSX workbook content type.");
  const rootRelations = await relationships(archive, "_rels/.rels", "root");
  const workbookRelation = [...rootRelations.values()].find(
    function officeDocument(item) {
      return item.type?.endsWith("/officeDocument");
    },
  );
  if (!workbookRelation || workbookRelation.external)
    throw new Error("Missing internal workbook relationship.");
  const workbookPart = workbookRelation.target;
  const relationPart = path.posix.join(
    path.posix.dirname(workbookPart),
    "_rels",
    `${path.posix.basename(workbookPart)}.rels`,
  );
  const relations = await relationships(archive, relationPart, workbookPart);
  const sheets = [];
  let dateSystem = "1900";
  let workbookRoot = false;
  scanXml(await archive.read(workbookPart), {
    /** Preserves workbook sheet order, visibility and the explicit 1900/1904 date system. */
    open(tag, attributes, namespace) {
      if (!workbookRoot) {
        if (tag !== "workbook" || !MAIN_NAMESPACES.has(namespace))
          throw new Error("Unsupported workbook XML namespace or root.");
        workbookRoot = true;
      }
      if (tag === "workbookPr" && ["1", "true"].includes(attributes.date1904))
        dateSystem = "1904";
      if (tag === "sheet") {
        if (sheets.length >= LIMITS.sheets)
          throw new Error("Workbook exceeds 128 sheets.");
        const relationId = Object.entries(attributes).find(
          function idAttribute([name]) {
            return name.includes(":") && name.split(":").at(-1) === "id";
          },
        )?.[1];
        const relationship = relations.get(relationId);
        if (
          !attributes.name ||
          !relationship ||
          relationship.external ||
          !relationship.type?.endsWith("/worksheet")
        )
          throw new Error(
            "Missing or unsupported worksheet relationship (chart/dialog sheets are unsupported).",
          );
        sheets.push({
          name: attributes.name,
          index: sheets.length,
          state: attributes.state ?? "visible",
          part: relationship.target,
        });
      }
    },
  });
  if (!sheets.length) throw new Error("Workbook contains no worksheets.");
  /** Finds an internal workbook support part without following external targets. */
  function supportPart(type) {
    return [...relations.values()].find(function matching(item) {
      return !item.external && item.type?.endsWith(`/${type}`);
    })?.target;
  }
  const context = {
    dateSystem,
    styles: await readStyles(archive, supportPart("styles")),
    strings: await readStrings(archive, supportPart("sharedStrings")),
    cellCount: 0,
  };
  const results = [];
  for (const sheet of sheets)
    results.push(scanSheet(await archive.read(sheet.part), sheet, context));
  const warnings = [
    "Faithful values only: no header inference, formula recalculation, or Excel visual styling. Unsupported number formats use raw values with warnings; original formats remain in metadata.",
  ];
  if (
    [...archive.entries.keys()].some(function unsupported(name) {
      return /(?:externalLinks|charts|pivot|embeddings|connections|vbaProject)/i.test(
        name,
      );
    }) ||
    [...relations.values()].some(function external(item) {
      return item.external;
    })
  )
    warnings.push(
      "External links, charts, pivot data, connections and embedded objects are not processed or executed.",
    );
  if (
    results.some(function formulas(sheet) {
      return sheet.cells.some(function formula(cell) {
        return cell.type === "formula";
      });
    })
  )
    warnings.push(
      "Formula caches reflect the last saved workbook; freshness cannot be verified.",
    );
  return {
    schemaVersion: 1,
    engine: "wonton-excel",
    engineVersion: VERSION,
    workbook: filename,
    sourceHash: `sha256:${createHash("sha256").update(bytes).digest("hex")}`,
    dateSystem,
    sheets: results,
    warnings,
  };
}
module.exports = { readWorkbook };
