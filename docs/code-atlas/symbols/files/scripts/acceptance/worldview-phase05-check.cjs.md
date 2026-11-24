# scripts/acceptance/worldview-phase05-check.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/worldview-phase05-check.cjs:1](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/worldview-phase05-check.cjs](<worldview-phase05-check.cjs.md#s-e6a3574251d31d48>) (Module)
- [waitSaved](<worldview-phase05-check.cjs.md#s-b1b39f89507df64c>) (FunctionDeclaration)
- [waitSaved.&lt;anonymous@10:30&gt;](<worldview-phase05-check.cjs.md#s-0f0ace2ad8bef853>) (ArrowFunction)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) (FunctionDeclaration)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) (ArrowFunction)
- [verifyManualIndex.&lt;anonymous@67:5&gt;](<worldview-phase05-check.cjs.md#s-e9e14c1316343b6e>) (ArrowFunction)
- [verifyManualIndex.&lt;anonymous@67:5&gt;.&lt;anonymous@70:37&gt;](<worldview-phase05-check.cjs.md#s-e1a5ce498a02103c>) (ArrowFunction)
- [verifyManualIndex.openCard](<worldview-phase05-check.cjs.md#s-60b3f811b08877d2>) (FunctionDeclaration)
- [verifyManualIndex.openCard.&lt;anonymous@112:7&gt;](<worldview-phase05-check.cjs.md#s-efef2154304ee68d>) (ArrowFunction)
- [verifyManualIndex.savedIndex](<worldview-phase05-check.cjs.md#s-5508867a43d78175>) (FunctionDeclaration)
- [verifyManualIndex.savedIndex.&lt;anonymous@119:7&gt;](<worldview-phase05-check.cjs.md#s-04d1330ef40a06ca>) (ArrowFunction)
- [verifyManualIndex.write](<worldview-phase05-check.cjs.md#s-0a15304663b46f65>) (FunctionDeclaration)
- [verifyManualIndex.apply](<worldview-phase05-check.cjs.md#s-17f555f477171ea2>) (FunctionDeclaration)
- [verifyManualIndex.buildings](<worldview-phase05-check.cjs.md#s-5b3d2f2a5f837934>) (FunctionDeclaration)
- [verifyManualIndex.buildings.&lt;anonymous@147:20&gt;](<worldview-phase05-check.cjs.md#s-bc9c26f73b9a2b51>) (ArrowFunction)
- [verifyManualIndex.buildings.&lt;anonymous@147:20&gt;.&lt;anonymous@148:21&gt;](<worldview-phase05-check.cjs.md#s-aa59f356860aa0bd>) (ArrowFunction)
- [verifyManualIndex.&lt;anonymous@152:47&gt;](<worldview-phase05-check.cjs.md#s-b2fbdea829eca98a>) (ArrowFunction)
- [verifyManualIndex.&lt;anonymous@216:15&gt;](<worldview-phase05-check.cjs.md#s-1dbc99882b18228d>) (ArrowFunction)
- [verifyManualIndex.&lt;anonymous@259:53&gt;](<worldview-phase05-check.cjs.md#s-f524cd33927af163>) (ArrowFunction)
- [verifyManualIndex.&lt;anonymous@264:5&gt;](<worldview-phase05-check.cjs.md#s-7634080d4a51ae09>) (ArrowFunction)
- [verifyManualIndex.&lt;anonymous@274:5&gt;](<worldview-phase05-check.cjs.md#s-1a670b8a3e5622b8>) (ArrowFunction)
- [verifyManualIndex.&lt;anonymous@278:38&gt;](<worldview-phase05-check.cjs.md#s-bb89d6718aa5c55e>) (ArrowFunction)
- [verifyManualIndex.&lt;anonymous@318:7&gt;](<worldview-phase05-check.cjs.md#s-b90ebd78a8f3ac64>) (ArrowFunction)
- [verifyManualIndex.&lt;anonymous@416:5&gt;](<worldview-phase05-check.cjs.md#s-5c930faee383997e>) (ArrowFunction)

<a id="s-e6a3574251d31d48"></a>

## scripts/acceptance/worldview-phase05-check.cjs

[scripts/acceptance/worldview-phase05-check.cjs:1](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [scripts/acceptance/worldview-phase05-check.cjs:1](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L1>)
- require — module-loader; [scripts/acceptance/worldview-phase05-check.cjs:2](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L2>)
- require — module-loader; [scripts/acceptance/worldview-phase05-check.cjs:3](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L3>)
- require — module-loader; [scripts/acceptance/worldview-phase05-check.cjs:4](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L4>)
- require — module-loader; [scripts/acceptance/worldview-phase05-check.cjs:5](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L5>)
- require — module-loader; [scripts/acceptance/worldview-phase05-check.cjs:6](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L6>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-b1b39f89507df64c"></a>

## waitSaved

[scripts/acceptance/worldview-phase05-check.cjs:9](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L9>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Waits for the existing entity save queue to settle and reports actual persistence errors.

Purpose evidence: jsdoc.

Lexical owner: [scripts/acceptance/worldview-phase05-check.cjs](<worldview-phase05-check.cjs.md#s-e6a3574251d31d48>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| page | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:63](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L63>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:86](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L86>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:176](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L176>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:374](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L374>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:431](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L431>)

Unresolved / external call sites: 1.

- page.waitForFunction — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:10](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L10>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase05-check.cjs:63](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L63>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:86](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L86>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:176](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L176>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:374](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L374>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:431](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L431>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-0f0ace2ad8bef853"></a>

## waitSaved.&lt;anonymous@10:30&gt;

[scripts/acceptance/worldview-phase05-check.cjs:10](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L10>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [waitSaved](<worldview-phase05-check.cjs.md#s-b1b39f89507df64c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:11](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L11>)
- status.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:12](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L12>)
- Error — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:12](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L12>)
- /Saving&#124;Loading/.test — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:13](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L13>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-bb1cef23f8fb8b75"></a>

## verifyManualIndex

[scripts/acceptance/worldview-phase05-check.cjs:18](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L18>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Verifies indexing, formatted Markdown with escaped HTML, other source previews, persistence and source integrity in temporary Universe data.

Purpose evidence: jsdoc.

Exported as: verifyManualIndex ([scripts/acceptance/worldview-phase05-check.cjs:1](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L1>)).

Lexical owner: [scripts/acceptance/worldview-phase05-check.cjs](<worldview-phase05-check.cjs.md#s-e6a3574251d31d48>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { page, app, vault, createChip, readChips } | { page: any; app: any; vault: any; createChip: any; readChips: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [textPdf](<../fixtures/text-pdf.cjs.md#s-471938689fc127a1>) — [scripts/acceptance/worldview-phase05-check.cjs:36](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L36>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:57](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L57>)
- [waitSaved](<worldview-phase05-check.cjs.md#s-b1b39f89507df64c>) — [scripts/acceptance/worldview-phase05-check.cjs:63](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L63>)
- [waitSaved](<worldview-phase05-check.cjs.md#s-b1b39f89507df64c>) — [scripts/acceptance/worldview-phase05-check.cjs:86](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L86>)
- [verifyManualIndex.buildings](<worldview-phase05-check.cjs.md#s-5b3d2f2a5f837934>) — [scripts/acceptance/worldview-phase05-check.cjs:151](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L151>)
- [verifyManualIndex.savedIndex](<worldview-phase05-check.cjs.md#s-5508867a43d78175>) — [scripts/acceptance/worldview-phase05-check.cjs:153](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L153>)
- [verifyManualIndex.openCard](<worldview-phase05-check.cjs.md#s-60b3f811b08877d2>) — [scripts/acceptance/worldview-phase05-check.cjs:154](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L154>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:166](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L166>)
- [verifyManualIndex.write](<worldview-phase05-check.cjs.md#s-0a15304663b46f65>) — [scripts/acceptance/worldview-phase05-check.cjs:167](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L167>)
- [waitSaved](<worldview-phase05-check.cjs.md#s-b1b39f89507df64c>) — [scripts/acceptance/worldview-phase05-check.cjs:176](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L176>)
- [verifyManualIndex.openCard](<worldview-phase05-check.cjs.md#s-60b3f811b08877d2>) — [scripts/acceptance/worldview-phase05-check.cjs:177](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L177>)
- [verifyManualIndex.apply](<worldview-phase05-check.cjs.md#s-17f555f477171ea2>) — [scripts/acceptance/worldview-phase05-check.cjs:184](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L184>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:235](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L235>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:235](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L235>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:235](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L235>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:235](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L235>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:235](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L235>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:235](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L235>)
- [verifyManualIndex.apply](<worldview-phase05-check.cjs.md#s-17f555f477171ea2>) — [scripts/acceptance/worldview-phase05-check.cjs:236](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L236>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:288](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L288>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:288](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L288>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:288](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L288>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:288](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L288>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:288](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L288>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:288](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L288>)
- [verifyManualIndex.apply](<worldview-phase05-check.cjs.md#s-17f555f477171ea2>) — [scripts/acceptance/worldview-phase05-check.cjs:289](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L289>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:307](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L307>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:307](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L307>)
- [verifyManualIndex.write](<worldview-phase05-check.cjs.md#s-0a15304663b46f65>) — [scripts/acceptance/worldview-phase05-check.cjs:309](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L309>)
- [verifyManualIndex.apply](<worldview-phase05-check.cjs.md#s-17f555f477171ea2>) — [scripts/acceptance/worldview-phase05-check.cjs:330](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L330>)
- [verifyManualIndex.write](<worldview-phase05-check.cjs.md#s-0a15304663b46f65>) — [scripts/acceptance/worldview-phase05-check.cjs:331](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L331>)
- [verifyManualIndex.savedIndex](<worldview-phase05-check.cjs.md#s-5508867a43d78175>) — [scripts/acceptance/worldview-phase05-check.cjs:346](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L346>)
- [verifyManualIndex.apply](<worldview-phase05-check.cjs.md#s-17f555f477171ea2>) — [scripts/acceptance/worldview-phase05-check.cjs:361](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L361>)
- [verifyManualIndex.buildings](<worldview-phase05-check.cjs.md#s-5b3d2f2a5f837934>) — [scripts/acceptance/worldview-phase05-check.cjs:362](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L362>)
- [verifyManualIndex.savedIndex](<worldview-phase05-check.cjs.md#s-5508867a43d78175>) — [scripts/acceptance/worldview-phase05-check.cjs:368](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L368>)
- [waitSaved](<worldview-phase05-check.cjs.md#s-b1b39f89507df64c>) — [scripts/acceptance/worldview-phase05-check.cjs:374](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L374>)
- [verifyManualIndex.openCard](<worldview-phase05-check.cjs.md#s-60b3f811b08877d2>) — [scripts/acceptance/worldview-phase05-check.cjs:375](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L375>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:400](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L400>)
- [verifyManualIndex.ref](<worldview-phase05-check.cjs.md#s-61612edf37ca743a>) — [scripts/acceptance/worldview-phase05-check.cjs:421](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L421>)
- [verifyManualIndex.savedIndex](<worldview-phase05-check.cjs.md#s-5508867a43d78175>) — [scripts/acceptance/worldview-phase05-check.cjs:424](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L424>)
- [waitSaved](<worldview-phase05-check.cjs.md#s-b1b39f89507df64c>) — [scripts/acceptance/worldview-phase05-check.cjs:431](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L431>)
- [verifyManualIndex.openCard](<worldview-phase05-check.cjs.md#s-60b3f811b08877d2>) — [scripts/acceptance/worldview-phase05-check.cjs:432](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L432>)

**Called by (statically resolved):**

- [main](<electron-worldview-smoke.cjs.md#s-d74fd257ed7793d3>) — [scripts/acceptance/electron-worldview-smoke.cjs:1229](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L1229>)

Unresolved / external call sites: 269.

- console.log — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:19](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L19>)
- createCanvas — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:24](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L24>)
- image.getContext("2d").fillRect — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:25](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L25>)
- image.getContext — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:25](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L25>)
- Map — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:26](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L26>)
- Buffer.from — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:29](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L29>)
- Buffer.from — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:33](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L33>)
- image.toBuffer — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:38](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L38>)
- 261 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:1229](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L1229>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-61612edf37ca743a"></a>

## verifyManualIndex.ref

[scripts/acceptance/worldview-phase05-check.cjs:23](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L23>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:57](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L57>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:166](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L166>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:235](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L235>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:235](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L235>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:235](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L235>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:235](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L235>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:235](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L235>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:235](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L235>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:288](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L288>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:288](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L288>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:288](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L288>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:288](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L288>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:288](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L288>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:288](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L288>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:307](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L307>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:307](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L307>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:400](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L400>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:421](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L421>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase05-check.cjs:57](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L57>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:166](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L166>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:235](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L235>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:288](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L288>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:307](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L307>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:400](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L400>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:421](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L421>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-e9e14c1316343b6e"></a>

## verifyManualIndex.&lt;anonymous@67:5&gt;

[scripts/acceptance/worldview-phase05-check.cjs:67](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L67>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { vaultPath, id } | { vaultPath: any; id: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- bridge.request — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:69](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L69>)
- state.chips.find — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:70](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L70>)
- bridge.request — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:71](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L71>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-e1a5ce498a02103c"></a>

## verifyManualIndex.&lt;anonymous@67:5&gt;.&lt;anonymous@70:37&gt;

[scripts/acceptance/worldview-phase05-check.cjs:70](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L70>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyManualIndex.&lt;anonymous@67:5&gt;](<worldview-phase05-check.cjs.md#s-e9e14c1316343b6e>).

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

- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-60b3f811b08877d2"></a>

## verifyManualIndex.openCard

[scripts/acceptance/worldview-phase05-check.cjs:101](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L101>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Selects the actual platform and waits for its manual index to load into the floating card.

Purpose evidence: jsdoc.

Lexical owner: [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:154](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L154>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:177](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L177>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:375](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L375>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:432](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L432>)

Unresolved / external call sites: 8.

- page.getByRole("button", { name: "Reset view", exact: true }).click — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:102](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L102>)
- page.getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:102](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L102>)
- page.locator(".worldview-canvas").boundingBox — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:103](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L103>)
- page.locator — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:103](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L103>)
- page.mouse.click — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:104](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L104>)
- page .getByRole("button", { name: "View Knowledge Card", exact: true }) .click — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:108](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L108>)
- page .getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:108](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L108>)
- page.waitForFunction — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:111](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L111>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase05-check.cjs:154](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L154>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:177](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L177>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:375](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L375>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:432](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L432>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-efef2154304ee68d"></a>

## verifyManualIndex.openCard.&lt;anonymous@112:7&gt;

[scripts/acceptance/worldview-phase05-check.cjs:112](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L112>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyManualIndex.openCard](<worldview-phase05-check.cjs.md#s-60b3f811b08877d2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:113](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L113>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-5508867a43d78175"></a>

## verifyManualIndex.savedIndex

[scripts/acceptance/worldview-phase05-check.cjs:117](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L117>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Reads saved state through the same guarded bridge used by the index editor.

Purpose evidence: jsdoc.

Lexical owner: [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:153](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L153>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:346](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L346>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:368](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L368>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:424](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L424>)

Unresolved / external call sites: 1.

- page.evaluate — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:118](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L118>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase05-check.cjs:153](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L153>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:346](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L346>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:368](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L368>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:424](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L424>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-04d1330ef40a06ca"></a>

## verifyManualIndex.savedIndex.&lt;anonymous@119:7&gt;

[scripts/acceptance/worldview-phase05-check.cjs:119](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L119>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyManualIndex.savedIndex](<worldview-phase05-check.cjs.md#s-5508867a43d78175>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { vaultPath, id } | { vaultPath: any; id: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.worldview.request — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:120](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L120>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-0a15304663b46f65"></a>

## verifyManualIndex.write

[scripts/acceptance/worldview-phase05-check.cjs:128](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L128>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Opens the editor and replaces declarations without writing anything until an explicit action.

Purpose evidence: jsdoc.

Lexical owner: [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [verifyManualIndex.apply](<worldview-phase05-check.cjs.md#s-17f555f477171ea2>) — [scripts/acceptance/worldview-phase05-check.cjs:137](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L137>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:167](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L167>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:309](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L309>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:331](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L331>)

Unresolved / external call sites: 4.

- declarations.isVisible — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:129](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L129>)
- card .getByRole("button", { name: "Write Index", exact: true }) .click — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:130](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L130>)
- card .getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:130](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L130>)
- declarations.fill — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:133](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L133>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase05-check.cjs:137](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L137>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:167](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L167>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:309](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L309>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:331](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L331>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-17f555f477171ea2"></a>

## verifyManualIndex.apply

[scripts/acceptance/worldview-phase05-check.cjs:136](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L136>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Applies a valid declaration document and waits for the read-only menu workspace.

Purpose evidence: jsdoc.

Lexical owner: [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [verifyManualIndex.write](<worldview-phase05-check.cjs.md#s-0a15304663b46f65>) — [scripts/acceptance/worldview-phase05-check.cjs:137](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L137>)

**Called by (statically resolved):**

- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:184](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L184>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:236](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L236>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:289](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L289>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:330](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L330>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:361](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L361>)

Unresolved / external call sites: 4.

- card .getByRole("button", { name: "Apply Index", exact: true }) .click — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:138](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L138>)
- card .getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:138](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L138>)
- card.locator(".knowledge-index-editor").waitFor — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:141](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L141>)
- card.locator — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:141](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L141>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase05-check.cjs:184](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L184>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:236](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L236>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:289](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L289>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:330](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L330>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:361](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L361>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-5b3d2f2a5f837934"></a>

## verifyManualIndex.buildings

[scripts/acceptance/worldview-phase05-check.cjs:144](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L144>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Captures the complete live building geometry for index-operation isolation checks.

Purpose evidence: jsdoc.

Lexical owner: [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:151](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L151>)
- [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>) — [scripts/acceptance/worldview-phase05-check.cjs:362](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L362>)

Unresolved / external call sites: 2.

- page .locator('.worldview-sr-only&#91;aria-label="File buildings"&#93; button') .evaluateAll — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:145](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L145>)
- page .locator — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:145](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L145>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase05-check.cjs:151](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L151>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase05-check.cjs:362](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L362>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-bc9c26f73b9a2b51"></a>

## verifyManualIndex.buildings.&lt;anonymous@147:20&gt;

[scripts/acceptance/worldview-phase05-check.cjs:147](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L147>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyManualIndex.buildings](<worldview-phase05-check.cjs.md#s-5b3d2f2a5f837934>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| buttons | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- buttons.map — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:148](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L148>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-aa59f356860aa0bd"></a>

## verifyManualIndex.buildings.&lt;anonymous@147:20&gt;.&lt;anonymous@148:21&gt;

[scripts/acceptance/worldview-phase05-check.cjs:148](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L148>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyManualIndex.buildings.&lt;anonymous@147:20&gt;](<worldview-phase05-check.cjs.md#s-bc9c26f73b9a2b51>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| button | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-b2fbdea829eca98a"></a>

## verifyManualIndex.&lt;anonymous@152:47&gt;

[scripts/acceptance/worldview-phase05-check.cjs:152](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L152>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-1dbc99882b18228d"></a>

## verifyManualIndex.&lt;anonymous@216:15&gt;

[scripts/acceptance/worldview-phase05-check.cjs:216](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L216>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: { background: any; font: any; bottom: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- node.closest — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:217](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L217>)
- node.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:218](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L218>)
- node.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:219](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L219>)
- getComputedStyle — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:221](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L221>)
- getComputedStyle — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:222](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L222>)
- Boolean — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:223](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L223>)
- document.compareDocumentPosition — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:224](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L224>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-f524cd33927af163"></a>

## verifyManualIndex.&lt;anonymous@259:53&gt;

[scripts/acceptance/worldview-phase05-check.cjs:259](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L259>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-7634080d4a51ae09"></a>

## verifyManualIndex.&lt;anonymous@264:5&gt;

[scripts/acceptance/worldview-phase05-check.cjs:264](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L264>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:264](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L264>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-1a670b8a3e5622b8"></a>

## verifyManualIndex.&lt;anonymous@274:5&gt;

[scripts/acceptance/worldview-phase05-check.cjs:274](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L274>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:275](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L275>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-bb89d6718aa5c55e"></a>

## verifyManualIndex.&lt;anonymous@278:38&gt;

[scripts/acceptance/worldview-phase05-check.cjs:278](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L278>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-b90ebd78a8f3ac64"></a>

## verifyManualIndex.&lt;anonymous@318:7&gt;

[scripts/acceptance/worldview-phase05-check.cjs:318](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L318>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:319](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L319>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-5c930faee383997e"></a>

## verifyManualIndex.&lt;anonymous@416:5&gt;

[scripts/acceptance/worldview-phase05-check.cjs:416](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L416>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyManualIndex](<worldview-phase05-check.cjs.md#s-bb1cef23f8fb8b75>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase05-check.cjs:416](<../../../../../../scripts/acceptance/worldview-phase05-check.cjs#L416>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L9>) — file-import-only; coverage not established.
