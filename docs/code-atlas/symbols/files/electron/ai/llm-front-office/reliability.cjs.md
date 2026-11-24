# electron/ai/llm-front-office/reliability.cjs: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/reliability.cjs:1](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/reliability.cjs](<reliability.cjs.md#s-807eeb5fe6d23ee5>) (Module)
- [ReliabilityController](<reliability.cjs.md#s-04eb342c1ca38f3b>) (ClassDeclaration)
- [ReliabilityController.constructor](<reliability.cjs.md#s-186a6eb0001d0ce5>) (Constructor)
- [ReliabilityController.healthy](<reliability.cjs.md#s-3b0e3de6cd04a3a3>) (MethodDeclaration)
- [ReliabilityController.state](<reliability.cjs.md#s-a5f9d153c4791192>) (MethodDeclaration)
- [ReliabilityController.execute](<reliability.cjs.md#s-aa433ce578b4dcf5>) (MethodDeclaration)
- [ReliabilityController.execute.&lt;anonymous@33:27&gt;](<reliability.cjs.md#s-58b8abc723854b4d>) (ArrowFunction)
- [ReliabilityController.execute.cancel](<reliability.cjs.md#s-798af1876f3865dc>) (ArrowFunction)
- [ReliabilityController.execute.&lt;anonymous@44:7&gt;](<reliability.cjs.md#s-26ca4822cb56c80c>) (ArrowFunction)
- [ReliabilityController.execute.&lt;anonymous@93:39&gt;](<reliability.cjs.md#s-057800bbccee296d>) (ArrowFunction)
- [ReliabilityController.execute.&lt;anonymous@93:39&gt;.&lt;anonymous@94:21&gt;](<reliability.cjs.md#s-4cb4928e9aafe03d>) (ArrowFunction)
- [ReliabilityController.execute.&lt;anonymous@99:53&gt;](<reliability.cjs.md#s-9a4afd14e09aaa3f>) (ArrowFunction)

<a id="s-807eeb5fe6d23ee5"></a>

## electron/ai/llm-front-office/reliability.cjs

[electron/ai/llm-front-office/reliability.cjs:1](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/ai/llm-front-office/reliability.cjs:4](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L4>)
- require — module-loader; [electron/ai/llm-front-office/reliability.cjs:5](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L5>)
- Set — external-or-dynamic-dispatch; [electron/ai/llm-front-office/reliability.cjs:6](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L6>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:22](<../../../../../../../electron/ai/front-office-engine.test.cjs#L22>) — file-import-only; coverage not established.

<a id="s-04eb342c1ca38f3b"></a>

## ReliabilityController

[electron/ai/llm-front-office/reliability.cjs:15](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L15>) · ClassDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Maintain per-deployment circuit state in memory; no scheduled background work.

Purpose evidence: jsdoc.

Exported as: ReliabilityController ([electron/ai/llm-front-office/reliability.cjs:1](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/reliability.cjs](<reliability.cjs.md#s-807eeb5fe6d23ee5>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:22](<../../../../../../../electron/ai/front-office-engine.test.cjs#L22>) — file-import-only; coverage not established.

<a id="s-186a6eb0001d0ce5"></a>

## ReliabilityController.constructor

[electron/ai/llm-front-office/reliability.cjs:16](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L16>) · Constructor · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Maintain per-deployment circuit state in memory; no scheduled background work.

Purpose evidence: jsdoc.

Lexical owner: [ReliabilityController](<reliability.cjs.md#s-04eb342c1ca38f3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| now | any | compiler-inferred | optional, default present |

Returns: ReliabilityController (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@578:102&gt;](<../front-office-engine.test.cjs.md#s-a49745d68b9024b8>) — [electron/ai/front-office-engine.test.cjs:587](<../../../../../../../electron/ai/front-office-engine.test.cjs#L587>)
- [&lt;anonymous@578:102&gt;](<../front-office-engine.test.cjs.md#s-a49745d68b9024b8>) — [electron/ai/front-office-engine.test.cjs:599](<../../../../../../../electron/ai/front-office-engine.test.cjs#L599>)
- [&lt;anonymous@609:80&gt;](<../front-office-engine.test.cjs.md#s-48eef1071de9db1c>) — [electron/ai/front-office-engine.test.cjs:611](<../../../../../../../electron/ai/front-office-engine.test.cjs#L611>)
- [&lt;anonymous@625:78&gt;](<../front-office-engine.test.cjs.md#s-f6621a6ca19dc6b7>) — [electron/ai/front-office-engine.test.cjs:632](<../../../../../../../electron/ai/front-office-engine.test.cjs#L632>)
- [&lt;anonymous@641:88&gt;](<../front-office-engine.test.cjs.md#s-5e74ba9bdbb9f974>) — [electron/ai/front-office-engine.test.cjs:646](<../../../../../../../electron/ai/front-office-engine.test.cjs#L646>)
- [&lt;anonymous@641:88&gt;](<../front-office-engine.test.cjs.md#s-5e74ba9bdbb9f974>) — [electron/ai/front-office-engine.test.cjs:653](<../../../../../../../electron/ai/front-office-engine.test.cjs#L653>)
- [FrontOfficeService.constructor](<service.cjs.md#s-5295f30f7c1e6f1b>) — [electron/ai/llm-front-office/service.cjs:51](<../../../../../../../electron/ai/llm-front-office/service.cjs#L51>)

Unresolved / external call sites: 1.

- Map — external-or-dynamic-dispatch; [electron/ai/llm-front-office/reliability.cjs:17](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L17>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:587](<../../../../../../../electron/ai/front-office-engine.test.cjs#L587>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:599](<../../../../../../../electron/ai/front-office-engine.test.cjs#L599>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:611](<../../../../../../../electron/ai/front-office-engine.test.cjs#L611>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:632](<../../../../../../../electron/ai/front-office-engine.test.cjs#L632>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:646](<../../../../../../../electron/ai/front-office-engine.test.cjs#L646>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:653](<../../../../../../../electron/ai/front-office-engine.test.cjs#L653>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:22](<../../../../../../../electron/ai/front-office-engine.test.cjs#L22>) — file-import-only; coverage not established.

<a id="s-3b0e3de6cd04a3a3"></a>

## ReliabilityController.healthy

[electron/ai/llm-front-office/reliability.cjs:21](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L21>) · MethodDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Report cooling-down endpoints to the capability router.

Purpose evidence: jsdoc.

Lexical owner: [ReliabilityController](<reliability.cjs.md#s-04eb342c1ca38f3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@609:80&gt;](<../front-office-engine.test.cjs.md#s-48eef1071de9db1c>) — [electron/ai/front-office-engine.test.cjs:620](<../../../../../../../electron/ai/front-office-engine.test.cjs#L620>)
- [&lt;anonymous@609:80&gt;](<../front-office-engine.test.cjs.md#s-48eef1071de9db1c>) — [electron/ai/front-office-engine.test.cjs:622](<../../../../../../../electron/ai/front-office-engine.test.cjs#L622>)
- [ReliabilityController.execute](<reliability.cjs.md#s-aa433ce578b4dcf5>) — [electron/ai/llm-front-office/reliability.cjs:62](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L62>)
- [FrontOfficeService.run.&lt;anonymous@454:9&gt;](<service.cjs.md#s-5bdc143d091089fe>) — [electron/ai/llm-front-office/service.cjs:454](<../../../../../../../electron/ai/llm-front-office/service.cjs#L454>)

Unresolved / external call sites: 2.

- this.circuits.get — external-or-dynamic-dispatch; [electron/ai/llm-front-office/reliability.cjs:22](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L22>)
- this.now — external-or-dynamic-dispatch; [electron/ai/llm-front-office/reliability.cjs:22](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L22>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:620](<../../../../../../../electron/ai/front-office-engine.test.cjs#L620>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:622](<../../../../../../../electron/ai/front-office-engine.test.cjs#L622>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:22](<../../../../../../../electron/ai/front-office-engine.test.cjs#L22>) — file-import-only; coverage not established.

<a id="s-a5f9d153c4791192"></a>

## ReliabilityController.state

[electron/ai/llm-front-office/reliability.cjs:25](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L25>) · MethodDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Expose bounded non-secret health counters for the model inspector.

Purpose evidence: jsdoc.

Lexical owner: [ReliabilityController](<reliability.cjs.md#s-04eb342c1ca38f3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ReliabilityController.execute](<reliability.cjs.md#s-aa433ce578b4dcf5>) — [electron/ai/llm-front-office/reliability.cjs:122](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L122>)
- [FrontOfficeService.state.&lt;anonymous@90:38&gt;](<service.cjs.md#s-9912cf46430bf707>) — [electron/ai/llm-front-office/service.cjs:98](<../../../../../../../electron/ai/llm-front-office/service.cjs#L98>)

Unresolved / external call sites: 1.

- this.circuits.get — external-or-dynamic-dispatch; [electron/ai/llm-front-office/reliability.cjs:26](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L26>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:22](<../../../../../../../electron/ai/front-office-engine.test.cjs#L22>) — file-import-only; coverage not established.

<a id="s-aa433ce578b4dcf5"></a>

## ReliabilityController.execute

[electron/ai/llm-front-office/reliability.cjs:29](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L29>) · MethodDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Execute within one cumulative deadline and attempt/token/cost reservation cap. No post-delta retries.

Purpose evidence: jsdoc.

Lexical owner: [ReliabilityController](<reliability.cjs.md#s-04eb342c1ca38f3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| plan | any | compiler-inferred | required |
| config | any | compiler-inferred | required |
| operation | any | compiler-inferred | required |
| { signal, onAttempt = () =&gt; {} } | { onAttempt?: () =&gt; void; } | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ReliabilityController.execute.cancel](<reliability.cjs.md#s-798af1876f3865dc>) — [electron/ai/llm-front-office/reliability.cjs:42](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L42>)
- [ReliabilityController.healthy](<reliability.cjs.md#s-3b0e3de6cd04a3a3>) — [electron/ai/llm-front-office/reliability.cjs:62](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L62>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/reliability.cjs:63](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L63>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/reliability.cjs:76](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L76>)
- [ReliabilityController.state](<reliability.cjs.md#s-a5f9d153c4791192>) — [electron/ai/llm-front-office/reliability.cjs:122](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L122>)
- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/reliability.cjs:156](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L156>)

**Called by (statically resolved):**

- [&lt;anonymous@578:102&gt;](<../front-office-engine.test.cjs.md#s-a49745d68b9024b8>) — [electron/ai/front-office-engine.test.cjs:589](<../../../../../../../electron/ai/front-office-engine.test.cjs#L589>)
- [&lt;anonymous@578:102&gt;](<../front-office-engine.test.cjs.md#s-a49745d68b9024b8>) — [electron/ai/front-office-engine.test.cjs:599](<../../../../../../../electron/ai/front-office-engine.test.cjs#L599>)
- [&lt;anonymous@609:80&gt;](<../front-office-engine.test.cjs.md#s-48eef1071de9db1c>) — [electron/ai/front-office-engine.test.cjs:616](<../../../../../../../electron/ai/front-office-engine.test.cjs#L616>)
- [&lt;anonymous@625:78&gt;](<../front-office-engine.test.cjs.md#s-f6621a6ca19dc6b7>) — [electron/ai/front-office-engine.test.cjs:632](<../../../../../../../electron/ai/front-office-engine.test.cjs#L632>)
- [&lt;anonymous@641:88&gt;](<../front-office-engine.test.cjs.md#s-5e74ba9bdbb9f974>) — [electron/ai/front-office-engine.test.cjs:646](<../../../../../../../electron/ai/front-office-engine.test.cjs#L646>)
- [&lt;anonymous@641:88&gt;](<../front-office-engine.test.cjs.md#s-5e74ba9bdbb9f974>) — [electron/ai/front-office-engine.test.cjs:653](<../../../../../../../electron/ai/front-office-engine.test.cjs#L653>)
- [FrontOfficeService.run](<service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:483](<../../../../../../../electron/ai/llm-front-office/service.cjs#L483>)

Unresolved / external call sites: 23.

- AbortController — external-or-dynamic-dispatch; [electron/ai/llm-front-office/reliability.cjs:35](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L35>)
- signal?.addEventListener — external-or-dynamic-dispatch; [electron/ai/llm-front-office/reliability.cjs:41](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L41>)
- setTimeout — external-or-dynamic-dispatch; [electron/ai/llm-front-office/reliability.cjs:43](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L43>)
- controller.signal.throwIfAborted — external-or-dynamic-dispatch; [electron/ai/llm-front-office/reliability.cjs:60](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L60>)
- Math.min — external-or-dynamic-dispatch; [electron/ai/llm-front-office/reliability.cjs:61](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L61>)
- attempts.push — external-or-dynamic-dispatch; [electron/ai/llm-front-office/reliability.cjs:89](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L89>)
- onAttempt — signature-only-candidate; [electron/ai/llm-front-office/reliability.cjs:90](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L90>)
- Promise — external-or-dynamic-dispatch; [electron/ai/llm-front-office/reliability.cjs:93](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L93>)
- 15 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:589](<../../../../../../../electron/ai/front-office-engine.test.cjs#L589>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:599](<../../../../../../../electron/ai/front-office-engine.test.cjs#L599>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:616](<../../../../../../../electron/ai/front-office-engine.test.cjs#L616>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:632](<../../../../../../../electron/ai/front-office-engine.test.cjs#L632>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:646](<../../../../../../../electron/ai/front-office-engine.test.cjs#L646>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:653](<../../../../../../../electron/ai/front-office-engine.test.cjs#L653>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:22](<../../../../../../../electron/ai/front-office-engine.test.cjs#L22>) — file-import-only; coverage not established.

<a id="s-58b8abc723854b4d"></a>

## ReliabilityController.execute.&lt;anonymous@33:27&gt;

[electron/ai/llm-front-office/reliability.cjs:33](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L33>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ReliabilityController.execute](<reliability.cjs.md#s-aa433ce578b4dcf5>).

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

- [electron/ai/front-office-engine.test.cjs:22](<../../../../../../../electron/ai/front-office-engine.test.cjs#L22>) — file-import-only; coverage not established.

<a id="s-798af1876f3865dc"></a>

## ReliabilityController.execute.cancel

[electron/ai/llm-front-office/reliability.cjs:36](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L36>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ReliabilityController.execute](<reliability.cjs.md#s-aa433ce578b4dcf5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/reliability.cjs:39](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L39>)

**Called by (statically resolved):**

- [ReliabilityController.execute](<reliability.cjs.md#s-aa433ce578b4dcf5>) — [electron/ai/llm-front-office/reliability.cjs:42](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L42>)

Unresolved / external call sites: 1.

- controller.abort — external-or-dynamic-dispatch; [electron/ai/llm-front-office/reliability.cjs:37](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L37>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:22](<../../../../../../../electron/ai/front-office-engine.test.cjs#L22>) — file-import-only; coverage not established.

<a id="s-26ca4822cb56c80c"></a>

## ReliabilityController.execute.&lt;anonymous@44:7&gt;

[electron/ai/llm-front-office/reliability.cjs:44](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L44>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ReliabilityController.execute](<reliability.cjs.md#s-aa433ce578b4dcf5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [ModelRuntimeError.constructor](<../../shared/runtime-errors.cjs.md#s-66422d0cde496ce3>) — [electron/ai/llm-front-office/reliability.cjs:46](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L46>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- controller.abort — external-or-dynamic-dispatch; [electron/ai/llm-front-office/reliability.cjs:45](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L45>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:22](<../../../../../../../electron/ai/front-office-engine.test.cjs#L22>) — file-import-only; coverage not established.

<a id="s-057800bbccee296d"></a>

## ReliabilityController.execute.&lt;anonymous@93:39&gt;

[electron/ai/llm-front-office/reliability.cjs:93](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L93>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ReliabilityController.execute](<reliability.cjs.md#s-aa433ce578b4dcf5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| reject | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- controller.signal.addEventListener — external-or-dynamic-dispatch; [electron/ai/llm-front-office/reliability.cjs:95](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L95>)
- abort — signature-only-candidate; [electron/ai/llm-front-office/reliability.cjs:96](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L96>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:22](<../../../../../../../electron/ai/front-office-engine.test.cjs#L22>) — file-import-only; coverage not established.

<a id="s-4cb4928e9aafe03d"></a>

## ReliabilityController.execute.&lt;anonymous@93:39&gt;.&lt;anonymous@94:21&gt;

[electron/ai/llm-front-office/reliability.cjs:94](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L94>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ReliabilityController.execute.&lt;anonymous@93:39&gt;](<reliability.cjs.md#s-057800bbccee296d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- reject — external-or-dynamic-dispatch; [electron/ai/llm-front-office/reliability.cjs:94](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L94>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:22](<../../../../../../../electron/ai/front-office-engine.test.cjs#L22>) — file-import-only; coverage not established.

<a id="s-9a4afd14e09aaa3f"></a>

## ReliabilityController.execute.&lt;anonymous@99:53&gt;

[electron/ai/llm-front-office/reliability.cjs:99](<../../../../../../../electron/ai/llm-front-office/reliability.cjs#L99>) · ArrowFunction · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ReliabilityController.execute](<reliability.cjs.md#s-aa433ce578b4dcf5>).

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

- [electron/ai/front-office-engine.test.cjs:22](<../../../../../../../electron/ai/front-office-engine.test.cjs#L22>) — file-import-only; coverage not established.
