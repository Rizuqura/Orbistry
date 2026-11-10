
# Orbistry implementation tasks

## Current execution order

Updated 2026-09-10. Authority: [Context Windows & Human-Controlled Context Engineering](./context-engineering-experience.md). Current implementation evidence: [state.md](./state.md) and [September 10 audit](./project-audit-2026-09-10.md).

**Roadmap: M8 → M9 → M9.5 → M10 → M11. Immediate work: M9-A context controls, independently of unresolved M8 acceptance.** M9-B model consumption follows acceptance of the controls. The tasks below are planned work, not delivered runtime behavior.

### M8 - Chat reliability: acceptance pending

- [ ] Review ten natural turns on each of two sources using the chosen real model, including relevance, grounding, instruction following and latency.
- [ ] Verify return to the original conversation, restart, provider/model switching, more than 12 exchanges, source updates, cancellation and recovery.
- [ ] Resolve reproduced failures and record acceptance against agreed quality/latency expectations. Mock success and starred sample checks do not close this gate.

### M9-A - Context control experience: immediate target

Implemented selection foundation: shared Explorer/Planet multi-selection, Planet rectangle selection with additive modifiers and cancellation, selected counts, pan alternatives, and a control guide above Asteroid Visible. Existing Station assignment can apply to the selected group. This is partial progress toward the bulk-arrangement task below; named Context Windows and their controls are still absent.

