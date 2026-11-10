# Planet View gravity layout

The filesystem view uses a stable, deterministic gravity metaphor, without a live force simulation. The vault is the largest anchor (480 world units). Seven evenly spaced circular guides divide the size-ranked children into balanced groups. Files and folders share one descending byte-size order; larger items sit inward. Up to seven groups receive counts differing by at most one, with small radial offsets preserving order inside a band. A folder's size is the total bytes of its visible descendant files, including unsupported files shown as asteroids. Zero-byte files and empty folders remain visible. Older snapshots without byte metadata fall back to descendant counts until rescanned.

Direct files orbit their own folder and follow the same larger-nearer ordering, including unsupported files. Glyph size also increases with content size. Child systems reserve their full footprint to keep nested families separated. Equal sizes use stable path order. Bands represent rank relative to siblings, rather than equal byte intervals; distances across different parents do not represent a global byte scale.

The vault has no connection lines. Other filesystem lines connect a directory only to its direct files; directory relationships remain in the graph for navigation, selection and provenance. Context Sorting retains its separate Station projection. Animation preserves parent-child distances.

Checks: npm test; npm run build; node scripts/electron-planet-gravity-smoke.cjs. The desktop check uses an isolated temporary vault and writes test-results/planet-gravity.png.

Planet View now has one permanent neutral 2D appearance. The retired light/flat preference flags are ignored; shaded sphere and glow styles are removed. Optional animation moves objects along small 2D arcs. The minimap sits above the controls on the right. Floating chat starts 12px from the bottom-left, Reset restores that position, and subsequent manual geometry is saved under the revised window-layout preference.
