# Orbistry runtime context optimization

## Located policy and request path

The named `Orbistry_Strict_Context_Bound_Research_Agent_v1.1.md` was not in the repository. The actual active equivalent was found at `C:\bank\agentContext.memory\Orbistry_Strict_Context_Bound_Research_Agent.md`; its header identifies version **1.1**. Read-only inspection of the existing Orbistry configuration showed it included in the default Context Box alongside the math/statistics guide. It therefore entered research-source envelopes in addition to the app's separately injected 7,670-character system policy.

An unchanged, versioned copy is now packaged at `electron/ai/policies/Orbistry_Strict_Context_Bound_Research_Agent_v1.1.md`. SHA-256: `674b38dcb04aa5f17b1915cd7532dafb1705e870ba4f9354891675b7329fe082`. The former full app system prompt is preserved in `electron/ai/policies/orbistry-host-policy-v19.md`. Original vault files, agent configurations, Context Box membership and existing chat bindings are not rewritten.

## Three layers

1. **Canonical policy:** the complete human-reviewable v1.1 document plus archived host-specific requirements. The canonical file is local documentation, not an automatic prompt payload.
2. **Runtime kernel:** the 2,299-character protected invariant set in `electron/ai/runtime-context.cjs`. It retains authorization, read-only execution, source trust, evidence categories, inference limits, citations, computation discipline, material uncertainty and final-answer rules. Identity is substituted using the existing agent mechanism.
3. **On-demand guidance:** app-owned documents/OCR, datasets, arithmetic, research, alignment, finance and knowledge-proposal modules. Selection follows host-verified source types, computed-result availability and the task. Modules add method/presentation detail; they grant no new tools, execution, retrieval or storage permissions. Dataset and statistics planners keep their existing bounded tool contracts.

`agent-policy.cjs` and `prompt-builder.cjs` consume the kernel. The orchestrator selects policy versus evidence once using the request's dialogue, so planning, budgeting, normal generation and repair agree. Prompt version is `wonnyy-conversation-v20-runtime-kernel`; policy version is `wonnyy-runtime-kernel-v2`.

## Compaction, integrity and fallback

Compaction requires exact normalized content equality with the pinned canonical revision, limited to Markdown. Filenames alone never qualify. Formatting-only BOM/newline differences are accepted; modified/custom policies remain whole, untrusted reference material. Editing the packaged canonical without reviewing/recompiling the kernel changes its digest, disables matching and fails the pinned-hash regression.

For ordinary research with other evidence, the recognized policy is omitted from documentary envelopes and represented by the protected kernel. A recognized configuration reference retains its source identity/hash and a compiled-policy reference instead of its full body. Arbitrary Personality, Output, Skill and Workflow reference files remain intact. No research data is summarized or truncated to achieve the reported savings.

Explicit policy/document analysis, text-structure queries, source inventories, relevant policy dialogue follow-ups, policy-only research contexts and other agents' source documents retain full policy evidence. Full-document requests remain subject to ordinary budgets; increase model capacity if needed rather than silently cutting the policy. Ordinary prior requests to read a research report do not permanently force full policy injection into unrelated follow-ups.

All approved source identities are still verified and read locally. Immutable run provenance retains that audit trail. `diagnostics.compactedPolicySources` records omitted policy-source IDs/hashes; `evidenceSourceIds` identifies the documentary evidence actually supplied. Structured citations are checked against that evidence list, preventing a model from citing a compacted policy as research evidence. Runtime diagnostics include canonical/kernel digests, selected module digests and system size estimates. Existing runs and history are untouched.

## Coverage of canonical semantics

