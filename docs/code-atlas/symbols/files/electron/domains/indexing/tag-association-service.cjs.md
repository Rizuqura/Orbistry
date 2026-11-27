# electron/domains/indexing/tag-association-service.cjs: symbols

[Atlas](<../../../../../README.md>) / [Knowledge indexing and source access](<../../../../../modules/knowledge.md>) / [electron/domains/indexing/tag-association-service.cjs:1](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/indexing/tag-association-service.cjs](<tag-association-service.cjs.md#s-32f626bb9d1b2f98>) (Module)
- [digest](<tag-association-service.cjs.md#s-026392bb6441646d>) (FunctionDeclaration)
- [enginePath](<tag-association-service.cjs.md#s-5e1c29e4edc6962d>) (FunctionDeclaration)
- [readOptionalText](<tag-association-service.cjs.md#s-a79435e522fa47c3>) (FunctionDeclaration)
- [preparePackage](<tag-association-service.cjs.md#s-f8bb480a932e8c05>) (FunctionDeclaration)
- [readCache](<tag-association-service.cjs.md#s-2e556e8647143d6d>) (FunctionDeclaration)
- [writeCache](<tag-association-service.cjs.md#s-f7662e4710d31256>) (FunctionDeclaration)
- [getTagIndex](<tag-association-service.cjs.md#s-78c71c503832fb15>) (FunctionDeclaration)
- [getTagIndex.resolveCurrentWorldIndex](<tag-association-service.cjs.md#s-3687082d2cc78c11>) (FunctionExpression)
- [getTagIndex.resolveCurrentWorldIndex.&lt;anonymous@126:103&gt;](<tag-association-service.cjs.md#s-88624af244c5c006>) (ArrowFunction)
- [getTagIndex.resolveCurrentWorldIndex.&lt;anonymous@131:91&gt;](<tag-association-service.cjs.md#s-679857e842975035>) (ArrowFunction)
- [getTagIndex.resolveCurrentWorldIndex.&lt;anonymous@146:87&gt;](<tag-association-service.cjs.md#s-2a0e05828f9358be>) (ArrowFunction)
- [getTagIndex.resolveCurrentWorldIndex.&lt;anonymous@183:92&gt;](<tag-association-service.cjs.md#s-c513ba33293c33ed>) (ArrowFunction)
- [searchWorldTags](<tag-association-service.cjs.md#s-84e1d1f7ed2f2bae>) (FunctionDeclaration)
- [rebuildWorldTagCache](<tag-association-service.cjs.md#s-397407a5e811d705>) (FunctionDeclaration)
- [getWorldTagStatistics](<tag-association-service.cjs.md#s-d8dcfd2227d71133>) (FunctionDeclaration)

<a id="s-32f626bb9d1b2f98"></a>

## electron/domains/indexing/tag-association-service.cjs

[electron/domains/indexing/tag-association-service.cjs:1](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L1>) · Module · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 10.

- require — module-loader; [electron/domains/indexing/tag-association-service.cjs:1](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L1>)
- require — module-loader; [electron/domains/indexing/tag-association-service.cjs:2](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L2>)
- require — module-loader; [electron/domains/indexing/tag-association-service.cjs:3](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L3>)
- require — module-loader; [electron/domains/indexing/tag-association-service.cjs:7](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L7>)
- require — module-loader; [electron/domains/indexing/tag-association-service.cjs:11](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L11>)
- require — module-loader; [electron/domains/indexing/tag-association-service.cjs:16](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L16>)
- require — module-loader; [electron/domains/indexing/tag-association-service.cjs:17](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L17>)
- require — module-loader; [electron/domains/indexing/tag-association-service.cjs:18](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L18>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:13](<../../../../../../../electron/tag-association.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-026392bb6441646d"></a>

## digest

[electron/domains/indexing/tag-association-service.cjs:31](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L31>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Hashes deterministic metadata or package text for source revisions and accidental cache corruption detection. Pure.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/indexing/tag-association-service.cjs](<tag-association-service.cjs.md#s-32f626bb9d1b2f98>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [preparePackage](<tag-association-service.cjs.md#s-f8bb480a932e8c05>) — [electron/domains/indexing/tag-association-service.cjs:67](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L67>)
- [readCache](<tag-association-service.cjs.md#s-2e556e8647143d6d>) — [electron/domains/indexing/tag-association-service.cjs:92](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L92>)
- [writeCache](<tag-association-service.cjs.md#s-f7662e4710d31256>) — [electron/domains/indexing/tag-association-service.cjs:103](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L103>)
- [getTagIndex.resolveCurrentWorldIndex](<tag-association-service.cjs.md#s-3687082d2cc78c11>) — [electron/domains/indexing/tag-association-service.cjs:122](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L122>)
- [getTagIndex.resolveCurrentWorldIndex](<tag-association-service.cjs.md#s-3687082d2cc78c11>) — [electron/domains/indexing/tag-association-service.cjs:136](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L136>)

Unresolved / external call sites: 3.

- createHash("sha256").update(text).digest — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:32](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L32>)
- createHash("sha256").update — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:32](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L32>)
- createHash — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:32](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L32>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:13](<../../../../../../../electron/tag-association.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-5e1c29e4edc6962d"></a>

## enginePath

[electron/domains/indexing/tag-association-service.cjs:36](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L36>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Resolves one fixed internal package/cache path, rejecting linked parents and files. No renderer-supplied path segments are accepted.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/indexing/tag-association-service.cjs](<tag-association-service.cjs.md#s-32f626bb9d1b2f98>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| parts | {} | compiler-inferred | required, rest |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/domains/indexing/tag-association-service.cjs:40](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L40>)

**Called by (statically resolved):**

- [preparePackage](<tag-association-service.cjs.md#s-f8bb480a932e8c05>) — [electron/domains/indexing/tag-association-service.cjs:68](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L68>)
- [preparePackage](<tag-association-service.cjs.md#s-f8bb480a932e8c05>) — [electron/domains/indexing/tag-association-service.cjs:73](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L73>)
- [readCache](<tag-association-service.cjs.md#s-2e556e8647143d6d>) — [electron/domains/indexing/tag-association-service.cjs:81](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L81>)
- [writeCache](<tag-association-service.cjs.md#s-f7662e4710d31256>) — [electron/domains/indexing/tag-association-service.cjs:108](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L108>)

Unresolved / external call sites: 2.

- fs.realpath — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:37](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L37>)
- path.join — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:39](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L39>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:13](<../../../../../../../electron/tag-association.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-a79435e522fa47c3"></a>

## readOptionalText

[electron/domains/indexing/tag-association-service.cjs:46](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L46>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Reads bounded derived/package text, returning null only for missing files. Links, oversize records and I/O failures throw.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/indexing/tag-association-service.cjs](<tag-association-service.cjs.md#s-32f626bb9d1b2f98>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| target | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [rejectSymlink](<../../core/persistence/json-store.cjs.md#s-aaddc8aab5c0d073>) — [electron/domains/indexing/tag-association-service.cjs:47](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L47>)

**Called by (statically resolved):**

- [preparePackage](<tag-association-service.cjs.md#s-f8bb480a932e8c05>) — [electron/domains/indexing/tag-association-service.cjs:69](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L69>)
- [preparePackage](<tag-association-service.cjs.md#s-f8bb480a932e8c05>) — [electron/domains/indexing/tag-association-service.cjs:74](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L74>)
- [readCache](<tag-association-service.cjs.md#s-2e556e8647143d6d>) — [electron/domains/indexing/tag-association-service.cjs:80](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L80>)
- [writeCache](<tag-association-service.cjs.md#s-f7662e4710d31256>) — [electron/domains/indexing/tag-association-service.cjs:109](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L109>)

Unresolved / external call sites: 4.

- fs.stat — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:49](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L49>)
- stats.isFile — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:50](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L50>)
- Error — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:51](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L51>)
- fs.readFile — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:52](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L52>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:13](<../../../../../../../electron/tag-association.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-f8bb480a932e8c05"></a>

## preparePackage

[electron/domains/indexing/tag-association-service.cjs:60](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L60>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Installs the actual bundled modules and manifest under this Universe. Never imports or executes the Universe copies; failures propagate to memory fallback.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/indexing/tag-association-service.cjs](<tag-association-service.cjs.md#s-32f626bb9d1b2f98>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [digest](<tag-association-service.cjs.md#s-026392bb6441646d>) — [electron/domains/indexing/tag-association-service.cjs:67](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L67>)
- [enginePath](<tag-association-service.cjs.md#s-5e1c29e4edc6962d>) — [electron/domains/indexing/tag-association-service.cjs:68](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L68>)
- [readOptionalText](<tag-association-service.cjs.md#s-a79435e522fa47c3>) — [electron/domains/indexing/tag-association-service.cjs:69](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L69>)
- [writeTextAtomic](<../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/domains/indexing/tag-association-service.cjs:70](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L70>)
- [enginePath](<tag-association-service.cjs.md#s-5e1c29e4edc6962d>) — [electron/domains/indexing/tag-association-service.cjs:73](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L73>)
- [readOptionalText](<tag-association-service.cjs.md#s-a79435e522fa47c3>) — [electron/domains/indexing/tag-association-service.cjs:74](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L74>)
- [writeTextAtomic](<../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/domains/indexing/tag-association-service.cjs:75](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L75>)

**Called by (statically resolved):**

- [getTagIndex.resolveCurrentWorldIndex](<tag-association-service.cjs.md#s-3687082d2cc78c11>) — [electron/domains/indexing/tag-association-service.cjs:156](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L156>)

Unresolved / external call sites: 3.

- fs.readFile — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:63](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L63>)
- path.join — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:64](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L64>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:72](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L72>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:13](<../../../../../../../electron/tag-association.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-2e556e8647143d6d"></a>

## readCache

[electron/domains/indexing/tag-association-service.cjs:79](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L79>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Restores a checksum-verified, World/revision-scoped cache. Missing/stale caches return null; corrupt payloads throw for visible rebuilding.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/indexing/tag-association-service.cjs](<tag-association-service.cjs.md#s-32f626bb9d1b2f98>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| worldId | any | compiler-inferred | required |
| revision | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readOptionalText](<tag-association-service.cjs.md#s-a79435e522fa47c3>) — [electron/domains/indexing/tag-association-service.cjs:80](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L80>)
- [enginePath](<tag-association-service.cjs.md#s-5e1c29e4edc6962d>) — [electron/domains/indexing/tag-association-service.cjs:81](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L81>)
- [digest](<tag-association-service.cjs.md#s-026392bb6441646d>) — [electron/domains/indexing/tag-association-service.cjs:92](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L92>)

**Called by (statically resolved):**

- [getTagIndex.resolveCurrentWorldIndex](<tag-association-service.cjs.md#s-3687082d2cc78c11>) — [electron/domains/indexing/tag-association-service.cjs:159](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L159>)

Unresolved / external call sites: 6.

- JSON.parse — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:84](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L84>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:92](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L92>)
- Array.isArray — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:93](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L93>)
- Array.isArray — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:94](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L94>)
- Array.isArray — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:95](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L95>)
- Error — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:97](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L97>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:13](<../../../../../../../electron/tag-association.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-f7662e4710d31256"></a>

## writeCache

[electron/domains/indexing/tag-association-service.cjs:102](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L102>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Saves reconstructable derived data atomically. A size or permissions error leaves the authoritative entity metadata untouched.

Purpose evidence: jsdoc.

Lexical owner: [electron/domains/indexing/tag-association-service.cjs](<tag-association-service.cjs.md#s-32f626bb9d1b2f98>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| index | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [digest](<tag-association-service.cjs.md#s-026392bb6441646d>) — [electron/domains/indexing/tag-association-service.cjs:103](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L103>)
- [enginePath](<tag-association-service.cjs.md#s-5e1c29e4edc6962d>) — [electron/domains/indexing/tag-association-service.cjs:108](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L108>)
- [writeTextAtomic](<../../core/persistence/json-store.cjs.md#s-eaf1fb4e46036574>) — [electron/domains/indexing/tag-association-service.cjs:109](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L109>)
- [readOptionalText](<tag-association-service.cjs.md#s-a79435e522fa47c3>) — [electron/domains/indexing/tag-association-service.cjs:109](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L109>)

**Called by (statically resolved):**

- [getTagIndex.resolveCurrentWorldIndex](<tag-association-service.cjs.md#s-3687082d2cc78c11>) — [electron/domains/indexing/tag-association-service.cjs:167](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L167>)

Unresolved / external call sites: 4.

- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:103](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L103>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:103](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L103>)
- Buffer.byteLength — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:104](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L104>)
- Error — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:105](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L105>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:13](<../../../../../../../electron/tag-association.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-78c71c503832fb15"></a>

## getTagIndex

[electron/domains/indexing/tag-association-service.cjs:117](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L117>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Resolves the current single World from its real Universe root and persisted entity metadata. Reuses matching revisions, restores derived caches, or rebuilds changed metadata. Serializes with entity writes. Package/cache failures return visible warnings with a working in-memory index; entity read failures propagate.

Purpose evidence: jsdoc.

Exported as: getTagIndex ([electron/domains/indexing/tag-association-service.cjs:1](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L1>)).

Lexical owner: [electron/domains/indexing/tag-association-service.cjs](<tag-association-service.cjs.md#s-32f626bb9d1b2f98>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| rebuild | boolean | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [registerWorldViewIpc."tag-index"](<../../core/ipc/worldview-ipc.cjs.md#s-4c76c0d2c6c4b655>) — [electron/core/ipc/worldview-ipc.cjs:195](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L195>)
- [searchWorldTags](<tag-association-service.cjs.md#s-84e1d1f7ed2f2bae>) — [electron/domains/indexing/tag-association-service.cjs:197](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L197>)
- [rebuildWorldTagCache](<tag-association-service.cjs.md#s-397407a5e811d705>) — [electron/domains/indexing/tag-association-service.cjs:207](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L207>)
- [getWorldTagStatistics](<tag-association-service.cjs.md#s-d8dcfd2227d71133>) — [electron/domains/indexing/tag-association-service.cjs:220](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L220>)

Unresolved / external call sites: 2.

- fs.realpath — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:118](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L118>)
- withWorldViewMutation — signature-only-candidate; [electron/domains/indexing/tag-association-service.cjs:119](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L119>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:13](<../../../../../../../electron/tag-association.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-3687082d2cc78c11"></a>

## getTagIndex.resolveCurrentWorldIndex

[electron/domains/indexing/tag-association-service.cjs:121](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L121>) · FunctionExpression · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Reads a consistent persisted snapshot and manages only reconstructable package/cache artifacts.

Purpose evidence: jsdoc.

Lexical owner: [getTagIndex](<tag-association-service.cjs.md#s-78c71c503832fb15>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [digest](<tag-association-service.cjs.md#s-026392bb6441646d>) — [electron/domains/indexing/tag-association-service.cjs:122](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L122>)
- [digest](<tag-association-service.cjs.md#s-026392bb6441646d>) — [electron/domains/indexing/tag-association-service.cjs:136](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L136>)
- [preparePackage](<tag-association-service.cjs.md#s-f8bb480a932e8c05>) — [electron/domains/indexing/tag-association-service.cjs:156](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L156>)
- [readCache](<tag-association-service.cjs.md#s-2e556e8647143d6d>) — [electron/domains/indexing/tag-association-service.cjs:159](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L159>)
- [updateTagIndex](<../../engines/tag-association/indexer.cjs.md#s-aef49e19581a1e3a>) — [electron/domains/indexing/tag-association-service.cjs:166](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L166>)
- [writeCache](<tag-association-service.cjs.md#s-f7662e4710d31256>) — [electron/domains/indexing/tag-association-service.cjs:167](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L167>)
- [updateTagIndex](<../../engines/tag-association/indexer.cjs.md#s-aef49e19581a1e3a>) — [electron/domains/indexing/tag-association-service.cjs:170](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L170>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 12.

- digest(process.platform === "win32" ? root.toLowerCase() : root).slice — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:122](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L122>)
- root.toLowerCase — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:122](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L122>)
- loadWorldView — signature-only-candidate; [electron/domains/indexing/tag-association-service.cjs:123](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L123>)
- metadata.chips .map( /** Selects eligible persisted fields, excluding files, inferred tags and relationships. */ ( chip, ) =&gt; ({ id: chip.id, name: chip.name, tags: chip.tags }), ) — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:124](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L124>)
- metadata.chips .map — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:124](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L124>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:137](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L137>)
- sessions.get — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:139](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L139>)
- metadata.issues.map — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:145](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L145>)
- 4 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:13](<../../../../../../../electron/tag-association.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-88624af244c5c006"></a>

## getTagIndex.resolveCurrentWorldIndex.&lt;anonymous@126:103&gt;

[electron/domains/indexing/tag-association-service.cjs:126](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L126>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Selects eligible persisted fields, excluding files, inferred tags and relationships.

Purpose evidence: jsdoc.

Lexical owner: [getTagIndex.resolveCurrentWorldIndex](<tag-association-service.cjs.md#s-3687082d2cc78c11>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | any | compiler-inferred | required |

Returns: { id: any; name: any; tags: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:13](<../../../../../../../electron/tag-association.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-679857e842975035"></a>

## getTagIndex.resolveCurrentWorldIndex.&lt;anonymous@131:91&gt;

[electron/domains/indexing/tag-association-service.cjs:131](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L131>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Makes revisions independent of file enumeration and creation timestamps.

Purpose evidence: jsdoc.

Lexical owner: [getTagIndex.resolveCurrentWorldIndex](<tag-association-service.cjs.md#s-3687082d2cc78c11>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: 0 &#124; 1 &#124; -1 (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [compareText](<../../engines/tag-association/normalizer.cjs.md#s-c87526cd72a39569>) — [electron/domains/indexing/tag-association-service.cjs:134](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L134>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:13](<../../../../../../../electron/tag-association.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-2a0e05828f9358be"></a>

## getTagIndex.resolveCurrentWorldIndex.&lt;anonymous@146:87&gt;

[electron/domains/indexing/tag-association-service.cjs:146](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L146>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Surfaces damaged entity indexes excluded by the existing loader.

Purpose evidence: jsdoc.

Lexical owner: [getTagIndex.resolveCurrentWorldIndex](<tag-association-service.cjs.md#s-3687082d2cc78c11>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| issue | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:13](<../../../../../../../electron/tag-association.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-c513ba33293c33ed"></a>

## getTagIndex.resolveCurrentWorldIndex.&lt;anonymous@183:92&gt;

[electron/domains/indexing/tag-association-service.cjs:183](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L183>) · ArrowFunction · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Reports skipped invalid metadata without hiding healthy search results.

Purpose evidence: jsdoc.

Lexical owner: [getTagIndex.resolveCurrentWorldIndex](<tag-association-service.cjs.md#s-3687082d2cc78c11>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| issue | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:13](<../../../../../../../electron/tag-association.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-84e1d1f7ed2f2bae"></a>

## searchWorldTags

[electron/domains/indexing/tag-association-service.cjs:194](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L194>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Searches only the current persisted World, returning measured result explanations plus cache warnings. Invalid queries throw before I/O.

Purpose evidence: jsdoc.

Exported as: searchWorldTags ([electron/domains/indexing/tag-association-service.cjs:1](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L1>)).

Lexical owner: [electron/domains/indexing/tag-association-service.cjs](<tag-association-service.cjs.md#s-32f626bb9d1b2f98>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| query | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [getTagIndex](<tag-association-service.cjs.md#s-78c71c503832fb15>) — [electron/domains/indexing/tag-association-service.cjs:197](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L197>)
- [searchEntities](<../../engines/tag-association/search.cjs.md#s-4b1bc7bc0802b0f4>) — [electron/domains/indexing/tag-association-service.cjs:199](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L199>)

**Called by (statically resolved):**

- [registerWorldViewIpc."tag-search"](<../../core/ipc/worldview-ipc.cjs.md#s-c6797fe6b4703f1c>) — [electron/core/ipc/worldview-ipc.cjs:193](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L193>)
- [&lt;anonymous@188:85&gt;.&lt;anonymous@189:23&gt;](<../../tag-association.test.cjs.md#s-859129d99165c8ec>) — [electron/tag-association.test.cjs:202](<../../../../../../../electron/tag-association.test.cjs#L202>)
- [&lt;anonymous@188:85&gt;.&lt;anonymous@189:23&gt;](<../../tag-association.test.cjs.md#s-859129d99165c8ec>) — [electron/tag-association.test.cjs:215](<../../../../../../../electron/tag-association.test.cjs#L215>)
- [&lt;anonymous@188:85&gt;.&lt;anonymous@189:23&gt;](<../../tag-association.test.cjs.md#s-859129d99165c8ec>) — [electron/tag-association.test.cjs:257](<../../../../../../../electron/tag-association.test.cjs#L257>)
- [&lt;anonymous@188:85&gt;.&lt;anonymous@189:23&gt;](<../../tag-association.test.cjs.md#s-859129d99165c8ec>) — [electron/tag-association.test.cjs:265](<../../../../../../../electron/tag-association.test.cjs#L265>)
- [&lt;anonymous@188:85&gt;.&lt;anonymous@189:23&gt;](<../../tag-association.test.cjs.md#s-859129d99165c8ec>) — [electron/tag-association.test.cjs:270](<../../../../../../../electron/tag-association.test.cjs#L270>)
- [&lt;anonymous@188:85&gt;.&lt;anonymous@189:23&gt;](<../../tag-association.test.cjs.md#s-859129d99165c8ec>) — [electron/tag-association.test.cjs:274](<../../../../../../../electron/tag-association.test.cjs#L274>)
- [&lt;anonymous@188:85&gt;.&lt;anonymous@189:23&gt;](<../../tag-association.test.cjs.md#s-859129d99165c8ec>) — [electron/tag-association.test.cjs:289](<../../../../../../../electron/tag-association.test.cjs#L289>)
- [&lt;anonymous@294:87&gt;.&lt;anonymous@295:23&gt;](<../../tag-association.test.cjs.md#s-6f05acc4be29c38c>) — [electron/tag-association.test.cjs:302](<../../../../../../../electron/tag-association.test.cjs#L302>)
- [&lt;anonymous@294:87&gt;.&lt;anonymous@295:23&gt;](<../../tag-association.test.cjs.md#s-6f05acc4be29c38c>) — [electron/tag-association.test.cjs:307](<../../../../../../../electron/tag-association.test.cjs#L307>)

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:196](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L196>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:202](<../../../../../../../electron/tag-association.test.cjs#L202>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:215](<../../../../../../../electron/tag-association.test.cjs#L215>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:257](<../../../../../../../electron/tag-association.test.cjs#L257>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:265](<../../../../../../../electron/tag-association.test.cjs#L265>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:270](<../../../../../../../electron/tag-association.test.cjs#L270>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:274](<../../../../../../../electron/tag-association.test.cjs#L274>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:289](<../../../../../../../electron/tag-association.test.cjs#L289>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:302](<../../../../../../../electron/tag-association.test.cjs#L302>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:307](<../../../../../../../electron/tag-association.test.cjs#L307>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:13](<../../../../../../../electron/tag-association.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-397407a5e811d705"></a>

## rebuildWorldTagCache

[electron/domains/indexing/tag-association-service.cjs:206](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L206>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Rebuilds disposable cache data explicitly and exposes the resulting World/version/status without changing entity metadata.

Purpose evidence: jsdoc.

Exported as: rebuildWorldTagCache ([electron/domains/indexing/tag-association-service.cjs:1](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L1>)).

Lexical owner: [electron/domains/indexing/tag-association-service.cjs](<tag-association-service.cjs.md#s-32f626bb9d1b2f98>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [getTagIndex](<tag-association-service.cjs.md#s-78c71c503832fb15>) — [electron/domains/indexing/tag-association-service.cjs:207](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L207>)

**Called by (statically resolved):**

- [registerWorldViewIpc."tag-rebuild"](<../../core/ipc/worldview-ipc.cjs.md#s-c5da8eb9e68eb61a>) — [electron/core/ipc/worldview-ipc.cjs:200](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L200>)
- [&lt;anonymous@188:85&gt;.&lt;anonymous@189:23&gt;](<../../tag-association.test.cjs.md#s-859129d99165c8ec>) — [electron/tag-association.test.cjs:286](<../../../../../../../electron/tag-association.test.cjs#L286>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:286](<../../../../../../../electron/tag-association.test.cjs#L286>) — static-call-site; coverage not established.
- [electron/tag-association.test.cjs:13](<../../../../../../../electron/tag-association.test.cjs#L13>) — file-import-only; coverage not established.

<a id="s-d8dcfd2227d71133"></a>

## getWorldTagStatistics

[electron/domains/indexing/tag-association-service.cjs:217](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L217>) · FunctionDeclaration · production · [Knowledge indexing and source access](<../../../../../modules/knowledge.md>)

Returns current measured tag/pair statistics for the requested phrase within this Universe's World only.

Purpose evidence: jsdoc.

Exported as: getWorldTagStatistics ([electron/domains/indexing/tag-association-service.cjs:1](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L1>)).

Lexical owner: [electron/domains/indexing/tag-association-service.cjs](<tag-association-service.cjs.md#s-32f626bb9d1b2f98>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| query | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [getTagIndex](<tag-association-service.cjs.md#s-78c71c503832fb15>) — [electron/domains/indexing/tag-association-service.cjs:220](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L220>)
- [getAssociationStatistics](<../../engines/tag-association/association.cjs.md#s-0f4930cf16ce31ba>) — [electron/domains/indexing/tag-association-service.cjs:226](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L226>)

**Called by (statically resolved):**

- [registerWorldViewIpc."tag-associations"](<../../core/ipc/worldview-ipc.cjs.md#s-43a269fd3db0953f>) — [electron/core/ipc/worldview-ipc.cjs:198](<../../../../../../../electron/core/ipc/worldview-ipc.cjs#L198>)

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/domains/indexing/tag-association-service.cjs:219](<../../../../../../../electron/domains/indexing/tag-association-service.cjs#L219>)

**Related tests / acceptance harnesses:**

- [electron/tag-association.test.cjs:13](<../../../../../../../electron/tag-association.test.cjs#L13>) — file-import-only; coverage not established.
