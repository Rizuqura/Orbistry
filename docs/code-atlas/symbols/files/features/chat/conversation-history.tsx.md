# features/chat/conversation-history.tsx: symbols

[Atlas](<../../../../README.md>) / [Conversation presentation](<../../../../modules/portal-chat.md>) / [features/chat/conversation-history.tsx:1](<../../../../../../features/chat/conversation-history.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/chat/conversation-history.tsx](<conversation-history.tsx.md#s-cf5589fb4953d43a>) (Module)
- [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>) (FunctionDeclaration)
- [ConversationHistory.&lt;anonymous@18:14&gt;](<conversation-history.tsx.md#s-38f3eacfa413035c>) (FunctionType)
- [ConversationHistory.&lt;anonymous@20:21&gt;](<conversation-history.tsx.md#s-42d04192f2dccb14>) (FunctionType)
- [ConversationHistory.&lt;anonymous@24:5&gt;](<conversation-history.tsx.md#s-7a7e3dddef1624bf>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@42:13&gt;](<conversation-history.tsx.md#s-4dcd2f4bff718b71>) (ArrowFunction)
- [ConversationHistory.boxName](<conversation-history.tsx.md#s-6cb906d401dd232c>) (ArrowFunction)
- [ConversationHistory.boxName.&lt;anonymous@62:28&gt;](<conversation-history.tsx.md#s-c19a84251b318e7e>) (ArrowFunction)
- [ConversationHistory.startRename](<conversation-history.tsx.md#s-0f3f5ae8974dde9a>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@78:22&gt;](<conversation-history.tsx.md#s-7fb4e76380366d23>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@95:52&gt;](<conversation-history.tsx.md#s-68273f9be8edf73d>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@121:13&gt;](<conversation-history.tsx.md#s-26ff943df5f12c93>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@125:24&gt;](<conversation-history.tsx.md#s-4943ad6e2ad05b41>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@144:25&gt;](<conversation-history.tsx.md#s-dd56a4d2c53438cd>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@161:19&gt;](<conversation-history.tsx.md#s-98731f3a64ddb64f>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@167:38&gt;](<conversation-history.tsx.md#s-e7cdb84334923636>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@176:22&gt;](<conversation-history.tsx.md#s-5aef22f496815211>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@197:24&gt;](<conversation-history.tsx.md#s-0dd8346bc6335511>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@223:21&gt;](<conversation-history.tsx.md#s-e0a46d5208370d79>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@244:25&gt;](<conversation-history.tsx.md#s-2608c5db6b986699>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@245:26&gt;](<conversation-history.tsx.md#s-22f57c9c5fcc926f>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@254:42&gt;](<conversation-history.tsx.md#s-f996ba1fcfa9783b>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@265:23&gt;](<conversation-history.tsx.md#s-e60fbb597144ba7d>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@271:24&gt;](<conversation-history.tsx.md#s-5409742ae935f6d0>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@285:21&gt;](<conversation-history.tsx.md#s-bb6ce5e0a12d7200>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@286:18&gt;](<conversation-history.tsx.md#s-7de7de645db1402f>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@286:18&gt;.&lt;anonymous@301:28&gt;](<conversation-history.tsx.md#s-b63895ac7724dcad>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@286:18&gt;.&lt;anonymous@316:28&gt;](<conversation-history.tsx.md#s-61d0907a2238d18b>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@286:18&gt;.&lt;anonymous@323:28&gt;](<conversation-history.tsx.md#s-1859bf9c111e839b>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@343:19&gt;](<conversation-history.tsx.md#s-f6fd2be46e956c99>) (ArrowFunction)
- [ConversationHistory.&lt;anonymous@357:22&gt;](<conversation-history.tsx.md#s-386f40fb45bd4c6b>) (ArrowFunction)

<a id="s-cf5589fb4953d43a"></a>

## features/chat/conversation-history.tsx

[features/chat/conversation-history.tsx:1](<../../../../../../features/chat/conversation-history.tsx#L1>) · Module · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6d7ac1ac2fcf1950"></a>

## ConversationHistory

[features/chat/conversation-history.tsx:11](<../../../../../../features/chat/conversation-history.tsx#L11>) · FunctionDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: ConversationHistory ([features/chat/conversation-history.tsx:1](<../../../../../../features/chat/conversation-history.tsx#L1>)).

Lexical owner: [features/chat/conversation-history.tsx](<conversation-history.tsx.md#s-cf5589fb4953d43a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   chat,   onCompose,   workspace = false,   onManageContext, } | { chat: ChatController; onCompose: () =&gt; void; workspace?: boolean; onManageContext?: () =&gt; void; } | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [useConfirmation](<../dialogs/use-confirmation.tsx.md#s-68cb241f4bfc872f>) — [features/chat/conversation-history.tsx:41](<../../../../../../features/chat/conversation-history.tsx#L41>)
- [conversationSourceLabel](<source-label.ts.md#s-af86551cff8d3283>) — [features/chat/conversation-history.tsx:108](<../../../../../../features/chat/conversation-history.tsx#L108>)
- [constructionSourceLabel](<source-label.ts.md#s-b8706325f2eec869>) — [features/chat/conversation-history.tsx:116](<../../../../../../features/chat/conversation-history.tsx#L116>)
- [ConversationHistory.boxName](<conversation-history.tsx.md#s-6cb906d401dd232c>) — [features/chat/conversation-history.tsx:194](<../../../../../../features/chat/conversation-history.tsx#L194>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 20.

- chat.conversations.filter — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:23](<../../../../../../features/chat/conversation-history.tsx#L23>)
- useState — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:26](<../../../../../../features/chat/conversation-history.tsx#L26>)
- useState — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:27](<../../../../../../features/chat/conversation-history.tsx#L27>)
- useState — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:28](<../../../../../../features/chat/conversation-history.tsx#L28>)
- useState — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:29](<../../../../../../features/chat/conversation-history.tsx#L29>)
- useState — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:31](<../../../../../../features/chat/conversation-history.tsx#L31>)
- useState — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:34](<../../../../../../features/chat/conversation-history.tsx#L34>)
- useState — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:35](<../../../../../../features/chat/conversation-history.tsx#L35>)
- 12 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-38f3eacfa413035c"></a>

## ConversationHistory.&lt;anonymous@18:14&gt;

[features/chat/conversation-history.tsx:18](<../../../../../../features/chat/conversation-history.tsx#L18>) · FunctionType · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-42d04192f2dccb14"></a>

## ConversationHistory.&lt;anonymous@20:21&gt;

[features/chat/conversation-history.tsx:20](<../../../../../../features/chat/conversation-history.tsx#L20>) · FunctionType · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7a7e3dddef1624bf"></a>

## ConversationHistory.&lt;anonymous@24:5&gt;

[features/chat/conversation-history.tsx:24](<../../../../../../features/chat/conversation-history.tsx#L24>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| c | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4dcd2f4bff718b71"></a>

## ConversationHistory.&lt;anonymous@42:13&gt;

[features/chat/conversation-history.tsx:42](<../../../../../../features/chat/conversation-history.tsx#L42>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- crypto.randomUUID — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:44](<../../../../../../features/chat/conversation-history.tsx#L44>)
- setIncludeKnowledge — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:51](<../../../../../../features/chat/conversation-history.tsx#L51>)
- Boolean — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:51](<../../../../../../features/chat/conversation-history.tsx#L51>)
- setEngineOnly — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:52](<../../../../../../features/chat/conversation-history.tsx#L52>)
- setBoxId — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:53](<../../../../../../features/chat/conversation-history.tsx#L53>)
- setSelectedFile — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:54](<../../../../../../features/chat/conversation-history.tsx#L54>)
- setBoxQuery — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:55](<../../../../../../features/chat/conversation-history.tsx#L55>)
- dialog.current?.showModal — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:56](<../../../../../../features/chat/conversation-history.tsx#L56>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6cb906d401dd232c"></a>

## ConversationHistory.boxName

[features/chat/conversation-history.tsx:61](<../../../../../../features/chat/conversation-history.tsx#L61>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | annotation | optional |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ConversationHistory.&lt;anonymous@125:24&gt;](<conversation-history.tsx.md#s-4943ad6e2ad05b41>) — [features/chat/conversation-history.tsx:128](<../../../../../../features/chat/conversation-history.tsx#L128>)
- [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>) — [features/chat/conversation-history.tsx:194](<../../../../../../features/chat/conversation-history.tsx#L194>)

Unresolved / external call sites: 1.

- chat.contextBoxes.find — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:62](<../../../../../../features/chat/conversation-history.tsx#L62>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c19a84251b318e7e"></a>

## ConversationHistory.boxName.&lt;anonymous@62:28&gt;

[features/chat/conversation-history.tsx:62](<../../../../../../features/chat/conversation-history.tsx#L62>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory.boxName](<conversation-history.tsx.md#s-6cb906d401dd232c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| b | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0f3f5ae8974dde9a"></a>

## ConversationHistory.startRename

[features/chat/conversation-history.tsx:64](<../../../../../../features/chat/conversation-history.tsx#L64>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | annotation | required |
| value | string | annotation | required |
| kind | "chat" &#124; "box" | annotation | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ConversationHistory.&lt;anonymous@78:22&gt;](<conversation-history.tsx.md#s-7fb4e76380366d23>) — [features/chat/conversation-history.tsx:79](<../../../../../../features/chat/conversation-history.tsx#L79>)
- [ConversationHistory.&lt;anonymous@125:24&gt;](<conversation-history.tsx.md#s-4943ad6e2ad05b41>) — [features/chat/conversation-history.tsx:126](<../../../../../../features/chat/conversation-history.tsx#L126>)
- [ConversationHistory.&lt;anonymous@286:18&gt;.&lt;anonymous@316:28&gt;](<conversation-history.tsx.md#s-61d0907a2238d18b>) — [features/chat/conversation-history.tsx:316](<../../../../../../features/chat/conversation-history.tsx#L316>)

Unresolved / external call sites: 3.

- setEditId — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:65](<../../../../../../features/chat/conversation-history.tsx#L65>)
- setName — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:66](<../../../../../../features/chat/conversation-history.tsx#L66>)
- setEdit — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:67](<../../../../../../features/chat/conversation-history.tsx#L67>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7fb4e76380366d23"></a>

## ConversationHistory.&lt;anonymous@78:22&gt;

[features/chat/conversation-history.tsx:78](<../../../../../../features/chat/conversation-history.tsx#L78>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ConversationHistory.startRename](<conversation-history.tsx.md#s-0f3f5ae8974dde9a>) — [features/chat/conversation-history.tsx:79](<../../../../../../features/chat/conversation-history.tsx#L79>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-68273f9be8edf73d"></a>

## ConversationHistory.&lt;anonymous@95:52&gt;

[features/chat/conversation-history.tsx:95](<../../../../../../features/chat/conversation-history.tsx#L95>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setHistory — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:95](<../../../../../../features/chat/conversation-history.tsx#L95>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-26ff943df5f12c93"></a>

## ConversationHistory.&lt;anonymous@121:13&gt;

[features/chat/conversation-history.tsx:121](<../../../../../../features/chat/conversation-history.tsx#L121>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| box | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4943ad6e2ad05b41"></a>

## ConversationHistory.&lt;anonymous@125:24&gt;

[features/chat/conversation-history.tsx:125](<../../../../../../features/chat/conversation-history.tsx#L125>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ConversationHistory.startRename](<conversation-history.tsx.md#s-0f3f5ae8974dde9a>) — [features/chat/conversation-history.tsx:126](<../../../../../../features/chat/conversation-history.tsx#L126>)
- [ConversationHistory.boxName](<conversation-history.tsx.md#s-6cb906d401dd232c>) — [features/chat/conversation-history.tsx:128](<../../../../../../features/chat/conversation-history.tsx#L128>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-dd56a4d2c53438cd"></a>

## ConversationHistory.&lt;anonymous@144:25&gt;

[features/chat/conversation-history.tsx:144](<../../../../../../features/chat/conversation-history.tsx#L144>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- confirm — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:149](<../../../../../../features/chat/conversation-history.tsx#L149>)
- chat.switchContextBox — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:154](<../../../../../../features/chat/conversation-history.tsx#L154>)
- chat.preselectBox — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:155](<../../../../../../features/chat/conversation-history.tsx#L155>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-98731f3a64ddb64f"></a>

## ConversationHistory.&lt;anonymous@161:19&gt;

[features/chat/conversation-history.tsx:161](<../../../../../../features/chat/conversation-history.tsx#L161>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| box | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e7cdb84334923636"></a>

## ConversationHistory.&lt;anonymous@167:38&gt;

[features/chat/conversation-history.tsx:167](<../../../../../../features/chat/conversation-history.tsx#L167>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| box | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5aef22f496815211"></a>

## ConversationHistory.&lt;anonymous@176:22&gt;

[features/chat/conversation-history.tsx:176](<../../../../../../features/chat/conversation-history.tsx#L176>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- setName — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:177](<../../../../../../features/chat/conversation-history.tsx#L177>)
- setEdit — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:178](<../../../../../../features/chat/conversation-history.tsx#L178>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0dd8346bc6335511"></a>

## ConversationHistory.&lt;anonymous@197:24&gt;

[features/chat/conversation-history.tsx:197](<../../../../../../features/chat/conversation-history.tsx#L197>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- confirm — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:199](<../../../../../../features/chat/conversation-history.tsx#L199>)
- chat.switchContextBox — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:204](<../../../../../../features/chat/conversation-history.tsx#L204>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e0a46d5208370d79"></a>

## ConversationHistory.&lt;anonymous@223:21&gt;

[features/chat/conversation-history.tsx:223](<../../../../../../features/chat/conversation-history.tsx#L223>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- e.preventDefault — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:224](<../../../../../../features/chat/conversation-history.tsx#L224>)
- chat.rename — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:227](<../../../../../../features/chat/conversation-history.tsx#L227>)
- chat.renameContextBox — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:229](<../../../../../../features/chat/conversation-history.tsx#L229>)
- chat.saveContextBox — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:230](<../../../../../../features/chat/conversation-history.tsx#L230>)
- setEdit — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:231](<../../../../../../features/chat/conversation-history.tsx#L231>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2608c5db6b986699"></a>

## ConversationHistory.&lt;anonymous@244:25&gt;

[features/chat/conversation-history.tsx:244](<../../../../../../features/chat/conversation-history.tsx#L244>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setName — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:244](<../../../../../../features/chat/conversation-history.tsx#L244>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-22f57c9c5fcc926f"></a>

## ConversationHistory.&lt;anonymous@245:26&gt;

[features/chat/conversation-history.tsx:245](<../../../../../../features/chat/conversation-history.tsx#L245>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- e.preventDefault — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:247](<../../../../../../features/chat/conversation-history.tsx#L247>)
- setEdit — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:248](<../../../../../../features/chat/conversation-history.tsx#L248>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f996ba1fcfa9783b"></a>

## ConversationHistory.&lt;anonymous@254:42&gt;

[features/chat/conversation-history.tsx:254](<../../../../../../features/chat/conversation-history.tsx#L254>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setEdit — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:254](<../../../../../../features/chat/conversation-history.tsx#L254>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e60fbb597144ba7d"></a>

## ConversationHistory.&lt;anonymous@265:23&gt;

[features/chat/conversation-history.tsx:265](<../../../../../../features/chat/conversation-history.tsx#L265>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setQuery — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:265](<../../../../../../features/chat/conversation-history.tsx#L265>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5409742ae935f6d0"></a>

## ConversationHistory.&lt;anonymous@271:24&gt;

[features/chat/conversation-history.tsx:271](<../../../../../../features/chat/conversation-history.tsx#L271>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- confirm — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:273](<../../../../../../features/chat/conversation-history.tsx#L273>)
- chat.remove — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:278](<../../../../../../features/chat/conversation-history.tsx#L278>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bb6ce5e0a12d7200"></a>

## ConversationHistory.&lt;anonymous@285:21&gt;

[features/chat/conversation-history.tsx:285](<../../../../../../features/chat/conversation-history.tsx#L285>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| c | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- c.title.toLowerCase().includes — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:285](<../../../../../../features/chat/conversation-history.tsx#L285>)
- c.title.toLowerCase — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:285](<../../../../../../features/chat/conversation-history.tsx#L285>)
- query.toLowerCase — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:285](<../../../../../../features/chat/conversation-history.tsx#L285>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7de7de645db1402f"></a>

## ConversationHistory.&lt;anonymous@286:18&gt;

[features/chat/conversation-history.tsx:286](<../../../../../../features/chat/conversation-history.tsx#L286>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| c | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [conversationSourceLabel](<source-label.ts.md#s-af86551cff8d3283>) — [features/chat/conversation-history.tsx:309](<../../../../../../features/chat/conversation-history.tsx#L309>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- new Date(c.updatedAt).toLocaleString — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:310](<../../../../../../features/chat/conversation-history.tsx#L310>)
- Date — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:310](<../../../../../../features/chat/conversation-history.tsx#L310>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b63895ac7724dcad"></a>

## ConversationHistory.&lt;anonymous@286:18&gt;.&lt;anonymous@301:28&gt;

[features/chat/conversation-history.tsx:301](<../../../../../../features/chat/conversation-history.tsx#L301>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory.&lt;anonymous@286:18&gt;](<conversation-history.tsx.md#s-7de7de645db1402f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- chat.selectChat — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:302](<../../../../../../features/chat/conversation-history.tsx#L302>)
- setHistory — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:303](<../../../../../../features/chat/conversation-history.tsx#L303>)
- onCompose — declaration-without-runtime-body; [features/chat/conversation-history.tsx:304](<../../../../../../features/chat/conversation-history.tsx#L304>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-61d0907a2238d18b"></a>

## ConversationHistory.&lt;anonymous@286:18&gt;.&lt;anonymous@316:28&gt;

[features/chat/conversation-history.tsx:316](<../../../../../../features/chat/conversation-history.tsx#L316>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory.&lt;anonymous@286:18&gt;](<conversation-history.tsx.md#s-7de7de645db1402f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ConversationHistory.startRename](<conversation-history.tsx.md#s-0f3f5ae8974dde9a>) — [features/chat/conversation-history.tsx:316](<../../../../../../features/chat/conversation-history.tsx#L316>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1859bf9c111e839b"></a>

## ConversationHistory.&lt;anonymous@286:18&gt;.&lt;anonymous@323:28&gt;

[features/chat/conversation-history.tsx:323](<../../../../../../features/chat/conversation-history.tsx#L323>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory.&lt;anonymous@286:18&gt;](<conversation-history.tsx.md#s-7de7de645db1402f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- confirm — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:325](<../../../../../../features/chat/conversation-history.tsx#L325>)
- chat.remove — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:330](<../../../../../../features/chat/conversation-history.tsx#L330>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f6fd2be46e956c99"></a>

## ConversationHistory.&lt;anonymous@343:19&gt;

[features/chat/conversation-history.tsx:343](<../../../../../../features/chat/conversation-history.tsx#L343>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- e.preventDefault — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:344](<../../../../../../features/chat/conversation-history.tsx#L344>)
- chat.cancelCreation — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:345](<../../../../../../features/chat/conversation-history.tsx#L345>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-386f40fb45bd4c6b"></a>

## ConversationHistory.&lt;anonymous@357:22&gt;

[features/chat/conversation-history.tsx:357](<../../../../../../features/chat/conversation-history.tsx#L357>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ConversationHistory](<conversation-history.tsx.md#s-6d7ac1ac2fcf1950>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- chat.createChat("", creationId.current).then — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:358](<../../../../../../features/chat/conversation-history.tsx#L358>)
- chat.createChat — external-or-dynamic-dispatch; [features/chat/conversation-history.tsx:358](<../../../../../../features/chat/conversation-history.tsx#L358>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
