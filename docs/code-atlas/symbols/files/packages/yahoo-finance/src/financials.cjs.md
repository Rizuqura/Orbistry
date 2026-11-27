# packages/yahoo-finance/src/financials.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [packages/yahoo-finance/src/financials.cjs:1](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [packages/yahoo-finance/src/financials.cjs](<financials.cjs.md#s-900e1d1f41af1190>) (Module)
- [argumentsSchema](<financials.cjs.md#s-a7cce49c3ab1fb5b>) (SchemaBinding)
- [argumentsSchema.&lt;anonymous@12:5&gt;](<financials.cjs.md#s-750062ab2f7f9af5>) (ArrowFunction)
- [normalizeSymbol](<financials.cjs.md#s-bcbe7fad6169dfeb>) (FunctionDeclaration)
- [nullableNumber](<financials.cjs.md#s-5974eb5c68426f40>) (SchemaBinding)
- [recordSchema](<financials.cjs.md#s-265207aa09f99f92>) (SchemaBinding)
- [snapshotSchema](<financials.cjs.md#s-1ad63f63f9164d62>) (SchemaBinding)
- [snapshotSchema.completeDataset](<financials.cjs.md#s-f62cf748c88e9e35>) (FunctionExpression)
- [snapshotSchema.completeDataset.&lt;anonymous@89:64&gt;](<financials.cjs.md#s-80faf1dd805ff5b6>) (ArrowFunction)
- [number](<financials.cjs.md#s-97d8bb98145ab57d>) (FunctionDeclaration)
- [date](<financials.cjs.md#s-692e8bca887868fd>) (FunctionDeclaration)
- [normalizeRecords](<financials.cjs.md#s-76fab828677ad3e5>) (FunctionDeclaration)
- [normalizeRecords.normalizeRow](<financials.cjs.md#s-22c97497588137e0>) (FunctionExpression)
- [normalizeRecords.&lt;anonymous@132:11&gt;](<financials.cjs.md#s-d1597975dadb4565>) (ArrowFunction)
- [createFinancialEngine](<financials.cjs.md#s-56192e1eed6e5d29>) (FunctionDeclaration)
- [createFinancialEngine.fetch](<financials.cjs.md#s-375daea707d3fd52>) (FunctionDeclaration)
- [createFinancialEngine.fetch.normalizeEarnings](<financials.cjs.md#s-abd877d76eb1f5bc>) (FunctionExpression)
- [createFinancialEngine.fetch.scheduled](<financials.cjs.md#s-79297e7b7212b504>) (FunctionExpression)
- [createFinancialEngine.execute](<financials.cjs.md#s-a4d0f7ae63c7ef07>) (FunctionDeclaration)
- [createFinancialEngine.getQuote](<financials.cjs.md#s-8078a931afed3bac>) (ArrowFunction)
- [createFinancialEngine.getPriceHistory](<financials.cjs.md#s-6be68267c6d4bc33>) (ArrowFunction)
- [createFinancialEngine.getFinancialStatements](<financials.cjs.md#s-40255cc6938e44f6>) (ArrowFunction)
- [createFinancialEngine.getEarnings](<financials.cjs.md#s-3359ba862fa14341>) (ArrowFunction)
- [execute](<financials.cjs.md#s-842c460a14a27a9a>) (FunctionDeclaration)

<a id="s-900e1d1f41af1190"></a>

## packages/yahoo-finance/src/financials.cjs

[packages/yahoo-finance/src/financials.cjs:1](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L1>) · Module · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [createFinancialEngine](<financials.cjs.md#s-56192e1eed6e5d29>) — [packages/yahoo-finance/src/financials.cjs:269](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L269>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [packages/yahoo-finance/src/financials.cjs:1](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L1>)
- require — module-loader; [packages/yahoo-finance/src/financials.cjs:2](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L2>)
- require — module-loader; [packages/yahoo-finance/src/financials.cjs:3](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L3>)
- Object.freeze — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:24](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L24>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a7cce49c3ab1fb5b"></a>

## argumentsSchema

[packages/yahoo-finance/src/financials.cjs:4](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L4>) · SchemaBinding · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [packages/yahoo-finance/src/financials.cjs](<financials.cjs.md#s-900e1d1f41af1190>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- z .object({ operation: z.enum(&#91;"quote", "history", "financials", "earnings"&#93;), symbol: z.string().min(1).max(32), range: z.enum(&#91;"1M", "3M", "6M", "1Y", "5Y", "MAX"&#93;).optional(), } — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:4](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L4>)
- z .object({ operation: z.enum(&#91;"quote", "history", "financials", "earnings"&#93;), symbol: z.string().min(1).max(32), range: z.enum(&#91;"1M", "3M", "6M", "1Y", "5Y", "MAX"&#93;).optional(), } — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:4](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L4>)
- z .object — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:4](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L4>)
- z.enum — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:6](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L6>)
- z.string().min(1).max — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:7](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L7>)
- z.string().min — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:7](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L7>)
- z.string — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:7](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L7>)
- z.enum(&#91;"1M", "3M", "6M", "1Y", "5Y", "MAX"&#93;).optional — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:8](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L8>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-750062ab2f7f9af5"></a>

## argumentsSchema.&lt;anonymous@12:5&gt;

[packages/yahoo-finance/src/financials.cjs:12](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L12>) · ArrowFunction · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [argumentsSchema](<financials.cjs.md#s-a7cce49c3ab1fb5b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bcbe7fad6169dfeb"></a>

## normalizeSymbol

[packages/yahoo-finance/src/financials.cjs:16](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L16>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Validates bounded Yahoo tickers before provider access.

Purpose evidence: jsdoc.

Lexical owner: [packages/yahoo-finance/src/financials.cjs](<financials.cjs.md#s-900e1d1f41af1190>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createFinancialEngine.fetch](<financials.cjs.md#s-375daea707d3fd52>) — [packages/yahoo-finance/src/financials.cjs:140](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L140>)
- [createFinancialEngine.execute](<financials.cjs.md#s-a4d0f7ae63c7ef07>) — [packages/yahoo-finance/src/financials.cjs:253](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L253>)

Unresolved / external call sites: 6.

- /^&#91;A-Z0-9^&#93;&#91;A-Z0-9.^=_-&#93;{0,31}$/.test — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:19](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L19>)
- value.trim().toUpperCase — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:19](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L19>)
- value.trim — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:19](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L19>)
- Error — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:21](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L21>)
- value.trim().toUpperCase — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:22](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L22>)
- value.trim — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:22](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L22>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5974eb5c68426f40"></a>

## nullableNumber

[packages/yahoo-finance/src/financials.cjs:32](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L32>) · SchemaBinding · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [packages/yahoo-finance/src/financials.cjs](<financials.cjs.md#s-900e1d1f41af1190>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- z.number().finite().nullable — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:32](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L32>)
- z.number().finite — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:32](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L32>)
- z.number — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:32](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L32>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-265207aa09f99f92"></a>

## recordSchema

[packages/yahoo-finance/src/financials.cjs:33](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L33>) · SchemaBinding · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [packages/yahoo-finance/src/financials.cjs](<financials.cjs.md#s-900e1d1f41af1190>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- z .object({ periodEnd: z.string().date(), periodType: z.enum(&#91;"3M", "12M"&#93;), currency: z.string().nullable(), values: z.record(z.string(), nullableNumber), }) .strict — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:33](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L33>)
- z .object — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:33](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L33>)
- z.string().date — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:35](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L35>)
- z.string — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:35](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L35>)
- z.enum — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:36](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L36>)
- z.string().nullable — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:37](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L37>)
- z.string — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:37](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L37>)
- z.record — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:38](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L38>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1ad63f63f9164d62"></a>

## snapshotSchema

[packages/yahoo-finance/src/financials.cjs:41](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L41>) · SchemaBinding · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [packages/yahoo-finance/src/financials.cjs](<financials.cjs.md#s-900e1d1f41af1190>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 43.

- z .object({ schemaVersion: z.literal(1), provider: z.literal("Yahoo Finance"), symbol: z.string(), kind: z.enum(&#91;"financials", "earnings"&#93;), fetchedAt: z.string().datetime(), curre — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:41](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L41>)
- z .object({ schemaVersion: z.literal(1), provider: z.literal("Yahoo Finance"), symbol: z.string(), kind: z.enum(&#91;"financials", "earnings"&#93;), fetchedAt: z.string().datetime(), curre — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:41](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L41>)
- z .object — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:41](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L41>)
- z.literal — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:43](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L43>)
- z.literal — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:44](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L44>)
- z.string — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:45](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L45>)
- z.enum — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:46](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L46>)
- z.string().datetime — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:47](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L47>)
- 35 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f62cf748c88e9e35"></a>

## snapshotSchema.completeDataset

[packages/yahoo-finance/src/financials.cjs:86](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L86>) · FunctionExpression · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [snapshotSchema](<financials.cjs.md#s-1ad63f63f9164d62>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| snapshot | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91;"income_statement", "balance_sheet", "cash_flow"&#93;.every — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:89](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L89>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-80faf1dd805ff5b6"></a>

## snapshotSchema.completeDataset.&lt;anonymous@89:64&gt;

[packages/yahoo-finance/src/financials.cjs:89](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L89>) · ArrowFunction · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [snapshotSchema.completeDataset](<financials.cjs.md#s-f62cf748c88e9e35>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Object.hasOwn — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:90](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L90>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-97d8bb98145ab57d"></a>

## number

[packages/yahoo-finance/src/financials.cjs:95](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L95>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Preserves unavailable numeric values as null.

Purpose evidence: jsdoc.

Lexical owner: [packages/yahoo-finance/src/financials.cjs](<financials.cjs.md#s-900e1d1f41af1190>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: number (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [normalizeRecords.normalizeRow](<financials.cjs.md#s-22c97497588137e0>) — [packages/yahoo-finance/src/financials.cjs:123](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L123>)
- [createFinancialEngine.fetch.normalizeEarnings](<financials.cjs.md#s-abd877d76eb1f5bc>) — [packages/yahoo-finance/src/financials.cjs:216](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L216>)
- [createFinancialEngine.fetch.normalizeEarnings](<financials.cjs.md#s-abd877d76eb1f5bc>) — [packages/yahoo-finance/src/financials.cjs:217](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L217>)
- [createFinancialEngine.fetch.normalizeEarnings](<financials.cjs.md#s-abd877d76eb1f5bc>) — [packages/yahoo-finance/src/financials.cjs:218](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L218>)

Unresolved / external call sites: 1.

- Number.isFinite — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:96](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L96>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-692e8bca887868fd"></a>

## date

[packages/yahoo-finance/src/financials.cjs:99](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L99>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Converts provider dates to ISO timestamps without inventing missing dates.

Purpose evidence: jsdoc.

Lexical owner: [packages/yahoo-finance/src/financials.cjs](<financials.cjs.md#s-900e1d1f41af1190>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [normalizeRecords.normalizeRow](<financials.cjs.md#s-22c97497588137e0>) — [packages/yahoo-finance/src/financials.cjs:110](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L110>)
- [createFinancialEngine.fetch.normalizeEarnings](<financials.cjs.md#s-abd877d76eb1f5bc>) — [packages/yahoo-finance/src/financials.cjs:224](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L224>)
- [createFinancialEngine.fetch.scheduled](<financials.cjs.md#s-79297e7b7212b504>) — [packages/yahoo-finance/src/financials.cjs:242](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L242>)

Unresolved / external call sites: 4.

- Date — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:101](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L101>)
- Number.isFinite — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:102](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L102>)
- result.getTime — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:102](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L102>)
- result.toISOString — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:102](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L102>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-76fab828677ad3e5"></a>

## normalizeRecords

[packages/yahoo-finance/src/financials.cjs:105](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L105>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Normalizes statement rows preserving provider metric keys, real period ends and original units. Invalid shapes reject.

Purpose evidence: jsdoc.

Lexical owner: [packages/yahoo-finance/src/financials.cjs](<financials.cjs.md#s-900e1d1f41af1190>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rows | any | compiler-inferred | required |
| currency | any | compiler-inferred | required |
| period | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createFinancialEngine.fetch](<financials.cjs.md#s-375daea707d3fd52>) — [packages/yahoo-finance/src/financials.cjs:197](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L197>)

Unresolved / external call sites: 4.

- Array.isArray — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:106](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L106>)
- Error — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:107](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L107>)
- rows .map(function normalizeRow(row) { const periodEnd = date(row.date)?.slice(0, 10); if (!periodEnd &#124;&#124; row.periodType !== period) throw new Error("Invalid financial reporting per — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:108](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L108>)
- rows .map — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:108](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L108>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-22c97497588137e0"></a>

## normalizeRecords.normalizeRow

[packages/yahoo-finance/src/financials.cjs:109](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L109>) · FunctionExpression · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [normalizeRecords](<financials.cjs.md#s-76fab828677ad3e5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: { periodEnd: any; periodType: any; currency: any; values: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [date](<financials.cjs.md#s-692e8bca887868fd>) — [packages/yahoo-finance/src/financials.cjs:110](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L110>)
- [number](<financials.cjs.md#s-97d8bb98145ab57d>) — [packages/yahoo-finance/src/financials.cjs:123](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L123>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- date(row.date)?.slice — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:110](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L110>)
- Error — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:112](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L112>)
- Object.entries — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:114](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L114>)
- &#91;"date", "TYPE", "periodType", "currencyCode", "currency"&#93;.includes — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:116](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L116>)
- Error — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:122](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L122>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d1597975dadb4565"></a>

## normalizeRecords.&lt;anonymous@132:11&gt;

[packages/yahoo-finance/src/financials.cjs:132](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L132>) · ArrowFunction · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [normalizeRecords](<financials.cjs.md#s-76fab828677ad3e5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- a.periodEnd.localeCompare — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:132](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L132>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-56192e1eed6e5d29"></a>

## createFinancialEngine

[packages/yahoo-finance/src/financials.cjs:135](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L135>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Creates a lazy keyless Yahoo client. Fetching uses a 25-second deadline and returns validated structured snapshots.

Purpose evidence: jsdoc.

Lexical owner: [packages/yahoo-finance/src/financials.cjs](<financials.cjs.md#s-900e1d1f41af1190>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { client, clock = Date.now, signal } | { clock?: any; } | compiler-inferred | optional, default present |

Returns: { fetch: (input: any, kind: any) =&gt; unknown; execute: (raw: any) =&gt; unknown; getQuote: (symbol: any) =&gt; unknown; getPriceHistory: (symbol: any, range: any) =&gt; unknown; getFinancialStatements: (symbol: any) =&gt; unknown; getEarnings: (symbol: any) =&gt; unknown; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createMarketProvider](<market.cjs.md#s-67d0bc4563003a0a>) — [packages/yahoo-finance/src/financials.cjs:137](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L137>)

**Called by (statically resolved):**

- [packages/yahoo-finance/src/financials.cjs](<financials.cjs.md#s-900e1d1f41af1190>) — [packages/yahoo-finance/src/financials.cjs:269](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L269>)
- [execute](<financials.cjs.md#s-842c460a14a27a9a>) — [packages/yahoo-finance/src/financials.cjs:272](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L272>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-375daea707d3fd52"></a>

## createFinancialEngine.fetch

[packages/yahoo-finance/src/financials.cjs:139](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L139>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Retrieves financial statements or earnings for a validated ticker. Partial statement failures are reported per dataset.

Purpose evidence: jsdoc.

Lexical owner: [createFinancialEngine](<financials.cjs.md#s-56192e1eed6e5d29>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |
| kind | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [normalizeSymbol](<financials.cjs.md#s-bcbe7fad6169dfeb>) — [packages/yahoo-finance/src/financials.cjs:140](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L140>)
- [getClient](<client.cjs.md#s-b0f0c6073f4df961>) — [packages/yahoo-finance/src/financials.cjs:144](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L144>)
- [normalizeRecords](<financials.cjs.md#s-76fab828677ad3e5>) — [packages/yahoo-finance/src/financials.cjs:197](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L197>)

**Called by (statically resolved):**

- [createFinancialEngine.execute](<financials.cjs.md#s-a4d0f7ae63c7ef07>) — [packages/yahoo-finance/src/financials.cjs:257](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L257>)
- [createFinancialEngine.getFinancialStatements](<financials.cjs.md#s-40255cc6938e44f6>) — [packages/yahoo-finance/src/financials.cjs:265](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L265>)
- [createFinancialEngine.getEarnings](<financials.cjs.md#s-3359ba862fa14341>) — [packages/yahoo-finance/src/financials.cjs:266](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L266>)

Unresolved / external call sites: 24.

- &#91;"financials", "earnings"&#93;.includes — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:141](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L141>)
- Error — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:142](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L142>)
- require — module-loader; [packages/yahoo-finance/src/financials.cjs:144](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L144>)
- AbortSignal.timeout — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:146](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L146>)
- AbortSignal.any — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:149](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L149>)
- yahoo.quoteSummary — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:152](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L152>)
- Error — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:163](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L163>)
- new Date(clock()).toISOString — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:170](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L170>)
- 16 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-abd877d76eb1f5bc"></a>

## createFinancialEngine.fetch.normalizeEarnings

[packages/yahoo-finance/src/financials.cjs:215](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L215>) · FunctionExpression · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createFinancialEngine.fetch](<financials.cjs.md#s-375daea707d3fd52>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: { periodEnd: any; announcementDate: any; currency: any; actual: number; estimate: number; surprise: number; surpriseBasis: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [number](<financials.cjs.md#s-97d8bb98145ab57d>) — [packages/yahoo-finance/src/financials.cjs:216](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L216>)
- [number](<financials.cjs.md#s-97d8bb98145ab57d>) — [packages/yahoo-finance/src/financials.cjs:217](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L217>)
- [number](<financials.cjs.md#s-97d8bb98145ab57d>) — [packages/yahoo-finance/src/financials.cjs:218](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L218>)
- [date](<financials.cjs.md#s-692e8bca887868fd>) — [packages/yahoo-finance/src/financials.cjs:224](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L224>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Math.abs — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:221](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L221>)
- date(item.quarter)?.slice — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:224](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L224>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-79297e7b7212b504"></a>

## createFinancialEngine.fetch.scheduled

[packages/yahoo-finance/src/financials.cjs:240](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L240>) · FunctionExpression · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createFinancialEngine.fetch](<financials.cjs.md#s-375daea707d3fd52>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: { date: any; estimated: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [date](<financials.cjs.md#s-692e8bca887868fd>) — [packages/yahoo-finance/src/financials.cjs:242](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L242>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a4d0f7ae63c7ef07"></a>

## createFinancialEngine.execute

[packages/yahoo-finance/src/financials.cjs:251](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L251>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Executes only schema-validated read operations; no model text is evaluated and no arbitrary module path is accepted.

Purpose evidence: jsdoc.

Lexical owner: [createFinancialEngine](<financials.cjs.md#s-56192e1eed6e5d29>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| raw | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [normalizeSymbol](<financials.cjs.md#s-bcbe7fad6169dfeb>) — [packages/yahoo-finance/src/financials.cjs:253](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L253>)
- [createFinancialEngine.fetch](<financials.cjs.md#s-375daea707d3fd52>) — [packages/yahoo-finance/src/financials.cjs:257](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L257>)

**Called by (statically resolved):**

- [createFinancialEngine.getQuote](<financials.cjs.md#s-8078a931afed3bac>) — [packages/yahoo-finance/src/financials.cjs:262](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L262>)
- [createFinancialEngine.getPriceHistory](<financials.cjs.md#s-6be68267c6d4bc33>) — [packages/yahoo-finance/src/financials.cjs:264](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L264>)

Unresolved / external call sites: 3.

- argumentsSchema.parse — external-or-dynamic-dispatch; [packages/yahoo-finance/src/financials.cjs:252](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L252>)
- market.getQuote — signature-only-candidate; [packages/yahoo-finance/src/financials.cjs:254](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L254>)
- market.getPriceHistory — signature-only-candidate; [packages/yahoo-finance/src/financials.cjs:256](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L256>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8078a931afed3bac"></a>

## createFinancialEngine.getQuote

[packages/yahoo-finance/src/financials.cjs:262](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L262>) · ArrowFunction · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createFinancialEngine](<financials.cjs.md#s-56192e1eed6e5d29>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createFinancialEngine.execute](<financials.cjs.md#s-a4d0f7ae63c7ef07>) — [packages/yahoo-finance/src/financials.cjs:262](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L262>)

**Called by (statically resolved):**

- [&lt;anonymous@60:106&gt;](<../../../electron/yahoo-engine-contract.test.cjs.md#s-769e6d6d3df34284>) — [electron/yahoo-engine-contract.test.cjs:72](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L72>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/yahoo-engine-contract.test.cjs:72](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L72>) — static-call-site; coverage not established.

<a id="s-6be68267c6d4bc33"></a>

## createFinancialEngine.getPriceHistory

[packages/yahoo-finance/src/financials.cjs:263](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L263>) · ArrowFunction · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createFinancialEngine](<financials.cjs.md#s-56192e1eed6e5d29>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |
| range | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createFinancialEngine.execute](<financials.cjs.md#s-a4d0f7ae63c7ef07>) — [packages/yahoo-finance/src/financials.cjs:264](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L264>)

**Called by (statically resolved):**

- [&lt;anonymous@101:87&gt;](<../../../electron/yahoo-engine-contract.test.cjs.md#s-85faf6d2e0683001>) — [electron/yahoo-engine-contract.test.cjs:104](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L104>)
- [&lt;anonymous@101:87&gt;](<../../../electron/yahoo-engine-contract.test.cjs.md#s-85faf6d2e0683001>) — [electron/yahoo-engine-contract.test.cjs:111](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L111>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/yahoo-engine-contract.test.cjs:104](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L104>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:111](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L111>) — static-call-site; coverage not established.

<a id="s-40255cc6938e44f6"></a>

## createFinancialEngine.getFinancialStatements

[packages/yahoo-finance/src/financials.cjs:265](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L265>) · ArrowFunction · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createFinancialEngine](<financials.cjs.md#s-56192e1eed6e5d29>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createFinancialEngine.fetch](<financials.cjs.md#s-375daea707d3fd52>) — [packages/yahoo-finance/src/financials.cjs:265](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L265>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3359ba862fa14341"></a>

## createFinancialEngine.getEarnings

[packages/yahoo-finance/src/financials.cjs:266](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L266>) · ArrowFunction · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createFinancialEngine](<financials.cjs.md#s-56192e1eed6e5d29>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createFinancialEngine.fetch](<financials.cjs.md#s-375daea707d3fd52>) — [packages/yahoo-finance/src/financials.cjs:266](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L266>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-842c460a14a27a9a"></a>

## execute

[packages/yahoo-finance/src/financials.cjs:271](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L271>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Executes a request with the shared lazy client, or a caller-scoped client/deadline for future authorized adapters.

Purpose evidence: jsdoc.

Lexical owner: [packages/yahoo-finance/src/financials.cjs](<financials.cjs.md#s-900e1d1f41af1190>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | any | compiler-inferred | required |
| options | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createFinancialEngine](<financials.cjs.md#s-56192e1eed6e5d29>) — [packages/yahoo-finance/src/financials.cjs:272](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L272>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- (options ? createFinancialEngine(options) : financialEngine).execute — signature-only-candidate; [packages/yahoo-finance/src/financials.cjs:272](<../../../../../../../packages/yahoo-finance/src/financials.cjs#L272>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
