# Backend implementation status

## v1.0.1 Victoria Beta consolidation

The release source now consolidates the audited backend changes on main. NVIDIA Lightning and Nano Omni use their verified instruct-mode controls; OpenRouter output-cap aliases, model-check coordination, experimental non-streaming and stage tracing are included. See [release notes](../release-1.0.1.md) and [release validation](../../report/Orbistry_v1.0.1_Validation.md). Historical checkpoint counts and limitations below remain dated records, not assertions that every provider or token-saving feature is complete.

Normal Agent Chat still lacks a complete NVIDIA usage meter and per-run comparison dashboard. Full-PDF context compression/retrieval and real LiteLLM verification remain outstanding. See [token/credit comparison status](../../report/Orbistry_Token_Credit_Comparison_Status.md).

Date: 2026-10-30 (Asia/Jakarta). Governing task: [Pre-LLM implementation brief](Orbistry_PreLLM_Backend_Codex_Implementation_Brief.md). The user requested implementation/execution of all backend-feature work after the initial audit/instrumentation checkpoint.

## QT-RCA-001 audit update

The record below describes the earlier implementation checkpoint. The subsequent strict provider audit supersedes its live-access limitations for OpenRouter: real authenticated text now passes the context-free backend, streaming and non-streaming final assistant UI, and ORBITAL two-turn continuity. NVIDIA's saved model still times out in a bounded direct test; a listed alternate returns 404. Actual LiteLLM remains disabled/unconfigured and unverified. Operational verdict: **PARTIALLY OPERATIONAL**.

The audit is isolated in `tmp/qt-rca-001` on `audit/qt-rca-001`, compared against supplied-source snapshot `829d704`. Original main and all 342 source hashes are preserved. Minimal repairs coordinate experiment actions with active model checks, accept the advertised output-cap parameter alias, retain safe UI error codes, add a true non-streaming diagnostic option and content-free stage tracing. No new backend package or dependency upgrade was added. Full Node verification: 346 tests, 344 passed, two environment-only live tests explicitly skipped, zero failed; separate actual provider/UI proof is recorded. Synthetic UI failures/fallback and the normal agent/context Electron regression pass.

Read [provider RCA](../../docs/backend/PROVIDER_RCA.md), [request flow](../../docs/backend/PROVIDER_REQUEST_FLOW.md), [reproduction](../../docs/backend/PROVIDER_DIAGNOSTICS.md) and [captured evidence](../../docs/backend/evidence/README.md). The audit adds local commits only on its separate branch; the earlier "no commits" statement below applies to the earlier checkpoint.

## Delivered application code

| Milestone | Implementation status | Evidence / scope |
| --- | --- | --- |
| 0 Audit and design | Implemented | [Existing architecture audit](../../docs/architecture/pre-llm/00-existing-architecture-audit.md); Node/Electron integration, no bundled Python sidecar |
| 1 Contracts and instrumentation | Implemented | Typed request/requirements/budget/routing/client/event/trace interfaces; request/run correlation, usage/timing and safe exports |
| 2 Provider gateway | Implemented; real proxy verification outstanding | Native OpenRouter/NVIDIA experiment transport, SSE/cancellation and authenticated loopback LiteLLM HTTP client; external service pinned to 1.106.6 with license/advisory notes |
| 3 Registry and Settings | Implemented | Provider metadata/provenance/unknowns, local overrides, evidence/favorites, capability filters/sorts and detail inspector |
| 4 Routing and budgets | Implemented | Context-free experiment mode, full successful history, manual session pins, opt-in auto routing and rationale, reject-and-warn context/cost limits |
| 5 Reliability | Implemented | Single retry owner, cumulative deadline/token/cost reservations, circuits/cooldown, no retry after partial text, separate cross-provider consent and model-switch controls |
| 6 Evaluation and docs | Implemented and fixture-executed; live comparisons outstanding | 40-case A/B/C harness, three repetitions, 1,008 explicitly mocked calls, quality rubrics/unknowns/uncertainty and JSON/CSV/Markdown artifacts |

The normal agent/context/knowledge/dataset path remains separate and passed regression coverage. Experimental requests contain only the question and complete successful experiment history, with no injected system instruction, Context Box, agent persona, skills, tools, RAG or long-term memory. The existing conversation/run stores are reused with explicit schema 5 / schema 3 modes, idempotency and recovery.

The optional proxy is externally managed, authenticated and loopback-only. Orbistry starts no service. The local HTTP adapter is tested against mocked endpoints, and its configured server version is explicitly unverified. Direct native transport is not mislabeled as a real LiteLLM measurement.

