# Orbistry — Pre-LLM Backend Engineering / Codex Implementation Brief

**Document:** Orbistry LLM Front Office — Modular Backend Implementation Specification\
**Version:** 1.0 (implementation brief, not claim of implemented features)\
**Scope:** Between user input and the LLM provider, plus response processing and instrumentation\
**Primary mode:** Local-first, desktop-first, bring your own key (BYOK)\
**Initial providers:** OpenRouter and NVIDIA API (confirm exact NVIDIA endpoint/account type before implementation)\
**Baseline constraint:** Experimental chat with **no Context Box, no custom personality, no skills, no RAG, no long-term memory**.

> **COPY THIS FILE INTO CODEX AS A TASK.** Before editing any files, inspect the current repository. The directory layouts and language choices below are *proposed*, not assumed to match Orbistry. Adapt them to the repo's actual stack, explain any deviations, and preserve working features.

---

## 0. Project intent (read first)

Build a **transparent, modular, tuneable pre-LLM "front office"** in Orbistry. The product architect must be able to inspect and adjust each layer's settings without reading an opaque monolithic agent implementation. A third-party engineer must be able to review the entire request lifecycle from UI input through model selection/provider routing to final output.

The purpose is to empirically assess **quality, speed, efficiency, reliability, and ergonomics**. Do not assume that LiteLLM or extra layers improve model intelligence by themselves. Use controlled benchmarks.

**Deliverables:**
1. Audit of existing repo, architecture and compatibility risks.
2. Discrete code modules with clearly defined interfaces, contracts, configuration files, and comments.
3. LiteLLM integration (prefer SDK where appropriate; use proxy only with justified operational reasons).
4. OpenRouter and NVIDIA integrations, no keys committed to source control.
5. Capability-based model inventory, sorting/filtering and inspectable model detail panel in Settings.
6. Routing, context/output budget checks, bounded retries/failover, streaming, standardized error handling, and telemetry.
7. Experiment mode with side-by-side A/B/C reproducible results.
8. Dedicated developer docs, a tuning guide for the product architect, README changes and tests.

**Non-goals:** Context Box retrieval; knowledge stations; agent persona; tools/skills execution; semantic search; prompt-chain orchestration; complex agent planning; online account synchronization; commercial billing; paid/cloud infrastructure by default; training/fine-tuning a model.

---

## 1. Audit-first procedure — DO NOT SKIP

Before writing any implementation:

- Identify repository language(s), framework(s), build system, runtime, desktop bridge, existing chat UI, settings UI, API adapters, streaming path, request handlers, and secret storage.
- Trace a *real current user message* from its UI event to provider API request, response stream, renderer, and persisted chat record. Document file/function paths.
- Inspect how existing model names, provider keys, token estimates, system prompts, error handling, and cancellation work.
- Find tests, lint/typecheck/build scripts and CI. Verify baseline before edits.
- Check whether a Python runtime is bundled/deployed. **Do not introduce a Python sidecar merely because LiteLLM is Python-based without a trade-off analysis.** Evaluate: (A) LiteLLM Python SDK in existing Python backend; (B) local LiteLLM Proxy over HTTP; (C) internal provider-neutral adapter with LiteLLM-enabled optional service. Keep Windows packaging and local-first distribution in mind.
- Verify the exact NVIDIA product endpoint: NVIDIA NIM / NVIDIA Build / OpenAI-compatible NVIDIA hosted API / self-hosted NIM. Do not infer from the word 'NVIDIA'.
- Review dependency licenses and security advisories at a pinned version. Verify current LiteLLM API signatures before implementation.

**First Codex output (before editing):** `docs/architecture/pre-llm/00-existing-architecture-audit.md` with existing flow, chosen integration mode, important files, compatibility hazards, planned changes, and rollback strategy. If major changes are necessary, provide a proposed plan before changing high-risk areas. Otherwise proceed in small independently testable commits.

