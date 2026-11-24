# electron/ai/model-access.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/model-access.cjs:1](<../../../../../../electron/ai/model-access.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/model-access.cjs](<model-access.cjs.md#s-874296a0413b3682>) (Module)
- [connectionInput](<model-access.cjs.md#s-e79441b226980f83>) (SchemaBinding)
- [identifyProvider](<model-access.cjs.md#s-b6b34688f780a8d4>) (FunctionDeclaration)
- [ModelAccess](<model-access.cjs.md#s-0f03afb63f3f94eb>) (ClassDeclaration)
- [ModelAccess.constructor](<model-access.cjs.md#s-276a27e408455abf>) (Constructor)
- [ModelAccess.recordCheck](<model-access.cjs.md#s-ffe65cad2ea728af>) (MethodDeclaration)
- [ModelAccess.failedCheck](<model-access.cjs.md#s-a82b0b034589ad60>) (MethodDeclaration)
- [ModelAccess.clearChecks](<model-access.cjs.md#s-8dbdc4026cd7c126>) (MethodDeclaration)
- [ModelAccess.connect](<model-access.cjs.md#s-288ebd01a07b9da9>) (MethodDeclaration)
- [ModelAccess.connect.get](<model-access.cjs.md#s-7730d79055d29b39>) (ArrowFunction)
- [ModelAccess.connect.&lt;anonymous@92:47&gt;](<model-access.cjs.md#s-a774025a7c67383f>) (ArrowFunction)
- [providedPreview](<model-access.cjs.md#s-2d54b4808e467237>) (FunctionDeclaration)
- [providedPreview.&lt;anonymous@131:44&gt;](<model-access.cjs.md#s-5304dec03fe9ba46>) (ArrowFunction)
- [providedPreview.&lt;anonymous@135:7&gt;](<model-access.cjs.md#s-11a26829a41ae000>) (ArrowFunction)
- [providedPreview.&lt;anonymous@140:10&gt;](<model-access.cjs.md#s-882c1d3ebcbafc94>) (ArrowFunction)

<a id="s-874296a0413b3682"></a>

## electron/ai/model-access.cjs

[electron/ai/model-access.cjs:1](<../../../../../../electron/ai/model-access.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [electron/ai/model-access.cjs:3](<../../../../../../electron/ai/model-access.cjs#L3>)
- require — module-loader; [electron/ai/model-access.cjs:4](<../../../../../../electron/ai/model-access.cjs#L4>)
- require — module-loader; [electron/ai/model-access.cjs:5](<../../../../../../electron/ai/model-access.cjs#L5>)
- require — module-loader; [electron/ai/model-access.cjs:6](<../../../../../../electron/ai/model-access.cjs#L6>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:10](<../../../../../../electron/ai/model-access.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-e79441b226980f83"></a>

## connectionInput

[electron/ai/model-access.cjs:8](<../../../../../../electron/ai/model-access.cjs#L8>) · SchemaBinding · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/model-access.cjs](<model-access.cjs.md#s-874296a0413b3682>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- z .object({ apiKey: z .string() .trim() .min(10) .max(512) .regex(/^&#91;A-Za-z0-9._-&#93;+$/), }) .strict — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:8](<../../../../../../electron/ai/model-access.cjs#L8>)
- z .object — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:8](<../../../../../../electron/ai/model-access.cjs#L8>)
- z .string() .trim() .min(10) .max(512) .regex — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:10](<../../../../../../electron/ai/model-access.cjs#L10>)
- z .string() .trim() .min(10) .max — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:10](<../../../../../../electron/ai/model-access.cjs#L10>)
- z .string() .trim() .min — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:10](<../../../../../../electron/ai/model-access.cjs#L10>)
- z .string() .trim — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:10](<../../../../../../electron/ai/model-access.cjs#L10>)
- z .string — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:10](<../../../../../../electron/ai/model-access.cjs#L10>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:10](<../../../../../../electron/ai/model-access.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-b6b34688f780a8d4"></a>

## identifyProvider

[electron/ai/model-access.cjs:21](<../../../../../../electron/ai/model-access.cjs#L21>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Detect the issuer in the main process before making any request. Unknown formats stop here: probing unrelated services would disclose the secret.

Purpose evidence: jsdoc.

Exported as: identifyProvider ([electron/ai/model-access.cjs:1](<../../../../../../electron/ai/model-access.cjs#L1>)).

Lexical owner: [electron/ai/model-access.cjs](<model-access.cjs.md#s-874296a0413b3682>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| apiKey | any | compiler-inferred | required |

Returns: { state: string; providerId: string; message: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ModelAccess.connect](<model-access.cjs.md#s-288ebd01a07b9da9>) — [electron/ai/model-access.cjs:59](<../../../../../../electron/ai/model-access.cjs#L59>)
- [&lt;anonymous@26:73&gt;](<model-access.test.cjs.md#s-93b95c2d6c69ccdb>) — [electron/ai/model-access.test.cjs:28](<../../../../../../electron/ai/model-access.test.cjs#L28>)
- [&lt;anonymous@26:73&gt;](<model-access.test.cjs.md#s-93b95c2d6c69ccdb>) — [electron/ai/model-access.test.cjs:29](<../../../../../../electron/ai/model-access.test.cjs#L29>)
- [&lt;anonymous@26:73&gt;](<model-access.test.cjs.md#s-93b95c2d6c69ccdb>) — [electron/ai/model-access.test.cjs:30](<../../../../../../electron/ai/model-access.test.cjs#L30>)

Unresolved / external call sites: 3.

- apiKey.startsWith — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:22](<../../../../../../electron/ai/model-access.cjs#L22>)
- apiKey.startsWith — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:24](<../../../../../../electron/ai/model-access.cjs#L24>)
- /^(AIza&#124;AQ\\.)/.test — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:26](<../../../../../../electron/ai/model-access.cjs#L26>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:28](<../../../../../../electron/ai/model-access.test.cjs#L28>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:29](<../../../../../../electron/ai/model-access.test.cjs#L29>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:30](<../../../../../../electron/ai/model-access.test.cjs#L30>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:10](<../../../../../../electron/ai/model-access.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-0f03afb63f3f94eb"></a>

## ModelAccess

[electron/ai/model-access.cjs:39](<../../../../../../electron/ai/model-access.cjs#L39>) · ClassDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: ModelAccess ([electron/ai/model-access.cjs:1](<../../../../../../electron/ai/model-access.cjs#L1>)).

Lexical owner: [electron/ai/model-access.cjs](<model-access.cjs.md#s-874296a0413b3682>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:10](<../../../../../../electron/ai/model-access.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-276a27e408455abf"></a>

## ModelAccess.constructor

[electron/ai/model-access.cjs:40](<../../../../../../electron/ai/model-access.cjs#L40>) · Constructor · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelAccess](<model-access.cjs.md#s-0f03afb63f3f94eb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| credentials | any | compiler-inferred | required |
| { fetchImpl = fetch, now = Date.now } | { fetchImpl?: (url: any, init?: {}) =&gt; any; now?: any; } | compiler-inferred | optional, default present |

Returns: ModelAccess (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [registerAiIpc](<ipc.cjs.md#s-72b9bbec8be3a0eb>) — [electron/ai/ipc.cjs:52](<../../../../../../electron/ai/ipc.cjs#L52>)
- [harness](<model-access.test.cjs.md#s-3df263f20c6b7cf5>) — [electron/ai/model-access.test.cjs:19](<../../../../../../electron/ai/model-access.test.cjs#L19>)

Unresolved / external call sites: 1.

- Map — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:45](<../../../../../../electron/ai/model-access.cjs#L45>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:19](<../../../../../../electron/ai/model-access.test.cjs#L19>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:10](<../../../../../../electron/ai/model-access.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-ffe65cad2ea728af"></a>

## ModelAccess.recordCheck

[electron/ai/model-access.cjs:47](<../../../../../../electron/ai/model-access.cjs#L47>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelAccess](<model-access.cjs.md#s-0f03afb63f3f94eb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| result | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [registerAiIpc.&lt;anonymous@362:30&gt;.&lt;anonymous@376:30&gt;](<ipc.cjs.md#s-5079164e803c5023>) — [electron/ai/ipc.cjs:391](<../../../../../../electron/ai/ipc.cjs#L391>)

Unresolved / external call sites: 1.

- this.modelChecks.set — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:48](<../../../../../../electron/ai/model-access.cjs#L48>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:10](<../../../../../../electron/ai/model-access.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-a82b0b034589ad60"></a>

## ModelAccess.failedCheck

[electron/ai/model-access.cjs:50](<../../../../../../electron/ai/model-access.cjs#L50>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelAccess](<model-access.cjs.md#s-0f03afb63f3f94eb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| deploymentId | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- this.modelChecks.get — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:51](<../../../../../../electron/ai/model-access.cjs#L51>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:10](<../../../../../../electron/ai/model-access.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-8dbdc4026cd7c126"></a>

## ModelAccess.clearChecks

[electron/ai/model-access.cjs:53](<../../../../../../electron/ai/model-access.cjs#L53>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelAccess](<model-access.cjs.md#s-0f03afb63f3f94eb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| providerId | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [registerAiIpc.&lt;anonymous@405:28&gt;.&lt;anonymous@406:23&gt;](<ipc.cjs.md#s-89a4e9ad1144b298>) — [electron/ai/ipc.cjs:409](<../../../../../../electron/ai/ipc.cjs#L409>)
- [registerAiIpc.&lt;anonymous@415:30&gt;.&lt;anonymous@416:23&gt;](<ipc.cjs.md#s-d4e3b18ed9532963>) — [electron/ai/ipc.cjs:419](<../../../../../../electron/ai/ipc.cjs#L419>)
- [ModelAccess.connect](<model-access.cjs.md#s-288ebd01a07b9da9>) — [electron/ai/model-access.cjs:98](<../../../../../../electron/ai/model-access.cjs#L98>)

Unresolved / external call sites: 3.

- this.modelChecks.keys — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:54](<../../../../../../electron/ai/model-access.cjs#L54>)
- id.startsWith — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:55](<../../../../../../electron/ai/model-access.cjs#L55>)
- this.modelChecks.delete — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:55](<../../../../../../electron/ai/model-access.cjs#L55>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:10](<../../../../../../electron/ai/model-access.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-288ebd01a07b9da9"></a>

## ModelAccess.connect

[electron/ai/model-access.cjs:57](<../../../../../../electron/ai/model-access.cjs#L57>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelAccess](<model-access.cjs.md#s-0f03afb63f3f94eb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/ai/model-access.cjs:58](<../../../../../../electron/ai/model-access.cjs#L58>)
- [identifyProvider](<model-access.cjs.md#s-b6b34688f780a8d4>) — [electron/ai/model-access.cjs:59](<../../../../../../electron/ai/model-access.cjs#L59>)
- [parseCredential](<schemas.cjs.md#s-b69a42e30e64ae53>) — [electron/ai/model-access.cjs:71](<../../../../../../electron/ai/model-access.cjs#L71>)
- [ModelAccess.clearChecks](<model-access.cjs.md#s-8dbdc4026cd7c126>) — [electron/ai/model-access.cjs:98](<../../../../../../electron/ai/model-access.cjs#L98>)

**Called by (statically resolved):**

- [registerAiIpc.&lt;anonymous@172:31&gt;.&lt;anonymous@173:23&gt;](<ipc.cjs.md#s-adddf3bc0e1bf9e0>) — [electron/ai/ipc.cjs:174](<../../../../../../electron/ai/ipc.cjs#L174>)
- [&lt;anonymous@26:73&gt;](<model-access.test.cjs.md#s-93b95c2d6c69ccdb>) — [electron/ai/model-access.test.cjs:32](<../../../../../../electron/ai/model-access.test.cjs#L32>)
- [&lt;anonymous@38:90&gt;](<model-access.test.cjs.md#s-149c585101e92002>) — [electron/ai/model-access.test.cjs:51](<../../../../../../electron/ai/model-access.test.cjs#L51>)
- [&lt;anonymous@38:90&gt;](<model-access.test.cjs.md#s-149c585101e92002>) — [electron/ai/model-access.test.cjs:60](<../../../../../../electron/ai/model-access.test.cjs#L60>)
- [&lt;anonymous@64:99&gt;](<model-access.test.cjs.md#s-e7ff1db0d74941f3>) — [electron/ai/model-access.test.cjs:72](<../../../../../../electron/ai/model-access.test.cjs#L72>)
- [&lt;anonymous@80:88&gt;](<model-access.test.cjs.md#s-6ae90e36117a0730>) — [electron/ai/model-access.test.cjs:85](<../../../../../../electron/ai/model-access.test.cjs#L85>)
- [&lt;anonymous@91:72&gt;](<model-access.test.cjs.md#s-13e0cdf175d9db6a>) — [electron/ai/model-access.test.cjs:102](<../../../../../../electron/ai/model-access.test.cjs#L102>)
- [&lt;anonymous@110:102&gt;](<model-access.test.cjs.md#s-259b9f88c36213b4>) — [electron/ai/model-access.test.cjs:119](<../../../../../../electron/ai/model-access.test.cjs#L119>)

Unresolved / external call sites: 6.

- this.now — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:63](<../../../../../../electron/ai/model-access.cjs#L63>)
- this.now — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:70](<../../../../../../electron/ai/model-access.cjs#L70>)
- Adapter — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:88](<../../../../../../electron/ai/model-access.cjs#L88>)
- adapter.request — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:92](<../../../../../../electron/ai/model-access.cjs#L92>)
- adapter.listModels — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:96](<../../../../../../electron/ai/model-access.cjs#L96>)
- this.credentials.save — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:97](<../../../../../../electron/ai/model-access.cjs#L97>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:32](<../../../../../../electron/ai/model-access.test.cjs#L32>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:51](<../../../../../../electron/ai/model-access.test.cjs#L51>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:60](<../../../../../../electron/ai/model-access.test.cjs#L60>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:72](<../../../../../../electron/ai/model-access.test.cjs#L72>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:85](<../../../../../../electron/ai/model-access.test.cjs#L85>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:102](<../../../../../../electron/ai/model-access.test.cjs#L102>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:119](<../../../../../../electron/ai/model-access.test.cjs#L119>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:10](<../../../../../../electron/ai/model-access.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-7730d79055d29b39"></a>

## ModelAccess.connect.get

[electron/ai/model-access.cjs:76](<../../../../../../electron/ai/model-access.cjs#L76>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelAccess.connect](<model-access.cjs.md#s-288ebd01a07b9da9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:77](<../../../../../../electron/ai/model-access.cjs#L77>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:10](<../../../../../../electron/ai/model-access.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-a774025a7c67383f"></a>

## ModelAccess.connect.&lt;anonymous@92:47&gt;

[electron/ai/model-access.cjs:92](<../../../../../../electron/ai/model-access.cjs#L92>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ModelAccess.connect](<model-access.cjs.md#s-288ebd01a07b9da9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| response | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- response.body?.cancel — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:93](<../../../../../../electron/ai/model-access.cjs#L93>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:10](<../../../../../../electron/ai/model-access.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-2d54b4808e467237"></a>

## providedPreview

[electron/ai/model-access.cjs:131](<../../../../../../electron/ai/model-access.cjs#L131>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Public policy is deliberately unconditional: there is no trusted developer authorization service yet. A renderer toggle must never reveal diagnostics. Only explicit metadata fields leave this boundary; no configuration or keys.

Purpose evidence: jsdoc.

Exported as: providedPreview ([electron/ai/model-access.cjs:1](<../../../../../../electron/ai/model-access.cjs#L1>)).

Lexical owner: [electron/ai/model-access.cjs](<model-access.cjs.md#s-874296a0413b3682>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| catalog | any | compiler-inferred | required |
| health | () =&gt; { failures: number; } | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@125:113&gt;](<model-access.test.cjs.md#s-33c3404e0cae4370>) — [electron/ai/model-access.test.cjs:144](<../../../../../../electron/ai/model-access.test.cjs#L144>)
- [&lt;anonymous@125:113&gt;](<model-access.test.cjs.md#s-33c3404e0cae4370>) — [electron/ai/model-access.test.cjs:155](<../../../../../../electron/ai/model-access.test.cjs#L155>)
- [&lt;anonymous@158:89&gt;](<model-access.test.cjs.md#s-77007d01e6d2fabb>) — [electron/ai/model-access.test.cjs:187](<../../../../../../electron/ai/model-access.test.cjs#L187>)

Unresolved / external call sites: 3.

- Set — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:132](<../../../../../../electron/ai/model-access.cjs#L132>)
- catalog.profiles .filter( (profile) =&gt; favorites.has(profile.deploymentId) && !&#91;"error", "unavailable"&#93;.includes(profile.availability) && !health(profile.deploymentId).failures, )  — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:133](<../../../../../../electron/ai/model-access.cjs#L133>)
- catalog.profiles .filter — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:133](<../../../../../../electron/ai/model-access.cjs#L133>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:144](<../../../../../../electron/ai/model-access.test.cjs#L144>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:155](<../../../../../../electron/ai/model-access.test.cjs#L155>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:187](<../../../../../../electron/ai/model-access.test.cjs#L187>) — static-call-site; coverage not established.
- [electron/ai/model-access.test.cjs:10](<../../../../../../electron/ai/model-access.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-5304dec03fe9ba46"></a>

## providedPreview.&lt;anonymous@131:44&gt;

[electron/ai/model-access.cjs:131](<../../../../../../electron/ai/model-access.cjs#L131>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [providedPreview](<model-access.cjs.md#s-2d54b4808e467237>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { failures: number; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:10](<../../../../../../electron/ai/model-access.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-11a26829a41ae000"></a>

## providedPreview.&lt;anonymous@135:7&gt;

[electron/ai/model-access.cjs:135](<../../../../../../electron/ai/model-access.cjs#L135>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [providedPreview](<model-access.cjs.md#s-2d54b4808e467237>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| profile | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- favorites.has — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:136](<../../../../../../electron/ai/model-access.cjs#L136>)
- &#91;"error", "unavailable"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:137](<../../../../../../electron/ai/model-access.cjs#L137>)
- health — signature-only-candidate; [electron/ai/model-access.cjs:138](<../../../../../../electron/ai/model-access.cjs#L138>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:10](<../../../../../../electron/ai/model-access.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-882c1d3ebcbafc94"></a>

## providedPreview.&lt;anonymous@140:10&gt;

[electron/ai/model-access.cjs:140](<../../../../../../electron/ai/model-access.cjs#L140>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [providedPreview](<model-access.cjs.md#s-2d54b4808e467237>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| profile | any | compiler-inferred | required |

Returns: { providerId: any; modelId: any; displayName: any; contextLength: any; outputLimit: any; capabilities: any; inputUsdPerMillion: any; outputUsdPerMillion: any; isFavorite: boolean; availability: string; executable: boolean; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91; profile.tools === true && "tools", profile.vision === true && "vision", profile.structuredOutput === true && "structured output", &#93;.filter — external-or-dynamic-dispatch; [electron/ai/model-access.cjs:146](<../../../../../../electron/ai/model-access.cjs#L146>)

**Related tests / acceptance harnesses:**

- [electron/ai/model-access.test.cjs:10](<../../../../../../electron/ai/model-access.test.cjs#L10>) — file-import-only; coverage not established.
