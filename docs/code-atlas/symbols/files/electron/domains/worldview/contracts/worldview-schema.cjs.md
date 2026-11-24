# electron/domains/worldview/contracts/worldview-schema.cjs: symbols

[Atlas](<../../../../../../README.md>) / [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>) / [electron/domains/worldview/contracts/worldview-schema.cjs:1](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/worldview/contracts/worldview-schema.cjs](<worldview-schema.cjs.md#s-08a2eb900a56dc7c>) (Module)
- [identifier](<worldview-schema.cjs.md#s-598890728e7c0496>) (SchemaBinding)
- [position](<worldview-schema.cjs.md#s-f1f6beb42086c656>) (SchemaBinding)
- [anchor](<worldview-schema.cjs.md#s-af952350ce556ea7>) (SchemaBinding)
- [legacyConnectorSchema](<worldview-schema.cjs.md#s-ff3a4088d19f3491>) (SchemaBinding)
- [legacyConnectorSchema.&lt;anonymous@25:5&gt;](<worldview-schema.cjs.md#s-4b2a567e1bb5f357>) (ArrowFunction)
- [connectionSchema](<worldview-schema.cjs.md#s-137dc81503c843ff>) (SchemaBinding)

<a id="s-08a2eb900a56dc7c"></a>

## electron/domains/worldview/contracts/worldview-schema.cjs

[electron/domains/worldview/contracts/worldview-schema.cjs:1](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L1>) · Module · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/domains/worldview/contracts/worldview-schema.cjs:1](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L1>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-598890728e7c0496"></a>

## identifier

[electron/domains/worldview/contracts/worldview-schema.cjs:2](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L2>) · SchemaBinding · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: identifier ([electron/domains/worldview/contracts/worldview-schema.cjs:1](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L1>)).

Lexical owner: [electron/domains/worldview/contracts/worldview-schema.cjs](<worldview-schema.cjs.md#s-08a2eb900a56dc7c>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- z.string().regex — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:2](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L2>)
- z.string — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:2](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L2>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f1f6beb42086c656"></a>

## position

[electron/domains/worldview/contracts/worldview-schema.cjs:3](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L3>) · SchemaBinding · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: position ([electron/domains/worldview/contracts/worldview-schema.cjs:1](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L1>)).

Lexical owner: [electron/domains/worldview/contracts/worldview-schema.cjs](<worldview-schema.cjs.md#s-08a2eb900a56dc7c>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 10.

- z .object({ x: z.number().finite().min(-1e9).max(1e9), y: z.number().finite().min(-1e9).max(1e9), }) .strict — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:3](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L3>)
- z .object — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:3](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L3>)
- z.number().finite().min(-1e9).max — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:5](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L5>)
- z.number().finite().min — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:5](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L5>)
- z.number().finite — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:5](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L5>)
- z.number — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:5](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L5>)
- z.number().finite().min(-1e9).max — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:6](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L6>)
- z.number().finite().min — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:6](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L6>)
- 2 additional sites in [symbol-index.json](<../../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-af952350ce556ea7"></a>

## anchor

[electron/domains/worldview/contracts/worldview-schema.cjs:9](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L9>) · SchemaBinding · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/domains/worldview/contracts/worldview-schema.cjs](<worldview-schema.cjs.md#s-08a2eb900a56dc7c>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- z.enum — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:9](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L9>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ff3a4088d19f3491"></a>

## legacyConnectorSchema

[electron/domains/worldview/contracts/worldview-schema.cjs:11](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L11>) · SchemaBinding · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: legacyConnectorSchema ([electron/domains/worldview/contracts/worldview-schema.cjs:1](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L1>)).

Lexical owner: [electron/domains/worldview/contracts/worldview-schema.cjs](<worldview-schema.cjs.md#s-08a2eb900a56dc7c>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 10.

- z .object({ id: identifier, sourceEntityId: identifier, sourcePortId: anchor, targetEntityId: identifier, targetPortId: anchor, name: z.string().trim().min(1).max(160), definition: — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:11](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L11>)
- z .object({ id: identifier, sourceEntityId: identifier, sourcePortId: anchor, targetEntityId: identifier, targetPortId: anchor, name: z.string().trim().min(1).max(160), definition: — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:11](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L11>)
- z .object — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:11](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L11>)
- z.string().trim().min(1).max — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:18](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L18>)
- z.string().trim().min — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:18](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L18>)
- z.string().trim — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:18](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L18>)
- z.string — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:18](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L18>)
- z.string().max — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:19](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L19>)
- 2 additional sites in [symbol-index.json](<../../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4b2a567e1bb5f357"></a>

## legacyConnectorSchema.&lt;anonymous@25:5&gt;

[electron/domains/worldview/contracts/worldview-schema.cjs:25](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L25>) · ArrowFunction · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Retains the existing prohibition on self-connections and permits every geometric anchor pair.

Purpose evidence: jsdoc.

Lexical owner: [legacyConnectorSchema](<worldview-schema.cjs.md#s-ff3a4088d19f3491>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-137dc81503c843ff"></a>

## connectionSchema

[electron/domains/worldview/contracts/worldview-schema.cjs:28](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L28>) · SchemaBinding · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: connectionSchema ([electron/domains/worldview/contracts/worldview-schema.cjs:1](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L1>)).

Lexical owner: [electron/domains/worldview/contracts/worldview-schema.cjs](<worldview-schema.cjs.md#s-08a2eb900a56dc7c>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 19.

- z .object({ id: identifier, source: z .object({ entityId: identifier, portId: z.literal("output"), anchorId: anchor.optional(), }) .strict(), target: z .object({ entityId: identifi — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:28](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L28>)
- z .object — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:28](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L28>)
- z .object({ entityId: identifier, portId: z.literal("output"), anchorId: anchor.optional(), }) .strict — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:31](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L31>)
- z .object — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:31](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L31>)
- z.literal — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:34](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L34>)
- anchor.optional — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:35](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L35>)
- z .object({ entityId: identifier, portId: z.literal("input"), anchorId: anchor.optional(), }) .strict — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:38](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L38>)
- z .object — external-or-dynamic-dispatch; [electron/domains/worldview/contracts/worldview-schema.cjs:38](<../../../../../../../../electron/domains/worldview/contracts/worldview-schema.cjs#L38>)
- 11 additional sites in [symbol-index.json](<../../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