---

## 2. Target architecture and responsibility boundaries

```text
User / Orbistry Chat UI
           |
           v
[01 Request Intake & Validation] -----> [Request ID / cancellation]
           |
           v
[02 Requirement Builder] ------------> [Task + modality + quality/cost/speed policy]
           |
           v
[03 Token & Context Budget Guard] ---> [Preflight input/output capacity]
           |
           v
[04 Capability Registry] ------------> [Verified metadata + long-context test results]
           |
           v
[05 Capability-aware Model Router] --> [Eligible models + ranked primary + fallbacks]
           |
           v
[06 LLM Adapter / LiteLLM] ----------> [Provider translation + credentials]
           |
           v
[07 Reliability Controller] ---------> [Bounded retry + failover + circuit breaker]
           |
           v
[08 OpenRouter / NVIDIA / optional future provider]
           |
           v
[09 Streaming & Response Processor] -> [Normalization + schema validation + cancellation]
           |
           v
[10 Chat Renderer + Conversation State]

[11 Observability] <- spans ALL stages (tokens, cost, latency, attempts, model, failures)
[12 Evaluation]    <- measures baseline vs gateway vs routed, writes evidence back to registry
```

**Clarification:** Actual runtime boundaries may put [07] around [06], not literally after it. Model selection happens before provider execution; reliability wraps execution and may request a permitted fallback model. Observability runs across the full request. Avoid duplicated retries at the Orbistry and LiteLLM layers.

**Principles:**
- No unnecessary LLM call simply to classify a short request: begin with deterministic heuristics / explicit user preferences.
- **Capability Router** chooses a capable *logical model*; **Gateway deployment routing** chooses its provider/endpoint. Never create two competing model-selection brains.
- If the user manually pins a model/provider, obey that choice or give an explicit error; never silently change the model.
- No silent context truncation, compression, model substitution or hidden token spending in benchmark mode.
- Successful output ≠ correct answer. Evaluation must assess both.
- Failures must be legible in the UI, including when no eligible fallback exists.

---

## 3. Package inventory / layers to implement

Use the following **logical package boundaries** even if the physical files differ. Each package has a single responsibility, documented interface, configurable settings, unit tests, and a short explanation in the docs.

| ID | Proposed package | Responsibility | User-tuneable parameters | Key output |
|---|---|---|---|---|
| P01 | `request_intake` | Sanitize/validate input structure; assign request ID; receive cancellation | max request chars, accepted formats | `NormalizedChatRequest` |
| P02 | `requirement_builder` | Derive modality, output contract, task category, preference constraints | quality/cost/latency mode, explicit tasks | `TaskRequirements` |
| P03 | `conversation_manager` | Multi-turn history for experimental chat only | history policy, token budget, warnings | `MessageSequence` |
| P04 | `token_budget` | Estimate provider-aware prompt and output tokens; reserve headroom | token safety margin, max output, hard budgets | `BudgetDecision` |
| P05 | `model_registry` | Model/provider/deployment metadata and provenance | editable overrides, update policy | `ModelProfile[]` |
| P06 | `long_context_reliability` | Store measured performance by input length/location/task | minimum confidence, benchmark age | `ReliabilityProfile` |
| P07 | `model_router` | Filter hard constraints; rank candidates; expose selection rationale | priority weights, hard/soft limits | `RoutingPlan` |
| P08 | `provider_gateway` | Unified provider adapter via LiteLLM or equivalent | endpoint, provider, auth alias | `LLMResponse/StreamEvent` |
| P09 | `reliability` | Retry, timeout, cooldown, circuit breaker, provider/model failover | retry cap, timeout, backoff, fallback policy | `ExecutionResult` |
| P10 | `response_processor` | Normalize/validate response and finish reasons; stream safely | JSON schema, output contract | `NormalizedResponse` |
| P11 | `observability` | Tokens, cost, TTFT, E2E latency, retries, errors, selection reason | logging level, retention, privacy | `RequestTrace` |
| P12 | `evaluation` | Fair baseline/gateway/router experiment harness | test suite, repetitions, scoring policy | benchmark report |
| P13 | `model_catalog_ui` | Settings list, grouped/filter/sort models by capability, detail inspector | sort/filter/favorites; manual/auto mode | interactive Settings UI |

