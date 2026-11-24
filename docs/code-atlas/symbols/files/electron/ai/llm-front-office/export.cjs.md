# electron/ai/llm-front-office/export.cjs: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/export.cjs:1](<../../../../../../../electron/ai/llm-front-office/export.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/export.cjs](<export.cjs.md#s-a1a56c8ebf93b022>) (Module)
- [csvCell](<export.cjs.md#s-134dbd860e0fca70>) (ArrowFunction)
- [exportTraces](<export.cjs.md#s-6d6bd3fd1a1029c5>) (FunctionDeclaration)
- [exportTraces.&lt;anonymous@45:21&gt;](<export.cjs.md#s-99fc5aadc451e689>) (ArrowFunction)
- [exportTraces.&lt;anonymous@45:21&gt;.&lt;anonymous@46:24&gt;](<export.cjs.md#s-11878f4b15f2fc95>) (ArrowFunction)

<a id="s-a1a56c8ebf93b022"></a>

## electron/ai/llm-front-office/export.cjs

[electron/ai/llm-front-office/export.cjs:1](<../../../../../../../electron/ai/llm-front-office/export.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/ai/llm-front-office/export.cjs:8](<../../../../../../../electron/ai/llm-front-office/export.cjs#L8>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:11](<../../../../../../../electron/ai/front-office.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-134dbd860e0fca70"></a>

## csvCell

[electron/ai/llm-front-office/export.cjs:25](<../../../../../../../electron/ai/llm-front-office/export.cjs#L25>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/export.cjs](<export.cjs.md#s-a1a56c8ebf93b022>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [exportTraces.&lt;anonymous@45:21&gt;.&lt;anonymous@46:24&gt;](<export.cjs.md#s-11878f4b15f2fc95>) — [electron/ai/llm-front-office/export.cjs:46](<../../../../../../../electron/ai/llm-front-office/export.cjs#L46>)

Unresolved / external call sites: 3.

- String — external-or-dynamic-dispatch; [electron/ai/llm-front-office/export.cjs:26](<../../../../../../../electron/ai/llm-front-office/export.cjs#L26>)
- /^&#91;=+\\-@\\t\\r&#93;/.test — external-or-dynamic-dispatch; [electron/ai/llm-front-office/export.cjs:28](<../../../../../../../electron/ai/llm-front-office/export.cjs#L28>)
- text.replaceAll — external-or-dynamic-dispatch; [electron/ai/llm-front-office/export.cjs:29](<../../../../../../../electron/ai/llm-front-office/export.cjs#L29>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:11](<../../../../../../../electron/ai/front-office.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-6d6bd3fd1a1029c5"></a>

## exportTraces

[electron/ai/llm-front-office/export.cjs:37](<../../../../../../../electron/ai/llm-front-office/export.cjs#L37>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Serialize a list of BaselineTrace objects; unknown fields are stripped. JSON retains per-call detail. CSV is one summary row per run; partial token totals are known subtotals, and unknown cost is blank rather than zero.

Purpose evidence: jsdoc.

Exported as: exportTraces ([electron/ai/llm-front-office/export.cjs:1](<../../../../../../../electron/ai/llm-front-office/export.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/export.cjs](<export.cjs.md#s-a1a56c8ebf93b022>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| values | any | compiler-inferred | required |
| format | string | compiler-inferred | optional, default present |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@52:97&gt;](<../front-office.test.cjs.md#s-9b554d76a728a3d4>) — [electron/ai/front-office.test.cjs:72](<../../../../../../../electron/ai/front-office.test.cjs#L72>)
- [&lt;anonymous@386:98&gt;](<../front-office.test.cjs.md#s-606e02334263c80c>) — [electron/ai/front-office.test.cjs:398](<../../../../../../../electron/ai/front-office.test.cjs#L398>)
- [&lt;anonymous@386:98&gt;](<../front-office.test.cjs.md#s-606e02334263c80c>) — [electron/ai/front-office.test.cjs:401](<../../../../../../../electron/ai/front-office.test.cjs#L401>)
- [&lt;anonymous@386:98&gt;.&lt;anonymous@412:17&gt;](<../front-office.test.cjs.md#s-ddf67b510768ef30>) — [electron/ai/front-office.test.cjs:412](<../../../../../../../electron/ai/front-office.test.cjs#L412>)
- [&lt;anonymous@386:98&gt;](<../front-office.test.cjs.md#s-606e02334263c80c>) — [electron/ai/front-office.test.cjs:413](<../../../../../../../electron/ai/front-office.test.cjs#L413>)
- [FrontOfficeService.export](<service.cjs.md#s-679bfddf6b227794>) — [electron/ai/llm-front-office/service.cjs:151](<../../../../../../../electron/ai/llm-front-office/service.cjs#L151>)
- [main](<../../../scripts/front-office-metrics-export.cjs.md#s-e062d24af962a299>) — [scripts/front-office-metrics-export.cjs:30](<../../../../../../../scripts/front-office-metrics-export.cjs#L30>)

Unresolved / external call sites: 8.

- Array.isArray — external-or-dynamic-dispatch; [electron/ai/llm-front-office/export.cjs:38](<../../../../../../../electron/ai/llm-front-office/export.cjs#L38>)
- &#91;"json", "csv"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/llm-front-office/export.cjs:38](<../../../../../../../electron/ai/llm-front-office/export.cjs#L38>)
- TypeError — external-or-dynamic-dispatch; [electron/ai/llm-front-office/export.cjs:39](<../../../../../../../electron/ai/llm-front-office/export.cjs#L39>)
- values.map — external-or-dynamic-dispatch; [electron/ai/llm-front-office/export.cjs:40](<../../../../../../../electron/ai/llm-front-office/export.cjs#L40>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/llm-front-office/export.cjs:41](<../../../../../../../electron/ai/llm-front-office/export.cjs#L41>)
- &#91; CSV_FIELDS.join(","), ...traces.map((trace) =&gt; CSV_FIELDS.map((field) =&gt; csvCell(trace&#91;field&#93;)).join(","), ), &#93;.join — external-or-dynamic-dispatch; [electron/ai/llm-front-office/export.cjs:43](<../../../../../../../electron/ai/llm-front-office/export.cjs#L43>)
- CSV_FIELDS.join — external-or-dynamic-dispatch; [electron/ai/llm-front-office/export.cjs:44](<../../../../../../../electron/ai/llm-front-office/export.cjs#L44>)
- traces.map — external-or-dynamic-dispatch; [electron/ai/llm-front-office/export.cjs:45](<../../../../../../../electron/ai/llm-front-office/export.cjs#L45>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:72](<../../../../../../../electron/ai/front-office.test.cjs#L72>) — static-call-site; coverage not established.
- [electron/ai/front-office.test.cjs:398](<../../../../../../../electron/ai/front-office.test.cjs#L398>) — static-call-site; coverage not established.
- [electron/ai/front-office.test.cjs:401](<../../../../../../../electron/ai/front-office.test.cjs#L401>) — static-call-site; coverage not established.
- [electron/ai/front-office.test.cjs:412](<../../../../../../../electron/ai/front-office.test.cjs#L412>) — static-call-site; coverage not established.
- [electron/ai/front-office.test.cjs:413](<../../../../../../../electron/ai/front-office.test.cjs#L413>) — static-call-site; coverage not established.
- [electron/ai/front-office.test.cjs:11](<../../../../../../../electron/ai/front-office.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-99fc5aadc451e689"></a>

## exportTraces.&lt;anonymous@45:21&gt;

[electron/ai/llm-front-office/export.cjs:45](<../../../../../../../electron/ai/llm-front-office/export.cjs#L45>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [exportTraces](<export.cjs.md#s-6d6bd3fd1a1029c5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| trace | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- CSV_FIELDS.map((field) =&gt; csvCell(trace&#91;field&#93;)).join — external-or-dynamic-dispatch; [electron/ai/llm-front-office/export.cjs:46](<../../../../../../../electron/ai/llm-front-office/export.cjs#L46>)
- CSV_FIELDS.map — external-or-dynamic-dispatch; [electron/ai/llm-front-office/export.cjs:46](<../../../../../../../electron/ai/llm-front-office/export.cjs#L46>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:11](<../../../../../../../electron/ai/front-office.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-11878f4b15f2fc95"></a>

## exportTraces.&lt;anonymous@45:21&gt;.&lt;anonymous@46:24&gt;

[electron/ai/llm-front-office/export.cjs:46](<../../../../../../../electron/ai/llm-front-office/export.cjs#L46>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [exportTraces.&lt;anonymous@45:21&gt;](<export.cjs.md#s-99fc5aadc451e689>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| field | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [csvCell](<export.cjs.md#s-134dbd860e0fca70>) — [electron/ai/llm-front-office/export.cjs:46](<../../../../../../../electron/ai/llm-front-office/export.cjs#L46>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:11](<../../../../../../../electron/ai/front-office.test.cjs#L11>) — file-import-only; coverage not established.
