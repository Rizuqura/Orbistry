# electron/shared/context-limits.cjs: symbols

[Atlas](<../../../../README.md>) / [Shared deterministic infrastructure](<../../../../modules/shared.md>) / [electron/shared/context-limits.cjs:1](<../../../../../../electron/shared/context-limits.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/shared/context-limits.cjs](<context-limits.cjs.md#s-ad0e9fc4bb32ac61>) (Module)
- [LOCAL_CONTEXT_LIMIT](<context-limits.cjs.md#s-4f6deada1204a415>) (VariableDeclaration)
- [REMOTE_CONTEXT_LIMIT](<context-limits.cjs.md#s-d369839b8326cc56>) (VariableDeclaration)
- [contextLimit](<context-limits.cjs.md#s-cb06ea768ce0bca3>) (FunctionDeclaration)

<a id="s-ad0e9fc4bb32ac61"></a>

## electron/shared/context-limits.cjs

[electron/shared/context-limits.cjs:1](<../../../../../../electron/shared/context-limits.cjs#L1>) · Module · production · [Shared deterministic infrastructure](<../../../../modules/shared.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:225](<../../../../../../tests/integration/architecture-contract.test.cjs#L225>) — file-import-only; coverage not established.

<a id="s-4f6deada1204a415"></a>

## LOCAL_CONTEXT_LIMIT

[electron/shared/context-limits.cjs:2](<../../../../../../electron/shared/context-limits.cjs#L2>) · VariableDeclaration · production · [Shared deterministic infrastructure](<../../../../modules/shared.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: LOCAL_CONTEXT_LIMIT ([electron/ai/context-limits.d.cts:1](<../../../../../../electron/ai/context-limits.d.cts#L1>)), LOCAL_CONTEXT_LIMIT ([electron/shared/context-limits.cjs:1](<../../../../../../electron/shared/context-limits.cjs#L1>)), LOCAL_CONTEXT_LIMIT ([electron/ai/context-limits.cjs:1](<../../../../../../electron/ai/context-limits.cjs#L1>)).

Lexical owner: [electron/shared/context-limits.cjs](<context-limits.cjs.md#s-ad0e9fc4bb32ac61>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:225](<../../../../../../tests/integration/architecture-contract.test.cjs#L225>) — file-import-only; coverage not established.

<a id="s-d369839b8326cc56"></a>

## REMOTE_CONTEXT_LIMIT

[electron/shared/context-limits.cjs:3](<../../../../../../electron/shared/context-limits.cjs#L3>) · VariableDeclaration · production · [Shared deterministic infrastructure](<../../../../modules/shared.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: REMOTE_CONTEXT_LIMIT ([electron/ai/context-limits.d.cts:1](<../../../../../../electron/ai/context-limits.d.cts#L1>)), REMOTE_CONTEXT_LIMIT ([electron/shared/context-limits.cjs:1](<../../../../../../electron/shared/context-limits.cjs#L1>)), REMOTE_CONTEXT_LIMIT ([electron/ai/context-limits.cjs:1](<../../../../../../electron/ai/context-limits.cjs#L1>)).

Lexical owner: [electron/shared/context-limits.cjs](<context-limits.cjs.md#s-ad0e9fc4bb32ac61>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:225](<../../../../../../tests/integration/architecture-contract.test.cjs#L225>) — file-import-only; coverage not established.

<a id="s-cb06ea768ce0bca3"></a>

## contextLimit

[electron/shared/context-limits.cjs:6](<../../../../../../electron/shared/context-limits.cjs#L6>) · FunctionDeclaration · production · [Shared deterministic infrastructure](<../../../../modules/shared.md>)

Returns the application ceiling capped by a valid advertised capacity; invalid/missing capacities use the existing conservative default. Pure.

Purpose evidence: jsdoc.

Exported as: contextLimit ([electron/ai/context-limits.d.cts:1](<../../../../../../electron/ai/context-limits.d.cts#L1>)), contextLimit ([electron/shared/context-limits.cjs:1](<../../../../../../electron/shared/context-limits.cjs#L1>)), contextLimit ([electron/ai/context-limits.cjs:1](<../../../../../../electron/ai/context-limits.cjs#L1>)).

Lexical owner: [electron/shared/context-limits.cjs](<context-limits.cjs.md#s-ad0e9fc4bb32ac61>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| providerId | any | compiler-inferred | required |
| advertisedLength | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@12:85&gt;](<../ai/context-limits.test.cjs.md#s-a5710e2b119edf12>) — [electron/ai/context-limits.test.cjs:13](<../../../../../../electron/ai/context-limits.test.cjs#L13>)
- [&lt;anonymous@12:85&gt;](<../ai/context-limits.test.cjs.md#s-a5710e2b119edf12>) — [electron/ai/context-limits.test.cjs:14](<../../../../../../electron/ai/context-limits.test.cjs#L14>)
- [&lt;anonymous@12:85&gt;](<../ai/context-limits.test.cjs.md#s-a5710e2b119edf12>) — [electron/ai/context-limits.test.cjs:15](<../../../../../../electron/ai/context-limits.test.cjs#L15>)
- [&lt;anonymous@12:85&gt;](<../ai/context-limits.test.cjs.md#s-a5710e2b119edf12>) — [electron/ai/context-limits.test.cjs:17](<../../../../../../electron/ai/context-limits.test.cjs#L17>)
- [&lt;anonymous@12:85&gt;](<../ai/context-limits.test.cjs.md#s-a5710e2b119edf12>) — [electron/ai/context-limits.test.cjs:18](<../../../../../../electron/ai/context-limits.test.cjs#L18>)
- [ModelRegistry.validateSelection](<../ai/model-registry.cjs.md#s-125d10d68364d877>) — [electron/ai/model-registry.cjs:181](<../../../../../../electron/ai/model-registry.cjs#L181>)
- [ModelSettings](<../../features/model-settings/model-settings.tsx.md#s-16039570502f8872>) — [features/model-settings/model-settings.tsx:103](<../../../../../../features/model-settings/model-settings.tsx#L103>)
- [ModelSettings.useModel](<../../features/model-settings/model-settings.tsx.md#s-ef618ac89a30b727>) — [features/model-settings/model-settings.tsx:139](<../../../../../../features/model-settings/model-settings.tsx#L139>)

Unresolved / external call sites: 2.

- Math.min — external-or-dynamic-dispatch; [electron/shared/context-limits.cjs:9](<../../../../../../electron/shared/context-limits.cjs#L9>)
- Number.isSafeInteger — external-or-dynamic-dispatch; [electron/shared/context-limits.cjs:11](<../../../../../../electron/shared/context-limits.cjs#L11>)

**Related tests / acceptance harnesses:**

- [electron/ai/context-limits.test.cjs:13](<../../../../../../electron/ai/context-limits.test.cjs#L13>) — static-call-site; coverage not established.
- [electron/ai/context-limits.test.cjs:14](<../../../../../../electron/ai/context-limits.test.cjs#L14>) — static-call-site; coverage not established.
- [electron/ai/context-limits.test.cjs:15](<../../../../../../electron/ai/context-limits.test.cjs#L15>) — static-call-site; coverage not established.
- [electron/ai/context-limits.test.cjs:17](<../../../../../../electron/ai/context-limits.test.cjs#L17>) — static-call-site; coverage not established.
- [electron/ai/context-limits.test.cjs:18](<../../../../../../electron/ai/context-limits.test.cjs#L18>) — static-call-site; coverage not established.
- [tests/integration/architecture-contract.test.cjs:225](<../../../../../../tests/integration/architecture-contract.test.cjs#L225>) — file-import-only; coverage not established.