### P01 — Request Intake

Do: validate role/message sequence, request size, generation options, request-id and cancellation signal; reject malformed content with useful errors. Do **not** embed domain analysis or agent personality. Comment the public boundary and validation rules.

### P02 — Requirement Builder

Create a transparent object with `task_type`, `required_modalities`, `needs_tools` (false in experimental mode), `requires_json_schema`, `expected_input_tokens`, `reserved_output_tokens`, `minimum_reliability`, `cost_cap`, `latency_target`, `user_model_override`, `routing_policy`. Unknown facts stay `unknown`, not invented. Prefer deterministic rules and manual override; an ML classifier is **not** required.

### P03 — Conversation Manager

Keep normal chat history separate from persistent memory. Present the token-cost of included history. Support clear/reset conversation and a transparent overflow policy (`reject_and_warn` as default for experiments). No automatic silent summarization. Use existing chat persistence if available; don't introduce a second source of truth.

### P04 — Token & Context Budget Guard

Differentiate **characters**, **estimated tokens**, **actual billed input tokens**, **output token cap**, and **reasoning/output accounting** if provider exposes it. Avoid assuming one tokenizer for every model. Query/provider-specific token estimation if available and otherwise show approximate values as estimates. Reserve context headroom for output/overhead according to tested provider behavior. Reject or request user adjustment when projected requirements exceed capacity. Never falsely advertise the full advertised context window as proven reliable.

### P05 — Model Capability Registry

Maintain typed records with clear **metadata provenance and last-verification time**. Suggested fields:

```yaml
# EXAMPLE ONLY — not a verified real model
id: research-example-a
label: Example Research Model A
provider: openrouter
provider_model_id: example/model-a
api_endpoint_alias: openrouter_default
capabilities:
  input_modalities: [text]
  output_modalities: [text]
  tool_calling: false
  vision: false
  structured_output: unknown
limits:
  advertised_context_tokens: 128000
  max_output_tokens: 16000
  tested_reliable_context_tokens: null
performance:
  quality_score: null      # score only from Orbistry benchmark with methodology
  median_ttft_ms: null
  median_e2e_ms: null
pricing:
  input_usd_per_million_tokens: null
  output_usd_per_million_tokens: null
availability:
  status: unknown
source:
  url: null
  checked_at: null
```

Hard rule: `unknown` != `false`. Distinguish **model identity**, **provider identity** and **deployment identity**. Multiple providers may serve the same underlying model but differ in parameters, price, quotas, latency and output availability. Registry overrides must be locally inspectable and validated. Record when external metadata was refreshed; do not silently fabricate rankings.

### P06 — Tested Long-Context Reliability

Store empirical benchmark outcomes rather than trusting advertised maximums. Measure retrieval and instruction compliance for data at beginning/middle/end across context lengths; record benchmark name, dataset, score, repetitions, model version, provider, observed effective length, timestamp and uncertainty. MVP can have **no measurements**, represented as `unverified`. Do not block every new model merely because it is unverified; expose policy (strict/warn/allow) with safe default. Scheduled auto-benchmarking is out of scope.

### P07 — Capability-aware Model Router

Pipeline: (a) apply hard requirements, (b) eliminate unsupported/known unhealthy endpoints, (c) rank eligible candidates, (d) emit primary + justified fallback chain + explanation. Hard checks: context/output capacity, required modality, response format support, policy, key availability, budget. Soft ranking: benchmark quality per task, cost, TTFT/E2E, reliability. `unknown` requires explicit conservative treatment. Support `manual` and `auto` selection modes; **default manual during baseline experiment**. Keep scoring formula and weights readable/configurable. Never conflate advertised limits with tested reliability.

