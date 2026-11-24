# electron/ai/llm-front-office/errors.cjs: symbols

[Atlas](<../../../../../README.md>) / [Retained AI runtime](<../../../../../modules/ai-runtime.md>) / [electron/ai/llm-front-office/errors.cjs:1](<../../../../../../../electron/ai/llm-front-office/errors.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/llm-front-office/errors.cjs](<errors.cjs.md#s-f1a7d2cb37ac1954>) (Module)
- [publicError](<errors.cjs.md#s-0825bc2120fdfa6d>) (FunctionDeclaration)

<a id="s-f1a7d2cb37ac1954"></a>

## electron/ai/llm-front-office/errors.cjs

[electron/ai/llm-front-office/errors.cjs:1](<../../../../../../../electron/ai/llm-front-office/errors.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/ai/llm-front-office/errors.cjs:3](<../../../../../../../electron/ai/llm-front-office/errors.cjs#L3>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:35](<../../../../../../../electron/ai/front-office-engine.test.cjs#L35>) — file-import-only; coverage not established.

<a id="s-0825bc2120fdfa6d"></a>

## publicError

[electron/ai/llm-front-office/errors.cjs:34](<../../../../../../../electron/ai/llm-front-office/errors.cjs#L34>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../../modules/ai-runtime.md>)

Never copy an arbitrary error message/body/header into a trace, export or renderer.

Purpose evidence: jsdoc.

Exported as: publicError ([electron/ai/llm-front-office/errors.cjs:1](<../../../../../../../electron/ai/llm-front-office/errors.cjs#L1>)).

Lexical owner: [electron/ai/llm-front-office/errors.cjs](<errors.cjs.md#s-f1a7d2cb37ac1954>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: { code: any; message: any; details: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@761:83&gt;](<../front-office-engine.test.cjs.md#s-eb98cc7598b54f65>) — [electron/ai/front-office-engine.test.cjs:762](<../../../../../../../electron/ai/front-office-engine.test.cjs#L762>)
- [runEvaluation](<evaluation/harness.cjs.md#s-271b18962c102baf>) — [electron/ai/llm-front-office/evaluation/harness.cjs:192](<../../../../../../../electron/ai/llm-front-office/evaluation/harness.cjs#L192>)
- [FrontOfficeService.run](<service.cjs.md#s-3bd2f92cf25a76d2>) — [electron/ai/llm-front-office/service.cjs:630](<../../../../../../../electron/ai/llm-front-office/service.cjs#L630>)

Unresolved / external call sites: 1.

- errorCode.safeParse — external-or-dynamic-dispatch; [electron/ai/llm-front-office/errors.cjs:35](<../../../../../../../electron/ai/llm-front-office/errors.cjs#L35>)

**Related tests / acceptance harnesses:**

- [electron/ai/front-office-engine.test.cjs:762](<../../../../../../../electron/ai/front-office-engine.test.cjs#L762>) — static-call-site; coverage not established.
- [electron/ai/front-office-engine.test.cjs:35](<../../../../../../../electron/ai/front-office-engine.test.cjs#L35>) — file-import-only; coverage not established.
