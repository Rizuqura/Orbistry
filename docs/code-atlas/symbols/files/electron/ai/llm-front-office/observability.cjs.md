# electron/ai/llm-front-office/observability.cjs: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/observability.cjs:1](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/observability.cjs](<observability.cjs.md#s-a7069964443ec5a5>) (Module)
- [knownCount](<observability.cjs.md#s-997ef77fb7add1bc>) (ArrowFunction)
- [knownDuration](<observability.cjs.md#s-ef5bf16ec36d8846>) (ArrowFunction)
- [safeIdentity](<observability.cjs.md#s-d1fc53fee1bcba77>) (ArrowFunction)
- [safeProvider](<observability.cjs.md#s-51ebd2afc0eac306>) (ArrowFunction)
- [safeError](<observability.cjs.md#s-decfd7d5faf42528>) (ArrowFunction)
- [elapsed](<observability.cjs.md#s-43d1662c8c05ece9>) (ArrowFunction)
- [createBaselineObserver](<observability.cjs.md#s-22e889ac7364e45a>) (FunctionDeclaration)
- [createBaselineObserver.&lt;anonymous@46:11&gt;](<observability.cjs.md#s-7beef500f29db7e1>) (ArrowFunction)
- [createBaselineObserver.total](<observability.cjs.md#s-7504bafd7d627a2c>) (ArrowFunction)
- [createBaselineObserver.total.&lt;anonymous@91:12&gt;](<observability.cjs.md#s-fba4171d759d1ec3>) (ArrowFunction)
- [createBaselineObserver.total.&lt;anonymous@92:15&gt;](<observability.cjs.md#s-6490fedc18ac5bfa>) (ArrowFunction)
- [createBaselineObserver.total.&lt;anonymous@93:31&gt;](<observability.cjs.md#s-cd0330a35164d0b3>) (ArrowFunction)
- [createBaselineObserver.stage](<observability.cjs.md#s-ed958441cc6d307e>) (MethodDeclaration)
- [createBaselineObserver.complete](<observability.cjs.md#s-16062b460e4158c3>) (MethodDeclaration)
- [createBaselineObserver.complete.&lt;anonymous@199:9&gt;](<observability.cjs.md#s-375814880053cb7b>) (ArrowFunction)
- [createBaselineObserver.complete.onDiagnostic](<observability.cjs.md#s-fe6145fef3b1466b>) (ArrowFunction)
- [createBaselineObserver.complete.onContent](<observability.cjs.md#s-db621cd80688c369>) (ArrowFunction)
- [createBaselineObserver.complete.onGenerationStarted](<observability.cjs.md#s-9a7fbb64586ebcb2>) (ArrowFunction)
- [createBaselineObserver.finish](<observability.cjs.md#s-e103266ac5c12797>) (MethodDeclaration)
- [createBaselineObserver.snapshot](<observability.cjs.md#s-2f4730d6e87ce485>) (MethodDeclaration)
- [createBaselineObserver.snapshot.&lt;anonymous@311:9&gt;](<observability.cjs.md#s-ccf00fe19e5c9951>) (ArrowFunction)

<a id="s-a7069964443ec5a5"></a>

## electron/ai/llm-front-office/observability.cjs

[electron/ai/llm-front-office/observability.cjs:1](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/ai/llm-front-office/observability.cjs:10](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L10>)
- require — module-loader; [electron/ai/llm-front-office/observability.cjs:11](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L11>)
- require — module-loader; [electron/ai/llm-front-office/observability.cjs:12](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L12>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-997ef77fb7add1bc"></a>

## knownCount

[electron/ai/llm-front-office/observability.cjs:14](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L14>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/observability.cjs](<observability.cjs.md#s-a7069964443ec5a5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createBaselineObserver.total](<observability.cjs.md#s-7504bafd7d627a2c>) — [electron/ai/llm-front-office/observability.cjs:94](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L94>)
- [createBaselineObserver.stage](<observability.cjs.md#s-ed958441cc6d307e>) — [electron/ai/llm-front-office/observability.cjs:137](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L137>)
- [createBaselineObserver.complete](<observability.cjs.md#s-16062b460e4158c3>) — [electron/ai/llm-front-office/observability.cjs:157](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L157>)
- [createBaselineObserver.complete](<observability.cjs.md#s-16062b460e4158c3>) — [electron/ai/llm-front-office/observability.cjs:171](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L171>)
- [createBaselineObserver.complete](<observability.cjs.md#s-16062b460e4158c3>) — [electron/ai/llm-front-office/observability.cjs:251](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L251>)
- [createBaselineObserver.complete](<observability.cjs.md#s-16062b460e4158c3>) — [electron/ai/llm-front-office/observability.cjs:252](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L252>)

Unresolved / external call sites: 1.

- Number.isSafeInteger — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:15](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L15>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-ef5bf16ec36d8846"></a>

## knownDuration

[electron/ai/llm-front-office/observability.cjs:16](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L16>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/observability.cjs](<observability.cjs.md#s-a7069964443ec5a5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createBaselineObserver.complete](<observability.cjs.md#s-16062b460e4158c3>) — [electron/ai/llm-front-office/observability.cjs:262](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L262>)

Unresolved / external call sites: 1.

- Number.isFinite — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:17](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L17>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-d1fc53fee1bcba77"></a>

## safeIdentity

[electron/ai/llm-front-office/observability.cjs:18](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L18>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/observability.cjs](<observability.cjs.md#s-a7069964443ec5a5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createBaselineObserver](<observability.cjs.md#s-22e889ac7364e45a>) — [electron/ai/llm-front-office/observability.cjs:53](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L53>)
- [createBaselineObserver](<observability.cjs.md#s-22e889ac7364e45a>) — [electron/ai/llm-front-office/observability.cjs:56](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L56>)
- [createBaselineObserver](<observability.cjs.md#s-22e889ac7364e45a>) — [electron/ai/llm-front-office/observability.cjs:57](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L57>)
- [createBaselineObserver](<observability.cjs.md#s-22e889ac7364e45a>) — [electron/ai/llm-front-office/observability.cjs:71](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L71>)
- [createBaselineObserver.stage](<observability.cjs.md#s-ed958441cc6d307e>) — [electron/ai/llm-front-office/observability.cjs:133](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L133>)
- [createBaselineObserver.complete](<observability.cjs.md#s-16062b460e4158c3>) — [electron/ai/llm-front-office/observability.cjs:165](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L165>)
- [createBaselineObserver.complete](<observability.cjs.md#s-16062b460e4158c3>) — [electron/ai/llm-front-office/observability.cjs:246](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L246>)

Unresolved / external call sites: 1.

- contracts.identity.safeParse — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:19](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L19>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-51ebd2afc0eac306"></a>

## safeProvider

[electron/ai/llm-front-office/observability.cjs:20](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L20>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/observability.cjs](<observability.cjs.md#s-a7069964443ec5a5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createBaselineObserver](<observability.cjs.md#s-22e889ac7364e45a>) — [electron/ai/llm-front-office/observability.cjs:49](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L49>)
- [createBaselineObserver.stage](<observability.cjs.md#s-ed958441cc6d307e>) — [electron/ai/llm-front-office/observability.cjs:132](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L132>)
- [createBaselineObserver.complete](<observability.cjs.md#s-16062b460e4158c3>) — [electron/ai/llm-front-office/observability.cjs:249](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L249>)

Unresolved / external call sites: 1.

- contracts.providerId.safeParse — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:21](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L21>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-decfd7d5faf42528"></a>

## safeError

[electron/ai/llm-front-office/observability.cjs:22](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L22>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/observability.cjs](<observability.cjs.md#s-a7069964443ec5a5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createBaselineObserver.stage](<observability.cjs.md#s-ed958441cc6d307e>) — [electron/ai/llm-front-office/observability.cjs:135](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L135>)
- [createBaselineObserver.complete](<observability.cjs.md#s-16062b460e4158c3>) — [electron/ai/llm-front-office/observability.cjs:285](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L285>)
- [createBaselineObserver.finish](<observability.cjs.md#s-e103266ac5c12797>) — [electron/ai/llm-front-office/observability.cjs:299](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L299>)

Unresolved / external call sites: 1.

- contracts.errorCode.safeParse — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:23](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L23>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-43d1662c8c05ece9"></a>

## elapsed

[electron/ai/llm-front-office/observability.cjs:26](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L26>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/observability.cjs](<observability.cjs.md#s-a7069964443ec5a5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| clock | any | compiler-inferred | required |
| start | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createBaselineObserver.stage](<observability.cjs.md#s-ed958441cc6d307e>) — [electron/ai/llm-front-office/observability.cjs:125](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L125>)
- [createBaselineObserver.complete.onContent](<observability.cjs.md#s-db621cd80688c369>) — [electron/ai/llm-front-office/observability.cjs:229](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L229>)
- [createBaselineObserver.complete](<observability.cjs.md#s-16062b460e4158c3>) — [electron/ai/llm-front-office/observability.cjs:291](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L291>)
- [createBaselineObserver.finish](<observability.cjs.md#s-e103266ac5c12797>) — [electron/ai/llm-front-office/observability.cjs:301](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L301>)

Unresolved / external call sites: 3.

- Math.max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:26](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L26>)
- Math.round — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:26](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L26>)
- clock — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:26](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L26>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-22e889ac7364e45a"></a>

## createBaselineObserver

[electron/ai/llm-front-office/observability.cjs:35](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L35>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Create a run-scoped passive observer. Inject clocks for deterministic tests. complete() preserves adapter receiver, callbacks, result identity and errors. finish() closes run timing; snapshot() returns an independent allowlisted copy. No prompt, response, header, credential or raw exception is retained.

Purpose evidence: jsdoc.

Exported as: createBaselineObserver ([electron/ai/llm-front-office/observability.cjs:1](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/observability.cjs](<observability.cjs.md#s-a7069964443ec5a5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   enabled = true,   mode = "existing-agent-baseline",   requestId,   runId,   conversationId,   providerId,   modelId,   agentId,   requestLogger,   wallClock = Date.now,   clock = () =&gt; performance.now(), } | { enabled?: boolean; mode?: string; requestId: any; runId: any; conversationId: any; providerId: any; modelId: any; agentId: any; requestLogger: any; wallClock?: any; clock?: () =&gt; any; } | compiler-inferred | required |

Returns: { complete: {}; finish: {}; snapshot: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [safeProvider](<observability.cjs.md#s-51ebd2afc0eac306>) — [electron/ai/llm-front-office/observability.cjs:49](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L49>)
- [safeIdentity](<observability.cjs.md#s-d1fc53fee1bcba77>) — [electron/ai/llm-front-office/observability.cjs:53](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L53>)
- [safeIdentity](<observability.cjs.md#s-d1fc53fee1bcba77>) — [electron/ai/llm-front-office/observability.cjs:56](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L56>)
- [safeIdentity](<observability.cjs.md#s-d1fc53fee1bcba77>) — [electron/ai/llm-front-office/observability.cjs:57](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L57>)
- [safeIdentity](<observability.cjs.md#s-d1fc53fee1bcba77>) — [electron/ai/llm-front-office/observability.cjs:71](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L71>)

**Called by (statically resolved):**

- [runAssignedTurn](<../agents/assigned-chat.cjs.md#s-d49a3f162aa849c6>) — [electron/ai/agents/assigned-chat.cjs:43](<../../../../../../../electron/ai/agents/assigned-chat.cjs#L43>)
- [fixture](<../front-office.test.cjs.md#s-f508a64ef51f23b0>) — [electron/ai/front-office.test.cjs:15](<../../../../../../../electron/ai/front-office.test.cjs#L15>)
- [FrontOfficeService.run](<service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:185](<../../../../../../../electron/ai/llm-front-office/service.cjs#L185>)
- [createContextOrchestrator.run](<../orchestrator.cjs.md#s-be352215519f7acf>) — [electron/ai/orchestrator.cjs:234](<../../../../../../../electron/ai/orchestrator.cjs#L234>)
- [&lt;anonymous@63:71&gt;](<../request-logger.test.cjs.md#s-bdf938808bed6d11>) — [electron/ai/request-logger.test.cjs:73](<../../../../../../../electron/ai/request-logger.test.cjs#L73>)
- [&lt;anonymous@107:102&gt;](<../request-logger.test.cjs.md#s-ba137847289aa5b2>) — [electron/ai/request-logger.test.cjs:109](<../../../../../../../electron/ai/request-logger.test.cjs#L109>)
- [&lt;anonymous@154:111&gt;](<../request-logger.test.cjs.md#s-af56a97d64a0db63>) — [electron/ai/request-logger.test.cjs:218](<../../../../../../../electron/ai/request-logger.test.cjs#L218>)
- [&lt;anonymous@256:103&gt;](<../request-logger.test.cjs.md#s-e5478e9c2abf934c>) — [electron/ai/request-logger.test.cjs:258](<../../../../../../../electron/ai/request-logger.test.cjs#L258>)

Unresolved / external call sites: 7.

- clock — signature-only-candidate; [electron/ai/llm-front-office/observability.cjs:48](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L48>)
- createHash("sha256") .update(&#96;qterminal-baseline-session:${conversationId}&#96;) .digest — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:59](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L59>)
- createHash("sha256") .update — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:59](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L59>)
- createHash — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:59](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L59>)
- new Date(wallClock()).toISOString — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:63](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L63>)
- Date — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:63](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L63>)
- wallClock — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:63](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L63>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:15](<../../../../../../../electron/ai/front-office.test.cjs#L15>) — static-call-site; coverage not established.
- [electron/ai/request-logger.test.cjs:73](<../../../../../../../electron/ai/request-logger.test.cjs#L73>) — static-call-site; coverage not established.
- [electron/ai/request-logger.test.cjs:109](<../../../../../../../electron/ai/request-logger.test.cjs#L109>) — static-call-site; coverage not established.
- [electron/ai/request-logger.test.cjs:218](<../../../../../../../electron/ai/request-logger.test.cjs#L218>) — static-call-site; coverage not established.
- [electron/ai/request-logger.test.cjs:258](<../../../../../../../electron/ai/request-logger.test.cjs#L258>) — static-call-site; coverage not established.
- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-7beef500f29db7e1"></a>

## createBaselineObserver.&lt;anonymous@46:11&gt;

[electron/ai/llm-front-office/observability.cjs:46](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L46>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createBaselineObserver](<observability.cjs.md#s-22e889ac7364e45a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- performance.now — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:46](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L46>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-7504bafd7d627a2c"></a>

## createBaselineObserver.total

[electron/ai/llm-front-office/observability.cjs:89](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L89>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createBaselineObserver](<observability.cjs.md#s-22e889ac7364e45a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| field | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [knownCount](<observability.cjs.md#s-997ef77fb7add1bc>) — [electron/ai/llm-front-office/observability.cjs:94](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L94>)

**Called by (statically resolved):**

- [createBaselineObserver.snapshot](<observability.cjs.md#s-2f4730d6e87ce485>) — [electron/ai/llm-front-office/observability.cjs:308](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L308>)
- [createBaselineObserver.snapshot](<observability.cjs.md#s-2f4730d6e87ce485>) — [electron/ai/llm-front-office/observability.cjs:309](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L309>)

Unresolved / external call sites: 3.

- trace.calls .map((call) =&gt; call&#91;field&#93;) .filter — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:90](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L90>)
- trace.calls .map — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:90](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L90>)
- values.reduce — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:93](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L93>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-fba4171d759d1ec3"></a>

## createBaselineObserver.total.&lt;anonymous@91:12&gt;

[electron/ai/llm-front-office/observability.cjs:91](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L91>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createBaselineObserver.total](<observability.cjs.md#s-7504bafd7d627a2c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| call | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-6490fedc18ac5bfa"></a>

## createBaselineObserver.total.&lt;anonymous@92:15&gt;

[electron/ai/llm-front-office/observability.cjs:92](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L92>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createBaselineObserver.total](<observability.cjs.md#s-7504bafd7d627a2c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| v | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-cd0330a35164d0b3"></a>

## createBaselineObserver.total.&lt;anonymous@93:31&gt;

[electron/ai/llm-front-office/observability.cjs:93](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L93>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createBaselineObserver.total](<observability.cjs.md#s-7504bafd7d627a2c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-ed958441cc6d307e"></a>

## createBaselineObserver.stage

[electron/ai/llm-front-office/observability.cjs:100](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L100>) · MethodDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Record a content-free lifecycle boundary using a strict metadata allowlist. Unknown stages/metadata are ignored, never copied into errors or exports.

Purpose evidence: jsdoc.

Lexical owner: [createBaselineObserver](<observability.cjs.md#s-22e889ac7364e45a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |
| status | string | compiler-inferred | optional, default present |
| metadata | {} | compiler-inferred | optional, default present |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [elapsed](<observability.cjs.md#s-43d1662c8c05ece9>) — [electron/ai/llm-front-office/observability.cjs:125](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L125>)
- [safeProvider](<observability.cjs.md#s-51ebd2afc0eac306>) — [electron/ai/llm-front-office/observability.cjs:132](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L132>)
- [safeIdentity](<observability.cjs.md#s-d1fc53fee1bcba77>) — [electron/ai/llm-front-office/observability.cjs:133](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L133>)
- [safeError](<observability.cjs.md#s-decfd7d5faf42528>) — [electron/ai/llm-front-office/observability.cjs:135](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L135>)
- [knownCount](<observability.cjs.md#s-997ef77fb7add1bc>) — [electron/ai/llm-front-office/observability.cjs:137](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L137>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- &#91; "GATEWAY_REQUEST_STARTED", "PROVIDER_RESPONSE_RECEIVED", "STREAM_STARTED", "FIRST_CONTENT_RECEIVED", "RESPONSE_NORMALIZED", &#93;.includes — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:102](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L102>)
- requestLogger?.step — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:110](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L110>)
- contracts.stageName.safeParse — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:117](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L117>)
- new Date(wallClock()).toISOString — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:123](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L123>)
- Date — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:123](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L123>)
- wallClock — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:123](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L123>)
- &#91;"ok", "error", "skipped", "bypassed", "buffered"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:126](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L126>)
- Number.isInteger — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:139](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L139>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-16062b460e4158c3"></a>

## createBaselineObserver.complete

[electron/ai/llm-front-office/observability.cjs:152](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L152>) · MethodDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Observe one adapter.complete invocation, including planner/repair attempts. Does not validate/change the adapter's request, route, signal or settings. Provider errors and callback exceptions propagate unchanged; never retried.

Purpose evidence: jsdoc.

Lexical owner: [createBaselineObserver](<observability.cjs.md#s-22e889ac7364e45a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| provider | any | compiler-inferred | required |
| request | any | compiler-inferred | required |
| phase | string | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [knownCount](<observability.cjs.md#s-997ef77fb7add1bc>) — [electron/ai/llm-front-office/observability.cjs:157](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L157>)
- [estimateTokens](<../../shared/token-budget.cjs.md#s-81eabfdb3a44d606>) — [electron/ai/llm-front-office/observability.cjs:157](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L157>)
- [safeIdentity](<observability.cjs.md#s-d1fc53fee1bcba77>) — [electron/ai/llm-front-office/observability.cjs:165](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L165>)
- [knownCount](<observability.cjs.md#s-997ef77fb7add1bc>) — [electron/ai/llm-front-office/observability.cjs:171](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L171>)
- [safeIdentity](<observability.cjs.md#s-d1fc53fee1bcba77>) — [electron/ai/llm-front-office/observability.cjs:246](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L246>)
- [safeProvider](<observability.cjs.md#s-51ebd2afc0eac306>) — [electron/ai/llm-front-office/observability.cjs:249](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L249>)
- [knownCount](<observability.cjs.md#s-997ef77fb7add1bc>) — [electron/ai/llm-front-office/observability.cjs:251](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L251>)
- [knownCount](<observability.cjs.md#s-997ef77fb7add1bc>) — [electron/ai/llm-front-office/observability.cjs:252](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L252>)
- [knownDuration](<observability.cjs.md#s-ef5bf16ec36d8846>) — [electron/ai/llm-front-office/observability.cjs:262](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L262>)
- [safeError](<observability.cjs.md#s-decfd7d5faf42528>) — [electron/ai/llm-front-office/observability.cjs:285](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L285>)
- [elapsed](<observability.cjs.md#s-43d1662c8c05ece9>) — [electron/ai/llm-front-office/observability.cjs:291](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L291>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 14.

- provider.complete — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:153](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L153>)
- clock — signature-only-candidate; [electron/ai/llm-front-office/observability.cjs:154](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L154>)
- new Date(wallClock()).toISOString — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:163](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L163>)
- Date — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:163](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L163>)
- wallClock — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:163](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L163>)
- trace.calls.push — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:184](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L184>)
- requestLogger?.step — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:190](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L190>)
- requestLogger?.waiting — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:197](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L197>)
- 6 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-375814880053cb7b"></a>

## createBaselineObserver.complete.&lt;anonymous@199:9&gt;

[electron/ai/llm-front-office/observability.cjs:199](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L199>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createBaselineObserver.complete](<observability.cjs.md#s-16062b460e4158c3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-fe6145fef3b1466b"></a>

## createBaselineObserver.complete.onDiagnostic

[electron/ai/llm-front-office/observability.cjs:206](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L206>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createBaselineObserver.complete](<observability.cjs.md#s-16062b460e4158c3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| stage | any | compiler-inferred | required |
| metadata | any | compiler-inferred | required |
| status | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- requestLogger.step — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:211](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L211>)
- request.onDiagnostic — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:216](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L216>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-db621cd80688c369"></a>

## createBaselineObserver.complete.onContent

[electron/ai/llm-front-office/observability.cjs:222](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L222>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createBaselineObserver.complete](<observability.cjs.md#s-16062b460e4158c3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| content | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [elapsed](<observability.cjs.md#s-43d1662c8c05ece9>) — [electron/ai/llm-front-office/observability.cjs:229](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L229>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- requestLogger?.step — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:225](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L225>)
- request.onContent — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:232](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L232>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-9a7fbb64586ebcb2"></a>

## createBaselineObserver.complete.onGenerationStarted

[electron/ai/llm-front-office/observability.cjs:238](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L238>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createBaselineObserver.complete](<observability.cjs.md#s-16062b460e4158c3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| args | {} | compiler-inferred | required, rest |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- request.onGenerationStarted — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:240](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L240>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-e103266ac5c12797"></a>

## createBaselineObserver.finish

[electron/ai/llm-front-office/observability.cjs:296](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L296>) · MethodDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Close overall execution timing; validation failures can follow successful calls.

Purpose evidence: jsdoc.

Lexical owner: [createBaselineObserver](<observability.cjs.md#s-22e889ac7364e45a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| status | any | compiler-inferred | required |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [safeError](<observability.cjs.md#s-decfd7d5faf42528>) — [electron/ai/llm-front-office/observability.cjs:299](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L299>)
- [elapsed](<observability.cjs.md#s-43d1662c8c05ece9>) — [electron/ai/llm-front-office/observability.cjs:301](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L301>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- new Date(wallClock()).toISOString — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:300](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L300>)
- Date — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:300](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L300>)
- wallClock — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:300](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L300>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-2f4730d6e87ce485"></a>

## createBaselineObserver.snapshot

[electron/ai/llm-front-office/observability.cjs:305](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L305>) · MethodDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Return only content-free metrics; missing usage totals are known subtotals.

Purpose evidence: jsdoc.

Lexical owner: [createBaselineObserver](<observability.cjs.md#s-22e889ac7364e45a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createBaselineObserver.total](<observability.cjs.md#s-7504bafd7d627a2c>) — [electron/ai/llm-front-office/observability.cjs:308](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L308>)
- [createBaselineObserver.total](<observability.cjs.md#s-7504bafd7d627a2c>) — [electron/ai/llm-front-office/observability.cjs:309](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L309>)
- [validateTrace](<contracts.cjs.md#s-a8858a20a10ec890>) — [electron/ai/llm-front-office/observability.cjs:322](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L322>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- trace.calls.reduce — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:310](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L310>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-ccf00fe19e5c9951"></a>

## createBaselineObserver.snapshot.&lt;anonymous@311:9&gt;

[electron/ai/llm-front-office/observability.cjs:311](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L311>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createBaselineObserver.snapshot](<observability.cjs.md#s-2f4730d6e87ce485>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sum | any | compiler-inferred | required |
| call | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Number — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:313](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L313>)
- Number — external-or-dynamic-dispatch; [electron/ai/llm-front-office/observability.cjs:314](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L314>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:9](<../../../../../../../electron/ai/front-office.test.cjs#L9>) — file-import-only; coverage not established.
- [electron/ai/request-logger.test.cjs:6](<../../../../../../../electron/ai/request-logger.test.cjs#L6>) — file-import-only; coverage not established.
