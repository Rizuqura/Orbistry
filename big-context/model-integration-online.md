# Orbistry — Online Model Integration Context

**Status:** Planning / Next Integration Track  
**Date baseline:** 2026-09-08  
**Project:** Orbistry — Amadeus

---

# Purpose

Orbistry already has a functional local-model path through Ollama.

The next integration goal is to add a **remote / online model execution path** without changing the knowledge architecture that already exists.

The reason is practical:

> Local models preserve privacy and offline capability, but current hardware makes real-model iteration slow enough to obstruct chat-reliability testing.

Online models should therefore be introduced first as a **fast development and research execution option**, not as a replacement for local models.

The product should support both:

```text
LOCAL
User knowledge stays on-device
Model runs through Ollama

and

ONLINE
Approved context is sent to a configured API provider
Model runs remotely
```

Both modes must use the same:

- Active Context
- Brain Scope
- conversation object
- history policy
- provenance
- run records
- model switching interface
- chat UI
- reliability benchmarks

The model remains replaceable.

Orbistry remains the owner of knowledge authorization and conversation state.

---

# 1. Main Goal

The first online-model milestone should prove that Orbistry can switch from a local model to a remote model while keeping the research workflow unchanged.

Target:

```text
journal.md
    ↓
Active Context
    ↓
Conversation A
    ↓
Qwen local
    ↓
several turns
    ↓
switch model
    ↓
online model
    ↓
continue same conversation
```

Knowledge state must remain unchanged.

The user should experience model switching as changing the **execution engine**, not changing the workspace.

---

# 2. Why Online Models Are Needed Now

Current local integration has already proven:

```text
Orbistry
  ↓
Ollama
  ↓
local model
```

works.

The remaining problems are primarily conversational:

- inconsistent follow-ups,
- slow correction loops,
- long local inference latency,
- bounded model history,
- context-switch continuity,
- model-switch continuity,
- source-version continuity.

Local inference latency makes repeated acceptance testing unnecessarily slow.

For model-integration engineering, Orbistry needs a faster execution path so that:

```text
10 turns
+
10 turns after source change
+
model switching
+
cancel/retry
+
restart testing
```

can be repeated many times during development.

---

# 3. Architectural Principle

Online providers must not bypass Orbistry's existing security architecture.

Required direction:

```text
React UI
    ↓
Secure Preload / IPC
    ↓
AI Orchestrator
    ↓
Brain Scope
    ↓
Controlled Source Read
    ↓
Context / History Builder
    ↓
Provider Registry
    ↓
Selected Provider
```

Then:

```text
Selected Provider
│
├── LOCAL
│   └── OllamaProvider
│       └── Ollama
│           └── local model
│
└── ONLINE
    ├── GeminiProvider
    ├── GroqProvider
    ├── OpenRouterProvider
    ├── OpenAIProvider
    ├── AnthropicProvider
    └── future providers
```

React must not call model-provider APIs directly.

API keys must never be owned by renderer components.

---

# 4. Knowledge Boundary Does Not Change

Online integration must preserve the same model authorization rule already used by local models.

```text
Selected Planet
      ≠
Authorized Context
```

Only Active Context / Brain Scope defines what may be sent to a model.

Example:

```text
Selected:
COIN.md

Active Context:
journal.md

Provider:
Gemini
```

Gemini receives:

```text
journal.md
```

not:

```text
COIN.md
```

unless the user explicitly changes Active Context.

---

# 5. Local vs Online Privacy Boundary

The UI must clearly distinguish where inference happens.

## Local

```text
● LOCAL
Ollama
Qwen3 4B

Approved context stays on this device.
```

## Online

```text
☁ ONLINE
Gemini
Gemini 3.7 Flash

Approved context is sent to the provider.
```

This should be visible in Model Settings and Chat / AI Terminal.

No repetitive confirmation popup is required for every message after the user has deliberately selected a remote provider.

However, the execution location must never be hidden.

---

# 6. Provider-Neutral Model Contract

