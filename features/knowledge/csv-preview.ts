/** Decodes comma-separated records for display, preserving quoted newlines and escaped quotes. Malformed quotes throw. */
export function decodeCsvPreview(content: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;
  let present = false;
  const text = content.replace(/^\uFEFF/, "");
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (character === '"') {
      present = true;
      if (quoted && text[index + 1] === '"') {
        cell += '"';
        index += 1;
      } else if (quoted || cell.length === 0) quoted = !quoted;
      else cell += character;
    } else if (character === "," && !quoted) {
      present = true;
      row.push(cell);
      cell = "";
    } else if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && text[index + 1] === "\n") index += 1;
      row.push(cell);
      if (present) rows.push(row);
      row = [];
      cell = "";
      present = false;
    } else {
      cell += character;
      present = true;
    }
  }
  if (quoted) throw new Error("CSV contains an unterminated quoted field.");
  if (present) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}
