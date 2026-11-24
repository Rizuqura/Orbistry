export type DocumentSection = Readonly<{
  title: string;
  line: number;
  content: string;
  fields: readonly Readonly<{ label: string; value: string; line: number }>[];
}>;

/** Groups explicit Markdown headings and labeled fields into source excerpts; never infers facts, executes HTML, or changes the original document. */
export function structureDocument(content: string): readonly DocumentSection[] {
  const sections: DocumentSection[] = [];
  let title = "Document overview";
  let line = 1;
  let lines: string[] = [];
  let fenced = false;
  /** Retains source line numbers for each literal section and labeled field. */
  function append(): void {
    if (!lines.some((value) => value.trim())) return;
    const fields: { label: string; value: string; line: number }[] = [];
    let insideCode = false;
    const body = lines.filter((value, offset) => {
      if (/^\s*(```|~~~)/.test(value)) {
        insideCode = !insideCode;
        return true;
      }
      if (insideCode) return true;
      const match =
        /^\s*(?:>\s*)?(?:[-*]\s+)?(?:\*\*([^*\n]+?):\*\*\s*(.+)|([\w][\w /&()%-]{1,50}):\s+(.+))$/.exec(
          value,
        );
      if (!match) return true;
      fields.push({
        label: match[1] ?? match[3],
        value: match[2] ?? match[4],
        line: line + offset,
      });
      return false;
    });
    sections.push({ title, line, content: body.join("\n").trim(), fields });
  }
  for (const [index, value] of content.split(/\r?\n/).entries()) {
    if (/^\s*(```|~~~)/.test(value)) fenced = !fenced;
    const heading = !fenced && /^#{1,6}\s+(.+?)\s*#*\s*$/.exec(value);
    if (heading) {
      append();
      title = heading[1];
      line = index + 2;
      lines = [];
    } else lines.push(value);
  }
  append();
  return sections;
}
