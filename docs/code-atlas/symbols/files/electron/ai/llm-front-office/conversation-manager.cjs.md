# electron/ai/llm-front-office/conversation-manager.cjs: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/conversation-manager.cjs:1](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/conversation-manager.cjs](<conversation-manager.cjs.md#s-0fd5d9049cf06c9c>) (Module)
- [validateExperimentalConversation](<conversation-manager.cjs.md#s-3193bd9ab35b1def>) (FunctionDeclaration)
- [validateExperimentalConversation.&lt;anonymous@21:28&gt;](<conversation-manager.cjs.md#s-d867d23bcd1bfddf>) (ArrowFunction)
- [validateExperimentalConversation.&lt;anonymous@22:28&gt;](<conversation-manager.cjs.md#s-763287e32c8df0fe>) (ArrowFunction)
- [validateExperimentalConversation.&lt;anonymous@23:28&gt;](<conversation-manager.cjs.md#s-ecd20f7fbdba758b>) (ArrowFunction)
- [validateExperimentalConversation.&lt;anonymous@24:21&gt;](<conversation-manager.cjs.md#s-6c25c89c948167a2>) (ArrowFunction)
- [validateExperimentalConversation.&lt;anonymous@26:7&gt;](<conversation-manager.cjs.md#s-949fc3cc2cfe87d2>) (ArrowFunction)
- [validateExperimentalConversation.&lt;anonymous@26:7&gt;.&lt;anonymous@27:26&gt;](<conversation-manager.cjs.md#s-a412f413f6d65807>) (ArrowFunction)
- [validateExperimentalConversation.&lt;anonymous@30:15&gt;](<conversation-manager.cjs.md#s-31408eab2d38c1e8>) (ArrowFunction)
- [validateExperimentalConversation.&lt;anonymous@32:9&gt;](<conversation-manager.cjs.md#s-1b40bdd1df319c3e>) (ArrowFunction)
- [validateExperimentalConversation.&lt;anonymous@32:9&gt;.&lt;anonymous@34:13&gt;](<conversation-manager.cjs.md#s-ab9e24a5ab9a9c17>) (ArrowFunction)
- [runSchema](<conversation-manager.cjs.md#s-9393717de4b8b5bd>) (SchemaBinding)
- [validateExperimentalRun](<conversation-manager.cjs.md#s-ffc7705100d0fefb>) (FunctionDeclaration)

<a id="s-0fd5d9049cf06c9c"></a>

## electron/ai/llm-front-office/conversation-manager.cjs

[electron/ai/llm-front-office/conversation-manager.cjs:1](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/ai/llm-front-office/conversation-manager.cjs:13](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L13>)
- require — module-loader; [electron/ai/llm-front-office/conversation-manager.cjs:14](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L14>)
- require — module-loader; [electron/ai/llm-front-office/conversation-manager.cjs:15](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L15>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3193bd9ab35b1def"></a>

## validateExperimentalConversation

[electron/ai/llm-front-office/conversation-manager.cjs:18](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L18>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Validate mode isolation, unique identities and successful answer-to-attempt relationships.

Purpose evidence: jsdoc.

Exported as: validateExperimentalConversation ([electron/ai/llm-front-office/conversation-manager.cjs:1](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/conversation-manager.cjs](<conversation-manager.cjs.md#s-0fd5d9049cf06c9c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/llm-front-office/conversation-manager.cjs:19](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L19>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/conversation-manager.cjs:41](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L41>)

**Called by (statically resolved):**

- [validateConversation](<../chat/conversation-store.cjs.md#s-8fcc95a0b5a57e3e>) — [electron/ai/chat/conversation-store.cjs:27](<../../../../../../../electron/ai/chat/conversation-store.cjs#L27>)
- [FrontOfficeService.read](<service.cjs.md#s-7f2a6e1324a6fdf5>) — [electron/ai/llm-front-office/service.cjs:137](<../../../../../../../electron/ai/llm-front-office/service.cjs#L137>)
- [FrontOfficeService.run](<service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:349](<../../../../../../../electron/ai/llm-front-office/service.cjs#L349>)

Unresolved / external call sites: 10.

- Set — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:21](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L21>)
- v.messages.map — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:21](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L21>)
- Set — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:22](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L22>)
- v.attempts.map — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:22](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L22>)
- Set — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:23](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L23>)
- v.attempts.map — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:23](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L23>)
- v.messages.some — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:24](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L24>)
- v.attempts.some — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:25](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L25>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d867d23bcd1bfddf"></a>

## validateExperimentalConversation.&lt;anonymous@21:28&gt;

[electron/ai/llm-front-office/conversation-manager.cjs:21](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L21>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateExperimentalConversation](<conversation-manager.cjs.md#s-3193bd9ab35b1def>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| m | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-763287e32c8df0fe"></a>

## validateExperimentalConversation.&lt;anonymous@22:28&gt;

[electron/ai/llm-front-office/conversation-manager.cjs:22](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L22>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateExperimentalConversation](<conversation-manager.cjs.md#s-3193bd9ab35b1def>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ecd20f7fbdba758b"></a>

## validateExperimentalConversation.&lt;anonymous@23:28&gt;

[electron/ai/llm-front-office/conversation-manager.cjs:23](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L23>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateExperimentalConversation](<conversation-manager.cjs.md#s-3193bd9ab35b1def>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6c25c89c948167a2"></a>

## validateExperimentalConversation.&lt;anonymous@24:21&gt;

[electron/ai/llm-front-office/conversation-manager.cjs:24](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L24>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateExperimentalConversation](<conversation-manager.cjs.md#s-3193bd9ab35b1def>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| m | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-949fc3cc2cfe87d2"></a>

## validateExperimentalConversation.&lt;anonymous@26:7&gt;

[electron/ai/llm-front-office/conversation-manager.cjs:26](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L26>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateExperimentalConversation](<conversation-manager.cjs.md#s-3193bd9ab35b1def>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- v.messages.some — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:27](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L27>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a412f413f6d65807"></a>

## validateExperimentalConversation.&lt;anonymous@26:7&gt;.&lt;anonymous@27:26&gt;

[electron/ai/llm-front-office/conversation-manager.cjs:27](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L27>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateExperimentalConversation.&lt;anonymous@26:7&gt;](<conversation-manager.cjs.md#s-949fc3cc2cfe87d2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| m | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-31408eab2d38c1e8"></a>

## validateExperimentalConversation.&lt;anonymous@30:15&gt;

[electron/ai/llm-front-office/conversation-manager.cjs:30](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L30>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateExperimentalConversation](<conversation-manager.cjs.md#s-3193bd9ab35b1def>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| m | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1b40bdd1df319c3e"></a>

## validateExperimentalConversation.&lt;anonymous@32:9&gt;

[electron/ai/llm-front-office/conversation-manager.cjs:32](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L32>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateExperimentalConversation](<conversation-manager.cjs.md#s-3193bd9ab35b1def>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| m | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- v.attempts.some — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:33](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L33>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ab9e24a5ab9a9c17"></a>

## validateExperimentalConversation.&lt;anonymous@32:9&gt;.&lt;anonymous@34:13&gt;

[electron/ai/llm-front-office/conversation-manager.cjs:34](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L34>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateExperimentalConversation.&lt;anonymous@32:9&gt;](<conversation-manager.cjs.md#s-1b40bdd1df319c3e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9393717de4b8b5bd"></a>

## runSchema

[electron/ai/llm-front-office/conversation-manager.cjs:47](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L47>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/conversation-manager.cjs](<conversation-manager.cjs.md#s-0fd5d9049cf06c9c>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 83.

- z .object({ schemaVersion: z.literal(3), mode: z.literal("front-office"), runId: id, conversationId: id, requestId: id, status: z.enum(&#91;"succeeded", "failed", "cancelled"&#93;), starte — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:47](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L47>)
- z .object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:47](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L47>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:49](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L49>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:50](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L50>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:54](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L54>)
- z.iso.datetime — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:55](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L55>)
- z.iso.datetime — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:56](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L56>)
- z.number().finite().nonnegative — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:57](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L57>)
- 75 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ffc7705100d0fefb"></a>

## validateExperimentalRun

[electron/ai/llm-front-office/conversation-manager.cjs:120](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L120>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Experimental runs have no scope, agent or source fields; ordinary run schemas stay separate.

Purpose evidence: jsdoc.

Exported as: validateExperimentalRun ([electron/ai/llm-front-office/conversation-manager.cjs:1](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/conversation-manager.cjs](<conversation-manager.cjs.md#s-0fd5d9049cf06c9c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/llm-front-office/conversation-manager.cjs:121](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L121>)
- [validateConfig](<experiment-contracts.cjs.md#s-3012ca16a371ad08>) — [electron/ai/llm-front-office/conversation-manager.cjs:122](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L122>)
- [validateTrace](<contracts.cjs.md#s-a8858a20a10ec890>) — [electron/ai/llm-front-office/conversation-manager.cjs:123](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L123>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/conversation-manager.cjs:133](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L133>)

**Called by (statically resolved):**

- [validateRunRecord](<../run-store.cjs.md#s-bbbf0871f6631831>) — [electron/ai/run-store.cjs:69](<../../../../../../../electron/ai/run-store.cjs#L69>)

Unresolved / external call sites: 2.

- Date.parse — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:128](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L128>)
- Date.parse — external-or-dynamic-dispatch; [electron/ai/llm-front-office/conversation-manager.cjs:128](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L128>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
