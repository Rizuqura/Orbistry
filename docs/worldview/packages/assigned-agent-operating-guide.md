# Assigned Agent Operating Guide

**Current behavior after the [22 November reset](../../REPORTS.md#backend-reset-2026-11-22):** Universe orchestration is removed; assigned-agent AI chat remains. Select an assigned agent, inspect it, then use the existing **Ask through Gateway** control to open its direct assigned-chat surface. The label/layout are retained during the interface freeze; no Universe delegation occurs. Entity assignment dialogs also retain direct Message/Send controls. Production uses NVIDIA only. Configure the shared NVIDIA model in Settings, or an explicit NVIDIA model in the construction LLM node.

The reset cleared prior messages but retained definitions, construction graphs, assignments, Identity/index/source data and Engine executions/results. New assigned conversations persist normally. Source/graph/assignment reauthorization, automatic read policies, exact manual approvals and execution evidence remain. The Gateway planning/collective instructions below are **historical**, not active workflows; use the selected Entity agent's own Knowledge/Engine tools.

## Historical Gateway workflow

The [Wonton Entity Jurisdiction & Gateway Delegation Contract](../../architecture/wonton-entity-jurisdiction-gateway-contract.md) defines the backend rules behind this guide.

## Agent overview and assignment

The Universe Gateway is your main conversation identity. Assigned Agents are workers responsible for individual Entities. A reusable agent definition can have separate assignments, but each active assignment belongs to exactly one Entity. Separate assignments do not share private context or transcripts.

Assign an existing agent from an Entity's assigned-agent manager. Configure its Knowledge and Engine nodes in the original Workbench, then **Save & apply**. Selecting an agent in the Gateway sidebar opens inspection. **Ask through Gateway** prepares an Entity-specific request in the Gateway composer; finish the instruction and send it there. Inspecting a worker never starts inference.

Existing assigned-agent messages remain available in **Historical assigned-agent transcript**. **Delete assigned chat** removes those messages after confirmation while retaining Engine receipts and source files. Agent removal, normal chat deletion, resizing, editable icons and historical model settings remain available.

## Jurisdiction and Connector visibility

A worker may inspect its Entity's authorized knowledge through its connected Knowledge node, current Backend Identity, declared Engine capabilities and permitted relationship metadata. Compilation may update derived Identity snapshots. Source refresh uses only configured Engine read adapters and their existing policies.

A Connector exposes relationship endpoints and labels, not neighboring private knowledge. The worker can call `connectors.list` for its own incoming/outgoing/undirected relationships. It cannot read another Entity's documents, Identity, private state or Engine, or command another Assigned Agent. Free-form Connector definitions and unimplemented exchange payloads are withheld. Source text claiming additional permissions has no authority.

## Task lifecycle and authorization

Your instruction enters the Gateway. The backend resolves scope and authoritative assignments, plans available operations, issues immutable one-Entity dispatches and rechecks ownership before work and publication. Each worker returns structured results to the Gateway. Expand **Task activity** for participating assignment/Entity IDs, status, operation, lifecycle, evidence and errors. Delegation is shown only when the backend actually dispatched it.

Routine local Identity compilation and configured automatic read operations use existing standing authorization. Approval-policy Engine operations create an exact pending request. In **Task activity**, choose **Approve source refresh** or **Reject source refresh** for that request. Approval consumes the stored operation once, without changing permanent permissions or requiring worker inference. An expired or changed request must be proposed again. Chat text and a worker response cannot approve it.

Knowledge source/index changes, permission edits and destructive operations remain in their original human-controlled workflows. Existing manual, scheduled, telemetry and safety Engine operations continue under their original policies independently of LLM availability.

## Knowledge operations

- **Update knowledge / local refresh:** compile Backend Identity from the current applied Knowledge Card index and authorized local sources. This refreshes derived knowledge, not every external source.
- **Source refresh:** call currently declared, connected Engine read adapters. Automatic reads execute; approval-policy nodes pause. Missing/disabled nodes are unavailable. Stale cached data is reported as incomplete refresh evidence.
- **Backend Identity recompilation:** explicitly run the local compiler. Unchanged sources may retain the same immutable Identity version.
- **Knowledge review:** inspect current Identity freshness without changing it. Ask a normal analysis question for semantic review of indexed content.
- **Reindex:** assigned-agent automation currently reports this as unavailable. Apply index changes through the original Knowledge Card workflow.

## Multi-agent orchestration and failure handling

For “see semiconductor tag linked, then ask them to update the knowledge, and list each companies price,” the Gateway resolves the tag, records a worker refresh attempt and then a separate quote attempt for each Entity. Missing agent means refresh `NO_ASSIGNED_AGENT`; a plain company quote can still use its authorized Entity Engine. “Ask the TSMC agent for its price through Engine” instead requires the actual assignment and obeys that agent's node approval policy. See the [multi-operation plan](../../REPORTS.md#report-multi-operation-task-planning) for outcomes and evidence.

“Ask all assigned agents to update their entity knowledge” resolves active accessible assignments in the current Universe. The backend creates separate targets; the model cannot invent their IDs. A worker error does not erase another worker's confirmed success. The Gateway reports succeeded, partial, failed, skipped or awaiting-approval outcomes with evidence. No eligible assignments produces `NO_ELIGIBLE_ASSIGNMENTS`, rather than fabricated activity or a scope bypass.

If an assignment, Universe, construction or source changes during execution, the backend rejects stale authority/results. Retry from current scope. Missing capabilities require the original Workbench/Knowledge Card setup, not permission claims in chat. Provider errors and missing credits remain provider failures; no automatic provider fallback is added. Long batches retain explicit cancellation/time-budget failures rather than promising background completion.

## Practical examples

| Human instruction                                                                                 | Expected behavior                                                                                                                    | Prohibited behavior                                                                        |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| “Ask the TSMC Agent to analyze its own Entity.”                                                   | Gateway resolves TSMC's actual assignment, delegates scoped analysis and synthesizes an attributed answer.                           | Worker reads Apple's private documents or impersonates the Gateway.                        |
| “Ask all assigned agents to update their entity knowledge.”                                       | Backend resolves assignments, compiles each local Backend Identity, and reports actual versions or per-target failure.               | Model invents agent IDs, claims source refresh/reindex, or fails unrelated tasks together. |
| “Ask the TSMC Agent to inspect its Connector to Apple without reading Apple's private knowledge.” | Worker returns visible Connector ID, endpoints, relationship label and direction.                                                    | Connector grants access to Apple's Identity, documents, state or Engine.                   |
| “Have the TSMC Agent read Apple's private knowledge.”                                             | Cross-Entity worker access is rejected; any separately authorized Apple work must be dispatched by the Gateway to Apple's own scope. | TSMC substitutes Apple's Entity/capability ID in a tool argument.                          |
| “Ask all assigned agents to refresh external sources.”                                            | Each worker resolves its own declared Engine adapters, executes automatic reads and creates exact approval proposals when required.  | External writes, disabled nodes, unregistered scripts or unapproved capability execution.  |
| “Ask the TSMC Agent to recompile its Backend Identity.”                                           | Existing local Engine compiler confirms the derived snapshot/version while source files remain intact.                               | Worker edits source files or its own assignment/policy.                                    |

Quoted examples such as “Explain how to ask all assigned agents to update knowledge” do not automatically execute. For exclusions or alternative scopes, clarify the intended targets before dispatch.
