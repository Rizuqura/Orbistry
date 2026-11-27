# packages/yahoo-finance/src/daily.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [packages/yahoo-finance/src/daily.cjs:1](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [packages/yahoo-finance/src/daily.cjs](<daily.cjs.md#s-f9093eea1dc1c635>) (Module)
- [snapshotSchema](<daily.cjs.md#s-3549437b0e58d1c1>) (SchemaBinding)
- [snapshotSchema.validTimezone](<daily.cjs.md#s-7d92f99c0c1547cd>) (FunctionExpression)
- [snapshotSchema.ordered](<daily.cjs.md#s-79999aadb77e8e74>) (FunctionExpression)
- [snapshotSchema.ordered.increasing](<daily.cjs.md#s-6a642c4b29ed65eb>) (FunctionExpression)
- [instant](<daily.cjs.md#s-1ba666aa015e03d5>) (FunctionDeclaration)
- [dailyCloses](<daily.cjs.md#s-4c1f6e4debd51930>) (FunctionDeclaration)
- [dailyCloses.part](<daily.cjs.md#s-89ae83746b23dd67>) (FunctionExpression)
- [dailyCloses.chronological](<daily.cjs.md#s-fc8e56e21945c534>) (FunctionExpression)
- [dailyCloses.observation](<daily.cjs.md#s-a4a69ba3f4ea5a1c>) (FunctionExpression)
- [createDailyPriceEngine](<daily.cjs.md#s-fec08215ea1cf050>) (FunctionDeclaration)
- [createDailyPriceEngine.price](<daily.cjs.md#s-aec59085097d77c2>) (FunctionDeclaration)
- [createDailyPriceEngine.price.&lt;anonymous@197:16&gt;](<daily.cjs.md#s-2580fb547f6b83a7>) (ArrowFunction)

<a id="s-f9093eea1dc1c635"></a>

## packages/yahoo-finance/src/daily.cjs

[packages/yahoo-finance/src/daily.cjs:1](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L1>) · Module · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [createDailyPriceEngine](<daily.cjs.md#s-fec08215ea1cf050>) — [packages/yahoo-finance/src/daily.cjs:209](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L209>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [packages/yahoo-finance/src/daily.cjs:1](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L1>)
- Object.freeze — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:5](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L5>)
- require — module-loader; [packages/yahoo-finance/src/daily.cjs:71](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L71>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3549437b0e58d1c1"></a>

## snapshotSchema

[packages/yahoo-finance/src/daily.cjs:13](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L13>) · SchemaBinding · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [packages/yahoo-finance/src/daily.cjs](<daily.cjs.md#s-f9093eea1dc1c635>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 65.

- z .object({ schemaVersion: z.literal(1), engineVersion: z.literal(VERSION), provider: z.literal("Yahoo Finance"), symbol: z.string().regex(/^&#91;A-Z0-9^&#93;&#91;A-Z0-9.^=_-&#93;{0,31}$/), curren — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:13](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L13>)
- z .object({ schemaVersion: z.literal(1), engineVersion: z.literal(VERSION), provider: z.literal("Yahoo Finance"), symbol: z.string().regex(/^&#91;A-Z0-9^&#93;&#91;A-Z0-9.^=_-&#93;{0,31}$/), curren — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:13](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L13>)
- z .object({ schemaVersion: z.literal(1), engineVersion: z.literal(VERSION), provider: z.literal("Yahoo Finance"), symbol: z.string().regex(/^&#91;A-Z0-9^&#93;&#91;A-Z0-9.^=_-&#93;{0,31}$/), curren — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:13](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L13>)
- z .object — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:13](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L13>)
- z.literal — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:15](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L15>)
- z.literal — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:16](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L16>)
- z.literal — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:17](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L17>)
- z.string().regex — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:18](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L18>)
- 57 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7d92f99c0c1547cd"></a>

## snapshotSchema.validTimezone

[packages/yahoo-finance/src/daily.cjs:52](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L52>) · FunctionExpression · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [snapshotSchema](<daily.cjs.md#s-3549437b0e58d1c1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Intl.DateTimeFormat — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:54](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L54>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-79999aadb77e8e74"></a>

## snapshotSchema.ordered

[packages/yahoo-finance/src/daily.cjs:61](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L61>) · FunctionExpression · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [snapshotSchema](<daily.cjs.md#s-3549437b0e58d1c1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- value.history.every — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:62](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L62>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6a642c4b29ed65eb"></a>

## snapshotSchema.ordered.increasing

[packages/yahoo-finance/src/daily.cjs:62](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L62>) · FunctionExpression · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [snapshotSchema.ordered](<daily.cjs.md#s-79999aadb77e8e74>).

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

- Number.isFinite — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:64](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L64>)
- Date.parse — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:64](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L64>)
- new Date(point.date).toISOString().slice — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:65](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L65>)
- new Date(point.date).toISOString — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:65](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L65>)
- Date — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:65](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L65>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1ba666aa015e03d5"></a>

## instant

[packages/yahoo-finance/src/daily.cjs:74](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L74>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Converts a provider timestamp to an ISO instant, rejecting unavailable market times.

Purpose evidence: jsdoc.

Lexical owner: [packages/yahoo-finance/src/daily.cjs](<daily.cjs.md#s-f9093eea1dc1c635>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [dailyCloses](<daily.cjs.md#s-4c1f6e4debd51930>) — [packages/yahoo-finance/src/daily.cjs:99](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L99>)
- [createDailyPriceEngine.price](<daily.cjs.md#s-aec59085097d77c2>) — [packages/yahoo-finance/src/daily.cjs:177](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L177>)

Unresolved / external call sites: 5.

- Date — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:78](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L78>)
- Number.isFinite — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:79](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L79>)
- date.getTime — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:79](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L79>)
- Error — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:80](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L80>)
- date.toISOString — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:81](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L81>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4c1f6e4debd51930"></a>

## dailyCloses

[packages/yahoo-finance/src/daily.cjs:85](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L85>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Converts provider observations into ordered daily closes using the exchange's calendar date. Missing closes are skipped and duplicate dates use the last observation.

Purpose evidence: jsdoc.

Lexical owner: [packages/yahoo-finance/src/daily.cjs](<daily.cjs.md#s-f9093eea1dc1c635>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| quotes | any | compiler-inferred | required |
| timeZone | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [instant](<daily.cjs.md#s-1ba666aa015e03d5>) — [packages/yahoo-finance/src/daily.cjs:99](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L99>)

**Called by (statically resolved):**

- [createDailyPriceEngine.price](<daily.cjs.md#s-aec59085097d77c2>) — [packages/yahoo-finance/src/daily.cjs:188](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L188>)

Unresolved / external call sites: 13.

- Array.isArray — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:86](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L86>)
- Error — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:87](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L87>)
- Intl.DateTimeFormat — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:88](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L88>)
- Map — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:94](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L94>)
- Number.isFinite — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:96](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L96>)
- Object.fromEntries — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:97](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L97>)
- formatter .formatToParts(new Date(instant(point.date))) .map — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:98](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L98>)
- formatter .formatToParts — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:98](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L98>)
- 5 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-89ae83746b23dd67"></a>

## dailyCloses.part

[packages/yahoo-finance/src/daily.cjs:100](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L100>) · FunctionExpression · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [dailyCloses](<daily.cjs.md#s-4c1f6e4debd51930>).

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

No direct static call/import association found; coverage unknown.

<a id="s-fc8e56e21945c534"></a>

## dailyCloses.chronological

[packages/yahoo-finance/src/daily.cjs:107](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L107>) · FunctionExpression · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [dailyCloses](<daily.cjs.md#s-4c1f6e4debd51930>).

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

- a&#91;0&#93;.localeCompare — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:108](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L108>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a4a69ba3f4ea5a1c"></a>

## dailyCloses.observation

[packages/yahoo-finance/src/daily.cjs:110](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L110>) · FunctionExpression · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [dailyCloses](<daily.cjs.md#s-4c1f6e4debd51930>).

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

No direct static call/import association found; coverage unknown.

<a id="s-fec08215ea1cf050"></a>

## createDailyPriceEngine

[packages/yahoo-finance/src/daily.cjs:121](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L121>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Creates a reusable Yahoo market-data client. Network access starts only when price() is called, with a 25-second abort deadline.

Purpose evidence: jsdoc.

Lexical owner: [packages/yahoo-finance/src/daily.cjs](<daily.cjs.md#s-f9093eea1dc1c635>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { client, clock = Date.now } | { clock?: any; } | compiler-inferred | optional, default present |

Returns: { price: (input: any, { previous, force }?: { previous?: any; force?: boolean; }) =&gt; unknown; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [packages/yahoo-finance/src/daily.cjs](<daily.cjs.md#s-f9093eea1dc1c635>) — [packages/yahoo-finance/src/daily.cjs:209](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L209>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-aec59085097d77c2"></a>

## createDailyPriceEngine.price

[packages/yahoo-finance/src/daily.cjs:124](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L124>) · FunctionDeclaration · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Fetches the latest available regular-session quote and one year of daily history, reusing recent history from a validated snapshot.

Purpose evidence: jsdoc.

Lexical owner: [createDailyPriceEngine](<daily.cjs.md#s-fec08215ea1cf050>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |
| { previous = null, force = false } | { previous?: any; force?: boolean; } | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [normalizeSymbol](<ticker.cjs.md#s-097f2be1dc9346ef>) — [packages/yahoo-finance/src/daily.cjs:125](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L125>)
- [getClient](<client.cjs.md#s-b0f0c6073f4df961>) — [packages/yahoo-finance/src/daily.cjs:127](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L127>)
- [instant](<daily.cjs.md#s-1ba666aa015e03d5>) — [packages/yahoo-finance/src/daily.cjs:177](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L177>)
- [dailyCloses](<daily.cjs.md#s-4c1f6e4debd51930>) — [packages/yahoo-finance/src/daily.cjs:188](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L188>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 25.

- require — module-loader; [packages/yahoo-finance/src/daily.cjs:127](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L127>)
- clock — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:129](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L129>)
- AbortSignal.timeout — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:130](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L130>)
- Date.parse — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:136](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L136>)
- Date.parse — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:137](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L137>)
- Date — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:138](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L138>)
- start.setUTCFullYear — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:139](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L139>)
- start.getUTCFullYear — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:139](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L139>)
- 17 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2580fb547f6b83a7"></a>

## createDailyPriceEngine.price.&lt;anonymous@197:16&gt;

[packages/yahoo-finance/src/daily.cjs:197](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L197>) · ArrowFunction · configuration · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createDailyPriceEngine.price](<daily.cjs.md#s-aec59085097d77c2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| &#91;name, key&#93; | &#91;any, any&#93; | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Number.isFinite — external-or-dynamic-dispatch; [packages/yahoo-finance/src/daily.cjs:199](<../../../../../../../packages/yahoo-finance/src/daily.cjs#L199>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
