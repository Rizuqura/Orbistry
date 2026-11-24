# electron/ai/agents/entity-agent-protocol.test.cjs: symbols

[Atlas](<../../../../../README.md>) / [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>) / [electron/ai/agents/entity-agent-protocol.test.cjs:1](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/agents/entity-agent-protocol.test.cjs](<entity-agent-protocol.test.cjs.md#s-e22b7bcb2a67d97f>) (Module)
- [response](<entity-agent-protocol.test.cjs.md#s-9f0e32bde842062d>) (FunctionDeclaration)
- [&lt;anonymous@15:102&gt;](<entity-agent-protocol.test.cjs.md#s-90d8d33c19029622>) (ArrowFunction)
- [&lt;anonymous@15:102&gt;.&lt;anonymous@29:19&gt;](<entity-agent-protocol.test.cjs.md#s-a796e0229891c4e8>) (ArrowFunction)
- [&lt;anonymous@15:102&gt;.&lt;anonymous@33:5&gt;](<entity-agent-protocol.test.cjs.md#s-7b46e5a3a53a305d>) (ArrowFunction)
- [&lt;anonymous@15:102&gt;.&lt;anonymous@36:17&gt;](<entity-agent-protocol.test.cjs.md#s-36f6b49220460e52>) (ArrowFunction)
- [&lt;anonymous@41:92&gt;](<entity-agent-protocol.test.cjs.md#s-d720f35c9c23703a>) (ArrowFunction)
- [&lt;anonymous@41:92&gt;.complete](<entity-agent-protocol.test.cjs.md#s-6bd861092d7006fb>) (ArrowFunction)
- [&lt;anonymous@41:92&gt;.dispatch](<entity-agent-protocol.test.cjs.md#s-a0a36a60e5571c28>) (ArrowFunction)
- [&lt;anonymous@67:91&gt;](<entity-agent-protocol.test.cjs.md#s-377a95377909a16b>) (ArrowFunction)
- [&lt;anonymous@67:91&gt;.&lt;anonymous@69:46&gt;](<entity-agent-protocol.test.cjs.md#s-3f166a28bfe36a05>) (ArrowFunction)
- [&lt;anonymous@67:91&gt;.complete](<entity-agent-protocol.test.cjs.md#s-e4f1bceb00b634f6>) (ArrowFunction)
- [&lt;anonymous@67:91&gt;.dispatch](<entity-agent-protocol.test.cjs.md#s-3df2d8cec9f0c876>) (ArrowFunction)
- [&lt;anonymous@101:81&gt;](<entity-agent-protocol.test.cjs.md#s-e985ff582724167f>) (ArrowFunction)
- [&lt;anonymous@112:85&gt;](<entity-agent-protocol.test.cjs.md#s-7bd7a61b960aa553>) (ArrowFunction)
- [&lt;anonymous@112:85&gt;.&lt;anonymous@124:19&gt;](<entity-agent-protocol.test.cjs.md#s-826b93b02d922293>) (ArrowFunction)

<a id="s-e22b7bcb2a67d97f"></a>

## electron/ai/agents/entity-agent-protocol.test.cjs

[electron/ai/agents/entity-agent-protocol.test.cjs:1](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L1>) · Module · test · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- require — module-loader; [electron/ai/agents/entity-agent-protocol.test.cjs:1](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L1>)
- require — module-loader; [electron/ai/agents/entity-agent-protocol.test.cjs:2](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L2>)
- require — module-loader; [electron/ai/agents/entity-agent-protocol.test.cjs:7](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L7>)
- require — module-loader; [electron/ai/agents/entity-agent-protocol.test.cjs:8](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L8>)
- test — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L15>)
- test — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:41](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L41>)
- test — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:67](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L67>)
- test — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:101](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L101>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9f0e32bde842062d"></a>

## response

[electron/ai/agents/entity-agent-protocol.test.cjs:11](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L11>) · FunctionDeclaration · test · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Wraps test-only protocol output in the existing completion response contract.

Purpose evidence: jsdoc.

Lexical owner: [electron/ai/agents/entity-agent-protocol.test.cjs](<entity-agent-protocol.test.cjs.md#s-e22b7bcb2a67d97f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: { content: any; finishReason: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@15:102&gt;.&lt;anonymous@29:19&gt;](<entity-agent-protocol.test.cjs.md#s-a796e0229891c4e8>) — [electron/ai/agents/entity-agent-protocol.test.cjs:29](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L29>)
- [&lt;anonymous@41:92&gt;.complete](<entity-agent-protocol.test.cjs.md#s-6bd861092d7006fb>) — [electron/ai/agents/entity-agent-protocol.test.cjs:46](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L46>)
- [&lt;anonymous@67:91&gt;.complete](<entity-agent-protocol.test.cjs.md#s-e4f1bceb00b634f6>) — [electron/ai/agents/entity-agent-protocol.test.cjs:78](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L78>)
- [&lt;anonymous@112:85&gt;.&lt;anonymous@124:19&gt;](<entity-agent-protocol.test.cjs.md#s-826b93b02d922293>) — [electron/ai/agents/entity-agent-protocol.test.cjs:124](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L124>)

Unresolved / external call sites: 1.

- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:12](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L12>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agent-protocol.test.cjs:29](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L29>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agent-protocol.test.cjs:46](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L46>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agent-protocol.test.cjs:78](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L78>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agent-protocol.test.cjs:124](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L124>) — static-call-site; coverage not established.

<a id="s-90d8d33c19029622"></a>

## &lt;anonymous@15:102&gt;

[electron/ai/agents/entity-agent-protocol.test.cjs:15](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L15>) · ArrowFunction · test · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/entity-agent-protocol.test.cjs](<entity-agent-protocol.test.cjs.md#s-e22b7bcb2a67d97f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- "a".repeat — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:22](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L22>)
- assert.throws — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:29](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L29>)
- assert.throws — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:32](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L32>)
- assert.throws — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:36](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L36>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a796e0229891c4e8"></a>

## &lt;anonymous@15:102&gt;.&lt;anonymous@29:19&gt;

[electron/ai/agents/entity-agent-protocol.test.cjs:29](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L29>) · ArrowFunction · test · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@15:102&gt;](<entity-agent-protocol.test.cjs.md#s-90d8d33c19029622>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parseAction](<entity-agent-protocol.cjs.md#s-6c6eda665c0d306a>) — [electron/ai/agents/entity-agent-protocol.test.cjs:29](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L29>)
- [response](<entity-agent-protocol.test.cjs.md#s-9f0e32bde842062d>) — [electron/ai/agents/entity-agent-protocol.test.cjs:29](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L29>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7b46e5a3a53a305d"></a>

## &lt;anonymous@15:102&gt;.&lt;anonymous@33:5&gt;

[electron/ai/agents/entity-agent-protocol.test.cjs:33](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L33>) · ArrowFunction · test · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@15:102&gt;](<entity-agent-protocol.test.cjs.md#s-90d8d33c19029622>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parseAction](<entity-agent-protocol.cjs.md#s-6c6eda665c0d306a>) — [electron/ai/agents/entity-agent-protocol.test.cjs:33](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L33>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-36f6b49220460e52"></a>

## &lt;anonymous@15:102&gt;.&lt;anonymous@36:17&gt;

[electron/ai/agents/entity-agent-protocol.test.cjs:36](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L36>) · ArrowFunction · test · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@15:102&gt;](<entity-agent-protocol.test.cjs.md#s-90d8d33c19029622>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parseAction](<entity-agent-protocol.cjs.md#s-6c6eda665c0d306a>) — [electron/ai/agents/entity-agent-protocol.test.cjs:36](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L36>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d720f35c9c23703a"></a>

## &lt;anonymous@41:92&gt;

[electron/ai/agents/entity-agent-protocol.test.cjs:41](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L41>) · ArrowFunction · test · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/entity-agent-protocol.test.cjs](<entity-agent-protocol.test.cjs.md#s-e22b7bcb2a67d97f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runEntityProtocol](<entity-agent-protocol.cjs.md#s-5093e0259461bc43>) — [electron/ai/agents/entity-agent-protocol.test.cjs:44](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L44>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- assert.rejects — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:43](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L43>)
- AbortController — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:55](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L55>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:64](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L64>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6bd861092d7006fb"></a>

## &lt;anonymous@41:92&gt;.complete

[electron/ai/agents/entity-agent-protocol.test.cjs:45](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L45>) · ArrowFunction · test · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@41:92&gt;](<entity-agent-protocol.test.cjs.md#s-d720f35c9c23703a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [response](<entity-agent-protocol.test.cjs.md#s-9f0e32bde842062d>) — [electron/ai/agents/entity-agent-protocol.test.cjs:46](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L46>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a0a36a60e5571c28"></a>

## &lt;anonymous@41:92&gt;.dispatch

[electron/ai/agents/entity-agent-protocol.test.cjs:57](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L57>) · ArrowFunction · test · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@41:92&gt;](<entity-agent-protocol.test.cjs.md#s-d720f35c9c23703a>).

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

<a id="s-377a95377909a16b"></a>

## &lt;anonymous@67:91&gt;

[electron/ai/agents/entity-agent-protocol.test.cjs:67](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L67>) · ArrowFunction · test · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/entity-agent-protocol.test.cjs](<entity-agent-protocol.test.cjs.md#s-e22b7bcb2a67d97f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [runEntityProtocol](<entity-agent-protocol.cjs.md#s-5093e0259461bc43>) — [electron/ai/agents/entity-agent-protocol.test.cjs:74](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L74>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- Array.from — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:69](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L69>)
- assert.rejects — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:73](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L73>)
- AbortController — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:87](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L87>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:98](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L98>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3f166a28bfe36a05"></a>

## &lt;anonymous@67:91&gt;.&lt;anonymous@69:46&gt;

[electron/ai/agents/entity-agent-protocol.test.cjs:69](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L69>) · ArrowFunction · test · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@67:91&gt;](<entity-agent-protocol.test.cjs.md#s-377a95377909a16b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: { role: string; content: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e4f1bceb00b634f6"></a>

## &lt;anonymous@67:91&gt;.complete

[electron/ai/agents/entity-agent-protocol.test.cjs:75](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L75>) · ArrowFunction · test · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@67:91&gt;](<entity-agent-protocol.test.cjs.md#s-377a95377909a16b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [response](<entity-agent-protocol.test.cjs.md#s-9f0e32bde842062d>) — [electron/ai/agents/entity-agent-protocol.test.cjs:78](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L78>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- assert.ok — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:77](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L77>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3df2d8cec9f0c876"></a>

## &lt;anonymous@67:91&gt;.dispatch

[electron/ai/agents/entity-agent-protocol.test.cjs:89](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L89>) · ArrowFunction · test · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@67:91&gt;](<entity-agent-protocol.test.cjs.md#s-377a95377909a16b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e985ff582724167f"></a>

## &lt;anonymous@101:81&gt;

[electron/ai/agents/entity-agent-protocol.test.cjs:101](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L101>) · ArrowFunction · test · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/entity-agent-protocol.test.cjs](<entity-agent-protocol.test.cjs.md#s-e22b7bcb2a67d97f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [isApproval](<entity-agent-protocol.cjs.md#s-5a44932718fabc6c>) — [electron/ai/agents/entity-agent-protocol.test.cjs:103](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L103>)
- [isApproval](<entity-agent-protocol.cjs.md#s-5a44932718fabc6c>) — [electron/ai/agents/entity-agent-protocol.test.cjs:110](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L110>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- assert.equal — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:103](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L103>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:110](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L110>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7bd7a61b960aa553"></a>

## &lt;anonymous@112:85&gt;

[electron/ai/agents/entity-agent-protocol.test.cjs:112](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L112>) · ArrowFunction · test · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/entity-agent-protocol.test.cjs](<entity-agent-protocol.test.cjs.md#s-e22b7bcb2a67d97f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- assert.throws — external-or-dynamic-dispatch; [electron/ai/agents/entity-agent-protocol.test.cjs:124](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L124>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-826b93b02d922293"></a>

## &lt;anonymous@112:85&gt;.&lt;anonymous@124:19&gt;

[electron/ai/agents/entity-agent-protocol.test.cjs:124](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L124>) · ArrowFunction · test · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@112:85&gt;](<entity-agent-protocol.test.cjs.md#s-7bd7a61b960aa553>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parseAction](<entity-agent-protocol.cjs.md#s-6c6eda665c0d306a>) — [electron/ai/agents/entity-agent-protocol.test.cjs:124](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L124>)
- [response](<entity-agent-protocol.test.cjs.md#s-9f0e32bde842062d>) — [electron/ai/agents/entity-agent-protocol.test.cjs:124](<../../../../../../../electron/ai/agents/entity-agent-protocol.test.cjs#L124>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
