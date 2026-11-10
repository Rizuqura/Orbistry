# OpenRouter and Settings

Updated 2026-10-25. Orbistry desktop bridge is **17** after the AGENT workspace/settings addition; restart Electron after updating. Existing vaults, conversations, credentials and provider settings retain their storage locations.

## Setup

Open **Settings**, select **OpenRouter**, paste a key from `https://openrouter.ai/settings/keys`, and choose **Save key**. Search the discovered models, optionally run **Check model**, then choose **Use online**. Browse/configure providers without changing the active provider until selecting a model. The existing Context Box binding stays attached across model changes.

OpenRouter discovery sends no vault content and does not automatically run inference across its catalog. Individual checks use a synthetic source and provider quota. Bulk checks remain under **Connection checks**, explicitly invoked. Existing Gemini/NVIDIA automatic checks and scan interruption remain compatible. Model availability and account credit limits can differ from catalog listings.

Credential entry remains editable during desktop connection, registry refresh and other busy operations. Only saving waits for provider readiness and secure storage. Selecting the same provider preserves the draft; changing providers clears it. Failed or skipped saves preserve the password input, and successful saves clear it only if the user has not edited it meanwhile. A synchronous submission guard prevents duplicate saves. Missing desktop status displays the connection/error message beside the form, including restart instructions for an outdated bridge. Draft keys stay in the password input only.

## Implementation

- `electron/ai/providers/openrouter-provider.cjs` uses OpenRouter's fixed HTTPS endpoint, bearer authentication and optional Orbistry attribution header. It discovers text-input/text-output models, including colon-qualified IDs, and carries catalog context/output limits into model selection.
- `openai-chat-provider.cjs` contains the shared bounded remote transport extracted from NVIDIA. The NVIDIA wrapper preserves its previous behavior. OpenRouter reads SSE comments, content and trailing usage, rejects incomplete/inline-reasoning streams, discards separate reasoning fields, and maps authentication, credit-limit (402), rate-limit and server failures to sanitized errors. Redirects are rejected; keys are never included in URLs, diagnostics or provider error bodies.
- Settings, credentials, model checks and conversation validation accept `openrouter`. OS `safeStorage` encrypts its key in the existing `provider-credentials.json`; legacy Gemini/NVIDIA fields remain readable and are preserved on removal. IPC exposes save/remove/status only, never key retrieval. Immutable run records and assistant messages retain the actual provider/model and verified box provenance.
- Generation, cancellation, retries, CSV planning and local statistics use the existing orchestrator. OpenRouter permits the full bounded multi-source/history request. Model selection clips configured context/output limits to discovered capabilities; subsequent prompts still undergo existing budget checks.
- Settings now presents four compact provider cards, one visible connection form, searchable model rows and the current model status. Downloads, bulk checks, generation/timeouts and diagnostics are collapsed by default. The layout adapts to narrower widths. General settings keep their prior styling. OpenRouter privacy copy identifies both the router and downstream model providers.

## Verification

### Live catalog failure and fix (2026-10-25)

The original synthetic catalog omitted OpenRouter's `~`-prefixed aliases. A live diagnostic returned HTTP 200 with 467 rows, including 19 such aliases. The old slug regex rejected those aliases, and validating the entire array as a single unit discarded every model. The corrected provider and model-check IPC accept one leading `~`. Catalog envelopes retain their size/schema bounds; rows validate independently, malformed rows cannot discard usable rows, and a nonempty catalog with no valid rows still fails explicitly. Nullable display metadata uses the model ID as fallback.

Credential save completion now commits its configured state and clears the password field before model discovery or automatic checks. A discovery failure cannot turn a completed encrypted save into an apparent failed save. The form confirms secure saving and displays discovery errors separately. No key is sent to the renderer by diagnostics.

After this fix, the user's supplied key was accepted by the read-only `/api/v1/key` endpoint (HTTP 200), saved using Windows encryption and verified by decrypting locally. The main-process provider loaded 467 live models. `node scripts/electron-openrouter-live-catalog.cjs` independently passed against the production UI with the persisted encrypted key: Connected, 467 model cards and editable key input. It uses a temporary empty vault. Its main-process harness permits discovery but blocks outgoing inference, including automatic checks from other saved providers; the final run reported zero forwarded inference requests and two blocked startup checks. Evidence: ignored `test-results/openrouter-live-ui.json` and `openrouter-live-ui.png`.

All **199** deterministic tests, TypeScript, production build and targeted formatting passed. The expanded synthetic Electron regression passed keyboard entry, a 503 catalog outage during key saving, committed-key retention, refresh recovery, a `~` alias checked through IPC, cancellation/retry and encrypted persistence/removal. Live inference and factual grounding were not tested by the live catalog check.

The shared Gemini/NVIDIA Electron regression also passed after moving password clearing to encrypted-save completion: automatic checks, model-scan interruption, rate-limit retry, streaming, provider switching and credential/history persistence/removal remain functional.

The deterministic suite includes OpenRouter discovery, model limits, reasoning separation, SSE comments/trailing usage, analytical JSON, multi-source history, sanitized HTTP/stream errors, insufficient credits, incomplete streams, cancellation, encrypted key reload/removal and existing NVIDIA transport regressions.

`node scripts/electron-openrouter-smoke.cjs` passed actual isolated Electron UI/IPC with synthetic OpenRouter transport: key encryption and clearing, no implicit paid catalog scans, search, explicit check, responsive layout, local-to-router conversation continuity, verified source retention, credit failure/duplicate-free retry, cancellation, restart and switching back/removal. Evidence: ignored `test-results/electron-openrouter.json`, `ai-terminal-openrouter.png` and `ai-terminal-narrow.png`.

The prior credential-entry patch passed clicking and keyboard typing while registry refresh was held in flight, re-selecting OpenRouter without losing the draft, rejected-key retention, keyboard replacement and successful encrypted saving. That earlier verification used 198 deterministic tests and synthetic credentials only; it did not cover the live catalog aliases fixed above.

The original provider/UI implementation passed its 198-test baseline and local-model and Gemini/NVIDIA desktop regressions with the new provider tabs and expandable controls. Layout checks confirmed the intended font/padding, an 800-pixel viewport fit, and cancellation after streamed content arrives. Current verification is recorded above. Live OpenRouter inference was not benchmarked; synthetic checks establish transport/UI contracts, not factual answer quality.

## API references

Implemented against current official documentation: [authentication](https://openrouter.ai/docs/api_reference/authentication), [chat completion schema](https://openrouter.ai/docs/api_reference/overview), [models](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties), and [SSE streaming](https://openrouter.ai/docs/api_reference/streaming).
