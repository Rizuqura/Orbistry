# electron/ai/credential-store.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/credential-store.cjs:1](<../../../../../../electron/ai/credential-store.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/credential-store.cjs](<credential-store.cjs.md#s-51bf10c31e41a7f0>) (Module)
- [schema](<credential-store.cjs.md#s-d39f126b5538dbe2>) (SchemaBinding)
- [validateCredentialState](<credential-store.cjs.md#s-f2db6513cc372f52>) (FunctionDeclaration)
- [CredentialStore](<credential-store.cjs.md#s-90257819fdcf0fd6>) (ClassDeclaration)
- [CredentialStore.constructor](<credential-store.cjs.md#s-c8610b530f19a67b>) (Constructor)
- [CredentialStore.available](<credential-store.cjs.md#s-3fa1acaec69ee0d3>) (MethodDeclaration)
- [CredentialStore.read](<credential-store.cjs.md#s-d15c3cc48d069164>) (MethodDeclaration)
- [CredentialStore.status](<credential-store.cjs.md#s-2729a6958f70a533>) (MethodDeclaration)
- [CredentialStore.save](<credential-store.cjs.md#s-b962c2d90c2198fb>) (MethodDeclaration)
- [CredentialStore.save.&lt;anonymous@96:23&gt;](<credential-store.cjs.md#s-7e005c5bc580859a>) (ArrowFunction)
- [CredentialStore.remove](<credential-store.cjs.md#s-1a9435f7bfed95f1>) (MethodDeclaration)
- [CredentialStore.remove.&lt;anonymous@119:23&gt;](<credential-store.cjs.md#s-ae8ee4c2eb5cdd01>) (ArrowFunction)
- [CredentialStore.get](<credential-store.cjs.md#s-0c057213a95118a0>) (MethodDeclaration)

<a id="s-51bf10c31e41a7f0"></a>

## electron/ai/credential-store.cjs

[electron/ai/credential-store.cjs:1](<../../../../../../electron/ai/credential-store.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [electron/ai/credential-store.cjs:1](<../../../../../../electron/ai/credential-store.cjs#L1>)
- require — module-loader; [electron/ai/credential-store.cjs:2](<../../../../../../electron/ai/credential-store.cjs#L2>)
- require — module-loader; [electron/ai/credential-store.cjs:9](<../../../../../../electron/ai/credential-store.cjs#L9>)
- require — module-loader; [electron/ai/credential-store.cjs:10](<../../../../../../electron/ai/credential-store.cjs#L10>)

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:6](<../../../../../../electron/ai/credential-store.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-runtime-live-main.cjs:15](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L15>) — file-import-only; coverage not established.

<a id="s-d39f126b5538dbe2"></a>

## schema

[electron/ai/credential-store.cjs:11](<../../../../../../electron/ai/credential-store.cjs#L11>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/credential-store.cjs](<credential-store.cjs.md#s-51bf10c31e41a7f0>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 28.

- z .object({ schemaVersion: z.literal(1), gemini: z .string() .max(16384) .regex(/^&#91;A-Za-z0-9+/&#93;+={0,2}$/) .nullable(), }) .extend({ huggingface: z .string() .max(16384) .regex(/^&#91;A — external-or-dynamic-dispatch; [electron/ai/credential-store.cjs:11](<../../../../../../electron/ai/credential-store.cjs#L11>)
- z .object({ schemaVersion: z.literal(1), gemini: z .string() .max(16384) .regex(/^&#91;A-Za-z0-9+/&#93;+={0,2}$/) .nullable(), }) .extend — external-or-dynamic-dispatch; [electron/ai/credential-store.cjs:11](<../../../../../../electron/ai/credential-store.cjs#L11>)
- z .object — external-or-dynamic-dispatch; [electron/ai/credential-store.cjs:11](<../../../../../../electron/ai/credential-store.cjs#L11>)
- z.literal — external-or-dynamic-dispatch; [electron/ai/credential-store.cjs:13](<../../../../../../electron/ai/credential-store.cjs#L13>)
- z .string() .max(16384) .regex(/^&#91;A-Za-z0-9+/&#93;+={0,2}$/) .nullable — external-or-dynamic-dispatch; [electron/ai/credential-store.cjs:14](<../../../../../../electron/ai/credential-store.cjs#L14>)
- z .string() .max(16384) .regex — external-or-dynamic-dispatch; [electron/ai/credential-store.cjs:14](<../../../../../../electron/ai/credential-store.cjs#L14>)
- z .string() .max — external-or-dynamic-dispatch; [electron/ai/credential-store.cjs:14](<../../../../../../electron/ai/credential-store.cjs#L14>)
- z .string — external-or-dynamic-dispatch; [electron/ai/credential-store.cjs:14](<../../../../../../electron/ai/credential-store.cjs#L14>)
- 20 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:6](<../../../../../../electron/ai/credential-store.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-runtime-live-main.cjs:15](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L15>) — file-import-only; coverage not established.

<a id="s-f2db6513cc372f52"></a>

## validateCredentialState

[electron/ai/credential-store.cjs:49](<../../../../../../electron/ai/credential-store.cjs#L49>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Validates encrypted storage metadata without decrypting or exposing invalid field values. Used by normal reads and reset preflight; malformed state throws a safe storage error.

Purpose evidence: jsdoc.

Exported as: validateCredentialState ([electron/ai/credential-store.cjs:1](<../../../../../../electron/ai/credential-store.cjs#L1>)).

Lexical owner: [electron/ai/credential-store.cjs](<credential-store.cjs.md#s-51bf10c31e41a7f0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/credential-store.cjs:52](<../../../../../../electron/ai/credential-store.cjs#L52>)

**Called by (statically resolved):**

- [resetBackend](<backend-reset.cjs.md#s-8923e8f07754093d>) — [electron/ai/backend-reset.cjs:106](<../../../../../../electron/ai/backend-reset.cjs#L106>)

Unresolved / external call sites: 1.

- schema.safeParse — external-or-dynamic-dispatch; [electron/ai/credential-store.cjs:50](<../../../../../../electron/ai/credential-store.cjs#L50>)

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:6](<../../../../../../electron/ai/credential-store.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-runtime-live-main.cjs:15](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L15>) — file-import-only; coverage not established.

<a id="s-90257819fdcf0fd6"></a>

## CredentialStore

[electron/ai/credential-store.cjs:59](<../../../../../../electron/ai/credential-store.cjs#L59>) · ClassDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: CredentialStore ([electron/ai/credential-store.cjs:1](<../../../../../../electron/ai/credential-store.cjs#L1>)).

Lexical owner: [electron/ai/credential-store.cjs](<credential-store.cjs.md#s-51bf10c31e41a7f0>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:6](<../../../../../../electron/ai/credential-store.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-runtime-live-main.cjs:15](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L15>) — file-import-only; coverage not established.

<a id="s-c8610b530f19a67b"></a>

## CredentialStore.constructor

[electron/ai/credential-store.cjs:60](<../../../../../../electron/ai/credential-store.cjs#L60>) · Constructor · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CredentialStore](<credential-store.cjs.md#s-90257819fdcf0fd6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |
| safeStorage | any | compiler-inferred | required |

Returns: CredentialStore (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [serialQueue](<../core/persistence/json-store.cjs.md#s-a8a605453bc9a09a>) — [electron/ai/credential-store.cjs:63](<../../../../../../electron/ai/credential-store.cjs#L63>)

**Called by (statically resolved):**

- [&lt;anonymous@9:103&gt;](<credential-store.test.cjs.md#s-27d516b1dd4e29d8>) — [electron/ai/credential-store.test.cjs:19](<../../../../../../electron/ai/credential-store.test.cjs#L19>)
- [&lt;anonymous@9:103&gt;](<credential-store.test.cjs.md#s-27d516b1dd4e29d8>) — [electron/ai/credential-store.test.cjs:30](<../../../../../../electron/ai/credential-store.test.cjs#L30>)
- [&lt;anonymous@38:111&gt;](<credential-store.test.cjs.md#s-41d9b576a3217edf>) — [electron/ai/credential-store.test.cjs:46](<../../../../../../electron/ai/credential-store.test.cjs#L46>)
- [&lt;anonymous@38:111&gt;](<credential-store.test.cjs.md#s-41d9b576a3217edf>) — [electron/ai/credential-store.test.cjs:57](<../../../../../../electron/ai/credential-store.test.cjs#L57>)
- [&lt;anonymous@65:90&gt;](<credential-store.test.cjs.md#s-41942de9f72c69b3>) — [electron/ai/credential-store.test.cjs:73](<../../../../../../electron/ai/credential-store.test.cjs#L73>)
- [&lt;anonymous@65:90&gt;](<credential-store.test.cjs.md#s-41942de9f72c69b3>) — [electron/ai/credential-store.test.cjs:77](<../../../../../../electron/ai/credential-store.test.cjs#L77>)
- [&lt;anonymous@117:111&gt;](<credential-store.test.cjs.md#s-71d4ff2d5e585ea6>) — [electron/ai/credential-store.test.cjs:127](<../../../../../../electron/ai/credential-store.test.cjs#L127>)
- [&lt;anonymous@117:111&gt;](<credential-store.test.cjs.md#s-71d4ff2d5e585ea6>) — [electron/ai/credential-store.test.cjs:137](<../../../../../../electron/ai/credential-store.test.cjs#L137>)
- [&lt;anonymous@163:22&gt;](<../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:225](<../../../../../../electron/main.cjs#L225>)
- [scripts/nvidia-thinking-probe-main.cjs](<../../scripts/nvidia-thinking-probe-main.cjs.md#s-5c41525186c69ba8>) — [scripts/nvidia-thinking-probe-main.cjs:49](<../../../../../../scripts/nvidia-thinking-probe-main.cjs#L49>)
- [scripts/provider-rca-main.cjs](<../../scripts/provider-rca-main.cjs.md#s-b21a107abae20886>) — [scripts/provider-rca-main.cjs:51](<../../../../../../scripts/provider-rca-main.cjs#L51>)

Unresolved / external call sites: 1.

- path.join — external-or-dynamic-dispatch; [electron/ai/credential-store.cjs:61](<../../../../../../electron/ai/credential-store.cjs#L61>)

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:19](<../../../../../../electron/ai/credential-store.test.cjs#L19>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:30](<../../../../../../electron/ai/credential-store.test.cjs#L30>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:46](<../../../../../../electron/ai/credential-store.test.cjs#L46>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:57](<../../../../../../electron/ai/credential-store.test.cjs#L57>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:73](<../../../../../../electron/ai/credential-store.test.cjs#L73>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:77](<../../../../../../electron/ai/credential-store.test.cjs#L77>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:127](<../../../../../../electron/ai/credential-store.test.cjs#L127>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:137](<../../../../../../electron/ai/credential-store.test.cjs#L137>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:6](<../../../../../../electron/ai/credential-store.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-runtime-live-main.cjs:15](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L15>) — file-import-only; coverage not established.

<a id="s-3fa1acaec69ee0d3"></a>

## CredentialStore.available

[electron/ai/credential-store.cjs:65](<../../../../../../electron/ai/credential-store.cjs#L65>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CredentialStore](<credential-store.cjs.md#s-90257819fdcf0fd6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [CredentialStore.status](<credential-store.cjs.md#s-2729a6958f70a533>) — [electron/ai/credential-store.cjs:91](<../../../../../../electron/ai/credential-store.cjs#L91>)
- [CredentialStore.save.&lt;anonymous@96:23&gt;](<credential-store.cjs.md#s-7e005c5bc580859a>) — [electron/ai/credential-store.cjs:97](<../../../../../../electron/ai/credential-store.cjs#L97>)
- [CredentialStore.get](<credential-store.cjs.md#s-0c057213a95118a0>) — [electron/ai/credential-store.cjs:136](<../../../../../../electron/ai/credential-store.cjs#L136>)

Unresolved / external call sites: 2.

- this.encryption.isEncryptionAvailable — external-or-dynamic-dispatch; [electron/ai/credential-store.cjs:67](<../../../../../../electron/ai/credential-store.cjs#L67>)
- this.encryption.getSelectedStorageBackend — external-or-dynamic-dispatch; [electron/ai/credential-store.cjs:68](<../../../../../../electron/ai/credential-store.cjs#L68>)

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:6](<../../../../../../electron/ai/credential-store.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-runtime-live-main.cjs:15](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L15>) — file-import-only; coverage not established.

<a id="s-d15c3cc48d069164"></a>

## CredentialStore.read

[electron/ai/credential-store.cjs:72](<../../../../../../electron/ai/credential-store.cjs#L72>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Reads and validates encrypted configuration without decrypting keys; missing state gets an empty schema and malformed storage produces a content-free error.

Purpose evidence: jsdoc.

Lexical owner: [CredentialStore](<credential-store.cjs.md#s-90257819fdcf0fd6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readJson](<../core/persistence/json-store.cjs.md#s-7f9e3b493f3ab942>) — [electron/ai/credential-store.cjs:74](<../../../../../../electron/ai/credential-store.cjs#L74>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/credential-store.cjs:80](<../../../../../../electron/ai/credential-store.cjs#L80>)

**Called by (statically resolved):**

- [CredentialStore.status](<credential-store.cjs.md#s-2729a6958f70a533>) — [electron/ai/credential-store.cjs:88](<../../../../../../electron/ai/credential-store.cjs#L88>)
- [CredentialStore.save.&lt;anonymous@96:23&gt;](<credential-store.cjs.md#s-7e005c5bc580859a>) — [electron/ai/credential-store.cjs:102](<../../../../../../electron/ai/credential-store.cjs#L102>)
- [CredentialStore.remove.&lt;anonymous@119:23&gt;](<credential-store.cjs.md#s-ae8ee4c2eb5cdd01>) — [electron/ai/credential-store.cjs:120](<../../../../../../electron/ai/credential-store.cjs#L120>)
- [CredentialStore.get](<credential-store.cjs.md#s-0c057213a95118a0>) — [electron/ai/credential-store.cjs:130](<../../../../../../electron/ai/credential-store.cjs#L130>)
- [&lt;anonymous@117:111&gt;](<credential-store.test.cjs.md#s-71d4ff2d5e585ea6>) — [electron/ai/credential-store.test.cjs:158](<../../../../../../electron/ai/credential-store.test.cjs#L158>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:158](<../../../../../../electron/ai/credential-store.test.cjs#L158>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:6](<../../../../../../electron/ai/credential-store.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-runtime-live-main.cjs:15](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L15>) — file-import-only; coverage not established.

<a id="s-2729a6958f70a533"></a>

## CredentialStore.status

[electron/ai/credential-store.cjs:86](<../../../../../../electron/ai/credential-store.cjs#L86>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CredentialStore](<credential-store.cjs.md#s-90257819fdcf0fd6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| providerId | string | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/credential-store.cjs:87](<../../../../../../electron/ai/credential-store.cjs#L87>)
- [CredentialStore.read](<credential-store.cjs.md#s-d15c3cc48d069164>) — [electron/ai/credential-store.cjs:88](<../../../../../../electron/ai/credential-store.cjs#L88>)
- [CredentialStore.available](<credential-store.cjs.md#s-3fa1acaec69ee0d3>) — [electron/ai/credential-store.cjs:91](<../../../../../../electron/ai/credential-store.cjs#L91>)

**Called by (statically resolved):**

- [CredentialStore.save.&lt;anonymous@96:23&gt;](<credential-store.cjs.md#s-7e005c5bc580859a>) — [electron/ai/credential-store.cjs:114](<../../../../../../electron/ai/credential-store.cjs#L114>)
- [CredentialStore.remove.&lt;anonymous@119:23&gt;](<credential-store.cjs.md#s-ae8ee4c2eb5cdd01>) — [electron/ai/credential-store.cjs:123](<../../../../../../electron/ai/credential-store.cjs#L123>)
- [&lt;anonymous@9:103&gt;](<credential-store.test.cjs.md#s-27d516b1dd4e29d8>) — [electron/ai/credential-store.test.cjs:35](<../../../../../../electron/ai/credential-store.test.cjs#L35>)
- [&lt;anonymous@65:90&gt;](<credential-store.test.cjs.md#s-41942de9f72c69b3>) — [electron/ai/credential-store.test.cjs:75](<../../../../../../electron/ai/credential-store.test.cjs#L75>)
- [&lt;anonymous@117:111&gt;](<credential-store.test.cjs.md#s-71d4ff2d5e585ea6>) — [electron/ai/credential-store.test.cjs:128](<../../../../../../electron/ai/credential-store.test.cjs#L128>)
- [&lt;anonymous@117:111&gt;](<credential-store.test.cjs.md#s-71d4ff2d5e585ea6>) — [electron/ai/credential-store.test.cjs:156](<../../../../../../electron/ai/credential-store.test.cjs#L156>)
- [discover](<../../scripts/provider-rca-main.cjs.md#s-e8bb39151ce98975>) — [scripts/provider-rca-main.cjs:114](<../../../../../../scripts/provider-rca-main.cjs#L114>)

Unresolved / external call sites: 1.

- Boolean — external-or-dynamic-dispatch; [electron/ai/credential-store.cjs:90](<../../../../../../electron/ai/credential-store.cjs#L90>)

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:35](<../../../../../../electron/ai/credential-store.test.cjs#L35>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:75](<../../../../../../electron/ai/credential-store.test.cjs#L75>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:128](<../../../../../../electron/ai/credential-store.test.cjs#L128>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:156](<../../../../../../electron/ai/credential-store.test.cjs#L156>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:6](<../../../../../../electron/ai/credential-store.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-runtime-live-main.cjs:15](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L15>) — file-import-only; coverage not established.

<a id="s-b962c2d90c2198fb"></a>

## CredentialStore.save

[electron/ai/credential-store.cjs:94](<../../../../../../electron/ai/credential-store.cjs#L94>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CredentialStore](<credential-store.cjs.md#s-90257819fdcf0fd6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parseCredential](<schemas.cjs.md#s-b69a42e30e64ae53>) — [electron/ai/credential-store.cjs:95](<../../../../../../electron/ai/credential-store.cjs#L95>)

**Called by (statically resolved):**

- [&lt;anonymous@9:103&gt;](<credential-store.test.cjs.md#s-27d516b1dd4e29d8>) — [electron/ai/credential-store.test.cjs:20](<../../../../../../electron/ai/credential-store.test.cjs#L20>)
- [&lt;anonymous@9:103&gt;](<credential-store.test.cjs.md#s-27d516b1dd4e29d8>) — [electron/ai/credential-store.test.cjs:24](<../../../../../../electron/ai/credential-store.test.cjs#L24>)
- [&lt;anonymous@38:111&gt;](<credential-store.test.cjs.md#s-41d9b576a3217edf>) — [electron/ai/credential-store.test.cjs:47](<../../../../../../electron/ai/credential-store.test.cjs#L47>)
- [&lt;anonymous@38:111&gt;](<credential-store.test.cjs.md#s-41d9b576a3217edf>) — [electron/ai/credential-store.test.cjs:48](<../../../../../../electron/ai/credential-store.test.cjs#L48>)
- [&lt;anonymous@38:111&gt;](<credential-store.test.cjs.md#s-41d9b576a3217edf>) — [electron/ai/credential-store.test.cjs:49](<../../../../../../electron/ai/credential-store.test.cjs#L49>)
- [&lt;anonymous@65:90&gt;](<credential-store.test.cjs.md#s-41942de9f72c69b3>) — [electron/ai/credential-store.test.cjs:74](<../../../../../../electron/ai/credential-store.test.cjs#L74>)
- [&lt;anonymous@65:90&gt;](<credential-store.test.cjs.md#s-41942de9f72c69b3>) — [electron/ai/credential-store.test.cjs:76](<../../../../../../electron/ai/credential-store.test.cjs#L76>)
- [&lt;anonymous@117:111&gt;](<credential-store.test.cjs.md#s-71d4ff2d5e585ea6>) — [electron/ai/credential-store.test.cjs:131](<../../../../../../electron/ai/credential-store.test.cjs#L131>)
- [&lt;anonymous@117:111&gt;.&lt;anonymous@141:5&gt;](<credential-store.test.cjs.md#s-2577029ac0180e45>) — [electron/ai/credential-store.test.cjs:141](<../../../../../../electron/ai/credential-store.test.cjs#L141>)
- [&lt;anonymous@117:111&gt;](<credential-store.test.cjs.md#s-71d4ff2d5e585ea6>) — [electron/ai/credential-store.test.cjs:149](<../../../../../../electron/ai/credential-store.test.cjs#L149>)
- [&lt;anonymous@117:111&gt;](<credential-store.test.cjs.md#s-71d4ff2d5e585ea6>) — [electron/ai/credential-store.test.cjs:163](<../../../../../../electron/ai/credential-store.test.cjs#L163>)

Unresolved / external call sites: 1.

- this.queue — signature-only-candidate; [electron/ai/credential-store.cjs:96](<../../../../../../electron/ai/credential-store.cjs#L96>)

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:20](<../../../../../../electron/ai/credential-store.test.cjs#L20>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:24](<../../../../../../electron/ai/credential-store.test.cjs#L24>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:47](<../../../../../../electron/ai/credential-store.test.cjs#L47>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:48](<../../../../../../electron/ai/credential-store.test.cjs#L48>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:49](<../../../../../../electron/ai/credential-store.test.cjs#L49>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:74](<../../../../../../electron/ai/credential-store.test.cjs#L74>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:76](<../../../../../../electron/ai/credential-store.test.cjs#L76>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:131](<../../../../../../electron/ai/credential-store.test.cjs#L131>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:141](<../../../../../../electron/ai/credential-store.test.cjs#L141>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:149](<../../../../../../electron/ai/credential-store.test.cjs#L149>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:163](<../../../../../../electron/ai/credential-store.test.cjs#L163>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:6](<../../../../../../electron/ai/credential-store.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-runtime-live-main.cjs:15](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L15>) — file-import-only; coverage not established.

<a id="s-7e005c5bc580859a"></a>

## CredentialStore.save.&lt;anonymous@96:23&gt;

[electron/ai/credential-store.cjs:96](<../../../../../../electron/ai/credential-store.cjs#L96>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CredentialStore.save](<credential-store.cjs.md#s-b962c2d90c2198fb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [CredentialStore.available](<credential-store.cjs.md#s-3fa1acaec69ee0d3>) — [electron/ai/credential-store.cjs:97](<../../../../../../electron/ai/credential-store.cjs#L97>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/credential-store.cjs:98](<../../../../../../electron/ai/credential-store.cjs#L98>)
- [CredentialStore.read](<credential-store.cjs.md#s-d15c3cc48d069164>) — [electron/ai/credential-store.cjs:102](<../../../../../../electron/ai/credential-store.cjs#L102>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/credential-store.cjs:108](<../../../../../../electron/ai/credential-store.cjs#L108>)
- [writeJson](<../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/credential-store.cjs:113](<../../../../../../electron/ai/credential-store.cjs#L113>)
- [CredentialStore.status](<credential-store.cjs.md#s-2729a6958f70a533>) — [electron/ai/credential-store.cjs:114](<../../../../../../electron/ai/credential-store.cjs#L114>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- this.encryption .encryptString(apiKey) .toString — external-or-dynamic-dispatch; [electron/ai/credential-store.cjs:104](<../../../../../../electron/ai/credential-store.cjs#L104>)
- this.encryption .encryptString — external-or-dynamic-dispatch; [electron/ai/credential-store.cjs:104](<../../../../../../electron/ai/credential-store.cjs#L104>)

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:6](<../../../../../../electron/ai/credential-store.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-runtime-live-main.cjs:15](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L15>) — file-import-only; coverage not established.

<a id="s-1a9435f7bfed95f1"></a>

## CredentialStore.remove

[electron/ai/credential-store.cjs:117](<../../../../../../electron/ai/credential-store.cjs#L117>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CredentialStore](<credential-store.cjs.md#s-90257819fdcf0fd6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/credential-store.cjs:118](<../../../../../../electron/ai/credential-store.cjs#L118>)

**Called by (statically resolved):**

- [&lt;anonymous@9:103&gt;](<credential-store.test.cjs.md#s-27d516b1dd4e29d8>) — [electron/ai/credential-store.test.cjs:33](<../../../../../../electron/ai/credential-store.test.cjs#L33>)
- [&lt;anonymous@38:111&gt;](<credential-store.test.cjs.md#s-41d9b576a3217edf>) — [electron/ai/credential-store.test.cjs:59](<../../../../../../electron/ai/credential-store.test.cjs#L59>)
- [&lt;anonymous@65:90&gt;](<credential-store.test.cjs.md#s-41942de9f72c69b3>) — [electron/ai/credential-store.test.cjs:84](<../../../../../../electron/ai/credential-store.test.cjs#L84>)
- [&lt;anonymous@117:111&gt;](<credential-store.test.cjs.md#s-71d4ff2d5e585ea6>) — [electron/ai/credential-store.test.cjs:155](<../../../../../../electron/ai/credential-store.test.cjs#L155>)

Unresolved / external call sites: 1.

- this.queue — signature-only-candidate; [electron/ai/credential-store.cjs:119](<../../../../../../electron/ai/credential-store.cjs#L119>)

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:33](<../../../../../../electron/ai/credential-store.test.cjs#L33>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:59](<../../../../../../electron/ai/credential-store.test.cjs#L59>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:84](<../../../../../../electron/ai/credential-store.test.cjs#L84>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:155](<../../../../../../electron/ai/credential-store.test.cjs#L155>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:6](<../../../../../../electron/ai/credential-store.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-runtime-live-main.cjs:15](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L15>) — file-import-only; coverage not established.

<a id="s-ae8ee4c2eb5cdd01"></a>

## CredentialStore.remove.&lt;anonymous@119:23&gt;

[electron/ai/credential-store.cjs:119](<../../../../../../electron/ai/credential-store.cjs#L119>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [CredentialStore.remove](<credential-store.cjs.md#s-1a9435f7bfed95f1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [CredentialStore.read](<credential-store.cjs.md#s-d15c3cc48d069164>) — [electron/ai/credential-store.cjs:120](<../../../../../../electron/ai/credential-store.cjs#L120>)
- [writeJson](<../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/ai/credential-store.cjs:122](<../../../../../../electron/ai/credential-store.cjs#L122>)
- [CredentialStore.status](<credential-store.cjs.md#s-2729a6958f70a533>) — [electron/ai/credential-store.cjs:123](<../../../../../../electron/ai/credential-store.cjs#L123>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:6](<../../../../../../electron/ai/credential-store.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-runtime-live-main.cjs:15](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L15>) — file-import-only; coverage not established.

<a id="s-0c057213a95118a0"></a>

## CredentialStore.get

[electron/ai/credential-store.cjs:128](<../../../../../../electron/ai/credential-store.cjs#L128>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Decrypts only the selected provider key through OS storage; missing or invalid credentials fail without returning ciphertext or parser details.

Purpose evidence: jsdoc.

Lexical owner: [CredentialStore](<credential-store.cjs.md#s-90257819fdcf0fd6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| providerId | string | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/credential-store.cjs:129](<../../../../../../electron/ai/credential-store.cjs#L129>)
- [CredentialStore.read](<credential-store.cjs.md#s-d15c3cc48d069164>) — [electron/ai/credential-store.cjs:130](<../../../../../../electron/ai/credential-store.cjs#L130>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/credential-store.cjs:132](<../../../../../../electron/ai/credential-store.cjs#L132>)
- [CredentialStore.available](<credential-store.cjs.md#s-3fa1acaec69ee0d3>) — [electron/ai/credential-store.cjs:136](<../../../../../../electron/ai/credential-store.cjs#L136>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/credential-store.cjs:137](<../../../../../../electron/ai/credential-store.cjs#L137>)
- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/credential-store.cjs:142](<../../../../../../electron/ai/credential-store.cjs#L142>)
- [ModelRuntimeError.constructor](<../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/credential-store.cjs:149](<../../../../../../electron/ai/credential-store.cjs#L149>)

**Called by (statically resolved):**

- [&lt;anonymous@9:103&gt;](<credential-store.test.cjs.md#s-27d516b1dd4e29d8>) — [electron/ai/credential-store.test.cjs:30](<../../../../../../electron/ai/credential-store.test.cjs#L30>)
- [&lt;anonymous@9:103&gt;](<credential-store.test.cjs.md#s-27d516b1dd4e29d8>) — [electron/ai/credential-store.test.cjs:34](<../../../../../../electron/ai/credential-store.test.cjs#L34>)
- [&lt;anonymous@38:111&gt;](<credential-store.test.cjs.md#s-41d9b576a3217edf>) — [electron/ai/credential-store.test.cjs:58](<../../../../../../electron/ai/credential-store.test.cjs#L58>)
- [&lt;anonymous@38:111&gt;](<credential-store.test.cjs.md#s-41d9b576a3217edf>) — [electron/ai/credential-store.test.cjs:60](<../../../../../../electron/ai/credential-store.test.cjs#L60>)
- [&lt;anonymous@38:111&gt;](<credential-store.test.cjs.md#s-41d9b576a3217edf>) — [electron/ai/credential-store.test.cjs:61](<../../../../../../electron/ai/credential-store.test.cjs#L61>)
- [&lt;anonymous@38:111&gt;](<credential-store.test.cjs.md#s-41d9b576a3217edf>) — [electron/ai/credential-store.test.cjs:62](<../../../../../../electron/ai/credential-store.test.cjs#L62>)
- [&lt;anonymous@65:90&gt;](<credential-store.test.cjs.md#s-41942de9f72c69b3>) — [electron/ai/credential-store.test.cjs:78](<../../../../../../electron/ai/credential-store.test.cjs#L78>)
- [&lt;anonymous@65:90&gt;](<credential-store.test.cjs.md#s-41942de9f72c69b3>) — [electron/ai/credential-store.test.cjs:79](<../../../../../../electron/ai/credential-store.test.cjs#L79>)
- [&lt;anonymous@65:90&gt;](<credential-store.test.cjs.md#s-41942de9f72c69b3>) — [electron/ai/credential-store.test.cjs:85](<../../../../../../electron/ai/credential-store.test.cjs#L85>)
- [&lt;anonymous@65:90&gt;](<credential-store.test.cjs.md#s-41942de9f72c69b3>) — [electron/ai/credential-store.test.cjs:86](<../../../../../../electron/ai/credential-store.test.cjs#L86>)
- [&lt;anonymous@117:111&gt;](<credential-store.test.cjs.md#s-71d4ff2d5e585ea6>) — [electron/ai/credential-store.test.cjs:129](<../../../../../../electron/ai/credential-store.test.cjs#L129>)
- [&lt;anonymous@117:111&gt;](<credential-store.test.cjs.md#s-71d4ff2d5e585ea6>) — [electron/ai/credential-store.test.cjs:137](<../../../../../../electron/ai/credential-store.test.cjs#L137>)
- [&lt;anonymous@117:111&gt;](<credential-store.test.cjs.md#s-71d4ff2d5e585ea6>) — [electron/ai/credential-store.test.cjs:154](<../../../../../../electron/ai/credential-store.test.cjs#L154>)
- [discover](<../../scripts/provider-rca-main.cjs.md#s-e8bb39151ce98975>) — [scripts/provider-rca-main.cjs:125](<../../../../../../scripts/provider-rca-main.cjs#L125>)

Unresolved / external call sites: 2.

- this.encryption.decryptString — external-or-dynamic-dispatch; [electron/ai/credential-store.cjs:144](<../../../../../../electron/ai/credential-store.cjs#L144>)
- Buffer.from — external-or-dynamic-dispatch; [electron/ai/credential-store.cjs:145](<../../../../../../electron/ai/credential-store.cjs#L145>)

**Related tests / acceptance harnesses:**

- [electron/ai/credential-store.test.cjs:30](<../../../../../../electron/ai/credential-store.test.cjs#L30>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:34](<../../../../../../electron/ai/credential-store.test.cjs#L34>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:58](<../../../../../../electron/ai/credential-store.test.cjs#L58>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:60](<../../../../../../electron/ai/credential-store.test.cjs#L60>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:61](<../../../../../../electron/ai/credential-store.test.cjs#L61>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:62](<../../../../../../electron/ai/credential-store.test.cjs#L62>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:78](<../../../../../../electron/ai/credential-store.test.cjs#L78>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:79](<../../../../../../electron/ai/credential-store.test.cjs#L79>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:85](<../../../../../../electron/ai/credential-store.test.cjs#L85>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:86](<../../../../../../electron/ai/credential-store.test.cjs#L86>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:129](<../../../../../../electron/ai/credential-store.test.cjs#L129>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:137](<../../../../../../electron/ai/credential-store.test.cjs#L137>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:154](<../../../../../../electron/ai/credential-store.test.cjs#L154>) — static-call-site; coverage not established.
- [electron/ai/credential-store.test.cjs:6](<../../../../../../electron/ai/credential-store.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-entity-runtime-live-main.cjs:15](<../../../../../../scripts/acceptance/electron-entity-runtime-live-main.cjs#L15>) — file-import-only; coverage not established.
