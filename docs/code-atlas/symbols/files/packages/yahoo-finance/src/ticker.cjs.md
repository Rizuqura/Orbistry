# packages/yahoo-finance/src/ticker.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [packages/yahoo-finance/src/ticker.cjs:1](<../../../../../../../packages/yahoo-finance/src/ticker.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [packages/yahoo-finance/src/ticker.cjs](<ticker.cjs.md#s-1fb2498c03a54585>) (Module)
- [normalizeSymbol](<ticker.cjs.md#s-097f2be1dc9346ef>) (FunctionDeclaration)

<a id="s-1fb2498c03a54585"></a>

## packages/yahoo-finance/src/ticker.cjs

[packages/yahoo-finance/src/ticker.cjs:1](<../../../../../../../packages/yahoo-finance/src/ticker.cjs#L1>) · Module · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-097f2be1dc9346ef"></a>

## normalizeSymbol

[packages/yahoo-finance/src/ticker.cjs:2](<../../../../../../../packages/yahoo-finance/src/ticker.cjs#L2>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Normalizes a user-entered Yahoo ticker into a bounded symbol. Invalid symbols throw before any network request.

Purpose evidence: jsdoc.

Exported as: normalizeSymbol ([packages/yahoo-finance/src/ticker.cjs:1](<../../../../../../../packages/yahoo-finance/src/ticker.cjs#L1>)).

Lexical owner: [packages/yahoo-finance/src/ticker.cjs](<ticker.cjs.md#s-1fb2498c03a54585>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createDailyPriceEngine.price](<daily.cjs.md#s-aec59085097d77c2>) — [packages/yahoo-finance/src/daily.cjs:125](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L125>)

Unresolved / external call sites: 5.

- Error — external-or-dynamic-dispatch; [packages/yahoo-finance/src/ticker.cjs:4](<../../../../../../../packages/yahoo-finance/src/ticker.cjs#L4>)
- value.trim().toUpperCase — external-or-dynamic-dispatch; [packages/yahoo-finance/src/ticker.cjs:5](<../../../../../../../packages/yahoo-finance/src/ticker.cjs#L5>)
- value.trim — external-or-dynamic-dispatch; [packages/yahoo-finance/src/ticker.cjs:5](<../../../../../../../packages/yahoo-finance/src/ticker.cjs#L5>)
- /^&#91;A-Z0-9^&#93;&#91;A-Z0-9.^=_-&#93;{0,31}$/.test — external-or-dynamic-dispatch; [packages/yahoo-finance/src/ticker.cjs:6](<../../../../../../../packages/yahoo-finance/src/ticker.cjs#L6>)
- Error — external-or-dynamic-dispatch; [packages/yahoo-finance/src/ticker.cjs:7](<../../../../../../../packages/yahoo-finance/src/ticker.cjs#L7>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
