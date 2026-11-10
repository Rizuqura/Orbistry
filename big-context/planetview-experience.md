# Orbistry Planet View — Experience Goal & Spatial Architecture

## Status

Product / UX Context Document

Target:
Orbistry Amadeus V0.0.1 and future Planet View development.

This document defines the intended experience, spatial logic, interaction philosophy, and long-term behavior of Planet View.

This is NOT a strict implementation specification.

Implementation details may change as long as the core experience described here is preserved.

---

# 1. Core Thesis

Planet View is not intended to be a decorative graph visualization.

Planet View is the spatial interface of the Orbistry knowledge system.

Its purpose is to help users:

1. understand the structure of their knowledge,
2. navigate large knowledge banks,
3. recognize relationships between files and directories,
4. visually construct AI context,
5. explore Knowledge Stations,
6. maintain spatial memory of their knowledge,
7. inspect knowledge at different levels of abstraction.

The core experience should feel closer to navigating a knowledge universe than navigating a conventional node graph.

Conceptually:

VAULT
    ↓
KNOWLEDGE OBJECTS
    ↓
SPATIAL REPRESENTATION
    ↓
PLANET VIEW
    ↓
KNOWLEDGE EXPLORATION
    ↓
CONTEXT CONSTRUCTION
    ↓
AI MODEL

Planet View should therefore remain connected to the actual knowledge architecture of Orbistry.

Visual behavior should communicate meaning.

Position, distance, size, hierarchy, visibility, and grouping should not exist purely for decoration.

---

# 2. Planet View Mental Model

The primary visual metaphor is a universe composed of systems.

Basic visual objects:

★ Directory
○ File
☀ Root / Major System
─ Structural relationship
·· Contextual / semantic relationship

The exact visual appearance may evolve.

However, the hierarchy should conceptually behave like:

Vault
    ↓
Major Directory
    ↓
Subdirectory
    ↓
File

or spatially:

☀ VAULT

    ★ Equity Research
        ○ Annual Report
        ○ Thesis
        ○ Financial Model

    ★ Basic Knowledge
        ○ Notes
        ○ Framework

    ★ TSMC Python
        ★ Data
            ○ dataset.csv
            ○ price_history.csv
            ○ technical_data.csv

The user should be able to visually understand that files belong to systems rather than seeing an arbitrary collection of nodes.

---

# 3. Two Spatial Modes

Planet View needs to distinguish between two fundamentally different representations of knowledge.

## 3.1 Structure Mode

Structure Mode represents filesystem truth.

Question answered:

> Where does my knowledge physically live?

The layout is derived primarily from:

- directory hierarchy,
- parent-child relationships,
- file membership,
- filesystem structure.

Example:

Equity Research/
│
├── Annual Reports
│   ├── 2021.pdf
│   ├── 2022.pdf
│   ├── 2023.pdf
│   └── 2024.pdf
│
├── Additional Data
│   ├── 1998.pdf
│   ├── 2007.pdf
│   └── 2010.pdf
│
├── Progress
│   ├── 00_progress.md
│   └── 01_researchframework.md
│
└── TSMC Python
    ├── Data
    │   ├── gld_price_history.csv
    │   ├── icfRev_data.csv
    │   ├── tsm_annual_eps.csv
    │   ├── tsm_master_dataset.csv
    │   ├── tsm_price_history.csv
    │   ├── tsm_technical_ind.csv
    │   └── voo_price_history.csv
    │
    └── journal.md

Planet View should preserve this structural truth.

---

## 3.2 Knowledge Station Mode

Knowledge Station Mode represents user-defined semantic organization.

Question answered:

> What knowledge belongs together in the context I am currently exploring?

The filesystem does NOT change.

Instead, Planet View creates a temporary spatial projection based on Knowledge Stations.

Example:

COIN Research.md
[crypto, equity, nasdaq]

BTC Research.md
[crypto, btc]

MSTR Research.md
[crypto, equity, btc]

Liquidity.md
[btc, macro]

When the user activates:

[crypto]

Planet View should reorganize relevant objects around the active knowledge context.

Filesystem distance becomes less important.

Station relationship becomes more important.

Structure Mode:

