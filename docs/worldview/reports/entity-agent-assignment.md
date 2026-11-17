# Entity agent assignment and multi-engine construction

Implemented on 17 November 2026 using `instruction/CODEWRITINGSTD.md`, `instruction/DEBUGANDAUDIT.md` and the installed Next.js client-component and static-export guides.

Follow-up: [Agent runtime diagnostic and remediation](agent-runtime-diagnostic.md) adds model-directed retrieval, bound approval and immediate engine-result continuation. Its real NVIDIA/Yahoo UI evidence and updated test results supersede the prototype verification limits below.

## Architecture

WorldView opens the existing Agent Construction modal through AppShell. The originating entity appears in Context settings. The selected entity and assignment travel as UI context. AgentStore continues to own reusable, revisioned definitions.

The new `EntityAgentService` owns assignment references, isolated sessions and the assignment execution boundary. It uses the existing atomic JSON writer, serialized mutation queues, trusted IPC, Backend Identity runtime, capability registry, model settings and provider runner. Assignment mutations and execution use ChatService admission control.

The same definition can serve several entities. Each entity-definition pair has its own stable assignment UUID and session. Repeated assignment requests return the existing association. Unassigning preserves historical session files. Reassignment creates a new UUID and a fresh session.

## Data and persistence

World metadata lives under `.wonnyy/worldview/agents/` inside the selected Universe.

