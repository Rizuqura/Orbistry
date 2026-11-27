# features/chat/chat-presentation.ts: symbols

[Atlas](<../../../../README.md>) / [Conversation presentation](<../../../../modules/portal-chat.md>) / [features/chat/chat-presentation.ts:1](<../../../../../../features/chat/chat-presentation.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/chat/chat-presentation.ts](<chat-presentation.ts.md#s-60dc794827d13c91>) (Module)
- [bannerStyle](<chat-presentation.ts.md#s-2b77ce68d12bd519>) (FunctionDeclaration)
- [chatReadingSize](<chat-presentation.ts.md#s-d1401d6d0629913e>) (FunctionDeclaration)
- [wallpaperStyle](<chat-presentation.ts.md#s-f651f5a4d6934160>) (FunctionDeclaration)

<a id="s-60dc794827d13c91"></a>

## features/chat/chat-presentation.ts

[features/chat/chat-presentation.ts:1](<../../../../../../features/chat/chat-presentation.ts#L1>) · Module · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2b77ce68d12bd519"></a>

## bannerStyle

[features/chat/chat-presentation.ts:3](<../../../../../../features/chat/chat-presentation.ts#L3>) · FunctionDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: bannerStyle ([features/chat/chat-presentation.ts:1](<../../../../../../features/chat/chat-presentation.ts#L1>)).

Lexical owner: [features/chat/chat-presentation.ts](<chat-presentation.ts.md#s-60dc794827d13c91>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| url | string &#124; null | annotation | optional |

Returns: CSSProperties &#124; undefined (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [AgentContact](<../agents/agent-contacts.tsx.md#s-9d6c2af33535b7ae>) — [features/agents/agent-contacts.tsx:69](<../../../../../../features/agents/agent-contacts.tsx#L69>)
- [ChatPanel](<chat-panel.tsx.md#s-e38ffd3c06175ce1>) — [features/chat/chat-panel.tsx:587](<../../../../../../features/chat/chat-panel.tsx#L587>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d1401d6d0629913e"></a>

## chatReadingSize

[features/chat/chat-presentation.ts:16](<../../../../../../features/chat/chat-presentation.ts#L16>) · FunctionDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: chatReadingSize ([features/chat/chat-presentation.ts:1](<../../../../../../features/chat/chat-presentation.ts#L1>)).

Lexical owner: [features/chat/chat-presentation.ts](<chat-presentation.ts.md#s-60dc794827d13c91>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| size | number | compiler-inferred | optional, default present |

Returns: number (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [AgentConstruction.&lt;anonymous@544:39&gt;](<../agents/agent-construction.tsx.md#s-eca646042b2b8de2>) — [features/agents/agent-construction.tsx:546](<../../../../../../features/agents/agent-construction.tsx#L546>)
- [wallpaperStyle](<chat-presentation.ts.md#s-f651f5a4d6934160>) — [features/chat/chat-presentation.ts:21](<../../../../../../features/chat/chat-presentation.ts#L21>)

Unresolved / external call sites: 1.

- Math.max — external-or-dynamic-dispatch; [features/chat/chat-presentation.ts:17](<../../../../../../features/chat/chat-presentation.ts#L17>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f651f5a4d6934160"></a>

## wallpaperStyle

[features/chat/chat-presentation.ts:19](<../../../../../../features/chat/chat-presentation.ts#L19>) · FunctionDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: wallpaperStyle ([features/chat/chat-presentation.ts:1](<../../../../../../features/chat/chat-presentation.ts#L1>)).

Lexical owner: [features/chat/chat-presentation.ts](<chat-presentation.ts.md#s-60dc794827d13c91>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| appearance | AgentAppearance | annotation | optional |

Returns: CSSProperties (annotation). Implementation present.

**Calls (statically resolved):**

- [chatReadingSize](<chat-presentation.ts.md#s-d1401d6d0629913e>) — [features/chat/chat-presentation.ts:21](<../../../../../../features/chat/chat-presentation.ts#L21>)

**Called by (statically resolved):**

- [AgentConstruction](<../agents/agent-construction.tsx.md#s-56fc0c6bc133a86f>) — [features/agents/agent-construction.tsx:556](<../../../../../../features/agents/agent-construction.tsx#L556>)
- [ChatPanel](<chat-panel.tsx.md#s-e38ffd3c06175ce1>) — [features/chat/chat-panel.tsx:632](<../../../../../../features/chat/chat-panel.tsx#L632>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
