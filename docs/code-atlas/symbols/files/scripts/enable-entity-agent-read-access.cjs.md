# scripts/enable-entity-agent-read-access.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/enable-entity-agent-read-access.cjs:1](<../../../../../scripts/enable-entity-agent-read-access.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/enable-entity-agent-read-access.cjs](<enable-entity-agent-read-access.cjs.md#s-4553ac306ce744d3>) (Module)
- [main](<enable-entity-agent-read-access.cjs.md#s-86d517edd5e58413>) (FunctionDeclaration)
- [main.getVault](<enable-entity-agent-read-access.cjs.md#s-8e89fb241cff9160>) (ArrowFunction)
- [main.&lt;anonymous@29:53&gt;](<enable-entity-agent-read-access.cjs.md#s-d0620ba199f7464d>) (ArrowFunction)
- [&lt;anonymous@80:16&gt;](<enable-entity-agent-read-access.cjs.md#s-4bac5caf1c3736da>) (ArrowFunction)

<a id="s-4553ac306ce744d3"></a>

## scripts/enable-entity-agent-read-access.cjs

[scripts/enable-entity-agent-read-access.cjs:1](<../../../../../scripts/enable-entity-agent-read-access.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<enable-entity-agent-read-access.cjs.md#s-86d517edd5e58413>) — [scripts/enable-entity-agent-read-access.cjs:80](<../../../../../scripts/enable-entity-agent-read-access.cjs#L80>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [scripts/enable-entity-agent-read-access.cjs:1](<../../../../../scripts/enable-entity-agent-read-access.cjs#L1>)
- require — module-loader; [scripts/enable-entity-agent-read-access.cjs:2](<../../../../../scripts/enable-entity-agent-read-access.cjs#L2>)
- require — module-loader; [scripts/enable-entity-agent-read-access.cjs:3](<../../../../../scripts/enable-entity-agent-read-access.cjs#L3>)
- require — module-loader; [scripts/enable-entity-agent-read-access.cjs:6](<../../../../../scripts/enable-entity-agent-read-access.cjs#L6>)
- require — module-loader; [scripts/enable-entity-agent-read-access.cjs:9](<../../../../../scripts/enable-entity-agent-read-access.cjs#L9>)
- main().catch — external-or-dynamic-dispatch; [scripts/enable-entity-agent-read-access.cjs:80](<../../../../../scripts/enable-entity-agent-read-access.cjs#L80>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-86d517edd5e58413"></a>

## main

[scripts/enable-entity-agent-read-access.cjs:12](<../../../../../scripts/enable-entity-agent-read-access.cjs#L12>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Applies the user's standing-read authorization to existing assigned definitions. Backs up definitions beside the original file and preserves unapplied draft changes; does not change source documents, indexes, credentials or unsupported operations.

Purpose evidence: jsdoc.

Exported as: main ([scripts/enable-entity-agent-read-access.cjs:1](<../../../../../scripts/enable-entity-agent-read-access.cjs#L1>)).

Lexical owner: [scripts/enable-entity-agent-read-access.cjs](<enable-entity-agent-read-access.cjs.md#s-4553ac306ce744d3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [AgentStore.constructor](<../electron/ai/agents/agent-store.cjs.md#s-61feae93fee7ec73>) — [scripts/enable-entity-agent-read-access.cjs:25](<../../../../../scripts/enable-entity-agent-read-access.cjs#L25>)
- [EntityAgentService.constructor](<../electron/ai/agents/entity-agents.cjs.md#s-5a0d96fd03e3907e>) — [scripts/enable-entity-agent-read-access.cjs:26](<../../../../../scripts/enable-entity-agent-read-access.cjs#L26>)
- [EntityAgentService.list](<../electron/ai/agents/entity-agents.cjs.md#s-22f970b7a598798f>) — [scripts/enable-entity-agent-read-access.cjs:29](<../../../../../scripts/enable-entity-agent-read-access.cjs#L29>)
- [AgentStore.get](<../electron/ai/agents/agent-store.cjs.md#s-feff3820609fc57c>) — [scripts/enable-entity-agent-read-access.cjs:34](<../../../../../scripts/enable-entity-agent-read-access.cjs#L34>)
- [withReadOnlyAccess](<../electron/ai/agents/entity-agent-access.cjs.md#s-380698e47cd9410a>) — [scripts/enable-entity-agent-read-access.cjs:37](<../../../../../scripts/enable-entity-agent-read-access.cjs#L37>)
- [AgentStore.saveConstruction](<../electron/ai/agents/agent-store.cjs.md#s-79e9bb1291ef0de1>) — [scripts/enable-entity-agent-read-access.cjs:52](<../../../../../scripts/enable-entity-agent-read-access.cjs#L52>)
- [AgentStore.saveConstruction](<../electron/ai/agents/agent-store.cjs.md#s-79e9bb1291ef0de1>) — [scripts/enable-entity-agent-read-access.cjs:59](<../../../../../scripts/enable-entity-agent-read-access.cjs#L59>)
- [withReadOnlyAccess](<../electron/ai/agents/entity-agent-access.cjs.md#s-380698e47cd9410a>) — [scripts/enable-entity-agent-read-access.cjs:63](<../../../../../scripts/enable-entity-agent-read-access.cjs#L63>)

**Called by (statically resolved):**

- [scripts/enable-entity-agent-read-access.cjs](<enable-entity-agent-read-access.cjs.md#s-4553ac306ce744d3>) — [scripts/enable-entity-agent-read-access.cjs:80](<../../../../../scripts/enable-entity-agent-read-access.cjs#L80>)

Unresolved / external call sites: 20.

- process.argv.slice — external-or-dynamic-dispatch; [scripts/enable-entity-agent-read-access.cjs:13](<../../../../../scripts/enable-entity-agent-read-access.cjs#L13>)
- path.isAbsolute — external-or-dynamic-dispatch; [scripts/enable-entity-agent-read-access.cjs:17](<../../../../../scripts/enable-entity-agent-read-access.cjs#L17>)
- path.isAbsolute — external-or-dynamic-dispatch; [scripts/enable-entity-agent-read-access.cjs:18](<../../../../../scripts/enable-entity-agent-read-access.cjs#L18>)
- Error — external-or-dynamic-dispatch; [scripts/enable-entity-agent-read-access.cjs:20](<../../../../../scripts/enable-entity-agent-read-access.cjs#L20>)
- fs.realpath — external-or-dynamic-dispatch; [scripts/enable-entity-agent-read-access.cjs:23](<../../../../../scripts/enable-entity-agent-read-access.cjs#L23>)
- fs.realpath — external-or-dynamic-dispatch; [scripts/enable-entity-agent-read-access.cjs:24](<../../../../../scripts/enable-entity-agent-read-access.cjs#L24>)
- Set — external-or-dynamic-dispatch; [scripts/enable-entity-agent-read-access.cjs:28](<../../../../../scripts/enable-entity-agent-read-access.cjs#L28>)
- (await service.list({ vaultPath: root })).map — external-or-dynamic-dispatch; [scripts/enable-entity-agent-read-access.cjs:29](<../../../../../scripts/enable-entity-agent-read-access.cjs#L29>)
- 12 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8e89fb241cff9160"></a>

## main.getVault

[scripts/enable-entity-agent-read-access.cjs:26](<../../../../../scripts/enable-entity-agent-read-access.cjs#L26>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<enable-entity-agent-read-access.cjs.md#s-86d517edd5e58413>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d0620ba199f7464d"></a>

## main.&lt;anonymous@29:53&gt;

[scripts/enable-entity-agent-read-access.cjs:29](<../../../../../scripts/enable-entity-agent-read-access.cjs#L29>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<enable-entity-agent-read-access.cjs.md#s-86d517edd5e58413>).

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

<a id="s-4bac5caf1c3736da"></a>

## &lt;anonymous@80:16&gt;

[scripts/enable-entity-agent-read-access.cjs:80](<../../../../../scripts/enable-entity-agent-read-access.cjs#L80>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/enable-entity-agent-read-access.cjs](<enable-entity-agent-read-access.cjs.md#s-4553ac306ce744d3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/enable-entity-agent-read-access.cjs:81](<../../../../../scripts/enable-entity-agent-read-access.cjs#L81>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
