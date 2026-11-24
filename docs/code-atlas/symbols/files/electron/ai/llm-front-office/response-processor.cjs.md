# electron/ai/llm-front-office/response-processor.cjs: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/response-processor.cjs:1](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/response-processor.cjs](<response-processor.cjs.md#s-1ef8662f2ae2eea6>) (Module)
- [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>) (FunctionDeclaration)
- [validateSchemaDefinition.invalid](<response-processor.cjs.md#s-a3aefd282f62552f>) (ArrowFunction)
- [validateSchemaDefinition.&lt;anonymous@37:30&gt;](<response-processor.cjs.md#s-a5887d545cdd4290>) (ArrowFunction)
- [validateSchemaDefinition.&lt;anonymous@63:11&gt;](<response-processor.cjs.md#s-ede7344119b9b356>) (ArrowFunction)
- [validateSchemaDefinition.&lt;anonymous@77:7&gt;](<response-processor.cjs.md#s-61788e5bc24bea15>) (ArrowFunction)
- [matches](<response-processor.cjs.md#s-14a0416dec56b73b>) (ArrowFunction)
- [matches.&lt;anonymous@93:18&gt;](<response-processor.cjs.md#s-71df135647edf96b>) (ArrowFunction)
- [matches.&lt;anonymous@98:32&gt;](<response-processor.cjs.md#s-d74da36cdd9e7902>) (ArrowFunction)
- [matches.&lt;anonymous@99:35&gt;](<response-processor.cjs.md#s-3fa05c3d02086a19>) (ArrowFunction)
- [matches.&lt;anonymous@105:42&gt;](<response-processor.cjs.md#s-f854785f6c4de85c>) (ArrowFunction)
- [processResponse](<response-processor.cjs.md#s-ebdd2b90b3896156>) (FunctionDeclaration)

<a id="s-1ef8662f2ae2eea6"></a>

## electron/ai/llm-front-office/response-processor.cjs

[electron/ai/llm-front-office/response-processor.cjs:1](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/ai/llm-front-office/response-processor.cjs:3](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L3>)
- Set — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:4](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L4>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:30](<../../../../../../../electron/ai/front-office-engine.test.cjs#L30>) — file-import-only; coverage not established.

<a id="s-8c18e97b6f76e62b"></a>

## validateSchemaDefinition

[electron/ai/llm-front-office/response-processor.cjs:24](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L24>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Accept an explicit, documented JSON Schema subset; reject unsupported keywords before dispatch.

Purpose evidence: jsdoc.

Exported as: validateSchemaDefinition ([electron/ai/llm-front-office/response-processor.cjs:1](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/response-processor.cjs](<response-processor.cjs.md#s-1ef8662f2ae2eea6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| schema | any | compiler-inferred | required |
| depth | number | compiler-inferred | optional, default present |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateSchemaDefinition.invalid](<response-processor.cjs.md#s-a3aefd282f62552f>) — [electron/ai/llm-front-office/response-processor.cjs:40](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L40>)
- [validateSchemaDefinition.invalid](<response-processor.cjs.md#s-a3aefd282f62552f>) — [electron/ai/llm-front-office/response-processor.cjs:45](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L45>)
- [validateSchemaDefinition.invalid](<response-processor.cjs.md#s-a3aefd282f62552f>) — [electron/ai/llm-front-office/response-processor.cjs:50](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L50>)
- [validateSchemaDefinition.invalid](<response-processor.cjs.md#s-a3aefd282f62552f>) — [electron/ai/llm-front-office/response-processor.cjs:58](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L58>)
- [validateSchemaDefinition.invalid](<response-processor.cjs.md#s-a3aefd282f62552f>) — [electron/ai/llm-front-office/response-processor.cjs:67](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L67>)
- [validateSchemaDefinition.invalid](<response-processor.cjs.md#s-a3aefd282f62552f>) — [electron/ai/llm-front-office/response-processor.cjs:72](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L72>)
- [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>) — [electron/ai/llm-front-office/response-processor.cjs:74](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L74>)
- [validateSchemaDefinition.invalid](<response-processor.cjs.md#s-a3aefd282f62552f>) — [electron/ai/llm-front-office/response-processor.cjs:80](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L80>)
- [validateSchemaDefinition.invalid](<response-processor.cjs.md#s-a3aefd282f62552f>) — [electron/ai/llm-front-office/response-processor.cjs:82](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L82>)
- [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>) — [electron/ai/llm-front-office/response-processor.cjs:83](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L83>)
- [validateSchemaDefinition.invalid](<response-processor.cjs.md#s-a3aefd282f62552f>) — [electron/ai/llm-front-office/response-processor.cjs:84](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L84>)

**Called by (statically resolved):**

- [validateConfig](<experiment-contracts.cjs.md#s-3012ca16a371ad08>) — [electron/ai/llm-front-office/experiment-contracts.cjs:222](<../../../../../../../electron/ai/llm-front-office/experiment-contracts.cjs#L222>)
- [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>) — [electron/ai/llm-front-office/response-processor.cjs:74](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L74>)
- [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>) — [electron/ai/llm-front-office/response-processor.cjs:83](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L83>)

Unresolved / external call sites: 10.

- Array.isArray — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:35](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L35>)
- Object.keys(schema).some — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:37](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L37>)
- Object.keys — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:37](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L37>)
- TYPES.includes — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:38](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L38>)
- Array.isArray — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:48](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L48>)
- Array.isArray — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:56](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L56>)
- Array.isArray — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:61](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L61>)
- schema.required.some — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:62](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L62>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:30](<../../../../../../../electron/ai/front-office-engine.test.cjs#L30>) — file-import-only; coverage not established.

<a id="s-a3aefd282f62552f"></a>

## validateSchemaDefinition.invalid

[electron/ai/llm-front-office/response-processor.cjs:26](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L26>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: never (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/response-processor.cjs:27](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L27>)

**Called by (statically resolved):**

- [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>) — [electron/ai/llm-front-office/response-processor.cjs:40](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L40>)
- [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>) — [electron/ai/llm-front-office/response-processor.cjs:45](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L45>)
- [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>) — [electron/ai/llm-front-office/response-processor.cjs:50](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L50>)
- [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>) — [electron/ai/llm-front-office/response-processor.cjs:58](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L58>)
- [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>) — [electron/ai/llm-front-office/response-processor.cjs:67](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L67>)
- [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>) — [electron/ai/llm-front-office/response-processor.cjs:72](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L72>)
- [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>) — [electron/ai/llm-front-office/response-processor.cjs:80](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L80>)
- [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>) — [electron/ai/llm-front-office/response-processor.cjs:82](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L82>)
- [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>) — [electron/ai/llm-front-office/response-processor.cjs:84](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L84>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:30](<../../../../../../../electron/ai/front-office-engine.test.cjs#L30>) — file-import-only; coverage not established.

<a id="s-a5887d545cdd4290"></a>

## validateSchemaDefinition.&lt;anonymous@37:30&gt;

[electron/ai/llm-front-office/response-processor.cjs:37](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L37>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| k | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- KEYS.has — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:37](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L37>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:30](<../../../../../../../electron/ai/front-office-engine.test.cjs#L30>) — file-import-only; coverage not established.

<a id="s-ede7344119b9b356"></a>

## validateSchemaDefinition.&lt;anonymous@63:11&gt;

[electron/ai/llm-front-office/response-processor.cjs:63](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L63>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| k | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Object.hasOwn — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:64](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L64>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:30](<../../../../../../../electron/ai/front-office-engine.test.cjs#L30>) — file-import-only; coverage not established.

<a id="s-61788e5bc24bea15"></a>

## validateSchemaDefinition.&lt;anonymous@77:7&gt;

[electron/ai/llm-front-office/response-processor.cjs:77](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L77>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateSchemaDefinition](<response-processor.cjs.md#s-8c18e97b6f76e62b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| k | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:30](<../../../../../../../electron/ai/front-office-engine.test.cjs#L30>) — file-import-only; coverage not established.

<a id="s-14a0416dec56b73b"></a>

## matches

[electron/ai/llm-front-office/response-processor.cjs:86](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L86>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/response-processor.cjs](<response-processor.cjs.md#s-1ef8662f2ae2eea6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |
| s | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [matches.&lt;anonymous@99:35&gt;](<response-processor.cjs.md#s-3fa05c3d02086a19>) — [electron/ai/llm-front-office/response-processor.cjs:101](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L101>)
- [matches.&lt;anonymous@105:42&gt;](<response-processor.cjs.md#s-f854785f6c4de85c>) — [electron/ai/llm-front-office/response-processor.cjs:105](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L105>)
- [processResponse](<response-processor.cjs.md#s-ebdd2b90b3896156>) — [electron/ai/llm-front-office/response-processor.cjs:136](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L136>)
- [processResponse](<response-processor.cjs.md#s-ebdd2b90b3896156>) — [electron/ai/llm-front-office/response-processor.cjs:139](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L139>)

Unresolved / external call sites: 7.

- Array.isArray — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:88](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L88>)
- Number.isSafeInteger — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:89](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L89>)
- s.enum.some — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:93](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L93>)
- (s.required ?? &#91;&#93;).every — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:98](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L98>)
- Object.entries(value).every — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:99](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L99>)
- Object.entries — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:99](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L99>)
- value.every — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:105](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L105>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:30](<../../../../../../../electron/ai/front-office-engine.test.cjs#L30>) — file-import-only; coverage not established.

<a id="s-71df135647edf96b"></a>

## matches.&lt;anonymous@93:18&gt;

[electron/ai/llm-front-office/response-processor.cjs:93](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L93>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [matches](<response-processor.cjs.md#s-14a0416dec56b73b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| v | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:93](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L93>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:93](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L93>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:30](<../../../../../../../electron/ai/front-office-engine.test.cjs#L30>) — file-import-only; coverage not established.

<a id="s-d74da36cdd9e7902"></a>

## matches.&lt;anonymous@98:32&gt;

[electron/ai/llm-front-office/response-processor.cjs:98](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L98>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [matches](<response-processor.cjs.md#s-14a0416dec56b73b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| k | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Object.hasOwn — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:98](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L98>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:30](<../../../../../../../electron/ai/front-office-engine.test.cjs#L30>) — file-import-only; coverage not established.

<a id="s-3fa05c3d02086a19"></a>

## matches.&lt;anonymous@99:35&gt;

[electron/ai/llm-front-office/response-processor.cjs:99](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L99>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [matches](<response-processor.cjs.md#s-14a0416dec56b73b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| &#91;k, v&#93; | &#91;any, any&#93; | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [matches](<response-processor.cjs.md#s-14a0416dec56b73b>) — [electron/ai/llm-front-office/response-processor.cjs:101](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L101>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Object.hasOwn — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:100](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L100>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:30](<../../../../../../../electron/ai/front-office-engine.test.cjs#L30>) — file-import-only; coverage not established.

<a id="s-f854785f6c4de85c"></a>

## matches.&lt;anonymous@105:42&gt;

[electron/ai/llm-front-office/response-processor.cjs:105](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L105>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [matches](<response-processor.cjs.md#s-14a0416dec56b73b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| v | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [matches](<response-processor.cjs.md#s-14a0416dec56b73b>) — [electron/ai/llm-front-office/response-processor.cjs:105](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L105>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:30](<../../../../../../../electron/ai/front-office-engine.test.cjs#L30>) — file-import-only; coverage not established.

<a id="s-ebdd2b90b3896156"></a>

## processResponse

[electron/ai/llm-front-office/response-processor.cjs:108](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L108>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Return checked output; preserve length/refusal information instead of claiming a complete answer.

Purpose evidence: jsdoc.

Exported as: processResponse ([electron/ai/llm-front-office/response-processor.cjs:1](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/response-processor.cjs](<response-processor.cjs.md#s-1ef8662f2ae2eea6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| response | any | compiler-inferred | required |
| generation | any | compiler-inferred | required |

Returns: { valid: boolean; format: string; reason?: undefined; } &#124; { valid: any; format: string; reason: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/response-processor.cjs:114](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L114>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/response-processor.cjs:119](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L119>)
- [matches](<response-processor.cjs.md#s-14a0416dec56b73b>) — [electron/ai/llm-front-office/response-processor.cjs:136](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L136>)
- [matches](<response-processor.cjs.md#s-14a0416dec56b73b>) — [electron/ai/llm-front-office/response-processor.cjs:139](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L139>)

**Called by (statically resolved):**

- [&lt;anonymous@128:98&gt;](<../front-office-engine.test.cjs.md#s-c8ff23519b069130>) — [electron/ai/front-office-engine.test.cjs:162](<../../../../../../../electron/ai/front-office-engine.test.cjs#L162>)
- [&lt;anonymous@128:98&gt;.&lt;anonymous@173:17&gt;](<../front-office-engine.test.cjs.md#s-d2b2034a7f7b0a0c>) — [electron/ai/front-office-engine.test.cjs:173](<../../../../../../../electron/ai/front-office-engine.test.cjs#L173>)
- [&lt;anonymous@549:79&gt;](<../front-office-engine.test.cjs.md#s-4950452fa896aaba>) — [electron/ai/front-office-engine.test.cjs:560](<../../../../../../../electron/ai/front-office-engine.test.cjs#L560>)
- [&lt;anonymous@549:79&gt;](<../front-office-engine.test.cjs.md#s-4950452fa896aaba>) — [electron/ai/front-office-engine.test.cjs:564](<../../../../../../../electron/ai/front-office-engine.test.cjs#L564>)
- [&lt;anonymous@549:79&gt;](<../front-office-engine.test.cjs.md#s-4950452fa896aaba>) — [electron/ai/front-office-engine.test.cjs:569](<../../../../../../../electron/ai/front-office-engine.test.cjs#L569>)
- [&lt;anonymous@549:79&gt;.&lt;anonymous@573:5&gt;](<../front-office-engine.test.cjs.md#s-12075df98f04b405>) — [electron/ai/front-office-engine.test.cjs:573](<../../../../../../../electron/ai/front-office-engine.test.cjs#L573>)
- [FrontOfficeService.run](<service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:546](<../../../../../../../electron/ai/llm-front-office/service.cjs#L546>)

Unresolved / external call sites: 2.

- response.content.trim — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:112](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L112>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/llm-front-office/response-processor.cjs:131](<../../../../../../../electron/ai/llm-front-office/response-processor.cjs#L131>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:162](<../../../../../../../electron/ai/front-office-engine.test.cjs#L162>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:173](<../../../../../../../electron/ai/front-office-engine.test.cjs#L173>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:560](<../../../../../../../electron/ai/front-office-engine.test.cjs#L560>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:564](<../../../../../../../electron/ai/front-office-engine.test.cjs#L564>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:569](<../../../../../../../electron/ai/front-office-engine.test.cjs#L569>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:573](<../../../../../../../electron/ai/front-office-engine.test.cjs#L573>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:30](<../../../../../../../electron/ai/front-office-engine.test.cjs#L30>) — file-import-only; coverage not established.
