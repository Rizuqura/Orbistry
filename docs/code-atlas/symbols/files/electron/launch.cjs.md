# electron/launch.cjs: symbols

[Atlas](<../../../README.md>) / [Electron composition and IPC security](<../../../modules/desktop.md>) / [electron/launch.cjs:1](<../../../../../electron/launch.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/launch.cjs](<launch.cjs.md#s-d108f8630511dfa5>) (Module)
- [&lt;anonymous@16:18&gt;](<launch.cjs.md#s-a6e09a4394b49f89>) (ArrowFunction)
- [&lt;anonymous@17:19&gt;](<launch.cjs.md#s-836e6b1b5ea9e881>) (ArrowFunction)

<a id="s-d108f8630511dfa5"></a>

## electron/launch.cjs

[electron/launch.cjs:1](<../../../../../electron/launch.cjs#L1>) · Module · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [electron/launch.cjs:1](<../../../../../electron/launch.cjs#L1>)
- require — module-loader; [electron/launch.cjs:2](<../../../../../electron/launch.cjs#L2>)
- require — module-loader; [electron/launch.cjs:3](<../../../../../electron/launch.cjs#L3>)
- spawn — external-or-dynamic-dispatch; [electron/launch.cjs:10](<../../../../../electron/launch.cjs#L10>)
- path.resolve — external-or-dynamic-dispatch; [electron/launch.cjs:11](<../../../../../electron/launch.cjs#L11>)
- child.on — external-or-dynamic-dispatch; [electron/launch.cjs:16](<../../../../../electron/launch.cjs#L16>)
- child.on — external-or-dynamic-dispatch; [electron/launch.cjs:17](<../../../../../electron/launch.cjs#L17>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a6e09a4394b49f89"></a>

## &lt;anonymous@16:18&gt;

[electron/launch.cjs:16](<../../../../../electron/launch.cjs#L16>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/launch.cjs](<launch.cjs.md#s-d108f8630511dfa5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| code | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- process.exit — external-or-dynamic-dispatch; [electron/launch.cjs:16](<../../../../../electron/launch.cjs#L16>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-836e6b1b5ea9e881"></a>

## &lt;anonymous@17:19&gt;

[electron/launch.cjs:17](<../../../../../electron/launch.cjs#L17>) · ArrowFunction · production · [Electron composition and IPC security](<../../../modules/desktop.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/launch.cjs](<launch.cjs.md#s-d108f8630511dfa5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- console.error — external-or-dynamic-dispatch; [electron/launch.cjs:18](<../../../../../electron/launch.cjs#L18>)
- process.exit — external-or-dynamic-dispatch; [electron/launch.cjs:19](<../../../../../electron/launch.cjs#L19>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
