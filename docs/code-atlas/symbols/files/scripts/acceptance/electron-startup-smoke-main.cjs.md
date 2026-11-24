# scripts/acceptance/electron-startup-smoke-main.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-startup-smoke-main.cjs:1](<../../../../../../scripts/acceptance/electron-startup-smoke-main.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-startup-smoke-main.cjs](<electron-startup-smoke-main.cjs.md#s-5e3fae8c2728b6a9>) (Module)
- [&lt;anonymous@3:26&gt;](<electron-startup-smoke-main.cjs.md#s-7171175a2e6527a1>) (ArrowFunction)
- [&lt;anonymous@3:26&gt;.&lt;anonymous@4:40&gt;](<electron-startup-smoke-main.cjs.md#s-d9a81d93f2b9c9f7>) (ArrowFunction)
- [&lt;anonymous@9:18&gt;](<electron-startup-smoke-main.cjs.md#s-006119a0a731f166>) (ArrowFunction)
- [&lt;anonymous@9:18&gt;.&lt;anonymous@13:9&gt;](<electron-startup-smoke-main.cjs.md#s-b0e7e79e47629e44>) (ArrowFunction)

<a id="s-5e3fae8c2728b6a9"></a>

## scripts/acceptance/electron-startup-smoke-main.cjs

[scripts/acceptance/electron-startup-smoke-main.cjs:1](<../../../../../../scripts/acceptance/electron-startup-smoke-main.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [scripts/acceptance/electron-startup-smoke-main.cjs:1](<../../../../../../scripts/acceptance/electron-startup-smoke-main.cjs#L1>)
- ipcMain.handle.bind — external-or-dynamic-dispatch; [scripts/acceptance/electron-startup-smoke-main.cjs:2](<../../../../../../scripts/acceptance/electron-startup-smoke-main.cjs#L2>)
- globalThis.holdStartup — signature-only-candidate; [scripts/acceptance/electron-startup-smoke-main.cjs:8](<../../../../../../scripts/acceptance/electron-startup-smoke-main.cjs#L8>)
- require — module-loader; [scripts/acceptance/electron-startup-smoke-main.cjs:21](<../../../../../../scripts/acceptance/electron-startup-smoke-main.cjs#L21>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7171175a2e6527a1"></a>

## &lt;anonymous@3:26&gt;

[scripts/acceptance/electron-startup-smoke-main.cjs:3](<../../../../../../scripts/acceptance/electron-startup-smoke-main.cjs#L3>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-startup-smoke-main.cjs](<electron-startup-smoke-main.cjs.md#s-5e3fae8c2728b6a9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Promise — external-or-dynamic-dispatch; [scripts/acceptance/electron-startup-smoke-main.cjs:4](<../../../../../../scripts/acceptance/electron-startup-smoke-main.cjs#L4>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d9a81d93f2b9c9f7"></a>

## &lt;anonymous@3:26&gt;.&lt;anonymous@4:40&gt;

[scripts/acceptance/electron-startup-smoke-main.cjs:4](<../../../../../../scripts/acceptance/electron-startup-smoke-main.cjs#L4>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@3:26&gt;](<electron-startup-smoke-main.cjs.md#s-7171175a2e6527a1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| resolve | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-006119a0a731f166"></a>

## &lt;anonymous@9:18&gt;

[scripts/acceptance/electron-startup-smoke-main.cjs:9](<../../../../../../scripts/acceptance/electron-startup-smoke-main.cjs#L9>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-startup-smoke-main.cjs](<electron-startup-smoke-main.cjs.md#s-5e3fae8c2728b6a9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| channel | any | compiler-inferred | required |
| handler | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- originalHandle — external-or-dynamic-dispatch; [scripts/acceptance/electron-startup-smoke-main.cjs:10](<../../../../../../scripts/acceptance/electron-startup-smoke-main.cjs#L10>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b0e7e79e47629e44"></a>

## &lt;anonymous@9:18&gt;.&lt;anonymous@13:9&gt;

[scripts/acceptance/electron-startup-smoke-main.cjs:13](<../../../../../../scripts/acceptance/electron-startup-smoke-main.cjs#L13>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@9:18&gt;](<electron-startup-smoke-main.cjs.md#s-006119a0a731f166>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| args | {} | compiler-inferred | required, rest |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Error — external-or-dynamic-dispatch; [scripts/acceptance/electron-startup-smoke-main.cjs:16](<../../../../../../scripts/acceptance/electron-startup-smoke-main.cjs#L16>)
- handler — external-or-dynamic-dispatch; [scripts/acceptance/electron-startup-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-startup-smoke-main.cjs#L17>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
