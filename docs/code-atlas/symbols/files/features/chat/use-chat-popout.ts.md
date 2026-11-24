# features/chat/use-chat-popout.ts: symbols

[Atlas](<../../../../README.md>) / [Conversation presentation](<../../../../modules/portal-chat.md>) / [features/chat/use-chat-popout.ts:1](<../../../../../../features/chat/use-chat-popout.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/chat/use-chat-popout.ts](<use-chat-popout.ts.md#s-d7c4882c23b5273e>) (Module)
- [useChatPopout](<use-chat-popout.ts.md#s-b56ab00293228f81>) (FunctionDeclaration)
- [useChatPopout.&lt;anonymous@12:30&gt;](<use-chat-popout.ts.md#s-897d13cdd6ae8188>) (ArrowFunction)
- [useChatPopout.&lt;anonymous@20:28&gt;](<use-chat-popout.ts.md#s-63b3040730af7fe9>) (ArrowFunction)
- [useChatPopout.&lt;anonymous@70:13&gt;](<use-chat-popout.ts.md#s-731672583adb78b8>) (ArrowFunction)
- [useChatPopout.&lt;anonymous@70:13&gt;.restore](<use-chat-popout.ts.md#s-e7a0b9c1b263cc05>) (ArrowFunction)
- [useChatPopout.&lt;anonymous@70:13&gt;.&lt;anonymous@86:38&gt;](<use-chat-popout.ts.md#s-3fbb85fdf7225272>) (ArrowFunction)
- [useChatPopout.&lt;anonymous@70:13&gt;.&lt;anonymous@91:12&gt;](<use-chat-popout.ts.md#s-76b1b9883a61197b>) (ArrowFunction)
- [useChatPopout.&lt;anonymous@97:13&gt;](<use-chat-popout.ts.md#s-991b25a0db2ca2a8>) (ArrowFunction)
- [useChatPopout.&lt;anonymous@103:13&gt;](<use-chat-popout.ts.md#s-28e76cf8c606849d>) (ArrowFunction)
- [useChatPopout.&lt;anonymous@103:13&gt;.closeChild](<use-chat-popout.ts.md#s-5e3882b20e9eab29>) (ArrowFunction)
- [useChatPopout.&lt;anonymous@103:13&gt;.&lt;anonymous@109:12&gt;](<use-chat-popout.ts.md#s-77baeaa14bcd3b23>) (ArrowFunction)

<a id="s-d7c4882c23b5273e"></a>

## features/chat/use-chat-popout.ts

[features/chat/use-chat-popout.ts:1](<../../../../../../features/chat/use-chat-popout.ts#L1>) · Module · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b56ab00293228f81"></a>

## useChatPopout

[features/chat/use-chat-popout.ts:7](<../../../../../../features/chat/use-chat-popout.ts#L7>) · FunctionDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

Move presentation into a native window while the workspace keeps ownership of the draft, conversation, live request, and trusted desktop bridge.

Purpose evidence: jsdoc.

Exported as: useChatPopout ([features/chat/use-chat-popout.ts:1](<../../../../../../features/chat/use-chat-popout.ts#L1>)).

Lexical owner: [features/chat/use-chat-popout.ts](<use-chat-popout.ts.md#s-d7c4882c23b5273e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| title | string | annotation | required |

Returns: { container: any; open: any; attach: any; error: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [AppShell](<../../components/app-shell.tsx.md#s-2ea33cd617f6000a>) — [components/app-shell.tsx:318](<../../../../../../components/app-shell.tsx#L318>)

Unresolved / external call sites: 8.

- useRef — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:8](<../../../../../../features/chat/use-chat-popout.ts#L8>)
- useState — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:9](<../../../../../../features/chat/use-chat-popout.ts#L9>)
- useState — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:10](<../../../../../../features/chat/use-chat-popout.ts#L10>)
- useCallback — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:12](<../../../../../../features/chat/use-chat-popout.ts#L12>)
- useCallback — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:20](<../../../../../../features/chat/use-chat-popout.ts#L20>)
- useEffect — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:70](<../../../../../../features/chat/use-chat-popout.ts#L70>)
- useEffect — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:97](<../../../../../../features/chat/use-chat-popout.ts#L97>)
- useEffect — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:103](<../../../../../../features/chat/use-chat-popout.ts#L103>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-897d13cdd6ae8188"></a>

## useChatPopout.&lt;anonymous@12:30&gt;

[features/chat/use-chat-popout.ts:12](<../../../../../../features/chat/use-chat-popout.ts#L12>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [useChatPopout](<use-chat-popout.ts.md#s-b56ab00293228f81>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- setContainer — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:15](<../../../../../../features/chat/use-chat-popout.ts#L15>)
- popup?.close — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:16](<../../../../../../features/chat/use-chat-popout.ts#L16>)
- window.focus — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:17](<../../../../../../features/chat/use-chat-popout.ts#L17>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-63b3040730af7fe9"></a>

## useChatPopout.&lt;anonymous@20:28&gt;

[features/chat/use-chat-popout.ts:20](<../../../../../../features/chat/use-chat-popout.ts#L20>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [useChatPopout](<use-chat-popout.ts.md#s-b56ab00293228f81>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 15.

- child.current.focus — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:22](<../../../../../../features/chat/use-chat-popout.ts#L22>)
- window.open — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:27](<../../../../../../features/chat/use-chat-popout.ts#L27>)
- Error — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:33](<../../../../../../features/chat/use-chat-popout.ts#L33>)
- target.createElement — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:40](<../../../../../../features/chat/use-chat-popout.ts#L40>)
- target.head.appendChild — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:42](<../../../../../../features/chat/use-chat-popout.ts#L42>)
- document.querySelectorAll — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:45](<../../../../../../features/chat/use-chat-popout.ts#L45>)
- source.cloneNode — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:48](<../../../../../../features/chat/use-chat-popout.ts#L48>)
- target.head.appendChild — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:52](<../../../../../../features/chat/use-chat-popout.ts#L52>)
- 7 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-731672583adb78b8"></a>

## useChatPopout.&lt;anonymous@70:13&gt;

[features/chat/use-chat-popout.ts:70](<../../../../../../features/chat/use-chat-popout.ts#L70>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [useChatPopout](<use-chat-popout.ts.md#s-b56ab00293228f81>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- popup.addEventListener — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:84](<../../../../../../features/chat/use-chat-popout.ts#L84>)
- window.setInterval — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:86](<../../../../../../features/chat/use-chat-popout.ts#L86>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e7a0b9c1b263cc05"></a>

## useChatPopout.&lt;anonymous@70:13&gt;.restore

[features/chat/use-chat-popout.ts:78](<../../../../../../features/chat/use-chat-popout.ts#L78>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [useChatPopout.&lt;anonymous@70:13&gt;](<use-chat-popout.ts.md#s-731672583adb78b8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [useChatPopout.&lt;anonymous@70:13&gt;.&lt;anonymous@86:38&gt;](<use-chat-popout.ts.md#s-3fbb85fdf7225272>) — [features/chat/use-chat-popout.ts:88](<../../../../../../features/chat/use-chat-popout.ts#L88>)

Unresolved / external call sites: 1.

- setContainer — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:81](<../../../../../../features/chat/use-chat-popout.ts#L81>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3fbb85fdf7225272"></a>

## useChatPopout.&lt;anonymous@70:13&gt;.&lt;anonymous@86:38&gt;

[features/chat/use-chat-popout.ts:86](<../../../../../../features/chat/use-chat-popout.ts#L86>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [useChatPopout.&lt;anonymous@70:13&gt;](<use-chat-popout.ts.md#s-731672583adb78b8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [useChatPopout.&lt;anonymous@70:13&gt;.restore](<use-chat-popout.ts.md#s-e7a0b9c1b263cc05>) — [features/chat/use-chat-popout.ts:88](<../../../../../../features/chat/use-chat-popout.ts#L88>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-76b1b9883a61197b"></a>

## useChatPopout.&lt;anonymous@70:13&gt;.&lt;anonymous@91:12&gt;

[features/chat/use-chat-popout.ts:91](<../../../../../../features/chat/use-chat-popout.ts#L91>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [useChatPopout.&lt;anonymous@70:13&gt;](<use-chat-popout.ts.md#s-731672583adb78b8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- popup.removeEventListener — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:92](<../../../../../../features/chat/use-chat-popout.ts#L92>)
- window.clearInterval — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:93](<../../../../../../features/chat/use-chat-popout.ts#L93>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-991b25a0db2ca2a8"></a>

## useChatPopout.&lt;anonymous@97:13&gt;

[features/chat/use-chat-popout.ts:97](<../../../../../../features/chat/use-chat-popout.ts#L97>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [useChatPopout](<use-chat-popout.ts.md#s-b56ab00293228f81>).

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

<a id="s-28e76cf8c606849d"></a>

## useChatPopout.&lt;anonymous@103:13&gt;

[features/chat/use-chat-popout.ts:103](<../../../../../../features/chat/use-chat-popout.ts#L103>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [useChatPopout](<use-chat-popout.ts.md#s-b56ab00293228f81>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.addEventListener — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:108](<../../../../../../features/chat/use-chat-popout.ts#L108>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5e3882b20e9eab29"></a>

## useChatPopout.&lt;anonymous@103:13&gt;.closeChild

[features/chat/use-chat-popout.ts:104](<../../../../../../features/chat/use-chat-popout.ts#L104>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [useChatPopout.&lt;anonymous@103:13&gt;](<use-chat-popout.ts.md#s-28e76cf8c606849d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [useChatPopout.&lt;anonymous@103:13&gt;.&lt;anonymous@109:12&gt;](<use-chat-popout.ts.md#s-77baeaa14bcd3b23>) — [features/chat/use-chat-popout.ts:111](<../../../../../../features/chat/use-chat-popout.ts#L111>)

Unresolved / external call sites: 1.

- child.current?.close — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:105](<../../../../../../features/chat/use-chat-popout.ts#L105>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-77baeaa14bcd3b23"></a>

## useChatPopout.&lt;anonymous@103:13&gt;.&lt;anonymous@109:12&gt;

[features/chat/use-chat-popout.ts:109](<../../../../../../features/chat/use-chat-popout.ts#L109>) · ArrowFunction · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [useChatPopout.&lt;anonymous@103:13&gt;](<use-chat-popout.ts.md#s-28e76cf8c606849d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [useChatPopout.&lt;anonymous@103:13&gt;.closeChild](<use-chat-popout.ts.md#s-5e3882b20e9eab29>) — [features/chat/use-chat-popout.ts:111](<../../../../../../features/chat/use-chat-popout.ts#L111>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.removeEventListener — external-or-dynamic-dispatch; [features/chat/use-chat-popout.ts:110](<../../../../../../features/chat/use-chat-popout.ts#L110>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