The existing provider-neutral model architecture should be extended rather than replaced.

Conceptually:

```text
ModelProvider
{
    id
    location
    healthCheck()
    listModels()
    complete()
    stream()
    cancel()
}
```

Provider location:

```text
local
remote
```

The AI Orchestrator should not need provider-specific logic for normal conversation flow.

---

# 7. Provider Registry

Introduce a provider registry.

Suggested structure:

```text
electron/
  ai/
    provider-registry.cjs

    providers/
      ollama-provider.cjs
      gemini-provider.cjs
      groq-provider.cjs
      openrouter-provider.cjs
```

Future:

```text
      openai-provider.cjs
      anthropic-provider.cjs
```

Conceptually:

```text
ProviderRegistry

ollama
  → OllamaProvider

gemini
  → GeminiProvider

groq
  → GroqProvider

openrouter
  → OpenRouterProvider
```

The orchestrator asks the registry for:

```text
activeProvider
activeModel
```

and executes through the normalized provider interface.

---

# 8. Technology Stack

The online-model mode should stay inside the current TypeScript / Electron architecture.

Recommended stack:

| Layer | Technology | Responsibility |
| --- | --- | --- |
| UI | React + TypeScript | Settings, model list, switching, chat state |
| Desktop backend | Electron main process | Trusted execution boundary |
| IPC | contextBridge + ipcMain | Renderer/backend contract |
| Runtime validation | Zod | Validate IPC and provider payloads |
| HTTP | Node native `fetch()` | Remote API calls |
| Secrets | Electron `safeStorage` | Local encrypted API-key storage |
| Provider abstraction | Project TypeScript / JS | Normalize local and remote models |
| Streaming | Fetch streaming / SSE + IPC events | Progressive answer rendering |
| Local inference | Ollama | Existing local-model runtime |
| Remote inference | Provider APIs | Fast online execution |
| Conversation persistence | Existing Orbistry history layer | Conversation state |
| Run provenance | Existing run/audit layer | Provider/model/source identity |

Python is not required for online-model integration.

Python remains a future analytics-tool concern.

---

# 9. Runtime Validation

Add runtime validation at every external boundary.

Recommended:

```text
Zod
```

Validate:

```text
renderer → IPC request
IPC → orchestrator request
provider → API payload
API response → provider
provider → ModelResponse
```

This is especially important because Orbistry has already encountered renderer/backend contract mismatches.

Compile-time TypeScript validation is not sufficient when:

```text
renderer hot reloads
while
Electron main process stays stale
```

---

# 10. API Secret Storage

Remote provider API keys must never be stored in:

```text
React state as persistent storage
localStorage
Git
plain .wonnyy metadata
conversation history
source Markdown
```

Preferred desktop flow:

```text
User enters provider API key
        ↓
Renderer sends key once through secure IPC
        ↓
Electron main process
        ↓
safeStorage.encryptString()
        ↓
encrypted local provider configuration
```

When a request runs:

```text
encrypted credential
        ↓
Electron safeStorage
        ↓
temporary decrypted secret
        ↓
provider request
```

The renderer should receive only states such as:

```text
CONFIGURED
NOT_CONFIGURED
INVALID
```

not the stored raw key.

---

# 11. Model Settings Interface

The existing Model Settings interface should evolve into a provider-aware model selector.

Initial target:

```text
MODEL SETTINGS

LOCAL
────────────────────────────

Ollama
● Online

● Qwen3 4B
  Active

○ Qwen3 1.7B
  Installed

○ Llama 3.2 3B
  Installed


ONLINE
────────────────────────────

Gemini
● Configured

○ Gemini 3.7 Flash
  Free Tier
  Fast
  Recommended for Development

○ Gemini 2.5 Flash
  Free Tier
  Stable Baseline


Groq
● Configured

○ Qwen 3.8 27B
  Free Plan
  Very Fast

○ GPT-OSS 120B
  Free Plan
  Strong


OpenRouter
○ Not Configured

[ Add API Key ]
```