| Record                           | Contents                                                                                                                                                                                    |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assignments.json`               | Schema version and assignment UUID, entity ID, agent ID and creation time                                                                                                                   |
| `sessions/<assignment-id>.json`  | Owner identifiers, conversation messages, retrieved source references, latest chat error and recent execution summaries                                                                     |
| `executions/<execution-id>.json` | Assignment/entity/node identifiers, engine/version/operation, graph revision, identity version, invocation time, validated parameters, status, result reference, result hash and safe error |
| `results/<execution-id>.json`    | Backend capability output                                                                                                                                                                   |

An Engine node adds optional operation, engine version, parameter defaults and execution policy to its existing engine/instance identifiers. Positions and edges use the existing graph representation. Validation permits up to sixteen Engine nodes and retains one node for every other category.

Sessions retain up to 199 messages and approximately 200,000 content characters. Oldest complete exchanges are removed together. Twenty recent execution summaries remain in the session. Individual audit files persist independently.

## Knowledge, models and execution

- Identity resolves by stable entity ID on each request. Definitions retain the reusable construction graph. Backend Identity owns source manifests and compilation state.
- A connected, applied Knowledge node uses the existing lexical chunk search. Retrieval supports query, offset, limit and continuation. Prompt assembly selects whole chunks within the node's token budget, defaulting to 2,000 tokens and capped at one quarter of the model window.
- Chunk IDs, source IDs, heading paths, source versions, content hashes, line locations and untrusted-source classifications accompany retrieved evidence. Reference-only source bodies are excluded by the existing identity compiler/runtime.
- Missing and stale identities are explicit UI states. Identity generation uses the existing human-operated Backend Identity interface.
- Assignment chat uses the selected definition's model override or shared model settings. The existing provider pipeline validates availability, enforces its timeout and context budget, and generates the response. Missing configuration produces a persisted error and user message.
- Engine connections expose available capabilities. The user selects a capability with its entity-scoped source/ticker binding and explicitly approves each execution. Agent policy defaults to disabled. The backend validates the applied node, registration, version, capability membership, parameters, permissions and active Universe.
- Current assignment execution supports `daily-price / price` and `yahoo-financials / financials` and `earnings` through the existing Identity capability adapter. Additional registered engines appear in construction discovery. CHronoZ, Excel and other operations need assignment capability adapters for this execution path.
- A pending audit and session entry are written before provider execution. Final outcomes and integrity-checked result references follow execution. Up to three successful results from the current identity and graph revision can enter later prompts within a shared bounded allowance. Oversized results appear as explicit references.

The model receives untrusted evidence and compact availability metadata. Backend permissions remain outside personality instructions and source content. Full registry schemas stay at the backend execution boundary. The prototype uses explicit UI approval for engine calls.

## Compatibility and rendering

Previously saved zero-engine and single-CHronoZ graphs retain their fields and revision behavior. Legacy CHronoZ nodes infer `get_report` when operation is absent. New fields are optional. The existing draft/apply flow, protected grounding policy, source controls, graph handles and node styling continue through their established components.

Assignment buttons follow camera movement and live dragging in the existing DOM-label paint pass. Screen-space buckets restrict collision checks to neighboring chips. Controls yield to overlapping world geometry and ports. The selected entity menu also opens assignment management. Assignment counts use a memoized map. Identity and knowledge loading occurs when assignment UI or runtime operations request it.

## Changed files

### Backend and bridge

- `electron/ai/entity-agents.cjs` adds assignment/session persistence and scoped runtime operations.
- `electron/ai/agent-construction.cjs` extends Engine configuration and graph validation.
- `electron/ai/standalone-chat.cjs` accepts backend-assembled assignment evidence in the existing provider runner.
- `electron/ai/ipc.cjs` registers guarded assignment operations and engine discovery.
- `electron/preload.cjs` exposes the narrow bridge methods.
- `types/entity-agents.ts` defines assignments, session responses and bridge contracts.
- `types/ai.ts` extends construction configuration and the AI bridge.

### UI

- `components/app-shell.tsx` passes assignment context into the existing Workbench.
- `components/worldview.tsx` opens assignment management and maintains chip indicators.
- `features/worldview/entity-agents-dialog.tsx` and `entity-agents.css` implement assignment management and direct chat.
- `features/worldview/chip-labels.ts` positions controls and protects neighboring canvas interactions.
- `features/worldview/entity-actions.tsx` adds selected-entity assignment access.
- `app/worldview.css` styles attached assignment controls and counts.
- `features/agent/agent-construction.tsx` supports repeated Engine nodes and entity-aware configuration.
- `features/agent/agent-settings.tsx` carries optional assignment context.
- `features/agent/engine-node-settings.tsx` configures each node from registry contracts.
- `features/agent/agent-workbench.css` contains library content within the existing sheet height.

### Verification and report

- `electron/ai/entity-agents.test.cjs` covers persistence, concurrency, reuse, isolation, graph compatibility, retrieval, unavailable models, authorization, result integrity and retry history.
- `features/worldview/chip-labels.test.cjs` adds control/port and neighboring-geometry regression checks.
- `scripts/electron-entity-agents-smoke.cjs` exercises the real desktop prototype with disposable data.
- `package.json` adds `test:entity-agents:electron`.
- This report records architecture, verification and prototype limits.

## Verification

| Check                                              | Result                                                 |
| -------------------------------------------------- | ------------------------------------------------------ |
| `npm.cmd run typecheck`                            | Passed                                                 |
| `npm.cmd run build`                                | Passed, including TypeScript and secured static export |
| `npm.cmd test`                                     | 490 tests, 488 passed, 2 skipped, 0 failed             |
| `node scripts/electron-entity-agents-smoke.cjs`    | Passed                                                 |
| `node scripts/electron-worldview-smoke.cjs`        | Passed after correcting control collisions             |
| `node scripts/electron-backend-identity-smoke.cjs` | Passed                                                 |
| `node scripts/electron-construction-smoke.cjs`     | Failed during fixture setup with `Unknown agent`       |

The two skipped tests are optional live OpenRouter and NVIDIA experiments requiring explicitly configured test credentials. Live LLM inference and financial API execution remain unverified by this implementation session. Unit tests use explicit test adapters. The desktop assignment scenario requires an unconfigured model and forbids financial calls.

The older construction smoke requests built-in `wonnyy-agent` and `chronoz` profiles from its fresh fixture. The production AgentStore creates an empty first-run agent collection. Its setup stops before opening construction. Existing Node construction compatibility tests pass, and the new desktop scenario creates a definition through the current UI before opening the Workbench.

The prototype scenario covers TSMC creation, Research Agent creation and assignment, the original Workbench, three independently configured and connected Engine nodes, Knowledge configuration, save/apply, direct chat, entity context, unavailable-provider behavior, reload persistence, definition reuse on a second entity, isolated history and Knowledge Card access. Workbench and chat screenshots are written under `test-results/`.

Electron desktop tests ran outside the managed execution sandbox after Windows sandbox ACLs prevented Electron renderer startup. Each test used disposable application and Universe directories.

One full test run encountered a Windows `UNKNOWN` error while renaming a temporary connector metadata file. A separate full-suite rerun was used for final verification.

Next.js 16.4.3 emitted a security-upgrade advisory after compilation during one build. The requested build completed successfully on retry. The installed framework should receive the recommended security upgrade in separately scoped dependency work.

## Debug Audit

### Component

WorldView assignment controls and assignment context assembly.

### Affected files

`features/worldview/chip-labels.ts`, its tests, `app/worldview.css`, `features/worldview/entity-actions.tsx`, `components/worldview.tsx` and `electron/ai/entity-agents.cjs`.

### Observed error

The first full WorldView regression could not start south-port relationship drags. A later file-building hover was intercepted by a neighboring assignment button. A configured-provider unit test also exceeded the model context budget with three engine schemas in its prompt.

### Root cause

DOM controls sat above canvas hit targets. Moving below the owning chip's port still allowed overlap with neighboring entities and buildings. Prompt assembly included full capability input/output schemas.

### Changes applied

Reserved port clearance, indexed neighboring canvas geometry, added collision-aware control visibility and retained menu access. Compact capability metadata replaced schemas in model context. Failed user-only turns are excluded from provider exchange pairing while their transcript entries persist.

### Verification

Geometry tests, the full WorldView desktop suite, scoped runtime tests and the entity assignment desktop scenario passed. Full registry schemas remain available to the backend validator.

### Remaining limits

Retrieval is lexical. Human approval occurs per invocation. Additional engines need entity capability adapters. Session/context retention is bounded as described above. Live provider verification and the older construction fixture require follow-up validation.
