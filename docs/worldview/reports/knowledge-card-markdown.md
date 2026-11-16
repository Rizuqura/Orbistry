# Knowledge Card Markdown Preview

## Debug Audit

**Component** — WorldView Knowledge Card source preview.

**Affected Files** — `features/worldview/source-preview.tsx`, `app/worldview.css`, and `scripts/worldview-phase05-check.cjs`.

**Observed Error** — Assigned Markdown displayed literal heading, emphasis, quote and table syntax.

**Root Cause** — The preview selected `MarkdownContent`, which deliberately renders escaped source inside a `pre` element.

**Changes Applied** — Markdown extensions use the existing React-based formatted renderer. Card-specific styles provide readable spacing and thin table separators. Other text previews keep their existing rendering. Source bytes are retained. Embedded HTML stays escaped and links use the existing HTTPS validation.

**Verification** — Typecheck and production build passed. Automated tests passed with 445 successes and two skips. Full WorldView Electron acceptance passed, including headings, bold text, blockquotes, lists, tables, escaped HTML and original source integrity.

**Remaining Risks** — Formatting follows the existing renderer's supported Markdown subset, including its table limits and HTTPS-only links.
