const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { workbook } = require("../scripts/fixtures/excel.cjs");
const { createExcelService } = require("./excel-service.cjs");
const { executeNativeEngine } = require("./ai/engine-registry.cjs");
const {
  saveWorldViewChip,
  assignWorldViewFiles,
  unassignWorldViewFile,
} = require("./domains/entity/worldview-store.cjs");
const {
  saveKnowledgeIndex,
  previewKnowledgeSource,
} = require("./domains/knowledge/knowledge-store.cjs");
const { registerWorldViewIpc } = require("./core/ipc/worldview-ipc.cjs");

/** Seeds assigned and applied synthetic workbooks in an isolated Universe, cleaning only the created temporary tree. */
async function withUniverse(run) {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-excel-service-"),
  );
  try {
    await fs.mkdir(path.join(root, "nested"));
    await fs.writeFile(path.join(root, "nested", "Example.xlsx"), workbook());
    await fs.writeFile(path.join(root, "Unassigned.xlsx"), workbook());
    for (const id of ["first", "second"]) {
      await saveWorldViewChip(root, {
        id,
        name: id,
        icon: "",
        color: "#262b30",
        tags: [],
        position: { x: 0, y: 0 },
        knowledgeMenus: [{ id: "overview", title: "Overview" }],
      });
      await assignWorldViewFiles(root, id, ["nested/Example.xlsx"]);
      await saveKnowledgeIndex(
        root,
        id,
        "# Workbook\nsource: nested/Example.xlsx",
        null,
        true,
      );
    }
    await run(root);
  } finally {
    await fs.rm(root, { recursive: true, force: true });
  }
}

