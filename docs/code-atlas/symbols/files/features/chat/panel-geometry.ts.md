# features/chat/panel-geometry.ts: symbols

[Atlas](<../../../../README.md>) / [Conversation presentation](<../../../../modules/portal-chat.md>) / [features/chat/panel-geometry.ts:1](<../../../../../../features/chat/panel-geometry.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/chat/panel-geometry.ts](<panel-geometry.ts.md#s-ce08fd5262246ad4>) (Module)
- [PanelGeometry](<panel-geometry.ts.md#s-f648e0795a6a7f4a>) (TypeAliasDeclaration)
- [ResizeDirection](<panel-geometry.ts.md#s-ad459a37377747d8>) (TypeAliasDeclaration)
- [clampGeometry](<panel-geometry.ts.md#s-5a5a3109a00ef650>) (FunctionDeclaration)
- [defaultFloatingChatGeometry](<panel-geometry.ts.md#s-79f95f5f7edab50e>) (FunctionDeclaration)
- [resizeGeometry](<panel-geometry.ts.md#s-b6ba271c6aecd584>) (FunctionDeclaration)

<a id="s-ce08fd5262246ad4"></a>

## features/chat/panel-geometry.ts

[features/chat/panel-geometry.ts:1](<../../../../../../features/chat/panel-geometry.ts#L1>) · Module · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/chat/panel-geometry.test.cjs:3](<../../../../../../features/chat/panel-geometry.test.cjs#L3>) — file-import-only; coverage not established.
- [features/chat/panel-geometry.test.cjs:39](<../../../../../../features/chat/panel-geometry.test.cjs#L39>) — file-import-only; coverage not established.

<a id="s-f648e0795a6a7f4a"></a>

## PanelGeometry

[features/chat/panel-geometry.ts:1](<../../../../../../features/chat/panel-geometry.ts#L1>) · TypeAliasDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: PanelGeometry ([features/chat/panel-geometry.ts:1](<../../../../../../features/chat/panel-geometry.ts#L1>)).

Lexical owner: [features/chat/panel-geometry.ts](<panel-geometry.ts.md#s-ce08fd5262246ad4>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/chat/panel-geometry.test.cjs:3](<../../../../../../features/chat/panel-geometry.test.cjs#L3>) — file-import-only; coverage not established.
- [features/chat/panel-geometry.test.cjs:39](<../../../../../../features/chat/panel-geometry.test.cjs#L39>) — file-import-only; coverage not established.

<a id="s-ad459a37377747d8"></a>

## ResizeDirection

[features/chat/panel-geometry.ts:7](<../../../../../../features/chat/panel-geometry.ts#L7>) · TypeAliasDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: ResizeDirection ([features/chat/panel-geometry.ts:1](<../../../../../../features/chat/panel-geometry.ts#L1>)).

Lexical owner: [features/chat/panel-geometry.ts](<panel-geometry.ts.md#s-ce08fd5262246ad4>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/chat/panel-geometry.test.cjs:3](<../../../../../../features/chat/panel-geometry.test.cjs#L3>) — file-import-only; coverage not established.
- [features/chat/panel-geometry.test.cjs:39](<../../../../../../features/chat/panel-geometry.test.cjs#L39>) — file-import-only; coverage not established.

<a id="s-5a5a3109a00ef650"></a>

## clampGeometry

[features/chat/panel-geometry.ts:8](<../../../../../../features/chat/panel-geometry.ts#L8>) · FunctionDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: clampGeometry ([features/chat/panel-geometry.ts:1](<../../../../../../features/chat/panel-geometry.ts#L1>)).

Lexical owner: [features/chat/panel-geometry.ts](<panel-geometry.ts.md#s-ce08fd5262246ad4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| g | PanelGeometry | annotation | required |
| width | number | annotation | required |
| height | number | annotation | required |

Returns: PanelGeometry (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ChatPanel.&lt;anonymous@276:13&gt;](<chat-panel.tsx.md#s-e81aaa1dd5603618>) — [features/chat/chat-panel.tsx:289](<../../../../../../features/chat/chat-panel.tsx#L289>)
- [ChatPanel.&lt;anonymous@276:13&gt;.&lt;anonymous@299:41&gt;](<chat-panel.tsx.md#s-6a37fc91e54c7d57>) — [features/chat/chat-panel.tsx:304](<../../../../../../features/chat/chat-panel.tsx#L304>)
- [ChatPanel.&lt;anonymous@469:22&gt;](<chat-panel.tsx.md#s-bdea4bfc1890b487>) — [features/chat/chat-panel.tsx:474](<../../../../../../features/chat/chat-panel.tsx#L474>)
- [&lt;anonymous@32:73&gt;](<panel-geometry.test.cjs.md#s-2d475c1756b1ccd7>) — [features/chat/panel-geometry.test.cjs:34](<../../../../../../features/chat/panel-geometry.test.cjs#L34>)
- [defaultFloatingChatGeometry](<panel-geometry.ts.md#s-79f95f5f7edab50e>) — [features/chat/panel-geometry.ts:26](<../../../../../../features/chat/panel-geometry.ts#L26>)
- [resizeGeometry](<panel-geometry.ts.md#s-b6ba271c6aecd584>) — [features/chat/panel-geometry.ts:65](<../../../../../../features/chat/panel-geometry.ts#L65>)
- [BackendIdentityWindow.containWindow](<../worldview/backend-identity-window.tsx.md#s-4c560d365cc25ff2>) — [features/worldview/backend-identity-window.tsx:104](<../../../../../../features/worldview/backend-identity-window.tsx#L104>)
- [BackendIdentityWindow.containWindow.&lt;anonymous@110:41&gt;.&lt;anonymous@111:19&gt;](<../worldview/backend-identity-window.tsx.md#s-450cef1b101c567c>) — [features/worldview/backend-identity-window.tsx:112](<../../../../../../features/worldview/backend-identity-window.tsx#L112>)
- [BackendIdentityWindow.move](<../worldview/backend-identity-window.tsx.md#s-31a99e580498d1a6>) — [features/worldview/backend-identity-window.tsx:307](<../../../../../../features/worldview/backend-identity-window.tsx#L307>)
- [BackendIdentityWindow.positionByKey.&lt;anonymous@341:17&gt;](<../worldview/backend-identity-window.tsx.md#s-6b23ee6b2dfc69a8>) — [features/worldview/backend-identity-window.tsx:343](<../../../../../../features/worldview/backend-identity-window.tsx#L343>)
- [BackendIdentityWindow.positionByKey.&lt;anonymous@341:17&gt;](<../worldview/backend-identity-window.tsx.md#s-6b23ee6b2dfc69a8>) — [features/worldview/backend-identity-window.tsx:361](<../../../../../../features/worldview/backend-identity-window.tsx#L361>)

Unresolved / external call sites: 10.

- Math.min — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:13](<../../../../../../features/chat/panel-geometry.ts#L13>)
- Math.max — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:13](<../../../../../../features/chat/panel-geometry.ts#L13>)
- Math.min — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:13](<../../../../../../features/chat/panel-geometry.ts#L13>)
- Math.min — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:14](<../../../../../../features/chat/panel-geometry.ts#L14>)
- Math.max — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:14](<../../../../../../features/chat/panel-geometry.ts#L14>)
- Math.min — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:14](<../../../../../../features/chat/panel-geometry.ts#L14>)
- Math.max — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:16](<../../../../../../features/chat/panel-geometry.ts#L16>)
- Math.min — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:16](<../../../../../../features/chat/panel-geometry.ts#L16>)
- 2 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [features/chat/panel-geometry.test.cjs:34](<../../../../../../features/chat/panel-geometry.test.cjs#L34>) — static-call-site; coverage not established.
- [features/chat/panel-geometry.test.cjs:3](<../../../../../../features/chat/panel-geometry.test.cjs#L3>) — file-import-only; coverage not established.
- [features/chat/panel-geometry.test.cjs:39](<../../../../../../features/chat/panel-geometry.test.cjs#L39>) — file-import-only; coverage not established.

<a id="s-79f95f5f7edab50e"></a>

## defaultFloatingChatGeometry

[features/chat/panel-geometry.ts:22](<../../../../../../features/chat/panel-geometry.ts#L22>) · FunctionDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: defaultFloatingChatGeometry ([features/chat/panel-geometry.ts:1](<../../../../../../features/chat/panel-geometry.ts#L1>)).

Lexical owner: [features/chat/panel-geometry.ts](<panel-geometry.ts.md#s-ce08fd5262246ad4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| width | number | annotation | required |
| height | number | annotation | required |

Returns: PanelGeometry (annotation). Implementation present.

**Calls (statically resolved):**

- [clampGeometry](<panel-geometry.ts.md#s-5a5a3109a00ef650>) — [features/chat/panel-geometry.ts:26](<../../../../../../features/chat/panel-geometry.ts#L26>)

**Called by (statically resolved):**

- [ChatPanel.resetGeometry](<chat-panel.tsx.md#s-0aa9a591ee170fce>) — [features/chat/chat-panel.tsx:269](<../../../../../../features/chat/chat-panel.tsx#L269>)
- [ChatPanel.&lt;anonymous@276:13&gt;](<chat-panel.tsx.md#s-e81aaa1dd5603618>) — [features/chat/chat-panel.tsx:292](<../../../../../../features/chat/chat-panel.tsx#L292>)
- [&lt;anonymous@40:80&gt;](<panel-geometry.test.cjs.md#s-59d307ca215603d1>) — [features/chat/panel-geometry.test.cjs:47](<../../../../../../features/chat/panel-geometry.test.cjs#L47>)
- [&lt;anonymous@40:80&gt;](<panel-geometry.test.cjs.md#s-59d307ca215603d1>) — [features/chat/panel-geometry.test.cjs:57](<../../../../../../features/chat/panel-geometry.test.cjs#L57>)

Unresolved / external call sites: 5.

- Math.min — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:31](<../../../../../../features/chat/panel-geometry.ts#L31>)
- Math.max — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:31](<../../../../../../features/chat/panel-geometry.ts#L31>)
- Math.min — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:38](<../../../../../../features/chat/panel-geometry.ts#L38>)
- Math.max — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:38](<../../../../../../features/chat/panel-geometry.ts#L38>)
- Math.max — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:39](<../../../../../../features/chat/panel-geometry.ts#L39>)

**Related tests / acceptance harnesses:**

- [features/chat/panel-geometry.test.cjs:47](<../../../../../../features/chat/panel-geometry.test.cjs#L47>) — static-call-site; coverage not established.
- [features/chat/panel-geometry.test.cjs:57](<../../../../../../features/chat/panel-geometry.test.cjs#L57>) — static-call-site; coverage not established.
- [features/chat/panel-geometry.test.cjs:3](<../../../../../../features/chat/panel-geometry.test.cjs#L3>) — file-import-only; coverage not established.
- [features/chat/panel-geometry.test.cjs:39](<../../../../../../features/chat/panel-geometry.test.cjs#L39>) — file-import-only; coverage not established.

<a id="s-b6ba271c6aecd584"></a>

## resizeGeometry

[features/chat/panel-geometry.ts:43](<../../../../../../features/chat/panel-geometry.ts#L43>) · FunctionDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: resizeGeometry ([features/chat/panel-geometry.ts:1](<../../../../../../features/chat/panel-geometry.ts#L1>)).

Lexical owner: [features/chat/panel-geometry.ts](<panel-geometry.ts.md#s-ce08fd5262246ad4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| g | PanelGeometry | annotation | required |
| direction | ResizeDirection | annotation | required |
| dx | number | annotation | required |
| dy | number | annotation | required |
| width | number | annotation | required |
| height | number | annotation | required |

Returns: PanelGeometry (annotation). Implementation present.

**Calls (statically resolved):**

- [clampGeometry](<panel-geometry.ts.md#s-5a5a3109a00ef650>) — [features/chat/panel-geometry.ts:65](<../../../../../../features/chat/panel-geometry.ts#L65>)

**Called by (statically resolved):**

- [ChatPanel.resize](<chat-panel.tsx.md#s-aa37a5dd9b9deaa4>) — [features/chat/chat-panel.tsx:249](<../../../../../../features/chat/chat-panel.tsx#L249>)
- [ChatPanel.&lt;anonymous@938:11&gt;.&lt;anonymous@957:26&gt;](<chat-panel.tsx.md#s-6b6145e55a7c071b>) — [features/chat/chat-panel.tsx:975](<../../../../../../features/chat/chat-panel.tsx#L975>)
- [&lt;anonymous@7:5&gt;](<panel-geometry.test.cjs.md#s-f8e9d751721fb4f5>) — [features/chat/panel-geometry.test.cjs:9](<../../../../../../features/chat/panel-geometry.test.cjs#L9>)
- [&lt;anonymous@7:5&gt;](<panel-geometry.test.cjs.md#s-f8e9d751721fb4f5>) — [features/chat/panel-geometry.test.cjs:15](<../../../../../../features/chat/panel-geometry.test.cjs#L15>)
- [BackendIdentityWindow.move](<../worldview/backend-identity-window.tsx.md#s-31a99e580498d1a6>) — [features/worldview/backend-identity-window.tsx:299](<../../../../../../features/worldview/backend-identity-window.tsx#L299>)
- [BackendIdentityWindow.positionByKey.&lt;anonymous@341:17&gt;](<../worldview/backend-identity-window.tsx.md#s-6b23ee6b2dfc69a8>) — [features/worldview/backend-identity-window.tsx:353](<../../../../../../features/worldview/backend-identity-window.tsx#L353>)

Unresolved / external call sites: 14.

- Math.min — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:55](<../../../../../../features/chat/panel-geometry.ts#L55>)
- Math.min — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:56](<../../../../../../features/chat/panel-geometry.ts#L56>)
- direction.includes — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:57](<../../../../../../features/chat/panel-geometry.ts#L57>)
- Math.max — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:58](<../../../../../../features/chat/panel-geometry.ts#L58>)
- Math.min — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:58](<../../../../../../features/chat/panel-geometry.ts#L58>)
- direction.includes — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:59](<../../../../../../features/chat/panel-geometry.ts#L59>)
- Math.min — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:60](<../../../../../../features/chat/panel-geometry.ts#L60>)
- Math.max — external-or-dynamic-dispatch; [features/chat/panel-geometry.ts:60](<../../../../../../features/chat/panel-geometry.ts#L60>)
- 6 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [features/chat/panel-geometry.test.cjs:9](<../../../../../../features/chat/panel-geometry.test.cjs#L9>) — static-call-site; coverage not established.
- [features/chat/panel-geometry.test.cjs:15](<../../../../../../features/chat/panel-geometry.test.cjs#L15>) — static-call-site; coverage not established.
- [features/chat/panel-geometry.test.cjs:3](<../../../../../../features/chat/panel-geometry.test.cjs#L3>) — file-import-only; coverage not established.
- [features/chat/panel-geometry.test.cjs:39](<../../../../../../features/chat/panel-geometry.test.cjs#L39>) — file-import-only; coverage not established.
