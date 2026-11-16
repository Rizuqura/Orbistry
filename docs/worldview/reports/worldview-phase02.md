# WorldView Phase 02 — Entity Chip Creation

Implemented and verified on 2026-11-12 (Asia/Jakarta).

## Implementation

- `components/worldview.tsx`: Add Chip action, selection, chip-versus-camera pointer routing, preview dragging, snapped commits, keyboard movement, and accessible chip metadata.
- `app/worldview.css`: compact native dialog, icon choices, Add Chip control, and hidden accessible entity list. Existing white 25%-opacity, 1px grid remains unchanged.
- `features/worldview/add-chip-dialog.tsx`: required trimmed name, existing neutral icon glyph choices, optional category/tags, Cancel/Escape, focus restoration, and exactly-once confirmed creation.
- `features/worldview/chips.ts`: documented chip model, equal-size world footprints, integer anchor snapping, collision-aware placement, and normalized tags.
- `features/worldview/chip-session.ts`: immutable in-memory snapshots shared across view navigation; no storage, IPC, database, or backend changes.
- `features/worldview/chip-renderer.ts`: Canvas 2D platform rendering, depth ordering, viewport culling, four decorative ports, selection outlines, hit testing, and grab-offset-preserving movement through the Phase 01 camera projection.
- `features/worldview/chips.test.cjs`: placement, overlap, snapping, tag, and session regression tests.
- `scripts/electron-worldview-smoke.cjs`: Phase 02 desktop acceptance, retaining Phase 01 camera checks and existing agent/Vault navigation checks.

Platforms occupy a consistent 2 × 2 world-cell footprint so icons and names remain readable. Their corners lie on grid vertices. Each chip has a stable UUID; dragging changes only its world position. Camera and entity drags are mutually exclusive. Canceled drags discard their preview.

There was no shared icon-picker library in this repository. The picker reuses the square, folder, table, and document glyphs already present in `components/knowledge-sidebar.tsx`, without adding a dependency. No hand-drawn reference images accompanied the brief; the implementation follows its written appearance requirements.

## Verification

- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed, including TypeScript and secured static export.
- `npm.cmd test`: 385 tests; 383 passed, 2 skipped, 0 failed. The two existing environment-dependent skips remain unchanged.
- Prettier checks on changed implementation and test files: passed.
- `git diff --check` on tracked Phase 02 changes: passed.
- `node scripts/electron-worldview-smoke.cjs`: passed against the final production export, using isolated temporary Vault and app data. Electron required execution outside the restricted Windows runner; no runtime permissions or repository ACLs were changed.

Desktop checks confirmed:

1. Fresh WorldView has zero chips.
2. Add Chip opens a centered creation dialog with a visible selected icon.
3. Cancel and Escape create nothing and restore focus.
4. Blank/whitespace names are rejected; one confirmation creates one chip.
5. Multiple chips receive unique IDs, metadata, and non-overlapping integer anchors.
6. Platforms align with the existing world grid and share one scale/orientation.
7. Single click selects; empty-ground click deselects.
8. Dragging preserves the grab offset, snaps on release, and cancels without a commit on Escape.
9. Chip dragging does not pan the camera; hit testing and movement follow pan and zoom. Creation uses the current camera center.
10. Ports remain decorative. Navigation retains session chips; reload clears them.
11. Phase 01 viewport coverage, four-direction pan round trips, cursor zoom, limits, reset, keyboard reset, and resize continue to pass.
12. Existing Agent creation/chat and Workspace/Vault reading pass; the fixture source file hash remains unchanged, with no renderer errors.

Visually inspected `test-results/worldview-chips.png` and the final `test-results/worldview-chip-dialog.png`. Detailed desktop results are in `test-results/worldview-reset-ui.json`; unit output is in `test-results/worldview-phase02-unit-suite.log`.

## Debug Audit

**Component:** WorldView creation dialog.

**Affected Files:** `app/worldview.css`, `features/worldview/add-chip-dialog.tsx`, `scripts/electron-worldview-smoke.cjs`.

