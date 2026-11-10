# Orbistry — Milestone A: OpenRouter AI Usage Monitor
## Full vibecoding implementation specification

> **Codex instruction:** Apply this specification to the existing Orbistry repository. Inspect the actual codebase, frameworks, provider integration, credential storage, Planet View overlay structure, and tests first. Make an incremental patch rather than rebuilding the application. **Do not start Milestone B (workspace visual redesign).**

### 1. Goal and scope

Build a small collapsible OpenRouter usage indicator at the **top-left of Planet View, below its toolbar**, designed in Orbistry's current near-black industrial terminal styling, using compact typography and restrained amber/cyan accents.

The user expects a **$1,000 weekly reset spending budget**. Treat this as **unverified until provider configuration confirms it**. Separate three concepts:

- **API-key spending allowance in USD**: key-specific cap and remaining limit, possibly weekly.
- **Actual OpenRouter account credits**: wallet balance, *not* the same as the weekly key cap.
- **Input/output tokens**: metered usage, not equivalent to dollars or available credits.

Do not hard-code $1,000 as the real balance, and do not present weekly allowance as tokens left.

### 2. Audit before modifying

1. Identify existing Planet View route/component, overlay positions, toolbars, and state management.
2. Identify OpenRouter provider adapter, API key storage, selected key identity, request lifecycle, and returned usage fields.
3. Identify existing safe main-process/backend network interface (if desktop), settings persistence, and test framework.
4. Write a short plan naming the actual files to modify. Reuse existing architecture and design tokens.
5. Do not change graph controls, node placement, Knowledge Stations, Context Box semantics, AI Terminal, or Orbistry Agent.

### 3. Official API integration

Use official docs and confirm response schemas:

- `GET https://openrouter.ai/api/v1/key`: investigate as the **preferred current-key, least-privilege approach** using the ordinary connected inference key; verify the returned fields before depending on them.
- `GET https://openrouter.ai/api/v1/keys/{hash}`: documented key-detail endpoint; **requires a Management API Key**; may expose `limit`, `limit_remaining`, `limit_reset`, `usage_weekly`, `usage_daily`, `usage_monthly`, `disabled`, etc. This may only be enabled as an explicit optional advanced connection, never a prerequisite for normal app use.
- `GET https://openrouter.ai/api/v1/credits`: requires management access; `data.total_credits` and `data.total_usage` can be used to calculate **account credits remaining**, displayed in a separately labeled section only.

Official references:
- https://openrouter.ai/docs/api/api-reference/api-keys/get-key
- https://openrouter.ai/docs/api/api-reference/api-keys/list
- https://openrouter.ai/docs/api/api-reference/credits/get-credits
- https://openrouter.ai/docs/api/api-reference/api-keys/update-keys
- https://openrouter.ai/support

OpenRouter's key `limit_reset` can be daily, weekly, monthly, or unset. Weekly boundaries are Monday–Sunday in UTC. A weekly limit reset **does not add money to an account wallet**.

If selected key doesn't declare a weekly reset, display the actual reset cadence or `Weekly limit not configured`. If no supported endpoint returns balance, show `Unavailable`, not a fabricated figure.

### 4. Security architecture

- **Never** embed management secrets in renderer/frontend code or bundle, UI state, logs, URLs, analytics, screenshot data, source control, or exported settings.
- Reuse OS credential vault/keychain or existing secure encrypted credential storage; preserve current BYOK storage behavior.
- Prefer ordinary inference key status where authorized; treat management key as highly privileged and opt-in only.
- Use backend/main-process proxy or secure IPC if necessary; forward **sanitized usage data only**.
- Never change limits, top up credits, create or rotate API keys in this milestone.
- Test with mocks, not real credentials.

### 5. Normalized snapshot

Suggested model (adapt names to existing stack):

```ts
type MonitorStatus = 'unconfigured' | 'loading' | 'ready' | 'stale' |
  'offline' | 'unauthorized' | 'rate_limited' | 'unsupported' | 'error';
type ResetCadence = 'daily' | 'weekly' | 'monthly' | 'none' | 'unknown';

interface OpenRouterUsageSnapshot {
  status: MonitorStatus;
  provider: 'openrouter';
  safeKeyAlias: string | null;
  limitUsd: number | null;
  remainingUsd: number | null;
  usedUsdThisPeriod: number | null;
  resetCadence: ResetCadence;
  accountCreditsRemainingUsd: number | null;
  inputTokens: number | null;
  outputTokens: number | null;
  tokenMeasurementScope: string | null; // e.g. 'this device, this week'
  dataSource: 'current_key' | 'management_key' | 'local_meter' | 'none';
  fetchedAt: string | null; // UTC ISO timestamp
  errorMessage?: string;
}
```

Unknown values must stay `null`, never 0. Confirm the actual data shape before parsing. Validate finite nonnegative USD numbers; do not silently accept malformed or inconsistent balances. For positive cap, `usedRatio = clamp((limitUsd - remainingUsd) / limitUsd, 0, 1)`. Prefer provider's `limit_remaining` over locally reconstructed figures. Do not call locally observed token use account-wide consumption.

