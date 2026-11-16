> Historical Phase 08 design. Use the [current indexing guide](../../INDEXING.md) for supported declarations and controls.

# Indexing syntax

This exact syntax is supported when both referenced files are assigned to the entity.

```text
# Industry

Carousel = [
  source: Archive/TSMC Equity Research/SEMICONDUCTOR101.png
  source: Archive/TSMC Equity Research/TSMC to Tech Paradiggm.png
].parse(image).view(carousel)
```

`# Industry` defines a level-one section. `Carousel` names the component. Each `source:` uses an existing assigned Universe reference, with its full forward-slash relative path. `.parse(image)` registers the permitted parser. `.view(carousel)` registers the permitted presentation. Processing is scheduled automatically when the applied carousel loads. Cached results are reused. The three-dot menu?s See Parse action opens the result inspector.

## Complete grammar

- Blank lines, a leading UTF-8 BOM and CRLF line endings are accepted.
- A section is `# ` followed by a title of at most 80 characters. Section titles are unique after Unicode, whitespace and case normalization. An index supports up to 100 sections and 256 KB of declarations.
- A standalone source line is `source:` followed by its assigned source ID. Existing PDF, Markdown, CSV, image and unsupported-format preview behavior is preserved.
- A group opens with `Identifier = [` on its own line. Identifiers start with an ASCII letter and contain letters, digits or underscores, up to 64 characters. Identifiers are case-insensitively unique within a section.
- Group contents contain one `source:` declaration per line. Each group contains 1–50 assigned PNG/JPG/JPEG images in declared order.
- The closing line is exactly `].parse(image).view(carousel)` after trimming outer whitespace. Method spelling, argument spelling and order are fixed.
- References use forward slashes. Empty path segments, `.` or `..` segments, backslashes, drive prefixes, colons and NUL characters are rejected. Source IDs support spaces and must match actual assigned references.
- Duplicate references within a component are rejected. A source may be deliberately referenced in separate groups, separate sections or a standalone source component.
- Plain Markdown prose, code fences, nested groups and arbitrary chain methods generate validation errors.

The parser constructs normalized data and line-specific errors. Applying invalid declarations preserves the previously applied index. Syntax parsing, assignment validation and Engine execution have separate responsibilities.

## Multiple components and compatibility

```text
# Industry
Carousel = [
  source: images/overview.png
  source: images/process.jpg
].parse(image).view(carousel)
Charts = [
  source: images/chart.png
].parse(image).view(carousel)
source: notes.md

# Annual Report
source: reports/annual.pdf
```

Explicit groups render in group declaration order. Standalone declarations retain their existing source selector and order. The groups appear above that selector within a mixed section. Standalone images keep their existing single-source preview.

## Invalid declarations

```text
# Invalid
Carousel = [
  source: ../outside.png
].parse(exec).view(carousel)
```

Traversal and unknown parsing operations generate validation errors. `.view(grid)`, extra chain calls and unclosed brackets also generate errors. A valid-looking reference to an unassigned file fails authorization. Grouped PDF or SVG sources fail format validation.

Future parsing/view methods require explicit registration and grammar changes. The current engine implements the image/carousel chain shown here.
