# electron/ai/llm-front-office/long-context-reliability.cjs: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/long-context-reliability.cjs:1](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/long-context-reliability.cjs](<long-context-reliability.cjs.md#s-a368e752645ad02e>) (Module)
- [reliabilityProfile](<long-context-reliability.cjs.md#s-d418f2ff7d86d95a>) (FunctionDeclaration)
- [reliabilityProfile.&lt;anonymous@15:5&gt;](<long-context-reliability.cjs.md#s-7549190da0b0d2a6>) (ArrowFunction)
- [reliabilityProfile.&lt;anonymous@36:32&gt;](<long-context-reliability.cjs.md#s-c806bc27e88bea46>) (ArrowFunction)
- [reliabilityProfile.&lt;anonymous@43:7&gt;](<long-context-reliability.cjs.md#s-0efc2294e331a7ed>) (ArrowFunction)
- [reliabilityProfile.&lt;anonymous@46:13&gt;](<long-context-reliability.cjs.md#s-f7253c3965db288c>) (ArrowFunction)
- [reliabilityProfile.&lt;anonymous@46:13&gt;.&lt;anonymous@47:44&gt;](<long-context-reliability.cjs.md#s-f1049a9afb246c0a>) (ArrowFunction)
- [reliabilityProfile.&lt;anonymous@46:13&gt;.&lt;anonymous@47:44&gt;.&lt;anonymous@49:11&gt;](<long-context-reliability.cjs.md#s-3e7f640437780acb>) (ArrowFunction)
- [reliabilityProfile.&lt;anonymous@59:10&gt;](<long-context-reliability.cjs.md#s-d47372176da01ef1>) (ArrowFunction)

<a id="s-a368e752645ad02e"></a>

## electron/ai/llm-front-office/long-context-reliability.cjs

[electron/ai/llm-front-office/long-context-reliability.cjs:1](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:21](<../../../../../../../electron/ai/front-office-engine.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-d418f2ff7d86d95a"></a>

## reliabilityProfile

[electron/ai/llm-front-office/long-context-reliability.cjs:6](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L6>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Purpose: interpret empirical evidence separately from advertised capacity. Inputs: profile, records, task, age policy; outputs: measured scores or unknown. Dependencies: none. Failure: absent/stale/version-mismatched evidence is unverified. Knobs: max age; no automatic benchmarks. Owner: backend. Only matching version/task, repeated, fresh measurements contribute; do not extrapolate context lengths.

Purpose evidence: jsdoc.

Exported as: reliabilityProfile ([electron/ai/llm-front-office/long-context-reliability.cjs:1](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/long-context-reliability.cjs](<long-context-reliability.cjs.md#s-a368e752645ad02e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |
| evidence | any | compiler-inferred | required |
| task | any | compiler-inferred | required |
| maxAgeDays | any | compiler-inferred | required |
| now | any | compiler-inferred | optional, default present |
| transport | string | compiler-inferred | optional, default present |

Returns: { status: string; qualityScore: any; successRate: any; medianTtftMs: any; medianE2eMs: any; testedContextTokens: any; lastTestAt: any; methodology: any; observations: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@478:104&gt;](<../front-office-engine.test.cjs.md#s-936a641970c43a59>) — [electron/ai/front-office-engine.test.cjs:499](<../../../../../../../electron/ai/front-office-engine.test.cjs#L499>)
- [&lt;anonymous@478:104&gt;](<../front-office-engine.test.cjs.md#s-936a641970c43a59>) — [electron/ai/front-office-engine.test.cjs:508](<../../../../../../../electron/ai/front-office-engine.test.cjs#L508>)
- [&lt;anonymous@478:104&gt;](<../front-office-engine.test.cjs.md#s-936a641970c43a59>) — [electron/ai/front-office-engine.test.cjs:512](<../../../../../../../electron/ai/front-office-engine.test.cjs#L512>)
- [&lt;anonymous@478:104&gt;](<../front-office-engine.test.cjs.md#s-936a641970c43a59>) — [electron/ai/front-office-engine.test.cjs:520](<../../../../../../../electron/ai/front-office-engine.test.cjs#L520>)
- [&lt;anonymous@478:104&gt;](<../front-office-engine.test.cjs.md#s-936a641970c43a59>) — [electron/ai/front-office-engine.test.cjs:522](<../../../../../../../electron/ai/front-office-engine.test.cjs#L522>)
- [routeModels.&lt;anonymous@20:29&gt;](<model-router.cjs.md#s-e9f25ac763c22e49>) — [electron/ai/llm-front-office/model-router.cjs:22](<../../../../../../../electron/ai/llm-front-office/model-router.cjs#L22>)
- [FrontOfficeService.state.&lt;anonymous@90:38&gt;](<service.cjs.md#s-9912cf46430bf707>) — [electron/ai/llm-front-office/service.cjs:92](<../../../../../../../electron/ai/llm-front-office/service.cjs#L92>)

Unresolved / external call sites: 7.

- Date.now — external-or-dynamic-dispatch; [electron/ai/llm-front-office/long-context-reliability.cjs:11](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L11>)
- evidence.filter — external-or-dynamic-dispatch; [electron/ai/llm-front-office/long-context-reliability.cjs:14](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L14>)
- rows.toSorted — external-or-dynamic-dispatch; [electron/ai/llm-front-office/long-context-reliability.cjs:36](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L36>)
- rows .filter( (e) =&gt; e.task === "retrieval" && e.contextMeasurement === "provider-reported", ) .filter((e) =&gt; &#91;"beginning", "middle", "end"&#93;.every((position) =&gt; rows.some( (r) =&gt; r — external-or-dynamic-dispatch; [electron/ai/llm-front-office/long-context-reliability.cjs:41](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L41>)
- rows .filter( (e) =&gt; e.task === "retrieval" && e.contextMeasurement === "provider-reported", ) .filter — external-or-dynamic-dispatch; [electron/ai/llm-front-office/long-context-reliability.cjs:41](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L41>)
- rows .filter — external-or-dynamic-dispatch; [electron/ai/llm-front-office/long-context-reliability.cjs:41](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L41>)
- Math.max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/long-context-reliability.cjs:66](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L66>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:499](<../../../../../../../electron/ai/front-office-engine.test.cjs#L499>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:508](<../../../../../../../electron/ai/front-office-engine.test.cjs#L508>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:512](<../../../../../../../electron/ai/front-office-engine.test.cjs#L512>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:520](<../../../../../../../electron/ai/front-office-engine.test.cjs#L520>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:522](<../../../../../../../electron/ai/front-office-engine.test.cjs#L522>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:21](<../../../../../../../electron/ai/front-office-engine.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-7549190da0b0d2a6"></a>

## reliabilityProfile.&lt;anonymous@15:5&gt;

[electron/ai/llm-front-office/long-context-reliability.cjs:15](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L15>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [reliabilityProfile](<long-context-reliability.cjs.md#s-d418f2ff7d86d95a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Date.parse — external-or-dynamic-dispatch; [electron/ai/llm-front-office/long-context-reliability.cjs:21](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L21>)
- Date.parse — external-or-dynamic-dispatch; [electron/ai/llm-front-office/long-context-reliability.cjs:22](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L22>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:21](<../../../../../../../electron/ai/front-office-engine.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-c806bc27e88bea46"></a>

## reliabilityProfile.&lt;anonymous@36:32&gt;

[electron/ai/llm-front-office/long-context-reliability.cjs:36](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L36>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [reliabilityProfile](<long-context-reliability.cjs.md#s-d418f2ff7d86d95a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- b.checkedAt.localeCompare — external-or-dynamic-dispatch; [electron/ai/llm-front-office/long-context-reliability.cjs:37](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L37>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:21](<../../../../../../../electron/ai/front-office-engine.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-0efc2294e331a7ed"></a>

## reliabilityProfile.&lt;anonymous@43:7&gt;

[electron/ai/llm-front-office/long-context-reliability.cjs:43](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L43>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [reliabilityProfile](<long-context-reliability.cjs.md#s-d418f2ff7d86d95a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:21](<../../../../../../../electron/ai/front-office-engine.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-f7253c3965db288c"></a>

## reliabilityProfile.&lt;anonymous@46:13&gt;

[electron/ai/llm-front-office/long-context-reliability.cjs:46](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L46>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [reliabilityProfile](<long-context-reliability.cjs.md#s-d418f2ff7d86d95a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91;"beginning", "middle", "end"&#93;.every — external-or-dynamic-dispatch; [electron/ai/llm-front-office/long-context-reliability.cjs:47](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L47>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:21](<../../../../../../../electron/ai/front-office-engine.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-f1049a9afb246c0a"></a>

## reliabilityProfile.&lt;anonymous@46:13&gt;.&lt;anonymous@47:44&gt;

[electron/ai/llm-front-office/long-context-reliability.cjs:47](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L47>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [reliabilityProfile.&lt;anonymous@46:13&gt;](<long-context-reliability.cjs.md#s-f7253c3965db288c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| position | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- rows.some — external-or-dynamic-dispatch; [electron/ai/llm-front-office/long-context-reliability.cjs:48](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L48>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:21](<../../../../../../../electron/ai/front-office-engine.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-3e7f640437780acb"></a>

## reliabilityProfile.&lt;anonymous@46:13&gt;.&lt;anonymous@47:44&gt;.&lt;anonymous@49:11&gt;

[electron/ai/llm-front-office/long-context-reliability.cjs:49](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L49>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [reliabilityProfile.&lt;anonymous@46:13&gt;.&lt;anonymous@47:44&gt;](<long-context-reliability.cjs.md#s-f1049a9afb246c0a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| r | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:21](<../../../../../../../electron/ai/front-office-engine.test.cjs#L21>) — file-import-only; coverage not established.

<a id="s-d47372176da01ef1"></a>

## reliabilityProfile.&lt;anonymous@59:10&gt;

[electron/ai/llm-front-office/long-context-reliability.cjs:59](<../../../../../../../electron/ai/llm-front-office/long-context-reliability.cjs#L59>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [reliabilityProfile](<long-context-reliability.cjs.md#s-d418f2ff7d86d95a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:21](<../../../../../../../electron/ai/front-office-engine.test.cjs#L21>) — file-import-only; coverage not established.
