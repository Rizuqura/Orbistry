# electron/ai/research-knowledge.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/research-knowledge.cjs:1](<../../../../../../electron/ai/research-knowledge.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/research-knowledge.cjs](<research-knowledge.cjs.md#s-1fb1b950f217e787>) (Module)
- [readCompletedRun](<research-knowledge.cjs.md#s-ff24b848b76d8433>) (FunctionDeclaration)
- [readResearchSource](<research-knowledge.cjs.md#s-b8998956bc9beef7>) (FunctionDeclaration)
- [ResearchKnowledge](<research-knowledge.cjs.md#s-f66834003ad3baa8>) (ClassDeclaration)
- [ResearchKnowledge.constructor](<research-knowledge.cjs.md#s-25bd65f0c502c6b4>) (Constructor)
- [ResearchKnowledge.store](<research-knowledge.cjs.md#s-f02b14e6c9830816>) (MethodDeclaration)
- [ResearchKnowledge.propose](<research-knowledge.cjs.md#s-6237bb50a54879b6>) (MethodDeclaration)
- [ResearchKnowledge.propose.&lt;anonymous@51:31&gt;](<research-knowledge.cjs.md#s-cc1a8d8edc21acbb>) (ArrowFunction)
- [ResearchKnowledge.retrieve](<research-knowledge.cjs.md#s-51f1bda5a3a72d66>) (MethodDeclaration)
- [ResearchKnowledge.retrieve.&lt;anonymous@64:9&gt;](<research-knowledge.cjs.md#s-8388aced344ee014>) (ArrowFunction)
- [ResearchKnowledge.retrieve.&lt;anonymous@89:7&gt;](<research-knowledge.cjs.md#s-d0f7f74f0bab5601>) (ArrowFunction)
- [ResearchKnowledge.retrieve.&lt;anonymous@98:25&gt;](<research-knowledge.cjs.md#s-e7c5abbe30764ec8>) (ArrowFunction)

<a id="s-1fb1b950f217e787"></a>

## electron/ai/research-knowledge.cjs

[electron/ai/research-knowledge.cjs:1](<../../../../../../electron/ai/research-knowledge.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- require — module-loader; [electron/ai/research-knowledge.cjs:1](<../../../../../../electron/ai/research-knowledge.cjs#L1>)
- require — module-loader; [electron/ai/research-knowledge.cjs:2](<../../../../../../electron/ai/research-knowledge.cjs#L2>)
- require — module-loader; [electron/ai/research-knowledge.cjs:3](<../../../../../../electron/ai/research-knowledge.cjs#L3>)
- require — module-loader; [electron/ai/research-knowledge.cjs:4](<../../../../../../electron/ai/research-knowledge.cjs#L4>)
- require — module-loader; [electron/ai/research-knowledge.cjs:5](<../../../../../../electron/ai/research-knowledge.cjs#L5>)
- require — module-loader; [electron/ai/research-knowledge.cjs:6](<../../../../../../electron/ai/research-knowledge.cjs#L6>)
- require — module-loader; [electron/ai/research-knowledge.cjs:7](<../../../../../../electron/ai/research-knowledge.cjs#L7>)
- require — module-loader; [electron/ai/research-knowledge.cjs:11](<../../../../../../electron/ai/research-knowledge.cjs#L11>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/knowledge-store.test.cjs:9](<../../../../../../electron/ai/knowledge-store.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/knowledge-store.test.cjs:423](<../../../../../../electron/ai/knowledge-store.test.cjs#L423>) — file-import-only; coverage not established.

<a id="s-ff24b848b76d8433"></a>

## readCompletedRun

[electron/ai/research-knowledge.cjs:13](<../../../../../../electron/ai/research-knowledge.cjs#L13>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: readCompletedRun ([electron/ai/research-knowledge.cjs:1](<../../../../../../electron/ai/research-knowledge.cjs#L1>)).

Lexical owner: [electron/ai/research-knowledge.cjs](<research-knowledge.cjs.md#s-1fb1b950f217e787>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| vault | any | compiler-inferred | required |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validId](<chat/conversation-store.cjs.md#s-24af4829fceb24b2>) — [electron/ai/research-knowledge.cjs:14](<../../../../../../electron/ai/research-knowledge.cjs#L14>)
- [rejectSymlink](<../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/ai/research-knowledge.cjs:18](<../../../../../../electron/ai/research-knowledge.cjs#L18>)
- [rejectSymlink](<../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/ai/research-knowledge.cjs:19](<../../../../../../electron/ai/research-knowledge.cjs#L19>)
- [rejectSymlink](<../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/ai/research-knowledge.cjs:21](<../../../../../../electron/ai/research-knowledge.cjs#L21>)
- [validateRunRecord](<run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/research-knowledge.cjs:24](<../../../../../../electron/ai/research-knowledge.cjs#L24>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/research-knowledge.cjs:30](<../../../../../../electron/ai/research-knowledge.cjs#L30>)

**Called by (statically resolved):**

- [ResearchKnowledge.propose](<research-knowledge.cjs.md#s-6237bb50a54879b6>) — [electron/ai/research-knowledge.cjs:57](<../../../../../../electron/ai/research-knowledge.cjs#L57>)
- [main](<../../scripts/knowledge-review.cjs.md#s-4e347ac0af67f343>) — [scripts/knowledge-review.cjs:50](<../../../../../../scripts/knowledge-review.cjs#L50>)

Unresolved / external call sites: 8.

- fs.realpath — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:15](<../../../../../../electron/ai/research-knowledge.cjs#L15>)
- path.join — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:16](<../../../../../../electron/ai/research-knowledge.cjs#L16>)
- path.join — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:18](<../../../../../../electron/ai/research-knowledge.cjs#L18>)
- path.join — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:20](<../../../../../../electron/ai/research-knowledge.cjs#L20>)
- fs.stat — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:22](<../../../../../../electron/ai/research-knowledge.cjs#L22>)
- Error — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:23](<../../../../../../electron/ai/research-knowledge.cjs#L23>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:24](<../../../../../../electron/ai/research-knowledge.cjs#L24>)
- fs.readFile — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:24](<../../../../../../electron/ai/research-knowledge.cjs#L24>)

**Related tests / acceptance harnesses:**

- [electron/ai/knowledge-store.test.cjs:9](<../../../../../../electron/ai/knowledge-store.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/knowledge-store.test.cjs:423](<../../../../../../electron/ai/knowledge-store.test.cjs#L423>) — file-import-only; coverage not established.

<a id="s-b8998956bc9beef7"></a>

## readResearchSource

[electron/ai/research-knowledge.cjs:36](<../../../../../../electron/ai/research-knowledge.cjs#L36>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: readResearchSource ([electron/ai/research-knowledge.cjs:1](<../../../../../../electron/ai/research-knowledge.cjs#L1>)).

Lexical owner: [electron/ai/research-knowledge.cjs](<research-knowledge.cjs.md#s-1fb1b950f217e787>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| vault | any | compiler-inferred | required |
| relativePath | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readIndexedPdfText](<../domains/universe/vault-service.cjs.md#s-af94c3891425ab49>) — [electron/ai/research-knowledge.cjs:38](<../../../../../../electron/ai/research-knowledge.cjs#L38>)
- [readVaultFile](<../domains/universe/vault-service.cjs.md#s-9d052ebb9a7eb12e>) — [electron/ai/research-knowledge.cjs:39](<../../../../../../electron/ai/research-knowledge.cjs#L39>)

**Called by (statically resolved):**

- [fixture.approve.&lt;anonymous@61:7&gt;](<knowledge-store.test.cjs.md#s-4013ad47801b3725>) — [electron/ai/knowledge-store.test.cjs:61](<../../../../../../electron/ai/knowledge-store.test.cjs#L61>)
- [main.&lt;anonymous@47:7&gt;](<../../scripts/knowledge-review.cjs.md#s-779be37e7d52f5dc>) — [scripts/knowledge-review.cjs:47](<../../../../../../scripts/knowledge-review.cjs#L47>)
- [main](<../../scripts/knowledge-review.cjs.md#s-4e347ac0af67f343>) — [scripts/knowledge-review.cjs:55](<../../../../../../scripts/knowledge-review.cjs#L55>)

Unresolved / external call sites: 1.

- /\\.pdf$/i.test — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:37](<../../../../../../electron/ai/research-knowledge.cjs#L37>)

**Related tests / acceptance harnesses:**

- [electron/ai/knowledge-store.test.cjs:61](<../../../../../../electron/ai/knowledge-store.test.cjs#L61>) — static-call-site; coverage not established.
- [electron/ai/knowledge-store.test.cjs:9](<../../../../../../electron/ai/knowledge-store.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/knowledge-store.test.cjs:423](<../../../../../../electron/ai/knowledge-store.test.cjs#L423>) — file-import-only; coverage not established.

<a id="s-f66834003ad3baa8"></a>

## ResearchKnowledge

[electron/ai/research-knowledge.cjs:41](<../../../../../../electron/ai/research-knowledge.cjs#L41>) · ClassDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: ResearchKnowledge ([electron/ai/research-knowledge.cjs:1](<../../../../../../electron/ai/research-knowledge.cjs#L1>)).

Lexical owner: [electron/ai/research-knowledge.cjs](<research-knowledge.cjs.md#s-1fb1b950f217e787>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/knowledge-store.test.cjs:9](<../../../../../../electron/ai/knowledge-store.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/knowledge-store.test.cjs:423](<../../../../../../electron/ai/knowledge-store.test.cjs#L423>) — file-import-only; coverage not established.

<a id="s-25bd65f0c502c6b4"></a>

## ResearchKnowledge.constructor

[electron/ai/research-knowledge.cjs:42](<../../../../../../electron/ai/research-knowledge.cjs#L42>) · Constructor · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ResearchKnowledge](<research-knowledge.cjs.md#s-f66834003ad3baa8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| appData | any | compiler-inferred | required |

Returns: ResearchKnowledge (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@420:98&gt;](<knowledge-store.test.cjs.md#s-3ae3f4d1568a7dfe>) — [electron/ai/knowledge-store.test.cjs:440](<../../../../../../electron/ai/knowledge-store.test.cjs#L440>)
- [&lt;anonymous@163:22&gt;](<../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:282](<../../../../../../electron/main.cjs#L282>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/knowledge-store.test.cjs:440](<../../../../../../electron/ai/knowledge-store.test.cjs#L440>) — static-call-site; coverage not established.
- [electron/ai/knowledge-store.test.cjs:9](<../../../../../../electron/ai/knowledge-store.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/knowledge-store.test.cjs:423](<../../../../../../electron/ai/knowledge-store.test.cjs#L423>) — file-import-only; coverage not established.

<a id="s-f02b14e6c9830816"></a>

## ResearchKnowledge.store

[electron/ai/research-knowledge.cjs:45](<../../../../../../electron/ai/research-knowledge.cjs#L45>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ResearchKnowledge](<research-knowledge.cjs.md#s-f66834003ad3baa8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| vault | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [KnowledgeStore.constructor](<knowledge-store.cjs.md#s-50b83f55aadf1e17>) — [electron/ai/research-knowledge.cjs:46](<../../../../../../electron/ai/research-knowledge.cjs#L46>)

**Called by (statically resolved):**

- [ResearchKnowledge.propose](<research-knowledge.cjs.md#s-6237bb50a54879b6>) — [electron/ai/research-knowledge.cjs:58](<../../../../../../electron/ai/research-knowledge.cjs#L58>)
- [ResearchKnowledge.retrieve](<research-knowledge.cjs.md#s-51f1bda5a3a72d66>) — [electron/ai/research-knowledge.cjs:96](<../../../../../../electron/ai/research-knowledge.cjs#L96>)

Unresolved / external call sites: 1.

- fs.realpath — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:46](<../../../../../../electron/ai/research-knowledge.cjs#L46>)

**Related tests / acceptance harnesses:**

- [electron/ai/knowledge-store.test.cjs:9](<../../../../../../electron/ai/knowledge-store.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/knowledge-store.test.cjs:423](<../../../../../../electron/ai/knowledge-store.test.cjs#L423>) — file-import-only; coverage not established.

<a id="s-6237bb50a54879b6"></a>

## ResearchKnowledge.propose

[electron/ai/research-knowledge.cjs:48](<../../../../../../electron/ai/research-knowledge.cjs#L48>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ResearchKnowledge](<research-knowledge.cjs.md#s-f66834003ad3baa8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| vault | any | compiler-inferred | required |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/research-knowledge.cjs:53](<../../../../../../electron/ai/research-knowledge.cjs#L53>)
- [readCompletedRun](<research-knowledge.cjs.md#s-ff24b848b76d8433>) — [electron/ai/research-knowledge.cjs:57](<../../../../../../electron/ai/research-knowledge.cjs#L57>)
- [ResearchKnowledge.store](<research-knowledge.cjs.md#s-f02b14e6c9830816>) — [electron/ai/research-knowledge.cjs:58](<../../../../../../electron/ai/research-knowledge.cjs#L58>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- Object.keys(input).some — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:51](<../../../../../../electron/ai/research-knowledge.cjs#L51>)
- Object.keys — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:51](<../../../../../../electron/ai/research-knowledge.cjs#L51>)
- (await this.store(vault)).propose — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:58](<../../../../../../electron/ai/research-knowledge.cjs#L58>)

**Related tests / acceptance harnesses:**

- [electron/ai/knowledge-store.test.cjs:9](<../../../../../../electron/ai/knowledge-store.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/knowledge-store.test.cjs:423](<../../../../../../electron/ai/knowledge-store.test.cjs#L423>) — file-import-only; coverage not established.

<a id="s-cc1a8d8edc21acbb"></a>

## ResearchKnowledge.propose.&lt;anonymous@51:31&gt;

[electron/ai/research-knowledge.cjs:51](<../../../../../../electron/ai/research-knowledge.cjs#L51>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ResearchKnowledge.propose](<research-knowledge.cjs.md#s-6237bb50a54879b6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| key | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91;"runId", "extraction"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:51](<../../../../../../electron/ai/research-knowledge.cjs#L51>)

**Related tests / acceptance harnesses:**

- [electron/ai/knowledge-store.test.cjs:9](<../../../../../../electron/ai/knowledge-store.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/knowledge-store.test.cjs:423](<../../../../../../electron/ai/knowledge-store.test.cjs#L423>) — file-import-only; coverage not established.

<a id="s-51f1bda5a3a72d66"></a>

## ResearchKnowledge.retrieve

[electron/ai/research-knowledge.cjs:60](<../../../../../../electron/ai/research-knowledge.cjs#L60>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ResearchKnowledge](<research-knowledge.cjs.md#s-f66834003ad3baa8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| vault | any | compiler-inferred | required |
| input | any | compiler-inferred | required |
| service | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/research-knowledge.cjs:67](<../../../../../../electron/ai/research-knowledge.cjs#L67>)
- [validId](<chat/conversation-store.cjs.md#s-24af4829fceb24b2>) — [electron/ai/research-knowledge.cjs:71](<../../../../../../electron/ai/research-knowledge.cjs#L71>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/research-knowledge.cjs:75](<../../../../../../electron/ai/research-knowledge.cjs#L75>)
- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/research-knowledge.cjs:84](<../../../../../../electron/ai/research-knowledge.cjs#L84>)
- [ResearchKnowledge.store](<research-knowledge.cjs.md#s-f02b14e6c9830816>) — [electron/ai/research-knowledge.cjs:96](<../../../../../../electron/ai/research-knowledge.cjs#L96>)

**Called by (statically resolved):**

- [&lt;anonymous@420:98&gt;](<knowledge-store.test.cjs.md#s-3ae3f4d1568a7dfe>) — [electron/ai/knowledge-store.test.cjs:442](<../../../../../../electron/ai/knowledge-store.test.cjs#L442>)
- [&lt;anonymous@420:98&gt;](<knowledge-store.test.cjs.md#s-3ae3f4d1568a7dfe>) — [electron/ai/knowledge-store.test.cjs:447](<../../../../../../electron/ai/knowledge-store.test.cjs#L447>)

Unresolved / external call sites: 13.

- Object.keys(input).some — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:63](<../../../../../../electron/ai/research-knowledge.cjs#L63>)
- Object.keys — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:63](<../../../../../../electron/ai/research-knowledge.cjs#L63>)
- service.store — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:72](<../../../../../../electron/ai/research-knowledge.cjs#L72>)
- store.read — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:73](<../../../../../../electron/ai/research-knowledge.cjs#L73>)
- service.boundScope — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:79](<../../../../../../electron/ai/research-knowledge.cjs#L79>)
- randomUUID — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:80](<../../../../../../electron/ai/research-knowledge.cjs#L80>)
- require — module-loader; [electron/ai/research-knowledge.cjs:82](<../../../../../../electron/ai/research-knowledge.cjs#L82>)
- require — module-loader; [electron/ai/research-knowledge.cjs:83](<../../../../../../electron/ai/research-knowledge.cjs#L83>)
- 5 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/knowledge-store.test.cjs:442](<../../../../../../electron/ai/knowledge-store.test.cjs#L442>) — static-call-site; coverage not established.
- [electron/ai/knowledge-store.test.cjs:447](<../../../../../../electron/ai/knowledge-store.test.cjs#L447>) — static-call-site; coverage not established.
- [electron/ai/knowledge-store.test.cjs:9](<../../../../../../electron/ai/knowledge-store.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/knowledge-store.test.cjs:423](<../../../../../../electron/ai/knowledge-store.test.cjs#L423>) — file-import-only; coverage not established.

<a id="s-8388aced344ee014"></a>

## ResearchKnowledge.retrieve.&lt;anonymous@64:9&gt;

[electron/ai/research-knowledge.cjs:64](<../../../../../../electron/ai/research-knowledge.cjs#L64>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ResearchKnowledge.retrieve](<research-knowledge.cjs.md#s-51f1bda5a3a72d66>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| key | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91;"conversationId", "query"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/research-knowledge.cjs:64](<../../../../../../electron/ai/research-knowledge.cjs#L64>)

**Related tests / acceptance harnesses:**

- [electron/ai/knowledge-store.test.cjs:9](<../../../../../../electron/ai/knowledge-store.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/knowledge-store.test.cjs:423](<../../../../../../electron/ai/knowledge-store.test.cjs#L423>) — file-import-only; coverage not established.

<a id="s-d0f7f74f0bab5601"></a>

## ResearchKnowledge.retrieve.&lt;anonymous@89:7&gt;

[electron/ai/research-knowledge.cjs:89](<../../../../../../electron/ai/research-knowledge.cjs#L89>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ResearchKnowledge.retrieve](<research-knowledge.cjs.md#s-51f1bda5a3a72d66>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/knowledge-store.test.cjs:9](<../../../../../../electron/ai/knowledge-store.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/knowledge-store.test.cjs:423](<../../../../../../electron/ai/knowledge-store.test.cjs#L423>) — file-import-only; coverage not established.

<a id="s-e7c5abbe30764ec8"></a>

## ResearchKnowledge.retrieve.&lt;anonymous@98:25&gt;

[electron/ai/research-knowledge.cjs:98](<../../../../../../electron/ai/research-knowledge.cjs#L98>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ResearchKnowledge.retrieve](<research-knowledge.cjs.md#s-51f1bda5a3a72d66>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| s | any | compiler-inferred | required |

Returns: { sourceId: any; relativePath: any; contentHash: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/knowledge-store.test.cjs:9](<../../../../../../electron/ai/knowledge-store.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/knowledge-store.test.cjs:423](<../../../../../../electron/ai/knowledge-store.test.cjs#L423>) — file-import-only; coverage not established.
