# scripts/fixtures/online-smoke-fetch.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/fixtures/online-smoke-fetch.cjs:1](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/fixtures/online-smoke-fetch.cjs](<online-smoke-fetch.cjs.md#s-b65beb692502d114>) (Module)
- [createOnlineSmokeFetch](<online-smoke-fetch.cjs.md#s-973fc4236a88815b>) (FunctionDeclaration)
- [createOnlineSmokeFetch.sourceEnvelope](<online-smoke-fetch.cjs.md#s-9d6482d3bf2ccd80>) (ArrowFunction)
- [createOnlineSmokeFetch.datasetPlan](<online-smoke-fetch.cjs.md#s-888b76fcb6663a01>) (ArrowFunction)
- [createOnlineSmokeFetch.fetchImpl](<online-smoke-fetch.cjs.md#s-2b279badb905354a>) (ArrowFunction)
- [createOnlineSmokeFetch.fetchImpl.start](<online-smoke-fetch.cjs.md#s-926a3c96fbe4b8bc>) (MethodDeclaration)
- [createOnlineSmokeFetch.fetchImpl.start.event](<online-smoke-fetch.cjs.md#s-2aeeff8188e1bf83>) (ArrowFunction)
- [createOnlineSmokeFetch.fetchImpl.start.&lt;anonymous@174:15&gt;](<online-smoke-fetch.cjs.md#s-384d409a244f0278>) (ArrowFunction)
- [createOnlineSmokeFetch.fetchImpl.start.&lt;anonymous@201:15&gt;](<online-smoke-fetch.cjs.md#s-ff77263a703335c4>) (ArrowFunction)
- [createOnlineSmokeFetch.fetchImpl.cancel](<online-smoke-fetch.cjs.md#s-22628602997d3ffb>) (MethodDeclaration)
- [createOnlineSmokeFetch.fetchImpl.&lt;anonymous@237:27&gt;](<online-smoke-fetch.cjs.md#s-c9d1ace2d94b546a>) (ArrowFunction)
- [createOnlineSmokeFetch.fetchImpl.&lt;anonymous@237:27&gt;.abort](<online-smoke-fetch.cjs.md#s-c50f60458b29abbf>) (ArrowFunction)
- [createOnlineSmokeFetch.fetchImpl.&lt;anonymous@237:27&gt;.&lt;anonymous@242:36&gt;](<online-smoke-fetch.cjs.md#s-2ad2d8db4304d995>) (ArrowFunction)
- [createOnlineSmokeFetch.fetchImpl.&lt;anonymous@292:20&gt;](<online-smoke-fetch.cjs.md#s-32b7f84eda85fa9a>) (ArrowFunction)
- [createOnlineSmokeFetch.fetchImpl.start](<online-smoke-fetch.cjs.md#s-abe78596bb3157db>) (MethodDeclaration)
- [createOnlineSmokeFetch.fetchImpl.start.event](<online-smoke-fetch.cjs.md#s-04989732e82b05b2>) (ArrowFunction)
- [createOnlineSmokeFetch.fetchImpl.start.&lt;anonymous@338:38&gt;](<online-smoke-fetch.cjs.md#s-5a4613cf3835c995>) (ArrowFunction)
- [createOnlineSmokeFetch.fetchImpl.start.&lt;anonymous@344:15&gt;](<online-smoke-fetch.cjs.md#s-f88eaee86d4d4dc6>) (ArrowFunction)

<a id="s-b65beb692502d114"></a>

## scripts/fixtures/online-smoke-fetch.cjs

[scripts/fixtures/online-smoke-fetch.cjs:1](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.

<a id="s-973fc4236a88815b"></a>

## createOnlineSmokeFetch

[scripts/fixtures/online-smoke-fetch.cjs:2](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L2>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: createOnlineSmokeFetch ([scripts/fixtures/online-smoke-fetch.cjs:1](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L1>)).

Lexical owner: [scripts/fixtures/online-smoke-fetch.cjs](<online-smoke-fetch.cjs.md#s-b65beb692502d114>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { state: { requests: {}; localRequests: {}; status: number; nvidiaModelStatuses: {}; checkDelayMs: number; openrouterCatalogStatus: number; usageStatus: number; usageRequests: number; reportTokenUsage: boolean; engineToolMode: string; entityProtocolReply: any; usageData: { limit: number; limit_remaining: number; limit_reset: string; usage_weekly: number; }; }; fetchImpl: (url: any, init?: {}) =&gt; any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [scripts/acceptance/electron-front-office-smoke-main.cjs](<../acceptance/electron-front-office-smoke-main.cjs.md#s-a2dbd42e272ef9e9>) — [scripts/acceptance/electron-front-office-smoke-main.cjs:12](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L12>)
- [scripts/acceptance/electron-online-smoke-main.cjs](<../acceptance/electron-online-smoke-main.cjs.md#s-a312d35cd892736e>) — [scripts/acceptance/electron-online-smoke-main.cjs:18](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L18>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-front-office-smoke-main.cjs:12](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L12>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:18](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L18>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.

<a id="s-9d6482d3bf2ccd80"></a>

## createOnlineSmokeFetch.sourceEnvelope

[scripts/fixtures/online-smoke-fetch.cjs:4](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L4>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createOnlineSmokeFetch](<online-smoke-fetch.cjs.md#s-973fc4236a88815b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createOnlineSmokeFetch.fetchImpl](<online-smoke-fetch.cjs.md#s-2b279badb905354a>) — [scripts/fixtures/online-smoke-fetch.cjs:143](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L143>)
- [createOnlineSmokeFetch.fetchImpl](<online-smoke-fetch.cjs.md#s-2b279badb905354a>) — [scripts/fixtures/online-smoke-fetch.cjs:235](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L235>)
- [createOnlineSmokeFetch.fetchImpl](<online-smoke-fetch.cjs.md#s-2b279badb905354a>) — [scripts/fixtures/online-smoke-fetch.cjs:320](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L320>)

Unresolved / external call sites: 1.

- JSON.parse — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:6](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L6>)

**Related tests / acceptance harnesses:**

- [scripts/fixtures/online-smoke-fetch.cjs:143](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L143>) — static-call-site; coverage not established.
- [scripts/fixtures/online-smoke-fetch.cjs:235](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L235>) — static-call-site; coverage not established.
- [scripts/fixtures/online-smoke-fetch.cjs:320](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L320>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.

<a id="s-888b76fcb6663a01"></a>

## createOnlineSmokeFetch.datasetPlan

[scripts/fixtures/online-smoke-fetch.cjs:30](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L30>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createOnlineSmokeFetch](<online-smoke-fetch.cjs.md#s-973fc4236a88815b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| body | any | compiler-inferred | required |

Returns: { task: string; queries: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createOnlineSmokeFetch.fetchImpl](<online-smoke-fetch.cjs.md#s-2b279badb905354a>) — [scripts/fixtures/online-smoke-fetch.cjs:144](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L144>)
- [createOnlineSmokeFetch.fetchImpl](<online-smoke-fetch.cjs.md#s-2b279badb905354a>) — [scripts/fixtures/online-smoke-fetch.cjs:145](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L145>)
- [createOnlineSmokeFetch.fetchImpl](<online-smoke-fetch.cjs.md#s-2b279badb905354a>) — [scripts/fixtures/online-smoke-fetch.cjs:282](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L282>)
- [createOnlineSmokeFetch.fetchImpl](<online-smoke-fetch.cjs.md#s-2b279badb905354a>) — [scripts/fixtures/online-smoke-fetch.cjs:283](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L283>)
- [createOnlineSmokeFetch.fetchImpl](<online-smoke-fetch.cjs.md#s-2b279badb905354a>) — [scripts/fixtures/online-smoke-fetch.cjs:328](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L328>)
- [createOnlineSmokeFetch.fetchImpl](<online-smoke-fetch.cjs.md#s-2b279badb905354a>) — [scripts/fixtures/online-smoke-fetch.cjs:374](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L374>)

Unresolved / external call sites: 1.

- system.includes — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:35](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L35>)

**Related tests / acceptance harnesses:**

- [scripts/fixtures/online-smoke-fetch.cjs:144](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L144>) — static-call-site; coverage not established.
- [scripts/fixtures/online-smoke-fetch.cjs:145](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L145>) — static-call-site; coverage not established.
- [scripts/fixtures/online-smoke-fetch.cjs:282](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L282>) — static-call-site; coverage not established.
- [scripts/fixtures/online-smoke-fetch.cjs:283](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L283>) — static-call-site; coverage not established.
- [scripts/fixtures/online-smoke-fetch.cjs:328](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L328>) — static-call-site; coverage not established.
- [scripts/fixtures/online-smoke-fetch.cjs:374](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L374>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.

<a id="s-2b279badb905354a"></a>

## createOnlineSmokeFetch.fetchImpl

[scripts/fixtures/online-smoke-fetch.cjs:42](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L42>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createOnlineSmokeFetch](<online-smoke-fetch.cjs.md#s-973fc4236a88815b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| url | any | compiler-inferred | required |
| init | {} | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createOnlineSmokeFetch.sourceEnvelope](<online-smoke-fetch.cjs.md#s-9d6482d3bf2ccd80>) — [scripts/fixtures/online-smoke-fetch.cjs:143](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L143>)
- [createOnlineSmokeFetch.datasetPlan](<online-smoke-fetch.cjs.md#s-888b76fcb6663a01>) — [scripts/fixtures/online-smoke-fetch.cjs:144](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L144>)
- [createOnlineSmokeFetch.datasetPlan](<online-smoke-fetch.cjs.md#s-888b76fcb6663a01>) — [scripts/fixtures/online-smoke-fetch.cjs:145](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L145>)
- [createOnlineSmokeFetch.sourceEnvelope](<online-smoke-fetch.cjs.md#s-9d6482d3bf2ccd80>) — [scripts/fixtures/online-smoke-fetch.cjs:235](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L235>)
- [createOnlineSmokeFetch.datasetPlan](<online-smoke-fetch.cjs.md#s-888b76fcb6663a01>) — [scripts/fixtures/online-smoke-fetch.cjs:282](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L282>)
- [createOnlineSmokeFetch.datasetPlan](<online-smoke-fetch.cjs.md#s-888b76fcb6663a01>) — [scripts/fixtures/online-smoke-fetch.cjs:283](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L283>)
- [createOnlineSmokeFetch.sourceEnvelope](<online-smoke-fetch.cjs.md#s-9d6482d3bf2ccd80>) — [scripts/fixtures/online-smoke-fetch.cjs:320](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L320>)
- [createOnlineSmokeFetch.datasetPlan](<online-smoke-fetch.cjs.md#s-888b76fcb6663a01>) — [scripts/fixtures/online-smoke-fetch.cjs:328](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L328>)
- [createOnlineSmokeFetch.datasetPlan](<online-smoke-fetch.cjs.md#s-888b76fcb6663a01>) — [scripts/fixtures/online-smoke-fetch.cjs:374](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L374>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 54.

- URL — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:43](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L43>)
- JSON.parse — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:44](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L44>)
- state.localRequests.push — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:52](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L52>)
- state.entityProtocolReply — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:53](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L53>)
- Response — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:54](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L54>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:55](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L55>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:57](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L57>)
- state.localRequests.push — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:71](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L71>)
- 46 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.

<a id="s-926a3c96fbe4b8bc"></a>

## createOnlineSmokeFetch.fetchImpl.start

[scripts/fixtures/online-smoke-fetch.cjs:155](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L155>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createOnlineSmokeFetch.fetchImpl](<online-smoke-fetch.cjs.md#s-2b279badb905354a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| controller | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createOnlineSmokeFetch.fetchImpl.start.event](<online-smoke-fetch.cjs.md#s-2aeeff8188e1bf83>) — [scripts/fixtures/online-smoke-fetch.cjs:160](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L160>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- controller.enqueue — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:158](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L158>)
- encoder.encode — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:158](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L158>)
- controller.enqueue — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:159](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L159>)
- answer.slice — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:166](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L166>)
- setTimeout — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:173](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L173>)
- init.signal?.addEventListener — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:199](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L199>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.

<a id="s-2aeeff8188e1bf83"></a>

## createOnlineSmokeFetch.fetchImpl.start.event

[scripts/fixtures/online-smoke-fetch.cjs:156](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L156>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createOnlineSmokeFetch.fetchImpl.start](<online-smoke-fetch.cjs.md#s-926a3c96fbe4b8bc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createOnlineSmokeFetch.fetchImpl.start](<online-smoke-fetch.cjs.md#s-926a3c96fbe4b8bc>) — [scripts/fixtures/online-smoke-fetch.cjs:160](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L160>)
- [createOnlineSmokeFetch.fetchImpl.start.&lt;anonymous@174:15&gt;](<online-smoke-fetch.cjs.md#s-384d409a244f0278>) — [scripts/fixtures/online-smoke-fetch.cjs:176](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L176>)
- [createOnlineSmokeFetch.fetchImpl.start.&lt;anonymous@174:15&gt;](<online-smoke-fetch.cjs.md#s-384d409a244f0278>) — [scripts/fixtures/online-smoke-fetch.cjs:187](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L187>)

Unresolved / external call sites: 2.

- encoder.encode — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:157](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L157>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:157](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L157>)

**Related tests / acceptance harnesses:**

- [scripts/fixtures/online-smoke-fetch.cjs:160](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L160>) — static-call-site; coverage not established.
- [scripts/fixtures/online-smoke-fetch.cjs:176](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L176>) — static-call-site; coverage not established.
- [scripts/fixtures/online-smoke-fetch.cjs:187](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L187>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.

<a id="s-384d409a244f0278"></a>

## createOnlineSmokeFetch.fetchImpl.start.&lt;anonymous@174:15&gt;

[scripts/fixtures/online-smoke-fetch.cjs:174](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L174>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createOnlineSmokeFetch.fetchImpl.start](<online-smoke-fetch.cjs.md#s-926a3c96fbe4b8bc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createOnlineSmokeFetch.fetchImpl.start.event](<online-smoke-fetch.cjs.md#s-2aeeff8188e1bf83>) — [scripts/fixtures/online-smoke-fetch.cjs:176](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L176>)
- [createOnlineSmokeFetch.fetchImpl.start.event](<online-smoke-fetch.cjs.md#s-2aeeff8188e1bf83>) — [scripts/fixtures/online-smoke-fetch.cjs:187](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L187>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- controller.enqueue — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:175](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L175>)
- answer.slice — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:180](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L180>)
- controller.enqueue — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:186](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L186>)
- controller.enqueue — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:192](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L192>)
- encoder.encode — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:192](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L192>)
- controller.close — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:193](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L193>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.

<a id="s-ff77263a703335c4"></a>

## createOnlineSmokeFetch.fetchImpl.start.&lt;anonymous@201:15&gt;

[scripts/fixtures/online-smoke-fetch.cjs:201](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L201>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createOnlineSmokeFetch.fetchImpl.start](<online-smoke-fetch.cjs.md#s-926a3c96fbe4b8bc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- clearTimeout — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:202](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L202>)
- controller.error — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:204](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L204>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.

<a id="s-22628602997d3ffb"></a>

## createOnlineSmokeFetch.fetchImpl.cancel

[scripts/fixtures/online-smoke-fetch.cjs:210](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L210>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createOnlineSmokeFetch.fetchImpl](<online-smoke-fetch.cjs.md#s-2b279badb905354a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- clearTimeout — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:211](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L211>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.

<a id="s-c9d1ace2d94b546a"></a>

## createOnlineSmokeFetch.fetchImpl.&lt;anonymous@237:27&gt;

[scripts/fixtures/online-smoke-fetch.cjs:237](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L237>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createOnlineSmokeFetch.fetchImpl](<online-smoke-fetch.cjs.md#s-2b279badb905354a>).

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

- setTimeout — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:242](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L242>)
- init.signal.addEventListener — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:246](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L246>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.

<a id="s-c50f60458b29abbf"></a>

## createOnlineSmokeFetch.fetchImpl.&lt;anonymous@237:27&gt;.abort

[scripts/fixtures/online-smoke-fetch.cjs:238](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L238>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createOnlineSmokeFetch.fetchImpl.&lt;anonymous@237:27&gt;](<online-smoke-fetch.cjs.md#s-c9d1ace2d94b546a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- clearTimeout — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:239](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L239>)
- reject — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:240](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L240>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.

<a id="s-2ad2d8db4304d995"></a>

## createOnlineSmokeFetch.fetchImpl.&lt;anonymous@237:27&gt;.&lt;anonymous@242:36&gt;

[scripts/fixtures/online-smoke-fetch.cjs:242](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L242>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createOnlineSmokeFetch.fetchImpl.&lt;anonymous@237:27&gt;](<online-smoke-fetch.cjs.md#s-c9d1ace2d94b546a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- init.signal.removeEventListener — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:243](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L243>)
- resolve — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:244](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L244>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.

<a id="s-32b7f84eda85fa9a"></a>

## createOnlineSmokeFetch.fetchImpl.&lt;anonymous@292:20&gt;

[scripts/fixtures/online-smoke-fetch.cjs:292](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L292>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createOnlineSmokeFetch.fetchImpl](<online-smoke-fetch.cjs.md#s-2b279badb905354a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- JSON.stringify — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:292](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L292>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.

<a id="s-abe78596bb3157db"></a>

## createOnlineSmokeFetch.fetchImpl.start

[scripts/fixtures/online-smoke-fetch.cjs:332](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L332>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createOnlineSmokeFetch.fetchImpl](<online-smoke-fetch.cjs.md#s-2b279badb905354a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| controller | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createOnlineSmokeFetch.fetchImpl.start.event](<online-smoke-fetch.cjs.md#s-04989732e82b05b2>) — [scripts/fixtures/online-smoke-fetch.cjs:337](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L337>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- controller.enqueue — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:337](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L337>)
- encoded.slice — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:337](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L337>)
- setTimeout — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:338](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L338>)
- init.signal.addEventListener — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:342](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L342>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.

<a id="s-04989732e82b05b2"></a>

## createOnlineSmokeFetch.fetchImpl.start.event

[scripts/fixtures/online-smoke-fetch.cjs:333](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L333>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createOnlineSmokeFetch.fetchImpl.start](<online-smoke-fetch.cjs.md#s-abe78596bb3157db>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |
| finishReason | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createOnlineSmokeFetch.fetchImpl.start](<online-smoke-fetch.cjs.md#s-abe78596bb3157db>) — [scripts/fixtures/online-smoke-fetch.cjs:337](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L337>)
- [createOnlineSmokeFetch.fetchImpl.start.&lt;anonymous@338:38&gt;](<online-smoke-fetch.cjs.md#s-5a4613cf3835c995>) — [scripts/fixtures/online-smoke-fetch.cjs:339](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L339>)

Unresolved / external call sites: 2.

- encoder.encode — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:334](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L334>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:335](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L335>)

**Related tests / acceptance harnesses:**

- [scripts/fixtures/online-smoke-fetch.cjs:337](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L337>) — static-call-site; coverage not established.
- [scripts/fixtures/online-smoke-fetch.cjs:339](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L339>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.

<a id="s-5a4613cf3835c995"></a>

## createOnlineSmokeFetch.fetchImpl.start.&lt;anonymous@338:38&gt;

[scripts/fixtures/online-smoke-fetch.cjs:338](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L338>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createOnlineSmokeFetch.fetchImpl.start](<online-smoke-fetch.cjs.md#s-abe78596bb3157db>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createOnlineSmokeFetch.fetchImpl.start.event](<online-smoke-fetch.cjs.md#s-04989732e82b05b2>) — [scripts/fixtures/online-smoke-fetch.cjs:339](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L339>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- controller.enqueue — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:339](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L339>)
- encoded.slice — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:339](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L339>)
- controller.close — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:340](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L340>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.

<a id="s-f88eaee86d4d4dc6"></a>

## createOnlineSmokeFetch.fetchImpl.start.&lt;anonymous@344:15&gt;

[scripts/fixtures/online-smoke-fetch.cjs:344](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L344>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createOnlineSmokeFetch.fetchImpl.start](<online-smoke-fetch.cjs.md#s-abe78596bb3157db>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- clearTimeout — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:345](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L345>)
- controller.error — external-or-dynamic-dispatch; [scripts/fixtures/online-smoke-fetch.cjs:346](<../../../../../../scripts/fixtures/online-smoke-fetch.cjs#L346>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-front-office-smoke-main.cjs:11](<../../../../../../scripts/acceptance/electron-front-office-smoke-main.cjs#L11>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-smoke-main.cjs:17](<../../../../../../scripts/acceptance/electron-online-smoke-main.cjs#L17>) — file-import-only; coverage not established.
