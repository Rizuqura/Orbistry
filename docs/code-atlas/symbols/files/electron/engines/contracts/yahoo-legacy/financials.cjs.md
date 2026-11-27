# electron/engines/contracts/yahoo-legacy/financials.cjs: symbols

[Atlas](<../../../../../../README.md>) / [Engine package registry](<../../../../../../modules/engine-registry.md>) / [electron/engines/contracts/yahoo-legacy/financials.cjs:1](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/contracts/yahoo-legacy/financials.cjs](<financials.cjs.md#s-70dadd099a135942>) (Module)
- [nullableNumber](<financials.cjs.md#s-25df88c623361409>) (SchemaBinding)
- [recordSchema](<financials.cjs.md#s-b764e3b4d6accddc>) (SchemaBinding)
- [snapshotSchema](<financials.cjs.md#s-42c0e90c9efca278>) (SchemaBinding)
- [snapshotSchema.completeDataset](<financials.cjs.md#s-076c42af28169894>) (FunctionExpression)
- [snapshotSchema.completeDataset.&lt;anonymous@59:64&gt;](<financials.cjs.md#s-673dc90b0d46061d>) (ArrowFunction)

<a id="s-70dadd099a135942"></a>

## electron/engines/contracts/yahoo-legacy/financials.cjs

[electron/engines/contracts/yahoo-legacy/financials.cjs:1](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L1>) · Module · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/engines/contracts/yahoo-legacy/financials.cjs:1](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L1>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-25df88c623361409"></a>

## nullableNumber

[electron/engines/contracts/yahoo-legacy/financials.cjs:2](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L2>) · SchemaBinding · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engines/contracts/yahoo-legacy/financials.cjs](<financials.cjs.md#s-70dadd099a135942>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- z.number().finite().nullable — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:2](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L2>)
- z.number().finite — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:2](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L2>)
- z.number — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:2](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L2>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b764e3b4d6accddc"></a>

## recordSchema

[electron/engines/contracts/yahoo-legacy/financials.cjs:3](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L3>) · SchemaBinding · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engines/contracts/yahoo-legacy/financials.cjs](<financials.cjs.md#s-70dadd099a135942>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- z .object({ periodEnd: z.string().date(), periodType: z.enum(&#91;"3M", "12M"&#93;), currency: z.string().nullable(), values: z.record(z.string(), nullableNumber), }) .strict — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:3](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L3>)
- z .object — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:3](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L3>)
- z.string().date — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:5](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L5>)
- z.string — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:5](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L5>)
- z.enum — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:6](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L6>)
- z.string().nullable — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:7](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L7>)
- z.string — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:7](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L7>)
- z.record — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:8](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L8>)
- 1 additional sites in [symbol-index.json](<../../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-42c0e90c9efca278"></a>

## snapshotSchema

[electron/engines/contracts/yahoo-legacy/financials.cjs:11](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L11>) · SchemaBinding · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: snapshotSchema ([electron/engines/contracts/yahoo-legacy/financials.cjs:1](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L1>)).

Lexical owner: [electron/engines/contracts/yahoo-legacy/financials.cjs](<financials.cjs.md#s-70dadd099a135942>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 43.

- z .object({ schemaVersion: z.literal(1), provider: z.literal("Yahoo Finance"), symbol: z.string(), kind: z.enum(&#91;"financials", "earnings"&#93;), fetchedAt: z.string().datetime(), curre — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:11](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L11>)
- z .object({ schemaVersion: z.literal(1), provider: z.literal("Yahoo Finance"), symbol: z.string(), kind: z.enum(&#91;"financials", "earnings"&#93;), fetchedAt: z.string().datetime(), curre — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:11](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L11>)
- z .object — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:11](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L11>)
- z.literal — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:13](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L13>)
- z.literal — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:14](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L14>)
- z.string — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:15](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L15>)
- z.enum — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:16](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L16>)
- z.string().datetime — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:17](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L17>)
- 35 additional sites in [symbol-index.json](<../../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-076c42af28169894"></a>

## snapshotSchema.completeDataset

[electron/engines/contracts/yahoo-legacy/financials.cjs:56](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L56>) · FunctionExpression · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [snapshotSchema](<financials.cjs.md#s-42c0e90c9efca278>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| snapshot | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91;"income_statement", "balance_sheet", "cash_flow"&#93;.every — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:59](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L59>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-673dc90b0d46061d"></a>

## snapshotSchema.completeDataset.&lt;anonymous@59:64&gt;

[electron/engines/contracts/yahoo-legacy/financials.cjs:59](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L59>) · ArrowFunction · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [snapshotSchema.completeDataset](<financials.cjs.md#s-076c42af28169894>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Object.hasOwn — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/financials.cjs:60](<../../../../../../../../electron/engines/contracts/yahoo-legacy/financials.cjs#L60>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
