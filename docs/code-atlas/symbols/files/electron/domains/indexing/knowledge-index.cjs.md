# electron/domains/indexing/knowledge-index.cjs: symbols

[Atlas](<../../../../../README.md>) / [Knowledge indexing and source access](<../../../../../modules/knowledge.md>) / [electron/domains/indexing/knowledge-index.cjs:1](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/indexing/knowledge-index.cjs](<knowledge-index.cjs.md#s-fd6ab399e2af1d2e>) (Module)
- [parseKnowledgeIndex](<knowledge-index.cjs.md#s-e76591326346a1da>) (FunctionDeclaration)
- [parseKnowledgeIndex.addSource](<knowledge-index.cjs.md#s-ffb3f371591a61f2>) (FunctionDeclaration)
- [parseKnowledgeIndex.addSource.&lt;anonymous@16:32&gt;](<knowledge-index.cjs.md#s-3e7520f734fe64db>) (ArrowFunction)
- [parseKnowledgeIndex.&lt;anonymous@100:11&gt;](<knowledge-index.cjs.md#s-d0a52bdd28e1daa1>) (ArrowFunction)
- [parseKnowledgeIndex.&lt;anonymous@169:37&gt;](<knowledge-index.cjs.md#s-85f30ef19d1c8e66>) (ArrowFunction)
- [parseKnowledgeIndex.&lt;anonymous@197:34&gt;](<knowledge-index.cjs.md#s-db469c95eb483134>) (ArrowFunction)

<a id="s-fd6ab399e2af1d2e"></a>

## electron/domains/indexing/knowledge-index.cjs

[electron/domains/indexing/knowledge-index.cjs:1](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L1>) · Module · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/domains/indexing/knowledge-index.cjs:1](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L1>)
- require — module-loader; [electron/domains/indexing/knowledge-index.cjs:2](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L2>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:19](<../../../../../../../electron/daily-price.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:6](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:18](<../../../../../../../electron/financial-service.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:9](<../../../../../../../electron/image-parser.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-e76591326346a1da"></a>

## parseKnowledgeIndex

[electron/domains/indexing/knowledge-index.cjs:5](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L5>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Parses headings, file references, registered literal Yahoo calls and image views with line errors. Parsing produces data and performs no network or code execution.

Purpose evidence: jsdoc.

Exported as: parseKnowledgeIndex ([electron/domains/indexing/knowledge-index.cjs:1](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L1>)).

Lexical owner: [electron/domains/indexing/knowledge-index.cjs](<knowledge-index.cjs.md#s-fd6ab399e2af1d2e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |
| { allowLegacyParsing = false } | { allowLegacyParsing?: boolean; } | compiler-inferred | optional, default present |

Returns: { menus: {}; errors: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parseKnowledgeIndex.addSource](<knowledge-index.cjs.md#s-ffb3f371591a61f2>) — [electron/domains/indexing/knowledge-index.cjs:78](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L78>)
- [parseKnowledgeIndex.addSource](<knowledge-index.cjs.md#s-ffb3f371591a61f2>) — [electron/domains/indexing/knowledge-index.cjs:206](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L206>)

**Called by (statically resolved):**

- [&lt;anonymous@237:62&gt;](<../../daily-price.test.cjs.md#s-a0adfe65189d60f6>) — [electron/daily-price.test.cjs:238](<../../../../../../../electron/daily-price.test.cjs#L238>)
- [&lt;anonymous@237:62&gt;](<../../daily-price.test.cjs.md#s-a0adfe65189d60f6>) — [electron/daily-price.test.cjs:249](<../../../../../../../electron/daily-price.test.cjs#L249>)
- [&lt;anonymous@237:62&gt;](<../../daily-price.test.cjs.md#s-a0adfe65189d60f6>) — [electron/daily-price.test.cjs:261](<../../../../../../../electron/daily-price.test.cjs#L261>)
- [&lt;anonymous@265:68&gt;.&lt;anonymous@266:22&gt;](<../../daily-price.test.cjs.md#s-4ed15f29548b98c0>) — [electron/daily-price.test.cjs:328](<../../../../../../../electron/daily-price.test.cjs#L328>)
- [readRecord](<../knowledge/knowledge-source-access.cjs.md#s-9e369167fc59d0c0>) — [electron/domains/knowledge/knowledge-source-access.cjs:63](<../../../../../../../electron/domains/knowledge/knowledge-source-access.cjs#L63>)
- [validateKnowledgeIndex](<../knowledge/knowledge-store.cjs.md#s-a34679b5e2ad30eb>) — [electron/domains/knowledge/knowledge-store.cjs:40](<../../../../../../../electron/domains/knowledge/knowledge-store.cjs#L40>)
- [&lt;anonymous@62:67&gt;](<../knowledge/knowledge-store.test.cjs.md#s-b9ca9bf54e21c548>) — [electron/domains/knowledge/knowledge-store.test.cjs:63](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L63>)
- [&lt;anonymous@62:67&gt;](<../knowledge/knowledge-store.test.cjs.md#s-b9ca9bf54e21c548>) — [electron/domains/knowledge/knowledge-store.test.cjs:76](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L76>)
- [&lt;anonymous@62:67&gt;](<../knowledge/knowledge-store.test.cjs.md#s-b9ca9bf54e21c548>) — [electron/domains/knowledge/knowledge-store.test.cjs:88](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L88>)
- [&lt;anonymous@62:67&gt;](<../knowledge/knowledge-store.test.cjs.md#s-b9ca9bf54e21c548>) — [electron/domains/knowledge/knowledge-store.test.cjs:90](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L90>)
- [&lt;anonymous@62:67&gt;](<../knowledge/knowledge-store.test.cjs.md#s-b9ca9bf54e21c548>) — [electron/domains/knowledge/knowledge-store.test.cjs:94](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L94>)
- [&lt;anonymous@78:103&gt;](<../../financial-service.test.cjs.md#s-80ffe9c7d658fb82>) — [electron/financial-service.test.cjs:79](<../../../../../../../electron/financial-service.test.cjs#L79>)
- [&lt;anonymous@78:103&gt;](<../../financial-service.test.cjs.md#s-80ffe9c7d658fb82>) — [electron/financial-service.test.cjs:93](<../../../../../../../electron/financial-service.test.cjs#L93>)
- [&lt;anonymous@39:88&gt;](<../../image-parser.test.cjs.md#s-957d590ad2e963c5>) — [electron/image-parser.test.cjs:40](<../../../../../../../electron/image-parser.test.cjs#L40>)
- [&lt;anonymous@39:88&gt;](<../../image-parser.test.cjs.md#s-957d590ad2e963c5>) — [electron/image-parser.test.cjs:55](<../../../../../../../electron/image-parser.test.cjs#L55>)
- [&lt;anonymous@39:88&gt;](<../../image-parser.test.cjs.md#s-957d590ad2e963c5>) — [electron/image-parser.test.cjs:67](<../../../../../../../electron/image-parser.test.cjs#L67>)
- [&lt;anonymous@39:88&gt;](<../../image-parser.test.cjs.md#s-957d590ad2e963c5>) — [electron/image-parser.test.cjs:69](<../../../../../../../electron/image-parser.test.cjs#L69>)
- [fixture](<../../image-parser.test.cjs.md#s-440e32716d73e488>) — [electron/image-parser.test.cjs:159](<../../../../../../../electron/image-parser.test.cjs#L159>)
- [&lt;anonymous@429:82&gt;](<../../image-parser.test.cjs.md#s-9682a67d82ee97cd>) — [electron/image-parser.test.cjs:432](<../../../../../../../electron/image-parser.test.cjs#L432>)
- [&lt;anonymous@429:82&gt;](<../../image-parser.test.cjs.md#s-9682a67d82ee97cd>) — [electron/image-parser.test.cjs:436](<../../../../../../../electron/image-parser.test.cjs#L436>)
- [&lt;anonymous@429:82&gt;](<../../image-parser.test.cjs.md#s-9682a67d82ee97cd>) — [electron/image-parser.test.cjs:440](<../../../../../../../electron/image-parser.test.cjs#L440>)
- [&lt;anonymous@429:82&gt;](<../../image-parser.test.cjs.md#s-9682a67d82ee97cd>) — [electron/image-parser.test.cjs:447](<../../../../../../../electron/image-parser.test.cjs#L447>)
- [&lt;anonymous@429:82&gt;](<../../image-parser.test.cjs.md#s-9682a67d82ee97cd>) — [electron/image-parser.test.cjs:449](<../../../../../../../electron/image-parser.test.cjs#L449>)

Unresolved / external call sites: 68.

- Set — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:8](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L8>)
- Buffer.byteLength — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:34](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L34>)
- text.replace(/^\\uFEFF/, "").split — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:41](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L41>)
- text.replace — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:41](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L41>)
- lines&#91;index&#93;.trim — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:43](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L43>)
- /^#\\s+(&#91;^#&#93;.*?)\\s*$/.exec — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:45](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L45>)
- /^source:\\s*(.+)$/.exec — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:46](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L46>)
- line.startsWith — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:48](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L48>)
- 60 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:238](<../../../../../../../electron/daily-price.test.cjs#L238>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:249](<../../../../../../../electron/daily-price.test.cjs#L249>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:261](<../../../../../../../electron/daily-price.test.cjs#L261>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:328](<../../../../../../../electron/daily-price.test.cjs#L328>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:63](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L63>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:76](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L76>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:88](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L88>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:90](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L90>) — static-call-site; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:94](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L94>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:79](<../../../../../../../electron/financial-service.test.cjs#L79>) — static-call-site; coverage not established.
- [electron/financial-service.test.cjs:93](<../../../../../../../electron/financial-service.test.cjs#L93>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:40](<../../../../../../../electron/image-parser.test.cjs#L40>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:55](<../../../../../../../electron/image-parser.test.cjs#L55>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:67](<../../../../../../../electron/image-parser.test.cjs#L67>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:69](<../../../../../../../electron/image-parser.test.cjs#L69>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:159](<../../../../../../../electron/image-parser.test.cjs#L159>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:432](<../../../../../../../electron/image-parser.test.cjs#L432>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:436](<../../../../../../../electron/image-parser.test.cjs#L436>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:440](<../../../../../../../electron/image-parser.test.cjs#L440>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:447](<../../../../../../../electron/image-parser.test.cjs#L447>) — static-call-site; coverage not established.
- [electron/image-parser.test.cjs:449](<../../../../../../../electron/image-parser.test.cjs#L449>) — static-call-site; coverage not established.
- [electron/daily-price.test.cjs:19](<../../../../../../../electron/daily-price.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:6](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:18](<../../../../../../../electron/financial-service.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:9](<../../../../../../../electron/image-parser.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-ffb3f371591a61f2"></a>

## parseKnowledgeIndex.addSource

[electron/domains/indexing/knowledge-index.cjs:12](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L12>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Adds one validated portable reference to its own source/group container, preserving legacy duplicate rules.

Purpose evidence: jsdoc.

Lexical owner: [parseKnowledgeIndex](<knowledge-index.cjs.md#s-e76591326346a1da>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| container | any | compiler-inferred | required |
| sourceId | any | compiler-inferred | required |
| line | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [parseKnowledgeIndex](<knowledge-index.cjs.md#s-e76591326346a1da>) — [electron/domains/indexing/knowledge-index.cjs:78](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L78>)
- [parseKnowledgeIndex](<knowledge-index.cjs.md#s-e76591326346a1da>) — [electron/domains/indexing/knowledge-index.cjs:206](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L206>)

Unresolved / external call sites: 8.

- /&#91;\\\\:\\0&#93;/.test — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:15](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L15>)
- sourceId.split("/").some — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:16](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L16>)
- sourceId.split — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:16](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L16>)
- errors.push — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:18](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L18>)
- container.sourceIds.includes — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:24](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L24>)
- errors.push — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:25](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L25>)
- container.sourceIds.push — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:31](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L31>)
- container.sourceLines.push — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:32](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L32>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:19](<../../../../../../../electron/daily-price.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:6](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:18](<../../../../../../../electron/financial-service.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:9](<../../../../../../../electron/image-parser.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-3e7520f734fe64db"></a>

## parseKnowledgeIndex.addSource.&lt;anonymous@16:32&gt;

[electron/domains/indexing/knowledge-index.cjs:16](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L16>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [parseKnowledgeIndex.addSource](<knowledge-index.cjs.md#s-ffb3f371591a61f2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| part | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:19](<../../../../../../../electron/daily-price.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:6](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:18](<../../../../../../../electron/financial-service.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:9](<../../../../../../../electron/image-parser.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-d0a52bdd28e1daa1"></a>

## parseKnowledgeIndex.&lt;anonymous@100:11&gt;

[electron/domains/indexing/knowledge-index.cjs:100](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L100>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [parseKnowledgeIndex](<knowledge-index.cjs.md#s-e76591326346a1da>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- item.name.toLowerCase — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:100](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L100>)
- name.toLowerCase — external-or-dynamic-dispatch; [electron/domains/indexing/knowledge-index.cjs:100](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L100>)

**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:19](<../../../../../../../electron/daily-price.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:6](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:18](<../../../../../../../electron/financial-service.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:9](<../../../../../../../electron/image-parser.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-85f30ef19d1c8e66"></a>

## parseKnowledgeIndex.&lt;anonymous@169:37&gt;

[electron/domains/indexing/knowledge-index.cjs:169](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L169>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [parseKnowledgeIndex](<knowledge-index.cjs.md#s-e76591326346a1da>).

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

- [electron/daily-price.test.cjs:19](<../../../../../../../electron/daily-price.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:6](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:18](<../../../../../../../electron/financial-service.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:9](<../../../../../../../electron/image-parser.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-db469c95eb483134"></a>

## parseKnowledgeIndex.&lt;anonymous@197:34&gt;

[electron/domains/indexing/knowledge-index.cjs:197](<../../../../../../../electron/domains/indexing/knowledge-index.cjs#L197>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [parseKnowledgeIndex](<knowledge-index.cjs.md#s-e76591326346a1da>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| price | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/daily-price.test.cjs:19](<../../../../../../../electron/daily-price.test.cjs#L19>) — file-import-only; coverage not established.
- [electron/domains/knowledge/knowledge-store.test.cjs:6](<../../../../../../../electron/domains/knowledge/knowledge-store.test.cjs#L6>) — file-import-only; coverage not established.
- [electron/financial-service.test.cjs:18](<../../../../../../../electron/financial-service.test.cjs#L18>) — file-import-only; coverage not established.
- [electron/image-parser.test.cjs:9](<../../../../../../../electron/image-parser.test.cjs#L9>) — file-import-only; coverage not established.
