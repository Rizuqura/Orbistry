# electron/engines/yahoo-financials/index.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [electron/engines/yahoo-financials/index.cjs:1](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/yahoo-financials/index.cjs](<index.cjs.md#s-1c365b387701deeb>) (Module)
- [argumentsSchema](<index.cjs.md#s-969bb4a72f334c56>) (SchemaBinding)
- [argumentsSchema.&lt;anonymous@12:5&gt;](<index.cjs.md#s-906407b510c11736>) (ArrowFunction)
- [normalizeSymbol](<index.cjs.md#s-9740230c6344377e>) (FunctionDeclaration)
- [nullableNumber](<index.cjs.md#s-77db237bbcabd335>) (SchemaBinding)
- [recordSchema](<index.cjs.md#s-67d881e8a8d6de63>) (SchemaBinding)
- [snapshotSchema](<index.cjs.md#s-d629928ddb317a5d>) (SchemaBinding)
- [snapshotSchema.completeDataset](<index.cjs.md#s-ad2ffd44f3b76121>) (FunctionExpression)
- [snapshotSchema.completeDataset.&lt;anonymous@89:64&gt;](<index.cjs.md#s-a853642525c2eb3c>) (ArrowFunction)
- [number](<index.cjs.md#s-710b869438332628>) (FunctionDeclaration)
- [date](<index.cjs.md#s-7b62ec51d1b26fa3>) (FunctionDeclaration)
- [normalizeRecords](<index.cjs.md#s-5bc374e230b2af7b>) (FunctionDeclaration)
- [normalizeRecords.normalizeRow](<index.cjs.md#s-cd63e09eabb87c40>) (FunctionExpression)
- [normalizeRecords.&lt;anonymous@132:11&gt;](<index.cjs.md#s-3ce63a0e005d1754>) (ArrowFunction)
- [createFinancialEngine](<index.cjs.md#s-26a29830ab4da276>) (FunctionDeclaration)
- [createFinancialEngine.fetch](<index.cjs.md#s-277d529f0f27df70>) (FunctionDeclaration)
- [createFinancialEngine.fetch.normalizeEarnings](<index.cjs.md#s-3971481138464335>) (FunctionExpression)
- [createFinancialEngine.fetch.scheduled](<index.cjs.md#s-8bdae2bb3378cbf9>) (FunctionExpression)
- [createFinancialEngine.execute](<index.cjs.md#s-3a6d910c51b3c861>) (FunctionDeclaration)
- [createFinancialEngine.getQuote](<index.cjs.md#s-2238407e6ff5dbe9>) (ArrowFunction)
- [createFinancialEngine.getPriceHistory](<index.cjs.md#s-4f24f7870860aa94>) (ArrowFunction)
- [createFinancialEngine.getFinancialStatements](<index.cjs.md#s-61ca5ba85a328c56>) (ArrowFunction)
- [createFinancialEngine.getEarnings](<index.cjs.md#s-d051797093215c68>) (ArrowFunction)
- [execute](<index.cjs.md#s-cdd8f396c2d596ee>) (FunctionDeclaration)

<a id="s-1c365b387701deeb"></a>

## electron/engines/yahoo-financials/index.cjs

[electron/engines/yahoo-financials/index.cjs:1](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [createFinancialEngine](<index.cjs.md#s-26a29830ab4da276>) — [electron/engines/yahoo-financials/index.cjs:270](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L270>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [electron/engines/yahoo-financials/index.cjs:1](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L1>)
- require — module-loader; [electron/engines/yahoo-financials/index.cjs:2](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L2>)
- require — module-loader; [electron/engines/yahoo-financials/index.cjs:3](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L3>)
- Object.freeze — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:24](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L24>)

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-969bb4a72f334c56"></a>

## argumentsSchema

[electron/engines/yahoo-financials/index.cjs:4](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L4>) · SchemaBinding · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engines/yahoo-financials/index.cjs](<index.cjs.md#s-1c365b387701deeb>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- z .object({ operation: z.enum(&#91;"quote", "history", "financials", "earnings"&#93;), symbol: z.string().min(1).max(32), range: z.enum(&#91;"1M", "3M", "6M", "1Y", "5Y", "MAX"&#93;).optional(), } — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:4](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L4>)
- z .object({ operation: z.enum(&#91;"quote", "history", "financials", "earnings"&#93;), symbol: z.string().min(1).max(32), range: z.enum(&#91;"1M", "3M", "6M", "1Y", "5Y", "MAX"&#93;).optional(), } — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:4](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L4>)
- z .object — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:4](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L4>)
- z.enum — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:6](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L6>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:7](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L7>)
- z.string().min — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:7](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L7>)
- z.string — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:7](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L7>)
- z.enum(&#91;"1M", "3M", "6M", "1Y", "5Y", "MAX"&#93;).optional — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:8](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L8>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-906407b510c11736"></a>

## argumentsSchema.&lt;anonymous@12:5&gt;

[electron/engines/yahoo-financials/index.cjs:12](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L12>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [argumentsSchema](<index.cjs.md#s-969bb4a72f334c56>).

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

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-9740230c6344377e"></a>

## normalizeSymbol

[electron/engines/yahoo-financials/index.cjs:16](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L16>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Validates bounded Yahoo tickers before provider access.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/yahoo-financials/index.cjs](<index.cjs.md#s-1c365b387701deeb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createFinancialEngine.fetch](<index.cjs.md#s-277d529f0f27df70>) — [electron/engines/yahoo-financials/index.cjs:140](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L140>)
- [createFinancialEngine.execute](<index.cjs.md#s-3a6d910c51b3c861>) — [electron/engines/yahoo-financials/index.cjs:254](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L254>)

Unresolved / external call sites: 6.

- /^&#91;A-Z0-9^&#93;&#91;A-Z0-9.^=_-&#93;{0,31}$/.test — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:19](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L19>)
- value.trim().toUpperCase — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:19](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L19>)
- value.trim — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:19](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L19>)
- Error — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:21](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L21>)
- value.trim().toUpperCase — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:22](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L22>)
- value.trim — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:22](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L22>)

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-77db237bbcabd335"></a>

## nullableNumber

[electron/engines/yahoo-financials/index.cjs:32](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L32>) · SchemaBinding · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engines/yahoo-financials/index.cjs](<index.cjs.md#s-1c365b387701deeb>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- z.number().finite().nullable — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:32](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L32>)
- z.number().finite — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:32](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L32>)
- z.number — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:32](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L32>)

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-67d881e8a8d6de63"></a>

## recordSchema

[electron/engines/yahoo-financials/index.cjs:33](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L33>) · SchemaBinding · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engines/yahoo-financials/index.cjs](<index.cjs.md#s-1c365b387701deeb>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- z .object({ periodEnd: z.string().date(), periodType: z.enum(&#91;"3M", "12M"&#93;), currency: z.string().nullable(), values: z.record(z.string(), nullableNumber), }) .strict — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:33](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L33>)
- z .object — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:33](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L33>)
- z.string().date — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:35](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L35>)
- z.string — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:35](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L35>)
- z.enum — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:36](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L36>)
- z.string().nullable — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:37](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L37>)
- z.string — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:37](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L37>)
- z.record — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:38](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L38>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-d629928ddb317a5d"></a>

## snapshotSchema

[electron/engines/yahoo-financials/index.cjs:41](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L41>) · SchemaBinding · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engines/yahoo-financials/index.cjs](<index.cjs.md#s-1c365b387701deeb>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 43.

- z .object({ schemaVersion: z.literal(1), provider: z.literal("Yahoo Finance"), symbol: z.string(), kind: z.enum(&#91;"financials", "earnings"&#93;), fetchedAt: z.string().datetime(), curre — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:41](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L41>)
- z .object({ schemaVersion: z.literal(1), provider: z.literal("Yahoo Finance"), symbol: z.string(), kind: z.enum(&#91;"financials", "earnings"&#93;), fetchedAt: z.string().datetime(), curre — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:41](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L41>)
- z .object — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:41](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L41>)
- z.literal — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:43](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L43>)
- z.literal — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:44](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L44>)
- z.string — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:45](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L45>)
- z.enum — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:46](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L46>)
- z.string().datetime — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:47](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L47>)
- 35 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-ad2ffd44f3b76121"></a>

## snapshotSchema.completeDataset

[electron/engines/yahoo-financials/index.cjs:86](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L86>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [snapshotSchema](<index.cjs.md#s-d629928ddb317a5d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| snapshot | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91;"income_statement", "balance_sheet", "cash_flow"&#93;.every — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:89](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L89>)

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-a853642525c2eb3c"></a>

## snapshotSchema.completeDataset.&lt;anonymous@89:64&gt;

[electron/engines/yahoo-financials/index.cjs:89](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L89>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [snapshotSchema.completeDataset](<index.cjs.md#s-ad2ffd44f3b76121>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Object.hasOwn — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:90](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L90>)

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-710b869438332628"></a>

## number

[electron/engines/yahoo-financials/index.cjs:95](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L95>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Preserves unavailable numeric values as null.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/yahoo-financials/index.cjs](<index.cjs.md#s-1c365b387701deeb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: number (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [normalizeRecords.normalizeRow](<index.cjs.md#s-cd63e09eabb87c40>) — [electron/engines/yahoo-financials/index.cjs:123](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L123>)
- [createFinancialEngine.fetch.normalizeEarnings](<index.cjs.md#s-3971481138464335>) — [electron/engines/yahoo-financials/index.cjs:217](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L217>)
- [createFinancialEngine.fetch.normalizeEarnings](<index.cjs.md#s-3971481138464335>) — [electron/engines/yahoo-financials/index.cjs:218](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L218>)
- [createFinancialEngine.fetch.normalizeEarnings](<index.cjs.md#s-3971481138464335>) — [electron/engines/yahoo-financials/index.cjs:219](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L219>)

Unresolved / external call sites: 1.

- Number.isFinite — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:96](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L96>)

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-7b62ec51d1b26fa3"></a>

## date

[electron/engines/yahoo-financials/index.cjs:99](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L99>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Converts provider dates to ISO timestamps without inventing missing dates.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/yahoo-financials/index.cjs](<index.cjs.md#s-1c365b387701deeb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [normalizeRecords.normalizeRow](<index.cjs.md#s-cd63e09eabb87c40>) — [electron/engines/yahoo-financials/index.cjs:110](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L110>)
- [createFinancialEngine.fetch.normalizeEarnings](<index.cjs.md#s-3971481138464335>) — [electron/engines/yahoo-financials/index.cjs:225](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L225>)
- [createFinancialEngine.fetch.scheduled](<index.cjs.md#s-8bdae2bb3378cbf9>) — [electron/engines/yahoo-financials/index.cjs:243](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L243>)

Unresolved / external call sites: 4.

- Date — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:101](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L101>)
- Number.isFinite — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:102](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L102>)
- result.getTime — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:102](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L102>)
- result.toISOString — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:102](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L102>)

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-5bc374e230b2af7b"></a>

## normalizeRecords

[electron/engines/yahoo-financials/index.cjs:105](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L105>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Normalizes statement rows preserving provider metric keys, real period ends and original units. Invalid shapes reject.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/yahoo-financials/index.cjs](<index.cjs.md#s-1c365b387701deeb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rows | any | compiler-inferred | required |
| currency | any | compiler-inferred | required |
| period | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createFinancialEngine.fetch](<index.cjs.md#s-277d529f0f27df70>) — [electron/engines/yahoo-financials/index.cjs:198](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L198>)

Unresolved / external call sites: 4.

- Array.isArray — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:106](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L106>)
- Error — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:107](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L107>)
- rows .map(function normalizeRow(row) { const periodEnd = date(row.date)?.slice(0, 10); if (!periodEnd &#124;&#124; row.periodType !== period) throw new Error("Invalid financial reporting per — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:108](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L108>)
- rows .map — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:108](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L108>)

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-cd63e09eabb87c40"></a>

## normalizeRecords.normalizeRow

[electron/engines/yahoo-financials/index.cjs:109](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L109>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [normalizeRecords](<index.cjs.md#s-5bc374e230b2af7b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: { periodEnd: any; periodType: any; currency: any; values: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [date](<index.cjs.md#s-7b62ec51d1b26fa3>) — [electron/engines/yahoo-financials/index.cjs:110](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L110>)
- [number](<index.cjs.md#s-710b869438332628>) — [electron/engines/yahoo-financials/index.cjs:123](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L123>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- date(row.date)?.slice — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:110](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L110>)
- Error — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:112](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L112>)
- Object.entries — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:114](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L114>)
- &#91;"date", "TYPE", "periodType", "currencyCode", "currency"&#93;.includes — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:116](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L116>)
- Error — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:122](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L122>)

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-3ce63a0e005d1754"></a>

## normalizeRecords.&lt;anonymous@132:11&gt;

[electron/engines/yahoo-financials/index.cjs:132](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L132>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [normalizeRecords](<index.cjs.md#s-5bc374e230b2af7b>).

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

- a.periodEnd.localeCompare — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:132](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L132>)

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-26a29830ab4da276"></a>

## createFinancialEngine

[electron/engines/yahoo-financials/index.cjs:135](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L135>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Creates a lazy keyless Yahoo client. Fetching uses a 25-second deadline and returns validated structured snapshots.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/yahoo-financials/index.cjs](<index.cjs.md#s-1c365b387701deeb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { client, clock = Date.now, signal } | { clock?: any; } | compiler-inferred | optional, default present |

Returns: { fetch: (input: any, kind: any) =&gt; unknown; execute: (raw: any) =&gt; unknown; getQuote: (symbol: any) =&gt; unknown; getPriceHistory: (symbol: any, range: any) =&gt; unknown; getFinancialStatements: (symbol: any) =&gt; unknown; getEarnings: (symbol: any) =&gt; unknown; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createMarketProvider](<market.cjs.md#s-43dae10f39c26f94>) — [electron/engines/yahoo-financials/index.cjs:137](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L137>)

**Called by (statically resolved):**

- [electron/engines/yahoo-financials/index.cjs](<index.cjs.md#s-1c365b387701deeb>) — [electron/engines/yahoo-financials/index.cjs:270](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L270>)
- [execute](<index.cjs.md#s-cdd8f396c2d596ee>) — [electron/engines/yahoo-financials/index.cjs:273](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L273>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-277d529f0f27df70"></a>

## createFinancialEngine.fetch

[electron/engines/yahoo-financials/index.cjs:139](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L139>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Retrieves financial statements or earnings for a validated ticker. Partial statement failures are reported per dataset.

Purpose evidence: jsdoc.

Lexical owner: [createFinancialEngine](<index.cjs.md#s-26a29830ab4da276>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |
| kind | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [normalizeSymbol](<index.cjs.md#s-9740230c6344377e>) — [electron/engines/yahoo-financials/index.cjs:140](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L140>)
- [normalizeRecords](<index.cjs.md#s-5bc374e230b2af7b>) — [electron/engines/yahoo-financials/index.cjs:198](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L198>)

**Called by (statically resolved):**

- [createFinancialEngine.execute](<index.cjs.md#s-3a6d910c51b3c861>) — [electron/engines/yahoo-financials/index.cjs:258](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L258>)
- [createFinancialEngine.getFinancialStatements](<index.cjs.md#s-61ca5ba85a328c56>) — [electron/engines/yahoo-financials/index.cjs:266](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L266>)
- [createFinancialEngine.getEarnings](<index.cjs.md#s-d051797093215c68>) — [electron/engines/yahoo-financials/index.cjs:267](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L267>)

Unresolved / external call sites: 25.

- &#91;"financials", "earnings"&#93;.includes — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:141](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L141>)
- Error — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:142](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L142>)
- require — module-loader; [electron/engines/yahoo-financials/index.cjs:144](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L144>)
- YahooFinance — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:145](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L145>)
- AbortSignal.timeout — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:147](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L147>)
- AbortSignal.any — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:150](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L150>)
- yahoo.quoteSummary — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:153](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L153>)
- Error — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:164](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L164>)
- 17 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-3971481138464335"></a>

## createFinancialEngine.fetch.normalizeEarnings

[electron/engines/yahoo-financials/index.cjs:216](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L216>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createFinancialEngine.fetch](<index.cjs.md#s-277d529f0f27df70>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: { periodEnd: any; announcementDate: any; currency: any; actual: number; estimate: number; surprise: number; surpriseBasis: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [number](<index.cjs.md#s-710b869438332628>) — [electron/engines/yahoo-financials/index.cjs:217](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L217>)
- [number](<index.cjs.md#s-710b869438332628>) — [electron/engines/yahoo-financials/index.cjs:218](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L218>)
- [number](<index.cjs.md#s-710b869438332628>) — [electron/engines/yahoo-financials/index.cjs:219](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L219>)
- [date](<index.cjs.md#s-7b62ec51d1b26fa3>) — [electron/engines/yahoo-financials/index.cjs:225](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L225>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Math.abs — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:222](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L222>)
- date(item.quarter)?.slice — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:225](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L225>)

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-8bdae2bb3378cbf9"></a>

## createFinancialEngine.fetch.scheduled

[electron/engines/yahoo-financials/index.cjs:241](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L241>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createFinancialEngine.fetch](<index.cjs.md#s-277d529f0f27df70>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: { date: any; estimated: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [date](<index.cjs.md#s-7b62ec51d1b26fa3>) — [electron/engines/yahoo-financials/index.cjs:243](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L243>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-3a6d910c51b3c861"></a>

## createFinancialEngine.execute

[electron/engines/yahoo-financials/index.cjs:252](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L252>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Executes only schema-validated read operations; no model text is evaluated and no arbitrary module path is accepted.

Purpose evidence: jsdoc.

Lexical owner: [createFinancialEngine](<index.cjs.md#s-26a29830ab4da276>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| raw | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [normalizeSymbol](<index.cjs.md#s-9740230c6344377e>) — [electron/engines/yahoo-financials/index.cjs:254](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L254>)
- [createFinancialEngine.fetch](<index.cjs.md#s-277d529f0f27df70>) — [electron/engines/yahoo-financials/index.cjs:258](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L258>)

**Called by (statically resolved):**

- [createFinancialEngine.getQuote](<index.cjs.md#s-2238407e6ff5dbe9>) — [electron/engines/yahoo-financials/index.cjs:263](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L263>)
- [createFinancialEngine.getPriceHistory](<index.cjs.md#s-4f24f7870860aa94>) — [electron/engines/yahoo-financials/index.cjs:265](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L265>)

Unresolved / external call sites: 3.

- argumentsSchema.parse — external-or-dynamic-dispatch; [electron/engines/yahoo-financials/index.cjs:253](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L253>)
- market.getQuote — signature-only-candidate; [electron/engines/yahoo-financials/index.cjs:255](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L255>)
- market.getPriceHistory — signature-only-candidate; [electron/engines/yahoo-financials/index.cjs:257](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L257>)

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-2238407e6ff5dbe9"></a>

## createFinancialEngine.getQuote

[electron/engines/yahoo-financials/index.cjs:263](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L263>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createFinancialEngine](<index.cjs.md#s-26a29830ab4da276>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createFinancialEngine.execute](<index.cjs.md#s-3a6d910c51b3c861>) — [electron/engines/yahoo-financials/index.cjs:263](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L263>)

**Called by (statically resolved):**

- [&lt;anonymous@60:106&gt;](<../../yahoo-engine-contract.test.cjs.md#s-769e6d6d3df34284>) — [electron/yahoo-engine-contract.test.cjs:72](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L72>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/yahoo-engine-contract.test.cjs:72](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L72>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-4f24f7870860aa94"></a>

## createFinancialEngine.getPriceHistory

[electron/engines/yahoo-financials/index.cjs:264](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L264>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createFinancialEngine](<index.cjs.md#s-26a29830ab4da276>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |
| range | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createFinancialEngine.execute](<index.cjs.md#s-3a6d910c51b3c861>) — [electron/engines/yahoo-financials/index.cjs:265](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L265>)

**Called by (statically resolved):**

- [&lt;anonymous@101:87&gt;](<../../yahoo-engine-contract.test.cjs.md#s-85faf6d2e0683001>) — [electron/yahoo-engine-contract.test.cjs:104](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L104>)
- [&lt;anonymous@101:87&gt;](<../../yahoo-engine-contract.test.cjs.md#s-85faf6d2e0683001>) — [electron/yahoo-engine-contract.test.cjs:111](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L111>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/yahoo-engine-contract.test.cjs:104](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L104>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:111](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L111>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-61ca5ba85a328c56"></a>

## createFinancialEngine.getFinancialStatements

[electron/engines/yahoo-financials/index.cjs:266](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L266>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createFinancialEngine](<index.cjs.md#s-26a29830ab4da276>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createFinancialEngine.fetch](<index.cjs.md#s-277d529f0f27df70>) — [electron/engines/yahoo-financials/index.cjs:266](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L266>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-d051797093215c68"></a>

## createFinancialEngine.getEarnings

[electron/engines/yahoo-financials/index.cjs:267](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L267>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createFinancialEngine](<index.cjs.md#s-26a29830ab4da276>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| symbol | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createFinancialEngine.fetch](<index.cjs.md#s-277d529f0f27df70>) — [electron/engines/yahoo-financials/index.cjs:267](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L267>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-cdd8f396c2d596ee"></a>

## execute

[electron/engines/yahoo-financials/index.cjs:272](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L272>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Executes a request with the shared lazy client, or a caller-scoped client/deadline for future authorized adapters.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/yahoo-financials/index.cjs](<index.cjs.md#s-1c365b387701deeb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | any | compiler-inferred | required |
| options | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createFinancialEngine](<index.cjs.md#s-26a29830ab4da276>) — [electron/engines/yahoo-financials/index.cjs:273](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L273>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- (options ? createFinancialEngine(options) : financialEngine).execute — signature-only-candidate; [electron/engines/yahoo-financials/index.cjs:273](<../../../../../../../electron/engines/yahoo-financials/index.cjs#L273>)

**Related tests / acceptance harnesses:**

- [electron/financial-service.test.cjs:10](<../../../../../../../electron/financial-service.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:4](<../../../../../../../electron/yahoo-engine-contract.test.cjs#L4>) — file-import-only; coverage not established.
