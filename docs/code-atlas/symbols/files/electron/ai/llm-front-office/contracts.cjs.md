# electron/ai/llm-front-office/contracts.cjs: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/contracts.cjs](<contracts.cjs.md#s-934dd548400ceb66>) (Module)
- [providerId](<contracts.cjs.md#s-04811b0f631327d7>) (SchemaBinding)
- [identity](<contracts.cjs.md#s-1abe1e7148d8aecf>) (SchemaBinding)
- [count](<contracts.cjs.md#s-d689668be930266e>) (SchemaBinding)
- [routingId](<contracts.cjs.md#s-d0ee3cfd397dc373>) (SchemaBinding)
- [duration](<contracts.cjs.md#s-b40ef95bf782f6ad>) (SchemaBinding)
- [stageName](<contracts.cjs.md#s-90be42fd8cdb16c4>) (SchemaBinding)
- [status](<contracts.cjs.md#s-459bd6250f9238c0>) (SchemaBinding)
- [errorCode](<contracts.cjs.md#s-3e12bfa33118232f>) (SchemaBinding)
- [finishReason](<contracts.cjs.md#s-ba7f30ff1cfea0aa>) (SchemaBinding)
- [callSchema](<contracts.cjs.md#s-5c1381555c404f00>) (SchemaBinding)
- [traceSchema](<contracts.cjs.md#s-296260573a415770>) (SchemaBinding)
- [validateTrace](<contracts.cjs.md#s-a8858a20a10ec890>) (FunctionDeclaration)

<a id="s-934dd548400ceb66"></a>

## electron/ai/llm-front-office/contracts.cjs

[electron/ai/llm-front-office/contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/ai/llm-front-office/contracts.cjs:8](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L8>)
- require — module-loader; [electron/ai/llm-front-office/contracts.cjs:9](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L9>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:10](<../../../../../../../electron/ai/front-office.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-04811b0f631327d7"></a>

## providerId

[electron/ai/llm-front-office/contracts.cjs:11](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L11>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: providerId ([electron/ai/llm-front-office/contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/contracts.cjs](<contracts.cjs.md#s-934dd548400ceb66>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- z.enum — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:11](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L11>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:10](<../../../../../../../electron/ai/front-office.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-1abe1e7148d8aecf"></a>

## identity

[electron/ai/llm-front-office/contracts.cjs:19](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L19>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: identity ([electron/ai/llm-front-office/contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/contracts.cjs](<contracts.cjs.md#s-934dd548400ceb66>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- z .string() .max(200) .regex — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:19](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L19>)
- z .string() .max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:19](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L19>)
- z .string — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:19](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L19>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:10](<../../../../../../../electron/ai/front-office.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-d689668be930266e"></a>

## count

[electron/ai/llm-front-office/contracts.cjs:23](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L23>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/contracts.cjs](<contracts.cjs.md#s-934dd548400ceb66>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- z.number().int().nonnegative().max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:23](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L23>)
- z.number().int().nonnegative — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:23](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L23>)
- z.number().int — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:23](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L23>)
- z.number — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:23](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L23>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:10](<../../../../../../../electron/ai/front-office.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-d0ee3cfd397dc373"></a>

## routingId

[electron/ai/llm-front-office/contracts.cjs:24](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L24>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/contracts.cjs](<contracts.cjs.md#s-934dd548400ceb66>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- z .string() .min(1) .max(240) .regex — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:24](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L24>)
- z .string() .min(1) .max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:24](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L24>)
- z .string() .min — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:24](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L24>)
- z .string — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:24](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L24>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:10](<../../../../../../../electron/ai/front-office.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-b40ef95bf782f6ad"></a>

## duration

[electron/ai/llm-front-office/contracts.cjs:29](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L29>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/contracts.cjs](<contracts.cjs.md#s-934dd548400ceb66>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- z.number().finite().nonnegative — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:29](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L29>)
- z.number().finite — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:29](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L29>)
- z.number — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:29](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L29>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:10](<../../../../../../../electron/ai/front-office.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-90be42fd8cdb16c4"></a>

## stageName

[electron/ai/llm-front-office/contracts.cjs:30](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L30>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: stageName ([electron/ai/llm-front-office/contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/contracts.cjs](<contracts.cjs.md#s-934dd548400ceb66>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- z.enum — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:30](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L30>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:10](<../../../../../../../electron/ai/front-office.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-459bd6250f9238c0"></a>

## status

[electron/ai/llm-front-office/contracts.cjs:44](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L44>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/contracts.cjs](<contracts.cjs.md#s-934dd548400ceb66>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- z.enum — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:44](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L44>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:10](<../../../../../../../electron/ai/front-office.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-3e12bfa33118232f"></a>

## errorCode

[electron/ai/llm-front-office/contracts.cjs:45](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L45>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: errorCode ([electron/ai/llm-front-office/contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/contracts.cjs](<contracts.cjs.md#s-934dd548400ceb66>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- z.enum — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:45](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L45>)
- Set — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:46](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L46>)
- Object.values — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:46](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L46>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:10](<../../../../../../../electron/ai/front-office.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-ba7f30ff1cfea0aa"></a>

## finishReason

[electron/ai/llm-front-office/contracts.cjs:59](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L59>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: finishReason ([electron/ai/llm-front-office/contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/contracts.cjs](<contracts.cjs.md#s-934dd548400ceb66>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- z.enum — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:59](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L59>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:10](<../../../../../../../electron/ai/front-office.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-5c1381555c404f00"></a>

## callSchema

[electron/ai/llm-front-office/contracts.cjs:70](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L70>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/contracts.cjs](<contracts.cjs.md#s-934dd548400ceb66>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 32.

- z.object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:70](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L70>)
- count.positive — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:71](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L71>)
- z.iso.datetime().optional — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:72](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L72>)
- z.iso.datetime — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:72](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L72>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:73](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L73>)
- identity.nullable — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:80](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L80>)
- providerId.nullable — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:81](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L81>)
- count.nullable — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:82](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L82>)
- 24 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:10](<../../../../../../../electron/ai/front-office.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-296260573a415770"></a>

## traceSchema

[electron/ai/llm-front-office/contracts.cjs:108](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L108>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/contracts.cjs](<contracts.cjs.md#s-934dd548400ceb66>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 80.

- z.object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:108](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L108>)
- z .array( z.object({ requestId: identity, timestamp: z.iso.datetime(), stage: stageName, elapsedMs: duration, status: z.enum(&#91;"ok", "error", "skipped", "bypassed", "buffered"&#93;), pr — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:109](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L109>)
- z .array( z.object({ requestId: identity, timestamp: z.iso.datetime(), stage: stageName, elapsedMs: duration, status: z.enum(&#91;"ok", "error", "skipped", "bypassed", "buffered"&#93;), pr — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:109](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L109>)
- z .array — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:109](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L109>)
- z.object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:111](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L111>)
- z.iso.datetime — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:113](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L113>)
- z.enum — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:116](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L116>)
- providerId.optional — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:117](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L117>)
- 72 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:10](<../../../../../../../electron/ai/front-office.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-a8858a20a10ec890"></a>

## validateTrace

[electron/ai/llm-front-office/contracts.cjs:206](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L206>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Validate/clone a trace for export; reject malformed values without input leaks.

Purpose evidence: jsdoc.

Exported as: validateTrace ([electron/ai/llm-front-office/contracts.cjs:1](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/contracts.cjs](<contracts.cjs.md#s-934dd548400ceb66>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@386:98&gt;.&lt;anonymous@407:19&gt;](<../front-office.test.cjs.md#s-f2fa67bdef4680b9>) — [electron/ai/front-office.test.cjs:407](<../../../../../../../electron/ai/front-office.test.cjs#L407>)
- [validateExperimentalRun](<conversation-manager.cjs.md#s-ffc7705100d0fefb>) — [electron/ai/llm-front-office/conversation-manager.cjs:123](<../../../../../../../electron/ai/llm-front-office/conversation-manager.cjs#L123>)
- [createBaselineObserver.snapshot](<observability.cjs.md#s-2f4730d6e87ce485>) — [electron/ai/llm-front-office/observability.cjs:322](<../../../../../../../electron/ai/llm-front-office/observability.cjs#L322>)
- [FrontOfficeService.run.trace](<service.cjs.md#s-556246f1cd0e8466>) — [electron/ai/llm-front-office/service.cjs:281](<../../../../../../../electron/ai/llm-front-office/service.cjs#L281>)
- [recordTrace](<telemetry-store.cjs.md#s-42b043391a6c38c4>) — [electron/ai/llm-front-office/telemetry-store.cjs:40](<../../../../../../../electron/ai/llm-front-office/telemetry-store.cjs#L40>)

Unresolved / external call sites: 2.

- traceSchema.safeParse — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:207](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L207>)
- TypeError — external-or-dynamic-dispatch; [electron/ai/llm-front-office/contracts.cjs:209](<../../../../../../../electron/ai/llm-front-office/contracts.cjs#L209>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office.test.cjs:407](<../../../../../../../electron/ai/front-office.test.cjs#L407>) — static-call-site; coverage not established.
- [electron/ai/front-office.test.cjs:10](<../../../../../../../electron/ai/front-office.test.cjs#L10>) — file-import-only; coverage not established.
