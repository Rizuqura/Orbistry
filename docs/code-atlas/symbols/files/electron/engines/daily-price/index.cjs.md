# electron/engines/daily-price/index.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [electron/engines/daily-price/index.cjs:1](<../../../../../../../electron/engines/daily-price/index.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/daily-price/index.cjs](<index.cjs.md#s-c714d727be02b881>) (Module)
- [snapshotSchema](<index.cjs.md#s-6e8ec316612d7dfe>) (SchemaBinding)
- [snapshotSchema.validTimezone](<index.cjs.md#s-275e63860fb9080a>) (FunctionExpression)
- [snapshotSchema.ordered](<index.cjs.md#s-2c0853dea4260fde>) (FunctionExpression)
- [snapshotSchema.ordered.increasing](<index.cjs.md#s-2787cfc15858f8ef>) (FunctionExpression)
- [normalizeSymbol](<index.cjs.md#s-13abd66ab77a6c0e>) (FunctionDeclaration)
- [instant](<index.cjs.md#s-febc0e12b7286098>) (FunctionDeclaration)
- [dailyCloses](<index.cjs.md#s-5671d79a2b9e8867>) (FunctionDeclaration)
- [dailyCloses.part](<index.cjs.md#s-36a1f43b0d8e492e>) (FunctionExpression)
- [dailyCloses.chronological](<index.cjs.md#s-65e8a156d9534eac>) (FunctionExpression)
- [dailyCloses.observation](<index.cjs.md#s-0349e090c47869b5>) (FunctionExpression)
- [createDailyPriceEngine](<index.cjs.md#s-5689428ea0fc5701>) (FunctionDeclaration)
- [createDailyPriceEngine.price](<index.cjs.md#s-d5b51b33202b9cb5>) (FunctionDeclaration)
- [createDailyPriceEngine.price.&lt;anonymous@208:16&gt;](<index.cjs.md#s-160e6ef3bdcfa252>) (ArrowFunction)

<a id="s-c714d727be02b881"></a>

## electron/engines/daily-price/index.cjs

[electron/engines/daily-price/index.cjs:1](<../../../../../../../electron/engines/daily-price/index.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [createDailyPriceEngine](<index.cjs.md#s-5689428ea0fc5701>) — [electron/engines/daily-price/index.cjs:220](<../../../../../../../electron/engines/daily-price/index.cjs#L220>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/engines/daily-price/index.cjs:1](<../../../../../../../electron/engines/daily-price/index.cjs#L1>)
- Object.freeze — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:5](<../../../../../../../electron/engines/daily-price/index.cjs#L5>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:10](<../../../../../../../electron/daily-price.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-6e8ec316612d7dfe"></a>

## snapshotSchema

[electron/engines/daily-price/index.cjs:13](<../../../../../../../electron/engines/daily-price/index.cjs#L13>) · SchemaBinding · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engines/daily-price/index.cjs](<index.cjs.md#s-c714d727be02b881>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 65.

- z .object({ schemaVersion: z.literal(1), engineVersion: z.literal(VERSION), provider: z.literal("Yahoo Finance"), symbol: z.string().regex(/^&#91;A-Z0-9^&#93;&#91;A-Z0-9.^=_-&#93;{0,31}$/), curren — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:13](<../../../../../../../electron/engines/daily-price/index.cjs#L13>)
- z .object({ schemaVersion: z.literal(1), engineVersion: z.literal(VERSION), provider: z.literal("Yahoo Finance"), symbol: z.string().regex(/^&#91;A-Z0-9^&#93;&#91;A-Z0-9.^=_-&#93;{0,31}$/), curren — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:13](<../../../../../../../electron/engines/daily-price/index.cjs#L13>)
- z .object({ schemaVersion: z.literal(1), engineVersion: z.literal(VERSION), provider: z.literal("Yahoo Finance"), symbol: z.string().regex(/^&#91;A-Z0-9^&#93;&#91;A-Z0-9.^=_-&#93;{0,31}$/), curren — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:13](<../../../../../../../electron/engines/daily-price/index.cjs#L13>)
- z .object — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:13](<../../../../../../../electron/engines/daily-price/index.cjs#L13>)
- z.literal — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:15](<../../../../../../../electron/engines/daily-price/index.cjs#L15>)
- z.literal — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:16](<../../../../../../../electron/engines/daily-price/index.cjs#L16>)
- z.literal — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:17](<../../../../../../../electron/engines/daily-price/index.cjs#L17>)
- z.string().regex — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:18](<../../../../../../../electron/engines/daily-price/index.cjs#L18>)
- 57 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:10](<../../../../../../../electron/daily-price.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-275e63860fb9080a"></a>

## snapshotSchema.validTimezone

[electron/engines/daily-price/index.cjs:52](<../../../../../../../electron/engines/daily-price/index.cjs#L52>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [snapshotSchema](<index.cjs.md#s-6e8ec316612d7dfe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Intl.DateTimeFormat — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:54](<../../../../../../../electron/engines/daily-price/index.cjs#L54>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:10](<../../../../../../../electron/daily-price.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-2c0853dea4260fde"></a>

## snapshotSchema.ordered

[electron/engines/daily-price/index.cjs:61](<../../../../../../../electron/engines/daily-price/index.cjs#L61>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [snapshotSchema](<index.cjs.md#s-6e8ec316612d7dfe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- value.history.every — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:62](<../../../../../../../electron/engines/daily-price/index.cjs#L62>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:10](<../../../../../../../electron/daily-price.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-2787cfc15858f8ef"></a>

## snapshotSchema.ordered.increasing

[electron/engines/daily-price/index.cjs:62](<../../../../../../../electron/engines/daily-price/index.cjs#L62>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [snapshotSchema.ordered](<index.cjs.md#s-2c0853dea4260fde>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| point | any | compiler-inferred | required |
| index | any | compiler-inferred | required |
| points | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- Number.isFinite — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:64](<../../../../../../../electron/engines/daily-price/index.cjs#L64>)
- Date.parse — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:64](<../../../../../../../electron/engines/daily-price/index.cjs#L64>)
- new Date(point.date).toISOString().slice — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:65](<../../../../../../../electron/engines/daily-price/index.cjs#L65>)
- new Date(point.date).toISOString — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:65](<../../../../../../../electron/engines/daily-price/index.cjs#L65>)
- Date — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:65](<../../../../../../../electron/engines/daily-price/index.cjs#L65>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:10](<../../../../../../../electron/daily-price.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-13abd66ab77a6c0e"></a>

## normalizeSymbol

[electron/engines/daily-price/index.cjs:72](<../../../../../../../electron/engines/daily-price/index.cjs#L72>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Normalizes a user-entered Yahoo ticker into a bounded symbol. Invalid symbols throw before any network request.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/daily-price/index.cjs](<index.cjs.md#s-c714d727be02b881>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createDailyPriceEngine.price](<index.cjs.md#s-d5b51b33202b9cb5>) — [electron/engines/daily-price/index.cjs:135](<../../../../../../../electron/engines/daily-price/index.cjs#L135>)

Unresolved / external call sites: 5.

- Error — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:74](<../../../../../../../electron/engines/daily-price/index.cjs#L74>)
- value.trim().toUpperCase — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:75](<../../../../../../../electron/engines/daily-price/index.cjs#L75>)
- value.trim — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:75](<../../../../../../../electron/engines/daily-price/index.cjs#L75>)
- /^&#91;A-Z0-9^&#93;&#91;A-Z0-9.^=_-&#93;{0,31}$/.test — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:76](<../../../../../../../electron/engines/daily-price/index.cjs#L76>)
- Error — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:77](<../../../../../../../electron/engines/daily-price/index.cjs#L77>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:10](<../../../../../../../electron/daily-price.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-febc0e12b7286098"></a>

## instant

[electron/engines/daily-price/index.cjs:84](<../../../../../../../electron/engines/daily-price/index.cjs#L84>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Converts a provider timestamp to an ISO instant, rejecting unavailable market times.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/daily-price/index.cjs](<index.cjs.md#s-c714d727be02b881>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [dailyCloses](<index.cjs.md#s-5671d79a2b9e8867>) — [electron/engines/daily-price/index.cjs:109](<../../../../../../../electron/engines/daily-price/index.cjs#L109>)
- [createDailyPriceEngine.price](<index.cjs.md#s-d5b51b33202b9cb5>) — [electron/engines/daily-price/index.cjs:188](<../../../../../../../electron/engines/daily-price/index.cjs#L188>)

Unresolved / external call sites: 5.

- Date — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:88](<../../../../../../../electron/engines/daily-price/index.cjs#L88>)
- Number.isFinite — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:89](<../../../../../../../electron/engines/daily-price/index.cjs#L89>)
- date.getTime — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:89](<../../../../../../../electron/engines/daily-price/index.cjs#L89>)
- Error — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:90](<../../../../../../../electron/engines/daily-price/index.cjs#L90>)
- date.toISOString — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:91](<../../../../../../../electron/engines/daily-price/index.cjs#L91>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:10](<../../../../../../../electron/daily-price.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-5671d79a2b9e8867"></a>

## dailyCloses

[electron/engines/daily-price/index.cjs:95](<../../../../../../../electron/engines/daily-price/index.cjs#L95>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Converts provider observations into ordered daily closes using the exchange's calendar date. Missing closes are skipped and duplicate dates use the last observation.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/daily-price/index.cjs](<index.cjs.md#s-c714d727be02b881>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| quotes | any | compiler-inferred | required |
| timeZone | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [instant](<index.cjs.md#s-febc0e12b7286098>) — [electron/engines/daily-price/index.cjs:109](<../../../../../../../electron/engines/daily-price/index.cjs#L109>)

**Called by (statically resolved):**

- [createDailyPriceEngine.price](<index.cjs.md#s-d5b51b33202b9cb5>) — [electron/engines/daily-price/index.cjs:199](<../../../../../../../electron/engines/daily-price/index.cjs#L199>)

Unresolved / external call sites: 13.

- Array.isArray — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:96](<../../../../../../../electron/engines/daily-price/index.cjs#L96>)
- Error — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:97](<../../../../../../../electron/engines/daily-price/index.cjs#L97>)
- Intl.DateTimeFormat — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:98](<../../../../../../../electron/engines/daily-price/index.cjs#L98>)
- Map — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:104](<../../../../../../../electron/engines/daily-price/index.cjs#L104>)
- Number.isFinite — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:106](<../../../../../../../electron/engines/daily-price/index.cjs#L106>)
- Object.fromEntries — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:107](<../../../../../../../electron/engines/daily-price/index.cjs#L107>)
- formatter .formatToParts(new Date(instant(point.date))) .map — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:108](<../../../../../../../electron/engines/daily-price/index.cjs#L108>)
- formatter .formatToParts — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:108](<../../../../../../../electron/engines/daily-price/index.cjs#L108>)
- 5 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:10](<../../../../../../../electron/daily-price.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-36a1f43b0d8e492e"></a>

## dailyCloses.part

[electron/engines/daily-price/index.cjs:110](<../../../../../../../electron/engines/daily-price/index.cjs#L110>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [dailyCloses](<index.cjs.md#s-5671d79a2b9e8867>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:10](<../../../../../../../electron/daily-price.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-65e8a156d9534eac"></a>

## dailyCloses.chronological

[electron/engines/daily-price/index.cjs:117](<../../../../../../../electron/engines/daily-price/index.cjs#L117>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [dailyCloses](<index.cjs.md#s-5671d79a2b9e8867>).

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

- a&#91;0&#93;.localeCompare — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:118](<../../../../../../../electron/engines/daily-price/index.cjs#L118>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:10](<../../../../../../../electron/daily-price.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-0349e090c47869b5"></a>

## dailyCloses.observation

[electron/engines/daily-price/index.cjs:120](<../../../../../../../electron/engines/daily-price/index.cjs#L120>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [dailyCloses](<index.cjs.md#s-5671d79a2b9e8867>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| &#91;date, close&#93; | &#91;any, any&#93; | compiler-inferred | required |

Returns: { date: any; close: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:10](<../../../../../../../electron/daily-price.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-5689428ea0fc5701"></a>

## createDailyPriceEngine

[electron/engines/daily-price/index.cjs:131](<../../../../../../../electron/engines/daily-price/index.cjs#L131>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Creates a reusable Yahoo market-data client. Network access starts only when price() is called, with a 25-second abort deadline.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/daily-price/index.cjs](<index.cjs.md#s-c714d727be02b881>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { client, clock = Date.now } | { clock?: any; } | compiler-inferred | optional, default present |

Returns: { price: (input: any, { previous, force }?: { previous?: any; force?: boolean; }) =&gt; unknown; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [electron/engines/daily-price/index.cjs](<index.cjs.md#s-c714d727be02b881>) — [electron/engines/daily-price/index.cjs:220](<../../../../../../../electron/engines/daily-price/index.cjs#L220>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:10](<../../../../../../../electron/daily-price.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-d5b51b33202b9cb5"></a>

## createDailyPriceEngine.price

[electron/engines/daily-price/index.cjs:134](<../../../../../../../electron/engines/daily-price/index.cjs#L134>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Fetches the latest available regular-session quote and one year of daily history, reusing recent history from a validated snapshot.

Purpose evidence: jsdoc.

Lexical owner: [createDailyPriceEngine](<index.cjs.md#s-5689428ea0fc5701>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |
| { previous = null, force = false } | { previous?: any; force?: boolean; } | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [normalizeSymbol](<index.cjs.md#s-13abd66ab77a6c0e>) — [electron/engines/daily-price/index.cjs:135](<../../../../../../../electron/engines/daily-price/index.cjs#L135>)
- [instant](<index.cjs.md#s-febc0e12b7286098>) — [electron/engines/daily-price/index.cjs:188](<../../../../../../../electron/engines/daily-price/index.cjs#L188>)
- [dailyCloses](<index.cjs.md#s-5671d79a2b9e8867>) — [electron/engines/daily-price/index.cjs:199](<../../../../../../../electron/engines/daily-price/index.cjs#L199>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 26.

- require — module-loader; [electron/engines/daily-price/index.cjs:137](<../../../../../../../electron/engines/daily-price/index.cjs#L137>)
- YahooFinance — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:138](<../../../../../../../electron/engines/daily-price/index.cjs#L138>)
- clock — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:140](<../../../../../../../electron/engines/daily-price/index.cjs#L140>)
- AbortSignal.timeout — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:141](<../../../../../../../electron/engines/daily-price/index.cjs#L141>)
- Date.parse — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:147](<../../../../../../../electron/engines/daily-price/index.cjs#L147>)
- Date.parse — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:148](<../../../../../../../electron/engines/daily-price/index.cjs#L148>)
- Date — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:149](<../../../../../../../electron/engines/daily-price/index.cjs#L149>)
- start.setUTCFullYear — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:150](<../../../../../../../electron/engines/daily-price/index.cjs#L150>)
- 18 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:10](<../../../../../../../electron/daily-price.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-160e6ef3bdcfa252"></a>

## createDailyPriceEngine.price.&lt;anonymous@208:16&gt;

[electron/engines/daily-price/index.cjs:208](<../../../../../../../electron/engines/daily-price/index.cjs#L208>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createDailyPriceEngine.price](<index.cjs.md#s-d5b51b33202b9cb5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| &#91;name, key&#93; | &#91;any, any&#93; | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Number.isFinite — external-or-dynamic-dispatch; [electron/engines/daily-price/index.cjs:210](<../../../../../../../electron/engines/daily-price/index.cjs#L210>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:10](<../../../../../../../electron/daily-price.test.cjs#L10>) — file-import-only; coverage not established.
