# electron/ai/llm-front-office/telemetry-store.cjs: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/telemetry-store.cjs:1](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/telemetry-store.cjs](<telemetry-store.cjs.md#s-743a9e6c45912716>) (Module)
- [retainedTraces](<telemetry-store.cjs.md#s-5e8b948ed705de3f>) (FunctionDeclaration)
- [retainedTraces.&lt;anonymous@31:13&gt;](<telemetry-store.cjs.md#s-d75a76b933c694b0>) (ArrowFunction)
- [retainedTraces.&lt;anonymous@36:34&gt;](<telemetry-store.cjs.md#s-5e5a4b96cfef220a>) (ArrowFunction)
- [recordTrace](<telemetry-store.cjs.md#s-42b043391a6c38c4>) (FunctionDeclaration)

<a id="s-743a9e6c45912716"></a>

## electron/ai/llm-front-office/telemetry-store.cjs

[electron/ai/llm-front-office/telemetry-store.cjs:1](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [electron/ai/llm-front-office/telemetry-store.cjs:4](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L4>)
- require — module-loader; [electron/ai/llm-front-office/telemetry-store.cjs:5](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L5>)
- require — module-loader; [electron/ai/llm-front-office/telemetry-store.cjs:11](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L11>)
- require — module-loader; [electron/ai/llm-front-office/telemetry-store.cjs:12](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L12>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:36](<../../../../../../../electron/ai/front-office-engine.test.cjs#L36>) — file-import-only; coverage not established.

<a id="s-5e8b948ed705de3f"></a>

## retainedTraces

[electron/ai/llm-front-office/telemetry-store.cjs:15](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L15>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Purge expired content-free metrics only; never delete conversation or model-run records.

Purpose evidence: jsdoc.

Exported as: retainedTraces ([electron/ai/llm-front-office/telemetry-store.cjs:1](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/telemetry-store.cjs](<telemetry-store.cjs.md#s-743a9e6c45912716>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| days | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [safeDirectory](<../../core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [electron/ai/llm-front-office/telemetry-store.cjs:17](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L17>)
- [readJson](<../../core/persistence/json-store.cjs.md#s-7f9e3b493f3ab942>) — [electron/ai/llm-front-office/telemetry-store.cjs:22](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L22>)
- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/ai/llm-front-office/telemetry-store.cjs:27](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L27>)
- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/ai/llm-front-office/telemetry-store.cjs:33](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L33>)

**Called by (statically resolved):**

- [&lt;anonymous@952:91&gt;](<../front-office-engine.test.cjs.md#s-d79d5fd0efe45e42>) — [electron/ai/front-office-engine.test.cjs:964](<../../../../../../../electron/ai/front-office-engine.test.cjs#L964>)
- [FrontOfficeService.export](<service.cjs.md#s-679bfddf6b227794>) — [electron/ai/llm-front-office/service.cjs:152](<../../../../../../../electron/ai/llm-front-office/service.cjs#L152>)
- [recordTrace](<telemetry-store.cjs.md#s-42b043391a6c38c4>) — [electron/ai/llm-front-office/telemetry-store.cjs:45](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L45>)

Unresolved / external call sites: 13.

- path.join — external-or-dynamic-dispatch; [electron/ai/llm-front-office/telemetry-store.cjs:16](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L16>)
- fs.readdir — external-or-dynamic-dispatch; [electron/ai/llm-front-office/telemetry-store.cjs:19](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L19>)
- /^&#91;A-Za-z0-9_-&#93;+\\.json$/.test — external-or-dynamic-dispatch; [electron/ai/llm-front-office/telemetry-store.cjs:20](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L20>)
- path.join — external-or-dynamic-dispatch; [electron/ai/llm-front-office/telemetry-store.cjs:21](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L21>)
- Date.parse — external-or-dynamic-dispatch; [electron/ai/llm-front-office/telemetry-store.cjs:24](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L24>)
- Date.now — external-or-dynamic-dispatch; [electron/ai/llm-front-office/telemetry-store.cjs:25](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L25>)
- fs.unlink — external-or-dynamic-dispatch; [electron/ai/llm-front-office/telemetry-store.cjs:28](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L28>)
- rows.push — external-or-dynamic-dispatch; [electron/ai/llm-front-office/telemetry-store.cjs:29](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L29>)
- 5 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:964](<../../../../../../../electron/ai/front-office-engine.test.cjs#L964>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:36](<../../../../../../../electron/ai/front-office-engine.test.cjs#L36>) — file-import-only; coverage not established.

<a id="s-d75a76b933c694b0"></a>

## retainedTraces.&lt;anonymous@31:13&gt;

[electron/ai/llm-front-office/telemetry-store.cjs:31](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L31>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [retainedTraces](<telemetry-store.cjs.md#s-5e8b948ed705de3f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- b.value.startedAt.localeCompare — external-or-dynamic-dispatch; [electron/ai/llm-front-office/telemetry-store.cjs:31](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L31>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:36](<../../../../../../../electron/ai/front-office-engine.test.cjs#L36>) — file-import-only; coverage not established.

<a id="s-5e5a4b96cfef220a"></a>

## retainedTraces.&lt;anonymous@36:34&gt;

[electron/ai/llm-front-office/telemetry-store.cjs:36](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L36>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [retainedTraces](<telemetry-store.cjs.md#s-5e8b948ed705de3f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| r | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:36](<../../../../../../../electron/ai/front-office-engine.test.cjs#L36>) — file-import-only; coverage not established.

<a id="s-42b043391a6c38c4"></a>

## recordTrace

[electron/ai/llm-front-office/telemetry-store.cjs:39](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L39>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Append a metrics-only record and enforce local retention on activity, without a background timer.

Purpose evidence: jsdoc.

Exported as: recordTrace ([electron/ai/llm-front-office/telemetry-store.cjs:1](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/telemetry-store.cjs](<telemetry-store.cjs.md#s-743a9e6c45912716>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| trace | any | compiler-inferred | required |
| days | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateTrace](<contracts.cjs.md#s-a8858a20a10ec890>) — [electron/ai/llm-front-office/telemetry-store.cjs:40](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L40>)
- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/llm-front-office/telemetry-store.cjs:41](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L41>)
- [retainedTraces](<telemetry-store.cjs.md#s-5e8b948ed705de3f>) — [electron/ai/llm-front-office/telemetry-store.cjs:45](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L45>)

**Called by (statically resolved):**

- [runAssignedTurn.retainMetrics](<../agents/assigned-chat.cjs.md#s-1304f01b7bfbf52d>) — [electron/ai/agents/assigned-chat.cjs:157](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L157>)
- [FrontOfficeService.run](<service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:571](<../../../../../../../electron/ai/llm-front-office/service.cjs#L571>)
- [FrontOfficeService.run](<service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:683](<../../../../../../../electron/ai/llm-front-office/service.cjs#L683>)

Unresolved / external call sites: 1.

- path.join — external-or-dynamic-dispatch; [electron/ai/llm-front-office/telemetry-store.cjs:42](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L42>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:36](<../../../../../../../electron/ai/front-office-engine.test.cjs#L36>) — file-import-only; coverage not established.
