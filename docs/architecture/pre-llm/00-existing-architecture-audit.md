# Pre-LLM backend: existing architecture audit

This preserves the audit made before implementation. For current delivered features and external verification limits, read the [implementation status](../../../big-context/backend-feature/Orbistry_Backend_Implementation_Status.md).

## Continuation design approved by task scope

The user requested all remaining backend-folder work on 2026-10-30. Implement an opt-in Settings experiment panel with a schema-5 conversation and schema-3 run in the existing stores. Normal chat must reject experimental conversation IDs and vice versa. Add discrete Node modules for intake, requirements, budgets, registry/evidence, routing, transport, reliability, response validation, metrics and evaluation. The optional externally managed LiteLLM service stays authenticated on 127.0.0.1; Orbistry starts no Python process and therefore owns no proxy subprocess to orphan. Existing adapter transport is reused without agent prompt translation for isolated experiments. Preserve normal chat behavior and existing uncommitted work. Execute synthetic unit/integration/Electron checks and the reproducible fixture benchmark; live provider and real proxy comparisons require actual credentials/runtime, and must be recorded as skipped when absent rather than fabricated.

Audit date: 2026-10-30 (Asia/Jakarta). Source task: [implementation brief](../../../big-context/backend-feature/Orbistry_PreLLM_Backend_Codex_Implementation_Brief.md). This audit precedes implementation. The first checkpoint covers milestones 0–1; later milestones remain planned.

## Repository and deployment

Orbistry uses TypeScript/React 19, Next.js 16.4.3 static export, and Electron 45.1.0. Backend modules are CommonJS JavaScript in `electron/`; Node's test runner covers backend and shared logic. Zod supplies runtime validation. `next.config.ts` exports static files to `out/`, which Electron loads locally. The installed `node_modules/next/dist/docs/01-app/02-guides/static-exports.md` was read: server components run at build time, so a Next API server is not an appropriate desktop backend boundary.

`electron/main.cjs` constructs Ollama, Gemini, OpenRouter and NVIDIA adapters, `ProviderRegistry`, `ModelRegistry`, encrypted `CredentialStore`, `AgentStore` and `ChatService`, then registers IPC. `electron/preload.cjs` exposes a restricted bridge. Renderer/backend handshake version is 18. No deployed Python runtime, Python backend, or LiteLLM dependency was found in the application package/build configuration.

## Current message lifecycle

1. `features/chat/chat-panel.tsx` submits through `useChatRuntime` in `features/chat/use-chat-runtime.ts`. Its `run` callback assigns `crypto.randomUUID()`, starts renderer state and calls the desktop bridge with conversation ID, request ID, user message, binding and optional retry reference.
2. `features/chat/desktop-client.ts:connectAi` checks the bridge version. `electron/preload.cjs` invokes `ai:chat`; `electron/ai/ipc.cjs:registerAiIpc` admits compatible senders, checks active downloads and calls `ChatService.run` with the sender's ID and event sink.
3. `electron/ai/chat-service.cjs:run` validates request fields/IDs/message, enforces one active operation, restores the conversation, loads its agent, verifies Context Box/file identity, resolves agent-specific versus shared manual model settings, checks the provider's catalog and establishes an absolute AbortController deadline. Request-ID replay returns the existing attempt rather than spending tokens again.
4. The service builds history from successful, matching-boundary exchanges, records a pending attempt and invokes `electron/ai/orchestrator.cjs:createContextOrchestrator`. Current normal chat passes at most 12 exchanges. The orchestrator reads approved sources, builds policy/personality/construction context, may run dataset planning/statistics and applies `history-budget.cjs`. This is an agent research path, not the brief's context-free experimental baseline.
5. `prompt-builder.cjs` and `runtime-context.cjs` construct system/context/user messages. `model-registry.cjs` owns manual provider/model settings and known capacity checks. `history-budget.cjs` estimates UTF-8 bytes / 3 plus framing, reserves output plus 256 tokens and drops older normal-chat exchanges as needed. Provider-reported capacity, application ceilings and estimated prompt length are different quantities.
6. The orchestrator calls the selected adapter's `complete`. OpenRouter extends `providers/openai-chat-provider.cjs` at `https://openrouter.ai/api/v1`; NVIDIA uses the same transport at `https://integrate.api.nvidia.com/v1`. The adapter validates messages, appends a normal-chat serialization instruction, sends streaming chat completions, parses SSE, discards separate reasoning fields and normalizes the answer into the current internal envelope. OpenRouter consumes trailing usage; NVIDIA currently stops at finish. Model/provider identity in a response can differ from the requested identity and must remain visible in metrics.
7. `onContent` reaches the orchestrator's incremental validator and `ai:event`, then `useChatRuntime`, the runtime reducer and Markdown renderer. Backend events carry request/conversation/run IDs; stale renderer events are ignored. Partial normal-chat text is cumulative rather than delta chunks.
8. `response-validation.cjs` checks the answer. Normal agent validation may trigger a repair call. `run-store.cjs:createModelRun` persists provenance, settings, diagnostics, response and usage under the vault's `.wonnyy/model-runs/`. `ConversationStore` applies the run to the existing conversation record and recovers interrupted attempts at startup. Do not introduce another conversation database.

