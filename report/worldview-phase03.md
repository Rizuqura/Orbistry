# WorldView Phase 03 — Universe file assignment and buildings

Implemented and verified on 2026-11-12 (Asia/Jakarta), including Amendment 01.

## Result

Select a chip and choose **Assign Files**. The picker starts at **Universe**, browses nested folders, searches filenames across that same folder, and supports multi-selection. It shows extensions, exact byte counts, and current assignment status. **Confirm Assignment** saves memberships; Cancel makes no changes.

Each assigned file produces an isometric building on its entity. Hover shows filename/type/bytes; clicking opens the file inspector. **Locate Original** uses the existing Electron shell to reveal the file at its original location. **Unassign File** requires confirmation and removes only the association. Original files are never moved, copied, deleted, or content-parsed by WorldView.

Entity chips, appearance, positions, and source associations now survive navigation and reload through saved Markdown metadata. Loading/saving status and recoverable errors are visible; failed saves can be retried. The updated desktop/preload bridge requires restarting an already-running desktop app.

## Universe and reference inspection

`electron/vault-settings.cjs` already chooses `Documents/Universe` for a default Vault, preserves the legacy `QTerminal Vault`, and respects an existing selected Vault or explicit override. The Universe UI therefore represents the **active existing Vault root**, not a second repository.

The Vault and Station APIs already identify sources by their forward-slash, root-relative `relativePath`. WorldView records that same value in `source_id` and `source_ref`, with `origin: universe`. There are no invented `vault://` URLs, absolute source paths in indexes, content-derived IDs, or source copies. Two entities can independently reference the same source path. Renaming/moving that source makes the old association explicitly missing; WorldView does not guess a reattachment.

The normal Vault scan extracts PDF text. WorldView deliberately does **not** use that scan, source readers, Station content methods, or Agent APIs for assignment. New metadata-only operations live in the existing Vault service and use directory entries/stat metadata while retaining its metadata, memory, engine-bundle, and symlink exclusions. Existing Vault scanning, reading, search, and file access remain unchanged.

## Index storage and updates

Each entity is stored at:

```text
<active Universe root>/.wonnyy/worldview/entities/<entity-id>.md
```

`.wonnyy` is the repository's existing application metadata namespace, already excluded from source scanning. No database, separate Universe, source repository, or manifest store was introduced.

The Markdown frontmatter records `schema_version`, `entity_id`, creation timestamp, name/category/tags, appearance, position, and source records containing `source_id`, `source_ref`, `filename`, `extension`, `size_bytes`, and `origin`. The Markdown body remains human-readable notes. Unknown frontmatter fields and the complete existing body are preserved on chip saves, assignment, and unassignment.

`js-yaml` was already installed transitively. It is now an explicit production dependency so packaged Electron can read/write frontmatter using its JSON schema. Serialization sorts keys/source references deterministically. Stored byte sizes describe registration metadata; restore resolves current authoritative stat sizes for rendering and retains the recorded sizes for review.

Writes reuse the protected directory/symlink checks and serial queue from the existing JSON store. A shared text writer syncs a temporary file and atomically renames it. Expected-previous-text checks detect external edits, preserving the user's newer document. Damaged indexes are reported individually and are never silently overwritten. Missing/unavailable source references stay in their indexes and remain reviewable.

## Building normalization and rendering

`features/worldview/buildings.ts` exports configurable constants:

| Constant | Value |
| --- | ---: |
| Minimum height | 12 CSS units at 100% zoom |
| Maximum height | 56 |
| Single/equal-size height | 34 |
| Fixed footprint | 0.22 × 0.22 world units |
| Visible slots per entity | 9 |

For each entity, available byte sizes are transformed with `Math.log1p(sizeBytes)`. Heights use min–max normalization between the minimum and maximum transformed values of that entity's **complete** source set. Zero-byte sources receive the minimum when the range is nonzero. Single/equal-size sets use 34. Missing/unavailable metadata produces a flat `?` marker with no invented height.

Buildings have top/left/right faces and restrained shading, and share the Phase 01 projection, camera translation, zoom, and chip drag preview. The renderer uses matching face polygons for hit testing; building clicks inspect sources rather than starting a pan/drag. Painter ordering follows platform and building ground depth. Drawing-state save/restore prevents hover styling from leaking to chip ports.

File buildings follow the requested extension colors: PDF light red (`#f4a3a3`), Markdown blue (`#6ea8fe`), CSV light yellow (`#fff0a6`), and PNG/JPEG/JPG white (`#ffffff`). Extension matching ignores case and accepts an optional leading dot. Other types and aggregate markers remain neutral. Side faces use darker shades of the same color; hover/selection uses an orange outline without replacing the type color. Flat missing-source markers retain their type color and a contrast-aware `?` label.

