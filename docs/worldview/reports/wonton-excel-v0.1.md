# Wonton Excel Engine v0.1 — Implementation Report

Date: 2026-11-14. Scope: deterministic offline XLSX extraction, faithful Markdown and the existing Knowledge Card source viewer.

## Implementation

- `electron/engines/excel/`: bounded ZIP/XML reader, sparse typed cell model, deterministic display fallback, coordinate-faithful Markdown, worker API, CLI and package metadata.
- `electron/excel-service.cjs`: guarded Universe source snapshots, content/version cache, coalesced sequential background processing, worksheet pages and full exports.
- `electron/ai/engine-registry.cjs`: native read-only Engine definition and allowlisted invocation; CHronoZ agent binding behavior preserved.
- `electron/knowledge-store.cjs`, `electron/worldview-ipc.cjs`, `electron/preload.cjs`, `electron/main.cjs`, `types/worldview.ts`: existing source preview integration, narrow worksheet/export requests and authorized native clipboard copy.
- `features/worldview/excel-preview.tsx`, `features/worldview/source-preview.tsx`, `app/worldview.css`: worksheet tabs, paged faithful cells, range/type/format inspection, Markdown copy/access and full derived exports in the floating Knowledge Card.
- `package.json`, `package-lock.json`: promote already installed SAX 1.6.1 and unzipper 0.12.5 to pinned runtime dependencies.
- `scripts/fixtures/excel.cjs`, `electron/excel-engine.test.cjs`, `electron/excel-service.test.cjs`: deterministic synthetic workbooks, safety and integration tests.
- `scripts/build-excel-engine.cjs`: self-contained package with dependency licenses and SHA-256 manifest; refuses existing installation overwrite.
- `scripts/worldview-excel-check.cjs`, `scripts/electron-worldview-smoke.cjs`: real Electron acceptance coverage alongside the existing WorldView regression suite.
- [API and usage documentation](../packages/excel-v0.1.md).

Universe was resolved from the existing saved `vault-settings.json`: `C:\Universe`. The package installation target is `C:\Universe\.engine\wonton-excel`; no second Universe or source repository is created. The app runs trusted shipped code; it does not execute arbitrary code found under `.engine`.

## Verification

- `npm test`: **438 total; 436 passed, 2 optional live-provider tests skipped, 0 failures**. Excel coverage includes all 14 required scenarios, plus 1904 dates, Excel serial 60, rich/shared strings, native registry use, stale content, revoked assignments and the guarded clipboard boundary.
- `npm run typecheck`: **passed**.
- `npm run build`: **passed**, including TypeScript and secured static export.
- Prettier check on all touched code: **passed**.
- `node scripts/electron-worldview-smoke.cjs`: **passed**, with isolated synthetic sources and zero renderer errors. Excel checks cover Universe picker assignment, existing `source:` syntax, ordered worksheet tabs, empty sheets, 100-row paging, original blank columns, zero/false, native clipboard content, complete Markdown/JSON downloads, section switching, reopening, unchanged workbook bytes and unchanged entity metadata. Existing grid/camera, connectors, tags, image/timeline viewers, deletion, navigation, Vault reader and agent-chat regressions also passed.
- `node scripts/build-excel-engine.cjs`: **passed**. Self-contained package contains 228 content files plus its integrity manifest, including 17 pinned runtime dependency packages and their notices/licenses. Its own copied API successfully parsed a synthetic workbook in a worker.
- Visual inspection: native Knowledge Card screenshot checked for the existing dark palette, floating window, readable table, source coordinates and export controls.

Local evidence (generated, not source-controlled): `test-results/excel-full-tests.txt`, `test-results/excel-build.txt`, `test-results/worldview-reset-ui.json` (`excel.status: passed`), `test-results/worldview-excel-preview.png`. The package's `engine_manifest.json` records a SHA-256 for every content file, runtime dependency versions and entry point. Installation uses only the existing Universe's `.engine/wonton-excel` target and refuses replacement of any existing package.

To use the UI, assign an XLSX, open its Knowledge Card, then apply:

```text
# Workbook
source: Research/Example.xlsx
```

Use the real assigned source reference in place of the example. API: `const result = await require("C:/Universe/.engine/wonton-excel").excel("C:/Universe/Research/Example.xlsx");`.

## Decisions and limitations

Full sparse structured output is authoritative; blanks are implicit within explicit bounds. Formula caches and their missing/available state are preserved without calculation. Merges remain independent ranges. Patch 0.1.1 adds spreadsheet numeric formatting and removes inline format annotations, as detailed below.

Only `.xlsx` is supported. Macro-enabled/encrypted/legacy files, ZIP64, chart/dialog sheets and over-limit workbooks fail explicitly. No chart/pivot/image/embedded-object execution or semantic inference exists. Shared/dependent formulas with no local expression retain their source metadata and warning instead of invented expressions. Cache freshness means source-content freshness; formula-cache freshness cannot be verified.

Preview is 100 × 20 cells per page. Full Markdown is limited to 200,000 rectangular cells; full accepted structured data remains exportable as JSON. Model cache is disposable in memory (two workbooks); a process restart requires parsing again. Standalone package requires Node 22.18+, with JS dependencies bundled. No AI integration or new indexing DSL is needed. No requested Knowledge Card integration is deferred.

## Debug Audit

