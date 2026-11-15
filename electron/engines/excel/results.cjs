const { cellText, sheetPage } = require("./markdown.cjs");

/** Converts one extracted cell into coordinate-addressed final text for Knowledge Card delivery. Numeric styling follows the saved result type. */
function resultCell(cell) {
  const type = cell.formula?.cached.type ?? cell.type;
  return {
    coordinate: cell.coordinate,
    row: cell.row,
    column: cell.column,
    text: cellText(cell, "result"),
    isNumeric: type === "number",
  };
}

/** Projects a bounded worksheet page into final text and display hints for the Portal. Original coordinates and blank positions remain explicit. */
function resultPage(sheet, options = {}) {
  const page = sheetPage(sheet, { ...options, formulaDisplay: "result" });
  return {
    ...page,
    rows: page.rows.map(function rowResults(row) {
      return {
        number: row.number,
        cells: row.cells.map(function cellResult(point) {
          return point.cell
            ? resultCell(point.cell)
            : { coordinate: point.coordinate, text: "", isNumeric: false };
        }),
      };
    }),
  };
}

/** Derives a complete sparse text workbook for Knowledge Card JSON exports, including source coordinates and processing status. */
function resultWorkbook(model) {
  return {
    schemaVersion: 1,
    presentation: "saved-results",
    engine: model.engine,
    engineVersion: model.engineVersion,
    workbook: model.workbook,
    sourceHash: model.sourceHash,
    dateSystem: model.dateSystem,
    warnings: model.warnings,
    sheets: model.sheets.map(function sheetResults(sheet) {
      return {
        name: sheet.name,
        index: sheet.index,
        state: sheet.state,
        range: sheet.range,
        bounds: sheet.bounds,
        merges: sheet.merges,
        warnings: sheet.warnings,
        cells: sheet.cells.map(resultCell),
      };
    }),
  };
}

module.exports = { resultPage, resultWorkbook };
