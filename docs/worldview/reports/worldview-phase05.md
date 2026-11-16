# WorldView Phase 05

Implemented on 2026-11-12 in the existing floating Knowledge Card.

## Result

Write Index opens a monospaced declaration editor with Save Draft, Validate Index, Apply Index, confirmed Clear Draft, and Close Editor. The editor lists the entity's actual assigned source IDs for reference. Closing a card with unsaved draft changes requires confirmation.

Each level-one heading defines one generated menu. Each following `source:` declaration adds an assigned source to that menu. Menu and preview order follow declaration order. Empty menus show an empty-source state. The same source can appear in different menus. Duplicate declarations within one menu are rejected with a line reference.

The grammar is deliberately small. Blank lines, `# Menu title`, and `source: <exact assigned source ID>` are accepted. Source IDs use the existing forward-slash, Universe-root-relative reference, including nested folders and spaces. The editor shows the actual IDs. Filename matching is never used for reference resolution.

Applying updates sidebar menus immediately. A surviving menu ID keeps its active selection, and otherwise the first generated menu is selected. IDs derive deterministically from normalized heading titles, so reordering preserves them. Renaming a title changes its generated ID. Phase 04 custom menus retain their original metadata and remain available under Saved menus. Overview acts as a non-indexed landing state before an index is applied. Generated menus are controlled by Markdown declarations.

## Persistence

Each entity has a separate companion document at:

```text
<active Universe>/.wonnyy/worldview/knowledge/<entity-id>.md
```

Its YAML frontmatter stores `schema_version`, `entity_id`, `draft`, and `has_applied`. The body stores the last applied declarations. This is separate from `.wonnyy/worldview/entities/<entity-id>.md`, which continues to own entity metadata and source assignments. Knowledge Card index operations leave that source-assignment document byte-identical.

Writes reuse the existing WorldView mutation queue and synced atomic text writer. YAML serialization sorts keys. A SHA-256 revision token detects stale editors and external modifications. Validation failure performs no write. Invalid drafts can be saved independently while the last applied index remains usable. Damaged companion files produce visible errors and are preserved for repair.

## Source resolution and previews

Apply resolves source IDs against the current entity's actual assignments and fresh Vault stat metadata. Unknown, unassigned, missing, or unavailable sources are rejected. Validation does not assign files or read original contents.

Preview requests check that a source belongs to an applied menu and is still assigned and available. The existing Vault containment, metadata exclusions, path validation, and symlink checks protect reads. A preview-only Vault operation returns original bytes or text for display. It avoids the existing PDF extraction and image OCR readers.

Supported presentations are:

- Markdown and `.markdown` through the existing escaped source-text component.
- CSV through the existing read-only table component, with shared display decoding for quoted commas, escaped quotes, multiline cells, Unicode, and empty cells.
- PDF through the existing PDF viewer, retaining document layout, pagination, zoom, and selectable presentation text.
- PNG, JPG, and JPEG as original images.
- Other formats through an unsupported-preview state with the existing Locate Original action.

Each preview shows the filename, extension, and byte size. Menus with several sources show an ordered selector. Unassigning a referenced source leaves declarations intact and displays a broken-reference state. Missing sources produce visible availability errors. Original files are read-only throughout this workflow.

## Files changed for Phase 05

| Area | Files |
| --- | --- |
| Declaration parsing | `electron/knowledge-index.cjs` |
| Companion persistence and source authorization | `electron/knowledge-store.cjs` |
| Existing metadata queue reuse | `electron/worldview-store.cjs` |
| Guarded desktop operations | `electron/worldview-ipc.cjs`, `electron/preload.cjs` |
| Preview-only Vault reads | `electron/vault-service.cjs` |
| Editor and source navigation | `features/worldview/knowledge-workspace.tsx` |
| Read-only original preview | `features/worldview/source-preview.tsx` |
| Existing floating-window integration | `features/worldview/knowledge-card.tsx`, `components/worldview.tsx` |
| Shared display components | `components/document-workspace.tsx`, `features/worldview/csv-preview.ts` |
| Contracts and styles | `types/worldview.ts`, `app/worldview.css` |
| Regression coverage | `electron/knowledge-store.test.cjs`, `features/worldview/csv-preview.test.cjs` |
| Desktop acceptance | `scripts/worldview-phase05-check.cjs`, `scripts/worldview-phase04-check.cjs`, `scripts/electron-worldview-smoke.cjs` |
| Completion report | `docs/worldview/reports/worldview-phase05.md` |

