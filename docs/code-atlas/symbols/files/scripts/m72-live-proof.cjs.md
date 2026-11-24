# scripts/m72-live-proof.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/m72-live-proof.cjs:1](<../../../../../scripts/m72-live-proof.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/m72-live-proof.cjs](<m72-live-proof.cjs.md#s-91223ad4cb78e37e>) (Module)
- [main](<m72-live-proof.cjs.md#s-1bf125f268bf686d>) (FunctionDeclaration)
- [main.prepareScope](<m72-live-proof.cjs.md#s-bac3e46b8a0fbb66>) (ArrowFunction)
- [main.readSource](<m72-live-proof.cjs.md#s-af26382042c77efe>) (ArrowFunction)
- [main.recordRun](<m72-live-proof.cjs.md#s-13d5c2894751c7b3>) (ArrowFunction)
- [&lt;anonymous@65:14&gt;](<m72-live-proof.cjs.md#s-f91c3e665bbb7cf4>) (ArrowFunction)

<a id="s-91223ad4cb78e37e"></a>

## scripts/m72-live-proof.cjs

[scripts/m72-live-proof.cjs:1](<../../../../../scripts/m72-live-proof.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<m72-live-proof.cjs.md#s-1bf125f268bf686d>) — [scripts/m72-live-proof.cjs:65](<../../../../../scripts/m72-live-proof.cjs#L65>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- require — module-loader; [scripts/m72-live-proof.cjs:1](<../../../../../scripts/m72-live-proof.cjs#L1>)
- require — module-loader; [scripts/m72-live-proof.cjs:2](<../../../../../scripts/m72-live-proof.cjs#L2>)
- require — module-loader; [scripts/m72-live-proof.cjs:3](<../../../../../scripts/m72-live-proof.cjs#L3>)
- require — module-loader; [scripts/m72-live-proof.cjs:4](<../../../../../scripts/m72-live-proof.cjs#L4>)
- require — module-loader; [scripts/m72-live-proof.cjs:5](<../../../../../scripts/m72-live-proof.cjs#L5>)
- require — module-loader; [scripts/m72-live-proof.cjs:8](<../../../../../scripts/m72-live-proof.cjs#L8>)
- require — module-loader; [scripts/m72-live-proof.cjs:11](<../../../../../scripts/m72-live-proof.cjs#L11>)
- require — module-loader; [scripts/m72-live-proof.cjs:15](<../../../../../scripts/m72-live-proof.cjs#L15>)
- 1 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1bf125f268bf686d"></a>

## main

[scripts/m72-live-proof.cjs:17](<../../../../../scripts/m72-live-proof.cjs#L17>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/m72-live-proof.cjs](<m72-live-proof.cjs.md#s-91223ad4cb78e37e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [addContext](<../electron/domains/universe/station-service.cjs.md#s-8078b0ccaa1169b3>) — [scripts/m72-live-proof.cjs:30](<../../../../../scripts/m72-live-proof.cjs#L30>)
- [createContextOrchestrator](<../electron/ai/orchestrator.cjs.md#s-c34acea6475035a9>) — [scripts/m72-live-proof.cjs:31](<../../../../../scripts/m72-live-proof.cjs#L31>)
- [OllamaProvider.constructor](<../electron/ai/providers/ollama-provider.cjs.md#s-6a0c68a6d6f2569c>) — [scripts/m72-live-proof.cjs:34](<../../../../../scripts/m72-live-proof.cjs#L34>)
- [createContextOrchestrator.run](<../electron/ai/orchestrator.cjs.md#s-be352215519f7acf>) — [scripts/m72-live-proof.cjs:37](<../../../../../scripts/m72-live-proof.cjs#L37>)
- [listModelRuns](<../electron/ai/run-store.cjs.md#s-4c5761eaea31276f>) — [scripts/m72-live-proof.cjs:49](<../../../../../scripts/m72-live-proof.cjs#L49>)

**Called by (statically resolved):**

- [scripts/m72-live-proof.cjs](<m72-live-proof.cjs.md#s-91223ad4cb78e37e>) — [scripts/m72-live-proof.cjs:65](<../../../../../scripts/m72-live-proof.cjs#L65>)

Unresolved / external call sites: 14.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/m72-live-proof.cjs:18](<../../../../../scripts/m72-live-proof.cjs#L18>)
- path.join — external-or-dynamic-dispatch; [scripts/m72-live-proof.cjs:19](<../../../../../scripts/m72-live-proof.cjs#L19>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/m72-live-proof.cjs:19](<../../../../../scripts/m72-live-proof.cjs#L19>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/m72-live-proof.cjs:22](<../../../../../scripts/m72-live-proof.cjs#L22>)
- path.join — external-or-dynamic-dispatch; [scripts/m72-live-proof.cjs:23](<../../../../../scripts/m72-live-proof.cjs#L23>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/m72-live-proof.cjs:26](<../../../../../scripts/m72-live-proof.cjs#L26>)
- path.join — external-or-dynamic-dispatch; [scripts/m72-live-proof.cjs:27](<../../../../../scripts/m72-live-proof.cjs#L27>)
- assert.match — external-or-dynamic-dispatch; [scripts/m72-live-proof.cjs:44](<../../../../../scripts/m72-live-proof.cjs#L44>)
- 6 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bac3e46b8a0fbb66"></a>

## main.prepareScope

[scripts/m72-live-proof.cjs:32](<../../../../../scripts/m72-live-proof.cjs#L32>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<m72-live-proof.cjs.md#s-1bf125f268bf686d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [prepareBrainScope](<../electron/domains/universe/station-service.cjs.md#s-e4cff95cf847ee92>) — [scripts/m72-live-proof.cjs:32](<../../../../../scripts/m72-live-proof.cjs#L32>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-af26382042c77efe"></a>

## main.readSource

[scripts/m72-live-proof.cjs:33](<../../../../../scripts/m72-live-proof.cjs#L33>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<m72-live-proof.cjs.md#s-1bf125f268bf686d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readBrainSource](<../electron/domains/universe/station-service.cjs.md#s-b62c400d5ba597c7>) — [scripts/m72-live-proof.cjs:33](<../../../../../scripts/m72-live-proof.cjs#L33>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-13d5c2894751c7b3"></a>

## main.recordRun

[scripts/m72-live-proof.cjs:35](<../../../../../scripts/m72-live-proof.cjs#L35>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<m72-live-proof.cjs.md#s-1bf125f268bf686d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| record | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createModelRun](<../electron/ai/run-store.cjs.md#s-0abf05c0db6341b7>) — [scripts/m72-live-proof.cjs:35](<../../../../../scripts/m72-live-proof.cjs#L35>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f91c3e665bbb7cf4"></a>

## &lt;anonymous@65:14&gt;

[scripts/m72-live-proof.cjs:65](<../../../../../scripts/m72-live-proof.cjs#L65>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/m72-live-proof.cjs](<m72-live-proof.cjs.md#s-91223ad4cb78e37e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- process.stderr.write — external-or-dynamic-dispatch; [scripts/m72-live-proof.cjs:66](<../../../../../scripts/m72-live-proof.cjs#L66>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
