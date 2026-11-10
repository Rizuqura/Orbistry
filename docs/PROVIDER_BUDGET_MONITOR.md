# Active-provider budget monitor

Planet View's AI BUDGET panel follows the active agent's compiled model provider when set, otherwise the global provider in Settings. The backend resolves this selection and reads only that provider's current stored credential. Ollama uses a local-runtime meter without an API key.

All supported transports (Ollama, Gemini, NVIDIA, OpenRouter) report completed-request input and output token usage to an isolated in-memory meter. Counts include successful transport calls made by chat, checks and repairs. Only provider-reported counts are summed; missing values remain unavailable, and failed/cancelled/partial requests are excluded. A partially reported measurement can contribute one known counter without inventing the other.

Meters are isolated by provider and a credential fingerprint that stays in the main process. Switching providers retains each key's session measurements; replacing/removing a credential clears only its provider's measurements. Observer failures do not affect successful inference. Counts reset when the app exits and do not represent account-wide usage or remaining token quota.

OpenRouter additionally retains the existing authenticated current-key allowance endpoint, reset countdown, cache, throttling, backoff and stale/error behavior. Gemini, NVIDIA and Ollama have no monetary balance/reset integration in this panel; the UI shows token measurements and does not infer credit, quota, spending caps or reset schedules from them. No new account-management credentials are requested.

The additive providerUsage IPC validates refresh and optional agentId fields. The older openRouterUsage endpoint remains compatible. Raw credentials and provider response bodies never enter the renderer. Late responses are checked against the selected provider, credential and invalidation version before returning.

Validation: npm test; npm run build; node scripts/electron-provider-budget-smoke.cjs; node scripts/electron-usage-monitor-smoke.cjs. Desktop checks use synthetic credentials and mocked provider transports, not live paid requests.