## Verification

- Standalone TypeScript check passed.
- Final production build including TypeScript and secured static export passed.
- Full suite completed with 407 tests, 405 passing, two existing skips, and zero failures. Output is in `test-results/worldview-phase05-tests.log`.
- Six focused parser, persistence, preview, integrity, concurrency, and CSV tests passed, including a final rerun after the serialized-size guard was added.
- Formatting and whitespace checks passed.
- Final isolated Electron acceptance passed with temporary Universe files and application data. Results are in `test-results/worldview-reset-ui.json`.

Desktop acceptance exercised an entity with no applied index, saved-draft restoration, valid single and multiple menus, multiple files per menu, source switching, heading rename/reorder/removal, unknown and unassigned IDs, duplicate declarations, invalid Apply preservation, Clear Draft confirmation, unsaved-close cancellation, refresh, entity isolation, legacy-menu preservation, source unassignment, and missing-file recovery. It rendered Markdown, quoted/multiline CSV, a two-page PDF, and PNG, and exercised unsupported-preview locating.

All six Phase 05 fixture files were checked at their original paths with unchanged bytes or SHA-256 hashes. The manual workflow left entity-source metadata and building geometry unchanged before the explicit unassignment case. Existing grid, chip dragging, colors/icons, camera return, Universe assignment, safe unassignment, deletion confirmation, navigation, Agent chat, and Vault reading passed in the same acceptance run. Renderer errors were empty.

The CSV, PDF, and validation screenshots were visually inspected:

- `test-results/worldview-index-csv.png`
- `test-results/worldview-index-pdf.png`
- `test-results/worldview-index-validation.png`

## Limits

Declarations support up to 256 KB and 100 menus, with titles up to 80 characters. Companion documents have a 2 MB serialized limit. Text previews support up to 5 MB, images 25 MB, and PDFs 100 MB. The card's CSV table displays up to 2000 rows and 200 columns with an explicit displayed-count indication. The first CSV record supplies table headers.

Save Draft persists editor changes for refresh or reopening. Unsaved editor text is held in memory, so use Save Draft before navigating away through the main application shell or refreshing. External availability changes require refreshing WorldView's assignment metadata. Source moves and renames require explicit reference correction. Entity deletion retains its companion index internally, while access requires an existing matching entity. The desktop path was verified on Windows. PNG was visually exercised, and JPG/JPEG use the same native image presentation path.

## Debug Audit

**Component:** CSV presentation and desktop acceptance integration.

**Affected Files:** `components/document-workspace.tsx`, `features/worldview/csv-preview.ts`, `scripts/worldview-phase04-check.cjs`, `scripts/worldview-phase05-check.cjs`.

**Observed Error:** The prior CSV table split physical lines before decoding quoted cells, which breaks multiline values. The old Phase 04 acceptance exercised menu controls superseded by the manual index. Initial acceptance also read the file-location result before IPC completion and carried a new selected entity into the deletion baseline.

**Root Cause:** CSV record boundaries can occur inside quoted strings. Generated navigation now uses declaration text as its authority. File locating is asynchronous, and the deletion comparison includes selection state.

**Changes Applied:** Reuse the table with a shared presentation-only record decoder. Adapt empty-menu acceptance to the declaration workflow. Wait for the location action to finish and deselect the final manual-index fixture before the existing deletion checks.

**Verification:** Focused quoted-field tests and the final desktop flow passed, including actual multiline CSV display, original PDF rendering, invalid-index preservation, original-file hashes, camera return, and complete empty-grid restoration after confirmed deletion.

**Remaining Risks:** The limits above apply. Draft persistence requires an explicit Save Draft or Apply action.
