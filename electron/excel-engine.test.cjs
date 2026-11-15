const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { workbook, xml, zip } = require("../scripts/fixtures/excel.cjs");
const {
  excel,
  sheetPage,
  renderWorkbook,
  renderSheet,
  exportWorkbook,
} = require("./engines/excel/index.cjs");
const {
  ENGINE_DEFINITIONS,
  executeNativeEngine,
} = require("./ai/engine-registry.cjs");

/** Runs synthetic bytes through the public worker API with an explicit local workbook identity. */
function parse(bytes, options = {}) {
  return excel(bytes, { filename: "Example.xlsx", ...options });
}

/** Verifies the single-sheet API retains coordinates, blank interior rows/columns, zero and false, without inventing headers. */
test("Excel preserves source coordinates, empty interior positions, zero and false", async () => {
  const result = await parse(workbook());
  const sheet = result.sheets[0];
  assert.equal(result.workbook, "Example.xlsx");
  assert.match(result.sourceHash, /^sha256:/);
  assert.equal(sheet.range, "A1:C3");
  assert.deepEqual(
    sheet.cells.map((cell) => cell.coordinate),
    ["A1", "C1", "A3"],
  );
  assert.equal(sheet.cells[1].value, 0);
  assert.equal(sheet.cells[2].value, false);
  const page = sheetPage(sheet);
  assert.deepEqual(page.columns, ["A", "B", "C"]);
  assert.equal(page.rows.length, 3);
  assert.equal(page.rows[0].cells[1].cell, null);
  assert.equal(page.rows[1].cells[0].cell, null);
  assert.match(result.markdown, /\| 1 \| Title \|  \| 0 \|/);
  assert.match(result.markdown, /\| 2 \|  \|  \|  \|/);
});

/** Checks original workbook order and exact-name filtering while preserving the source sheet index. */
test("Excel keeps worksheet order, independent ranges and exact sheet selection", async () => {
  const bytes = workbook({
    sheets: [
      { name: "Zebra", rows: "" },
      { name: "Alpha", rows: '<row r="7"><c r="D7"><v>42</v></c></row>' },
    ],
  });
  const result = await parse(bytes);
  assert.deepEqual(
    result.sheets.map((sheet) => sheet.name),
    ["Zebra", "Alpha"],
  );
  assert.equal(result.sheets[1].range, "D7:D7");
  assert.ok(
    result.markdown.indexOf("Sheet 1: Zebra") <
      result.markdown.indexOf("Sheet 2: Alpha"),
  );
  const selected = await parse(bytes, { sheet: "Alpha" });
  assert.equal(selected.sheets.length, 1);
  assert.equal(selected.sheets[0].index, 1);
  await assert.rejects(parse(bytes, { sheet: "alpha" }), /not found/);
  await assert.rejects(parse(bytes, { mode: "semantic" }), /faithful/);
});

/** Tests typed date/time serials, percentage/currency display, the 1904 epoch and Excel's fictitious leap day. */
test("Excel preserves dates, times, percentages and currency format metadata", async () => {
  const styles =
    '<styleSheet><numFmts><numFmt numFmtId="164" formatCode="$#,##0.00"/></numFmts><cellXfs><xf numFmtId="0"/><xf numFmtId="14"/><xf numFmtId="10"/><xf numFmtId="164"/><xf numFmtId="20"/></cellXfs></styleSheet>';
  const sheets = [
    {
      name: "Formats",
      rows: '<row r="1"><c r="A1" s="1"><v>61</v></c><c r="B1" s="2"><v>0.125</v></c><c r="C1" s="3"><v>1250</v></c><c r="D1" s="1"><v>60</v></c><c r="E1" s="4"><v>0.5</v></c></row>',
    },
  ];
  const result = await parse(workbook({ styles, sheets }));
  const cells = result.sheets[0].cells;
  assert.equal(cells[0].type, "date");
  assert.equal(cells[0].value, 61);
  assert.equal(cells[0].rawValue, "61");
  assert.equal(cells[0].display, "1900-03-01");
  assert.equal(cells[1].display, "12.50%");
  assert.equal(cells[1].numberFormat, "0.00%");
  assert.equal(cells[2].display, "$1,250.00");
  assert.match(cells[3].display, /1900-02-29/);
  assert.equal(cells[4].display, "12:00:00");
  const epoch = await parse(
    workbook({
      styles,
      date1904: true,
      sheets: [
        {
          name: "Epoch",
          rows: '<row r="1"><c r="A1" s="1"><v>0</v></c></row>',
        },
      ],
    }),
  );
  assert.equal(epoch.sheets[0].cells[0].display, "1904-01-01");
});

