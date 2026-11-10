# Orbistry M9 — Context Windows & Human-Controlled Context Engineering

## Status

Implementation / Execution Specification

Product:
Orbistry — Amadeus

Milestone:

M8 — Chat Reliability
↓
M9 — Context Windows + Station Grouping
↓
M9.5 — Semantic Retrieval
↓
M10 — CSV / Analytics Tools
↓
M11 — Tool-Using Agent

---

# 1. Objective

Build the first complete human-controlled context engineering experience for Orbistry.

The user must be able to visually construct, inspect, modify, and reuse AI context through Planet View and Knowledge Stations.

The target experience is:

DISCOVER KNOWLEDGE
        ↓
SELECT OBJECTS
        ↓
GROUP INTO CONTEXT WINDOW
        ↓
AUTHORIZE KNOWLEDGE
        ↓
PIN IMPORTANT SOURCES
        ↓
CONTROL TOKEN BUDGET
        ↓
ASK MODEL
        ↓
INSPECT WHAT CONTEXT WAS USED
        ↓
REFINE CONTEXT
        ↓
CONTINUE CONVERSATION

The model integration already exists.

M9 should improve how knowledge is selected and packaged before reaching the model.

M9 is primarily a:

- context architecture milestone,
- interaction milestone,
- provenance milestone,
- Planet View UX milestone.

It is NOT yet a semantic retrieval milestone.

---

# 2. Core Product Principle

The user should remain in control of what the model is allowed to know.

Orbistry may help organize, retrieve, rank, and package information.

However, the knowledge boundary should remain inspectable and understandable.

Core rule:

> User controls the knowledge boundary. Orbistry controls the packaging.

Another important distinction:

SELECTED
≠
AUTHORIZED
≠
PINNED
≠
USED

These represent different states and MUST NOT collapse into one generic context state.

---

# 3. Context Mental Model

M9 introduces a first-class object:

ContextWindow

A Context Window represents a persistent working knowledge boundary for an AI conversation or research task.

Example:

CONTEXT WINDOW
PGEO Valuation

Pinned Sources:
- Thesis.md
- Financials.csv

Authorized Stations:
- energy
- valuation
- macro

Authorized Objects:
- AnnualReport2025.pdf
- RUPTL.pdf

Token Budget:
42K / 128K

Version:
v4

The Context Window is NOT equivalent to:

- current UI selection,
- chat history,
- Station filter,
- selected files array.

It is its own object.

---

# 4. Context Window Data Model

Suggested conceptual model:

```ts
type ContextWindow = {
  id: string
  name: string

  pinnedSourceIds: string[]

  authorizedObjectIds: string[]
  authorizedStationIds: string[]

  tokenBudget?: number

  version: number

  createdAt: number
  updatedAt: number
}
```

---

# 5. Immediate execution scope - controls before model consumption

Subsequent user-directed exception (2026-09-10): make reviewed Station context accessible to models now through existing Active Context. The implemented bounded multi-source path is documented in [Station model context handoff](./station-model-context-handoff.md). This advances source-set execution and provenance; named Context Windows and their M9-A controls remain planned. The controls-first phases below remain the broader roadmap with this exception.

Updated 2026-09-10 following the user's scope decision. **Begin M9 with comfortable, working context controls. The model does not need to read Context Windows in this first phase.** M8 chat acceptance remains open, but does not block this independent context-management work.

Split M9 into:

- **M9-A - Context control experience:** persistent windows, source/Station review, explicit authorization, pins, budget estimates and reuse. This is the immediate implementation target.
- **M9-B - Model consumption and run provenance:** connect a window version to chat, enforce execution budgets, and report actual sources used. Schedule after the manual controls are accepted.

The full discovery-to-conversation loop above remains the eventual target. M9-A is complete when context can be comfortably managed without a model connection or API key. Its controls must not change the existing chat's Active Context or send model requests.

## M9-A implementation order

1. **Window foundation:** create, name, rename, switch and reopen vault-scoped windows. Persist validated metadata through Electron; show saving, saved and failed states. Keep windows independent from existing chat authorization.
2. **One visible context panel:** expose the window name, source list, Station groups and summary together. Add the current Explorer/Planet selection through a clear review action. Inspect source names, paths, types and missing/changed status without losing the working selection.
3. **Authorization controls:** review individual sources or a group, authorize deliberately, remove authorization and clear a window. Review directory/Station expansion before accepting it. Deduplicate sources shared by several groups while retaining their origins.
4. **Pinning and grouping:** pin/unpin authorized sources, show pins first, and make Station membership understandable. Pinning means preferred inclusion in a future package; it does not mean a source has been read by a model.
5. **Budget feedback:** allow a user-defined budget and show labeled approximate source-token totals where text is available. Show unknown estimates and over-budget states honestly. Budget warnings must not block editing or silently remove sources. Exact model/history/output budgeting belongs to M9-B.
6. **Comfort and recovery:** support keyboard interaction, stable focus/scroll, reversible removal/clearing, clear empty states and recovery from failed writes. Reopen after restart and switch vaults without leaking window state between vaults.

