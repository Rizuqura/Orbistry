# electron/ai/agents/construction-context.cjs: symbols

[Atlas](<../../../../../README.md>) / [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>) / [electron/ai/agents/construction-context.cjs:1](<../../../../../../../electron/ai/agents/construction-context.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/agents/construction-context.cjs](<construction-context.cjs.md#s-55fffd2e375f562e>) (Module)
- [MAX_GUIDANCE_CHARS](<construction-context.cjs.md#s-349ee1b1be589a78>) (VariableDeclaration)
- [invalid](<construction-context.cjs.md#s-57710d0ea2630614>) (FunctionDeclaration)
- [readManifest](<construction-context.cjs.md#s-471e15a9c60c96c2>) (FunctionDeclaration)
- [readManifest.&lt;anonymous@34:32&gt;](<construction-context.cjs.md#s-4c60b3627a83230b>) (ArrowFunction)
- [loadBox](<construction-context.cjs.md#s-4f4ef58489b1d9b8>) (FunctionDeclaration)
- [loadBox.&lt;anonymous@56:33&gt;](<construction-context.cjs.md#s-d8af941f5a206899>) (ArrowFunction)
- [loadBox.&lt;anonymous@61:16&gt;](<construction-context.cjs.md#s-fea75d7e524d18bd>) (ArrowFunction)
- [loadBox.&lt;anonymous@74:23&gt;](<construction-context.cjs.md#s-128b277454db4e76>) (ArrowFunction)
- [readFile](<construction-context.cjs.md#s-92e0b43be6c8bdfa>) (FunctionDeclaration)
- [readBinding](<construction-context.cjs.md#s-54e70a99495cef66>) (ArrowFunction)
- [readBox](<construction-context.cjs.md#s-0167880abd81151d>) (FunctionDeclaration)
- [constructionReferences](<construction-context.cjs.md#s-3b253d74a6be9ac5>) (FunctionDeclaration)
- [constructionReferences.&lt;anonymous@187:37&gt;](<construction-context.cjs.md#s-f921562ca9728764>) (ArrowFunction)

<a id="s-55fffd2e375f562e"></a>

## electron/ai/agents/construction-context.cjs

[electron/ai/agents/construction-context.cjs:1](<../../../../../../../electron/ai/agents/construction-context.cjs#L1>) · Module · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [electron/ai/agents/construction-context.cjs:1](<../../../../../../../electron/ai/agents/construction-context.cjs#L1>)
- require — module-loader; [electron/ai/agents/construction-context.cjs:5](<../../../../../../../electron/ai/agents/construction-context.cjs#L5>)
- require — module-loader; [electron/ai/agents/construction-context.cjs:6](<../../../../../../../electron/ai/agents/construction-context.cjs#L6>)
- require — module-loader; [electron/ai/agents/construction-context.cjs:11](<../../../../../../../electron/ai/agents/construction-context.cjs#L11>)
- require — module-loader; [electron/ai/agents/construction-context.cjs:12](<../../../../../../../electron/ai/agents/construction-context.cjs#L12>)

**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:9](<../../../../../../../electron/agent-memory-binding.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-349ee1b1be589a78"></a>

## MAX_GUIDANCE_CHARS

[electron/ai/agents/construction-context.cjs:13](<../../../../../../../electron/ai/agents/construction-context.cjs#L13>) · VariableDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: MAX_GUIDANCE_CHARS ([electron/ai/agents/construction-context.cjs:1](<../../../../../../../electron/ai/agents/construction-context.cjs#L1>)).

Lexical owner: [electron/ai/agents/construction-context.cjs](<construction-context.cjs.md#s-55fffd2e375f562e>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:9](<../../../../../../../electron/agent-memory-binding.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-57710d0ea2630614"></a>

## invalid

[electron/ai/agents/construction-context.cjs:14](<../../../../../../../electron/ai/agents/construction-context.cjs#L14>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/construction-context.cjs](<construction-context.cjs.md#s-55fffd2e375f562e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| message | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/agents/construction-context.cjs:15](<../../../../../../../electron/ai/agents/construction-context.cjs#L15>)

**Called by (statically resolved):**

- [readManifest](<construction-context.cjs.md#s-471e15a9c60c96c2>) — [electron/ai/agents/construction-context.cjs:36](<../../../../../../../electron/ai/agents/construction-context.cjs#L36>)
- [loadBox](<construction-context.cjs.md#s-4f4ef58489b1d9b8>) — [electron/ai/agents/construction-context.cjs:53](<../../../../../../../electron/ai/agents/construction-context.cjs#L53>)
- [loadBox](<construction-context.cjs.md#s-4f4ef58489b1d9b8>) — [electron/ai/agents/construction-context.cjs:65](<../../../../../../../electron/ai/agents/construction-context.cjs#L65>)
- [readFile](<construction-context.cjs.md#s-92e0b43be6c8bdfa>) — [electron/ai/agents/construction-context.cjs:101](<../../../../../../../electron/ai/agents/construction-context.cjs#L101>)
- [readFile](<construction-context.cjs.md#s-92e0b43be6c8bdfa>) — [electron/ai/agents/construction-context.cjs:113](<../../../../../../../electron/ai/agents/construction-context.cjs#L113>)
- [readFile](<construction-context.cjs.md#s-92e0b43be6c8bdfa>) — [electron/ai/agents/construction-context.cjs:137](<../../../../../../../electron/ai/agents/construction-context.cjs#L137>)
- [readBox](<construction-context.cjs.md#s-0167880abd81151d>) — [electron/ai/agents/construction-context.cjs:154](<../../../../../../../electron/ai/agents/construction-context.cjs#L154>)
- [constructionReferences](<construction-context.cjs.md#s-3b253d74a6be9ac5>) — [electron/ai/agents/construction-context.cjs:177](<../../../../../../../electron/ai/agents/construction-context.cjs#L177>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:9](<../../../../../../../electron/agent-memory-binding.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-471e15a9c60c96c2"></a>

## readManifest

[electron/ai/agents/construction-context.cjs:17](<../../../../../../../electron/ai/agents/construction-context.cjs#L17>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/construction-context.cjs](<construction-context.cjs.md#s-55fffd2e375f562e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| service | any | compiler-inferred | required |
| root | any | compiler-inferred | required |
| manifest | any | compiler-inferred | required |
| latest | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invalid](<construction-context.cjs.md#s-57710d0ea2630614>) — [electron/ai/agents/construction-context.cjs:36](<../../../../../../../electron/ai/agents/construction-context.cjs#L36>)
- [contextIdentity](<../context-identity.cjs.md#s-9645374bbdc64d1f>) — [electron/ai/agents/construction-context.cjs:40](<../../../../../../../electron/ai/agents/construction-context.cjs#L40>)

**Called by (statically resolved):**

- [loadBox](<construction-context.cjs.md#s-4f4ef58489b1d9b8>) — [electron/ai/agents/construction-context.cjs:69](<../../../../../../../electron/ai/agents/construction-context.cjs#L69>)
- [readFile](<construction-context.cjs.md#s-92e0b43be6c8bdfa>) — [electron/ai/agents/construction-context.cjs:116](<../../../../../../../electron/ai/agents/construction-context.cjs#L116>)

Unresolved / external call sites: 5.

- randomUUID — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:18](<../../../../../../../electron/ai/agents/construction-context.cjs#L18>)
- service.knowledge.prepareBrainScope — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:19](<../../../../../../../electron/ai/agents/construction-context.cjs#L19>)
- sources.push — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:27](<../../../../../../../electron/ai/agents/construction-context.cjs#L27>)
- service.knowledge.readBrainSource — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:28](<../../../../../../../electron/ai/agents/construction-context.cjs#L28>)
- sources.reduce — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:34](<../../../../../../../electron/ai/agents/construction-context.cjs#L34>)

**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:9](<../../../../../../../electron/agent-memory-binding.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-4c60b3627a83230b"></a>

## readManifest.&lt;anonymous@34:32&gt;

[electron/ai/agents/construction-context.cjs:34](<../../../../../../../electron/ai/agents/construction-context.cjs#L34>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [readManifest](<construction-context.cjs.md#s-471e15a9c60c96c2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sum | any | compiler-inferred | required |
| source | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:9](<../../../../../../../electron/agent-memory-binding.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-4f4ef58489b1d9b8"></a>

## loadBox

[electron/ai/agents/construction-context.cjs:46](<../../../../../../../electron/ai/agents/construction-context.cjs#L46>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/agents/construction-context.cjs](<construction-context.cjs.md#s-55fffd2e375f562e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| service | any | compiler-inferred | required |
| vault | any | compiler-inferred | required |
| boxId | any | compiler-inferred | required |
| expected | any | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/agents/construction-context.cjs:50](<../../../../../../../electron/ai/agents/construction-context.cjs#L50>)
- [validateContextIdentity](<../context-identity.cjs.md#s-074b8d05ecfc17f5>) — [electron/ai/agents/construction-context.cjs:51](<../../../../../../../electron/ai/agents/construction-context.cjs#L51>)
- [invalid](<construction-context.cjs.md#s-57710d0ea2630614>) — [electron/ai/agents/construction-context.cjs:53](<../../../../../../../electron/ai/agents/construction-context.cjs#L53>)
- [invalid](<construction-context.cjs.md#s-57710d0ea2630614>) — [electron/ai/agents/construction-context.cjs:65](<../../../../../../../electron/ai/agents/construction-context.cjs#L65>)
- [readManifest](<construction-context.cjs.md#s-471e15a9c60c96c2>) — [electron/ai/agents/construction-context.cjs:69](<../../../../../../../electron/ai/agents/construction-context.cjs#L69>)

**Called by (statically resolved):**

- [readBox](<construction-context.cjs.md#s-0167880abd81151d>) — [electron/ai/agents/construction-context.cjs:151](<../../../../../../../electron/ai/agents/construction-context.cjs#L151>)

Unresolved / external call sites: 11.

- service.store — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:47](<../../../../../../../electron/ai/agents/construction-context.cjs#L47>)
- boxes.get — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:48](<../../../../../../../electron/ai/agents/construction-context.cjs#L48>)
- box.items.map((item) =&gt; item.relativePath).sort — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:56](<../../../../../../../electron/ai/agents/construction-context.cjs#L56>)
- box.items.map — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:56](<../../../../../../../electron/ai/agents/construction-context.cjs#L56>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:58](<../../../../../../../electron/ai/agents/construction-context.cjs#L58>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:59](<../../../../../../../electron/ai/agents/construction-context.cjs#L59>)
- expected.contextIdentity.sources .map((source) =&gt; source.relativePath) .sort — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:60](<../../../../../../../electron/ai/agents/construction-context.cjs#L60>)
- expected.contextIdentity.sources .map — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:60](<../../../../../../../electron/ai/agents/construction-context.cjs#L60>)
- 3 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:9](<../../../../../../../electron/agent-memory-binding.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-d8af941f5a206899"></a>

## loadBox.&lt;anonymous@56:33&gt;

[electron/ai/agents/construction-context.cjs:56](<../../../../../../../electron/ai/agents/construction-context.cjs#L56>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [loadBox](<construction-context.cjs.md#s-4f4ef58489b1d9b8>).

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

- [electron/agent-memory-binding.test.cjs:9](<../../../../../../../electron/agent-memory-binding.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-fea75d7e524d18bd"></a>

## loadBox.&lt;anonymous@61:16&gt;

[electron/ai/agents/construction-context.cjs:61](<../../../../../../../electron/ai/agents/construction-context.cjs#L61>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [loadBox](<construction-context.cjs.md#s-4f4ef58489b1d9b8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:9](<../../../../../../../electron/agent-memory-binding.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-128b277454db4e76"></a>

## loadBox.&lt;anonymous@74:23&gt;

[electron/ai/agents/construction-context.cjs:74](<../../../../../../../electron/ai/agents/construction-context.cjs#L74>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [loadBox](<construction-context.cjs.md#s-4f4ef58489b1d9b8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: { sourceId: any; relativePath: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:9](<../../../../../../../electron/agent-memory-binding.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-92e0b43be6c8bdfa"></a>

## readFile

[electron/ai/agents/construction-context.cjs:94](<../../../../../../../electron/ai/agents/construction-context.cjs#L94>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: readFile ([electron/ai/agents/construction-context.cjs:1](<../../../../../../../electron/ai/agents/construction-context.cjs#L1>)).

Lexical owner: [electron/ai/agents/construction-context.cjs](<construction-context.cjs.md#s-55fffd2e375f562e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| service | any | compiler-inferred | required |
| vault | any | compiler-inferred | required |
| relativePath | any | compiler-inferred | required |
| expected | any | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/agents/construction-context.cjs:98](<../../../../../../../electron/ai/agents/construction-context.cjs#L98>)
- [validateContextIdentity](<../context-identity.cjs.md#s-074b8d05ecfc17f5>) — [electron/ai/agents/construction-context.cjs:99](<../../../../../../../electron/ai/agents/construction-context.cjs#L99>)
- [invalid](<construction-context.cjs.md#s-57710d0ea2630614>) — [electron/ai/agents/construction-context.cjs:101](<../../../../../../../electron/ai/agents/construction-context.cjs#L101>)
- [invalid](<construction-context.cjs.md#s-57710d0ea2630614>) — [electron/ai/agents/construction-context.cjs:113](<../../../../../../../electron/ai/agents/construction-context.cjs#L113>)
- [readManifest](<construction-context.cjs.md#s-471e15a9c60c96c2>) — [electron/ai/agents/construction-context.cjs:116](<../../../../../../../electron/ai/agents/construction-context.cjs#L116>)
- [invalid](<construction-context.cjs.md#s-57710d0ea2630614>) — [electron/ai/agents/construction-context.cjs:137](<../../../../../../../electron/ai/agents/construction-context.cjs#L137>)

**Called by (statically resolved):**

- [&lt;anonymous@30:75&gt;](<../../agent-memory-binding.test.cjs.md#s-cda0e40184f4850a>) — [electron/agent-memory-binding.test.cjs:38](<../../../../../../../electron/agent-memory-binding.test.cjs#L38>)
- [&lt;anonymous@91:55&gt;](<../../agent-memory-binding.test.cjs.md#s-2fd3aee94757a812>) — [electron/agent-memory-binding.test.cjs:93](<../../../../../../../electron/agent-memory-binding.test.cjs#L93>)
- [&lt;anonymous@99:53&gt;](<../../agent-memory-binding.test.cjs.md#s-a7d100698f791c28>) — [electron/agent-memory-binding.test.cjs:102](<../../../../../../../electron/agent-memory-binding.test.cjs#L102>)
- [readBinding](<construction-context.cjs.md#s-54e70a99495cef66>) — [electron/ai/agents/construction-context.cjs:146](<../../../../../../../electron/ai/agents/construction-context.cjs#L146>)

Unresolved / external call sites: 4.

- service.store — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:96](<../../../../../../../electron/ai/agents/construction-context.cjs#L96>)
- service.knowledge.previewBoxSelection — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:105](<../../../../../../../electron/ai/agents/construction-context.cjs#L105>)
- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:128](<../../../../../../../electron/ai/agents/construction-context.cjs#L128>)
- Date — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:128](<../../../../../../../electron/ai/agents/construction-context.cjs#L128>)

**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:38](<../../../../../../../electron/agent-memory-binding.test.cjs#L38>) — static-call-site; coverage not established.
- [electron/agent-memory-binding.test.cjs:93](<../../../../../../../electron/agent-memory-binding.test.cjs#L93>) — static-call-site; coverage not established.
- [electron/agent-memory-binding.test.cjs:102](<../../../../../../../electron/agent-memory-binding.test.cjs#L102>) — static-call-site; coverage not established.
- [electron/agent-memory-binding.test.cjs:9](<../../../../../../../electron/agent-memory-binding.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-54e70a99495cef66"></a>

## readBinding

[electron/ai/agents/construction-context.cjs:143](<../../../../../../../electron/ai/agents/construction-context.cjs#L143>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: readBinding ([electron/ai/agents/construction-context.cjs:1](<../../../../../../../electron/ai/agents/construction-context.cjs#L1>)).

Lexical owner: [electron/ai/agents/construction-context.cjs](<construction-context.cjs.md#s-55fffd2e375f562e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| service | any | compiler-inferred | required |
| vault | any | compiler-inferred | required |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/agents/construction-context.cjs:144](<../../../../../../../electron/ai/agents/construction-context.cjs#L144>)
- [readFile](<construction-context.cjs.md#s-92e0b43be6c8bdfa>) — [electron/ai/agents/construction-context.cjs:146](<../../../../../../../electron/ai/agents/construction-context.cjs#L146>)
- [readBox](<construction-context.cjs.md#s-0167880abd81151d>) — [electron/ai/agents/construction-context.cjs:147](<../../../../../../../electron/ai/agents/construction-context.cjs#L147>)

**Called by (statically resolved):**

- [&lt;anonymous@30:75&gt;](<../../agent-memory-binding.test.cjs.md#s-cda0e40184f4850a>) — [electron/agent-memory-binding.test.cjs:45](<../../../../../../../electron/agent-memory-binding.test.cjs#L45>)
- [&lt;anonymous@91:55&gt;](<../../agent-memory-binding.test.cjs.md#s-2fd3aee94757a812>) — [electron/agent-memory-binding.test.cjs:95](<../../../../../../../electron/agent-memory-binding.test.cjs#L95>)
- [&lt;anonymous@91:55&gt;](<../../agent-memory-binding.test.cjs.md#s-2fd3aee94757a812>) — [electron/agent-memory-binding.test.cjs:97](<../../../../../../../electron/agent-memory-binding.test.cjs#L97>)
- [&lt;anonymous@99:53&gt;](<../../agent-memory-binding.test.cjs.md#s-a7d100698f791c28>) — [electron/agent-memory-binding.test.cjs:103](<../../../../../../../electron/agent-memory-binding.test.cjs#L103>)
- [constructionReferences](<construction-context.cjs.md#s-3b253d74a6be9ac5>) — [electron/ai/agents/construction-context.cjs:173](<../../../../../../../electron/ai/agents/construction-context.cjs#L173>)
- [ChatService.boundScope](<../chat/chat-service.cjs.md#s-8597f875e9166aee>) — [electron/ai/chat/chat-service.cjs:246](<../../../../../../../electron/ai/chat/chat-service.cjs#L246>)
- [ChatService.boundScope](<../chat/chat-service.cjs.md#s-8597f875e9166aee>) — [electron/ai/chat/chat-service.cjs:248](<../../../../../../../electron/ai/chat/chat-service.cjs#L248>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:45](<../../../../../../../electron/agent-memory-binding.test.cjs#L45>) — static-call-site; coverage not established.
- [electron/agent-memory-binding.test.cjs:95](<../../../../../../../electron/agent-memory-binding.test.cjs#L95>) — static-call-site; coverage not established.
- [electron/agent-memory-binding.test.cjs:97](<../../../../../../../electron/agent-memory-binding.test.cjs#L97>) — static-call-site; coverage not established.
- [electron/agent-memory-binding.test.cjs:103](<../../../../../../../electron/agent-memory-binding.test.cjs#L103>) — static-call-site; coverage not established.
- [electron/agent-memory-binding.test.cjs:9](<../../../../../../../electron/agent-memory-binding.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-0167880abd81151d"></a>

## readBox

[electron/ai/agents/construction-context.cjs:149](<../../../../../../../electron/ai/agents/construction-context.cjs#L149>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: readBox ([electron/ai/agents/construction-context.cjs:1](<../../../../../../../electron/ai/agents/construction-context.cjs#L1>)).

Lexical owner: [electron/ai/agents/construction-context.cjs](<construction-context.cjs.md#s-55fffd2e375f562e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| service | any | compiler-inferred | required |
| vault | any | compiler-inferred | required |
| boxId | any | compiler-inferred | required |
| expected | any | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [loadBox](<construction-context.cjs.md#s-4f4ef58489b1d9b8>) — [electron/ai/agents/construction-context.cjs:151](<../../../../../../../electron/ai/agents/construction-context.cjs#L151>)
- [invalid](<construction-context.cjs.md#s-57710d0ea2630614>) — [electron/ai/agents/construction-context.cjs:154](<../../../../../../../electron/ai/agents/construction-context.cjs#L154>)

**Called by (statically resolved):**

- [readBinding](<construction-context.cjs.md#s-54e70a99495cef66>) — [electron/ai/agents/construction-context.cjs:147](<../../../../../../../electron/ai/agents/construction-context.cjs#L147>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:9](<../../../../../../../electron/agent-memory-binding.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-3b253d74a6be9ac5"></a>

## constructionReferences

[electron/ai/agents/construction-context.cjs:160](<../../../../../../../electron/ai/agents/construction-context.cjs#L160>) · FunctionDeclaration · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: constructionReferences ([electron/ai/agents/construction-context.cjs:1](<../../../../../../../electron/ai/agents/construction-context.cjs#L1>)).

Lexical owner: [electron/ai/agents/construction-context.cjs](<construction-context.cjs.md#s-55fffd2e375f562e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| service | any | compiler-inferred | required |
| vault | any | compiler-inferred | required |
| config | any | compiler-inferred | required |
| validateResearch | boolean | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readBinding](<construction-context.cjs.md#s-54e70a99495cef66>) — [electron/ai/agents/construction-context.cjs:173](<../../../../../../../electron/ai/agents/construction-context.cjs#L173>)
- [invalid](<construction-context.cjs.md#s-57710d0ea2630614>) — [electron/ai/agents/construction-context.cjs:177](<../../../../../../../electron/ai/agents/construction-context.cjs#L177>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- &#91;"Context", "Knowledge"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:171](<../../../../../../../electron/ai/agents/construction-context.cjs#L171>)
- &#91;"Context", "Knowledge"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:174](<../../../../../../../electron/ai/agents/construction-context.cjs#L174>)
- references.push — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:180](<../../../../../../../electron/ai/agents/construction-context.cjs#L180>)
- reviewed.sources.map — external-or-dynamic-dispatch; [electron/ai/agents/construction-context.cjs:187](<../../../../../../../electron/ai/agents/construction-context.cjs#L187>)

**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:9](<../../../../../../../electron/agent-memory-binding.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-f921562ca9728764"></a>

## constructionReferences.&lt;anonymous@187:37&gt;

[electron/ai/agents/construction-context.cjs:187](<../../../../../../../electron/ai/agents/construction-context.cjs#L187>) · ArrowFunction · production · [Assigned Agents and jurisdiction](<../../../../../modules/agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [constructionReferences](<construction-context.cjs.md#s-3b253d74a6be9ac5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: { sourceId: any; relativePath: any; contentHash: any; content: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:9](<../../../../../../../electron/agent-memory-binding.test.cjs#L9>) — file-import-only; coverage not established.
