# features/knowledge/financial-viewer.tsx: symbols

[Atlas](<../../../../README.md>) / [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>) / [features/knowledge/financial-viewer.tsx:1](<../../../../../../features/knowledge/financial-viewer.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/knowledge/financial-viewer.tsx](<financial-viewer.tsx.md#s-aade4978f4176236>) (Module)
- [value](<financial-viewer.tsx.md#s-6e0ead394b23654b>) (FunctionDeclaration)
- [FinancialViewer](<financial-viewer.tsx.md#s-7980dcbde1496c20>) (FunctionDeclaration)
- [FinancialViewer.load](<financial-viewer.tsx.md#s-d12838ae3f9b06d6>) (FunctionExpression)
- [FinancialViewer.load.loaded](<financial-viewer.tsx.md#s-ae2ca7bfd7e65819>) (FunctionExpression)
- [FinancialViewer.load.failed](<financial-viewer.tsx.md#s-11611a2fc4aad351>) (FunctionExpression)
- [FinancialViewer.load.&lt;anonymous@70:14&gt;](<financial-viewer.tsx.md#s-15d3cc33553db778>) (ArrowFunction)
- [FinancialViewer.&lt;anonymous@78:44&gt;](<financial-viewer.tsx.md#s-62bd3bcf3737ab72>) (ArrowFunction)
- [FinancialViewer.&lt;anonymous@113:30&gt;](<financial-viewer.tsx.md#s-ede66ebf162ff32d>) (ArrowFunction)
- [FinancialViewer.&lt;anonymous@125:24&gt;](<financial-viewer.tsx.md#s-5c774aa965ff5762>) (ArrowFunction)
- [FinancialViewer.&lt;anonymous@125:24&gt;.&lt;anonymous@130:30&gt;](<financial-viewer.tsx.md#s-cb1465613c16c324>) (ArrowFunction)
- [FinancialViewer.&lt;anonymous@137:57&gt;](<financial-viewer.tsx.md#s-a7f45ba30ac85c93>) (ArrowFunction)
- [FinancialViewer.&lt;anonymous@137:57&gt;.&lt;anonymous@142:30&gt;](<financial-viewer.tsx.md#s-49885694641552a8>) (ArrowFunction)
- [FinancialViewer.&lt;anonymous@164:35&gt;](<financial-viewer.tsx.md#s-726c7a02c393a540>) (ArrowFunction)
- [FinancialViewer.&lt;anonymous@175:36&gt;](<financial-viewer.tsx.md#s-86815f86c7eeafc5>) (ArrowFunction)
- [FinancialViewer.&lt;anonymous@175:36&gt;.&lt;anonymous@180:46&gt;](<financial-viewer.tsx.md#s-31ed218cc5febdc5>) (ArrowFunction)
- [FinancialViewer.&lt;anonymous@175:36&gt;.&lt;anonymous@184:37&gt;](<financial-viewer.tsx.md#s-8d195cec7d7d0d9c>) (ArrowFunction)
- [FinancialViewer.&lt;anonymous@222:31&gt;](<financial-viewer.tsx.md#s-e56324694977e74d>) (ArrowFunction)
- [FinancialViewer.&lt;anonymous@230:41&gt;](<financial-viewer.tsx.md#s-4671d1199fa1e11d>) (ArrowFunction)
- [FinancialViewer.&lt;anonymous@264:39&gt;](<financial-viewer.tsx.md#s-8a7c15342bf06dde>) (ArrowFunction)
- [FinancialViewer.&lt;anonymous@286:20&gt;](<financial-viewer.tsx.md#s-baf335cb19692218>) (ArrowFunction)

<a id="s-aade4978f4176236"></a>

## features/knowledge/financial-viewer.tsx

[features/knowledge/financial-viewer.tsx:1](<../../../../../../features/knowledge/financial-viewer.tsx#L1>) · Module · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6e0ead394b23654b"></a>

## value

[features/knowledge/financial-viewer.tsx:12](<../../../../../../features/knowledge/financial-viewer.tsx#L12>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Formats finite financial results without scaling or replacing missing values with zero.

Purpose evidence: jsdoc.

Lexical owner: [features/knowledge/financial-viewer.tsx](<financial-viewer.tsx.md#s-aade4978f4176236>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| number | number &#124; null &#124; undefined | annotation | required |

Returns: string (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [FinancialViewer.&lt;anonymous@175:36&gt;.&lt;anonymous@184:37&gt;](<financial-viewer.tsx.md#s-8d195cec7d7d0d9c>) — [features/knowledge/financial-viewer.tsx:186](<../../../../../../features/knowledge/financial-viewer.tsx#L186>)
- [FinancialViewer.&lt;anonymous@230:41&gt;](<financial-viewer.tsx.md#s-4671d1199fa1e11d>) — [features/knowledge/financial-viewer.tsx:235](<../../../../../../features/knowledge/financial-viewer.tsx#L235>)
- [FinancialViewer.&lt;anonymous@230:41&gt;](<financial-viewer.tsx.md#s-4671d1199fa1e11d>) — [features/knowledge/financial-viewer.tsx:236](<../../../../../../features/knowledge/financial-viewer.tsx#L236>)
- [FinancialViewer.&lt;anonymous@230:41&gt;](<financial-viewer.tsx.md#s-4671d1199fa1e11d>) — [features/knowledge/financial-viewer.tsx:246](<../../../../../../features/knowledge/financial-viewer.tsx#L246>)

Unresolved / external call sites: 2.

- new Intl.NumberFormat("en-US", { maximumFractionDigits: 10 }).format — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:15](<../../../../../../features/knowledge/financial-viewer.tsx#L15>)
- Intl.NumberFormat — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:15](<../../../../../../features/knowledge/financial-viewer.tsx#L15>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7980dcbde1496c20"></a>

## FinancialViewer

[features/knowledge/financial-viewer.tsx:21](<../../../../../../features/knowledge/financial-viewer.tsx#L21>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Loads one applied Yahoo dataset on opening or manual refresh. Statement navigation uses the loaded snapshot.

Purpose evidence: jsdoc.

Exported as: FinancialViewer ([features/knowledge/financial-viewer.tsx:1](<../../../../../../features/knowledge/financial-viewer.tsx#L1>)).

Lexical owner: [features/knowledge/financial-viewer.tsx](<financial-viewer.tsx.md#s-aade4978f4176236>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   entityId,   vaultPath,   menuId,   source, } | Readonly&lt;{ entityId: string; vaultPath: string; menuId: string; source: IndexedFinanceSource; }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 19.

- useState — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:32](<../../../../../../features/knowledge/financial-viewer.tsx#L32>)
- useState — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:33](<../../../../../../features/knowledge/financial-viewer.tsx#L33>)
- useState — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:34](<../../../../../../features/knowledge/financial-viewer.tsx#L34>)
- useState — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:35](<../../../../../../features/knowledge/financial-viewer.tsx#L35>)
- useState — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:36](<../../../../../../features/knowledge/financial-viewer.tsx#L36>)
- useState — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:37](<../../../../../../features/knowledge/financial-viewer.tsx#L37>)
- useEffect — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:39](<../../../../../../features/knowledge/financial-viewer.tsx#L39>)
- &#91;...(data?.statements&#91;statement&#93;?.&#91;period&#93; ?? &#91;&#93;)&#93;.reverse — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:77](<../../../../../../features/knowledge/financial-viewer.tsx#L77>)
- 11 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d12838ae3f9b06d6"></a>

## FinancialViewer.load

[features/knowledge/financial-viewer.tsx:40](<../../../../../../features/knowledge/financial-viewer.tsx#L40>) · FunctionExpression · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer](<financial-viewer.tsx.md#s-7980dcbde1496c20>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [requireWorldViewBridge](<../worldview/chip-session.ts.md#s-724ceb52bd424e76>) — [features/knowledge/financial-viewer.tsx:44](<../../../../../../features/knowledge/financial-viewer.tsx#L44>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- setLoading — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:42](<../../../../../../features/knowledge/financial-viewer.tsx#L42>)
- setError — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:43](<../../../../../../features/knowledge/financial-viewer.tsx#L43>)
- requireWorldViewBridge() .request&lt;FinancialResponse&gt;("finance-index", { vaultPath, id: entityId, menuId, financeId: source.id, force: refresh &gt; 0, }) .then — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:44](<../../../../../../features/knowledge/financial-viewer.tsx#L44>)
- requireWorldViewBridge() .request — declaration-without-runtime-body; [features/knowledge/financial-viewer.tsx:44](<../../../../../../features/knowledge/financial-viewer.tsx#L44>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ae2ca7bfd7e65819"></a>

## FinancialViewer.load.loaded

[features/knowledge/financial-viewer.tsx:53](<../../../../../../features/knowledge/financial-viewer.tsx#L53>) · FunctionExpression · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer.load](<financial-viewer.tsx.md#s-d12838ae3f9b06d6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| response | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- setResult — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:55](<../../../../../../features/knowledge/financial-viewer.tsx#L55>)
- setLoading — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:56](<../../../../../../features/knowledge/financial-viewer.tsx#L56>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-11611a2fc4aad351"></a>

## FinancialViewer.load.failed

[features/knowledge/financial-viewer.tsx:59](<../../../../../../features/knowledge/financial-viewer.tsx#L59>) · FunctionExpression · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer.load](<financial-viewer.tsx.md#s-d12838ae3f9b06d6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| cause | unknown | annotation | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- setError — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:61](<../../../../../../features/knowledge/financial-viewer.tsx#L61>)
- setLoading — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:66](<../../../../../../features/knowledge/financial-viewer.tsx#L66>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-15d3cc33553db778"></a>

## FinancialViewer.load.&lt;anonymous@70:14&gt;

[features/knowledge/financial-viewer.tsx:70](<../../../../../../features/knowledge/financial-viewer.tsx#L70>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer.load](<financial-viewer.tsx.md#s-d12838ae3f9b06d6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-62bd3bcf3737ab72"></a>

## FinancialViewer.&lt;anonymous@78:44&gt;

[features/knowledge/financial-viewer.tsx:78](<../../../../../../features/knowledge/financial-viewer.tsx#L78>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer](<financial-viewer.tsx.md#s-7980dcbde1496c20>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Object.keys — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:78](<../../../../../../features/knowledge/financial-viewer.tsx#L78>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ede66ebf162ff32d"></a>

## FinancialViewer.&lt;anonymous@113:30&gt;

[features/knowledge/financial-viewer.tsx:113](<../../../../../../features/knowledge/financial-viewer.tsx#L113>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer](<financial-viewer.tsx.md#s-7980dcbde1496c20>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| warning | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5c774aa965ff5762"></a>

## FinancialViewer.&lt;anonymous@125:24&gt;

[features/knowledge/financial-viewer.tsx:125](<../../../../../../features/knowledge/financial-viewer.tsx#L125>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer](<financial-viewer.tsx.md#s-7980dcbde1496c20>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| &#91;id, label&#93; | &#91;any, any&#93; | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cb1465613c16c324"></a>

## FinancialViewer.&lt;anonymous@125:24&gt;.&lt;anonymous@130:30&gt;

[features/knowledge/financial-viewer.tsx:130](<../../../../../../features/knowledge/financial-viewer.tsx#L130>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer.&lt;anonymous@125:24&gt;](<financial-viewer.tsx.md#s-5c774aa965ff5762>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setStatement — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:130](<../../../../../../features/knowledge/financial-viewer.tsx#L130>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a7f45ba30ac85c93"></a>

## FinancialViewer.&lt;anonymous@137:57&gt;

[features/knowledge/financial-viewer.tsx:137](<../../../../../../features/knowledge/financial-viewer.tsx#L137>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer](<financial-viewer.tsx.md#s-7980dcbde1496c20>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-49885694641552a8"></a>

## FinancialViewer.&lt;anonymous@137:57&gt;.&lt;anonymous@142:30&gt;

[features/knowledge/financial-viewer.tsx:142](<../../../../../../features/knowledge/financial-viewer.tsx#L142>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer.&lt;anonymous@137:57&gt;](<financial-viewer.tsx.md#s-a7f45ba30ac85c93>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setPeriod — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:142](<../../../../../../features/knowledge/financial-viewer.tsx#L142>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-726c7a02c393a540"></a>

## FinancialViewer.&lt;anonymous@164:35&gt;

[features/knowledge/financial-viewer.tsx:164](<../../../../../../features/knowledge/financial-viewer.tsx#L164>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer](<financial-viewer.tsx.md#s-7980dcbde1496c20>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-86815f86c7eeafc5"></a>

## FinancialViewer.&lt;anonymous@175:36&gt;

[features/knowledge/financial-viewer.tsx:175](<../../../../../../features/knowledge/financial-viewer.tsx#L175>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer](<financial-viewer.tsx.md#s-7980dcbde1496c20>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| metric | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- metric .replace(/(&#91;a-z0-9&#93;)(&#91;A-Z&#93;)/g, "$1 $2") .replace — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:178](<../../../../../../features/knowledge/financial-viewer.tsx#L178>)
- metric .replace — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:178](<../../../../../../features/knowledge/financial-viewer.tsx#L178>)
- rows.map — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:184](<../../../../../../features/knowledge/financial-viewer.tsx#L184>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-31ed218cc5febdc5"></a>

## FinancialViewer.&lt;anonymous@175:36&gt;.&lt;anonymous@180:46&gt;

[features/knowledge/financial-viewer.tsx:180](<../../../../../../features/knowledge/financial-viewer.tsx#L180>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer.&lt;anonymous@175:36&gt;](<financial-viewer.tsx.md#s-86815f86c7eeafc5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| character | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- character.toUpperCase — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:181](<../../../../../../features/knowledge/financial-viewer.tsx#L181>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8d195cec7d7d0d9c"></a>

## FinancialViewer.&lt;anonymous@175:36&gt;.&lt;anonymous@184:37&gt;

[features/knowledge/financial-viewer.tsx:184](<../../../../../../features/knowledge/financial-viewer.tsx#L184>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer.&lt;anonymous@175:36&gt;](<financial-viewer.tsx.md#s-86815f86c7eeafc5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [value](<financial-viewer.tsx.md#s-6e0ead394b23654b>) — [features/knowledge/financial-viewer.tsx:186](<../../../../../../features/knowledge/financial-viewer.tsx#L186>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e56324694977e74d"></a>

## FinancialViewer.&lt;anonymous@222:31&gt;

[features/knowledge/financial-viewer.tsx:222](<../../../../../../features/knowledge/financial-viewer.tsx#L222>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer](<financial-viewer.tsx.md#s-7980dcbde1496c20>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| label | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4671d1199fa1e11d"></a>

## FinancialViewer.&lt;anonymous@230:41&gt;

[features/knowledge/financial-viewer.tsx:230](<../../../../../../features/knowledge/financial-viewer.tsx#L230>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer](<financial-viewer.tsx.md#s-7980dcbde1496c20>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [value](<financial-viewer.tsx.md#s-6e0ead394b23654b>) — [features/knowledge/financial-viewer.tsx:235](<../../../../../../features/knowledge/financial-viewer.tsx#L235>)
- [value](<financial-viewer.tsx.md#s-6e0ead394b23654b>) — [features/knowledge/financial-viewer.tsx:236](<../../../../../../features/knowledge/financial-viewer.tsx#L236>)
- [value](<financial-viewer.tsx.md#s-6e0ead394b23654b>) — [features/knowledge/financial-viewer.tsx:246](<../../../../../../features/knowledge/financial-viewer.tsx#L246>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8a7c15342bf06dde"></a>

## FinancialViewer.&lt;anonymous@264:39&gt;

[features/knowledge/financial-viewer.tsx:264](<../../../../../../features/knowledge/financial-viewer.tsx#L264>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer](<financial-viewer.tsx.md#s-7980dcbde1496c20>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-baf335cb19692218"></a>

## FinancialViewer.&lt;anonymous@286:20&gt;

[features/knowledge/financial-viewer.tsx:286](<../../../../../../features/knowledge/financial-viewer.tsx#L286>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [FinancialViewer](<financial-viewer.tsx.md#s-7980dcbde1496c20>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setRefresh — external-or-dynamic-dispatch; [features/knowledge/financial-viewer.tsx:286](<../../../../../../features/knowledge/financial-viewer.tsx#L286>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