## Verification record

Before continuation, the initial checkpoint passed 304 tests and its build/type/format/security/Electron checks. Current verification includes:

| Check | Result |
| --- | --- |
| Full Node suite | 343 tests: 341 passed, 2 live-provider tests explicitly skipped, 0 failed |
| Typecheck | Passed in production build and standalone final check |
| Production build | Passed, static export hardened |
| Format checks | Passed for the integration surface and new declarations/types/scripts |
| Secret audit | Passed with no known-pattern findings; not an exhaustive secret/entropy audit |
| npm audit | Zero reported vulnerabilities at the reviewed Node dependency snapshot |
| New Electron acceptance | Passed with temporary profile/vault and mocked native/gateway endpoints |
| Existing agent Electron regression | Passed with synthetic model responses |
| Fixture benchmark | Executed: 40 cases, 3 repetitions, 1,008 fixture calls; no live provider charge |
| Screenshots | Generated and visually reviewed; theme contrast corrected |
| Git diff whitespace | Passed |

Windows execution-sandbox ACLs prevent normal sandboxed Electron startup. Hidden Electron acceptance runs outside that execution sandbox with temporary synthetic profiles, without changing ACLs or disabling Chromium sandboxing. The earlier failed test processes were isolated/cleaned; personal application state was not used.

New coverage includes malformed/oversized input, schema boundaries, unknown/stale capabilities, manual pins across global auto changes, deterministic routing, provider consent, budget/output caps, 25-turn history, JSON validation, partial-stream failure, cancellation, bounded retries/circuit/deadline, cumulative reservations, recovery after publication, metadata overrides, retention, private debug opt-in and secret-safe exports. Native and gateway credentials use the existing OS encryption path. Raw prompt/response debug capture defaults off; explicit opt-in stays in private immutable run diagnostics and is excluded from metrics exports.

## Executed commands and local artifacts

Use npm.cmd in PowerShell because npm.ps1 is blocked by the host execution policy.

- npm.cmd test
- npm.cmd run typecheck
- npm.cmd run format:check
- npm.cmd run build
- node scripts/release-secret-audit.cjs
- npm.cmd audit --json
- node scripts/electron-front-office-smoke.cjs
- node scripts/electron-runtime-kernel-smoke.cjs
- node scripts/front-office-benchmark.cjs --mock --output test-results/front-office
- git diff --check

Generated local artifacts are ignored by Git: test-results/front-office/report.json, results.csv, report.md, evidence.json, capability-catalog.png and experimental-chat.png. Mock evidence.json is empty so scripted responses cannot fabricate production model rankings. [Factual benchmark report](../../docs/architecture/pre-llm/10-benchmark-report.md) explains the limits.

## Remaining external acceptance gates

- Dedicated OpenRouter/NVIDIA live key + model settings and explicit live-test opt-in were not configured. Two tests therefore skip with reasons. NVIDIA account entitlement/quota was not inferred or verified.
- A real Python/LiteLLM runtime and authenticated proxy were not installed/started; only Windows Store Python launcher aliases were found. Real B transport overhead and actual provider quality/cost remain unmeasured.
- Conceptual finance rubric answers require human review, and numerical product success thresholds require owner decisions after real baseline capture.
- Optional proxy Python transitive dependencies were not installed or audited. The exact upstream release/license and selected security advisories were reviewed; re-review the actual environment before operating that optional service.

These are external verification limitations, not claims of completed live benchmarks. No provider quality, token savings or speed improvement is asserted from fixtures.

## Use and rollback

Open Settings → LLM Backend / Front Office. Refresh an explicitly configured provider, enable experiments, choose a manual deployment, save settings and create an experiment. All new inference modes are opt-in; fallback across providers requires a separate consent flag. See [Indonesian tuning](../../docs/architecture/pre-llm/08-front-office-tuning-playbook.md) and [provider setup](../../docs/architecture/pre-llm/03-provider-setup-openrouter-nvidia.md).

Disable experiments in their settings to stop new experiment calls. Preserve newer conversation/run files before reverting to a build without schema 5 / schema 3 support. Normal baseline metrics can separately be disabled with ORBISTRY_FRONT_OFFICE_METRICS=0. See [security and rollback](../../docs/architecture/pre-llm/09-security-and-rollback.md) and [changelog](../../docs/architecture/pre-llm/11-changelog.md).

Existing unrelated working-tree changes were retained. No commits, deployment/publishing, remote messages, account synchronization, external telemetry or spawned agents were performed.
