const test = require("node:test");
const assert = require("node:assert/strict");
const { decodeCsvPreview } = require("./csv-preview.ts");

/** Verifies display decoding preserves quoted commas, multiline values, escaped quotes, Unicode, and empty cells. */
test("CSV preview decodes original cell text without analysis", () => {
  assert.deepEqual(
    decodeCsvPreview(
      '\uFEFFName,Value\r\n"a,b","line1\nline2"\r\n"quote ""inside""",\r\n',
    ),
    [
      ["Name", "Value"],
      ["a,b", "line1\nline2"],
      ['quote "inside"', ""],
    ],
  );
  assert.deepEqual(decodeCsvPreview(""), []);
  assert.deepEqual(decodeCsvPreview('""\n""'), [[""], [""]]);
  assert.deepEqual(decodeCsvPreview("Title\nΚαλημέρα"), [
    ["Title"],
    ["Καλημέρα"],
  ]);
  assert.throws(() => decodeCsvPreview('Name\n"unfinished'), /unterminated/);
});
