# Project checkpoint audit - 2026-09-08

Reviewed implementation checkpoint: `fb76d97`.

## Assessment

Orbistry has functional local model integration and switching, Settings and a dedicated AI Terminal model tab, shared chat surfaces, persistent conversations, and Planet/chat interaction fixes. This is an integration checkpoint, not completion of the intended research experience. The user's current assessment remains authoritative: chat and continuity still have unresolved experience problems.

The product goal remains a coherent local-first research workflow over permanent, user-owned knowledge with replaceable models. The immediate architecture deliberately narrows that goal to one approved Markdown source, natural follow-ups, safe source changes, and recoverable conversations. Multi-file research in `goal.md` remains a broader unmet goal, not a capability delivered by this checkpoint.

## Findings, in priority order

1. **High - conversational quality is not yet accepted.** The historical live verification records repeated summaries instead of focused follow-ups, missed formatting instructions, and correction latency up to 278.9 seconds. Deterministic tests establish lifecycle behavior, not natural conversation quality. Recent repair changes have not received a fresh full live benchmark. Reproduce the user's actual failing chat flows and review answers and latency, not just completion status.
2. **High - visible history does not imply full model memory.** `electron/ai/history-budget.cjs` retains at most 12 completed exchanges and removes more when the source and output reservation consume the window. Dropped-exchange counts are recorded in backend diagnostics; the renderer has no matching presentation of that field. A saved conversation can therefore look continuous while earlier discussion is absent from inference. Make this boundary understandable and define a deliberate longer-conversation policy before promising continuity.
3. **Medium - model context is limited to one Markdown file.** Both `features/chat/context-readiness.ts` and `electron/ai/context-identity.cjs` enforce this. The broader context/station system is not equivalent to multi-source model support. Comparing files, chatting over folders, and PDF/CSV inference remain outside this runtime. Stabilize the single-source benchmark first, then extend authorization, identity, budgets, provenance, and isolation tests together.
4. **Medium - old conversation resumption requires unchanged source content.** Persistence preserves messages and hashes, but no source snapshots. Changed or missing sources leave old conversations viewable without resumable original knowledge. This is a defensible authorization boundary, but an unresolved continuity limitation for research that evolves over time. Clarify view/resume/reapprove behavior and decide whether future immutable source snapshots are needed.
5. **Medium - documentation describes incompatible runtime states.** The historical body of `state.md` still says prototype chat is disconnected. The handoff describes capability-gated thinking during correction, while `electron/ai/providers/ollama-provider.cjs` sets `repairThinking = false` and the provider regression explicitly verifies thinking stays disabled. Earlier thinking-enabled repair results must not be presented as evidence for today's repair path. Consolidate current status and keep dated verification historical.

## Progress supported by code and checks

- Local Ollama discovery and installed-model selection are separated from vault knowledge state; model metadata is recorded per execution.
- Backend-owned conversations, context hashes, controlled reads, persisted audits, streaming, cancellation, retry bounds, and restart reconciliation have automated coverage.
- Settings and AI Terminal expose vault/model setup and readiness. The model configuration tab exists independently of the Workspace and Planet chat surfaces.
- Planet View excludes chat overlays from its wheel handling; chat captures pointer, wheel, and keyboard events. Existing layout/hit-testing tests pass. This supports the reported interaction fixes without claiming every visual behavior has been manually revalidated.
- PDF asset preparation and character-map handling are included in the checkpoint; PDF readability does not imply PDF model context support.

## Verification on this checkpoint

- `npm test`: 90 passed, zero failures.
- `npm run typecheck`: passed.
- `npm run format:check`: passed for the configured integration scope.
- `npm run build`: passed, including static production export.
- Desktop smoke: initial restricted launch crashed. The permitted rerun did not finish after several minutes and was interrupted; desktop verification is inconclusive for this checkpoint. The existing success report is dated September 6 and was not counted as a fresh pass. Investigate the harness stall and rerun before claiming current end-to-end acceptance.
- Full real-Ollama acceptance was not rerun in this audit. The 2026-09-06/07 verification remains historical evidence. Real alternate-model comparison is not established by mock model-switching checks.

This is a focused state/goal and integration review, not an exhaustive security or line-by-line repository audit.

## Recommended next milestone

Close chat reliability and continuity before adding agent features. Use a representative source for at least ten natural turns, switch to a second source for ten more, return to the original conversation, restart, switch installed models, and cancel/recover. Add a conversation longer than 12 exchanges to expose the memory boundary. Review source accuracy, follow-up relevance, focus/draft behavior, and perceived latency with the user. Record concrete failures and acceptable latency thresholds; do not mark the milestone complete solely because requests return successfully.

After that acceptance, expand to explicit multi-source research. Keep models replaceable and all knowledge authorization owned by Orbistry; remote providers, autonomous agents, and model-written vault changes remain separate future scope.
