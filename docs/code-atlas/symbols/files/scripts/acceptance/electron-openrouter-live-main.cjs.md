# scripts/acceptance/electron-openrouter-live-main.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-openrouter-live-main.cjs:1](<../../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-openrouter-live-main.cjs](<electron-openrouter-live-main.cjs.md#s-23bff485a85792a9>) (Module)
- [&lt;anonymous@17:20&gt;](<electron-openrouter-live-main.cjs.md#s-d35ff234f814f956>) (ArrowFunction)

<a id="s-23bff485a85792a9"></a>

## scripts/acceptance/electron-openrouter-live-main.cjs

[scripts/acceptance/electron-openrouter-live-main.cjs:1](<../../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [selectUserDataPath](<../../electron/user-data-path.cjs.md#s-9b29881ed0ce8238>) — [scripts/acceptance/electron-openrouter-live-main.cjs:7](<../../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L7>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- require — module-loader; [scripts/acceptance/electron-openrouter-live-main.cjs:2](<../../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-openrouter-live-main.cjs:3](<../../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-openrouter-live-main.cjs:4](<../../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L4>)
- app.setPath — external-or-dynamic-dispatch; [scripts/acceptance/electron-openrouter-live-main.cjs:5](<../../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L5>)
- app.getPath — external-or-dynamic-dispatch; [scripts/acceptance/electron-openrouter-live-main.cjs:8](<../../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L8>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-openrouter-live-main.cjs:9](<../../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L9>)
- app.getPath — external-or-dynamic-dispatch; [scripts/acceptance/electron-openrouter-live-main.cjs:9](<../../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L9>)
- require — module-loader; [scripts/acceptance/electron-openrouter-live-main.cjs:26](<../../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L26>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d35ff234f814f956"></a>

## &lt;anonymous@17:20&gt;

[scripts/acceptance/electron-openrouter-live-main.cjs:17](<../../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L17>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-openrouter-live-main.cjs](<electron-openrouter-live-main.cjs.md#s-23bff485a85792a9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| url | any | compiler-inferred | required |
| init | {} | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- &#91;"GET", "HEAD"&#93;.includes — external-or-dynamic-dispatch; [scripts/acceptance/electron-openrouter-live-main.cjs:18](<../../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L18>)
- Promise.reject — external-or-dynamic-dispatch; [scripts/acceptance/electron-openrouter-live-main.cjs:20](<../../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L20>)
- Error — external-or-dynamic-dispatch; [scripts/acceptance/electron-openrouter-live-main.cjs:21](<../../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L21>)
- originalFetch — signature-only-candidate; [scripts/acceptance/electron-openrouter-live-main.cjs:24](<../../../../../../scripts/acceptance/electron-openrouter-live-main.cjs#L24>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
