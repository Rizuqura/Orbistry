# scripts/fixtures/legacy-agents.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/fixtures/legacy-agents.cjs:1](<../../../../../../scripts/fixtures/legacy-agents.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/fixtures/legacy-agents.cjs](<legacy-agents.cjs.md#s-bf429d15decc62ba>) (Module)
- [AgentStore](<legacy-agents.cjs.md#s-acce7c85d61089bf>) (ClassDeclaration)
- [AgentStore.constructor](<legacy-agents.cjs.md#s-765843116c528389>) (Constructor)

<a id="s-bf429d15decc62ba"></a>

## scripts/fixtures/legacy-agents.cjs

[scripts/fixtures/legacy-agents.cjs:1](<../../../../../../scripts/fixtures/legacy-agents.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [scripts/fixtures/legacy-agents.cjs:5](<../../../../../../scripts/fixtures/legacy-agents.cjs#L5>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:6](<../../../../../../electron/ai/agents/agent-construction.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:9](<../../../../../../electron/ai/agents/agent-store.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-acce7c85d61089bf"></a>

## AgentStore

[scripts/fixtures/legacy-agents.cjs:6](<../../../../../../scripts/fixtures/legacy-agents.cjs#L6>) · ClassDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: AgentStore ([scripts/fixtures/legacy-agents.cjs:1](<../../../../../../scripts/fixtures/legacy-agents.cjs#L1>)).

Lexical owner: [scripts/fixtures/legacy-agents.cjs](<legacy-agents.cjs.md#s-bf429d15decc62ba>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:6](<../../../../../../electron/ai/agents/agent-construction.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:9](<../../../../../../electron/ai/agents/agent-store.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-765843116c528389"></a>

## AgentStore.constructor

[scripts/fixtures/legacy-agents.cjs:7](<../../../../../../scripts/fixtures/legacy-agents.cjs#L7>) · Constructor · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentStore](<legacy-agents.cjs.md#s-acce7c85d61089bf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |
| decodeImage | any | compiler-inferred | required |

Returns: AgentStore (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@8:104&gt;](<../../electron/ai/agents/agent-construction.test.cjs.md#s-3c4e992af342c65c>) — [electron/ai/agents/agent-construction.test.cjs:22](<../../../../../../electron/ai/agents/agent-construction.test.cjs#L22>)
- [&lt;anonymous@8:104&gt;](<../../electron/ai/agents/agent-construction.test.cjs.md#s-3c4e992af342c65c>) — [electron/ai/agents/agent-construction.test.cjs:51](<../../../../../../electron/ai/agents/agent-construction.test.cjs#L51>)
- [fixture](<../../electron/ai/agents/agent-construction.test.cjs.md#s-342a4c141f480910>) — [electron/ai/agents/agent-construction.test.cjs:109](<../../../../../../electron/ai/agents/agent-construction.test.cjs#L109>)
- [&lt;anonymous@127:102&gt;](<../../electron/ai/agents/agent-construction.test.cjs.md#s-7322f921221bc9e8>) — [electron/ai/agents/agent-construction.test.cjs:150](<../../../../../../electron/ai/agents/agent-construction.test.cjs#L150>)
- [&lt;anonymous@127:102&gt;](<../../electron/ai/agents/agent-construction.test.cjs.md#s-7322f921221bc9e8>) — [electron/ai/agents/agent-construction.test.cjs:166](<../../../../../../electron/ai/agents/agent-construction.test.cjs#L166>)
- [&lt;anonymous@279:97&gt;](<../../electron/ai/agents/agent-construction.test.cjs.md#s-e3b1c140ff9d5a48>) — [electron/ai/agents/agent-construction.test.cjs:289](<../../../../../../electron/ai/agents/agent-construction.test.cjs#L289>)
- [&lt;anonymous@30:95&gt;](<../../electron/ai/agents/agent-store.test.cjs.md#s-baa985941a96dcef>) — [electron/ai/agents/agent-store.test.cjs:47](<../../../../../../electron/ai/agents/agent-store.test.cjs#L47>)
- [&lt;anonymous@80:101&gt;](<../../electron/ai/agents/agent-store.test.cjs.md#s-0dbef8c3f34bd547>) — [electron/ai/agents/agent-store.test.cjs:117](<../../../../../../electron/ai/agents/agent-store.test.cjs#L117>)
- [&lt;anonymous@203:98&gt;](<../../electron/ai/agents/agent-store.test.cjs.md#s-36acfe0da3e02257>) — [electron/ai/agents/agent-store.test.cjs:230](<../../../../../../electron/ai/agents/agent-store.test.cjs#L230>)
- [fixture](<../../electron/ai/agents/agent-store.test.cjs.md#s-20615d5b2ce23dc2>) — [electron/ai/agents/agent-store.test.cjs:250](<../../../../../../electron/ai/agents/agent-store.test.cjs#L250>)
- [&lt;anonymous@252:102&gt;](<../../electron/ai/agents/agent-store.test.cjs.md#s-919270a70c69e6e2>) — [electron/ai/agents/agent-store.test.cjs:274](<../../../../../../electron/ai/agents/agent-store.test.cjs#L274>)
- [&lt;anonymous@297:106&gt;](<../../electron/ai/agents/agent-store.test.cjs.md#s-4a0a1b0f13ec255e>) — [electron/ai/agents/agent-store.test.cjs:309](<../../../../../../electron/ai/agents/agent-store.test.cjs#L309>)
- [&lt;anonymous@297:106&gt;](<../../electron/ai/agents/agent-store.test.cjs.md#s-4a0a1b0f13ec255e>) — [electron/ai/agents/agent-store.test.cjs:346](<../../../../../../electron/ai/agents/agent-store.test.cjs#L346>)

Unresolved / external call sites: 1.

- super — declaration-without-runtime-body; [scripts/fixtures/legacy-agents.cjs:8](<../../../../../../scripts/fixtures/legacy-agents.cjs#L8>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/agent-construction.test.cjs:22](<../../../../../../electron/ai/agents/agent-construction.test.cjs#L22>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:51](<../../../../../../electron/ai/agents/agent-construction.test.cjs#L51>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:109](<../../../../../../electron/ai/agents/agent-construction.test.cjs#L109>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:150](<../../../../../../electron/ai/agents/agent-construction.test.cjs#L150>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:166](<../../../../../../electron/ai/agents/agent-construction.test.cjs#L166>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:289](<../../../../../../electron/ai/agents/agent-construction.test.cjs#L289>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:47](<../../../../../../electron/ai/agents/agent-store.test.cjs#L47>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:117](<../../../../../../electron/ai/agents/agent-store.test.cjs#L117>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:230](<../../../../../../electron/ai/agents/agent-store.test.cjs#L230>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:250](<../../../../../../electron/ai/agents/agent-store.test.cjs#L250>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:274](<../../../../../../electron/ai/agents/agent-store.test.cjs#L274>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:309](<../../../../../../electron/ai/agents/agent-store.test.cjs#L309>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:346](<../../../../../../electron/ai/agents/agent-store.test.cjs#L346>) — static-call-site; coverage not established.
- [electron/ai/agents/agent-construction.test.cjs:6](<../../../../../../electron/ai/agents/agent-construction.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/ai/agents/agent-store.test.cjs:9](<../../../../../../electron/ai/agents/agent-store.test.cjs#L9>) — file-import-only; coverage not established.
