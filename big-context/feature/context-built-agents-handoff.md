# Build agents from Context Boxes

**Single-file follow-up:** [Single-file agent sources](single-file-agent-handoff.md) now lets every non-LLM node use a directly reviewed vault file instead of a box. Combined guidance now supports up to 80,000 characters, subject to the model budget; the earlier 16k cap below is superseded.

Implemented 2026-10-27. This extends the floating Agent Construction editor opened from **Agent → an agent's three-dot menu**. It uses existing vault-owned boxes and the same shared template for Orbistry, CHronoZ and future registered default agents. Global Settings remains unchanged in purpose.

## Operator flow

1. Create named Context Boxes from explicitly reviewed vault files in the existing Planet View context manager.
2. Open an agent's construction editor. Select a node, choose **Context Box source**, and expand the listed files to inspect their full extracted contents and estimated tokens.
3. Choose **Use reviewed box for …**. The binding is staged in the editor. Add/connect optional nodes when needed; all inputs connect to LLM and LLM connects to Output.
4. **Save draft** persists inactive work. **Save & apply** validates and activates the configuration for subsequent requests. Editing, previewing and applying never creates a conversation.
5. **+ New Chat** preselects the configured Context box. If Knowledge is configured in this vault, an explicit inclusion checkbox displays its name and source count. Cancelling writes no conversation. Unchecking creates a chat with only the chosen primary box.

Source review scrolls inside the inspector so the canvas stays accessible. Add chooses an unoccupied node position instead of covering the existing Skill node; existing saved coordinates are preserved.

| Node        | Meaning of its Context Box                                                                     |
| ----------- | ---------------------------------------------------------------------------------------------- |
| Personality | Tone, persona and communication examples.                                                      |
| Output      | Report structure, formatting conventions and answer examples.                                  |
| Skill       | Analytical methodology/playbooks. A document cannot install executable capabilities.           |
| Workflow    | Single-pass research process guidance. No loop/workflow executor is added.                     |
| Context     | Default research box offered when explicitly creating a new chat; current chats are untouched. |
| Knowledge   | Additional research sources offered for inclusion in each explicitly created chat.             |
| LLM         | Provider/model selection remains in its existing controls.                                     |

Personality, Output, Skill and Workflow are untrusted configuration reference material, subordinate to protected policy. They are sent in distinct `agent-construction-reference` envelopes. They are outside the factual research/citation manifest. Factual questions about those documents require explicitly including them as research sources. Knowledge and Context use the existing readable Markdown/CSV/extracted-PDF pipeline and local calculations; no new tools or semantic retrieval are introduced. The separately registered knowledge-consolidation proposal capability retains its existing restrictions.

## Persistence, change handling and boundaries

The optional `contextBox` node property stores canonical vault identity, stable box ID, reviewed label/revision/time, token estimate and approved source/hash manifest. It stores no document text. Existing schema-1 agent construction drafts/active revisions remain readable without automatic rewrites. No storage keys or app IDs change. Renaming a box preserves identity; current names are resolved when executing. Applying validates every binding against the current vault, membership and content hashes.

On each send, active behavior-guide sources are re-read against their reviewed hashes. Changed, missing, relinked or cross-vault guidance blocks sending until the operator reviews and attaches the current box again, then applies. Unselected research defaults are not injected or required by an existing chat. Defaults from another vault are not offered by the new-chat picker.

A conversation may additionally store `agentKnowledge`, recording the Knowledge binding explicitly confirmed at creation. Its sources are merged with the primary box, deduplicated and bounded by the existing 32-file limit. Knowledge membership/content changes block further use of that binding; review/apply and explicitly create a new chat. Later agent configuration changes do not broaden previously created sessions. Explicitly switching a chat's primary Context Box removes the additional Knowledge binding; historical answers and run records retain their original source provenance. The primary box retains the app's existing per-turn latest-content behavior.

Immutable runs record role-reference box identities and source hashes in `diagnostics.agent.configurationReferences`, plus the optional research Knowledge binding in `diagnostics.agentKnowledge`. Guide bodies are not copied into diagnostic records. Assistant messages preserve the research Knowledge label alongside their original verified factual sources. Legacy conversations and unrelated history remain unchanged.

Guidance is capped at 16,000 characters in total; each reviewed box uses the existing 80,000-character limit. All reference envelopes count toward model-window budgeting. Oversized input fails explicitly without silent truncation. Online chat and Settings disclosures now include configured agent references among the transmitted material. Appearance assets remain excluded from prompts.

The protected prompt identifies role guidance separately from evidence. Structured citation IDs are checked only against the session research manifest. Prompt/schema checks cannot guarantee semantic interpretation, correct instruction following or factual correctness.

## Verification

- **248 deterministic tests passed**, zero failed or skipped. Eight added service tests cover actual role envelopes versus factual evidence, draft/apply, explicit Knowledge inclusion and independent source manifests, duplicate creation guard, unchanged historical provenance, rename, source/membership changes, cross-vault rejection, guidance/model budgets, CHronoZ contextual skills without executable permissions, and rejection of configuration-only citation IDs.
- Strict TypeScript, formatting and production static build pass.
- `scripts/electron-box-agents-smoke.cjs`: isolated vault/profile with synthetic transport. Full UI source review and all five bindings, draft/reopen/apply, no raw document persistence, no accidental/cancelled sessions, default Context selection, checked/unchecked Knowledge creation, actual main-process request envelopes, session-only research provenance and restart restoration pass. Evidence is written to ignored `test-results/box-built-agents.json` and `box-built-agent.png`.
- Existing Agent Construction and CHronoZ Electron regressions pass: graph drag/drop, pointer/keyboard connections, keyboard movement, managed PFPs, draft/apply, default-agent separation, reduced motion, source-bound requests and restart. The connection smoke explicitly exposes its handles below the sticky header before pointer input.

No live model was queried for this increment. Synthetic request verification establishes transport, scope and persistence behavior, not the quality with which a real model follows a playbook. No training/fine-tuning, document snapshots, automatic ingestion, retrieval index, agent creation/deletion or executable marketplace skills were added.

The optional `previewConstructionBox` and canonical `getVaultIdentity` IPC capabilities are additive under bridge **18**. Restart Electron after updating its main/preload code.
