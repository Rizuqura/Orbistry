# features/chat/markdown-format.ts: symbols

[Atlas](<../../../../README.md>) / [Conversation presentation](<../../../../modules/portal-chat.md>) / [features/chat/markdown-format.ts:1](<../../../../../../features/chat/markdown-format.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/chat/markdown-format.ts](<markdown-format.ts.md#s-a0016a59795fc7ce>) (Module)
- [InlinePart](<markdown-format.ts.md#s-c816eebfd6b7d76b>) (TypeAliasDeclaration)
- [safeHref](<markdown-format.ts.md#s-b1bd256ff188be15>) (FunctionDeclaration)
- [inlineParts](<markdown-format.ts.md#s-55b079f7f27f6ace>) (FunctionDeclaration)
- [MarkdownBlock](<markdown-format.ts.md#s-6400984144e86cc5>) (TypeAliasDeclaration)
- [cells](<markdown-format.ts.md#s-549dd64ed5b0f8cd>) (FunctionDeclaration)
- [divider](<markdown-format.ts.md#s-115f2defbc3dbbbd>) (ArrowFunction)
- [listItem](<markdown-format.ts.md#s-cc74939c91e10ff2>) (ArrowFunction)
- [startsBlock](<markdown-format.ts.md#s-9397900c4cf5cda4>) (ArrowFunction)
- [markdownBlocks](<markdown-format.ts.md#s-95d32924637410f2>) (FunctionDeclaration)
- [markdownBlocks.&lt;anonymous@164:20&gt;](<markdown-format.ts.md#s-2de275ea9b593e67>) (ArrowFunction)

<a id="s-a0016a59795fc7ce"></a>

## features/chat/markdown-format.ts

[features/chat/markdown-format.ts:1](<../../../../../../features/chat/markdown-format.ts#L1>) · Module · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/chat/markdown-format.test.cjs:7](<../../../../../../features/chat/markdown-format.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-c816eebfd6b7d76b"></a>

## InlinePart

[features/chat/markdown-format.ts:1](<../../../../../../features/chat/markdown-format.ts#L1>) · TypeAliasDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: InlinePart ([features/chat/markdown-format.ts:1](<../../../../../../features/chat/markdown-format.ts#L1>)).

Lexical owner: [features/chat/markdown-format.ts](<markdown-format.ts.md#s-a0016a59795fc7ce>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/chat/markdown-format.test.cjs:7](<../../../../../../features/chat/markdown-format.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-b1bd256ff188be15"></a>

## safeHref

[features/chat/markdown-format.ts:4](<../../../../../../features/chat/markdown-format.ts#L4>) · FunctionDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: safeHref ([features/chat/markdown-format.ts:1](<../../../../../../features/chat/markdown-format.ts#L1>)).

Lexical owner: [features/chat/markdown-format.ts](<markdown-format.ts.md#s-a0016a59795fc7ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | string | annotation | required |

Returns: string &#124; null (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@49:90&gt;](<markdown-format.test.cjs.md#s-ab1859de9567205d>) — [features/chat/markdown-format.test.cjs:56](<../../../../../../features/chat/markdown-format.test.cjs#L56>)
- [&lt;anonymous@49:90&gt;](<markdown-format.test.cjs.md#s-ab1859de9567205d>) — [features/chat/markdown-format.test.cjs:58](<../../../../../../features/chat/markdown-format.test.cjs#L58>)
- [inlineParts](<markdown-format.ts.md#s-55b079f7f27f6ace>) — [features/chat/markdown-format.ts:22](<../../../../../../features/chat/markdown-format.ts#L22>)

Unresolved / external call sites: 2.

- /&#91;\\u0000-\\u0020\\u007f&#93;/u.test — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:5](<../../../../../../features/chat/markdown-format.ts#L5>)
- URL — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:7](<../../../../../../features/chat/markdown-format.ts#L7>)

**Related tests / acceptance harnesses:**

- [features/chat/markdown-format.test.cjs:56](<../../../../../../features/chat/markdown-format.test.cjs#L56>) — static-call-site; coverage not established.
- [features/chat/markdown-format.test.cjs:58](<../../../../../../features/chat/markdown-format.test.cjs#L58>) — static-call-site; coverage not established.
- [features/chat/markdown-format.test.cjs:7](<../../../../../../features/chat/markdown-format.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-55b079f7f27f6ace"></a>

## inlineParts

[features/chat/markdown-format.ts:13](<../../../../../../features/chat/markdown-format.ts#L13>) · FunctionDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: inlineParts ([features/chat/markdown-format.ts:1](<../../../../../../features/chat/markdown-format.ts#L1>)).

Lexical owner: [features/chat/markdown-format.ts](<markdown-format.ts.md#s-a0016a59795fc7ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | string | annotation | required |

Returns: InlinePart&#91;&#93; (annotation). Implementation present.

**Calls (statically resolved):**

- [safeHref](<markdown-format.ts.md#s-b1bd256ff188be15>) — [features/chat/markdown-format.ts:22](<../../../../../../features/chat/markdown-format.ts#L22>)

**Called by (statically resolved):**

- [Inline](<chat-markdown.tsx.md#s-62a2d270bd5645a2>) — [features/chat/chat-markdown.tsx:7](<../../../../../../features/chat/chat-markdown.tsx#L7>)
- [&lt;anonymous@8:119&gt;](<markdown-format.test.cjs.md#s-d6e8da75103b1ae9>) — [features/chat/markdown-format.test.cjs:17](<../../../../../../features/chat/markdown-format.test.cjs#L17>)
- [&lt;anonymous@8:119&gt;](<markdown-format.test.cjs.md#s-d6e8da75103b1ae9>) — [features/chat/markdown-format.test.cjs:23](<../../../../../../features/chat/markdown-format.test.cjs#L23>)
- [&lt;anonymous@8:119&gt;](<markdown-format.test.cjs.md#s-d6e8da75103b1ae9>) — [features/chat/markdown-format.test.cjs:29](<../../../../../../features/chat/markdown-format.test.cjs#L29>)
- [&lt;anonymous@49:90&gt;](<markdown-format.test.cjs.md#s-ab1859de9567205d>) — [features/chat/markdown-format.test.cjs:62](<../../../../../../features/chat/markdown-format.test.cjs#L62>)
- [&lt;anonymous@49:90&gt;](<markdown-format.test.cjs.md#s-ab1859de9567205d>) — [features/chat/markdown-format.test.cjs:65](<../../../../../../features/chat/markdown-format.test.cjs#L65>)

Unresolved / external call sites: 13.

- value.matchAll — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:18](<../../../../../../features/chat/markdown-format.ts#L18>)
- parts.push — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:20](<../../../../../../features/chat/markdown-format.ts#L20>)
- value.slice — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:20](<../../../../../../features/chat/markdown-format.ts#L20>)
- parts.push — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:23](<../../../../../../features/chat/markdown-format.ts#L23>)
- match&#91;1&#93;.startsWith — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:24](<../../../../../../features/chat/markdown-format.ts#L24>)
- inner.trim — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:36](<../../../../../../features/chat/markdown-format.ts#L36>)
- match&#91;0&#93;.startsWith — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:37](<../../../../../../features/chat/markdown-format.ts#L37>)
- /&#91;\\p{L}\\p{N}&#93;/u.test — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:38](<../../../../../../features/chat/markdown-format.ts#L38>)
- 5 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [features/chat/markdown-format.test.cjs:17](<../../../../../../features/chat/markdown-format.test.cjs#L17>) — static-call-site; coverage not established.
- [features/chat/markdown-format.test.cjs:23](<../../../../../../features/chat/markdown-format.test.cjs#L23>) — static-call-site; coverage not established.
- [features/chat/markdown-format.test.cjs:29](<../../../../../../features/chat/markdown-format.test.cjs#L29>) — static-call-site; coverage not established.
- [features/chat/markdown-format.test.cjs:62](<../../../../../../features/chat/markdown-format.test.cjs#L62>) — static-call-site; coverage not established.
- [features/chat/markdown-format.test.cjs:65](<../../../../../../features/chat/markdown-format.test.cjs#L65>) — static-call-site; coverage not established.
- [features/chat/markdown-format.test.cjs:7](<../../../../../../features/chat/markdown-format.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-6400984144e86cc5"></a>

## MarkdownBlock

[features/chat/markdown-format.ts:69](<../../../../../../features/chat/markdown-format.ts#L69>) · TypeAliasDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: MarkdownBlock ([features/chat/markdown-format.ts:1](<../../../../../../features/chat/markdown-format.ts#L1>)).

Lexical owner: [features/chat/markdown-format.ts](<markdown-format.ts.md#s-a0016a59795fc7ce>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/chat/markdown-format.test.cjs:7](<../../../../../../features/chat/markdown-format.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-549dd64ed5b0f8cd"></a>

## cells

[features/chat/markdown-format.ts:76](<../../../../../../features/chat/markdown-format.ts#L76>) · FunctionDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/chat/markdown-format.ts](<markdown-format.ts.md#s-a0016a59795fc7ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| line | string | annotation | required |

Returns: string&#91;&#93; (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [markdownBlocks](<markdown-format.ts.md#s-95d32924637410f2>) — [features/chat/markdown-format.ts:152](<../../../../../../features/chat/markdown-format.ts#L152>)
- [markdownBlocks](<markdown-format.ts.md#s-95d32924637410f2>) — [features/chat/markdown-format.ts:160](<../../../../../../features/chat/markdown-format.ts#L160>)

Unresolved / external call sites: 9.

- line.trim().replace — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:80](<../../../../../../features/chat/markdown-format.ts#L80>)
- line.trim — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:80](<../../../../../../features/chat/markdown-format.ts#L80>)
- content.endsWith — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:81](<../../../../../../features/chat/markdown-format.ts#L81>)
- content.endsWith — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:81](<../../../../../../features/chat/markdown-format.ts#L81>)
- content.slice — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:82](<../../../../../../features/chat/markdown-format.ts#L82>)
- result.push — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:92](<../../../../../../features/chat/markdown-format.ts#L92>)
- current.trim — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:92](<../../../../../../features/chat/markdown-format.ts#L92>)
- result.push — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:96](<../../../../../../features/chat/markdown-format.ts#L96>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [features/chat/markdown-format.test.cjs:7](<../../../../../../features/chat/markdown-format.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-115f2defbc3dbbbd"></a>

## divider

[features/chat/markdown-format.ts:99](<../../../../../../features/chat/markdown-format.ts#L99>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/chat/markdown-format.ts](<markdown-format.ts.md#s-a0016a59795fc7ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| line | string | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [markdownBlocks](<markdown-format.ts.md#s-95d32924637410f2>) — [features/chat/markdown-format.ts:151](<../../../../../../features/chat/markdown-format.ts#L151>)
- [markdownBlocks](<markdown-format.ts.md#s-95d32924637410f2>) — [features/chat/markdown-format.ts:208](<../../../../../../features/chat/markdown-format.ts#L208>)

Unresolved / external call sites: 2.

- /^\\&#124;?\\s*:?-{3,}:?\\s*(?:\\&#124;\\s*:?-{3,}:?\\s*)+\\&#124;?$/.test — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:100](<../../../../../../features/chat/markdown-format.ts#L100>)
- line.trim — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:100](<../../../../../../features/chat/markdown-format.ts#L100>)

**Related tests / acceptance harnesses:**

- [features/chat/markdown-format.test.cjs:7](<../../../../../../features/chat/markdown-format.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-cc74939c91e10ff2"></a>

## listItem

[features/chat/markdown-format.ts:101](<../../../../../../features/chat/markdown-format.ts#L101>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/chat/markdown-format.ts](<markdown-format.ts.md#s-a0016a59795fc7ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| line | string | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [markdownBlocks](<markdown-format.ts.md#s-95d32924637410f2>) — [features/chat/markdown-format.ts:175](<../../../../../../features/chat/markdown-format.ts#L175>)
- [markdownBlocks](<markdown-format.ts.md#s-95d32924637410f2>) — [features/chat/markdown-format.ts:182](<../../../../../../features/chat/markdown-format.ts#L182>)
- [markdownBlocks](<markdown-format.ts.md#s-95d32924637410f2>) — [features/chat/markdown-format.ts:190](<../../../../../../features/chat/markdown-format.ts#L190>)

Unresolved / external call sites: 1.

- line.match — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:102](<../../../../../../features/chat/markdown-format.ts#L102>)

**Related tests / acceptance harnesses:**

- [features/chat/markdown-format.test.cjs:7](<../../../../../../features/chat/markdown-format.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-9397900c4cf5cda4"></a>

## startsBlock

[features/chat/markdown-format.ts:103](<../../../../../../features/chat/markdown-format.ts#L103>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/chat/markdown-format.ts](<markdown-format.ts.md#s-a0016a59795fc7ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| line | string | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [markdownBlocks](<markdown-format.ts.md#s-95d32924637410f2>) — [features/chat/markdown-format.ts:207](<../../../../../../features/chat/markdown-format.ts#L207>)

Unresolved / external call sites: 1.

- /^\\s{0,3}(?:#{1,6}\\s&#124;&#96;{3,}&#124;~{3,}&#124;&gt;\\s?&#124;&#91;-+*&#93;\\s&#124;\\d{1,9}&#91;.)&#93;\\s)/.test — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:104](<../../../../../../features/chat/markdown-format.ts#L104>)

**Related tests / acceptance harnesses:**

- [features/chat/markdown-format.test.cjs:7](<../../../../../../features/chat/markdown-format.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-95d32924637410f2"></a>

## markdownBlocks

[features/chat/markdown-format.ts:105](<../../../../../../features/chat/markdown-format.ts#L105>) · FunctionDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: markdownBlocks ([features/chat/markdown-format.ts:1](<../../../../../../features/chat/markdown-format.ts#L1>)).

Lexical owner: [features/chat/markdown-format.ts](<markdown-format.ts.md#s-a0016a59795fc7ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| content | string | annotation | required |

Returns: MarkdownBlock&#91;&#93; (annotation). Implementation present.

**Calls (statically resolved):**

- [divider](<markdown-format.ts.md#s-115f2defbc3dbbbd>) — [features/chat/markdown-format.ts:151](<../../../../../../features/chat/markdown-format.ts#L151>)
- [cells](<markdown-format.ts.md#s-549dd64ed5b0f8cd>) — [features/chat/markdown-format.ts:152](<../../../../../../features/chat/markdown-format.ts#L152>)
- [cells](<markdown-format.ts.md#s-549dd64ed5b0f8cd>) — [features/chat/markdown-format.ts:160](<../../../../../../features/chat/markdown-format.ts#L160>)
- [listItem](<markdown-format.ts.md#s-cc74939c91e10ff2>) — [features/chat/markdown-format.ts:175](<../../../../../../features/chat/markdown-format.ts#L175>)
- [listItem](<markdown-format.ts.md#s-cc74939c91e10ff2>) — [features/chat/markdown-format.ts:182](<../../../../../../features/chat/markdown-format.ts#L182>)
- [listItem](<markdown-format.ts.md#s-cc74939c91e10ff2>) — [features/chat/markdown-format.ts:190](<../../../../../../features/chat/markdown-format.ts#L190>)
- [startsBlock](<markdown-format.ts.md#s-9397900c4cf5cda4>) — [features/chat/markdown-format.ts:207](<../../../../../../features/chat/markdown-format.ts#L207>)
- [divider](<markdown-format.ts.md#s-115f2defbc3dbbbd>) — [features/chat/markdown-format.ts:208](<../../../../../../features/chat/markdown-format.ts#L208>)

**Called by (statically resolved):**

- [ChatMarkdown.ChatMarkdown](<chat-markdown.tsx.md#s-0cfe1dd9ffe16a58>) — [features/chat/chat-markdown.tsx:45](<../../../../../../features/chat/chat-markdown.tsx#L45>)
- [&lt;anonymous@8:119&gt;](<markdown-format.test.cjs.md#s-d6e8da75103b1ae9>) — [features/chat/markdown-format.test.cjs:9](<../../../../../../features/chat/markdown-format.test.cjs#L9>)
- [&lt;anonymous@35:93&gt;](<markdown-format.test.cjs.md#s-903dcf7c97cc4580>) — [features/chat/markdown-format.test.cjs:36](<../../../../../../features/chat/markdown-format.test.cjs#L36>)
- [&lt;anonymous@35:93&gt;](<markdown-format.test.cjs.md#s-903dcf7c97cc4580>) — [features/chat/markdown-format.test.cjs:45](<../../../../../../features/chat/markdown-format.test.cjs#L45>)
- [&lt;anonymous@35:93&gt;](<markdown-format.test.cjs.md#s-903dcf7c97cc4580>) — [features/chat/markdown-format.test.cjs:47](<../../../../../../features/chat/markdown-format.test.cjs#L47>)
- [&lt;anonymous@49:90&gt;](<markdown-format.test.cjs.md#s-ab1859de9567205d>) — [features/chat/markdown-format.test.cjs:67](<../../../../../../features/chat/markdown-format.test.cjs#L67>)

Unresolved / external call sites: 40.

- content.replaceAll("\\r\\n", "\\n").split — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:106](<../../../../../../features/chat/markdown-format.ts#L106>)
- content.replaceAll — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:106](<../../../../../../features/chat/markdown-format.ts#L106>)
- line.trim — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:110](<../../../../../../features/chat/markdown-format.ts#L110>)
- line.match — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:114](<../../../../../../features/chat/markdown-format.ts#L114>)
- new RegExp(&#96;^\\\\s{0,3}${fence&#91;1&#93;&#91;0&#93;}{${fence&#91;1&#93;.length},}\\\\s*$&#96;).test — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:120](<../../../../../../features/chat/markdown-format.ts#L120>)
- RegExp — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:120](<../../../../../../features/chat/markdown-format.ts#L120>)
- code.push — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:124](<../../../../../../features/chat/markdown-format.ts#L124>)
- blocks.push — external-or-dynamic-dispatch; [features/chat/markdown-format.ts:126](<../../../../../../features/chat/markdown-format.ts#L126>)
- 32 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [features/chat/markdown-format.test.cjs:9](<../../../../../../features/chat/markdown-format.test.cjs#L9>) — static-call-site; coverage not established.
- [features/chat/markdown-format.test.cjs:36](<../../../../../../features/chat/markdown-format.test.cjs#L36>) — static-call-site; coverage not established.
- [features/chat/markdown-format.test.cjs:45](<../../../../../../features/chat/markdown-format.test.cjs#L45>) — static-call-site; coverage not established.
- [features/chat/markdown-format.test.cjs:47](<../../../../../../features/chat/markdown-format.test.cjs#L47>) — static-call-site; coverage not established.
- [features/chat/markdown-format.test.cjs:67](<../../../../../../features/chat/markdown-format.test.cjs#L67>) — static-call-site; coverage not established.
- [features/chat/markdown-format.test.cjs:7](<../../../../../../features/chat/markdown-format.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-2de275ea9b593e67"></a>

## markdownBlocks.&lt;anonymous@164:20&gt;

[features/chat/markdown-format.ts:164](<../../../../../../features/chat/markdown-format.ts#L164>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [markdownBlocks](<markdown-format.ts.md#s-95d32924637410f2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/chat/markdown-format.test.cjs:7](<../../../../../../features/chat/markdown-format.test.cjs#L7>) — file-import-only; coverage not established.
