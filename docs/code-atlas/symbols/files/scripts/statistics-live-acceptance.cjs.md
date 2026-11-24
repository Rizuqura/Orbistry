# scripts/statistics-live-acceptance.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/statistics-live-acceptance.cjs:1](<../../../../../scripts/statistics-live-acceptance.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/statistics-live-acceptance.cjs](<statistics-live-acceptance.cjs.md#s-d3d18e92d35b336f>) (Module)
- [&lt;anonymous@14:2&gt;](<statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>) (ArrowFunction)
- [&lt;anonymous@14:2&gt;.&lt;anonymous@35:23&gt;](<statistics-live-acceptance.cjs.md#s-412d9f3b63bf902c>) (ArrowFunction)
- [&lt;anonymous@14:2&gt;.run](<statistics-live-acceptance.cjs.md#s-d77a43881201c129>) (FunctionDeclaration)
- [&lt;anonymous@14:2&gt;.&lt;anonymous@76:7&gt;](<statistics-live-acceptance.cjs.md#s-f25b343cf57f3c4c>) (ArrowFunction)
- [&lt;anonymous@14:2&gt;.&lt;anonymous@83:7&gt;](<statistics-live-acceptance.cjs.md#s-a3ac0ecfeda4dd7c>) (ArrowFunction)
- [&lt;anonymous@14:2&gt;.&lt;anonymous@91:7&gt;](<statistics-live-acceptance.cjs.md#s-8a33d6bb21e39c46>) (ArrowFunction)
- [&lt;anonymous@14:2&gt;.&lt;anonymous@96:7&gt;](<statistics-live-acceptance.cjs.md#s-70d70955e08d4e19>) (ArrowFunction)
- [&lt;anonymous@14:2&gt;.&lt;anonymous@117:27&gt;](<statistics-live-acceptance.cjs.md#s-c4f80055cf1de1c3>) (ArrowFunction)
- [&lt;anonymous@14:2&gt;.&lt;anonymous@117:27&gt;.&lt;anonymous@118:22&gt;](<statistics-live-acceptance.cjs.md#s-4d9b8f18f60759a1>) (ArrowFunction)
- [&lt;anonymous@14:2&gt;.&lt;anonymous@122:27&gt;](<statistics-live-acceptance.cjs.md#s-650e81469c6c3c43>) (ArrowFunction)
- [&lt;anonymous@14:2&gt;.&lt;anonymous@122:27&gt;.&lt;anonymous@123:22&gt;](<statistics-live-acceptance.cjs.md#s-0349f983b0e450f8>) (ArrowFunction)
- [&lt;anonymous@14:2&gt;.&lt;anonymous@122:27&gt;.&lt;anonymous@123:22&gt;.&lt;anonymous@125:11&gt;](<statistics-live-acceptance.cjs.md#s-da46eba7b3613b25>) (ArrowFunction)
- [&lt;anonymous@14:2&gt;.&lt;anonymous@132:7&gt;](<statistics-live-acceptance.cjs.md#s-4e7f6d8a64045803>) (ArrowFunction)
- [&lt;anonymous@146:12&gt;](<statistics-live-acceptance.cjs.md#s-36da7bac8bfcbf37>) (ArrowFunction)
- [createBound](<statistics-live-acceptance.cjs.md#s-19ae5bdb7060c81b>) (FunctionDeclaration)

<a id="s-d3d18e92d35b336f"></a>

## scripts/statistics-live-acceptance.cjs

[scripts/statistics-live-acceptance.cjs:1](<../../../../../scripts/statistics-live-acceptance.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [&lt;anonymous@14:2&gt;](<statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>) — [scripts/statistics-live-acceptance.cjs:14](<../../../../../scripts/statistics-live-acceptance.cjs#L14>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 10.

- require — module-loader; [scripts/statistics-live-acceptance.cjs:2](<../../../../../scripts/statistics-live-acceptance.cjs#L2>)
- require — module-loader; [scripts/statistics-live-acceptance.cjs:3](<../../../../../scripts/statistics-live-acceptance.cjs#L3>)
- require — module-loader; [scripts/statistics-live-acceptance.cjs:4](<../../../../../scripts/statistics-live-acceptance.cjs#L4>)
- require — module-loader; [scripts/statistics-live-acceptance.cjs:5](<../../../../../scripts/statistics-live-acceptance.cjs#L5>)
- require — module-loader; [scripts/statistics-live-acceptance.cjs:6](<../../../../../scripts/statistics-live-acceptance.cjs#L6>)
- require — module-loader; [scripts/statistics-live-acceptance.cjs:7](<../../../../../scripts/statistics-live-acceptance.cjs#L7>)
- require — module-loader; [scripts/statistics-live-acceptance.cjs:10](<../../../../../scripts/statistics-live-acceptance.cjs#L10>)
- require — module-loader; [scripts/statistics-live-acceptance.cjs:11](<../../../../../scripts/statistics-live-acceptance.cjs#L11>)
- 2 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-771764a0f9e6c967"></a>

## &lt;anonymous@14:2&gt;

[scripts/statistics-live-acceptance.cjs:14](<../../../../../scripts/statistics-live-acceptance.cjs#L14>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/statistics-live-acceptance.cjs](<statistics-live-acceptance.cjs.md#s-d3d18e92d35b336f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OllamaProvider.constructor](<../electron/ai/providers/ollama-provider.cjs.md#s-6a0c68a6d6f2569c>) — [scripts/statistics-live-acceptance.cjs:17](<../../../../../scripts/statistics-live-acceptance.cjs#L17>)
- [ModelRegistry.constructor](<../electron/ai/model-registry.cjs.md#s-776a77db3083bdfd>) — [scripts/statistics-live-acceptance.cjs:18](<../../../../../scripts/statistics-live-acceptance.cjs#L18>)
- [ModelRegistry.save](<../electron/ai/model-registry.cjs.md#s-ad7b27a4e7ba4dc3>) — [scripts/statistics-live-acceptance.cjs:22](<../../../../../scripts/statistics-live-acceptance.cjs#L22>)
- [ChatService.constructor](<../electron/ai/chat/chat-service.cjs.md#s-821f32a93ec900a8>) — [scripts/statistics-live-acceptance.cjs:31](<../../../../../scripts/statistics-live-acceptance.cjs#L31>)
- [textPdf](<fixtures/text-pdf.cjs.md#s-471938689fc127a1>) — [scripts/statistics-live-acceptance.cjs:46](<../../../../../scripts/statistics-live-acceptance.cjs#L46>)
- [addContext](<../electron/domains/universe/station-service.cjs.md#s-8078b0ccaa1169b3>) — [scripts/statistics-live-acceptance.cjs:48](<../../../../../scripts/statistics-live-acceptance.cjs#L48>)
- [&lt;anonymous@14:2&gt;.run](<statistics-live-acceptance.cjs.md#s-d77a43881201c129>) — [scripts/statistics-live-acceptance.cjs:71](<../../../../../scripts/statistics-live-acceptance.cjs#L71>)
- [&lt;anonymous@14:2&gt;.run](<statistics-live-acceptance.cjs.md#s-d77a43881201c129>) — [scripts/statistics-live-acceptance.cjs:86](<../../../../../scripts/statistics-live-acceptance.cjs#L86>)
- [addContext](<../electron/domains/universe/station-service.cjs.md#s-8078b0ccaa1169b3>) — [scripts/statistics-live-acceptance.cjs:105](<../../../../../scripts/statistics-live-acceptance.cjs#L105>)
- [createBound](<statistics-live-acceptance.cjs.md#s-19ae5bdb7060c81b>) — [scripts/statistics-live-acceptance.cjs:106](<../../../../../scripts/statistics-live-acceptance.cjs#L106>)
- [ChatService.run](<../electron/ai/chat/chat-service.cjs.md#s-bed13c7861a5021f>) — [scripts/statistics-live-acceptance.cjs:107](<../../../../../scripts/statistics-live-acceptance.cjs#L107>)

**Called by (statically resolved):**

- [scripts/statistics-live-acceptance.cjs](<statistics-live-acceptance.cjs.md#s-d3d18e92d35b336f>) — [scripts/statistics-live-acceptance.cjs:14](<../../../../../scripts/statistics-live-acceptance.cjs#L14>)

Unresolved / external call sites: 30.

- fs.mkdir — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:15](<../../../../../scripts/statistics-live-acceptance.cjs#L15>)
- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:16](<../../../../../scripts/statistics-live-acceptance.cjs#L16>)
- path.resolve — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:16](<../../../../../scripts/statistics-live-acceptance.cjs#L16>)
- path.join — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:20](<../../../../../scripts/statistics-live-acceptance.cjs#L20>)
- provider.complete.bind — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:34](<../../../../../scripts/statistics-live-acceptance.cjs#L34>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:44](<../../../../../scripts/statistics-live-acceptance.cjs#L44>)
- path.join — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:45](<../../../../../scripts/statistics-live-acceptance.cjs#L45>)
- assert.ok — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:74](<../../../../../scripts/statistics-live-acceptance.cjs#L74>)
- 22 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/statistics-live-acceptance.cjs:14](<../../../../../scripts/statistics-live-acceptance.cjs#L14>) — static-call-site; coverage not established.

<a id="s-412d9f3b63bf902c"></a>

## &lt;anonymous@14:2&gt;.&lt;anonymous@35:23&gt;

[scripts/statistics-live-acceptance.cjs:35](<../../../../../scripts/statistics-live-acceptance.cjs#L35>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@14:2&gt;](<statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- complete — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:36](<../../../../../scripts/statistics-live-acceptance.cjs#L36>)
- console.log — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:37](<../../../../../scripts/statistics-live-acceptance.cjs#L37>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d77a43881201c129"></a>

## &lt;anonymous@14:2&gt;.run

[scripts/statistics-live-acceptance.cjs:49](<../../../../../scripts/statistics-live-acceptance.cjs#L49>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@14:2&gt;](<statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| question | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createBound](<statistics-live-acceptance.cjs.md#s-19ae5bdb7060c81b>) — [scripts/statistics-live-acceptance.cjs:51](<../../../../../scripts/statistics-live-acceptance.cjs#L51>)
- [ChatService.run](<../electron/ai/chat/chat-service.cjs.md#s-bed13c7861a5021f>) — [scripts/statistics-live-acceptance.cjs:52](<../../../../../scripts/statistics-live-acceptance.cjs#L52>)

**Called by (statically resolved):**

- [&lt;anonymous@14:2&gt;](<statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>) — [scripts/statistics-live-acceptance.cjs:71](<../../../../../scripts/statistics-live-acceptance.cjs#L71>)
- [&lt;anonymous@14:2&gt;](<statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>) — [scripts/statistics-live-acceptance.cjs:86](<../../../../../scripts/statistics-live-acceptance.cjs#L86>)

Unresolved / external call sites: 6.

- console.log — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:50](<../../../../../scripts/statistics-live-acceptance.cjs#L50>)
- randomUUID — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:56](<../../../../../scripts/statistics-live-acceptance.cjs#L56>)
- report.push — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:59](<../../../../../scripts/statistics-live-acceptance.cjs#L59>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:64](<../../../../../scripts/statistics-live-acceptance.cjs#L64>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:66](<../../../../../scripts/statistics-live-acceptance.cjs#L66>)
- console.log — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:68](<../../../../../scripts/statistics-live-acceptance.cjs#L68>)

**Related tests / acceptance harnesses:**

- [scripts/statistics-live-acceptance.cjs:71](<../../../../../scripts/statistics-live-acceptance.cjs#L71>) — static-call-site; coverage not established.
- [scripts/statistics-live-acceptance.cjs:86](<../../../../../scripts/statistics-live-acceptance.cjs#L86>) — static-call-site; coverage not established.

<a id="s-f25b343cf57f3c4c"></a>

## &lt;anonymous@14:2&gt;.&lt;anonymous@76:7&gt;

[scripts/statistics-live-acceptance.cjs:76](<../../../../../scripts/statistics-live-acceptance.cjs#L76>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@14:2&gt;](<statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| r | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- &#91;"mean", "average"&#93;.includes — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:77](<../../../../../scripts/statistics-live-acceptance.cjs#L77>)
- Math.abs — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:78](<../../../../../scripts/statistics-live-acceptance.cjs#L78>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a3ac0ecfeda4dd7c"></a>

## &lt;anonymous@14:2&gt;.&lt;anonymous@83:7&gt;

[scripts/statistics-live-acceptance.cjs:83](<../../../../../scripts/statistics-live-acceptance.cjs#L83>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@14:2&gt;](<statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| r | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Math.abs — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:83](<../../../../../scripts/statistics-live-acceptance.cjs#L83>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8a33d6bb21e39c46"></a>

## &lt;anonymous@14:2&gt;.&lt;anonymous@91:7&gt;

[scripts/statistics-live-acceptance.cjs:91](<../../../../../scripts/statistics-live-acceptance.cjs#L91>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@14:2&gt;](<statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>).

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

No direct static call/import association found; coverage unknown.

<a id="s-70d70955e08d4e19"></a>

## &lt;anonymous@14:2&gt;.&lt;anonymous@96:7&gt;

[scripts/statistics-live-acceptance.cjs:96](<../../../../../scripts/statistics-live-acceptance.cjs#L96>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@14:2&gt;](<statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>).

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

No direct static call/import association found; coverage unknown.

<a id="s-c4f80055cf1de1c3"></a>

## &lt;anonymous@14:2&gt;.&lt;anonymous@117:27&gt;

[scripts/statistics-live-acceptance.cjs:117](<../../../../../scripts/statistics-live-acceptance.cjs#L117>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@14:2&gt;](<statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| r | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- r.results.some — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:118](<../../../../../scripts/statistics-live-acceptance.cjs#L118>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4d9b8f18f60759a1"></a>

## &lt;anonymous@14:2&gt;.&lt;anonymous@117:27&gt;.&lt;anonymous@118:22&gt;

[scripts/statistics-live-acceptance.cjs:118](<../../../../../scripts/statistics-live-acceptance.cjs#L118>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@14:2&gt;.&lt;anonymous@117:27&gt;](<statistics-live-acceptance.cjs.md#s-c4f80055cf1de1c3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- row.values.includes — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:118](<../../../../../scripts/statistics-live-acceptance.cjs#L118>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-650e81469c6c3c43"></a>

## &lt;anonymous@14:2&gt;.&lt;anonymous@122:27&gt;

[scripts/statistics-live-acceptance.cjs:122](<../../../../../scripts/statistics-live-acceptance.cjs#L122>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@14:2&gt;](<statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| r | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- r.results.some — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:123](<../../../../../scripts/statistics-live-acceptance.cjs#L123>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0349f983b0e450f8"></a>

## &lt;anonymous@14:2&gt;.&lt;anonymous@122:27&gt;.&lt;anonymous@123:22&gt;

[scripts/statistics-live-acceptance.cjs:123](<../../../../../scripts/statistics-live-acceptance.cjs#L123>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@14:2&gt;.&lt;anonymous@122:27&gt;](<statistics-live-acceptance.cjs.md#s-650e81469c6c3c43>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- row.values.some — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:124](<../../../../../scripts/statistics-live-acceptance.cjs#L124>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-da46eba7b3613b25"></a>

## &lt;anonymous@14:2&gt;.&lt;anonymous@122:27&gt;.&lt;anonymous@123:22&gt;.&lt;anonymous@125:11&gt;

[scripts/statistics-live-acceptance.cjs:125](<../../../../../scripts/statistics-live-acceptance.cjs#L125>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@14:2&gt;.&lt;anonymous@122:27&gt;.&lt;anonymous@123:22&gt;](<statistics-live-acceptance.cjs.md#s-0349f983b0e450f8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| v | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Math.abs — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:125](<../../../../../scripts/statistics-live-acceptance.cjs#L125>)
- Math.sqrt — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:125](<../../../../../scripts/statistics-live-acceptance.cjs#L125>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4e7f6d8a64045803"></a>

## &lt;anonymous@14:2&gt;.&lt;anonymous@132:7&gt;

[scripts/statistics-live-acceptance.cjs:132](<../../../../../scripts/statistics-live-acceptance.cjs#L132>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@14:2&gt;](<statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| r | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- r.columns.indexOf — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:133](<../../../../../scripts/statistics-live-acceptance.cjs#L133>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-36da7bac8bfcbf37"></a>

## &lt;anonymous@146:12&gt;

[scripts/statistics-live-acceptance.cjs:146](<../../../../../scripts/statistics-live-acceptance.cjs#L146>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/statistics-live-acceptance.cjs](<statistics-live-acceptance.cjs.md#s-d3d18e92d35b336f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:147](<../../../../../scripts/statistics-live-acceptance.cjs#L147>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-19ae5bdb7060c81b"></a>

## createBound

[scripts/statistics-live-acceptance.cjs:151](<../../../../../scripts/statistics-live-acceptance.cjs#L151>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/statistics-live-acceptance.cjs](<statistics-live-acceptance.cjs.md#s-d3d18e92d35b336f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| service | any | compiler-inferred | required |
| root | any | compiler-inferred | required |
| _scope | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@14:2&gt;.run](<statistics-live-acceptance.cjs.md#s-d77a43881201c129>) — [scripts/statistics-live-acceptance.cjs:51](<../../../../../scripts/statistics-live-acceptance.cjs#L51>)
- [&lt;anonymous@14:2&gt;](<statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>) — [scripts/statistics-live-acceptance.cjs:106](<../../../../../scripts/statistics-live-acceptance.cjs#L106>)

Unresolved / external call sites: 6.

- service.saveBox — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:152](<../../../../../scripts/statistics-live-acceptance.cjs#L152>)
- require("node:crypto").randomUUID — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:153](<../../../../../scripts/statistics-live-acceptance.cjs#L153>)
- require — module-loader; [scripts/statistics-live-acceptance.cjs:153](<../../../../../scripts/statistics-live-acceptance.cjs#L153>)
- service.create — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:155](<../../../../../scripts/statistics-live-acceptance.cjs#L155>)
- require("node:crypto").randomUUID — external-or-dynamic-dispatch; [scripts/statistics-live-acceptance.cjs:157](<../../../../../scripts/statistics-live-acceptance.cjs#L157>)
- require — module-loader; [scripts/statistics-live-acceptance.cjs:157](<../../../../../scripts/statistics-live-acceptance.cjs#L157>)

**Related tests / acceptance harnesses:**

- [scripts/statistics-live-acceptance.cjs:51](<../../../../../scripts/statistics-live-acceptance.cjs#L51>) — static-call-site; coverage not established.
- [scripts/statistics-live-acceptance.cjs:106](<../../../../../scripts/statistics-live-acceptance.cjs#L106>) — static-call-site; coverage not established.
