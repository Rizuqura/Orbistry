# scripts/code-atlas.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/code-atlas.cjs:1](<../../../../../scripts/code-atlas.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/code-atlas.cjs](<code-atlas.cjs.md#s-bd4afe45c746efd7>) (Module)
- [main](<code-atlas.cjs.md#s-2ad6b99e90e1524d>) (FunctionDeclaration)
- [main.&lt;anonymous@10:17&gt;](<code-atlas.cjs.md#s-9dbae2ca767767b1>) (ArrowFunction)

<a id="s-bd4afe45c746efd7"></a>

## scripts/code-atlas.cjs

[scripts/code-atlas.cjs:1](<../../../../../scripts/code-atlas.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<code-atlas.cjs.md#s-2ad6b99e90e1524d>) — [scripts/code-atlas.cjs:30](<../../../../../scripts/code-atlas.cjs#L30>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [scripts/code-atlas.cjs:1](<../../../../../scripts/code-atlas.cjs#L1>)
- require — module-loader; [scripts/code-atlas.cjs:6](<../../../../../scripts/code-atlas.cjs#L6>)
- console.error — external-or-dynamic-dispatch; [scripts/code-atlas.cjs:32](<../../../../../scripts/code-atlas.cjs#L32>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2ad6b99e90e1524d"></a>

## main

[scripts/code-atlas.cjs:9](<../../../../../scripts/code-atlas.cjs#L9>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Generates or checks repository documentation only; exits nonzero on syntax, stale-output or broken-link failures.

Purpose evidence: jsdoc.

Exported as: main ([scripts/code-atlas.cjs:1](<../../../../../scripts/code-atlas.cjs#L1>)).

Lexical owner: [scripts/code-atlas.cjs](<code-atlas.cjs.md#s-bd4afe45c746efd7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| args | any | compiler-inferred | optional, default present |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [buildAtlas](<code-atlas/generate.cjs.md#s-5686d6c95fadcfb1>) — [scripts/code-atlas.cjs:13](<../../../../../scripts/code-atlas.cjs#L13>)
- [checkAtlas](<code-atlas/generate.cjs.md#s-c248b316de4d682d>) — [scripts/code-atlas.cjs:15](<../../../../../scripts/code-atlas.cjs#L15>)
- [writeAtlas](<code-atlas/generate.cjs.md#s-b25f0ed450603f96>) — [scripts/code-atlas.cjs:21](<../../../../../scripts/code-atlas.cjs#L21>)

**Called by (statically resolved):**

- [scripts/code-atlas.cjs](<code-atlas.cjs.md#s-bd4afe45c746efd7>) — [scripts/code-atlas.cjs:30](<../../../../../scripts/code-atlas.cjs#L30>)

Unresolved / external call sites: 9.

- process.argv.slice — external-or-dynamic-dispatch; [scripts/code-atlas.cjs:9](<../../../../../scripts/code-atlas.cjs#L9>)
- args.some — external-or-dynamic-dispatch; [scripts/code-atlas.cjs:10](<../../../../../scripts/code-atlas.cjs#L10>)
- Error — external-or-dynamic-dispatch; [scripts/code-atlas.cjs:11](<../../../../../scripts/code-atlas.cjs#L11>)
- path.resolve — external-or-dynamic-dispatch; [scripts/code-atlas.cjs:12](<../../../../../scripts/code-atlas.cjs#L12>)
- args.includes — external-or-dynamic-dispatch; [scripts/code-atlas.cjs:14](<../../../../../scripts/code-atlas.cjs#L14>)
- Error — external-or-dynamic-dispatch; [scripts/code-atlas.cjs:16](<../../../../../scripts/code-atlas.cjs#L16>)
- issues.join — external-or-dynamic-dispatch; [scripts/code-atlas.cjs:16](<../../../../../scripts/code-atlas.cjs#L16>)
- console.log — external-or-dynamic-dispatch; [scripts/code-atlas.cjs:17](<../../../../../scripts/code-atlas.cjs#L17>)
- 1 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9dbae2ca767767b1"></a>

## main.&lt;anonymous@10:17&gt;

[scripts/code-atlas.cjs:10](<../../../../../scripts/code-atlas.cjs#L10>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<code-atlas.cjs.md#s-2ad6b99e90e1524d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| argument | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
