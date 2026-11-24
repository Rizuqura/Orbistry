# features/chat/chat-markdown.tsx: symbols

[Atlas](<../../../../README.md>) / [Conversation presentation](<../../../../modules/portal-chat.md>) / [features/chat/chat-markdown.tsx:1](<../../../../../../features/chat/chat-markdown.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/chat/chat-markdown.tsx](<chat-markdown.tsx.md#s-0ee0a0d1a6c65cf6>) (Module)
- [Inline](<chat-markdown.tsx.md#s-62a2d270bd5645a2>) (FunctionDeclaration)
- [Inline.&lt;anonymous@7:30&gt;](<chat-markdown.tsx.md#s-0a06ab709b7f9a1d>) (ArrowFunction)
- [ChatMarkdown](<chat-markdown.tsx.md#s-7cc4e241b2b93021>) (VariableDeclaration)
- [ChatMarkdown.ChatMarkdown](<chat-markdown.tsx.md#s-0cfe1dd9ffe16a58>) (FunctionExpression)
- [ChatMarkdown.ChatMarkdown.&lt;anonymous@45:36&gt;](<chat-markdown.tsx.md#s-15d1802f918f961d>) (ArrowFunction)
- [ChatMarkdown.ChatMarkdown.&lt;anonymous@45:36&gt;.&lt;anonymous@63:41&gt;](<chat-markdown.tsx.md#s-e54af39b86ded6f8>) (ArrowFunction)
- [ChatMarkdown.ChatMarkdown.&lt;anonymous@45:36&gt;.&lt;anonymous@82:37&gt;](<chat-markdown.tsx.md#s-bc272da5fa57849f>) (ArrowFunction)
- [ChatMarkdown.ChatMarkdown.&lt;anonymous@45:36&gt;.&lt;anonymous@90:35&gt;](<chat-markdown.tsx.md#s-4a6122f1e79a5bae>) (ArrowFunction)
- [ChatMarkdown.ChatMarkdown.&lt;anonymous@45:36&gt;.&lt;anonymous@90:35&gt;.&lt;anonymous@92:32&gt;](<chat-markdown.tsx.md#s-1534dda0c7a0ae2d>) (ArrowFunction)

<a id="s-0ee0a0d1a6c65cf6"></a>

## features/chat/chat-markdown.tsx

[features/chat/chat-markdown.tsx:1](<../../../../../../features/chat/chat-markdown.tsx#L1>) · Module · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-62a2d270bd5645a2"></a>

## Inline

[features/chat/chat-markdown.tsx:3](<../../../../../../features/chat/chat-markdown.tsx#L3>) · FunctionDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/chat/chat-markdown.tsx](<chat-markdown.tsx.md#s-0ee0a0d1a6c65cf6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { text, depth = 0 } | { text: string; depth?: number } | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [inlineParts](<markdown-format.ts.md#s-55b079f7f27f6ace>) — [features/chat/chat-markdown.tsx:7](<../../../../../../features/chat/chat-markdown.tsx#L7>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- inlineParts(text).map — external-or-dynamic-dispatch; [features/chat/chat-markdown.tsx:7](<../../../../../../features/chat/chat-markdown.tsx#L7>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0a06ab709b7f9a1d"></a>

## Inline.&lt;anonymous@7:30&gt;

[features/chat/chat-markdown.tsx:7](<../../../../../../features/chat/chat-markdown.tsx#L7>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [Inline](<chat-markdown.tsx.md#s-62a2d270bd5645a2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| part | any | compiler-inferred | required |
| i | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7cc4e241b2b93021"></a>

## ChatMarkdown

[features/chat/chat-markdown.tsx:38](<../../../../../../features/chat/chat-markdown.tsx#L38>) · VariableDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: ChatMarkdown ([features/chat/chat-markdown.tsx:1](<../../../../../../features/chat/chat-markdown.tsx#L1>)).

Lexical owner: [features/chat/chat-markdown.tsx](<chat-markdown.tsx.md#s-0ee0a0d1a6c65cf6>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- memo — external-or-dynamic-dispatch; [features/chat/chat-markdown.tsx:38](<../../../../../../features/chat/chat-markdown.tsx#L38>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0cfe1dd9ffe16a58"></a>

## ChatMarkdown.ChatMarkdown

[features/chat/chat-markdown.tsx:38](<../../../../../../features/chat/chat-markdown.tsx#L38>) · FunctionExpression · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ChatMarkdown](<chat-markdown.tsx.md#s-7cc4e241b2b93021>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   content, } | { content: string; } | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [markdownBlocks](<markdown-format.ts.md#s-95d32924637410f2>) — [features/chat/chat-markdown.tsx:45](<../../../../../../features/chat/chat-markdown.tsx#L45>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- markdownBlocks(content).map — external-or-dynamic-dispatch; [features/chat/chat-markdown.tsx:45](<../../../../../../features/chat/chat-markdown.tsx#L45>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-15d1802f918f961d"></a>

## ChatMarkdown.ChatMarkdown.&lt;anonymous@45:36&gt;

[features/chat/chat-markdown.tsx:45](<../../../../../../features/chat/chat-markdown.tsx#L45>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ChatMarkdown.ChatMarkdown](<chat-markdown.tsx.md#s-0cfe1dd9ffe16a58>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| block | any | compiler-inferred | required |
| i | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- block.items.map — external-or-dynamic-dispatch; [features/chat/chat-markdown.tsx:63](<../../../../../../features/chat/chat-markdown.tsx#L63>)
- block.head.map — external-or-dynamic-dispatch; [features/chat/chat-markdown.tsx:82](<../../../../../../features/chat/chat-markdown.tsx#L82>)
- block.rows.map — external-or-dynamic-dispatch; [features/chat/chat-markdown.tsx:90](<../../../../../../features/chat/chat-markdown.tsx#L90>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e54af39b86ded6f8"></a>

## ChatMarkdown.ChatMarkdown.&lt;anonymous@45:36&gt;.&lt;anonymous@63:41&gt;

[features/chat/chat-markdown.tsx:63](<../../../../../../features/chat/chat-markdown.tsx#L63>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ChatMarkdown.ChatMarkdown.&lt;anonymous@45:36&gt;](<chat-markdown.tsx.md#s-15d1802f918f961d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |
| j | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bc272da5fa57849f"></a>

## ChatMarkdown.ChatMarkdown.&lt;anonymous@45:36&gt;.&lt;anonymous@82:37&gt;

[features/chat/chat-markdown.tsx:82](<../../../../../../features/chat/chat-markdown.tsx#L82>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ChatMarkdown.ChatMarkdown.&lt;anonymous@45:36&gt;](<chat-markdown.tsx.md#s-15d1802f918f961d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| cell | any | compiler-inferred | required |
| j | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4a6122f1e79a5bae"></a>

## ChatMarkdown.ChatMarkdown.&lt;anonymous@45:36&gt;.&lt;anonymous@90:35&gt;

[features/chat/chat-markdown.tsx:90](<../../../../../../features/chat/chat-markdown.tsx#L90>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ChatMarkdown.ChatMarkdown.&lt;anonymous@45:36&gt;](<chat-markdown.tsx.md#s-15d1802f918f961d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |
| j | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- row.map — external-or-dynamic-dispatch; [features/chat/chat-markdown.tsx:92](<../../../../../../features/chat/chat-markdown.tsx#L92>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1534dda0c7a0ae2d"></a>

## ChatMarkdown.ChatMarkdown.&lt;anonymous@45:36&gt;.&lt;anonymous@90:35&gt;.&lt;anonymous@92:32&gt;

[features/chat/chat-markdown.tsx:92](<../../../../../../features/chat/chat-markdown.tsx#L92>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ChatMarkdown.ChatMarkdown.&lt;anonymous@45:36&gt;.&lt;anonymous@90:35&gt;](<chat-markdown.tsx.md#s-4a6122f1e79a5bae>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| cell | any | compiler-inferred | required |
| k | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