★ Equity Research
      |
      ○ COIN

                        ★ Crypto
                            |
                            ○ BTC

Knowledge Station Mode:

             CRYPTO

        ○ COIN

             ○ BTC

        ○ MSTR

The transition changes the spatial interpretation of the same underlying knowledge objects.

---

# 4. Planet View Should Not Behave Like a Generic Force Graph

A generic force-directed graph allows nodes to freely determine their final position through attraction and repulsion.

This can produce technically valid graphs while creating poor hierarchy and weak spatial meaning.

Typical problems include:

- children appearing excessively far from parents,
- directories having unclear territory,
- unrelated systems overlapping,
- large directories consuming unpredictable space,
- excessive empty space,
- unstable layouts,
- graph structures that look mechanical rather than orbital,
- Station filtering producing scattered points rather than meaningful systems.

Planet View should instead use constrained spatial behavior.

The desired principle is:

Hierarchy determines the approximate position.

Physics makes the layout feel organic.

Not:

Physics determines the hierarchy.

---

# 5. Hierarchical Orbital Layout

In Structure Mode, directories should behave as gravitational centers.

Files should remain spatially associated with their parent directories.

Conceptually:

              ○
        ○           ○

    ○       ★         ○
          DIRECTORY

        ○           ○
              ○

The exact layout does not need to create perfect circles.

Perfect geometry may feel artificial.

Instead, objects should occupy a recognizable orbital territory around their structural parent.

Hierarchy:

Vault
  ↓
Directory
  ↓
Subdirectory
  ↓
File

should become:

Global System
  ↓
Local System
  ↓
Secondary System
  ↓
Orbiting Objects

---

# 6. System Territory

Each directory should receive a spatial territory.

The territory represents the amount of knowledge contained by the directory.

A directory containing two files should require less visual space than a directory containing twenty files.

Example:

Small Directory:

      ○
    ★
       ○

Large Directory:

          ○     ○

      ○           ○

   ○        ★        ○

      ○           ○

          ○     ○

The layout engine may calculate system radius using child count or another deterministic measure.

A possible conceptual relationship:

system radius
    =
base radius
    +
function(number of children)

A sublinear relationship may be preferable so that very large directories do not consume excessive space.

For example:

R = base + k√n

where:

R = approximate system radius
n = number of child objects
k = spacing factor

This formula is illustrative rather than mandatory.

The important behavior is:

More knowledge requires more territory.

---

# 7. Constrained Physics

Nodes should not be completely static because slight organic relaxation helps maintain the spatial/universe aesthetic.

However, physics should operate within constraints.

Each node may conceptually contain:

targetPosition
actualPosition

The layout engine calculates:

Knowledge Structure
        ↓
Ideal Spatial Layout
        ↓
Target Position

Physics then calculates:

Current Position
        ↓
Attraction toward Target
+
Collision Avoidance
+
Limited Repulsion
+
Damping
        ↓
Stable Actual Position

The node may move around its ideal location but should not escape its structural territory.

This prevents:

Parent
│
│
│
│
│
│
│
└──────────────── File

when the file logically belongs close to the parent.

---

# 8. Spatial Stability

Planet View should prioritize spatial memory.

Users should gradually learn where knowledge exists.

If a particular system appears in one region of the universe, it should not randomly move to a completely different region every time the application opens or the layout recalculates.

Avoid continuous large-scale orbital movement.

Recommended behavior:

Layout Change
    ↓
Smooth Transition
    ↓
Physics Relaxation
    ↓
Stable Position

After settling, objects should remain mostly stationary.

Subtle effects are acceptable:

- glow,
- pulse,
- small particles,
- atmospheric movement,
- very small idle motion.

But major object coordinates should remain stable.

The goal is:

> The universe feels alive without destroying spatial memory.

---

# 9. Knowledge Station Spatial Reconstruction

Knowledge Station Mode should not simply hide non-matching nodes while preserving the original filesystem layout.

This would make Station Mode behave like a visual filter.

Instead:

Station Selection
        ↓
Determine Matching Objects
        ↓
Construct Temporary Knowledge Topology
        ↓
Calculate Knowledge Relationships
        ↓
