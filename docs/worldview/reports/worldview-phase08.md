# WorldView Phase 08 — Image Parsing and Carousel View

## Delivered behavior

Applied Knowledge Card sections now support explicitly named image groups ending in `.parse(image).view(carousel)`. Each group renders as one carousel. Existing standalone source declarations preserve their original source selector and viewers. Multiple uniquely named groups are supported in the same section.

Apply Index validates and stores declarations. Carousel loading automatically starts cached background processing. See Parse in the three-dot menu reveals results. Original previews, slide navigation, cached knowledge retrieval and source locating remain independent of that processing. Cache maintenance and cancellation remain available through the Engine host interface. Reopening a card attaches to an existing job or retrieves cached knowledge.

The Engine first reads bounded PNG/JPEG metadata and hashes actual content. It reuses the existing Windows OCR adapter through an internal immutable snapshot. Source assignments and content are revalidated before cache writes. Cache identity includes content, parser version, OCR configuration and adapter identities. Shared computation is reusable across entities while each retrieval retains its own authorized source reference.

Structured results include source ID/reference/hash, dimensions, format, OCR text, description/provenance, processing method/status, parser version, timestamp, configuration, cache identity, warnings and errors. The current application uses deterministic metadata and local OCR. Its description stays null when visual interpretation is unavailable. Trusted host code has an optional vision adapter interface. Agent-facing orchestration and model-provider configuration are outside this phase.

## Files created or modified

- `electron/knowledge-index.cjs` extends the declarative parser with stable named carousel components and line-specific grammar errors.
- `electron/knowledge-store.cjs` validates grouped image references and authorizes applied group membership using existing entity assignments.
- `electron/engines/image-parser/parser.cjs` implements metadata extraction, content/configuration identity and staged adapter processing.
- `electron/image-parser-service.cjs` implements authorized original previews, structured retrieval, background jobs, cancellation, source-change checks and protected derived cache persistence.
- `electron/local-ocr.cjs` adds optional child-process cancellation to the existing offline OCR adapter.
- `electron/worldview-ipc.cjs`, `electron/preload.cjs` and `types/worldview.ts` expose the guarded Engine interface and typed results.
- `electron/vault-service.cjs` classifies the additional native Engine package while retaining `.engine` exclusion from user content.
- `features/worldview/image-carousel.tsx`, `features/worldview/knowledge-workspace.tsx` and `app/worldview.css` implement carousel presentation and integration.
- `electron/image-parser.test.cjs` and `features/worldview/image-carousel.test.cjs` cover grammar, processing, authorization, cache behavior and presentation.
- `scripts/worldview-phase08-check.cjs` and `scripts/electron-worldview-smoke.cjs` verify the complete desktop workflow using isolated fixtures.
- `docs/worldview/archive/image-parse-carousel/` contains all six required documentation files, including the exact requested indexing example.
- `docs/worldview/reports/worldview-phase08.md` records delivery and verification.

## Verification

Focused tests cover the exact syntax, legacy compatibility, multiple groups, unknown methods/views, malformed declarations, traversal, unassigned sources and format rejection. Engine tests cover PNG/JPEG metadata, file/dimension limits, unavailable/failing/empty OCR, attributed vision-adapter fixtures, shared caches, configuration/content invalidation, cache corruption, source mutation during processing, cancellation cleanup and original-byte preservation. Presentation tests cover active-result descriptions, separate escaped OCR text, partial/unparsed states and presentation independence from the Engine.

The Electron workflow verifies two assigned PNGs in one carousel, original display before parsing, navigation and active filename/position, original locating, automatic background processing with opt-in result inspection, slide-specific structured output, reopening and cache reuse. It verifies original files and entity metadata byte-for-byte. Focused Engine tests exercise partial failure and cancellation. Actual Windows OCR completed successfully on this machine. The existing tag-search, connector, file-building, Universe, Knowledge Card, Markdown/CSV/PDF preview, deletion, navigation and agent-chat checks also pass.

Evidence is stored in `test-results/worldview-carousel-unparsed.png`, `test-results/worldview-carousel-parsed.png`, `test-results/worldview-reset-ui.json`, `test-results/phase08-tests.txt` and `test-results/phase08-build.txt`.

## Debug Audit

**Component** — Carousel knowledge presentation and background result authorization.

**Observed issue** — Visual review showed the unavailable-interpretation sentence twice. Review of completed job retrieval identified the need to remove revoked results and recompute aggregate state after source authorization changes.

**Root cause** — The presentation rendered both a description placeholder and the identical Engine warning. Historical job results required fresh authorization before exposure.

**Changes applied** — The view displays the interpretation message once while retaining the complete warning in structured output. Status retrieval revalidates source permissions and removes revoked results. Cache payloads use the existing Zod validation convention, and file-handle identity is checked against a fresh contained source resolution.

**Verification** — Focused tests verify a single interpretation message, malformed-cache rejection with original preview access, and revoked source results. The full desktop check validates partial-failure recovery and original preservation.

## Limits and remaining risks

Supported images are PNG and JPEG within 25 MB, 16384 pixels per edge and 20 megapixels. OCR requires Windows OCR and an installed OCR language. The default application provides OCR text and metadata. Rich visual descriptions require a configured trusted vision adapter. OCR results retain their provenance and may require review against the original.

Processing runs sequentially in the background. A hard process termination interrupts unfinished jobs and can leave removable snapshots under `.engine/image-parser/work/`. Completed atomic cache entries remain reusable. Cached results are revalidated on retrieval and source/slide refresh, while an already displayed original is a snapshot. The packaged installer was not rebuilt in this phase.

## Final checks

- `npm.cmd test` passed with 420 tests, 418 passing and two existing skips.
- `npm.cmd run typecheck` passed.
- `npm.cmd run build` passed and produced the secured static export.
- `node scripts/electron-worldview-smoke.cjs` passed the complete desktop suite with zero renderer errors and completed local Windows OCR.
- Prettier checks passed for all changed application, Engine, verification and documentation files.
- `git diff --check` passed.

## Passive parsing amendment

Carousel loading now schedules parsing automatically. The Engine persists results and reuses compatible caches on subsequent loads. The three-dot menu exposes See Parse for the active slide. The inspector provides read-only results. Closing inspection preserves the background job. Switching slides changes the inspected result.

Verification passed with 418 tests and two existing skips, production build, typecheck, formatting and the complete Electron workflow. The desktop check confirms cache availability before opening See Parse, hidden results during normal viewing, active-slide inspection and cache reuse after reopening. The fixture explicitly awaits Engine status polling after an asynchronous browser predicate returned before processing finished.

## Knowledge Card visual revision

The floating card uses the supplied concept for its dark sidebar, entity avatar/header, category/tag pills and orange active-section treatment. Centered arrow controls and a slide counter sit beneath the image. Locate Original and the read-only See Parse inspector are available through the carousel disclosure. Parsing remains automatic and manual processing controls have been removed from the card.

The full Electron regression passed after replacing decorative menu text with a CSS icon, preserving existing section labels. The acceptance check verifies arrow-only navigation, original locating through the disclosure and the absence of manual parsing controls. Production build, typecheck, formatting and 418 passing tests with two existing skips also passed.
