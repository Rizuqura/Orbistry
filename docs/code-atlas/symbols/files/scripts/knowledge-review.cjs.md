# scripts/knowledge-review.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/knowledge-review.cjs:1](<../../../../../scripts/knowledge-review.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/knowledge-review.cjs](<knowledge-review.cjs.md#s-bb81751a4f4872b7>) (Module)
- [main](<knowledge-review.cjs.md#s-4e347ac0af67f343>) (FunctionDeclaration)
- [main.&lt;anonymous@47:7&gt;](<knowledge-review.cjs.md#s-779be37e7d52f5dc>) (ArrowFunction)
- [&lt;anonymous@75:14&gt;](<knowledge-review.cjs.md#s-6955c21be4ff9a28>) (ArrowFunction)

<a id="s-bb81751a4f4872b7"></a>

## scripts/knowledge-review.cjs

[scripts/knowledge-review.cjs:1](<../../../../../scripts/knowledge-review.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<knowledge-review.cjs.md#s-4e347ac0af67f343>) — [scripts/knowledge-review.cjs:75](<../../../../../scripts/knowledge-review.cjs#L75>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [scripts/knowledge-review.cjs:2](<../../../../../scripts/knowledge-review.cjs#L2>)
- require — module-loader; [scripts/knowledge-review.cjs:6](<../../../../../scripts/knowledge-review.cjs#L6>)
- require — module-loader; [scripts/knowledge-review.cjs:7](<../../../../../scripts/knowledge-review.cjs#L7>)
- main().catch — external-or-dynamic-dispatch; [scripts/knowledge-review.cjs:75](<../../../../../scripts/knowledge-review.cjs#L75>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4e347ac0af67f343"></a>

## main

[scripts/knowledge-review.cjs:8](<../../../../../scripts/knowledge-review.cjs#L8>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/knowledge-review.cjs](<knowledge-review.cjs.md#s-bb81751a4f4872b7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [KnowledgeStore.constructor](<../electron/ai/knowledge-store.cjs.md#s-50b83f55aadf1e17>) — [scripts/knowledge-review.cjs:24](<../../../../../scripts/knowledge-review.cjs#L24>)
- [KnowledgeStore.checkBoundary](<../electron/ai/knowledge-store.cjs.md#s-f55db66529327881>) — [scripts/knowledge-review.cjs:30](<../../../../../scripts/knowledge-review.cjs#L30>)
- [KnowledgeStore.proposals](<../electron/ai/knowledge-store.cjs.md#s-6b7cd8fa332606a7>) — [scripts/knowledge-review.cjs:33](<../../../../../scripts/knowledge-review.cjs#L33>)
- [KnowledgeStore.latest](<../electron/ai/knowledge-store.cjs.md#s-44a6d29ca92b7075>) — [scripts/knowledge-review.cjs:34](<../../../../../scripts/knowledge-review.cjs#L34>)
- [KnowledgeStore.approve](<../electron/ai/knowledge-store.cjs.md#s-b191e90e59bb2198>) — [scripts/knowledge-review.cjs:37](<../../../../../scripts/knowledge-review.cjs#L37>)
- [readCompletedRun](<../electron/ai/research-knowledge.cjs.md#s-ff24b848b76d8433>) — [scripts/knowledge-review.cjs:50](<../../../../../scripts/knowledge-review.cjs#L50>)
- [hash](<../electron/ai/knowledge-store.cjs.md#s-04f377c7c46efc8d>) — [scripts/knowledge-review.cjs:55](<../../../../../scripts/knowledge-review.cjs#L55>)
- [readResearchSource](<../electron/ai/research-knowledge.cjs.md#s-b8998956bc9beef7>) — [scripts/knowledge-review.cjs:55](<../../../../../scripts/knowledge-review.cjs#L55>)
- [KnowledgeStore.retrieve](<../electron/ai/knowledge-store.cjs.md#s-3704d9e2e744e8a8>) — [scripts/knowledge-review.cjs:63](<../../../../../scripts/knowledge-review.cjs#L63>)

**Called by (statically resolved):**

- [scripts/knowledge-review.cjs](<knowledge-review.cjs.md#s-bb81751a4f4872b7>) — [scripts/knowledge-review.cjs:75](<../../../../../scripts/knowledge-review.cjs#L75>)

Unresolved / external call sites: 13.

- process.argv.slice — external-or-dynamic-dispatch; [scripts/knowledge-review.cjs:9](<../../../../../scripts/knowledge-review.cjs#L9>)
- /^--&#91;a-z-&#93;+$/.test — external-or-dynamic-dispatch; [scripts/knowledge-review.cjs:13](<../../../../../scripts/knowledge-review.cjs#L13>)
- Object.hasOwn — external-or-dynamic-dispatch; [scripts/knowledge-review.cjs:15](<../../../../../scripts/knowledge-review.cjs#L15>)
- Error — external-or-dynamic-dispatch; [scripts/knowledge-review.cjs:17](<../../../../../scripts/knowledge-review.cjs#L17>)
- Error — external-or-dynamic-dispatch; [scripts/knowledge-review.cjs:21](<../../../../../scripts/knowledge-review.cjs#L21>)
- fs.realpath — external-or-dynamic-dispatch; [scripts/knowledge-review.cjs:25](<../../../../../scripts/knowledge-review.cjs#L25>)
- fs.realpath — external-or-dynamic-dispatch; [scripts/knowledge-review.cjs:26](<../../../../../scripts/knowledge-review.cjs#L26>)
- Number — external-or-dynamic-dispatch; [scripts/knowledge-review.cjs:39](<../../../../../scripts/knowledge-review.cjs#L39>)
- 5 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-779be37e7d52f5dc"></a>

## main.&lt;anonymous@47:7&gt;

[scripts/knowledge-review.cjs:47](<../../../../../scripts/knowledge-review.cjs#L47>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<knowledge-review.cjs.md#s-4e347ac0af67f343>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readResearchSource](<../electron/ai/research-knowledge.cjs.md#s-b8998956bc9beef7>) — [scripts/knowledge-review.cjs:47](<../../../../../scripts/knowledge-review.cjs#L47>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6955c21be4ff9a28"></a>

## &lt;anonymous@75:14&gt;

[scripts/knowledge-review.cjs:75](<../../../../../scripts/knowledge-review.cjs#L75>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/knowledge-review.cjs](<knowledge-review.cjs.md#s-bb81751a4f4872b7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/knowledge-review.cjs:76](<../../../../../scripts/knowledge-review.cjs#L76>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
