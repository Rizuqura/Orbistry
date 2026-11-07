# Neutral Planet View

Implemented November 7, 2026, following the supplied orbital-map reference.

- Dark blue-gray dotted canvas and neutral folder outlines.
- The root, or the folder currently focused, is a solid white circle. Other
  folders and files are hollow circles. Focusing a folder moves the white anchor.
- File outlines preserve the existing flat palette: CSV cyan, PDF muted red,
  Markdown/images light gray, and other files muted gray-brown.
- Each folder with children has a complete circular orbit guide centered on it.
  The guide passes through its furthest direct child. Fit includes the complete
  circles. Station projection keeps its existing semantic layout without folder
  orbit guides.
- Connections and orbit guides use thin strokes that retain their screen width
  while zooming: 0.4 px connections and 0.45 px orbits. The line layer uses 50%
  opacity at 55% zoom and below, rising smoothly to 75% at 200% zoom and above.
  This multiplies the existing muted stroke colors, reducing their brightness.
  No glow, shading or full-world render surface is added. Offscreen nodes,
  links and orbit arcs remain culled.
- The controls guide opens on demand. The minimap uses matching neutral colors.
- Planet and Station names render in a screen-space overlay: 11 px normally,
  10 px below 55% zoom. Zooming in never enlarges the text. A spatial collision
  check keeps at least 6 px between displayed labels, prioritizing the hovered
  item, focused parent, selected items, and then folders. Lower-priority names
  disappear when crowded and return when space becomes available. Long names
  use an ellipsis within 160 px; node accessibility names and inspection tooltips
  retain the complete name. Ordinary file labels appear from 115% zoom.
- `.engine` and `agentContext.memory` remain excluded from the planet graph.

## Optional animation

Use **ANIMATION: OFF** in the lower-right controls to turn on gentle graph
motion. The button becomes **ANIMATION: ON**; click it again to turn animation
off and freeze the current positions. The on/off preference survives restarting
the view. A fresh profile defaults to off, including in low-GPU mode.

Motion follows small, slow arcs around each parent, preserving parent-child
distances and orbit radii. Connections, labels, picking and group selection use
the current animated positions. The camera stays still. The minimap retains the
base overview to avoid redrawing its dots on every animation frame.

Animation pauses on hover, during a drag, when the document is hidden, and when
the system requests reduced motion. The button displays **ANIMATION: PAUSED**
and can still turn the preference off. Motion resumes from the same elapsed
time after a pause. No animation timer runs while disabled or paused. Updates
are capped at 20 per second, reduced to about 12 for more than 500 nodes and
8 for more than 2,000 nodes. This uses linear position updates rather than a
force simulation.

## Validation

- Production build and TypeScript check passed.
- Full suite: 410 passed, zero failed, two optional live-provider tests skipped.
- Seven orbit/rendering tests passed after final sizing adjustments.
- Isolated Electron checks passed for colors, hollow nodes, active parent focus,
  complete guides, constant-width strokes, compact controls and viewport bounds.
  Zoom checks verify fixed text size and nonoverlapping label rectangles. Unit
  checks also exercise 3,000 crowded label candidates and deterministic priority.
- Animation checks cover movement without camera movement, freeze on stop,
  persisted on/off preferences, hover pause and reduced-motion pause. Motion
  unit tests verify preserved distances and radii, source immutability, bounded
  displacement and disconnected/malformed graph handling.
- The existing Electron performance regression passed with the neutral style,
  including exclusions, zoom/pan/reset, persisted preferences and file opening.

Run both Electron regressions with `npm.cmd run test:planet:electron`.
They use disposable profiles and synthetic vaults. Electron application sandboxing
remains enabled; tests run outside the command sandbox because its Windows ACL
prevents Chromium startup.

[Verified screenshot](backend/evidence/planet-neutral/planet.png) ·
[Visual assertions](backend/evidence/planet-neutral/ui.json)

Implementation: `app/planet-neutral.css`, `lib/planet-orbits.ts`,
`lib/planet-motion.ts`, `lib/use-planet-animation.ts`,
`components/planet-scene.tsx`, `components/planet-node.tsx`,
`components/planet-minimap.tsx`, and `components/planet-controls.tsx`.