Buildings form a compact square cluster above the chip. The largest file starts at the top corner, and progressively smaller files fill diagonal rows toward the bottom corner. Slots are spaced by 0.3 world units, preserving fixed footprints and clear ground gaps. Within a row, slots fill left to right. Equal heights use stable source IDs, so selection order does not change placement. Unavailable metadata is ranked after known sizes. Heights still use the complete entity source set.

Up to nine files occupy the 3 × 3 arrangement. Larger collections show the eight largest files plus one bottom-corner `+N` marker. Clicking that marker or **Files (N)** exposes the complete file list. The uploaded icon keeps its original centered 28 × 28 size and position, painted as a foreground badge so buildings cannot hide it. The platform, front name, and four decorative ports retain their existing layout. Neither the chip footprint nor neighboring entity placement changes. Isometric projection can partially obscure building faces; every source remains accessible in the inspector.

## Files changed for Phase 03

| Area | Files |
| --- | --- |
| Metadata service and desktop operations | `electron/worldview-store.cjs`, `electron/worldview-ipc.cjs` |
| Existing Vault/storage/bridge integration | `electron/vault-service.cjs`, `electron/ai/json-store.cjs`, `electron/main.cjs`, `electron/preload.cjs` |
| Universe picker and inspection | `features/worldview/assign-files-dialog.tsx`, `features/worldview/file-inspector.tsx` |
| Geometry and rendering | `features/worldview/buildings.ts`, `features/worldview/building-renderer.ts`, `features/worldview/chip-renderer.ts` |
| Durable frontend state and entity model | `features/worldview/chip-session.ts`, `features/worldview/chips.ts`, `features/worldview/chip-dialog.tsx` |
| App integration and styling | `components/worldview.tsx`, `components/app-shell.tsx`, `app/worldview.css` |
| Contracts | `types/worldview.ts`, `types/electron.d.ts` |
| Regression tests | `electron/worldview-store.test.cjs`, `electron/worldview-ipc.test.cjs`, `features/worldview/buildings.test.cjs`, `features/worldview/chip-persistence.test.cjs` |
| Desktop acceptance | `scripts/worldview-phase03-check.cjs`, `scripts/electron-worldview-smoke.cjs` |
| Runtime dependency | `package.json`, `package-lock.json` |
| Delivery report | `report/worldview-phase03.md` |

Pre-existing unrelated repository edits and deletions were preserved.

## Verification

- Standalone TypeScript check: passed.
- Final production build, including TypeScript and secured static export: passed.
- Full unit suite: **399 tests; 397 passed, 2 existing skips, 0 failed**. Output: `test-results/worldview-phase03-unit-suite.log`.
- Formatting and `git diff --check`: passed for the changed code.
- `npm ls js-yaml --omit=dev`: confirms the YAML parser is a production dependency.
- Isolated Electron acceptance: passed against the final production export with temporary Universe/app data; no real user Universe was used. Results: `test-results/worldview-reset-ui.json`.
- Square-cluster refinement: all **17 WorldView tests** passed, including top-to-bottom height ranking, deterministic ties, square bounds, non-overlapping footprints, and overflow accounting. Desktop assertions check that the largest building occupies the top corner, while the icon retains its centered anchor.

The desktop run verified default Universe selection; nested browsing; filename search; Cancel before mutation; single/multiple assignments; duplicate prevention; one source on multiple entities; equal/single/zero-byte height cases; saved Markdown; chips/buildings after reload; hover metadata; source locating; confirmed safe unassignment; explicit overflow with access to all files; missing-source recovery; and pan/zoom/chip dragging with buildings attached. All **17 fixture sources** were verified at their original paths with unchanged SHA-256 digests. Existing creation, appearance editing, deletion confirmation, camera/resize, Agent chat, and Workspace/Vault reading also passed. Renderer errors: none.

Backend tests explicitly prohibit reading original source bytes during listing, save, assignment, and restore. They also cover file/folder boundaries, traversal and link rejection, malformed-index isolation, missing/unavailable sources, concurrent membership updates, preservation of unrelated frontmatter/body, atomic-write conflict detection, recovery from failed frontend saves, and isolation between Universe roots.

Visually inspected:

- `test-results/worldview-universe-picker.png`
- `test-results/worldview-file-buildings.png`
- `test-results/worldview-file-inspector.png`

## Debug Audit

**Component:** Building layout and desktop acceptance compatibility.

