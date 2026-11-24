# features/chat/runtime-state.ts: symbols

[Atlas](<../../../../README.md>) / [Conversation presentation](<../../../../modules/portal-chat.md>) / [features/chat/runtime-state.ts:1](<../../../../../../features/chat/runtime-state.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/chat/runtime-state.ts](<runtime-state.ts.md#s-a22729aaa1d08868>) (Module)
- [RuntimeState](<runtime-state.ts.md#s-ee9b9d4e221aec0c>) (TypeAliasDeclaration)
- [initialRuntime](<runtime-state.ts.md#s-57e28eff24708a32>) (VariableDeclaration)
- [RuntimeAction](<runtime-state.ts.md#s-4ecdc1e39e7fb97d>) (TypeAliasDeclaration)
- [runtimeReducer](<runtime-state.ts.md#s-130cc9f07f8dcc0b>) (FunctionDeclaration)

<a id="s-a22729aaa1d08868"></a>

## features/chat/runtime-state.ts

[features/chat/runtime-state.ts:1](<../../../../../../features/chat/runtime-state.ts#L1>) · Module · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/chat/runtime-state.test.cjs:3](<../../../../../../features/chat/runtime-state.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-ee9b9d4e221aec0c"></a>

## RuntimeState

[features/chat/runtime-state.ts:3](<../../../../../../features/chat/runtime-state.ts#L3>) · TypeAliasDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: RuntimeState ([features/chat/runtime-state.ts:1](<../../../../../../features/chat/runtime-state.ts#L1>)).

Lexical owner: [features/chat/runtime-state.ts](<runtime-state.ts.md#s-a22729aaa1d08868>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/chat/runtime-state.test.cjs:3](<../../../../../../features/chat/runtime-state.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-57e28eff24708a32"></a>

## initialRuntime

[features/chat/runtime-state.ts:11](<../../../../../../features/chat/runtime-state.ts#L11>) · VariableDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: initialRuntime ([features/chat/runtime-state.ts:1](<../../../../../../features/chat/runtime-state.ts#L1>)).

Lexical owner: [features/chat/runtime-state.ts](<runtime-state.ts.md#s-a22729aaa1d08868>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/chat/runtime-state.test.cjs:3](<../../../../../../features/chat/runtime-state.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-4ecdc1e39e7fb97d"></a>

## RuntimeAction

[features/chat/runtime-state.ts:18](<../../../../../../features/chat/runtime-state.ts#L18>) · TypeAliasDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: RuntimeAction ([features/chat/runtime-state.ts:1](<../../../../../../features/chat/runtime-state.ts#L1>)).

Lexical owner: [features/chat/runtime-state.ts](<runtime-state.ts.md#s-a22729aaa1d08868>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/chat/runtime-state.test.cjs:3](<../../../../../../features/chat/runtime-state.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-130cc9f07f8dcc0b"></a>

## runtimeReducer

[features/chat/runtime-state.ts:26](<../../../../../../features/chat/runtime-state.ts#L26>) · FunctionDeclaration · production · [Conversation presentation](<../../../../modules/portal-chat.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: runtimeReducer ([features/chat/runtime-state.ts:1](<../../../../../../features/chat/runtime-state.ts#L1>)).

Lexical owner: [features/chat/runtime-state.ts](<runtime-state.ts.md#s-a22729aaa1d08868>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| state | RuntimeState | annotation | required |
| action | RuntimeAction | annotation | required |

Returns: RuntimeState (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@5:57&gt;](<runtime-state.test.cjs.md#s-0c45fb0dfd856e03>) — [features/chat/runtime-state.test.cjs:12](<../../../../../../features/chat/runtime-state.test.cjs#L12>)
- [&lt;anonymous@20:91&gt;](<runtime-state.test.cjs.md#s-8263c62a1c869258>) — [features/chat/runtime-state.test.cjs:21](<../../../../../../features/chat/runtime-state.test.cjs#L21>)
- [&lt;anonymous@20:91&gt;](<runtime-state.test.cjs.md#s-8263c62a1c869258>) — [features/chat/runtime-state.test.cjs:26](<../../../../../../features/chat/runtime-state.test.cjs#L26>)
- [&lt;anonymous@20:91&gt;](<runtime-state.test.cjs.md#s-8263c62a1c869258>) — [features/chat/runtime-state.test.cjs:32](<../../../../../../features/chat/runtime-state.test.cjs#L32>)
- [&lt;anonymous@20:91&gt;](<runtime-state.test.cjs.md#s-8263c62a1c869258>) — [features/chat/runtime-state.test.cjs:34](<../../../../../../features/chat/runtime-state.test.cjs#L34>)
- [&lt;anonymous@20:91&gt;](<runtime-state.test.cjs.md#s-8263c62a1c869258>) — [features/chat/runtime-state.test.cjs:40](<../../../../../../features/chat/runtime-state.test.cjs#L40>)
- [&lt;anonymous@20:91&gt;](<runtime-state.test.cjs.md#s-8263c62a1c869258>) — [features/chat/runtime-state.test.cjs:41](<../../../../../../features/chat/runtime-state.test.cjs#L41>)
- [&lt;anonymous@46:88&gt;](<runtime-state.test.cjs.md#s-ef2d2bbb12b90f61>) — [features/chat/runtime-state.test.cjs:48](<../../../../../../features/chat/runtime-state.test.cjs#L48>)
- [&lt;anonymous@46:88&gt;](<runtime-state.test.cjs.md#s-ef2d2bbb12b90f61>) — [features/chat/runtime-state.test.cjs:52](<../../../../../../features/chat/runtime-state.test.cjs#L52>)
- [&lt;anonymous@46:88&gt;](<runtime-state.test.cjs.md#s-ef2d2bbb12b90f61>) — [features/chat/runtime-state.test.cjs:56](<../../../../../../features/chat/runtime-state.test.cjs#L56>)
- [&lt;anonymous@63:88&gt;](<runtime-state.test.cjs.md#s-4283b41d8d23c985>) — [features/chat/runtime-state.test.cjs:64](<../../../../../../features/chat/runtime-state.test.cjs#L64>)
- [&lt;anonymous@63:88&gt;](<runtime-state.test.cjs.md#s-4283b41d8d23c985>) — [features/chat/runtime-state.test.cjs:69](<../../../../../../features/chat/runtime-state.test.cjs#L69>)
- [&lt;anonymous@63:88&gt;](<runtime-state.test.cjs.md#s-4283b41d8d23c985>) — [features/chat/runtime-state.test.cjs:72](<../../../../../../features/chat/runtime-state.test.cjs#L72>)
- [&lt;anonymous@63:88&gt;](<runtime-state.test.cjs.md#s-4283b41d8d23c985>) — [features/chat/runtime-state.test.cjs:77](<../../../../../../features/chat/runtime-state.test.cjs#L77>)

Unresolved / external call sites: 5.

- Date.now — external-or-dynamic-dispatch; [features/chat/runtime-state.ts:40](<../../../../../../features/chat/runtime-state.ts#L40>)
- &#91;"CANCELLED", "CONTEXT_INSUFFICIENT", "LIMITED_CONTEXT"&#93;.includes — external-or-dynamic-dispatch; [features/chat/runtime-state.ts:51](<../../../../../../features/chat/runtime-state.ts#L51>)
- &#91;"CANCELLED", "CONTEXT_INSUFFICIENT", "LIMITED_CONTEXT"&#93;.includes — external-or-dynamic-dispatch; [features/chat/runtime-state.ts:69](<../../../../../../features/chat/runtime-state.ts#L69>)
- &#91; "ERROR", "READY", "CANCELLED", "CONTEXT_INSUFFICIENT", "LIMITED_CONTEXT", &#93;.includes — external-or-dynamic-dispatch; [features/chat/runtime-state.ts:76](<../../../../../../features/chat/runtime-state.ts#L76>)
- &#91; "ERROR", "READY", "CANCELLED", "CONTEXT_INSUFFICIENT", "LIMITED_CONTEXT", &#93;.includes — external-or-dynamic-dispatch; [features/chat/runtime-state.ts:89](<../../../../../../features/chat/runtime-state.ts#L89>)

**Related tests / acceptance harnesses:**

- [features/chat/runtime-state.test.cjs:12](<../../../../../../features/chat/runtime-state.test.cjs#L12>) — static-call-site; coverage not established.
- [features/chat/runtime-state.test.cjs:21](<../../../../../../features/chat/runtime-state.test.cjs#L21>) — static-call-site; coverage not established.
- [features/chat/runtime-state.test.cjs:26](<../../../../../../features/chat/runtime-state.test.cjs#L26>) — static-call-site; coverage not established.
- [features/chat/runtime-state.test.cjs:32](<../../../../../../features/chat/runtime-state.test.cjs#L32>) — static-call-site; coverage not established.
- [features/chat/runtime-state.test.cjs:34](<../../../../../../features/chat/runtime-state.test.cjs#L34>) — static-call-site; coverage not established.
- [features/chat/runtime-state.test.cjs:40](<../../../../../../features/chat/runtime-state.test.cjs#L40>) — static-call-site; coverage not established.
- [features/chat/runtime-state.test.cjs:41](<../../../../../../features/chat/runtime-state.test.cjs#L41>) — static-call-site; coverage not established.
- [features/chat/runtime-state.test.cjs:48](<../../../../../../features/chat/runtime-state.test.cjs#L48>) — static-call-site; coverage not established.
- [features/chat/runtime-state.test.cjs:52](<../../../../../../features/chat/runtime-state.test.cjs#L52>) — static-call-site; coverage not established.
- [features/chat/runtime-state.test.cjs:56](<../../../../../../features/chat/runtime-state.test.cjs#L56>) — static-call-site; coverage not established.
- [features/chat/runtime-state.test.cjs:64](<../../../../../../features/chat/runtime-state.test.cjs#L64>) — static-call-site; coverage not established.
- [features/chat/runtime-state.test.cjs:69](<../../../../../../features/chat/runtime-state.test.cjs#L69>) — static-call-site; coverage not established.
- [features/chat/runtime-state.test.cjs:72](<../../../../../../features/chat/runtime-state.test.cjs#L72>) — static-call-site; coverage not established.
- [features/chat/runtime-state.test.cjs:77](<../../../../../../features/chat/runtime-state.test.cjs#L77>) — static-call-site; coverage not established.
- [features/chat/runtime-state.test.cjs:3](<../../../../../../features/chat/runtime-state.test.cjs#L3>) — file-import-only; coverage not established.
