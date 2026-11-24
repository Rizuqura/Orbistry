# electron/engines/image-parser/parser.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [electron/engines/image-parser/parser.cjs:1](<../../../../../../../electron/engines/image-parser/parser.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/image-parser/parser.cjs](<parser.cjs.md#s-69a5788d0dbbe468>) (Module)
- [PARSER_VERSION](<parser.cjs.md#s-488d6547c53638b0>) (VariableDeclaration)
- [MAX_IMAGE_BYTES](<parser.cjs.md#s-f2679ad4893026ad>) (VariableDeclaration)
- [MAX_IMAGE_PIXELS](<parser.cjs.md#s-585eeb0c925bd807>) (VariableDeclaration)
- [imageMetadata](<parser.cjs.md#s-2dc99fadd24f1534>) (FunctionDeclaration)
- [imageCacheKey](<parser.cjs.md#s-d51f2a3c59fc4187>) (FunctionDeclaration)
- [parseImage](<parser.cjs.md#s-3be685f98cf79b52>) (FunctionDeclaration)
- [parseImage.&lt;anonymous@92:40&gt;](<parser.cjs.md#s-7e64e8f3b9635b0b>) (ArrowFunction)

<a id="s-69a5788d0dbbe468"></a>

## electron/engines/image-parser/parser.cjs

[electron/engines/image-parser/parser.cjs:1](<../../../../../../../electron/engines/image-parser/parser.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [electron/engines/image-parser/parser.cjs:1](<../../../../../../../electron/engines/image-parser/parser.cjs#L1>)

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:14](<../../../../../../../electron/image-parser.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-488d6547c53638b0"></a>

## PARSER_VERSION

[electron/engines/image-parser/parser.cjs:2](<../../../../../../../electron/engines/image-parser/parser.cjs#L2>) · VariableDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: PARSER_VERSION ([electron/engines/image-parser/parser.cjs:1](<../../../../../../../electron/engines/image-parser/parser.cjs#L1>)).

Lexical owner: [electron/engines/image-parser/parser.cjs](<parser.cjs.md#s-69a5788d0dbbe468>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:14](<../../../../../../../electron/image-parser.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-f2679ad4893026ad"></a>

## MAX_IMAGE_BYTES

[electron/engines/image-parser/parser.cjs:3](<../../../../../../../electron/engines/image-parser/parser.cjs#L3>) · VariableDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: MAX_IMAGE_BYTES ([electron/engines/image-parser/parser.cjs:1](<../../../../../../../electron/engines/image-parser/parser.cjs#L1>)).

Lexical owner: [electron/engines/image-parser/parser.cjs](<parser.cjs.md#s-69a5788d0dbbe468>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:14](<../../../../../../../electron/image-parser.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-585eeb0c925bd807"></a>

## MAX_IMAGE_PIXELS

[electron/engines/image-parser/parser.cjs:4](<../../../../../../../electron/engines/image-parser/parser.cjs#L4>) · VariableDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: MAX_IMAGE_PIXELS ([electron/engines/image-parser/parser.cjs:1](<../../../../../../../electron/engines/image-parser/parser.cjs#L1>)).

Lexical owner: [electron/engines/image-parser/parser.cjs](<parser.cjs.md#s-69a5788d0dbbe468>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:14](<../../../../../../../electron/image-parser.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-2dc99fadd24f1534"></a>

## imageMetadata

[electron/engines/image-parser/parser.cjs:7](<../../../../../../../electron/engines/image-parser/parser.cjs#L7>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Extracts PNG/JPEG header dimensions before decoding. Rejects unsupported, malformed, oversized or excessive-dimension input. Pure.

Purpose evidence: jsdoc.

Exported as: imageMetadata ([electron/engines/image-parser/parser.cjs:1](<../../../../../../../electron/engines/image-parser/parser.cjs#L1>)).

Lexical owner: [electron/engines/image-parser/parser.cjs](<parser.cjs.md#s-69a5788d0dbbe468>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| bytes | any | compiler-inferred | required |

Returns: { format: string; width: any; height: any; sizeBytes: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [parseImage](<parser.cjs.md#s-3be685f98cf79b52>) — [electron/engines/image-parser/parser.cjs:82](<../../../../../../../electron/engines/image-parser/parser.cjs#L82>)
- [createImageParserService.readImage](<../../image-parser-service.cjs.md#s-f9c02a54ee8eb54b>) — [electron/image-parser-service.cjs:126](<../../../../../../../electron/image-parser-service.cjs#L126>)
- [&lt;anonymous@75:97&gt;](<../../image-parser.test.cjs.md#s-c0735193b11f2af6>) — [electron/image-parser.test.cjs:77](<../../../../../../../electron/image-parser.test.cjs#L77>)
- [&lt;anonymous@75:97&gt;](<../../image-parser.test.cjs.md#s-c0735193b11f2af6>) — [electron/image-parser.test.cjs:83](<../../../../../../../electron/image-parser.test.cjs#L83>)
- [&lt;anonymous@75:97&gt;.&lt;anonymous@118:17&gt;](<../../image-parser.test.cjs.md#s-74da65153477c2e0>) — [electron/image-parser.test.cjs:118](<../../../../../../../electron/image-parser.test.cjs#L118>)
- [&lt;anonymous@75:97&gt;.&lt;anonymous@120:5&gt;](<../../image-parser.test.cjs.md#s-15cf24fd16ce9bbd>) — [electron/image-parser.test.cjs:120](<../../../../../../../electron/image-parser.test.cjs#L120>)
- [&lt;anonymous@75:97&gt;.&lt;anonymous@125:17&gt;](<../../image-parser.test.cjs.md#s-413cc393b7732719>) — [electron/image-parser.test.cjs:125](<../../../../../../../electron/image-parser.test.cjs#L125>)

Unresolved / external call sites: 16.

- Buffer.isBuffer — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:8](<../../../../../../../electron/engines/image-parser/parser.cjs#L8>)
- Error — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:9](<../../../../../../../electron/engines/image-parser/parser.cjs#L9>)
- bytes .subarray(0, 8) .equals — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:15](<../../../../../../../electron/engines/image-parser/parser.cjs#L15>)
- bytes .subarray — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:15](<../../../../../../../electron/engines/image-parser/parser.cjs#L15>)
- Buffer.from — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:17](<../../../../../../../electron/engines/image-parser/parser.cjs#L17>)
- bytes.readUInt32BE — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:18](<../../../../../../../electron/engines/image-parser/parser.cjs#L18>)
- bytes.toString — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:19](<../../../../../../../electron/engines/image-parser/parser.cjs#L19>)
- bytes.readUInt32BE — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:22](<../../../../../../../electron/engines/image-parser/parser.cjs#L22>)
- 8 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:77](<../../../../../../../electron/image-parser.test.cjs#L77>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:83](<../../../../../../../electron/image-parser.test.cjs#L83>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:118](<../../../../../../../electron/image-parser.test.cjs#L118>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:120](<../../../../../../../electron/image-parser.test.cjs#L120>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:125](<../../../../../../../electron/image-parser.test.cjs#L125>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:14](<../../../../../../../electron/image-parser.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-d51f2a3c59fc4187"></a>

## imageCacheKey

[electron/engines/image-parser/parser.cjs:59](<../../../../../../../electron/engines/image-parser/parser.cjs#L59>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Builds a stable cache identity including content, parser version, explicit processing options and trusted adapter identities.

Purpose evidence: jsdoc.

Exported as: imageCacheKey ([electron/engines/image-parser/parser.cjs:1](<../../../../../../../electron/engines/image-parser/parser.cjs#L1>)).

Lexical owner: [electron/engines/image-parser/parser.cjs](<parser.cjs.md#s-69a5788d0dbbe468>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| bytes | any | compiler-inferred | required |
| configuration | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createImageParserService.getKnowledge](<../../image-parser-service.cjs.md#s-83c22dd539c7db86>) — [electron/image-parser-service.cjs:197](<../../../../../../../electron/image-parser-service.cjs#L197>)
- [createImageParserService.processSource](<../../image-parser-service.cjs.md#s-f54290d09313daf6>) — [electron/image-parser-service.cjs:228](<../../../../../../../electron/image-parser-service.cjs#L228>)
- [createImageParserService.processSource](<../../image-parser-service.cjs.md#s-f54290d09313daf6>) — [electron/image-parser-service.cjs:259](<../../../../../../../electron/image-parser-service.cjs#L259>)

Unresolved / external call sites: 5.

- createHash("sha256") .update(bytes) .update(JSON.stringify({ parserVersion: PARSER_VERSION, configuration })) .digest — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:60](<../../../../../../../electron/engines/image-parser/parser.cjs#L60>)
- createHash("sha256") .update(bytes) .update — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:60](<../../../../../../../electron/engines/image-parser/parser.cjs#L60>)
- createHash("sha256") .update — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:60](<../../../../../../../electron/engines/image-parser/parser.cjs#L60>)
- createHash — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:60](<../../../../../../../electron/engines/image-parser/parser.cjs#L60>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:62](<../../../../../../../electron/engines/image-parser/parser.cjs#L62>)

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:14](<../../../../../../../electron/image-parser.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-3be685f98cf79b52"></a>

## parseImage

[electron/engines/image-parser/parser.cjs:71](<../../../../../../../electron/engines/image-parser/parser.cjs#L71>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Parses bounded image bytes with optional trusted offline OCR and vision adapters, returning provenance-rich knowledge. OCR adapter exposes id/version and recognize(snapshotPath,{signal}); a future vision adapter exposes id/version and describe({bytes,metadata,extractedText,signal}). Metadata errors/cancellation reject. Adapter failures produce explicit partial results. Performs adapter work only on an explicit caller request.

Purpose evidence: jsdoc.

Exported as: parseImage ([electron/engines/image-parser/parser.cjs:1](<../../../../../../../electron/engines/image-parser/parser.cjs#L1>)).

Lexical owner: [electron/engines/image-parser/parser.cjs](<parser.cjs.md#s-69a5788d0dbbe468>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| bytes | any | compiler-inferred | required |
| {     snapshotPath,     ocr = true,     ocrAdapter = null,     visionAdapter = null,     signal,   } | { ocr?: boolean; ocrAdapter?: any; visionAdapter?: any; } | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [imageMetadata](<parser.cjs.md#s-2dc99fadd24f1534>) — [electron/engines/image-parser/parser.cjs:82](<../../../../../../../electron/engines/image-parser/parser.cjs#L82>)

**Called by (statically resolved):**

- [createImageParserService.processSource](<../../image-parser-service.cjs.md#s-f54290d09313daf6>) — [electron/image-parser-service.cjs:249](<../../../../../../../electron/image-parser-service.cjs#L249>)
- [&lt;anonymous@75:97&gt;](<../../image-parser.test.cjs.md#s-c0735193b11f2af6>) — [electron/image-parser.test.cjs:84](<../../../../../../../electron/image-parser.test.cjs#L84>)
- [&lt;anonymous@75:97&gt;](<../../image-parser.test.cjs.md#s-c0735193b11f2af6>) — [electron/image-parser.test.cjs:88](<../../../../../../../electron/image-parser.test.cjs#L88>)
- [&lt;anonymous@75:97&gt;](<../../image-parser.test.cjs.md#s-c0735193b11f2af6>) — [electron/image-parser.test.cjs:99](<../../../../../../../electron/image-parser.test.cjs#L99>)
- [&lt;anonymous@75:97&gt;](<../../image-parser.test.cjs.md#s-c0735193b11f2af6>) — [electron/image-parser.test.cjs:108](<../../../../../../../electron/image-parser.test.cjs#L108>)
- [&lt;anonymous@75:97&gt;](<../../image-parser.test.cjs.md#s-c0735193b11f2af6>) — [electron/image-parser.test.cjs:127](<../../../../../../../electron/image-parser.test.cjs#L127>)

Unresolved / external call sites: 22.

- Error — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:81](<../../../../../../../electron/engines/image-parser/parser.cjs#L81>)
- ocrAdapter.recognize — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:91](<../../../../../../../electron/engines/image-parser/parser.cjs#L91>)
- result.pages.map((page) =&gt; page.text).join — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:92](<../../../../../../../electron/engines/image-parser/parser.cjs#L92>)
- result.pages.map — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:92](<../../../../../../../electron/engines/image-parser/parser.cjs#L92>)
- extractedText.slice — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:95](<../../../../../../../electron/engines/image-parser/parser.cjs#L95>)
- warnings.push — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:96](<../../../../../../../electron/engines/image-parser/parser.cjs#L96>)
- extractedText.trim — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:98](<../../../../../../../electron/engines/image-parser/parser.cjs#L98>)
- warnings.push — external-or-dynamic-dispatch; [electron/engines/image-parser/parser.cjs:99](<../../../../../../../electron/engines/image-parser/parser.cjs#L99>)
- 14 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:84](<../../../../../../../electron/image-parser.test.cjs#L84>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:88](<../../../../../../../electron/image-parser.test.cjs#L88>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:99](<../../../../../../../electron/image-parser.test.cjs#L99>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:108](<../../../../../../../electron/image-parser.test.cjs#L108>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:127](<../../../../../../../electron/image-parser.test.cjs#L127>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:14](<../../../../../../../electron/image-parser.test.cjs#L14>) — file-import-only; coverage not established.

<a id="s-7e64e8f3b9635b0b"></a>

## parseImage.&lt;anonymous@92:40&gt;

[electron/engines/image-parser/parser.cjs:92](<../../../../../../../electron/engines/image-parser/parser.cjs#L92>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [parseImage](<parser.cjs.md#s-3be685f98cf79b52>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| page | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:14](<../../../../../../../electron/image-parser.test.cjs#L14>) — file-import-only; coverage not established.
