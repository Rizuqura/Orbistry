# Project progress cross-check - 2026-09-10

Orbistry has a working, provider-independent single-source chat foundation. It has not yet completed the broader research-workspace MVP in `goal.md`. Engineering progress is strongest in model execution, authorization, persistence, and failure handling; the largest remaining gaps are sustained conversational quality, multi-source context, and basic reading/search workflows.

Baseline: commit `80ffb5e`, package version `0.0.4`, published tag `v0.0.4-amadeus`. This is a document-to-code progress audit, not an exhaustive security audit or a fresh hosted-model benchmark. The existing `next-env.d.ts` working-tree change was left untouched.

## How to read the status

- **Implemented:** a concrete code path exists, with relevant regression evidence where noted. This does not certify every real-world input or hosted model.
- **Partial:** some of the intended behavior exists, but an acceptance criterion remains unmet.
- **Pending acceptance:** infrastructure exists, but current end-to-end product-quality evidence is insufficient.
- **Deferred or superseded:** an older proposal is not the current implementation commitment.

## Original task and goal cross-check

| Planning area | Current status | Evidence and remaining gap |
| --- | --- | --- |
| `task.md` T0-T3: repository, context docs, structure, shell | Implemented | Electron app, Next static renderer, feature modules, shared types, navigation and settings exist. The original unchecked boxes are not a reliable progress counter. |
| T4: local vault access and discovery | Implemented | `electron/vault-service.cjs`, native vault selection, recursive supported-file discovery, rescan and visible issues. Large-vault performance is not established by this audit. |
| T5: Markdown reader and viewer | Partial | Controlled reading exists. `components/document-workspace.tsx` renders Markdown in a `pre`, rather than rendering headings, links, lists and tables as required by `goal.md`. |
| T6: CSV reader and viewer | Partial | Basic table, quoted commas, headers, row/column counts exist. The parser splits physical lines before parsing quoted fields, so multiline quoted cells are not supported; malformed quoting is not reported. This is not a robust CSV ingestion layer. |
| Workspace multiple tabs in `goal.md` | Not implemented | `AppShell` holds one `openedFile`; the visual tab strip contains one document. Opening another document replaces it. |
| T7: search | Partial | `knowledge-sidebar.tsx` filters names and paths; PDF text search is a separate backend path. Markdown/CSV content search required by the original plan is missing. |
| T8: context builder | Partial against broad goal | Manual multi-object context preparation exists in Station service, including directory expansion. Actual chat requires exactly one approved, unchanged Markdown source. Question-driven retrieval is not implemented and later plans deliberately prioritize manual approval. |
| T9: model abstraction | Implemented | Provider registry and normalized settings/descriptors route execution through Ollama, Gemini or NVIDIA. Knowledge authorization stays outside adapters. |
| T10: OpenRouter integration | Superseded route; OpenRouter absent | Model choice and remote execution are implemented through direct Gemini/NVIDIA adapters. The exact OpenRouter task is not complete, but its model-independence objective is substantially delivered. |
| T11: context-aware chat | Implemented narrow slice; acceptance pending | Source-grounded chat, history and provenance exist. Multi-file comparisons and folder chat in `goal.md` are unsupported. |
| T12-T13: errors and configuration | Implemented core | Sanitized provider errors, timeout/cancellation, drafts/retry, backend settings, encrypted remote credentials. OS-backed storage replaces the old environment-only setup proposal. |
| T14: tests | Implemented suite; incomplete product proof | 115 tests pass now. They cover service/adapter/lifecycle behavior; sustained live quality and full original MVP acceptance remain separate. |
| T15-T16: engineering and Git workflow | Established | Instructions, feature separation, commits and version tags exist. Document status maintenance has lagged behind code. |
| T17-T18: integrated workflow and MVP acceptance | Partial | The one-source loop works technically. Required richer reading/search and multi-source research still prevent declaring the original full loop complete. |

Optional PDF support is implemented for preview, navigation, selectable embedded text and text search. Scanned-PDF OCR, DOCX, and PDF/CSV model context are not delivered. Reading a format does not imply the model can use it.

## Stations, Planet View, and Brain Scope

`task-1.md`, `planetview-experience.md`, and `planetview-physics.md` have substantial implementation behind them: manual Station CRUD and assignments, ANY/ALL filters, structural parent visibility, shared selection, Station hubs, deterministic orbital layout, constrained layout relaxation, context review/add/remove/clear, and scope/source provenance. See `electron/station-service.cjs`, `lib/station-projection.ts`, `lib/planet-layout.ts`, and the Planet components. Layout and hit-testing regressions are included in the passing suite.