| Canonical sections | Preserved in |
| --- | --- |
| 1 Identity and governing source rule | Kernel identity, authorization and computation invariants |
| 2 Context authority | Kernel; unchanged host scope and binding validation |
| 3 Preview versus underlying data | Kernel and datasets module |
| 4 Read-only behavior | Kernel; existing capability admission |
| 5 Source-grounded reasoning | Kernel provenance, quantities and evidence boundaries |
| 6 Derived evidence | Kernel and arithmetic module; existing deterministic validators |
| 7 Full structured-data execution | Datasets module and existing planner/runtime contracts |
| 8 Profile limitations | Datasets module |
| 9 Research escalation | Kernel: source, computation, labeled inference, exact gaps |
| 10 Pattern discovery | Datasets/alignment/research modules |
| 11 Association versus causality | Kernel and datasets/alignment modules |
| 12 Evidence categories | Kernel: source, derived, interpretation, hypothesis, unknown |
| 13 Extraction protocol | Research module |
| 14 Retrieval discipline | Kernel scope restrictions, research module; host controls source selection |
| 15 Cross-dataset work | Alignment module |
| 16 Market relationships | Alignment module |
| 17 Financial research | Kernel quantity/period invariants and finance module |
| 18 Conflicts | Kernel and documents/finance modules |
| 19 Tool awareness | Kernel and datasets/arithmetic modules |
| 20 Unavailable computation | Kernel and datasets/alignment modules |
| 21 Answer-first response | Kernel and research module |
| 22 Sufficient computed results | Datasets module |
| 23 Insufficient evidence | Kernel: supported answer, gaps, required source/operation |
| 24 Standard response | Research module; concise simple responses in kernel |
| 25 Comprehensive response | Research module; task-specific structure remains optional |
| 26 Knowledge reuse | Kernel, documents and knowledge modules; unchanged bound-source checks |
| 27 Instruction security | Kernel; unchanged source/configuration trust boundaries |
| 28 Failure states | Kernel; existing empty-context/context-validation paths |
| 29 Consolidation boundary | Kernel and knowledge module; existing reviewed-proposal capability |
| 30 Governing principles | Kernel plus the applicable modules above |

Canonical descriptions of joins, regressions or other possible operations do not implement or enable them. Unsupported operations still require the host to expose a bounded runtime. This refactor does not introduce semantic retrieval or silently fetch new context.

## Cost and verification

### Context-window follow-up

The reported four-PDF request estimates 35,076 input tokens, requiring a total window of at least 43,332 with 8,000 output and 256 reserve. The former fixed 32,768 schema/UI ceiling prevented selecting a larger supported cloud window. Settings now permits provider-reported remote capacity up to the application's 2,097,152 ceiling; Ollama retains its 32,768 memory ceiling and unknown capacities retain a conservative 32,768 fallback. Selection and effective per-agent model validation still reject unsupported windows. Existing saved settings and model overrides are unchanged. Increase Context window explicitly (for example to 65,536 when supported), then retry. The error includes the effective provider/model and minimum required total window. Full source content remains intact; token estimates are conservative and provider limits still apply.

Follow-up verification: 283 deterministic tests, TypeScript, production build, changed-code formatting and the isolated Electron OpenRouter UI smoke pass. New tests reproduce the 35,076-token admission failure at 32K and success at 64K, check local/unknown-capacity safeguards and verify provider-advertised limits. The Electron smoke verifies provider settings, responsive UI, retry/cancellation and restart persistence with synthetic transport; the 64K case is covered deterministically. No live-model capacity or grounding claim is made by these synthetic checks.

`npm run report:runtime-kernel` writes `test-results/runtime-kernel-cost.json`. With the unchanged conservative UTF-8-bytes/3 estimator and representative synthetic research payloads, ordinary bound-policy Markdown requests fall from about **10,566 to 896** estimated input tokens (**91.5%**), CSV analysis from **10,599 to about 1,818** (**82.8%**), and canonical configuration guidance from **10,606 to 1,125** (**89.4%**). Explicit policy analysis retains the document and saves only the system-policy overhead. The always-on system kernel is **70% shorter** than the prior host policy. Other research/guidance content, provider tokenizers, request framing, output and history affect real costs; these are estimates, not billing measurements.

All **280 deterministic tests pass**, together with strict TypeScript, production build, formatting checks on changed code, and the isolated Electron acceptance. Coverage includes pinned canonical identity, module routing, adversarial/modified policy preservation, full-document fallback, ordinary guidance fidelity, stable preflight/final budgets, unchanged bindings/provenance and rejection of citations to compacted policies. Electron acceptance captures actual provider payloads for research and policy follow-ups using synthetic model responses, then verifies saved bindings/history after restart. Behavioral equivalence is assessed through the retained canonical, this coverage map and boundary tests; identical model wording or factual correctness is not guaranteed. Live-model comparative grounding evaluation is separate and has not been performed. Restart Electron to load the updated main-process runtime; no saved profiles or boxes need to be recreated.
