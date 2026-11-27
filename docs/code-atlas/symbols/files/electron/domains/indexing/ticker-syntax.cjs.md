# electron/domains/indexing/ticker-syntax.cjs: symbols

[Atlas](<../../../../../README.md>) / [Knowledge indexing and source access](<../../../../../modules/knowledge.md>) / [electron/domains/indexing/ticker-syntax.cjs:1](<../../../../../../../electron/domains/indexing/ticker-syntax.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/indexing/ticker-syntax.cjs](<ticker-syntax.cjs.md#s-25d06d1c5dba4377>) (Module)
- [normalizeSymbol](<ticker-syntax.cjs.md#s-fa1b2f32fc2cc10e>) (FunctionDeclaration)

<a id="s-25d06d1c5dba4377"></a>

## electron/domains/indexing/ticker-syntax.cjs

[electron/domains/indexing/ticker-syntax.cjs:1](<../../../../../../../electron/domains/indexing/ticker-syntax.cjs#L1>) · Module · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fa1b2f32fc2cc10e"></a>

## normalizeSymbol

[electron/domains/indexing/ticker-syntax.cjs:2](<../../../../../../../electron/domains/indexing/ticker-syntax.cjs#L2>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Normalizes a user-entered Yahoo ticker into a bounded symbol. Invalid symbols throw before any network request.

Purpose evidence: jsdoc.

Exported as: normalizeSymbol ([electron/domains/indexing/ticker-syntax.cjs:1](<../../../../../../../electron/domains/indexing/ticker-syntax.cjs#L1>)).

Lexical owner: [electron/domains/indexing/ticker-syntax.cjs](<ticker-syntax.cjs.md#s-25d06d1c5dba4377>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createDailyPriceService.get](<../../daily-price-service.cjs.md#s-bd43ef8b0c2d2e48>) — [electron/daily-price-service.cjs:37](<../../../../../../../electron/daily-price-service.cjs#L37>)
- [resolveIndexedPrice](<../../daily-price-service.cjs.md#s-bc6ef6804f3a2ab0>) — [electron/daily-price-service.cjs:163](<../../../../../../../electron/daily-price-service.cjs#L163>)
- [parseKnowledgeIndex](<knowledge-index.cjs.md#s-d6105072a8fa3f5f>) — [electron/domains/indexing/knowledge-index.cjs:203](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L203>)
- [parseKnowledgeIndex](<knowledge-index.cjs.md#s-d6105072a8fa3f5f>) — [electron/domains/indexing/knowledge-index.cjs:230](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L230>)
- [publicState](<../knowledge/knowledge-store.cjs.md#s-11f72856c775c5cf>) — [electron/domains/knowledge/knowledge-store.cjs:24](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L24>)
- [savePriceSymbol](<../knowledge/knowledge-store.cjs.md#s-7f44c4c9083f4688>) — [electron/domains/knowledge/knowledge-store.cjs:165](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L165>)
- [createFinancialService.get](<../../financial-service.cjs.md#s-a86ef1299cb55ce1>) — [electron/financial-service.cjs:43](<../../../../../../../electron/financial-service.cjs#L43>)
- [getAuthorizedHistory.symbol](<../../financial-service.cjs.md#s-2e1b4d6265e710ac>) — [electron/financial-service.cjs:219](<../../../../../../../electron/financial-service.cjs#L219>)

Unresolved / external call sites: 5.

- Error — external-or-dynamic-dispatch; [electron/domains/indexing/ticker-syntax.cjs:4](<../../../../../../../electron/domains/indexing/ticker-syntax.cjs#L4>)
- value.trim().toUpperCase — external-or-dynamic-dispatch; [electron/domains/indexing/ticker-syntax.cjs:5](<../../../../../../../electron/domains/indexing/ticker-syntax.cjs#L5>)
- value.trim — external-or-dynamic-dispatch; [electron/domains/indexing/ticker-syntax.cjs:5](<../../../../../../../electron/domains/indexing/ticker-syntax.cjs#L5>)
- /^&#91;A-Z0-9^&#93;&#91;A-Z0-9.^=_-&#93;{0,31}$/.test — external-or-dynamic-dispatch; [electron/domains/indexing/ticker-syntax.cjs:6](<../../../../../../../electron/domains/indexing/ticker-syntax.cjs#L6>)
- Error — external-or-dynamic-dispatch; [electron/domains/indexing/ticker-syntax.cjs:7](<../../../../../../../electron/domains/indexing/ticker-syntax.cjs#L7>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