**Observed Error:** Initial visual inspection showed the modal in the upper-left corner and no visible icon selection border. Validation feedback also remained after editing a rejected name.

**Root Cause:** The CSS reset removes the native dialog's automatic margins. The existing application-wide soft-surface rule makes descendant borders transparent with `!important`. Validation state was cleared only by another submission.

**Changes Applied:** Explicit automatic modal margins; an outline and fill for icon selection; clear validation feedback on form input. Changes are scoped to the new dialog.

**Verification:** Final desktop acceptance asserts horizontal/vertical dialog centering, a visible selected-icon outline, and removal of stale validation feedback. All interaction and navigation checks passed again; the final dialog screenshot was inspected.

**Remaining Risks:** Chip data is session-only. No persistent save, file attachment, indexing, Knowledge Cards, relationships, functional ports, or agent integration is implemented. Name truncation preserves full metadata in accessible buttons. Large chip-count performance and other operating systems have not been benchmarked; placement and rendering are intended for this initial manual construction phase.

## Confirmed deletion extension — 2026-11-12

Selecting a chip exposes a Delete Chip action beside Add Chip. The existing native confirmation component names the target and focuses Cancel by default. Cancel and Escape leave every chip unchanged. Confirmation removes only the captured stable ID, cancels any drag preview, clears the deleted selection, redraws the canvas, and returns focus to it. Deletion has no undo and touches only frontend memory.

Changed `components/worldview.tsx`, `app/worldview.css`, `features/worldview/chip-session.ts`, `features/worldview/chips.test.cjs`, and `scripts/electron-worldview-smoke.cjs`. The confirmation dialog's centering override is scoped to WorldView.

Verification: production build, standalone TypeScript check, formatting, and whitespace checks passed. Full suite: 386 tests, 384 passed, 2 existing skips, 0 failed. The isolated Electron acceptance passed named confirmation, default Cancel focus, Cancel/Escape preservation, exact-ID deletion including duplicate names, absence of stale hit targets, focus restoration, deletion of the final chip, and exact empty-grid restoration. Existing camera, creation, navigation, Agent, and Vault checks passed again with no renderer errors. Visually inspected `test-results/worldview-chip-delete-confirmation.png`; unit output is in `test-results/worldview-delete-unit-suite.log`, and desktop results include deletion checks in `test-results/worldview-reset-ui.json`.

## Custom icons and block colors extension — 2026-11-12

Add Chip and the new selected-chip Edit Chip action share `features/worldview/chip-dialog.tsx`, replacing `add-chip-dialog.tsx`. The dialog supports existing glyphs, a custom symbol/emoji, or an explicitly chosen PNG/JPEG/WebP image. Source images are limited to 5 MB and resized locally into 128 × 128 transparent PNGs; original files are not stored, uploaded, indexed, or assigned to Vault entities.

The compact color picker provides a 112px hue/saturation wheel, keyboard controls, brightness, and a six-digit hex input. Invalid hex cannot be saved. Brightness retains the chosen hue/saturation when passing through black. Custom platform top colors have darker side faces and automatically contrasting name/icon ink. Selection remains orange.

Appearance edits are staged until Save Changes. Cancel/Escape discard them, including image choices. Saving preserves stable IDs, world coordinates, other chips, and camera state. All customizations remain session-only and survive navigation but not a reload or window close.

Implementation files: `components/worldview.tsx`, `app/worldview.css`, `features/worldview/chips.ts`, `chip-session.ts`, `chip-dialog.tsx`, `chip-colors.ts`, `color-wheel.tsx`, `chip-icon.ts`, `chip-images.ts`, and `chip-renderer.ts`. Regression coverage is in `chip-colors.test.cjs`, `chips.test.cjs`, and `scripts/electron-worldview-smoke.cjs`. The canvas owns and releases its decoded image cache and pending handlers on navigation or icon removal; late file reads cannot overwrite a newer icon choice or update a closed editor.