The UI should not hard-code that all providers will always expose the same models.

Provider adapters or a registry should return normalized ModelDescriptors.

---

# 12. Model Descriptor

Conceptually:

```text
ModelDescriptor
{
    providerId
    modelId
    displayName

    location:
      local
      remote

    available
    active

    pricingClass:
      free
      paid
      trial
      unknown

    profile:
      fast
      balanced
      strong
      experimental

    capabilities[]

    contextLimit?
    providerRateLimit?

    warnings[]
}
```

---

# 13. Free Online Model Strategy

The word **free** must not be treated as equivalent to:

```text
unlimited
production SLA
permanently available
```

Free tiers may have:

- requests-per-minute limits,
- requests-per-day limits,
- token limits,
- lower priority,
- model availability changes,
- provider policy changes.

For Orbistry, free online models should initially be treated as:

> Development-grade execution backends for fast model-integration benchmarking.

A future production release should not promise uninterrupted service based entirely on third-party free quotas.

---

# 14. Recommended Free Online Providers — 2026-09-08 Snapshot

This list is a dated development snapshot.

Provider availability and free-tier policies can change.

Orbistry should therefore implement provider/model discovery and not rely on this list as a permanent hard-coded catalog.

---

## 14.1 Gemini — Primary Recommendation

### Gemini 3.7 Flash

Model ID:

```text
gemini-3.7-flash
```

Current provider positioning:

```text
capable Flash model
agentic workflows
multimodal reasoning
```

Google currently lists Standard Free Tier input and output as free of charge.

Recommended Orbistry role:

```text
PRIMARY ONLINE DEVELOPMENT MODEL
```

Why it fits:

- direct first-party API,
- fast Flash-class execution,
- strong enough for ordinary research chat,
- free-tier access,
- useful for repeated development testing,
- avoids local RAM limitations.

---

## 14.2 Gemini 2.5 Flash — Stable Comparison Baseline

Model ID:

```text
gemini-2.5-flash
```

Current characteristics include:

```text
1M-token context
thinking budgets
free-tier inference
```

Recommended role:

```text
ONLINE BASELINE
```

Why retain it:

- older and well-understood baseline,
- direct provider API,
- useful comparison against newer Flash models.

---

## 14.3 Gemini 2.5 Flash-Lite — Speed / Throughput Candidate

Model ID:

```text
gemini-2.5-flash-lite
```

Current provider positioning:

```text
small
cost-effective
built for scale
```

Free-tier inference is currently available.

Recommended role:

```text
FAST / LIGHT ONLINE
```

---

# 15. Groq — High-Speed Development Provider

Groq is highly interesting for Orbistry because its Free Plan currently exposes several strong text models with explicit rate limits.

Current free-plan documentation lists, among others:

```text
qwen/qwen3.6-27b
qwen/qwen3.8-27b
openai/gpt-oss-20b
openai/gpt-oss-120b
```

For these listed models, current published free limits include:

```text
30 requests/minute
1,000 requests/day
8K tokens/minute
200K tokens/day
```

Exact quotas must always be checked against the provider because they can change.

---

## 15.1 Groq Qwen 3.8 27B

Model ID:

```text
qwen/qwen3.8-27b
```

Recommended role:

```text
FAST STRONG RESEARCH CHAT
```

Why it is useful:

- much larger model than the laptop can run locally,
- free-plan access,
- low-latency remote inference,
- useful comparison against local Qwen.

This creates a useful experiment:

```text
local small Qwen
vs
remote large Qwen
```

through the same Orbistry architecture.

---

## 15.2 Groq GPT-OSS 120B

Model ID:

```text
openai/gpt-oss-120b
```

Recommended role:

```text
STRONG FREE BENCHMARK
```

Use it to test:

- follow-up quality,
- document reasoning,
- whether failures come from model quality or Orbistry orchestration.

---

## 15.3 Groq GPT-OSS 20B

Model ID:

```text
openai/gpt-oss-20b
```

Recommended role:

```text
FAST BALANCED BENCHMARK
```

---

# 16. OpenRouter — Useful but Secondary

OpenRouter currently provides free model variants and a Free Models Router.

Examples in the current free catalog include:

```text
MiniMax M3
Nemotron 3 Ultra
other rotating free models
```

OpenRouter also exposes:

```text
openrouter/free
```

which automatically routes requests to available free models.

This is convenient but creates a benchmark problem:

```text
same request
        ↓
potentially different model
```

Therefore:

> Do not use the random Free Models Router as the primary chat-reliability benchmark.

Reliable regression testing requires fixed model identity.

Prefer:

```text
specific-model free endpoint
```

over:

```text
openrouter/free
```

when reproducibility matters.

Recommended role:

```text
EXPERIMENTAL / FALLBACK PROVIDER
```

---

# 17. Cerebras

Cerebras currently offers free trial credits rather than a permanent unlimited free inference tier.

Therefore classify it as:

```text
TRIAL
```

not:

```text
FREE DEFAULT
```

It may still be useful for high-speed experimentation later.

---

# 18. Initial Orbistry Online Test Matrix

Do not integrate many providers at once.

Start with:

```text
PRIMARY

Gemini
└── Gemini 3.7 Flash
```

Then add:

```text
SECOND PROVIDER

Groq
├── Qwen 3.8 27B
└── GPT-OSS 120B
```

Optional later:

```text
OpenRouter
└── fixed free model endpoint
```

This creates three useful execution classes:

```text
LOCAL
Qwen3 4B

ONLINE FAST
Gemini 3.7 Flash

ONLINE LARGE
Groq Qwen 3.8 27B / GPT-OSS 120B
```

---

# 19. Model Switching Rule

Switching model providers must not alter knowledge state.

Example:

```text
Active Context:
journal.md

Conversation:
ICF Research

Current model:
qwen3:4b via Ollama
```

User switches to:

```text
gemini-3.7-flash via Gemini
```

Result:

```text
Active Context:
journal.md

Conversation:
same conversation

Vault:
unchanged

Stations:
unchanged

Brain Scope:
unchanged
```

Only future execution records change provider/model identity.

---

# 20. Model Boundary Inside Conversation

Conversation history may continue across model switches.

The UI should record the transition.

Example:

```text
Conversation: journal.md

Run 1
LOCAL · Qwen3 4B

Run 2
LOCAL · Qwen3 4B

──────── MODEL CHANGED ────────

Run 3
ONLINE · Gemini 3.7 Flash
```

---

# 21. Remote Run Provenance

Every remote run should record:

```text
runId
conversationId

provider
model

executionLocation:
remote

contextIdentity
sourceIds
contentHashes

historyIncluded
historyDropped

startedAt
completedAt
latency

finishReason
retryCount
```

---

# 22. Free-Tier Data Handling

Free API tiers may have different data-use policies from paid API tiers.

Current Gemini pricing documentation states that Free Tier data may be used to improve Google products.

Therefore:

> Do not describe Free Tier online inference as equivalent to local privacy.

For development, avoid sending highly sensitive vault content to free remote providers.

Orbistry should eventually surface provider-specific privacy notes.

---

# 23. Rate-Limit Handling

Online mode introduces provider errors that local Ollama does not have.

Required states:

```text
PROVIDER_OFFLINE
AUTH_REQUIRED
AUTH_INVALID
RATE_LIMITED
REMOTE_TIMEOUT
REMOTE_SERVER_ERROR
MODEL_UNAVAILABLE
MODEL_DEPRECATED
```

For rate limits:

```text
429
 ↓
read Retry-After when available
 ↓
show understandable state
 ↓
bounded retry if policy allows
```

Do not create uncontrolled retry loops.

---

# 24. Provider Failover

Do not silently move a conversation from one provider to another after failure.

Bad:

```text
Gemini failed
   ↓
secretly send context to OpenRouter
```

