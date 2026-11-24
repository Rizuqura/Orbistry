# electron/domains/entity/contracts/entity-schema.cjs: symbols

[Atlas](<../../../../../../README.md>) / [Entity domain](<../../../../../../modules/entity-domain.md>) / [electron/domains/entity/contracts/entity-schema.cjs:1](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/entity/contracts/entity-schema.cjs](<entity-schema.cjs.md#s-c9e83e56da09f70e>) (Module)
- [entityKey](<entity-schema.cjs.md#s-3a0b329f3d05a841>) (SchemaBinding)
- [knowledgeMenus](<entity-schema.cjs.md#s-e52e81c6c7a9d3de>) (SchemaBinding)
- [knowledgeMenus.&lt;anonymous@15:5&gt;](<entity-schema.cjs.md#s-0912b2ffd29e0b38>) (ArrowFunction)
- [knowledgeMenus.&lt;anonymous@15:5&gt;.&lt;anonymous@16:18&gt;](<entity-schema.cjs.md#s-e87a1580ee79401d>) (ArrowFunction)
- [knowledgeMenus.&lt;anonymous@15:5&gt;.&lt;anonymous@17:25&gt;](<entity-schema.cjs.md#s-e8a8191936e0c3e6>) (ArrowFunction)
- [metadataSchema](<entity-schema.cjs.md#s-eaf753e2da5b6e2e>) (SchemaBinding)
- [sourceReference](<entity-schema.cjs.md#s-4e6dd5a4e39a63d4>) (SchemaBinding)
- [sourceReference.&lt;anonymous@55:5&gt;](<entity-schema.cjs.md#s-bb7f7d7e99349ce4>) (ArrowFunction)

<a id="s-c9e83e56da09f70e"></a>

## electron/domains/entity/contracts/entity-schema.cjs

[electron/domains/entity/contracts/entity-schema.cjs:1](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L1>) · Module · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/domains/entity/contracts/entity-schema.cjs:1](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L1>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3a0b329f3d05a841"></a>

## entityKey

[electron/domains/entity/contracts/entity-schema.cjs:3](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L3>) · SchemaBinding · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: entityKey ([electron/domains/entity/contracts/entity-schema.cjs:1](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L1>)).

Lexical owner: [electron/domains/entity/contracts/entity-schema.cjs](<entity-schema.cjs.md#s-c9e83e56da09f70e>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- z.string().regex — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:3](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L3>)
- z.string — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:3](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L3>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e52e81c6c7a9d3de"></a>

## knowledgeMenus

[electron/domains/entity/contracts/entity-schema.cjs:4](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L4>) · SchemaBinding · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/domains/entity/contracts/entity-schema.cjs](<entity-schema.cjs.md#s-c9e83e56da09f70e>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- z .array( z.object({ id: entityKey, title: z.string().trim().min(1).max(80), }), ) .min(1) .max(100) .refine — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:4](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L4>)
- z .array( z.object({ id: entityKey, title: z.string().trim().min(1).max(80), }), ) .min(1) .max — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:4](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L4>)
- z .array( z.object({ id: entityKey, title: z.string().trim().min(1).max(80), }), ) .min — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:4](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L4>)
- z .array — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:4](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L4>)
- z.object — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:6](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L6>)
- z.string().trim().min(1).max — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:8](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L8>)
- z.string().trim().min — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:8](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L8>)
- z.string().trim — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:8](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L8>)
- 1 additional sites in [symbol-index.json](<../../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0912b2ffd29e0b38"></a>

## knowledgeMenus.&lt;anonymous@15:5&gt;

[electron/domains/entity/contracts/entity-schema.cjs:15](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L15>) · ArrowFunction · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

Overview is protected and each menu has an Entity-local key.

Purpose evidence: jsdoc.

Lexical owner: [knowledgeMenus](<entity-schema.cjs.md#s-e52e81c6c7a9d3de>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| menus | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- menus.some — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:16](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L16>)
- Set — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:17](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L17>)
- menus.map — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:17](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L17>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e87a1580ee79401d"></a>

## knowledgeMenus.&lt;anonymous@15:5&gt;.&lt;anonymous@16:18&gt;

[electron/domains/entity/contracts/entity-schema.cjs:16](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L16>) · ArrowFunction · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [knowledgeMenus.&lt;anonymous@15:5&gt;](<entity-schema.cjs.md#s-0912b2ffd29e0b38>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| menu | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e8a8191936e0c3e6"></a>

## knowledgeMenus.&lt;anonymous@15:5&gt;.&lt;anonymous@17:25&gt;

[electron/domains/entity/contracts/entity-schema.cjs:17](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L17>) · ArrowFunction · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [knowledgeMenus.&lt;anonymous@15:5&gt;](<entity-schema.cjs.md#s-0912b2ffd29e0b38>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| menu | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-eaf753e2da5b6e2e"></a>

## metadataSchema

[electron/domains/entity/contracts/entity-schema.cjs:23](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L23>) · SchemaBinding · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: metadataSchema ([electron/domains/entity/contracts/entity-schema.cjs:1](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L1>)).

Lexical owner: [electron/domains/entity/contracts/entity-schema.cjs](<entity-schema.cjs.md#s-c9e83e56da09f70e>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 22.

- z.object — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:23](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L23>)
- z.string().trim().min(1).max — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:24](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L24>)
- z.string().trim().min — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:24](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L24>)
- z.string().trim — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:24](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L24>)
- z.string — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:24](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L24>)
- z.string().max(32).default — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:25](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L25>)
- z.string().max — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:25](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L25>)
- z.string — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:25](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L25>)
- 14 additional sites in [symbol-index.json](<../../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4e6dd5a4e39a63d4"></a>

## sourceReference

[electron/domains/entity/contracts/entity-schema.cjs:39](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L39>) · SchemaBinding · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: sourceReference ([electron/domains/entity/contracts/entity-schema.cjs:1](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L1>)).

Lexical owner: [electron/domains/entity/contracts/entity-schema.cjs](<entity-schema.cjs.md#s-c9e83e56da09f70e>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 17.

- z .object({ source_id: z.string().min(1).max(32768), source_ref: z.string().min(1).max(32768), filename: z.string().min(1), extension: z.string(), size_bytes: z .number() .int() .n — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:39](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L39>)
- z .object — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:39](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L39>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:41](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L41>)
- z.string().min — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:41](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L41>)
- z.string — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:41](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L41>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:42](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L42>)
- z.string().min — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:42](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L42>)
- z.string — external-or-dynamic-dispatch; [electron/domains/entity/contracts/entity-schema.cjs:42](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L42>)
- 9 additional sites in [symbol-index.json](<../../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bb7f7d7e99349ce4"></a>

## sourceReference.&lt;anonymous@55:5&gt;

[electron/domains/entity/contracts/entity-schema.cjs:55](<../../../../../../../../electron/domains/entity/contracts/entity-schema.cjs#L55>) · ArrowFunction · production · [Entity domain](<../../../../../../modules/entity-domain.md>)

The v1 record uses the same portable Vault reference as identity and locator.

Purpose evidence: jsdoc.

Lexical owner: [sourceReference](<entity-schema.cjs.md#s-4e6dd5a4e39a63d4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
