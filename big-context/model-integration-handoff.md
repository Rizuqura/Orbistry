# Model integration engineering handoff

> Current online extension: [online-integration-handoff.md](./online-integration-handoff.md). Gemini now shares the authorized chat pipeline with Ollama; IPC is version 9 and the prompt is v5. The local-runtime details below describe the preceding checkpoint where not explicitly updated.

The intended design is defined by [task-model-integration-architecture.md](./task-model-integration-architecture.md). This document describes the implementation. Earlier task notes and the archived README remain historical records, not instructions to restart completed milestones.

## Ownership and request flow

`AppShell` composes the knowledge UI and a single `useChatRuntime` hook. Both chat surfaces render that controller. The renderer stores drafts, view selection, provisional text, and status; Electron owns persisted conversations and prompt history.

The flow is renderer → sandboxed preload → versioned AI IPC → ChatService → Brain Scope / controlled source read → history budget / prompt → Ollama → response validation → immutable audit → conversation snapshot → renderer completion.

| Module | Responsibility |
| --- | --- |
| `features/chat/desktop-client.ts` | Renderer/preload/main compatibility handshake, version 8 |
| `features/chat/use-chat-runtime.ts` | Session isolation, context transitions, bridge calls, subscription cleanup |
| `features/chat/runtime-state.ts` | Explicit run states and rejection of late events |
| `features/chat/chat-panel.tsx` | Chat presentation, focus and pointer containment, floating controls |
| `features/chat/conversation-history.tsx` | View, resume, new, rename, delete, and clear actions |
| `features/model-settings/model-settings.tsx` | Provider/model selection and bounded generation settings |
| `electron/ai/ipc.cjs` | AI channel registration and compatibility gate |
| `electron/ai/chat-service.cjs` | Request ownership, one-run limit, conversation lifecycle, retries, cancellation |
| `electron/ai/context-identity.cjs` | Deterministic source/hash identity derived from approved Brain Scope |
| `electron/ai/conversation-store.cjs` | Validated snapshots, serialized updates, pending-turn reconciliation |
| `electron/ai/json-store.cjs` | Atomic JSON publication and metadata path checks |
| `electron/ai/history-budget.cjs` | Whole-exchange trimming with source/output budget reservations |
| `electron/ai/orchestrator.cjs` | Fresh run-owned authorization, prompt assembly, provider execution, audit publication |
| `electron/ai/response-validation.cjs` | Decoded answer prefixes and final output validation |
| `electron/ai/providers/ollama-provider.cjs` | Local HTTP boundary, discovery, preparation, cancellation and deadlines |
| `electron/ai/providers/ollama-stream.cjs` | Incremental UTF-8 / NDJSON decoding, bounded buffers and completion validation |
| `electron/ai/model-registry.cjs` | Installed models, profiles, persisted application settings, capability checks |
| `electron/ai/run-store.cjs` | Exclusive immutable run publication and legacy/v2 record reads |

The compatibility export in `components/chat-panel.tsx` keeps the existing Planet component import stable. New chat implementation belongs in `features/chat/`.

AI Terminal is the dedicated model configuration tab. It shows Ollama connectivity, selected model, approved context, and actionable chat readiness, with installed-model switching, generation limits, streaming, and advanced timeouts. Readiness requires an installed selected model and an attached approved context; it does not claim the model is already loaded. Opening the tab refreshes discovery when idle. The Workspace and Planet View retain their shared chat controller; general Settings provides vault selection and a link to AI Terminal.

Composer focus is restored explicitly after history selection, New Chat, and source resumption inside the originating chat surface. Background context updates do not autofocus the composer or interrupt typing in Search. The Electron regression uses keyboard typing after switching chats and resuming a different source, rather than relying only on programmatic textarea filling.

Context review, source reapproval, chat deletion, and Station confirmations use the shared asynchronous HTML dialog in `features/dialogs/use-confirmation.tsx`. Browser `window.confirm`/`window.alert` calls were removed from these flows because Electron has reported Windows input-focus failures after native browser dialogs. Cancel and Escape reject the action, unmount cancels a pending confirmation, and dialog dismissal restores the previous element's focus. Source approval also rejects a preview if the vault scan/session changed while it was open. The desktop regression adds context through the actual review UI and checks click-then-keyboard input after cancel, escape, and approval; direct context IPC previously bypassed this failure path.

## Conversation and authorization invariants

- Only one explicitly approved, unchanged Markdown source can be used. Selecting another object does not change approval.
- Context identity includes source ID, relative path, SHA-256 hash, and scope mode. Vault access is scoped to a canonical root before loading conversations.
- Client input cannot supply history, source contents, an arbitrary model, or an arbitrary vault path. The backend validates every request and rechecks context before execution.
- History is assembled from completed user/assistant exchanges. Failed and cancelled answers never enter subsequent prompts.
- Up to 12 recent exchanges are selected within the configured context window. Budgeting uses a conservative UTF-8 estimate, reserves the output allowance and 256 tokens, and never silently truncates the source or increases the context window.
- History selection is separate from authorization. Resume explicitly replaces Active Context only after confirming that the original file hash is still available.
- Updated sources require explicit reapproval and a new conversation. No source snapshots or automatic knowledge mutations are stored.
- Model changes are execution-only. Each answer records its actual provider/model; earlier messages remain intact.

## Persistence and failure recovery

Conversation JSON schema 1 is stored under the active vault's `.wonnyy/conversations`. Model settings schema 1 lives under Electron `userData`. Files are validated before use, written through a serial queue, flushed, and atomically renamed. Corrupt or unsupported snapshots are reported rather than replaced.