**Affected Files:** `features/worldview/buildings.ts`, `features/worldview/building-renderer.ts`, `scripts/worldview-phase03-check.cjs`, `scripts/electron-worldview-smoke.cjs`.

**Observed Error:** Visual QA of a dense 3 × 3 arrangement showed short buildings hidden behind taller ones despite non-overlapping ground footprints. The earlier chip-only smoke selector also included newly added accessible building buttons.

**Root Cause:** Isometric height projection causes screen-space occlusion between different layout rows. The old generic hidden-button selector no longer identified only entities.

**Changes Applied:** The initial repair used a spaced back strip with five bounded slots. The subsequent requested layout replaced that strip with a square cluster of nine slots. The latest revision ranks files by descending height along the projected top-to-bottom ground direction, replacing the earlier center-out ranking. Explicit overflow and complete inspector access remain available. Building drawing state remains isolated, and chip assertions remain scoped to the entity list.

**Verification:** Focused normalization/layout tests passed. The final desktop run passed actual hover/click inspection, pan and zoom hit testing, chip drag round trips with attached buildings, full overflow list access, reload, and source-preserving unassignment. Final screenshots were inspected.

**Remaining Risks / limits:** Wait for the Saving indicator to finish before closing/reloading during a pending chip edit. Failed writes retain recoverable edits with Retry. File changes are refreshed when reopening/reloading WorldView; no file watcher or automatic rename tracking was added. Search is filename-only. Each confirmation accepts up to 500 files; an entity supports up to 5000 references within a 2 MB index. Nine slots fit the fixed-size chip; larger collections use explicit aggregation and complete inspection access. Isometric projection and the centered foreground icon can partially obscure building faces. The desktop path was verified on Windows; other operating systems and very large collections were not benchmarked. No source parsing, chunking, embeddings, tokenization, LLM indexing, Knowledge Cards, relationships, or new storage service/database was implemented.

## Debug Audit — centered chip icon

**Component:** Chip canvas rendering.

**Affected Files:** `features/worldview/chip-renderer.ts`, `scripts/worldview-phase03-check.cjs`, this report.

**Observed Error:** Assigning files moved the uploaded icon from its centered position to the left edge and reduced its size.

**Root Cause:** `drawWorldChips` selected a separate image rectangle whenever the chip had sources. Restoring the centered rectangle alone would allow the later building paint pass to cover it.

**Changes Applied:** Use the original centered 28 × 28 rectangle for every chip and paint the icon after file buildings. The icon acts as a foreground badge; building layout, source metadata, and hit geometry retain their behavior.

**Verification:** Production build including TypeScript passed. Isolated Electron acceptance checks the uploaded fixture's actual pixels at the centered icon anchor after multiple assignments, plus existing camera, file, persistence, chip, and navigation interactions. The final scene screenshot is visually reviewed.

**Remaining Risks:** The foreground icon intentionally covers a small central portion of the building artwork. It introduces no separate interactive target.

## Debug Audit — file-type colors

**Component:** File-building palette.

**Affected Files:** `features/worldview/buildings.ts`, `features/worldview/building-renderer.ts`, this report.

**Observed Error:** File buildings shared a single gray palette, so PDF, Markdown, CSV, and image buildings could not be distinguished by their specified colors.

**Root Cause:** All prism faces used fixed gray fills, and hover replaced the roof fill with orange.

**Changes Applied:** Resolve the documented color from source extension, shade the side faces using existing color utilities, preserve type colors during interaction, and select readable marker text from the resulting luminance. This is derived rendering state and requires no metadata migration.

**Verification:** Direct palette assertions passed for each requested type, uppercase extensions, optional dots, JPG alias, and neutral fallback. All 17 existing WorldView tests and the production build including TypeScript passed. The isolated Electron acceptance checks existing file assignment, centered icon pixels, camera, persistence, and navigation behavior.

**Remaining Risks:** Unspecified extensions retain the neutral palette; the existing desktop fixture uses binary sources, so its screenshot does not demonstrate the four new file-type colors.

## Debug Audit — complete chip titles

**Component:** Chip title rendering.

**Affected Files:** `features/worldview/chip-renderer.ts`, this report.

**Observed Error:** Long chip names ended with an ellipsis.

**Root Cause:** `fitChipName` removed trailing characters until the shortened title fit 112 canvas units.

**Changes Applied:** Remove the truncation helper and pass the complete stored name to Canvas text rendering. The existing label width scales longer titles to fit.

**Verification:** TypeScript, formatting, and whitespace checks passed. A native Canvas rendering check confirmed that the complete long title reaches `fillText` for chips with and without assigned files.

**Remaining Risks:** Long names become horizontally condensed within the label width.
