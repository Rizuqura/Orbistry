# electron/ai/agents/agent-policy.cjs: symbols

[Atlas](<../../../../../README.md>) / [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>) / [electron/ai/agents/agent-policy.cjs:1](<../../../../../../../electron/ai/agents/agent-policy.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/agents/agent-policy.cjs](<agent-policy.cjs.md#s-bdae06dd3e647448>) (Module)
- [AGENT_ID](<agent-policy.cjs.md#s-6f77f2e1b77fb184>) (VariableDeclaration)
- [AGENT_DEFINITIONS](<agent-policy.cjs.md#s-4bd712b678eef179>) (VariableDeclaration)
- [validateCustomInstructions](<agent-policy.cjs.md#s-0dbc6d2e83719bfc>) (FunctionDeclaration)

<a id="s-bdae06dd3e647448"></a>

## electron/ai/agents/agent-policy.cjs

[electron/ai/agents/agent-policy.cjs:1](<../../../../../../../electron/ai/agents/agent-policy.cjs#L1>) · Module · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/ai/agents/agent-policy.cjs:1](<../../../../../../../electron/ai/agents/agent-policy.cjs#L1>)
- require — module-loader; [electron/ai/agents/agent-policy.cjs:7](<../../../../../../../electron/ai/agents/agent-policy.cjs#L7>)
- require — module-loader; [electron/ai/agents/agent-policy.cjs:8](<../../../../../../../electron/ai/agents/agent-policy.cjs#L8>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6f77f2e1b77fb184"></a>

## AGENT_ID

[electron/ai/agents/agent-policy.cjs:2](<../../../../../../../electron/ai/agents/agent-policy.cjs#L2>) · VariableDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: AGENT_ID ([electron/ai/agents/agent-policy.cjs:1](<../../../../../../../electron/ai/agents/agent-policy.cjs#L1>)), AGENT_ID ([electron/ai/agents/agent-store.cjs:1](<../../../../../../../electron/ai/agents/agent-store.cjs#L1>)), AGENT_ID ([scripts/fixtures/legacy-agents.cjs:1](<../../../../../../../scripts/fixtures/legacy-agents.cjs#L1>)).

Lexical owner: [electron/ai/agents/agent-policy.cjs](<agent-policy.cjs.md#s-bdae06dd3e647448>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4bd712b678eef179"></a>

## AGENT_DEFINITIONS

[electron/ai/agents/agent-policy.cjs:3](<../../../../../../../electron/ai/agents/agent-policy.cjs#L3>) · VariableDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: AGENT_DEFINITIONS ([electron/ai/agents/agent-policy.cjs:1](<../../../../../../../electron/ai/agents/agent-policy.cjs#L1>)).

Lexical owner: [electron/ai/agents/agent-policy.cjs](<agent-policy.cjs.md#s-bdae06dd3e647448>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Object.freeze — external-or-dynamic-dispatch; [electron/ai/agents/agent-policy.cjs:3](<../../../../../../../electron/ai/agents/agent-policy.cjs#L3>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0dbc6d2e83719bfc"></a>

## validateCustomInstructions

[electron/ai/agents/agent-policy.cjs:9](<../../../../../../../electron/ai/agents/agent-policy.cjs#L9>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: validateCustomInstructions ([electron/ai/agents/agent-policy.cjs:1](<../../../../../../../electron/ai/agents/agent-policy.cjs#L1>)).

Lexical owner: [electron/ai/agents/agent-policy.cjs](<agent-policy.cjs.md#s-bdae06dd3e647448>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-policy.cjs:15](<../../../../../../../electron/ai/agents/agent-policy.cjs#L15>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/agent-policy.cjs:24](<../../../../../../../electron/ai/agents/agent-policy.cjs#L24>)

**Called by (statically resolved):**

- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:291](<../../../../../../../electron/ai/agents/agent-construction.cjs#L291>)
- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:345](<../../../../../../../electron/ai/agents/agent-construction.cjs#L345>)
- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:346](<../../../../../../../electron/ai/agents/agent-construction.cjs#L346>)
- [validateConstruction](<agent-construction.cjs.md#s-c40c24f689846a0d>) — [electron/ai/agents/agent-construction.cjs:366](<../../../../../../../electron/ai/agents/agent-construction.cjs#L366>)
- [AgentStore.save.&lt;anonymous@580:23&gt;](<agent-store.cjs.md#s-92c7ebeb214bb98f>) — [electron/ai/agents/agent-store.cjs:591](<../../../../../../../electron/ai/agents/agent-store.cjs#L591>)
- [buildContextMessages](<../inference/prompt-builder.cjs.md#s-241c37ad734d8bcd>) — [electron/ai/inference/prompt-builder.cjs:99](<../../../../../../../electron/ai/inference/prompt-builder.cjs#L99>)

Unresolved / external call sites: 3.

- /&#91;\\u0000-\\u0008\\u000b\\u000c\\u000e-\\u001f&#93;/u.test — external-or-dynamic-dispatch; [electron/ai/agents/agent-policy.cjs:13](<../../../../../../../electron/ai/agents/agent-policy.cjs#L13>)
- /(?:ignore&#124;override&#124;disable&#124;bypass)\\s+(?:(?:all&#124;the&#124;your&#124;protected&#124;system&#124;context&#124;orbistry&#124;qterminal&#124;wonnyy&#124;chronoz&#124;previous&#124;safety)\\s+){0,4}(?:rules&#124;policy&#124;instructions&#124;boundaries — external-or-dynamic-dispatch; [electron/ai/agents/agent-policy.cjs:20](<../../../../../../../electron/ai/agents/agent-policy.cjs#L20>)
- value.trim — external-or-dynamic-dispatch; [electron/ai/agents/agent-policy.cjs:28](<../../../../../../../electron/ai/agents/agent-policy.cjs#L28>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
