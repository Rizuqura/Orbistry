# Online integration implementation - 2026-09-08

Baseline: `04ff5c9` (0.0.4). Implements the first Gemini vertical slice in `model-integration-online.md`; the earlier local work remains intact. The planning document's later Groq/OpenRouter phases are not implemented.

## Delivered

- Provider registry selects Ollama or Gemini through backend-owned settings. Explicit selection changes execution only; source approval, conversation ID, Station state, and history remain unchanged.
- Gemini models are discovered through the paginated models API. This slice filters for Gemini text generation; no fixed free catalog or assumed quota is shipped. Discovery is evidence of an advertised model, not a guarantee of project access or structured-output support on every future model.
- Secure credentials use Electron 37's available synchronous safeStorage API in main after app readiness. Only ciphertext is written to `userData/provider-credentials.json`. No raw key getter crosses IPC; transient form contents are cleared on submission. Unavailable secure storage and Linux `basic_text` fallback fail closed. Settings/credential mutations share ChatService's idle admission gate.
- Zod validates new credential IPC, settings snapshots, Gemini request data, model discovery, and response chunks. Existing Brain Scope/chat validators remain authoritative. Validation errors never serialize secret inputs.
- Gemini uses fixed first-party HTTPS with `x-goog-api-key` headers and rejects redirects. Provider payloads contain only the constructed system instruction, approved source, question, and budgeted history; no tools, browsing, file uploads, or vault access are enabled.
- SSE decoding handles split UTF-8 and CRLF, bounded response bytes, hidden thought parts, terminal completion, malformed/truncated output, content blocks, cancellation, inactivity, and absolute deadlines. The shared orchestrator still validates the final structured answer before publishing success.
- Remote authentication, network, unavailable-model, quota, timeout, and server failures have sanitized actionable errors. Retry-After is displayed when supplied. Remote transport failures do not automatically replay or fail over. The existing single answer-format correction remains possible within the same run and deadline.
- AI Terminal contains encrypted key setup/removal, provider discovery, explicit Use online selection, privacy/data-use notes, and generation controls. Chat shows execution location, provider/model transitions, and the 12-exchange history policy; errors retain the draft.
- Runs retain provider/model, requested model in settings, execution location and included/dropped history in diagnostics, source hashes, usage, and timing. Gemini diagnostics include first visible response-text latency and resolved model version. Assistant snapshots now add provider identity; old messages without it are displayed as legacy Ollama messages.
- IPC is version 9; restart Electron after updating. Prompt version is `orbistry-conversation-v5` with provider-neutral assistant wording. Stored conversation/run schema versions remain readable; old files are not bulk rewritten.

## Verification and next acceptance

Key-format fix: Save API key previously rejected the dot in newer `AQ.` authorization keys before discovery could run. Credential validation now accepts dots as well as legacy key characters and returns a specific, sanitized key-entry error for invalid input. The automated suite has 100 passing tests; the online desktop fixture now uses an `AQ.` key to cover encrypted save, discovery, switching, and restart through the actual IPC path.

Verified on 2026-09-08:

| Check | Result |
| --- | --- |
| Automated suite | 99 tests passed |
| TypeScript, integration formatting, production build | Passed |
| Existing local Electron regression | Passed all 14 checks, including Planet/focus, source switching, restart, vault change, and PDF character maps |
| Dedicated online Electron regression | Passed encrypted key setup/removal, provider switching, streaming, 429/draft/retry recovery, and restart |
| Real Gemini benchmark | Not run: API key and explicit model are not configured; missing-configuration guard verified |

Desktop tests required an unrestricted process launch because the restricted launch crashed. The old smoke assertion for the removed “Active model” text was updated to check the selected model card. Running desktop tests separately completed successfully; no current desktop failure remains in these checks. Existing failure artifacts can be older than the latest successful reports.

Deterministic coverage exercises real Gemini adapter parsing with synthetic HTTP responses; local-to-online-to-local switching, 14 online turns, history dropping, ten turns after source change, restart/resumption, and explicit 429 retry; secret storage and IPC validation; stream failures, cancellation, and deadlines. These establish integration behavior, not model answer quality.

`npm run test:chat:online:electron` builds and launches the dedicated hidden Electron entry. Synthetic transports exist only in that test entry, while production main/preload/renderer and OS encryption are exercised. It checks key setup/removal, disclosure, streaming, local/online continuity, retained drafts on rate limits, explicit retry, and restart. Reports/screenshots are ignored under `test-results/`.

`npm run test:chat:online` reuses the local acceptance questions with Gemini and adds turns beyond the memory window. It requires `GEMINI_API_KEY` and an explicitly selected `ORBISTRY_GEMINI_MODEL`. The key is read only into benchmark process memory; no developer key is bundled. The script uses isolated synthetic Markdown sources and writes the actual answers/timings for review. Real local/online model comparison and live Gemini acceptance remain pending until credentials are configured and those runs are reviewed.

The one-Markdown-source restriction, 12-exchange policy, and unchanged-source requirement for resumption remain. Online inference does not by itself solve these product limitations. Keep Groq, multi-source research, and autonomous actions deferred until the first provider passes product acceptance.

## Protocol references checked during implementation

- [Gemini generate/stream REST API](https://ai.google.dev/api/generate-content): request roles, system instruction, JSON schema output, SSE, finish reasons, usage.
- [Gemini models API](https://ai.google.dev/api/models): pagination, capabilities, model IDs and token limits.
- [Gemini pricing/data use](https://ai.google.dev/gemini-api/docs/pricing): project-dependent cost and free-tier data-use disclosure.
- [Electron safeStorage](https://www.electronjs.org/docs/latest/api/safe-storage): OS encryption and insecure Linux fallback detection. Newer documentation includes asynchronous methods that are not assumed available in this repository's Electron version.
- [Zod basics](https://zod.dev/basics): runtime parsing; raw validation issues are intentionally not exposed.
