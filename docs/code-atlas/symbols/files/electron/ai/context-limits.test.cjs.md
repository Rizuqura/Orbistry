# electron/ai/context-limits.test.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/context-limits.test.cjs:1](<../../../../../../electron/ai/context-limits.test.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/context-limits.test.cjs](<context-limits.test.cjs.md#s-f3e9c2fe53acfebe>) (Module)
- [&lt;anonymous@12:85&gt;](<context-limits.test.cjs.md#s-a5710e2b119edf12>) (ArrowFunction)
- [&lt;anonymous@12:85&gt;.&lt;anonymous@19:17&gt;](<context-limits.test.cjs.md#s-ead596f7940e4dc5>) (ArrowFunction)
- [&lt;anonymous@22:77&gt;](<context-limits.test.cjs.md#s-e7c5cbcc1791f23f>) (ArrowFunction)
- [&lt;anonymous@22:77&gt;.listModels](<context-limits.test.cjs.md#s-61196763a0dd337f>) (ArrowFunction)
- [&lt;anonymous@52:87&gt;](<context-limits.test.cjs.md#s-46c6b3c98ffc5f58>) (ArrowFunction)
- [&lt;anonymous@52:87&gt;.&lt;anonymous@62:5&gt;](<context-limits.test.cjs.md#s-54a516958c26a518>) (ArrowFunction)
- [&lt;anonymous@52:87&gt;.&lt;anonymous@63:5&gt;](<context-limits.test.cjs.md#s-3057f9026a1ae8a0>) (ArrowFunction)

<a id="s-f3e9c2fe53acfebe"></a>

## electron/ai/context-limits.test.cjs

[electron/ai/context-limits.test.cjs:1](<../../../../../../electron/ai/context-limits.test.cjs#L1>) · Module · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- require — module-loader; [electron/ai/context-limits.test.cjs:1](<../../../../../../electron/ai/context-limits.test.cjs#L1>)
- require — module-loader; [electron/ai/context-limits.test.cjs:2](<../../../../../../electron/ai/context-limits.test.cjs#L2>)
- require — module-loader; [electron/ai/context-limits.test.cjs:3](<../../../../../../electron/ai/context-limits.test.cjs#L3>)
- require — module-loader; [electron/ai/context-limits.test.cjs:8](<../../../../../../electron/ai/context-limits.test.cjs#L8>)
- require — module-loader; [electron/ai/context-limits.test.cjs:9](<../../../../../../electron/ai/context-limits.test.cjs#L9>)
- require — module-loader; [electron/ai/context-limits.test.cjs:10](<../../../../../../electron/ai/context-limits.test.cjs#L10>)
- test — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:12](<../../../../../../electron/ai/context-limits.test.cjs#L12>)
- test — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:22](<../../../../../../electron/ai/context-limits.test.cjs#L22>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a5710e2b119edf12"></a>

## &lt;anonymous@12:85&gt;

[electron/ai/context-limits.test.cjs:12](<../../../../../../electron/ai/context-limits.test.cjs#L12>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/context-limits.test.cjs](<context-limits.test.cjs.md#s-f3e9c2fe53acfebe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [contextLimit](<../shared/context-limits.cjs.md#s-cb06ea768ce0bca3>) — [electron/ai/context-limits.test.cjs:13](<../../../../../../electron/ai/context-limits.test.cjs#L13>)
- [contextLimit](<../shared/context-limits.cjs.md#s-cb06ea768ce0bca3>) — [electron/ai/context-limits.test.cjs:14](<../../../../../../electron/ai/context-limits.test.cjs#L14>)
- [contextLimit](<../shared/context-limits.cjs.md#s-cb06ea768ce0bca3>) — [electron/ai/context-limits.test.cjs:15](<../../../../../../electron/ai/context-limits.test.cjs#L15>)
- [contextLimit](<../shared/context-limits.cjs.md#s-cb06ea768ce0bca3>) — [electron/ai/context-limits.test.cjs:17](<../../../../../../electron/ai/context-limits.test.cjs#L17>)
- [contextLimit](<../shared/context-limits.cjs.md#s-cb06ea768ce0bca3>) — [electron/ai/context-limits.test.cjs:18](<../../../../../../electron/ai/context-limits.test.cjs#L18>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- assert.equal — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:13](<../../../../../../electron/ai/context-limits.test.cjs#L13>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:14](<../../../../../../electron/ai/context-limits.test.cjs#L14>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:15](<../../../../../../electron/ai/context-limits.test.cjs#L15>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:17](<../../../../../../electron/ai/context-limits.test.cjs#L17>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:18](<../../../../../../electron/ai/context-limits.test.cjs#L18>)
- assert.throws — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:19](<../../../../../../electron/ai/context-limits.test.cjs#L19>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ead596f7940e4dc5"></a>

## &lt;anonymous@12:85&gt;.&lt;anonymous@19:17&gt;

[electron/ai/context-limits.test.cjs:19](<../../../../../../electron/ai/context-limits.test.cjs#L19>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@12:85&gt;](<context-limits.test.cjs.md#s-a5710e2b119edf12>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateSettings](<model-registry.cjs.md#s-f1f9d1092d51054a>) — [electron/ai/context-limits.test.cjs:19](<../../../../../../electron/ai/context-limits.test.cjs#L19>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e7c5cbcc1791f23f"></a>

## &lt;anonymous@22:77&gt;

[electron/ai/context-limits.test.cjs:22](<../../../../../../electron/ai/context-limits.test.cjs#L22>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/context-limits.test.cjs](<context-limits.test.cjs.md#s-f3e9c2fe53acfebe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRegistry.constructor](<model-registry.cjs.md#s-776a77db3083bdfd>) — [electron/ai/context-limits.test.cjs:27](<../../../../../../electron/ai/context-limits.test.cjs#L27>)
- [ProviderRegistry.constructor](<provider-registry.cjs.md#s-0c6dac7385064eb5>) — [electron/ai/context-limits.test.cjs:28](<../../../../../../electron/ai/context-limits.test.cjs#L28>)
- [ModelRegistry.validateSelection](<model-registry.cjs.md#s-125d10d68364d877>) — [electron/ai/context-limits.test.cjs:39](<../../../../../../electron/ai/context-limits.test.cjs#L39>)
- [ModelRegistry.validateSelection](<model-registry.cjs.md#s-125d10d68364d877>) — [electron/ai/context-limits.test.cjs:43](<../../../../../../electron/ai/context-limits.test.cjs#L43>)
- [ModelRegistry.validateSelection](<model-registry.cjs.md#s-125d10d68364d877>) — [electron/ai/context-limits.test.cjs:47](<../../../../../../electron/ai/context-limits.test.cjs#L47>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- assert.equal — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:38](<../../../../../../electron/ai/context-limits.test.cjs#L38>)
- assert.rejects — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:43](<../../../../../../electron/ai/context-limits.test.cjs#L43>)
- assert.rejects — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:47](<../../../../../../electron/ai/context-limits.test.cjs#L47>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-61196763a0dd337f"></a>

## &lt;anonymous@22:77&gt;.listModels

[electron/ai/context-limits.test.cjs:25](<../../../../../../electron/ai/context-limits.test.cjs#L25>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@22:77&gt;](<context-limits.test.cjs.md#s-e7c5cbcc1791f23f>).

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

<a id="s-46c6b3c98ffc5f58"></a>

## &lt;anonymous@52:87&gt;

[electron/ai/context-limits.test.cjs:52](<../../../../../../electron/ai/context-limits.test.cjs#L52>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/context-limits.test.cjs](<context-limits.test.cjs.md#s-f3e9c2fe53acfebe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [budgetHistory](<history-budget.cjs.md#s-0c3553c9658a4cf5>) — [electron/ai/context-limits.test.cjs:71](<../../../../../../electron/ai/context-limits.test.cjs#L71>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- "x".repeat — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:53](<../../../../../../electron/ai/context-limits.test.cjs#L53>)
- assert.throws — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:61](<../../../../../../electron/ai/context-limits.test.cjs#L61>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:70](<../../../../../../electron/ai/context-limits.test.cjs#L70>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:75](<../../../../../../electron/ai/context-limits.test.cjs#L75>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-54a516958c26a518"></a>

## &lt;anonymous@52:87&gt;.&lt;anonymous@62:5&gt;

[electron/ai/context-limits.test.cjs:62](<../../../../../../electron/ai/context-limits.test.cjs#L62>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@52:87&gt;](<context-limits.test.cjs.md#s-46c6b3c98ffc5f58>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { history: any; diagnostics: { estimatedPromptTokens: any; droppedExchanges: number; estimateMethod: string; }; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [budgetHistory](<history-budget.cjs.md#s-0c3553c9658a4cf5>) — [electron/ai/context-limits.test.cjs:62](<../../../../../../electron/ai/context-limits.test.cjs#L62>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3057f9026a1ae8a0"></a>

## &lt;anonymous@52:87&gt;.&lt;anonymous@63:5&gt;

[electron/ai/context-limits.test.cjs:63](<../../../../../../electron/ai/context-limits.test.cjs#L63>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@52:87&gt;](<context-limits.test.cjs.md#s-46c6b3c98ffc5f58>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- assert.equal — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:64](<../../../../../../electron/ai/context-limits.test.cjs#L64>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:65](<../../../../../../electron/ai/context-limits.test.cjs#L65>)
- assert.match — external-or-dynamic-dispatch; [electron/ai/context-limits.test.cjs:66](<../../../../../../electron/ai/context-limits.test.cjs#L66>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
