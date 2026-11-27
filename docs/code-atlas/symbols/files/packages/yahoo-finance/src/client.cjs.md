# packages/yahoo-finance/src/client.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [packages/yahoo-finance/src/client.cjs:1](<../../../../../../../packages/yahoo-finance/src/client.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [packages/yahoo-finance/src/client.cjs](<client.cjs.md#s-c0857268304ebae0>) (Module)
- [getClient](<client.cjs.md#s-b0f0c6073f4df961>) (FunctionDeclaration)

<a id="s-c0857268304ebae0"></a>

## packages/yahoo-finance/src/client.cjs

[packages/yahoo-finance/src/client.cjs:1](<../../../../../../../packages/yahoo-finance/src/client.cjs#L1>) · Module · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b0f0c6073f4df961"></a>

## getClient

[packages/yahoo-finance/src/client.cjs:3](<../../../../../../../packages/yahoo-finance/src/client.cjs#L3>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Creates the keyless Yahoo provider only on an explicit operation.

Purpose evidence: jsdoc.

Exported as: getClient ([packages/yahoo-finance/src/client.cjs:1](<../../../../../../../packages/yahoo-finance/src/client.cjs#L1>)).

Lexical owner: [packages/yahoo-finance/src/client.cjs](<client.cjs.md#s-c0857268304ebae0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createDailyPriceEngine.price](<daily.cjs.md#s-aec59085097d77c2>) — [packages/yahoo-finance/src/daily.cjs:127](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L127>)
- [createFinancialEngine.fetch](<financials.cjs.md#s-375daea707d3fd52>) — [packages/yahoo-finance/src/financials.cjs:144](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L144>)
- [createMarketProvider.provider](<market.cjs.md#s-dc8c659753ee7b6a>) — [packages/yahoo-finance/src/market.cjs:84](<../../../../../../../packages/yahoo-finance/src/market.cjs#L84>)

Unresolved / external call sites: 2.

- require — module-loader; [packages/yahoo-finance/src/client.cjs:5](<../../../../../../../packages/yahoo-finance/src/client.cjs#L5>)
- YahooFinance — external-or-dynamic-dispatch; [packages/yahoo-finance/src/client.cjs:6](<../../../../../../../packages/yahoo-finance/src/client.cjs#L6>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
