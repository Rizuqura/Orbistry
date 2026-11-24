const test = require("node:test");
const assert = require("node:assert/strict");
const { structureDocument } = require("./indexed-document.ts");

test("document widgets preserve literal headings, source lines, labeled fields and non-financial prose", () => {
  const content =
    "# Company\n\n> **Ticker:** 2330.TW\n> **Document Status:** DEMO / TEST DATA\n\nNo financial claim is inferred.\n\n## Facilities\nTaiwan manufacturing.\n";
  const sections = structureDocument(content);
  assert.equal(sections.length, 2);
  assert.deepEqual(sections[0].fields, [
    { label: "Ticker", value: "2330.TW", line: 3 },
    { label: "Document Status", value: "DEMO / TEST DATA", line: 4 },
  ]);
  assert.equal(sections[0].line, 2);
  assert.match(sections[0].content, /No financial claim is inferred/);
  assert.equal(sections[1].title, "Facilities");
  assert.equal(sections[1].line, 9);
});

test("code, tables and literal HTML remain excerpt content and cannot become extracted financial facts", () => {
  const content =
    "# Research\n```text\n# Not a heading\nPrice: 900\n```\n\n| Metric | Value |\n| --- | --- |\n| Price | 0 |\n\n<script>literal</script>";
  const sections = structureDocument(content);
  assert.equal(sections.length, 1);
  assert.deepEqual(sections[0].fields, []);
  assert.match(sections[0].content, /Price: 900/);
  assert.match(sections[0].content, /<script>literal<\/script>/);
  assert.deepEqual(structureDocument(""), []);
});