/** Reproduces the accounting-code clutter while preserving raw numbers, formula expressions and faithful export metadata. */
test("Excel renders accounting values and cached formulas without inline format codes", async () => {
  const format =
    '_-[$$-409]* #,##0_-;_-[$$-409]* \\-#,##0_-;_-[$$-409]* "-"_-;_-@_-';
  const styles = `<styleSheet><numFmts><numFmt numFmtId="164" formatCode="${xml(format)}"/></numFmts><cellXfs><xf numFmtId="0"/><xf numFmtId="164"/><xf numFmtId="2"/><xf numFmtId="999"/></cellXfs></styleSheet>`;
  const result = await parse(
    workbook({
      styles,
      sheets: [
        {
          name: "Accounting",
          rows: '<row r="1"><c r="A1" s="1"><v>663126314</v></c><c r="B1" s="1"><f>1+1</f><v>1250</v></c><c r="C1" s="1"><f>A1+B1</f></c><c r="D1" s="2"><v>1250.125</v></c><c r="E1" s="3"><v>42</v></c></row><row r="2"><c r="A2" s="1"><v>-1234</v></c><c r="B2" s="1"><v>0</v></c></row>',
        },
      ],
    }),
  );
  const sheet = result.sheets[0];
  assert.equal(sheet.cells[0].display.trim(), "$663,126,314");
  assert.equal(sheet.cells[0].rawValue, "663126314");
  assert.equal(sheet.cells[0].numberFormat, format);
  assert.equal(sheet.cells[1].value, 1250);
  assert.equal(sheet.cells[1].formula.expression, "1+1");
  assert.equal(sheet.cells[3].display, "1250.13");
  assert.equal(sheet.cells[4].display, "42");
  assert.match(sheet.cells[4].displayWarning, /unsupported number format/);
  assert.equal(sheet.cells[5].display.trim(), "$-1,234");
  assert.equal(sheet.cells[6].display.trim(), "$-");
  const page = sheetPage(sheet, { formulaDisplay: "result" });
  assert.equal(page.rows[0].cells[1].text.trim(), "$1,250");
  assert.equal(page.rows[0].cells[2].text, "[saved result unavailable]");
  assert.ok(
    page.rows
      .flatMap((row) => row.cells)
      .every((cell) => !cell.text.includes("[format:")),
  );
  assert.match(result.markdown, /=1\+1 →/);
  assert.ok(!result.markdown.includes("[$$-409]"));
  assert.match(sheet.warnings.join(), /unsupported number format/);
});