Generate New Spatial Projection
        ↓
Animate Transition
        ↓
Station View

The user should feel that the universe has reorganized around the selected context.

---

# 10. Single Station as Gravitational Center

When one Station is active, it may conceptually become the central gravitational context.

Example:

Station:

[Annual Report]

Matching objects:

2021 Annual Report
2022 Annual Report
2023 Annual Report
2024 Annual Report
2025 Annual Report

Instead of:

○


                  ○

        ○


                           ○

the desired mental model is:

             ○ 2021

      ○ 2022       ○ 2023

          ANNUAL REPORT

      ○ 2024       ○ 2025

The Station does not necessarily need to exist as a literal physical node.

It may be represented through:

- central gravity,
- system title,
- glow,
- orbit region,
- cluster boundary,
- visual center.

The important concept is that the selected Station defines the current knowledge system.

---

# 11. Multi-Station Spatial Behavior

Multiple active Stations should create multiple semantic gravitational forces.

Example:

[crypto]
[equity]

Conceptually:

       CRYPTO ★


          ○ BTC

             ○ COIN

                  ○ MSTR


                       ★ EQUITY

Objects belonging only to `crypto` should remain closer to the Crypto region.

Objects belonging only to `equity` should remain closer to the Equity region.

Objects belonging to both:

COIN.md
[crypto, equity]

should naturally occupy an intersection area.

Conceptually:

CRYPTO ★

       ↘

        ○ COIN

       ↗

EQUITY ★

This allows spatial position to communicate semantic overlap.

---

# 12. Station Similarity

Station Mode may use deterministic Station similarity to determine spatial proximity.

Example:

COIN:
[crypto, equity, nasdaq]

MSTR:
[crypto, equity, btc]

BTC:
[crypto, btc]

Oil:
[commodity, energy]

COIN and MSTR share:

crypto
equity

Therefore they should be relatively close.

COIN and BTC share:

crypto

They are related, but less strongly.

COIN and Oil share nothing.

They should remain distant or outside the primary active system.

A possible similarity metric is Jaccard similarity:

Similarity(A,B)
=
|Stations(A) ∩ Stations(B)|
/
|Stations(A) ∪ Stations(B)|

This is only one possible implementation.

The important requirement is:

Knowledge distance should remain deterministic and explainable from user-defined Stations.

No AI-generated semantic relationship is required for this stage.

---

# 13. Filesystem Gravity Inside Station Mode

Station Mode should not completely destroy structural information.

Semantic relationship should determine major clustering.

Filesystem hierarchy may still influence local arrangement.

Conceptually:

Station Gravity
    =
Strong

Filesystem Parent Gravity
    =
Medium

Global Centering
    =
Weak

Collision
    =
Hard Constraint

Example:

COIN/
├── Thesis.md [crypto]
├── Financial.csv [equity]
└── Notes.md [crypto]

BTC/
├── Thesis.md [crypto]
└── Cycle.md [crypto]

Inside Crypto Station, the broad system may appear:

              CRYPTO


      COIN FAMILY

       ○     ○
          ★


                         BTC FAMILY

                            ★
                         ○     ○

The COIN and BTC systems become semantically close while their internal family relationships remain visible.

This creates two simultaneous layers of meaning:

Global position:
semantic relationship.

Local position:
filesystem relationship.

---

# 14. Parent Directory Behavior in Station Mode

A matching file does not automatically make its parent directory a Station member.

Example:

Equity Research/
    COIN/
        Thesis.md [crypto]

`Thesis.md` is a direct Crypto Station member.

`COIN/` is not necessarily a Crypto Station member.

However, the parent directory may still be useful for structural orientation.

Planet View may therefore distinguish:

Direct Station Member
    ↓
Primary visual emphasis

Structural Parent
    ↓
Secondary / dimmed emphasis

Unrelated Object
    ↓
Hidden or heavily de-emphasized

This prevents the user from losing filesystem orientation while maintaining semantic accuracy.

---

# 15. Semantic Zoom

Zoom in Planet View should not only change visual scale.

Zoom should change the level of information exposed to the user.

This is called semantic zoom.

Traditional zoom:

same information
      ↓
larger / smaller

Semantic zoom:

different scale
      ↓
different abstraction level

The purpose is to make Planet View usable across both small and very large knowledge banks.

---

# 16. Semantic Zoom Mental Model

Planet View should conceptually move through:

UNIVERSE
    ↓
SYSTEM
    ↓
DIRECTORY
    ↓
KNOWLEDGE OBJECT
    ↓
OBJECT DETAIL

as the user zooms inward.

Or:

Zoom Out
    ↑

Universe
Systems
Directories
Files
Object Details

    ↓
Zoom In

The transition should feel continuous rather than behaving like separate pages.

---

# 17. Semantic Zoom Level 1 — System View

At very low zoom levels, individual files become less useful.

The interface should emphasize major systems.

Example:

                   ★ Additional Data


      ★ Annual Reports


                ☀ EQUITY RESEARCH


       ★ Progress


                           ★ TSMC Python

At this level:

- file labels may disappear,
- small files may collapse visually,
- directories become dominant,
- major system names remain visible,
- local metadata is hidden,
- cluster/system boundaries become easier to understand.

Primary question:

> What major knowledge systems exist in my vault?

This level should support high-level orientation.

---

# 18. Semantic Zoom Level 2 — Orbital / Directory View

As the user zooms closer, files begin to become visible as orbital objects.

Example:

                  ★ Additional Data
               ○ ○ ○ ○ ○ ○


      ★ Annual Reports
       ○ ○ ○ ○ ○


                          ★ TSMC Python
                       ○ ○ ○ ○ ○ ○

            ★ Progress
              ○   ○

At this level:

- directories remain visually dominant,
- files appear,
- most file labels may remain hidden,
- file density becomes visible,
- structural relationships become clearer,
- system territory becomes apparent.

Primary questions:

> How large is this system?

> Where are the knowledge objects concentrated?

> Which directories contain the most knowledge?

---

# 19. Semantic Zoom Level 3 — Knowledge Object View

At normal or closer zoom levels, individual knowledge objects become identifiable.

Example:

★ TSMC Python

    ★ Data

        ○ gld_price_history.csv
        ○ icfRev_data.csv
        ○ tsm_annual_eps.csv
        ○ tsm_master_dataset.csv
        ○ tsm_price_history.csv
        ○ tsm_technical_ind.csv
        ○ voo_price_history.csv

    ○ journal.md

At this level:

- file names become visible,
- file type may become visible,
- objects become fully selectable,
- Station membership can be inspected,
- context state can be displayed,
- file interaction becomes the primary experience.

Possible interactions:

Select
Open
Inspect
Assign Station
Add to Context
Remove from Context

Primary question:

> What exactly exists inside this knowledge system?

---

# 20. Semantic Zoom Level 4 — Object Detail View

At very close zoom levels, a knowledge object may expose additional metadata without forcing the user to leave Planet View.

Example:

┌───────────────────────────────┐
│ tsm_master_dataset.csv        │
│                               │
│ CSV                           │
│ 4.8 MB                        │
│ 8,241 rows                    │
│ 17 columns                    │
│                               │
│ STATIONS                      │
│ [tsmc] [equity] [data]        │
│                               │
│ CONTEXT                       │
│ Not Active                    │
└───────────────────────────────┘

Possible information:

- filename,
- file type,
- size,
- modified date,
- Station membership,
- context status,
- word count,
- rows/columns for structured data,
- other lightweight metadata.

This level should NOT become a replacement for Workspace.

Planet View provides orientation and lightweight inspection.

Workspace remains responsible for full content interaction.

---

# 21. Semantic Zoom Should Be Continuous

Semantic Zoom should avoid abrupt mode switching.

Avoid:

59% zoom
    ↓
Level A

60% zoom
    ↓
Entire interface instantly changes

Instead use progressive transitions.

Conceptually:

0%          30%          60%          100%

SYSTEM  →   ORBIT   →    OBJECT   →    DETAIL

Possible behavior:

0–30%
Major systems emphasized.

20–45%
File nodes gradually become visible.

40–65%
Important labels begin appearing.

60–80%
All relevant file labels become readable.