## Existing protections and gaps

- Credentials: `credential-store.cjs` encrypts keys through Electron `safeStorage`, refuses unavailable or plaintext-backed storage, and exposes only configured status through IPC. No raw credential lookup is exposed to the renderer.
- Errors: `model-errors.cjs` supplies actionable codes and serialization. Transport errors avoid echoing provider bodies. New telemetry must allowlist fields rather than copy arbitrary exceptions, headers, prompts or provider payloads.
- Cancellation: owner-scoped `ChatService.cancel` aborts the active controller and awaits completion. Provider requests link that signal and clean timers/readers. Renderer destruction and mutation paths have existing cleanup boundaries.
- Reliability: the orchestrator owns one shared retry for selected timeout/server errors before generation starts. Answer repair and dataset planning are additional calls, not retries. No extra retry layer should be introduced by instrumentation. Model checks/catalog requests are separate operations.
- Catalog: Settings currently provides provider/search filters and model connection checks, with limited context/output metadata. It lacks the proposed capability registry, provenance, price evidence, reliability measurements, richer sort/filter and inspector.
- Metrics: existing diagnostics include phase timings, prompt estimates, some TTFT and retry counts. Existing provider usage is attached to the final response, so additional calls/failed calls need separate accounting. Missing usage or prices must stay unknown.
- Privacy: ordinary chat records already contain user content by design. A new content-free metrics object does not make those entire records safe to share. Export only the allowlisted metrics object.

## Integration decision

Choose option C from the brief: keep an internal provider-neutral Node interface, with a future optional LiteLLM HTTP adapter. Do not bundle a Python sidecar in this checkpoint. Existing native adapters work with the desktop packaging and BYOK boundary. An SDK requires a Python runtime that is absent; an automatically managed proxy adds startup/shutdown, authentication, loopback, key custody, distribution and retry-ownership work. Neither is justified just to collect baseline evidence.

LiteLLM documentation currently describes a Python `completion` SDK and an OpenAI-compatible gateway. Its NVIDIA page uses the `nvidia_nim/` prefix. These are future integration references, not dependencies installed or features verified here. A later optional gateway milestone must select and pin an exact artifact, inspect that version's license/advisories, verify signatures, authenticate loopback access, set a single retry owner and prove controlled A/B parity. Do not label a direct-adapter run as LiteLLM B.

The repository's exact NVIDIA integration is the NVIDIA-hosted OpenAI-compatible `integrate.api.nvidia.com` endpoint. Official endpoint documentation confirms that URL; this does not establish this user's account/product entitlement, quota or inference access. Do not substitute self-hosted NIM or another NVIDIA service. No live inference or account inspection was performed for this audit.

Official references consulted:

- [LiteLLM overview and SDK](https://docs.litellm.ai/docs/)
- [LiteLLM NVIDIA integration](https://docs.litellm.ai/docs/providers/nvidia_nim)
- [NVIDIA hosted chat completion endpoint](https://docs.api.nvidia.com/nim/reference/create_chat_completion_v1_chat_completions_post)
- [OpenRouter SSE streaming](https://openrouter.ai/docs/api_reference/streaming)

## Baseline verification before implementation

On the existing working tree, `npm.cmd test` passed all 291 tests; `npm.cmd run typecheck`, `npm.cmd run format:check` and `npm.cmd run build` passed. Build generated and hardened the static export. PowerShell's execution policy blocks `npm.ps1`, so use `npm.cmd`. There is no separate lint script. CI runs tests/build/typecheck, the release secret audit and npm audit on Windows.

The working tree already contains changes in README, CSS, app shell/document workspace, Electron main/preload/vault modules, declarations, package metadata and editor smoke scripts. Preserve those changes. Do not commit or reset them as part of this checkpoint.

## First implementation and rollback plan

1. Add typed front-office contracts and a content-free baseline observer under `electron/ai/llm-front-office/`, keeping CommonJS deployment and existing providers.
2. Wrap only inference calls inside the existing orchestrator. Record requested/actual model/provider, call count, input estimates, known usage, TTFT, duration, finish/error/cancellation state. Keep pricing unknown without provenance. Include every observed planner/repair/retry call, but never invent billing for failed calls.
3. Attach an allowlisted snapshot to existing run diagnostics; avoid a new store, network telemetry, IPC version or renderer change. Provide a pure JSON/CSV metrics export helper. Keep existing deadlines, callbacks, errors and provider invocation arguments intact.
4. Verify valid, failed, cancelled, partial-stream, missing-usage and multi-call cases plus real run persistence with mocked providers. Run repository checks and relevant isolated Electron smoke coverage.
5. Track the remaining milestones in a backend session Markdown file. Experimental context-free chat, optional LiteLLM, richer registry/UI, routing, stricter experiment budgets, new reliability controls and A/B/C evaluation are not complete at this checkpoint.

Rollback removes the observer import/wrapper and `diagnostics.frontOffice` attachment in `orchestrator.cjs`; additive modules/types/docs can then be removed. Existing run validation accepts additive diagnostic fields. No settings/credential/conversation migration, dependency change, provider switch or infrastructure rollback is needed. Existing recorded metrics may remain readable as optional diagnostics.