The user has prioritized working, comfortable controls before model consumption. M8 acceptance remains open and does not block this independent phase. Follow [the M9-A execution specification](./context-engineering-experience.md#5-immediate-execution-scope---controls-before-model-consumption).

- [ ] Define and persist vault-scoped named Context Windows, including reviewed source membership, group origins, pins, budget, version and change-detection metadata.
- [ ] Add create, rename, switch and reopen controls in a visible context panel, with explicit save/error feedback.
- [ ] Add multi-selection and bulk arrangement: shared Explorer/Planet selection, source-list checkboxes/ranges, selected counts, and Add to existing/new Context Window with one review. Preserve selection when review is cancelled.
- [ ] Add bulk authorize, pin/unpin and remove/undo. Deduplicate overlapping groups, disclose hidden selections, and keep filtered Select all scoped to visible results. Verify keyboard/focus behavior and mixed-authorization states.
- [ ] Connect Planet/Explorer selection and Station/directory candidates to review and authorization controls. Deduplicate shared sources and review new group members before authorizing them.
- [ ] Add pin/unpin, removal and clear flows with understandable grouping and reversible edits. Keep Selected, Authorized, Pinned and Used distinct.
- [ ] Add editable budget and approximate source-cost feedback; show unknown/over-budget states without blocking edits or implying an executable model package.
- [ ] Verify keyboard/focus behavior, restart persistence, vault isolation, changed/missing sources and failed-write recovery through the actual interface.
- [ ] Review comfort with the user: build and refine two reusable windows without a configured model, unnecessary repeated setup or interface lockups.

M9-A must not submit model requests, alter current chat authorization or claim sources were Used. Existing supported formats can be organized as objects without claiming they are model-readable. Supporting reading/search improvements should be prioritized where they directly remove friction in this workflow.

### M9-B - Model consumption and provenance: deferred until controls are accepted

Scope update: the user requested Station-approved context consumption now. A bounded multi-source path is implemented through existing Active Context (1-32 Markdown/CSV/PDF-text sources), with full-set identity, controlled reads, provenance and resumption. See [the handoff](./station-model-context-handoff.md). The unchecked items below still apply to named Context Windows and pin/budget policies; this does not complete M9-B as originally specified.

User verification: two Markdown sources worked after manual context sizing. Exact successful saved settings and maximum usable capacity remain unverified.

- [ ] Unify sidebar/runtime token estimation and expose a pre-send budget breakdown with required versus available space.
- [ ] Record a controlled capacity benchmark per provider/model, including saved context/output settings, source count, estimated prompt size, latency and outcome. Do not treat configured limits as measured capacity.

- [ ] Define conversation/window binding and compatibility with existing Active Context and saved chats.
- [ ] Build multi-source packages with runtime authorization, source hashes, window versions and model/history/output budgets.
- [ ] Enforce pin and budget policies at execution; record actual Used sources separately from authorized candidates.
- [ ] Verify source/window edits, continuation, provider switching and isolation through the complete research conversation.

### Later milestones

- **M9.5 - Semantic retrieval:** add retrieval/ranking within the inspectable authorized boundary after M9 acceptance.
- **M10 - CSV / analytics tools:** add analysis capabilities after context construction and retrieval foundations.
- **M11 - Tool-using agent:** add controlled tool use after the preceding milestones. This does not automatically authorize autonomous actions or model-written vault changes.

Provider expansion is not the next primary milestone. Keep the existing Ollama/Gemini/NVIDIA integration as the execution foundation and fix provider defects that block acceptance.

---

# Original V0.0.1-Amadeus MVP task inventory

## Purpose

This document contains the minimum engineering tasks required to build Orbistry V0.0.1-Amadeus.

The goal is not to complete every possible feature.

The goal is to establish the smallest working system that proves:

> User-owned information → retrieval → context → replaceable AI model → useful response.

---

# 0. Project Foundation

## T0.1 — Initialize Repository

### Goal

Create the initial project repository and establish the basic project structure.

### Tasks

- [ ] Initialize Git repository.
- [ ] Create GitHub repository.
- [ ] Create initial application.
- [ ] Verify local development environment.
- [ ] Create initial README.md.
- [ ] Create `.gitignore`.
- [ ] Create `.env.example`.

### Output

A clean repository that can:

```text
clone
↓
install
↓
run locally
````

### Test

* [ ] Project starts successfully.
* [ ] Project builds successfully.
* [ ] Git status is clean after initial commit.

---

# 1. Context & Documentation

## T1.1 — Establish Project Context

### Goal

Create the minimum persistent context required for AI-assisted development.

### Files

```text
context/
├── product.md
├── architecture.md
├── tech-stack.md
├── engineering.md
├── ai-workflow.md
└── decisions.md
```

### Tasks

* [ ] Create `product.md`.
* [ ] Create `architecture.md`.
* [ ] Create `tech-stack.md`.
* [ ] Create `engineering.md`.
* [ ] Create `ai-workflow.md`.
* [ ] Create `decisions.md`.

### Test

AI coding agent should be able to answer:

* What is Amadeus?
* What is the MVP?
* What architecture does it use?
* What technologies are selected?
* What technologies are out of scope?
* What engineering principles must be followed?

---

# 2. Project Structure

## T2.1 — Establish Application Structure

### Goal

Create a predictable project structure before feature implementation.

### Minimum Structure

```text
project/
│
├── app/
├── components/
├── lib/
├── types/
├── context/
├── public/
│
├── .env.example
├── .gitignore
├── README.md
├── package.json
└── tsconfig.json
```

### Tasks

* [ ] Establish application directory.
* [ ] Establish component directory.
* [ ] Establish library / application-logic directory.
* [ ] Establish shared types directory.
* [ ] Keep context files outside application runtime code.
* [ ] Document directory responsibilities.

### Test

Given a new file, the founder should know where it belongs.

---

# 3. UI Foundation

## T3.1 — Create Application Shell

### Goal

Create the basic Amadeus interface structure.

### Minimum UI

```text
┌───────────────────────────────────────────────┐
│                    Amadeus                    │
├──────────────┬────────────────────────────────┤
│              │                                │
│ Knowledge    │          Workspace             │
│              │                                │
│ Files        │                                │
│ Search       │                                │
│              │                                │
│              │                                │
├──────────────┴────────────────────────────────┤
│                  Chat / Input                 │
└───────────────────────────────────────────────┘
```

### Tasks

* [ ] Create application shell.
* [ ] Create sidebar.
* [ ] Create workspace area.
* [ ] Create file browser placeholder.
* [ ] Create search input placeholder.
* [ ] Create chat interface placeholder.
* [ ] Create model selector placeholder.

### Test

* [ ] UI renders.
* [ ] Layout is stable.
* [ ] Components are separated logically.
* [ ] No functionality is required yet.

---

# 4. Local Knowledge Access

## T4.1 — Folder Selection

### Goal

Allow Amadeus to work with a user-selected local knowledge folder.

### Tasks

* [ ] Determine local runtime approach.
* [ ] Implement folder selection.
* [ ] Store selected folder path.
* [ ] Display selected folder.

### Test

User selects:

```text
/research/
```

Expected:

```text
Selected Knowledge Folder
/research/
```

---

## T4.2 — File Discovery

### Goal

Discover supported files inside the selected folder.

### Supported V0.0.1

```text
.md
.csv
```

### Tasks

* [ ] Scan selected folder.
* [ ] Identify files.
* [ ] Identify file extensions.
* [ ] Filter unsupported files.
* [ ] Return file metadata.

### Test

Given:

```text
/research/
├── TSMC.md
├── Macro.md
├── financials.csv
└── image.png
```

Expected:

```text
TSMC.md
Macro.md
financials.csv
```

`image.png` should be ignored or marked unsupported.

---

# 5. Markdown Knowledge

## T5.1 — Markdown Reader

### Goal

Read Markdown files.

### Tasks

* [ ] Read `.md` file.
* [ ] Return raw content.
* [ ] Return file metadata.
* [ ] Handle missing file errors.

### Test

```text
TSMC.md
```

should produce readable Markdown content.

---

## T5.2 — Markdown Viewer

### Goal

Display Markdown content in the UI.

### Tasks

* [ ] Select Markdown file.
* [ ] Load content.
* [ ] Render Markdown.
* [ ] Display metadata.

### Test

User clicks:

```text
TSMC.md
```

Expected:

```text
TSMC
────

[Rendered Markdown Content]
```

---

# 6. CSV Knowledge

## T6.1 — CSV Reader

### Goal

Read CSV files into structured application data.

### Tasks

* [ ] Read `.csv`.
* [ ] Parse headers.
* [ ] Parse rows.
* [ ] Handle malformed CSV.
* [ ] Return structured data.

### Test

Input:

```csv
Company,Revenue,Margin
TSMC,592.6,53.1
Intel,128.0,42.0
```

Expected:

```text
columns:
Company
Revenue
Margin

rows:
TSMC
Intel
```

---

## T6.2 — CSV Viewer

### Goal

Display structured CSV data.

### Tasks

* [ ] Select CSV file.
* [ ] Parse CSV.
* [ ] Render table.
* [ ] Display basic metadata.

### Test

User opens:

```text
financials.csv
```

Expected:

A readable table containing its columns and rows.

---

# 7. Search

## T7.1 — Local File Search

### Goal

Allow users to search the knowledge environment.

### Minimum Search

* Filename search.
* Basic content search.

### Tasks

* [ ] Create search input.
* [ ] Search filenames.
* [ ] Search Markdown content.
* [ ] Search CSV metadata/content where practical.
* [ ] Return matching sources.

### Test

Query:

```text
TSMC
```

Expected:

```text
TSMC.md
TSMC_Financials.csv
TSMC_Research.md
```

---

## T7.2 — Empty Search Result

### Goal

Handle unsuccessful searches safely.

### Test

Query:

```text
random-nonexistent-topic
```

Expected:

```text
No relevant results found.
```

The system must not fabricate a source.

---

# 8. Context Engine

## T8.1 — Context Builder

### Goal

Build model context from relevant local information.

### Flow

```text
User Question
↓
Search
↓
Relevant Sources
↓
Content Selection
↓
Context Assembly
```

### Tasks

* [ ] Accept user question.
* [ ] Retrieve relevant sources.
* [ ] Select relevant content.
* [ ] Attach source metadata.
* [ ] Construct model-ready context.
* [ ] Avoid sending the entire knowledge folder by default.

### Test

Question:

```text
Why did TSMC margins improve?
```

Expected:

Relevant TSMC sources are selected.

Irrelevant files are excluded.

---

## T8.2 — Empty Context

### Goal

Handle situations where local knowledge does not provide enough evidence.

### Test

Question:

```text
What does my nonexistent research say about Mars?
```

Expected:

```text
No relevant local knowledge found.
```

No fabricated local evidence.

---

# 9. Model Interface

## T9.1 — Model Abstraction

### Goal

Create a model interface independent from a specific provider.

### Concept

```text
Application
↓
Model Interface
↓
Provider
↓
Model
```

### Tasks

* [ ] Define model request structure.
* [ ] Define model response structure.
* [ ] Define model selection.
* [ ] Keep provider-specific logic outside UI components.

### Test

The UI should request:

```text
generate(...)
```

rather than directly implementing provider-specific API calls.

---

# 10. OpenRouter Integration

## T10.1 — Connect Model API

### Goal

Connect Amadeus to an external AI model.

### Tasks

* [ ] Configure OpenRouter API.
* [ ] Store API key through environment variables.
* [ ] Send model request.
* [ ] Receive model response.
* [ ] Handle API errors.

### Test

Simple request:

```text
Explain what TSMC does.
```

Expected:

A valid model response appears in Amadeus.

---

## T10.2 — Model Selection

### Goal

Allow the user to select between available models.

### Tasks

* [ ] Create model selector.
* [ ] Pass selected model to Model Interface.
* [ ] Keep UI independent from provider-specific implementation.

### Test

Changing the selected model should change the model request without changing the Knowledge Interface.

---

# 11. AI + Knowledge Integration

## T11.1 — Context-Aware Chat

### Goal

Connect the Knowledge Interface, Context Engine, and Model Interface.

### Flow

```text
User Question
      ↓
Search
      ↓
Relevant Knowledge
      ↓
Context Engine
      ↓
Model Interface
      ↓
AI Model
      ↓
Response
```

### Test

User asks:

```text
Why did TSMC margins improve?
```

Expected:

```text
Search
↓
TSMC sources
↓
Context
↓
Model
↓
Grounded response
```

---

# 12. Error Handling

## T12.1 — Basic Error States

### Goal

Prevent basic failures from breaking the application.

### Required Cases

* [ ] Folder unavailable.
* [ ] File missing.
* [ ] Unsupported file.
* [ ] Malformed CSV.
* [ ] API failure.
* [ ] API rate limit.
* [ ] Empty search result.
* [ ] Empty context.

### Test

Each failure should produce:

```text
Understandable error
+
Recoverable UI state
```

rather than a crashed application.

---

# 13. Security / Configuration

## T13.1 — Environment Configuration

### Goal

Keep API credentials outside source code.

### Tasks

* [ ] Create `.env`.
* [ ] Create `.env.example`.
* [ ] Add API key through environment variable.
* [ ] Ensure `.env` is ignored by Git.

### Test

Search repository source code.

Expected:

```text
No real API key committed.
```

---

# 14. Testing

## T14.1 — MVP Test Suite

### Goal

Create a minimal regression test set.

### Required Tests

```text
[ ] Project starts
[ ] Project builds
[ ] Folder can be selected
[ ] Files can be discovered
[ ] Markdown can be read
[ ] Markdown can be rendered
[ ] CSV can be parsed
[ ] CSV can be displayed
[ ] Search returns relevant files
[ ] Search handles no results
[ ] Context can be assembled
[ ] Model request succeeds
[ ] Model response renders
[ ] API failure is handled
[ ] File failure is handled
[ ] API key is not exposed
```

---

# 15. AI-Assisted Engineering

## T15.1 — Establish AI Coding Workflow

### Goal

Use AI as an engineering assistant rather than an autonomous architect.

### Workflow

```text
Context
↓
Task
↓
AI Proposal
↓
Human Review
↓
Implementation
↓
Test
↓
Review
↓
Commit
```

### Tasks

* [ ] Define AI coding instructions.
* [ ] Define context loading rules.
* [ ] Define task format.
* [ ] Require AI to explain architectural impact.
* [ ] Require tests for meaningful changes.
* [ ] Review generated code before commit.

---

# 16. Git Workflow

## T16.1 — Feature Development

Every meaningful feature should follow:

```text
Task
↓
Branch
↓
Implementation
↓
Test
↓
Review
↓
Commit
```

### Example

```text
feature/markdown-reader
```

---

# 17. MVP Integration

## T17.1 — Full Knowledge Workflow

Amadeus should support:

```text
Select Folder
      ↓
Discover Files
      ↓
Open Markdown / CSV
      ↓
Search Knowledge
      ↓
Retrieve Relevant Sources
      ↓
Build Context
      ↓
Ask AI
      ↓
Receive Response
```

---

# 18. MVP Acceptance Test

Amadeus V0.0.1 is considered functional when the following scenario works:

### Scenario

The user selects:

```text
/research/
```

containing:

```text
/research/
├── TSMC.md
├── Semiconductor.md
├── Macro.md
└── financials.csv
```

The user asks:

> Why did TSMC margins improve?

### Expected System Behavior

```text
1. Folder is accessible.
2. Files are discovered.
3. Search identifies relevant TSMC sources.
4. Context Engine selects relevant information.
5. Context is passed to Model Interface.
6. OpenRouter sends the request to the selected model.
7. Model returns an answer.
8. UI displays the answer.
9. Relevant sources remain identifiable.
```

### Acceptance

* [ ] Complete flow works.
* [ ] No application crash.
* [ ] No API key exposure.
* [ ] Irrelevant files are not blindly included.
* [ ] Model provider can be changed.
* [ ] Knowledge layer works independently from the AI layer.

---

# 19. Out of Scope for V0.0.1

The following should NOT become implementation tasks unless the product scope changes:

* [ ] PostgreSQL.
* [ ] SQL optimization.
* [ ] Vector database.
* [ ] Advanced semantic search.
* [ ] Advanced RAG.
* [ ] Autonomous agents.
* [ ] Multi-agent systems.
* [ ] Python data science.
* [ ] Pandas.
* [ ] Matplotlib.
* [ ] Advanced statistical analysis.
* [ ] Cloud synchronization.
* [ ] Multi-user collaboration.
* [ ] Corporate infrastructure.
* [ ] Microservices.
* [ ] Kubernetes.
* [ ] Distributed architecture.

---

# 20. Future Direction

## V0.2

Potential addition:

```text
CSV
↓
Dataset
↓
Basic Statistics
↓
Chat
```

Possible operations:

* Mean.
* Median.
* Standard deviation.
* Minimum.
* Maximum.
* Observation count.

---

## V0.3+

Potential addition:

```text
Python
↓
Pandas
↓
Statistical Analysis
↓
Matplotlib
↓
Visualization
```

---

## Future Corporate Version

Potential additions may include:

```text
Database
+
Advanced Retrieval
+
Knowledge Graph
+
Cloud Infrastructure
+
Authentication
+
Multi-user Access
+
Permissions
+
Corporate Data Sources
```

These are future possibilities, not V0.0.1 requirements.

---

# 21. Definition of Done

A task is not considered complete merely because AI generated code for it.

A task is complete when:

* [ ] Implementation exists.
* [ ] Implementation belongs to the correct architectural layer.
* [ ] Expected behavior is tested.
* [ ] Error behavior is considered.
* [ ] Generated code has been reviewed.
* [ ] No unnecessary dependency was introduced.
* [ ] Documentation/context is updated if architecture changed.
* [ ] Git commit is created.

---

# 22. Final MVP Goal

The entire V0.0.1 task list exists to prove one core loop:

```text
┌─────────────────────────────┐
│     USER-OWNED KNOWLEDGE    │
└──────────────┬──────────────┘
               ↓
        Search / Retrieval
               ↓
        Context Engine
               ↓
        Model Interface
               ↓
       Replaceable AI Model
               ↓
        Useful Intelligence
```

The MVP should prove that this loop works reliably before additional infrastructure is introduced.

````

### Urutan pengerjaan yang aku sarankan

Jangan kerjakan 50 checkbox ini secara acak. Kita treat sebagai **milestone kecil**:

```text
M0  Foundation
 ↓
M1  Context + Project Structure
 ↓
M2  UI Shell
 ↓
M3  Filesystem
 ↓
M4  Markdown + CSV
 ↓
M5  Search
 ↓
M6  Context Engine
 ↓
M7  Model Interface + OpenRouter
 ↓
M8  Knowledge-aware Chat
 ↓
M9  Testing + Hardening
 ↓
V0.0.1
````
