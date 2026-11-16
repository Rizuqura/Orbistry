# WorldView Phase 04

Implemented on 2026-11-12 in the existing Orbistry navigation shell.

## Behavior

Single-click selection reveals a compact entity toolbar in the upper-right viewport area. It shows the entity icon or initial, complete display name, optional category, View Knowledge Card, Assign Files, and a More options disclosure. The disclosure offers the existing editor, source inspector, confirmed chip deletion, and Deselect. Empty-ground selection and the close control clear the toolbar. Hover and chip dragging never open a Knowledge Card.

Knowledge Cards use the application's existing React view state. Each card resolves its entity by stable ID and opens as a floating window over the visible WorldView canvas. A title bar supports pointer dragging and arrow-key movement, with Home centering the window. Window bounds follow viewport resizing. The close button returns keyboard focus to the canvas. The window starts centered, with a maximum size of 900 × 600 CSS pixels and margins that adapt to the viewport.

The card provides an entity sidebar, menu navigation, and an empty text workspace. Each entity initially has one Overview menu. Custom menus can be added, renamed, selected, reordered with arrow controls, and removed after confirmation. Overview has no removal action. The main content always displays “No knowledge indexed yet.”

## Persistence

Menu configuration uses `knowledgeMenus` on the entity snapshot and `knowledge_menus` in its existing Markdown frontmatter. Array position represents menu order. Menu IDs remain stable across renames and reordering. This stores configuration only. Source associations and the Markdown body retain their own existing fields.

The existing entity save operation, serialized write queue, atomic writer, retry UI, and validation handle updates. Older indexes resolve to a single Overview. Saves from older callers that omit menu configuration preserve the saved menus. Validation requires unique menu IDs and exactly one protected `overview` ID. Menu titles accept up to 80 characters and an entity supports up to 100 menus. Save status and errors remain visible while a card is open.

## Files changed

- `components/worldview.tsx` connects selection actions, card navigation, and the retained scene.
- `features/worldview/entity-actions.tsx` implements the floating toolbar.
- `features/worldview/knowledge-card.tsx` implements the empty card and menu controls.
- `features/worldview/chips.ts` defines menu configuration and defaults.
- `features/worldview/chip-session.ts` queues entity-specific menu saves.
- `electron/worldview-store.cjs` validates and restores menu configuration through existing metadata storage.
- `app/worldview.css` styles cards and the shared action/source area.
- `electron/worldview-store.test.cjs` covers legacy defaults, persistence, isolation, source updates, body preservation, and invalid configurations.
- `scripts/worldview-phase04-check.cjs` verifies the requested desktop flows.
- `scripts/electron-worldview-smoke.cjs` and `scripts/worldview-phase03-check.cjs` use the contextual secondary actions and retain existing acceptance coverage.

## Verification

The production build including TypeScript passed. All 401 unit tests completed with 399 passing, two existing skips, and no failures. The focused WorldView/backend suite passed all 24 tests. Formatting and whitespace checks passed.

The isolated Electron acceptance verifies selection-only actions, hover and empty-ground deselection, separate TSMC and NVIDIA cards, a single empty Overview, protected Overview deletion, menu addition/rename/reorder/removal, stable menu IDs, per-entity configuration after refresh, and empty knowledge despite assigned sources. Floating-window checks confirm that the canvas stays visible, the window occupies part of the viewport, dragging moves it by the requested offset, and moving it preserves the exact canvas image. Closing the window is checked against an exact canvas image at 120% zoom after a nonzero pan. Existing creation, custom icons/colors, grid, camera, chip dragging, source assignment, safe unassignment, source hashes, deletion confirmation, Agent chat, and Workspace navigation are also exercised.

Screenshots are saved under `test-results/worldview-entity-toolbar.png`, `test-results/worldview-knowledge-card-empty.png`, and `test-results/worldview-knowledge-card-menus.png`. Test output is in `test-results/worldview-phase04-tests.log`, with desktop results in `test-results/worldview-reset-ui.json`.

## Debug Audit

**Component:** Contextual toolbar and source inspector integration.

**Affected Files:** `components/worldview.tsx`, `app/worldview.css`, desktop acceptance scripts.

**Observed Error:** The first desktop run found the toolbar intercepting the source inspector close action. A subsequent deletion run found duplicate toolbars after switching selection.

**Root Cause:** The existing inspector had an absolute position overlapping the new toolbar. After grouping them, the sibling toolbar and inspector shared the same entity key, causing React reconciliation to retain an obsolete toolbar.

**Changes Applied:** Place both surfaces in one scrollable viewport-anchored container. Assign distinct `actions:` and `sources:` key prefixes. Keep the existing dialog triggers mounted so Cancel restores keyboard focus.

**Verification:** Rerun full desktop acceptance through source inspection, card navigation, selection switching, menu persistence, and deletion of every fixture entity. The acceptance checks require unique contextual actions and complete empty-grid restoration.

**Remaining Risks:** Full-page refresh returns to WorldView with no selection. Menu configuration persists. Camera restoration applies to card navigation within the mounted WorldView. Await the Saving indicator before closing or refreshing during a pending write. The desktop flow is verified on Windows.
