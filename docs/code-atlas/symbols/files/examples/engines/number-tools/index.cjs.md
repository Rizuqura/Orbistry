# examples/engines/number-tools/index.cjs: symbols

[Atlas](<../../../../../README.md>) / [Engine authoring examples](<../../../../../modules/examples.md>) / [examples/engines/number-tools/index.cjs:1](<../../../../../../../examples/engines/number-tools/index.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [examples/engines/number-tools/index.cjs](<index.cjs.md#s-b2860e844968cc67>) (Module)
- [execute](<index.cjs.md#s-5468301120940838>) (FunctionDeclaration)

<a id="s-b2860e844968cc67"></a>

## examples/engines/number-tools/index.cjs

[examples/engines/number-tools/index.cjs:1](<../../../../../../../examples/engines/number-tools/index.cjs#L1>) · Module · example · [Engine authoring examples](<../../../../../modules/examples.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5468301120940838"></a>

## execute

[examples/engines/number-tools/index.cjs:2](<../../../../../../../examples/engines/number-tools/index.cjs#L2>) · FunctionDeclaration · example · [Engine authoring examples](<../../../../../modules/examples.md>)

Executes a deterministic operation using only explicit inputs. No source writes or network access.

Purpose evidence: jsdoc.

Exported as: execute ([examples/engines/number-tools/index.cjs:1](<../../../../../../../examples/engines/number-tools/index.cjs#L1>)).

Lexical owner: [examples/engines/number-tools/index.cjs](<index.cjs.md#s-b2860e844968cc67>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { operation, input, context } | { operation: any; input: any; context: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [examples/engines/number-tools/index.cjs:3](<../../../../../../../examples/engines/number-tools/index.cjs#L3>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
