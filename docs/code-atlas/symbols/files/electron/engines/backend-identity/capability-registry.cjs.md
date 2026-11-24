# electron/engines/backend-identity/capability-registry.cjs: symbols

[Atlas](<../../../../../README.md>) / [Backend Identity Engine](<../../../../../modules/identity.md>) / [electron/engines/backend-identity/capability-registry.cjs:1](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/backend-identity/capability-registry.cjs](<capability-registry.cjs.md#s-3dcb3c4a4fe5fe21>) (Module)
- [argumentsSchema](<capability-registry.cjs.md#s-651cffb34db0ad94>) (SchemaBinding)
- [isReadOnlyOperation](<capability-registry.cjs.md#s-2c8e0b5c5514fd41>) (FunctionDeclaration)
- [discoverCapabilities](<capability-registry.cjs.md#s-98fed9e53769111a>) (FunctionDeclaration)
- [discoverCapabilities.&lt;anonymous@20:34&gt;](<capability-registry.cjs.md#s-2806764217d1b68e>) (ArrowFunction)
- [executeCapability](<capability-registry.cjs.md#s-701c955440e5983d>) (FunctionDeclaration)

<a id="s-3dcb3c4a4fe5fe21"></a>

## electron/engines/backend-identity/capability-registry.cjs

[electron/engines/backend-identity/capability-registry.cjs:1](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L1>) · Module · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/engines/backend-identity/capability-registry.cjs:1](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L1>)
- require — module-loader; [electron/engines/backend-identity/capability-registry.cjs:2](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L2>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:20](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L20>) — file-import-only; coverage not established.

<a id="s-651cffb34db0ad94"></a>

## argumentsSchema

[electron/engines/backend-identity/capability-registry.cjs:3](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L3>) · SchemaBinding · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/engines/backend-identity/capability-registry.cjs](<capability-registry.cjs.md#s-3dcb3c4a4fe5fe21>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- z.object({ force: z.boolean().optional() }).strict — external-or-dynamic-dispatch; [electron/engines/backend-identity/capability-registry.cjs:3](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L3>)
- z.object — external-or-dynamic-dispatch; [electron/engines/backend-identity/capability-registry.cjs:3](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L3>)
- z.boolean().optional — external-or-dynamic-dispatch; [electron/engines/backend-identity/capability-registry.cjs:3](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L3>)
- z.boolean — external-or-dynamic-dispatch; [electron/engines/backend-identity/capability-registry.cjs:3](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L3>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:20](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L20>) — file-import-only; coverage not established.

<a id="s-2c8e0b5c5514fd41"></a>

## isReadOnlyOperation

[electron/engines/backend-identity/capability-registry.cjs:6](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L6>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Identifies only implemented read-only adapters. Standing permission never extends to arbitrary registered code or write operations.

Purpose evidence: jsdoc.

Exported as: isReadOnlyOperation ([electron/engines/backend-identity/capability-registry.cjs:1](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/capability-registry.cjs](<capability-registry.cjs.md#s-3dcb3c4a4fe5fe21>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| engineId | any | compiler-inferred | required |
| operation | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [withReadOnlyAccess](<../../ai/agents/entity-agent-access.cjs.md#s-380698e47cd9410a>) — [electron/ai/agents/entity-agent-access.cjs:12](<../../../../../../../electron/ai/agents/entity-agent-access.cjs#L12>)
- [EntityAgentService.runtime.authorize.&lt;anonymous@514:13&gt;](<../../ai/agents/entity-agents.cjs.md#s-243ea832d5a73adc>) — [electron/ai/agents/entity-agents.cjs:518](<../../../../../../../electron/ai/agents/entity-agents.cjs#L518>)
- [EntityAgentService.context.&lt;anonymous@563:57&gt;](<../../ai/agents/entity-agents.cjs.md#s-4c46ef83abfe0ad6>) — [electron/ai/agents/entity-agents.cjs:582](<../../../../../../../electron/ai/agents/entity-agents.cjs#L582>)
- [EntityAgentService.executeBound](<../../ai/agents/entity-agents.cjs.md#s-05ab3da1509c33bf>) — [electron/ai/agents/entity-agents.cjs:1827](<../../../../../../../electron/ai/agents/entity-agents.cjs#L1827>)

Unresolved / external call sites: 1.

- &#91;"financials", "earnings"&#93;.includes — external-or-dynamic-dispatch; [electron/engines/backend-identity/capability-registry.cjs:10](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L10>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:20](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L20>) — file-import-only; coverage not established.

<a id="s-98fed9e53769111a"></a>

## discoverCapabilities

[electron/engines/backend-identity/capability-registry.cjs:15](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L15>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Registers validated literal Yahoo declarations through shared Engine definitions, without bootstrapping the AI registry. Returns data-only contracts; never probes a provider or loads indexed code.

Purpose evidence: jsdoc.

Exported as: discoverCapabilities ([electron/engines/backend-identity/capability-registry.cjs:1](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/capability-registry.cjs](<capability-registry.cjs.md#s-3dcb3c4a4fe5fe21>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entityId | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [capture](<identity-compiler.cjs.md#s-1f99e7da5df73158>) — [electron/engines/backend-identity/identity-compiler.cjs:219](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L219>)

Unresolved / external call sites: 11.

- require — module-loader; [electron/engines/backend-identity/capability-registry.cjs:16](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L16>)
- (menu.prices ?? &#91;&#93;).map — external-or-dynamic-dispatch; [electron/engines/backend-identity/capability-registry.cjs:20](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L20>)
- definition?.operations.includes — external-or-dynamic-dispatch; [electron/engines/backend-identity/capability-registry.cjs:26](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L26>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/capability-registry.cjs:27](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L27>)
- require — module-loader; [electron/engines/backend-identity/capability-registry.cjs:33](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L33>)
- require — module-loader; [electron/engines/backend-identity/capability-registry.cjs:34](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L34>)
- capabilities.push — external-or-dynamic-dispatch; [electron/engines/backend-identity/capability-registry.cjs:35](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L35>)
- capabilitySchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/capability-registry.cjs:36](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L36>)
- 3 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:20](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L20>) — file-import-only; coverage not established.

<a id="s-2806764217d1b68e"></a>

## discoverCapabilities.&lt;anonymous@20:34&gt;

[electron/engines/backend-identity/capability-registry.cjs:20](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L20>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [discoverCapabilities](<capability-registry.cjs.md#s-98fed9e53769111a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:20](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L20>) — file-import-only; coverage not established.

<a id="s-701c955440e5983d"></a>

## executeCapability

[electron/engines/backend-identity/capability-registry.cjs:73](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L73>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Routes a currently revalidated declaration to the existing authorized service; callers cannot substitute ticker, root, module, script or operation.

Purpose evidence: jsdoc.

Exported as: executeCapability ([electron/engines/backend-identity/capability-registry.cjs:1](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/capability-registry.cjs](<capability-registry.cjs.md#s-3dcb3c4a4fe5fe21>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| capability | any | compiler-inferred | required |
| raw | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [getIndexedPrice](<../../daily-price-service.cjs.md#s-985657f4b0e3a350>) — [electron/engines/backend-identity/capability-registry.cjs:81](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L81>)
- [getIndexedFinance](<../../financial-service.cjs.md#s-c1c4f6362733e9d7>) — [electron/engines/backend-identity/capability-registry.cjs:92](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L92>)

**Called by (statically resolved):**

- [createIdentityRuntime.executeCapability](<identity-runtime.cjs.md#s-35ccbce8833db04a>) — [electron/engines/backend-identity/identity-runtime.cjs:217](<../../../../../../../electron/engines/backend-identity/identity-runtime.cjs#L217>)

Unresolved / external call sites: 6.

- argumentsSchema.parse — external-or-dynamic-dispatch; [electron/engines/backend-identity/capability-registry.cjs:74](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L74>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/capability-registry.cjs:79](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L79>)
- require — module-loader; [electron/engines/backend-identity/capability-registry.cjs:81](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L81>)
- &#91;"financials", "earnings"&#93;.includes — external-or-dynamic-dispatch; [electron/engines/backend-identity/capability-registry.cjs:90](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L90>)
- require — module-loader; [electron/engines/backend-identity/capability-registry.cjs:92](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L92>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/capability-registry.cjs:99](<../../../../../../../electron/engines/backend-identity/capability-registry.cjs#L99>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:20](<../../../../../../../electron/ai/agents/entity-agents.test.cjs#L20>) — file-import-only; coverage not established.