80–100%
Metadata and detailed interaction become available.

These ranges are illustrative.

The exact thresholds should be tuned based on real use.

---

# 22. Semantic Zoom in Knowledge Station Mode

Semantic Zoom should work in both Structure Mode and Station Mode.

However, the abstraction changes.

Structure Mode zoom hierarchy:

Vault
    ↓
Directory
    ↓
Subdirectory
    ↓
File
    ↓
Metadata

Station Mode zoom hierarchy:

Station Context
    ↓
Semantic Cluster
    ↓
Knowledge Family
    ↓
Knowledge Object
    ↓
Metadata

Example:

Active Station:

[Annual Report]

Zoom Out:

            ANNUAL REPORT

        ★ TSMC
                  ★ PGEO

             ★ INDF

Zoom Medium:

            ANNUAL REPORT


    ★ TSMC

  ○ 2021
  ○ 2022
  ○ 2023
  ○ 2024
  ○ 2025


                     ★ PGEO

                  ○ 2023
                  ○ 2024
                  ○ 2025

Zoom In:

★ TSMC

○ 2023_Annual_Report_E.pdf
○ 2024_Annual_Report_E.pdf
○ 2025_TSMC_Annual_Report.pdf

The same knowledge universe remains present.

Only its level of abstraction changes.

---

# 23. Semantic Zoom and Large Vault Scalability

Semantic Zoom is not only an aesthetic feature.

It is part of Planet View scalability.

A vault containing:

60 objects

may display most objects simultaneously.

A vault containing:

5,000 objects

should NOT attempt to render 5,000 equally important labeled planets.

Instead:

5,000 objects
      ↓
30 major systems
      ↓
selected system
      ↓
200 local objects
      ↓
selected directory
      ↓
30 visible files

Semantic Zoom allows the user to progressively reveal complexity.

This is necessary if Planet View is intended to remain useful as Orbistry grows.

---

# 24. Visual Hierarchy

Visual size and emphasis should communicate object importance.

Possible hierarchy:

Vault Root / Active Station
████████

Major Directory / Semantic Center
██████

Subdirectory
████

File
██

Structural Edge
─

Semantic Proximity
···

Context State
highlight / ring / glow

The exact sizes and colors may change.

The principle should remain:

The user should immediately distinguish systems from individual objects.

---

# 25. Interaction State Must Remain Separate From Spatial State

Planet View contains several independent states.

NORMAL

The object exists.

STATION MATCH

The object matches the active Station projection.

SELECTED

The user is currently interacting with the object.

ACTIVE CONTEXT

The object has been approved for AI context.

STRUCTURAL PARENT

The object is shown for hierarchy but is not a direct Station member.

These states may overlap.

Example:

A file may simultaneously be:

Station Match
+
Selected
+
Active Context

Therefore these should not be represented internally as one generic `active` state.

---

# 26. Context Visualization

Planet View should eventually make AI context spatially inspectable.

Example:

Normal file:

○ Thesis.md

Selected file:

◉ Thesis.md

Active context:

◎ Thesis.md

The exact visual representation may change.

However, the user should be able to understand:

> Which parts of my knowledge universe does the model currently know?

This connects Planet View directly with Orbistry's context-management thesis.

---

# 27. Transition Between Structure and Station Mode

Switching from Structure Mode into Station Mode should feel like the knowledge universe is reorganizing itself.

Avoid:

Structure View
    ↓
instant disappearance
    ↓
unrelated new graph

Prefer:

Structure View
    ↓
Station activated
    ↓
matching nodes gain emphasis
    ↓
non-matching nodes fade
    ↓
matching nodes move toward semantic targets
    ↓
new system settles
    ↓
Station View

This helps preserve spatial continuity.

The user should visually understand:

> These are the same knowledge objects being reorganized according to another context.

---

# 28. Animation Philosophy

Animation should communicate state changes rather than exist purely as decoration.

Useful animation:

- transition into Station Mode,
- system expansion,
- system collapse,
- zoom-level transition,
- adding an object to context,
- focusing a directory,
- highlighting sources after AI reasoning.

Avoid excessive:

