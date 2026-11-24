# scripts/chat-live-acceptance.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/chat-live-acceptance.cjs:1](<../../../../../scripts/chat-live-acceptance.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/chat-live-acceptance.cjs](<chat-live-acceptance.cjs.md#s-77850f18af9b43cb>) (Module)
- [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) (FunctionDeclaration)
- [main.get](<chat-live-acceptance.cjs.md#s-35af0e7f7c7c32cd>) (ArrowFunction)
- [main.status](<chat-live-acceptance.cjs.md#s-01580d1a71ba4871>) (ArrowFunction)
- [main.turn](<chat-live-acceptance.cjs.md#s-5c02108372dfce52>) (FunctionDeclaration)
- [main.turn.&lt;anonymous@80:7&gt;](<chat-live-acceptance.cjs.md#s-9fde8995bc0dab80>) (ArrowFunction)
- [main.turn.&lt;anonymous@133:53&gt;](<chat-live-acceptance.cjs.md#s-6bbf90debea5c517>) (ArrowFunction)
- [main.turn.&lt;anonymous@134:24&gt;](<chat-live-acceptance.cjs.md#s-2d1d77fbaed27d3e>) (ArrowFunction)
- [main.&lt;anonymous@149:22&gt;](<chat-live-acceptance.cjs.md#s-295c29c87374b391>) (ArrowFunction)
- [main.&lt;anonymous@184:27&gt;](<chat-live-acceptance.cjs.md#s-bac357f6f8026025>) (ArrowFunction)
- [main.&lt;anonymous@218:28&gt;](<chat-live-acceptance.cjs.md#s-73c77bed4136b3b4>) (ArrowFunction)
- [main.&lt;anonymous@266:7&gt;](<chat-live-acceptance.cjs.md#s-ce937e581f65dc5a>) (ArrowFunction)
- [&lt;anonymous@300:14&gt;](<chat-live-acceptance.cjs.md#s-4a7e9002562c5ca8>) (ArrowFunction)
- [createBound](<chat-live-acceptance.cjs.md#s-28dd20fc728f3326>) (FunctionDeclaration)

<a id="s-77850f18af9b43cb"></a>

## scripts/chat-live-acceptance.cjs

[scripts/chat-live-acceptance.cjs:1](<../../../../../scripts/chat-live-acceptance.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:300](<../../../../../scripts/chat-live-acceptance.cjs#L300>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 13.

- require — module-loader; [scripts/chat-live-acceptance.cjs:1](<../../../../../scripts/chat-live-acceptance.cjs#L1>)
- require — module-loader; [scripts/chat-live-acceptance.cjs:2](<../../../../../scripts/chat-live-acceptance.cjs#L2>)
- require — module-loader; [scripts/chat-live-acceptance.cjs:3](<../../../../../scripts/chat-live-acceptance.cjs#L3>)
- require — module-loader; [scripts/chat-live-acceptance.cjs:4](<../../../../../scripts/chat-live-acceptance.cjs#L4>)
- require — module-loader; [scripts/chat-live-acceptance.cjs:5](<../../../../../scripts/chat-live-acceptance.cjs#L5>)
- require — module-loader; [scripts/chat-live-acceptance.cjs:6](<../../../../../scripts/chat-live-acceptance.cjs#L6>)
- require — module-loader; [scripts/chat-live-acceptance.cjs:7](<../../../../../scripts/chat-live-acceptance.cjs#L7>)
- require — module-loader; [scripts/chat-live-acceptance.cjs:8](<../../../../../scripts/chat-live-acceptance.cjs#L8>)
- 5 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-37e0176fb42530c3"></a>

## main

[scripts/chat-live-acceptance.cjs:34](<../../../../../scripts/chat-live-acceptance.cjs#L34>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/chat-live-acceptance.cjs](<chat-live-acceptance.cjs.md#s-77850f18af9b43cb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OllamaProvider.constructor](<../electron/ai/providers/ollama-provider.cjs.md#s-6a0c68a6d6f2569c>) — [scripts/chat-live-acceptance.cjs:48](<../../../../../scripts/chat-live-acceptance.cjs#L48>)
- [GeminiProvider.constructor](<../electron/ai/providers/gemini-provider.cjs.md#s-80ad168d7d744b37>) — [scripts/chat-live-acceptance.cjs:51](<../../../../../scripts/chat-live-acceptance.cjs#L51>)
- [ModelRegistry.constructor](<../electron/ai/model-registry.cjs.md#s-776a77db3083bdfd>) — [scripts/chat-live-acceptance.cjs:58](<../../../../../scripts/chat-live-acceptance.cjs#L58>)
- [ProviderRegistry.constructor](<../electron/ai/provider-registry.cjs.md#s-0c6dac7385064eb5>) — [scripts/chat-live-acceptance.cjs:59](<../../../../../scripts/chat-live-acceptance.cjs#L59>)
- [ChatService.constructor](<../electron/ai/chat/chat-service.cjs.md#s-821f32a93ec900a8>) — [scripts/chat-live-acceptance.cjs:65](<../../../../../scripts/chat-live-acceptance.cjs#L65>)
- [GeminiProvider.listModels](<../electron/ai/providers/gemini-provider.cjs.md#s-2be78d6f915a8524>) — [scripts/chat-live-acceptance.cjs:147](<../../../../../scripts/chat-live-acceptance.cjs#L147>)
- [ModelRegistry.save](<../electron/ai/model-registry.cjs.md#s-ad7b27a4e7ba4dc3>) — [scripts/chat-live-acceptance.cjs:152](<../../../../../scripts/chat-live-acceptance.cjs#L152>)
- [GeminiProvider.request](<../electron/ai/providers/gemini-provider.cjs.md#s-2e56134df44bde91>) — [scripts/chat-live-acceptance.cjs:165](<../../../../../scripts/chat-live-acceptance.cjs#L165>)
- [addContext](<../electron/domains/universe/station-service.cjs.md#s-8078b0ccaa1169b3>) — [scripts/chat-live-acceptance.cjs:174](<../../../../../scripts/chat-live-acceptance.cjs#L174>)
- [createBound](<chat-live-acceptance.cjs.md#s-28dd20fc728f3326>) — [scripts/chat-live-acceptance.cjs:175](<../../../../../scripts/chat-live-acceptance.cjs#L175>)
- [main.turn](<chat-live-acceptance.cjs.md#s-5c02108372dfce52>) — [scripts/chat-live-acceptance.cjs:177](<../../../../../scripts/chat-live-acceptance.cjs#L177>)
- [ModelRegistry.save](<../electron/ai/model-registry.cjs.md#s-ad7b27a4e7ba4dc3>) — [scripts/chat-live-acceptance.cjs:188](<../../../../../scripts/chat-live-acceptance.cjs#L188>)
- [main.turn](<chat-live-acceptance.cjs.md#s-5c02108372dfce52>) — [scripts/chat-live-acceptance.cjs:189](<../../../../../scripts/chat-live-acceptance.cjs#L189>)
- [ChatService.context](<../electron/ai/chat/chat-service.cjs.md#s-dc1d338e9a4d2e19>) — [scripts/chat-live-acceptance.cjs:196](<../../../../../scripts/chat-live-acceptance.cjs#L196>)
- [ModelRegistry.save](<../electron/ai/model-registry.cjs.md#s-ad7b27a4e7ba4dc3>) — [scripts/chat-live-acceptance.cjs:200](<../../../../../scripts/chat-live-acceptance.cjs#L200>)
- [main.turn](<chat-live-acceptance.cjs.md#s-5c02108372dfce52>) — [scripts/chat-live-acceptance.cjs:206](<../../../../../scripts/chat-live-acceptance.cjs#L206>)
- [OllamaProvider.listModels](<../electron/ai/providers/ollama-provider.cjs.md#s-6b77d21ad8966514>) — [scripts/chat-live-acceptance.cjs:216](<../../../../../scripts/chat-live-acceptance.cjs#L216>)
- [ModelRegistry.save](<../electron/ai/model-registry.cjs.md#s-ad7b27a4e7ba4dc3>) — [scripts/chat-live-acceptance.cjs:221](<../../../../../scripts/chat-live-acceptance.cjs#L221>)
- [main.turn](<chat-live-acceptance.cjs.md#s-5c02108372dfce52>) — [scripts/chat-live-acceptance.cjs:222](<../../../../../scripts/chat-live-acceptance.cjs#L222>)
- [ModelRegistry.save](<../electron/ai/model-registry.cjs.md#s-ad7b27a4e7ba4dc3>) — [scripts/chat-live-acceptance.cjs:227](<../../../../../scripts/chat-live-acceptance.cjs#L227>)
- [main.turn](<chat-live-acceptance.cjs.md#s-5c02108372dfce52>) — [scripts/chat-live-acceptance.cjs:228](<../../../../../scripts/chat-live-acceptance.cjs#L228>)
- [clearContext](<../electron/domains/universe/station-service.cjs.md#s-512789ba8c0937f1>) — [scripts/chat-live-acceptance.cjs:238](<../../../../../scripts/chat-live-acceptance.cjs#L238>)
- [addContext](<../electron/domains/universe/station-service.cjs.md#s-8078b0ccaa1169b3>) — [scripts/chat-live-acceptance.cjs:239](<../../../../../scripts/chat-live-acceptance.cjs#L239>)
- [createBound](<chat-live-acceptance.cjs.md#s-28dd20fc728f3326>) — [scripts/chat-live-acceptance.cjs:240](<../../../../../scripts/chat-live-acceptance.cjs#L240>)
- [main.turn](<chat-live-acceptance.cjs.md#s-5c02108372dfce52>) — [scripts/chat-live-acceptance.cjs:242](<../../../../../scripts/chat-live-acceptance.cjs#L242>)
- [ChatService.constructor](<../electron/ai/chat/chat-service.cjs.md#s-821f32a93ec900a8>) — [scripts/chat-live-acceptance.cjs:244](<../../../../../scripts/chat-live-acceptance.cjs#L244>)
- [ChatService.list](<../electron/ai/chat/chat-service.cjs.md#s-88b755ecb7271356>) — [scripts/chat-live-acceptance.cjs:245](<../../../../../scripts/chat-live-acceptance.cjs#L245>)
- [ChatService.resume](<../electron/ai/chat/chat-service.cjs.md#s-6b62ce1e48251c45>) — [scripts/chat-live-acceptance.cjs:246](<../../../../../scripts/chat-live-acceptance.cjs#L246>)
- [main.turn](<chat-live-acceptance.cjs.md#s-5c02108372dfce52>) — [scripts/chat-live-acceptance.cjs:247](<../../../../../scripts/chat-live-acceptance.cjs#L247>)
- [ChatService.run](<../electron/ai/chat/chat-service.cjs.md#s-bed13c7861a5021f>) — [scripts/chat-live-acceptance.cjs:255](<../../../../../scripts/chat-live-acceptance.cjs#L255>)
- [main.turn](<chat-live-acceptance.cjs.md#s-5c02108372dfce52>) — [scripts/chat-live-acceptance.cjs:273](<../../../../../scripts/chat-live-acceptance.cjs#L273>)
- [ChatService.cancelAll](<../electron/ai/chat/chat-service.cjs.md#s-a13b96186264285e>) — [scripts/chat-live-acceptance.cjs:281](<../../../../../scripts/chat-live-acceptance.cjs#L281>)

**Called by (statically resolved):**

- [scripts/chat-live-acceptance.cjs](<chat-live-acceptance.cjs.md#s-77850f18af9b43cb>) — [scripts/chat-live-acceptance.cjs:300](<../../../../../scripts/chat-live-acceptance.cjs#L300>)

Unresolved / external call sites: 46.

- Error — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:36](<../../../../../scripts/chat-live-acceptance.cjs#L36>)
- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:39](<../../../../../scripts/chat-live-acceptance.cjs#L39>)
- path.join — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:39](<../../../../../scripts/chat-live-acceptance.cjs#L39>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:39](<../../../../../scripts/chat-live-acceptance.cjs#L39>)
- new Date().toISOString — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:41](<../../../../../scripts/chat-live-acceptance.cjs#L41>)
- Date — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:41](<../../../../../scripts/chat-live-acceptance.cjs#L41>)
- os.totalmem — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:46](<../../../../../scripts/chat-live-acceptance.cjs#L46>)
- path.join — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:63](<../../../../../scripts/chat-live-acceptance.cjs#L63>)
- 38 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/chat-live-acceptance.cjs:300](<../../../../../scripts/chat-live-acceptance.cjs#L300>) — static-call-site; coverage not established.

<a id="s-35af0e7f7c7c32cd"></a>

## main.get

[scripts/chat-live-acceptance.cjs:53](<../../../../../scripts/chat-live-acceptance.cjs#L53>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>).

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

No direct static call/import association found; coverage unknown.

<a id="s-01580d1a71ba4871"></a>

## main.status

[scripts/chat-live-acceptance.cjs:54](<../../../../../scripts/chat-live-acceptance.cjs#L54>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>).

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

No direct static call/import association found; coverage unknown.

<a id="s-5c02108372dfce52"></a>

## main.turn

[scripts/chat-live-acceptance.cjs:66](<../../../../../scripts/chat-live-acceptance.cjs#L66>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| conversation | any | compiler-inferred | required |
| question | any | compiler-inferred | required |
| forbidden | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ChatService.run](<../electron/ai/chat/chat-service.cjs.md#s-bed13c7861a5021f>) — [scripts/chat-live-acceptance.cjs:70](<../../../../../scripts/chat-live-acceptance.cjs#L70>)
- [GeminiProvider.request](<../electron/ai/providers/gemini-provider.cjs.md#s-2e56134df44bde91>) — [scripts/chat-live-acceptance.cjs:133](<../../../../../scripts/chat-live-acceptance.cjs#L133>)

**Called by (statically resolved):**

- [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:177](<../../../../../scripts/chat-live-acceptance.cjs#L177>)
- [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:189](<../../../../../scripts/chat-live-acceptance.cjs#L189>)
- [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:206](<../../../../../scripts/chat-live-acceptance.cjs#L206>)
- [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:222](<../../../../../scripts/chat-live-acceptance.cjs#L222>)
- [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:228](<../../../../../scripts/chat-live-acceptance.cjs#L228>)
- [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:242](<../../../../../scripts/chat-live-acceptance.cjs#L242>)
- [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:247](<../../../../../scripts/chat-live-acceptance.cjs#L247>)
- [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:273](<../../../../../scripts/chat-live-acceptance.cjs#L273>)

Unresolved / external call sites: 21.

- randomUUID — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:67](<../../../../../scripts/chat-live-acceptance.cjs#L67>)
- Set — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:68](<../../../../../scripts/chat-live-acceptance.cjs#L68>)
- assert.equal — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:85](<../../../../../scripts/chat-live-acceptance.cjs#L85>)
- assert.ok — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:86](<../../../../../scripts/chat-live-acceptance.cjs#L86>)
- assert.doesNotMatch — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:87](<../../../../../scripts/chat-live-acceptance.cjs#L87>)
- assert.notEqual — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:88](<../../../../../scripts/chat-live-acceptance.cjs#L88>)
- result.run.response.toLowerCase — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:89](<../../../../../scripts/chat-live-acceptance.cjs#L89>)
- question.toLowerCase — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:90](<../../../../../scripts/chat-live-acceptance.cjs#L90>)
- 13 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/chat-live-acceptance.cjs:177](<../../../../../scripts/chat-live-acceptance.cjs#L177>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:189](<../../../../../scripts/chat-live-acceptance.cjs#L189>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:206](<../../../../../scripts/chat-live-acceptance.cjs#L206>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:222](<../../../../../scripts/chat-live-acceptance.cjs#L222>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:228](<../../../../../scripts/chat-live-acceptance.cjs#L228>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:242](<../../../../../scripts/chat-live-acceptance.cjs#L242>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:247](<../../../../../scripts/chat-live-acceptance.cjs#L247>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:273](<../../../../../scripts/chat-live-acceptance.cjs#L273>) — static-call-site; coverage not established.

<a id="s-9fde8995bc0dab80"></a>

## main.turn.&lt;anonymous@80:7&gt;

[scripts/chat-live-acceptance.cjs:80](<../../../../../scripts/chat-live-acceptance.cjs#L80>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.turn](<chat-live-acceptance.cjs.md#s-5c02108372dfce52>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- states.add — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:81](<../../../../../scripts/chat-live-acceptance.cjs#L81>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6bbf90debea5c517"></a>

## main.turn.&lt;anonymous@133:53&gt;

[scripts/chat-live-acceptance.cjs:133](<../../../../../scripts/chat-live-acceptance.cjs#L133>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.turn](<chat-live-acceptance.cjs.md#s-5c02108372dfce52>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { models: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2d1d77fbaed27d3e"></a>

## main.turn.&lt;anonymous@134:24&gt;

[scripts/chat-live-acceptance.cjs:134](<../../../../../scripts/chat-live-acceptance.cjs#L134>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.turn](<chat-live-acceptance.cjs.md#s-5c02108372dfce52>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: { name: any; runtimeSizeBytes: any; vramBytes: any; contextLength: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-295c29c87374b391"></a>

## main.&lt;anonymous@149:22&gt;

[scripts/chat-live-acceptance.cjs:149](<../../../../../scripts/chat-live-acceptance.cjs#L149>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bac357f6f8026025"></a>

## main.&lt;anonymous@184:27&gt;

[scripts/chat-live-acceptance.cjs:184](<../../../../../scripts/chat-live-acceptance.cjs#L184>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-73c77bed4136b3b4"></a>

## main.&lt;anonymous@218:28&gt;

[scripts/chat-live-acceptance.cjs:218](<../../../../../scripts/chat-live-acceptance.cjs#L218>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ce937e581f65dc5a"></a>

## main.&lt;anonymous@266:7&gt;

[scripts/chat-live-acceptance.cjs:266](<../../../../../scripts/chat-live-acceptance.cjs#L266>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ChatService.cancel](<../electron/ai/chat/chat-service.cjs.md#s-5e5f3dca7d74aa4e>) — [scripts/chat-live-acceptance.cjs:268](<../../../../../scripts/chat-live-acceptance.cjs#L268>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4a7e9002562c5ca8"></a>

## &lt;anonymous@300:14&gt;

[scripts/chat-live-acceptance.cjs:300](<../../../../../scripts/chat-live-acceptance.cjs#L300>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/chat-live-acceptance.cjs](<chat-live-acceptance.cjs.md#s-77850f18af9b43cb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- process.stderr.write — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:301](<../../../../../scripts/chat-live-acceptance.cjs#L301>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-28dd20fc728f3326"></a>

## createBound

[scripts/chat-live-acceptance.cjs:305](<../../../../../scripts/chat-live-acceptance.cjs#L305>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/chat-live-acceptance.cjs](<chat-live-acceptance.cjs.md#s-77850f18af9b43cb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| service | any | compiler-inferred | required |
| root | any | compiler-inferred | required |
| _scope | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:175](<../../../../../scripts/chat-live-acceptance.cjs#L175>)
- [main](<chat-live-acceptance.cjs.md#s-37e0176fb42530c3>) — [scripts/chat-live-acceptance.cjs:240](<../../../../../scripts/chat-live-acceptance.cjs#L240>)

Unresolved / external call sites: 6.

- service.saveBox — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:306](<../../../../../scripts/chat-live-acceptance.cjs#L306>)
- require("node:crypto").randomUUID — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:307](<../../../../../scripts/chat-live-acceptance.cjs#L307>)
- require — module-loader; [scripts/chat-live-acceptance.cjs:307](<../../../../../scripts/chat-live-acceptance.cjs#L307>)
- service.create — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:309](<../../../../../scripts/chat-live-acceptance.cjs#L309>)
- require("node:crypto").randomUUID — external-or-dynamic-dispatch; [scripts/chat-live-acceptance.cjs:311](<../../../../../scripts/chat-live-acceptance.cjs#L311>)
- require — module-loader; [scripts/chat-live-acceptance.cjs:311](<../../../../../scripts/chat-live-acceptance.cjs#L311>)

**Related tests / acceptance harnesses:**

- [scripts/chat-live-acceptance.cjs:175](<../../../../../scripts/chat-live-acceptance.cjs#L175>) — static-call-site; coverage not established.
- [scripts/chat-live-acceptance.cjs:240](<../../../../../scripts/chat-live-acceptance.cjs#L240>) — static-call-site; coverage not established.
