# electron/document-ocr.test.cjs: symbols

[Atlas](<../../../README.md>) / [Vault and stations](<../../../modules/vault.md>) / [electron/document-ocr.test.cjs:1](<../../../../../electron/document-ocr.test.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/document-ocr.test.cjs](<document-ocr.test.cjs.md#s-88955df986744625>) (Module)
- [&lt;anonymous@12:3&gt;](<document-ocr.test.cjs.md#s-f5ecd73b921128cc>) (ArrowFunction)
- [&lt;anonymous@12:3&gt;.&lt;anonymous@14:13&gt;](<document-ocr.test.cjs.md#s-b551dabc794ec03c>) (ArrowFunction)
- [&lt;anonymous@12:3&gt;.&lt;anonymous@46:25&gt;](<document-ocr.test.cjs.md#s-f24668c7cf0cc872>) (ArrowFunction)
- [&lt;anonymous@12:3&gt;.&lt;anonymous@50:9&gt;](<document-ocr.test.cjs.md#s-bd9c21b21bf63fe2>) (ArrowFunction)
- [&lt;anonymous@12:3&gt;.&lt;anonymous@56:17&gt;](<document-ocr.test.cjs.md#s-06ac9b3fd4ec0754>) (ArrowFunction)

<a id="s-88955df986744625"></a>

## electron/document-ocr.test.cjs

[electron/document-ocr.test.cjs:1](<../../../../../electron/document-ocr.test.cjs#L1>) · Module · test · [Vault and stations](<../../../modules/vault.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- require — module-loader; [electron/document-ocr.test.cjs:1](<../../../../../electron/document-ocr.test.cjs#L1>)
- require — module-loader; [electron/document-ocr.test.cjs:2](<../../../../../electron/document-ocr.test.cjs#L2>)
- require — module-loader; [electron/document-ocr.test.cjs:3](<../../../../../electron/document-ocr.test.cjs#L3>)
- require — module-loader; [electron/document-ocr.test.cjs:4](<../../../../../electron/document-ocr.test.cjs#L4>)
- require — module-loader; [electron/document-ocr.test.cjs:5](<../../../../../electron/document-ocr.test.cjs#L5>)
- require — module-loader; [electron/document-ocr.test.cjs:6](<../../../../../electron/document-ocr.test.cjs#L6>)
- require — module-loader; [electron/document-ocr.test.cjs:7](<../../../../../electron/document-ocr.test.cjs#L7>)
- require — module-loader; [electron/document-ocr.test.cjs:8](<../../../../../electron/document-ocr.test.cjs#L8>)
- 1 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f5ecd73b921128cc"></a>

## &lt;anonymous@12:3&gt;

[electron/document-ocr.test.cjs:12](<../../../../../electron/document-ocr.test.cjs#L12>) · ArrowFunction · test · [Vault and stations](<../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/document-ocr.test.cjs](<document-ocr.test.cjs.md#s-88955df986744625>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| t | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [imagePdf](<../scripts/fixtures/image-pdf.cjs.md#s-1b7b36e15c54a255>) — [electron/document-ocr.test.cjs:24](<../../../../../electron/document-ocr.test.cjs#L24>)
- [scanVault](<domains/universe/vault-service.cjs.md#s-ad799bd82bfa8317>) — [electron/document-ocr.test.cjs:25](<../../../../../electron/document-ocr.test.cjs#L25>)
- [readVaultFile](<domains/universe/vault-service.cjs.md#s-9d052ebb9a7eb12e>) — [electron/document-ocr.test.cjs:28](<../../../../../electron/document-ocr.test.cjs#L28>)
- [readIndexedPdfText](<domains/universe/vault-service.cjs.md#s-af94c3891425ab49>) — [electron/document-ocr.test.cjs:33](<../../../../../electron/document-ocr.test.cjs#L33>)
- [previewContext](<domains/universe/station-service.cjs.md#s-d12d2c8276f5d665>) — [electron/document-ocr.test.cjs:37](<../../../../../electron/document-ocr.test.cjs#L37>)
- [inspectBoxSources](<domains/universe/station-service.cjs.md#s-c14efa654fb7576e>) — [electron/document-ocr.test.cjs:44](<../../../../../electron/document-ocr.test.cjs#L44>)
- [prepareBrainScope](<domains/universe/station-service.cjs.md#s-e4cff95cf847ee92>) — [electron/document-ocr.test.cjs:53](<../../../../../electron/document-ocr.test.cjs#L53>)
- [readBrainSource](<domains/universe/station-service.cjs.md#s-b62c400d5ba597c7>) — [electron/document-ocr.test.cjs:63](<../../../../../electron/document-ocr.test.cjs#L63>)
- [readBrainSource](<domains/universe/station-service.cjs.md#s-b62c400d5ba597c7>) — [electron/document-ocr.test.cjs:71](<../../../../../electron/document-ocr.test.cjs#L71>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 28.

- fs.mkdtemp — external-or-dynamic-dispatch; [electron/document-ocr.test.cjs:13](<../../../../../electron/document-ocr.test.cjs#L13>)
- path.join — external-or-dynamic-dispatch; [electron/document-ocr.test.cjs:13](<../../../../../electron/document-ocr.test.cjs#L13>)
- os.tmpdir — external-or-dynamic-dispatch; [electron/document-ocr.test.cjs:13](<../../../../../electron/document-ocr.test.cjs#L13>)
- t.after — external-or-dynamic-dispatch; [electron/document-ocr.test.cjs:14](<../../../../../electron/document-ocr.test.cjs#L14>)
- fs.copyFile — external-or-dynamic-dispatch; [electron/document-ocr.test.cjs:16](<../../../../../electron/document-ocr.test.cjs#L16>)
- path.join — external-or-dynamic-dispatch; [electron/document-ocr.test.cjs:17](<../../../../../electron/document-ocr.test.cjs#L17>)
- path.join — external-or-dynamic-dispatch; [electron/document-ocr.test.cjs:22](<../../../../../electron/document-ocr.test.cjs#L22>)
- fs.writeFile — external-or-dynamic-dispatch; [electron/document-ocr.test.cjs:24](<../../../../../electron/document-ocr.test.cjs#L24>)
- 20 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b551dabc794ec03c"></a>

## &lt;anonymous@12:3&gt;.&lt;anonymous@14:13&gt;

[electron/document-ocr.test.cjs:14](<../../../../../electron/document-ocr.test.cjs#L14>) · ArrowFunction · test · [Vault and stations](<../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@12:3&gt;](<document-ocr.test.cjs.md#s-f5ecd73b921128cc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- fs.rm — external-or-dynamic-dispatch; [electron/document-ocr.test.cjs:14](<../../../../../electron/document-ocr.test.cjs#L14>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f24668c7cf0cc872"></a>

## &lt;anonymous@12:3&gt;.&lt;anonymous@46:25&gt;

[electron/document-ocr.test.cjs:46](<../../../../../electron/document-ocr.test.cjs#L46>) · ArrowFunction · test · [Vault and stations](<../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@12:3&gt;](<document-ocr.test.cjs.md#s-f5ecd73b921128cc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| relativePath | any | compiler-inferred | required |

Returns: { relativePath: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bd9c21b21bf63fe2"></a>

## &lt;anonymous@12:3&gt;.&lt;anonymous@50:9&gt;

[electron/document-ocr.test.cjs:50](<../../../../../electron/document-ocr.test.cjs#L50>) · ArrowFunction · test · [Vault and stations](<../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@12:3&gt;](<document-ocr.test.cjs.md#s-f5ecd73b921128cc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-06ac9b3fd4ec0754"></a>

## &lt;anonymous@12:3&gt;.&lt;anonymous@56:17&gt;

[electron/document-ocr.test.cjs:56](<../../../../../electron/document-ocr.test.cjs#L56>) · ArrowFunction · test · [Vault and stations](<../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;anonymous@12:3&gt;](<document-ocr.test.cjs.md#s-f5ecd73b921128cc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: { sourceId: any; relativePath: any; contentHash: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
