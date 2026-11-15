const { columnLabel } = require("./cells.cjs");
const { LIMITS } = require("./limits.cjs");

/** Escapes source text into inert Markdown table content; line breaks become explicit HTML breaks after HTML is escaped. */
function escapeMarkdown(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/[\\|`*_\[\]#!~]/g, function literal(character) {
      return `&#${character.charCodeAt(0)};`;
    })
    .replace(/\r\n|\r|\n/g, "<br>");
}

/** Displays formulas as saved results for table viewing or as expression/result pairs for faithful exports; missing results remain explicit. */
function cellText(cell, formulaDisplay = "expression") {
  if (!cell) return "";
  if (!cell.formula) return cell.display;
  if (formulaDisplay === "result")
    return cell.formula.cached.status === "available"
      ? cell.display
      : "[saved result unavailable]";
  const expression =
    cell.formula.expression === null
      ? "[shared/dependent formula]"
      : `=${cell.formula.expression}`;
  return `${expression} → ${cell.formula.cached.status === "missing" ? "[cached result unavailable]" : cell.display}`;
}

/** Returns a bounded coordinate-faithful rectangular page. Sparse interior blanks are materialized only within this page. */
function sheetPage(
  sheet,
  {
    rowOffset = 0,
    columnOffset = 0,
    rows = LIMITS.previewRows,
    columns = LIMITS.previewColumns,
    formulaDisplay = "expression",
  } = {},
) {
  if (!["expression", "result"].includes(formulaDisplay))
    throw new Error("Invalid formula display mode.");
  for (const [name, value] of Object.entries({
    rowOffset,
    columnOffset,
    rows,
    columns,
  })) {
    if (
      !Number.isSafeInteger(value) ||
      value < (name.endsWith("Offset") ? 0 : 1)
    )
      throw new Error("Invalid worksheet preview bounds.");
  }
  if (rows * columns > LIMITS.markdownCells)
    throw new Error(
      "Worksheet view exceeds 200000 rectangular cells. Use structured data instead.",
    );
  if (!sheet.bounds)
    return {
      columns: [],
      rows: [],
      truncated: false,
      rowOffset,
      columnOffset,
      totalRows: 0,
      totalColumns: 0,
    };
  const b = sheet.bounds;
  const totalRows = b.endRow - b.startRow + 1;
  const totalColumns = b.endColumn - b.startColumn + 1;
  if (rowOffset >= totalRows || columnOffset >= totalColumns)
    throw new Error("Worksheet preview offset is outside its source range.");
  const labels = [];
  for (
    let col = b.startColumn + columnOffset;
    col <= Math.min(b.endColumn, b.startColumn + columnOffset + columns - 1);
    col++
  )
    labels.push(columnLabel(col));
  const indexed = new Map(
    sheet.cells.map(function entry(cell) {
      return [cell.coordinate, cell];
    }),
  );
  const result = [];
  for (
    let row = b.startRow + rowOffset;
    row <= Math.min(b.endRow, b.startRow + rowOffset + rows - 1);
    row++
  )
    result.push({
      number: row,
      cells: labels.map(function previewCell(label) {
        const cell = indexed.get(`${label}${row}`);
        return {
          coordinate: `${label}${row}`,
          text: cellText(cell, formulaDisplay),
          cell: cell ?? null,
        };
      }),
    });
  return {
    columns: labels,
    rows: result,
    truncated:
      rowOffset > 0 ||
      columnOffset > 0 ||
      result.length < totalRows ||
      labels.length < totalColumns,
    rowOffset,
    columnOffset,
    totalRows,
    totalColumns,
  };
}

/** Renders one independent worksheet with coordinate headers, source range, merge ranges and explicit preview truncation. */
function renderSheet(sheet, options = {}) {
  const dimensions = sheet.bounds
    ? {
        rows: sheet.bounds.endRow - sheet.bounds.startRow + 1,
        columns: sheet.bounds.endColumn - sheet.bounds.startColumn + 1,
      }
    : {};
  const page = sheetPage(
    sheet,
    options.full
      ? { ...dimensions, formulaDisplay: options.formulaDisplay }
      : options,
  );
  const lines = [
    `## Sheet ${sheet.index + 1}: ${escapeMarkdown(sheet.name)}`,
    `Source Range: ${sheet.range ?? "(empty)"}`,
    "",
  ];
  if (page.truncated)
    lines.push(
      "**Truncated preview — source coordinates are preserved. Full structured data remains available.**",
      "",
    );
  if (!page.rows.length) lines.push("Empty worksheet.");
  else {
    lines.push(
      `| Row | ${page.columns.join(" | ")} |`,
      `|---|${page.columns
        .map(function separator() {
          return "---|";
        })
        .join("")}`,
    );
    for (const row of page.rows)
      lines.push(
        `| ${row.number} | ${row.cells
          .map(function content(cell) {
            return escapeMarkdown(cell.text);
          })
          .join(" | ")} |`,
      );
  }
  if (sheet.merges.length)
    lines.push(
      "",
      `Merged ranges: ${sheet.merges.join(", ")}. Covered cells remain blank unless explicitly stored.`,
    );
  for (const warning of sheet.warnings)
    lines.push("", `Warning: ${escapeMarkdown(warning)}`);
  return lines.join("\n");
}

/** Derives a combined workbook Markdown export in original order. Full export rejects excessive rectangular expansion; it never silently truncates. */
function renderWorkbook(workbook, options = {}) {
  if (options.full) {
    const area = workbook.sheets.reduce(function sum(total, sheet) {
      return (
        total +
        (sheet.bounds
          ? (sheet.bounds.endRow - sheet.bounds.startRow + 1) *
            (sheet.bounds.endColumn - sheet.bounds.startColumn + 1)
          : 0)
      );
    }, 0);
    if (area > LIMITS.markdownCells)
      throw new Error(
        "Full Markdown exceeds 200000 rectangular cells. Export full structured JSON instead.",
      );
  }
  const text = [
    `# Workbook: ${escapeMarkdown(workbook.workbook)}`,
    ...workbook.sheets.map(function sheetOutput(sheet) {
      return renderSheet(sheet, options);
    }),
    ...workbook.warnings.map(function warning(value) {
      return `Warning: ${escapeMarkdown(value)}`;
    }),
  ].join("\n\n");
  if (Buffer.byteLength(text) > LIMITS.resultBytes)
    throw new Error(
      "Markdown export exceeds 48 MB. Use structured JSON instead.",
    );
  return text;
}
module.exports = {
  escapeMarkdown,
  cellText,
  sheetPage,
  renderSheet,
  renderWorkbook,
};
