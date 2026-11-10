# Orbistry — Human-Controlled Context Management & Knowledge Station

## Objective

Build a **human-controlled context management system** for Orbistry where users explicitly organize knowledge using manual labels called **Stations**.

The system should connect three existing parts of Orbistry:

```text
Vault / Knowledge Bank
        ↓
Knowledge Station
        ↓
Planet View
        ↓
Context Selection
        ↓
AI Model
```

The core principle is:

> The user determines how knowledge is categorized and what knowledge is given to the AI model.

The system should NOT automatically infer semantic relationships between files in this stage.

The existing filesystem remains the source of structural truth.

Knowledge Station creates an additional user-controlled semantic layer above the filesystem.

---

# 1. Core Concept — Station

A **Station** is a manually assigned semantic label that can be attached to a file or directory.

Example:

```text
COIN_Equity_Research.md

Stations:
- crypto
- equity
- nasdaq
```

Another file:

```text
BTC_Research.md

Stations:
- crypto
- btc
```

Although these files may exist in completely different directories, they share the `crypto` Station.

Example filesystem:

```text
Vault
│
├── Equity Research
│   └── COIN
│       └── COIN_Equity_Research.md
│
└── Crypto Research
    └── BTC
        └── BTC_Research.md
```

Filesystem relationship:

```text
Equity Research → COIN → COIN Research

Crypto Research → BTC → BTC Research
```

Knowledge relationship:

```text
COIN Research
      │
   [crypto]
      │
BTC Research
```

The Station system must NOT modify the physical filesystem.

---

# 2. Station Assignment

Users must be able to manually assign one or multiple Stations to:

* files
* directories

Example:

```text
COIN_Research.md

[crypto]
[equity]
[nasdaq]
```

Station assignment is explicit.

A file does NOT automatically receive a Station because its parent directory has that Station.

Likewise, a directory does NOT automatically receive Stations belonging to its children.

Example:

```text
COIN/
    COIN_Research.md [crypto]
```

This does NOT imply:

```text
COIN/ [crypto]
```

The directory and file are separate knowledge objects.

Automatic inheritance is outside the initial scope.

---

# 3. Station Registry

Stations should use a centralized registry to avoid uncontrolled duplicate labels.

Example:

```text
KNOWLEDGE STATIONS

crypto        17 objects
equity        32 objects
btc            9 objects
macro         21 objects
energy        14 objects
valuation      8 objects
```

When assigning a Station, users should be able to:

```text
Search existing Station
Select existing Station
Create new Station
Remove assigned Station
```

Example interaction:

```text
ADD STATION

Search:
[ cryp... ]

Existing:
☐ crypto

+ Create new Station
```

Station names should be normalized enough to prevent accidental duplicates such as:

```text
crypto
Crypto
CRYPTO
```

from becoming three separate Stations unintentionally.

---

# 4. Planet View Default State

Planet View currently represents the filesystem.

This behavior must remain available.

Default Planet View should continue to answer:

> Where is my knowledge stored?

Example:

```text
★ Equity Research
      │
      ★ COIN
        │
        ○ COIN Research


★ Crypto Research
      │
      ★ BTC
        │
        ○ BTC Research
```

Directory/file relationships remain based on the actual filesystem.

Knowledge Station must NOT replace this representation.

---

# 5. Knowledge Station View

Planet View should gain a contextual mode driven by selected Stations.

Example Station selector:

```text
KNOWLEDGE STATION

☑ crypto
☐ equity
☐ btc
☐ macro
☐ nasdaq
```

Selecting `crypto` should create a new contextual projection of Planet View.

Objects carrying the selected Station become the primary objects of the visualization.

Example:

```text
COIN Research [crypto]

BTC Research [crypto]

MSTR Research [crypto]
```

These objects may belong to distant filesystem locations.

Inside the Station projection they should visually become more closely related.

Conceptually:

```text
DEFAULT PLANET VIEW

★ Equity
    │
    ○ COIN



                         ★ Crypto
                             │
                             ○ BTC
```

becomes:

```text
CRYPTO STATION

       ○ COIN

          ○ BTC

       ○ MSTR
```

The underlying filesystem has NOT changed.

Only its current visual/knowledge projection has changed.

---

# 6. Filesystem Distance vs Knowledge Distance

Orbistry should conceptually distinguish two types of spatial relationships.

## Filesystem Distance

Determined by directory hierarchy.

