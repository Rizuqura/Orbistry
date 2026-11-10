# Planet View: engine storage and rendering fix

Validated November 6, 2026 on Windows. The owner's configured vault is `C:\bank`,
with CHronoZ stored under `.engine`. No vault files, engine files, live profiles
or saved research selections were deleted or moved by this repair.

## Cause

The vault scanner descended into `.engine`, treating 5,627 package files and 542
runtime directories as potential research/graph entries. Including the `.engine`
directory itself added **6,170 graph entries**. The metadata reproduction produced
6,350 nodes and a world approximately **2,427,224 × 1,230,273 logical pixels**.

The old Fit View imposed a minimum 20% zoom. At a 1000 × 700 viewport this put
**zero planets in view** for that layout. The world also had explicit dimensions
and `will-change: transform`, encouraging promotion of that enormous surface.
All nodes/edges and minimap dots were retained even while off screen.

## Changes

- Exclude `.engine` storage and structurally recognized CHronoZ bundles before
  recursively scanning, indexing PDFs or constructing research entries. A vault
  warning explains the exclusion. Engine execution still uses its approved
  registry path and verifier. Copy a PDF into an ordinary vault folder to review it.
- Construct graph parent/child links with a map rather than searching all nodes
  for every file.
- Fit the complete logical world, including zoom levels below 20%, and use that
  fit as the zoom-out limit. Clear stale folder focus after a rescan removes it.
- Cull offscreen nodes and edges while preserving the full graph for selection,
  navigation and source bookkeeping. Memoize nodes to avoid repainting unchanged
  contents on camera updates.
- Move edge drawing into a clipped, viewport-sized SVG. Remove full-world
  dimensions and forced GPU promotion from the node container.
- Default to **FLAT VIEW (LOW GPU)**, suppress camera flight animations in that
  mode, and preserve explicit user opt-outs. The neutral visual update keeps
  outlined planets in both modes; the checkbox controls camera animations.
- Memoize minimap geometry and cap its overview at 1,024 representative dots;
  this samples only the overview, never the actual graph or vault contents.

## Measured results (original engine-storage repair)

Read-only metadata/layout reproduction on the real vault:

| Metric | Engine storage included | Engine storage excluded |
| --- | ---: | ---: |
| Graph nodes | 6,350 | 180 |
| Logical world width | 2,427,224 px | 4,166 px |
| Logical world height | 1,230,273 px | 1,791 px |
| Orbital layout time in this run | 94 ms | 1 ms |
| Metadata walk plus layout | 350 ms | 6 ms |
| Planets inside old Fit View at 1000 × 700 | 0 | 180 |

These timings are individual diagnostic runs, not hardware GPU-utilization
benchmarks. The metadata walk avoids document-content extraction. A separate
cold scan of the real vault returned 105 readable files, 30 folders and 180 total
graph nodes with `.engine` excluded. That scan still took about 88 seconds because
existing research PDFs are eagerly indexed; PDF startup indexing has not been
redesigned in this change.

The isolated Electron rendering case had 211 research nodes. All were visible
after Fit View; zooming culled almost all offscreen nodes (the exact live count
is recorded in the UI evidence). Its node container
had no forced `will-change` layer or full-world dimensions. Edge rendering was
bounded to the **840 × 904** viewport with overflow clipping. The test verified
pan/reset, persisted lighting preference, stale-focus recovery and keyboard file
opening. The existing Planet sidebar test also passed its six viewport sizes,
source selection, Stations, ANY/ALL matching and Context Box filtering checks.

## Validation

- `npm.cmd run typecheck`: passed.
- `npm.cmd run build`: passed, including static export/CSP.
- `npm.cmd test`: **402 passed, zero failed, two skipped**, 404 total. Skips are
  the existing optional credentialed provider experiments.
- Targeted rendering/layout/hit-testing/vault tests: **27 passed**.
- `node scripts/electron-planet-performance-smoke.cjs`: passed.
- `node scripts/electron-planet-sidebar-smoke.cjs`: passed.
- Electron tests used disposable profiles and synthetic research. They ran
  outside the command sandbox to avoid its known Windows AppContainer ACL
  startup problem, with Electron's application sandbox retained.

Evidence is saved under `docs/backend/evidence/planet-performance/`:

- [Real-vault metadata metrics](backend/evidence/planet-performance/bank-metadata.json)
- [Isolated UI assertions](backend/evidence/planet-performance/ui.json)
- [Planet View screenshot](backend/evidence/planet-performance/planet.png)

## Use the repair

**November 7 visual-exclusion follow-up:** both reserved folder names are filtered
from the planet graph, case-insensitively and at any nesting level. A read-only
metadata check of `C:\bank` produced 175 planet nodes, with neither reserved
folder visible and `agentContext.memory` still retained in the vault snapshot.
The current suite passed **403 tests with two optional live-provider skips**;
the graph test covers unchanged source snapshots and manually added research.

Planet View also excludes `agentContext.memory` and its descendants, including
nested folders with that name. This is a visual exclusion: agent-memory files
remain in the vault explorer and can still be explicitly reviewed and attached
through Agent Construction. `.engine` remains excluded from research scanning
as well. Neither folder is deleted or moved.

To add research, drag/copy files from your device into an ordinary folder such
as `C:\bank\Research` using Windows File Explorer, then **Rescan vault** in
Orbistry. Those files appear as planets. Files kept inside `.engine` or
`agentContext.memory` do not appear on the map.

Restart the updated desktop build and choose **Rescan vault**. Leave **FLAT VIEW
(LOW GPU)** checked for lower rendering cost. If an earlier explicit preference
disabled it, enable it once; that choice persists. The engine can remain in
`C:\bank\.engine`; registration and report retrieval do not require moving it.

Changed implementation: `electron/vault-service.cjs`, `lib/planet-vault.ts`,
`lib/planet-rendering.ts`, `components/planet-scene.tsx`, `planet-node.tsx`,
`planet-minimap.tsx`, and `app/globals.css`. Regression coverage lives in
`electron/vault-service.test.cjs`, `lib/planet-rendering.test.cjs`, and
`scripts/electron-planet-performance-smoke.cjs`.
