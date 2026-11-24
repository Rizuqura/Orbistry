# electron/engines/excel/reader.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [electron/engines/excel/reader.cjs:1](<../../../../../../../electron/engines/excel/reader.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/excel/reader.cjs](<reader.cjs.md#s-302edf524680e6b8>) (Module)
- [partTarget](<reader.cjs.md#s-6ffa8309270ab6d7>) (FunctionDeclaration)
- [relationships](<reader.cjs.md#s-dd91e621033131b2>) (FunctionDeclaration)
- [relationships.open](<reader.cjs.md#s-58b46e53b5b6efed>) (MethodDeclaration)
- [readStyles](<reader.cjs.md#s-80f2f33f34672d27>) (FunctionDeclaration)
- [readStyles.&lt;anonymous@57:41&gt;](<reader.cjs.md#s-47679cb81d149e0e>) (ArrowFunction)
- [readStyles.open](<reader.cjs.md#s-9f845dd1b423e7ee>) (MethodDeclaration)
- [readStyles.close](<reader.cjs.md#s-902c1b6d91ea1c2a>) (MethodDeclaration)
- [readStrings](<reader.cjs.md#s-10a843b6a0d99402>) (FunctionDeclaration)
- [readStrings.open](<reader.cjs.md#s-c884ec020427b4d2>) (MethodDeclaration)
- [readStrings.text](<reader.cjs.md#s-65dfbb1f75d4e43e>) (MethodDeclaration)
- [readStrings.close](<reader.cjs.md#s-9350ea506037b753>) (MethodDeclaration)
- [scanSheet](<reader.cjs.md#s-6c47ea2781b8b406>) (FunctionDeclaration)
- [scanSheet.open](<reader.cjs.md#s-9d431bc6c32e24e6>) (MethodDeclaration)
- [scanSheet.text](<reader.cjs.md#s-1a461a212ededc51>) (MethodDeclaration)
- [scanSheet.close](<reader.cjs.md#s-c6c859ecdb7e7f40>) (MethodDeclaration)
- [scanSheet.sourceOrder](<reader.cjs.md#s-e14022b0faaa5c3d>) (FunctionExpression)
- [scanSheet.include](<reader.cjs.md#s-2b8a8fd14dbc90a1>) (FunctionDeclaration)
- [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>) (FunctionDeclaration)
- [readWorkbook.open](<reader.cjs.md#s-edf5439a2aa19058>) (MethodDeclaration)
- [readWorkbook.officeDocument](<reader.cjs.md#s-dd4f0779c552c491>) (FunctionExpression)
- [readWorkbook.open](<reader.cjs.md#s-a55e36a960bc9823>) (MethodDeclaration)
- [readWorkbook.open.idAttribute](<reader.cjs.md#s-3cc192394a2d50e6>) (FunctionExpression)
- [readWorkbook.supportPart](<reader.cjs.md#s-72d2327a90df4b1b>) (FunctionDeclaration)
- [readWorkbook.supportPart.matching](<reader.cjs.md#s-c78c7d56d2e9ddf2>) (FunctionExpression)
- [readWorkbook.unsupported](<reader.cjs.md#s-7f61281067b6f288>) (FunctionExpression)
- [readWorkbook.external](<reader.cjs.md#s-6dd3a8c6c42c531a>) (FunctionExpression)
- [readWorkbook.formulas](<reader.cjs.md#s-db85b2ec68661c19>) (FunctionExpression)
- [readWorkbook.formulas.formula](<reader.cjs.md#s-2b8f714804aca7dd>) (FunctionExpression)

<a id="s-302edf524680e6b8"></a>

## electron/engines/excel/reader.cjs

[electron/engines/excel/reader.cjs:1](<../../../../../../../electron/engines/excel/reader.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [electron/engines/excel/reader.cjs:1](<../../../../../../../electron/engines/excel/reader.cjs#L1>)
- require — module-loader; [electron/engines/excel/reader.cjs:2](<../../../../../../../electron/engines/excel/reader.cjs#L2>)
- require — module-loader; [electron/engines/excel/reader.cjs:3](<../../../../../../../electron/engines/excel/reader.cjs#L3>)
- require — module-loader; [electron/engines/excel/reader.cjs:4](<../../../../../../../electron/engines/excel/reader.cjs#L4>)
- require — module-loader; [electron/engines/excel/reader.cjs:12](<../../../../../../../electron/engines/excel/reader.cjs#L12>)
- Set — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:13](<../../../../../../../electron/engines/excel/reader.cjs#L13>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6ffa8309270ab6d7"></a>

## partTarget

[electron/engines/excel/reader.cjs:19](<../../../../../../../electron/engines/excel/reader.cjs#L19>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Resolves package-internal relationship targets without filesystem access, URI fetching or parent traversal outside the archive.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/excel/reader.cjs](<reader.cjs.md#s-302edf524680e6b8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| base | any | compiler-inferred | required |
| target | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [relationships.open](<reader.cjs.md#s-58b46e53b5b6efed>) — [electron/engines/excel/reader.cjs:47](<../../../../../../../electron/engines/excel/reader.cjs#L47>)

Unresolved / external call sites: 9.

- /&#91;\\\\?#&#93;&#124;^&#91;a-z&#93;&#91;a-z0-9+.-&#93;*:/i.test — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:20](<../../../../../../../electron/engines/excel/reader.cjs#L20>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:21](<../../../../../../../electron/engines/excel/reader.cjs#L21>)
- path.posix.normalize — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:22](<../../../../../../../electron/engines/excel/reader.cjs#L22>)
- target.startsWith — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:23](<../../../../../../../electron/engines/excel/reader.cjs#L23>)
- target.slice — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:24](<../../../../../../../electron/engines/excel/reader.cjs#L24>)
- path.posix.join — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:25](<../../../../../../../electron/engines/excel/reader.cjs#L25>)
- path.posix.dirname — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:25](<../../../../../../../electron/engines/excel/reader.cjs#L25>)
- resolved.startsWith — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:27](<../../../../../../../electron/engines/excel/reader.cjs#L27>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-dd91e621033131b2"></a>

## relationships

[electron/engines/excel/reader.cjs:33](<../../../../../../../electron/engines/excel/reader.cjs#L33>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Loads inert package relationships. External references are recorded but never followed.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/excel/reader.cjs](<reader.cjs.md#s-302edf524680e6b8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| archive | any | compiler-inferred | required |
| name | any | compiler-inferred | required |
| base | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [scanXml](<archive.cjs.md#s-dd6b7a2034ed0d5f>) — [electron/engines/excel/reader.cjs:35](<../../../../../../../electron/engines/excel/reader.cjs#L35>)

**Called by (statically resolved):**

- [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>) — [electron/engines/excel/reader.cjs:338](<../../../../../../../electron/engines/excel/reader.cjs#L338>)
- [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>) — [electron/engines/excel/reader.cjs:352](<../../../../../../../electron/engines/excel/reader.cjs#L352>)

Unresolved / external call sites: 2.

- Map — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:34](<../../../../../../../electron/engines/excel/reader.cjs#L34>)
- archive.read — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:35](<../../../../../../../electron/engines/excel/reader.cjs#L35>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-58b46e53b5b6efed"></a>

## relationships.open

[electron/engines/excel/reader.cjs:37](<../../../../../../../electron/engines/excel/reader.cjs#L37>) · MethodDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Records each distinct relationship by its workbook-local identity.

Purpose evidence: jsdoc.

Lexical owner: [relationships](<reader.cjs.md#s-dd91e621033131b2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tag | any | compiler-inferred | required |
| attributes | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [partTarget](<reader.cjs.md#s-6ffa8309270ab6d7>) — [electron/engines/excel/reader.cjs:47](<../../../../../../../electron/engines/excel/reader.cjs#L47>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- result.has — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:39](<../../../../../../../electron/engines/excel/reader.cjs#L39>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:40](<../../../../../../../electron/engines/excel/reader.cjs#L40>)
- result.set — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:41](<../../../../../../../electron/engines/excel/reader.cjs#L41>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-80f2f33f34672d27"></a>

## readStyles

[electron/engines/excel/reader.cjs:55](<../../../../../../../electron/engines/excel/reader.cjs#L55>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Reads explicit style indices and number formats without applying visual layout or locale heuristics.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/excel/reader.cjs](<reader.cjs.md#s-302edf524680e6b8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| archive | any | compiler-inferred | required |
| name | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [scanXml](<archive.cjs.md#s-dd6b7a2034ed0d5f>) — [electron/engines/excel/reader.cjs:62](<../../../../../../../electron/engines/excel/reader.cjs#L62>)

**Called by (statically resolved):**

- [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>) — [electron/engines/excel/reader.cjs:402](<../../../../../../../electron/engines/excel/reader.cjs#L402>)

Unresolved / external call sites: 4.

- Map — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:56](<../../../../../../../electron/engines/excel/reader.cjs#L56>)
- Object.entries(BUILTIN_FORMATS).map — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:57](<../../../../../../../electron/engines/excel/reader.cjs#L57>)
- Object.entries — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:57](<../../../../../../../electron/engines/excel/reader.cjs#L57>)
- archive.read — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:62](<../../../../../../../electron/engines/excel/reader.cjs#L62>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-47679cb81d149e0e"></a>

## readStyles.&lt;anonymous@57:41&gt;

[electron/engines/excel/reader.cjs:57](<../../../../../../../electron/engines/excel/reader.cjs#L57>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [readStyles](<reader.cjs.md#s-80f2f33f34672d27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| &#91;id, code&#93; | &#91;any, any&#93; | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Number — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:57](<../../../../../../../electron/engines/excel/reader.cjs#L57>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9f845dd1b423e7ee"></a>

## readStyles.open

[electron/engines/excel/reader.cjs:64](<../../../../../../../electron/engines/excel/reader.cjs#L64>) · MethodDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Retains only number-format metadata relevant to scalar meaning.

Purpose evidence: jsdoc.

Lexical owner: [readStyles](<reader.cjs.md#s-80f2f33f34672d27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tag | any | compiler-inferred | required |
| attributes | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- formats.set — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:66](<../../../../../../../electron/engines/excel/reader.cjs#L66>)
- Number — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:66](<../../../../../../../electron/engines/excel/reader.cjs#L66>)
- Number — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:69](<../../../../../../../electron/engines/excel/reader.cjs#L69>)
- styles.push — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:70](<../../../../../../../electron/engines/excel/reader.cjs#L70>)
- formats.get — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:70](<../../../../../../../electron/engines/excel/reader.cjs#L70>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-902c1b6d91ea1c2a"></a>

## readStyles.close

[electron/engines/excel/reader.cjs:74](<../../../../../../../electron/engines/excel/reader.cjs#L74>) · MethodDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Ends the cell-format collection so style-XF records cannot be confused with cell styles.

Purpose evidence: jsdoc.

Lexical owner: [readStyles](<reader.cjs.md#s-80f2f33f34672d27>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tag | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-10a843b6a0d99402"></a>

## readStrings

[electron/engines/excel/reader.cjs:82](<../../../../../../../electron/engines/excel/reader.cjs#L82>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Reads shared rich text as plain text in run order, excluding phonetic annotation text.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/excel/reader.cjs](<reader.cjs.md#s-302edf524680e6b8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| archive | any | compiler-inferred | required |
| name | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [scanXml](<archive.cjs.md#s-dd6b7a2034ed0d5f>) — [electron/engines/excel/reader.cjs:89](<../../../../../../../electron/engines/excel/reader.cjs#L89>)

**Called by (statically resolved):**

- [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>) — [electron/engines/excel/reader.cjs:403](<../../../../../../../electron/engines/excel/reader.cjs#L403>)

Unresolved / external call sites: 1.

- archive.read — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:89](<../../../../../../../electron/engines/excel/reader.cjs#L89>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c884ec020427b4d2"></a>

## readStrings.open

[electron/engines/excel/reader.cjs:91](<../../../../../../../electron/engines/excel/reader.cjs#L91>) · MethodDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Tracks the current shared string and its visible text runs.

Purpose evidence: jsdoc.

Lexical owner: [readStrings](<reader.cjs.md#s-10a843b6a0d99402>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tag | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-65dfbb1f75d4e43e"></a>

## readStrings.text

[electron/engines/excel/reader.cjs:100](<../../../../../../../electron/engines/excel/reader.cjs#L100>) · MethodDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Accumulates bounded source text, preserving whitespace and embedded line breaks.

Purpose evidence: jsdoc.

Lexical owner: [readStrings](<reader.cjs.md#s-10a843b6a0d99402>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:103](<../../../../../../../electron/engines/excel/reader.cjs#L103>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9350ea506037b753"></a>

## readStrings.close

[electron/engines/excel/reader.cjs:106](<../../../../../../../electron/engines/excel/reader.cjs#L106>) · MethodDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Stores one shared string without expanding it into duplicate cells.

Purpose evidence: jsdoc.

Lexical owner: [readStrings](<reader.cjs.md#s-10a843b6a0d99402>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tag | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [decodeString](<cells.cjs.md#s-d206b02e64680711>) — [electron/engines/excel/reader.cjs:110](<../../../../../../../electron/engines/excel/reader.cjs#L110>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- strings.push — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:110](<../../../../../../../electron/engines/excel/reader.cjs#L110>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:113](<../../../../../../../electron/engines/excel/reader.cjs#L113>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6c47ea2781b8b406"></a>

## scanSheet

[electron/engines/excel/reader.cjs:121](<../../../../../../../electron/engines/excel/reader.cjs#L121>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Scans sparse cells in source coordinates, deriving occupied bounds from meaningful data and merge extents rather than a potentially stale dimension.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/excel/reader.cjs](<reader.cjs.md#s-302edf524680e6b8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| bytes | any | compiler-inferred | required |
| sheet | any | compiler-inferred | required |
| context | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [scanXml](<archive.cjs.md#s-dd6b7a2034ed0d5f>) — [electron/engines/excel/reader.cjs:133](<../../../../../../../electron/engines/excel/reader.cjs#L133>)
- [scanSheet.include](<reader.cjs.md#s-2b8a8fd14dbc90a1>) — [electron/engines/excel/reader.cjs:291](<../../../../../../../electron/engines/excel/reader.cjs#L291>)
- [sourceRange](<cells.cjs.md#s-41ef365c38be5e42>) — [electron/engines/excel/reader.cjs:293](<../../../../../../../electron/engines/excel/reader.cjs#L293>)
- [scanSheet.include](<reader.cjs.md#s-2b8a8fd14dbc90a1>) — [electron/engines/excel/reader.cjs:294](<../../../../../../../electron/engines/excel/reader.cjs#L294>)
- [columnLabel](<cells.cjs.md#s-ac5b4cb26566b461>) — [electron/engines/excel/reader.cjs:303](<../../../../../../../electron/engines/excel/reader.cjs#L303>)
- [columnLabel](<cells.cjs.md#s-ac5b4cb26566b461>) — [electron/engines/excel/reader.cjs:303](<../../../../../../../electron/engines/excel/reader.cjs#L303>)

**Called by (statically resolved):**

- [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>) — [electron/engines/excel/reader.cjs:408](<../../../../../../../electron/engines/excel/reader.cjs#L408>)

Unresolved / external call sites: 5.

- Set — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:124](<../../../../../../../electron/engines/excel/reader.cjs#L124>)
- Set — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:125](<../../../../../../../electron/engines/excel/reader.cjs#L125>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:270](<../../../../../../../electron/engines/excel/reader.cjs#L270>)
- cells.sort — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:272](<../../../../../../../electron/engines/excel/reader.cjs#L272>)
- warnings.add — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:297](<../../../../../../../electron/engines/excel/reader.cjs#L297>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9d431bc6c32e24e6"></a>

## scanSheet.open

[electron/engines/excel/reader.cjs:135](<../../../../../../../electron/engines/excel/reader.cjs#L135>) · MethodDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Tracks source cell records; unrelated worksheet features remain inert and produce explicit warnings.

Purpose evidence: jsdoc.

Lexical owner: [scanSheet](<reader.cjs.md#s-6c47ea2781b8b406>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tag | any | compiler-inferred | required |
| attributes | any | compiler-inferred | required |
| namespace | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [columnLabel](<cells.cjs.md#s-ac5b4cb26566b461>) — [electron/engines/excel/reader.cjs:149](<../../../../../../../electron/engines/excel/reader.cjs#L149>)
- [coordinate](<cells.cjs.md#s-76ebba55c47be81e>) — [electron/engines/excel/reader.cjs:150](<../../../../../../../electron/engines/excel/reader.cjs#L150>)
- [sourceRange](<cells.cjs.md#s-41ef365c38be5e42>) — [electron/engines/excel/reader.cjs:180](<../../../../../../../electron/engines/excel/reader.cjs#L180>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 11.

- MAIN_NAMESPACES.has — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:137](<../../../../../../../electron/engines/excel/reader.cjs#L137>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:138](<../../../../../../../electron/engines/excel/reader.cjs#L138>)
- Number — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:142](<../../../../../../../electron/engines/excel/reader.cjs#L142>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:147](<../../../../../../../electron/engines/excel/reader.cjs#L147>)
- seen.has — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:151](<../../../../../../../electron/engines/excel/reader.cjs#L151>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:152](<../../../../../../../electron/engines/excel/reader.cjs#L152>)
- seen.add — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:153](<../../../../../../../electron/engines/excel/reader.cjs#L153>)
- Number — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:159](<../../../../../../../electron/engines/excel/reader.cjs#L159>)
- 3 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1a461a212ededc51"></a>

## scanSheet.text

[electron/engines/excel/reader.cjs:199](<../../../../../../../electron/engines/excel/reader.cjs#L199>) · MethodDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Captures raw scalar/formula text without coercing empty values into zero.

Purpose evidence: jsdoc.

Lexical owner: [scanSheet](<reader.cjs.md#s-6c47ea2781b8b406>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:203](<../../../../../../../electron/engines/excel/reader.cjs#L203>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c6c859ecdb7e7f40"></a>

## scanSheet.close

[electron/engines/excel/reader.cjs:207](<../../../../../../../electron/engines/excel/reader.cjs#L207>) · MethodDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Finalizes each explicit value/formula independently, preserving missing caches and sparse blank positions.

Purpose evidence: jsdoc.

Lexical owner: [scanSheet](<reader.cjs.md#s-6c47ea2781b8b406>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tag | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [scalar](<cells.cjs.md#s-4eb4d6705cc6fcdc>) — [electron/engines/excel/reader.cjs:222](<../../../../../../../electron/engines/excel/reader.cjs#L222>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- &#91;"v", "f", "t"&#93;.includes — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:208](<../../../../../../../electron/engines/excel/reader.cjs#L208>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:212](<../../../../../../../electron/engines/excel/reader.cjs#L212>)
- warnings.add — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:256](<../../../../../../../electron/engines/excel/reader.cjs#L256>)
- warnings.add — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:260](<../../../../../../../electron/engines/excel/reader.cjs#L260>)
- warnings.add — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:264](<../../../../../../../electron/engines/excel/reader.cjs#L264>)
- cells.push — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:265](<../../../../../../../electron/engines/excel/reader.cjs#L265>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-e14022b0faaa5c3d"></a>

## scanSheet.sourceOrder

[electron/engines/excel/reader.cjs:272](<../../../../../../../electron/engines/excel/reader.cjs#L272>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scanSheet](<reader.cjs.md#s-6c47ea2781b8b406>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: number (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2b8a8fd14dbc90a1"></a>

## scanSheet.include

[electron/engines/excel/reader.cjs:277](<../../../../../../../electron/engines/excel/reader.cjs#L277>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Expands occupied bounds while leaving all unstored interior cells implicit and blank.

Purpose evidence: jsdoc.

Lexical owner: [scanSheet](<reader.cjs.md#s-6c47ea2781b8b406>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| startRow | any | compiler-inferred | required |
| startColumn | any | compiler-inferred | required |
| endRow | any | compiler-inferred | optional, default present |
| endColumn | any | compiler-inferred | optional, default present |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [scanSheet](<reader.cjs.md#s-6c47ea2781b8b406>) — [electron/engines/excel/reader.cjs:291](<../../../../../../../electron/engines/excel/reader.cjs#L291>)
- [scanSheet](<reader.cjs.md#s-6c47ea2781b8b406>) — [electron/engines/excel/reader.cjs:294](<../../../../../../../electron/engines/excel/reader.cjs#L294>)

Unresolved / external call sites: 4.

- Math.min — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:285](<../../../../../../../electron/engines/excel/reader.cjs#L285>)
- Math.min — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:286](<../../../../../../../electron/engines/excel/reader.cjs#L286>)
- Math.max — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:287](<../../../../../../../electron/engines/excel/reader.cjs#L287>)
- Math.max — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:288](<../../../../../../../electron/engines/excel/reader.cjs#L288>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7de6d1652c8afc11"></a>

## readWorkbook

[electron/engines/excel/reader.cjs:313](<../../../../../../../electron/engines/excel/reader.cjs#L313>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Reads a bounded OOXML workbook into the authoritative structured model. No file writes, formula execution, link resolution or network access occurs.

Purpose evidence: jsdoc.

Exported as: readWorkbook ([electron/engines/excel/reader.cjs:1](<../../../../../../../electron/engines/excel/reader.cjs#L1>)).

Lexical owner: [electron/engines/excel/reader.cjs](<reader.cjs.md#s-302edf524680e6b8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| bytes | any | compiler-inferred | required |
| filename | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [openArchive](<archive.cjs.md#s-c55324de9f4e9cf0>) — [electron/engines/excel/reader.cjs:319](<../../../../../../../electron/engines/excel/reader.cjs#L319>)
- [scanXml](<archive.cjs.md#s-dd6b7a2034ed0d5f>) — [electron/engines/excel/reader.cjs:321](<../../../../../../../electron/engines/excel/reader.cjs#L321>)
- [relationships](<reader.cjs.md#s-dd91e621033131b2>) — [electron/engines/excel/reader.cjs:338](<../../../../../../../electron/engines/excel/reader.cjs#L338>)
- [relationships](<reader.cjs.md#s-dd91e621033131b2>) — [electron/engines/excel/reader.cjs:352](<../../../../../../../electron/engines/excel/reader.cjs#L352>)
- [scanXml](<archive.cjs.md#s-dd6b7a2034ed0d5f>) — [electron/engines/excel/reader.cjs:356](<../../../../../../../electron/engines/excel/reader.cjs#L356>)
- [readStyles](<reader.cjs.md#s-80f2f33f34672d27>) — [electron/engines/excel/reader.cjs:402](<../../../../../../../electron/engines/excel/reader.cjs#L402>)
- [readWorkbook.supportPart](<reader.cjs.md#s-72d2327a90df4b1b>) — [electron/engines/excel/reader.cjs:402](<../../../../../../../electron/engines/excel/reader.cjs#L402>)
- [readStrings](<reader.cjs.md#s-10a843b6a0d99402>) — [electron/engines/excel/reader.cjs:403](<../../../../../../../electron/engines/excel/reader.cjs#L403>)
- [readWorkbook.supportPart](<reader.cjs.md#s-72d2327a90df4b1b>) — [electron/engines/excel/reader.cjs:403](<../../../../../../../electron/engines/excel/reader.cjs#L403>)
- [scanSheet](<reader.cjs.md#s-6c47ea2781b8b406>) — [electron/engines/excel/reader.cjs:408](<../../../../../../../electron/engines/excel/reader.cjs#L408>)

**Called by (statically resolved):**

- [run](<worker.cjs.md#s-99969392f81e3cf1>) — [electron/engines/excel/worker.cjs:65](<../../../../../../../electron/engines/excel/worker.cjs#L65>)

Unresolved / external call sites: 25.

- path.extname(filename).toLowerCase — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:316](<../../../../../../../electron/engines/excel/reader.cjs#L316>)
- path.extname — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:316](<../../../../../../../electron/engines/excel/reader.cjs#L316>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:318](<../../../../../../../electron/engines/excel/reader.cjs#L318>)
- archive.read — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:321](<../../../../../../../electron/engines/excel/reader.cjs#L321>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:337](<../../../../../../../electron/engines/excel/reader.cjs#L337>)
- &#91;...rootRelations.values()&#93;.find — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:339](<../../../../../../../electron/engines/excel/reader.cjs#L339>)
- rootRelations.values — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:339](<../../../../../../../electron/engines/excel/reader.cjs#L339>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:345](<../../../../../../../electron/engines/excel/reader.cjs#L345>)
- 17 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-edf5439a2aa19058"></a>

## readWorkbook.open

[electron/engines/excel/reader.cjs:323](<../../../../../../../electron/engines/excel/reader.cjs#L323>) · MethodDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Rejects macro-enabled workbook content even when renamed with an XLSX extension.

Purpose evidence: jsdoc.

Lexical owner: [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tag | any | compiler-inferred | required |
| attributes | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- attributes.ContentType?.includes — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:325](<../../../../../../../electron/engines/excel/reader.cjs#L325>)
- attributes.ContentType?.includes — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:326](<../../../../../../../electron/engines/excel/reader.cjs#L326>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:328](<../../../../../../../electron/engines/excel/reader.cjs#L328>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-dd4f0779c552c491"></a>

## readWorkbook.officeDocument

[electron/engines/excel/reader.cjs:340](<../../../../../../../electron/engines/excel/reader.cjs#L340>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- item.type?.endsWith — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:341](<../../../../../../../electron/engines/excel/reader.cjs#L341>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a55e36a960bc9823"></a>

## readWorkbook.open

[electron/engines/excel/reader.cjs:358](<../../../../../../../electron/engines/excel/reader.cjs#L358>) · MethodDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Preserves workbook sheet order, visibility and the explicit 1900/1904 date system.

Purpose evidence: jsdoc.

Lexical owner: [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| tag | any | compiler-inferred | required |
| attributes | any | compiler-inferred | required |
| namespace | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 10.

- MAIN_NAMESPACES.has — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:360](<../../../../../../../electron/engines/excel/reader.cjs#L360>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:361](<../../../../../../../electron/engines/excel/reader.cjs#L361>)
- &#91;"1", "true"&#93;.includes — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:364](<../../../../../../../electron/engines/excel/reader.cjs#L364>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:368](<../../../../../../../electron/engines/excel/reader.cjs#L368>)
- Object.entries(attributes).find — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:369](<../../../../../../../electron/engines/excel/reader.cjs#L369>)
- Object.entries — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:369](<../../../../../../../electron/engines/excel/reader.cjs#L369>)
- relations.get — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:374](<../../../../../../../electron/engines/excel/reader.cjs#L374>)
- relationship.type?.endsWith — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:379](<../../../../../../../electron/engines/excel/reader.cjs#L379>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3cc192394a2d50e6"></a>

## readWorkbook.open.idAttribute

[electron/engines/excel/reader.cjs:370](<../../../../../../../electron/engines/excel/reader.cjs#L370>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [readWorkbook.open](<reader.cjs.md#s-a55e36a960bc9823>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| &#91;name&#93; | &#91;any&#93; | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- name.includes — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:371](<../../../../../../../electron/engines/excel/reader.cjs#L371>)
- name.split(":").at — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:371](<../../../../../../../electron/engines/excel/reader.cjs#L371>)
- name.split — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:371](<../../../../../../../electron/engines/excel/reader.cjs#L371>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-72d2327a90df4b1b"></a>

## readWorkbook.supportPart

[electron/engines/excel/reader.cjs:395](<../../../../../../../electron/engines/excel/reader.cjs#L395>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Finds an internal workbook support part without following external targets.

Purpose evidence: jsdoc.

Lexical owner: [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| type | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>) — [electron/engines/excel/reader.cjs:402](<../../../../../../../electron/engines/excel/reader.cjs#L402>)
- [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>) — [electron/engines/excel/reader.cjs:403](<../../../../../../../electron/engines/excel/reader.cjs#L403>)

Unresolved / external call sites: 2.

- &#91;...relations.values()&#93;.find — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:396](<../../../../../../../electron/engines/excel/reader.cjs#L396>)
- relations.values — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:396](<../../../../../../../electron/engines/excel/reader.cjs#L396>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c78c7d56d2e9ddf2"></a>

## readWorkbook.supportPart.matching

[electron/engines/excel/reader.cjs:396](<../../../../../../../electron/engines/excel/reader.cjs#L396>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [readWorkbook.supportPart](<reader.cjs.md#s-72d2327a90df4b1b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- item.type?.endsWith — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:397](<../../../../../../../electron/engines/excel/reader.cjs#L397>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7f61281067b6f288"></a>

## readWorkbook.unsupported

[electron/engines/excel/reader.cjs:413](<../../../../../../../electron/engines/excel/reader.cjs#L413>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- /(?:externalLinks&#124;charts&#124;pivot&#124;embeddings&#124;connections&#124;vbaProject)/i.test — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:414](<../../../../../../../electron/engines/excel/reader.cjs#L414>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6dd3a8c6c42c531a"></a>

## readWorkbook.external

[electron/engines/excel/reader.cjs:418](<../../../../../../../electron/engines/excel/reader.cjs#L418>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>).

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

No direct static call/import association found; coverage unknown.

<a id="s-db85b2ec68661c19"></a>

## readWorkbook.formulas

[electron/engines/excel/reader.cjs:426](<../../../../../../../electron/engines/excel/reader.cjs#L426>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sheet | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- sheet.cells.some — external-or-dynamic-dispatch; [electron/engines/excel/reader.cjs:427](<../../../../../../../electron/engines/excel/reader.cjs#L427>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2b8f714804aca7dd"></a>

## readWorkbook.formulas.formula

[electron/engines/excel/reader.cjs:427](<../../../../../../../electron/engines/excel/reader.cjs#L427>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [readWorkbook.formulas](<reader.cjs.md#s-db85b2ec68661c19>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| cell | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