- constant orbital rotation,
- large random node movement,
- unnecessary particle density,
- movement that makes clicking difficult,
- movement that destroys spatial memory.

The desired experience is:

Calm
Spatial
Responsive
Alive
Stable

not:

Chaotic
Game-like
Constantly moving

---

# 29. Planet View Layout Architecture

Planet View should conceptually separate:

1. Knowledge topology
2. Layout calculation
3. Physics
4. Rendering

Architecture:

KNOWLEDGE OBJECTS
        │
        ↓
KNOWLEDGE TOPOLOGY
        │
        ├─────────────────────────┐
        │                         │
        ↓                         ↓
STRUCTURE MODE              STATION MODE
        │                         │
Filesystem Hierarchy       Station Membership
        │                         +
        │                  Station Similarity
        │                         │
        ↓                         ↓
ORBITAL LAYOUT             SEMANTIC CLUSTERING
        │                         │
        └────────────┬────────────┘
                     ↓
                TARGET POSITIONS
                     ↓
             CONSTRAINED PHYSICS
                     │
         ┌───────────┼───────────┐
         │           │           │
    Attraction   Collision    Damping
         │           │           │
         └───────────┼───────────┘
                     ↓
              STABLE POSITIONS
                     ↓
               VISUAL RENDERER
                     ↓
                 PLANET VIEW

The renderer should not be responsible for deciding knowledge relationships.

The layout engine should not be responsible for determining Station meaning.

Knowledge architecture should remain separated from visual rendering.

---

# 30. Layout Engine Input / Output Principle

The layout engine should conceptually receive structured knowledge data.

Example input:

Knowledge Objects
Filesystem Relationships
Station Membership
Active Stations
Current View Mode
Current Zoom Level

and return something conceptually similar to:

Node Position
Node Territory
Node Importance
Cluster Membership
Visibility Level
Label Visibility
Relationship Visibility

The exact schema can be decided during implementation.

The goal is modularity.

This allows future experimentation with:

- different orbital algorithms,
- different clustering algorithms,
- different physics engines,
- 2D vs 3D rendering,
- performance optimization,

without rewriting the underlying knowledge architecture.

---

# 31. Performance Principle

Planet View should avoid treating every knowledge object as equally expensive.

Future large vaults may contain thousands of objects.

Possible strategies include:

- semantic zoom,
- label culling,
- cluster collapsing,
- viewport-based rendering,
- level-of-detail rendering,
- reduced physics calculations for distant nodes,
- cached layout positions,
- selective animation.

Performance optimization should preserve spatial meaning rather than simply removing random nodes.

---

# 32. Spatial Memory Principle

A major long-term goal of Planet View is allowing the user to develop familiarity with their knowledge universe.

The user should eventually recognize:

> My equity research is around here.

> My Python/data work is around there.

> My macro research is connected to these systems.

> These objects become central when I activate the Crypto Station.

This means layout consistency has product value.

Planet View is not merely presenting information.

It is helping the user develop a mental map of their knowledge.

---

# 33. Relationship With Explorer

Explorer and Planet View represent the same knowledge bank using different mental models.

Explorer:

hierarchical
precise
filesystem-oriented
efficient for direct navigation

Planet View:

spatial
contextual
relationship-oriented
efficient for understanding and exploration

They should not compete.

They should complement each other.

Conceptually:

                 KNOWLEDGE BANK

                 /           \

           EXPLORER       PLANET VIEW

           hierarchy       spatiality

           precision       context

           navigation      understanding

Selecting an object in one interface should eventually be reflected in the other where appropriate.

---

# 34. Relationship With Knowledge Station

Knowledge Station provides the semantic control layer.

Planet View provides its spatial representation.

Knowledge Station:

> What conceptual labels have I assigned?

Planet View:

> What does my knowledge universe look like under those labels?

Therefore:

Knowledge Station
      ↓
Semantic Projection
      ↓
Planet View Reconstruction

Station should not merely filter a sidebar list.

Its activation should have meaningful spatial consequences.

---

# 35. Relationship With AI Context

Planet View should eventually act as a visual interface for context construction.

Knowledge Station discovers relevant knowledge.

Planet View exposes that knowledge spatially.

The user selects objects.

