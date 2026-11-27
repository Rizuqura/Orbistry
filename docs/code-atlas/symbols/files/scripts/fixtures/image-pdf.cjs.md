# scripts/fixtures/image-pdf.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/fixtures/image-pdf.cjs:1](<../../../../../../scripts/fixtures/image-pdf.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/fixtures/image-pdf.cjs](<image-pdf.cjs.md#s-3470f71283a34db0>) (Module)
- [imagePdf](<image-pdf.cjs.md#s-1b7b36e15c54a255>) (FunctionDeclaration)
- [imagePdf.&lt;anonymous@36:14&gt;](<image-pdf.cjs.md#s-156ae246b76a01be>) (ArrowFunction)

<a id="s-3470f71283a34db0"></a>

## scripts/fixtures/image-pdf.cjs

[scripts/fixtures/image-pdf.cjs:1](<../../../../../../scripts/fixtures/image-pdf.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [scripts/fixtures/image-pdf.cjs:1](<../../../../../../scripts/fixtures/image-pdf.cjs#L1>)
- require — module-loader; [scripts/fixtures/image-pdf.cjs:2](<../../../../../../scripts/fixtures/image-pdf.cjs#L2>)

**Related tests / acceptance harnesses:**

- [electron/document-ocr.test.cjs:8](<../../../../../../electron/document-ocr.test.cjs#L8>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-packaged-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-pdf-image-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L7>) — file-import-only; coverage not established.

<a id="s-1b7b36e15c54a255"></a>

## imagePdf

[scripts/fixtures/image-pdf.cjs:3](<../../../../../../scripts/fixtures/image-pdf.cjs#L3>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: imagePdf ([scripts/fixtures/image-pdf.cjs:1](<../../../../../../scripts/fixtures/image-pdf.cjs#L1>)).

Lexical owner: [scripts/fixtures/image-pdf.cjs](<image-pdf.cjs.md#s-3470f71283a34db0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@12:3&gt;](<../../electron/document-ocr.test.cjs.md#s-f5ecd73b921128cc>) — [electron/document-ocr.test.cjs:24](<../../../../../../electron/document-ocr.test.cjs#L24>)
- [main](<../acceptance/electron-packaged-smoke.cjs.md#s-f882e9165e7b6781>) — [scripts/acceptance/electron-packaged-smoke.cjs:66](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L66>)
- [main](<../acceptance/electron-pdf-image-smoke.cjs.md#s-f679c8105b6317ac>) — [scripts/acceptance/electron-pdf-image-smoke.cjs:24](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L24>)

Unresolved / external call sites: 22.

- fs.readFileSync — external-or-dynamic-dispatch; [scripts/fixtures/image-pdf.cjs:4](<../../../../../../scripts/fixtures/image-pdf.cjs#L4>)
- path.join — external-or-dynamic-dispatch; [scripts/fixtures/image-pdf.cjs:4](<../../../../../../scripts/fixtures/image-pdf.cjs#L4>)
- Buffer.from — external-or-dynamic-dispatch; [scripts/fixtures/image-pdf.cjs:7](<../../../../../../scripts/fixtures/image-pdf.cjs#L7>)
- Buffer.from — external-or-dynamic-dispatch; [scripts/fixtures/image-pdf.cjs:8](<../../../../../../scripts/fixtures/image-pdf.cjs#L8>)
- Buffer.from — external-or-dynamic-dispatch; [scripts/fixtures/image-pdf.cjs:9](<../../../../../../scripts/fixtures/image-pdf.cjs#L9>)
- Buffer.concat — external-or-dynamic-dispatch; [scripts/fixtures/image-pdf.cjs:12](<../../../../../../scripts/fixtures/image-pdf.cjs#L12>)
- Buffer.from — external-or-dynamic-dispatch; [scripts/fixtures/image-pdf.cjs:13](<../../../../../../scripts/fixtures/image-pdf.cjs#L13>)
- Buffer.from — external-or-dynamic-dispatch; [scripts/fixtures/image-pdf.cjs:17](<../../../../../../scripts/fixtures/image-pdf.cjs#L17>)
- 14 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/document-ocr.test.cjs:24](<../../../../../../electron/document-ocr.test.cjs#L24>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-packaged-smoke.cjs:66](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L66>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-pdf-image-smoke.cjs:24](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L24>) — static-call-site; coverage not established.
- [electron/document-ocr.test.cjs:8](<../../../../../../electron/document-ocr.test.cjs#L8>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-packaged-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-pdf-image-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L7>) — file-import-only; coverage not established.

<a id="s-156ae246b76a01be"></a>

## imagePdf.&lt;anonymous@36:14&gt;

[scripts/fixtures/image-pdf.cjs:36](<../../../../../../scripts/fixtures/image-pdf.cjs#L36>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [imagePdf](<image-pdf.cjs.md#s-1b7b36e15c54a255>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| n | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- String(n).padStart — external-or-dynamic-dispatch; [scripts/fixtures/image-pdf.cjs:36](<../../../../../../scripts/fixtures/image-pdf.cjs#L36>)
- String — external-or-dynamic-dispatch; [scripts/fixtures/image-pdf.cjs:36](<../../../../../../scripts/fixtures/image-pdf.cjs#L36>)

**Related tests / acceptance harnesses:**

- [electron/document-ocr.test.cjs:8](<../../../../../../electron/document-ocr.test.cjs#L8>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-packaged-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-packaged-smoke.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-pdf-image-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L7>) — file-import-only; coverage not established.