**Component:** Wonton Excel Markdown renderer and synthetic integration setup.

**Affected Files:** `markdown.cjs`, Excel engine/service tests.

**Observed Error:** Initial escaping test produced `&\#124;` instead of a valid literal pipe entity. Initial service fixtures failed the existing protected Overview menu rule.

**Root Cause:** Sequential Markdown replacements escaped the `#` introduced by a previous replacement. The synthetic chip fixture incorrectly supplied an empty menu array.

**Changes Applied:** Escape Markdown punctuation in one pass with numeric entities. Seed the required Overview in fixtures without changing application validation.

**Verification:** Targeted regressions, the full test suite and the corrected native Electron run passed; evidence is recorded above.

**Remaining Risks:** Resource limits intentionally reject very large workbooks. Excel visual fidelity, formula recalculation and freshness are outside v0.1.

The first native Electron run also exposed browser clipboard denial under the existing permission policy. The copy action was moved to a narrow main-process handler that regenerates the authorized worksheet page and writes it with Electron clipboard; browser permissions were preserved. A regression test verifies source/root authorization and rejects caller-supplied text. The package builder also initially hit a dependency's hidden `package.json` export and the Node built-in `string_decoder` name collision; local package resolution now handles both explicitly, and the self-contained package smoke passed.

## Patch 0.1.1 — Readable saved results

**Component:** Numeric display and Knowledge Card formula presentation.

**Affected Files:** `electron/engines/excel/{cells,reader,markdown,limits}.cjs`, engine package metadata, `electron/excel-service.cjs`, `features/worldview/excel-preview.tsx`, `types/worldview.ts`, `app/worldview.css`, dependencies, regression fixtures, package builder and documentation.

**Observed Error:** Currency/accounting cells wrapped across many lines because full Excel format expressions were appended to every numeric value. Formula cells also displayed their complete expression in the table.

**Root Cause:** The v0.1.0 display fallback intentionally returned `raw [format: <code>]`, and the viewer used the same expression/result text as faithful Markdown exports.

**Changes Applied:** Add pinned offline SSF 0.11.2 numeric formatting (Apache-2.0). Preserve raw values and format codes in structured metadata. Show formatted saved formula results in the table, keep expressions on hover and in Markdown/JSON, and explicitly label missing caches. Numeric values remain on one line with tabular digits. Unsupported formats return raw values plus visible warnings, without inline code annotations. Bump Engine version to 0.1.1 to invalidate previous derived cache identities. Explicit package upgrades verify existing contents and preserve a backup inside `.engine`.

**Verification:** `npm test`: **440 tests, 438 passed, 2 optional skips, 0 failures**. Typecheck, production build and touched-code formatting checks passed. The native Electron suite passed with zero renderer errors, including an Accounting worksheet that displays `$663,126,314` and saved formula result `$331,563,157` without code annotations; hover retains `=B13/2`. Both exports, clipboard, source preservation and existing navigation regressions passed. A package regression test verifies explicit upgrades preserve the previous installation and reject modified package files. Evidence: `test-results/excel-format-tests.txt`, `test-results/excel-format-build.txt`, `test-results/worldview-excel-accounting.png` and `test-results/worldview-reset-ui.json`. The screenshot was visually inspected. Only synthetic workbook fixtures were used; the user's original workbook was not inspected or modified.

**Remaining Risks:** This patch does not recalculate formulas, following the user's explicit choice. Saved result freshness and exact Excel locale/visual formatting remain outside this patch. Unsupported number formats retain a warning and all source metadata.

## Patch 0.1.2 — Final text for Knowledge Cards

### Debug Audit

**Component**

Knowledge Card Excel delivery and exports.

**Affected Files**

`electron/engines/excel/results.cjs`, Markdown rendering, worker export, Engine API/version, `electron/excel-service.cjs`, `features/worldview/excel-preview.tsx`, `types/worldview.ts`, focused regressions, native acceptance and this documentation.

**Observed Error**

Formula expressions and raw format metadata appeared in hover text, Markdown and downloaded structured data after the table switched to saved results.

**Root Cause**

The Knowledge Card response contained complete extracted cell objects, and its copy/export paths used the Engine's expression-inclusive rendering.

**Changes Applied**

Add a final-text projection at the Engine-to-Card boundary. Card pages contain text, coordinates and numeric display hints. Hover, Markdown preview, clipboard, workbook Markdown and results JSON use formatted saved values. The existing table layout retains worksheet order, source ranges and paging. The Engine API exposes a `valuesOnly` export option for this representation. Package version is 0.1.2.

**Verification**

Focused regressions passed across pages, Markdown, clipboard and JSON. They cover zero, false, empty strings, error results, literal source text, formatted numbers and missing saved values. The full suite passed with 441 tests, 439 passed and 2 optional skips. Typecheck, production build, touched-code formatting and the Electron WorldView acceptance suite passed. Native checks verify final values in hover, clipboard and both downloaded formats, together with existing source access and navigation. The initial full-suite run encountered Windows `EPERM` on an existing knowledge-store concurrency test's temporary writer lock. That test passed in isolation, and the full suite passed on retry. Evidence is available in `test-results/excel-results-tests.txt`, `test-results/excel-results-build.txt` and `test-results/worldview-reset-ui.json`.

**Remaining Risks**

Cards depend on saved workbook results. A missing saved value displays `[saved result unavailable]`.
