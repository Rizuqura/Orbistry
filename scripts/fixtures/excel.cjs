const { crc32, deflateRawSync } = require("node:zlib");

/** Builds deterministic tiny ZIP fixtures entirely in memory; used only for synthetic OOXML tests, never real research sources. */
function zip(parts) {
  const local = [];
  const central = [];
  let offset = 0;
  for (const [name, content] of Object.entries(parts)) {
    const filename = Buffer.from(name);
    const bytes = Buffer.from(content);
    const compressed = deflateRawSync(bytes);
    const header = Buffer.alloc(30);
    header.writeUInt32LE(0x04034b50);
    header.writeUInt16LE(20, 4);
    header.writeUInt16LE(8, 8);
    header.writeUInt32LE(crc32(bytes), 14);
    header.writeUInt32LE(compressed.length, 18);
    header.writeUInt32LE(bytes.length, 22);
    header.writeUInt16LE(filename.length, 26);
    local.push(header, filename, compressed);
    const entry = Buffer.alloc(46);
    entry.writeUInt32LE(0x02014b50);
    entry.writeUInt16LE(20, 4);
    entry.writeUInt16LE(20, 6);
    entry.writeUInt16LE(8, 10);
    entry.writeUInt32LE(crc32(bytes), 16);
    entry.writeUInt32LE(compressed.length, 20);
    entry.writeUInt32LE(bytes.length, 24);
    entry.writeUInt16LE(filename.length, 28);
    entry.writeUInt32LE(offset, 42);
    central.push(entry, filename);
    offset += header.length + filename.length + compressed.length;
  }
  const directory = Buffer.concat(central);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50);
  end.writeUInt16LE(central.length / 2, 8);
  end.writeUInt16LE(central.length / 2, 10);
  end.writeUInt32LE(directory.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...local, directory, end]);
}

/** Escapes fixture text into XML attribute/text context without relying on a workbook-writing library. */
function xml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Builds a minimal standards-shaped XLSX with caller-supplied worksheet XML, styles, shared strings and inert optional parts. */
function workbook({
  sheets = [
    {
      name: "Sheet1",
      rows: '<row r="1"><c r="A1" t="inlineStr"><is><t>Title</t></is></c><c r="C1"><v>0</v></c></row><row r="3"><c r="A3" t="b"><v>0</v></c></row>',
    },
  ],
  styles,
  strings,
  date1904 = false,
  extra = {},
} = {}) {
  const namespace = "http://schemas.openxmlformats.org/spreadsheetml/2006/main";
  const parts = {
    "[Content_Types].xml":
      '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/></Types>',
    "_rels/.rels":
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="office" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
    "xl/workbook.xml": `<workbook xmlns="${namespace}" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><workbookPr date1904="${date1904 ? 1 : 0}"/><sheets>${sheets
      .map(function sheet(item, index) {
        return `<sheet name="${xml(item.name)}" sheetId="${index + 1}" r:id="s${index}"/>`;
      })
      .join("")}</sheets></workbook>`,
    "xl/_rels/workbook.xml.rels": `<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${sheets
      .map(function relation(_, index) {
        return `<Relationship Id="s${index}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/s${index}.xml"/>`;
      })
      .join(
        "",
      )}${styles ? '<Relationship Id="styles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' : ""}${strings ? '<Relationship Id="strings" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>' : ""}</Relationships>`,
  };
  sheets.forEach(function worksheet(item, index) {
    parts[`xl/worksheets/s${index}.xml`] =
      `<worksheet xmlns="${namespace}"><sheetData>${item.rows}</sheetData>${item.after ?? ""}</worksheet>`;
  });
  if (styles) parts["xl/styles.xml"] = styles;
  if (strings) parts["xl/sharedStrings.xml"] = strings;
  return zip({ ...parts, ...extra });
}
module.exports = { zip, xml, workbook };