```text
Vault
 ↓
Research
 ↓
Equity
 ↓
COIN
 ↓
Thesis.md
```

This determines the normal Planet View.

## Knowledge Distance

Determined by shared Stations.

Example:

```text
COIN Thesis:
[crypto, equity, nasdaq]

MSTR Thesis:
[crypto, equity, btc]

BTC Thesis:
[crypto, btc]

Oil Research:
[commodity, energy]
```

COIN and MSTR should be relatively close because they share:

```text
crypto
equity
```

BTC should also belong to the same wider knowledge system because it shares:

```text
crypto
```

Oil Research should remain distant because it shares no active Station relationship.

The first implementation does NOT require machine learning or embeddings.

Knowledge distance must remain deterministic and derived from user-created Stations.

---

# 7. Station Similarity

For the first implementation, object similarity can be derived from Station overlap.

Conceptually:

```text
more shared Stations
        ↓
stronger knowledge similarity
        ↓
closer visual positioning
```

A possible deterministic similarity metric is Jaccard similarity:

```text
similarity(A, B)

=

shared stations
───────────────
unique combined stations
```

Example:

```text
COIN

[crypto, equity, nasdaq]


MSTR

[crypto, equity, btc]
```

Intersection:

```text
crypto
equity
```

= 2

Union:

```text
crypto
equity
nasdaq
btc
```

= 4

Therefore:

```text
similarity = 2 / 4 = 0.5
```

The exact visualization algorithm may change later.

The important architectural requirement is:

> Station similarity should be represented separately from filesystem hierarchy.

---

# 8. Parent Directory Behavior

A file matching a Station does NOT mean its parent directory belongs to that Station.

Example:

```text
Equity Research/
    COIN/
        Thesis.md [crypto]
```

When viewing the `crypto` Station:

```text
Thesis.md
```

is a direct Station member.

But:

```text
COIN/
Equity Research/
```

are not necessarily Station members.

The visualization may retain parent directories as structural references if necessary, but they should visually differ from direct Station members.

Possible treatment:

```text
DIRECT STATION MEMBER
bright / normal emphasis

STRUCTURAL PARENT
dimmed / peripheral

UNRELATED OBJECT
hidden or strongly de-emphasized
```

The exact visual treatment can be refined later.

---

# 9. Multi-Station Filtering

Users should be able to activate multiple Stations.

Example:

```text
☑ crypto
☑ equity
☐ macro
☐ btc
```

The system should support at least two matching modes.

## ANY

```text
crypto OR equity
```

Show objects containing either Station.

## ALL

```text
crypto AND equity
```

Show only objects containing both Stations.

Example:

| Object              | crypto | equity |
| ------------------- | ------ | ------ |
| BTC Thesis          | yes    | no     |
| COIN Thesis         | yes    | yes    |
| MSTR Thesis         | yes    | yes    |
| Coinbase Financials | no     | yes    |

With:

```text
ALL
crypto + equity
```

the primary results are:

```text
COIN Thesis
MSTR Thesis
```

---

# 10. Knowledge Chaining

Knowledge chaining in this version should emerge primarily from overlapping user-defined Stations rather than manually drawn graph edges.

Example:

```text
COIN Research
[crypto, equity, nasdaq]

BTC Research
[crypto, btc]

Liquidity Research
[btc, macro]

Fed Research
[macro, rates]
```

This creates an implicit human-authored chain:

```text
COIN Research
      │
    crypto
      │
BTC Research
      │
     btc
      │
Liquidity Research
      │
    macro
      │
Fed Research
```

The relationships remain deterministic because every Station was manually assigned by the user.

AI-generated semantic relationships are NOT required for this stage.

Manual edge drawing is also NOT required for the initial implementation.

---

# 11. Station to AI Context

Knowledge Station should also act as an entry point into AI context construction.

Example:

```text
ACTIVE STATIONS

crypto
equity

MATCHED

12 objects
4 directories
8 files

Estimated Context
87,400 tokens
```

Users should NOT be forced to send every matching object to the model.

Station selection performs knowledge discovery.

Context selection determines what the model actually receives.

Therefore:

```text
STATION MATCH
      ↓
Candidate Knowledge Objects
      ↓
User Review / Selection
      ↓
Active Context
      ↓
Model
```

Possible interaction:

```text
CRYPTO + EQUITY

☑ COIN Thesis
☑ MSTR Thesis
☑ COIN Financials
☐ Old Crypto Notes
☐ Archived Research

[ ADD SELECTED TO CONTEXT ]

[ ADD ALL TO CONTEXT ]
```

