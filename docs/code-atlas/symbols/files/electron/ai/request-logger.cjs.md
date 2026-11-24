# electron/ai/request-logger.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/request-logger.cjs:1](<../../../../../../electron/ai/request-logger.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/request-logger.cjs](<request-logger.cjs.md#s-dd0f270d673049dd>) (Module)
- [&lt;anonymous@74:34&gt;](<request-logger.cjs.md#s-300117f0b0279ecb>) (ArrowFunction)
- [&lt;anonymous@74:34&gt;.&lt;anonymous@75:15&gt;](<request-logger.cjs.md#s-077924e39b9f5e6a>) (ArrowFunction)
- [safeId](<request-logger.cjs.md#s-7186209f4d812e5a>) (ArrowFunction)
- [safeModel](<request-logger.cjs.md#s-e0eb5e0ffa043be6>) (ArrowFunction)
- [safeMetadata](<request-logger.cjs.md#s-8937535c0ab1e096>) (FunctionDeclaration)
- [safeMetadata.&lt;anonymous@199:46&gt;](<request-logger.cjs.md#s-2f147785b635f2cb>) (ArrowFunction)
- [createRequestLogger](<request-logger.cjs.md#s-89285dde7beb1d3d>) (FunctionDeclaration)
- [createRequestLogger.&lt;anonymous@220:11&gt;](<request-logger.cjs.md#s-d9da64cad70aa637>) (ArrowFunction)
- [createRequestLogger.&lt;anonymous@221:11&gt;](<request-logger.cjs.md#s-64963e94ceeb7064>) (ArrowFunction)
- [createRequestLogger.step](<request-logger.cjs.md#s-df941bb721a8b61b>) (ArrowFunction)
- [createRequestLogger.update](<request-logger.cjs.md#s-41b77d43bf954fdc>) (MethodDeclaration)
- [createRequestLogger.fail](<request-logger.cjs.md#s-e2946f01c8911e73>) (MethodDeclaration)
- [createRequestLogger.waiting](<request-logger.cjs.md#s-653c2354d3068d1f>) (MethodDeclaration)
- [createRequestLogger.waiting.&lt;anonymous@288:31&gt;](<request-logger.cjs.md#s-4ab52d5b20217be9>) (ArrowFunction)
- [createRequestLogger.waiting.&lt;anonymous@289:38&gt;](<request-logger.cjs.md#s-5b96ab47a9f76428>) (ArrowFunction)
- [createRequestLogger.waiting.&lt;anonymous@291:9&gt;](<request-logger.cjs.md#s-2e945bf2e1ee4428>) (ArrowFunction)
- [createRequestLogger.waiting.&lt;anonymous@297:14&gt;](<request-logger.cjs.md#s-c2a94eb9b9d4e5ac>) (ArrowFunction)
- [createRequestLogger.finish](<request-logger.cjs.md#s-031839477c1aee68>) (MethodDeclaration)

<a id="s-dd0f270d673049dd"></a>

## electron/ai/request-logger.cjs

[electron/ai/request-logger.cjs:1](<../../../../../../electron/ai/request-logger.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- require — module-loader; [electron/ai/request-logger.cjs:4](<../../../../../../electron/ai/request-logger.cjs#L4>)
- require — module-loader; [electron/ai/request-logger.cjs:5](<../../../../../../electron/ai/request-logger.cjs#L5>)
- Map — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:73](<../../../../../../electron/ai/request-logger.cjs#L73>)
- Object.entries(PHASES).flatMap — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:74](<../../../../../../electron/ai/request-logger.cjs#L74>)
- Object.entries — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:74](<../../../../../../electron/ai/request-logger.cjs#L74>)
- Set — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:78](<../../../../../../electron/ai/request-logger.cjs#L78>)
- Set — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:102](<../../../../../../electron/ai/request-logger.cjs#L102>)
- Set — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:133](<../../../../../../electron/ai/request-logger.cjs#L133>)

**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-300117f0b0279ecb"></a>

## &lt;anonymous@74:34&gt;

[electron/ai/request-logger.cjs:74](<../../../../../../electron/ai/request-logger.cjs#L74>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/request-logger.cjs](<request-logger.cjs.md#s-dd0f270d673049dd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| &#91;phase, names&#93; | &#91;any, any&#93; | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- names.map — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:75](<../../../../../../electron/ai/request-logger.cjs#L75>)

**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-077924e39b9f5e6a"></a>

## &lt;anonymous@74:34&gt;.&lt;anonymous@75:15&gt;

[electron/ai/request-logger.cjs:75](<../../../../../../electron/ai/request-logger.cjs#L75>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@74:34&gt;](<request-logger.cjs.md#s-300117f0b0279ecb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-7186209f4d812e5a"></a>

## safeId

[electron/ai/request-logger.cjs:147](<../../../../../../electron/ai/request-logger.cjs#L147>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/request-logger.cjs](<request-logger.cjs.md#s-dd0f270d673049dd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createRequestLogger](<request-logger.cjs.md#s-89285dde7beb1d3d>) — [electron/ai/request-logger.cjs:227](<../../../../../../electron/ai/request-logger.cjs#L227>)
- [createRequestLogger](<request-logger.cjs.md#s-89285dde7beb1d3d>) — [electron/ai/request-logger.cjs:228](<../../../../../../electron/ai/request-logger.cjs#L228>)
- [createRequestLogger.update](<request-logger.cjs.md#s-41b77d43bf954fdc>) — [electron/ai/request-logger.cjs:277](<../../../../../../electron/ai/request-logger.cjs#L277>)

Unresolved / external call sites: 2.

- /^&#91;A-Za-z0-9._:-&#93;{1,128}$/.test — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:149](<../../../../../../electron/ai/request-logger.cjs#L149>)
- secretLike.test — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:150](<../../../../../../electron/ai/request-logger.cjs#L150>)

**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-e0eb5e0ffa043be6"></a>

## safeModel

[electron/ai/request-logger.cjs:153](<../../../../../../electron/ai/request-logger.cjs#L153>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/request-logger.cjs](<request-logger.cjs.md#s-dd0f270d673049dd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [safeMetadata](<request-logger.cjs.md#s-8937535c0ab1e096>) — [electron/ai/request-logger.cjs:184](<../../../../../../electron/ai/request-logger.cjs#L184>)

Unresolved / external call sites: 2.

- /^&#91;~A-Za-z0-9&#93;&#91;A-Za-z0-9._:/-&#93;{0,199}$/.test — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:155](<../../../../../../electron/ai/request-logger.cjs#L155>)
- secretLike.test — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:156](<../../../../../../electron/ai/request-logger.cjs#L156>)

**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-8937535c0ab1e096"></a>

## safeMetadata

[electron/ai/request-logger.cjs:162](<../../../../../../electron/ai/request-logger.cjs#L162>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Strip unknown metadata recursively by constructing a new flat record. Null reported usage stays unknown. Error text/headers are never serialized.

Purpose evidence: jsdoc.

Exported as: safeMetadata ([electron/ai/request-logger.cjs:1](<../../../../../../electron/ai/request-logger.cjs#L1>)).

Lexical owner: [electron/ai/request-logger.cjs](<request-logger.cjs.md#s-dd0f270d673049dd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| metadata | {} | compiler-inferred | optional, default present |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [safeModel](<request-logger.cjs.md#s-e0eb5e0ffa043be6>) — [electron/ai/request-logger.cjs:184](<../../../../../../electron/ai/request-logger.cjs#L184>)

**Called by (statically resolved):**

- [createRequestLogger](<request-logger.cjs.md#s-89285dde7beb1d3d>) — [electron/ai/request-logger.cjs:230](<../../../../../../electron/ai/request-logger.cjs#L230>)
- [createRequestLogger.step](<request-logger.cjs.md#s-df941bb721a8b61b>) — [electron/ai/request-logger.cjs:239](<../../../../../../electron/ai/request-logger.cjs#L239>)
- [createRequestLogger.update](<request-logger.cjs.md#s-41b77d43bf954fdc>) — [electron/ai/request-logger.cjs:278](<../../../../../../electron/ai/request-logger.cjs#L278>)

Unresolved / external call sites: 16.

- Object.entries — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:164](<../../../../../../electron/ai/request-logger.cjs#L164>)
- counts.has — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:166](<../../../../../../electron/ai/request-logger.cjs#L166>)
- Number.isSafeInteger — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:167](<../../../../../../electron/ai/request-logger.cjs#L167>)
- flags.has — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:170](<../../../../../../electron/ai/request-logger.cjs#L170>)
- Object.hasOwn — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:171](<../../../../../../electron/ai/request-logger.cjs#L171>)
- enums&#91;key&#93;.includes — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:171](<../../../../../../electron/ai/request-logger.cjs#L171>)
- Number.isInteger — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:175](<../../../../../../electron/ai/request-logger.cjs#L175>)
- errorCode.safeParse — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:181](<../../../../../../electron/ai/request-logger.cjs#L181>)
- 8 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-2f147785b635f2cb"></a>

## safeMetadata.&lt;anonymous@199:46&gt;

[electron/ai/request-logger.cjs:199](<../../../../../../electron/ai/request-logger.cjs#L199>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [safeMetadata](<request-logger.cjs.md#s-8937535c0ab1e096>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| v | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- categories.has — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:199](<../../../../../../electron/ai/request-logger.cjs#L199>)

**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-89285dde7beb1d3d"></a>

## createRequestLogger

[electron/ai/request-logger.cjs:214](<../../../../../../electron/ai/request-logger.cjs#L214>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

One shared logger per IPC request, through admission, provider and dispatch. An injected writer/clock supports deterministic privacy and failure tests.

Purpose evidence: jsdoc.

Exported as: createRequestLogger ([electron/ai/request-logger.cjs:1](<../../../../../../electron/ai/request-logger.cjs#L1>)).

Lexical owner: [electron/ai/request-logger.cjs](<request-logger.cjs.md#s-dd0f270d673049dd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   requestId,   runId,   mode = "agent",   enabled = (process.env.ORBISTRY_REQUEST_LOGS ??     process.env.QTERMINAL_REQUEST_LOGS) !== "0",   write = (line) =&gt; process.stdout?.write(line + "\\n"),   clock = () =&gt; performance.now(),   wallClock = Date.now,   heartbeatMs = 15000, } | { mode?: string; enabled?: boolean; write?: (line: any) =&gt; any; clock?: () =&gt; any; wallClock?: any; heartbeatMs?: number; } | compiler-inferred | optional, default present |

Returns: { step: (stage: any, metadata?: {}, status?: string) =&gt; void; update(metadata: any): void; fail(error: any, metadata?: {}): void; waiting(metadata: any, state?: () =&gt; string): () =&gt; void; finish(status: string, error: any): void; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [safeId](<request-logger.cjs.md#s-7186209f4d812e5a>) — [electron/ai/request-logger.cjs:227](<../../../../../../electron/ai/request-logger.cjs#L227>)
- [safeId](<request-logger.cjs.md#s-7186209f4d812e5a>) — [electron/ai/request-logger.cjs:228](<../../../../../../electron/ai/request-logger.cjs#L228>)
- [safeMetadata](<request-logger.cjs.md#s-8937535c0ab1e096>) — [electron/ai/request-logger.cjs:230](<../../../../../../electron/ai/request-logger.cjs#L230>)

**Called by (statically resolved):**

- [capture](<request-logger.test.cjs.md#s-a46ccc4fe8a2ad20>) — [electron/ai/request-logger.test.cjs:18](<../../../../../../electron/ai/request-logger.test.cjs#L18>)

Unresolved / external call sites: 4.

- clock — signature-only-candidate; [electron/ai/request-logger.cjs:225](<../../../../../../electron/ai/request-logger.cjs#L225>)
- randomUUID — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:227](<../../../../../../electron/ai/request-logger.cjs#L227>)
- Set — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:235](<../../../../../../electron/ai/request-logger.cjs#L235>)
- Set — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:236](<../../../../../../electron/ai/request-logger.cjs#L236>)

**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:18](<../../../../../../electron/ai/request-logger.test.cjs#L18>) — static-call-site; coverage not established.
- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-d9da64cad70aa637"></a>

## createRequestLogger.&lt;anonymous@220:11&gt;

[electron/ai/request-logger.cjs:220](<../../../../../../electron/ai/request-logger.cjs#L220>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createRequestLogger](<request-logger.cjs.md#s-89285dde7beb1d3d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| line | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- process.stdout?.write — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:220](<../../../../../../electron/ai/request-logger.cjs#L220>)

**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-64963e94ceeb7064"></a>

## createRequestLogger.&lt;anonymous@221:11&gt;

[electron/ai/request-logger.cjs:221](<../../../../../../electron/ai/request-logger.cjs#L221>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createRequestLogger](<request-logger.cjs.md#s-89285dde7beb1d3d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- performance.now — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:221](<../../../../../../electron/ai/request-logger.cjs#L221>)

**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-df941bb721a8b61b"></a>

## createRequestLogger.step

[electron/ai/request-logger.cjs:237](<../../../../../../electron/ai/request-logger.cjs#L237>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createRequestLogger](<request-logger.cjs.md#s-89285dde7beb1d3d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| stage | any | compiler-inferred | required |
| metadata | {} | compiler-inferred | optional, default present |
| status | string | compiler-inferred | optional, default present |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [safeMetadata](<request-logger.cjs.md#s-8937535c0ab1e096>) — [electron/ai/request-logger.cjs:239](<../../../../../../electron/ai/request-logger.cjs#L239>)

**Called by (statically resolved):**

- [createRequestLogger.fail](<request-logger.cjs.md#s-e2946f01c8911e73>) — [electron/ai/request-logger.cjs:282](<../../../../../../electron/ai/request-logger.cjs#L282>)
- [createRequestLogger.waiting.&lt;anonymous@291:9&gt;](<request-logger.cjs.md#s-2e945bf2e1ee4428>) — [electron/ai/request-logger.cjs:292](<../../../../../../electron/ai/request-logger.cjs#L292>)
- [createRequestLogger.finish](<request-logger.cjs.md#s-031839477c1aee68>) — [electron/ai/request-logger.cjs:304](<../../../../../../electron/ai/request-logger.cjs#L304>)
- [createRequestLogger.finish](<request-logger.cjs.md#s-031839477c1aee68>) — [electron/ai/request-logger.cjs:305](<../../../../../../electron/ai/request-logger.cjs#L305>)

Unresolved / external call sites: 15.

- stages.has — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:238](<../../../../../../electron/ai/request-logger.cjs#L238>)
- &#91;"FIRST_CONTENT_RECEIVED", "REASONING_STARTED"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:240](<../../../../../../electron/ai/request-logger.cjs#L240>)
- firstEvents.has — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:242](<../../../../../../electron/ai/request-logger.cjs#L242>)
- firstEvents.add — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:243](<../../../../../../electron/ai/request-logger.cjs#L243>)
- &#91;"REQUEST_FAILED", "REQUEST_COMPLETED"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:245](<../../../../../../electron/ai/request-logger.cjs#L245>)
- &#91;"ok", "error", "waiting", "cancelled", "skipped"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:247](<../../../../../../electron/ai/request-logger.cjs#L247>)
- write — signature-only-candidate; [electron/ai/request-logger.cjs:257](<../../../../../../electron/ai/request-logger.cjs#L257>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:259](<../../../../../../electron/ai/request-logger.cjs#L259>)
- 7 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-41b77d43bf954fdc"></a>

## createRequestLogger.update

[electron/ai/request-logger.cjs:276](<../../../../../../electron/ai/request-logger.cjs#L276>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createRequestLogger](<request-logger.cjs.md#s-89285dde7beb1d3d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| metadata | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [safeId](<request-logger.cjs.md#s-7186209f4d812e5a>) — [electron/ai/request-logger.cjs:277](<../../../../../../electron/ai/request-logger.cjs#L277>)
- [safeMetadata](<request-logger.cjs.md#s-8937535c0ab1e096>) — [electron/ai/request-logger.cjs:278](<../../../../../../electron/ai/request-logger.cjs#L278>)

**Called by (statically resolved):**

- [&lt;anonymous@33:104&gt;](<request-logger.test.cjs.md#s-93f6c76d2b7b6b91>) — [electron/ai/request-logger.test.cjs:42](<../../../../../../electron/ai/request-logger.test.cjs#L42>)
- [&lt;anonymous@154:111&gt;](<request-logger.test.cjs.md#s-af56a97d64a0db63>) — [electron/ai/request-logger.test.cjs:164](<../../../../../../electron/ai/request-logger.test.cjs#L164>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:42](<../../../../../../electron/ai/request-logger.test.cjs#L42>) — static-call-site; coverage not established.
- [electron/ai/request-logger.test.cjs:164](<../../../../../../electron/ai/request-logger.test.cjs#L164>) — static-call-site; coverage not established.
- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-e2946f01c8911e73"></a>

## createRequestLogger.fail

[electron/ai/request-logger.cjs:280](<../../../../../../electron/ai/request-logger.cjs#L280>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createRequestLogger](<request-logger.cjs.md#s-89285dde7beb1d3d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |
| metadata | {} | compiler-inferred | optional, default present |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createRequestLogger.step](<request-logger.cjs.md#s-df941bb721a8b61b>) — [electron/ai/request-logger.cjs:282](<../../../../../../electron/ai/request-logger.cjs#L282>)

**Called by (statically resolved):**

- [registerAiIpc.handle.&lt;anonymous@91:34&gt;](<ipc.cjs.md#s-06103fd7a645f420>) — [electron/ai/ipc.cjs:144](<../../../../../../electron/ai/ipc.cjs#L144>)
- [&lt;anonymous@33:104&gt;](<request-logger.test.cjs.md#s-93f6c76d2b7b6b91>) — [electron/ai/request-logger.test.cjs:48](<../../../../../../electron/ai/request-logger.test.cjs#L48>)
- [&lt;anonymous@92:99&gt;](<request-logger.test.cjs.md#s-c293f14357799987>) — [electron/ai/request-logger.test.cjs:101](<../../../../../../electron/ai/request-logger.test.cjs#L101>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:48](<../../../../../../electron/ai/request-logger.test.cjs#L48>) — static-call-site; coverage not established.
- [electron/ai/request-logger.test.cjs:101](<../../../../../../electron/ai/request-logger.test.cjs#L101>) — static-call-site; coverage not established.
- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-653c2354d3068d1f"></a>

## createRequestLogger.waiting

[electron/ai/request-logger.cjs:288](<../../../../../../electron/ai/request-logger.cjs#L288>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createRequestLogger](<request-logger.cjs.md#s-89285dde7beb1d3d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| metadata | any | compiler-inferred | required |
| state | () =&gt; string | compiler-inferred | optional, default present |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- setInterval — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:290](<../../../../../../electron/ai/request-logger.cjs#L290>)
- timer.unref — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:295](<../../../../../../electron/ai/request-logger.cjs#L295>)
- timers.add — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:296](<../../../../../../electron/ai/request-logger.cjs#L296>)

**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-4ab52d5b20217be9"></a>

## createRequestLogger.waiting.&lt;anonymous@288:31&gt;

[electron/ai/request-logger.cjs:288](<../../../../../../electron/ai/request-logger.cjs#L288>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createRequestLogger.waiting](<request-logger.cjs.md#s-653c2354d3068d1f>).

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

- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-5b96ab47a9f76428"></a>

## createRequestLogger.waiting.&lt;anonymous@289:38&gt;

[electron/ai/request-logger.cjs:289](<../../../../../../electron/ai/request-logger.cjs#L289>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createRequestLogger.waiting](<request-logger.cjs.md#s-653c2354d3068d1f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-2e945bf2e1ee4428"></a>

## createRequestLogger.waiting.&lt;anonymous@291:9&gt;

[electron/ai/request-logger.cjs:291](<../../../../../../electron/ai/request-logger.cjs#L291>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createRequestLogger.waiting](<request-logger.cjs.md#s-653c2354d3068d1f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createRequestLogger.step](<request-logger.cjs.md#s-df941bb721a8b61b>) — [electron/ai/request-logger.cjs:292](<../../../../../../electron/ai/request-logger.cjs#L292>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- state — signature-only-candidate; [electron/ai/request-logger.cjs:292](<../../../../../../electron/ai/request-logger.cjs#L292>)

**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-c2a94eb9b9d4e5ac"></a>

## createRequestLogger.waiting.&lt;anonymous@297:14&gt;

[electron/ai/request-logger.cjs:297](<../../../../../../electron/ai/request-logger.cjs#L297>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createRequestLogger.waiting](<request-logger.cjs.md#s-653c2354d3068d1f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- clearInterval — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:298](<../../../../../../electron/ai/request-logger.cjs#L298>)
- timers.delete — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:299](<../../../../../../electron/ai/request-logger.cjs#L299>)

**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.

<a id="s-031839477c1aee68"></a>

## createRequestLogger.finish

[electron/ai/request-logger.cjs:302](<../../../../../../electron/ai/request-logger.cjs#L302>) · MethodDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createRequestLogger](<request-logger.cjs.md#s-89285dde7beb1d3d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| status | string | compiler-inferred | optional, default present |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createRequestLogger.step](<request-logger.cjs.md#s-df941bb721a8b61b>) — [electron/ai/request-logger.cjs:304](<../../../../../../electron/ai/request-logger.cjs#L304>)
- [createRequestLogger.step](<request-logger.cjs.md#s-df941bb721a8b61b>) — [electron/ai/request-logger.cjs:305](<../../../../../../electron/ai/request-logger.cjs#L305>)

**Called by (statically resolved):**

- [registerAiIpc.handle.&lt;anonymous@91:34&gt;](<ipc.cjs.md#s-06103fd7a645f420>) — [electron/ai/ipc.cjs:141](<../../../../../../electron/ai/ipc.cjs#L141>)
- [registerAiIpc.handle.&lt;anonymous@91:34&gt;](<ipc.cjs.md#s-06103fd7a645f420>) — [electron/ai/ipc.cjs:145](<../../../../../../electron/ai/ipc.cjs#L145>)
- [&lt;anonymous@33:104&gt;](<request-logger.test.cjs.md#s-93f6c76d2b7b6b91>) — [electron/ai/request-logger.test.cjs:51](<../../../../../../electron/ai/request-logger.test.cjs#L51>)
- [&lt;anonymous@63:71&gt;](<request-logger.test.cjs.md#s-bdf938808bed6d11>) — [electron/ai/request-logger.test.cjs:66](<../../../../../../electron/ai/request-logger.test.cjs#L66>)
- [&lt;anonymous@92:99&gt;](<request-logger.test.cjs.md#s-c293f14357799987>) — [electron/ai/request-logger.test.cjs:102](<../../../../../../electron/ai/request-logger.test.cjs#L102>)
- [&lt;anonymous@256:103&gt;](<request-logger.test.cjs.md#s-e5478e9c2abf934c>) — [electron/ai/request-logger.test.cjs:279](<../../../../../../electron/ai/request-logger.test.cjs#L279>)

Unresolved / external call sites: 2.

- clearInterval — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:314](<../../../../../../electron/ai/request-logger.cjs#L314>)
- timers.clear — external-or-dynamic-dispatch; [electron/ai/request-logger.cjs:315](<../../../../../../electron/ai/request-logger.cjs#L315>)

**Related tests / acceptance harnesses:**

- [electron/ai/request-logger.test.cjs:51](<../../../../../../electron/ai/request-logger.test.cjs#L51>) — static-call-site; coverage not established.
- [electron/ai/request-logger.test.cjs:66](<../../../../../../electron/ai/request-logger.test.cjs#L66>) — static-call-site; coverage not established.
- [electron/ai/request-logger.test.cjs:102](<../../../../../../electron/ai/request-logger.test.cjs#L102>) — static-call-site; coverage not established.
- [electron/ai/request-logger.test.cjs:279](<../../../../../../electron/ai/request-logger.test.cjs#L279>) — static-call-site; coverage not established.
- [electron/ai/request-logger.test.cjs:3](<../../../../../../electron/ai/request-logger.test.cjs#L3>) — file-import-only; coverage not established.
