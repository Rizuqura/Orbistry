# electron/ai/llm-front-office/model-router.d.cts: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/model-router.d.cts:1](<../../../../../../../electron/ai/llm-front-office/model-router.d.cts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/model-router.d.cts](<model-router.d.cts.md#s-44ecef08f9c7695f>) (Module)
- [routeModels](<model-router.d.cts.md#s-2fe8a1d317e8de71>) (FunctionDeclaration)
- [routeModels.&lt;anonymous@14:15&gt;](<model-router.d.cts.md#s-1da6cff8bd8d43c6>) (FunctionType)

<a id="s-44ecef08f9c7695f"></a>

## electron/ai/llm-front-office/model-router.d.cts

[electron/ai/llm-front-office/model-router.d.cts:1](<../../../../../../../electron/ai/llm-front-office/model-router.d.cts#L1>) · Module · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2fe8a1d317e8de71"></a>

## routeModels

[electron/ai/llm-front-office/model-router.d.cts:9](<../../../../../../../electron/ai/llm-front-office/model-router.d.cts#L9>) · FunctionDeclaration · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Select hard-eligible candidates, preserving manual pins.

Purpose evidence: jsdoc.

Exported as: routeModels ([electron/ai/llm-front-office/model-router.d.cts:1](<../../../../../../../electron/ai/llm-front-office/model-router.d.cts#L1>)).

Lexical owner: [electron/ai/llm-front-office/model-router.d.cts](<model-router.d.cts.md#s-44ecef08f9c7695f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| requirements | TaskRequirements | annotation | required |
| profiles | ModelProfile&#91;&#93; | annotation | required |
| evidence | unknown&#91;&#93; | annotation | required |
| config | ExperimentConfig | annotation | required |
| isHealthy | (id: string) =&gt; boolean | annotation | optional |

Returns: RoutingPlan (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1da6cff8bd8d43c6"></a>

## routeModels.&lt;anonymous@14:15&gt;

[electron/ai/llm-front-office/model-router.d.cts:14](<../../../../../../../electron/ai/llm-front-office/model-router.d.cts#L14>) · FunctionType · declaration · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [routeModels](<model-router.d.cts.md#s-2fe8a1d317e8de71>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | annotation | required |

Returns: boolean (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
