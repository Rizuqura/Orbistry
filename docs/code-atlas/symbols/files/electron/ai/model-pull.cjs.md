# electron/ai/model-pull.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/model-pull.cjs:1](<../../../../../../electron/ai/model-pull.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/model-pull.cjs](<model-pull.cjs.md#s-476d075b084dc218>) (Module)
- [ModelPullService](<model-pull.cjs.md#s-4b1694851b342393>) (ClassDeclaration)
- [ModelPullService.constructor](<model-pull.cjs.md#s-2c57151628df8f94>) (Constructor)
- [ModelPullService.constructor.&lt;anonymous@4:35&gt;](<model-pull.cjs.md#s-5da13631654e29ba>) (ArrowFunction)
- [ModelPullService.list](<model-pull.cjs.md#s-1b07d42732eb7621>) (MethodDeclaration)
- [ModelPullService.list.&lt;anonymous@10:46&gt;](<model-pull.cjs.md#s-ea53b9c1d92c472f>) (ArrowFunction)
- [ModelPullService.start](<model-pull.cjs.md#s-640cb0eef0657584>) (MethodDeclaration)
- [ModelPullService.start.&lt;anonymous@27:26&gt;](<model-pull.cjs.md#s-c02f9d528af9972f>) (ArrowFunction)
- [ModelPullService.start.update](<model-pull.cjs.md#s-c51e77ee84b66357>) (ArrowFunction)
- [ModelPullService.start.&lt;anonymous@50:13&gt;](<model-pull.cjs.md#s-712838b4fd667dc4>) (ArrowFunction)
- [ModelPullService.start.&lt;anonymous@54:13&gt;](<model-pull.cjs.md#s-349b030e01505920>) (ArrowFunction)
- [ModelPullService.start.&lt;anonymous@63:14&gt;](<model-pull.cjs.md#s-47c1ce2ad8af8a92>) (ArrowFunction)
- [ModelPullService.cancel](<model-pull.cjs.md#s-36573858072f544d>) (MethodDeclaration)
- [ModelPullService.cancelOwner](<model-pull.cjs.md#s-2387b6bd04d560ce>) (MethodDeclaration)

<a id="s-476d075b084dc218"></a>

## electron/ai/model-pull.cjs

[electron/ai/model-pull.cjs:1](<../../../../../../electron/ai/model-pull.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/ai/model-pull.cjs:1](<../../../../../../electron/ai/model-pull.cjs#L1>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:3](<../../../../../../electron/ai/model-pull.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-4b1694851b342393"></a>

## ModelPullService

[electron/ai/model-pull.cjs:3](<../../../../../../electron/ai/model-pull.cjs#L3>) · ClassDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: ModelPullService ([electron/ai/model-pull.cjs:1](<../../../../../../electron/ai/model-pull.cjs#L1>)).

Lexical owner: [electron/ai/model-pull.cjs](<model-pull.cjs.md#s-476d075b084dc218>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:3](<../../../../../../electron/ai/model-pull.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-2c57151628df8f94"></a>

## ModelPullService.constructor

[electron/ai/model-pull.cjs:4](<../../../../../../electron/ai/model-pull.cjs#L4>) · Constructor · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelPullService](<model-pull.cjs.md#s-4b1694851b342393>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| provider | any | compiler-inferred | required |
| publish | () =&gt; void | compiler-inferred | optional, default present |

Returns: ModelPullService (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [registerAiIpc](<ipc.cjs.md#s-72b9bbec8be3a0eb>) — [electron/ai/ipc.cjs:67](<../../../../../../electron/ai/ipc.cjs#L67>)
- [&lt;anonymous@6:98&gt;](<model-pull.test.cjs.md#s-292ddc45e790fd8a>) — [electron/ai/model-pull.test.cjs:10](<../../../../../../electron/ai/model-pull.test.cjs#L10>)
- [&lt;anonymous@38:67&gt;](<model-pull.test.cjs.md#s-eb82e9313d4fe874>) — [electron/ai/model-pull.test.cjs:40](<../../../../../../electron/ai/model-pull.test.cjs#L40>)
- [&lt;anonymous@58:71&gt;](<model-pull.test.cjs.md#s-b7080d32d075dba1>) — [electron/ai/model-pull.test.cjs:60](<../../../../../../electron/ai/model-pull.test.cjs#L60>)

Unresolved / external call sites: 1.

- Map — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:7](<../../../../../../electron/ai/model-pull.cjs#L7>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:10](<../../../../../../electron/ai/model-pull.test.cjs#L10>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:40](<../../../../../../electron/ai/model-pull.test.cjs#L40>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:60](<../../../../../../electron/ai/model-pull.test.cjs#L60>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:3](<../../../../../../electron/ai/model-pull.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-5da13631654e29ba"></a>

## ModelPullService.constructor.&lt;anonymous@4:35&gt;

[electron/ai/model-pull.cjs:4](<../../../../../../electron/ai/model-pull.cjs#L4>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelPullService.constructor](<model-pull.cjs.md#s-2c57151628df8f94>).

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

- [electron/ai/model-pull.test.cjs:3](<../../../../../../electron/ai/model-pull.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-1b07d42732eb7621"></a>

## ModelPullService.list

[electron/ai/model-pull.cjs:9](<../../../../../../electron/ai/model-pull.cjs#L9>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelPullService](<model-pull.cjs.md#s-4b1694851b342393>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [registerAiIpc.&lt;anonymous@160:24&gt;](<ipc.cjs.md#s-8c42f25c46bf293e>) — [electron/ai/ipc.cjs:160](<../../../../../../electron/ai/ipc.cjs#L160>)
- [registerAiIpc.&lt;anonymous@462:18&gt;](<ipc.cjs.md#s-0ecb0379d6241da5>) — [electron/ai/ipc.cjs:463](<../../../../../../electron/ai/ipc.cjs#L463>)
- [ModelPullService.start](<model-pull.cjs.md#s-640cb0eef0657584>) — [electron/ai/model-pull.cjs:27](<../../../../../../electron/ai/model-pull.cjs#L27>)
- [&lt;anonymous@6:98&gt;](<model-pull.test.cjs.md#s-292ddc45e790fd8a>) — [electron/ai/model-pull.test.cjs:29](<../../../../../../electron/ai/model-pull.test.cjs#L29>)
- [&lt;anonymous@38:67&gt;](<model-pull.test.cjs.md#s-eb82e9313d4fe874>) — [electron/ai/model-pull.test.cjs:52](<../../../../../../electron/ai/model-pull.test.cjs#L52>)

Unresolved / external call sites: 2.

- &#91;...this.operations.values()&#93;.map — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:10](<../../../../../../electron/ai/model-pull.cjs#L10>)
- this.operations.values — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:10](<../../../../../../electron/ai/model-pull.cjs#L10>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:29](<../../../../../../electron/ai/model-pull.test.cjs#L29>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:52](<../../../../../../electron/ai/model-pull.test.cjs#L52>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:3](<../../../../../../electron/ai/model-pull.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-ea53b9c1d92c472f"></a>

## ModelPullService.list.&lt;anonymous@10:46&gt;

[electron/ai/model-pull.cjs:10](<../../../../../../electron/ai/model-pull.cjs#L10>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelPullService.list](<model-pull.cjs.md#s-1b07d42732eb7621>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| op | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:3](<../../../../../../electron/ai/model-pull.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-640cb0eef0657584"></a>

## ModelPullService.start

[electron/ai/model-pull.cjs:12](<../../../../../../electron/ai/model-pull.cjs#L12>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelPullService](<model-pull.cjs.md#s-4b1694851b342393>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rawModel | any | compiler-inferred | required |
| ownerId | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/model-pull.cjs:18](<../../../../../../electron/ai/model-pull.cjs#L18>)
- [ModelPullService.list](<model-pull.cjs.md#s-1b07d42732eb7621>) — [electron/ai/model-pull.cjs:27](<../../../../../../electron/ai/model-pull.cjs#L27>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/model-pull.cjs:28](<../../../../../../electron/ai/model-pull.cjs#L28>)
- [ModelPullService.start.update](<model-pull.cjs.md#s-c51e77ee84b66357>) — [electron/ai/model-pull.cjs:48](<../../../../../../electron/ai/model-pull.cjs#L48>)

**Called by (statically resolved):**

- [registerAiIpc.&lt;anonymous@214:23&gt;](<ipc.cjs.md#s-f19ef0c4384b1262>) — [electron/ai/ipc.cjs:216](<../../../../../../electron/ai/ipc.cjs#L216>)
- [&lt;anonymous@6:98&gt;](<model-pull.test.cjs.md#s-292ddc45e790fd8a>) — [electron/ai/model-pull.test.cjs:25](<../../../../../../electron/ai/model-pull.test.cjs#L25>)
- [&lt;anonymous@6:98&gt;](<model-pull.test.cjs.md#s-292ddc45e790fd8a>) — [electron/ai/model-pull.test.cjs:26](<../../../../../../electron/ai/model-pull.test.cjs#L26>)
- [&lt;anonymous@6:98&gt;.&lt;anonymous@30:17&gt;](<model-pull.test.cjs.md#s-7c089fc57ef772a5>) — [electron/ai/model-pull.test.cjs:30](<../../../../../../electron/ai/model-pull.test.cjs#L30>)
- [&lt;anonymous@6:98&gt;](<model-pull.test.cjs.md#s-292ddc45e790fd8a>) — [electron/ai/model-pull.test.cjs:33](<../../../../../../electron/ai/model-pull.test.cjs#L33>)
- [&lt;anonymous@38:67&gt;](<model-pull.test.cjs.md#s-eb82e9313d4fe874>) — [electron/ai/model-pull.test.cjs:49](<../../../../../../electron/ai/model-pull.test.cjs#L49>)
- [&lt;anonymous@58:71&gt;](<model-pull.test.cjs.md#s-b7080d32d075dba1>) — [electron/ai/model-pull.test.cjs:66](<../../../../../../electron/ai/model-pull.test.cjs#L66>)
- [&lt;anonymous@58:71&gt;](<model-pull.test.cjs.md#s-b7080d32d075dba1>) — [electron/ai/model-pull.test.cjs:68](<../../../../../../electron/ai/model-pull.test.cjs#L68>)
- [&lt;anonymous@58:71&gt;.&lt;anonymous@70:17&gt;](<model-pull.test.cjs.md#s-f8504f80be2bc3cc>) — [electron/ai/model-pull.test.cjs:70](<../../../../../../electron/ai/model-pull.test.cjs#L70>)

Unresolved / external call sites: 13.

- /^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9._:/-&#93;{0,199}$/.test — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:15](<../../../../../../electron/ai/model-pull.cjs#L15>)
- rawModel.includes — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:16](<../../../../../../electron/ai/model-pull.cjs#L16>)
- rawModel.includes — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:22](<../../../../../../electron/ai/model-pull.cjs#L22>)
- this.operations.get — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:23](<../../../../../../electron/ai/model-pull.cjs#L23>)
- Promise.resolve — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:26](<../../../../../../electron/ai/model-pull.cjs#L26>)
- this.list().some — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:27](<../../../../../../electron/ai/model-pull.cjs#L27>)
- AbortController — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:32](<../../../../../../electron/ai/model-pull.cjs#L32>)
- Date.now — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:39](<../../../../../../electron/ai/model-pull.cjs#L39>)
- 5 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:25](<../../../../../../electron/ai/model-pull.test.cjs#L25>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:26](<../../../../../../electron/ai/model-pull.test.cjs#L26>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:30](<../../../../../../electron/ai/model-pull.test.cjs#L30>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:33](<../../../../../../electron/ai/model-pull.test.cjs#L33>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:49](<../../../../../../electron/ai/model-pull.test.cjs#L49>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:66](<../../../../../../electron/ai/model-pull.test.cjs#L66>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:68](<../../../../../../electron/ai/model-pull.test.cjs#L68>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:70](<../../../../../../electron/ai/model-pull.test.cjs#L70>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:3](<../../../../../../electron/ai/model-pull.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-c02f9d528af9972f"></a>

## ModelPullService.start.&lt;anonymous@27:26&gt;

[electron/ai/model-pull.cjs:27](<../../../../../../electron/ai/model-pull.cjs#L27>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelPullService.start](<model-pull.cjs.md#s-640cb0eef0657584>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:3](<../../../../../../electron/ai/model-pull.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-c51e77ee84b66357"></a>

## ModelPullService.start.update

[electron/ai/model-pull.cjs:44](<../../../../../../electron/ai/model-pull.cjs#L44>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelPullService.start](<model-pull.cjs.md#s-640cb0eef0657584>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ModelPullService.start](<model-pull.cjs.md#s-640cb0eef0657584>) — [electron/ai/model-pull.cjs:48](<../../../../../../electron/ai/model-pull.cjs#L48>)
- [ModelPullService.start.&lt;anonymous@54:13&gt;](<model-pull.cjs.md#s-349b030e01505920>) — [electron/ai/model-pull.cjs:56](<../../../../../../electron/ai/model-pull.cjs#L56>)
- [ModelPullService.start.&lt;anonymous@63:14&gt;](<model-pull.cjs.md#s-47c1ce2ad8af8a92>) — [electron/ai/model-pull.cjs:64](<../../../../../../electron/ai/model-pull.cjs#L64>)

Unresolved / external call sites: 1.

- this.publish — signature-only-candidate; [electron/ai/model-pull.cjs:46](<../../../../../../electron/ai/model-pull.cjs#L46>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:3](<../../../../../../electron/ai/model-pull.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-712838b4fd667dc4"></a>

## ModelPullService.start.&lt;anonymous@50:13&gt;

[electron/ai/model-pull.cjs:50](<../../../../../../electron/ai/model-pull.cjs#L50>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelPullService.start](<model-pull.cjs.md#s-640cb0eef0657584>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- controller.signal.throwIfAborted — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:51](<../../../../../../electron/ai/model-pull.cjs#L51>)
- this.provider.pull — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:52](<../../../../../../electron/ai/model-pull.cjs#L52>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:3](<../../../../../../electron/ai/model-pull.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-349b030e01505920"></a>

## ModelPullService.start.&lt;anonymous@54:13&gt;

[electron/ai/model-pull.cjs:54](<../../../../../../electron/ai/model-pull.cjs#L54>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelPullService.start](<model-pull.cjs.md#s-640cb0eef0657584>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { model: string; phase: string; startedAt: any; message: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelPullService.start.update](<model-pull.cjs.md#s-c51e77ee84b66357>) — [electron/ai/model-pull.cjs:56](<../../../../../../electron/ai/model-pull.cjs#L56>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- controller.signal.throwIfAborted — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:55](<../../../../../../electron/ai/model-pull.cjs#L55>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:3](<../../../../../../electron/ai/model-pull.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-47c1ce2ad8af8a92"></a>

## ModelPullService.start.&lt;anonymous@63:14&gt;

[electron/ai/model-pull.cjs:63](<../../../../../../electron/ai/model-pull.cjs#L63>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelPullService.start](<model-pull.cjs.md#s-640cb0eef0657584>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { model: string; phase: string; startedAt: any; message: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelPullService.start.update](<model-pull.cjs.md#s-c51e77ee84b66357>) — [electron/ai/model-pull.cjs:64](<../../../../../../electron/ai/model-pull.cjs#L64>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:3](<../../../../../../electron/ai/model-pull.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-36573858072f544d"></a>

## ModelPullService.cancel

[electron/ai/model-pull.cjs:76](<../../../../../../electron/ai/model-pull.cjs#L76>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelPullService](<model-pull.cjs.md#s-4b1694851b342393>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |
| ownerId | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [registerAiIpc.&lt;anonymous@218:24&gt;](<ipc.cjs.md#s-c39eba2d3d08e0c2>) — [electron/ai/ipc.cjs:224](<../../../../../../electron/ai/ipc.cjs#L224>)
- [&lt;anonymous@38:67&gt;](<model-pull.test.cjs.md#s-eb82e9313d4fe874>) — [electron/ai/model-pull.test.cjs:51](<../../../../../../electron/ai/model-pull.test.cjs#L51>)
- [&lt;anonymous@38:67&gt;](<model-pull.test.cjs.md#s-eb82e9313d4fe874>) — [electron/ai/model-pull.test.cjs:53](<../../../../../../electron/ai/model-pull.test.cjs#L53>)

Unresolved / external call sites: 3.

- this.operations.get — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:77](<../../../../../../electron/ai/model-pull.cjs#L77>)
- model.includes — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:78](<../../../../../../electron/ai/model-pull.cjs#L78>)
- op.controller.abort — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:81](<../../../../../../electron/ai/model-pull.cjs#L81>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:51](<../../../../../../electron/ai/model-pull.test.cjs#L51>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:53](<../../../../../../electron/ai/model-pull.test.cjs#L53>) — static-call-site; coverage not established.
- [electron/ai/model-pull.test.cjs:3](<../../../../../../electron/ai/model-pull.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-2387b6bd04d560ce"></a>

## ModelPullService.cancelOwner

[electron/ai/model-pull.cjs:85](<../../../../../../electron/ai/model-pull.cjs#L85>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelPullService](<model-pull.cjs.md#s-4b1694851b342393>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| ownerId | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [registerAiIpc.&lt;anonymous@71:34&gt;.&lt;anonymous@76:42&gt;](<ipc.cjs.md#s-46b0d1b00ee0d663>) — [electron/ai/ipc.cjs:79](<../../../../../../electron/ai/ipc.cjs#L79>)

Unresolved / external call sites: 2.

- this.operations.values — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:86](<../../../../../../electron/ai/model-pull.cjs#L86>)
- op.controller.abort — external-or-dynamic-dispatch; [electron/ai/model-pull.cjs:88](<../../../../../../electron/ai/model-pull.cjs#L88>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-pull.test.cjs:3](<../../../../../../electron/ai/model-pull.test.cjs#L3>) — file-import-only; coverage not established.
