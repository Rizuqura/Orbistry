# examples/engines/weather-demo/index.cjs: symbols

[Atlas](<../../../../../README.md>) / [Engine authoring examples](<../../../../../modules/examples.md>) / [examples/engines/weather-demo/index.cjs:1](<../../../../../../../examples/engines/weather-demo/index.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [examples/engines/weather-demo/index.cjs](<index.cjs.md#s-ee0e6db9a2819700>) (Module)
- [execute](<index.cjs.md#s-e7ece744e2d42614>) (FunctionDeclaration)

<a id="s-ee0e6db9a2819700"></a>

## examples/engines/weather-demo/index.cjs

[examples/engines/weather-demo/index.cjs:1](<../../../../../../../examples/engines/weather-demo/index.cjs#L1>) · Module · example · [Engine authoring examples](<../../../../../modules/examples.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e7ece744e2d42614"></a>

## execute

[examples/engines/weather-demo/index.cjs:2](<../../../../../../../examples/engines/weather-demo/index.cjs#L2>) · FunctionDeclaration · example · [Engine authoring examples](<../../../../../modules/examples.md>)

Provides deterministic synthetic temperature observations for package integration tests.

Purpose evidence: jsdoc.

Exported as: execute ([examples/engines/weather-demo/index.cjs:1](<../../../../../../../examples/engines/weather-demo/index.cjs#L1>)).

Lexical owner: [examples/engines/weather-demo/index.cjs](<index.cjs.md#s-ee0e6db9a2819700>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { operation, input } | { operation: any; input: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [examples/engines/weather-demo/index.cjs:3](<../../../../../../../examples/engines/weather-demo/index.cjs#L3>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