Verification: standalone TypeScript, final production build, formatting, and whitespace checks passed. Full suite: 390 tests, 388 passed, 2 existing skips, 0 failed. Isolated desktop acceptance passed existing controls plus custom creation, prefilled editing, Save/Cancel, pointer/keyboard wheel gestures, brightness through black, hex validation, unsupported-file rejection, valid local image decoding, pixel-level proof of uploaded-icon rendering, unchanged positions/other chips, and navigation retention. Confirmed deletion and empty-grid restoration also passed with custom images present; there were no renderer errors.

Visually inspected `test-results/worldview-custom-chip-editor.png` and `test-results/worldview-custom-chips.png`. Unit output is in `test-results/worldview-customization-unit-suite.log`; desktop results are in `test-results/worldview-reset-ui.json`. Image formats other than PNG/JPEG/WebP and remote icon URLs are not offered. Emoji appearance depends on the system font. No backend changes or dependencies were introduced.

## Upload-only icon controls — 2026-11-12

Removed the preset Icon choices and Custom symbol/emoji field at the user's request. Chip icons now use optional uploaded images; new chips without uploads have no icon. The color wheel remains available. The native file chooser spans the form width, with a 40px Choose File button using the existing app orange token `--p-orange` (`#ff9800`).

### Debug Audit

**Component:** Chip editor upload control.

**Affected Files:** `features/worldview/chip-dialog.tsx`, `chips.ts`, `chip-renderer.ts`, `app/worldview.css`, `scripts/electron-worldview-smoke.cjs`.

**Observed Error:** Choose File appeared as tiny unstyled text in a narrow half-width input; removing an uploaded image left the native input holding the old file selection.

**Root Cause:** The old two-column icon layout limited upload width, and no `::file-selector-button` styling existed. Removing the staged image did not clear the native input value, preventing a same-file selection from reliably dispatching another change event.

**Changes Applied:** Removed text-icon controls and rendering, made upload full width, styled the native chooser button using the app orange, and reset the input on image removal. No unrelated file handling changed.

**Verification:** TypeScript, production build, formatting, and whitespace checks passed; all 13 focused WorldView tests passed. Isolated desktop acceptance verified absent preset/symbol controls, the chooser's computed orange color and full width, opening the actual file chooser, same-file re-selection after removal, upload/rendering, save/cancel, color controls, and existing camera/chip/deletion/navigation behavior. The final editor screenshot was visually inspected.

**Remaining Risks:** Uploaded icons and other chip metadata remain session-only. File formats and size limits are unchanged.

## Zoom-dependent grid visibility — 2026-11-12

Grid opacity now uses a smoothstep fade: 0% at the 25% minimum camera zoom, rising gradually to 10% at normal 100% zoom and staying capped at 10% above it. Grid geometry and 1px stroke widths remain unchanged. Only the grid fades; chip rendering is unaffected.

### Debug Audit

**Component:** WorldView grid renderer.

**Affected Files:** `features/worldview/grid.ts`, `app/worldview.css`, `scripts/electron-worldview-smoke.cjs`.

**Observed Error:** Applying alpha directly to line strokes allowed intersecting grid lines to exceed the requested 10% cap. Pixel verification measured a peak alpha of 37/255.

**Root Cause:** Antialiased crossing strokes composite over each other even within the grid drawing pass.

**Changes Applied:** Paint opaque grid geometry to a reusable viewport-sized offscreen layer, then composite that layer once with the zoom-dependent alpha. Clear the viewport and skip grid painting entirely at minimum zoom. Cache ownership uses a WeakMap so unmounted canvases can be collected; save/restore isolates chip drawing state.

**Verification:** Final production build/TypeScript, formatting, and whitespace checks passed. Isolated desktop acceptance confirmed zero grid alpha at minimum zoom, partial alpha during the fade, and a peak at or below 26/255 (rounded 10%) at maximum zoom. Existing camera, resize, chip creation/editing/upload, confirmed deletion, navigation, Agent, and Vault checks also passed.

**Remaining Risks:** The extra grid layer uses memory proportional to the viewport's backing resolution. It has no world-sized allocation or continuous animation loop.
