# WorldView Phase 07 — Native Tag Association Search

## Repository findings

WorldView currently has one World per active Universe. Entity IDs, names and tags are persisted in `.wonnyy/worldview/entities/<id>.md`. The existing Vault resolver supplies the active Universe root. `.engine` is already reserved from Vault content access and WorldView assignment. Existing file/PDF search belongs to the Workspace and searches different inputs.

## Implementation

The engine reads persisted entity metadata through the existing WorldView store's metadata-only mode. It never reads source contents or changes entity tags. User-reviewed tags already saved in entity metadata participate as assigned tags.

Each canonical Universe root defines the current World's deterministic identifier. No World manager or parallel entity storage was added. A SHA-256 metadata revision covers entity IDs, names and original assigned tags. Creation, deletion, name/tag edits, restoration and Universe changes invalidate the corresponding search results. Full association rebuilds happen only for changed revisions or explicit cache rebuilding. Queries reuse the unchanged index.

Tags use NFKC Unicode normalization, trimming, collapsed internal whitespace and case-insensitive matching. Original spelling remains available for display. Each entity contributes each normalized tag and unordered distinct tag pair once.

Exact tags rank first. Exact entity names, partial tags and partial entity names provide separate lexical paths before association-only results. Complete normalized phrases are matched before substring assistance. Association-only results use their strongest matching tag's co-occurrence count, followed by measured Jaccard confidence and stable name/ID ordering. Counts are never summed across overlapping evidence. Unknown queries produce an empty state.

The actual modular engine is materialized under the active Universe at `.engine/tag-association/`, with `manifest.json`, `normalizer.cjs`, `indexer.cjs`, `association.cjs`, `search.cjs` and `cache/index.json`. Manifest module hashes identify the application-managed package. Runtime imports always reference the statically bundled application modules. Universe package code is never dynamically imported or executed.

Derived caches carry the World ID, index version, source revision and payload checksum. Missing, stale or corrupt caches rebuild from persisted metadata. Unusable package/cache paths yield an explicit warning and working in-memory search. Rebuild is exposed through the engine API and in the dropdown when a cache warning occurs. Atomic writes and the existing per-Universe mutation queue protect metadata boundaries. Cache operations leave entity records and original source files untouched.

The compact search bar sits below the WorldView label, inside the viewport's upper-left margin. Its scrollable dropdown explains exact/partial/name matches and actual association counts. Clear, Escape, arrow keys and Enter are supported. Result selection resolves the existing stable entity ID, uses existing selection/highlighting and centers the camera while preserving zoom. Knowledge Card opening stays an explicit entity action.

## Files changed

- `electron/engines/tag-association/normalizer.cjs`, `indexer.cjs`, `association.cjs` and `search.cjs` implement the reusable engine.
- `electron/tag-association-service.cjs` loads authoritative metadata and manages trusted package installation, World isolation and derived caches.
- `electron/worldview-store.cjs` adds metadata-only reads using the existing parser and validation.
- `electron/worldview-ipc.cjs`, `electron/preload.cjs` and `types/worldview.ts` expose guarded index, search, statistics and rebuild operations.
- `features/worldview/world-search.tsx`, `components/worldview.tsx` and `app/worldview.css` implement floating search and camera selection.
- `electron/vault-service.cjs` recognizes reserved storage containing only the native package while preserving exclusion and external-engine reporting.
- `electron/tag-association.test.cjs`, `scripts/worldview-phase07-check.cjs` and `scripts/electron-worldview-smoke.cjs` verify engine and desktop behavior.
- `scripts/worldview-phase06-check.cjs` selects an exposed connector-loop segment during regression verification.
- `report/worldview-phase07.md` records scope, decisions and verification.

## Verification

Automated engine coverage verifies exact/case-insensitive/multiword search, Unicode and whitespace normalization, duplicate tags, symmetric pair counts, higher-frequency ranking, confidence and alphabetical ties, unique results, original tag spelling, cold starts and deterministic ordering. Storage coverage verifies tag edit/deletion invalidation, isolated Universes, cache restoration in a fresh process, corrupt/deleted/stale cache recovery, managed package repair, explicit rebuilding, unavailable engine storage, source exclusion and unchanged entity bytes.

Desktop coverage verifies exact-first ordering, measured two-versus-one co-occurrence explanations, lexical suggestions, empty results, multiword queries, clear/Escape/keyboard navigation, unchanged canvas pixels while typing, fixed floating placement during pan/zoom, selected entity centering at the preserved zoom, tag edits, entity deletion and refresh persistence. Search-only operations preserve entity Markdown byte-for-byte. The complete existing WorldView suite also covers connectors, file buildings, Universe assignment, Knowledge Cards, original-source previews, navigation, chip deletion and agent chat in isolated synthetic data.

Evidence is written to `test-results/worldview-tag-search.png`, `test-results/worldview-reset-ui.json`, `test-results/phase07-tests.txt` and `test-results/phase07-build.txt`.

## Debug Audit

**Component** — Floating search styling, reserved engine storage classification and desktop regression fixtures.

**Observed errors** — Shared application surface rules hid the search icon border and replaced the requested restrained focus style with glow. Installing the native package triggered an external-engine warning instructing users to register it in Agent settings. A connector regression fixture occasionally clicked an offscreen loop midpoint.

**Root causes** — Global `!important` rules overrode local borders and input styling. Vault scanning classified all `.engine` storage as external. UUID-derived connector lane order could place the fixture's chosen midpoint beyond the viewport.

**Changes applied** — Search styles have scoped overrides for the requested border/icon/focus treatment. Native-only reserved engine storage stays excluded without being mislabeled as external. Connector verification finds an exposed viewport segment before clicking. Search result focus is restored before dismissing the dropdown so pointer selection cannot reopen it.

**Verification** — Focused Vault and engine tests pass. Desktop checks assert visible icon borders, restrained focus, actual camera selection and overlapping connector interaction. Final command results follow below.

## Limitations

The current World is the active Universe's single World. External on-disk metadata edits are picked up by subsequent search requests or normal WorldView restoration. Small-world full rebuilding is used when searchable metadata changes. Query evaluation reads a fresh metadata snapshot and reuses unchanged association statistics. Cache files above 32 MB fall back to in-memory search with a visible explanation. Packaged installer distribution was not rebuilt as part of this phase.

## Final command results

- `npm.cmd test` passed with 414 tests, 412 passing and two existing skips.
- `npm.cmd run typecheck` passed.
- `npm.cmd run build` passed and produced the secured static export.
- `node scripts/electron-worldview-smoke.cjs` passed the complete desktop suite with zero renderer errors.
- Prettier checks passed for all application, engine, verification and report files changed in this phase.
- `git diff --check` passed.