Human control must remain the default behavior.

---

# 12. Active Context

The application needs a clear distinction between:

```text
Station Membership
```

and:

```text
Active AI Context
```

Station membership means:

> This knowledge belongs to a user-defined conceptual category.

Active Context means:

> The AI model is allowed to use this object for the current interaction.

These states must NOT be treated as identical.

Example:

```text
COIN Thesis

Stations:
crypto
equity
nasdaq

Context Status:
ACTIVE
```

versus:

```text
BTC Notes

Stations:
crypto
btc

Context Status:
NOT ACTIVE
```

Both belong to the Crypto Station, but only one may currently be included in AI context.

---

# 13. Context Management

Users should be able to:

```text
Add object to context
Remove object from context
Add selected Station results to context
Review active context
Clear active context
```

Context UI should expose basic information such as:

```text
ACTIVE CONTEXT

4 objects

COIN Thesis.md
BTC Research.md
MSTR Thesis.md
Macro Liquidity.md

Estimated Context
31.8K tokens

Model
[current selected model]
```

The exact token estimation implementation may be approximate initially.

---

# 14. Context and Planet View State

The application must distinguish at least these states:

```text
NORMAL
Object exists in knowledge bank.

STATION MATCH
Object matches currently active Station filter.

SELECTED
Object is currently selected by the user.

ACTIVE CONTEXT
Object has been explicitly added to AI context.
```

These states may overlap.

Example:

A file can simultaneously be:

```text
Station Match
+
Selected
+
Active Context
```

The underlying state architecture should therefore avoid treating them as one boolean selection state.

---

# 15. Source Trace

After an AI response, Orbistry should retain enough context information to show which knowledge objects were provided for that interaction.

Minimum requirement:

```text
RESPONSE SOURCES

COIN Thesis.md
BTC Research.md
MSTR Thesis.md
```

This first implementation does NOT require sophisticated sentence-level citation generation.

The minimum goal is provenance:

> Which user-controlled knowledge objects were part of the context used to generate this response?

---

# 16. Explicitly Out of Scope

Do NOT implement the following unless required by existing architecture:

```text
AI-generated Stations
Automatic semantic tagging
Automatic relationship inference
Vector embeddings
Vector database
Automatic knowledge graph
AI-generated graph edges
Relationship confidence scores
supports / contradicts / depends_on relationship types
Automatic directory Station inheritance
Agentic context retrieval
Complex RAG pipelines
Persistent AI memory
Automatic context expansion
```

These may become future layers.

The current goal is to prove the human-controlled knowledge workflow first.

---

# 17. Core User Flow

The primary workflow should be:

```text
OPEN VAULT
     ↓
FILESYSTEM INDEX
     ↓
PLANET VIEW
     ↓
ASSIGN STATIONS
     ↓
SELECT STATION(S)
     ↓
KNOWLEDGE PROJECTION
     ↓
REVIEW MATCHED OBJECTS
     ↓
SELECT OBJECTS
     ↓
ADD TO CONTEXT
     ↓
ASK MODEL
     ↓
VIEW RESPONSE SOURCES
```

---

# 18. Architecture Principle

Maintain clear separation between:

```text
FILESYSTEM
Where knowledge physically exists.

STATION
How the user conceptually categorizes knowledge.

PLANET VIEW
How structural or contextual knowledge is visualized.

CONTEXT
What knowledge is currently supplied to the model.

MODEL
The reasoning/generation engine.
```

Conceptually:

```text
                 VAULT
                   │
                   ↓
             FILE INDEX
                   │
                   ↓
          KNOWLEDGE OBJECTS
                   │
          ┌────────┴────────┐
          │                 │
     FILESYSTEM         STATIONS
          │                 │
          └────────┬────────┘
                   │
                   ↓
              PLANET VIEW
                   │
                   ↓
          CONTEXT SELECTION
                   │
                   ↓
            ACTIVE CONTEXT
                   │
                   ↓
                 MODEL
                   │
                   ↓
               RESPONSE
                   │
                   ↓
            SOURCE TRACE
```

---

# 19. Product Principle

Knowledge Station should not attempt to decide what knowledge means on behalf of the user.

The user defines semantic organization.

Orbistry provides the infrastructure to:

1. label knowledge,
2. retrieve knowledge through those labels,
3. spatially reorganize it,
4. construct AI context from it,
5. inspect what knowledge was supplied to the model.

The core concept is:

> **Filesystem determines where knowledge lives. Stations determine what knowledge belongs together. Context determines what the model knows right now.**

Planet View is the interface that makes these relationships spatially visible.

---

# Initial Success Criteria

The feature is successful when a user can:

1. Open an existing Vault without changing its filesystem.
2. Assign Stations manually to files/directories.
3. Select one or multiple Stations.
4. See Planet View reorganize around those Stations.
5. Observe related objects becoming spatially closer.
6. Distinguish direct Station members from structural parents.
7. Select relevant objects from the resulting knowledge projection.
8. Add those objects to AI context.
9. Inspect the active context before asking the model.
10. Ask the model using only the user-approved context.
11. Identify which knowledge objects were supplied as sources afterward.

If this complete loop works reliably, Human-Controlled Knowledge Station can be considered functionally proven before adding automatic semantic intelligence.

---

# Current Development Note — Manual Context Before Local Models

Context filtering and context management must remain manually controlled by the user at this stage.

The current workflow should allow users to:

1. create and assign Stations manually,
2. activate Station filters manually,
3. review the resulting knowledge projection,
4. select the exact files or directories they consider relevant,
5. explicitly add approved objects to Active Context,
6. remove or clear context manually.

Station filtering defines the model's available read scope when Active Context is empty; it does not inject every match into a prompt. A non-empty Active Context always narrows that scope to the explicitly approved files.

The current implementation is an important foundation, but additional work is still required in two areas:

## Virtual Sorting

Planet View's Station projection needs continued testing and refinement so spatial distance consistently communicates useful relationships without hiding structural truth or creating confusing layouts.

This includes improving:

* clustering within the same parent or filesystem branch,
* separation between distant parent branches,
* deterministic placement after filtering or rescanning,
* handling of structural parents and direct Station matches,
* clarity when using multiple Stations with `ANY` or `ALL`,
* transitions between filesystem and Station projections.

Virtual sorting remains deterministic and based only on the filesystem and manually authored Station metadata. It must not infer semantic meaning through AI.

## Knowledge Context-Building Experience

The application still needs real usage experience before the context workflow should be considered mature.

Further internal use should evaluate:

* whether Station filtering helps users discover the right candidates,
* whether directory expansion is understandable,
* whether Active Context remains visible and easy to revise,
* whether token estimates help users make decisions,
* whether missing or changed sources are handled clearly,
* whether users can understand exactly what a future model would receive,
* where manual context construction becomes slow, confusing, or repetitive.

These findings should guide context-management improvements before introducing automatic retrieval or model-driven organization.

## Planet View Prerequisite for Local-Model Integration

Planet View is not a decorative visualization. It is the primary interface for navigating knowledge relationships, applying human-authored Stations, discovering context candidates, and constructing explicit model context.

Therefore, Planet View and its context-management workflow should be established, exercised, and developed to their maximum practical usefulness before integrating a local model for data reading and analysis.

The required sequence is:

```text
Stable Vault and File Index
        ↓
Reliable Planet View
        ↓
Useful Manual Station Projection
        ↓
Understandable Active Context Workflow
        ↓
Model-Readable Context Package
        ↓
Local Model Reading and Analysis
```

A local model should initially consume only the effective Brain Scope prepared through this workflow. The default universe exposes supported vault files, active Stations narrow that availability to matching networks, and a non-empty Active Context narrows it again to explicitly approved files. Model integration must not be used to compensate for unresolved Planet View, virtual-sorting, or context-management problems.

The operating principle is:

> First maximize the human-controlled knowledge environment. Then allow a local model to read and analyze the context the human deliberately constructed.

## Brain-Ready Scope Milestone

Planet View is now the visible authority for model-readable knowledge. The effective scope is deterministic:

```text
Non-empty Active Context -> approved files only
Otherwise active Stations -> ANY/ALL Station matches
Otherwise -> all supported files in the vault
```

The scope is exposed as a manifest before content is read. A future provider adapter may read only sources authorized by the current opaque scope capability. Preparing a new scope invalidates the previous capability, and sources changed afterward require the scope to be prepared again.

Each active Station is represented by a named semantic hub. Hub-to-member lines express Station membership, and an object assigned to multiple active Stations connects to each corresponding hub. These hubs are temporary projection objects and never mutate filesystem or Station metadata.