These documents also describe experience targets, not just implementation checklists. Useful spatial relationships across representative large vaults, all proposed semantic-zoom levels, and mature context-building usability are not established by those tests. The Station projection currently constructs hierarchy and hub membership; that alone does not prove every proposed knowledge-distance or similarity behavior.

The important product boundary is between **available scope** and **actual prompt input**. The scope layer can describe Universe, Station matches, or multiple approved objects. `electron/ai/context-identity.cjs` and `features/chat/context-readiness.ts` restrict chat to one Markdown source in Active Context. A Station or folder can help find candidates, but it cannot currently be used as a whole chat context. Empty-context/general chat is also intentionally blocked by the current integration scope.

## Model integration plans

| Document or milestone | Assessment |
| --- | --- |
| `task-model-integration.md` M7.0-M7.4 | Implemented: fail-closed scope authorization, Ollama connectivity, one-source execution, verified provenance and immutable run records. |
| M7.5 initial chat | Implemented and extended beyond its original non-streaming scope with streaming, cancellation, persisted conversations and model selection. |
| `task-model-integration-architecture.md` | Most runtime architecture is implemented: backend-owned history, context hashes, clean source boundaries, retry/duplicate guards, diagnostics, bridge versioning, settings, history UI and restart recovery. Its natural 10+10-turn product benchmark remains pending current acceptance. |
| `model-integration-online.md` | Gemini technical slice implemented, including secret storage, discovery, execution disclosure and switching. Groq/OpenRouter/Cerebras are absent. Full current live local-versus-online quality acceptance is not established. |
| `model-integration-online-NVIDIA Provider.md` | NVIDIA is integrated through backend and interface, including streaming, cancellation, reasoning separation, errors and provenance. Mock multi-turn/switching tests pass. The specified sustained live benchmark, dependable DeepSeek path, and local-versus-hosted Nemotron comparison are not established. |
| `model-integration-handoff.md` | Useful ownership and persistence reference, but contains stale provider/repair descriptions; see corrections below. |
| `online-integration-handoff.md` | Dated Gemini implementation evidence, not the latest bridge/retry status. |
| `nvidia-provider-handoff.md` | Latest implementation account, including shared Gemini/NVIDIA checks and the nonblocking AI Terminal dashboard. |
| `model-integration-verification.md` | Historical September 6/7 local-model evidence. Preserve its recorded limitations and do not treat old successful repair behavior as verification of changed code. |

The recently requested model-check feature exists: save/load credentials triggers sequential synthetic checks, successful samples receive stars, and the top AI Terminal dashboard shows progress and starred choices. Settings/model actions can interrupt checks; opening the tab no longer cancels the scan. Results are session-only, use a short fixed question and default check settings, and stop on authentication or quota failures. **A star means one sample passed, not that every task works or that the entire catalog was checked.**

## What remains unresolved in chat

1. **Useful, sustained conversation:** the original acceptance requirement is correct, focused follow-ups over at least ten turns on each of two sources, then return/restart/model switching. Historical local runs and short hosted samples are useful evidence, but not current blanket acceptance. User-reported incomplete answers remain relevant evidence.
2. **Memory versus saved history:** at most 12 completed exchanges fit into prompts, fewer under token pressure (`history-budget.cjs`). The UI now states this and can show omitted-exchange counts, so the September 8 audit's missing-disclosure finding is improved. There is still no durable conversation summary or unlimited model memory.
3. **Evolving sources:** changed/missing files leave old conversations readable, but their old source version cannot be resumed. Explicit reapproval creates a new context boundary. No immutable source snapshots or branching exist.
4. **Multi-source research:** requires extending source identity, approval, provenance, budgeting and history isolation together. Removing a UI restriction alone would not implement it safely.
5. **Scale:** token estimates are heuristic; oversized sources fail rather than being chunked. Retrieval, incremental indexing improvements, and a representative large-vault benchmark remain outstanding.

## Where progress drifted

The product principle in `product.md` remains intact: models are replaceable and knowledge stays user-owned. Local files, Stations and saved conversations remain independent of the selected provider. There is no implemented autonomous agent or model-written vault workflow.

The drift is mainly **sequencing and acceptance**, not a change of product identity:

- Direct Gemini and then NVIDIA integration replaced the early OpenRouter route and the later proposed Gemini-then-Groq order. These were explicit user-requested changes and serve model independence.
- Model discovery, provider troubleshooting, and catalog checking advanced before the natural-chat reliability benchmark was closed. They improve access but do not close the underlying product acceptance gate.
- Richer PDF support and model setup now coexist with unfinished basic Markdown rendering, multi-document reading and Markdown/CSV search from the original MVP.
- The context architecture intentionally narrowed to one source to establish authorization and continuity. That is consistent with the immediate plan, but remains a large gap against `goal.md` and the full Station-to-research loop.
- CSV tools, Python/Pandas, retrieval agents, cloud sync and autonomous actions remain deferred. Their absence is not a reason to expand the next milestone before chat acceptance.

There is no defensible overall percentage: old unchecked tasks mix completed foundations, superseded implementation choices, optional extensions and unaccepted experience criteria.

## Documentation corrections needed

| File | Stale or misleading statement | Current interpretation |
| --- | --- | --- |
| `state.md` | Current baseline 0.0.3, disconnected prototype chat, streaming/credentials listed as future | Baseline is 0.0.4; chat, streaming and encrypted remote credentials exist. Historical header notes do not make its body a current state summary. |
| `task.md` | Foundational checkboxes still unchecked; OpenRouter/environment setup assumed | Treat as original task inventory, not live status. Use the crosswalk above to update individual tasks later. |
| `task-model-integration.md` | Next choices include streaming/cancellation | Those exist; acceptance, context breadth and scaling remain open. |
| `model-integration-handoff.md` | Remote providers are future; correction can enable thinking | Gemini/NVIDIA exist; current Ollama adapter explicitly sets `repairThinking = false`. |
| `online-integration-handoff.md` | IPC 9 and no remote transport retries | Current IPC is 11. Gemini has up to two bounded retries for selected pre-stream server errors; NVIDIA retains explicit retry. No automatic failover. |
| `task-1.md` | Preparing a scope invalidates the preceding capability | Current service retains independently owned scopes with expiration; historical wording predates concurrency hardening. |
| `project-audit-2026-09-08.md` | Missing memory disclosure; inconclusive desktop verification; remote work future | Memory disclosure exists and later desktop reports passed; remote integration is delivered. Its broader quality/source limitations still apply. |
| `architecture.md`, `tech-stack.md`, `engineering.md` | Early gateway/runtime proposals and old version labels | Keep as design rationale; concrete runtime is Electron main/preload plus a static Next renderer, backend JSON persistence and direct provider adapters. |
| `goal.md`, `product.md`, Planet experience docs | Aspirational workflow and experience requirements | Preserve as goals. A version bump does not certify their acceptance criteria. |

This audit preserves the source planning documents rather than silently changing their goals or marking unverified tasks complete.

## Evidence checked

- Fresh on September 10: `npm test` passed **115/115**, zero failures; `npm run typecheck` passed. Test output: `test-results/audit-2026-09-10-tests.txt` (local ignored artifact).
- Reviewed September 9 `test-results/electron-online-smoke.json`: passed encrypted credentials, switching, retry/draft retention, restart, and model selection during a stalled scan. Synthetic transports, not real hosted inference. No desktop rerun in this audit.
- Reviewed September 8 local Electron success report and the older failure artifact dates. `chat-electron-failure.txt` predates the later success; it is not sufficient evidence of a current failure.
- Reviewed September 9 `test-results/nvidia-task-fix.md`: two-task synthetic samples passed on Nemotron Super and MiniMax; Lightning and Muse passed the short fact but failed the summary. Lightning's higher-output recheck did not establish reliability. These are dated observations, not today's availability claims.
- September 6/7 Qwen workflow and repair results remain historical and include instruction-following and latency limitations. No fresh real-model benchmark, current model-availability search, installer test or production build was run for this documentation review.

## Recommended next milestone

**Accept the single-source research conversation before expanding the provider catalog further.**

1. Run a reviewed live workflow on the actual chosen model: 10 natural turns on source A, 10 on B, explicit return to A, restart, and model switch. Include a conversation beyond 12 exchanges, a source update, cancellation and recovery. Record actual answers, relevance, factual errors, failures, and latency against agreed expectations.
2. Fix reproduced failures and expose clear memory/source boundaries. Treat sample-check stars as access checks, not quality certification.
3. Close the basic reading/search gaps: rendered Markdown, multiple open documents, Markdown/CSV content search, and correct CSV parsing.
4. Extend explicit multi-file Markdown context, then assess CSV/PDF context needs using real research tasks. Test cross-source attribution and isolation as part of that extension.
5. Consolidate `state.md` and task statuses around dated evidence, keeping earlier milestones as history.

The appropriate release description today is: **0.0.4 delivers local and online model integration with a tested single-source runtime; the full research experience is still in development.**