Example routing outcome:

```json
{
  "request_id": "example-id",
  "policy": "balanced",
  "eligible_model_ids": ["model-A", "model-B"],
  "selected_model_id": "model-A",
  "fallback_model_ids": ["model-B"],
  "selection_reasons": ["supports requested output", "within token budget"],
  "warnings": ["long-context reliability is unverified"]
}
```

### P08 — LiteLLM Gateway / Provider Abstraction

Implement an internal `LLMClient` interface first; adapt LiteLLM behind it. Use LiteLLM SDK if Orbistry already has an appropriate Python backend. Otherwise evaluate a local proxy/sidecar versus retaining an internal unified adapter. **Do not hardwire the UI to LiteLLM**. Expose provider-specific capability/parameter support and show unsupported options instead of silently dropping them.

- Support OpenRouter API credentials, model IDs, streaming, usage and errors.
- Support **exact verified NVIDIA endpoint** and authentication based on actual user account (may be `nvidia_nim/` or another supported OpenAI-compatible configuration).
- Never assume that NVIDIA API has permanent free tokens or unlimited quotas.
- Pin LiteLLM version; document local setup, SDK/proxy choice, and dependency update procedure.
- Support manual provider switching and an observable failover route.
- Zero secrets in source, chat export, request traces, browser console, screenshots, or error messages.
- For optional LiteLLM Proxy: justify process startup/shutdown, binary/Python distribution on Windows, secret persistence, listen address (`127.0.0.1` by default), authentication and health checks. Avoid publicly exposed unauthenticated gateway.

### P09 — Reliability and Failover

Implement explicit `timeout`, `retry`, `backoff`, `cooldown`, `circuit_breaker`, `same_model_alternate_provider`, `alternate_model_fallback`. Design one retry owner: if using LiteLLM Router retries, **do not nest equivalent uncontrolled retries**. Define retryable transient errors vs nonretryable invalid-key/context/invalid-request errors. Include total-attempt cap, cumulative token/cost cap and end-to-end deadline. When a streamed answer has partially arrived, **never silently restart and append a duplicate**; surface continuation/retry policy. Do not retry potentially side-effecting tool calls (tools are disabled in this phase). When a model/provider switch occurs, record and disclose it in UI and telemetry.

### P10 — Streaming and Response Processor

Use a normalized event contract like `start`, `delta`, `usage`, `finish`, `error`, `cancelled`; integrate current UI incremental renderer. Avoid buffering entire output if streaming is working. Preserve `finish_reason`, refusal/error information where available, and provider-reported usage; normalize JSON/schema results only where supported. For invalid JSON, return a clear validation result; never claim schema compliance without checking.

### P11 — Observability

Capture, at minimum: request ID, session ID pseudonym, timestamp, chosen model/provider/deployment, selection rationale, input estimate, actual input/output usage where supplied, estimated USD cost and source, TTFT, end-to-end latency, timeout, number of attempts, fallback event, error class, finish reason, cancellation and streaming state. Keep raw prompts/responses **off logs by default**; offer an explicit local opt-in for debugging. Mark estimated vs provider-reported numbers. Support CSV/JSON export with secrets redacted. Preserve user privacy and configurable local retention.

### P12 — Benchmark / Evaluation Harness

Provide repeatable A/B/C:
- **A — Existing baseline:** existing direct provider adapter, fixed model/provider.
- **B — Gateway:** same underlying model/provider, same prompts/settings through LiteLLM.
- **C — Router:** capability router may select among allowed models. Record model changes.

