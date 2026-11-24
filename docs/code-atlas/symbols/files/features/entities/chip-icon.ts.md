# features/entities/chip-icon.ts: symbols

[Atlas](<../../../../README.md>) / [Entity UI](<../../../../modules/portal-entities.md>) / [features/entities/chip-icon.ts:1](<../../../../../../features/entities/chip-icon.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/entities/chip-icon.ts](<chip-icon.ts.md#s-cadf9d3449770951>) (Module)
- [readChipIcon](<chip-icon.ts.md#s-08a72166f73c1f0b>) (FunctionDeclaration)

<a id="s-cadf9d3449770951"></a>

## features/entities/chip-icon.ts

[features/entities/chip-icon.ts:1](<../../../../../../features/entities/chip-icon.ts#L1>) · Module · production · [Entity UI](<../../../../modules/portal-entities.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/worldview/chip-colors.test.cjs:10](<../../../../../../features/worldview/chip-colors.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-08a72166f73c1f0b"></a>

## readChipIcon

[features/entities/chip-icon.ts:8](<../../../../../../features/entities/chip-icon.ts#L8>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Decodes an explicitly chosen PNG/JPEG/WebP into a small PNG data URL for the frontend session. Rejects unsupported, oversized, or undecodable images; no upload, file write, or Vault access occurs.

Purpose evidence: jsdoc.

Exported as: readChipIcon ([features/entities/chip-icon.ts:1](<../../../../../../features/entities/chip-icon.ts#L1>)).

Lexical owner: [features/entities/chip-icon.ts](<chip-icon.ts.md#s-cadf9d3449770951>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | File | annotation | required |

Returns: Promise&lt;string&gt; (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ChipDialog.uploadIcon](<chip-dialog.tsx.md#s-6e83dcf19c544e3d>) — [features/entities/chip-dialog.tsx:140](<../../../../../../features/entities/chip-dialog.tsx#L140>)
- [&lt;anonymous@47:61&gt;](<../worldview/chip-colors.test.cjs.md#s-b8576c9eccc1e66e>) — [features/worldview/chip-colors.test.cjs:49](<../../../../../../features/worldview/chip-colors.test.cjs#L49>)
- [&lt;anonymous@47:61&gt;](<../worldview/chip-colors.test.cjs.md#s-b8576c9eccc1e66e>) — [features/worldview/chip-colors.test.cjs:53](<../../../../../../features/worldview/chip-colors.test.cjs#L53>)

Unresolved / external call sites: 11.

- &#91;"image/png", "image/jpeg", "image/webp"&#93;.includes — external-or-dynamic-dispatch; [features/entities/chip-icon.ts:9](<../../../../../../features/entities/chip-icon.ts#L9>)
- Error — external-or-dynamic-dispatch; [features/entities/chip-icon.ts:10](<../../../../../../features/entities/chip-icon.ts#L10>)
- Error — external-or-dynamic-dispatch; [features/entities/chip-icon.ts:12](<../../../../../../features/entities/chip-icon.ts#L12>)
- createImageBitmap — external-or-dynamic-dispatch; [features/entities/chip-icon.ts:13](<../../../../../../features/entities/chip-icon.ts#L13>)
- document.createElement — external-or-dynamic-dispatch; [features/entities/chip-icon.ts:15](<../../../../../../features/entities/chip-icon.ts#L15>)
- canvas.getContext — external-or-dynamic-dispatch; [features/entities/chip-icon.ts:18](<../../../../../../features/entities/chip-icon.ts#L18>)
- Error — external-or-dynamic-dispatch; [features/entities/chip-icon.ts:19](<../../../../../../features/entities/chip-icon.ts#L19>)
- Math.min — external-or-dynamic-dispatch; [features/entities/chip-icon.ts:20](<../../../../../../features/entities/chip-icon.ts#L20>)
- 3 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [features/worldview/chip-colors.test.cjs:49](<../../../../../../features/worldview/chip-colors.test.cjs#L49>) — static-call-site; coverage not established.
- [features/worldview/chip-colors.test.cjs:53](<../../../../../../features/worldview/chip-colors.test.cjs#L53>) — static-call-site; coverage not established.
- [features/worldview/chip-colors.test.cjs:10](<../../../../../../features/worldview/chip-colors.test.cjs#L10>) — file-import-only; coverage not established.
