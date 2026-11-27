# electron/engines/contracts/yahoo-legacy/daily.cjs: symbols

[Atlas](<../../../../../../README.md>) / [Engine package registry](<../../../../../../modules/engine-registry.md>) / [electron/engines/contracts/yahoo-legacy/daily.cjs:1](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/contracts/yahoo-legacy/daily.cjs](<daily.cjs.md#s-f71e742c05ac50b2>) (Module)
- [QUOTE_TTL_MS](<daily.cjs.md#s-7d3e39b3cdf5c34d>) (VariableDeclaration)
- [HISTORY_TTL_MS](<daily.cjs.md#s-c2a135b389570919>) (VariableDeclaration)
- [snapshotSchema](<daily.cjs.md#s-675034cfffe9009c>) (SchemaBinding)
- [snapshotSchema.validTimezone](<daily.cjs.md#s-be2de3d8fab58678>) (FunctionExpression)
- [snapshotSchema.ordered](<daily.cjs.md#s-e923501c560c4b52>) (FunctionExpression)
- [snapshotSchema.ordered.increasing](<daily.cjs.md#s-fb3a63fa21c6b56c>) (FunctionExpression)

<a id="s-f71e742c05ac50b2"></a>

## electron/engines/contracts/yahoo-legacy/daily.cjs

[electron/engines/contracts/yahoo-legacy/daily.cjs:1](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L1>) · Module · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/engines/contracts/yahoo-legacy/daily.cjs:1](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L1>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7d3e39b3cdf5c34d"></a>

## QUOTE_TTL_MS

[electron/engines/contracts/yahoo-legacy/daily.cjs:3](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L3>) · VariableDeclaration · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: QUOTE_TTL_MS ([electron/engines/contracts/yahoo-legacy/daily.cjs:1](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L1>)).

Lexical owner: [electron/engines/contracts/yahoo-legacy/daily.cjs](<daily.cjs.md#s-f71e742c05ac50b2>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c2a135b389570919"></a>

## HISTORY_TTL_MS

[electron/engines/contracts/yahoo-legacy/daily.cjs:4](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L4>) · VariableDeclaration · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: HISTORY_TTL_MS ([electron/engines/contracts/yahoo-legacy/daily.cjs:1](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L1>)).

Lexical owner: [electron/engines/contracts/yahoo-legacy/daily.cjs](<daily.cjs.md#s-f71e742c05ac50b2>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-675034cfffe9009c"></a>

## snapshotSchema

[electron/engines/contracts/yahoo-legacy/daily.cjs:5](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L5>) · SchemaBinding · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: snapshotSchema ([electron/engines/contracts/yahoo-legacy/daily.cjs:1](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L1>)).

Lexical owner: [electron/engines/contracts/yahoo-legacy/daily.cjs](<daily.cjs.md#s-f71e742c05ac50b2>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 65.

- z .object({ schemaVersion: z.literal(1), engineVersion: z.literal(VERSION), provider: z.literal("Yahoo Finance"), symbol: z.string().regex(/^&#91;A-Z0-9^&#93;&#91;A-Z0-9.^=_-&#93;{0,31}$/), curren — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/daily.cjs:5](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L5>)
- z .object({ schemaVersion: z.literal(1), engineVersion: z.literal(VERSION), provider: z.literal("Yahoo Finance"), symbol: z.string().regex(/^&#91;A-Z0-9^&#93;&#91;A-Z0-9.^=_-&#93;{0,31}$/), curren — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/daily.cjs:5](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L5>)
- z .object({ schemaVersion: z.literal(1), engineVersion: z.literal(VERSION), provider: z.literal("Yahoo Finance"), symbol: z.string().regex(/^&#91;A-Z0-9^&#93;&#91;A-Z0-9.^=_-&#93;{0,31}$/), curren — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/daily.cjs:5](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L5>)
- z .object — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/daily.cjs:5](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L5>)
- z.literal — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/daily.cjs:7](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L7>)
- z.literal — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/daily.cjs:8](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L8>)
- z.literal — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/daily.cjs:9](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L9>)
- z.string().regex — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/daily.cjs:10](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L10>)
- 57 additional sites in [symbol-index.json](<../../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-be2de3d8fab58678"></a>

## snapshotSchema.validTimezone

[electron/engines/contracts/yahoo-legacy/daily.cjs:44](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L44>) · FunctionExpression · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [snapshotSchema](<daily.cjs.md#s-675034cfffe9009c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Intl.DateTimeFormat — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/daily.cjs:46](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L46>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e923501c560c4b52"></a>

## snapshotSchema.ordered

[electron/engines/contracts/yahoo-legacy/daily.cjs:53](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L53>) · FunctionExpression · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [snapshotSchema](<daily.cjs.md#s-675034cfffe9009c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- value.history.every — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/daily.cjs:54](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L54>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fb3a63fa21c6b56c"></a>

## snapshotSchema.ordered.increasing

[electron/engines/contracts/yahoo-legacy/daily.cjs:54](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L54>) · FunctionExpression · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [snapshotSchema.ordered](<daily.cjs.md#s-e923501c560c4b52>).

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

- Number.isFinite — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/daily.cjs:56](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L56>)
- Date.parse — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/daily.cjs:56](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L56>)
- new Date(point.date).toISOString().slice — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/daily.cjs:57](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L57>)
- new Date(point.date).toISOString — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/daily.cjs:57](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L57>)
- Date — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/daily.cjs:57](<../../../../../../../../electron/engines/contracts/yahoo-legacy/daily.cjs#L57>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