Start with 30–50 task prompts, including short chat, multi-turn 20–30 turn conversations, conceptual finance explanations, instructions/format compliance, and challenging long-context tests (synthetic, controlled; no proprietary data by default). Run multiple repetitions and capture ground-truth/rubric-based quality, adherence, reliability, cost, TTFT and end-to-end latency. For A vs B control model, temperature, max tokens, prompt and provider. Disable fallback when measuring baseline transport overhead. Define `successful_answer_rate` and `cost_per_successful_answer`. Never interpret one run as conclusive. Provide CSV/JSON export plus human-readable report. Display sample size and uncertainty, not just averages.

### P13 — Model catalog and Settings UI

**Requirement: model listing in Settings must be sorted and filterable by capability.** Build an accessible desktop-first table/list showing:

- Provider and model ID/name; installed/configured/available status.
- Context window (advertised) and **tested reliable context** separately.
- Max output tokens.
- Capabilities: tools, vision, structured output, text, other modalities if later supported.
- Task-specific benchmark quality (only verified) with methodology link.
- Input/output prices and estimated cost per sample request (mark unknown/stale).
- TTFT, end-to-end latency, observed success rate, last test date.
- Whether credentials are configured; never show actual keys.
- A model details pane: provider endpoint, source metadata, provenance, limits, supported parameters, observed failure counts and editable local overrides.

**Sorting:** Default *Recommended / Best Match for selected task* when usable measurements exist; otherwise **capability coverage** then verified context/output capacity, with unverified score shown as `Not tested` and no fake quality rank. Other sort modes: Quality (benchmark-specific), Lowest cost, Lowest latency, Largest context, Highest max output, Reliability, Provider, Alphabetical. Filters: provider, supports vision/tools/structured output, min context, verified-only, affordable under target budget, available key, favorites. Manual model pin and `Auto (Orbistry Router)` as distinct choices. Stable ordering, predictable tie-breakers and explicit explanation "Why this model?". Provider model names may update; guard missing/stale catalog data.

**Tuning interface (advanced Settings > Backend / Model Engineering):** one place to view/edit safe public knobs: router weights, context reserve, maximum output, provider preferences, global timeout, retry ceiling, fallback enable, token/cost cap, history overflow behavior and benchmark status. Provide reset-to-default, validation, plain-language tooltip, export/import of **non-secret** configuration and clear unsafe-setting warnings. Keep a separate Basic UI so novice users don't face an overwhelming dashboard.

---

## 4. Proposed file/folder structure — adjust to repo

Create one clearly identifiable backend area; prefer existing repo conventions and avoid arbitrary duplication.

```text
Orbistry/
├── backend/                           # OR existing src/backend/ / app/backend/
│   └── llm_front_office/
│       ├── README.md                  # package map, flow and tuning glossary
│       ├── __init__.py                # if Python; adapt names for TypeScript/Rust/etc
│       ├── contracts/                 # typed request, requirements, response, events
│       ├── request_intake/
│       ├── requirement_builder/
│       ├── conversation_manager/
│       ├── token_budget/
│       ├── model_registry/
│       ├── long_context_reliability/
│       ├── model_router/
│       ├── provider_gateway/          # LiteLLM adapter and provider config
│       ├── reliability/
│       ├── response_processor/
│       ├── observability/
│       ├── evaluation/
│       ├── config/
│       │   ├── defaults.yaml          # readable defaults, NOT secret
│       │   ├── models.example.yaml    # examples only, NOT fake production facts
│       │   ├── routing_policy.yaml
│       │   └── provider.example.yaml  # credential references, NOT real keys
│       └── tests/
├── docs/
│   └── architecture/
│       └── pre-llm/
│           ├── 00-existing-architecture-audit.md
│           ├── 01-overview-and-flow.md
│           ├── 02-modules-and-contracts.md
│           ├── 03-provider-setup-openrouter-nvidia.md
│           ├── 04-model-registry-and-ranking.md
│           ├── 05-token-economics-and-context.md
│           ├── 06-reliability-errors-and-recovery.md
│           ├── 07-observability-and-benchmark.md
│           ├── 08-front-office-tuning-playbook.md
│           └── 09-security-and-rollback.md
├── .../settings/...                   # actual Settings UI location from audit
└── README.md                          # root README update, link detailed docs
```

