# electron/ai/llm-front-office/model-registry.cjs: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/model-registry.cjs:1](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/model-registry.cjs](<model-registry.cjs.md#s-312a7cfb0f361981>) (Module)
- [stateSchema](<model-registry.cjs.md#s-882f0670e6e9affd>) (SchemaBinding)
- [CapabilityRegistry](<model-registry.cjs.md#s-db2a566dede6c03c>) (ClassDeclaration)
- [CapabilityRegistry.constructor](<model-registry.cjs.md#s-05871f7acb9f7959>) (Constructor)
- [CapabilityRegistry.read](<model-registry.cjs.md#s-a30997c9eee6a3a1>) (MethodDeclaration)
- [CapabilityRegistry.read.&lt;anonymous@73:40&gt;](<model-registry.cjs.md#s-a7787a82d48ee75e>) (ArrowFunction)
- [CapabilityRegistry.refresh](<model-registry.cjs.md#s-b5ae09b9bc2eb626>) (MethodDeclaration)
- [CapabilityRegistry.refresh.&lt;anonymous@83:23&gt;](<model-registry.cjs.md#s-e392906ee7d95b5b>) (ArrowFunction)
- [CapabilityRegistry.refresh.&lt;anonymous@83:23&gt;.&lt;anonymous@88:33&gt;](<model-registry.cjs.md#s-a059f73a42692736>) (ArrowFunction)
- [CapabilityRegistry.refresh.&lt;anonymous@83:23&gt;.&lt;anonymous@115:34&gt;](<model-registry.cjs.md#s-7e021d31027465dc>) (ArrowFunction)
- [CapabilityRegistry.override](<model-registry.cjs.md#s-3bb788eddaed4cfe>) (MethodDeclaration)
- [CapabilityRegistry.override.value](<model-registry.cjs.md#s-a176faa919942436>) (SchemaBinding)
- [CapabilityRegistry.override.&lt;anonymous@128:23&gt;](<model-registry.cjs.md#s-bb2cde6140d48648>) (ArrowFunction)
- [CapabilityRegistry.override.&lt;anonymous@128:23&gt;.&lt;anonymous@130:32&gt;](<model-registry.cjs.md#s-353f77b15490e0fa>) (ArrowFunction)
- [CapabilityRegistry.override.&lt;anonymous@128:23&gt;.&lt;anonymous@136:9&gt;](<model-registry.cjs.md#s-cb4ea23399f3743f>) (ArrowFunction)
- [CapabilityRegistry.addEvidence](<model-registry.cjs.md#s-91c779fdba86ae7e>) (MethodDeclaration)
- [CapabilityRegistry.addEvidence.&lt;anonymous@146:23&gt;](<model-registry.cjs.md#s-420776679b486be4>) (ArrowFunction)
- [CapabilityRegistry.addEvidence.&lt;anonymous@146:23&gt;.&lt;anonymous@150:11&gt;](<model-registry.cjs.md#s-8a11dd88224241b3>) (ArrowFunction)
- [CapabilityRegistry.favorite](<model-registry.cjs.md#s-0a3191f63f06fe0c>) (MethodDeclaration)
- [CapabilityRegistry.favorite.v](<model-registry.cjs.md#s-3a96026b496471be>) (SchemaBinding)
- [CapabilityRegistry.favorite.&lt;anonymous@169:23&gt;](<model-registry.cjs.md#s-6688ff0825b4ddae>) (ArrowFunction)
- [CapabilityRegistry.favorite.&lt;anonymous@169:23&gt;.&lt;anonymous@171:40&gt;](<model-registry.cjs.md#s-2c95bad324fc3eb7>) (ArrowFunction)
- [CapabilityRegistry.state](<model-registry.cjs.md#s-d044d93a77290e89>) (MethodDeclaration)
- [CapabilityRegistry.state.&lt;anonymous@181:38&gt;](<model-registry.cjs.md#s-bb7088d1c04d1812>) (ArrowFunction)
- [CapabilityRegistry.state.&lt;anonymous@189:36&gt;](<model-registry.cjs.md#s-f7a67ffca02c5c97>) (ArrowFunction)
- [CapabilityRegistry.state.&lt;anonymous@189:36&gt;.&lt;anonymous@191:11&gt;](<model-registry.cjs.md#s-c41861e684dce29b>) (ArrowFunction)

<a id="s-312a7cfb0f361981"></a>

## electron/ai/llm-front-office/model-registry.cjs

[electron/ai/llm-front-office/model-registry.cjs:1](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [electron/ai/llm-front-office/model-registry.cjs:5](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L5>)
- require — module-loader; [electron/ai/llm-front-office/model-registry.cjs:6](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L6>)
- require — module-loader; [electron/ai/llm-front-office/model-registry.cjs:13](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L13>)
- require — module-loader; [electron/ai/llm-front-office/model-registry.cjs:14](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L14>)
- profileSchema .pick({ logicalModelId: true, contextTokens: true, maxOutputTokens: true, inputUsdPerMillion: true, outputUsdPerMillion: true, tools: true, vision: true, structuredOu — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:15](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L15>)
- profileSchema .pick({ logicalModelId: true, contextTokens: true, maxOutputTokens: true, inputUsdPerMillion: true, outputUsdPerMillion: true, tools: true, vision: true, structuredOu — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:15](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L15>)
- profileSchema .pick — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:15](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L15>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-882f0670e6e9affd"></a>

## stateSchema

[electron/ai/llm-front-office/model-registry.cjs:31](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L31>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/llm-front-office/model-registry.cjs](<model-registry.cjs.md#s-312a7cfb0f361981>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 14.

- z .object({ schemaVersion: z.literal(1), profiles: z.array(profileSchema).max(20000), overrides: z .array( z .object({ deploymentId, patch: patchSchema, checkedAt: z.iso.datetime() — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:31](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L31>)
- z .object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:31](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L31>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:33](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L33>)
- z.array(profileSchema).max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:34](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L34>)
- z.array — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:34](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L34>)
- z .array( z .object({ deploymentId, patch: patchSchema, checkedAt: z.iso.datetime(), }) .strict(), ) .max — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:35](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L35>)
- z .array — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:35](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L35>)
- z .object({ deploymentId, patch: patchSchema, checkedAt: z.iso.datetime(), }) .strict — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:37](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L37>)
- 6 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-db2a566dede6c03c"></a>

## CapabilityRegistry

[electron/ai/llm-front-office/model-registry.cjs:63](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L63>) · ClassDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Store metadata only; credentials are queried for configured status, never copied.

Purpose evidence: jsdoc.

Exported as: CapabilityRegistry ([electron/ai/llm-front-office/model-registry.cjs:1](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/model-registry.cjs](<model-registry.cjs.md#s-312a7cfb0f361981>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-05871f7acb9f7959"></a>

## CapabilityRegistry.constructor

[electron/ai/llm-front-office/model-registry.cjs:64](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L64>) · Constructor · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Store metadata only; credentials are queried for configured status, never copied.

Purpose evidence: jsdoc.

Lexical owner: [CapabilityRegistry](<model-registry.cjs.md#s-db2a566dede6c03c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |
| registry | any | compiler-inferred | required |
| credentials | any | compiler-inferred | required |

Returns: CapabilityRegistry (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [serialQueue](<../../core/persistence/json-store.cjs.md#s-a8a605453bc9a09a>) — [electron/ai/llm-front-office/model-registry.cjs:68](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L68>)

**Called by (statically resolved):**

- [FrontOfficeService.constructor](<service.cjs.md#s-5295f30f7c1e6f1b>) — [electron/ai/llm-front-office/service.cjs:50](<../../../../../../../electron/ai/llm-front-office/service.cjs#L50>)
- [&lt;anonymous@158:89&gt;](<../model-access.test.cjs.md#s-77007d01e6d2fabb>) — [electron/ai/model-access.test.cjs:175](<../../../../../../../electron/ai/model-access.test.cjs#L175>)
- [&lt;anonymous@158:89&gt;](<../model-access.test.cjs.md#s-77007d01e6d2fabb>) — [electron/ai/model-access.test.cjs:183](<../../../../../../../electron/ai/model-access.test.cjs#L183>)
- [main](<../../../scripts/front-office-benchmark.cjs.md#s-8f8223991922089c>) — [scripts/front-office-benchmark.cjs:147](<../../../../../../../scripts/front-office-benchmark.cjs#L147>)

Unresolved / external call sites: 1.

- path.join — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:65](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L65>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:175](<../../../../../../../electron/ai/model-access.test.cjs#L175>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:183](<../../../../../../../electron/ai/model-access.test.cjs#L183>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-a30997c9eee6a3a1"></a>

## CapabilityRegistry.read

[electron/ai/llm-front-office/model-registry.cjs:71](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L71>) · MethodDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Validate local metadata without echoing corrupt contents.

Purpose evidence: jsdoc.

Lexical owner: [CapabilityRegistry](<model-registry.cjs.md#s-db2a566dede6c03c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readJson](<../../core/persistence/json-store.cjs.md#s-7f9e3b493f3ab942>) — [electron/ai/llm-front-office/model-registry.cjs:73](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L73>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/model-registry.cjs:75](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L75>)

**Called by (statically resolved):**

- [CapabilityRegistry.refresh.&lt;anonymous@83:23&gt;](<model-registry.cjs.md#s-e392906ee7d95b5b>) — [electron/ai/llm-front-office/model-registry.cjs:113](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L113>)
- [CapabilityRegistry.override.&lt;anonymous@128:23&gt;](<model-registry.cjs.md#s-bb2cde6140d48648>) — [electron/ai/llm-front-office/model-registry.cjs:129](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L129>)
- [CapabilityRegistry.addEvidence.&lt;anonymous@146:23&gt;](<model-registry.cjs.md#s-420776679b486be4>) — [electron/ai/llm-front-office/model-registry.cjs:147](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L147>)
- [CapabilityRegistry.favorite.&lt;anonymous@169:23&gt;](<model-registry.cjs.md#s-6688ff0825b4ddae>) — [electron/ai/llm-front-office/model-registry.cjs:170](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L170>)
- [CapabilityRegistry.state](<model-registry.cjs.md#s-d044d93a77290e89>) — [electron/ai/llm-front-office/model-registry.cjs:178](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L178>)
- [&lt;anonymous@158:89&gt;](<../model-access.test.cjs.md#s-77007d01e6d2fabb>) — [electron/ai/model-access.test.cjs:177](<../../../../../../../electron/ai/model-access.test.cjs#L177>)
- [&lt;anonymous@158:89&gt;](<../model-access.test.cjs.md#s-77007d01e6d2fabb>) — [electron/ai/model-access.test.cjs:184](<../../../../../../../electron/ai/model-access.test.cjs#L184>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:177](<../../../../../../../electron/ai/model-access.test.cjs#L177>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:184](<../../../../../../../electron/ai/model-access.test.cjs#L184>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-a7787a82d48ee75e"></a>

## CapabilityRegistry.read.&lt;anonymous@73:40&gt;

[electron/ai/llm-front-office/model-registry.cjs:73](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L73>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CapabilityRegistry.read](<model-registry.cjs.md#s-a30997c9eee6a3a1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| v | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/llm-front-office/model-registry.cjs:73](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L73>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-b5ae09b9bc2eb626"></a>

## CapabilityRegistry.refresh

[electron/ai/llm-front-office/model-registry.cjs:82](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L82>) · MethodDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Refresh one explicitly selected provider; catalog availability is not inference/quota verification.

Purpose evidence: jsdoc.

Lexical owner: [CapabilityRegistry](<model-registry.cjs.md#s-db2a566dede6c03c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| providerId | any | compiler-inferred | required |
| signal | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [FrontOfficeService.refresh.&lt;anonymous@110:35&gt;](<service.cjs.md#s-f9dead8d0c8b23a5>) — [electron/ai/llm-front-office/service.cjs:110](<../../../../../../../electron/ai/llm-front-office/service.cjs#L110>)
- [&lt;anonymous@158:89&gt;](<../model-access.test.cjs.md#s-77007d01e6d2fabb>) — [electron/ai/model-access.test.cjs:176](<../../../../../../../electron/ai/model-access.test.cjs#L176>)
- [&lt;anonymous@158:89&gt;](<../model-access.test.cjs.md#s-77007d01e6d2fabb>) — [electron/ai/model-access.test.cjs:182](<../../../../../../../electron/ai/model-access.test.cjs#L182>)
- [main](<../../../scripts/front-office-benchmark.cjs.md#s-8f8223991922089c>) — [scripts/front-office-benchmark.cjs:148](<../../../../../../../scripts/front-office-benchmark.cjs#L148>)

Unresolved / external call sites: 1.

- this.queue — signature-only-candidate; [electron/ai/llm-front-office/model-registry.cjs:83](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L83>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:176](<../../../../../../../electron/ai/model-access.test.cjs#L176>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:182](<../../../../../../../electron/ai/model-access.test.cjs#L182>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-e392906ee7d95b5b"></a>

## CapabilityRegistry.refresh.&lt;anonymous@83:23&gt;

[electron/ai/llm-front-office/model-registry.cjs:83](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L83>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CapabilityRegistry.refresh](<model-registry.cjs.md#s-b5ae09b9bc2eb626>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [CapabilityRegistry.read](<model-registry.cjs.md#s-a30997c9eee6a3a1>) — [electron/ai/llm-front-office/model-registry.cjs:113](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L113>)
- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/llm-front-office/model-registry.cjs:118](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L118>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- this.registry .providerFor(providerId) .listModels — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:84](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L84>)
- this.registry .providerFor — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:84](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L84>)
- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:87](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L87>)
- Date — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:87](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L87>)
- rows.map — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:88](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L88>)
- state.profiles.filter — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:115](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L115>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-a059f73a42692736"></a>

## CapabilityRegistry.refresh.&lt;anonymous@83:23&gt;.&lt;anonymous@88:33&gt;

[electron/ai/llm-front-office/model-registry.cjs:88](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L88>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CapabilityRegistry.refresh.&lt;anonymous@83:23&gt;](<model-registry.cjs.md#s-e392906ee7d95b5b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/llm-front-office/model-registry.cjs:90](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L90>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-7e021d31027465dc"></a>

## CapabilityRegistry.refresh.&lt;anonymous@83:23&gt;.&lt;anonymous@115:34&gt;

[electron/ai/llm-front-office/model-registry.cjs:115](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L115>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CapabilityRegistry.refresh.&lt;anonymous@83:23&gt;](<model-registry.cjs.md#s-e392906ee7d95b5b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-3bb788eddaed4cfe"></a>

## CapabilityRegistry.override

[electron/ai/llm-front-office/model-registry.cjs:123](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L123>) · MethodDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Apply validated metadata overrides with local provenance; never overwrite the source catalog.

Purpose evidence: jsdoc.

Lexical owner: [CapabilityRegistry](<model-registry.cjs.md#s-db2a566dede6c03c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- this.queue — signature-only-candidate; [electron/ai/llm-front-office/model-registry.cjs:128](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L128>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-a176faa919942436"></a>

## CapabilityRegistry.override.value

[electron/ai/llm-front-office/model-registry.cjs:124](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L124>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CapabilityRegistry.override](<model-registry.cjs.md#s-3bb788eddaed4cfe>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/llm-front-office/model-registry.cjs:124](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L124>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- z.object({ deploymentId, patch: patchSchema.nullable() }).strict — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:125](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L125>)
- z.object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:125](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L125>)
- patchSchema.nullable — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:125](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L125>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-bb2cde6140d48648"></a>

## CapabilityRegistry.override.&lt;anonymous@128:23&gt;

[electron/ai/llm-front-office/model-registry.cjs:128](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L128>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CapabilityRegistry.override](<model-registry.cjs.md#s-3bb788eddaed4cfe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [CapabilityRegistry.read](<model-registry.cjs.md#s-a30997c9eee6a3a1>) — [electron/ai/llm-front-office/model-registry.cjs:129](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L129>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/model-registry.cjs:131](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L131>)
- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/llm-front-office/model-registry.cjs:140](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L140>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- state.profiles.some — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:130](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L130>)
- state.overrides.filter — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:135](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L135>)
- state.overrides.push — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:139](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L139>)
- new Date().toISOString — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:139](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L139>)
- Date — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:139](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L139>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-353f77b15490e0fa"></a>

## CapabilityRegistry.override.&lt;anonymous@128:23&gt;.&lt;anonymous@130:32&gt;

[electron/ai/llm-front-office/model-registry.cjs:130](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L130>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CapabilityRegistry.override.&lt;anonymous@128:23&gt;](<model-registry.cjs.md#s-bb2cde6140d48648>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-cb4ea23399f3743f"></a>

## CapabilityRegistry.override.&lt;anonymous@128:23&gt;.&lt;anonymous@136:9&gt;

[electron/ai/llm-front-office/model-registry.cjs:136](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L136>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CapabilityRegistry.override.&lt;anonymous@128:23&gt;](<model-registry.cjs.md#s-bb2cde6140d48648>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| o | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-91c779fdba86ae7e"></a>

## CapabilityRegistry.addEvidence

[electron/ai/llm-front-office/model-registry.cjs:144](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L144>) · MethodDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Import inspectable empirical outcomes; score provenance remains user supplied, never invented.

Purpose evidence: jsdoc.

Lexical owner: [CapabilityRegistry](<model-registry.cjs.md#s-db2a566dede6c03c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/llm-front-office/model-registry.cjs:145](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L145>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- this.queue — signature-only-candidate; [electron/ai/llm-front-office/model-registry.cjs:146](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L146>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-420776679b486be4"></a>

## CapabilityRegistry.addEvidence.&lt;anonymous@146:23&gt;

[electron/ai/llm-front-office/model-registry.cjs:146](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L146>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CapabilityRegistry.addEvidence](<model-registry.cjs.md#s-91c779fdba86ae7e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [CapabilityRegistry.read](<model-registry.cjs.md#s-a30997c9eee6a3a1>) — [electron/ai/llm-front-office/model-registry.cjs:147](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L147>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/model-registry.cjs:155](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L155>)
- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/llm-front-office/model-registry.cjs:160](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L160>)
- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/llm-front-office/model-registry.cjs:160](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L160>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- state.profiles.some — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:149](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L149>)
- state.evidence.push — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:159](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L159>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-8a11dd88224241b3"></a>

## CapabilityRegistry.addEvidence.&lt;anonymous@146:23&gt;.&lt;anonymous@150:11&gt;

[electron/ai/llm-front-office/model-registry.cjs:150](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L150>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CapabilityRegistry.addEvidence.&lt;anonymous@146:23&gt;](<model-registry.cjs.md#s-420776679b486be4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-0a3191f63f06fe0c"></a>

## CapabilityRegistry.favorite

[electron/ai/llm-front-office/model-registry.cjs:164](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L164>) · MethodDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Persist a bounded set of non-secret favorites.

Purpose evidence: jsdoc.

Lexical owner: [CapabilityRegistry](<model-registry.cjs.md#s-db2a566dede6c03c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@158:89&gt;](<../model-access.test.cjs.md#s-77007d01e6d2fabb>) — [electron/ai/model-access.test.cjs:178](<../../../../../../../electron/ai/model-access.test.cjs#L178>)

Unresolved / external call sites: 1.

- this.queue — signature-only-candidate; [electron/ai/llm-front-office/model-registry.cjs:169](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L169>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:178](<../../../../../../../electron/ai/model-access.test.cjs#L178>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-3a96026b496471be"></a>

## CapabilityRegistry.favorite.v

[electron/ai/llm-front-office/model-registry.cjs:165](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L165>) · SchemaBinding · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CapabilityRegistry.favorite](<model-registry.cjs.md#s-0a3191f63f06fe0c>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/llm-front-office/model-registry.cjs:165](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L165>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- z.object({ deploymentId, favorite: z.boolean() }).strict — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:166](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L166>)
- z.object — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:166](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L166>)
- z.boolean — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:166](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L166>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-6688ff0825b4ddae"></a>

## CapabilityRegistry.favorite.&lt;anonymous@169:23&gt;

[electron/ai/llm-front-office/model-registry.cjs:169](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L169>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CapabilityRegistry.favorite](<model-registry.cjs.md#s-0a3191f63f06fe0c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [CapabilityRegistry.read](<model-registry.cjs.md#s-a30997c9eee6a3a1>) — [electron/ai/llm-front-office/model-registry.cjs:170](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L170>)
- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/llm-front-office/model-registry.cjs:173](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L173>)
- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/llm-front-office/model-registry.cjs:173](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L173>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- s.favorites.filter — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:171](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L171>)
- s.favorites.push — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:172](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L172>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-2c95bad324fc3eb7"></a>

## CapabilityRegistry.favorite.&lt;anonymous@169:23&gt;.&lt;anonymous@171:40&gt;

[electron/ai/llm-front-office/model-registry.cjs:171](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L171>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CapabilityRegistry.favorite.&lt;anonymous@169:23&gt;](<model-registry.cjs.md#s-6688ff0825b4ddae>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-d044d93a77290e89"></a>

## CapabilityRegistry.state

[electron/ai/llm-front-office/model-registry.cjs:177](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L177>) · MethodDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Return effective profiles, independent original source and current credential status.

Purpose evidence: jsdoc.

Lexical owner: [CapabilityRegistry](<model-registry.cjs.md#s-db2a566dede6c03c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [CapabilityRegistry.read](<model-registry.cjs.md#s-a30997c9eee6a3a1>) — [electron/ai/llm-front-office/model-registry.cjs:178](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L178>)

**Called by (statically resolved):**

- [FrontOfficeService.state](<service.cjs.md#s-a7a702002917ed3c>) — [electron/ai/llm-front-office/service.cjs:86](<../../../../../../../electron/ai/llm-front-office/service.cjs#L86>)
- [FrontOfficeService.run](<service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:444](<../../../../../../../electron/ai/llm-front-office/service.cjs#L444>)
- [&lt;anonymous@158:89&gt;](<../model-access.test.cjs.md#s-77007d01e6d2fabb>) — [electron/ai/model-access.test.cjs:187](<../../../../../../../electron/ai/model-access.test.cjs#L187>)
- [main](<../../../scripts/front-office-benchmark.cjs.md#s-8f8223991922089c>) — [scripts/front-office-benchmark.cjs:149](<../../../../../../../scripts/front-office-benchmark.cjs#L149>)

Unresolved / external call sites: 4.

- Object.fromEntries — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:179](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L179>)
- Promise.all — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:180](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L180>)
- &#91;"openrouter", "nvidia"&#93;.map — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:181](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L181>)
- state.profiles.map — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:189](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L189>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:187](<../../../../../../../electron/ai/model-access.test.cjs#L187>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-bb7088d1c04d1812"></a>

## CapabilityRegistry.state.&lt;anonymous@181:38&gt;

[electron/ai/llm-front-office/model-registry.cjs:181](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L181>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CapabilityRegistry.state](<model-registry.cjs.md#s-d044d93a77290e89>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- this.credentials.status — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:183](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L183>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-f7a67ffca02c5c97"></a>

## CapabilityRegistry.state.&lt;anonymous@189:36&gt;

[electron/ai/llm-front-office/model-registry.cjs:189](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L189>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CapabilityRegistry.state](<model-registry.cjs.md#s-d044d93a77290e89>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- state.overrides.find — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:190](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L190>)
- Object.hasOwn — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:202](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L202>)
- Object.hasOwn — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:203](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L203>)
- Boolean — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:206](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L206>)
- state.favorites.includes — external-or-dynamic-dispatch; [electron/ai/llm-front-office/model-registry.cjs:207](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L207>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.

<a id="s-c41861e684dce29b"></a>

## CapabilityRegistry.state.&lt;anonymous@189:36&gt;.&lt;anonymous@191:11&gt;

[electron/ai/llm-front-office/model-registry.cjs:191](<../../../../../../../electron/ai/llm-front-office/model-registry.cjs#L191>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CapabilityRegistry.state.&lt;anonymous@189:36&gt;](<model-registry.cjs.md#s-f7a67ffca02c5c97>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| o | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:11](<../../../../../../../electron/ai/model-access.test.cjs#L11>) — file-import-only; coverage not established.
