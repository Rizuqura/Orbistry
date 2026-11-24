# features/agents/agent-contacts.tsx: symbols

[Atlas](<../../../../README.md>) / [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>) / [features/agents/agent-contacts.tsx:1](<../../../../../../features/agents/agent-contacts.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/agents/agent-contacts.tsx](<agent-contacts.tsx.md#s-d7c2028acd56504c>) (Module)
- [AgentContact](<agent-contacts.tsx.md#s-9d6c2af33535b7ae>) (FunctionExpression)
- [AgentContact.&lt;anonymous@26:15&gt;](<agent-contacts.tsx.md#s-fb9555e887576937>) (FunctionType)
- [AgentContact.&lt;anonymous@32:13&gt;](<agent-contacts.tsx.md#s-83b5e0077fa949f0>) (FunctionType)
- [AgentContact.&lt;anonymous@33:14&gt;](<agent-contacts.tsx.md#s-69997ae5024449ad>) (FunctionType)
- [AgentContact.&lt;anonymous@34:15&gt;](<agent-contacts.tsx.md#s-0dd04d7b133cc321>) (FunctionType)
- [AgentContact.&lt;anonymous@35:13&gt;](<agent-contacts.tsx.md#s-0a746196ede5f164>) (FunctionType)
- [AgentContact.&lt;anonymous@36:13&gt;](<agent-contacts.tsx.md#s-ebb4d207ce9af6e7>) (FunctionType)
- [AgentContact.&lt;anonymous@44:13&gt;](<agent-contacts.tsx.md#s-346ea7241e1a0781>) (ArrowFunction)
- [AgentContact.&lt;anonymous@49:5&gt;](<agent-contacts.tsx.md#s-ea2b40757687198e>) (ArrowFunction)
- [AgentContact.&lt;anonymous@49:5&gt;.&lt;anonymous@51:9&gt;](<agent-contacts.tsx.md#s-d706188d40e93248>) (ArrowFunction)
- [AgentContact.&lt;anonymous@57:20&gt;](<agent-contacts.tsx.md#s-1bb1d4e646c639f9>) (ArrowFunction)
- [AgentContact.&lt;anonymous@78:20&gt;](<agent-contacts.tsx.md#s-c406472b03821045>) (ArrowFunction)
- [AgentContact.&lt;anonymous@78:20&gt;.&lt;anonymous@82:32&gt;](<agent-contacts.tsx.md#s-444857850f4fd594>) (ArrowFunction)
- [AgentContact.&lt;anonymous@103:20&gt;](<agent-contacts.tsx.md#s-4d1b20ea470aac39>) (ArrowFunction)
- [AgentContact.&lt;anonymous@122:29&gt;](<agent-contacts.tsx.md#s-f9e43fbf46ef55dd>) (ArrowFunction)
- [AgentContact.&lt;anonymous@134:26&gt;](<agent-contacts.tsx.md#s-021b6cc19b7265e0>) (ArrowFunction)
- [AgentContact.&lt;anonymous@134:26&gt;.&lt;anonymous@142:33&gt;](<agent-contacts.tsx.md#s-222d1855c5905b1b>) (ArrowFunction)
- [AgentContact.&lt;anonymous@134:26&gt;.&lt;anonymous@155:37&gt;](<agent-contacts.tsx.md#s-7d1f4f3709a0acb2>) (ArrowFunction)
- [AgentContact.&lt;anonymous@134:26&gt;.&lt;anonymous@156:38&gt;](<agent-contacts.tsx.md#s-9a699c9f6a7242f6>) (ArrowFunction)
- [AgentContact.&lt;anonymous@134:26&gt;.&lt;anonymous@165:54&gt;](<agent-contacts.tsx.md#s-378b4953e181f0fc>) (ArrowFunction)
- [AgentContact.&lt;anonymous@134:26&gt;.&lt;anonymous@178:34&gt;](<agent-contacts.tsx.md#s-7f9ba129c118fb93>) (ArrowFunction)
- [AgentContact.&lt;anonymous@134:26&gt;.&lt;anonymous@198:36&gt;](<agent-contacts.tsx.md#s-07748910ea076fb0>) (ArrowFunction)
- [AgentContact.&lt;anonymous@134:26&gt;.&lt;anonymous@204:36&gt;](<agent-contacts.tsx.md#s-2c7f1ae8e9dbae6a>) (ArrowFunction)
- [AgentContact.&lt;anonymous@134:26&gt;.&lt;anonymous@213:36&gt;](<agent-contacts.tsx.md#s-d27cef786abface4>) (ArrowFunction)
- [AgentContacts](<agent-contacts.tsx.md#s-0683638d3e906a24>) (FunctionDeclaration)
- [AgentContacts.&lt;anonymous@251:15&gt;](<agent-contacts.tsx.md#s-76c7fc758dff05b6>) (FunctionType)
- [AgentContacts.&lt;anonymous@252:10&gt;](<agent-contacts.tsx.md#s-0b3e8d2fb3d15775>) (FunctionType)
- [AgentContacts.&lt;anonymous@272:19&gt;](<agent-contacts.tsx.md#s-8c84ba5688b54de5>) (ArrowFunction)

<a id="s-d7c2028acd56504c"></a>

## features/agents/agent-contacts.tsx

[features/agents/agent-contacts.tsx:1](<../../../../../../features/agents/agent-contacts.tsx#L1>) · Module · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- memo — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:11](<../../../../../../features/agents/agent-contacts.tsx#L11>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9d6c2af33535b7ae"></a>

## AgentContact

[features/agents/agent-contacts.tsx:11](<../../../../../../features/agents/agent-contacts.tsx#L11>) · FunctionExpression · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/agents/agent-contacts.tsx](<agent-contacts.tsx.md#s-d7c2028acd56504c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   active,   onActivate,   agent,   conversations,   contextBoxes,   selectedId,   busy,   onSelect,   onNewChat,   onSettings,   onRename,   onRemove, } | { active: boolean; onActivate: (id: string) =&gt; void; agent: AgentConfig &#124; null; conversations: Conversation&#91;&#93;; contextBoxes: ContextBox&#91;&#93;; selectedId?: string; busy: boolean; onSelect: (id: string) =&gt; void; onNewChat: () =&gt; void; onSettings: (id: string) =&gt; void; onRename: (title: string, id: string) =&gt; Promise&lt;boolean &#124; undefined&gt;; onRemove: (id: string) =&gt; void; } | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [useConfirmation](<../dialogs/use-confirmation.tsx.md#s-68cb241f4bfc872f>) — [features/agents/agent-contacts.tsx:47](<../../../../../../features/agents/agent-contacts.tsx#L47>)
- [bannerStyle](<../chat/chat-presentation.ts.md#s-2b77ce68d12bd519>) — [features/agents/agent-contacts.tsx:69](<../../../../../../features/agents/agent-contacts.tsx#L69>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- useState — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:38](<../../../../../../features/agents/agent-contacts.tsx#L38>)
- useState — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:39](<../../../../../../features/agents/agent-contacts.tsx#L39>)
- useState — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:40](<../../../../../../features/agents/agent-contacts.tsx#L40>)
- useState — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:41](<../../../../../../features/agents/agent-contacts.tsx#L41>)
- useId — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:42](<../../../../../../features/agents/agent-contacts.tsx#L42>)
- useEffect — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:44](<../../../../../../features/agents/agent-contacts.tsx#L44>)
- useMemo — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:48](<../../../../../../features/agents/agent-contacts.tsx#L48>)
- owned.filter — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:57](<../../../../../../features/agents/agent-contacts.tsx#L57>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fb9555e887576937"></a>

## AgentContact.&lt;anonymous@26:15&gt;

[features/agents/agent-contacts.tsx:26](<../../../../../../features/agents/agent-contacts.tsx#L26>) · FunctionType · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact](<agent-contacts.tsx.md#s-9d6c2af33535b7ae>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-83b5e0077fa949f0"></a>

## AgentContact.&lt;anonymous@32:13&gt;

[features/agents/agent-contacts.tsx:32](<../../../../../../features/agents/agent-contacts.tsx#L32>) · FunctionType · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact](<agent-contacts.tsx.md#s-9d6c2af33535b7ae>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-69997ae5024449ad"></a>

## AgentContact.&lt;anonymous@33:14&gt;

[features/agents/agent-contacts.tsx:33](<../../../../../../features/agents/agent-contacts.tsx#L33>) · FunctionType · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact](<agent-contacts.tsx.md#s-9d6c2af33535b7ae>).

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

<a id="s-0dd04d7b133cc321"></a>

## AgentContact.&lt;anonymous@34:15&gt;

[features/agents/agent-contacts.tsx:34](<../../../../../../features/agents/agent-contacts.tsx#L34>) · FunctionType · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact](<agent-contacts.tsx.md#s-9d6c2af33535b7ae>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0a746196ede5f164"></a>

## AgentContact.&lt;anonymous@35:13&gt;

[features/agents/agent-contacts.tsx:35](<../../../../../../features/agents/agent-contacts.tsx#L35>) · FunctionType · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact](<agent-contacts.tsx.md#s-9d6c2af33535b7ae>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| title | string | annotation | required |
| id | string | annotation | required |

Returns: Promise&lt;boolean &#124; undefined&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ebb4d207ce9af6e7"></a>

## AgentContact.&lt;anonymous@36:13&gt;

[features/agents/agent-contacts.tsx:36](<../../../../../../features/agents/agent-contacts.tsx#L36>) · FunctionType · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact](<agent-contacts.tsx.md#s-9d6c2af33535b7ae>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-346ea7241e1a0781"></a>

## AgentContact.&lt;anonymous@44:13&gt;

[features/agents/agent-contacts.tsx:44](<../../../../../../features/agents/agent-contacts.tsx#L44>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact](<agent-contacts.tsx.md#s-9d6c2af33535b7ae>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setExpanded — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:45](<../../../../../../features/agents/agent-contacts.tsx#L45>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ea2b40757687198e"></a>

## AgentContact.&lt;anonymous@49:5&gt;

[features/agents/agent-contacts.tsx:49](<../../../../../../features/agents/agent-contacts.tsx#L49>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact](<agent-contacts.tsx.md#s-9d6c2af33535b7ae>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- conversations.filter — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:50](<../../../../../../features/agents/agent-contacts.tsx#L50>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d706188d40e93248"></a>

## AgentContact.&lt;anonymous@49:5&gt;.&lt;anonymous@51:9&gt;

[features/agents/agent-contacts.tsx:51](<../../../../../../features/agents/agent-contacts.tsx#L51>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact.&lt;anonymous@49:5&gt;](<agent-contacts.tsx.md#s-ea2b40757687198e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chat | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1bb1d4e646c639f9"></a>

## AgentContact.&lt;anonymous@57:20&gt;

[features/agents/agent-contacts.tsx:57](<../../../../../../features/agents/agent-contacts.tsx#L57>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact](<agent-contacts.tsx.md#s-9d6c2af33535b7ae>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chat | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- chat.title.toLowerCase().includes — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:58](<../../../../../../features/agents/agent-contacts.tsx#L58>)
- chat.title.toLowerCase — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:58](<../../../../../../features/agents/agent-contacts.tsx#L58>)
- query.toLowerCase — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:58](<../../../../../../features/agents/agent-contacts.tsx#L58>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c406472b03821045"></a>

## AgentContact.&lt;anonymous@78:20&gt;

[features/agents/agent-contacts.tsx:78](<../../../../../../features/agents/agent-contacts.tsx#L78>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact](<agent-contacts.tsx.md#s-9d6c2af33535b7ae>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- onActivate — declaration-without-runtime-body; [features/agents/agent-contacts.tsx:80](<../../../../../../features/agents/agent-contacts.tsx#L80>)
- setExpanded — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:81](<../../../../../../features/agents/agent-contacts.tsx#L81>)
- setExpanded — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:82](<../../../../../../features/agents/agent-contacts.tsx#L82>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-444857850f4fd594"></a>

## AgentContact.&lt;anonymous@78:20&gt;.&lt;anonymous@82:32&gt;

[features/agents/agent-contacts.tsx:82](<../../../../../../features/agents/agent-contacts.tsx#L82>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact.&lt;anonymous@78:20&gt;](<agent-contacts.tsx.md#s-c406472b03821045>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4d1b20ea470aac39"></a>

## AgentContact.&lt;anonymous@103:20&gt;

[features/agents/agent-contacts.tsx:103](<../../../../../../features/agents/agent-contacts.tsx#L103>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact](<agent-contacts.tsx.md#s-9d6c2af33535b7ae>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- onSettings — declaration-without-runtime-body; [features/agents/agent-contacts.tsx:103](<../../../../../../features/agents/agent-contacts.tsx#L103>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f9e43fbf46ef55dd"></a>

## AgentContact.&lt;anonymous@122:29&gt;

[features/agents/agent-contacts.tsx:122](<../../../../../../features/agents/agent-contacts.tsx#L122>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact](<agent-contacts.tsx.md#s-9d6c2af33535b7ae>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setQuery — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:122](<../../../../../../features/agents/agent-contacts.tsx#L122>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-021b6cc19b7265e0"></a>

## AgentContact.&lt;anonymous@134:26&gt;

[features/agents/agent-contacts.tsx:134](<../../../../../../features/agents/agent-contacts.tsx#L134>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact](<agent-contacts.tsx.md#s-9d6c2af33535b7ae>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chat | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [conversationSourceLabel](<../chat/source-label.ts.md#s-af86551cff8d3283>) — [features/agents/agent-contacts.tsx:186](<../../../../../../features/agents/agent-contacts.tsx#L186>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- title.trim — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:164](<../../../../../../features/agents/agent-contacts.tsx#L164>)
- chat.messages.at(-1)?.content.slice — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:182](<../../../../../../features/agents/agent-contacts.tsx#L182>)
- chat.messages.at — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:182](<../../../../../../features/agents/agent-contacts.tsx#L182>)
- new Date(chat.updatedAt).toLocaleDateString — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:188](<../../../../../../features/agents/agent-contacts.tsx#L188>)
- Date — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:188](<../../../../../../features/agents/agent-contacts.tsx#L188>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-222d1855c5905b1b"></a>

## AgentContact.&lt;anonymous@134:26&gt;.&lt;anonymous@142:33&gt;

[features/agents/agent-contacts.tsx:142](<../../../../../../features/agents/agent-contacts.tsx#L142>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact.&lt;anonymous@134:26&gt;](<agent-contacts.tsx.md#s-021b6cc19b7265e0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- event.preventDefault — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:143](<../../../../../../features/agents/agent-contacts.tsx#L143>)
- onRename — declaration-without-runtime-body; [features/agents/agent-contacts.tsx:144](<../../../../../../features/agents/agent-contacts.tsx#L144>)
- setEditId — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:144](<../../../../../../features/agents/agent-contacts.tsx#L144>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7d1f4f3709a0acb2"></a>

## AgentContact.&lt;anonymous@134:26&gt;.&lt;anonymous@155:37&gt;

[features/agents/agent-contacts.tsx:155](<../../../../../../features/agents/agent-contacts.tsx#L155>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact.&lt;anonymous@134:26&gt;](<agent-contacts.tsx.md#s-021b6cc19b7265e0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setTitle — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:155](<../../../../../../features/agents/agent-contacts.tsx#L155>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9a699c9f6a7242f6"></a>

## AgentContact.&lt;anonymous@134:26&gt;.&lt;anonymous@156:38&gt;

[features/agents/agent-contacts.tsx:156](<../../../../../../features/agents/agent-contacts.tsx#L156>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact.&lt;anonymous@134:26&gt;](<agent-contacts.tsx.md#s-021b6cc19b7265e0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- event.preventDefault — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:158](<../../../../../../features/agents/agent-contacts.tsx#L158>)
- setEditId — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:159](<../../../../../../features/agents/agent-contacts.tsx#L159>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-378b4953e181f0fc"></a>

## AgentContact.&lt;anonymous@134:26&gt;.&lt;anonymous@165:54&gt;

[features/agents/agent-contacts.tsx:165](<../../../../../../features/agents/agent-contacts.tsx#L165>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact.&lt;anonymous@134:26&gt;](<agent-contacts.tsx.md#s-021b6cc19b7265e0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setEditId — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:165](<../../../../../../features/agents/agent-contacts.tsx#L165>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7f9ba129c118fb93"></a>

## AgentContact.&lt;anonymous@134:26&gt;.&lt;anonymous@178:34&gt;

[features/agents/agent-contacts.tsx:178](<../../../../../../features/agents/agent-contacts.tsx#L178>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact.&lt;anonymous@134:26&gt;](<agent-contacts.tsx.md#s-021b6cc19b7265e0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- onSelect — declaration-without-runtime-body; [features/agents/agent-contacts.tsx:178](<../../../../../../features/agents/agent-contacts.tsx#L178>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-07748910ea076fb0"></a>

## AgentContact.&lt;anonymous@134:26&gt;.&lt;anonymous@198:36&gt;

[features/agents/agent-contacts.tsx:198](<../../../../../../features/agents/agent-contacts.tsx#L198>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact.&lt;anonymous@134:26&gt;](<agent-contacts.tsx.md#s-021b6cc19b7265e0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- onSelect — declaration-without-runtime-body; [features/agents/agent-contacts.tsx:198](<../../../../../../features/agents/agent-contacts.tsx#L198>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2c7f1ae8e9dbae6a"></a>

## AgentContact.&lt;anonymous@134:26&gt;.&lt;anonymous@204:36&gt;

[features/agents/agent-contacts.tsx:204](<../../../../../../features/agents/agent-contacts.tsx#L204>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact.&lt;anonymous@134:26&gt;](<agent-contacts.tsx.md#s-021b6cc19b7265e0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- setTitle — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:205](<../../../../../../features/agents/agent-contacts.tsx#L205>)
- setEditId — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:206](<../../../../../../features/agents/agent-contacts.tsx#L206>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d27cef786abface4"></a>

## AgentContact.&lt;anonymous@134:26&gt;.&lt;anonymous@213:36&gt;

[features/agents/agent-contacts.tsx:213](<../../../../../../features/agents/agent-contacts.tsx#L213>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContact.&lt;anonymous@134:26&gt;](<agent-contacts.tsx.md#s-021b6cc19b7265e0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- confirm — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:215](<../../../../../../features/agents/agent-contacts.tsx#L215>)
- onRemove — declaration-without-runtime-body; [features/agents/agent-contacts.tsx:220](<../../../../../../features/agents/agent-contacts.tsx#L220>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0683638d3e906a24"></a>

## AgentContacts

[features/agents/agent-contacts.tsx:239](<../../../../../../features/agents/agent-contacts.tsx#L239>) · FunctionDeclaration · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: AgentContacts ([features/agents/agent-contacts.tsx:1](<../../../../../../features/agents/agent-contacts.tsx#L1>)).

Lexical owner: [features/agents/agent-contacts.tsx](<agent-contacts.tsx.md#s-d7c2028acd56504c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   agents,   activeAgentId,   onActivate,   onAdd,   ...props } | Omit&lt; ComponentProps&lt;typeof AgentContact&gt;, "agent" &#124; "active" &#124; "onActivate" &gt; & { agents: AgentConfig&#91;&#93;; activeAgentId: string; onActivate: (id: string) =&gt; void; onAdd: () =&gt; void; } | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- agents.map — external-or-dynamic-dispatch; [features/agents/agent-contacts.tsx:272](<../../../../../../features/agents/agent-contacts.tsx#L272>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-76c7fc758dff05b6"></a>

## AgentContacts.&lt;anonymous@251:15&gt;

[features/agents/agent-contacts.tsx:251](<../../../../../../features/agents/agent-contacts.tsx#L251>) · FunctionType · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContacts](<agent-contacts.tsx.md#s-0683638d3e906a24>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0b3e8d2fb3d15775"></a>

## AgentContacts.&lt;anonymous@252:10&gt;

[features/agents/agent-contacts.tsx:252](<../../../../../../features/agents/agent-contacts.tsx#L252>) · FunctionType · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContacts](<agent-contacts.tsx.md#s-0683638d3e906a24>).

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

<a id="s-8c84ba5688b54de5"></a>

## AgentContacts.&lt;anonymous@272:19&gt;

[features/agents/agent-contacts.tsx:272](<../../../../../../features/agents/agent-contacts.tsx#L272>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [AgentContacts](<agent-contacts.tsx.md#s-0683638d3e906a24>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| agent | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