Do not introduce `__init__.py` into a non-Python codebase; file tree is semantic. Name the actual folder in a way the current project can package/release. Keep provider SDK and internal contracts behind interfaces so modules can be replaced independently.

---

## 5. Code readability and commentary rules (MANDATORY)

**Audience:** third-party backend engineer, security reviewer, and non-specialist product architect learning backend engineering.

- Each module gets a top-of-file comment/docstring: **Purpose / Inputs / Outputs / Dependencies / Failure modes / Tuning knobs / Owner**.
- Each exported/public function or class gets a concise **what / why / parameters / returns / raises** docstring, with a small usage example when non-obvious.
- Add inline comments for *reasoning and trade-offs*, e.g. why retries are bounded, why a model is rejected, why `unknown` metadata differs from `false` — **not** pointless restatement of code.
- Add type annotations / interfaces and validation for request/response schemas.
- No unexplained magic numbers; constants and configurable defaults must be named.
- No giant single-file orchestration; keep side-effectful provider calls separate from pure selection/scoring functions.
- No hardcoded provider keys, private endpoints, or user message logs.
- Provide explicit error classes and actionable messages. Avoid blanket `except` swallowing useful failure causes.
- Add unit tests for every public component (valid/invalid/boundary cases), plus integration tests with mocked provider streaming and failure cases.
- Keep configuration documentation paired to defaults: name, meaning, allowed range, unit, consequences, where exposed in UI.
- Prefer minimal dependencies, lock/pin versions, avoid duplication with existing repo utilities.
- Add readable Mermaid sequence and component diagrams in `docs/architecture/pre-llm/01-overview-and-flow.md`; Mermaid must match real code, not aspirational features.
- `README.md` should distinguish **Implemented**, **Experimental**, and **Planned**, and include tested setup commands (do not fabricate results).

**Docstring example (language-agnostic style):**

```python
def select_model(requirements: TaskRequirements, candidates: list[ModelProfile]) -> RoutingPlan:
    """Select a capable model before consuming provider tokens.

    Why:
        Reject known-incompatible models before API dispatch and provide an
        auditable explanation for automatic model selection.
    Inputs:
        requirements: validated modality, context/output, budget and policy.
        candidates: registry profiles with verified or explicitly unknown fields.
    Returns:
        RoutingPlan with selected model, valid fallbacks and selection reasons.
    Raises:
        NoEligibleModelError: no model satisfies required hard constraints.
    Tuning:
        routing_policy.yaml -> ranking weights and unknown-data policy.
    """
    ...
```

---

## 6. Root README update requirements

Add a section **"LLM Backend Engineering / Front Office"** to the existing README (do not replace its current README material):

1. What this backend solves and **what it does not** solve.
2. One paragraph plain-language explanation: *request → requirements → token budget → registry/router → LiteLLM → provider → response → metrics*.
3. A compact flow diagram and links to each developer doc.
4. Supported providers and how BYOK credentials are configured securely (no pasted real keys in examples).
5. Manual model selection vs Auto Router.
6. Overview of Settings: capability list/sorting and tuning controls.
7. Cost, token and error transparency; limits of estimated counts and metrics.
8. How to run experimental chat with Context Box/personality/skills disabled **without changing normal agent behavior**.
9. Baseline / gateway / router benchmark commands, required fixtures and how to read results.
10. Status table of implemented/experimental/planned features, prerequisite runtimes, how to disable or rollback the module, and troubleshooting.
11. Link: `docs/architecture/pre-llm/08-front-office-tuning-playbook.md` specifically for a product architect learning tuning.

