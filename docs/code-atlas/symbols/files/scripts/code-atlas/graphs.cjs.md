# scripts/code-atlas/graphs.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/code-atlas/graphs.cjs:1](<../../../../../../scripts/code-atlas/graphs.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/code-atlas/graphs.cjs](<graphs.cjs.md#s-f16f4902001a59e6>) (Module)
- [xml](<graphs.cjs.md#s-e5d20f92d62851ad>) (FunctionDeclaration)
- [xml.&lt;anonymous@7:5&gt;](<graphs.cjs.md#s-335aa43f34eb966f>) (ArrowFunction)
- [dependencySvg](<graphs.cjs.md#s-6f46d2d1d02212ec>) (FunctionDeclaration)
- [dependencySvg.&lt;anonymous@34:19&gt;](<graphs.cjs.md#s-c8650026870548ac>) (ArrowFunction)
- [dependencySvg.&lt;anonymous@34:19&gt;.&lt;anonymous@39:21&gt;](<graphs.cjs.md#s-591837bbcd65ee2f>) (ArrowFunction)
- [dependencySvg.&lt;anonymous@34:19&gt;.&lt;anonymous@39:21&gt;.&lt;anonymous@41:9&gt;](<graphs.cjs.md#s-5ad6eb5cfea13449>) (ArrowFunction)
- [selectCallEdges](<graphs.cjs.md#s-b19bd635a203dc1c>) (FunctionDeclaration)
- [selectCallEdges.&lt;anonymous@61:41&gt;](<graphs.cjs.md#s-d24baad77824a83b>) (ArrowFunction)
- [selectCallEdges.&lt;anonymous@85:7&gt;](<graphs.cjs.md#s-1f4dd091d8fcd5c7>) (ArrowFunction)
- [selectCallEdges.&lt;anonymous@89:7&gt;](<graphs.cjs.md#s-8309e26858db373a>) (ArrowFunction)
- [selectCallEdges.&lt;anonymous@91:16&gt;](<graphs.cjs.md#s-9f25dbbe1882d802>) (ArrowFunction)
- [selectCallEdges.&lt;anonymous@133:15&gt;](<graphs.cjs.md#s-29b20fec559c7ee9>) (ArrowFunction)
- [selectCallEdges.&lt;anonymous@145:13&gt;](<graphs.cjs.md#s-2d872faa46eb3c8e>) (ArrowFunction)
- [callSvg](<graphs.cjs.md#s-12300607dcf67395>) (FunctionDeclaration)
- [callSvg.&lt;anonymous@168:41&gt;](<graphs.cjs.md#s-03fab79c2cf9f7f5>) (ArrowFunction)
- [callSvg.&lt;anonymous@180:17&gt;](<graphs.cjs.md#s-85b908fcfec4fa8c>) (ArrowFunction)
- [callSvg.&lt;anonymous@180:17&gt;.&lt;anonymous@182:54&gt;](<graphs.cjs.md#s-a819eeb1b85505f0>) (ArrowFunction)

<a id="s-f16f4902001a59e6"></a>

## scripts/code-atlas/graphs.cjs

[scripts/code-atlas/graphs.cjs:1](<../../../../../../scripts/code-atlas/graphs.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [scripts/code-atlas/graphs.cjs:1](<../../../../../../scripts/code-atlas/graphs.cjs#L1>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e5d20f92d62851ad"></a>

## xml

[scripts/code-atlas/graphs.cjs:4](<../../../../../../scripts/code-atlas/graphs.cjs#L4>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Escapes text/attributes for standalone SVG; indexed source cannot inject markup.

Purpose evidence: jsdoc.

Lexical owner: [scripts/code-atlas/graphs.cjs](<graphs.cjs.md#s-f16f4902001a59e6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [dependencySvg.&lt;anonymous@34:19&gt;](<graphs.cjs.md#s-c8650026870548ac>) — [scripts/code-atlas/graphs.cjs:37](<../../../../../../scripts/code-atlas/graphs.cjs#L37>)
- [dependencySvg.&lt;anonymous@34:19&gt;](<graphs.cjs.md#s-c8650026870548ac>) — [scripts/code-atlas/graphs.cjs:37](<../../../../../../scripts/code-atlas/graphs.cjs#L37>)
- [dependencySvg.&lt;anonymous@34:19&gt;.&lt;anonymous@39:21&gt;](<graphs.cjs.md#s-591837bbcd65ee2f>) — [scripts/code-atlas/graphs.cjs:45](<../../../../../../scripts/code-atlas/graphs.cjs#L45>)
- [dependencySvg.&lt;anonymous@34:19&gt;.&lt;anonymous@39:21&gt;](<graphs.cjs.md#s-591837bbcd65ee2f>) — [scripts/code-atlas/graphs.cjs:45](<../../../../../../scripts/code-atlas/graphs.cjs#L45>)
- [callSvg.&lt;anonymous@180:17&gt;.&lt;anonymous@182:54&gt;](<graphs.cjs.md#s-a819eeb1b85505f0>) — [scripts/code-atlas/graphs.cjs:185](<../../../../../../scripts/code-atlas/graphs.cjs#L185>)
- [callSvg.&lt;anonymous@180:17&gt;.&lt;anonymous@182:54&gt;](<graphs.cjs.md#s-a819eeb1b85505f0>) — [scripts/code-atlas/graphs.cjs:185](<../../../../../../scripts/code-atlas/graphs.cjs#L185>)
- [callSvg.&lt;anonymous@180:17&gt;.&lt;anonymous@182:54&gt;](<graphs.cjs.md#s-a819eeb1b85505f0>) — [scripts/code-atlas/graphs.cjs:185](<../../../../../../scripts/code-atlas/graphs.cjs#L185>)

Unresolved / external call sites: 2.

- String(value).replace — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:5](<../../../../../../scripts/code-atlas/graphs.cjs#L5>)
- String — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:5](<../../../../../../scripts/code-atlas/graphs.cjs#L5>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-335aa43f34eb966f"></a>

## xml.&lt;anonymous@7:5&gt;

[scripts/code-atlas/graphs.cjs:7](<../../../../../../scripts/code-atlas/graphs.cjs#L7>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [xml](<graphs.cjs.md#s-e5d20f92d62851ad>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| character | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6f46d2d1d02212ec"></a>

## dependencySvg

[scripts/code-atlas/graphs.cjs:19](<../../../../../../scripts/code-atlas/graphs.cjs#L19>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Renders a deterministic adjacency matrix with hyperlinks, avoiding overlapping graph edges at repository scale.

Purpose evidence: jsdoc.

Exported as: dependencySvg ([scripts/code-atlas/graphs.cjs:1](<../../../../../../scripts/code-atlas/graphs.cjs#L1>)).

Lexical owner: [scripts/code-atlas/graphs.cjs](<graphs.cjs.md#s-f16f4902001a59e6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| modules | any | compiler-inferred | required |
| edges | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [render](<render.cjs.md#s-43b33fd13be6d7f9>) — [scripts/code-atlas/render.cjs:619](<../../../../../../scripts/code-atlas/render.cjs#L619>)

Unresolved / external call sites: 3.

- modules.forEach — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:34](<../../../../../../scripts/code-atlas/graphs.cjs#L34>)
- parts.push — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:53](<../../../../../../scripts/code-atlas/graphs.cjs#L53>)
- parts.join — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:56](<../../../../../../scripts/code-atlas/graphs.cjs#L56>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c8650026870548ac"></a>

## dependencySvg.&lt;anonymous@34:19&gt;

[scripts/code-atlas/graphs.cjs:34](<../../../../../../scripts/code-atlas/graphs.cjs#L34>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [dependencySvg](<graphs.cjs.md#s-6f46d2d1d02212ec>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| module | any | compiler-inferred | required |
| i | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [xml](<graphs.cjs.md#s-e5d20f92d62851ad>) — [scripts/code-atlas/graphs.cjs:37](<../../../../../../scripts/code-atlas/graphs.cjs#L37>)
- [xml](<graphs.cjs.md#s-e5d20f92d62851ad>) — [scripts/code-atlas/graphs.cjs:37](<../../../../../../scripts/code-atlas/graphs.cjs#L37>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- parts.push — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:36](<../../../../../../scripts/code-atlas/graphs.cjs#L36>)
- modules.forEach — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:39](<../../../../../../scripts/code-atlas/graphs.cjs#L39>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-591837bbcd65ee2f"></a>

## dependencySvg.&lt;anonymous@34:19&gt;.&lt;anonymous@39:21&gt;

[scripts/code-atlas/graphs.cjs:39](<../../../../../../scripts/code-atlas/graphs.cjs#L39>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [dependencySvg.&lt;anonymous@34:19&gt;](<graphs.cjs.md#s-c8650026870548ac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| target | any | compiler-inferred | required |
| j | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [xml](<graphs.cjs.md#s-e5d20f92d62851ad>) — [scripts/code-atlas/graphs.cjs:45](<../../../../../../scripts/code-atlas/graphs.cjs#L45>)
- [xml](<graphs.cjs.md#s-e5d20f92d62851ad>) — [scripts/code-atlas/graphs.cjs:45](<../../../../../../scripts/code-atlas/graphs.cjs#L45>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- edges.find — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:40](<../../../../../../scripts/code-atlas/graphs.cjs#L40>)
- parts.push — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:44](<../../../../../../scripts/code-atlas/graphs.cjs#L44>)
- parts.push — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:48](<../../../../../../scripts/code-atlas/graphs.cjs#L48>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5ad6eb5cfea13449"></a>

## dependencySvg.&lt;anonymous@34:19&gt;.&lt;anonymous@39:21&gt;.&lt;anonymous@41:9&gt;

[scripts/code-atlas/graphs.cjs:41](<../../../../../../scripts/code-atlas/graphs.cjs#L41>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [dependencySvg.&lt;anonymous@34:19&gt;.&lt;anonymous@39:21&gt;](<graphs.cjs.md#s-591837bbcd65ee2f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b19bd635a203dc1c"></a>

## selectCallEdges

[scripts/code-atlas/graphs.cjs:60](<../../../../../../scripts/code-atlas/graphs.cjs#L60>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Selects a bounded set of real function-to-function edges at key boundaries; the complete graph remains in JSON.

Purpose evidence: jsdoc.

Exported as: selectCallEdges ([scripts/code-atlas/graphs.cjs:1](<../../../../../../scripts/code-atlas/graphs.cjs#L1>)).

Lexical owner: [scripts/code-atlas/graphs.cjs](<graphs.cjs.md#s-f16f4902001a59e6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| data | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [render](<render.cjs.md#s-43b33fd13be6d7f9>) — [scripts/code-atlas/render.cjs:599](<../../../../../../scripts/code-atlas/render.cjs#L599>)

Unresolved / external call sites: 15.

- Map — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:61](<../../../../../../scripts/code-atlas/graphs.cjs#L61>)
- data.symbols.map — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:61](<../../../../../../scripts/code-atlas/graphs.cjs#L61>)
- Map — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:62](<../../../../../../scripts/code-atlas/graphs.cjs#L62>)
- data.symbols.find — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:84](<../../../../../../scripts/code-atlas/graphs.cjs#L84>)
- data.calls.filter — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:88](<../../../../../../scripts/code-atlas/graphs.cjs#L88>)
- edges.sort — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:91](<../../../../../../scripts/code-atlas/graphs.cjs#L91>)
- selected.has — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:107](<../../../../../../scripts/code-atlas/graphs.cjs#L107>)
- selected.set — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:108](<../../../../../../scripts/code-atlas/graphs.cjs#L108>)
- 7 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d24baad77824a83b"></a>

## selectCallEdges.&lt;anonymous@61:41&gt;

[scripts/code-atlas/graphs.cjs:61](<../../../../../../scripts/code-atlas/graphs.cjs#L61>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [selectCallEdges](<graphs.cjs.md#s-b19bd635a203dc1c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1f4dd091d8fcd5c7"></a>

## selectCallEdges.&lt;anonymous@85:7&gt;

[scripts/code-atlas/graphs.cjs:85](<../../../../../../scripts/code-atlas/graphs.cjs#L85>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [selectCallEdges](<graphs.cjs.md#s-b19bd635a203dc1c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8309e26858db373a"></a>

## selectCallEdges.&lt;anonymous@89:7&gt;

[scripts/code-atlas/graphs.cjs:89](<../../../../../../scripts/code-atlas/graphs.cjs#L89>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [selectCallEdges](<graphs.cjs.md#s-b19bd635a203dc1c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| edge | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- byId.get — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:89](<../../../../../../scripts/code-atlas/graphs.cjs#L89>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9f25dbbe1882d802"></a>

## selectCallEdges.&lt;anonymous@91:16&gt;

[scripts/code-atlas/graphs.cjs:91](<../../../../../../scripts/code-atlas/graphs.cjs#L91>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [selectCallEdges](<graphs.cjs.md#s-b19bd635a203dc1c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: number (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [compare](<analyze.cjs.md#s-0f547bdcda50a0a0>) — [scripts/code-atlas/graphs.cjs:98](<../../../../../../scripts/code-atlas/graphs.cjs#L98>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- byId.get — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:92](<../../../../../../scripts/code-atlas/graphs.cjs#L92>)
- byId.get — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:93](<../../../../../../scripts/code-atlas/graphs.cjs#L93>)
- Number — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:97](<../../../../../../scripts/code-atlas/graphs.cjs#L97>)
- Number — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:97](<../../../../../../scripts/code-atlas/graphs.cjs#L97>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-29b20fec559c7ee9"></a>

## selectCallEdges.&lt;anonymous@133:15&gt;

[scripts/code-atlas/graphs.cjs:133](<../../../../../../scripts/code-atlas/graphs.cjs#L133>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [selectCallEdges](<graphs.cjs.md#s-b19bd635a203dc1c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| edge | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- byId.get — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:134](<../../../../../../scripts/code-atlas/graphs.cjs#L134>)
- byId.get — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:135](<../../../../../../scripts/code-atlas/graphs.cjs#L135>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2d872faa46eb3c8e"></a>

## selectCallEdges.&lt;anonymous@145:13&gt;

[scripts/code-atlas/graphs.cjs:145](<../../../../../../scripts/code-atlas/graphs.cjs#L145>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [selectCallEdges](<graphs.cjs.md#s-b19bd635a203dc1c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: 0 &#124; 1 &#124; -1 (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [compare](<analyze.cjs.md#s-0f547bdcda50a0a0>) — [scripts/code-atlas/graphs.cjs:146](<../../../../../../scripts/code-atlas/graphs.cjs#L146>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- byId.get — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:147](<../../../../../../scripts/code-atlas/graphs.cjs#L147>)
- byId.get — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:147](<../../../../../../scripts/code-atlas/graphs.cjs#L147>)
- byId.get — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:148](<../../../../../../scripts/code-atlas/graphs.cjs#L148>)
- byId.get — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:148](<../../../../../../scripts/code-atlas/graphs.cjs#L148>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-12300607dcf67395"></a>

## callSvg

[scripts/code-atlas/graphs.cjs:167](<../../../../../../scripts/code-atlas/graphs.cjs#L167>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Renders actual symbol pairs as a readable call graph excerpt, linking every node to its complete caller/callee page.

Purpose evidence: jsdoc.

Exported as: callSvg ([scripts/code-atlas/graphs.cjs:1](<../../../../../../scripts/code-atlas/graphs.cjs#L1>)).

Lexical owner: [scripts/code-atlas/graphs.cjs](<graphs.cjs.md#s-f16f4902001a59e6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| data | any | compiler-inferred | required |
| edges | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [render](<render.cjs.md#s-43b33fd13be6d7f9>) — [scripts/code-atlas/render.cjs:621](<../../../../../../scripts/code-atlas/render.cjs#L621>)

Unresolved / external call sites: 6.

- Map — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:168](<../../../../../../scripts/code-atlas/graphs.cjs#L168>)
- data.symbols.map — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:168](<../../../../../../scripts/code-atlas/graphs.cjs#L168>)
- Math.max — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:169](<../../../../../../scripts/code-atlas/graphs.cjs#L169>)
- edges.forEach — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:180](<../../../../../../scripts/code-atlas/graphs.cjs#L180>)
- parts.push — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:192](<../../../../../../scripts/code-atlas/graphs.cjs#L192>)
- parts.join — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:193](<../../../../../../scripts/code-atlas/graphs.cjs#L193>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-03fab79c2cf9f7f5"></a>

## callSvg.&lt;anonymous@168:41&gt;

[scripts/code-atlas/graphs.cjs:168](<../../../../../../scripts/code-atlas/graphs.cjs#L168>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [callSvg](<graphs.cjs.md#s-12300607dcf67395>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-85b908fcfec4fa8c"></a>

## callSvg.&lt;anonymous@180:17&gt;

[scripts/code-atlas/graphs.cjs:180](<../../../../../../scripts/code-atlas/graphs.cjs#L180>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [callSvg](<graphs.cjs.md#s-12300607dcf67395>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| edge | any | compiler-inferred | required |
| i | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- &#91;byId.get(edge.from), byId.get(edge.to)&#93;.forEach — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:182](<../../../../../../scripts/code-atlas/graphs.cjs#L182>)
- byId.get — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:182](<../../../../../../scripts/code-atlas/graphs.cjs#L182>)
- byId.get — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:182](<../../../../../../scripts/code-atlas/graphs.cjs#L182>)
- parts.push — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:188](<../../../../../../scripts/code-atlas/graphs.cjs#L188>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a819eeb1b85505f0"></a>

## callSvg.&lt;anonymous@180:17&gt;.&lt;anonymous@182:54&gt;

[scripts/code-atlas/graphs.cjs:182](<../../../../../../scripts/code-atlas/graphs.cjs#L182>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [callSvg.&lt;anonymous@180:17&gt;](<graphs.cjs.md#s-85b908fcfec4fa8c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |
| side | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [xml](<graphs.cjs.md#s-e5d20f92d62851ad>) — [scripts/code-atlas/graphs.cjs:185](<../../../../../../scripts/code-atlas/graphs.cjs#L185>)
- [xml](<graphs.cjs.md#s-e5d20f92d62851ad>) — [scripts/code-atlas/graphs.cjs:185](<../../../../../../scripts/code-atlas/graphs.cjs#L185>)
- [xml](<graphs.cjs.md#s-e5d20f92d62851ad>) — [scripts/code-atlas/graphs.cjs:185](<../../../../../../scripts/code-atlas/graphs.cjs#L185>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- parts.push — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:184](<../../../../../../scripts/code-atlas/graphs.cjs#L184>)
- symbol.qualifiedName.slice — external-or-dynamic-dispatch; [scripts/code-atlas/graphs.cjs:185](<../../../../../../scripts/code-atlas/graphs.cjs#L185>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
