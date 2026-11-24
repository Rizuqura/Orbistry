# electron/ai/history-budget.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/history-budget.cjs:1](<../../../../../../electron/ai/history-budget.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/history-budget.cjs](<history-budget.cjs.md#s-50aa8372baf30825>) (Module)
- [budgetHistory](<history-budget.cjs.md#s-0c3553c9658a4cf5>) (FunctionDeclaration)
- [budgetHistory.&lt;anonymous@20:44&gt;](<history-budget.cjs.md#s-77134f2c84cb3634>) (ArrowFunction)

<a id="s-50aa8372baf30825"></a>

## electron/ai/history-budget.cjs

[electron/ai/history-budget.cjs:1](<../../../../../../electron/ai/history-budget.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/ai/history-budget.cjs:1](<../../../../../../electron/ai/history-budget.cjs#L1>)
- require — module-loader; [electron/ai/history-budget.cjs:4](<../../../../../../electron/ai/history-budget.cjs#L4>)

**Related tests / acceptance harnesses:**

- [electron/ai/context-limits.test.cjs:10](<../../../../../../electron/ai/context-limits.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:518](<../../../../../../electron/ai/orchestrator.test.cjs#L518>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:7](<../../../../../../electron/ai/runtime-context.test.cjs#L7>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:232](<../../../../../../tests/integration/architecture-contract.test.cjs#L232>) — file-import-only; coverage not established.

<a id="s-0c3553c9658a4cf5"></a>

## budgetHistory

[electron/ai/history-budget.cjs:6](<../../../../../../electron/ai/history-budget.cjs#L6>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: budgetHistory ([electron/ai/history-budget.cjs:1](<../../../../../../electron/ai/history-budget.cjs#L1>)).

Lexical owner: [electron/ai/history-budget.cjs](<history-budget.cjs.md#s-50aa8372baf30825>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| baseMessages | any | compiler-inferred | required |
| history | any | compiler-inferred | required |
| settings | any | compiler-inferred | required |

Returns: { history: any; diagnostics: { estimatedPromptTokens: any; droppedExchanges: number; estimateMethod: string; }; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [estimateTokens](<../shared/token-budget.cjs.md#s-81eabfdb3a44d606>) — [electron/ai/history-budget.cjs:8](<../../../../../../electron/ai/history-budget.cjs#L8>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/history-budget.cjs:10](<../../../../../../electron/ai/history-budget.cjs#L10>)
- [estimateTokens](<../shared/token-budget.cjs.md#s-81eabfdb3a44d606>) — [electron/ai/history-budget.cjs:35](<../../../../../../electron/ai/history-budget.cjs#L35>)
- [estimateTokens](<../shared/token-budget.cjs.md#s-81eabfdb3a44d606>) — [electron/ai/history-budget.cjs:40](<../../../../../../electron/ai/history-budget.cjs#L40>)

**Called by (statically resolved):**

- [runAssignedTurn](<agents/assigned-chat.cjs.md#s-d49a3f162aa849c6>) — [electron/ai/agents/assigned-chat.cjs:167](<../../../../../../electron/ai/agents/assigned-chat.cjs#L167>)
- [runEntityProtocol](<agents/entity-agent-protocol.cjs.md#s-5093e0259461bc43>) — [electron/ai/agents/entity-agent-protocol.cjs:179](<../../../../../../electron/ai/agents/entity-agent-protocol.cjs#L179>)
- [runEntityProtocol](<agents/entity-agent-protocol.cjs.md#s-5093e0259461bc43>) — [electron/ai/agents/entity-agent-protocol.cjs:213](<../../../../../../electron/ai/agents/entity-agent-protocol.cjs#L213>)
- [runEntityProtocol](<agents/entity-agent-protocol.cjs.md#s-5093e0259461bc43>) — [electron/ai/agents/entity-agent-protocol.cjs:250](<../../../../../../electron/ai/agents/entity-agent-protocol.cjs#L250>)
- [&lt;anonymous@52:87&gt;.&lt;anonymous@62:5&gt;](<context-limits.test.cjs.md#s-54a516958c26a518>) — [electron/ai/context-limits.test.cjs:62](<../../../../../../electron/ai/context-limits.test.cjs#L62>)
- [&lt;anonymous@52:87&gt;](<context-limits.test.cjs.md#s-46c6b3c98ffc5f58>) — [electron/ai/context-limits.test.cjs:71](<../../../../../../electron/ai/context-limits.test.cjs#L71>)
- [planDataset](<dataset-planner.cjs.md#s-9b1e48bfd220f829>) — [electron/ai/dataset-planner.cjs:214](<../../../../../../electron/ai/dataset-planner.cjs#L214>)
- [planDataset](<dataset-planner.cjs.md#s-9b1e48bfd220f829>) — [electron/ai/dataset-planner.cjs:263](<../../../../../../electron/ai/dataset-planner.cjs#L263>)
- [createContextOrchestrator.run](<orchestrator.cjs.md#s-be352215519f7acf>) — [electron/ai/orchestrator.cjs:562](<../../../../../../electron/ai/orchestrator.cjs#L562>)
- [createContextOrchestrator.run](<orchestrator.cjs.md#s-be352215519f7acf>) — [electron/ai/orchestrator.cjs:699](<../../../../../../electron/ai/orchestrator.cjs#L699>)
- [createContextOrchestrator.run](<orchestrator.cjs.md#s-be352215519f7acf>) — [electron/ai/orchestrator.cjs:863](<../../../../../../electron/ai/orchestrator.cjs#L863>)
- [&lt;anonymous@228:87&gt;](<runtime-context.test.cjs.md#s-c9a8a0f65c9d2ba2>) — [electron/ai/runtime-context.test.cjs:243](<../../../../../../electron/ai/runtime-context.test.cjs#L243>)
- [planStatistics](<statistics.cjs.md#s-4cd6a96e6d276ca8>) — [electron/ai/statistics.cjs:274](<../../../../../../electron/ai/statistics.cjs#L274>)

Unresolved / external call sites: 8.

- baseMessages.map — external-or-dynamic-dispatch; [electron/ai/history-budget.cjs:20](<../../../../../../electron/ai/history-budget.cjs#L20>)
- exchanges.push — external-or-dynamic-dispatch; [electron/ai/history-budget.cjs:32](<../../../../../../electron/ai/history-budget.cjs#L32>)
- history.slice — external-or-dynamic-dispatch; [electron/ai/history-budget.cjs:32](<../../../../../../electron/ai/history-budget.cjs#L32>)
- exchanges.slice — external-or-dynamic-dispatch; [electron/ai/history-budget.cjs:34](<../../../../../../electron/ai/history-budget.cjs#L34>)
- kept.flat — external-or-dynamic-dispatch; [electron/ai/history-budget.cjs:35](<../../../../../../electron/ai/history-budget.cjs#L35>)
- kept.shift — external-or-dynamic-dispatch; [electron/ai/history-budget.cjs:36](<../../../../../../electron/ai/history-budget.cjs#L36>)
- kept.flat — external-or-dynamic-dispatch; [electron/ai/history-budget.cjs:38](<../../../../../../electron/ai/history-budget.cjs#L38>)
- kept.flat — external-or-dynamic-dispatch; [electron/ai/history-budget.cjs:40](<../../../../../../electron/ai/history-budget.cjs#L40>)

**Related tests / acceptance harnesses:**

- [electron/ai/context-limits.test.cjs:62](<../../../../../../electron/ai/context-limits.test.cjs#L62>) — static-call-site; coverage not established.
- [electron/ai/context-limits.test.cjs:71](<../../../../../../electron/ai/context-limits.test.cjs#L71>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:243](<../../../../../../electron/ai/runtime-context.test.cjs#L243>) — static-call-site; coverage not established.
- [electron/ai/context-limits.test.cjs:10](<../../../../../../electron/ai/context-limits.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:518](<../../../../../../electron/ai/orchestrator.test.cjs#L518>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:7](<../../../../../../electron/ai/runtime-context.test.cjs#L7>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:232](<../../../../../../tests/integration/architecture-contract.test.cjs#L232>) — file-import-only; coverage not established.

<a id="s-77134f2c84cb3634"></a>

## budgetHistory.&lt;anonymous@20:44&gt;

[electron/ai/history-budget.cjs:20](<../../../../../../electron/ai/history-budget.cjs#L20>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [budgetHistory](<history-budget.cjs.md#s-0c3553c9658a4cf5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| message | any | compiler-inferred | required |

Returns: { role: any; estimatedTokens: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [estimateTokens](<../shared/token-budget.cjs.md#s-81eabfdb3a44d606>) — [electron/ai/history-budget.cjs:22](<../../../../../../electron/ai/history-budget.cjs#L22>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/context-limits.test.cjs:10](<../../../../../../electron/ai/context-limits.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/orchestrator.test.cjs:518](<../../../../../../electron/ai/orchestrator.test.cjs#L518>) — file-import-only; coverage not established.
- [electron/ai/runtime-context.test.cjs:7](<../../../../../../electron/ai/runtime-context.test.cjs#L7>) — file-import-only; coverage not established.
- [tests/integration/architecture-contract.test.cjs:232](<../../../../../../tests/integration/architecture-contract.test.cjs#L232>) — file-import-only; coverage not established.