/** Keeps formulas distinct from cached scalars, including zero, false, missing caches, shared references and errors. */
test("Excel retains formula expression and exact cached-result availability", async () => {
  const result = await parse(
    workbook({
      sheets: [
        {
          name: "Formulas",
          rows: '<row r="1"><c r="A1"><f>SUM(1,-1)</f><v>0</v></c><c r="B1"><f>A1+2</f></c><c r="C1" t="b"><f>1=2</f><v>0</v></c><c r="D1" t="e"><v>#DIV/0!</v></c><c r="E1"><f t="shared" si="0"/><v>4</v></c></row>',
        },
      ],
    }),
  );
  const [zero, missing, bool, error, shared] = result.sheets[0].cells;
  assert.equal(zero.formula.expression, "SUM(1,-1)");
  assert.equal(zero.formula.cached.status, "available");
  assert.equal(zero.value, 0);
  assert.deepEqual(missing.formula.cached, { status: "missing" });
  assert.equal(missing.value, null);
  assert.equal(bool.formula.cached.type, "boolean");
  assert.equal(bool.value, false);
  assert.equal(error.type, "error");
  assert.equal(shared.formula.expression, null);
  assert.equal(shared.formula.attributes.si, "0");
  assert.match(result.markdown, /cached result unavailable/);
  assert.match(result.warnings.join(), /freshness/);
});

/** Confirms merged cells retain only their stored anchor, while source bounds include the merge extent. */
test("Excel retains merge ranges without filling covered cells", async () => {
  const result = await parse(
    workbook({
      sheets: [
        {
          name: "Merged",
          rows: '<row r="2"><c r="B2" t="inlineStr"><is><t>Anchor</t></is></c></row>',
          after: '<mergeCells count="1"><mergeCell ref="B2:D3"/></mergeCells>',
        },
      ],
    }),
  );
  const sheet = result.sheets[0];
  assert.equal(sheet.range, "B2:D3");
  assert.equal(sheet.cells.length, 1);
  assert.deepEqual(sheet.merges, ["B2:D3"]);
  assert.equal(sheetPage(sheet).rows[0].cells[1].cell, null);
  assert.match(renderSheet(sheet), /Merged ranges: B2:D3/);
});

