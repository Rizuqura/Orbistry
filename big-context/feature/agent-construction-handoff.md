# Agent Construction Studio

**Add agent follow-up:** [Add agent](add-agent-handoff.md) now creates blank custom contacts with the same construction editor. The earlier limitation on creating agents at the end of this document is superseded; deletion remains unavailable.

**2026-10-27 follow-up:** [Context-built agents](context-built-agents-handoff.md) adds reviewed boxes for every non-LLM node. Its role semantics supersede the descriptions below: Context provides a new-chat default, Knowledge can add explicitly confirmed research sources for all agents, and Personality/Output/Skill/Workflow boxes provide separate configuration guidance. Registered executable/proposal capabilities remain distinct.

Implemented from `Orbistry_Agent_Construction_Settings_Retro_UI.md`, then relocated at the user's explicit request on 2026-10-27. **Agent → an agent's three-dot menu** now opens the same Studio as a floating native dialog for that agent. This placement supersedes the original specification's Settings-tab requirement. Global Settings contains vault/provider/model controls only; the tab, its routing state and the duplicate legacy profile form/styles were removed.

## Shared defaults and profile persistence

`AgentStore.list()` enumerates `AGENT_DEFINITIONS`; the renderer uses that list rather than hardcoding the two default profiles. Every default agent receives the same Context → LLM → Output graph with a connected Skill slot. Orbistry starts with its registered knowledge-consolidation capability; CHronoZ's slot, instructions and PFP remain unconfigured. Future built-in agents use this same template/editor; a capability still requires explicit app registration. Avatar initials now accept any single uppercase alphanumeric character.

The editor supports profile name, description, personality, behavior instructions and the existing native PFP picker/processor. PFPs are validated PNG/JPG/WebP up to 5 MB, processed to 128×128 PNG, and stored as managed content-hash references. Image bytes are not placed in graph JSON. Preview, change and removal can be staged without altering the shared live avatar. Applying updates the profile roster, contacts, chat headers and subsequent model requests.

Agent schema 1 gains an optional validated `construction` section; legacy reads do not rewrite profiles. It stores a draft, active snapshot, their separate revisions, draft avatar reference and the last 20 save/apply/profile events. **Save draft** does not change runtime identity, instructions, model or PFP. **Save & apply** validates and applies the draft for subsequent requests. Revision checks reject stale saves. The legacy profile-save API remains compatible, but its duplicate UI was replaced by the Studio. Historical conversation/run records are never rewritten. Relocation does not migrate or reset saved construction data.

## Canvas and node semantics

The bounded canvas uses typed nodes and SVG connections, not an execution engine or WebGL surface. Library drag/drop and Add buttons create nodes; pointer capture moves nodes on an 8 px grid. Focused nodes move with arrow keys and delete with Delete. Output/input handles support both mouse dragging and keyboard/click connection. Inspector actions remove connections/nodes. Draft graphs may be incomplete; applying requires Context, LLM and Output, all connected inputs, valid IDs, bounded coordinates, unique categories and supported directional edges. Cycles, duplicate edges, raw image fields and unknown capabilities are rejected by the backend.

- **Context:** the current chat's explicitly bound Context Box. The graph cannot authorize sources or mutate box membership.
- **Personality:** connected tone/research preferences, in addition to the profile's personality field.
- **LLM:** inherit shared Settings or choose a per-agent provider/model. Credentials and generation-budget controls remain shared; model availability/capacity is checked by the existing runtime before sending. Chat provider notices and the status bar show the effective selection. General Settings explains when an agent overrides shared defaults.
- **Output:** text through the existing streaming/citation pipeline, with connected output-format preferences.
- **Skill:** only app-registered capabilities for that agent. It controls the available consolidation entry point; it does not execute arbitrary tools automatically.
- **Workflow:** single-pass execution through the existing chat runtime, with optional behavior preferences. `/loop` remains unimplemented and cannot be enabled by drawing a node.
- **Knowledge:** reviewed, session-bound preview only; its 64–8,000 token estimate cap is enforced by the retrieval backend. It does not automatically inject knowledge or broaden documentary evidence. This node is unavailable for an agent without the registered consolidation capability.

Connected preferences are compiled beneath the fixed protected grounding policy. Applying cannot grant browsing, filesystem writes, marketplace tools or expanded source authority. Custom-instruction validation is a guardrail, not semantic/factual correctness verification. An applied graph's revision, hash, display name and compiled-preference hash are recorded in new immutable run diagnostics (`orbistry-conversation-v15-agent-construction`). Per-agent model selection leaves the shared model setting unchanged. Construction saves stop background model checks before taking exclusive write admission; they do not interrupt or rewrite an in-flight chat.

## Visual behavior and accessibility

The Studio uses the requested restrained retro palette, circular floating nodes, subtle outlines and static shadows; other app surfaces retain their existing style. Idle movement affects the inner bubble only, never graph coordinates, handles or hit areas. Reduced-motion disables bubble/handle animations. No rendering timer, canvas shader, blur or new dependency is added. Responsive side panels, independent canvas scrolling, a sticky close header and save/status footer keep controls reachable. The floating dialog is scoped to the selected contact, so there is no global agent selector. Close/Escape protect unsaved edits, block closing while saving and restore focus to the triggering menu.

## Verification

- Deterministic tests cover shared defaults/no read-time migration, independent agent drafts and active revisions, managed PFP draft/apply references, stale saves, invalid graphs/capabilities and legacy instruction synchronization. ChatService/orchestrator integration verifies actual compiled identity/preferences, per-agent model selection, fixed grounding and unchanged historical run provenance. Knowledge tests verify the applied preview budget.
- `npm run test:construction:electron`: isolated profile and synthetic provider transport; contact-menu entry, floating dialog scoping, native PFP upload/preview/removal staging, library drag/drop, pointer node movement, keyboard movement, keyboard/mouse connections, removal, draft/reopen/apply, actual main-process request contents, agent isolation, restart, reduced-motion and absence of construction from global Settings. It also exercises unsaved Close/Escape cancellation, discard and focus restoration. Evidence: ignored `test-results/construction.json` and `agent-construction.png`.
- The existing `electron-chronoz-smoke.cjs` regression passes, covering histories/drafts, blank CHronoZ skills/PFP, agent identity separation and restart behavior.
- The updated `electron-agent-workspace-smoke.cjs` regression also passes: policy/conflict checks, native PFP processing, unsaved cancellation, history, pane controls and source-bound requests remain functional through the floating editor.
- Full deterministic suite: **235 pass, 0 failed, 0 skipped**. Strict TypeScript, formatting and production build pass. Transport checks are synthetic; live-model grounding quality is not established.

The additive `listAgents`/`saveAgentConstruction` IPC methods retain bridge 18. Restart Electron to load them; a stale backend reports that a restart is needed. This release does not add a general multi-step executable workflow runner, automatic knowledge ingestion, agent creation/deletion, graph-version rollback or a skills marketplace.
