# OpenRouter usage monitor — Milestone A

Implements `Orbistry_Milestone_A_OpenRouter_Usage_Monitor.md`. Milestone B remains deferred. No graph layout, Station, Context Box, Agent or provider-settings redesign is included.

## Audit and implementation boundaries

Planet View is `components/planet-scene.tsx`: a toolbar followed by a canvas containing transformed `.pworld`. The new badge is an absolutely positioned sibling of that world. Existing input guards recognize its actual box, without a full-canvas input overlay.

Existing OpenRouter transport already consumes trailing SSE usage. `CredentialStore` owns OS-encrypted credentials, and `registerAiIpc` owns version-gated access. The incremental patch adds:

- `electron/ai/openrouter-usage.cjs`: authorized fetch, normalization, sanitized memory cache, single-flight/throttle, timeout, backoff and generation isolation.
- `electron/ai/ipc.cjs`, `electron/preload.cjs`, `types/ai.ts`: sanitized snapshot IPC and change subscription. Existing credential/provider mutations invalidate prior values.
- `electron/ai/providers/openrouter-provider.cjs`: completed-response input/output usage observer, preserving prompts and inference results.
- `features/usage-monitor/`: active/visible polling lifecycle, persisted keyboard collapse, compact progress/details and existing Settings navigation.
- `components/planet-scene.tsx`, `components/app-shell.tsx`: overlay placement, event containment and Settings action only.

## Numbers and security

The sole budget endpoint is **GET `https://openrouter.ai/api/v1/key`**, using the ordinary inference key inside the main process. The official [current-key reference](https://openrouter.ai/docs/api/api-reference/api-keys/get-current-key) confirms `limit`, `limit_remaining`, `limit_reset` and period usage fields. Cap/remaining come directly from those fields. Spent uses `usage_daily`, `usage_weekly`, `usage_monthly`, or lifetime `usage` for no reset. Unknown values remain null; negative, nonfinite, nonnumeric and inconsistent cap/remaining pairs are rejected. Zero/unlimited caps have no percentage bar. Positive-cap usage is `(cap - remaining) / cap`, clamped, with warning at 20% remaining and critical at 5%.

No $1,000 budget is assumed. Weekly appears only if reported. The [reset reference](https://openrouter.ai/docs/api/api-reference/api-keys/update-keys) defines Monday–Sunday UTC weeks. A key allowance is not wallet balance or a top-up.

Renderer data excludes secrets, raw key labels, provider bodies and raw errors. A digest-derived alias identifies the connected key. Existing encrypted credential storage is unchanged. Sanitized allowance cache is main-process memory only and does not survive restart; collapse preference uses existing localStorage conventions at `qterminal-usage-expanded-v1`. No conversation/context migration is needed. Additive IPC retains bridge 17; missing old-preload capability shows a restart explanation.

Account credits stay **Unavailable**. The [credits endpoint](https://openrouter.ai/docs/api/api-reference/credits/get-remaining-credits) requires management access. No management connection, wallet access, limit mutation, top-up or key rotation was added.

Input/output counts use actual completed-response prompt/completion telemetry, including model checks and correction calls. Scope is completed requests on this device since the first recorded measurement in the current app session. Partial/cancelled responses without complete telemetry are excluded; unknown telemetry is not counted as zero. Connection/settings invalidation and restart reset this meter. Counts are not account-wide or weekly totals. [Usage accounting docs](https://openrouter.ai/docs/cookbook/administration/usage-accounting) confirm trailing SSE usage is automatic; no deprecated inclusion parameter is sent. Dollars are never converted into tokens.

## Lifecycle

One mounted hook checks while Planet View is active and polls every 60 seconds only when visible/focused. Focus/visibility return rechecks; completed inference triggers a debounced refresh. Cleanup removes timers/subscriptions. Main-process single-flight prevents parallel reads. Manual refresh has a five-second floor; transient failures use exponential backoff capped at five minutes while honoring longer `Retry-After`. Retries occur on eligible visible polling/manual requests, without a background retry loop. Timeout is ten seconds; response body limit is 64 KiB.

Provider/key changes clear prior display/cache and discard superseded responses. Transient/offline cached allowance is gray and explicitly Stale with last-sync. Unauthorized/unsupported results remove prior allowance. Missing setup/auth links to existing Settings. Token telemetry is optional.

## Verification and limits

- Deterministic suite: **212 passed**. Tests cover cadence/null/zero/malformed amounts, exact percentage thresholds, stale health, single-flight/throttle, key/provider isolation, late responses, 401/403/404/429/500, numeric/HTTP-date Retry-After, increasing retry delays/recovery, timeout/offline and local token scope.
- TypeScript, formatting and production build passed. Planet source retains its existing formatting and unrelated edits.
- `node scripts/electron-usage-monitor-smoke.cjs`: real app/UI/IPC/encrypted synthetic credential storage with mocked HTTP. Covers toolbar placement, verified USD/progress, separate wallet/token metrics, response token totals, keyboard collapse/restart persistence, refresh throttle, stale/auth/key/provider states, graph zoom outside/containment inside, narrow viewport, inactive-window gating and Settings navigation. Evidence: ignored `test-results/usage-monitor*.png`, `usage-monitor.json`.
- `node scripts/electron-openrouter-smoke.cjs`: passed existing encrypted key save, catalog outage/recovery, alias model check, streaming/cancel/retry, provider continuity, restart/removal and history checks with synthetic transport. The usage observer preserves these existing inference flows.

No live account allowance or live grounding was tested or claimed. Existing narrow-window page scrolling remains; global workspace-column redesign is outside this milestone. Management-only wallet metrics and provider-wide token totals remain unavailable by design. No measured GPU claim is made.
