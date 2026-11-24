# electron/engines/native.cjs: symbols

[Atlas](<../../../../README.md>) / [Built-in Engines and data adapters](<../../../../modules/engines.md>) / [electron/engines/native.cjs:1](<../../../../../../electron/engines/native.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/native.cjs](<native.cjs.md#s-5166bbb79d792764>) (Module)
- [executeNativeEngine](<native.cjs.md#s-acb52912a7e235f5>) (FunctionDeclaration)

<a id="s-5166bbb79d792764"></a>

## electron/engines/native.cjs

[electron/engines/native.cjs:1](<../../../../../../electron/engines/native.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [tests/integration/architecture-contract.test.cjs:91](<../../../../../../tests/integration/architecture-contract.test.cjs#L91>) — file-import-only; coverage not established.

<a id="s-acb52912a7e235f5"></a>

## executeNativeEngine

[electron/engines/native.cjs:2](<../../../../../../electron/engines/native.cjs#L2>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../modules/engines.md>)

Dispatches allowlisted native adapters without loading AI services. Trusted callers must authorize the Entity/source and any network request first; returns adapter data or its validation/provider error. This low-level port does not grant permissions or mint execution receipts.

Purpose evidence: jsdoc.

Exported as: executeNativeEngine ([electron/ai/engine-registry.cjs:1](<../../../../../../electron/ai/engine-registry.cjs#L1>)), executeNativeEngine ([electron/engines/native.cjs:1](<../../../../../../electron/engines/native.cjs#L1>)).

Lexical owner: [electron/engines/native.cjs](<native.cjs.md#s-5166bbb79d792764>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| engineId | any | compiler-inferred | required |
| operation | any | compiler-inferred | required |
| input | any | compiler-inferred | required |
| options | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@325:85&gt;](<../excel-engine.test.cjs.md#s-3851a28a688d3b1b>) — [electron/excel-engine.test.cjs:342](<../../../../../../electron/excel-engine.test.cjs#L342>)
- [&lt;anonymous@325:85&gt;](<../excel-engine.test.cjs.md#s-3851a28a688d3b1b>) — [electron/excel-engine.test.cjs:349](<../../../../../../electron/excel-engine.test.cjs#L349>)
- [&lt;anonymous@55:89&gt;.&lt;anonymous@56:22&gt;.execute](<../excel-service.test.cjs.md#s-aa71f176d701d918>) — [electron/excel-service.test.cjs:62](<../../../../../../electron/excel-service.test.cjs#L62>)
- [&lt;anonymous@141:67&gt;.&lt;anonymous@142:22&gt;.execute](<../excel-service.test.cjs.md#s-5be5881aa4fdd6e8>) — [electron/excel-service.test.cjs:147](<../../../../../../electron/excel-service.test.cjs#L147>)
- [&lt;anonymous@60:106&gt;](<../yahoo-engine-contract.test.cjs.md#s-769e6d6d3df34284>) — [electron/yahoo-engine-contract.test.cjs:62](<../../../../../../electron/yahoo-engine-contract.test.cjs#L62>)
- [&lt;anonymous@60:106&gt;](<../yahoo-engine-contract.test.cjs.md#s-769e6d6d3df34284>) — [electron/yahoo-engine-contract.test.cjs:83](<../../../../../../electron/yahoo-engine-contract.test.cjs#L83>)
- [&lt;anonymous@60:106&gt;](<../yahoo-engine-contract.test.cjs.md#s-769e6d6d3df34284>) — [electron/yahoo-engine-contract.test.cjs:86](<../../../../../../electron/yahoo-engine-contract.test.cjs#L86>)
- [&lt;anonymous@90:100&gt;](<../../tests/integration/architecture-contract.test.cjs.md#s-e044f3f9f8c446da>) — [tests/integration/architecture-contract.test.cjs:97](<../../../../../../tests/integration/architecture-contract.test.cjs#L97>)
- [&lt;anonymous@90:100&gt;](<../../tests/integration/architecture-contract.test.cjs.md#s-e044f3f9f8c446da>) — [tests/integration/architecture-contract.test.cjs:101](<../../../../../../tests/integration/architecture-contract.test.cjs#L101>)

Unresolved / external call sites: 11.

- Array.isArray — external-or-dynamic-dispatch; [electron/engines/native.cjs:7](<../../../../../../electron/engines/native.cjs#L7>)
- Object.hasOwn — external-or-dynamic-dispatch; [electron/engines/native.cjs:8](<../../../../../../electron/engines/native.cjs#L8>)
- Error — external-or-dynamic-dispatch; [electron/engines/native.cjs:10](<../../../../../../electron/engines/native.cjs#L10>)
- require("./yahoo-financials/index.cjs") .createFinancialEngine(options) .execute — signature-only-candidate; [electron/engines/native.cjs:13](<../../../../../../electron/engines/native.cjs#L13>)
- require("./yahoo-financials/index.cjs") .createFinancialEngine — signature-only-candidate; [electron/engines/native.cjs:13](<../../../../../../electron/engines/native.cjs#L13>)
- require — module-loader; [electron/engines/native.cjs:13](<../../../../../../electron/engines/native.cjs#L13>)
- require("./daily-price/index.cjs").price — signature-only-candidate; [electron/engines/native.cjs:18](<../../../../../../electron/engines/native.cjs#L18>)
- require — module-loader; [electron/engines/native.cjs:18](<../../../../../../electron/engines/native.cjs#L18>)
- 3 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/excel-engine.test.cjs:342](<../../../../../../electron/excel-engine.test.cjs#L342>) — static-call-site; coverage not established.
- [electron/excel-engine.test.cjs:349](<../../../../../../electron/excel-engine.test.cjs#L349>) — static-call-site; coverage not established.
- [electron/excel-service.test.cjs:62](<../../../../../../electron/excel-service.test.cjs#L62>) — static-call-site; coverage not established.
- [electron/excel-service.test.cjs:147](<../../../../../../electron/excel-service.test.cjs#L147>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:62](<../../../../../../electron/yahoo-engine-contract.test.cjs#L62>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:83](<../../../../../../electron/yahoo-engine-contract.test.cjs#L83>) — static-call-site; coverage not established.
- [electron/yahoo-engine-contract.test.cjs:86](<../../../../../../electron/yahoo-engine-contract.test.cjs#L86>) — static-call-site; coverage not established.
- [tests/integration/architecture-contract.test.cjs:97](<../../../../../../tests/integration/architecture-contract.test.cjs#L97>) — static-call-site; coverage not established.
- [tests/integration/architecture-contract.test.cjs:101](<../../../../../../tests/integration/architecture-contract.test.cjs#L101>) — static-call-site; coverage not established.
- [tests/integration/architecture-contract.test.cjs:91](<../../../../../../tests/integration/architecture-contract.test.cjs#L91>) — file-import-only; coverage not established.
