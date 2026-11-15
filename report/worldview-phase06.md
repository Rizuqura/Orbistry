# WorldView Phase 06 Amendment 01

## Implementation

All four geometric anchors accept any port on another entity. Each relationship owns a UUID, both entity IDs, both port IDs, its name and definition, and a directed or undirected semantic field. Creation checks entity existence and record identity. Port orientation, occupancy, entity-pair duplication and collection size impose no restrictions.

Drag an anchor to another entity's anchor, enter the relationship fields, then choose Create Relationship. Cancel, Escape, a cancelled pointer gesture and releases away from eligible anchors discard the temporary connection. An incomplete gesture preserves existing relationships.

Relationships use independent JSON records under the existing Universe metadata namespace at `.wonnyy/worldview/connectors/<id>.json`. Writes reuse WorldView's per-Universe mutation queue and atomic text writer. Exact retries preserve the record, identity collisions reject replacement, damaged records generate review issues, and renderer write failures use the existing visible retry mechanism.

Stable-ID ordering assigns separate quadratic lanes to relationships between an entity pair, including reversed endpoints. Coincident anchors use cubic loops. The same world projection supplies live chip previews, persisted positions and camera transforms. Semantic arrows follow source-to-target direction independently of port geometry. Repeated clicks cycle overlapping paths, and a keyboard-accessible relationship list exposes every identity. Selecting a relationship shows its full fields and a confirmed delete action.

North, east, south and west identify the existing screen-space northwest, northeast, southeast and southwest anchors respectively. These IDs describe geometric attachment only.

## Files changed

- `components/worldview.tsx` integrates connection gestures, temporary previews, selection cycling, the definition dialog and relationship actions.
- `features/worldview/connectors.ts` defines the model, anchor projection, routes, hit testing and painting.
- `features/worldview/connector-dialog.tsx` collects staged semantic fields.
- `features/worldview/chip-renderer.ts` draws anchors from the shared coordinate definitions.
- `features/worldview/chip-session.ts` loads and queues independent relationship records through existing session persistence.
- `electron/connector-store.cjs` implements protected relationship metadata operations.
- `electron/worldview-ipc.cjs`, `electron/preload.cjs` and `types/worldview.ts` extend the guarded desktop boundary.
- `app/worldview.css` styles the dialog and selected-relationship information using application tokens.
- `electron/connector-store.test.cjs` and `features/worldview/connectors.test.cjs` cover storage, universal connectivity and geometry regressions.
- `scripts/worldview-phase06-check.cjs` and `scripts/electron-worldview-smoke.cjs` verify the desktop workflow and updated port behavior.
- `report/worldview-phase06.md` records implementation and verification.

## Verification

- Automated storage coverage exercises all 16 port pairings and 100 additional concurrent same-port relationships, reload equivalence, retry identity, collision rejection, malformed metadata isolation, invalid references and independent deletion.
- Geometry coverage exercises every port pairing, five shared-anchor lanes, reversed assignments, zoom at 25%, 100% and 300%, camera translation, live chip previews, overlapping hit results, very distant endpoints and five independent coincident-anchor loops.
- Desktop coverage creates 26 relationships through actual pointer drags and the definition dialog. It checks all 16 combinations, five additional connections in each direction sharing north anchors, full field persistence, overlapping-path cycling, chip dragging, panning, zooming, refresh, adjacent-chip loop selection, cancelled deletion and independent confirmed deletion.
- The complete desktop suite also verifies grid/camera behavior, chip creation and appearance, Universe assignment and original-file integrity, floating Knowledge Cards, manual indexing, source previews, chip deletion, application navigation and agent chat using isolated synthetic data.
- Evidence is written to `test-results/worldview-reset-ui.json`, `test-results/worldview-universal-connectors.png` and `test-results/worldview-coincident-anchor-loop.png`.

## Debug Audit

**Component** — WorldView port interaction and relationship rendering.

**Affected files** — `components/worldview.tsx`, `features/worldview/connector-dialog.tsx`, `features/worldview/connectors.ts` and associated verification scripts.

**Observed error** — The direction selector's implicit label included option text. A hidden anchor intercepted an existing foreground chip-selection check. Geometry review also identified a zero-length route when adjacent chips shared an anchor. The initial overlap fixture assumed the viewport center always contained multiple paths.

**Root cause** — The selector nested its options inside the label. Global port hit testing disregarded opaque painter ordering. Quadratic lane offsets used a zero displacement vector for coincident endpoints. UUID-based lane ordering varied which paths crossed the fixture's fixed point.

**Changes applied** — The selector uses an explicit associated label. Port targeting resolves the foremost eligible chip first, excluding the origin during destination discovery. Coincident anchors use independent cubic loops. Desktop overlap checks locate a real crossing through the shared geometry utilities. The historical decorative-port assertion now checks cancellation of an incomplete connection.

**Verification** — Regression coverage includes foreground chip selection and deletion, real crossing selection cycles, and moving connected chips until their anchors coincide. Final command results are recorded below.

**Remaining limitations** — Relationships whose entities have been removed retain their metadata and accessible entries. Rendering resumes when both endpoint entities exist. Connection counts remain unrestricted, with practical rendering throughput dependent on the machine and graph size.

## Final command results

- `npm.cmd test` passed with 410 tests, 408 passing and two existing skips.
- `npm.cmd run typecheck` passed.
- `npm.cmd run build` passed and produced the secured static export.
- `node scripts/electron-worldview-smoke.cjs` passed the complete desktop suite with zero renderer errors.
- Prettier checks passed for every application and verification file changed in this amendment.
- `git diff --check` passed.