/** Ensures source identity/content caching, all-sheet export, and entity authorization remain independent of each other. */
test("Excel Knowledge Card adapter caches by content and rechecks current assignments", async () => {
  await withUniverse(async (root) => {
    let parses = 0;
    const service = createExcelService({
      /** Counts trusted worker invocations to prove unchanged sources are not reparsed. */
      execute(...args) {
        parses++;
        return executeNativeEngine(...args);
      },
    });
    const first = await service.request(root, "first", "nested/Example.xlsx");
    assert.equal(first.kind, "excel");
    assert.equal(first.page.rows.length, 3);
    assert.equal(first.sheets[0].range, "A1:C3");
    assert.equal(
      (await service.request(root, "second", "nested/Example.xlsx")).cacheHit,
      true,
    );
    assert.equal(parses, 1);
    assert.equal(
      (await previewKnowledgeSource(root, "first", "nested/Example.xlsx")).kind,
      "excel",
    );
    await assert.rejects(
      service.request(root, "first", "Unassigned.xlsx"),
      /applied/,
    );
    await assert.rejects(
      service.request(root, "first", "../outside.xlsx"),
      /applied/,
    );
    await assert.rejects(
      service.request(root, "first", "nested/Example.xlsx", { rowOffset: -1 }),
      /coordinates/,
    );
    await assert.rejects(
      service.request(root, "first", "nested/Example.xlsx", { sheetIndex: 99 }),
      /does not exist/,
    );
    const markdown = await service.request(
      root,
      "first",
      "nested/Example.xlsx",
      { format: "markdown" },
    );
    assert.match(markdown.content, /# Workbook: Example.xlsx/);
    const json = await service.request(root, "first", "nested/Example.xlsx", {
      format: "structured",
    });
    assert.equal(JSON.parse(json.content).sheets[0].cells[1].text, "0");
    const changed = workbook({
      sheets: [
        { name: "Changed", rows: '<row r="1"><c r="A1"><v>7</v></c></row>' },
      ],
    });
    await fs.writeFile(path.join(root, "nested", "Example.xlsx"), changed);
    await assert.rejects(
      service.request(root, "first", "nested/Example.xlsx", {
        sourceHash: first.sourceHash,
      }),
      /changed/,
    );
    assert.equal(
      (await service.request(root, "first", "nested/Example.xlsx")).sheets[0]
        .name,
      "Changed",
    );
    assert.equal(parses, 2);
    await unassignWorldViewFile(root, "first", "nested/Example.xlsx");
    await assert.rejects(
      service.request(root, "first", "nested/Example.xlsx"),
      /unassigned/,
    );
    assert.equal(
      (await service.request(root, "second", "nested/Example.xlsx")).sheets[0]
        .name,
      "Changed",
    );
    assert.deepEqual(
      await fs.readFile(path.join(root, "nested", "Example.xlsx")),
      changed,
    );
  });
});

/** Confirms an entity's unassignment during background processing cannot leak a completed cached preview. */
test("Excel adapter rejects assignment revocation while parsing", async () => {
  await withUniverse(async (root) => {
    const service = createExcelService({
      /** Revokes the test association while the worker runs, reproducing a concurrent user action. */
      async execute(...args) {
        await unassignWorldViewFile(root, "first", "nested/Example.xlsx");
        return executeNativeEngine(...args);
      },
    });
    await assert.rejects(
      service.request(root, "first", "nested/Example.xlsx"),
      /unassigned/,
    );
  });
});

/** Verifies native copying only writes a regenerated authorized worksheet preview, rejecting unassigned sources and forged roots. */
test("Excel clipboard bridge preserves source authorization and page coordinates", async () => {
  await withUniverse(async (root) => {
    const handlers = new Map();
    const copies = [];
    registerWorldViewIpc(
      {
        /** Captures handlers without launching Electron for a guarded boundary test. */
        handle(name, handler) {
          handlers.set(name, handler);
        },
      },
      () => root,
      {},
      {
        /** Records exactly the generated text the native clipboard would receive. */
        writeText(text) {
          copies.push(text);
        },
      },
    );
    const copy = handlers.get("worldview:knowledge-excel-copy");
    const input = {
      vaultPath: root,
      id: "first",
      sourceId: "nested/Example.xlsx",
      rowOffset: 2,
      columnOffset: 1,
      text: "arbitrary text must be ignored",
    };
    assert.equal((await copy(null, input)).ok, true);
    assert.match(copies[0], /\| Row \| B \| C \|/);
    assert.match(copies[0], /\| 3 \|  \|  \|/);
    assert.ok(!copies[0].includes(input.text));
    assert.equal(
      (await copy(null, { ...input, sourceId: "Unassigned.xlsx" })).ok,
      false,
    );
    assert.equal(
      (await copy(null, { ...input, vaultPath: root + "-forged" })).ok,
      false,
    );
    assert.equal(copies.length, 1);
  });
});

/** Guards every Knowledge Card delivery path against formula metadata while preserving formatted zero, false, empty strings, source text and unavailable-result status. */
test("Excel Knowledge Cards deliver final text in pages, Markdown, clipboard and JSON", async () => {
  await withUniverse(async (root) => {
    const expression = "SUM(A99:A100)+987654321";
    const bytes = workbook({
      styles:
        '<styleSheet><cellXfs><xf numFmtId="0"/><xf numFmtId="2"/></cellXfs></styleSheet>',
      sheets: [
        {
          name: "Results",
          rows: `<row r="1"><c r="A1" s="1"><f>${expression}</f><v>1250.125</v></c><c r="B1"><f>1-1</f><v>0</v></c><c r="C1" t="b"><f>1=2</f><v>0</v></c><c r="D1"><f>A1+1</f></c><c r="E1" t="str"><f>CONCAT(A1)</f><v/></c><c r="F1" t="e"><f>1/0</f><v>#DIV/0!</v></c><c r="G1" t="inlineStr"><is><t>=human-authored text</t></is></c></row>`,
        },
      ],
    });
    await fs.writeFile(path.join(root, "nested", "Example.xlsx"), bytes);
    const service = createExcelService();
    const preview = await service.request(root, "first", "nested/Example.xlsx");
    assert.deepEqual(
      preview.page.rows[0].cells.map((cell) => cell.text),
      [
        "1250.13",
        "0",
        "false",
        "[saved result unavailable]",
        "",
        "#DIV/0!",
        "=human-authored text",
      ],
    );
    assert.equal(preview.page.rows[0].cells[0].isNumeric, true);
    assert.doesNotMatch(
      JSON.stringify(preview),
      /SUM\(A99:A100\)|"formula"|"expression"|"numberFormat"|"rawValue"/,
    );
    assert.doesNotMatch(preview.markdown, /SUM\(A99:A100\)|=1-1/);
    for (const format of ["markdown", "structured"]) {
      const exported = await service.request(
        root,
        "first",
        "nested/Example.xlsx",
        { format },
      );
      assert.doesNotMatch(
        exported.content,
        /SUM\(A99:A100\)|"formula"|"expression"|"numberFormat"|"rawValue"/,
      );
      assert.match(exported.content, /1250.13/);
      if (format === "structured") {
        const result = JSON.parse(exported.content);
        assert.equal(result.presentation, "saved-results");
        assert.equal(result.sheets[0].cells[0].text, "1250.13");
        assert.equal(result.sheets[0].cells[0].coordinate, "A1");
      }
    }
    const handlers = new Map();
    const copies = [];
    registerWorldViewIpc(
      {
        /** Captures native operations for the synthetic clipboard regression. */
        handle(name, handler) {
          handlers.set(name, handler);
        },
      },
      () => root,
      {},
      {
        /** Captures the actual generated final-text Markdown payload. */
        writeText(text) {
          copies.push(text);
        },
      },
    );
    assert.equal(
      (
        await handlers.get("worldview:knowledge-excel-copy")(null, {
          vaultPath: root,
          id: "first",
          sourceId: "nested/Example.xlsx",
        })
      ).ok,
      true,
    );
    assert.match(copies[0], /1250.13/);
    assert.doesNotMatch(copies[0], /SUM\(A99:A100\)|=1-1/);
    assert.deepEqual(
      await fs.readFile(path.join(root, "nested", "Example.xlsx")),
      bytes,
    );
  });
});
