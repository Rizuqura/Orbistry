# scripts/front-office-benchmark.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/front-office-benchmark.cjs:1](<../../../../../scripts/front-office-benchmark.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/front-office-benchmark.cjs](<front-office-benchmark.cjs.md#s-cb7d0e408f922ddd>) (Module)
- [main](<front-office-benchmark.cjs.md#s-8f8223991922089c>) (FunctionDeclaration)
- [main.&lt;anonymous@86:29&gt;](<front-office-benchmark.cjs.md#s-195ccc8fe4b3533a>) (ArrowFunction)
- [main.get](<front-office-benchmark.cjs.md#s-2c5d3187223505a9>) (ArrowFunction)
- [main.status](<front-office-benchmark.cjs.md#s-0dbf4fb920909852>) (ArrowFunction)
- [main.providerFor](<front-office-benchmark.cjs.md#s-6a25044bb810b0f5>) (ArrowFunction)
- [main.&lt;anonymous@150:48&gt;](<front-office-benchmark.cjs.md#s-66cc92cebefde054>) (ArrowFunction)
- [main.&lt;anonymous@156:50&gt;](<front-office-benchmark.cjs.md#s-f440feb8a797b02b>) (ArrowFunction)
- [main.runClient](<front-office-benchmark.cjs.md#s-bff565cbd25e6bb7>) (ArrowFunction)
- [main.runClient.&lt;anonymous@189:9&gt;](<front-office-benchmark.cjs.md#s-f33b1bcd6cf84c2a>) (ArrowFunction)
- [&lt;anonymous@291:14&gt;](<front-office-benchmark.cjs.md#s-d83f565883266575>) (ArrowFunction)

<a id="s-cb7d0e408f922ddd"></a>

## scripts/front-office-benchmark.cjs

[scripts/front-office-benchmark.cjs:1](<../../../../../scripts/front-office-benchmark.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<front-office-benchmark.cjs.md#s-8f8223991922089c>) — [scripts/front-office-benchmark.cjs:291](<../../../../../scripts/front-office-benchmark.cjs#L291>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 15.

- require — module-loader; [scripts/front-office-benchmark.cjs:3](<../../../../../scripts/front-office-benchmark.cjs#L3>)
- require — module-loader; [scripts/front-office-benchmark.cjs:4](<../../../../../scripts/front-office-benchmark.cjs#L4>)
- require — module-loader; [scripts/front-office-benchmark.cjs:5](<../../../../../scripts/front-office-benchmark.cjs#L5>)
- require — module-loader; [scripts/front-office-benchmark.cjs:8](<../../../../../scripts/front-office-benchmark.cjs#L8>)
- require — module-loader; [scripts/front-office-benchmark.cjs:14](<../../../../../scripts/front-office-benchmark.cjs#L14>)
- require — module-loader; [scripts/front-office-benchmark.cjs:17](<../../../../../scripts/front-office-benchmark.cjs#L17>)
- require — module-loader; [scripts/front-office-benchmark.cjs:21](<../../../../../scripts/front-office-benchmark.cjs#L21>)
- require — module-loader; [scripts/front-office-benchmark.cjs:24](<../../../../../scripts/front-office-benchmark.cjs#L24>)
- 7 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8f8223991922089c"></a>

## main

[scripts/front-office-benchmark.cjs:41](<../../../../../scripts/front-office-benchmark.cjs#L41>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/front-office-benchmark.cjs](<front-office-benchmark.cjs.md#s-cb7d0e408f922ddd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fixtures](<../electron/ai/llm-front-office/evaluation/fixtures.cjs.md#s-1b8d1b2eca1f494c>) — [scripts/front-office-benchmark.cjs:67](<../../../../../scripts/front-office-benchmark.cjs#L67>)
- [defaultConfig](<../electron/ai/llm-front-office/experiment-contracts.cjs.md#s-fc7106338dbce48b>) — [scripts/front-office-benchmark.cjs:72](<../../../../../scripts/front-office-benchmark.cjs#L72>)
- [OpenRouterProvider.constructor](<../electron/ai/providers/openrouter-provider.cjs.md#s-e3644ae28bea5ca5>) — [scripts/front-office-benchmark.cjs:141](<../../../../../scripts/front-office-benchmark.cjs#L141>)
- [NvidiaProvider](<../electron/ai/providers/nvidia-provider.cjs.md#s-72fe974a679af8ae>) — [scripts/front-office-benchmark.cjs:142](<../../../../../scripts/front-office-benchmark.cjs#L142>)
- [CapabilityRegistry.constructor](<../electron/ai/llm-front-office/model-registry.cjs.md#s-05871f7acb9f7959>) — [scripts/front-office-benchmark.cjs:147](<../../../../../scripts/front-office-benchmark.cjs#L147>)
- [CapabilityRegistry.refresh](<../electron/ai/llm-front-office/model-registry.cjs.md#s-b5ae09b9bc2eb626>) — [scripts/front-office-benchmark.cjs:148](<../../../../../scripts/front-office-benchmark.cjs#L148>)
- [CapabilityRegistry.state](<../electron/ai/llm-front-office/model-registry.cjs.md#s-d044d93a77290e89>) — [scripts/front-office-benchmark.cjs:149](<../../../../../scripts/front-office-benchmark.cjs#L149>)
- [buildRequirements](<../electron/ai/llm-front-office/request-intake.cjs.md#s-f61e93055c3b336b>) — [scripts/front-office-benchmark.cjs:168](<../../../../../scripts/front-office-benchmark.cjs#L168>)
- [checkBudget](<../electron/ai/llm-front-office/token-budget.cjs.md#s-552498140f3343ca>) — [scripts/front-office-benchmark.cjs:174](<../../../../../scripts/front-office-benchmark.cjs#L174>)
- [main.runClient](<front-office-benchmark.cjs.md#s-bff565cbd25e6bb7>) — [scripts/front-office-benchmark.cjs:224](<../../../../../scripts/front-office-benchmark.cjs#L224>)
- [main.runClient](<front-office-benchmark.cjs.md#s-bff565cbd25e6bb7>) — [scripts/front-office-benchmark.cjs:225](<../../../../../scripts/front-office-benchmark.cjs#L225>)
- [gatewayHealth](<../electron/ai/llm-front-office/provider-gateway.cjs.md#s-9b77cb86cb8f8044>) — [scripts/front-office-benchmark.cjs:229](<../../../../../scripts/front-office-benchmark.cjs#L229>)
- [main.runClient](<front-office-benchmark.cjs.md#s-bff565cbd25e6bb7>) — [scripts/front-office-benchmark.cjs:230](<../../../../../scripts/front-office-benchmark.cjs#L230>)
- [runEvaluation](<../electron/ai/llm-front-office/evaluation/harness.cjs.md#s-271b18962c102baf>) — [scripts/front-office-benchmark.cjs:250](<../../../../../scripts/front-office-benchmark.cjs#L250>)
- [reportCsv](<../electron/ai/llm-front-office/evaluation/harness.cjs.md#s-4a743233e7dd1253>) — [scripts/front-office-benchmark.cjs:264](<../../../../../scripts/front-office-benchmark.cjs#L264>)
- [evidenceRecords](<../electron/ai/llm-front-office/evaluation/harness.cjs.md#s-9a6d0ca40646da2e>) — [scripts/front-office-benchmark.cjs:267](<../../../../../scripts/front-office-benchmark.cjs#L267>)
- [reportMarkdown](<../electron/ai/llm-front-office/evaluation/harness.cjs.md#s-51ad21cd7957a35d>) — [scripts/front-office-benchmark.cjs:269](<../../../../../scripts/front-office-benchmark.cjs#L269>)

**Called by (statically resolved):**

- [scripts/front-office-benchmark.cjs](<front-office-benchmark.cjs.md#s-cb7d0e408f922ddd>) — [scripts/front-office-benchmark.cjs:291](<../../../../../scripts/front-office-benchmark.cjs#L291>)

Unresolved / external call sites: 42.

- process.argv.slice — external-or-dynamic-dispatch; [scripts/front-office-benchmark.cjs:42](<../../../../../scripts/front-office-benchmark.cjs#L42>)
- args.includes — external-or-dynamic-dispatch; [scripts/front-office-benchmark.cjs:43](<../../../../../scripts/front-office-benchmark.cjs#L43>)
- args.includes — external-or-dynamic-dispatch; [scripts/front-office-benchmark.cjs:44](<../../../../../scripts/front-office-benchmark.cjs#L44>)
- Error — external-or-dynamic-dispatch; [scripts/front-office-benchmark.cjs:45](<../../../../../scripts/front-office-benchmark.cjs#L45>)
- &#91;"--live", "--mock"&#93;.includes — external-or-dynamic-dispatch; [scripts/front-office-benchmark.cjs:48](<../../../../../scripts/front-office-benchmark.cjs#L48>)
- &#91; "--output", "--provider", "--model", "--models", "--repetitions", "--max-calls", "--max-output", "--context", "--max-usd", &#93;.includes — external-or-dynamic-dispatch; [scripts/front-office-benchmark.cjs:50](<../../../../../scripts/front-office-benchmark.cjs#L50>)
- Error — external-or-dynamic-dispatch; [scripts/front-office-benchmark.cjs:64](<../../../../../scripts/front-office-benchmark.cjs#L64>)
- Number — external-or-dynamic-dispatch; [scripts/front-office-benchmark.cjs:68](<../../../../../scripts/front-office-benchmark.cjs#L68>)
- 34 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-195ccc8fe4b3533a"></a>

## main.&lt;anonymous@86:29&gt;

[scripts/front-office-benchmark.cjs:86](<../../../../../scripts/front-office-benchmark.cjs#L86>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<front-office-benchmark.cjs.md#s-8f8223991922089c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { turn, onContent } | { turn: any; onContent: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- onContent — external-or-dynamic-dispatch; [scripts/front-office-benchmark.cjs:88](<../../../../../scripts/front-office-benchmark.cjs#L88>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2c5d3187223505a9"></a>

## main.get

[scripts/front-office-benchmark.cjs:123](<../../../../../scripts/front-office-benchmark.cjs#L123>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<front-office-benchmark.cjs.md#s-8f8223991922089c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../electron/shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [scripts/front-office-benchmark.cjs:127](<../../../../../scripts/front-office-benchmark.cjs#L127>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0dbf4fb920909852"></a>

## main.status

[scripts/front-office-benchmark.cjs:133](<../../../../../scripts/front-office-benchmark.cjs#L133>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<front-office-benchmark.cjs.md#s-8f8223991922089c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Boolean — external-or-dynamic-dispatch; [scripts/front-office-benchmark.cjs:134](<../../../../../scripts/front-office-benchmark.cjs#L134>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6a25044bb810b0f5"></a>

## main.providerFor

[scripts/front-office-benchmark.cjs:143](<../../../../../scripts/front-office-benchmark.cjs#L143>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<front-office-benchmark.cjs.md#s-8f8223991922089c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: NvidiaProvider &#124; OpenRouterProvider (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-66cc92cebefde054"></a>

## main.&lt;anonymous@150:48&gt;

[scripts/front-office-benchmark.cjs:150](<../../../../../scripts/front-office-benchmark.cjs#L150>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<front-office-benchmark.cjs.md#s-8f8223991922089c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f440feb8a797b02b"></a>

## main.&lt;anonymous@156:50&gt;

[scripts/front-office-benchmark.cjs:156](<../../../../../scripts/front-office-benchmark.cjs#L156>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<front-office-benchmark.cjs.md#s-8f8223991922089c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- allowed.includes — external-or-dynamic-dispatch; [scripts/front-office-benchmark.cjs:157](<../../../../../scripts/front-office-benchmark.cjs#L157>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bff565cbd25e6bb7"></a>

## main.runClient

[scripts/front-office-benchmark.cjs:188](<../../../../../scripts/front-office-benchmark.cjs#L188>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<front-office-benchmark.cjs.md#s-8f8223991922089c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| transport | any | compiler-inferred | required |
| auto | boolean | compiler-inferred | optional, default present |

Returns: ({ messages, fixture, onContent }: { messages: any; fixture: any; onContent: any; }) =&gt; unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<front-office-benchmark.cjs.md#s-8f8223991922089c>) — [scripts/front-office-benchmark.cjs:224](<../../../../../scripts/front-office-benchmark.cjs#L224>)
- [main](<front-office-benchmark.cjs.md#s-8f8223991922089c>) — [scripts/front-office-benchmark.cjs:225](<../../../../../scripts/front-office-benchmark.cjs#L225>)
- [main](<front-office-benchmark.cjs.md#s-8f8223991922089c>) — [scripts/front-office-benchmark.cjs:230](<../../../../../scripts/front-office-benchmark.cjs#L230>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f33b1bcd6cf84c2a"></a>

## main.runClient.&lt;anonymous@189:9&gt;

[scripts/front-office-benchmark.cjs:189](<../../../../../scripts/front-office-benchmark.cjs#L189>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.runClient](<front-office-benchmark.cjs.md#s-bff565cbd25e6bb7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { messages, fixture, onContent } | { messages: any; fixture: any; onContent: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [buildRequirements](<../electron/ai/llm-front-office/request-intake.cjs.md#s-f61e93055c3b336b>) — [scripts/front-office-benchmark.cjs:193](<../../../../../scripts/front-office-benchmark.cjs#L193>)
- [routeModels](<../electron/ai/llm-front-office/model-router.cjs.md#s-221cf971a662b0c2>) — [scripts/front-office-benchmark.cjs:200](<../../../../../scripts/front-office-benchmark.cjs#L200>)
- [createLLMClient.complete](<../electron/ai/llm-front-office/provider-gateway.cjs.md#s-52f9a78e18c7a535>) — [scripts/front-office-benchmark.cjs:202](<../../../../../scripts/front-office-benchmark.cjs#L202>)
- [createLLMClient](<../electron/ai/llm-front-office/provider-gateway.cjs.md#s-865c43e6ea2bf755>) — [scripts/front-office-benchmark.cjs:202](<../../../../../scripts/front-office-benchmark.cjs#L202>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- structuredClone — external-or-dynamic-dispatch; [scripts/front-office-benchmark.cjs:190](<../../../../../scripts/front-office-benchmark.cjs#L190>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d83f565883266575"></a>

## &lt;anonymous@291:14&gt;

[scripts/front-office-benchmark.cjs:291](<../../../../../scripts/front-office-benchmark.cjs#L291>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/front-office-benchmark.cjs](<front-office-benchmark.cjs.md#s-cb7d0e408f922ddd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- console.error — external-or-dynamic-dispatch; [scripts/front-office-benchmark.cjs:292](<../../../../../scripts/front-office-benchmark.cjs#L292>)
- &#91; "Choose exactly --mock or --live.", "Invalid benchmark options.", "Live mode requires --provider openrouter&#124;nvidia, --model and --max-calls.", &#93;.includes — external-or-dynamic-dispatch; [scripts/front-office-benchmark.cjs:294](<../../../../../scripts/front-office-benchmark.cjs#L294>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
