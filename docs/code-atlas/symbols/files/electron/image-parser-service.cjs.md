# electron/image-parser-service.cjs: symbols

[Atlas](<../../../README.md>) / [Built-in Engines and data adapters](<../../../modules/engines.md>) / [electron/image-parser-service.cjs:1](<../../../../../electron/image-parser-service.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/image-parser-service.cjs](<image-parser-service.cjs.md#s-588132adce916faa>) (Module)
- [knowledgeSchema](<image-parser-service.cjs.md#s-31a5b398f5a4ce9e>) (SchemaBinding)
- [knowledgeSchema.&lt;anonymous@51:89&gt;](<image-parser-service.cjs.md#s-94c922f8e44c16c0>) (ArrowFunction)
- [createImageParserService](<image-parser-service.cjs.md#s-4f26f99ee660dc42>) (FunctionDeclaration)
- [createImageParserService.enginePath](<image-parser-service.cjs.md#s-48fcad9c9eb084e3>) (FunctionDeclaration)
- [createImageParserService.readImage](<image-parser-service.cjs.md#s-f9c02a54ee8eb54b>) (FunctionDeclaration)
- [createImageParserService.configuration](<image-parser-service.cjs.md#s-2a59695dadd08776>) (FunctionDeclaration)
- [createImageParserService.readCache](<image-parser-service.cjs.md#s-5017e084de48d1b2>) (FunctionDeclaration)
- [createImageParserService.saveCache](<image-parser-service.cjs.md#s-a0a8635c6101e0d6>) (FunctionDeclaration)
- [createImageParserService.authorize](<image-parser-service.cjs.md#s-1c83efa203bf22bd>) (FunctionDeclaration)
- [createImageParserService.referenceResult](<image-parser-service.cjs.md#s-9af853c9fdfb5737>) (FunctionDeclaration)
- [createImageParserService.getKnowledge](<image-parser-service.cjs.md#s-83c22dd539c7db86>) (FunctionDeclaration)
- [createImageParserService.preview](<image-parser-service.cjs.md#s-096df647e4513b80>) (FunctionDeclaration)
- [createImageParserService.processSource](<image-parser-service.cjs.md#s-f54290d09313daf6>) (FunctionDeclaration)
- [createImageParserService.snapshot](<image-parser-service.cjs.md#s-94742d9dd03f8701>) (FunctionDeclaration)
- [createImageParserService.completedStatus](<image-parser-service.cjs.md#s-483b2a2cbcd9fd69>) (FunctionDeclaration)
- [createImageParserService.completedStatus.&lt;anonymous@293:26&gt;](<image-parser-service.cjs.md#s-291706dbfc6f7b14>) (ArrowFunction)
- [createImageParserService.completedStatus.&lt;anonymous@295:23&gt;](<image-parser-service.cjs.md#s-88c945e928732bd8>) (ArrowFunction)
- [createImageParserService.start](<image-parser-service.cjs.md#s-fde998c903c7bb79>) (FunctionDeclaration)
- [createImageParserService.start.&lt;anonymous@313:45&gt;](<image-parser-service.cjs.md#s-6b2e2ee9e38d65ca>) (ArrowFunction)
- [createImageParserService.start.&lt;anonymous@326:36&gt;](<image-parser-service.cjs.md#s-b864cd8b50b60429>) (ArrowFunction)
- [createImageParserService.start.processJob](<image-parser-service.cjs.md#s-8d0a01040448ee0e>) (FunctionExpression)
- [createImageParserService.start.&lt;anonymous@375:79&gt;](<image-parser-service.cjs.md#s-49828f943b145d84>) (ArrowFunction)
- [createImageParserService.start.&lt;anonymous@375:79&gt;.&lt;anonymous@379:39&gt;](<image-parser-service.cjs.md#s-09476633998b5032>) (ArrowFunction)
- [createImageParserService.status](<image-parser-service.cjs.md#s-86a37f304e9e382a>) (FunctionDeclaration)
- [createImageParserService.status.&lt;anonymous@398:40&gt;](<image-parser-service.cjs.md#s-08ad8ed28dd18ae9>) (ArrowFunction)
- [createImageParserService.cancel](<image-parser-service.cjs.md#s-7368dc9d6ffbf2f3>) (FunctionDeclaration)
- [imageParserService](<image-parser-service.cjs.md#s-befb4d53bee4f38e>) (VariableDeclaration)

<a id="s-588132adce916faa"></a>

## electron/image-parser-service.cjs

[electron/image-parser-service.cjs:1](<../../../../../electron/image-parser-service.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- require — module-loader; [electron/image-parser-service.cjs:1](<../../../../../electron/image-parser-service.cjs#L1>)
- require — module-loader; [electron/image-parser-service.cjs:2](<../../../../../electron/image-parser-service.cjs#L2>)
- require — module-loader; [electron/image-parser-service.cjs:3](<../../../../../electron/image-parser-service.cjs#L3>)
- require — module-loader; [electron/image-parser-service.cjs:4](<../../../../../electron/image-parser-service.cjs#L4>)
- require — module-loader; [electron/image-parser-service.cjs:10](<../../../../../electron/image-parser-service.cjs#L10>)
- require — module-loader; [electron/image-parser-service.cjs:11](<../../../../../electron/image-parser-service.cjs#L11>)
- require — module-loader; [electron/image-parser-service.cjs:15](<../../../../../electron/image-parser-service.cjs#L15>)
- require — module-loader; [electron/image-parser-service.cjs:16](<../../../../../electron/image-parser-service.cjs#L16>)
- 1 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-31a5b398f5a4ce9e"></a>

## knowledgeSchema

[electron/image-parser-service.cjs:18](<../../../../../electron/image-parser-service.cjs#L18>) · SchemaBinding · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/image-parser-service.cjs](<image-parser-service.cjs.md#s-588132adce916faa>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 51.

- z .object({ parser: z.literal("image-parser"), parserVersion: z.literal(parser.PARSER_VERSION), cacheKey: z.string().regex(/^&#91;a-f0-9&#93;{64}$/), sourceHash: z.string().regex(/^sha256: — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:18](<../../../../../electron/image-parser-service.cjs#L18>)
- z .object — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:18](<../../../../../electron/image-parser-service.cjs#L18>)
- z.literal — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:20](<../../../../../electron/image-parser-service.cjs#L20>)
- z.literal — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:21](<../../../../../electron/image-parser-service.cjs#L21>)
- z.string().regex — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:22](<../../../../../electron/image-parser-service.cjs#L22>)
- z.string — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:22](<../../../../../electron/image-parser-service.cjs#L22>)
- z.string().regex — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:23](<../../../../../electron/image-parser-service.cjs#L23>)
- z.string — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:23](<../../../../../electron/image-parser-service.cjs#L23>)
- 43 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-94c922f8e44c16c0"></a>

## knowledgeSchema.&lt;anonymous@51:89&gt;

[electron/image-parser-service.cjs:51](<../../../../../electron/image-parser-service.cjs#L51>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Enforces resource bounds and attributed visual knowledge in derived records.

Purpose evidence: jsdoc.

Lexical owner: [knowledgeSchema](<image-parser-service.cjs.md#s-31a5b398f5a4ce9e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-4f26f99ee660dc42"></a>

## createImageParserService

[electron/image-parser-service.cjs:60](<../../../../../electron/image-parser-service.cjs#L60>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Creates an image Engine host. Trusted adapters are injected by application code, independently of UI/agent permissions.

Purpose evidence: jsdoc.

Exported as: createImageParserService ([electron/image-parser-service.cjs:1](<../../../../../electron/image-parser-service.cjs#L1>)).

Lexical owner: [electron/image-parser-service.cjs](<image-parser-service.cjs.md#s-588132adce916faa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   ocrAdapter = process.platform === "win32"     ? { id: "windows-ocr", version: "1", recognize: recognizeFile }     : null,   visionAdapter = null, } | { ocrAdapter?: { id: string; version: string; recognize: (file: any, { signal }?: {}) =&gt; any; }; visionAdapter?: any; } | compiler-inferred | optional, default present |

Returns: { getKnowledge: (root: any, entityId: any, carouselId: any, sourceId: any, { ocr }?: { ocr?: boolean; }) =&gt; unknown; preview: (root: any, entityId: any, carouselId: any, sourceId: any) =&gt; unknown; start: (rootPath: any, entityId: any, carouselId: any, options?: {}) =&gt; unknown; status: (rootPath: any, entityId: any, carouselId: any) =&gt; unknown; cancel: (root: any, entityId: any, carouselId: any) =&gt; unknown; processSource: (root: any, entityId: any, carouselId: any, sourceId: any, { ocr, force,... (compiler-inferred; display truncated). Implementation present.

**Calls (statically resolved):**

- [serialQueue](<core/persistence/json-store.cjs.md#s-a8a605453bc9a09a>) — [electron/image-parser-service.cjs:69](<../../../../../electron/image-parser-service.cjs#L69>)

**Called by (statically resolved):**

- [imageParserService](<image-parser-service.cjs.md#s-befb4d53bee4f38e>) — [electron/image-parser-service.cjs:430](<../../../../../electron/image-parser-service.cjs#L430>)
- [&lt;anonymous@180:84&gt;.&lt;anonymous@181:17&gt;](<image-parser.test.cjs.md#s-04ceff0e6632aa1b>) — [electron/image-parser.test.cjs:183](<../../../../../electron/image-parser.test.cjs#L183>)
- [&lt;anonymous@180:84&gt;.&lt;anonymous@181:17&gt;](<image-parser.test.cjs.md#s-04ceff0e6632aa1b>) — [electron/image-parser.test.cjs:241](<../../../../../electron/image-parser.test.cjs#L241>)
- [&lt;anonymous@180:84&gt;.&lt;anonymous@181:17&gt;](<image-parser.test.cjs.md#s-04ceff0e6632aa1b>) — [electron/image-parser.test.cjs:259](<../../../../../electron/image-parser.test.cjs#L259>)
- [&lt;anonymous@180:84&gt;.&lt;anonymous@181:17&gt;](<image-parser.test.cjs.md#s-04ceff0e6632aa1b>) — [electron/image-parser.test.cjs:273](<../../../../../electron/image-parser.test.cjs#L273>)
- [&lt;anonymous@341:79&gt;.&lt;anonymous@342:17&gt;](<image-parser.test.cjs.md#s-d6de0dec66047774>) — [electron/image-parser.test.cjs:347](<../../../../../electron/image-parser.test.cjs#L347>)
- [&lt;anonymous@341:79&gt;.&lt;anonymous@342:17&gt;](<image-parser.test.cjs.md#s-d6de0dec66047774>) — [electron/image-parser.test.cjs:375](<../../../../../electron/image-parser.test.cjs#L375>)
- [&lt;anonymous@396:74&gt;.&lt;anonymous@397:17&gt;](<image-parser.test.cjs.md#s-02029e5ba551c17f>) — [electron/image-parser.test.cjs:398](<../../../../../electron/image-parser.test.cjs#L398>)

Unresolved / external call sites: 3.

- Map — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:66](<../../../../../electron/image-parser-service.cjs#L66>)
- Map — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:67](<../../../../../electron/image-parser-service.cjs#L67>)
- Map — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:68](<../../../../../electron/image-parser-service.cjs#L68>)

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:183](<../../../../../electron/image-parser.test.cjs#L183>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:241](<../../../../../electron/image-parser.test.cjs#L241>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:259](<../../../../../electron/image-parser.test.cjs#L259>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:273](<../../../../../electron/image-parser.test.cjs#L273>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:347](<../../../../../electron/image-parser.test.cjs#L347>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:375](<../../../../../electron/image-parser.test.cjs#L375>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:398](<../../../../../electron/image-parser.test.cjs#L398>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-48fcad9c9eb084e3"></a>

## createImageParserService.enginePath

[electron/image-parser-service.cjs:71](<../../../../../electron/image-parser-service.cjs#L71>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Resolves fixed engine-owned paths and rejects linked parents or targets before any derived writes.

Purpose evidence: jsdoc.

Lexical owner: [createImageParserService](<image-parser-service.cjs.md#s-4f26f99ee660dc42>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| parts | {} | compiler-inferred | required, rest |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [rejectSymlink](<core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/image-parser-service.cjs:75](<../../../../../electron/image-parser-service.cjs#L75>)

**Called by (statically resolved):**

- [createImageParserService.readCache](<image-parser-service.cjs.md#s-5017e084de48d1b2>) — [electron/image-parser-service.cjs:142](<../../../../../electron/image-parser-service.cjs#L142>)
- [createImageParserService.saveCache](<image-parser-service.cjs.md#s-a0a8635c6101e0d6>) — [electron/image-parser-service.cjs:164](<../../../../../electron/image-parser-service.cjs#L164>)
- [createImageParserService.saveCache](<image-parser-service.cjs.md#s-a0a8635c6101e0d6>) — [electron/image-parser-service.cjs:166](<../../../../../electron/image-parser-service.cjs#L166>)
- [createImageParserService.saveCache](<image-parser-service.cjs.md#s-a0a8635c6101e0d6>) — [electron/image-parser-service.cjs:170](<../../../../../electron/image-parser-service.cjs#L170>)
- [createImageParserService.processSource](<image-parser-service.cjs.md#s-f54290d09313daf6>) — [electron/image-parser-service.cjs:241](<../../../../../electron/image-parser-service.cjs#L241>)

Unresolved / external call sites: 2.

- fs.realpath — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:72](<../../../../../electron/image-parser-service.cjs#L72>)
- path.join — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:74](<../../../../../electron/image-parser-service.cjs#L74>)

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-f9c02a54ee8eb54b"></a>

## createImageParserService.readImage

[electron/image-parser-service.cjs:80](<../../../../../electron/image-parser-service.cjs#L80>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Reads a bounded immutable image snapshot through existing Universe containment checks. Returns bytes and source metadata without OCR.

Purpose evidence: jsdoc.

Lexical owner: [createImageParserService](<image-parser-service.cjs.md#s-4f26f99ee660dc42>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| sourceRef | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [statVaultSource](<domains/universe/vault-service.cjs.md#s-11f97228db17e5f8>) — [electron/image-parser-service.cjs:81](<../../../../../electron/image-parser-service.cjs#L81>)
- [statVaultSource](<domains/universe/vault-service.cjs.md#s-11f97228db17e5f8>) — [electron/image-parser-service.cjs:93](<../../../../../electron/image-parser-service.cjs#L93>)
- [imageMetadata](<engines/image-parser/parser.cjs.md#s-2dc99fadd24f1534>) — [electron/image-parser-service.cjs:126](<../../../../../electron/image-parser-service.cjs#L126>)

**Called by (statically resolved):**

- [createImageParserService.getKnowledge](<image-parser-service.cjs.md#s-83c22dd539c7db86>) — [electron/image-parser-service.cjs:196](<../../../../../electron/image-parser-service.cjs#L196>)
- [createImageParserService.preview](<image-parser-service.cjs.md#s-096df647e4513b80>) — [electron/image-parser-service.cjs:209](<../../../../../electron/image-parser-service.cjs#L209>)
- [createImageParserService.processSource](<image-parser-service.cjs.md#s-f54290d09313daf6>) — [electron/image-parser-service.cjs:226](<../../../../../electron/image-parser-service.cjs#L226>)
- [createImageParserService.processSource](<image-parser-service.cjs.md#s-f54290d09313daf6>) — [electron/image-parser-service.cjs:258](<../../../../../electron/image-parser-service.cjs#L258>)

Unresolved / external call sites: 15.

- source.stats.isFile — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:83](<../../../../../electron/image-parser-service.cjs#L83>)
- &#91;".png", ".jpg", ".jpeg"&#93;.includes — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:84](<../../../../../electron/image-parser-service.cjs#L84>)
- path.extname(sourceRef).toLowerCase — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:84](<../../../../../electron/image-parser-service.cjs#L84>)
- path.extname — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:84](<../../../../../electron/image-parser-service.cjs#L84>)
- Error — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:86](<../../../../../electron/image-parser-service.cjs#L86>)
- Error — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:88](<../../../../../electron/image-parser-service.cjs#L88>)
- fs.open — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:89](<../../../../../electron/image-parser-service.cjs#L89>)
- file.stat — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:92](<../../../../../electron/image-parser-service.cjs#L92>)
- 7 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-2a59695dadd08776"></a>

## createImageParserService.configuration

[electron/image-parser-service.cjs:130](<../../../../../electron/image-parser-service.cjs#L130>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Captures every processing choice and adapter identity for compatible cache reuse.

Purpose evidence: jsdoc.

Lexical owner: [createImageParserService](<image-parser-service.cjs.md#s-4f26f99ee660dc42>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| ocr | any | compiler-inferred | required |

Returns: { ocr: any; ocrAdapter: string; visionAdapter: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createImageParserService.getKnowledge](<image-parser-service.cjs.md#s-83c22dd539c7db86>) — [electron/image-parser-service.cjs:197](<../../../../../electron/image-parser-service.cjs#L197>)
- [createImageParserService.processSource](<image-parser-service.cjs.md#s-f54290d09313daf6>) — [electron/image-parser-service.cjs:227](<../../../../../electron/image-parser-service.cjs#L227>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-5017e084de48d1b2"></a>

## createImageParserService.readCache

[electron/image-parser-service.cjs:141](<../../../../../electron/image-parser-service.cjs#L141>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Reads optional bounded structured cache data. Corruption throws for visible repair, and missing data yields null.

Purpose evidence: jsdoc.

Lexical owner: [createImageParserService](<image-parser-service.cjs.md#s-4f26f99ee660dc42>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| key | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createImageParserService.enginePath](<image-parser-service.cjs.md#s-48fcad9c9eb084e3>) — [electron/image-parser-service.cjs:142](<../../../../../electron/image-parser-service.cjs#L142>)

**Called by (statically resolved):**

- [createImageParserService.getKnowledge](<image-parser-service.cjs.md#s-83c22dd539c7db86>) — [electron/image-parser-service.cjs:200](<../../../../../electron/image-parser-service.cjs#L200>)
- [createImageParserService.processSource](<image-parser-service.cjs.md#s-f54290d09313daf6>) — [electron/image-parser-service.cjs:234](<../../../../../electron/image-parser-service.cjs#L234>)

Unresolved / external call sites: 7.

- fs.stat — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:144](<../../../../../electron/image-parser-service.cjs#L144>)
- stats.isFile — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:145](<../../../../../electron/image-parser-service.cjs#L145>)
- Error — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:146](<../../../../../electron/image-parser-service.cjs#L146>)
- knowledgeSchema.safeParse — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:147](<../../../../../electron/image-parser-service.cjs#L147>)
- JSON.parse — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:148](<../../../../../electron/image-parser-service.cjs#L148>)
- fs.readFile — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:148](<../../../../../electron/image-parser-service.cjs#L148>)
- Error — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:151](<../../../../../electron/image-parser-service.cjs#L151>)

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-a0a8635c6101e0d6"></a>

## createImageParserService.saveCache

[electron/image-parser-service.cjs:159](<../../../../../electron/image-parser-service.cjs#L159>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Materializes the actual bundled Engine module and manifest using trusted application code, then caches structured output atomically.

Purpose evidence: jsdoc.

Lexical owner: [createImageParserService](<image-parser-service.cjs.md#s-4f26f99ee660dc42>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| key | any | compiler-inferred | required |
| result | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [writeTextAtomic](<core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/image-parser-service.cjs:164](<../../../../../electron/image-parser-service.cjs#L164>)
- [createImageParserService.enginePath](<image-parser-service.cjs.md#s-48fcad9c9eb084e3>) — [electron/image-parser-service.cjs:164](<../../../../../electron/image-parser-service.cjs#L164>)
- [writeTextAtomic](<core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/image-parser-service.cjs:165](<../../../../../electron/image-parser-service.cjs#L165>)
- [createImageParserService.enginePath](<image-parser-service.cjs.md#s-48fcad9c9eb084e3>) — [electron/image-parser-service.cjs:166](<../../../../../electron/image-parser-service.cjs#L166>)
- [writeTextAtomic](<core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/image-parser-service.cjs:169](<../../../../../electron/image-parser-service.cjs#L169>)
- [createImageParserService.enginePath](<image-parser-service.cjs.md#s-48fcad9c9eb084e3>) — [electron/image-parser-service.cjs:170](<../../../../../electron/image-parser-service.cjs#L170>)

**Called by (statically resolved):**

- [createImageParserService.processSource](<image-parser-service.cjs.md#s-f54290d09313daf6>) — [electron/image-parser-service.cjs:272](<../../../../../electron/image-parser-service.cjs#L272>)

Unresolved / external call sites: 5.

- fs.readFile — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:160](<../../../../../electron/image-parser-service.cjs#L160>)
- path.join — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:161](<../../../../../electron/image-parser-service.cjs#L161>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:167](<../../../../../electron/image-parser-service.cjs#L167>)
- Boolean — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:167](<../../../../../electron/image-parser-service.cjs#L167>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:171](<../../../../../electron/image-parser-service.cjs#L171>)

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-1c83efa203bf22bd"></a>

## createImageParserService.authorize

[electron/image-parser-service.cjs:175](<../../../../../electron/image-parser-service.cjs#L175>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Authorizes a current applied group membership and current entity assignment before accessing an original.

Purpose evidence: jsdoc.

Lexical owner: [createImageParserService](<image-parser-service.cjs.md#s-4f26f99ee660dc42>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| carouselId | any | compiler-inferred | required |
| sourceId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resolveKnowledgeCarousel](<domains/knowledge/knowledge-store.cjs.md#s-258b76b0d80b1e40>) — [electron/image-parser-service.cjs:176](<../../../../../electron/image-parser-service.cjs#L176>)
- [resolveKnowledgeSource](<domains/knowledge/knowledge-source-access.cjs.md#s-533d0fd9803550f8>) — [electron/image-parser-service.cjs:179](<../../../../../electron/image-parser-service.cjs#L179>)

**Called by (statically resolved):**

- [createImageParserService.getKnowledge](<image-parser-service.cjs.md#s-83c22dd539c7db86>) — [electron/image-parser-service.cjs:195](<../../../../../electron/image-parser-service.cjs#L195>)
- [createImageParserService.preview](<image-parser-service.cjs.md#s-096df647e4513b80>) — [electron/image-parser-service.cjs:208](<../../../../../electron/image-parser-service.cjs#L208>)
- [createImageParserService.processSource](<image-parser-service.cjs.md#s-f54290d09313daf6>) — [electron/image-parser-service.cjs:225](<../../../../../electron/image-parser-service.cjs#L225>)
- [createImageParserService.processSource](<image-parser-service.cjs.md#s-f54290d09313daf6>) — [electron/image-parser-service.cjs:257](<../../../../../electron/image-parser-service.cjs#L257>)
- [createImageParserService.status](<image-parser-service.cjs.md#s-86a37f304e9e382a>) — [electron/image-parser-service.cjs:404](<../../../../../electron/image-parser-service.cjs#L404>)

Unresolved / external call sites: 2.

- group.sourceIds.includes — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:177](<../../../../../electron/image-parser-service.cjs#L177>)
- Error — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:178](<../../../../../electron/image-parser-service.cjs#L178>)

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-9af853c9fdfb5737"></a>

## createImageParserService.referenceResult

[electron/image-parser-service.cjs:182](<../../../../../electron/image-parser-service.cjs#L182>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Hydrates cached shared computation with this authorized reference's stable ID/path.

Purpose evidence: jsdoc.

Lexical owner: [createImageParserService](<image-parser-service.cjs.md#s-4f26f99ee660dc42>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| result | any | compiler-inferred | required |
| source | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createImageParserService.getKnowledge](<image-parser-service.cjs.md#s-83c22dd539c7db86>) — [electron/image-parser-service.cjs:201](<../../../../../electron/image-parser-service.cjs#L201>)
- [createImageParserService.processSource](<image-parser-service.cjs.md#s-f54290d09313daf6>) — [electron/image-parser-service.cjs:236](<../../../../../electron/image-parser-service.cjs#L236>)
- [createImageParserService.processSource](<image-parser-service.cjs.md#s-f54290d09313daf6>) — [electron/image-parser-service.cjs:276](<../../../../../electron/image-parser-service.cjs#L276>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-83c22dd539c7db86"></a>

## createImageParserService.getKnowledge

[electron/image-parser-service.cjs:188](<../../../../../electron/image-parser-service.cjs#L188>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Retrieves valid knowledge by actual content hash without invoking OCR or vision. Can be called independently of the Knowledge Card UI.

Purpose evidence: jsdoc.

Lexical owner: [createImageParserService](<image-parser-service.cjs.md#s-4f26f99ee660dc42>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| carouselId | any | compiler-inferred | required |
| sourceId | any | compiler-inferred | required |
| { ocr = true } | { ocr?: boolean; } | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createImageParserService.authorize](<image-parser-service.cjs.md#s-1c83efa203bf22bd>) — [electron/image-parser-service.cjs:195](<../../../../../electron/image-parser-service.cjs#L195>)
- [createImageParserService.readImage](<image-parser-service.cjs.md#s-f9c02a54ee8eb54b>) — [electron/image-parser-service.cjs:196](<../../../../../electron/image-parser-service.cjs#L196>)
- [imageCacheKey](<engines/image-parser/parser.cjs.md#s-d51f2a3c59fc4187>) — [electron/image-parser-service.cjs:197](<../../../../../electron/image-parser-service.cjs#L197>)
- [createImageParserService.configuration](<image-parser-service.cjs.md#s-2a59695dadd08776>) — [electron/image-parser-service.cjs:197](<../../../../../electron/image-parser-service.cjs#L197>)
- [createImageParserService.readCache](<image-parser-service.cjs.md#s-5017e084de48d1b2>) — [electron/image-parser-service.cjs:200](<../../../../../electron/image-parser-service.cjs#L200>)
- [createImageParserService.referenceResult](<image-parser-service.cjs.md#s-9af853c9fdfb5737>) — [electron/image-parser-service.cjs:201](<../../../../../electron/image-parser-service.cjs#L201>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- computed.get — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:199](<../../../../../electron/image-parser-service.cjs#L199>)
- fs.realpath — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:199](<../../../../../electron/image-parser-service.cjs#L199>)

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-096df647e4513b80"></a>

## createImageParserService.preview

[electron/image-parser-service.cjs:207](<../../../../../electron/image-parser-service.cjs#L207>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Returns a resource-bounded original slide for immediate rendering, independent of parsing success/cache availability.

Purpose evidence: jsdoc.

Lexical owner: [createImageParserService](<image-parser-service.cjs.md#s-4f26f99ee660dc42>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| carouselId | any | compiler-inferred | required |
| sourceId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createImageParserService.authorize](<image-parser-service.cjs.md#s-1c83efa203bf22bd>) — [electron/image-parser-service.cjs:208](<../../../../../electron/image-parser-service.cjs#L208>)
- [createImageParserService.readImage](<image-parser-service.cjs.md#s-f9c02a54ee8eb54b>) — [electron/image-parser-service.cjs:209](<../../../../../electron/image-parser-service.cjs#L209>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- image.bytes.toString — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:214](<../../../../../electron/image-parser-service.cjs#L214>)

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-f54290d09313daf6"></a>

## createImageParserService.processSource

[electron/image-parser-service.cjs:218](<../../../../../electron/image-parser-service.cjs#L218>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Parses one authorized source snapshot explicitly, reusing compatible cache across entities and guarding cancellation/source changes.

Purpose evidence: jsdoc.

Lexical owner: [createImageParserService](<image-parser-service.cjs.md#s-4f26f99ee660dc42>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| carouselId | any | compiler-inferred | required |
| sourceId | any | compiler-inferred | required |
| { ocr = true, force = false, signal } | { ocr?: boolean; force?: boolean; } | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createImageParserService.authorize](<image-parser-service.cjs.md#s-1c83efa203bf22bd>) — [electron/image-parser-service.cjs:225](<../../../../../electron/image-parser-service.cjs#L225>)
- [createImageParserService.readImage](<image-parser-service.cjs.md#s-f9c02a54ee8eb54b>) — [electron/image-parser-service.cjs:226](<../../../../../electron/image-parser-service.cjs#L226>)
- [createImageParserService.configuration](<image-parser-service.cjs.md#s-2a59695dadd08776>) — [electron/image-parser-service.cjs:227](<../../../../../electron/image-parser-service.cjs#L227>)
- [imageCacheKey](<engines/image-parser/parser.cjs.md#s-d51f2a3c59fc4187>) — [electron/image-parser-service.cjs:228](<../../../../../electron/image-parser-service.cjs#L228>)
- [createImageParserService.readCache](<image-parser-service.cjs.md#s-5017e084de48d1b2>) — [electron/image-parser-service.cjs:234](<../../../../../electron/image-parser-service.cjs#L234>)
- [createImageParserService.referenceResult](<image-parser-service.cjs.md#s-9af853c9fdfb5737>) — [electron/image-parser-service.cjs:236](<../../../../../electron/image-parser-service.cjs#L236>)
- [createImageParserService.enginePath](<image-parser-service.cjs.md#s-48fcad9c9eb084e3>) — [electron/image-parser-service.cjs:241](<../../../../../electron/image-parser-service.cjs#L241>)
- [safeDirectory](<core/persistence/json-store.cjs.md#s-429fa54bc1a890a0>) — [electron/image-parser-service.cjs:246](<../../../../../electron/image-parser-service.cjs#L246>)
- [parseImage](<engines/image-parser/parser.cjs.md#s-3be685f98cf79b52>) — [electron/image-parser-service.cjs:249](<../../../../../electron/image-parser-service.cjs#L249>)
- [createImageParserService.authorize](<image-parser-service.cjs.md#s-1c83efa203bf22bd>) — [electron/image-parser-service.cjs:257](<../../../../../electron/image-parser-service.cjs#L257>)
- [createImageParserService.readImage](<image-parser-service.cjs.md#s-f9c02a54ee8eb54b>) — [electron/image-parser-service.cjs:258](<../../../../../electron/image-parser-service.cjs#L258>)
- [imageCacheKey](<engines/image-parser/parser.cjs.md#s-d51f2a3c59fc4187>) — [electron/image-parser-service.cjs:259](<../../../../../electron/image-parser-service.cjs#L259>)
- [createImageParserService.saveCache](<image-parser-service.cjs.md#s-a0a8635c6101e0d6>) — [electron/image-parser-service.cjs:272](<../../../../../electron/image-parser-service.cjs#L272>)
- [createImageParserService.referenceResult](<image-parser-service.cjs.md#s-9af853c9fdfb5737>) — [electron/image-parser-service.cjs:276](<../../../../../electron/image-parser-service.cjs#L276>)

**Called by (statically resolved):**

- [createImageParserService.start.processJob](<image-parser-service.cjs.md#s-8d0a01040448ee0e>) — [electron/image-parser-service.cjs:350](<../../../../../electron/image-parser-service.cjs#L350>)

Unresolved / external call sites: 12.

- computed.get — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:233](<../../../../../electron/image-parser-service.cjs#L233>)
- fs.realpath — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:233](<../../../../../electron/image-parser-service.cjs#L233>)
- warnings.push — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:238](<../../../../../electron/image-parser-service.cjs#L238>)
- randomUUID — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:244](<../../../../../electron/image-parser-service.cjs#L244>)
- path.dirname — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:246](<../../../../../electron/image-parser-service.cjs#L246>)
- fs.writeFile — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:247](<../../../../../electron/image-parser-service.cjs#L247>)
- Error — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:256](<../../../../../electron/image-parser-service.cjs#L256>)
- Error — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:260](<../../../../../electron/image-parser-service.cjs#L260>)
- 4 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-94742d9dd03f8701"></a>

## createImageParserService.snapshot

[electron/image-parser-service.cjs:282](<../../../../../electron/image-parser-service.cjs#L282>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Returns a serializable job snapshot, excluding cancellation handles and internal root paths.

Purpose evidence: jsdoc.

Lexical owner: [createImageParserService](<image-parser-service.cjs.md#s-4f26f99ee660dc42>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| job | any | compiler-inferred | required |

Returns: { id: any; entityId: any; carouselId: any; status: any; entries: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createImageParserService.start](<image-parser-service.cjs.md#s-fde998c903c7bb79>) — [electron/image-parser-service.cjs:315](<../../../../../electron/image-parser-service.cjs#L315>)
- [createImageParserService.start](<image-parser-service.cjs.md#s-fde998c903c7bb79>) — [electron/image-parser-service.cjs:386](<../../../../../electron/image-parser-service.cjs#L386>)
- [createImageParserService.status](<image-parser-service.cjs.md#s-86a37f304e9e382a>) — [electron/image-parser-service.cjs:420](<../../../../../electron/image-parser-service.cjs#L420>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-483b2a2cbcd9fd69"></a>

## createImageParserService.completedStatus

[electron/image-parser-service.cjs:292](<../../../../../electron/image-parser-service.cjs#L292>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Aggregates terminal per-image states without treating usable partial metadata as a total failure.

Purpose evidence: jsdoc.

Lexical owner: [createImageParserService](<image-parser-service.cjs.md#s-4f26f99ee660dc42>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entries | any | compiler-inferred | required |

Returns: "failed" &#124; "partial" &#124; "completed" (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [createImageParserService.start.processJob](<image-parser-service.cjs.md#s-8d0a01040448ee0e>) — [electron/image-parser-service.cjs:371](<../../../../../electron/image-parser-service.cjs#L371>)
- [createImageParserService.status](<image-parser-service.cjs.md#s-86a37f304e9e382a>) — [electron/image-parser-service.cjs:419](<../../../../../electron/image-parser-service.cjs#L419>)

Unresolved / external call sites: 2.

- entries.every — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:293](<../../../../../electron/image-parser-service.cjs#L293>)
- entries.every — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:295](<../../../../../electron/image-parser-service.cjs#L295>)

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-291706dbfc6f7b14"></a>

## createImageParserService.completedStatus.&lt;anonymous@293:26&gt;

[electron/image-parser-service.cjs:293](<../../../../../electron/image-parser-service.cjs#L293>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createImageParserService.completedStatus](<image-parser-service.cjs.md#s-483b2a2cbcd9fd69>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entry | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-88c945e928732bd8"></a>

## createImageParserService.completedStatus.&lt;anonymous@295:23&gt;

[electron/image-parser-service.cjs:295](<../../../../../electron/image-parser-service.cjs#L295>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createImageParserService.completedStatus](<image-parser-service.cjs.md#s-483b2a2cbcd9fd69>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entry | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-fde998c903c7bb79"></a>

## createImageParserService.start

[electron/image-parser-service.cjs:300](<../../../../../electron/image-parser-service.cjs#L300>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Starts a bounded sequential background job immediately; repeated starts attach to its existing active identity.

Purpose evidence: jsdoc.

Lexical owner: [createImageParserService](<image-parser-service.cjs.md#s-4f26f99ee660dc42>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| carouselId | any | compiler-inferred | required |
| options | {} | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resolveKnowledgeCarousel](<domains/knowledge/knowledge-store.cjs.md#s-258b76b0d80b1e40>) — [electron/image-parser-service.cjs:307](<../../../../../electron/image-parser-service.cjs#L307>)
- [createImageParserService.snapshot](<image-parser-service.cjs.md#s-94742d9dd03f8701>) — [electron/image-parser-service.cjs:315](<../../../../../electron/image-parser-service.cjs#L315>)
- [createImageParserService.snapshot](<image-parser-service.cjs.md#s-94742d9dd03f8701>) — [electron/image-parser-service.cjs:386](<../../../../../electron/image-parser-service.cjs#L386>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 17.

- Error — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:305](<../../../../../electron/image-parser-service.cjs#L305>)
- fs.realpath — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:306](<../../../../../electron/image-parser-service.cjs#L306>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:308](<../../../../../electron/image-parser-service.cjs#L308>)
- jobs.get — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:309](<../../../../../electron/image-parser-service.cjs#L309>)
- activeGroups.get — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:309](<../../../../../electron/image-parser-service.cjs#L309>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:312](<../../../../../electron/image-parser-service.cjs#L312>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:313](<../../../../../electron/image-parser-service.cjs#L313>)
- existing.entries.map — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:313](<../../../../../electron/image-parser-service.cjs#L313>)
- 9 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-6b2e2ee9e38d65ca"></a>

## createImageParserService.start.&lt;anonymous@313:45&gt;

[electron/image-parser-service.cjs:313](<../../../../../electron/image-parser-service.cjs#L313>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createImageParserService.start](<image-parser-service.cjs.md#s-fde998c903c7bb79>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entry | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-b864cd8b50b60429"></a>

## createImageParserService.start.&lt;anonymous@326:36&gt;

[electron/image-parser-service.cjs:326](<../../../../../electron/image-parser-service.cjs#L326>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createImageParserService.start](<image-parser-service.cjs.md#s-fde998c903c7bb79>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sourceId | any | compiler-inferred | required |

Returns: { sourceId: any; status: string; result: any; error: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-8d0a01040448ee0e"></a>

## createImageParserService.start.processJob

[electron/image-parser-service.cjs:336](<../../../../../electron/image-parser-service.cjs#L336>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Processes each registered image without holding the entity mutation queue or blocking the UI.

Purpose evidence: jsdoc.

Lexical owner: [createImageParserService.start](<image-parser-service.cjs.md#s-fde998c903c7bb79>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createImageParserService.processSource](<image-parser-service.cjs.md#s-f54290d09313daf6>) — [electron/image-parser-service.cjs:350](<../../../../../electron/image-parser-service.cjs#L350>)
- [createImageParserService.completedStatus](<image-parser-service.cjs.md#s-483b2a2cbcd9fd69>) — [electron/image-parser-service.cjs:371](<../../../../../electron/image-parser-service.cjs#L371>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-49828f943b145d84"></a>

## createImageParserService.start.&lt;anonymous@375:79&gt;

[electron/image-parser-service.cjs:375](<../../../../../electron/image-parser-service.cjs#L375>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Surfaces unexpected scheduler failures in retrievable job state.

Purpose evidence: jsdoc.

Lexical owner: [createImageParserService.start](<image-parser-service.cjs.md#s-fde998c903c7bb79>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- job.entries.map — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:379](<../../../../../electron/image-parser-service.cjs#L379>)

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-09476633998b5032"></a>

## createImageParserService.start.&lt;anonymous@375:79&gt;.&lt;anonymous@379:39&gt;

[electron/image-parser-service.cjs:379](<../../../../../electron/image-parser-service.cjs#L379>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createImageParserService.start.&lt;anonymous@375:79&gt;](<image-parser-service.cjs.md#s-49828f943b145d84>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entry | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-86a37f304e9e382a"></a>

## createImageParserService.status

[electron/image-parser-service.cjs:389](<../../../../../electron/image-parser-service.cjs#L389>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Retrieves an authorized background status for this root/entity/group, including results after the card is reopened.

Purpose evidence: jsdoc.

Lexical owner: [createImageParserService](<image-parser-service.cjs.md#s-4f26f99ee660dc42>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| carouselId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resolveKnowledgeCarousel](<domains/knowledge/knowledge-store.cjs.md#s-258b76b0d80b1e40>) — [electron/image-parser-service.cjs:391](<../../../../../electron/image-parser-service.cjs#L391>)
- [createImageParserService.authorize](<image-parser-service.cjs.md#s-1c83efa203bf22bd>) — [electron/image-parser-service.cjs:404](<../../../../../electron/image-parser-service.cjs#L404>)
- [createImageParserService.completedStatus](<image-parser-service.cjs.md#s-483b2a2cbcd9fd69>) — [electron/image-parser-service.cjs:419](<../../../../../electron/image-parser-service.cjs#L419>)
- [createImageParserService.snapshot](<image-parser-service.cjs.md#s-94742d9dd03f8701>) — [electron/image-parser-service.cjs:420](<../../../../../electron/image-parser-service.cjs#L420>)

**Called by (statically resolved):**

- [createImageParserService.cancel](<image-parser-service.cjs.md#s-7368dc9d6ffbf2f3>) — [electron/image-parser-service.cjs:424](<../../../../../electron/image-parser-service.cjs#L424>)

Unresolved / external call sites: 7.

- fs.realpath — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:390](<../../../../../electron/image-parser-service.cjs#L390>)
- jobs.get — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:392](<../../../../../electron/image-parser-service.cjs#L392>)
- activeGroups.get — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:393](<../../../../../electron/image-parser-service.cjs#L393>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:393](<../../../../../electron/image-parser-service.cjs#L393>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:397](<../../../../../electron/image-parser-service.cjs#L397>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:398](<../../../../../electron/image-parser-service.cjs#L398>)
- job.entries.map — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:398](<../../../../../electron/image-parser-service.cjs#L398>)

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-08ad8ed28dd18ae9"></a>

## createImageParserService.status.&lt;anonymous@398:40&gt;

[electron/image-parser-service.cjs:398](<../../../../../electron/image-parser-service.cjs#L398>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createImageParserService.status](<image-parser-service.cjs.md#s-86a37f304e9e382a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entry | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-7368dc9d6ffbf2f3"></a>

## createImageParserService.cancel

[electron/image-parser-service.cjs:423](<../../../../../electron/image-parser-service.cjs#L423>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Explicitly aborts this group's active OCR process and pending slides; completed cache records remain reusable.

Purpose evidence: jsdoc.

Lexical owner: [createImageParserService](<image-parser-service.cjs.md#s-4f26f99ee660dc42>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |
| carouselId | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createImageParserService.status](<image-parser-service.cjs.md#s-86a37f304e9e382a>) — [electron/image-parser-service.cjs:424](<../../../../../electron/image-parser-service.cjs#L424>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- jobs.get(state.id).controller.abort — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:425](<../../../../../electron/image-parser-service.cjs#L425>)
- jobs.get — external-or-dynamic-dispatch; [electron/image-parser-service.cjs:425](<../../../../../electron/image-parser-service.cjs#L425>)

**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-befb4d53bee4f38e"></a>

## imageParserService

[electron/image-parser-service.cjs:430](<../../../../../electron/image-parser-service.cjs#L430>) · VariableDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: imageParserService ([electron/image-parser-service.cjs:1](<../../../../../electron/image-parser-service.cjs#L1>)).

Lexical owner: [electron/image-parser-service.cjs](<image-parser-service.cjs.md#s-588132adce916faa>).

**Calls (statically resolved):**

- [createImageParserService](<image-parser-service.cjs.md#s-4f26f99ee660dc42>) — [electron/image-parser-service.cjs:430](<../../../../../electron/image-parser-service.cjs#L430>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/image-parser.test.cjs:15](<../../../../../electron/image-parser.test.cjs#L15>) — file-import-only; coverage not established.
