# Orbistry Planet View — Anchoring Physics Architecture

## Status

Implementation Context / Spatial Architecture Specification

Target:
Orbistry Amadeus V0.0.1 Planet View

Purpose:
Define a deterministic anchoring and physics system so Planet View preserves filesystem hierarchy, maintains stable spatial memory, and produces an organic solar-system-like layout without allowing force simulation to destroy structure.

This document complements:

- Planet View Experience Goal
- Knowledge Station / Context Management specification

---

# 1. Core Principle

Planet View must NOT allow force simulation to decide hierarchy.

Hierarchy must determine the intended spatial structure first.

Physics only performs local relaxation.

The governing principle is:

> Structure defines territory. Anchors define home. Physics only relaxes.

Conceptually:

KNOWLEDGE TOPOLOGY
        ↓
HIERARCHY
        ↓
ANCHORS
        ↓
TERRITORIES
        ↓
HOME POSITIONS
        ↓
LOCAL PHYSICS
        ↓
STABLE PLANET POSITIONS

Not:

GRAPH EDGES
        ↓
GLOBAL FORCE SIMULATION
        ↓
HOPE THAT HIERARCHY EMERGES

---

# 2. Problem Being Solved

The current Planet View may produce visually interesting graphs, but generic force-directed layouts can cause:

- files drifting too far from their parent directory,
- directories losing clear system boundaries,
- excessive empty space,
- child nodes crossing into unrelated systems,
- large directories pushing small directories unpredictably,
- unstable layouts across reloads,
- Station View producing scattered objects,
- graph structures looking mechanical instead of orbital,
- weak visual hierarchy.

The goal of the anchor system is to eliminate these problems while preserving an organic appearance.

---

# 3. Core Spatial Primitives

Planet View should be built around four layout primitives:

1. Anchor
2. Territory
3. Home Position
4. Local Physics

These four concepts form the foundation of the layout engine.

---

# 4. Anchor

An Anchor represents the structural center of a local knowledge system.

Typical anchor objects:

- Vault root
- Major directory
- Subdirectory
- Active Knowledge Station
- Temporary semantic cluster

Example:

Vault
│
├── Annual Reports
├── Additional Data
├── Basic Knowledge
├── Progress
└── TSMC Python
    ├── .idea
    └── Data

Conceptually:

ROOT ANCHOR
│
├── SYSTEM ANCHOR: Annual Reports
├── SYSTEM ANCHOR: Additional Data
├── SYSTEM ANCHOR: Basic Knowledge
├── SYSTEM ANCHOR: Progress
└── SYSTEM ANCHOR: TSMC Python
    ├── SUBSYSTEM ANCHOR: .idea
    └── SUBSYSTEM ANCHOR: Data

Each directory should behave as a spatial anchor.

Files should not act as anchors by default.

---

# 5. Suggested Anchor Data Model

A conceptual anchor structure may contain:

```ts
type Anchor = {
  id: string
  objectId: string

  parentAnchorId?: string

  depth: number

  x: number
  y: number

  targetX: number
  targetY: number

  innerRadius: number
  outerRadius: number

  subtreeWeight: number

  startAngle?: number
  endAngle?: number

  mode: "filesystem" | "station"

  locked?: boolean
}
```

---

# 6. Implemented Territory and Brain Anchors

Filesystem directories own deterministic local territories. Direct files occupy inner belts, nested directory systems occupy outer bounded territories, and collision relaxation is leashed to stable home positions.

Station projections add temporary semantic anchors. Every active Station receives a named hub; direct members are attracted to that hub, while shared members balance between their hubs. Structural directories remain filesystem orientation anchors and do not become Station members implicitly.

Hub-to-member lines are scope relationships. They use Station identity from the projection rather than inferred similarity, allowing multiple active Stations to remain separate, explainable context systems.

The renderer does not decide model authority. The knowledge layer resolves the effective Brain Scope in this order: Active Context, active Station projection, then universal vault. A prepared scope constrains subsequent source reads and is invalidated when a replacement scope is prepared.
