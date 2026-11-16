# WorldView Phase 08A

## Implementation

The existing floating Knowledge Card now presents assigned PNG/JPEG originals through one shared Collection and Timeline viewer. Timeline adds a discrete observation-index scrubber with one integer stop per observation. Source access uses the existing guarded Vault preview and reveal operations. The viewer displays human-authored notes and a reserved Analysis area showing `No analysis available`.

The index parser accepts `.view(carousel)` and `.view(timeline)` as declarative data. Standalone `source:` previews remain supported. Validation checks current assignments, supported image extensions, duplicate references and malformed declarations. Failed Apply preserves the previous applied index. Exact saved Phase 08 processing chains can be restored as plain Collection viewers for compatibility. New Apply operations require the view-only syntax.

## Files changed for this phase

- `features/worldview/image-carousel.tsx` implements shared navigation, the internal TimelineScrubber controller, active-source context and note editing.
- `features/worldview/carousel-source.tsx` adds the original-preview resolver and image rendering with loading, missing-source and decoding states.
- `features/worldview/carousel-model.ts` adds pure observation-date validation and slide ordering.
- `features/worldview/knowledge-workspace.tsx` connects viewer state and updates index help.
- `app/worldview.css` adds the stable image stage, scrolling navigation and context layout.
- `types/worldview.ts` defines view modes, optional observation metadata and entity-source notes.
- `electron/knowledge-index.cjs` parses both view modes, allows empty Timeline groups and provides restore-only compatibility.
- `electron/knowledge-store.cjs` validates grouped images and atomically persists notes in the existing entity companion with revision checks.
- `electron/worldview-ipc.cjs` and `electron/preload.cjs` expose the bounded existing-storage note operation.
- `features/worldview/image-carousel.test.cjs` verifies presentation and pure ordering behavior.
- `electron/image-parser.test.cjs` updates declaration fixtures and covers viewer syntax, note isolation, conflicts and original-file preservation.
- `scripts/worldview-phase08-check.cjs` and `scripts/electron-worldview-smoke.cjs` verify both views through native application entry points.
- `docs/worldview/reference/carousel-viewer/README.md`, `INDEXING.md` and `UI_BEHAVIOR.md` document the current interface.
- `docs/worldview/archive/image-parse-carousel/README.md` points readers of the older processing documentation to the current interface.
- `docs/worldview/reports/worldview-phase08a.md` records this phase's implementation and verification.

## Supported syntax

Collection mode groups already assigned original references.

```text
# Industry

Carousel = [
  source: Archive/TSMC Equity Research/SEMICONDUCTOR101.png
  source: Archive/TSMC Equity Research/TSMC to Tech Paradiggm.png
].view(carousel)
```

Timeline uses the same declaration with `.view(timeline)`.

```text
# Project Monitoring

Carousel = [
  source: Project/Site_January.png
  source: Project/Site_April.png
  source: Project/Site_July.png
].view(timeline)
```

## UI behavior

The image stage keeps its responsive height and preserves original aspect ratios. Centered black retro arrows and a counter sit beneath the image. Collection thumbnails scroll horizontally. Timeline uses a native range with step 1, immediate image selection, explicit-date markers and an active-date readout. Its positions represent observation order. Long observation strips scroll horizontally and reveal keyboard/button selections. A single observation has one disabled slider stop and disabled arrows. Empty Timeline input produces an explicit empty state. Focused arrow keys select images while textarea keys retain normal editing behavior.

Active selection updates filename, extension, byte size, optional observation metadata and human notes. Notes are entity/source scoped and use explicit Save Notes. The existing Knowledge Card companion stores them with optimistic revision checks. They persist after reopening and are shared by viewers of the same source within that entity.

Timeline uses chronological order when every observation has a valid explicit ISO date. Missing or invalid dates preserve declaration order and show `Undated observations`. Individual markers display valid dates where supplied. Filenames and filesystem timestamps never supply dates. Section switching and reopening start at the first observation while saved notes remain entity/source scoped.

## Verification

- `npm.cmd test` completed with 422 tests, 420 passed, 2 skipped and 0 failures. The two optional live-provider experiments require explicit test credentials and opt-in configuration.
- `npm.cmd run typecheck` passed.
- `npm.cmd run build` produced the secured static export.
- Targeted Prettier checks passed for the phase's application, storage, test and documentation files.
- `node scripts/electron-worldview-smoke.cjs` passed against an isolated synthetic Universe. It exercised multiple grouped viewers, standalone-source compatibility, arrows, thumbnail selection, focused keyboard navigation, native slider dragging and keyboard steps, metadata updates, undated Timeline selection, single-observation controls, empty Timeline declarations, section switching, missing-original recovery and saved notes after reopening.
- Focused rendering/model tests cover empty, single and 50-observation timelines, all explicit-date chronological ordering and declaration-order preservation when dates are incomplete.
- The native check verified original image bytes and entity assignment metadata remained intact and that viewing created no image-processing cache.
- The native check also verified a stable stage height across landscape and portrait originals, `object-fit: contain`, and a narrower 1100-by-760 native window without horizontal content overflow. Collection and Timeline screenshots were visually reviewed.
- Native regression checks also passed for grid/camera behavior, chip operations, assignment persistence, universal connectors, tag search, Knowledge Cards, manual previews, navigation and the existing Vault reader. The chat portion used the existing isolated test provider.

Test logs and screenshots are generated under the ignored `test-results` folder. Tests use synthetic source files and isolated application profiles.

## Limitations and future integration

- Human notes require Save Notes. Unsaved drafts survive slide switches within a mounted viewer and are discarded when the section or card unmounts.
- Dates, locations and captions currently enter through optional structured component metadata. This phase adds no observation-authoring grammar or observation backend.
- Groups retain the existing limit of 50 images. Original image previews retain the existing 25 MB limit and support PNG/JPEG.
- Previews are snapshots loaded during navigation. Reopening or navigating away and back refreshes externally modified originals.
- Concurrent external note edits cause a visible revision conflict. Reopening loads the latest revision.
- Optional `sourceId`, `observedAt`, `location`, `caption`, `notes` and `analysisStatus` fields provide the future observation integration point. Actual Engine output requires a future integration at the reserved Analysis area.
- New declarations reserve `.parse(image)` for future work. Earlier Engine modules remain in the repository, while the Phase 08A viewer uses original previews and metadata operations exclusively.
