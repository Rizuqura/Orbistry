# scripts/fixtures/text-pdf.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/fixtures/text-pdf.cjs:1](<../../../../../../scripts/fixtures/text-pdf.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/fixtures/text-pdf.cjs](<text-pdf.cjs.md#s-5c4696db1224cece>) (Module)
- [textPdf](<text-pdf.cjs.md#s-471938689fc127a1>) (FunctionDeclaration)
- [textPdf.&lt;anonymous@5:41&gt;](<text-pdf.cjs.md#s-b243c9e05ee11fa8>) (ArrowFunction)
- [textPdf.&lt;anonymous@13:14&gt;](<text-pdf.cjs.md#s-ca1e3ad6cdc8af51>) (ArrowFunction)
- [textPdf.&lt;anonymous@30:10&gt;](<text-pdf.cjs.md#s-c3794389990575c1>) (ArrowFunction)

<a id="s-5c4696db1224cece"></a>

## scripts/fixtures/text-pdf.cjs

[scripts/fixtures/text-pdf.cjs:1](<../../../../../../scripts/fixtures/text-pdf.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/universe/vault-service.test.cjs:421](<../../../../../../electron/domains/universe/vault-service.test.cjs#L421>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-pdf-image-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:6](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L6>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:6](<../../../../../../scripts/statistics-live-acceptance.cjs#L6>) — file-import-only; coverage not established.

<a id="s-471938689fc127a1"></a>

## textPdf

[scripts/fixtures/text-pdf.cjs:2](<../../../../../../scripts/fixtures/text-pdf.cjs#L2>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: textPdf ([scripts/fixtures/text-pdf.cjs:1](<../../../../../../scripts/fixtures/text-pdf.cjs#L1>)).

Lexical owner: [scripts/fixtures/text-pdf.cjs](<text-pdf.cjs.md#s-5c4696db1224cece>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| pages | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@420:101&gt;.&lt;anonymous@423:19&gt;](<../../electron/domains/universe/vault-service.test.cjs.md#s-42d090a3d8a42efb>) — [electron/domains/universe/vault-service.test.cjs:426](<../../../../../../electron/domains/universe/vault-service.test.cjs#L426>)
- [&lt;anonymous@420:101&gt;.&lt;anonymous@423:19&gt;](<../../electron/domains/universe/vault-service.test.cjs.md#s-42d090a3d8a42efb>) — [electron/domains/universe/vault-service.test.cjs:440](<../../../../../../electron/domains/universe/vault-service.test.cjs#L440>)
- [main](<../acceptance/electron-pdf-image-smoke.cjs.md#s-f679c8105b6317ac>) — [scripts/acceptance/electron-pdf-image-smoke.cjs:22](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L22>)
- [main](<../acceptance/electron-pdf-image-smoke.cjs.md#s-f679c8105b6317ac>) — [scripts/acceptance/electron-pdf-image-smoke.cjs:91](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L91>)
- [verifyManualIndex](<../acceptance/worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:36](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L36>)
- [&lt;anonymous@14:2&gt;](<../statistics-live-acceptance.cjs.md#s-771764a0f9e6c967>) — [scripts/statistics-live-acceptance.cjs:46](<../../../../../../scripts/statistics-live-acceptance.cjs#L46>)

Unresolved / external call sites: 13.

- pages.map((_, i) =&gt; &#96;${4 + i * 2} 0 R&#96;).join — external-or-dynamic-dispatch; [scripts/fixtures/text-pdf.cjs:5](<../../../../../../scripts/fixtures/text-pdf.cjs#L5>)
- pages.map — external-or-dynamic-dispatch; [scripts/fixtures/text-pdf.cjs:5](<../../../../../../scripts/fixtures/text-pdf.cjs#L5>)
- lines .map((line) =&gt; &#96;(${line.replace(/&#91;()\\\\&#93;/g, "\\\\$&")}) Tj\\nT*&#96;) .join — external-or-dynamic-dispatch; [scripts/fixtures/text-pdf.cjs:12](<../../../../../../scripts/fixtures/text-pdf.cjs#L12>)
- lines .map — external-or-dynamic-dispatch; [scripts/fixtures/text-pdf.cjs:12](<../../../../../../scripts/fixtures/text-pdf.cjs#L12>)
- bodies.push — external-or-dynamic-dispatch; [scripts/fixtures/text-pdf.cjs:16](<../../../../../../scripts/fixtures/text-pdf.cjs#L16>)
- Buffer.byteLength — external-or-dynamic-dispatch; [scripts/fixtures/text-pdf.cjs:18](<../../../../../../scripts/fixtures/text-pdf.cjs#L18>)
- bodies.entries — external-or-dynamic-dispatch; [scripts/fixtures/text-pdf.cjs:23](<../../../../../../scripts/fixtures/text-pdf.cjs#L23>)
- offsets.push — external-or-dynamic-dispatch; [scripts/fixtures/text-pdf.cjs:24](<../../../../../../scripts/fixtures/text-pdf.cjs#L24>)
- 5 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/domains/universe/vault-service.test.cjs:426](<../../../../../../electron/domains/universe/vault-service.test.cjs#L426>) — static-call-site; coverage not established.
- [electron/domains/universe/vault-service.test.cjs:440](<../../../../../../electron/domains/universe/vault-service.test.cjs#L440>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-pdf-image-smoke.cjs:22](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L22>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-pdf-image-smoke.cjs:91](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L91>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:36](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L36>) — static-call-site; coverage not established.
- [scripts/statistics-live-acceptance.cjs:46](<../../../../../../scripts/statistics-live-acceptance.cjs#L46>) — static-call-site; coverage not established.
- [electron/domains/universe/vault-service.test.cjs:421](<../../../../../../electron/domains/universe/vault-service.test.cjs#L421>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-pdf-image-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:6](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L6>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:6](<../../../../../../scripts/statistics-live-acceptance.cjs#L6>) — file-import-only; coverage not established.

<a id="s-b243c9e05ee11fa8"></a>

## textPdf.&lt;anonymous@5:41&gt;

[scripts/fixtures/text-pdf.cjs:5](<../../../../../../scripts/fixtures/text-pdf.cjs#L5>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [textPdf](<text-pdf.cjs.md#s-471938689fc127a1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| i | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/universe/vault-service.test.cjs:421](<../../../../../../electron/domains/universe/vault-service.test.cjs#L421>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-pdf-image-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:6](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L6>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:6](<../../../../../../scripts/statistics-live-acceptance.cjs#L6>) — file-import-only; coverage not established.

<a id="s-ca1e3ad6cdc8af51"></a>

## textPdf.&lt;anonymous@13:14&gt;

[scripts/fixtures/text-pdf.cjs:13](<../../../../../../scripts/fixtures/text-pdf.cjs#L13>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [textPdf](<text-pdf.cjs.md#s-471938689fc127a1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| line | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- line.replace — external-or-dynamic-dispatch; [scripts/fixtures/text-pdf.cjs:13](<../../../../../../scripts/fixtures/text-pdf.cjs#L13>)

**Related tests / acceptance harnesses:**

- [electron/domains/universe/vault-service.test.cjs:421](<../../../../../../electron/domains/universe/vault-service.test.cjs#L421>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-pdf-image-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:6](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L6>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:6](<../../../../../../scripts/statistics-live-acceptance.cjs#L6>) — file-import-only; coverage not established.

<a id="s-c3794389990575c1"></a>

## textPdf.&lt;anonymous@30:10&gt;

[scripts/fixtures/text-pdf.cjs:30](<../../../../../../scripts/fixtures/text-pdf.cjs#L30>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [textPdf](<text-pdf.cjs.md#s-471938689fc127a1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| offset | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- String(offset).padStart — external-or-dynamic-dispatch; [scripts/fixtures/text-pdf.cjs:30](<../../../../../../scripts/fixtures/text-pdf.cjs#L30>)
- String — external-or-dynamic-dispatch; [scripts/fixtures/text-pdf.cjs:30](<../../../../../../scripts/fixtures/text-pdf.cjs#L30>)

**Related tests / acceptance harnesses:**

- [electron/domains/universe/vault-service.test.cjs:421](<../../../../../../electron/domains/universe/vault-service.test.cjs#L421>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-pdf-image-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-pdf-image-smoke.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:6](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L6>) — file-import-only; coverage not established.
- [scripts/statistics-live-acceptance.cjs:6](<../../../../../../scripts/statistics-live-acceptance.cjs#L6>) — file-import-only; coverage not established.