Write docs in straightforward Indonesian with English engineering terminology in parentheses, or match repo's established documentation language while providing an Indonesian learning guide. Avoid marketing claims like 'faster', 'smarter', 'saves 80% tokens' without measurements.

---

## 7. Safe configuration and parameter tuning

Ship config with safe defaults and comments; every listed knob must be inspectable and have clear units. Example only:

```yaml
# Configuration example; adjust names/values after repo audit and verification.
experiment_mode:
  enabled: false                   # must be explicitly enabled
  disable_custom_personality: true
  disable_context_box: true
  disable_skills: true
  disable_rag: true
routing:
  mode: manual                     # manual | auto; auto only when opted in
  priority: balanced               # quality | speed | cost | balanced
  strict_unverified_capabilities: true
  allow_model_switch_on_failure: false
budget:
  max_output_tokens_default: 2048
  context_headroom_fraction: 0.15 # conservative example, validate per model
  max_estimated_request_usd: null # null = no additional client cap; label clearly
  on_history_overflow: reject_and_warn
reliability:
  max_attempts_total: 2            # never combine with another hidden retry stack
  timeout_seconds_total: 60
  fallback_enabled: false         # preserve A/B baseline until explicit opt in
telemetry:
  raw_prompt_logging: false
  raw_response_logging: false
  retain_days: 14
```

**Warnings:** These settings are *initial placeholders*, not scientifically optimized or provider-certified defaults. Define distinction between per-attempt and total deadline; define failure behavior when the provider disregards maximum output. Do not allow UI tuning to silently bypass security checks.

---

## 8. Security, privacy and operational constraints

- BYOK secrets stored using existing secure local credential storage / OS keychain if available; never in plaintext example YAML, browser local storage without analysis, or repository.
- Keep gateway loopback-only unless explicit authenticated deployment is being developed.
- Ensure process lifecycle/cleanup on app shutdown; no orphan gateway server.
- Mask API keys and private headers in structured error responses/logs.
- Prevent request metadata accidentally containing raw conversation content or sensitive document data.
- For fallback across providers, users must authorize where prompts can be sent; **no silent cross-provider data transfer**.
- Be cautious with provider/model capability mismatches (especially streaming, JSON, tool calling, reasoning parameters).
- Cache metadata, not user prompts by default. Don't claim billing is exact when it is estimated.
- Never advertise a provider as free/available based solely on marketing; actual quota must be checked by permitted APIs or shown as unknown.
- Check MIT/OSS license of the *pinned* LiteLLM artifact and third-party notices in the build.
- No external telemetry/hosted observability by default; local metrics first.
- Keep existing Orbistry agent isolation and permission boundaries unchanged.

---

## 9. Test plan / acceptance criteria

### Unit tests

- Invalid/malformed message rejected before provider call.
- Token estimate failure does not turn into fabricated zero-cost request.
- Context + reserved output over capacity yields actionable warning/error.
- Unknown capability is not silently treated as supported.
- Model router obeys manual pin, hard filters and reproducible tie-breaker.
- Automatic sorting correctly handles unknown quality, stale data and ties.
- Temporary provider failure triggers only bounded retries.
- Authentication and invalid-request errors do not cause pointless retries.
- All-provider failure produces one understandable error, no endless loop.
- Streaming emits correct order; cancellation stops attempts; partial output is not duplicated after retry.
- API keys never appear in logs, metrics exports or errors.
- Normalized usage distinguishes estimated versus provider-reported.

### Integration / UX tests

- OpenRouter credential + supported model can complete and stream a minimal chat.
- Verified NVIDIA credential + actual supported endpoint can complete and stream a minimal chat (if account quota/access exists; otherwise explicit skipped test).
- Existing provider/chat flows continue functioning unchanged.
- Settings model list groups/filters/sorts and explains capability rankings correctly.
- Manual model selection persists for the session; auto routing is opt-in.
- Provider switch/fallback is visible to user and trace.
- No Context Box, persona or skills leak into experimental chat.
- App launches, runs and shuts down cleanly on target desktop OS.
- Root README commands are actually tested; docs match code.

