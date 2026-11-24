# electron/ai/provider-usage.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/provider-usage.cjs:1](<../../../../../../electron/ai/provider-usage.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/provider-usage.cjs](<provider-usage.cjs.md#s-be349f9dbe9bac49>) (Module)
- [keyIdentity](<provider-usage.cjs.md#s-a44d19d22edadd9f>) (ArrowFunction)
- [ProviderUsageService](<provider-usage.cjs.md#s-7eedeca0231bad00>) (ClassDeclaration)
- [ProviderUsageService.constructor](<provider-usage.cjs.md#s-bfe04f5849731125>) (Constructor)
- [ProviderUsageService.constructor.read](<provider-usage.cjs.md#s-824085c227119d51>) (ArrowFunction)
- [ProviderUsageService.version](<provider-usage.cjs.md#s-94297ff732783c7f>) (MethodDeclaration)
- [ProviderUsageService.invalidate](<provider-usage.cjs.md#s-d7a8cc5e2bed3076>) (MethodDeclaration)
- [ProviderUsageService.selectionChanged](<provider-usage.cjs.md#s-e430acd6052a513e>) (MethodDeclaration)
- [ProviderUsageService.selected](<provider-usage.cjs.md#s-feb50af70ad03fdb>) (MethodDeclaration)
- [ProviderUsageService.record](<provider-usage.cjs.md#s-d09bf73bff1abc6a>) (MethodDeclaration)
- [ProviderUsageService.record.valid](<provider-usage.cjs.md#s-2be321ff5af49152>) (ArrowFunction)
- [ProviderUsageService.get](<provider-usage.cjs.md#s-b3bdf66ecb1c6a64>) (MethodDeclaration)
- [ProviderUsageService.legacyGet](<provider-usage.cjs.md#s-906aad26021a121e>) (MethodDeclaration)
- [observeProviderUsage](<provider-usage.cjs.md#s-3859f05b17dd7d5e>) (FunctionDeclaration)
- [observeProviderUsage.&lt;anonymous@178:22&gt;](<provider-usage.cjs.md#s-e3b6121331f49330>) (ArrowFunction)

<a id="s-be349f9dbe9bac49"></a>

## electron/ai/provider-usage.cjs

[electron/ai/provider-usage.cjs:1](<../../../../../../electron/ai/provider-usage.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/ai/provider-usage.cjs:1](<../../../../../../electron/ai/provider-usage.cjs#L1>)
- require — module-loader; [electron/ai/provider-usage.cjs:2](<../../../../../../electron/ai/provider-usage.cjs#L2>)

**Related tests / acceptance harnesses:**

- [electron/ai/provider-usage.test.cjs:6](<../../../../../../electron/ai/provider-usage.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-a44d19d22edadd9f"></a>

## keyIdentity

[electron/ai/provider-usage.cjs:11](<../../../../../../electron/ai/provider-usage.cjs#L11>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/provider-usage.cjs](<provider-usage.cjs.md#s-be349f9dbe9bac49>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| provider | any | compiler-inferred | required |
| key | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ProviderUsageService.record](<provider-usage.cjs.md#s-d09bf73bff1abc6a>) — [electron/ai/provider-usage.cjs:77](<../../../../../../electron/ai/provider-usage.cjs#L77>)
- [ProviderUsageService.get](<provider-usage.cjs.md#s-b3bdf66ecb1c6a64>) — [electron/ai/provider-usage.cjs:111](<../../../../../../electron/ai/provider-usage.cjs#L111>)

Unresolved / external call sites: 3.

- createHash("sha256") .update(key ?? "local-runtime") .digest — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:14](<../../../../../../electron/ai/provider-usage.cjs#L14>)
- createHash("sha256") .update — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:14](<../../../../../../electron/ai/provider-usage.cjs#L14>)
- createHash — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:14](<../../../../../../electron/ai/provider-usage.cjs#L14>)

**Related tests / acceptance harnesses:**

- [electron/ai/provider-usage.test.cjs:6](<../../../../../../electron/ai/provider-usage.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-7eedeca0231bad00"></a>

## ProviderUsageService

[electron/ai/provider-usage.cjs:18](<../../../../../../electron/ai/provider-usage.cjs#L18>) · ClassDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: ProviderUsageService ([electron/ai/provider-usage.cjs:1](<../../../../../../electron/ai/provider-usage.cjs#L1>)).

Lexical owner: [electron/ai/provider-usage.cjs](<provider-usage.cjs.md#s-be349f9dbe9bac49>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/provider-usage.test.cjs:6](<../../../../../../electron/ai/provider-usage.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-bfe04f5849731125"></a>

## ProviderUsageService.constructor

[electron/ai/provider-usage.cjs:19](<../../../../../../electron/ai/provider-usage.cjs#L19>) · Constructor · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProviderUsageService](<provider-usage.cjs.md#s-7eedeca0231bad00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {     credentials,     registry,     agents,     fetchImpl = fetch,     now = Date.now,   } | { credentials: any; registry: any; agents: any; fetchImpl?: (url: any, init?: {}) =&gt; any; now?: any; } | compiler-inferred | required |

Returns: ProviderUsageService (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OpenRouterUsageService.constructor](<openrouter-usage.cjs.md#s-ca4b5e760b8e3c1f>) — [electron/ai/provider-usage.cjs:30](<../../../../../../electron/ai/provider-usage.cjs#L30>)

**Called by (statically resolved):**

- [registerAiIpc](<ipc.cjs.md#s-72b9bbec8be3a0eb>) — [electron/ai/ipc.cjs:51](<../../../../../../electron/ai/ipc.cjs#L51>)
- [fixture](<provider-usage.test.cjs.md#s-d1caf35eb1244f73>) — [electron/ai/provider-usage.test.cjs:23](<../../../../../../electron/ai/provider-usage.test.cjs#L23>)

Unresolved / external call sites: 3.

- Object.assign — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:26](<../../../../../../electron/ai/provider-usage.cjs#L26>)
- Map — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:27](<../../../../../../electron/ai/provider-usage.cjs#L27>)
- Map — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:28](<../../../../../../electron/ai/provider-usage.cjs#L28>)

**Related tests / acceptance harnesses:**

- [electron/ai/provider-usage.test.cjs:23](<../../../../../../electron/ai/provider-usage.test.cjs#L23>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:6](<../../../../../../electron/ai/provider-usage.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-824085c227119d51"></a>

## ProviderUsageService.constructor.read

[electron/ai/provider-usage.cjs:32](<../../../../../../electron/ai/provider-usage.cjs#L32>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProviderUsageService.constructor](<provider-usage.cjs.md#s-bfe04f5849731125>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/provider-usage.test.cjs:6](<../../../../../../electron/ai/provider-usage.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-94297ff732783c7f"></a>

## ProviderUsageService.version

[electron/ai/provider-usage.cjs:37](<../../../../../../electron/ai/provider-usage.cjs#L37>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProviderUsageService](<provider-usage.cjs.md#s-7eedeca0231bad00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| provider | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ProviderUsageService.invalidate](<provider-usage.cjs.md#s-d7a8cc5e2bed3076>) — [electron/ai/provider-usage.cjs:45](<../../../../../../electron/ai/provider-usage.cjs#L45>)
- [ProviderUsageService.record](<provider-usage.cjs.md#s-d09bf73bff1abc6a>) — [electron/ai/provider-usage.cjs:61](<../../../../../../electron/ai/provider-usage.cjs#L61>)
- [ProviderUsageService.record](<provider-usage.cjs.md#s-d09bf73bff1abc6a>) — [electron/ai/provider-usage.cjs:62](<../../../../../../electron/ai/provider-usage.cjs#L62>)
- [ProviderUsageService.record](<provider-usage.cjs.md#s-d09bf73bff1abc6a>) — [electron/ai/provider-usage.cjs:72](<../../../../../../electron/ai/provider-usage.cjs#L72>)
- [ProviderUsageService.get](<provider-usage.cjs.md#s-b3bdf66ecb1c6a64>) — [electron/ai/provider-usage.cjs:112](<../../../../../../electron/ai/provider-usage.cjs#L112>)
- [ProviderUsageService.get](<provider-usage.cjs.md#s-b3bdf66ecb1c6a64>) — [electron/ai/provider-usage.cjs:132](<../../../../../../electron/ai/provider-usage.cjs#L132>)
- [&lt;anonymous@143:115&gt;](<provider-usage.test.cjs.md#s-8adc6e35b9ff326c>) — [electron/ai/provider-usage.test.cjs:154](<../../../../../../electron/ai/provider-usage.test.cjs#L154>)

Unresolved / external call sites: 1.

- this.versions.get — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:38](<../../../../../../electron/ai/provider-usage.cjs#L38>)

**Related tests / acceptance harnesses:**

- [electron/ai/provider-usage.test.cjs:154](<../../../../../../electron/ai/provider-usage.test.cjs#L154>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:6](<../../../../../../electron/ai/provider-usage.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-d7a8cc5e2bed3076"></a>

## ProviderUsageService.invalidate

[electron/ai/provider-usage.cjs:40](<../../../../../../electron/ai/provider-usage.cjs#L40>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProviderUsageService](<provider-usage.cjs.md#s-7eedeca0231bad00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| provider | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ProviderUsageService.invalidate](<provider-usage.cjs.md#s-d7a8cc5e2bed3076>) — [electron/ai/provider-usage.cjs:42](<../../../../../../electron/ai/provider-usage.cjs#L42>)
- [ProviderUsageService.version](<provider-usage.cjs.md#s-94297ff732783c7f>) — [electron/ai/provider-usage.cjs:45](<../../../../../../electron/ai/provider-usage.cjs#L45>)
- [OpenRouterUsageService.invalidate](<openrouter-usage.cjs.md#s-0a764503da78517c>) — [electron/ai/provider-usage.cjs:48](<../../../../../../electron/ai/provider-usage.cjs#L48>)

**Called by (statically resolved):**

- [registerAiIpc.&lt;anonymous@172:31&gt;.&lt;anonymous@173:23&gt;](<ipc.cjs.md#s-adddf3bc0e1bf9e0>) — [electron/ai/ipc.cjs:176](<../../../../../../electron/ai/ipc.cjs#L176>)
- [registerAiIpc.&lt;anonymous@405:28&gt;.&lt;anonymous@406:23&gt;](<ipc.cjs.md#s-89a4e9ad1144b298>) — [electron/ai/ipc.cjs:410](<../../../../../../electron/ai/ipc.cjs#L410>)
- [registerAiIpc.&lt;anonymous@415:30&gt;.&lt;anonymous@416:23&gt;](<ipc.cjs.md#s-d4e3b18ed9532963>) — [electron/ai/ipc.cjs:420](<../../../../../../electron/ai/ipc.cjs#L420>)
- [ProviderUsageService.invalidate](<provider-usage.cjs.md#s-d7a8cc5e2bed3076>) — [electron/ai/provider-usage.cjs:42](<../../../../../../electron/ai/provider-usage.cjs#L42>)
- [&lt;anonymous@90:107&gt;](<provider-usage.test.cjs.md#s-2a0be109b1566d5b>) — [electron/ai/provider-usage.test.cjs:111](<../../../../../../electron/ai/provider-usage.test.cjs#L111>)
- [&lt;anonymous@143:115&gt;](<provider-usage.test.cjs.md#s-8adc6e35b9ff326c>) — [electron/ai/provider-usage.test.cjs:155](<../../../../../../electron/ai/provider-usage.test.cjs#L155>)

Unresolved / external call sites: 4.

- this.versions.set — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:45](<../../../../../../electron/ai/provider-usage.cjs#L45>)
- this.meters.keys — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:46](<../../../../../../electron/ai/provider-usage.cjs#L46>)
- id.startsWith — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:47](<../../../../../../electron/ai/provider-usage.cjs#L47>)
- this.meters.delete — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:47](<../../../../../../electron/ai/provider-usage.cjs#L47>)

**Related tests / acceptance harnesses:**

- [electron/ai/provider-usage.test.cjs:111](<../../../../../../electron/ai/provider-usage.test.cjs#L111>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:155](<../../../../../../electron/ai/provider-usage.test.cjs#L155>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:6](<../../../../../../electron/ai/provider-usage.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-e430acd6052a513e"></a>

## ProviderUsageService.selectionChanged

[electron/ai/provider-usage.cjs:50](<../../../../../../electron/ai/provider-usage.cjs#L50>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProviderUsageService](<provider-usage.cjs.md#s-7eedeca0231bad00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OpenRouterUsageService.invalidate](<openrouter-usage.cjs.md#s-0a764503da78517c>) — [electron/ai/provider-usage.cjs:51](<../../../../../../electron/ai/provider-usage.cjs#L51>)

**Called by (statically resolved):**

- [registerAiIpc.&lt;anonymous@425:22&gt;.&lt;anonymous@426:23&gt;](<ipc.cjs.md#s-f3538216dd24ea59>) — [electron/ai/ipc.cjs:428](<../../../../../../electron/ai/ipc.cjs#L428>)
- [&lt;anonymous@90:107&gt;](<provider-usage.test.cjs.md#s-2a0be109b1566d5b>) — [electron/ai/provider-usage.test.cjs:105](<../../../../../../electron/ai/provider-usage.test.cjs#L105>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/provider-usage.test.cjs:105](<../../../../../../electron/ai/provider-usage.test.cjs#L105>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:6](<../../../../../../electron/ai/provider-usage.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-feb50af70ad03fdb"></a>

## ProviderUsageService.selected

[electron/ai/provider-usage.cjs:53](<../../../../../../electron/ai/provider-usage.cjs#L53>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProviderUsageService](<provider-usage.cjs.md#s-7eedeca0231bad00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| agentId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ProviderUsageService.get](<provider-usage.cjs.md#s-b3bdf66ecb1c6a64>) — [electron/ai/provider-usage.cjs:98](<../../../../../../electron/ai/provider-usage.cjs#L98>)
- [ProviderUsageService.get](<provider-usage.cjs.md#s-b3bdf66ecb1c6a64>) — [electron/ai/provider-usage.cjs:133](<../../../../../../electron/ai/provider-usage.cjs#L133>)
- [ProviderUsageService.get](<provider-usage.cjs.md#s-b3bdf66ecb1c6a64>) — [electron/ai/provider-usage.cjs:140](<../../../../../../electron/ai/provider-usage.cjs#L140>)

Unresolved / external call sites: 2.

- this.registry.read — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:54](<../../../../../../electron/ai/provider-usage.cjs#L54>)
- this.agents.get — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:55](<../../../../../../electron/ai/provider-usage.cjs#L55>)

**Related tests / acceptance harnesses:**

- [electron/ai/provider-usage.test.cjs:6](<../../../../../../electron/ai/provider-usage.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-d09bf73bff1abc6a"></a>

## ProviderUsageService.record

[electron/ai/provider-usage.cjs:61](<../../../../../../electron/ai/provider-usage.cjs#L61>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProviderUsageService](<provider-usage.cjs.md#s-7eedeca0231bad00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| provider | any | compiler-inferred | required |
| usage | any | compiler-inferred | required |
| key | any | compiler-inferred | required |
| version | any | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ProviderUsageService.version](<provider-usage.cjs.md#s-94297ff732783c7f>) — [electron/ai/provider-usage.cjs:61](<../../../../../../electron/ai/provider-usage.cjs#L61>)
- [ProviderUsageService.version](<provider-usage.cjs.md#s-94297ff732783c7f>) — [electron/ai/provider-usage.cjs:62](<../../../../../../electron/ai/provider-usage.cjs#L62>)
- [ProviderUsageService.version](<provider-usage.cjs.md#s-94297ff732783c7f>) — [electron/ai/provider-usage.cjs:72](<../../../../../../electron/ai/provider-usage.cjs#L72>)
- [ProviderUsageService.record.valid](<provider-usage.cjs.md#s-2be321ff5af49152>) — [electron/ai/provider-usage.cjs:76](<../../../../../../electron/ai/provider-usage.cjs#L76>)
- [ProviderUsageService.record.valid](<provider-usage.cjs.md#s-2be321ff5af49152>) — [electron/ai/provider-usage.cjs:76](<../../../../../../electron/ai/provider-usage.cjs#L76>)
- [keyIdentity](<provider-usage.cjs.md#s-a44d19d22edadd9f>) — [electron/ai/provider-usage.cjs:77](<../../../../../../electron/ai/provider-usage.cjs#L77>)
- [ProviderUsageService.record.valid](<provider-usage.cjs.md#s-2be321ff5af49152>) — [electron/ai/provider-usage.cjs:87](<../../../../../../electron/ai/provider-usage.cjs#L87>)

**Called by (statically resolved):**

- [&lt;anonymous@52:93&gt;](<provider-usage.test.cjs.md#s-cccff9735f013a34>) — [electron/ai/provider-usage.test.cjs:56](<../../../../../../electron/ai/provider-usage.test.cjs#L56>)
- [&lt;anonymous@90:107&gt;](<provider-usage.test.cjs.md#s-2a0be109b1566d5b>) — [electron/ai/provider-usage.test.cjs:93](<../../../../../../electron/ai/provider-usage.test.cjs#L93>)
- [&lt;anonymous@90:107&gt;](<provider-usage.test.cjs.md#s-2a0be109b1566d5b>) — [electron/ai/provider-usage.test.cjs:99](<../../../../../../electron/ai/provider-usage.test.cjs#L99>)
- [&lt;anonymous@90:107&gt;](<provider-usage.test.cjs.md#s-2a0be109b1566d5b>) — [electron/ai/provider-usage.test.cjs:115](<../../../../../../electron/ai/provider-usage.test.cjs#L115>)
- [&lt;anonymous@143:115&gt;](<provider-usage.test.cjs.md#s-8adc6e35b9ff326c>) — [electron/ai/provider-usage.test.cjs:146](<../../../../../../electron/ai/provider-usage.test.cjs#L146>)
- [&lt;anonymous@143:115&gt;](<provider-usage.test.cjs.md#s-8adc6e35b9ff326c>) — [electron/ai/provider-usage.test.cjs:156](<../../../../../../electron/ai/provider-usage.test.cjs#L156>)
- [&lt;anonymous@143:115&gt;](<provider-usage.test.cjs.md#s-8adc6e35b9ff326c>) — [electron/ai/provider-usage.test.cjs:163](<../../../../../../electron/ai/provider-usage.test.cjs#L163>)

Unresolved / external call sites: 10.

- PROVIDERS.includes — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:62](<../../../../../../electron/ai/provider-usage.cjs#L62>)
- this.credentials.get — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:67](<../../../../../../electron/ai/provider-usage.cjs#L67>)
- this.meters.get — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:78](<../../../../../../electron/ai/provider-usage.cjs#L78>)
- new Date(this.now()).toISOString — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:81](<../../../../../../electron/ai/provider-usage.cjs#L81>)
- Date — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:81](<../../../../../../electron/ai/provider-usage.cjs#L81>)
- this.now — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:81](<../../../../../../electron/ai/provider-usage.cjs#L81>)
- Number.isSafeInteger — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:87](<../../../../../../electron/ai/provider-usage.cjs#L87>)
- this.meters.set — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:90](<../../../../../../electron/ai/provider-usage.cjs#L90>)
- 2 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/provider-usage.test.cjs:56](<../../../../../../electron/ai/provider-usage.test.cjs#L56>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:93](<../../../../../../electron/ai/provider-usage.test.cjs#L93>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:99](<../../../../../../electron/ai/provider-usage.test.cjs#L99>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:115](<../../../../../../electron/ai/provider-usage.test.cjs#L115>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:146](<../../../../../../electron/ai/provider-usage.test.cjs#L146>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:156](<../../../../../../electron/ai/provider-usage.test.cjs#L156>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:163](<../../../../../../electron/ai/provider-usage.test.cjs#L163>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:6](<../../../../../../electron/ai/provider-usage.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-2be321ff5af49152"></a>

## ProviderUsageService.record.valid

[electron/ai/provider-usage.cjs:75](<../../../../../../electron/ai/provider-usage.cjs#L75>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProviderUsageService.record](<provider-usage.cjs.md#s-d09bf73bff1abc6a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ProviderUsageService.record](<provider-usage.cjs.md#s-d09bf73bff1abc6a>) — [electron/ai/provider-usage.cjs:76](<../../../../../../electron/ai/provider-usage.cjs#L76>)
- [ProviderUsageService.record](<provider-usage.cjs.md#s-d09bf73bff1abc6a>) — [electron/ai/provider-usage.cjs:76](<../../../../../../electron/ai/provider-usage.cjs#L76>)
- [ProviderUsageService.record](<provider-usage.cjs.md#s-d09bf73bff1abc6a>) — [electron/ai/provider-usage.cjs:87](<../../../../../../electron/ai/provider-usage.cjs#L87>)

Unresolved / external call sites: 1.

- Number.isSafeInteger — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:75](<../../../../../../electron/ai/provider-usage.cjs#L75>)

**Related tests / acceptance harnesses:**

- [electron/ai/provider-usage.test.cjs:6](<../../../../../../electron/ai/provider-usage.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-b3bdf66ecb1c6a64"></a>

## ProviderUsageService.get

[electron/ai/provider-usage.cjs:97](<../../../../../../electron/ai/provider-usage.cjs#L97>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProviderUsageService](<provider-usage.cjs.md#s-7eedeca0231bad00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| options | {} | compiler-inferred | optional, default present |
| retry | boolean | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ProviderUsageService.selected](<provider-usage.cjs.md#s-feb50af70ad03fdb>) — [electron/ai/provider-usage.cjs:98](<../../../../../../electron/ai/provider-usage.cjs#L98>)
- [blank](<openrouter-usage.cjs.md#s-deed3178dcebd830>) — [electron/ai/provider-usage.cjs:99](<../../../../../../electron/ai/provider-usage.cjs#L99>)
- [keyIdentity](<provider-usage.cjs.md#s-a44d19d22edadd9f>) — [electron/ai/provider-usage.cjs:111](<../../../../../../electron/ai/provider-usage.cjs#L111>)
- [ProviderUsageService.version](<provider-usage.cjs.md#s-94297ff732783c7f>) — [electron/ai/provider-usage.cjs:112](<../../../../../../electron/ai/provider-usage.cjs#L112>)
- [OpenRouterUsageService.get](<openrouter-usage.cjs.md#s-1134b7f0963903a0>) — [electron/ai/provider-usage.cjs:115](<../../../../../../electron/ai/provider-usage.cjs#L115>)
- [ProviderUsageService.version](<provider-usage.cjs.md#s-94297ff732783c7f>) — [electron/ai/provider-usage.cjs:132](<../../../../../../electron/ai/provider-usage.cjs#L132>)
- [ProviderUsageService.selected](<provider-usage.cjs.md#s-feb50af70ad03fdb>) — [electron/ai/provider-usage.cjs:133](<../../../../../../electron/ai/provider-usage.cjs#L133>)
- [ProviderUsageService.get](<provider-usage.cjs.md#s-b3bdf66ecb1c6a64>) — [electron/ai/provider-usage.cjs:137](<../../../../../../electron/ai/provider-usage.cjs#L137>)
- [blank](<openrouter-usage.cjs.md#s-deed3178dcebd830>) — [electron/ai/provider-usage.cjs:139](<../../../../../../electron/ai/provider-usage.cjs#L139>)
- [ProviderUsageService.selected](<provider-usage.cjs.md#s-feb50af70ad03fdb>) — [electron/ai/provider-usage.cjs:140](<../../../../../../electron/ai/provider-usage.cjs#L140>)

**Called by (statically resolved):**

- [registerAiIpc.&lt;anonymous@234:27&gt;](<ipc.cjs.md#s-59695f8ef1241f96>) — [electron/ai/ipc.cjs:244](<../../../../../../electron/ai/ipc.cjs#L244>)
- [ProviderUsageService.get](<provider-usage.cjs.md#s-b3bdf66ecb1c6a64>) — [electron/ai/provider-usage.cjs:137](<../../../../../../electron/ai/provider-usage.cjs#L137>)
- [ProviderUsageService.legacyGet](<provider-usage.cjs.md#s-906aad26021a121e>) — [electron/ai/provider-usage.cjs:162](<../../../../../../electron/ai/provider-usage.cjs#L162>)
- [&lt;anonymous@52:93&gt;](<provider-usage.test.cjs.md#s-cccff9735f013a34>) — [electron/ai/provider-usage.test.cjs:61](<../../../../../../electron/ai/provider-usage.test.cjs#L61>)
- [&lt;anonymous@76:85&gt;](<provider-usage.test.cjs.md#s-90288f16376b5ec7>) — [electron/ai/provider-usage.test.cjs:80](<../../../../../../electron/ai/provider-usage.test.cjs#L80>)
- [&lt;anonymous@76:85&gt;](<provider-usage.test.cjs.md#s-90288f16376b5ec7>) — [electron/ai/provider-usage.test.cjs:84](<../../../../../../electron/ai/provider-usage.test.cjs#L84>)
- [&lt;anonymous@76:85&gt;](<provider-usage.test.cjs.md#s-90288f16376b5ec7>) — [electron/ai/provider-usage.test.cjs:88](<../../../../../../electron/ai/provider-usage.test.cjs#L88>)
- [&lt;anonymous@90:107&gt;](<provider-usage.test.cjs.md#s-2a0be109b1566d5b>) — [electron/ai/provider-usage.test.cjs:104](<../../../../../../electron/ai/provider-usage.test.cjs#L104>)
- [&lt;anonymous@90:107&gt;](<provider-usage.test.cjs.md#s-2a0be109b1566d5b>) — [electron/ai/provider-usage.test.cjs:107](<../../../../../../electron/ai/provider-usage.test.cjs#L107>)
- [&lt;anonymous@90:107&gt;](<provider-usage.test.cjs.md#s-2a0be109b1566d5b>) — [electron/ai/provider-usage.test.cjs:108](<../../../../../../electron/ai/provider-usage.test.cjs#L108>)
- [&lt;anonymous@90:107&gt;](<provider-usage.test.cjs.md#s-2a0be109b1566d5b>) — [electron/ai/provider-usage.test.cjs:112](<../../../../../../electron/ai/provider-usage.test.cjs#L112>)
- [&lt;anonymous@90:107&gt;](<provider-usage.test.cjs.md#s-2a0be109b1566d5b>) — [electron/ai/provider-usage.test.cjs:120](<../../../../../../electron/ai/provider-usage.test.cjs#L120>)
- [&lt;anonymous@90:107&gt;](<provider-usage.test.cjs.md#s-2a0be109b1566d5b>) — [electron/ai/provider-usage.test.cjs:122](<../../../../../../electron/ai/provider-usage.test.cjs#L122>)
- [&lt;anonymous@90:107&gt;](<provider-usage.test.cjs.md#s-2a0be109b1566d5b>) — [electron/ai/provider-usage.test.cjs:124](<../../../../../../electron/ai/provider-usage.test.cjs#L124>)
- [&lt;anonymous@126:71&gt;](<provider-usage.test.cjs.md#s-9d269a2557378392>) — [electron/ai/provider-usage.test.cjs:130](<../../../../../../electron/ai/provider-usage.test.cjs#L130>)
- [&lt;anonymous@126:71&gt;](<provider-usage.test.cjs.md#s-9d269a2557378392>) — [electron/ai/provider-usage.test.cjs:141](<../../../../../../electron/ai/provider-usage.test.cjs#L141>)
- [&lt;anonymous@143:115&gt;](<provider-usage.test.cjs.md#s-8adc6e35b9ff326c>) — [electron/ai/provider-usage.test.cjs:151](<../../../../../../electron/ai/provider-usage.test.cjs#L151>)
- [&lt;anonymous@143:115&gt;](<provider-usage.test.cjs.md#s-8adc6e35b9ff326c>) — [electron/ai/provider-usage.test.cjs:162](<../../../../../../electron/ai/provider-usage.test.cjs#L162>)
- [&lt;anonymous@143:115&gt;](<provider-usage.test.cjs.md#s-8adc6e35b9ff326c>) — [electron/ai/provider-usage.test.cjs:168](<../../../../../../electron/ai/provider-usage.test.cjs#L168>)
- [&lt;anonymous@170:106&gt;](<provider-usage.test.cjs.md#s-63d23bf405555fc5>) — [electron/ai/provider-usage.test.cjs:188](<../../../../../../electron/ai/provider-usage.test.cjs#L188>)
- [&lt;anonymous@170:106&gt;](<provider-usage.test.cjs.md#s-63d23bf405555fc5>) — [electron/ai/provider-usage.test.cjs:203](<../../../../../../electron/ai/provider-usage.test.cjs#L203>)

Unresolved / external call sites: 8.

- this.credentials.get — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:103](<../../../../../../electron/ai/provider-usage.cjs#L103>)
- new Date(this.now()).toISOString — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:120](<../../../../../../electron/ai/provider-usage.cjs#L120>)
- Date — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:120](<../../../../../../electron/ai/provider-usage.cjs#L120>)
- this.now — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:120](<../../../../../../electron/ai/provider-usage.cjs#L120>)
- id.split(":")&#91;1&#93;.slice — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:124](<../../../../../../electron/ai/provider-usage.cjs#L124>)
- id.split — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:124](<../../../../../../electron/ai/provider-usage.cjs#L124>)
- this.credentials.get — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:129](<../../../../../../electron/ai/provider-usage.cjs#L129>)
- this.meters.get — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:143](<../../../../../../electron/ai/provider-usage.cjs#L143>)

**Related tests / acceptance harnesses:**

- [electron/ai/provider-usage.test.cjs:61](<../../../../../../electron/ai/provider-usage.test.cjs#L61>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:80](<../../../../../../electron/ai/provider-usage.test.cjs#L80>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:84](<../../../../../../electron/ai/provider-usage.test.cjs#L84>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:88](<../../../../../../electron/ai/provider-usage.test.cjs#L88>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:104](<../../../../../../electron/ai/provider-usage.test.cjs#L104>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:107](<../../../../../../electron/ai/provider-usage.test.cjs#L107>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:108](<../../../../../../electron/ai/provider-usage.test.cjs#L108>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:112](<../../../../../../electron/ai/provider-usage.test.cjs#L112>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:120](<../../../../../../electron/ai/provider-usage.test.cjs#L120>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:122](<../../../../../../electron/ai/provider-usage.test.cjs#L122>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:124](<../../../../../../electron/ai/provider-usage.test.cjs#L124>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:130](<../../../../../../electron/ai/provider-usage.test.cjs#L130>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:141](<../../../../../../electron/ai/provider-usage.test.cjs#L141>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:151](<../../../../../../electron/ai/provider-usage.test.cjs#L151>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:162](<../../../../../../electron/ai/provider-usage.test.cjs#L162>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:168](<../../../../../../electron/ai/provider-usage.test.cjs#L168>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:188](<../../../../../../electron/ai/provider-usage.test.cjs#L188>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:203](<../../../../../../electron/ai/provider-usage.test.cjs#L203>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:6](<../../../../../../electron/ai/provider-usage.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-906aad26021a121e"></a>

## ProviderUsageService.legacyGet

[electron/ai/provider-usage.cjs:160](<../../../../../../electron/ai/provider-usage.cjs#L160>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProviderUsageService](<provider-usage.cjs.md#s-7eedeca0231bad00>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| options | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ProviderUsageService.get](<provider-usage.cjs.md#s-b3bdf66ecb1c6a64>) — [electron/ai/provider-usage.cjs:162](<../../../../../../electron/ai/provider-usage.cjs#L162>)
- [blank](<openrouter-usage.cjs.md#s-deed3178dcebd830>) — [electron/ai/provider-usage.cjs:163](<../../../../../../electron/ai/provider-usage.cjs#L163>)

**Called by (statically resolved):**

- [registerAiIpc.&lt;anonymous@227:29&gt;](<ipc.cjs.md#s-9a5b5d7115ce321f>) — [electron/ai/ipc.cjs:232](<../../../../../../electron/ai/ipc.cjs#L232>)

Unresolved / external call sites: 1.

- this.registry.read — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:161](<../../../../../../electron/ai/provider-usage.cjs#L161>)

**Related tests / acceptance harnesses:**

- [electron/ai/provider-usage.test.cjs:6](<../../../../../../electron/ai/provider-usage.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-3859f05b17dd7d5e"></a>

## observeProviderUsage

[electron/ai/provider-usage.cjs:169](<../../../../../../electron/ai/provider-usage.cjs#L169>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: observeProviderUsage ([electron/ai/provider-usage.cjs:1](<../../../../../../electron/ai/provider-usage.cjs#L1>)).

Lexical owner: [electron/ai/provider-usage.cjs](<provider-usage.cjs.md#s-be349f9dbe9bac49>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| adapter | any | compiler-inferred | required |
| provider | any | compiler-inferred | required |
| credentials | any | compiler-inferred | required |
| usage | any | compiler-inferred | required |
| onChanged | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [registerAiIpc](<ipc.cjs.md#s-72b9bbec8be3a0eb>) — [electron/ai/ipc.cjs:65](<../../../../../../electron/ai/ipc.cjs#L65>)
- [&lt;anonymous@170:106&gt;](<provider-usage.test.cjs.md#s-63d23bf405555fc5>) — [electron/ai/provider-usage.test.cjs:179](<../../../../../../electron/ai/provider-usage.test.cjs#L179>)
- [&lt;anonymous@170:106&gt;](<provider-usage.test.cjs.md#s-63d23bf405555fc5>) — [electron/ai/provider-usage.test.cjs:195](<../../../../../../electron/ai/provider-usage.test.cjs#L195>)
- [&lt;anonymous@170:106&gt;](<provider-usage.test.cjs.md#s-63d23bf405555fc5>) — [electron/ai/provider-usage.test.cjs:205](<../../../../../../electron/ai/provider-usage.test.cjs#L205>)

Unresolved / external call sites: 1.

- adapter.complete.bind — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:177](<../../../../../../electron/ai/provider-usage.cjs#L177>)

**Related tests / acceptance harnesses:**

- [electron/ai/provider-usage.test.cjs:179](<../../../../../../electron/ai/provider-usage.test.cjs#L179>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:195](<../../../../../../electron/ai/provider-usage.test.cjs#L195>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:205](<../../../../../../electron/ai/provider-usage.test.cjs#L205>) — static-call-site; coverage not established.
- [electron/ai/provider-usage.test.cjs:6](<../../../../../../electron/ai/provider-usage.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-e3b6121331f49330"></a>

## observeProviderUsage.&lt;anonymous@178:22&gt;

[electron/ai/provider-usage.cjs:178](<../../../../../../electron/ai/provider-usage.cjs#L178>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [observeProviderUsage](<provider-usage.cjs.md#s-3859f05b17dd7d5e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- usage.version — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:179](<../../../../../../electron/ai/provider-usage.cjs#L179>)
- credentials.get — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:182](<../../../../../../electron/ai/provider-usage.cjs#L182>)
- complete — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:184](<../../../../../../electron/ai/provider-usage.cjs#L184>)
- usage.record — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:186](<../../../../../../electron/ai/provider-usage.cjs#L186>)
- onChanged — external-or-dynamic-dispatch; [electron/ai/provider-usage.cjs:187](<../../../../../../electron/ai/provider-usage.cjs#L187>)

**Related tests / acceptance harnesses:**

- [electron/ai/provider-usage.test.cjs:6](<../../../../../../electron/ai/provider-usage.test.cjs#L6>) — file-import-only; coverage not established.
