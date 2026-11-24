# scripts/acceptance/electron-smoke-main.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-smoke-main.cjs:1](<../../../../../../scripts/acceptance/electron-smoke-main.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-smoke-main.cjs](<electron-smoke-main.cjs.md#s-ccaffedd97cc144d>) (Module)
- [&lt;anonymous@13:34&gt;](<electron-smoke-main.cjs.md#s-2fd6a7fc96476fa1>) (ArrowFunction)

<a id="s-ccaffedd97cc144d"></a>

## scripts/acceptance/electron-smoke-main.cjs

[scripts/acceptance/electron-smoke-main.cjs:1](<../../../../../../scripts/acceptance/electron-smoke-main.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 12.

- require — module-loader; [scripts/acceptance/electron-smoke-main.cjs:2](<../../../../../../scripts/acceptance/electron-smoke-main.cjs#L2>)
- Error — external-or-dynamic-dispatch; [scripts/acceptance/electron-smoke-main.cjs:4](<../../../../../../scripts/acceptance/electron-smoke-main.cjs#L4>)
- app.setPath — external-or-dynamic-dispatch; [scripts/acceptance/electron-smoke-main.cjs:5](<../../../../../../scripts/acceptance/electron-smoke-main.cjs#L5>)
- require — module-loader; [scripts/acceptance/electron-smoke-main.cjs:6](<../../../../../../scripts/acceptance/electron-smoke-main.cjs#L6>)
- require — module-loader; [scripts/acceptance/electron-smoke-main.cjs:7](<../../../../../../scripts/acceptance/electron-smoke-main.cjs#L7>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-smoke-main.cjs:8](<../../../../../../scripts/acceptance/electron-smoke-main.cjs#L8>)
- fs.mkdirSync — external-or-dynamic-dispatch; [scripts/acceptance/electron-smoke-main.cjs:9](<../../../../../../scripts/acceptance/electron-smoke-main.cjs#L9>)
- path.dirname — external-or-dynamic-dispatch; [scripts/acceptance/electron-smoke-main.cjs:9](<../../../../../../scripts/acceptance/electron-smoke-main.cjs#L9>)
- 4 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2fd6a7fc96476fa1"></a>

## &lt;anonymous@13:34&gt;

[scripts/acceptance/electron-smoke-main.cjs:13](<../../../../../../scripts/acceptance/electron-smoke-main.cjs#L13>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-smoke-main.cjs](<electron-smoke-main.cjs.md#s-ccaffedd97cc144d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| window | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.webContents.setBackgroundThrottling — external-or-dynamic-dispatch; [scripts/acceptance/electron-smoke-main.cjs:14](<../../../../../../scripts/acceptance/electron-smoke-main.cjs#L14>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
