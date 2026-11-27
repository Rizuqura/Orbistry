# electron/engines/backend-identity/markdown-chunker.cjs: symbols

[Atlas](<../../../../../README.md>) / [Backend Identity Engine](<../../../../../modules/identity.md>) / [electron/engines/backend-identity/markdown-chunker.cjs:1](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/backend-identity/markdown-chunker.cjs](<markdown-chunker.cjs.md#s-6cc2fc3a5e3b8dd8>) (Module)
- [chunkMarkdown](<markdown-chunker.cjs.md#s-647ff3dd5dad92e8>) (FunctionDeclaration)
- [chunkMarkdown.section](<markdown-chunker.cjs.md#s-ee891e9bc8ebaa48>) (FunctionDeclaration)
- [chunkMarkdown.&lt;anonymous@116:31&gt;](<markdown-chunker.cjs.md#s-861aace09aed2564>) (ArrowFunction)

<a id="s-6cc2fc3a5e3b8dd8"></a>

## electron/engines/backend-identity/markdown-chunker.cjs

[electron/engines/backend-identity/markdown-chunker.cjs:1](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L1>) · Module · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/engines/backend-identity/markdown-chunker.cjs:1](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L1>)
- require — module-loader; [electron/engines/backend-identity/markdown-chunker.cjs:2](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L2>)

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:18](<../../../../../../../electron/backend-identity.test.cjs#L18>) — file-import-only; coverage not established.

<a id="s-647ff3dd5dad92e8"></a>

## chunkMarkdown

[electron/engines/backend-identity/markdown-chunker.cjs:5](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L5>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Streams deterministic, non-overlapping source slices by ATX heading and paragraph; fenced headings stay literal data. Offsets are original UTF-16 offsets and line numbers are one-based.

Purpose evidence: jsdoc.

Exported as: chunkMarkdown ([electron/engines/backend-identity/markdown-chunker.cjs:1](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L1>)).

Lexical owner: [electron/engines/backend-identity/markdown-chunker.cjs](<markdown-chunker.cjs.md#s-6cc2fc3a5e3b8dd8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| content | any | compiler-inferred | required |
| {     entityId,     sourceId,     sourceVersion,     origin = "source",     markdown = true,     maxTokens = LIMITS.chunkTokens,   } | { entityId: any; sourceId: any; sourceVersion: any; origin?: string; markdown?: boolean; maxTokens?: any; } | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [chunkMarkdown.section](<markdown-chunker.cjs.md#s-ee891e9bc8ebaa48>) — [electron/engines/backend-identity/markdown-chunker.cjs:112](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L112>)
- [chunkMarkdown.section](<markdown-chunker.cjs.md#s-ee891e9bc8ebaa48>) — [electron/engines/backend-identity/markdown-chunker.cjs:123](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L123>)

**Called by (statically resolved):**

- [&lt;anonymous@270:118&gt;](<../../backend-identity.test.cjs.md#s-06d03ee2d489e037>) — [electron/backend-identity.test.cjs:281](<../../../../../../../electron/backend-identity.test.cjs#L281>)
- [&lt;anonymous@270:118&gt;](<../../backend-identity.test.cjs.md#s-06d03ee2d489e037>) — [electron/backend-identity.test.cjs:307](<../../../../../../../electron/backend-identity.test.cjs#L307>)
- [&lt;anonymous@270:118&gt;](<../../backend-identity.test.cjs.md#s-06d03ee2d489e037>) — [electron/backend-identity.test.cjs:308](<../../../../../../../electron/backend-identity.test.cjs#L308>)
- [&lt;anonymous@311:107&gt;](<../../backend-identity.test.cjs.md#s-d1130f1134dcd1ff>) — [electron/backend-identity.test.cjs:316](<../../../../../../../electron/backend-identity.test.cjs#L316>)
- [generate.compileIdentity.encodeSource](<identity-compiler.cjs.md#s-80e161a08d14a00f>) — [electron/engines/backend-identity/identity-compiler.cjs:294](<../../../../../../../electron/engines/backend-identity/identity-compiler.cjs#L294>)

Unresolved / external call sites: 13.

- Number.isInteger — external-or-dynamic-dispatch; [electron/engines/backend-identity/markdown-chunker.cjs:18](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L18>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/markdown-chunker.cjs:22](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L22>)
- content.matchAll — external-or-dynamic-dispatch; [electron/engines/backend-identity/markdown-chunker.cjs:91](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L91>)
- /^ {0,3}(&#96;{3,}&#124;~{3,})/.exec — external-or-dynamic-dispatch; [electron/engines/backend-identity/markdown-chunker.cjs:93](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L93>)
- /^ {0,3}(?:&#96;+&#124;~+)\\s*$/.test — external-or-dynamic-dispatch; [electron/engines/backend-identity/markdown-chunker.cjs:99](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L99>)
- /^ {0,3}(#{1,6})&#91; \\t&#93;+(.+?)&#91; \\t&#93;*#*&#91; \\t&#93;*(?:\\r?\\n)?$/.exec — external-or-dynamic-dispatch; [electron/engines/backend-identity/markdown-chunker.cjs:106](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L106>)
- Error — external-or-dynamic-dispatch; [electron/engines/backend-identity/markdown-chunker.cjs:109](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L109>)
- stack.at — external-or-dynamic-dispatch; [electron/engines/backend-identity/markdown-chunker.cjs:113](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L113>)
- 5 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:281](<../../../../../../../electron/backend-identity.test.cjs#L281>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:307](<../../../../../../../electron/backend-identity.test.cjs#L307>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:308](<../../../../../../../electron/backend-identity.test.cjs#L308>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:316](<../../../../../../../electron/backend-identity.test.cjs#L316>) — static-call-site; coverage not established.
- [electron/backend-identity.test.cjs:18](<../../../../../../../electron/backend-identity.test.cjs#L18>) — file-import-only; coverage not established.

<a id="s-ee891e9bc8ebaa48"></a>

## chunkMarkdown.section

[electron/engines/backend-identity/markdown-chunker.cjs:31](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L31>) · FunctionDeclaration · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

Subdivides one section at paragraphs/lines when possible, preserving every original character and Unicode code point.

Purpose evidence: jsdoc.

Lexical owner: [chunkMarkdown](<markdown-chunker.cjs.md#s-647ff3dd5dad92e8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| end | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [estimateTokens](<../../shared/token-budget.cjs.md#s-81eabfdb3a44d606>) — [electron/engines/backend-identity/markdown-chunker.cjs:81](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L81>)

**Called by (statically resolved):**

- [chunkMarkdown](<markdown-chunker.cjs.md#s-647ff3dd5dad92e8>) — [electron/engines/backend-identity/markdown-chunker.cjs:112](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L112>)
- [chunkMarkdown](<markdown-chunker.cjs.md#s-647ff3dd5dad92e8>) — [electron/engines/backend-identity/markdown-chunker.cjs:123](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L123>)

Unresolved / external call sites: 14.

- String.fromCodePoint — external-or-dynamic-dispatch; [electron/engines/backend-identity/markdown-chunker.cjs:38](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L38>)
- content.codePointAt — external-or-dynamic-dispatch; [electron/engines/backend-identity/markdown-chunker.cjs:38](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L38>)
- Buffer.byteLength — external-or-dynamic-dispatch; [electron/engines/backend-identity/markdown-chunker.cjs:39](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L39>)
- content.slice — external-or-dynamic-dispatch; [electron/engines/backend-identity/markdown-chunker.cjs:45](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L45>)
- part.lastIndexOf — external-or-dynamic-dispatch; [electron/engines/backend-identity/markdown-chunker.cjs:46](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L46>)
- part.lastIndexOf — external-or-dynamic-dispatch; [electron/engines/backend-identity/markdown-chunker.cjs:47](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L47>)
- content.slice — external-or-dynamic-dispatch; [electron/engines/backend-identity/markdown-chunker.cjs:56](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L56>)
- text.match — external-or-dynamic-dispatch; [electron/engines/backend-identity/markdown-chunker.cjs:58](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L58>)
- 6 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:18](<../../../../../../../electron/backend-identity.test.cjs#L18>) — file-import-only; coverage not established.

<a id="s-861aace09aed2564"></a>

## chunkMarkdown.&lt;anonymous@116:31&gt;

[electron/engines/backend-identity/markdown-chunker.cjs:116](<../../../../../../../electron/engines/backend-identity/markdown-chunker.cjs#L116>) · ArrowFunction · production · [Backend Identity Engine](<../../../../../modules/identity.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [chunkMarkdown](<markdown-chunker.cjs.md#s-647ff3dd5dad92e8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/backend-identity.test.cjs:18](<../../../../../../../electron/backend-identity.test.cjs#L18>) — file-import-only; coverage not established.
