# Orbistry — Model Provider Settings Revision

**Version:** Victoria Beta — implementation brief for Codex\
**Scope:** BYOK model setup, model catalog UI, and Provided Models preview\
**Priority:** Preserve existing workflows, settings, persistence, and security.\
**Source of truth:** Inspect the repository and reuse existing provider/model/favorite data. Do not assume any particular model is starred.

## Objective

Redesign the Settings model-access experience into two clearly separated flows:

1. **BYOK:** one API-key input; identify/confirm provider; fetch and display available models.
2. **Provided Models:** show **only models already starred/favorited in the developer's existing model catalog/configuration**. Do not invent, preselect, or hardcode favorites. These are catalog entries only for now: paid deployment and public use are not enabled.

Use the existing Orbistry design language (minimal, slim, dark, desktop-first). Preserve everything outside this scope.

## Critical non-negotiable security rules

- **Do not ship the developer's private API key** in Git, frontend bundles, desktop binaries, packaged configuration, environment defaults, sample files, logs, telemetry, or API responses.
- **Hiding a key in the UI is not sufficient.** Never embed the private key in an app distributed to users. Developer-only use may read a local, gitignored secret in a local build. Later production Provided Models must call a private authenticated server-side proxy with billing, authorization, quotas, rate limits, abuse prevention, and usage metering.
- Do not expose a paid/provided endpoint publicly before backend protections and billing exist.
- If the current app has no trusted backend, show Provided Models as a **non-executable curated catalog/preview** in public builds. Disable model invocation and agent deployment through this catalog, with clear `Coming later` indication.
- If existing config already stores a secret insecurely, do not migrate/duplicate it into the UI. Report the problem and use secure credential storage appropriate to the platform (OS keychain/credential manager where applicable). Never echo key values.
- Provider detection must not spray credentials across unrelated providers. Prefer known key prefixes or existing provider metadata; only validate against the confidently matched provider. If ambiguous, request provider selection before a network request. Allow custom endpoint only when validated and explicitly entered by the user, and guard against unsafe URLs/SSRF in any server-side proxy.
- Never place secrets in query parameters; redact from error messages and logs.

## Settings structure and layout

### Section A — BYOK (always first)

- A single full-width **API Key** input (masked), with show/hide optional and a `Check / Connect` button.
- After successful validation, display e.g. `NVIDIA detected` or `OpenRouter detected`, plus verification status. Distinguish **provider identified** from **key verified**.
- Invalid key: show an actionable but sanitized error. Do not print credentials, raw provider payloads containing secrets, or stack traces.
- Load models through existing provider adapters and normalize model IDs, names, capabilities, context/output limits, prices, and status only when these fields are available. Show unknown fields as unavailable, not invented.
- Preserve existing add/remove/save key behaviors where possible, including support for previously stored keys and existing agents. Do not erase legacy connections or change active models without user approval.

### Section B — tabs immediately beneath BYOK

Tabs: **BYOK Models** | **Provided Models**.

- Model display: **two cards per row** on normal desktop width, rows continue vertically as `ceil(model_count / 2)`; on narrow screens, gracefully fall back to one column.
- Card visual reference: NVIDIA Nemotron screenshot supplied in conversation. Recreate its *information hierarchy*, not NVIDIA's branding or purple accents. Match Orbistry dark minimalist UI: compact icon/provider, bold model title, concise functional description, capability chips, availability, optional free-endpoint indication, favorite star, and a clear select action where enabled.
- Use the **actual model catalog** to populate cards. Do not hardcode example models such as Ultra, Parse, Lightning, etc. unless present in existing data.
- Respect keyboard navigation, visible focus indicators, scrolling, and loading/empty/error states.

### BYOK Models tab

- List available models for the authenticated/verified BYOK provider, from the saved connection.
- Selecting a model should continue to work with existing agent configuration and deployment behavior (subject to existing permissions and checks).
- Persist selected provider/model IDs, not the raw key in agent configuration.

### Provided Models tab — IMPORTANT: starred only

