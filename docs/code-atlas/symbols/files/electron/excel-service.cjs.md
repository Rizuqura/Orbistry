# electron/excel-service.cjs: symbols

[Atlas](<../../../README.md>) / [Built-in Engines and data adapters](<../../../modules/engines.md>) / [electron/excel-service.cjs:1](<../../../../../electron/excel-service.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/excel-service.cjs](<excel-service.cjs.md#s-4fa756cedd0693d5>) (Module)
- [snapshot](<excel-service.cjs.md#s-4cfcb979c9dcd95e>) (FunctionDeclaration)
- [createExcelService](<excel-service.cjs.md#s-adfd4f07e6ae9eaf>) (FunctionDeclaration)
- [createExcelService.load](<excel-service.cjs.md#s-64735e7127d8128a>) (FunctionDeclaration)
- [createExcelService.load.parseWorkbook](<excel-service.cjs.md#s-ecbfa0724eb95158>) (FunctionExpression)
- [createExcelService.request](<excel-service.cjs.md#s-7424ee532b0e8969>) (FunctionDeclaration)
- [createExcelService.request.exportCached](<excel-service.cjs.md#s-74b4961b164df480>) (FunctionExpression)
- [createExcelService.request.byIndex](<excel-service.cjs.md#s-cf8e0203780f00f8>) (FunctionExpression)
- [createExcelService.request.metadata](<excel-service.cjs.md#s-b6afedacaf9f9f2e>) (FunctionExpression)
- [excelService](<excel-service.cjs.md#s-3b352274d348339f>) (VariableDeclaration)

<a id="s-4fa756cedd0693d5"></a>

## electron/excel-service.cjs

[electron/excel-service.cjs:1](<../../../../../electron/excel-service.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- require — module-loader; [electron/excel-service.cjs:1](<../../../../../electron/excel-service.cjs#L1>)
- require — module-loader; [electron/excel-service.cjs:2](<../../../../../electron/excel-service.cjs#L2>)
- require — module-loader; [electron/excel-service.cjs:3](<../../../../../electron/excel-service.cjs#L3>)
- require — module-loader; [electron/excel-service.cjs:4](<../../../../../electron/excel-service.cjs#L4>)
- require — module-loader; [electron/excel-service.cjs:5](<../../../../../electron/excel-service.cjs#L5>)
- require — module-loader; [electron/excel-service.cjs:6](<../../../../../electron/excel-service.cjs#L6>)
- require — module-loader; [electron/excel-service.cjs:12](<../../../../../electron/excel-service.cjs#L12>)
- require — module-loader; [electron/excel-service.cjs:13](<../../../../../electron/excel-service.cjs#L13>)
- 1 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/excel-service.test.cjs:7](<../../../../../electron/excel-service.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-4cfcb979c9dcd95e"></a>

## snapshot

[electron/excel-service.cjs:19](<../../../../../electron/excel-service.cjs#L19>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Reads only a currently authorized Universe source through containment/symlink checks and a read-only bounded handle. Detects source replacement or concurrent edits.

Purpose evidence: jsdoc.

Lexical owner: [electron/excel-service.cjs](<excel-service.cjs.md#s-4fa756cedd0693d5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| sourceRef | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [statVaultSource](<domains/universe/vault-service.cjs.md#s-11f97228db17e5f8>) — [electron/excel-service.cjs:20](<../../../../../electron/excel-service.cjs#L20>)
- [statVaultSource](<domains/universe/vault-service.cjs.md#s-11f97228db17e5f8>) — [electron/excel-service.cjs:29](<../../../../../electron/excel-service.cjs#L29>)
- [statVaultSource](<domains/universe/vault-service.cjs.md#s-11f97228db17e5f8>) — [electron/excel-service.cjs:46](<../../../../../electron/excel-service.cjs#L46>)

**Called by (statically resolved):**

- [createExcelService.load](<excel-service.cjs.md#s-64735e7127d8128a>) — [electron/excel-service.cjs:78](<../../../../../electron/excel-service.cjs#L78>)

Unresolved / external call sites: 16.

- source.stats.isFile — external-or-dynamic-dispatch; [electron/excel-service.cjs:22](<../../../../../electron/excel-service.cjs#L22>)
- path.extname(sourceRef).toLowerCase — external-or-dynamic-dispatch; [electron/excel-service.cjs:23](<../../../../../electron/excel-service.cjs#L23>)
- path.extname — external-or-dynamic-dispatch; [electron/excel-service.cjs:23](<../../../../../electron/excel-service.cjs#L23>)
- Error — external-or-dynamic-dispatch; [electron/excel-service.cjs:25](<../../../../../electron/excel-service.cjs#L25>)
- fs.open — external-or-dynamic-dispatch; [electron/excel-service.cjs:26](<../../../../../electron/excel-service.cjs#L26>)
- file.stat — external-or-dynamic-dispatch; [electron/excel-service.cjs:28](<../../../../../electron/excel-service.cjs#L28>)
- before.isFile — external-or-dynamic-dispatch; [electron/excel-service.cjs:33](<../../../../../electron/excel-service.cjs#L33>)
- Error — external-or-dynamic-dispatch; [electron/excel-service.cjs:35](<../../../../../electron/excel-service.cjs#L35>)
- 8 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/excel-service.test.cjs:7](<../../../../../electron/excel-service.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-adfd4f07e6ae9eaf"></a>

## createExcelService

[electron/excel-service.cjs:70](<../../../../../electron/excel-service.cjs#L70>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Creates a small content/version-keyed in-memory Engine cache. Sources and assignments are reauthorized on every page/export; no derived data is trusted from disk.

Purpose evidence: jsdoc.

Exported as: createExcelService ([electron/excel-service.cjs:1](<../../../../../electron/excel-service.cjs#L1>)).

Lexical owner: [electron/excel-service.cjs](<excel-service.cjs.md#s-4fa756cedd0693d5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { execute = executeNativeEngine } | { execute?: (engineId: any, operation: any, input: any, options: any) =&gt; unknown; } | compiler-inferred | optional, default present |

Returns: { request: (root: any, id: any, sourceId: any, options?: {}) =&gt; unknown; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [serialQueue](<core/persistence/json-store.cjs.md#s-a8a605453bc9a09a>) — [electron/excel-service.cjs:73](<../../../../../electron/excel-service.cjs#L73>)

**Called by (statically resolved):**

- [excelService](<excel-service.cjs.md#s-3b352274d348339f>) — [electron/excel-service.cjs:202](<../../../../../electron/excel-service.cjs#L202>)
- [&lt;anonymous@55:89&gt;.&lt;anonymous@56:22&gt;](<excel-service.test.cjs.md#s-1ce2ad7c1e58b379>) — [electron/excel-service.test.cjs:58](<../../../../../electron/excel-service.test.cjs#L58>)
- [&lt;anonymous@141:67&gt;.&lt;anonymous@142:22&gt;](<excel-service.test.cjs.md#s-88707e32ec13c432>) — [electron/excel-service.test.cjs:143](<../../../../../electron/excel-service.test.cjs#L143>)
- [&lt;anonymous@204:89&gt;.&lt;anonymous@205:22&gt;](<excel-service.test.cjs.md#s-6ed995772b3bfb7d>) — [electron/excel-service.test.cjs:218](<../../../../../electron/excel-service.test.cjs#L218>)

Unresolved / external call sites: 2.

- Map — external-or-dynamic-dispatch; [electron/excel-service.cjs:71](<../../../../../electron/excel-service.cjs#L71>)
- Map — external-or-dynamic-dispatch; [electron/excel-service.cjs:72](<../../../../../electron/excel-service.cjs#L72>)

**Related tests / acceptance harnesses:**

- [electron/excel-service.test.cjs:58](<../../../../../electron/excel-service.test.cjs#L58>) — static-call-site; coverage not established.
- [electron/excel-service.test.cjs:143](<../../../../../electron/excel-service.test.cjs#L143>) — static-call-site; coverage not established.
- [electron/excel-service.test.cjs:218](<../../../../../electron/excel-service.test.cjs#L218>) — static-call-site; coverage not established.
- [electron/excel-service.test.cjs:7](<../../../../../electron/excel-service.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-64735e7127d8128a"></a>

## createExcelService.load

[electron/excel-service.cjs:76](<../../../../../electron/excel-service.cjs#L76>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Returns an authorized immutable model, sharing unchanged snapshots across entities and coalescing identical in-flight parsing.

Purpose evidence: jsdoc.

Lexical owner: [createExcelService](<excel-service.cjs.md#s-adfd4f07e6ae9eaf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| sourceId | any | compiler-inferred | required |
| expectedHash | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [resolveKnowledgeSource](<domains/knowledge/knowledge-source-access.cjs.md#s-533d0fd9803550f8>) — [electron/excel-service.cjs:77](<../../../../../electron/excel-service.cjs#L77>)
- [snapshot](<excel-service.cjs.md#s-4cfcb979c9dcd95e>) — [electron/excel-service.cjs:78](<../../../../../electron/excel-service.cjs#L78>)
- [resolveKnowledgeSource](<domains/knowledge/knowledge-source-access.cjs.md#s-533d0fd9803550f8>) — [electron/excel-service.cjs:117](<../../../../../electron/excel-service.cjs#L117>)
- [statVaultSource](<domains/universe/vault-service.cjs.md#s-11f97228db17e5f8>) — [electron/excel-service.cjs:121](<../../../../../electron/excel-service.cjs#L121>)

**Called by (statically resolved):**

- [createExcelService.request](<excel-service.cjs.md#s-7424ee532b0e8969>) — [electron/excel-service.cjs:152](<../../../../../electron/excel-service.cjs#L152>)

Unresolved / external call sites: 19.

- createHash("sha256").update(file.bytes).digest — external-or-dynamic-dispatch; [electron/excel-service.cjs:79](<../../../../../electron/excel-service.cjs#L79>)
- createHash("sha256").update — external-or-dynamic-dispatch; [electron/excel-service.cjs:79](<../../../../../electron/excel-service.cjs#L79>)
- createHash — external-or-dynamic-dispatch; [electron/excel-service.cjs:79](<../../../../../electron/excel-service.cjs#L79>)
- Error — external-or-dynamic-dispatch; [electron/excel-service.cjs:81](<../../../../../electron/excel-service.cjs#L81>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/excel-service.cjs:84](<../../../../../electron/excel-service.cjs#L84>)
- path.resolve — external-or-dynamic-dispatch; [electron/excel-service.cjs:85](<../../../../../electron/excel-service.cjs#L85>)
- cache.get — external-or-dynamic-dispatch; [electron/excel-service.cjs:90](<../../../../../electron/excel-service.cjs#L90>)
- Boolean — external-or-dynamic-dispatch; [electron/excel-service.cjs:91](<../../../../../electron/excel-service.cjs#L91>)
- 11 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/excel-service.test.cjs:7](<../../../../../electron/excel-service.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-ecbfa0724eb95158"></a>

## createExcelService.load.parseWorkbook

[electron/excel-service.cjs:98](<../../../../../electron/excel-service.cjs#L98>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createExcelService.load](<excel-service.cjs.md#s-64735e7127d8128a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- execute — signature-only-candidate; [electron/excel-service.cjs:99](<../../../../../electron/excel-service.cjs#L99>)
- cache.set — external-or-dynamic-dispatch; [electron/excel-service.cjs:102](<../../../../../electron/excel-service.cjs#L102>)
- cache.delete — external-or-dynamic-dispatch; [electron/excel-service.cjs:103](<../../../../../electron/excel-service.cjs#L103>)
- cache.keys().next — external-or-dynamic-dispatch; [electron/excel-service.cjs:103](<../../../../../electron/excel-service.cjs#L103>)
- cache.keys — external-or-dynamic-dispatch; [electron/excel-service.cjs:103](<../../../../../electron/excel-service.cjs#L103>)

**Related tests / acceptance harnesses:**

- [electron/excel-service.test.cjs:7](<../../../../../electron/excel-service.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-7424ee532b0e8969"></a>

## createExcelService.request

[electron/excel-service.cjs:135](<../../../../../electron/excel-service.cjs#L135>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

Supplies final-text worksheet pages and exports for the Knowledge Card. Authorizes each request and rejects invalid coordinates, output formats or stale source hashes.

Purpose evidence: jsdoc.

Lexical owner: [createExcelService](<excel-service.cjs.md#s-adfd4f07e6ae9eaf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| id | any | compiler-inferred | required |
| sourceId | any | compiler-inferred | required |
| options | {} | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createExcelService.load](<excel-service.cjs.md#s-64735e7127d8128a>) — [electron/excel-service.cjs:152](<../../../../../electron/excel-service.cjs#L152>)
- [resolveKnowledgeSource](<domains/knowledge/knowledge-source-access.cjs.md#s-533d0fd9803550f8>) — [electron/excel-service.cjs:162](<../../../../../electron/excel-service.cjs#L162>)
- [resultPage](<engines/excel/results.cjs.md#s-52108a0228c7c222>) — [electron/excel-service.cjs:173](<../../../../../electron/excel-service.cjs#L173>)
- [renderSheet](<engines/excel/markdown.cjs.md#s-7f549847601d4399>) — [electron/excel-service.cjs:197](<../../../../../electron/excel-service.cjs#L197>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 12.

- &#91;"preview", "markdown", "structured"&#93;.includes — external-or-dynamic-dispatch; [electron/excel-service.cjs:137](<../../../../../electron/excel-service.cjs#L137>)
- Error — external-or-dynamic-dispatch; [electron/excel-service.cjs:138](<../../../../../electron/excel-service.cjs#L138>)
- Number.isSafeInteger — external-or-dynamic-dispatch; [electron/excel-service.cjs:144](<../../../../../electron/excel-service.cjs#L144>)
- Error — external-or-dynamic-dispatch; [electron/excel-service.cjs:145](<../../../../../electron/excel-service.cjs#L145>)
- /^sha256:&#91;a-f0-9&#93;{64}$/.test — external-or-dynamic-dispatch; [electron/excel-service.cjs:149](<../../../../../electron/excel-service.cjs#L149>)
- Error — external-or-dynamic-dispatch; [electron/excel-service.cjs:151](<../../../../../electron/excel-service.cjs#L151>)
- queue — signature-only-candidate; [electron/excel-service.cjs:159](<../../../../../electron/excel-service.cjs#L159>)
- path.basename — external-or-dynamic-dispatch; [electron/excel-service.cjs:165](<../../../../../electron/excel-service.cjs#L165>)
- 4 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/excel-service.test.cjs:7](<../../../../../electron/excel-service.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-74b4961b164df480"></a>

## createExcelService.request.exportCached

[electron/excel-service.cjs:159](<../../../../../electron/excel-service.cjs#L159>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createExcelService.request](<excel-service.cjs.md#s-7424ee532b0e8969>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- exportWorkbook — signature-only-candidate; [electron/excel-service.cjs:160](<../../../../../electron/excel-service.cjs#L160>)

**Related tests / acceptance harnesses:**

- [electron/excel-service.test.cjs:7](<../../../../../electron/excel-service.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-cf8e0203780f00f8"></a>

## createExcelService.request.byIndex

[electron/excel-service.cjs:169](<../../../../../electron/excel-service.cjs#L169>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createExcelService.request](<excel-service.cjs.md#s-7424ee532b0e8969>).

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

- [electron/excel-service.test.cjs:7](<../../../../../electron/excel-service.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-b6afedacaf9f9f2e"></a>

## createExcelService.request.metadata

[electron/excel-service.cjs:184](<../../../../../electron/excel-service.cjs#L184>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createExcelService.request](<excel-service.cjs.md#s-7424ee532b0e8969>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: { name: any; index: any; state: any; range: any; merges: any; warnings: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/excel-service.test.cjs:7](<../../../../../electron/excel-service.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-3b352274d348339f"></a>

## excelService

[electron/excel-service.cjs:202](<../../../../../electron/excel-service.cjs#L202>) · VariableDeclaration · production · [Built-in Engines and data adapters](<../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: excelService ([electron/excel-service.cjs:1](<../../../../../electron/excel-service.cjs#L1>)).

Lexical owner: [electron/excel-service.cjs](<excel-service.cjs.md#s-4fa756cedd0693d5>).

**Calls (statically resolved):**

- [createExcelService](<excel-service.cjs.md#s-adfd4f07e6ae9eaf>) — [electron/excel-service.cjs:202](<../../../../../electron/excel-service.cjs#L202>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/excel-service.test.cjs:7](<../../../../../electron/excel-service.test.cjs#L7>) — file-import-only; coverage not established.
