# Wonton Excel Engine v0.1

The current package is **0.1.2**, with final text delivery throughout Knowledge Cards.

An offline, deterministic, read-only XLSX reader. Entity owns source associations; Engine owns extraction; Knowledge Card presents the result. No AI provider is required.

## Public API

Requires Node.js 22.18+ (or Orbistry's bundled Electron Node runtime). The installed package includes its JS dependencies, without requiring an npm installation or network access at runtime.

```js
const { excel, renderSheet, renderWorkbook, exportWorkbook } = require("C:/Universe/.engine/wonton-excel");
const result = await excel("C:/Universe/Research/Example.xlsx");
const selected = await excel("C:/Universe/Research/Example.xlsx", {
  sheet: "Income Statement", mode: "faithful",
});
console.log(result.sheets);                 // full sparse structured data
console.log(result.markdown);               // bounded combined preview
console.log(renderSheet(result.sheets[0])); // independent worksheet preview
const markdown = await exportWorkbook(result, "markdown"); // full export in worker
const json = await exportWorkbook(result, "structured");   // full structured JSON
const textMarkdown = await exportWorkbook(result, "markdown", { valuesOnly: true });
const textJson = await exportWorkbook(result, "structured", { valuesOnly: true });
```

`excel(bytes, { filename: "Example.xlsx" })` accepts an immutable byte snapshot for a trusted host adapter. Only `faithful` mode exists. Default: all worksheets, original workbook order, no inferred headers. Exact-name selection preserves the worksheet's original zero-based index.

CLI (prints to stdout; redirect to a **different output file**):

```powershell
node C:/Universe/.engine/wonton-excel/cli.cjs C:/Universe/Research/Example.xlsx
node C:/Universe/.engine/wonton-excel/cli.cjs C:/Universe/Research/Example.xlsx --markdown
```

## Structured schema

The extracted model is the source of truth. Markdown is derived from it.

```js
{
  schemaVersion: 1,
  engine: "wonton-excel", engineVersion: "0.1.2",
  workbook: "Example.xlsx", sourceHash: "sha256:<content digest>",
  dateSystem: "1900", // or "1904"
  sheets: [{
    name: "Income Statement", index: 0, state: "visible",
    part: "xl/worksheets/sheet1.xml", // actual package relationship target
    range: "B2:D6", // null for empty worksheet
    bounds: { startRow: 2, startColumn: 2, endRow: 6, endColumn: 4 },
    cells: [{
      coordinate: "B2", row: 2, column: 2,
      type: "number", value: 0.125, rawValue: "0.125", display: "12.50%",
      storageType: "n", styleIndex: 1,
      numberFormatId: 10, numberFormat: "0.00%"
    }],
    merges: ["B4:D4"], warnings: []
  }],
  warnings: [], markdown: "# Workbook: ..."
}
```

`cells` contains meaningful stored cells sorted by row, then column. Interior unstored cells are implicit blanks within `bounds`; consumers must use coordinates, never compact the cell array into columns. Style-only exterior cells are omitted. Merge extents contribute to source bounds. `sheetPage(sheet, { rowOffset, columnOffset, rows, columns })` materializes only a bounded rectangle, with original coordinates and `cell: null` for blanks.

Types: `string`, `number`, `boolean`, `error`, `date`, `time`, `datetime`, `duration`, `formula`. Numeric date/time values retain their original serial in `value` and lexical XML in `rawValue`. ISO-date storage retains its string. Shared-string cells expose decoded text as `value` and their original shared-string index as `rawValue`. Rich text is flattened in source run order; phonetic annotations are excluded. Explicit empty strings remain values. Zero and false are never treated as empty.

## Formulas, merges and display

Formula cells have `type: "formula"`, a `formula.expression` without the leading `=`, original formula attributes, and `formula.cached`:

```js
{ expression: "A1+1", attributes: {}, cached: {
  status: "available", type: "number", value: 0, display: "0"
} }
// Missing result: cached: { status: "missing" }, value: null
```

The Engine reads saved formula results. A cached zero, false or empty string is distinct from a missing result. Cache freshness depends on the source workbook's last saved calculation. The structured Engine API exposes expressions, formula attributes and saved-result status for programmatic inspection. `sheetPage(sheet, { formulaDisplay: "result" })` selects formatted values for presentation, while the default programmatic Markdown includes expression/result pairs.

Knowledge Cards receive final text with source coordinates and numeric display hints. This applies to table cells, hover text, the Markdown preview, clipboard copy, full workbook Markdown and **Export results JSON**. A missing saved value displays `[saved result unavailable]`. Source text, zero, false, empty strings, error results, formatting and blank positions are preserved in that text representation. The JSON contains `presentation: "saved-results"` and sparse cell records with `coordinate`, `row`, `column`, `text` and `isNumeric`. Programmatic exports can select this representation with `exportWorkbook(model, format, { valuesOnly: true })`.

Merge metadata is independent of values. Only actual stored cells contain values; no top-left value is copied to covered cells.

Known date/time formats produce locale-independent UTC ISO-style text; durations use hours. The 1900/1904 epoch is explicit. Excel's fictitious serial-60 date is displayed as `1900-02-29 (Excel serial 60)`. Numeric display uses the offline [SheetJS SSF formatter](https://docs.sheetjs.com/docs/constellation/ssf/) for supported decimal, grouping, percentage, currency, accounting, scientific, fraction and conditional-section rules. For example, `663126314` with a dollar accounting format displays as `$663,126,314` (with any source padding). Raw values and complete original format codes remain separate metadata; format codes are never appended to table values. Unsupported/unknown formats show raw values with an explicit `displayWarning` and worksheet warning. Exact Excel visual layout, fill spacing, font colors and locale-specific rules are not reproduced.

## Markdown and resource limits

Workbook title, sheet ordinal/name, source range, original row numbers and column letters are always explicit. No source row becomes an inferred header. Interior empty rows/columns remain blank cells. Markdown syntax/HTML is escaped; cell line breaks become `<br>`. Merges and extraction warnings are included.

- Input: `.xlsx` only, up to 25 MiB.
- ZIP: up to 4,096 entries, 2 MiB central directory, 32 MiB per expanded part, 128 MiB declared total expansion. Actual consumed parts are bounded and CRC-checked.
- Workbook: up to 128 worksheets and 100,000 stored cell records across sheets. Up to 65,536 characters per captured string/formula/value. XML depth up to 64.
- Worker: 20-second wall timeout, 256 MiB V8 old-generation cap; input buffers/native allocations are additionally constrained by byte limits, not covered by that V8 cap.
- Structured result/export: 48 MiB serialized limit. Out-of-limit input fails explicitly; full structured data is never silently dropped.
- Default preview: 100 rows × 20 columns per sheet. UI paginates both axes; at most 2,000 table cells are rendered per page.
- Full Markdown: at most 200,000 rectangular cells across selected sheets and 48 MiB output. Sparse huge ranges can exceed this despite few populated cells; export full structured JSON instead.
- `renderWorkbook(result, { full: true })` returns complete Markdown synchronously for small caller-owned models. Host exports use `exportWorkbook` to keep work off Electron's main thread.

Preview omissions are labeled **Truncated preview**. Full structured JSON includes all accepted cells even when Markdown is bounded.

## Knowledge Card

Assign an XLSX file from the existing Universe picker. In **Write Index**, use the existing source syntax (no new DSL):

```text
# Workbook
source: Research/Example.xlsx
```

Apply the index and select the source. Worksheet tabs preserve workbook order and visibility metadata. The viewer shows original source ranges, row/column paging and final text. Hover identifies the cell and its displayed value. The Markdown preview, clipboard and both download actions use the same final values. **Export results JSON** provides every accepted result with source coordinates.

The existing `knowledge-preview` operation selects the Excel adapter. Narrow `knowledge-excel` requests authorize the applied entity/source reference for every page/export. They enforce current Universe containment and reject symlinks, unavailable/unassigned sources and stale content hashes. Parsing runs outside the entity write queue. No arbitrary renderer filesystem paths or code execution are exposed.

Copying uses `knowledge-excel-copy`: the main process regenerates the authorized page and writes only that Markdown to Electron's clipboard. Browser clipboard permissions remain denied; callers cannot supply arbitrary clipboard text through this operation.

The host coalesces identical pending parses and keeps two immutable models in memory. Keys include resolved Universe identity, actual source reference, SHA-256 content and engine version. Each request re-reads bounded bytes to verify content, so same-size edits also invalidate the cache. Restarting Orbistry clears this disposable cache; no new database/persistence system is introduced. At most four unique parses are queued, one worker runs at a time.

## Packaging and registry

Source: `electron/engines/excel/`. Reproducible package builder:

```powershell
node scripts/build/build-excel-engine.cjs
node scripts/build/build-excel-engine.cjs --universe C:/Universe
node scripts/build/build-excel-engine.cjs --universe C:/Universe --upgrade
```

The builder stages a self-contained JS package with pinned dependency versions, their licenses, documentation, report and SHA-256 manifest. Installation creates only `.engine/wonton-excel` inside an **existing** explicitly specified Universe; an ordinary install refuses an existing package. Explicit `--upgrade` checks every existing package file against its manifest, refuses modified/untracked contents, and preserves the previous package in a `.engine/wonton-excel-backup-<id>` sibling before installing the new one. Installation failure restores that backup. Universe's existing scanner ignores `.engine`. Node itself is a runtime prerequisite, not duplicated into the package.

The existing Engine registry exports `ENGINE_DEFINITIONS["wonton-excel"]` and allowlisted `executeNativeEngine("wonton-excel", "excel", input, options)`. The old CHronoZ agent binding/probe flow remains specific to CHronoZ. Excel does not acquire agent tools or permissions. The host executes shipped application code, never arbitrary code discovered inside Universe. The installed package also works independently via its documented API/CLI.

## Supported boundaries and extensions

Supports ordinary ZIP-based transitional/strict SpreadsheetML `.xlsx` with inline/shared strings, booleans, numeric values, dates, errors, formulas/caches, merges and number-format metadata. Rejects legacy `.xls`, `.xlsb`, encrypted files, ZIP64/multi-volume packages, macro-enabled content, chart/dialog sheets and corrupt/missing referenced parts. External links, embedded objects, scripts, DTDs and processing instructions are never executed/fetched. Unsupported charts/pivots/connections/visual worksheet features generate warnings where detected. No content parsing outside XLSX, financial analysis, chart rendering, OCR, semantic table inference, LLM calls or synchronization is added.

Future consumers can use the structured model and registry definition without changing source ownership. Additional formatting, shared-formula expansion or readers may be separate adapters. No such future computation is implemented here.

Primary format/library references: [SpreadsheetML formulas and saved caches](https://learn.microsoft.com/en-us/office/open-xml/spreadsheet/working-with-formulas), [ZIP in-memory/stream API](https://github.com/ZJONSSON/node-unzipper), [strict SAX parsing](https://github.com/isaacs/sax-js).
