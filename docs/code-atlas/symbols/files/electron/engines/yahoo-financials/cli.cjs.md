# electron/engines/yahoo-financials/cli.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [electron/engines/yahoo-financials/cli.cjs:1](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/yahoo-financials/cli.cjs](<cli.cjs.md#s-126f929a8375ba68>) (Module)
- [main](<cli.cjs.md#s-1fa6950ff7b8b2b1>) (FunctionDeclaration)
- [failed](<cli.cjs.md#s-76b1684d1d6c01d5>) (FunctionExpression)

<a id="s-126f929a8375ba68"></a>

## electron/engines/yahoo-financials/cli.cjs

[electron/engines/yahoo-financials/cli.cjs:1](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<cli.cjs.md#s-1fa6950ff7b8b2b1>) — [electron/engines/yahoo-financials/cli.cjs:21](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L21>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/engines/yahoo-financials/cli.cjs:2](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L2>)
- main().catch — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/cli.cjs:21](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L21>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1fa6950ff7b8b2b1"></a>

## main

[electron/engines/yahoo-financials/cli.cjs:4](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L4>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Reads one bounded JSON request and emits one structured result; discovery is offline and errors go to stderr without stack traces.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/yahoo-financials/cli.cjs](<cli.cjs.md#s-126f929a8375ba68>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [electron/engines/yahoo-financials/cli.cjs](<cli.cjs.md#s-126f929a8375ba68>) — [electron/engines/yahoo-financials/cli.cjs:21](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L21>)

Unresolved / external call sites: 11.

- process.argv.slice(2).join — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/cli.cjs:5](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L5>)
- process.argv.slice — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/cli.cjs:5](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L5>)
- console.log — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/cli.cjs:6](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L6>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/cli.cjs:6](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L6>)
- Error — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/cli.cjs:10](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L10>)
- Buffer.byteLength — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/cli.cjs:16](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L16>)
- Error — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/cli.cjs:17](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L17>)
- console.log — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/cli.cjs:19](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L19>)
- 3 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-76b1684d1d6c01d5"></a>

## failed

[electron/engines/yahoo-financials/cli.cjs:21](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L21>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engines/yahoo-financials/cli.cjs](<cli.cjs.md#s-126f929a8375ba68>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- console.error — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/cli.cjs:22](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L22>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/cli.cjs:22](<../../../../../../../electron/engines/yahoo-financials/cli.cjs#L22>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
