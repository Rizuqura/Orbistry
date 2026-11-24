const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { workbook, xml } = require("../fixtures/excel.cjs");

/** Exercises real Knowledge Card assignment, unchanged indexing syntax, sheet order/paging, clipboard, full downloads and reopening using only synthetic XLSX files. */
async function verifyExcelPreview({ app, page, vault, createChip, readChips }) {
  console.log("Checking native Excel Knowledge Card preview...");
  const directory = path.join(vault, "excel-fixtures");
  await fs.mkdir(directory);
  const rows = Array.from(
    { length: 130 },
    (_, index) =>
      `<row r="${index + 1}"><c r="A${index + 1}"><v>${index}</v></c><c r="C${index + 1}" t="b"><v>0</v></c></row>`,
  ).join("");
  const bytes = workbook({
    styles: `<styleSheet><numFmts><numFmt numFmtId="164" formatCode="${xml('_-[$$-409]* #,##0_-;_-[$$-409]* \\-#,##0_-;_-[$$-409]* "-"_-;_-@_-')}"/></numFmts><cellXfs><xf numFmtId="0"/><xf numFmtId="164"/></cellXfs></styleSheet>`,
    sheets: [
      { name: "Zebra", rows },
      {
        name: "Alpha",
        rows: '<row r="4"><c r="D4" t="inlineStr"><is><t>Second sheet</t></is></c></row>',
      },
      { name: "Empty", rows: "" },
      {
        name: "Accounting",
        rows: '<row r="13"><c r="A13" t="inlineStr"><is><t>EBIT</t></is></c><c r="B13" s="1"><v>663126314</v></c><c r="C13" s="1"><f>B13/2</f><v>331563157</v></c></row>',
      },
    ],
  });
  const filename = path.join(directory, "Example.xlsx");
  await fs.writeFile(filename, bytes);
  await createChip(page, "Excel Engine");
  await page.waitForFunction(
    () =>
      !/Saving|Loading/.test(
        document.querySelector(".worldview-save-status").textContent,
      ),
  );
  const entity = (await readChips(page)).at(-1);
  await page.getByRole("button", { name: "Assign Files", exact: true }).click();
  const picker = page.getByRole("dialog", {
    name: "Assign Files",
    exact: true,
  });
  await picker
    .getByRole("button", { name: "Open folder excel-fixtures", exact: true })
    .click();
  await picker
    .getByRole("checkbox", {
      name: "Select excel-fixtures/Example.xlsx",
      exact: true,
    })
    .check();
  await picker
    .getByRole("button", { name: "Confirm Assignment", exact: true })
    .click();
  await picker.waitFor({ state: "hidden" });
  await page.waitForFunction(
    () =>
      !/Saving|Loading/.test(
        document.querySelector(".worldview-save-status").textContent,
      ),
  );
  const entityPath = path.join(
    vault,
    ".wonnyy",
    "worldview",
    "entities",
    `${entity.id}.md`,
  );
  const metadata = await fs.readFile(entityPath, "utf8");
  await page
    .getByRole("button", { name: "View Knowledge Card", exact: true })
    .click();
  const card = page.locator(".knowledge-card");
  await page.waitForFunction(
    () => document.querySelector(".knowledge-write-index")?.disabled === false,
  );
  await card.getByRole("button", { name: "Write Index", exact: true }).click();
  await card
    .getByRole("textbox", { name: "Index declarations", exact: true })
    .fill("# Workbook\nsource: excel-fixtures/Example.xlsx\n# Blank Section");
  await card.getByRole("button", { name: "Apply Index", exact: true }).click();
  const viewer = card.getByRole("region", {
    name: "Excel workbook preview",
    exact: true,
  });
  await viewer.waitFor();
  assert.deepEqual(await viewer.getByRole("tab").allTextContents(), [
    "1. Zebra",
    "2. Alpha",
    "3. Empty",
    "4. Accounting",
  ]);
  assert.equal(await viewer.locator("tbody tr").count(), 100);
  assert.deepEqual(
    await viewer.locator("tbody tr").first().locator("td").allTextContents(),
    ["0", "", "false"],
  );
  assert.match(await viewer.innerText(), /Source Range: A1:C130/);
  assert.match(await viewer.innerText(), /Truncated preview/);
  await viewer.getByRole("button", { name: "Next rows", exact: true }).click();
  await viewer.locator("tbody th").getByText("101", { exact: true }).waitFor();
  assert.equal(await viewer.locator("tbody tr").count(), 30);
  await viewer
    .getByRole("button", { name: "Copy preview Markdown", exact: true })
    .click();
  await viewer.getByRole("status").filter({ hasText: "copied" }).waitFor();
  const copied = await app.evaluate(({ clipboard }) => clipboard.readText());
  assert.match(copied, /Sheet 1: Zebra/);
  assert.match(copied, /\| 101 \| 100 \|  \| false \|/);
  await viewer.getByRole("tab", { name: "2. Alpha", exact: true }).click();
  await viewer
    .getByRole("tabpanel", { name: "Worksheet Alpha", exact: true })
    .waitFor();
  assert.match(await viewer.innerText(), /Source Range: D4:D4/);
  assert.equal(await viewer.locator("tbody td").innerText(), "Second sheet");
  await viewer.getByRole("tab", { name: "3. Empty", exact: true }).click();
  await viewer.getByText("Empty worksheet.", { exact: true }).waitFor();
  assert.equal(await viewer.locator("tbody tr").count(), 0);
  await viewer.getByRole("tab", { name: "4. Accounting", exact: true }).click();
  await viewer
    .getByRole("tabpanel", { name: "Worksheet Accounting", exact: true })
    .waitFor();
  assert.deepEqual(
    (await viewer.locator("tbody td").allTextContents()).map((text) =>
      text.trim(),
    ),
    ["EBIT", "$663,126,314", "$331,563,157"],
  );
  assert.doesNotMatch(
    await viewer.locator("tbody td").nth(2).getAttribute("title"),
    /formula|B13\/2|format:/,
  );
  assert.ok(!(await viewer.locator("tbody").innerText()).includes("[format:"));
  await viewer
    .getByRole("button", { name: "Copy preview Markdown", exact: true })
    .click();
  await viewer.getByRole("status").filter({ hasText: "copied" }).waitFor();
  const resultCopy = await app.evaluate(({ clipboard }) =>
    clipboard.readText(),
  );
  assert.match(resultCopy, /\$331,563,157/);
  assert.doesNotMatch(resultCopy, /B13\/2/);
  await page.screenshot({
    path: "test-results/worldview-excel-accounting.png",
  });
  await viewer.getByRole("tab", { name: "1. Zebra", exact: true }).click();
  await viewer
    .getByRole("tabpanel", { name: "Worksheet Zebra", exact: true })
    .waitFor();
  for (const [button, output] of [
    ["Export workbook Markdown", "excel-export.md"],
    ["Export results JSON", "excel-export.json"],
  ]) {
    const target = path.join(vault, output);
    const downloaded = app.evaluate(
      ({ BrowserWindow }, destination) =>
        new Promise((resolve, reject) => {
          const timer = setTimeout(
            () => reject(new Error("Excel export download timed out.")),
            15000,
          );
          BrowserWindow.getAllWindows()[0].webContents.session.once(
            "will-download",
            (_, item) => {
              item.setSavePath(destination);
              item.once("done", (_, state) => {
                clearTimeout(timer);
                state === "completed"
                  ? resolve(state)
                  : reject(new Error(`Download ${state}`));
              });
            },
          );
        }),
      target,
    );
    await Promise.all([
      downloaded,
      viewer.getByRole("button", { name: button, exact: true }).click(),
    ]);
    const content = await fs.readFile(target, "utf8");
    assert.doesNotMatch(content, /B13\/2|"formula"|"expression"/);
    if (output.endsWith(".md")) {
      assert.match(content, /Sheet 2: Alpha/);
      assert.match(content, /\| 130 \| 129/);
      assert.doesNotMatch(content, /Truncated preview/);
    } else assert.equal(JSON.parse(content).sheets[0].cells.length, 260);
  }
  await page.screenshot({ path: "test-results/worldview-excel-preview.png" });
  await card
    .getByRole("button", { name: "Blank Section", exact: true })
    .click();
  assert.equal(await viewer.count(), 0);
  await card.getByRole("button", { name: "Workbook", exact: true }).click();
  await viewer.waitFor();
  await card
    .getByRole("button", { name: "Close Knowledge Card", exact: true })
    .click();
  await page
    .getByRole("button", { name: "View Knowledge Card", exact: true })
    .click();
  await viewer.waitFor();
  assert.equal(await viewer.locator("tbody tr").count(), 100);
  await card
    .getByRole("button", { name: "Close Knowledge Card", exact: true })
    .click();
  assert.deepEqual(await fs.readFile(filename), bytes);
  assert.equal(await fs.readFile(entityPath, "utf8"), metadata);
  await page
    .getByRole("button", { name: "Deselect entity", exact: true })
    .click();
  await page.getByRole("button", { name: "Reset view", exact: true }).click();
  return {
    status: "passed",
    worksheetOrder: true,
    pagedRows: true,
    blankColumns: true,
    clipboard: true,
    fullDownloads: true,
    emptySheet: true,
    sectionSwitching: true,
    reopening: true,
    sourceUnchanged: true,
  };
}
module.exports = { verifyExcelPreview };
