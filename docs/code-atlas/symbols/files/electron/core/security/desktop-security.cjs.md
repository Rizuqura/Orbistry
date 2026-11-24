# electron/core/security/desktop-security.cjs: symbols

[Atlas](<../../../../../README.md>) / [Electron composition and IPC security](<../../../../../modules/desktop.md>) / [electron/core/security/desktop-security.cjs:1](<../../../../../../../electron/core/security/desktop-security.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/core/security/desktop-security.cjs](<desktop-security.cjs.md#s-10a91432693ff71b>) (Module)
- [sameDocument](<desktop-security.cjs.md#s-9f333b962f1ebeaa>) (FunctionDeclaration)
- [guardedIpc](<desktop-security.cjs.md#s-e908fc761b568a93>) (FunctionDeclaration)
- [guardedIpc.handle](<desktop-security.cjs.md#s-9b10b864799d9edb>) (MethodDeclaration)
- [guardedIpc.handle.&lt;anonymous@16:31&gt;](<desktop-security.cjs.md#s-31cc5fb10915d561>) (ArrowFunction)
- [developmentUrl](<desktop-security.cjs.md#s-79be8939c1c3840b>) (FunctionDeclaration)

<a id="s-10a91432693ff71b"></a>

## electron/core/security/desktop-security.cjs

[electron/core/security/desktop-security.cjs:1](<../../../../../../../electron/core/security/desktop-security.cjs#L1>) · Module · production · [Electron composition and IPC security](<../../../../../modules/desktop.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/core/security/desktop-security.cjs:1](<../../../../../../../electron/core/security/desktop-security.cjs#L1>)

**Related tests / acceptance harnesses:**

- [electron/core/security/desktop-security.test.cjs:7](<../../../../../../../electron/core/security/desktop-security.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-9f333b962f1ebeaa"></a>

## sameDocument

[electron/core/security/desktop-security.cjs:2](<../../../../../../../electron/core/security/desktop-security.cjs#L2>) · FunctionDeclaration · production · [Electron composition and IPC security](<../../../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: sameDocument ([electron/core/security/desktop-security.cjs:1](<../../../../../../../electron/core/security/desktop-security.cjs#L1>)).

Lexical owner: [electron/core/security/desktop-security.cjs](<desktop-security.cjs.md#s-10a91432693ff71b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| actual | any | compiler-inferred | required |
| expected | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [guardedIpc.handle.&lt;anonymous@16:31&gt;](<desktop-security.cjs.md#s-31cc5fb10915d561>) — [electron/core/security/desktop-security.cjs:22](<../../../../../../../electron/core/security/desktop-security.cjs#L22>)
- [&lt;anonymous@37:82&gt;](<desktop-security.test.cjs.md#s-de3b4ce766fd2c88>) — [electron/core/security/desktop-security.test.cjs:48](<../../../../../../../electron/core/security/desktop-security.test.cjs#L48>)
- [&lt;anonymous@37:82&gt;](<desktop-security.test.cjs.md#s-de3b4ce766fd2c88>) — [electron/core/security/desktop-security.test.cjs:54](<../../../../../../../electron/core/security/desktop-security.test.cjs#L54>)
- [createWindow.&lt;anonymous@128:42&gt;](<../../main.cjs.md#s-d22061caf3bcf1b8>) — [electron/main.cjs:129](<../../../../../../../electron/main.cjs#L129>)

Unresolved / external call sites: 2.

- URL — external-or-dynamic-dispatch; [electron/core/security/desktop-security.cjs:4](<../../../../../../../electron/core/security/desktop-security.cjs#L4>)
- URL — external-or-dynamic-dispatch; [electron/core/security/desktop-security.cjs:5](<../../../../../../../electron/core/security/desktop-security.cjs#L5>)

**Related tests / acceptance harnesses:**

- [electron/core/security/desktop-security.test.cjs:48](<../../../../../../../electron/core/security/desktop-security.test.cjs#L48>) — static-call-site; coverage not established.
- [electron/core/security/desktop-security.test.cjs:54](<../../../../../../../electron/core/security/desktop-security.test.cjs#L54>) — static-call-site; coverage not established.
- [electron/core/security/desktop-security.test.cjs:7](<../../../../../../../electron/core/security/desktop-security.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-e908fc761b568a93"></a>

## guardedIpc

[electron/core/security/desktop-security.cjs:13](<../../../../../../../electron/core/security/desktop-security.cjs#L13>) · FunctionDeclaration · production · [Electron composition and IPC security](<../../../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: guardedIpc ([electron/core/security/desktop-security.cjs:1](<../../../../../../../electron/core/security/desktop-security.cjs#L1>)).

Lexical owner: [electron/core/security/desktop-security.cjs](<desktop-security.cjs.md#s-10a91432693ff71b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| ipcMain | any | compiler-inferred | required |
| getContents | any | compiler-inferred | required |
| entryUrl | any | compiler-inferred | required |

Returns: { handle(channel: any, handler: any): void; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@8:78&gt;](<desktop-security.test.cjs.md#s-b17cf90d8a60f20d>) — [electron/core/security/desktop-security.test.cjs:13](<../../../../../../../electron/core/security/desktop-security.test.cjs#L13>)
- [electron/main.cjs](<../../main.cjs.md#s-f5a36143526f73da>) — [electron/main.cjs:46](<../../../../../../../electron/main.cjs#L46>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/core/security/desktop-security.test.cjs:13](<../../../../../../../electron/core/security/desktop-security.test.cjs#L13>) — static-call-site; coverage not established.
- [electron/core/security/desktop-security.test.cjs:7](<../../../../../../../electron/core/security/desktop-security.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-9b10b864799d9edb"></a>

## guardedIpc.handle

[electron/core/security/desktop-security.cjs:15](<../../../../../../../electron/core/security/desktop-security.cjs#L15>) · MethodDeclaration · production · [Electron composition and IPC security](<../../../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [guardedIpc](<desktop-security.cjs.md#s-e908fc761b568a93>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| channel | any | compiler-inferred | required |
| handler | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@8:78&gt;](<desktop-security.test.cjs.md#s-b17cf90d8a60f20d>) — [electron/core/security/desktop-security.test.cjs:13](<../../../../../../../electron/core/security/desktop-security.test.cjs#L13>)
- [&lt;anonymous@163:22&gt;](<../../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:178](<../../../../../../../electron/main.cjs#L178>)
- [&lt;anonymous@163:22&gt;](<../../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:179](<../../../../../../../electron/main.cjs#L179>)
- [&lt;anonymous@163:22&gt;](<../../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:180](<../../../../../../../electron/main.cjs#L180>)
- [&lt;anonymous@163:22&gt;](<../../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:181](<../../../../../../../electron/main.cjs#L181>)
- [&lt;anonymous@163:22&gt;](<../../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:184](<../../../../../../../electron/main.cjs#L184>)
- [&lt;anonymous@163:22&gt;](<../../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:196](<../../../../../../../electron/main.cjs#L196>)
- [&lt;anonymous@163:22&gt;](<../../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:199](<../../../../../../../electron/main.cjs#L199>)
- [&lt;anonymous@163:22&gt;](<../../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:202](<../../../../../../../electron/main.cjs#L202>)
- [&lt;anonymous@163:22&gt;](<../../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:205](<../../../../../../../electron/main.cjs#L205>)
- [&lt;anonymous@163:22&gt;](<../../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:208](<../../../../../../../electron/main.cjs#L208>)
- [&lt;anonymous@163:22&gt;](<../../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:211](<../../../../../../../electron/main.cjs#L211>)
- [&lt;anonymous@163:22&gt;](<../../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:214](<../../../../../../../electron/main.cjs#L214>)
- [&lt;anonymous@163:22&gt;](<../../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:219](<../../../../../../../electron/main.cjs#L219>)
- [&lt;anonymous@163:22&gt;](<../../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:222](<../../../../../../../electron/main.cjs#L222>)

Unresolved / external call sites: 1.

- ipcMain.handle — external-or-dynamic-dispatch; [electron/core/security/desktop-security.cjs:16](<../../../../../../../electron/core/security/desktop-security.cjs#L16>)

**Related tests / acceptance harnesses:**

- [electron/core/security/desktop-security.test.cjs:13](<../../../../../../../electron/core/security/desktop-security.test.cjs#L13>) — static-call-site; coverage not established.
- [electron/core/security/desktop-security.test.cjs:7](<../../../../../../../electron/core/security/desktop-security.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-31cc5fb10915d561"></a>

## guardedIpc.handle.&lt;anonymous@16:31&gt;

[electron/core/security/desktop-security.cjs:16](<../../../../../../../electron/core/security/desktop-security.cjs#L16>) · ArrowFunction · production · [Electron composition and IPC security](<../../../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [guardedIpc.handle](<desktop-security.cjs.md#s-9b10b864799d9edb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |
| args | {} | compiler-inferred | required, rest |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [sameDocument](<desktop-security.cjs.md#s-9f333b962f1ebeaa>) — [electron/core/security/desktop-security.cjs:22](<../../../../../../../electron/core/security/desktop-security.cjs#L22>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/core/security/desktop-security.cjs:24](<../../../../../../../electron/core/security/desktop-security.cjs#L24>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- getContents — external-or-dynamic-dispatch; [electron/core/security/desktop-security.cjs:17](<../../../../../../../electron/core/security/desktop-security.cjs#L17>)
- handler — external-or-dynamic-dispatch; [electron/core/security/desktop-security.cjs:28](<../../../../../../../electron/core/security/desktop-security.cjs#L28>)

**Related tests / acceptance harnesses:**

- [electron/core/security/desktop-security.test.cjs:7](<../../../../../../../electron/core/security/desktop-security.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-79be8939c1c3840b"></a>

## developmentUrl

[electron/core/security/desktop-security.cjs:33](<../../../../../../../electron/core/security/desktop-security.cjs#L33>) · FunctionDeclaration · production · [Electron composition and IPC security](<../../../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: developmentUrl ([electron/core/security/desktop-security.cjs:1](<../../../../../../../electron/core/security/desktop-security.cjs#L1>)).

Lexical owner: [electron/core/security/desktop-security.cjs](<desktop-security.cjs.md#s-10a91432693ff71b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |
| packaged | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@37:82&gt;](<desktop-security.test.cjs.md#s-de3b4ce766fd2c88>) — [electron/core/security/desktop-security.test.cjs:38](<../../../../../../../electron/core/security/desktop-security.test.cjs#L38>)
- [&lt;anonymous@37:82&gt;](<desktop-security.test.cjs.md#s-de3b4ce766fd2c88>) — [electron/core/security/desktop-security.test.cjs:40](<../../../../../../../electron/core/security/desktop-security.test.cjs#L40>)
- [&lt;anonymous@37:82&gt;.&lt;anonymous@44:5&gt;](<desktop-security.test.cjs.md#s-6af6e9a5b1da87c0>) — [electron/core/security/desktop-security.test.cjs:44](<../../../../../../../electron/core/security/desktop-security.test.cjs#L44>)
- [electron/main.cjs](<../../main.cjs.md#s-f5a36143526f73da>) — [electron/main.cjs:41](<../../../../../../../electron/main.cjs#L41>)

Unresolved / external call sites: 3.

- URL — external-or-dynamic-dispatch; [electron/core/security/desktop-security.cjs:35](<../../../../../../../electron/core/security/desktop-security.cjs#L35>)
- &#91;"localhost", "127.0.0.1", "&#91;::1&#93;"&#93;.includes — external-or-dynamic-dispatch; [electron/core/security/desktop-security.cjs:38](<../../../../../../../electron/core/security/desktop-security.cjs#L38>)
- Error — external-or-dynamic-dispatch; [electron/core/security/desktop-security.cjs:42](<../../../../../../../electron/core/security/desktop-security.cjs#L42>)

**Related tests / acceptance harnesses:**

- [electron/core/security/desktop-security.test.cjs:38](<../../../../../../../electron/core/security/desktop-security.test.cjs#L38>) — static-call-site; coverage not established.
- [electron/core/security/desktop-security.test.cjs:40](<../../../../../../../electron/core/security/desktop-security.test.cjs#L40>) — static-call-site; coverage not established.
- [electron/core/security/desktop-security.test.cjs:44](<../../../../../../../electron/core/security/desktop-security.test.cjs#L44>) — static-call-site; coverage not established.
- [electron/core/security/desktop-security.test.cjs:7](<../../../../../../../electron/core/security/desktop-security.test.cjs#L7>) — file-import-only; coverage not established.
