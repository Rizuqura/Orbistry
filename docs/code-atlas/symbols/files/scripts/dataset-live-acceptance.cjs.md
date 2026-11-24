# scripts/dataset-live-acceptance.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/dataset-live-acceptance.cjs:1](<../../../../../scripts/dataset-live-acceptance.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/dataset-live-acceptance.cjs](<dataset-live-acceptance.cjs.md#s-af140f15d877cf09>) (Module)
- [main](<dataset-live-acceptance.cjs.md#s-926d3fce0595b737>) (FunctionDeclaration)
- [main.&lt;anonymous@24:23&gt;](<dataset-live-acceptance.cjs.md#s-2867f2759c97c7f9>) (ArrowFunction)
- [main.&lt;anonymous@24:23&gt;.onContent](<dataset-live-acceptance.cjs.md#s-900d26ac5c99ca98>) (ArrowFunction)
- [main.&lt;anonymous@97:45&gt;](<dataset-live-acceptance.cjs.md#s-393ceb84f0996ccd>) (ArrowFunction)
- [main.&lt;anonymous@97:45&gt;.&lt;anonymous@98:25&gt;](<dataset-live-acceptance.cjs.md#s-4a723b776322e539>) (ArrowFunction)
- [main.&lt;anonymous@103:45&gt;](<dataset-live-acceptance.cjs.md#s-fa9b520d82d17efe>) (ArrowFunction)
- [main.&lt;anonymous@103:45&gt;.&lt;anonymous@105:11&gt;](<dataset-live-acceptance.cjs.md#s-9db2e580ce074d5e>) (ArrowFunction)
- [main.&lt;anonymous@117:44&gt;](<dataset-live-acceptance.cjs.md#s-3d35d0107c1441d8>) (ArrowFunction)
- [main.&lt;anonymous@118:14&gt;](<dataset-live-acceptance.cjs.md#s-8bc59b5529f23559>) (ArrowFunction)
- [main.&lt;anonymous@118:14&gt;.&lt;anonymous@118:37&gt;](<dataset-live-acceptance.cjs.md#s-ec71bf226ca978cd>) (ArrowFunction)
- [&lt;anonymous@135:14&gt;](<dataset-live-acceptance.cjs.md#s-8a7975097e9ef47d>) (ArrowFunction)
- [createBound](<dataset-live-acceptance.cjs.md#s-594b6adc8dae680f>) (FunctionDeclaration)

<a id="s-af140f15d877cf09"></a>

## scripts/dataset-live-acceptance.cjs

[scripts/dataset-live-acceptance.cjs:1](<../../../../../scripts/dataset-live-acceptance.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<dataset-live-acceptance.cjs.md#s-926d3fce0595b737>) — [scripts/dataset-live-acceptance.cjs:135](<../../../../../scripts/dataset-live-acceptance.cjs#L135>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 10.

- require — module-loader; [scripts/dataset-live-acceptance.cjs:1](<../../../../../scripts/dataset-live-acceptance.cjs#L1>)
- require — module-loader; [scripts/dataset-live-acceptance.cjs:2](<../../../../../scripts/dataset-live-acceptance.cjs#L2>)
- require — module-loader; [scripts/dataset-live-acceptance.cjs:3](<../../../../../scripts/dataset-live-acceptance.cjs#L3>)
- require — module-loader; [scripts/dataset-live-acceptance.cjs:4](<../../../../../scripts/dataset-live-acceptance.cjs#L4>)
- require — module-loader; [scripts/dataset-live-acceptance.cjs:5](<../../../../../scripts/dataset-live-acceptance.cjs#L5>)
- require — module-loader; [scripts/dataset-live-acceptance.cjs:6](<../../../../../scripts/dataset-live-acceptance.cjs#L6>)
- require — module-loader; [scripts/dataset-live-acceptance.cjs:7](<../../../../../scripts/dataset-live-acceptance.cjs#L7>)
- require — module-loader; [scripts/dataset-live-acceptance.cjs:8](<../../../../../scripts/dataset-live-acceptance.cjs#L8>)
- 2 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-926d3fce0595b737"></a>

## main

[scripts/dataset-live-acceptance.cjs:13](<../../../../../scripts/dataset-live-acceptance.cjs#L13>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/dataset-live-acceptance.cjs](<dataset-live-acceptance.cjs.md#s-af140f15d877cf09>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OllamaProvider.constructor](<../electron/ai/providers/ollama-provider.cjs.md#s-6a0c68a6d6f2569c>) — [scripts/dataset-live-acceptance.cjs:17](<../../../../../scripts/dataset-live-acceptance.cjs#L17>)
- [ModelRegistry.constructor](<../electron/ai/model-registry.cjs.md#s-776a77db3083bdfd>) — [scripts/dataset-live-acceptance.cjs:18](<../../../../../scripts/dataset-live-acceptance.cjs#L18>)
- [ModelRegistry.save](<../electron/ai/model-registry.cjs.md#s-ad7b27a4e7ba4dc3>) — [scripts/dataset-live-acceptance.cjs:20](<../../../../../scripts/dataset-live-acceptance.cjs#L20>)
- [ChatService.constructor](<../electron/ai/chat/chat-service.cjs.md#s-821f32a93ec900a8>) — [scripts/dataset-live-acceptance.cjs:21](<../../../../../scripts/dataset-live-acceptance.cjs#L21>)
- [addContext](<../electron/domains/universe/station-service.cjs.md#s-8078b0ccaa1169b3>) — [scripts/dataset-live-acceptance.cjs:61](<../../../../../scripts/dataset-live-acceptance.cjs#L61>)
- [createBound](<dataset-live-acceptance.cjs.md#s-594b6adc8dae680f>) — [scripts/dataset-live-acceptance.cjs:62](<../../../../../scripts/dataset-live-acceptance.cjs#L62>)
- [ChatService.run](<../electron/ai/chat/chat-service.cjs.md#s-bed13c7861a5021f>) — [scripts/dataset-live-acceptance.cjs:78](<../../../../../scripts/dataset-live-acceptance.cjs#L78>)
- [ChatService.cancelAll](<../electron/ai/chat/chat-service.cjs.md#s-a13b96186264285e>) — [scripts/dataset-live-acceptance.cjs:125](<../../../../../scripts/dataset-live-acceptance.cjs#L125>)

**Called by (statically resolved):**

- [scripts/dataset-live-acceptance.cjs](<dataset-live-acceptance.cjs.md#s-af140f15d877cf09>) — [scripts/dataset-live-acceptance.cjs:135](<../../../../../scripts/dataset-live-acceptance.cjs#L135>)

Unresolved / external call sites: 39.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:14](<../../../../../scripts/dataset-live-acceptance.cjs#L14>)
- path.join — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:15](<../../../../../scripts/dataset-live-acceptance.cjs#L15>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:15](<../../../../../scripts/dataset-live-acceptance.cjs#L15>)
- path.join — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:18](<../../../../../scripts/dataset-live-acceptance.cjs#L18>)
- provider.complete.bind — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:22](<../../../../../scripts/dataset-live-acceptance.cjs#L22>)
- String(1 + (i % 4) * 3).padStart — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:51](<../../../../../scripts/dataset-live-acceptance.cjs#L51>)
- String — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:51](<../../../../../scripts/dataset-live-acceptance.cjs#L51>)
- rows.push — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:52](<../../../../../scripts/dataset-live-acceptance.cjs#L52>)
- 31 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/dataset-live-acceptance.cjs:135](<../../../../../scripts/dataset-live-acceptance.cjs#L135>) — static-call-site; coverage not established.

<a id="s-2867f2759c97c7f9"></a>

## main.&lt;anonymous@24:23&gt;

[scripts/dataset-live-acceptance.cjs:24](<../../../../../scripts/dataset-live-acceptance.cjs#L24>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<dataset-live-acceptance.cjs.md#s-926d3fce0595b737>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| request | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- new Date().toISOString — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:27](<../../../../../scripts/dataset-live-acceptance.cjs#L27>)
- Date — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:27](<../../../../../scripts/dataset-live-acceptance.cjs#L27>)
- calls.push — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:30](<../../../../../scripts/dataset-live-acceptance.cjs#L30>)
- process.stdout.write — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:31](<../../../../../scripts/dataset-live-acceptance.cjs#L31>)
- complete — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:34](<../../../../../scripts/dataset-live-acceptance.cjs#L34>)
- new Date().toISOString — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:41](<../../../../../scripts/dataset-live-acceptance.cjs#L41>)
- Date — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:41](<../../../../../scripts/dataset-live-acceptance.cjs#L41>)
- process.stdout.write — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:44](<../../../../../scripts/dataset-live-acceptance.cjs#L44>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-900d26ac5c99ca98"></a>

## main.&lt;anonymous@24:23&gt;.onContent

[scripts/dataset-live-acceptance.cjs:36](<../../../../../scripts/dataset-live-acceptance.cjs#L36>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.&lt;anonymous@24:23&gt;](<dataset-live-acceptance.cjs.md#s-2867f2759c97c7f9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| content | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- request.onContent — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:38](<../../../../../scripts/dataset-live-acceptance.cjs#L38>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-393ceb84f0996ccd"></a>

## main.&lt;anonymous@97:45&gt;

[scripts/dataset-live-acceptance.cjs:97](<../../../../../scripts/dataset-live-acceptance.cjs#L97>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<dataset-live-acceptance.cjs.md#s-926d3fce0595b737>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| r | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- r.results?.some — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:98](<../../../../../scripts/dataset-live-acceptance.cjs#L98>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4a723b776322e539"></a>

## main.&lt;anonymous@97:45&gt;.&lt;anonymous@98:25&gt;

[scripts/dataset-live-acceptance.cjs:98](<../../../../../scripts/dataset-live-acceptance.cjs#L98>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.&lt;anonymous@97:45&gt;](<dataset-live-acceptance.cjs.md#s-393ceb84f0996ccd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- row.values.includes — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:98](<../../../../../scripts/dataset-live-acceptance.cjs#L98>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fa9b520d82d17efe"></a>

## main.&lt;anonymous@103:45&gt;

[scripts/dataset-live-acceptance.cjs:103](<../../../../../scripts/dataset-live-acceptance.cjs#L103>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<dataset-live-acceptance.cjs.md#s-926d3fce0595b737>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| r | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- r.results?.some — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:104](<../../../../../scripts/dataset-live-acceptance.cjs#L104>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9db2e580ce074d5e"></a>

## main.&lt;anonymous@103:45&gt;.&lt;anonymous@105:11&gt;

[scripts/dataset-live-acceptance.cjs:105](<../../../../../scripts/dataset-live-acceptance.cjs#L105>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.&lt;anonymous@103:45&gt;](<dataset-live-acceptance.cjs.md#s-fa9b520d82d17efe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- row.values.includes — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:106](<../../../../../scripts/dataset-live-acceptance.cjs#L106>)
- row.values.includes — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:107](<../../../../../scripts/dataset-live-acceptance.cjs#L107>)
- row.values.includes — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:108](<../../../../../scripts/dataset-live-acceptance.cjs#L108>)
- row.values.includes — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:109](<../../../../../scripts/dataset-live-acceptance.cjs#L109>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3d35d0107c1441d8"></a>

## main.&lt;anonymous@117:44&gt;

[scripts/dataset-live-acceptance.cjs:117](<../../../../../scripts/dataset-live-acceptance.cjs#L117>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<dataset-live-acceptance.cjs.md#s-926d3fce0595b737>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entry | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8bc59b5529f23559"></a>

## main.&lt;anonymous@118:14&gt;

[scripts/dataset-live-acceptance.cjs:118](<../../../../../scripts/dataset-live-acceptance.cjs#L118>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<dataset-live-acceptance.cjs.md#s-926d3fce0595b737>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| r | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- r.results?.some — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:118](<../../../../../scripts/dataset-live-acceptance.cjs#L118>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ec71bf226ca978cd"></a>

## main.&lt;anonymous@118:14&gt;.&lt;anonymous@118:37&gt;

[scripts/dataset-live-acceptance.cjs:118](<../../../../../scripts/dataset-live-acceptance.cjs#L118>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.&lt;anonymous@118:14&gt;](<dataset-live-acceptance.cjs.md#s-8bc59b5529f23559>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| row | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- row.values.includes — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:118](<../../../../../scripts/dataset-live-acceptance.cjs#L118>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8a7975097e9ef47d"></a>

## &lt;anonymous@135:14&gt;

[scripts/dataset-live-acceptance.cjs:135](<../../../../../scripts/dataset-live-acceptance.cjs#L135>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/dataset-live-acceptance.cjs](<dataset-live-acceptance.cjs.md#s-af140f15d877cf09>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- process.stderr.write — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:136](<../../../../../scripts/dataset-live-acceptance.cjs#L136>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-594b6adc8dae680f"></a>

## createBound

[scripts/dataset-live-acceptance.cjs:140](<../../../../../scripts/dataset-live-acceptance.cjs#L140>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/dataset-live-acceptance.cjs](<dataset-live-acceptance.cjs.md#s-af140f15d877cf09>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| service | any | compiler-inferred | required |
| root | any | compiler-inferred | required |
| _scope | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<dataset-live-acceptance.cjs.md#s-926d3fce0595b737>) — [scripts/dataset-live-acceptance.cjs:62](<../../../../../scripts/dataset-live-acceptance.cjs#L62>)

Unresolved / external call sites: 6.

- service.saveBox — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:141](<../../../../../scripts/dataset-live-acceptance.cjs#L141>)
- require("node:crypto").randomUUID — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:142](<../../../../../scripts/dataset-live-acceptance.cjs#L142>)
- require — module-loader; [scripts/dataset-live-acceptance.cjs:142](<../../../../../scripts/dataset-live-acceptance.cjs#L142>)
- service.create — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:144](<../../../../../scripts/dataset-live-acceptance.cjs#L144>)
- require("node:crypto").randomUUID — external-or-dynamic-dispatch; [scripts/dataset-live-acceptance.cjs:146](<../../../../../scripts/dataset-live-acceptance.cjs#L146>)
- require — module-loader; [scripts/dataset-live-acceptance.cjs:146](<../../../../../scripts/dataset-live-acceptance.cjs#L146>)

**Related tests / acceptance harnesses:**

- [scripts/dataset-live-acceptance.cjs:62](<../../../../../scripts/dataset-live-acceptance.cjs#L62>) — static-call-site; coverage not established.
