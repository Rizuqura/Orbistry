# packages/yahoo-finance/index.cjs: symbols

[Atlas](<../../../../README.md>) / [Built-in Engines and data adapters](<../../../../modules/engines.md>) / [packages/yahoo-finance/index.cjs:1](<../../../../../../packages/yahoo-finance/index.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [packages/yahoo-finance/index.cjs](<index.cjs.md#s-450268f18736c551>) (Module)
- [execute](<index.cjs.md#s-98004d6513de9c4f>) (FunctionDeclaration)

<a id="s-450268f18736c551"></a>

## packages/yahoo-finance/index.cjs

[packages/yahoo-finance/index.cjs:1](<../../../../../../packages/yahoo-finance/index.cjs#L1>) · Module · configuration · [Built-in Engines and data adapters](<../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [packages/yahoo-finance/index.cjs:1](<../../../../../../packages/yahoo-finance/index.cjs#L1>)
- require — module-loader; [packages/yahoo-finance/index.cjs:2](<../../../../../../packages/yahoo-finance/index.cjs#L2>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-98004d6513de9c4f"></a>

## execute

[packages/yahoo-finance/index.cjs:4](<../../../../../../packages/yahoo-finance/index.cjs#L4>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../modules/engines.md>)

Routes declared package operations to the original validating adapters and preserves their structured results.

Purpose evidence: jsdoc.

Exported as: execute ([packages/yahoo-finance/index.cjs:1](<../../../../../../packages/yahoo-finance/index.cjs#L1>)).

Lexical owner: [packages/yahoo-finance/index.cjs](<index.cjs.md#s-450268f18736c551>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { operation, input } | { operation: any; input: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- daily.price — signature-only-candidate; [packages/yahoo-finance/index.cjs:5](<../../../../../../packages/yahoo-finance/index.cjs#L5>)
- financials.execute — signature-only-candidate; [packages/yahoo-finance/index.cjs:6](<../../../../../../packages/yahoo-finance/index.cjs#L6>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
