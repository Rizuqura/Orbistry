# electron/ai/llm-front-office/catalog-sort.cjs: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/catalog-sort.cjs:1](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/catalog-sort.cjs](<catalog-sort.cjs.md#s-d4fc0ddb1d4cca7f>) (Module)
- [sortProfiles](<catalog-sort.cjs.md#s-d6ac4c14e0fa0c27>) (FunctionDeclaration)
- [sortProfiles.nullable](<catalog-sort.cjs.md#s-aa561e247797a16e>) (ArrowFunction)
- [sortProfiles.coverage](<catalog-sort.cjs.md#s-c67704ef288a67e2>) (ArrowFunction)
- [sortProfiles.coverage.&lt;anonymous@14:52&gt;](<catalog-sort.cjs.md#s-e0a14901b897634f>) (ArrowFunction)
- [sortProfiles.&lt;anonymous@15:28&gt;](<catalog-sort.cjs.md#s-81d7d904d227065c>) (ArrowFunction)

<a id="s-d4fc0ddb1d4cca7f"></a>

## electron/ai/llm-front-office/catalog-sort.cjs

[electron/ai/llm-front-office/catalog-sort.cjs:1](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:18](<../../../../../../../electron/ai/front-office-engine.test.cjs#L18>) — file-import-only; coverage not established.

<a id="s-d6ac4c14e0fa0c27"></a>

## sortProfiles

[electron/ai/llm-front-office/catalog-sort.cjs:4](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L4>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Purpose: deterministic catalog sorting shared by renderer/backend. Inputs: profiles/sort; output: new list. Dependencies: none (renderer-safe). Failure: unknown metrics sort last. Knobs: sort mode. Owner: backend/UI. Prefer fresh measured quality; otherwise capability coverage then known capacity, with stable ties.

Purpose evidence: jsdoc.

Exported as: sortProfiles ([electron/ai/llm-front-office/catalog-sort.cjs:1](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L1>)), sortProfiles ([electron/ai/llm-front-office/model-router.cjs:1](<../../../../../../../electron/ai/llm-front-office/model-router.cjs#L1>)), sortProfiles ([electron/ai/llm-front-office/model-router.d.cts:1](<../../../../../../../electron/ai/llm-front-office/model-router.d.cts#L1>)).

Lexical owner: [electron/ai/llm-front-office/catalog-sort.cjs](<catalog-sort.cjs.md#s-d4fc0ddb1d4cca7f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| profiles | any | compiler-inferred | required |
| sort | string | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@532:92&gt;](<../front-office-engine.test.cjs.md#s-5b4d6c63db891ec7>) — [electron/ai/front-office-engine.test.cjs:535](<../../../../../../../electron/ai/front-office-engine.test.cjs#L535>)
- [&lt;anonymous@532:92&gt;](<../front-office-engine.test.cjs.md#s-5b4d6c63db891ec7>) — [electron/ai/front-office-engine.test.cjs:537](<../../../../../../../electron/ai/front-office-engine.test.cjs#L537>)
- [&lt;anonymous@532:92&gt;](<../front-office-engine.test.cjs.md#s-5b4d6c63db891ec7>) — [electron/ai/front-office-engine.test.cjs:546](<../../../../../../../electron/ai/front-office-engine.test.cjs#L546>)

Unresolved / external call sites: 1.

- profiles.toSorted — external-or-dynamic-dispatch; [electron/ai/llm-front-office/catalog-sort.cjs:15](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L15>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:535](<../../../../../../../electron/ai/front-office-engine.test.cjs#L535>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:537](<../../../../../../../electron/ai/front-office-engine.test.cjs#L537>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:546](<../../../../../../../electron/ai/front-office-engine.test.cjs#L546>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:18](<../../../../../../../electron/ai/front-office-engine.test.cjs#L18>) — file-import-only; coverage not established.

<a id="s-aa561e247797a16e"></a>

## sortProfiles.nullable

[electron/ai/llm-front-office/catalog-sort.cjs:5](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L5>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [sortProfiles](<catalog-sort.cjs.md#s-d6ac4c14e0fa0c27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |
| d | number | compiler-inferred | optional, default present |

Returns: number (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [sortProfiles.&lt;anonymous@15:28&gt;](<catalog-sort.cjs.md#s-81d7d904d227065c>) — [electron/ai/llm-front-office/catalog-sort.cjs:20](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L20>)
- [sortProfiles.&lt;anonymous@15:28&gt;](<catalog-sort.cjs.md#s-81d7d904d227065c>) — [electron/ai/llm-front-office/catalog-sort.cjs:22](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L22>)
- [sortProfiles.&lt;anonymous@15:28&gt;](<catalog-sort.cjs.md#s-81d7d904d227065c>) — [electron/ai/llm-front-office/catalog-sort.cjs:31](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L31>)
- [sortProfiles.&lt;anonymous@15:28&gt;](<catalog-sort.cjs.md#s-81d7d904d227065c>) — [electron/ai/llm-front-office/catalog-sort.cjs:37](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L37>)
- [sortProfiles.&lt;anonymous@15:28&gt;](<catalog-sort.cjs.md#s-81d7d904d227065c>) — [electron/ai/llm-front-office/catalog-sort.cjs:39](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L39>)
- [sortProfiles.&lt;anonymous@15:28&gt;](<catalog-sort.cjs.md#s-81d7d904d227065c>) — [electron/ai/llm-front-office/catalog-sort.cjs:41](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L41>)
- [sortProfiles.&lt;anonymous@15:28&gt;](<catalog-sort.cjs.md#s-81d7d904d227065c>) — [electron/ai/llm-front-office/catalog-sort.cjs:46](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L46>)
- [sortProfiles.&lt;anonymous@15:28&gt;](<catalog-sort.cjs.md#s-81d7d904d227065c>) — [electron/ai/llm-front-office/catalog-sort.cjs:48](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L48>)
- [sortProfiles.&lt;anonymous@15:28&gt;](<catalog-sort.cjs.md#s-81d7d904d227065c>) — [electron/ai/llm-front-office/catalog-sort.cjs:49](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L49>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:18](<../../../../../../../electron/ai/front-office-engine.test.cjs#L18>) — file-import-only; coverage not established.

<a id="s-c67704ef288a67e2"></a>

## sortProfiles.coverage

[electron/ai/llm-front-office/catalog-sort.cjs:13](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L13>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [sortProfiles](<catalog-sort.cjs.md#s-d6ac4c14e0fa0c27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [sortProfiles.&lt;anonymous@15:28&gt;](<catalog-sort.cjs.md#s-81d7d904d227065c>) — [electron/ai/llm-front-office/catalog-sort.cjs:47](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L47>)
- [sortProfiles.&lt;anonymous@15:28&gt;](<catalog-sort.cjs.md#s-81d7d904d227065c>) — [electron/ai/llm-front-office/catalog-sort.cjs:47](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L47>)

Unresolved / external call sites: 1.

- &#91;p.tools, p.vision, p.structuredOutput&#93;.filter — external-or-dynamic-dispatch; [electron/ai/llm-front-office/catalog-sort.cjs:14](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L14>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:18](<../../../../../../../electron/ai/front-office-engine.test.cjs#L18>) — file-import-only; coverage not established.

<a id="s-e0a14901b897634f"></a>

## sortProfiles.coverage.&lt;anonymous@14:52&gt;

[electron/ai/llm-front-office/catalog-sort.cjs:14](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L14>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [sortProfiles.coverage](<catalog-sort.cjs.md#s-c67704ef288a67e2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| v | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:18](<../../../../../../../electron/ai/front-office-engine.test.cjs#L18>) — file-import-only; coverage not established.

<a id="s-81d7d904d227065c"></a>

## sortProfiles.&lt;anonymous@15:28&gt;

[electron/ai/llm-front-office/catalog-sort.cjs:15](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L15>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [sortProfiles](<catalog-sort.cjs.md#s-d6ac4c14e0fa0c27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [sortProfiles.nullable](<catalog-sort.cjs.md#s-aa561e247797a16e>) — [electron/ai/llm-front-office/catalog-sort.cjs:20](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L20>)
- [sortProfiles.nullable](<catalog-sort.cjs.md#s-aa561e247797a16e>) — [electron/ai/llm-front-office/catalog-sort.cjs:22](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L22>)
- [sortProfiles.nullable](<catalog-sort.cjs.md#s-aa561e247797a16e>) — [electron/ai/llm-front-office/catalog-sort.cjs:31](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L31>)
- [sortProfiles.nullable](<catalog-sort.cjs.md#s-aa561e247797a16e>) — [electron/ai/llm-front-office/catalog-sort.cjs:37](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L37>)
- [sortProfiles.nullable](<catalog-sort.cjs.md#s-aa561e247797a16e>) — [electron/ai/llm-front-office/catalog-sort.cjs:39](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L39>)
- [sortProfiles.nullable](<catalog-sort.cjs.md#s-aa561e247797a16e>) — [electron/ai/llm-front-office/catalog-sort.cjs:41](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L41>)
- [sortProfiles.nullable](<catalog-sort.cjs.md#s-aa561e247797a16e>) — [electron/ai/llm-front-office/catalog-sort.cjs:46](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L46>)
- [sortProfiles.coverage](<catalog-sort.cjs.md#s-c67704ef288a67e2>) — [electron/ai/llm-front-office/catalog-sort.cjs:47](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L47>)
- [sortProfiles.coverage](<catalog-sort.cjs.md#s-c67704ef288a67e2>) — [electron/ai/llm-front-office/catalog-sort.cjs:47](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L47>)
- [sortProfiles.nullable](<catalog-sort.cjs.md#s-aa561e247797a16e>) — [electron/ai/llm-front-office/catalog-sort.cjs:48](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L48>)
- [sortProfiles.nullable](<catalog-sort.cjs.md#s-aa561e247797a16e>) — [electron/ai/llm-front-office/catalog-sort.cjs:49](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L49>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- (a.label ?? a.modelId ?? a.deploymentId).localeCompare — external-or-dynamic-dispatch; [electron/ai/llm-front-office/catalog-sort.cjs:33](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L33>)
- a.providerId.localeCompare — external-or-dynamic-dispatch; [electron/ai/llm-front-office/catalog-sort.cjs:43](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L43>)
- a.deploymentId.localeCompare — external-or-dynamic-dispatch; [electron/ai/llm-front-office/catalog-sort.cjs:50](<../../../../../../../electron/ai/llm-front-office/catalog-sort.cjs#L50>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:18](<../../../../../../../electron/ai/front-office-engine.test.cjs#L18>) — file-import-only; coverage not established.