Context Manager records approved objects.

The model receives only approved context.

Flow:

STATION
    ↓
KNOWLEDGE PROJECTION
    ↓
PLANET VIEW
    ↓
USER SELECTION
    ↓
ACTIVE CONTEXT
    ↓
MODEL

Therefore Planet View sits between:

knowledge organization

and

AI reasoning.

This is one of its primary strategic roles inside Orbistry.

---

# 36. What Planet View Is Not

Planet View should NOT become:

- a generic node graph,
- a decorative space animation,
- a filesystem replacement,
- an automatic AI knowledge graph,
- a visualization where every relationship is inferred by a model,
- an interface where node position has no meaning,
- a constantly moving simulation,
- a dense graph containing every label at every zoom level.

Planet View should remain:

human-readable,
human-controlled,
spatially meaningful,
structurally grounded,
context-aware.

---

# 37. Amadeus Priority

Not every idea in this document needs to be implemented immediately.

Recommended priority:

## Priority 1 — Orbital Hierarchy

Improve default filesystem Planet View.

Goal:

Directories become recognizable systems.

Files remain close to parents.

Large directories receive appropriate territory.

Hierarchy becomes visually readable.

---

## Priority 2 — Constrained Physics

Prevent excessive node drift.

Goal:

Organic appearance without losing hierarchy.

---

## Priority 3 — Station Spatial Reconstruction

Station filtering should generate a meaningful new knowledge system rather than a scattered filtered graph.

Goal:

Selected Station becomes a spatial context.

---

## Priority 4 — Basic Semantic Zoom

Initial implementation only needs approximately three behaviors:

### Far Zoom

Emphasize systems.

Hide most file labels.

Reduce visual noise.

### Normal Zoom

Show directories and file planets.

Maintain hierarchy.

### Near Zoom

Show file names.

Expose interaction states and lightweight details.

Full metadata expansion can be added later.

---

# 38. Future Expansion

Potential future Planet View capabilities may include:

- richer semantic zoom,
- saved spatial views,
- context history,
- reasoning source highlighting,
- AI-assisted Station suggestions,
- semantic relationships,
- graph traversal,
- temporal knowledge views,
- research-state visualization,
- multiple knowledge universes,
- 3D spatial representation.

These should not compromise the human-controlled foundation.

---

# 39. Experience Success Criteria

Planet View is successful when the user can open it and quickly understand:

1. What major knowledge systems exist.
2. Which files belong to which systems.
3. Which systems contain more knowledge.
4. Where a particular file belongs.
5. How Knowledge Stations reorganize the same knowledge.
6. Which objects become related under a selected Station.
7. Which objects are currently selected.
8. Which objects are currently available to the AI.
9. What level of knowledge detail is appropriate at the current zoom.
10. How to move from broad knowledge exploration into specific files without losing orientation.

The interface should remain understandable as the vault grows.

---

# 40. Final Product Principle

Planet View should behave as a spatial projection of the user's knowledge state.

Filesystem hierarchy answers:

> Where does this knowledge live?

Knowledge Station answers:

> What knowledge belongs together?

Spatial layout answers:

> How is that knowledge organized relative to everything else?

Semantic Zoom answers:

> At what level of abstraction am I looking at my knowledge?

Effective Brain Scope answers:

> What does the AI know right now?

Together:

FILESYSTEM
      +
KNOWLEDGE STATION
      +
SPATIAL LAYOUT
      +
SEMANTIC ZOOM
      +
BRAIN SCOPE
      ↓
PLANET VIEW

The desired result is not simply a better graph.

The desired result is a navigable knowledge universe where structure, context, scale, and AI knowledge are visually understandable by the user.

---

# 41. Planet View as the Context Brain

Planet View defines the knowledge a future model is allowed to inspect. In the universal view, all supported vault files are available. Activating Stations creates named context systems and narrows availability to their `ANY` or `ALL` matches. A non-empty Active Context has highest precedence and narrows availability to the explicitly approved files.

Availability is not prompt injection. The model receives a source manifest and may read only authorized objects through the knowledge layer. Station hubs and their membership lines therefore communicate real scope boundaries rather than decorative relationships.
