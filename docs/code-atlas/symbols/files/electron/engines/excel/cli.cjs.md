# electron/engines/excel/cli.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [electron/engines/excel/cli.cjs:1](<../../../../../../../electron/engines/excel/cli.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/excel/cli.cjs](<cli.cjs.md#s-2710164a76622e44>) (Module)
- [main](<cli.cjs.md#s-231ea947544cc1a2>) (FunctionDeclaration)
- [failed](<cli.cjs.md#s-fa73157dcd0aaca4>) (FunctionExpression)

<a id="s-2710164a76622e44"></a>

## electron/engines/excel/cli.cjs

[electron/engines/excel/cli.cjs:1](<../../../../../../../electron/engines/excel/cli.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<cli.cjs.md#s-231ea947544cc1a2>) — [electron/engines/excel/cli.cjs:15](<../../../../../../../electron/engines/excel/cli.cjs#L15>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/engines/excel/cli.cjs:1](<../../../../../../../electron/engines/excel/cli.cjs#L1>)
- main().catch — external-or-dynamic-dispatch; [electron/engines/excel/cli.cjs:15](<../../../../../../../electron/engines/excel/cli.cjs#L15>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-231ea947544cc1a2"></a>

## main

[electron/engines/excel/cli.cjs:4](<../../../../../../../electron/engines/excel/cli.cjs#L4>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Prints structured JSON by default or full faithful Markdown with --markdown. Errors go to stderr with a failing exit code; source files remain untouched.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/excel/cli.cjs](<cli.cjs.md#s-2710164a76622e44>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [renderWorkbook](<markdown.cjs.md#s-6172ce5abfe311d1>) — [electron/engines/excel/cli.cjs:11](<../../../../../../../electron/engines/excel/cli.cjs#L11>)

**Called by (statically resolved):**

- [electron/engines/excel/cli.cjs](<cli.cjs.md#s-2710164a76622e44>) — [electron/engines/excel/cli.cjs:15](<../../../../../../../electron/engines/excel/cli.cjs#L15>)

Unresolved / external call sites: 5.

- process.argv.slice — external-or-dynamic-dispatch; [electron/engines/excel/cli.cjs:5](<../../../../../../../electron/engines/excel/cli.cjs#L5>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/cli.cjs:7](<../../../../../../../electron/engines/excel/cli.cjs#L7>)
- excel — signature-only-candidate; [electron/engines/excel/cli.cjs:8](<../../../../../../../electron/engines/excel/cli.cjs#L8>)
- process.stdout.write — external-or-dynamic-dispatch; [electron/engines/excel/cli.cjs:9](<../../../../../../../electron/engines/excel/cli.cjs#L9>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/engines/excel/cli.cjs:12](<../../../../../../../electron/engines/excel/cli.cjs#L12>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fa73157dcd0aaca4"></a>

## failed

[electron/engines/excel/cli.cjs:15](<../../../../../../../electron/engines/excel/cli.cjs#L15>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engines/excel/cli.cjs](<cli.cjs.md#s-2710164a76622e44>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [electron/engines/excel/cli.cjs:16](<../../../../../../../electron/engines/excel/cli.cjs#L16>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