## Multi-selection and bulk context arrangement

Make this an explicit M9-A work item after window persistence and the visible context panel, before completing authorization/pinning flows. Existing Explorer/Planet Ctrl/Cmd-click selection is a foundation; bulk Context Window arrangement is new work.

- **Choose several objects:** preserve shared Explorer/Planet selection and support Ctrl/Cmd-click toggling. Add Shift-click ranges in ordered lists and visible checkboxes in the Context Window source list. Spatial selection must not invent a range ordering; box selection can follow after the basic bulk flow is accepted.
- **See the scope of the action:** show a persistent selected-object count and a compact action bar. In filtered lists, Select all applies only to visible results. Hidden selections must be disclosed and can be cleared explicitly.
- **Arrange together:** provide Add to Context Window with an existing-window picker and Create new window. Review the resolved source set before authorization, including Station/directory expansion, duplicates and unavailable objects. Cancelling review preserves the original selection.
- **Edit together:** support bulk authorize, pin, unpin and remove inside the window. A mixed authorized/unauthorized selection must explain which objects qualify; pinning cannot silently authorize candidates. Removing authorization also removes affected pins.
- **Keep arrangement reversible:** removal affects window membership, not vault files. Provide undo for bulk removal/clear, and retain edits for recovery when saving fails. Show the affected count before changing a large group.
- **Keep identity stable:** selecting a directory and one of its descendants, or overlapping Stations, must not duplicate a source or double-count its estimated size. Preserve membership origins for later group removal.
- **Make keyboard interaction usable:** support focusable selection controls, Space to toggle a focused checkbox, and Escape to dismiss a review or clear the active selection when no dialog is open. Selection shortcuts must not intercept typing in text fields.

Acceptance: select several files across folders, add them to one named window in one review, bulk pin authorized members, remove and undo a subset, then reopen the saved window. Repeat with overlapping Station/directory members and filtered results. Counts, origins, focus and token estimates stay consistent. These actions require no model and must not change existing chat approval.

## Initial interaction rules

- **Selected:** transient Explorer/Planet UI selection; grants no authorization.
- **Authorized:** explicitly approved membership in this window, for future model consumption. In M9-A this is window metadata only, not permission for the existing chat runtime.
- **Pinned:** a preferred source within the authorized set. An unapproved candidate must be explicitly authorized before it can be pinned; removing authorization also removes its pin.
- **Used:** actual run evidence. M9-A must show no source as Used; use an honest empty state such as "Not used in a model run yet."
- Station/directory approval captures the reviewed source set. Newly discovered members appear as candidates for review; they do not silently expand authorization. Store resolved source membership and origins alongside group references; Station IDs alone cannot represent this policy.
- A source appearing in multiple groups counts once. Removing a group must preview the resulting authorized set and preserve independently authorized sources.
- Changed/missing sources remain visible for review. Switching windows must not overwrite a conversation or its current source approval.
- Existing supported files may be organized as knowledge objects. Inclusion in a window must not imply working extraction or model support for that format.

These rules refine the conceptual data model above. Final persistence schemas must also capture source references/origins needed for reviewed membership and change detection.

## M9-A acceptance

With no configured model, a user can create two named windows, add sources from Planet/Explorer and Stations, inspect and revise authorization, pin/unpin, adjust a budget, switch windows, and restart with the saved state intact. Shared membership, missing/changed sources, unknown token estimates and over-budget selections remain understandable. The actual UI supports mouse and keyboard without lockups or lost focus; failed saves are visible and recoverable.

Review the workflow with the user for unnecessary clicks, confusing labels and repeated setup. Do not mark the experience accepted solely because backend tests pass. M9-A acceptance does not claim that a model can consume these windows.

## Deferred to M9-B

Conversation/window binding and migration, multi-source prompt construction, model-capacity and history reservations, pin overflow at execution, source-version authorization at run time, actual Used provenance, and safe conversation continuation after window edits. Preserve the current one-Markdown chat path until this integration is explicitly implemented and verified.
