# electron/ai/engine-chat.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/engine-chat.cjs:1](<../../../../../../electron/ai/engine-chat.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/engine-chat.cjs](<engine-chat.cjs.md#s-f0617b2c317acc10>) (Module)
- [TOOL_NAME](<engine-chat.cjs.md#s-ec9c925981e2fd80>) (VariableDeclaration)
- [invalid](<engine-chat.cjs.md#s-55e9ade0062b600c>) (FunctionDeclaration)
- [readJson](<engine-chat.cjs.md#s-ac61e6dbcf3b2c61>) (FunctionDeclaration)
- [readJson.&lt;anonymous@33:43&gt;](<engine-chat.cjs.md#s-723dbf4364e534a9>) (ArrowFunction)
- [engineNode](<engine-chat.cjs.md#s-e9a5188fdf0046c0>) (FunctionDeclaration)
- [engineNode.&lt;anonymous@54:5&gt;](<engine-chat.cjs.md#s-942bde5e5fce7379>) (ArrowFunction)
- [engineNode.&lt;anonymous@54:5&gt;.&lt;anonymous@58:9&gt;](<engine-chat.cjs.md#s-488821d6636618ef>) (ArrowFunction)
- [engineNode.&lt;anonymous@54:5&gt;.&lt;anonymous@58:9&gt;.&lt;anonymous@61:13&gt;](<engine-chat.cjs.md#s-d584dcf86d3e4eba>) (ArrowFunction)
- [selectTool](<engine-chat.cjs.md#s-14e66eaa8df6d33c>) (FunctionDeclaration)
- [selectTool.&lt;anonymous@155:45&gt;](<engine-chat.cjs.md#s-84af835efd9b0686>) (ArrowFunction)
- [selectTool.&lt;anonymous@188:17&gt;](<engine-chat.cjs.md#s-ac3d127563a66723>) (ArrowFunction)
- [selectTool.&lt;anonymous@189:14&gt;](<engine-chat.cjs.md#s-dbdbf5095f1720c7>) (ArrowFunction)
- [reportSchema](<engine-chat.cjs.md#s-388644b265f372d9>) (SchemaBinding)
- [runEngineTurn](<engine-chat.cjs.md#s-5191968f4b9121bd>) (FunctionDeclaration)

<a id="s-f0617b2c317acc10"></a>

## electron/ai/engine-chat.cjs

[electron/ai/engine-chat.cjs:1](<../../../../../../electron/ai/engine-chat.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/ai/engine-chat.cjs:2](<../../../../../../electron/ai/engine-chat.cjs#L2>)
- require — module-loader; [electron/ai/engine-chat.cjs:3](<../../../../../../electron/ai/engine-chat.cjs#L3>)
- require — module-loader; [electron/ai/engine-chat.cjs:4](<../../../../../../electron/ai/engine-chat.cjs#L4>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ec9c925981e2fd80"></a>

## TOOL_NAME

[electron/ai/engine-chat.cjs:5](<../../../../../../electron/ai/engine-chat.cjs#L5>) · VariableDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: TOOL_NAME ([electron/ai/engine-chat.cjs:1](<../../../../../../electron/ai/engine-chat.cjs#L1>)).

Lexical owner: [electron/ai/engine-chat.cjs](<engine-chat.cjs.md#s-f0617b2c317acc10>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-55e9ade0062b600c"></a>

## invalid

[electron/ai/engine-chat.cjs:28](<../../../../../../electron/ai/engine-chat.cjs#L28>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/engine-chat.cjs](<engine-chat.cjs.md#s-f0617b2c317acc10>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| message | string | compiler-inferred | optional, default present |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/engine-chat.cjs:31](<../../../../../../electron/ai/engine-chat.cjs#L31>)

**Called by (statically resolved):**

- [readJson](<engine-chat.cjs.md#s-ac61e6dbcf3b2c61>) — [electron/ai/engine-chat.cjs:39](<../../../../../../electron/ai/engine-chat.cjs#L39>)
- [readJson](<engine-chat.cjs.md#s-ac61e6dbcf3b2c61>) — [electron/ai/engine-chat.cjs:48](<../../../../../../electron/ai/engine-chat.cjs#L48>)
- [selectTool](<engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:137](<../../../../../../electron/ai/engine-chat.cjs#L137>)
- [selectTool](<engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:141](<../../../../../../electron/ai/engine-chat.cjs#L141>)
- [selectTool](<engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:144](<../../../../../../electron/ai/engine-chat.cjs#L144>)
- [selectTool](<engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:146](<../../../../../../electron/ai/engine-chat.cjs#L146>)
- [selectTool](<engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:186](<../../../../../../electron/ai/engine-chat.cjs#L186>)
- [selectTool](<engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:225](<../../../../../../electron/ai/engine-chat.cjs#L225>)
- [selectTool](<engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:234](<../../../../../../electron/ai/engine-chat.cjs#L234>)
- [selectTool](<engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:254](<../../../../../../electron/ai/engine-chat.cjs#L254>)
- [selectTool](<engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:285](<../../../../../../electron/ai/engine-chat.cjs#L285>)
- [selectTool](<engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:288](<../../../../../../electron/ai/engine-chat.cjs#L288>)
- [selectTool](<engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:292](<../../../../../../electron/ai/engine-chat.cjs#L292>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ac61e6dbcf3b2c61"></a>

## readJson

[electron/ai/engine-chat.cjs:33](<../../../../../../electron/ai/engine-chat.cjs#L33>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: readJson ([electron/ai/engine-chat.cjs:1](<../../../../../../electron/ai/engine-chat.cjs#L1>)).

Lexical owner: [electron/ai/engine-chat.cjs](<engine-chat.cjs.md#s-f0617b2c317acc10>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| response | any | compiler-inferred | required |
| touch | () =&gt; void | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [invalid](<engine-chat.cjs.md#s-55e9ade0062b600c>) — [electron/ai/engine-chat.cjs:39](<../../../../../../electron/ai/engine-chat.cjs#L39>)
- [invalid](<engine-chat.cjs.md#s-55e9ade0062b600c>) — [electron/ai/engine-chat.cjs:48](<../../../../../../electron/ai/engine-chat.cjs#L48>)

**Called by (statically resolved):**

- [OllamaProvider.request](<providers/ollama-provider.cjs.md#s-35307b242f4f5560>) — [electron/ai/providers/ollama-provider.cjs:186](<../../../../../../electron/ai/providers/ollama-provider.cjs#L186>)

Unresolved / external call sites: 6.

- chunks.push — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:40](<../../../../../../electron/ai/engine-chat.cjs#L40>)
- touch — signature-only-candidate; [electron/ai/engine-chat.cjs:41](<../../../../../../electron/ai/engine-chat.cjs#L41>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:44](<../../../../../../electron/ai/engine-chat.cjs#L44>)
- new TextDecoder("utf-8", { fatal: true }).decode — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:45](<../../../../../../electron/ai/engine-chat.cjs#L45>)
- TextDecoder — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:45](<../../../../../../electron/ai/engine-chat.cjs#L45>)
- Buffer.concat — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:45](<../../../../../../electron/ai/engine-chat.cjs#L45>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-723dbf4364e534a9"></a>

## readJson.&lt;anonymous@33:43&gt;

[electron/ai/engine-chat.cjs:33](<../../../../../../electron/ai/engine-chat.cjs#L33>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [readJson](<engine-chat.cjs.md#s-ac61e6dbcf3b2c61>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e9a5188fdf0046c0"></a>

## engineNode

[electron/ai/engine-chat.cjs:51](<../../../../../../electron/ai/engine-chat.cjs#L51>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: engineNode ([electron/ai/engine-chat.cjs:1](<../../../../../../electron/ai/engine-chat.cjs#L1>)).

Lexical owner: [electron/ai/engine-chat.cjs](<engine-chat.cjs.md#s-f0617b2c317acc10>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| profile | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [runEngineTurn](<engine-chat.cjs.md#s-5191968f4b9121bd>) — [electron/ai/engine-chat.cjs:338](<../../../../../../electron/ai/engine-chat.cjs#L338>)

Unresolved / external call sites: 1.

- graph?.nodes.find — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:53](<../../../../../../electron/ai/engine-chat.cjs#L53>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-942bde5e5fce7379"></a>

## engineNode.&lt;anonymous@54:5&gt;

[electron/ai/engine-chat.cjs:54](<../../../../../../electron/ai/engine-chat.cjs#L54>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [engineNode](<engine-chat.cjs.md#s-e9a5188fdf0046c0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| n | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- graph.edges.some — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:57](<../../../../../../electron/ai/engine-chat.cjs#L57>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-488821d6636618ef"></a>

## engineNode.&lt;anonymous@54:5&gt;.&lt;anonymous@58:9&gt;

[electron/ai/engine-chat.cjs:58](<../../../../../../electron/ai/engine-chat.cjs#L58>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [engineNode.&lt;anonymous@54:5&gt;](<engine-chat.cjs.md#s-942bde5e5fce7379>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- graph.nodes.some — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:60](<../../../../../../electron/ai/engine-chat.cjs#L60>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d584dcf86d3e4eba"></a>

## engineNode.&lt;anonymous@54:5&gt;.&lt;anonymous@58:9&gt;.&lt;anonymous@61:13&gt;

[electron/ai/engine-chat.cjs:61](<../../../../../../electron/ai/engine-chat.cjs#L61>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [engineNode.&lt;anonymous@54:5&gt;.&lt;anonymous@58:9&gt;](<engine-chat.cjs.md#s-488821d6636618ef>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| target | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-14e66eaa8df6d33c"></a>

## selectTool

[electron/ai/engine-chat.cjs:66](<../../../../../../electron/ai/engine-chat.cjs#L66>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: selectTool ([electron/ai/engine-chat.cjs:1](<../../../../../../electron/ai/engine-chat.cjs#L1>)).

Lexical owner: [electron/ai/engine-chat.cjs](<engine-chat.cjs.md#s-f0617b2c317acc10>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| provider | any | compiler-inferred | required |
| providerId | any | compiler-inferred | required |
| {     model,     settings: rawSettings,     question,     history = &#91;&#93;,     signal,     onDiagnostic,   } | { model: any; settings: any; question: any; history?: {}; signal: any; onDiagnostic: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/engine-chat.cjs:79](<../../../../../../electron/ai/engine-chat.cjs#L79>)
- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/engine-chat.cjs:86](<../../../../../../electron/ai/engine-chat.cjs#L86>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/engine-chat.cjs:104](<../../../../../../electron/ai/engine-chat.cjs#L104>)
- [invalid](<engine-chat.cjs.md#s-55e9ade0062b600c>) — [electron/ai/engine-chat.cjs:137](<../../../../../../electron/ai/engine-chat.cjs#L137>)
- [invalid](<engine-chat.cjs.md#s-55e9ade0062b600c>) — [electron/ai/engine-chat.cjs:141](<../../../../../../electron/ai/engine-chat.cjs#L141>)
- [invalid](<engine-chat.cjs.md#s-55e9ade0062b600c>) — [electron/ai/engine-chat.cjs:144](<../../../../../../electron/ai/engine-chat.cjs#L144>)
- [invalid](<engine-chat.cjs.md#s-55e9ade0062b600c>) — [electron/ai/engine-chat.cjs:146](<../../../../../../electron/ai/engine-chat.cjs#L146>)
- [invalid](<engine-chat.cjs.md#s-55e9ade0062b600c>) — [electron/ai/engine-chat.cjs:186](<../../../../../../electron/ai/engine-chat.cjs#L186>)
- [invalid](<engine-chat.cjs.md#s-55e9ade0062b600c>) — [electron/ai/engine-chat.cjs:225](<../../../../../../electron/ai/engine-chat.cjs#L225>)
- [invalid](<engine-chat.cjs.md#s-55e9ade0062b600c>) — [electron/ai/engine-chat.cjs:234](<../../../../../../electron/ai/engine-chat.cjs#L234>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/engine-chat.cjs:241](<../../../../../../electron/ai/engine-chat.cjs#L241>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/engine-chat.cjs:247](<../../../../../../electron/ai/engine-chat.cjs#L247>)
- [invalid](<engine-chat.cjs.md#s-55e9ade0062b600c>) — [electron/ai/engine-chat.cjs:254](<../../../../../../electron/ai/engine-chat.cjs#L254>)
- [invalid](<engine-chat.cjs.md#s-55e9ade0062b600c>) — [electron/ai/engine-chat.cjs:285](<../../../../../../electron/ai/engine-chat.cjs#L285>)
- [invalid](<engine-chat.cjs.md#s-55e9ade0062b600c>) — [electron/ai/engine-chat.cjs:288](<../../../../../../electron/ai/engine-chat.cjs#L288>)
- [invalid](<engine-chat.cjs.md#s-55e9ade0062b600c>) — [electron/ai/engine-chat.cjs:292](<../../../../../../electron/ai/engine-chat.cjs#L292>)
- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/engine-chat.cjs:295](<../../../../../../electron/ai/engine-chat.cjs#L295>)

**Called by (statically resolved):**

- [runEngineTurn](<engine-chat.cjs.md#s-5191968f4b9121bd>) — [electron/ai/engine-chat.cjs:385](<../../../../../../electron/ai/engine-chat.cjs#L385>)

Unresolved / external call sites: 36.

- Date.now — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:78](<../../../../../../electron/ai/engine-chat.cjs#L78>)
- z .array( z .object({ role: z.enum(&#91;"system", "user", "assistant"&#93;), content: z.string().min(1).max(50000), }) .strict(), ) .min(2) .max — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:87](<../../../../../../electron/ai/engine-chat.cjs#L87>)
- z .array( z .object({ role: z.enum(&#91;"system", "user", "assistant"&#93;), content: z.string().min(1).max(50000), }) .strict(), ) .min — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:87](<../../../../../../electron/ai/engine-chat.cjs#L87>)
- z .array — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:87](<../../../../../../electron/ai/engine-chat.cjs#L87>)
- z .object({ role: z.enum(&#91;"system", "user", "assistant"&#93;), content: z.string().min(1).max(50000), }) .strict — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:89](<../../../../../../electron/ai/engine-chat.cjs#L89>)
- z .object — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:89](<../../../../../../electron/ai/engine-chat.cjs#L89>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:91](<../../../../../../electron/ai/engine-chat.cjs#L91>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:92](<../../../../../../electron/ai/engine-chat.cjs#L92>)
- 28 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-84af835efd9b0686"></a>

## selectTool.&lt;anonymous@155:45&gt;

[electron/ai/engine-chat.cjs:155](<../../../../../../electron/ai/engine-chat.cjs#L155>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [selectTool](<engine-chat.cjs.md#s-14e66eaa8df6d33c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| m | any | compiler-inferred | required |

Returns: { role: string; parts: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ac3d127563a66723"></a>

## selectTool.&lt;anonymous@188:17&gt;

[electron/ai/engine-chat.cjs:188](<../../../../../../electron/ai/engine-chat.cjs#L188>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [selectTool](<engine-chat.cjs.md#s-14e66eaa8df6d33c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-dbdbf5095f1720c7"></a>

## selectTool.&lt;anonymous@189:14&gt;

[electron/ai/engine-chat.cjs:189](<../../../../../../electron/ai/engine-chat.cjs#L189>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [selectTool](<engine-chat.cjs.md#s-14e66eaa8df6d33c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: { type: string; function: { name: any; arguments: any; }; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-388644b265f372d9"></a>

## reportSchema

[electron/ai/engine-chat.cjs:306](<../../../../../../electron/ai/engine-chat.cjs#L306>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: reportSchema ([electron/ai/engine-chat.cjs:1](<../../../../../../electron/ai/engine-chat.cjs#L1>)).

Lexical owner: [electron/ai/engine-chat.cjs](<engine-chat.cjs.md#s-f0617b2c317acc10>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 14.

- z .object({ runId: z.string().uuid(), month: require("./chronoz-adapter.cjs").monthSchema, researchStatus: z.enum(&#91;"PUBLISHED", "PARTIAL", "READY"&#93;), sha256: z.string().regex(/^&#91;a- — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:306](<../../../../../../electron/ai/engine-chat.cjs#L306>)
- z .object — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:306](<../../../../../../electron/ai/engine-chat.cjs#L306>)
- z.string().uuid — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:308](<../../../../../../electron/ai/engine-chat.cjs#L308>)
- z.string — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:308](<../../../../../../electron/ai/engine-chat.cjs#L308>)
- require — module-loader; [electron/ai/engine-chat.cjs:309](<../../../../../../electron/ai/engine-chat.cjs#L309>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:310](<../../../../../../electron/ai/engine-chat.cjs#L310>)
- z.string().regex — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:311](<../../../../../../electron/ai/engine-chat.cjs#L311>)
- z.string — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:311](<../../../../../../electron/ai/engine-chat.cjs#L311>)
- 6 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5191968f4b9121bd"></a>

## runEngineTurn

[electron/ai/engine-chat.cjs:317](<../../../../../../electron/ai/engine-chat.cjs#L317>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: runEngineTurn ([electron/ai/engine-chat.cjs:1](<../../../../../../electron/ai/engine-chat.cjs#L1>)).

Lexical owner: [electron/ai/engine-chat.cjs](<engine-chat.cjs.md#s-f0617b2c317acc10>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [engineNode](<engine-chat.cjs.md#s-e9a5188fdf0046c0>) — [electron/ai/engine-chat.cjs:338](<../../../../../../electron/ai/engine-chat.cjs#L338>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/engine-chat.cjs:365](<../../../../../../electron/ai/engine-chat.cjs#L365>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/engine-chat.cjs:370](<../../../../../../electron/ai/engine-chat.cjs#L370>)
- [selectTool](<engine-chat.cjs.md#s-14e66eaa8df6d33c>) — [electron/ai/engine-chat.cjs:385](<../../../../../../electron/ai/engine-chat.cjs#L385>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/engine-chat.cjs:471](<../../../../../../electron/ai/engine-chat.cjs#L471>)
- [serializeModelError](<../shared/runtime-errors.cjs.md#s-0a992a8fcd9686e4>) — [electron/ai/engine-chat.cjs:473](<../../../../../../electron/ai/engine-chat.cjs#L473>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 25.

- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:340](<../../../../../../electron/ai/engine-chat.cjs#L340>)
- Date — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:340](<../../../../../../electron/ai/engine-chat.cjs#L340>)
- Date.now — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:341](<../../../../../../electron/ai/engine-chat.cjs#L341>)
- engines.registration — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:369](<../../../../../../electron/ai/engine-chat.cjs#L369>)
- engines.binding — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:374](<../../../../../../electron/ai/engine-chat.cjs#L374>)
- onEvent — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:378](<../../../../../../electron/ai/engine-chat.cjs#L378>)
- onSelection — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:394](<../../../../../../electron/ai/engine-chat.cjs#L394>)
- Boolean — external-or-dynamic-dispatch; [electron/ai/engine-chat.cjs:397](<../../../../../../electron/ai/engine-chat.cjs#L397>)
- 17 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
