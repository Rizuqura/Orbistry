# scripts/acceptance/electron-online-smoke-main.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-online-smoke-main.cjs:1](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-online-smoke-main.cjs](<electron-online-smoke-main.cjs.md#s-a312d35cd892736e>) (Module)
- [&lt;anonymous@22:34&gt;](<electron-online-smoke-main.cjs.md#s-badb1a3f0e706ed7>) (ArrowFunction)

<a id="s-a312d35cd892736e"></a>

## scripts/acceptance/electron-online-smoke-main.cjs

[scripts/acceptance/electron-online-smoke-main.cjs:1](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [createOnlineSmokeFetch](<../fixtures/online-smoke-fetch.cjs.md#s-973fc4236a88815b>) — [scripts/acceptance/electron-online-smoke-main.cjs:18](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L18>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 13.

- require — module-loader; [scripts/acceptance/electron-online-smoke-main.cjs:1](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L1>)
- Error — external-or-dynamic-dispatch; [scripts/acceptance/electron-online-smoke-main.cjs:3](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L3>)
- app.setPath — external-or-dynamic-dispatch; [scripts/acceptance/electron-online-smoke-main.cjs:4](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-online-smoke-main.cjs:8](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L8>)
- require — module-loader; [scripts/acceptance/electron-online-smoke-main.cjs:9](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L9>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-online-smoke-main.cjs:10](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L10>)
- fs.mkdirSync — external-or-dynamic-dispatch; [scripts/acceptance/electron-online-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L11>)
- path.dirname — external-or-dynamic-dispatch; [scripts/acceptance/electron-online-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L11>)
- 5 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-release-smoke-main.cjs:5](<../../../../../../scripts/acceptance/electron-release-smoke-main.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-startup-smoke-main.cjs:21](<../../../../../../scripts/acceptance/electron-startup-smoke-main.cjs#L21>) — file-import-only; coverage not established.

<a id="s-badb1a3f0e706ed7"></a>

## &lt;anonymous@22:34&gt;

[scripts/acceptance/electron-online-smoke-main.cjs:22](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L22>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-online-smoke-main.cjs](<electron-online-smoke-main.cjs.md#s-a312d35cd892736e>).

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

- window.webContents.setBackgroundThrottling — external-or-dynamic-dispatch; [scripts/acceptance/electron-online-smoke-main.cjs:23](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L23>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-release-smoke-main.cjs:5](<../../../../../../scripts/acceptance/electron-release-smoke-main.cjs#L5>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-startup-smoke-main.cjs:21](<../../../../../../scripts/acceptance/electron-startup-smoke-main.cjs#L21>) — file-import-only; coverage not established.