Keep per-key caches isolated, clear display on provider/key changes, and discard responses from superseded requests.

### 6. Planet View widget UI

**Placement:** fixed overlay in the **upper-left of Planet View canvas**, immediately below its existing toolbar. It must not move with graph panning/zooming or intercept pointer events outside its actual box.

**Compact default (illustrative numbers only):**

```text
┌────────────────────────────────┐
│ ● OPENROUTER / WEEKLY        ⌄ │
│ $742.60 left / $1,000.00       │
│ ███████░░░    25.74% used      │
└────────────────────────────────┘
```

**Collapsed view:** `● AI BUDGET  $742.60 left` or `● OPENROUTER · CHECKING`.

**Expanded detail:**
- OpenRouter and safe alias for the connected key
- Verified cap, spent, remaining (USD), reset cadence
- Last synchronized timestamp
- Manual refresh action
- Optional measured input/output token counts with explicit scope/time window
- Separately labeled optional `Account credits` only if authorized and fetched
- Short helper text: `Weekly key limit is not account balance`

**States:** Setup required, Checking, Ready, Warning, Critical, Offline/Stale with last-sync, Auth required, Rate limited, Unknown/Unsupported, Error.

Use green/teal if >20% remains, amber at <=20%, red at <=5%, gray when unavailable/stale. Never imply a verified healthy balance when data is stale. Keep thin borders, minimal shadows, compact typography, restrained amber/cyan compatible with existing Orbistry. No flashy gradients or consumer-style financial dashboard.

**Interaction:** collapse/expand keyboard-accessibly, persist preference in the existing settings system, and allow manual refresh with throttle. Ensure graph drag, select, pan, zoom, and Context Box selection still work outside the widget. Handle small window widths without obstructing important controls.

### 7. Fetch and cache lifecycle

- If OpenRouter is configured and selected, fetch when Planet View becomes active.
- Refresh every ~60 seconds **only while visible and app active**.
- Debounce refresh after successful OpenRouter inference; avoid redundant simultaneous requests.
- Apply timeout, exponential backoff for transient failure, and honor `Retry-After` on 429 when present.
- Cache only sanitized nonsecret snapshot + `fetchedAt` per key alias.
- Offline: show cached number only with conspicuous `Stale · Last sync...` status; otherwise `Unavailable`.
- Unauthorized: direct user to existing provider settings; do not show previous key's number.
- Switching provider must never attribute another provider's usage to OpenRouter.
- Listen to app lifecycle and clean up polling subscriptions on unmount.

### 8. Token metering policy

Read token counts from OpenRouter's actual request response usage fields when available. Keep input and output separate. Explicitly label whether counted tokens are this-device/this-session or provider-wide. Do not estimate provider-wide totals from local chat history or convert dollars into token counts. Token reporting is secondary; lack of token telemetry must not prevent budget display.

### 9. Suggested internal boundaries

Adapt to repository conventions:

```text
OpenRouterUsageClient  → authorized fetch + schema validation
UsageMonitorService    → polling, caching, retries, key isolation
UsageMonitorStore/Hook → safe snapshot + refresh/collapse actions
PlanetViewUsageBadge   → compact/collapsible Orbistry overlay
```

Keep management credentials outside any frontend bundle. Ensure one polling controller, not one poller per component render.

### 10. Acceptance tests

- [ ] Opens at Planet View top-left, beneath toolbar.
- [ ] Displays USD remaining only when verified by API.
- [ ] `$1,000 weekly` is **not hard-coded**, and only displayed if the key actually reports it.
- [ ] Distinguishes wallet credits, USD key limit, and token counts.
- [ ] Shows real cadence if daily/monthly/no reset.
- [ ] Graceful setup/loading/auth/rate-limit/offline/error states.
- [ ] Stale values clearly marked with timestamp.
- [ ] Can collapse/expand; persistence works after restart.
- [ ] Manual refresh throttled; no duplicate polling.
- [ ] Progress bar and threshold colors calculate correctly.
- [ ] Zero/null/unlimited/malformed limits handled without NaN or phantom funds.
- [ ] Switching keys immediately removes other key's displayed data.
- [ ] No API secrets exposed in UI, browser console, logs, or exports.
- [ ] Planet graph pan/zoom/select and Context Box integration unaffected.
- [ ] AI Terminal/provider inference remains functional.
- [ ] Token totals have accurate period/scope labels.
- [ ] Works without internet or secrets using mocks.
- [ ] Tests include 401, 403, 404, 429, 500, timeout, retries and late responses.
- [ ] No global Planet View redesign: Milestone B remains deferred.

### 11. Delivery requirements

Implement and test inside the actual repository. Run available lint, type-check, unit tests, integration checks and production build. Explain **which real files were changed**, **which endpoint was used**, **the source and verification of each number**, credential-safety decisions, test results, and any unavailable OpenRouter metrics. Do not claim success until verified. **Keep Milestone A narrowly scoped.**
