# electron/engines/excel/archive.cjs: symbols

[Atlas](<../../../../../README.md>) / [Built-in Engines and data adapters](<../../../../../modules/engines.md>) / [electron/engines/excel/archive.cjs:1](<../../../../../../../electron/engines/excel/archive.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/excel/archive.cjs](<archive.cjs.md#s-35ce0e2272717f7b>) (Module)
- [validateDirectory](<archive.cjs.md#s-4141a9f9c031a9b0>) (FunctionDeclaration)
- [openArchive](<archive.cjs.md#s-c55324de9f4e9cf0>) (FunctionDeclaration)
- [openArchive.&lt;anonymous@54:28&gt;](<archive.cjs.md#s-59873146571ae11c>) (ArrowFunction)
- [openArchive.read](<archive.cjs.md#s-f4871bba2f9a3bf0>) (FunctionDeclaration)
- [scanXml](<archive.cjs.md#s-dd6b7a2034ed0d5f>) (FunctionDeclaration)
- [scanXml.instruction](<archive.cjs.md#s-0c1117bd37fc86a6>) (FunctionExpression)
- [scanXml.open](<archive.cjs.md#s-146dacf2062bf70e>) (FunctionExpression)
- [scanXml.text](<archive.cjs.md#s-f37e8fe395c2dab7>) (FunctionExpression)
- [scanXml.close](<archive.cjs.md#s-854b71272ad18e03>) (FunctionExpression)

<a id="s-35ce0e2272717f7b"></a>

## electron/engines/excel/archive.cjs

[electron/engines/excel/archive.cjs:1](<../../../../../../../electron/engines/excel/archive.cjs#L1>) · Module · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [electron/engines/excel/archive.cjs:1](<../../../../../../../electron/engines/excel/archive.cjs#L1>)
- require — module-loader; [electron/engines/excel/archive.cjs:2](<../../../../../../../electron/engines/excel/archive.cjs#L2>)
- require — module-loader; [electron/engines/excel/archive.cjs:3](<../../../../../../../electron/engines/excel/archive.cjs#L3>)
- require — module-loader; [electron/engines/excel/archive.cjs:4](<../../../../../../../electron/engines/excel/archive.cjs#L4>)
- require — module-loader; [electron/engines/excel/archive.cjs:5](<../../../../../../../electron/engines/excel/archive.cjs#L5>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4141a9f9c031a9b0"></a>

## validateDirectory

[electron/engines/excel/archive.cjs:8](<../../../../../../../electron/engines/excel/archive.cjs#L8>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Checks the small ZIP directory trailer before the ZIP library allocates its entry list. Rejects ZIP64/multi-volume archives.

Purpose evidence: jsdoc.

Lexical owner: [electron/engines/excel/archive.cjs](<archive.cjs.md#s-35ce0e2272717f7b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| bytes | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [openArchive](<archive.cjs.md#s-c55324de9f4e9cf0>) — [electron/engines/excel/archive.cjs:43](<../../../../../../../electron/engines/excel/archive.cjs#L43>)

Unresolved / external call sites: 14.

- bytes.readUInt32LE — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:9](<../../../../../../../electron/engines/excel/archive.cjs#L9>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:10](<../../../../../../../electron/engines/excel/archive.cjs#L10>)
- Math.max — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:14](<../../../../../../../electron/engines/excel/archive.cjs#L14>)
- bytes.readUInt32LE — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:16](<../../../../../../../electron/engines/excel/archive.cjs#L16>)
- bytes.readUInt16LE — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:17](<../../../../../../../electron/engines/excel/archive.cjs#L17>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:23](<../../../../../../../electron/engines/excel/archive.cjs#L23>)
- bytes.readUInt16LE — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:24](<../../../../../../../electron/engines/excel/archive.cjs#L24>)
- bytes.readUInt16LE — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:26](<../../../../../../../electron/engines/excel/archive.cjs#L26>)
- 6 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c55324de9f4e9cf0"></a>

## openArchive

[electron/engines/excel/archive.cjs:40](<../../../../../../../electron/engines/excel/archive.cjs#L40>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Opens an in-memory XLSX archive without extracting files. Limits declared and actual expansion and verifies CRC on every consumed part.

Purpose evidence: jsdoc.

Exported as: openArchive ([electron/engines/excel/archive.cjs:1](<../../../../../../../electron/engines/excel/archive.cjs#L1>)).

Lexical owner: [electron/engines/excel/archive.cjs](<archive.cjs.md#s-35ce0e2272717f7b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| bytes | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateDirectory](<archive.cjs.md#s-4141a9f9c031a9b0>) — [electron/engines/excel/archive.cjs:43](<../../../../../../../electron/engines/excel/archive.cjs#L43>)

**Called by (statically resolved):**

- [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>) — [electron/engines/excel/reader.cjs:319](<../../../../../../../electron/engines/excel/reader.cjs#L319>)

Unresolved / external call sites: 17.

- Error — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:42](<../../../../../../../electron/engines/excel/archive.cjs#L42>)
- unzipper.Open.buffer — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:44](<../../../../../../../electron/engines/excel/archive.cjs#L44>)
- Map — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:45](<../../../../../../../electron/engines/excel/archive.cjs#L45>)
- Set — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:46](<../../../../../../../electron/engines/excel/archive.cjs#L46>)
- name.includes — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:52](<../../../../../../../electron/engines/excel/archive.cjs#L52>)
- name.startsWith — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:53](<../../../../../../../electron/engines/excel/archive.cjs#L53>)
- name.split("/").some — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:54](<../../../../../../../electron/engines/excel/archive.cjs#L54>)
- name.split — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:54](<../../../../../../../electron/engines/excel/archive.cjs#L54>)
- 9 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-59873146571ae11c"></a>

## openArchive.&lt;anonymous@54:28&gt;

[electron/engines/excel/archive.cjs:54](<../../../../../../../electron/engines/excel/archive.cjs#L54>) · ArrowFunction · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [openArchive](<archive.cjs.md#s-c55324de9f4e9cf0>).

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

No direct static call/import association found; coverage unknown.

<a id="s-f4871bba2f9a3bf0"></a>

## openArchive.read

[electron/engines/excel/archive.cjs:71](<../../../../../../../electron/engines/excel/archive.cjs#L71>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Reads one bounded part, checking actual output rather than trusting attacker-controlled ZIP size headers.

Purpose evidence: jsdoc.

Lexical owner: [openArchive](<archive.cjs.md#s-c55324de9f4e9cf0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |
| optional | boolean | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- entries.get — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:72](<../../../../../../../electron/engines/excel/archive.cjs#L72>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:75](<../../../../../../../electron/engines/excel/archive.cjs#L75>)
- entry.stream — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:80](<../../../../../../../electron/engines/excel/archive.cjs#L80>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:85](<../../../../../../../electron/engines/excel/archive.cjs#L85>)
- crc32 — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:86](<../../../../../../../electron/engines/excel/archive.cjs#L86>)
- chunks.push — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:87](<../../../../../../../electron/engines/excel/archive.cjs#L87>)
- stream.destroy — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:90](<../../../../../../../electron/engines/excel/archive.cjs#L90>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:93](<../../../../../../../electron/engines/excel/archive.cjs#L93>)
- 1 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-dd6b7a2034ed0d5f"></a>

## scanXml

[electron/engines/excel/archive.cjs:100](<../../../../../../../electron/engines/excel/archive.cjs#L100>) · FunctionDeclaration · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

Streams strict namespace-aware XML events to a scanner; rejects DTDs/entities and non-XML processing instructions. No resources are fetched.

Purpose evidence: jsdoc.

Exported as: scanXml ([electron/engines/excel/archive.cjs:1](<../../../../../../../electron/engines/excel/archive.cjs#L1>)).

Lexical owner: [electron/engines/excel/archive.cjs](<archive.cjs.md#s-35ce0e2272717f7b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| bytes | any | compiler-inferred | required |
| handlers | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [relationships](<reader.cjs.md#s-dd91e621033131b2>) — [electron/engines/excel/reader.cjs:35](<../../../../../../../electron/engines/excel/reader.cjs#L35>)
- [readStyles](<reader.cjs.md#s-80f2f33f34672d27>) — [electron/engines/excel/reader.cjs:62](<../../../../../../../electron/engines/excel/reader.cjs#L62>)
- [readStrings](<reader.cjs.md#s-10a843b6a0d99402>) — [electron/engines/excel/reader.cjs:89](<../../../../../../../electron/engines/excel/reader.cjs#L89>)
- [scanSheet](<reader.cjs.md#s-6c47ea2781b8b406>) — [electron/engines/excel/reader.cjs:133](<../../../../../../../electron/engines/excel/reader.cjs#L133>)
- [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>) — [electron/engines/excel/reader.cjs:321](<../../../../../../../electron/engines/excel/reader.cjs#L321>)
- [readWorkbook](<reader.cjs.md#s-7de6d1652c8afc11>) — [electron/engines/excel/reader.cjs:356](<../../../../../../../electron/engines/excel/reader.cjs#L356>)

Unresolved / external call sites: 8.

- new TextDecoder(encoding, { fatal: true }).decode — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:107](<../../../../../../../electron/engines/excel/archive.cjs#L107>)
- TextDecoder — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:107](<../../../../../../../electron/engines/excel/archive.cjs#L107>)
- /&lt;!DOCTYPE&#124;&lt;!ENTITY/i.test — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:108](<../../../../../../../electron/engines/excel/archive.cjs#L108>)
- Error — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:109](<../../../../../../../electron/engines/excel/archive.cjs#L109>)
- sax.parser — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:110](<../../../../../../../electron/engines/excel/archive.cjs#L110>)
- parser.write — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:132](<../../../../../../../electron/engines/excel/archive.cjs#L132>)
- xml.slice — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:132](<../../../../../../../electron/engines/excel/archive.cjs#L132>)
- parser.close — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:133](<../../../../../../../electron/engines/excel/archive.cjs#L133>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0c1117bd37fc86a6"></a>

## scanXml.instruction

[electron/engines/excel/archive.cjs:112](<../../../../../../../electron/engines/excel/archive.cjs#L112>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scanXml](<archive.cjs.md#s-dd6b7a2034ed0d5f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:114](<../../../../../../../electron/engines/excel/archive.cjs#L114>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-146dacf2062bf70e"></a>

## scanXml.open

[electron/engines/excel/archive.cjs:116](<../../../../../../../electron/engines/excel/archive.cjs#L116>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scanXml](<archive.cjs.md#s-dd6b7a2034ed0d5f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- Error — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:118](<../../../../../../../electron/engines/excel/archive.cjs#L118>)
- Object.values — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:120](<../../../../../../../electron/engines/excel/archive.cjs#L120>)
- handlers.open — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:122](<../../../../../../../electron/engines/excel/archive.cjs#L122>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f37e8fe395c2dab7"></a>

## scanXml.text

[electron/engines/excel/archive.cjs:124](<../../../../../../../electron/engines/excel/archive.cjs#L124>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scanXml](<archive.cjs.md#s-dd6b7a2034ed0d5f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- handlers.text — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:125](<../../../../../../../electron/engines/excel/archive.cjs#L125>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-854b71272ad18e03"></a>

## scanXml.close

[electron/engines/excel/archive.cjs:127](<../../../../../../../electron/engines/excel/archive.cjs#L127>) · FunctionExpression · production · [Built-in Engines and data adapters](<../../../../../modules/engines.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scanXml](<archive.cjs.md#s-dd6b7a2034ed0d5f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- handlers.close — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:128](<../../../../../../../electron/engines/excel/archive.cjs#L128>)
- name.split(":").at — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:128](<../../../../../../../electron/engines/excel/archive.cjs#L128>)
- name.split — external-or-dynamic-dispatch; [electron/engines/excel/archive.cjs:128](<../../../../../../../electron/engines/excel/archive.cjs#L128>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
