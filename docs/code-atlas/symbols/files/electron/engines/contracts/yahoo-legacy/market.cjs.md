# electron/engines/contracts/yahoo-legacy/market.cjs: symbols

[Atlas](<../../../../../../README.md>) / [Engine package registry](<../../../../../../modules/engine-registry.md>) / [electron/engines/contracts/yahoo-legacy/market.cjs:1](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/contracts/yahoo-legacy/market.cjs](<market.cjs.md#s-622cca355c98f82c>) (Module)
- [RANGES](<market.cjs.md#s-2dc186f3b615c473>) (VariableDeclaration)
- [numeric](<market.cjs.md#s-f29cd3d2829dd588>) (SchemaBinding)
- [quoteSchema](<market.cjs.md#s-f305cc4317d1e177>) (SchemaBinding)
- [historySchema](<market.cjs.md#s-0fd4abb4e551bd5a>) (SchemaBinding)

<a id="s-622cca355c98f82c"></a>

## electron/engines/contracts/yahoo-legacy/market.cjs

[electron/engines/contracts/yahoo-legacy/market.cjs:1](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L1>) · Module · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/engines/contracts/yahoo-legacy/market.cjs:1](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L1>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2dc186f3b615c473"></a>

## RANGES

[electron/engines/contracts/yahoo-legacy/market.cjs:2](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L2>) · VariableDeclaration · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: RANGES ([electron/engines/contracts/yahoo-legacy/market.cjs:1](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L1>)).

Lexical owner: [electron/engines/contracts/yahoo-legacy/market.cjs](<market.cjs.md#s-622cca355c98f82c>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Object.freeze — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:2](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L2>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f29cd3d2829dd588"></a>

## numeric

[electron/engines/contracts/yahoo-legacy/market.cjs:3](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L3>) · SchemaBinding · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engines/contracts/yahoo-legacy/market.cjs](<market.cjs.md#s-622cca355c98f82c>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- z.number().finite().nullable — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:3](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L3>)
- z.number().finite — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:3](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L3>)
- z.number — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:3](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L3>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f305cc4317d1e177"></a>

## quoteSchema

[electron/engines/contracts/yahoo-legacy/market.cjs:4](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L4>) · SchemaBinding · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: quoteSchema ([electron/engines/contracts/yahoo-legacy/market.cjs:1](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L1>)).

Lexical owner: [electron/engines/contracts/yahoo-legacy/market.cjs](<market.cjs.md#s-622cca355c98f82c>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 15.

- z .object({ provider: z.literal("Yahoo Finance"), symbol: z.string(), fetchedAt: z.string().datetime(), currency: z.string().nullable(), exchange: z.string().nullable(), marketTime — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:4](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L4>)
- z .object — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:4](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L4>)
- z.literal — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:6](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L6>)
- z.string — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:7](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L7>)
- z.string().datetime — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:8](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L8>)
- z.string — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:8](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L8>)
- z.string().nullable — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:9](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L9>)
- z.string — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:9](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L9>)
- 7 additional sites in [symbol-index.json](<../../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0fd4abb4e551bd5a"></a>

## historySchema

[electron/engines/contracts/yahoo-legacy/market.cjs:25](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L25>) · SchemaBinding · production · [Engine package registry](<../../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: historySchema ([electron/engines/contracts/yahoo-legacy/market.cjs:1](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L1>)).

Lexical owner: [electron/engines/contracts/yahoo-legacy/market.cjs](<market.cjs.md#s-622cca355c98f82c>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 28.

- z .object({ provider: z.literal("Yahoo Finance"), symbol: z.string(), fetchedAt: z.string().datetime(), currency: z.string().nullable(), range: z.enum(RANGES), interval: z.enum(&#91;"1 — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:25](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L25>)
- z .object — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:25](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L25>)
- z.literal — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:27](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L27>)
- z.string — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:28](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L28>)
- z.string().datetime — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:29](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L29>)
- z.string — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:29](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L29>)
- z.string().nullable — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:30](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L30>)
- z.string — external-or-dynamic-dispatch; [electron/engines/contracts/yahoo-legacy/market.cjs:30](<../../../../../../../../electron/engines/contracts/yahoo-legacy/market.cjs#L30>)
- 20 additional sites in [symbol-index.json](<../../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