Preferred:

```text
Gemini failed

[ Retry ]
[ Switch Model ]
```

The privacy boundary changes when the provider changes, so the user should control it.

---

# 25. Streaming

Remote providers should use the same streaming UX as local providers.

Normalized internal events:

```text
RUN_STARTED
REMOTE_CONNECTING
GENERATION_STARTED
STREAM_CHUNK
RUN_COMPLETED
RUN_FAILED
RUN_CANCELLED
```

Provider-specific stream formats belong inside provider adapters.

Chat components should not contain Gemini-specific or Groq-specific parsing.

---

# 26. Cancellation

Cancellation must work across providers.

```text
User presses Stop
        ↓
AbortController / provider cancellation
        ↓
remote stream stops
        ↓
run marked cancelled
```

The conversation remains valid.

---

# 27. Chat History Policy Remains Orbistry-Owned

Online models must not automatically receive unlimited conversation history merely because their context windows are larger.

Conversation policy remains owned by Orbistry.

Current product issue:

```text
visible saved history
>
history included in inference
```

must be solved deliberately.

Provider context capacity can influence budgeting, but it must not replace the Orbistry history policy.

---

# 28. Online Model Benchmark

The online path exists primarily to accelerate the existing acceptance benchmark.

Use the same representative Markdown source.

## Benchmark A — 10 Natural Turns

Measure:

```text
answer relevance
instruction following
source grounding
conversation continuity
latency
```

## Benchmark B — Beyond Current Memory Window

Continue beyond 12 exchanges.

Observe:

```text
what history is retained
what history is dropped
whether the UI communicates memory limits
```

## Benchmark C — Context Switch

```text
journal.md
    ↓
10+ turns
    ↓
switch Active Context
    ↓
another.md
    ↓
10+ turns
```

Required:

```text
zero accidental cross-source contamination
```

## Benchmark D — Return to Previous Conversation

Verify:

```text
correct messages restored
correct context identity restored
source hash validated
conversation resumes predictably
```

## Benchmark E — Local → Online Switch

```text
Qwen3 4B
    ↓
Gemini 3.7 Flash
```

Verify:

- history preserved,
- source unchanged,
- model boundary recorded,
- answer remains grounded.

## Benchmark F — Online → Local Switch

Switch back and verify the same guarantees.

## Benchmark G — Rate Limit

Simulate:

```text
429 RATE LIMITED
```

Verify:

- no duplicated assistant message,
- no lost user draft,
- retry works,
- conversation remains valid.

## Benchmark H — Invalid API Key

Expected:

```text
AUTH INVALID
```

not:

```text
generic model failure
```

---

# 29. Performance Metrics

Every benchmark should record:

```text
time to first token
total generation time
completion success
answer relevance
follow-up correctness
source grounding
history continuity
retry count
provider/model
```

A technically successful 200-second answer is still a poor development experience.

---

# 30. Reliability Definition

For this phase:

```text
reliable free online model
```

means:

- repeatable enough for acceptance testing,
- fixed model identity,
- normal streaming/API behavior,
- sufficient free quota for development,
- good instruction following,
- materially faster than local inference.

It does not mean:

- production SLA,
- unlimited requests,
- permanent zero cost,
- guaranteed availability.

---

# 31. Provider Priority for Orbistry Development

Recommended order:

```text
1. Gemini direct API
   Primary integration target

2. Groq direct API
   Speed / large-model comparison

3. OpenRouter fixed free model
   Experimental model access

4. OpenRouter free random router
   Exploration only, not regression

5. Trial-credit providers
   Optional
```

---

# 32. Implementation Order

Recommended sequence:

```text
1. Add Zod runtime schemas

2. Formalize Provider Registry

3. Preserve OllamaProvider behind registry

4. Add secure provider credential storage

5. Implement GeminiProvider

6. Provider health check

7. Remote ModelDescriptor

8. Model Settings ONLINE section

9. Local ↔ Gemini switching

10. Streaming normalization

11. Cancellation

12. Error / rate-limit states

13. Run provenance

14. Execute 10-turn benchmark

15. Execute context-switch benchmark

16. Execute model-switch benchmark

17. Add GroqProvider

18. Compare Gemini vs Groq vs local

19. Add OpenRouter only if useful
```

