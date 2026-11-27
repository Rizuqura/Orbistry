# electron/ai/skills.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/skills.cjs:1](<../../../../../../electron/ai/skills.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/skills.cjs](<skills.cjs.md#s-9f6d5c4016b85c97>) (Module)
- [SKILLS](<skills.cjs.md#s-a3d4130de7a531b4>) (VariableDeclaration)
- [skillsFor](<skills.cjs.md#s-b3ded4fcddd47806>) (ArrowFunction)
- [skillsFor.&lt;anonymous@12:13&gt;](<skills.cjs.md#s-a97f6723e8590e81>) (ArrowFunction)
- [skillsFor.&lt;anonymous@13:10&gt;](<skills.cjs.md#s-4f5f1e43328a57d7>) (ArrowFunction)

<a id="s-9f6d5c4016b85c97"></a>

## electron/ai/skills.cjs

[electron/ai/skills.cjs:1](<../../../../../../electron/ai/skills.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/knowledge-store.test.cjs:10](<../../../../../../electron/ai/knowledge-store.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/knowledge-store.test.cjs:416](<../../../../../../electron/ai/knowledge-store.test.cjs#L416>) — file-import-only; coverage not established.

<a id="s-a3d4130de7a531b4"></a>

## SKILLS

[electron/ai/skills.cjs:2](<../../../../../../electron/ai/skills.cjs#L2>) · VariableDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: SKILLS ([electron/ai/skills.cjs:1](<../../../../../../electron/ai/skills.cjs#L1>)).

Lexical owner: [electron/ai/skills.cjs](<skills.cjs.md#s-9f6d5c4016b85c97>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Object.freeze — external-or-dynamic-dispatch; [electron/ai/skills.cjs:2](<../../../../../../electron/ai/skills.cjs#L2>)
- Object.freeze — external-or-dynamic-dispatch; [electron/ai/skills.cjs:3](<../../../../../../electron/ai/skills.cjs#L3>)

**Related tests / acceptance harnesses:**

- [electron/ai/knowledge-store.test.cjs:10](<../../../../../../electron/ai/knowledge-store.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/knowledge-store.test.cjs:416](<../../../../../../electron/ai/knowledge-store.test.cjs#L416>) — file-import-only; coverage not established.

<a id="s-b3ded4fcddd47806"></a>

## skillsFor

[electron/ai/skills.cjs:10](<../../../../../../electron/ai/skills.cjs#L10>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: skillsFor ([electron/ai/skills.cjs:1](<../../../../../../electron/ai/skills.cjs#L1>)).

Lexical owner: [electron/ai/skills.cjs](<skills.cjs.md#s-9f6d5c4016b85c97>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| agentId | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [defaults](<agents/agent-construction.cjs.md#s-a6f7591b9f78cb97>) — [electron/ai/agents/agent-construction.cjs:208](<../../../../../../electron/ai/agents/agent-construction.cjs#L208>)
- [defaults](<agents/agent-construction.cjs.md#s-a6f7591b9f78cb97>) — [electron/ai/agents/agent-construction.cjs:209](<../../../../../../electron/ai/agents/agent-construction.cjs#L209>)
- [validateConstruction](<agents/agent-construction.cjs.md#s-818f4b1aaf6e1b48>) — [electron/ai/agents/agent-construction.cjs:319](<../../../../../../electron/ai/agents/agent-construction.cjs#L319>)
- [AgentStore.get](<agents/agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:265](<../../../../../../electron/ai/agents/agent-store.cjs#L265>)
- [AgentStore.get](<agents/agent-store.cjs.md#s-feff3820609fc57c>) — [electron/ai/agents/agent-store.cjs:268](<../../../../../../electron/ai/agents/agent-store.cjs#L268>)
- [&lt;anonymous@412:78&gt;](<knowledge-store.test.cjs.md#s-a3d1c3c16080d410>) — [electron/ai/knowledge-store.test.cjs:413](<../../../../../../electron/ai/knowledge-store.test.cjs#L413>)
- [&lt;anonymous@412:78&gt;](<knowledge-store.test.cjs.md#s-a3d1c3c16080d410>) — [electron/ai/knowledge-store.test.cjs:414](<../../../../../../electron/ai/knowledge-store.test.cjs#L414>)

Unresolved / external call sites: 3.

- Object.values(SKILLS) .filter((skill) =&gt; skill.agentId === agentId) .map — external-or-dynamic-dispatch; [electron/ai/skills.cjs:11](<../../../../../../electron/ai/skills.cjs#L11>)
- Object.values(SKILLS) .filter — external-or-dynamic-dispatch; [electron/ai/skills.cjs:11](<../../../../../../electron/ai/skills.cjs#L11>)
- Object.values — external-or-dynamic-dispatch; [electron/ai/skills.cjs:11](<../../../../../../electron/ai/skills.cjs#L11>)

**Related tests / acceptance harnesses:**

- [electron/ai/knowledge-store.test.cjs:413](<../../../../../../electron/ai/knowledge-store.test.cjs#L413>) — static-call-site; coverage not established.
- [electron/ai/knowledge-store.test.cjs:414](<../../../../../../electron/ai/knowledge-store.test.cjs#L414>) — static-call-site; coverage not established.
- [electron/ai/knowledge-store.test.cjs:10](<../../../../../../electron/ai/knowledge-store.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/knowledge-store.test.cjs:416](<../../../../../../electron/ai/knowledge-store.test.cjs#L416>) — file-import-only; coverage not established.

<a id="s-a97f6723e8590e81"></a>

## skillsFor.&lt;anonymous@12:13&gt;

[electron/ai/skills.cjs:12](<../../../../../../electron/ai/skills.cjs#L12>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [skillsFor](<skills.cjs.md#s-b3ded4fcddd47806>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| skill | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/knowledge-store.test.cjs:10](<../../../../../../electron/ai/knowledge-store.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/knowledge-store.test.cjs:416](<../../../../../../electron/ai/knowledge-store.test.cjs#L416>) — file-import-only; coverage not established.

<a id="s-4f5f1e43328a57d7"></a>

## skillsFor.&lt;anonymous@13:10&gt;

[electron/ai/skills.cjs:13](<../../../../../../electron/ai/skills.cjs#L13>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [skillsFor](<skills.cjs.md#s-b3ded4fcddd47806>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| skill | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/knowledge-store.test.cjs:10](<../../../../../../electron/ai/knowledge-store.test.cjs#L10>) — file-import-only; coverage not established.
- [electron/ai/knowledge-store.test.cjs:416](<../../../../../../electron/ai/knowledge-store.test.cjs#L416>) — file-import-only; coverage not established.
