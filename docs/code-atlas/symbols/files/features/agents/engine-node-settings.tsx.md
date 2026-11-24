# features/agents/engine-node-settings.tsx: symbols

[Atlas](<../../../../README.md>) / [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>) / [features/agents/engine-node-settings.tsx:1](<../../../../../../features/agents/engine-node-settings.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/agents/engine-node-settings.tsx](<engine-node-settings.tsx.md#s-fac1ef41c9324262>) (Module)
- [NodeConfig](<engine-node-settings.tsx.md#s-19cdf5e1ef6d50ea>) (TypeAliasDeclaration)
- [EngineNodeSettings](<engine-node-settings.tsx.md#s-288e279cf9770500>) (FunctionDeclaration)
- [EngineNodeSettings.&lt;anonymous@16:13&gt;](<engine-node-settings.tsx.md#s-80e2023fe6606f3d>) (FunctionType)
- [EngineNodeSettings.&lt;anonymous@18:39&gt;](<engine-node-settings.tsx.md#s-5e436acb2b03f747>) (ArrowFunction)
- [EngineNodeSettings.&lt;anonymous@32:21&gt;](<engine-node-settings.tsx.md#s-11e410cf534d137e>) (ArrowFunction)
- [EngineNodeSettings.&lt;anonymous@32:21&gt;.&lt;anonymous@34:15&gt;](<engine-node-settings.tsx.md#s-6c8803d585864e78>) (ArrowFunction)
- [EngineNodeSettings.&lt;anonymous@52:28&gt;](<engine-node-settings.tsx.md#s-fb712712d2ec08dd>) (ArrowFunction)
- [EngineNodeSettings.&lt;anonymous@65:21&gt;](<engine-node-settings.tsx.md#s-49ecada67368ebd2>) (ArrowFunction)
- [EngineNodeSettings.&lt;anonymous@73:39&gt;](<engine-node-settings.tsx.md#s-c10eadf66cb7fab5>) (ArrowFunction)
- [EngineNodeSettings.&lt;anonymous@86:21&gt;](<engine-node-settings.tsx.md#s-79a95eeb7f4fd31b>) (ArrowFunction)
- [EngineNodeSettings.&lt;anonymous@107:21&gt;](<engine-node-settings.tsx.md#s-4239cffec1696653>) (ArrowFunction)

<a id="s-fac1ef41c9324262"></a>

## features/agents/engine-node-settings.tsx

[features/agents/engine-node-settings.tsx:1](<../../../../../../features/agents/engine-node-settings.tsx#L1>) · Module · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-19cdf5e1ef6d50ea"></a>

## NodeConfig

[features/agents/engine-node-settings.tsx:4](<../../../../../../features/agents/engine-node-settings.tsx#L4>) · TypeAliasDeclaration · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/agents/engine-node-settings.tsx](<engine-node-settings.tsx.md#s-fac1ef41c9324262>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-288e279cf9770500"></a>

## EngineNodeSettings

[features/agents/engine-node-settings.tsx:7](<../../../../../../features/agents/engine-node-settings.tsx#L7>) · FunctionDeclaration · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

Edits only the selected node's registry contract. Entity-specific source/ticker bindings resolve from the assignment at execution time.

Purpose evidence: jsdoc.

Exported as: EngineNodeSettings ([features/agents/engine-node-settings.tsx:1](<../../../../../../features/agents/engine-node-settings.tsx#L1>)).

Lexical owner: [features/agents/engine-node-settings.tsx](<engine-node-settings.tsx.md#s-fac1ef41c9324262>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   config,   definitions,   blocked,   onChange, } | { config: NodeConfig; definitions: EngineDefinition&#91;&#93;; blocked: boolean; onChange: (config: NodeConfig) =&gt; void; } | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- definitions.find — external-or-dynamic-dispatch; [features/agents/engine-node-settings.tsx:18](<../../../../../../features/agents/engine-node-settings.tsx#L18>)
- definitions.map — external-or-dynamic-dispatch; [features/agents/engine-node-settings.tsx:52](<../../../../../../features/agents/engine-node-settings.tsx#L52>)
- definition?.operations.map — external-or-dynamic-dispatch; [features/agents/engine-node-settings.tsx:73](<../../../../../../features/agents/engine-node-settings.tsx#L73>)
- definition?.operations.includes — external-or-dynamic-dispatch; [features/agents/engine-node-settings.tsx:115](<../../../../../../features/agents/engine-node-settings.tsx#L115>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-80e2023fe6606f3d"></a>

## EngineNodeSettings.&lt;anonymous@16:13&gt;

[features/agents/engine-node-settings.tsx:16](<../../../../../../features/agents/engine-node-settings.tsx#L16>) · FunctionType · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineNodeSettings](<engine-node-settings.tsx.md#s-288e279cf9770500>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| config | NodeConfig | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5e436acb2b03f747"></a>

## EngineNodeSettings.&lt;anonymous@18:39&gt;

[features/agents/engine-node-settings.tsx:18](<../../../../../../features/agents/engine-node-settings.tsx#L18>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineNodeSettings](<engine-node-settings.tsx.md#s-288e279cf9770500>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-11e410cf534d137e"></a>

## EngineNodeSettings.&lt;anonymous@32:21&gt;

[features/agents/engine-node-settings.tsx:32](<../../../../../../features/agents/engine-node-settings.tsx#L32>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineNodeSettings](<engine-node-settings.tsx.md#s-288e279cf9770500>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- definitions.find — external-or-dynamic-dispatch; [features/agents/engine-node-settings.tsx:33](<../../../../../../features/agents/engine-node-settings.tsx#L33>)
- onChange — declaration-without-runtime-body; [features/agents/engine-node-settings.tsx:37](<../../../../../../features/agents/engine-node-settings.tsx#L37>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6c8803d585864e78"></a>

## EngineNodeSettings.&lt;anonymous@32:21&gt;.&lt;anonymous@34:15&gt;

[features/agents/engine-node-settings.tsx:34](<../../../../../../features/agents/engine-node-settings.tsx#L34>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineNodeSettings.&lt;anonymous@32:21&gt;](<engine-node-settings.tsx.md#s-11e410cf534d137e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fb712712d2ec08dd"></a>

## EngineNodeSettings.&lt;anonymous@52:28&gt;

[features/agents/engine-node-settings.tsx:52](<../../../../../../features/agents/engine-node-settings.tsx#L52>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineNodeSettings](<engine-node-settings.tsx.md#s-288e279cf9770500>).

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

No direct static call/import association found; coverage unknown.

<a id="s-49ecada67368ebd2"></a>

## EngineNodeSettings.&lt;anonymous@65:21&gt;

[features/agents/engine-node-settings.tsx:65](<../../../../../../features/agents/engine-node-settings.tsx#L65>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineNodeSettings](<engine-node-settings.tsx.md#s-288e279cf9770500>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- onChange — declaration-without-runtime-body; [features/agents/engine-node-settings.tsx:66](<../../../../../../features/agents/engine-node-settings.tsx#L66>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c10eadf66cb7fab5"></a>

## EngineNodeSettings.&lt;anonymous@73:39&gt;

[features/agents/engine-node-settings.tsx:73](<../../../../../../features/agents/engine-node-settings.tsx#L73>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineNodeSettings](<engine-node-settings.tsx.md#s-288e279cf9770500>).

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

No direct static call/import association found; coverage unknown.

<a id="s-79a95eeb7f4fd31b"></a>

## EngineNodeSettings.&lt;anonymous@86:21&gt;

[features/agents/engine-node-settings.tsx:86](<../../../../../../features/agents/engine-node-settings.tsx#L86>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineNodeSettings](<engine-node-settings.tsx.md#s-288e279cf9770500>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- onChange — declaration-without-runtime-body; [features/agents/engine-node-settings.tsx:87](<../../../../../../features/agents/engine-node-settings.tsx#L87>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4239cffec1696653"></a>

## EngineNodeSettings.&lt;anonymous@107:21&gt;

[features/agents/engine-node-settings.tsx:107](<../../../../../../features/agents/engine-node-settings.tsx#L107>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineNodeSettings](<engine-node-settings.tsx.md#s-288e279cf9770500>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- onChange — declaration-without-runtime-body; [features/agents/engine-node-settings.tsx:108](<../../../../../../features/agents/engine-node-settings.tsx#L108>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