---

# 33. First Vertical Slice

Target:

```text
journal.md
    ↓
Active Context
    ↓
Gemini 3.7 Flash
    ↓
one normal answer
```

Then:

```text
10 natural turns
```

Then:

```text
change source
```

Then:

```text
10 more turns
```

Only after this works should the second remote provider be added.

---

# 34. Technical Completion Criteria

Online model integration is technically complete when:

- a remote provider can be configured securely;
- API keys are not exposed to renderer persistence;
- provider health is visible;
- at least one online model appears in Model Settings;
- local ↔ online switching works;
- switching does not modify knowledge state;
- only approved context is sent remotely;
- remote execution location is visible;
- streaming works;
- cancellation works;
- authentication failures are understandable;
- rate limits are understandable;
- provider/model identity is stored per run;
- source provenance survives remote execution;
- conversation-history behavior matches the local path;
- the same benchmark can run against local and online models.

---

# 35. Product Acceptance Criteria

The online path is accepted for development when:

```text
ONE SOURCE
   ↓
10+ natural turns
   ↓
fast useful conversation
```

followed by:

```text
ANOTHER SOURCE
   ↓
10+ turns
   ↓
no contamination
```

followed by:

```text
RETURN TO ORIGINAL CONVERSATION
   ↓
predictable continuation
```

and:

```text
LOCAL ↔ ONLINE
   ↓
switch execution engine
   ↓
knowledge state remains intact
```

---

# 36. Out of Scope

Do not add yet:

- autonomous agents,
- model-written vault changes,
- automatic provider failover,
- arbitrary web browsing,
- multi-provider ensemble reasoning,
- multi-file research,
- PDF/CSV model-context expansion,
- Python analytics execution,
- billing dashboards,
- team credentials.

These should follow after chat reliability and continuity are accepted.

---

# 37. Recommended Initial Development Configuration

```text
LOCAL

Provider:
Ollama

Model:
Qwen3 4B

Purpose:
offline validation
privacy benchmark
```

```text
ONLINE PRIMARY

Provider:
Gemini

Model:
Gemini 3.7 Flash

Purpose:
fast chat-reliability iteration
```

```text
ONLINE SECONDARY

Provider:
Groq

Model:
Qwen 3.8 27B
or
GPT-OSS 120B

Purpose:
large-model / low-latency comparison
```

---

# 38. Core Architectural Rule

> Online models do not gain access to the vault.

They receive only the context package that Orbistry explicitly constructs.

Correct model:

```text
Vault
   ↓
Orbistry authorization
   ↓
approved context
   ↓
provider
   ↓
model
```

not:

```text
model
   ↓
vault
```

---

# 39. Final Product Direction

Orbistry should eventually let the user choose:

```text
LOCAL
Private
Offline
Hardware-limited

or

ONLINE
Fast
Stronger
Provider-dependent
```

without changing how they research.

The workflow remains:

```text
open knowledge
   ↓
approve context
   ↓
choose model
   ↓
chat normally
```

Knowledge is permanent.

Conversation state belongs to Orbistry.

The execution engine is replaceable.

---

# Dated Free-Model Snapshot

As of **2026-09-08**, the strongest free online candidates identified for Orbistry's development path are:

```text
Gemini 3.7 Flash
Gemini 2.5 Flash
Gemini 2.5 Flash-Lite

Groq:
Qwen 3.8 27B
Qwen 3.6 27B
GPT-OSS 120B
GPT-OSS 20B

OpenRouter:
specific free model variants
including current MiniMax / Nemotron-class options
```

This list must not become a permanent hard-coded promise.

Free availability changes.

Provider/model discovery and dated documentation are required.


