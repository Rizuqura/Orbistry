# electron/core/security/desktop-security.test.cjs: symbols

[Atlas](<../../../../../README.md>) / [Electron composition and IPC security](<../../../../../modules/desktop.md>) / [electron/core/security/desktop-security.test.cjs:1](<../../../../../../../electron/core/security/desktop-security.test.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/core/security/desktop-security.test.cjs](<desktop-security.test.cjs.md#s-a54adf31d39fe18b>) (Module)
- [&lt;anonymous@8:78&gt;](<desktop-security.test.cjs.md#s-b17cf90d8a60f20d>) (ArrowFunction)
- [&lt;anonymous@8:78&gt;.handle](<desktop-security.test.cjs.md#s-70106019b30b0ed6>) (ArrowFunction)
- [&lt;anonymous@8:78&gt;.&lt;anonymous@19:5&gt;](<desktop-security.test.cjs.md#s-a5c672a68a132cbf>) (ArrowFunction)
- [&lt;anonymous@8:78&gt;.&lt;anonymous@21:20&gt;](<desktop-security.test.cjs.md#s-b5faf4be0050fe0e>) (ArrowFunction)
- [&lt;anonymous@8:78&gt;.&lt;anonymous@24:5&gt;](<desktop-security.test.cjs.md#s-cb3a6454eed0b97a>) (ArrowFunction)
- [&lt;anonymous@8:78&gt;.&lt;anonymous@28:5&gt;](<desktop-security.test.cjs.md#s-6e982de12da91b12>) (ArrowFunction)
- [&lt;anonymous@8:78&gt;.&lt;anonymous@33:5&gt;](<desktop-security.test.cjs.md#s-1fb685a4a0ea8774>) (ArrowFunction)
- [&lt;anonymous@37:82&gt;](<desktop-security.test.cjs.md#s-de3b4ce766fd2c88>) (ArrowFunction)
- [&lt;anonymous@37:82&gt;.&lt;anonymous@44:5&gt;](<desktop-security.test.cjs.md#s-6af6e9a5b1da87c0>) (ArrowFunction)

<a id="s-a54adf31d39fe18b"></a>

## electron/core/security/desktop-security.test.cjs

[electron/core/security/desktop-security.test.cjs:1](<../../../../../../../electron/core/security/desktop-security.test.cjs#L1>) · Module · test · [Electron composition and IPC security](<../../../../../modules/desktop.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [electron/core/security/desktop-security.test.cjs:1](<../../../../../../../electron/core/security/desktop-security.test.cjs#L1>)
- require — module-loader; [electron/core/security/desktop-security.test.cjs:2](<../../../../../../../electron/core/security/desktop-security.test.cjs#L2>)
- require — module-loader; [electron/core/security/desktop-security.test.cjs:7](<../../../../../../../electron/core/security/desktop-security.test.cjs#L7>)
- test — external-or-dynamic-dispatch; [electron/core/security/desktop-security.test.cjs:8](<../../../../../../../electron/core/security/desktop-security.test.cjs#L8>)
- test — external-or-dynamic-dispatch; [electron/core/security/desktop-security.test.cjs:37](<../../../../../../../electron/core/security/desktop-security.test.cjs#L37>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b17cf90d8a60f20d"></a>

## &lt;anonymous@8:78&gt;

[electron/core/security/desktop-security.test.cjs:8](<../../../../../../../electron/core/security/desktop-security.test.cjs#L8>) · ArrowFunction · test · [Electron composition and IPC security](<../../../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/core/security/desktop-security.test.cjs](<desktop-security.test.cjs.md#s-a54adf31d39fe18b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [guardedIpc.handle](<desktop-security.cjs.md#s-9b10b864799d9edb>) — [electron/core/security/desktop-security.test.cjs:13](<../../../../../../../electron/core/security/desktop-security.test.cjs#L13>)
- [guardedIpc](<desktop-security.cjs.md#s-e908fc761b568a93>) — [electron/core/security/desktop-security.test.cjs:13](<../../../../../../../electron/core/security/desktop-security.test.cjs#L13>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- assert.equal — external-or-dynamic-dispatch; [electron/core/security/desktop-security.test.cjs:22](<../../../../../../../electron/core/security/desktop-security.test.cjs#L22>)
- handler — external-or-dynamic-dispatch; [electron/core/security/desktop-security.test.cjs:22](<../../../../../../../electron/core/security/desktop-security.test.cjs#L22>)
- assert.throws — external-or-dynamic-dispatch; [electron/core/security/desktop-security.test.cjs:23](<../../../../../../../electron/core/security/desktop-security.test.cjs#L23>)
- assert.throws — external-or-dynamic-dispatch; [electron/core/security/desktop-security.test.cjs:27](<../../../../../../../electron/core/security/desktop-security.test.cjs#L27>)
- assert.throws — external-or-dynamic-dispatch; [electron/core/security/desktop-security.test.cjs:32](<../../../../../../../electron/core/security/desktop-security.test.cjs#L32>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-70106019b30b0ed6"></a>

## &lt;anonymous@8:78&gt;.handle

[electron/core/security/desktop-security.test.cjs:15](<../../../../../../../electron/core/security/desktop-security.test.cjs#L15>) · ArrowFunction · test · [Electron composition and IPC security](<../../../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@8:78&gt;](<desktop-security.test.cjs.md#s-b17cf90d8a60f20d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| fn | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a5c672a68a132cbf"></a>

## &lt;anonymous@8:78&gt;.&lt;anonymous@19:5&gt;

[electron/core/security/desktop-security.test.cjs:19](<../../../../../../../electron/core/security/desktop-security.test.cjs#L19>) · ArrowFunction · test · [Electron composition and IPC security](<../../../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@8:78&gt;](<desktop-security.test.cjs.md#s-b17cf90d8a60f20d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { mainFrame: { url: string; }; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b5faf4be0050fe0e"></a>

## &lt;anonymous@8:78&gt;.&lt;anonymous@21:20&gt;

[electron/core/security/desktop-security.test.cjs:21](<../../../../../../../electron/core/security/desktop-security.test.cjs#L21>) · ArrowFunction · test · [Electron composition and IPC security](<../../../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@8:78&gt;](<desktop-security.test.cjs.md#s-b17cf90d8a60f20d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cb3a6454eed0b97a"></a>

## &lt;anonymous@8:78&gt;.&lt;anonymous@24:5&gt;

[electron/core/security/desktop-security.test.cjs:24](<../../../../../../../electron/core/security/desktop-security.test.cjs#L24>) · ArrowFunction · test · [Electron composition and IPC security](<../../../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@8:78&gt;](<desktop-security.test.cjs.md#s-b17cf90d8a60f20d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- handler — external-or-dynamic-dispatch; [electron/core/security/desktop-security.test.cjs:24](<../../../../../../../electron/core/security/desktop-security.test.cjs#L24>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6e982de12da91b12"></a>

## &lt;anonymous@8:78&gt;.&lt;anonymous@28:5&gt;

[electron/core/security/desktop-security.test.cjs:28](<../../../../../../../electron/core/security/desktop-security.test.cjs#L28>) · ArrowFunction · test · [Electron composition and IPC security](<../../../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@8:78&gt;](<desktop-security.test.cjs.md#s-b17cf90d8a60f20d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- handler — external-or-dynamic-dispatch; [electron/core/security/desktop-security.test.cjs:28](<../../../../../../../electron/core/security/desktop-security.test.cjs#L28>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1fb685a4a0ea8774"></a>

## &lt;anonymous@8:78&gt;.&lt;anonymous@33:5&gt;

[electron/core/security/desktop-security.test.cjs:33](<../../../../../../../electron/core/security/desktop-security.test.cjs#L33>) · ArrowFunction · test · [Electron composition and IPC security](<../../../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@8:78&gt;](<desktop-security.test.cjs.md#s-b17cf90d8a60f20d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- handler — external-or-dynamic-dispatch; [electron/core/security/desktop-security.test.cjs:33](<../../../../../../../electron/core/security/desktop-security.test.cjs#L33>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-de3b4ce766fd2c88"></a>

## &lt;anonymous@37:82&gt;

[electron/core/security/desktop-security.test.cjs:37](<../../../../../../../electron/core/security/desktop-security.test.cjs#L37>) · ArrowFunction · test · [Electron composition and IPC security](<../../../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/core/security/desktop-security.test.cjs](<desktop-security.test.cjs.md#s-a54adf31d39fe18b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [developmentUrl](<desktop-security.cjs.md#s-79be8939c1c3840b>) — [electron/core/security/desktop-security.test.cjs:38](<../../../../../../../electron/core/security/desktop-security.test.cjs#L38>)
- [developmentUrl](<desktop-security.cjs.md#s-79be8939c1c3840b>) — [electron/core/security/desktop-security.test.cjs:40](<../../../../../../../electron/core/security/desktop-security.test.cjs#L40>)
- [sameDocument](<desktop-security.cjs.md#s-9f333b962f1ebeaa>) — [electron/core/security/desktop-security.test.cjs:48](<../../../../../../../electron/core/security/desktop-security.test.cjs#L48>)
- [sameDocument](<desktop-security.cjs.md#s-9f333b962f1ebeaa>) — [electron/core/security/desktop-security.test.cjs:54](<../../../../../../../electron/core/security/desktop-security.test.cjs#L54>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- assert.equal — external-or-dynamic-dispatch; [electron/core/security/desktop-security.test.cjs:38](<../../../../../../../electron/core/security/desktop-security.test.cjs#L38>)
- assert.equal — external-or-dynamic-dispatch; [electron/core/security/desktop-security.test.cjs:39](<../../../../../../../electron/core/security/desktop-security.test.cjs#L39>)
- assert.throws — external-or-dynamic-dispatch; [electron/core/security/desktop-security.test.cjs:43](<../../../../../../../electron/core/security/desktop-security.test.cjs#L43>)
- assert.ok — external-or-dynamic-dispatch; [electron/core/security/desktop-security.test.cjs:47](<../../../../../../../electron/core/security/desktop-security.test.cjs#L47>)
- assert.ok — external-or-dynamic-dispatch; [electron/core/security/desktop-security.test.cjs:53](<../../../../../../../electron/core/security/desktop-security.test.cjs#L53>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6af6e9a5b1da87c0"></a>

## &lt;anonymous@37:82&gt;.&lt;anonymous@44:5&gt;

[electron/core/security/desktop-security.test.cjs:44](<../../../../../../../electron/core/security/desktop-security.test.cjs#L44>) · ArrowFunction · test · [Electron composition and IPC security](<../../../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@37:82&gt;](<desktop-security.test.cjs.md#s-de3b4ce766fd2c88>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [developmentUrl](<desktop-security.cjs.md#s-79be8939c1c3840b>) — [electron/core/security/desktop-security.test.cjs:44](<../../../../../../../electron/core/security/desktop-security.test.cjs#L44>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
