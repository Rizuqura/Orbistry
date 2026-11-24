# features/agents/agent-settings.tsx: symbols

[Atlas](<../../../../README.md>) / [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>) / [features/agents/agent-settings.tsx:1](<../../../../../../features/agents/agent-settings.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/agents/agent-settings.tsx](<agent-settings.tsx.md#s-ae20be86a56c0e9b>) (Module)
- [AgentSettings](<agent-settings.tsx.md#s-250a95b02e95b14e>) (FunctionDeclaration)
- [AgentSettings.&lt;anonymous@14:12&gt;](<agent-settings.tsx.md#s-313b5b31376211dd>) (FunctionType)
- [AgentSettings.&lt;anonymous@22:13&gt;](<agent-settings.tsx.md#s-f2ee2366d5470b7f>) (ArrowFunction)
- [AgentSettings.&lt;anonymous@22:13&gt;.&lt;anonymous@26:12&gt;](<agent-settings.tsx.md#s-ef0e3992e3644ea2>) (ArrowFunction)
- [AgentSettings.close](<agent-settings.tsx.md#s-8598031fb92ce23b>) (ArrowFunction)
- [AgentSettings.&lt;anonymous@54:19&gt;](<agent-settings.tsx.md#s-2291bec8d5da0d54>) (ArrowFunction)
- [AgentSettings.&lt;anonymous@69:22&gt;](<agent-settings.tsx.md#s-11f32c2af9d99ee1>) (ArrowFunction)

<a id="s-ae20be86a56c0e9b"></a>

## features/agents/agent-settings.tsx

[features/agents/agent-settings.tsx:1](<../../../../../../features/agents/agent-settings.tsx#L1>) · Module · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-250a95b02e95b14e"></a>

## AgentSettings

[features/agents/agent-settings.tsx:8](<../../../../../../features/agents/agent-settings.tsx#L8>) · FunctionDeclaration · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

Hosts the existing Workbench modal and its unsaved-change guard, optionally displaying the originating entity assignment.

Purpose evidence: jsdoc.

Exported as: AgentSettings ([features/agents/agent-settings.tsx:1](<../../../../../../features/agents/agent-settings.tsx#L1>)).

Lexical owner: [features/agents/agent-settings.tsx](<agent-settings.tsx.md#s-ae20be86a56c0e9b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   chat,   onClose,   assignmentContext, } | { chat: ChatController; onClose: () =&gt; void; assignmentContext?: AssignmentContext; } | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [useConfirmation](<../dialogs/use-confirmation.tsx.md#s-68cb241f4bfc872f>) — [features/agents/agent-settings.tsx:21](<../../../../../../features/agents/agent-settings.tsx#L21>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- useRef — external-or-dynamic-dispatch; [features/agents/agent-settings.tsx:17](<../../../../../../features/agents/agent-settings.tsx#L17>)
- useRef — external-or-dynamic-dispatch; [features/agents/agent-settings.tsx:18](<../../../../../../features/agents/agent-settings.tsx#L18>)
- useState — external-or-dynamic-dispatch; [features/agents/agent-settings.tsx:19](<../../../../../../features/agents/agent-settings.tsx#L19>)
- useState — external-or-dynamic-dispatch; [features/agents/agent-settings.tsx:20](<../../../../../../features/agents/agent-settings.tsx#L20>)
- useEffect — external-or-dynamic-dispatch; [features/agents/agent-settings.tsx:22](<../../../../../../features/agents/agent-settings.tsx#L22>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-313b5b31376211dd"></a>

## AgentSettings.&lt;anonymous@14:12&gt;

[features/agents/agent-settings.tsx:14](<../../../../../../features/agents/agent-settings.tsx#L14>) · FunctionType · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentSettings](<agent-settings.tsx.md#s-250a95b02e95b14e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f2ee2366d5470b7f"></a>

## AgentSettings.&lt;anonymous@22:13&gt;

[features/agents/agent-settings.tsx:22](<../../../../../../features/agents/agent-settings.tsx#L22>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentSettings](<agent-settings.tsx.md#s-250a95b02e95b14e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- element.showModal — external-or-dynamic-dispatch; [features/agents/agent-settings.tsx:25](<../../../../../../features/agents/agent-settings.tsx#L25>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ef0e3992e3644ea2"></a>

## AgentSettings.&lt;anonymous@22:13&gt;.&lt;anonymous@26:12&gt;

[features/agents/agent-settings.tsx:26](<../../../../../../features/agents/agent-settings.tsx#L26>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentSettings.&lt;anonymous@22:13&gt;](<agent-settings.tsx.md#s-f2ee2366d5470b7f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- element.close — external-or-dynamic-dispatch; [features/agents/agent-settings.tsx:27](<../../../../../../features/agents/agent-settings.tsx#L27>)
- previous.focus — external-or-dynamic-dispatch; [features/agents/agent-settings.tsx:29](<../../../../../../features/agents/agent-settings.tsx#L29>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8598031fb92ce23b"></a>

## AgentSettings.close

[features/agents/agent-settings.tsx:32](<../../../../../../features/agents/agent-settings.tsx#L32>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentSettings](<agent-settings.tsx.md#s-250a95b02e95b14e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [AgentSettings.&lt;anonymous@54:19&gt;](<agent-settings.tsx.md#s-2291bec8d5da0d54>) — [features/agents/agent-settings.tsx:56](<../../../../../../features/agents/agent-settings.tsx#L56>)
- [AgentSettings.&lt;anonymous@69:22&gt;](<agent-settings.tsx.md#s-11f32c2af9d99ee1>) — [features/agents/agent-settings.tsx:69](<../../../../../../features/agents/agent-settings.tsx#L69>)

Unresolved / external call sites: 2.

- confirm — external-or-dynamic-dispatch; [features/agents/agent-settings.tsx:38](<../../../../../../features/agents/agent-settings.tsx#L38>)
- onClose — declaration-without-runtime-body; [features/agents/agent-settings.tsx:43](<../../../../../../features/agents/agent-settings.tsx#L43>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2291bec8d5da0d54"></a>

## AgentSettings.&lt;anonymous@54:19&gt;

[features/agents/agent-settings.tsx:54](<../../../../../../features/agents/agent-settings.tsx#L54>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentSettings](<agent-settings.tsx.md#s-250a95b02e95b14e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [AgentSettings.close](<agent-settings.tsx.md#s-8598031fb92ce23b>) — [features/agents/agent-settings.tsx:56](<../../../../../../features/agents/agent-settings.tsx#L56>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- event.preventDefault — external-or-dynamic-dispatch; [features/agents/agent-settings.tsx:55](<../../../../../../features/agents/agent-settings.tsx#L55>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-11f32c2af9d99ee1"></a>

## AgentSettings.&lt;anonymous@69:22&gt;

[features/agents/agent-settings.tsx:69](<../../../../../../features/agents/agent-settings.tsx#L69>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentSettings](<agent-settings.tsx.md#s-250a95b02e95b14e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [AgentSettings.close](<agent-settings.tsx.md#s-8598031fb92ce23b>) — [features/agents/agent-settings.tsx:69](<../../../../../../features/agents/agent-settings.tsx#L69>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
