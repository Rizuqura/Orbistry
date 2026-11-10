# Reproducing provider diagnostics — QT-RCA-001

Use the Electron application, not a standalone browser. Production providers run in Electron main via IPC. In PowerShell use `npm.cmd` if `npm.ps1` is blocked by execution policy.

## Build and deterministic regression checks

```powershell
npm.cmd test
npm.cmd run typecheck
npm.cmd run build
node scripts/electron-front-office-smoke.cjs
node scripts/electron-runtime-kernel-smoke.cjs
node scripts/release-secret-audit.cjs
git diff --check
```

The front-office Electron fixture uses synthetic encrypted keys and mocked endpoints in a disposable vault/profile. It tests UI/history, partial failure/retry, a mocked gateway adapter, model-check admission, G safe failures and H fallback. It is never live-provider evidence. The runtime-kernel fixture checks the existing normal agent/context path.

This audit worktree uses a `node_modules` junction to the original checkout. Turbopack rejects the package resolution outside that nested workspace. The verified build command here is:

```powershell
npm.cmd run prepare:pdf
node node_modules/next/dist/bin/next build --webpack
node scripts/secure-export.cjs
```

This is a test-worktree constraint, not a production provider/config repair. Next's installed CLI documents `--webpack`. Do not weaken Chromium sandboxing or modify profile ACLs to make Electron tests run. The execution sandbox on this host prevents Electron startup; the successful hidden tests ran through the normal approved host execution path.

## Real-provider A, C, D, E and F

The opt-in runner below makes real, potentially billed requests with bounded fixed public prompts. It requires saved OS-encrypted application credentials readable by the current Windows user. Unlike the environment-only unit integration tests, it deliberately uses the existing profile selection helper. It copies encrypted credential records and only the encrypted `Local State.os_crypt` key material into a disposable profile. It does not modify the personal profile, private conversations, keys or model settings. No plaintext credential is persisted in its artifacts.

```powershell
# A: raw direct provider request, no router/context/adapter.complete/agent envelope
node scripts/provider-rca.cjs

# D + E and optional F: actual settings UI, real streaming and final assistant DOM
node scripts/provider-rca.cjs --ui --multi-turn

# C + E: real backend JSON completion, actual final assistant DOM
node scripts/provider-rca.cjs --ui --nonstream
```

The UI runner selects a catalog-listed low-cost OpenRouter candidate (this capture: `openai/gpt-4.1-nano`), pins it in an isolated experiment, disables fallback, limits attempts to one and output to 256 tokens with a 60-second deadline. It does not silently change the user's saved NVIDIA selection. It exits unsuccessfully unless exact `ORBISTRY_OK` appears in the **final assistant article**, not merely the question, partial text or an HTTP response. F sends the two specified ORBITAL prompts in the same conversation and checks visible final replies.

Only when investigating NVIDIA separately, add `--probe-nvidia` to the streaming UI command. After UI coordination has stopped model checks, this probes the saved NVIDIA model once, then a catalog-listed Mistral 7B alternate once on failure (128 output cap). In this capture the saved model timed out and the alternate returned 404. Do not loop retries or infer quota/invalid credentials from these results.

Artifacts: `test-results/qt-rca-001/*.json` and PNGs. `baseline-live.json` records direct requests and stages; streaming/non-streaming JSON records IPC event types, safe traces, actual DOM marker and final status; discovery captures only credential availability booleans and public model IDs. Script logs contain checkpoint IDs and safe result summaries. Curated, committed capture evidence is in [evidence](evidence/README.md). Absence of valid credentials must be reported as NOT VERIFIED, never mock PASS.

The older `electron-openrouter-live-main.cjs` deliberately blocks inference. Its catalog check is not Test A/E. Existing environment-only integration tests require `ORBISTRY_FRONT_OFFICE_LIVE=1`, `OPENROUTER_API_KEY`/`NVIDIA_API_KEY` and matching `*_TEST_MODEL`; skipping them says nothing about the separately executed real UI proof.

## B: actual LiteLLM, only when enabled

The existing setup is described in [provider setup](../architecture/pre-llm/03-provider-setup-openrouter-nvidia.md). Orbistry uses an externally managed authenticated loopback HTTP proxy; no Python sidecar is bundled. Check the actual deployed version, provider mappings and provider credentials in that external service, and enter its local gateway credential through Orbistry Settings. Do not paste keys into command history or logs.

Enable the gateway explicitly in Advanced tuning, set its loopback URL, run its liveness check, then create a fresh experiment with the same provider/model and small generation settings used in A. Select LiteLLM transport and send `Reply with exactly: ORBISTRY_OK`. Compare the attempt's wire mapping (`openrouter/<model>` or `nvidia_nim/<model>`), HTTP/error category, normalized visible text, usage and latency with A. PASS requires actual expected text, not liveness or a mocked adapter. Record the run's content-free metrics and actual assistant rendering. If no proxy/key is configured, report B NOT VERIFIED / disabled; do not install infrastructure merely to explain a direct-path failure.

## G: understandable safe failures

`node scripts/electron-front-office-smoke.cjs` simulates HTTP 401, HTTP 404, HTTP 429, network failure and a signal-aware timeout. Each request uses a new actual UI conversation and requires a visible message plus `AUTH_INVALID`, `MODEL_UNAVAILABLE`, `RATE_LIMITED`, `PROVIDER_OFFLINE` or `MODEL_TIMEOUT`, respectively. A missing manual deployment tests zero eligible candidates and asserts zero provider calls. Provider body sentinels must not appear in alerts or exports. These simulations never invalidate the user's real key or deliberately spend provider quota.

## H: bounded explicit fallback

The same fixture explicitly enables auto routing, fallback and logical-model switching inside the permitted OpenRouter list, with maximum two attempts. The capability-qualified alpha deployment returns 503 before any content; beta returns visible text. Assertions require two calls, disclosed fallback, a final assistant response and incomplete billing coverage retained as unknown. Per-call and total durations are recorded. Existing unit tests also deny unauthorized cross-provider/model switches, stop retry after partial text, cap cumulative reservations and enforce circuits/deadlines. Synthetic latency/usage are test observations, not real provider quality or performance rankings.

## Read the first failing boundary

| Observation                                      | Next check                                                                                             |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| No conversation; MODEL_BUSY                      | Wait/cancel checks through shared runtime coordination; inspect admission before inference.            |
| Zero calls; MODEL_CANDIDATES_EVALUATED failure   | Inspect pin, rejection reasons, credential availability, capabilities, current metadata and budgets.   |
| A succeeds; B fails                              | Check actual LiteLLM mapping/auth/parameters and proxy version.                                        |
| GATEWAY_REQUEST_STARTED without HTTP response    | Endpoint/network/deployment delay; a catalog listing is insufficient evidence of generation access.    |
| 401/402/429                                      | Authentication, account credits or quota respectively; retain safe status/code, never response bodies. |
| HTTP success without FIRST_CONTENT_RECEIVED      | Check visible content versus reasoning-only/refusal and JSON/SSE shape.                                |
| Content received, normalization/validation fails | Check finish reason, output cap, truncation, requested format and supported text fields.               |
| Backend finish without final assistant DOM       | Inspect renderer event subscription, request ID, promise result and state update.                      |

Metrics can be exported from Settings or via `scripts/front-office-metrics-export.cjs`. Raw debugging defaults off; leave it off for this audit. Estimates and missing usage must remain labeled. Do not use the successful small prompt to certify historical 120K-input/26K-output requests.