### Benchmark report minimum columns

`run_id, timestamp, scenario, prompt_id, turn_index, provider, deployment, model, routing_policy, input_tokens_estimated, input_tokens_reported, output_tokens_reported, cost_usd_estimated, ttft_ms, e2e_ms, attempts, fallback_used, finish_reason, error_class, quality_score, format_pass, notes`

**Acceptance is evidence-based, not an invented threshold:** report before/after performance, reproducibility, failures and trade-offs; define numerical success thresholds with the owner after baseline is captured. There must be no regressions in existing core chat behavior or unauthorized provider calls.

---

## 10. Codex execution plan and checkpoints

**Milestone 0 — Repo inspection and design.** Read the existing code and produce audit + selected integration option + dependency/security notes + minimal PR plan. Preserve app architecture.

**Milestone 1 — Interfaces and baseline instrumentation.** Create typed request/response contracts, request IDs, logging, and baseline latency/token measurements without changing provider selection.

**Milestone 2 — LiteLLM integration.** Add modular adapter, OpenRouter and verified NVIDIA provider support, streaming, cancellation, manual selector. Keep gateway optional if possible.

**Milestone 3 — Registry + model Settings.** Introduce registry with provenance, model catalog and capability filters/sorting; no fabricated metadata or scores.

**Milestone 4 — Routing and budgets.** Add deterministic requirements, token/context preflight and transparent eligibility/ranking; start auto mode behind feature flag.

**Milestone 5 — Reliability.** Add bounded retries, total deadline, cooldown/failover, explicit consent for cross-provider fallback, and clear recovery errors.

**Milestone 6 — Benchmarks and docs.** Test A/B/C, long conversation behavior, quality/latency/cost; write engineer docs, README and tuning playbook; produce changelog and rollback steps.

For each milestone: run formatter/linter/typechecker/tests/build; show changed files, API contracts, screenshots where possible, known limitations, risks and how to revert; do not claim tests passed unless actually run. Do not overbuild enterprise features or replace other functioning agent modules.

---

## 11. Deliverables checklist for Codex's final response

- [ ] Existing architecture audit and the selected SDK/proxy integration rationale.
- [ ] Dedicated, human-readable `llm_front_office` modules mapped to actual repo paths.
- [ ] Shared typed contracts and commented public functions.
- [ ] OpenRouter + NVIDIA configured via safe BYOK references, with endpoint-specific notes.
- [ ] Model Registry with source provenance, unknown handling, and editable overrides.
- [ ] Settings model listing ranked/filterable by capability and a detail inspector.
- [ ] Manual mode plus opt-in auto routing and explanation panel.
- [ ] Token/context guard and explicit history overflow policy.
- [ ] Bounded retries, fallbacks, timeout, cancellation and visible errors.
- [ ] Streaming, usage/latency/cost/attempt trace and secret redaction.
- [ ] Baseline/Gateway/Router evaluation harness and factual report.
- [ ] Root README additions and dedicated architecture/tuning docs.
- [ ] Automated tests and evidence of actual verification.
- [ ] Rollback/feature flag and statement of unimplemented/future features.

---

## 12. Official references — verify current docs during implementation

- LiteLLM overview: https://docs.litellm.ai/docs/
- Provider catalog (OpenRouter and NVIDIA NIM listed): https://docs.litellm.ai/docs/providers
- Router: https://docs.litellm.ai/docs/routing
- LiteLLM Gateway request flow: https://docs.litellm.ai/docs/proxy/architecture

**Final design rule:** LiteLLM manages provider access and compatible transport. Orbistry owns task requirements, capability evidence, selection policy, conversation boundaries, user-facing decisions, and product-level evaluation. **Build the smallest modular system that can demonstrate measurable improvement or reveal a regression.**
