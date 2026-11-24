# electron/ai/model-pull.test.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/model-pull.test.cjs:1](<../../../../../../electron/ai/model-pull.test.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/model-pull.test.cjs](<model-pull.test.cjs.md#s-06b82368a65ff452>) (Module)
- [&lt;anonymous@6:98&gt;](<model-pull.test.cjs.md#s-292ddc45e790fd8a>) (ArrowFunction)
- [&lt;anonymous@6:98&gt;.pull](<model-pull.test.cjs.md#s-c07c08dc9aea6957>) (ArrowFunction)
- [&lt;anonymous@6:98&gt;.pull.&lt;anonymous@18:27&gt;](<model-pull.test.cjs.md#s-4bf496c6956ccc83>) (ArrowFunction)
- [&lt;anonymous@6:98&gt;.&lt;anonymous@23:5&gt;](<model-pull.test.cjs.md#s-af6fcdc61a64eed4>) (ArrowFunction)
- [&lt;anonymous@6:98&gt;.&lt;anonymous@30:17&gt;](<model-pull.test.cjs.md#s-7c089fc57ef772a5>) (ArrowFunction)
- [&lt;anonymous@38:67&gt;](<model-pull.test.cjs.md#s-eb82e9313d4fe874>) (ArrowFunction)
- [&lt;anonymous@38:67&gt;.pull](<model-pull.test.cjs.md#s-c6c1e2f6829fa302>) (ArrowFunction)
- [&lt;anonymous@38:67&gt;.pull.&lt;anonymous@43:25&gt;](<model-pull.test.cjs.md#s-aabe4b348aaf1e5d>) (ArrowFunction)
- [&lt;anonymous@58:71&gt;](<model-pull.test.cjs.md#s-b7080d32d075dba1>) (ArrowFunction)
- [&lt;anonymous@58:71&gt;.pull](<model-pull.test.cjs.md#s-10ab2f13d28ed4e8>) (ArrowFunction)
- [&lt;anonymous@58:71&gt;.&lt;anonymous@70:17&gt;](<model-pull.test.cjs.md#s-f8504f80be2bc3cc>) (ArrowFunction)
- [&lt;anonymous@75:80&gt;](<model-pull.test.cjs.md#s-da2a19f07ae66314>) (ArrowFunction)
- [&lt;anonymous@75:80&gt;.fetchImpl](<model-pull.test.cjs.md#s-413076c29b83f6db>) (ArrowFunction)
- [&lt;anonymous@75:80&gt;.&lt;anonymous@94:7&gt;](<model-pull.test.cjs.md#s-8eee69da9d82a68a>) (ArrowFunction)

<a id="s-06b82368a65ff452"></a>

## electron/ai/model-pull.test.cjs

[electron/ai/model-pull.test.cjs:1](<../../../../../../electron/ai/model-pull.test.cjs#L1>) · Module · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- require — module-loader; [electron/ai/model-pull.test.cjs:1](<../../../../../../electron/ai/model-pull.test.cjs#L1>)
- require — module-loader; [electron/ai/model-pull.test.cjs:2](<../../../../../../electron/ai/model-pull.test.cjs#L2>)
- require — module-loader; [electron/ai/model-pull.test.cjs:3](<../../../../../../electron/ai/model-pull.test.cjs#L3>)
- require — module-loader; [electron/ai/model-pull.test.cjs:4](<../../../../../../electron/ai/model-pull.test.cjs#L4>)
- test — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:6](<../../../../../../electron/ai/model-pull.test.cjs#L6>)
- test — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:38](<../../../../../../electron/ai/model-pull.test.cjs#L38>)
- test — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:58](<../../../../../../electron/ai/model-pull.test.cjs#L58>)
- test — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:75](<../../../../../../electron/ai/model-pull.test.cjs#L75>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-292ddc45e790fd8a"></a>

## &lt;anonymous@6:98&gt;

[electron/ai/model-pull.test.cjs:6](<../../../../../../electron/ai/model-pull.test.cjs#L6>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/model-pull.test.cjs](<model-pull.test.cjs.md#s-06b82368a65ff452>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelPullService.constructor](<model-pull.cjs.md#s-2c57151628df8f94>) — [electron/ai/model-pull.test.cjs:10](<../../../../../../electron/ai/model-pull.test.cjs#L10>)
- [ModelPullService.start](<model-pull.cjs.md#s-640cb0eef0657584>) — [electron/ai/model-pull.test.cjs:25](<../../../../../../electron/ai/model-pull.test.cjs#L25>)
- [ModelPullService.start](<model-pull.cjs.md#s-640cb0eef0657584>) — [electron/ai/model-pull.test.cjs:26](<../../../../../../electron/ai/model-pull.test.cjs#L26>)
- [ModelPullService.list](<model-pull.cjs.md#s-1b07d42732eb7621>) — [electron/ai/model-pull.test.cjs:29](<../../../../../../electron/ai/model-pull.test.cjs#L29>)
- [ModelPullService.start](<model-pull.cjs.md#s-640cb0eef0657584>) — [electron/ai/model-pull.test.cjs:33](<../../../../../../electron/ai/model-pull.test.cjs#L33>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 10.

- assert.equal — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:26](<../../../../../../electron/ai/model-pull.test.cjs#L26>)
- Promise.resolve — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:27](<../../../../../../electron/ai/model-pull.test.cjs#L27>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:28](<../../../../../../electron/ai/model-pull.test.cjs#L28>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:29](<../../../../../../electron/ai/model-pull.test.cjs#L29>)
- assert.throws — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:30](<../../../../../../electron/ai/model-pull.test.cjs#L30>)
- finish — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:31](<../../../../../../electron/ai/model-pull.test.cjs#L31>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:32](<../../../../../../electron/ai/model-pull.test.cjs#L32>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:34](<../../../../../../electron/ai/model-pull.test.cjs#L34>)
- 2 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c07c08dc9aea6957"></a>

## &lt;anonymous@6:98&gt;.pull

[electron/ai/model-pull.test.cjs:12](<../../../../../../electron/ai/model-pull.test.cjs#L12>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@6:98&gt;](<model-pull.test.cjs.md#s-292ddc45e790fd8a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _model | any | compiler-inferred | required |
| _signal | any | compiler-inferred | required |
| progress | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- progress — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:14](<../../../../../../electron/ai/model-pull.test.cjs#L14>)
- Promise — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:18](<../../../../../../electron/ai/model-pull.test.cjs#L18>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4bf496c6956ccc83"></a>

## &lt;anonymous@6:98&gt;.pull.&lt;anonymous@18:27&gt;

[electron/ai/model-pull.test.cjs:18](<../../../../../../electron/ai/model-pull.test.cjs#L18>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@6:98&gt;.pull](<model-pull.test.cjs.md#s-c07c08dc9aea6957>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| resolve | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-af6fcdc61a64eed4"></a>

## &lt;anonymous@6:98&gt;.&lt;anonymous@23:5&gt;

[electron/ai/model-pull.test.cjs:23](<../../../../../../electron/ai/model-pull.test.cjs#L23>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@6:98&gt;](<model-pull.test.cjs.md#s-292ddc45e790fd8a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- events.push — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:23](<../../../../../../electron/ai/model-pull.test.cjs#L23>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7c089fc57ef772a5"></a>

## &lt;anonymous@6:98&gt;.&lt;anonymous@30:17&gt;

[electron/ai/model-pull.test.cjs:30](<../../../../../../electron/ai/model-pull.test.cjs#L30>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@6:98&gt;](<model-pull.test.cjs.md#s-292ddc45e790fd8a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelPullService.start](<model-pull.cjs.md#s-640cb0eef0657584>) — [electron/ai/model-pull.test.cjs:30](<../../../../../../electron/ai/model-pull.test.cjs#L30>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-eb82e9313d4fe874"></a>

## &lt;anonymous@38:67&gt;

[electron/ai/model-pull.test.cjs:38](<../../../../../../electron/ai/model-pull.test.cjs#L38>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/model-pull.test.cjs](<model-pull.test.cjs.md#s-06b82368a65ff452>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelPullService.constructor](<model-pull.cjs.md#s-2c57151628df8f94>) — [electron/ai/model-pull.test.cjs:40](<../../../../../../electron/ai/model-pull.test.cjs#L40>)
- [ModelPullService.start](<model-pull.cjs.md#s-640cb0eef0657584>) — [electron/ai/model-pull.test.cjs:49](<../../../../../../electron/ai/model-pull.test.cjs#L49>)
- [ModelPullService.cancel](<model-pull.cjs.md#s-36573858072f544d>) — [electron/ai/model-pull.test.cjs:51](<../../../../../../electron/ai/model-pull.test.cjs#L51>)
- [ModelPullService.list](<model-pull.cjs.md#s-1b07d42732eb7621>) — [electron/ai/model-pull.test.cjs:52](<../../../../../../electron/ai/model-pull.test.cjs#L52>)
- [ModelPullService.cancel](<model-pull.cjs.md#s-36573858072f544d>) — [electron/ai/model-pull.test.cjs:53](<../../../../../../electron/ai/model-pull.test.cjs#L53>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- Promise.resolve — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:50](<../../../../../../electron/ai/model-pull.test.cjs#L50>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:52](<../../../../../../electron/ai/model-pull.test.cjs#L52>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:54](<../../../../../../electron/ai/model-pull.test.cjs#L54>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:55](<../../../../../../electron/ai/model-pull.test.cjs#L55>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c6c1e2f6829fa302"></a>

## &lt;anonymous@38:67&gt;.pull

[electron/ai/model-pull.test.cjs:41](<../../../../../../electron/ai/model-pull.test.cjs#L41>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@38:67&gt;](<model-pull.test.cjs.md#s-eb82e9313d4fe874>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _model | any | compiler-inferred | required |
| signal | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- Promise — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:43](<../../../../../../electron/ai/model-pull.test.cjs#L43>)
- signal.throwIfAborted — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:46](<../../../../../../electron/ai/model-pull.test.cjs#L46>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-aabe4b348aaf1e5d"></a>

## &lt;anonymous@38:67&gt;.pull.&lt;anonymous@43:25&gt;

[electron/ai/model-pull.test.cjs:43](<../../../../../../electron/ai/model-pull.test.cjs#L43>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@38:67&gt;.pull](<model-pull.test.cjs.md#s-c6c1e2f6829fa302>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| resolve | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- signal.addEventListener — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:44](<../../../../../../electron/ai/model-pull.test.cjs#L44>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b7080d32d075dba1"></a>

## &lt;anonymous@58:71&gt;

[electron/ai/model-pull.test.cjs:58](<../../../../../../electron/ai/model-pull.test.cjs#L58>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/model-pull.test.cjs](<model-pull.test.cjs.md#s-06b82368a65ff452>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelPullService.constructor](<model-pull.cjs.md#s-2c57151628df8f94>) — [electron/ai/model-pull.test.cjs:60](<../../../../../../electron/ai/model-pull.test.cjs#L60>)
- [ModelPullService.start](<model-pull.cjs.md#s-640cb0eef0657584>) — [electron/ai/model-pull.test.cjs:66](<../../../../../../electron/ai/model-pull.test.cjs#L66>)
- [ModelPullService.start](<model-pull.cjs.md#s-640cb0eef0657584>) — [electron/ai/model-pull.test.cjs:68](<../../../../../../electron/ai/model-pull.test.cjs#L68>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- assert.equal — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:66](<../../../../../../electron/ai/model-pull.test.cjs#L66>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:67](<../../../../../../electron/ai/model-pull.test.cjs#L67>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:69](<../../../../../../electron/ai/model-pull.test.cjs#L69>)
- assert.throws — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:70](<../../../../../../electron/ai/model-pull.test.cjs#L70>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-10ab2f13d28ed4e8"></a>

## &lt;anonymous@58:71&gt;.pull

[electron/ai/model-pull.test.cjs:61](<../../../../../../electron/ai/model-pull.test.cjs#L61>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@58:71&gt;](<model-pull.test.cjs.md#s-b7080d32d075dba1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:63](<../../../../../../electron/ai/model-pull.test.cjs#L63>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f8504f80be2bc3cc"></a>

## &lt;anonymous@58:71&gt;.&lt;anonymous@70:17&gt;

[electron/ai/model-pull.test.cjs:70](<../../../../../../electron/ai/model-pull.test.cjs#L70>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@58:71&gt;](<model-pull.test.cjs.md#s-b7080d32d075dba1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelPullService.start](<model-pull.cjs.md#s-640cb0eef0657584>) — [electron/ai/model-pull.test.cjs:70](<../../../../../../electron/ai/model-pull.test.cjs#L70>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-da2a19f07ae66314"></a>

## &lt;anonymous@75:80&gt;

[electron/ai/model-pull.test.cjs:75](<../../../../../../electron/ai/model-pull.test.cjs#L75>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/model-pull.test.cjs](<model-pull.test.cjs.md#s-06b82368a65ff452>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [OllamaProvider.constructor](<providers/ollama-provider.cjs.md#s-6a0c68a6d6f2569c>) — [electron/ai/model-pull.test.cjs:78](<../../../../../../electron/ai/model-pull.test.cjs#L78>)
- [OllamaProvider.pull](<providers/ollama-provider.cjs.md#s-d315fd448180e3e9>) — [electron/ai/model-pull.test.cjs:91](<../../../../../../electron/ai/model-pull.test.cjs#L91>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- AbortController — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:93](<../../../../../../electron/ai/model-pull.test.cjs#L93>)
- assert.rejects — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:97](<../../../../../../electron/ai/model-pull.test.cjs#L97>)
- assert.equal — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:98](<../../../../../../electron/ai/model-pull.test.cjs#L98>)
- assert.deepEqual — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:99](<../../../../../../electron/ai/model-pull.test.cjs#L99>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-413076c29b83f6db"></a>

## &lt;anonymous@75:80&gt;.fetchImpl

[electron/ai/model-pull.test.cjs:79](<../../../../../../electron/ai/model-pull.test.cjs#L79>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@75:80&gt;](<model-pull.test.cjs.md#s-da2a19f07ae66314>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| url | any | compiler-inferred | required |
| init | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- assert.ok — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:80](<../../../../../../electron/ai/model-pull.test.cjs#L80>)
- url.endsWith — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:80](<../../../../../../electron/ai/model-pull.test.cjs#L80>)
- assert.deepEqual — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:81](<../../../../../../electron/ai/model-pull.test.cjs#L81>)
- JSON.parse — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:81](<../../../../../../electron/ai/model-pull.test.cjs#L81>)
- Response — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:85](<../../../../../../electron/ai/model-pull.test.cjs#L85>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8eee69da9d82a68a"></a>

## &lt;anonymous@75:80&gt;.&lt;anonymous@94:7&gt;

[electron/ai/model-pull.test.cjs:94](<../../../../../../electron/ai/model-pull.test.cjs#L94>) · ArrowFunction · test · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@75:80&gt;](<model-pull.test.cjs.md#s-da2a19f07ae66314>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- events.push — external-or-dynamic-dispatch; [electron/ai/model-pull.test.cjs:94](<../../../../../../electron/ai/model-pull.test.cjs#L94>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
