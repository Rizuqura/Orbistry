# NVIDIA model integration - 2026-09-09

NVIDIA NIM is connected to the provider registry, secure credentials, AI Terminal model selection, and the existing chat runtime. This supersedes the earlier provider-setup-only scope.

## Behavior

- Discovery calls the hosted /v1/models endpoint. Names are validated and obvious embedding, safety, vision, and other non-chat tasks are filtered out. Remaining entries are chat candidates, not certified inference endpoints. No hard-coded free model catalog or free-access promise.
- Chat calls /v1/chat/completions using a backend-owned bearer credential, bounded SSE parsing, strict input validation, cancellation, inactivity and absolute deadlines. Raw transport errors and provider bodies are not returned to the renderer.
- Separate reasoning fields are discarded; inline thinking tags fail closed. The adapter requests a normal final text answer and serializes it into Orbistry's internal JSON envelope. It also accepts exact legacy answer envelopes, including JSON fences. The existing orchestrator still validates completed answers and rejects planning or task echoes. Model-specific structured-output and thinking options are not assumed to work across the catalog.
- Model switches preserve the same context authorization and conversation. NVIDIA identity is stored on assistant messages and run records and shown in chat.
- Check model sends a fixed synthetic prompt, no vault data, through the same streaming adapter. It has a 30-second deadline and requires the expected JSON answer. Results and passed/checked counts live in renderer memory for the current session, with timestamps; saving/removing the NVIDIA credential clears them. Checking does not change the selected model or create conversation messages.
- NVIDIA failures require explicit retry; no automatic provider failover. HTTP status and Retry-After are retained as sanitized metadata.
- Desktop IPC version is 11; reopen the app to load the matching backend.

## Verification

Deterministic tests cover discovery, authentication, error sanitization, split SSE, reasoning separation, malformed/truncated streams, cancellation/deadlines, and synthetic checks. Service coverage runs 14 turns, switches NVIDIA models, checks 429/retry, changes source for 10 further turns, then restarts and resumes the original conversation without source contamination.

The isolated Electron smoke passed NVIDIA key setup/discovery, the Check model action, Gemini-to-NVIDIA conversation continuity, reasoning separation, restart, and switching back to Ollama. These use synthetic transports and prove integration behavior, not hosted availability.

Live catalog checks subsequently passed four short greeting tests out of 58 candidates. Those checks did not establish real task reliability. User run logs then showed answer-format failures and separate MiniMax 429 errors. The answer normalization fix passes 112 deterministic tests and the isolated Electron smoke. Live synthetic source summaries and follow-ups at 1024 tokens passed on Nemotron Super and MiniMax; Lightning and Muse answered the factual follow-up but failed the longer summary in this sample. No private vault content was used in live diagnostics.

References: [NVIDIA hosted LLM APIs](https://docs.api.nvidia.com/nim/reference/llm-apis), [API Catalog quickstart](https://docs.api.nvidia.com/nim/docs/api-quickstart).

## Automatic provider checks

Gemini and NVIDIA now share a synthetic source check through versioned IPC. Saving a key starts a sequential scan of its candidates; saved keys are scanned once on workspace load after context initialization. Stars are session-only, sorted ahead of unverified/failed entries within each provider, then by latency. Changing a key clears its results. Stop aborts the active request and suppresses further startup scans; Recheck all models explicitly starts a fresh scan. Authentication and rate-limit failures pause the scan. No approved vault context or conversation content is used in checks.

AI Terminal now shows scan progress, provider check buttons, Stop checks, and all passing starred models directly below its heading. Background checks keep settings controls available. Settings changes, model selection, and chat submission abort the active check and wait for the scan to release its operation before proceeding. Opening AI Terminal preserves an active scan. The desktop regression verifies editable controls and successful model selection during a deliberately stalled provider check; all 115 unit tests and the production build pass.
