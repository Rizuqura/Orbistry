# scripts/front-office-metrics-export.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/front-office-metrics-export.cjs:1](<../../../../../scripts/front-office-metrics-export.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/front-office-metrics-export.cjs](<front-office-metrics-export.cjs.md#s-1742694b8ab51707>) (Module)
- [main](<front-office-metrics-export.cjs.md#s-e062d24af962a299>) (FunctionDeclaration)
- [&lt;anonymous@34:14&gt;](<front-office-metrics-export.cjs.md#s-8acc6fa914b34948>) (ArrowFunction)

<a id="s-1742694b8ab51707"></a>

## scripts/front-office-metrics-export.cjs

[scripts/front-office-metrics-export.cjs:1](<../../../../../scripts/front-office-metrics-export.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<front-office-metrics-export.cjs.md#s-e062d24af962a299>) — [scripts/front-office-metrics-export.cjs:34](<../../../../../scripts/front-office-metrics-export.cjs#L34>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [scripts/front-office-metrics-export.cjs:8](<../../../../../scripts/front-office-metrics-export.cjs#L8>)
- require — module-loader; [scripts/front-office-metrics-export.cjs:9](<../../../../../scripts/front-office-metrics-export.cjs#L9>)
- main().catch — external-or-dynamic-dispatch; [scripts/front-office-metrics-export.cjs:34](<../../../../../scripts/front-office-metrics-export.cjs#L34>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e062d24af962a299"></a>

## main

[scripts/front-office-metrics-export.cjs:11](<../../../../../scripts/front-office-metrics-export.cjs#L11>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/front-office-metrics-export.cjs](<front-office-metrics-export.cjs.md#s-1742694b8ab51707>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [exportTraces](<../electron/ai/llm-front-office/export.cjs.md#s-6d6bd3fd1a1029c5>) — [scripts/front-office-metrics-export.cjs:30](<../../../../../scripts/front-office-metrics-export.cjs#L30>)

**Called by (statically resolved):**

- [scripts/front-office-metrics-export.cjs](<front-office-metrics-export.cjs.md#s-1742694b8ab51707>) — [scripts/front-office-metrics-export.cjs:34](<../../../../../scripts/front-office-metrics-export.cjs#L34>)

Unresolved / external call sites: 12.

- process.argv.slice — external-or-dynamic-dispatch; [scripts/front-office-metrics-export.cjs:12](<../../../../../scripts/front-office-metrics-export.cjs#L12>)
- Error — external-or-dynamic-dispatch; [scripts/front-office-metrics-export.cjs:15](<../../../../../scripts/front-office-metrics-export.cjs#L15>)
- Set — external-or-dynamic-dispatch; [scripts/front-office-metrics-export.cjs:16](<../../../../../scripts/front-office-metrics-export.cjs#L16>)
- seen.has — external-or-dynamic-dispatch; [scripts/front-office-metrics-export.cjs:19](<../../../../../scripts/front-office-metrics-export.cjs#L19>)
- Error — external-or-dynamic-dispatch; [scripts/front-office-metrics-export.cjs:19](<../../../../../scripts/front-office-metrics-export.cjs#L19>)
- seen.add — external-or-dynamic-dispatch; [scripts/front-office-metrics-export.cjs:20](<../../../../../scripts/front-office-metrics-export.cjs#L20>)
- Error — external-or-dynamic-dispatch; [scripts/front-office-metrics-export.cjs:23](<../../../../../scripts/front-office-metrics-export.cjs#L23>)
- Error — external-or-dynamic-dispatch; [scripts/front-office-metrics-export.cjs:25](<../../../../../scripts/front-office-metrics-export.cjs#L25>)
- 4 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8acc6fa914b34948"></a>

## &lt;anonymous@34:14&gt;

[scripts/front-office-metrics-export.cjs:34](<../../../../../scripts/front-office-metrics-export.cjs#L34>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/front-office-metrics-export.cjs](<front-office-metrics-export.cjs.md#s-1742694b8ab51707>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- process.stderr.write — external-or-dynamic-dispatch; [scripts/front-office-metrics-export.cjs:36](<../../../../../scripts/front-office-metrics-export.cjs#L36>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
