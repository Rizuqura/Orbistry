# electron/ai/agents/entity-agent-access.cjs: symbols

[Atlas](<../../../../../README.md>) / [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>) / [electron/ai/agents/entity-agent-access.cjs:1](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/agents/entity-agent-access.cjs](<entity-agent-access.cjs.md#s-86c6b55358f03562>) (Module)
- [withReadOnlyAccess](<entity-agent-access.cjs.md#s-380698e47cd9410a>) (FunctionDeclaration)
- [withReadOnlyAccess.&lt;anonymous@16:34&gt;](<entity-agent-access.cjs.md#s-08f337e954cf4370>) (ArrowFunction)
- [withReadOnlyAccess.&lt;anonymous@18:38&gt;](<entity-agent-access.cjs.md#s-e8cf7e74df86db81>) (ArrowFunction)
- [withReadOnlyAccess.&lt;anonymous@31:7&gt;](<entity-agent-access.cjs.md#s-664cbcde2851f9c1>) (ArrowFunction)

<a id="s-86c6b55358f03562"></a>

## electron/ai/agents/entity-agent-access.cjs

[electron/ai/agents/entity-agent-access.cjs:1](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L1>) · Module · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/ai/agents/entity-agent-access.cjs:1](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L1>)
- require — module-loader; [electron/ai/agents/entity-agent-access.cjs:4](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L4>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-380698e47cd9410a"></a>

## withReadOnlyAccess

[electron/ai/agents/entity-agent-access.cjs:7](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L7>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Returns a cloned graph with standing access for implemented read adapters and a connected Knowledge node. Used only by an explicitly requested configuration migration; preserves all other nodes, edges and settings.

Purpose evidence: jsdoc.

Exported as: withReadOnlyAccess ([electron/ai/agents/entity-agent-access.cjs:1](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L1>)).

Lexical owner: [electron/ai/agents/entity-agent-access.cjs](<entity-agent-access.cjs.md#s-86c6b55358f03562>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| graph | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [isReadOnlyOperation](<../../engines/backend-identity/capability-registry.cjs.md#s-2c8e0b5c5514fd41>) — [electron/ai/agents/entity-agent-access.cjs:12](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L12>)

**Called by (statically resolved):**

- [main](<../../../scripts/enable-entity-agent-read-access.cjs.md#s-86d517edd5e58413>) — [scripts/enable-entity-agent-read-access.cjs:37](<../../../../../../../scripts/enable-entity-agent-read-access.cjs#L37>)
- [main](<../../../scripts/enable-entity-agent-read-access.cjs.md#s-86d517edd5e58413>) — [scripts/enable-entity-agent-read-access.cjs:63](<../../../../../../../scripts/enable-entity-agent-read-access.cjs#L63>)

Unresolved / external call sites: 8.

- structuredClone — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-access.cjs:8](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L8>)
- updated.nodes.find — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-access.cjs:16](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L16>)
- Error — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-access.cjs:17](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L17>)
- updated.nodes.find — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-access.cjs:18](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L18>)
- randomUUID — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-access.cjs:21](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L21>)
- updated.nodes.push — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-access.cjs:27](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L27>)
- updated.edges.some — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-access.cjs:30](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L30>)
- updated.edges.push — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-access.cjs:34](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L34>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-08f337e954cf4370"></a>

## withReadOnlyAccess.&lt;anonymous@16:34&gt;

[electron/ai/agents/entity-agent-access.cjs:16](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L16>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [withReadOnlyAccess](<entity-agent-access.cjs.md#s-380698e47cd9410a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e8cf7e74df86db81"></a>

## withReadOnlyAccess.&lt;anonymous@18:38&gt;

[electron/ai/agents/entity-agent-access.cjs:18](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L18>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [withReadOnlyAccess](<entity-agent-access.cjs.md#s-380698e47cd9410a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-664cbcde2851f9c1"></a>

## withReadOnlyAccess.&lt;anonymous@31:7&gt;

[electron/ai/agents/entity-agent-access.cjs:31](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L31>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [withReadOnlyAccess](<entity-agent-access.cjs.md#s-380698e47cd9410a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| edge | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
