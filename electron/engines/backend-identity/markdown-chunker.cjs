const { estimateTokens } = require("../../shared/token-budget.cjs");
const { LIMITS, digest, chunkSchema } = require("./schema.cjs");

/** Streams deterministic, non-overlapping source slices by ATX heading and paragraph; fenced headings stay literal data. Offsets are original UTF-16 offsets and line numbers are one-based. */
function* chunkMarkdown(
  content,
  {
    entityId,
    sourceId,
    sourceVersion,
    origin = "source",
    markdown = true,
    maxTokens = LIMITS.chunkTokens,
  },
) {
  if (
    typeof content !== "string" ||
    !Number.isInteger(maxTokens) ||
    maxTokens < 64 ||
    maxTokens > LIMITS.chunkTokens
  )
    throw new Error("Invalid chunk text or token budget.");
  const maxBytes = (maxTokens - 12) * 3;
  let ordinal = 0;
  let sectionStart = 0;
  let sectionLine = 1;
  let headingPath = [];
  const stack = [];
  let fence = null;
  /** Subdivides one section at paragraphs/lines when possible, preserving every original character and Unicode code point. */
  function* section(end) {
    let start = sectionStart;
    let line = sectionLine;
    while (start < end) {
      let stop = start,
        bytes = 0;
      while (stop < end) {
        const character = String.fromCodePoint(content.codePointAt(stop));
        const size = Buffer.byteLength(character, "utf8");
        if (bytes + size > maxBytes) break;
        bytes += size;
        stop += character.length;
      }
      if (stop < end) {
        const part = content.slice(start, stop);
        const paragraph = part.lastIndexOf("\n\n");
        const newline = part.lastIndexOf("\n");
        const boundary =
          paragraph >= part.length / 3
            ? paragraph + 2
            : newline >= part.length / 2
              ? newline + 1
              : 0;
        if (boundary) stop = start + boundary;
      }
      const text = content.slice(start, stop);
      const endLine =
        line + (text.match(/\n/g) ?? []).length - (text.endsWith("\n") ? 1 : 0);
      const chunkId = digest([
        entityId,
        sourceId,
        sourceVersion,
        origin,
        ordinal++,
        start,
        stop,
        headingPath,
      ]);
      yield chunkSchema.parse({
        chunkId,
        entityId,
        sourceId,
        sourceVersion,
        origin,
        contentHash: digest(text),
        headingPath: [...headingPath],
        startOffset: start,
        endOffset: stop,
        startLine: line,
        endLine: Math.max(line, endLine),
        tokenEstimate: estimateTokens([{ content: text }]),
        content: text,
        trust: "untrusted-source",
      });
      line += (text.match(/\n/g) ?? []).length;
      start = stop;
    }
  }
  let offset = 0,
    line = 1;
  for (const match of content.matchAll(/[^\n]*\n|[^\n]+$/g)) {
    const text = match[0];
    const marker = /^ {0,3}(`{3,}|~{3,})/.exec(text);
    if (marker) {
      if (!fence) fence = marker[1];
      else if (
        marker[1][0] === fence[0] &&
        marker[1].length >= fence.length &&
        /^ {0,3}(?:`+|~+)\s*$/.test(text)
      )
        fence = null;
    }
    const heading =
      markdown &&
      !fence &&
      /^ {0,3}(#{1,6})[ \t]+(.+?)[ \t]*#*[ \t]*(?:\r?\n)?$/.exec(text);
    if (heading) {
      if (heading[2].length > 512)
        throw new Error(
          "Markdown heading exceeds the 512-character identity limit.",
        );
      yield* section(offset);
      while (stack.length && stack.at(-1).level >= heading[1].length)
        stack.pop();
      stack.push({ level: heading[1].length, title: heading[2].trim() });
      headingPath = stack.map((item) => item.title);
      sectionStart = offset;
      sectionLine = line;
    }
    offset += text.length;
    line += (text.match(/\n/g) ?? []).length;
  }
  yield* section(content.length);
}
module.exports = { chunkMarkdown };
