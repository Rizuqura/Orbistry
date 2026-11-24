# electron/chat-window.cjs: symbols

[Atlas](<../../../README.md>) / [Electron composition and IPC security](<../../../modules/desktop.md>) / [electron/chat-window.cjs:1](<../../../../../electron/chat-window.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/chat-window.cjs](<chat-window.cjs.md#s-c4bd2be03dc430d3>) (Module)
- [installChatWindowHandler](<chat-window.cjs.md#s-25890abadb4d7465>) (FunctionDeclaration)
- [installChatWindowHandler.externalOnly](<chat-window.cjs.md#s-3fd4a6396f8f6ce2>) (ArrowFunction)
- [installChatWindowHandler.&lt;anonymous@12:42&gt;](<chat-window.cjs.md#s-7e96c52019924c58>) (ArrowFunction)
- [installChatWindowHandler.&lt;anonymous@47:45&gt;](<chat-window.cjs.md#s-d2d949bcd343cc28>) (ArrowFunction)
- [installChatWindowHandler.&lt;anonymous@47:45&gt;.&lt;anonymous@55:43&gt;](<chat-window.cjs.md#s-995b9c69cca554f4>) (ArrowFunction)
- [installChatWindowHandler.&lt;anonymous@47:45&gt;.&lt;anonymous@56:49&gt;](<chat-window.cjs.md#s-adea9eabb7674156>) (ArrowFunction)
- [installChatWindowHandler.&lt;anonymous@47:45&gt;.&lt;anonymous@60:26&gt;](<chat-window.cjs.md#s-8aa9ac5c940948e8>) (ArrowFunction)

<a id="s-c4bd2be03dc430d3"></a>

## electron/chat-window.cjs

[electron/chat-window.cjs:1](<../../../../../electron/chat-window.cjs#L1>) · Module · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/chat-window.test.cjs:4](<../../../../../electron/chat-window.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-25890abadb4d7465"></a>

## installChatWindowHandler

[electron/chat-window.cjs:3](<../../../../../electron/chat-window.cjs#L3>) · FunctionDeclaration · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: installChatWindowHandler ([electron/chat-window.cjs:1](<../../../../../electron/chat-window.cjs#L1>)).

Lexical owner: [electron/chat-window.cjs](<chat-window.cjs.md#s-c4bd2be03dc430d3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| owner | any | compiler-inferred | required |
| { icon, openExternal } | { icon: any; openExternal: any; } | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@14:80&gt;](<chat-window.test.cjs.md#s-52cd550938b8adf0>) — [electron/chat-window.test.cjs:17](<../../../../../electron/chat-window.test.cjs#L17>)
- [createWindow](<main.cjs.md#s-7b0ef49ba114957e>) — [electron/main.cjs:139](<../../../../../electron/main.cjs#L139>)

Unresolved / external call sites: 2.

- owner.webContents.setWindowOpenHandler — external-or-dynamic-dispatch; [electron/chat-window.cjs:12](<../../../../../electron/chat-window.cjs#L12>)
- owner.webContents.on — external-or-dynamic-dispatch; [electron/chat-window.cjs:47](<../../../../../electron/chat-window.cjs#L47>)

**Related tests / acceptance harnesses:**

- [electron/chat-window.test.cjs:17](<../../../../../electron/chat-window.test.cjs#L17>) — static-call-site; coverage not established.
- [electron/chat-window.test.cjs:4](<../../../../../electron/chat-window.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-3fd4a6396f8f6ce2"></a>

## installChatWindowHandler.externalOnly

[electron/chat-window.cjs:5](<../../../../../electron/chat-window.cjs#L5>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [installChatWindowHandler](<chat-window.cjs.md#s-25890abadb4d7465>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { url } | { url: any; } | compiler-inferred | required |

Returns: { action: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [installChatWindowHandler.&lt;anonymous@12:42&gt;](<chat-window.cjs.md#s-7e96c52019924c58>) — [electron/chat-window.cjs:17](<../../../../../electron/chat-window.cjs#L17>)

Unresolved / external call sites: 2.

- url.startsWith — external-or-dynamic-dispatch; [electron/chat-window.cjs:6](<../../../../../electron/chat-window.cjs#L6>)
- openExternal — external-or-dynamic-dispatch; [electron/chat-window.cjs:7](<../../../../../electron/chat-window.cjs#L7>)

**Related tests / acceptance harnesses:**

- [electron/chat-window.test.cjs:4](<../../../../../electron/chat-window.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-7e96c52019924c58"></a>

## installChatWindowHandler.&lt;anonymous@12:42&gt;

[electron/chat-window.cjs:12](<../../../../../electron/chat-window.cjs#L12>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [installChatWindowHandler](<chat-window.cjs.md#s-25890abadb4d7465>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| details | any | compiler-inferred | required |

Returns: { action: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [installChatWindowHandler.externalOnly](<chat-window.cjs.md#s-3fd4a6396f8f6ce2>) — [electron/chat-window.cjs:17](<../../../../../electron/chat-window.cjs#L17>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- chatWindow.isDestroyed — external-or-dynamic-dispatch; [electron/chat-window.cjs:19](<../../../../../electron/chat-window.cjs#L19>)
- chatWindow.show — external-or-dynamic-dispatch; [electron/chat-window.cjs:20](<../../../../../electron/chat-window.cjs#L20>)
- chatWindow.focus — external-or-dynamic-dispatch; [electron/chat-window.cjs:21](<../../../../../electron/chat-window.cjs#L21>)
- owner.isVisible — external-or-dynamic-dispatch; [electron/chat-window.cjs:36](<../../../../../electron/chat-window.cjs#L36>)

**Related tests / acceptance harnesses:**

- [electron/chat-window.test.cjs:4](<../../../../../electron/chat-window.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-d2d949bcd343cc28"></a>

## installChatWindowHandler.&lt;anonymous@47:45&gt;

[electron/chat-window.cjs:47](<../../../../../electron/chat-window.cjs#L47>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [installChatWindowHandler](<chat-window.cjs.md#s-25890abadb4d7465>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| child | any | compiler-inferred | required |
| details | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- child.setMenu — external-or-dynamic-dispatch; [electron/chat-window.cjs:52](<../../../../../electron/chat-window.cjs#L52>)
- child.setIcon — external-or-dynamic-dispatch; [electron/chat-window.cjs:53](<../../../../../electron/chat-window.cjs#L53>)
- child.webContents.on — external-or-dynamic-dispatch; [electron/chat-window.cjs:55](<../../../../../electron/chat-window.cjs#L55>)
- child.webContents.on — external-or-dynamic-dispatch; [electron/chat-window.cjs:56](<../../../../../electron/chat-window.cjs#L56>)
- child.webContents.setWindowOpenHandler — external-or-dynamic-dispatch; [electron/chat-window.cjs:59](<../../../../../electron/chat-window.cjs#L59>)
- child.once — external-or-dynamic-dispatch; [electron/chat-window.cjs:60](<../../../../../electron/chat-window.cjs#L60>)

**Related tests / acceptance harnesses:**

- [electron/chat-window.test.cjs:4](<../../../../../electron/chat-window.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-995b9c69cca554f4"></a>

## installChatWindowHandler.&lt;anonymous@47:45&gt;.&lt;anonymous@55:43&gt;

[electron/chat-window.cjs:55](<../../../../../electron/chat-window.cjs#L55>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [installChatWindowHandler.&lt;anonymous@47:45&gt;](<chat-window.cjs.md#s-d2d949bcd343cc28>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- event.preventDefault — external-or-dynamic-dispatch; [electron/chat-window.cjs:55](<../../../../../electron/chat-window.cjs#L55>)

**Related tests / acceptance harnesses:**

- [electron/chat-window.test.cjs:4](<../../../../../electron/chat-window.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-adea9eabb7674156"></a>

## installChatWindowHandler.&lt;anonymous@47:45&gt;.&lt;anonymous@56:49&gt;

[electron/chat-window.cjs:56](<../../../../../electron/chat-window.cjs#L56>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [installChatWindowHandler.&lt;anonymous@47:45&gt;](<chat-window.cjs.md#s-d2d949bcd343cc28>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- event.preventDefault — external-or-dynamic-dispatch; [electron/chat-window.cjs:57](<../../../../../electron/chat-window.cjs#L57>)

**Related tests / acceptance harnesses:**

- [electron/chat-window.test.cjs:4](<../../../../../electron/chat-window.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-8aa9ac5c940948e8"></a>

## installChatWindowHandler.&lt;anonymous@47:45&gt;.&lt;anonymous@60:26&gt;

[electron/chat-window.cjs:60](<../../../../../electron/chat-window.cjs#L60>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [installChatWindowHandler.&lt;anonymous@47:45&gt;](<chat-window.cjs.md#s-d2d949bcd343cc28>).

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

- [electron/chat-window.test.cjs:4](<../../../../../electron/chat-window.test.cjs#L4>) — file-import-only; coverage not established.