- Data source = **developer's existing saved favorites/starred selections**. Display only records for which the repository's canonical favorite flag/list is true. Do not infer starred status from recommendations, names, popularity, or model capabilities.
- If there is no existing reliable favorites source, do **not** populate a fake list. Show a clear empty state and identify the location/format of favorite state that Codex needs to connect.
- Keep selected favorites stable/persistent based on their source; do not overwrite or toggle existing favorites during migration.
- The default public view hides errored/unavailable favorites; the authorized developer's **Dev View** can display them with diagnostic status. A client-side toggle alone does **not** grant developer authorization. Ensure dev diagnostics contain no secrets.
- In **development**, developer-only access to personally configured models can remain functional locally, using local private credentials that are never distributed. In **public/release builds**, Provided Models remain preview-only until a secure backend and payments are implemented.
- Render `Available` only where actual health/availability was verified; use `Unverified` when unknown. Do not equate a listed model with a working model.
- Do not build or activate payment, subscription, or paywall execution in this task. Show `Managed access — coming later` or equivalent for the deployment action where appropriate.

## Backend implementation expectations

1. Inspect existing settings components, provider adapters, credential persistence, model registry, favorite/star schema, deployment path, and any build-time environment injection.
2. Define a provider-detection result with explicit states: `unrecognized`, `ambiguous`, `identified_unverified`, `verified`, `invalid`, `unreachable`.
3. Reuse provider-specific validation/model-list endpoints and the existing model capability registry where present. Normalize catalog entries but preserve raw canonical provider/model IDs internally.
4. Separate credential ownership into `user_byok`, `developer_local`, and `managed_server` (future). Never silently fallback from one credential scope to another.
5. Ensure `Provided Models` never invokes a developer credential through an untrusted client or publicly accessible endpoint.
6. Persist favorites, selected models, and provider metadata using existing persistence APIs; no accidental reset of user settings.
7. Filter error models by default at the **data authorization layer** for non-dev users, not merely via CSS/conditional rendering. Only authorized devs can request diagnostic entries.
8. Keep status checks rate-limited/cached as appropriate, avoid automatic paid generation just for health checks, and handle provider downtime gracefully.
9. Add or update tests for key handling, detection ambiguity, catalog filtering, persistence, and release isolation.

## Suggested data shape (adapt to repository; do not duplicate schemas)

```ts
type CredentialScope = 'user_byok' | 'developer_local' | 'managed_server';
type ProviderVerification =
  | 'unrecognized' | 'ambiguous' | 'identified_unverified'
  | 'verified' | 'invalid' | 'unreachable';

type ModelCatalogEntry = {
  providerId: string;
  modelId: string;
  displayName: string;
  summary?: string;
  capabilities?: string[];
  contextWindow?: number;
  maxOutputTokens?: number;
  priceInfo?: string;
  isFavorite: boolean; // existing canonical starred state
  availability: 'available' | 'unverified' | 'error';
  credentialScope: CredentialScope;
};
```

## Definition of done / acceptance checks

- [ ] One masked BYOK input displayed prominently above model tabs.
- [ ] Provider identification never falsely claims validation; ambiguous keys use manual selection.
- [ ] Verified BYOK connection populates a live catalog using existing provider adapter(s).
- [ ] Two-column desktop model-card layout consistent with Orbistry styling; responsive one-column fallback.
- [ ] Provided Models shows **only actual starred favorites from developer's saved selection**, excluding non-favorites.
- [ ] Missing favorites yields empty state, **not fabricated models**.
- [ ] Error models hidden normally; only an **authorized** Dev View can show them.
- [ ] Public release never exposes or uses developer API secrets; Provided Models cannot be executed publicly without a secure managed backend.
- [ ] No billing/deployment of Provided Models enabled yet.
- [ ] Existing BYOK settings, agent model selection, and relevant persisted data still work.
- [ ] Secret-scanning and release-artifact checks pass, and errors/logs do not leak secrets.
- [ ] Unit/integration tests cover security and model listing; developer reports the results and any unresolved risks.

## Codex implementation workflow

1. **Audit first:** summarize relevant components/files, existing provider detection, favorite state, storage, and deployment architecture. Flag any current key exposure.
2. **Implement minimal changes:** modify only affected Settings UI, model catalog/data adapters, credential boundary, and associated tests. Preserve established naming and architecture.
3. **Test:** automated tests where available, plus manual checks for BYOK valid/invalid/ambiguous, favorite filtering, error visibility, dev authorization, restart persistence, and public release isolation.
4. **Report:** changed files, behavior implemented, screenshots if possible, tests passed/failed, secrets/public-release risks, and any items blocked by missing backend facilities.

**Do not claim deployment, payment, managed hosting, or complete provider recognition has been implemented if the supporting infrastructure does not exist.**
