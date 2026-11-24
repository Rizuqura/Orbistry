# electron/ai/dataset-session.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/dataset-session.cjs:1](<../../../../../../electron/ai/dataset-session.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/dataset-session.cjs](<dataset-session.cjs.md#s-e5af128a973b2648>) (Module)
- [createDatasetSession](<dataset-session.cjs.md#s-4ee3f1546b09b38d>) (FunctionDeclaration)
- [createDatasetSession.rejectAll](<dataset-session.cjs.md#s-613b7d3939647a51>) (ArrowFunction)
- [createDatasetSession.close](<dataset-session.cjs.md#s-c00577a78da67ea4>) (ArrowFunction)
- [createDatasetSession.abort](<dataset-session.cjs.md#s-701a0922d72f6209>) (ArrowFunction)
- [createDatasetSession.&lt;anonymous@36:24&gt;](<dataset-session.cjs.md#s-c480ea2557442f67>) (ArrowFunction)
- [createDatasetSession.&lt;anonymous@44:22&gt;](<dataset-session.cjs.md#s-3e24792f305b1b5c>) (ArrowFunction)
- [createDatasetSession.&lt;anonymous@52:21&gt;](<dataset-session.cjs.md#s-92e2fd6ded6a0b9c>) (ArrowFunction)
- [createDatasetSession.call](<dataset-session.cjs.md#s-417114a38f1c6cd4>) (MethodDeclaration)
- [createDatasetSession.call.&lt;anonymous@68:26&gt;](<dataset-session.cjs.md#s-843e64cebd83b552>) (ArrowFunction)

<a id="s-e5af128a973b2648"></a>

## electron/ai/dataset-session.cjs

[electron/ai/dataset-session.cjs:1](<../../../../../../electron/ai/dataset-session.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/ai/dataset-session.cjs:1](<../../../../../../electron/ai/dataset-session.cjs#L1>)
- require — module-loader; [electron/ai/dataset-session.cjs:2](<../../../../../../electron/ai/dataset-session.cjs#L2>)
- require — module-loader; [electron/ai/dataset-session.cjs:3](<../../../../../../electron/ai/dataset-session.cjs#L3>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:4](<../../../../../../electron/ai/dataset.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-4ee3f1546b09b38d"></a>

## createDatasetSession

[electron/ai/dataset-session.cjs:5](<../../../../../../electron/ai/dataset-session.cjs#L5>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: createDatasetSession ([electron/ai/dataset-session.cjs:1](<../../../../../../electron/ai/dataset-session.cjs#L1>)).

Lexical owner: [electron/ai/dataset-session.cjs](<dataset-session.cjs.md#s-e5af128a973b2648>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| signal | any | compiler-inferred | required |

Returns: { call(method: any, data: any): any; close: () =&gt; any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@337:50&gt;](<dataset.test.cjs.md#s-befe8799bd0fd0df>) — [electron/ai/dataset.test.cjs:339](<../../../../../../electron/ai/dataset.test.cjs#L339>)
- [createContextOrchestrator.run](<orchestrator.cjs.md#s-be352215519f7acf>) — [electron/ai/orchestrator.cjs:525](<../../../../../../electron/ai/orchestrator.cjs#L525>)

Unresolved / external call sites: 8.

- signal?.throwIfAborted — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:6](<../../../../../../electron/ai/dataset-session.cjs#L6>)
- Worker — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:7](<../../../../../../electron/ai/dataset-session.cjs#L7>)
- path.join — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:7](<../../../../../../electron/ai/dataset-session.cjs#L7>)
- Map — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:10](<../../../../../../electron/ai/dataset-session.cjs#L10>)
- worker.on — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:36](<../../../../../../electron/ai/dataset-session.cjs#L36>)
- worker.on — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:44](<../../../../../../electron/ai/dataset-session.cjs#L44>)
- worker.on — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:52](<../../../../../../electron/ai/dataset-session.cjs#L52>)
- signal?.addEventListener — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:59](<../../../../../../electron/ai/dataset-session.cjs#L59>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:339](<../../../../../../electron/ai/dataset.test.cjs#L339>) — static-call-site; coverage not established.
- [electron/ai/dataset.test.cjs:4](<../../../../../../electron/ai/dataset.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-613b7d3939647a51"></a>

## createDatasetSession.rejectAll

[electron/ai/dataset-session.cjs:13](<../../../../../../electron/ai/dataset-session.cjs#L13>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createDatasetSession](<dataset-session.cjs.md#s-4ee3f1546b09b38d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createDatasetSession.close](<dataset-session.cjs.md#s-c00577a78da67ea4>) — [electron/ai/dataset-session.cjs:23](<../../../../../../electron/ai/dataset-session.cjs#L23>)
- [createDatasetSession.&lt;anonymous@44:22&gt;](<dataset-session.cjs.md#s-3e24792f305b1b5c>) — [electron/ai/dataset-session.cjs:45](<../../../../../../electron/ai/dataset-session.cjs#L45>)
- [createDatasetSession.&lt;anonymous@52:21&gt;](<dataset-session.cjs.md#s-92e2fd6ded6a0b9c>) — [electron/ai/dataset-session.cjs:55](<../../../../../../electron/ai/dataset-session.cjs#L55>)

Unresolved / external call sites: 3.

- pending.values — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:14](<../../../../../../electron/ai/dataset-session.cjs#L14>)
- item.reject — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:14](<../../../../../../electron/ai/dataset-session.cjs#L14>)
- pending.clear — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:15](<../../../../../../electron/ai/dataset-session.cjs#L15>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:4](<../../../../../../electron/ai/dataset.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-c00577a78da67ea4"></a>

## createDatasetSession.close

[electron/ai/dataset-session.cjs:18](<../../../../../../electron/ai/dataset-session.cjs#L18>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createDatasetSession](<dataset-session.cjs.md#s-4ee3f1546b09b38d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createDatasetSession.rejectAll](<dataset-session.cjs.md#s-613b7d3939647a51>) — [electron/ai/dataset-session.cjs:23](<../../../../../../electron/ai/dataset-session.cjs#L23>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/dataset-session.cjs:25](<../../../../../../electron/ai/dataset-session.cjs#L25>)

**Called by (statically resolved):**

- [createDatasetSession.abort](<dataset-session.cjs.md#s-701a0922d72f6209>) — [electron/ai/dataset-session.cjs:34](<../../../../../../electron/ai/dataset-session.cjs#L34>)

Unresolved / external call sites: 3.

- Promise.resolve — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:20](<../../../../../../electron/ai/dataset-session.cjs#L20>)
- signal?.removeEventListener — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:22](<../../../../../../electron/ai/dataset-session.cjs#L22>)
- worker.terminate — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:30](<../../../../../../electron/ai/dataset-session.cjs#L30>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:4](<../../../../../../electron/ai/dataset.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-701a0922d72f6209"></a>

## createDatasetSession.abort

[electron/ai/dataset-session.cjs:33](<../../../../../../electron/ai/dataset-session.cjs#L33>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createDatasetSession](<dataset-session.cjs.md#s-4ee3f1546b09b38d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createDatasetSession.close](<dataset-session.cjs.md#s-c00577a78da67ea4>) — [electron/ai/dataset-session.cjs:34](<../../../../../../electron/ai/dataset-session.cjs#L34>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:4](<../../../../../../electron/ai/dataset.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-c480ea2557442f67"></a>

## createDatasetSession.&lt;anonymous@36:24&gt;

[electron/ai/dataset-session.cjs:36](<../../../../../../electron/ai/dataset-session.cjs#L36>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createDatasetSession](<dataset-session.cjs.md#s-4ee3f1546b09b38d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { id, value, error } | { id: any; value: any; error: any; } | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/dataset-session.cjs:41](<../../../../../../electron/ai/dataset-session.cjs#L41>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- pending.get — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:37](<../../../../../../electron/ai/dataset-session.cjs#L37>)
- pending.delete — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:39](<../../../../../../electron/ai/dataset-session.cjs#L39>)
- item.reject — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:41](<../../../../../../electron/ai/dataset-session.cjs#L41>)
- item.resolve — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:42](<../../../../../../electron/ai/dataset-session.cjs#L42>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:4](<../../../../../../electron/ai/dataset.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-3e24792f305b1b5c"></a>

## createDatasetSession.&lt;anonymous@44:22&gt;

[electron/ai/dataset-session.cjs:44](<../../../../../../electron/ai/dataset-session.cjs#L44>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createDatasetSession](<dataset-session.cjs.md#s-4ee3f1546b09b38d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createDatasetSession.rejectAll](<dataset-session.cjs.md#s-613b7d3939647a51>) — [electron/ai/dataset-session.cjs:45](<../../../../../../electron/ai/dataset-session.cjs#L45>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/dataset-session.cjs:46](<../../../../../../electron/ai/dataset-session.cjs#L46>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:4](<../../../../../../electron/ai/dataset.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-92e2fd6ded6a0b9c"></a>

## createDatasetSession.&lt;anonymous@52:21&gt;

[electron/ai/dataset-session.cjs:52](<../../../../../../electron/ai/dataset-session.cjs#L52>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createDatasetSession](<dataset-session.cjs.md#s-4ee3f1546b09b38d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createDatasetSession.rejectAll](<dataset-session.cjs.md#s-613b7d3939647a51>) — [electron/ai/dataset-session.cjs:55](<../../../../../../electron/ai/dataset-session.cjs#L55>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/dataset-session.cjs:56](<../../../../../../electron/ai/dataset-session.cjs#L56>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- signal?.removeEventListener — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:54](<../../../../../../electron/ai/dataset-session.cjs#L54>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:4](<../../../../../../electron/ai/dataset.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-417114a38f1c6cd4"></a>

## createDatasetSession.call

[electron/ai/dataset-session.cjs:61](<../../../../../../electron/ai/dataset-session.cjs#L61>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createDatasetSession](<dataset-session.cjs.md#s-4ee3f1546b09b38d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| method | any | compiler-inferred | required |
| data | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/dataset-session.cjs:64](<../../../../../../electron/ai/dataset-session.cjs#L64>)

**Called by (statically resolved):**

- [&lt;anonymous@337:50&gt;](<dataset.test.cjs.md#s-befe8799bd0fd0df>) — [electron/ai/dataset.test.cjs:341](<../../../../../../electron/ai/dataset.test.cjs#L341>)
- [&lt;anonymous@337:50&gt;](<dataset.test.cjs.md#s-befe8799bd0fd0df>) — [electron/ai/dataset.test.cjs:345](<../../../../../../electron/ai/dataset.test.cjs#L345>)
- [&lt;anonymous@337:50&gt;](<dataset.test.cjs.md#s-befe8799bd0fd0df>) — [electron/ai/dataset.test.cjs:350](<../../../../../../electron/ai/dataset.test.cjs#L350>)
- [createContextOrchestrator.run](<orchestrator.cjs.md#s-be352215519f7acf>) — [electron/ai/orchestrator.cjs:589](<../../../../../../electron/ai/orchestrator.cjs#L589>)

Unresolved / external call sites: 2.

- signal?.throwIfAborted — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:62](<../../../../../../electron/ai/dataset-session.cjs#L62>)
- Promise — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:68](<../../../../../../electron/ai/dataset-session.cjs#L68>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:341](<../../../../../../electron/ai/dataset.test.cjs#L341>) — static-call-site; coverage not established.
- [electron/ai/dataset.test.cjs:345](<../../../../../../electron/ai/dataset.test.cjs#L345>) — static-call-site; coverage not established.
- [electron/ai/dataset.test.cjs:350](<../../../../../../electron/ai/dataset.test.cjs#L350>) — static-call-site; coverage not established.
- [electron/ai/dataset.test.cjs:4](<../../../../../../electron/ai/dataset.test.cjs#L4>) — file-import-only; coverage not established.

<a id="s-843e64cebd83b552"></a>

## createDatasetSession.call.&lt;anonymous@68:26&gt;

[electron/ai/dataset-session.cjs:68](<../../../../../../electron/ai/dataset-session.cjs#L68>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createDatasetSession.call](<dataset-session.cjs.md#s-417114a38f1c6cd4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| resolve | any | compiler-inferred | required |
| reject | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- pending.set — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:70](<../../../../../../electron/ai/dataset-session.cjs#L70>)
- worker.postMessage — external-or-dynamic-dispatch; [electron/ai/dataset-session.cjs:71](<../../../../../../electron/ai/dataset-session.cjs#L71>)

**Related tests / acceptance harnesses:**

- [electron/ai/dataset.test.cjs:4](<../../../../../../electron/ai/dataset.test.cjs#L4>) — file-import-only; coverage not established.
