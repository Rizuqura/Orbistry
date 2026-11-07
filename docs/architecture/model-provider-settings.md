# Model provider settings

Settings has one BYOK connection form followed by BYOK Models and Provided Models.
BYOK Models lists models from every saved connection plus installed local models
in one searchable grid. There are no provider selection tiles. Each model card
shows its provider and saves that provider's canonical ID when selected. Key removal
and explicit provider checks live under **Manage saved connections**; local downloads
remain accessible regardless of the active model provider.
The existing vault, local downloads, generation settings and agent model selection
remain available. The former Front Office interface is under **Advanced provider
catalog and experiments**, including its existing BYOK execution workflows.

## Ownership and extension points

- `features/model-settings/provider-key-form.tsx` owns the transient masked input.
  It clears a successfully saved key and never puts it in persisted React state,
  local storage or an agent config.
- `electron/ai/model-access.cjs` owns prefix detection, connection checks and the
  public preview projection. IPC uses the existing compatibility and idle gates.
  The form sends only the key; the backend automatically identifies supported
  issuer prefixes. Unknown formats stop before a request and show a supported-key
  error. There is no manual provider picker or client provider override. Only
  fixed adapter endpoints are supported; no custom URL is
  accepted. Attempts are limited to one every three seconds per app process.
- Connection checks instantiate existing adapters with a temporary, provider-bound
  credential. A failed replacement leaves the existing encrypted credential intact.
  Successful connections use the existing Electron `safeStorage` store. There is
  no plaintext or environment fallback, credential migration, or default-model change.
- OpenRouter checks `/auth/key` before listing models. Gemini uses its authenticated
  model listing. NVIDIA's catalog can be public, so its successful listing is
  explicitly **identified, key unverified**. Inference checks consume quota and
  remain explicit actions; startup and key saving no longer run them automatically.
- `electron/ai/model-registry.cjs` projects adapter model IDs, capabilities, limits
  and prices. Missing metadata stays unavailable. Settings saves canonical model
  and provider IDs through the existing registry; it never saves a key into an agent.

## Canonical favorites and preview policy

The existing `CapabilityRegistry` owns `front-office-catalog.json` in the application's
settings directory. `favorites` is an array of `provider:model` deployment IDs;
`profiles` contains the matching catalog records. No example or recommended models
become favorites by default. Existing files and selections are not migrated or reset.

The canonical schema currently supports NVIDIA and OpenRouter profiles. These BYOK
cards offer persistent stars. Starring imports actual provider metadata using the
existing refresh method before saving the favorite. Gemini and local Ollama remain
selectable BYOK/local models; expanding their favorites requires extending the
canonical capability catalog rather than adding a second favorite store.

`ai:providedModels` returns an allowlisted metadata projection of canonical favorites.
It suppresses known failed model checks and Front Office circuit failures in the main
process. Health observations are session-local; after restart unknown health is
**Unverified**. Metadata listings alone never display **Available**. BYOK cards show
availability only from an explicit successful model check.

Provided Models always has `executable: false`, has no execution API and never resolves
a developer credential. Existing advanced experiments continue to use the user's
separately configured credentials; they do not receive a managed or developer fallback.
This preview is not a bundled developer catalog: each installation reads its existing
local favorite source, and a missing source gives an empty view.

No trusted developer authorization or managed backend exists in this app. Therefore
there is no diagnostic Dev View or client authorization toggle. Developer flags cannot
bypass preview filtering. A future implementation must introduce trusted authorization
before exposing diagnostic entries, and a private authenticated proxy with billing,
quotas, rate limiting and usage metering before enabling managed execution. No billing
or deployment infrastructure was introduced by this revision.

## Verification

- `npm.cmd run typecheck`
- `npm.cmd test` — 366 passed, 2 skipped at implementation time.
- `npm.cmd run build` — production static export and CSP generation.
- `node --test electron/ai/model-access.test.cjs electron/ai/ipc.test.cjs` — detection,
  fixed destinations, key redaction, replacement preservation, request throttling,
  public preview isolation, favorite filtering and restart persistence.
- `node scripts/electron-model-settings-smoke.cjs` — isolated desktop test using
  synthetic transports and temporary application data. Checks one masked input,
  automatic provider detection without a picker, secure save, zero automatic
  generation calls, unchanged active model,
  favorites, backend failure filtering, preview-only actions, responsive columns and
  restart persistence. Screenshots are written to `test-results/model-settings-*.png`.
- `node scripts/release-secret-audit.cjs` — scans tracked/new sources, Git history
  and the current `out` static export. Known key/private-key patterns only; findings
  contain locations, never values. The initial and final scans found no matches.

Live provider credentials were not used. This validation builds and scans the static
release output; it does not rebuild a Windows installer or audit a new packaged binary.
The existing Electron packaging allowlist and `scripts/audit-package.cjs` remain in place.