A turn is published in this order:

1. Persist the user message and pending attempt, including run/request IDs.
2. Prepare and execute the request.
3. Publish the immutable terminal run record.
4. Update the conversation from that record.
5. Return successful completion to the renderer.

On a later application session, only pending references in existing conversation files are reconciled. A recorded success restores its missing assistant message exactly once. A missing terminal record marks the turn interrupted. No model request is automatically replayed. Deleting a conversation removes its recovery references, so audit files cannot resurrect it.

Legacy run schema 1 remains readable without rewriting. Conversation runs use schema 2 with conversation/context/request identity, captured settings, diagnostics, and success/failure/cancellation status. Raw approved source content and prompts are excluded from run records.

If audit publication or snapshot finalization fails, success is not presented. The pending reference is retained for reconciliation; storage errors must be resolved before normal operation resumes.

## Runtime and provider policy

One generation is admitted at a time. Admission, metadata mutations, and execution-setting mutations are serialized at the service boundary. Context/vault changes cancel the active request before modifying knowledge state. Cancellation requires the originating window and request ID and waits for cleanup.

The renderer reducer tracks preparing, loading, generating, validating, recording, cancelling, ready, context-needed, unavailable-model, error, and restart-required states. Request/session identity prevents stale events from another conversation or vault replacing current content.

Ollama is restricted to unauthenticated loopback HTTP. Discovery and model details are normalized; compatible unprofiled text models can be selected. Qwen3 4B is the default only when installed; missing selections never silently fall back to another model.

Default settings are an 8,192-token context, 2,048 output tokens, temperature 0.2, streaming, and five-minute keep-alive. Deadlines are five minutes for model preparation, two minutes of generation inactivity, and ten minutes for the complete run. Capability/context limits are validated before selection and execution.

Timeout recovery: prompt evaluation before the first response data receives the larger of the load and inactivity allowances; subsequent stream activity resets only the inactivity timer. Chat requests use Ollama transport streaming even when progressive UI text is disabled, so a long but active answer does not hit a whole-response inactivity deadline. One automatic timeout retry is shared across preparation, generation, and answer correction within the original ChatService deadline. It clears provisional text, shows automatic retry status, and preserves the same request, user message, and terminal audit. Cancellation, the absolute deadline, invalid output, and non-timeout errors do not trigger recovery. This improves slow-response handling without claiming faster model inference.

Structured JSON answers are retained. Streaming exposes only decoded answer text; the provider thinking channel and JSON framing are omitted. Partial text is provisional and is discarded on cancellation or invalid completion. Final validation rejects empty, malformed, truncated, planning-only, and exact task-echo responses. These are deterministic safeguards, not a general proof that every model claim is accurate.

Prompt version `orbistry-conversation-v4` emphasizes the latest user task and distinct numbered facts when a count is requested. Final validation also checks substantial answers (at least 160 characters) for exact repetition of a previous answer to a different question, ignoring case and whitespace. Short answers, identical questions, and explicit repeat/quote requests are exempt. One repeated-answer correction shares the existing answer-repair allowance and deadline, resets provisional text, and keeps rejected text out of history. It uses the existing capability-gated thinking repair, which can take longer; thinking text remains hidden. A second duplicate fails explicitly. Paraphrased repetition and general instruction adherence still require answer-quality review.

An exact task echo or planning-only result receives at most one correction within the same authorized run and absolute deadline. Its rejected text is excluded from history, provisional text is reset, and the correction count, initial usage, and additional generation time are recorded. The complete correction prompt receives its own budget check; its token estimate and any additional history trimming are recorded separately. A second invalid result fails explicitly. Truncation, provider errors, and malformed output do not trigger this correction. This is a bounded answer-format recovery, not an autonomous agent loop.

The normal local request disables thinking for latency. For the single correction attempt, the Ollama adapter enables its separate thinking channel only when model discovery confirms that capability. Thinking text is still discarded. This is necessary for the tested Qwen3 4B outline task and can make a correction noticeably slower; the same cancellation and absolute time limit remain in force.

## Verification and extension

The [2026-09-06 verification record](./model-integration-verification.md) distinguishes passing engineering checks from observed Qwen answer-quality and performance limits.

Run `npm test`, `npm run typecheck`, `npm run format:check`, and `npm run build`. The package scripts discover integration tests automatically. `npm run test:chat:electron` exercises the real sandboxed Electron/preload/renderer path against a local mock provider and temporary vault. It requires desktop process permission, not a separate browser installation. `npm run test:chat:live` uses real local Qwen with isolated source documents. Reports and screenshots go to ignored `test-results/`.

Live checks cover ten turns per source, source switching, restored history, cold load, streaming, cancellation, and recovery. Installed alternate models are tested when available; unavailable candidates are explicitly listed. Inspect the recorded answers as well as structural checks before declaring acceptance.

Provider protocol references: [Ollama chat API](https://docs.ollama.com/api/chat) and [NDJSON streaming](https://docs.ollama.com/api/streaming). Keep the structured answer schema distinct from the provider's transport events and separate thinking field.

Use `npm run format:integration` for the touched integration modules. Keep filesystem access in Electron, provider-specific fields in the adapter, and presentation concerns in feature modules. Add behavior tests when changing authorization, persistence ordering, budgets, stream parsing, or lifecycle transitions.

Planned beyond this milestone: remote credentials/providers, retrieval/chunking, analytics tools, source snapshots, and autonomous agents. No implementation of these is implied by the provider-neutral contracts.
