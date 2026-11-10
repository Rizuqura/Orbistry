# Current product goal - Context engineering experience

Updated 2026-09-10 from [Context Windows & Human-Controlled Context Engineering](./context-engineering-experience.md).

**Orbistry should make building, inspecting, refining and reusing AI context comfortable and easy inside the user's knowledge workspace.** Planet View and Knowledge Stations help the user discover and group knowledge; a persistent Context Window defines the working knowledge boundary for a conversation or research task. Replaceable models reason over the context Orbistry packages within that boundary.

The target loop is: discover knowledge → select objects → group into a Context Window → authorize knowledge → pin important sources → control the token budget → ask a model → inspect what was used → refine context → continue the conversation.

**User controls the knowledge boundary. Orbistry controls the packaging.** Selected, Authorized, Pinned and Used are distinct states. A Context Window is its own persistent, named, versioned object; it is not UI selection, a Station filter, chat history or a selected-files array. Its knowledge budget must be distinguished from the model's total token capacity and output allowance.

Immediate scope update: **M9-A delivers comfortable context controls before model consumption.** Users must be able to create, inspect, authorize, pin, budget and reuse windows without a configured model. M8 acceptance stays open but does not block this independent phase. **M9-B** later connects windows to chat and actual Used provenance. The full model-connected success criteria below apply to M9 as a whole, not to the first controls release.

Roadmap:

1. **M8 - Chat reliability:** accept the existing single-source conversation and recovery workflow.
2. **M9 - Context Windows + Station grouping:** implement explicit context construction, inspection, modification and reuse, including pinning, budgeting and per-run provenance.
3. **M9.5 - Semantic retrieval:** improve retrieval within the authorized boundary after manual context engineering is established.
4. **M10 - CSV / analytics tools.**
5. **M11 - Tool-using agent.**

M9 success means a user can create a named Context Window from Planet/Station discoveries, understand and revise its permissions and pins, see budget constraints before execution, inspect the sources actually used afterward, and reopen/refine the window without rebuilding it from scratch. Changes must preserve understandable conversation and source-version boundaries. These are acceptance targets, not delivered features.

