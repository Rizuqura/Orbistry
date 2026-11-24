# electron/ai/request-logger.d.cts: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/request-logger.d.cts:1](<../../../../../../electron/ai/request-logger.d.cts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/request-logger.d.cts](<request-logger.d.cts.md#s-450e9d9e3ed3cb89>) (Module)
- [DiagnosticCallback](<request-logger.d.cts.md#s-b9fa4ae070bf83f2>) (TypeAliasDeclaration)
- [DiagnosticCallback.&lt;anonymous@1:34&gt;](<request-logger.d.cts.md#s-69f66e9736e16552>) (FunctionType)
- [RequestLogger](<request-logger.d.cts.md#s-cb4b2ee3cffe8941>) (TypeAliasDeclaration)
- [RequestLogger.step](<request-logger.d.cts.md#s-d457109040e359ba>) (MethodSignature)
- [RequestLogger.update](<request-logger.d.cts.md#s-127a36e85dc8102e>) (MethodSignature)
- [RequestLogger.fail](<request-logger.d.cts.md#s-6d2a40177deeddf1>) (MethodSignature)
- [RequestLogger.waiting](<request-logger.d.cts.md#s-26b6c36b1efb409b>) (MethodSignature)
- [RequestLogger.waiting.&lt;anonymous@14:54&gt;](<request-logger.d.cts.md#s-35febebe1e91d916>) (FunctionType)
- [RequestLogger.waiting.&lt;anonymous@14:69&gt;](<request-logger.d.cts.md#s-b4d84bed2bbf5a4d>) (FunctionType)
- [RequestLogger.finish](<request-logger.d.cts.md#s-f4be466baccd5a04>) (MethodSignature)
- [createRequestLogger](<request-logger.d.cts.md#s-435900804b106754>) (FunctionDeclaration)
- [createRequestLogger.&lt;anonymous@22:11&gt;](<request-logger.d.cts.md#s-15667307a545af25>) (FunctionType)
- [createRequestLogger.&lt;anonymous@23:11&gt;](<request-logger.d.cts.md#s-addbbf3e97606ffc>) (FunctionType)
- [createRequestLogger.&lt;anonymous@24:15&gt;](<request-logger.d.cts.md#s-9862f550f449ff65>) (FunctionType)
- [safeMetadata](<request-logger.d.cts.md#s-93ad7a6347790142>) (FunctionDeclaration)

<a id="s-450e9d9e3ed3cb89"></a>

## electron/ai/request-logger.d.cts

[electron/ai/request-logger.d.cts:1](<../../../../../../electron/ai/request-logger.d.cts#L1>) · Module · declaration · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b9fa4ae070bf83f2"></a>

## DiagnosticCallback

[electron/ai/request-logger.d.cts:1](<../../../../../../electron/ai/request-logger.d.cts#L1>) · TypeAliasDeclaration · declaration · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: DiagnosticCallback ([electron/ai/request-logger.d.cts:1](<../../../../../../electron/ai/request-logger.d.cts#L1>)).

Lexical owner: [electron/ai/request-logger.d.cts](<request-logger.d.cts.md#s-450e9d9e3ed3cb89>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-69f66e9736e16552"></a>

## DiagnosticCallback.&lt;anonymous@1:34&gt;

[electron/ai/request-logger.d.cts:1](<../../../../../../electron/ai/request-logger.d.cts#L1>) · FunctionType · declaration · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [DiagnosticCallback](<request-logger.d.cts.md#s-b9fa4ae070bf83f2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| stage | string | annotation | required |
| metadata | Record&lt;string, unknown&gt; | annotation | optional |
| status | "ok" &#124; "error" | annotation | optional |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cb4b2ee3cffe8941"></a>

## RequestLogger

[electron/ai/request-logger.d.cts:6](<../../../../../../electron/ai/request-logger.d.cts#L6>) · TypeAliasDeclaration · declaration · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: RequestLogger ([electron/ai/request-logger.d.cts:1](<../../../../../../electron/ai/request-logger.d.cts#L1>)).

Lexical owner: [electron/ai/request-logger.d.cts](<request-logger.d.cts.md#s-450e9d9e3ed3cb89>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d457109040e359ba"></a>

## RequestLogger.step

[electron/ai/request-logger.d.cts:7](<../../../../../../electron/ai/request-logger.d.cts#L7>) · MethodSignature · declaration · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [RequestLogger](<request-logger.d.cts.md#s-cb4b2ee3cffe8941>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| stage | string | annotation | required |
| metadata | Record&lt;string, unknown&gt; | annotation | optional |
| status | string | annotation | optional |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-127a36e85dc8102e"></a>

## RequestLogger.update

[electron/ai/request-logger.d.cts:12](<../../../../../../electron/ai/request-logger.d.cts#L12>) · MethodSignature · declaration · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [RequestLogger](<request-logger.d.cts.md#s-cb4b2ee3cffe8941>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| metadata | Record&lt;string, unknown&gt; | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6d2a40177deeddf1"></a>

## RequestLogger.fail

[electron/ai/request-logger.d.cts:13](<../../../../../../electron/ai/request-logger.d.cts#L13>) · MethodSignature · declaration · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [RequestLogger](<request-logger.d.cts.md#s-cb4b2ee3cffe8941>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | unknown | annotation | required |
| metadata | Record&lt;string, unknown&gt; | annotation | optional |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-26b6c36b1efb409b"></a>

## RequestLogger.waiting

[electron/ai/request-logger.d.cts:14](<../../../../../../electron/ai/request-logger.d.cts#L14>) · MethodSignature · declaration · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [RequestLogger](<request-logger.d.cts.md#s-cb4b2ee3cffe8941>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| metadata | Record&lt;string, unknown&gt; | annotation | required |
| state | () =&gt; string | annotation | optional |

Returns: () =&gt; void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-35febebe1e91d916"></a>

## RequestLogger.waiting.&lt;anonymous@14:54&gt;

[electron/ai/request-logger.d.cts:14](<../../../../../../electron/ai/request-logger.d.cts#L14>) · FunctionType · declaration · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [RequestLogger.waiting](<request-logger.d.cts.md#s-26b6c36b1efb409b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: string (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b4d84bed2bbf5a4d"></a>

## RequestLogger.waiting.&lt;anonymous@14:69&gt;

[electron/ai/request-logger.d.cts:14](<../../../../../../electron/ai/request-logger.d.cts#L14>) · FunctionType · declaration · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [RequestLogger.waiting](<request-logger.d.cts.md#s-26b6c36b1efb409b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f4be466baccd5a04"></a>

## RequestLogger.finish

[electron/ai/request-logger.d.cts:15](<../../../../../../electron/ai/request-logger.d.cts#L15>) · MethodSignature · declaration · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [RequestLogger](<request-logger.d.cts.md#s-cb4b2ee3cffe8941>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| status | string | annotation | optional |
| error | { code?: string } | annotation | optional |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-435900804b106754"></a>

## createRequestLogger

[electron/ai/request-logger.d.cts:17](<../../../../../../electron/ai/request-logger.d.cts#L17>) · FunctionDeclaration · declaration · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: createRequestLogger ([electron/ai/request-logger.d.cts:1](<../../../../../../electron/ai/request-logger.d.cts#L1>)).

Lexical owner: [electron/ai/request-logger.d.cts](<request-logger.d.cts.md#s-450e9d9e3ed3cb89>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| options | { requestId?: string; runId?: string; mode?: "agent" &#124; "experiment"; enabled?: boolean; write?: (line: string) =&gt; void; clock?: () =&gt; number; wallClock?: () =&gt; number; heartbeatMs?: number; } | annotation | optional |

Returns: RequestLogger (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-15667307a545af25"></a>

## createRequestLogger.&lt;anonymous@22:11&gt;

[electron/ai/request-logger.d.cts:22](<../../../../../../electron/ai/request-logger.d.cts#L22>) · FunctionType · declaration · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createRequestLogger](<request-logger.d.cts.md#s-435900804b106754>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| line | string | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-addbbf3e97606ffc"></a>

## createRequestLogger.&lt;anonymous@23:11&gt;

[electron/ai/request-logger.d.cts:23](<../../../../../../electron/ai/request-logger.d.cts#L23>) · FunctionType · declaration · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createRequestLogger](<request-logger.d.cts.md#s-435900804b106754>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: number (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9862f550f449ff65"></a>

## createRequestLogger.&lt;anonymous@24:15&gt;

[electron/ai/request-logger.d.cts:24](<../../../../../../electron/ai/request-logger.d.cts#L24>) · FunctionType · declaration · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createRequestLogger](<request-logger.d.cts.md#s-435900804b106754>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: number (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-93ad7a6347790142"></a>

## safeMetadata

[electron/ai/request-logger.d.cts:27](<../../../../../../electron/ai/request-logger.d.cts#L27>) · FunctionDeclaration · declaration · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: safeMetadata ([electron/ai/request-logger.d.cts:1](<../../../../../../electron/ai/request-logger.d.cts#L1>)).

Lexical owner: [electron/ai/request-logger.d.cts](<request-logger.d.cts.md#s-450e9d9e3ed3cb89>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| metadata | Record&lt;string, unknown&gt; | annotation | optional |

Returns: Record&lt;string, unknown&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