/** Checks XML rich strings and hostile Markdown stay literal, with newline preservation and no raw HTML injection. */
test("Excel escapes Markdown and preserves shared rich text and OOXML escapes", async () => {
  const text = "a|b\n<script>*[x]`\\&# test";
  const result = await parse(
    workbook({
      strings: `<sst><si><r><t>${xml(text)}</t></r><rPh><t>ignored phonetic</t></rPh><r><t>_x000A_end</t></r></si></sst>`,
      sheets: [
        {
          name: "<Heading>",
          rows: '<row r="1"><c r="A1" t="s"><v>0</v></c><c r="B1" t="inlineStr"><is><t>_x005F_x000A_</t></is></c></row>',
        },
      ],
    }),
  );
  assert.equal(result.sheets[0].cells[0].value, text + "\nend");
  assert.equal(result.sheets[0].cells[1].value, "_x000A_");
  assert.ok(!result.markdown.includes("<script>"));
  assert.ok(!result.markdown.includes("ignored phonetic"));
  assert.match(result.markdown, /a&#124;b<br>&lt;script&gt;/);
  assert.match(result.markdown, /&lt;Heading&gt;/);
});

/** Treats style-only exterior cells as empty rather than a meaningful source rectangle. */
test("Excel represents an empty worksheet explicitly", async () => {
  const result = await parse(
    workbook({
      sheets: [{ name: "Empty", rows: '<row r="99"><c r="Z99"/></row>' }],
    }),
  );
  assert.equal(result.sheets[0].range, null);
  assert.deepEqual(result.sheets[0].cells, []);
  assert.match(result.markdown, /Empty worksheet/);
});

/** Verifies large/sparse rectangles are paged and explicitly truncated without losing their full sparse structured model. */
test("Excel bounds previews and refuses excessive full Markdown expansion", async () => {
  const rows = Array.from(
    { length: 130 },
    (_, index) =>
      `<row r="${index + 1}"><c r="A${index + 1}"><v>${index}</v></c></row>`,
  ).join("");
  const result = await parse(workbook({ sheets: [{ name: "Large", rows }] }));
  assert.equal(result.sheets[0].cells.length, 130);
  assert.equal(sheetPage(result.sheets[0]).rows.length, 100);
  assert.match(result.markdown, /Truncated preview/);
  const last = sheetPage(result.sheets[0], { rowOffset: 100 });
  assert.equal(last.rows[0].number, 101);
  assert.equal(last.rows.length, 30);
  assert.doesNotMatch(
    renderWorkbook(result, { full: true }),
    /Truncated preview/,
  );
  const sparse = await parse(
    workbook({
      sheets: [
        {
          name: "Sparse",
          rows: '<row r="1"><c r="A1"><v>1</v></c></row><row r="1048576"><c r="XFD1048576"><v>2</v></c></row>',
        },
      ],
    }),
  );
  assert.equal(sparse.sheets[0].cells.length, 2);
  assert.throws(
    () => renderWorkbook(sparse, { full: true }),
    /structured JSON/,
  );
  assert.equal(
    JSON.parse(await exportWorkbook(sparse, "structured")).sheets[0].cells
      .length,
    2,
  );
});

/** Rejects malformed archives, unsupported formats, macro content, DTDs, duplicate entries and oversized inputs without execution. */
test("Excel rejects corrupt, unsafe and unsupported workbooks", async () => {
  await assert.rejects(parse(Buffer.from("not ZIP")), /XLSX/);
  await assert.rejects(
    excel(workbook(), { filename: "legacy.xls" }),
    /Only .xlsx/,
  );
  await assert.rejects(parse(Buffer.alloc(25 * 1024 * 1024 + 1)), /25 MB/);
  await assert.rejects(
    parse(
      workbook({
        extra: {
          "[Content_Types].xml":
            '<Types><Override ContentType="application/vnd.ms-excel.sheet.macroEnabled.main+xml"/></Types>',
        },
      }),
    ),
    /Macro-enabled/,
  );
  await assert.rejects(
    parse(
      workbook({
        extra: {
          "xl/worksheets/s0.xml":
            '<!DOCTYPE worksheet [<!ENTITY x SYSTEM "file:///secret">]><worksheet/>',
        },
      }),
    ),
    /DTDs/,
  );
  await assert.rejects(
    parse(workbook({ extra: { "../escape": "bad" } })),
    /Unsafe/,
  );
  await assert.rejects(parse(zip({ A: "x", a: "x" })), /duplicate/);
  await assert.rejects(
    parse(
      workbook({
        sheets: [
          {
            name: "Bad",
            rows: '<row r="1"><c r="A1"><v>not-number</v></c></row>',
          },
        ],
      }),
    ),
    /numeric/,
  );
  const bytes = workbook();
  const damaged = Buffer.from(bytes);
  const directory = damaged.readUInt32LE(damaged.length - 6);
  damaged.writeUInt32LE(42, directory + 16);
  await assert.rejects(parse(damaged), /CRC/);
});

/** Validates read-only standalone filename usage and deterministic exports through the native registry. */
test("Excel filename API leaves source unchanged and is registered without agents", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-excel-"));
  try {
    const filename = path.join(root, "Example.xlsx");
    const bytes = workbook();
    await fs.writeFile(filename, bytes);
    const before = await fs.stat(filename);
    const first = await excel(filename);
    const second = await excel(filename);
    assert.deepEqual(first, second);
    assert.deepEqual(await fs.readFile(filename), bytes);
    const after = await fs.stat(filename);
    assert.equal(before.mtimeMs, after.mtimeMs);
    assert.equal(before.size, after.size);
    assert.equal(ENGINE_DEFINITIONS["wonton-excel"].version, "0.1.2");
    assert.equal(
      (
        await executeNativeEngine("wonton-excel", "excel", bytes, {
          filename: "Example.xlsx",
        })
      ).sheets.length,
      1,
    );
    await assert.rejects(
      executeNativeEngine("unknown", "excel", bytes),
      /Unsupported/,
    );
  } finally {
    await fs.rm(root, { recursive: true, force: true });
  }
});