Current implementation remains 0.0.4 with one approved Markdown source per chat. Context Windows are planned. The [current execution order in task.md](./task.md#current-execution-order) and [state.md](./state.md) distinguish planned work from verified capabilities. The original MVP below remains the broader requirements inventory; this update governs current priorities.

---

Orbistry V0.0.1 — Amadeus

MVP Goal State & Git Progress Target

Version: V0.0.1 — Amadeus
Purpose: Internal AI-native knowledge and data workspace
Product principle: AI models should be replaceable. Knowledge should be permanent.

1. MVP Objective

Orbistry V0.0.1 — Amadeus should establish one coherent internal workflow:

Local Knowledge
      ↓
Vault
      ↓
File / Folder Index
      ↓
Explorer / Planet View
      ↓
Selection
      ↓
Workspace / Context Manager
      ↓
AI Terminal
      ↓
External AI Model
      ↓
Understanding / Research Insight

The goal is not to build a feature-rich productivity suite.

The goal is to prove that a user can:

Open a local knowledge environment.

Discover and navigate its files.

View the same knowledge structure hierarchically and spatially.

Read supported files inside Orbistry.

Search the vault.

Explicitly choose what information becomes AI context.

Send that context to a replaceable AI model.

Reason over persistent user-owned knowledge.

The MVP should feel sophisticated through coherent interaction, not through feature count.

2. Core MVP Systems

2.1 Vault

Goal

Provide the entry point into the user's local knowledge environment.

Required Features

Open/select a local folder.

Change active vault.

Scan directory structure.

Discover supported files.

Rescan vault.

Display basic vault status.

Expected UX

User
  ↓
Select Folder
  ↓
Scan
  ↓
Discover Directories + Files
  ↓
Vault Ready

Minimum Acceptance Criteria

User can select a folder.

Orbistry can recursively discover folders and supported files.

Vault state persists during the current application session.

User can manually trigger a rescan.

Scan/indexing errors are visible.

2.2 Explorer

Goal

Provide a conventional hierarchical view of the same knowledge environment represented by Planet View.

Required Features

Folder tree.

Expand/collapse directories.

Display supported files.

Open files.

Breadcrumb/path display.

Selection state synchronized with Planet View.

UX Principle

Explorer = hierarchical navigation.

Explorer and Planet View must not become separate knowledge systems.

They are two interfaces over the same indexed vault state.

Example

Research
├── Equity Research
│   ├── PGEO
│   │   ├── PGEO_Thesis.md
│   │   └── PGEO_Financials.csv
│   └── TSMC
├── Macro
└── Data

Minimum Acceptance Criteria

Selecting a directory in Explorer focuses the same directory in Planet View.

Selecting a file opens or selects the same file everywhere in the application.

Breadcrumbs accurately represent the file path.

2.3 Planet View

Goal

Provide the spatial navigation layer of Orbistry.

Planet View visualizes the same vault represented by Explorer.

Visual Grammar

Orange Star  = Directory
White Planet = File
Line         = Hierarchy / Relationship
Size         = Structural Importance

Required Features

Directory nodes.

File nodes.

Zoom.

Pan.

Focus.

Click/select.

Double-click directory to focus into its local system.

Multi-select files/directories.

Synchronization with Explorer.

Required Interaction

Example multi-selection:

○ PGEO_Thesis.md
○ PGEO_Financials.csv
○ Indonesia_Energy.md

Then:

3 OBJECTS SELECTED

[ OPEN ] [ ADD TO CONTEXT ] [ ASK AI ]

UX Principle

Planet View is not decorative.

It should help answer:

What exists inside my knowledge environment?

and later:

How is my information connected?

Performance Constraint

Planet View should remain GPU-light.

Prefer:

SVG

CSS

lightweight canvas rendering

static/deterministic layouts

minimal animation

Avoid:

unnecessary WebGL

heavy particle effects

volumetric lighting

physics-heavy simulations

visual effects that do not improve navigation

Minimum Acceptance Criteria

Folder hierarchy can be understood visually.

Node selection is responsive.

Explorer and Planet View stay synchronized.

Multi-select can feed the Context Manager.

Large vaults remain usable enough for internal testing.

3. Workspace

Goal

Provide a simple environment for reading information.

The Workspace is not intended to replace Notion, Word, Excel, or a full IDE.

V0.0.1 Required Viewers

Markdown

Support:

Headings

Paragraphs

Lists

Tables

Links

Code blocks

Basic metadata

CSV

Support:

Table view

Column names

Row count

Horizontal scrolling

Vertical scrolling

Basic sorting if implementation remains simple

Optional / Extended File Support

PDF and DOCX may be supported as read-only knowledge inputs if required by actual research workflow.

Their purpose is ingestion and context access, not document editing.

PDF

Potential V0.0.1 support:

Read-only preview

Page navigation

Text extraction

Search

Add to AI context

DOCX

Potential V0.0.1 support:

Read-only rendered view

Text extraction

Search

Add to AI context

Explicit Non-Goals

Spreadsheet editing

Word-style editing

PDF annotation suite

Collaborative editing

Rich publishing tools

Minimum Acceptance Criteria

User can open supported files from Explorer or Planet View.

Multiple files can be opened in tabs.

Markdown and CSV content is readable inside the app.

Supported files can be added to AI context.

4. Search

Goal

Allow users to retrieve information from increasingly large vaults.

V0.0.1 Scope

Start simple.

Search should support:

File names

Markdown content

CSV metadata

Basic CSV content where practical

Supported extracted text from additional document formats if implemented

Example

SEARCH
"geothermal capacity"

RESULTS

PGEO_Thesis.md
3 matches

Indonesia_Energy.md
7 matches

PGEO_Notes.md
2 matches

Selecting a result should open the relevant file in Workspace.

Explicitly Deferred

Semantic search

Vector database

Hybrid retrieval

Autonomous retrieval agents

Advanced ranking models

These may come later after basic indexing and search are reliable.

Minimum Acceptance Criteria

Search returns relevant filename/content matches.

Search result opens the source file.

Search remains usable after vault rescan.

5. Context Manager

Goal

Make AI context explicit, inspectable, and user-controlled.

This is one of the most important differentiating interactions in Orbistry.

Core Principle

User owns the context. The model only reasons over it.

Required Features

Add file to context.

Add multiple files to context.

Add selected folder to context where feasible.

Remove context items.

Clear context.

Show active context.

Show active model.

Estimate context size/token usage if practical.

Send selected context to AI Terminal.

Example

AI CONTEXT
──────────────────────

● PGEO_Thesis.md
● PGEO_Financials.csv
● Macro.md

3 FILES
~18.4K TOKENS

MODEL
DeepSeek V3

[ ASK ORBISTRY ]

Entry Points

Context should be constructible from:

Explorer

Planet View

Workspace

Search results

Minimum Acceptance Criteria

User always knows what information has been selected.

Context is visible before AI execution.

Files can be added and removed without leaving the current workflow.

AI Terminal receives only the intended selected context.

6. AI Terminal

Goal

Allow replaceable AI models to reason over user-selected information.

The AI model is the reasoning engine, not the owner of the knowledge environment.

Required Capabilities

Ask Normally

Explain this thesis.

Ask Selected File

Summarize PGEO_Thesis.md.

Ask Selected Files

Compare assumptions between these three files.

Ask Selected Folder

What do my PGEO research files currently imply about capacity expansion?

Required UI

Chat input.

Response area.

Model selector.

Selected-context visibility.

API/model errors.

Loading state.

Basic response history during the session.

Model Principle

The architecture should not fundamentally depend on one provider.

Potential access layer:

OpenRouter

Potential models:

GPT

Claude

Gemini

Qwen

DeepSeek

Explicitly Deferred

Autonomous agents

AI modifying the vault

Continuous research agents

Tool-using autonomous workflows

Automated trading

Quant execution

Minimum Acceptance Criteria

User can choose a model.

Selected context is sent to the model.

AI can answer questions over selected knowledge.

Changing model does not require changing the vault structure.

7. System / Settings

Goal

Provide enough infrastructure visibility for an internal prototype to be reliable.

Required Features

API configuration.

Model configuration.

Active vault information.

File count.

Directory count.

Indexing status.

Last scan time.

Error messages.

Manual rescan.

Basic app settings.

Example Status Bar

● VAULT READY

128 FILES
18 DIRECTORIES
INDEXED 2 MINUTES AGO
MODEL: DEEPSEEK V3

Minimum Acceptance Criteria

User can diagnose whether Vault, indexing, and AI connection are working.

API/model errors are not silently swallowed.

Rescan and model configuration are accessible.

8. Unified UX Model

The MVP should behave as one system.

VAULT
  ↓
INDEX
  ↓
┌─────────────────────┐
│                     │
EXPLORER          PLANET VIEW
│                     │
└──────────┬──────────┘
           ↓
       SELECTION
           ↓
┌──────────┴──────────┐
│                     │
WORKSPACE       CONTEXT MANAGER
                      │
                 AI TERMINAL
                      │
                  MODEL API

Every surface should operate over the same underlying file and directory state.

9. V0.0.1 Core Interaction Loop

The final MVP should support this entire loop without friction:

1. Open Orbistry
2. Select local vault
3. Vault is scanned
4. Explorer and Planet View appear
5. User navigates research
6. User opens files in Workspace
7. User searches when necessary
8. User selects relevant files/folders
9. User adds them to Context Manager
10. User selects an AI model
11. User asks Orbistry
12. AI reasons over the selected information
13. User receives understanding / research insight

If this loop works reliably, the V0.0.1 MVP has achieved its primary goal.

10. Explicitly Out of Scope

Do not expand V0.0.1 into the following:

Trading

Bloomberg market-data functionality

Autonomous agents

Collaboration

Cloud sync

Quant engine

Advanced statistical analysis

Python analysis environment

Pandas workflows

Matplotlib visualization

Advanced data science

Corporate user infrastructure

Full document editing

Spreadsheet editing

Knowledge marketplace

Blockchain / IP infrastructure

These may belong to later versions.

11. Product Constraints

Keep the Product Local-First

The initial knowledge environment belongs to the user.

Keep AI Replaceable

Model choice must remain separate from knowledge ownership.

Keep Context Explicit

The user should understand what information the AI receives.

Keep the UX Dense but Calm

Visual direction:

Obsidian knowledge workflow × Bloomberg-style workstation × retro research terminal

Avoid:

Generic SaaS dashboards

Excessive animations

Glassmorphism

Heavy GPU effects

Decorative complexity

Keep Planet View Functional

Planet View is a navigation/context-construction tool, not a visual gimmick.

Avoid Premature Intelligence

Do not pretend the system understands semantic relationships before the underlying indexing/knowledge layer can actually support them.

12. MVP Success Criteria

Orbistry V0.0.1 can be considered usable when all of the following are true:

A local vault can be selected.

Folder/file structure can be scanned.

Markdown files can be discovered and viewed.

CSV files can be discovered and viewed.

Explorer correctly represents the vault.

Planet View correctly represents the same vault.

Explorer and Planet View stay synchronized.

Files/directories can be selected from either interface.

Multiple files can be selected.

Selected files can be added to AI context.

Active AI context is visible to the user.

Files can be removed from context.

Basic vault search works.

Search results can open their source files.

AI model can be selected.

AI Terminal can receive selected context.

AI can reason over a selected file.

AI can reason over multiple selected files.

AI can reason over a selected folder where supported.

API/model errors are visible.

Vault/indexing status is visible.

The application remains responsive during normal internal use.

Optional Extended Acceptance Criteria

PDF files can be previewed and extracted as AI-readable text.

DOCX files can be previewed and extracted as AI-readable text.

These should only be included in V0.0.1 if they materially improve real internal research usage without delaying the core loop.

13. Definition of Done for V0.0.1-Amadeus

V0.0.1 is not done when every long-term Orbistry idea exists.

V0.0.1 is done when this statement is true:

I can open my local research vault, navigate it as files or as a spatial knowledge environment, read my information, deliberately construct AI context, switch reasoning models, and ask questions over my persistent knowledge without moving that knowledge into the AI model itself.

That is the Amadeus MVP.

14. Post-MVP Validation

After the core MVP is operational:

Use Orbistry internally for real research.

Do not immediately add large new features.

Record friction points.

Observe which workflows are repeatedly useful.

Measure where context management fails.

Observe where search becomes insufficient.

Observe whether Planet View genuinely improves navigation.

Identify which file formats are actually required.

Use these findings to define V0.2.

V0.2 should be driven by real usage evidence, not imagined feature demand.

North Star

The model is the engine.
The knowledge system is the infrastructure.
The human remains the owner.

Build the external brain. Not another chatbot.
