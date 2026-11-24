# electron/domains/worldview/queries/connection-queries.cjs: symbols

[Atlas](<../../../../../../README.md>) / [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>) / [electron/domains/worldview/queries/connection-queries.cjs:1](<../../../../../../../../electron/domains/worldview/queries/connection-queries.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/worldview/queries/connection-queries.cjs](<connection-queries.cjs.md#s-0f53a0788b347d19>) (Module)
- [directConnections](<connection-queries.cjs.md#s-a2c4c119e7dfa264>) (FunctionDeclaration)
- [directConnections.&lt;anonymous@13:13&gt;](<connection-queries.cjs.md#s-0d2b5f363bfe833d>) (ArrowFunction)
- [directConnections.&lt;anonymous@22:10&gt;](<connection-queries.cjs.md#s-b5d1f41ed46f5cd1>) (ArrowFunction)

<a id="s-0f53a0788b347d19"></a>

## electron/domains/worldview/queries/connection-queries.cjs

[electron/domains/worldview/queries/connection-queries.cjs:1](<../../../../../../../../electron/domains/worldview/queries/connection-queries.cjs#L1>) · Module · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/domains/worldview/queries/connection-queries.cjs:1](<../../../../../../../../electron/domains/worldview/queries/connection-queries.cjs#L1>)
- require — module-loader; [electron/domains/worldview/queries/connection-queries.cjs:2](<../../../../../../../../electron/domains/worldview/queries/connection-queries.cjs#L2>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a2c4c119e7dfa264"></a>

## directConnections

[electron/domains/worldview/queries/connection-queries.cjs:5](<../../../../../../../../electron/domains/worldview/queries/connection-queries.cjs#L5>) · FunctionDeclaration · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

Filters one-hop relationship DTOs only. Undirected edges are visible in both directions; never traverses or reads neighbor knowledge.

Purpose evidence: jsdoc.

Exported as: directConnections ([electron/domains/worldview/queries/connection-queries.cjs:1](<../../../../../../../../electron/domains/worldview/queries/connection-queries.cjs#L1>)).

Lexical owner: [electron/domains/worldview/queries/connection-queries.cjs](<connection-queries.cjs.md#s-0f53a0788b347d19>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| connections | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| direction | string | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [requireInvariant](<../contracts/worldview-errors.cjs.md#s-2dc3226dc732f323>) — [electron/domains/worldview/queries/connection-queries.cjs:7](<../../../../../../../../electron/domains/worldview/queries/connection-queries.cjs#L7>)

**Called by (statically resolved):**

- [WorldView.getDirectConnections](<../model/WorldView.cjs.md#s-6fccf54e1a31faa2>) — [electron/domains/worldview/model/WorldView.cjs:83](<../../../../../../../../electron/domains/worldview/model/WorldView.cjs#L83>)

Unresolved / external call sites: 4.

- identifier.parse — external-or-dynamic-dispatch; [electron/domains/worldview/queries/connection-queries.cjs:6](<../../../../../../../../electron/domains/worldview/queries/connection-queries.cjs#L6>)
- &#91;"both", "input", "output"&#93;.includes — external-or-dynamic-dispatch; [electron/domains/worldview/queries/connection-queries.cjs:8](<../../../../../../../../electron/domains/worldview/queries/connection-queries.cjs#L8>)
- connections .filter((connection) =&gt; { const source = connection.source.entityId === entityId, target = connection.target.entityId === entityId; return direction === "both" &#124;&#124; conne — external-or-dynamic-dispatch; [electron/domains/worldview/queries/connection-queries.cjs:12](<../../../../../../../../electron/domains/worldview/queries/connection-queries.cjs#L12>)
- connections .filter — external-or-dynamic-dispatch; [electron/domains/worldview/queries/connection-queries.cjs:12](<../../../../../../../../electron/domains/worldview/queries/connection-queries.cjs#L12>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0d2b5f363bfe833d"></a>

## directConnections.&lt;anonymous@13:13&gt;

[electron/domains/worldview/queries/connection-queries.cjs:13](<../../../../../../../../electron/domains/worldview/queries/connection-queries.cjs#L13>) · ArrowFunction · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [directConnections](<connection-queries.cjs.md#s-a2c4c119e7dfa264>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| connection | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b5d1f41ed46f5cd1"></a>

## directConnections.&lt;anonymous@22:10&gt;

[electron/domains/worldview/queries/connection-queries.cjs:22](<../../../../../../../../electron/domains/worldview/queries/connection-queries.cjs#L22>) · ArrowFunction · production · [WorldView domain aggregate](<../../../../../../modules/worldview-domain.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [directConnections](<connection-queries.cjs.md#s-a2c4c119e7dfa264>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| connection | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- structuredClone — external-or-dynamic-dispatch; [electron/domains/worldview/queries/connection-queries.cjs:22](<../../../../../../../../electron/domains/worldview/queries/connection-queries.cjs#L22>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
