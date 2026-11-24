# electron/agent-memory-source.cjs: symbols

[Atlas](<../../../README.md>) / [Vault and stations](<../../../modules/vault.md>) / [electron/agent-memory-source.cjs:1](<../../../../../electron/agent-memory-source.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/agent-memory-source.cjs](<agent-memory-source.cjs.md#s-d3a5cdf7870c6d96>) (Module)
- [isMemoryPath](<agent-memory-source.cjs.md#s-e1cf95cc204c7e92>) (FunctionDeclaration)
- [isMemoryPath.&lt;anonymous@14:14&gt;](<agent-memory-source.cjs.md#s-67e3db57c5e79069>) (ArrowFunction)
- [memoryEntry](<agent-memory-source.cjs.md#s-e6fa767eba9e5364>) (FunctionDeclaration)
- [listMemoryFiles](<agent-memory-source.cjs.md#s-41b6f35aa9c9f9f9>) (FunctionDeclaration)
- [listMemoryFiles.visit](<agent-memory-source.cjs.md#s-6253e560b2e9a038>) (FunctionDeclaration)

<a id="s-d3a5cdf7870c6d96"></a>

## electron/agent-memory-source.cjs

[electron/agent-memory-source.cjs:1](<../../../../../electron/agent-memory-source.cjs#L1>) · Module · production · [Vault and stations](<../../../modules/vault.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- require — module-loader; [electron/agent-memory-source.cjs:2](<../../../../../electron/agent-memory-source.cjs#L2>)
- require — module-loader; [electron/agent-memory-source.cjs:3](<../../../../../electron/agent-memory-source.cjs#L3>)

**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:10](<../../../../../electron/agent-memory-binding.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-e1cf95cc204c7e92"></a>

## isMemoryPath

[electron/agent-memory-source.cjs:5](<../../../../../electron/agent-memory-source.cjs#L5>) · FunctionDeclaration · production · [Vault and stations](<../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: isMemoryPath ([electron/agent-memory-source.cjs:1](<../../../../../electron/agent-memory-source.cjs#L1>)).

Lexical owner: [electron/agent-memory-source.cjs](<agent-memory-source.cjs.md#s-d3a5cdf7870c6d96>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| relativePath | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@105:61&gt;](<agent-memory-binding.test.cjs.md#s-9b35b6ab71193f12>) — [electron/agent-memory-binding.test.cjs:113](<../../../../../electron/agent-memory-binding.test.cjs#L113>)
- [memoryEntry](<agent-memory-source.cjs.md#s-e6fa767eba9e5364>) — [electron/agent-memory-source.cjs:20](<../../../../../electron/agent-memory-source.cjs#L20>)
- [listMemoryFiles.visit](<agent-memory-source.cjs.md#s-6253e560b2e9a038>) — [electron/agent-memory-source.cjs:63](<../../../../../electron/agent-memory-source.cjs#L63>)
- [prepareBrainScope.&lt;anonymous@711:28&gt;](<domains/universe/station-service.cjs.md#s-8e33e062dbb6033e>) — [electron/domains/universe/station-service.cjs:711](<../../../../../electron/domains/universe/station-service.cjs#L711>)
- [prepareBrainScope](<domains/universe/station-service.cjs.md#s-e4cff95cf847ee92>) — [electron/domains/universe/station-service.cjs:731](<../../../../../electron/domains/universe/station-service.cjs#L731>)
- [readBrainSource](<domains/universe/station-service.cjs.md#s-b62c400d5ba597c7>) — [electron/domains/universe/station-service.cjs:937](<../../../../../electron/domains/universe/station-service.cjs#L937>)
- [readBrainSource](<domains/universe/station-service.cjs.md#s-b62c400d5ba597c7>) — [electron/domains/universe/station-service.cjs:942](<../../../../../electron/domains/universe/station-service.cjs#L942>)

Unresolved / external call sites: 6.

- /^agentContext\\.memory\\//i.test — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:8](<../../../../../electron/agent-memory-source.cjs#L8>)
- relativePath.includes — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:9](<../../../../../electron/agent-memory-source.cjs#L9>)
- relativePath.includes — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:10](<../../../../../electron/agent-memory-source.cjs#L10>)
- relativePath .split("/") .every — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:12](<../../../../../electron/agent-memory-source.cjs#L12>)
- relativePath .split — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:12](<../../../../../electron/agent-memory-source.cjs#L12>)
- /\\.(md&#124;markdown)$/i.test — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:15](<../../../../../electron/agent-memory-source.cjs#L15>)

**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:113](<../../../../../electron/agent-memory-binding.test.cjs#L113>) — static-call-site; coverage not established.
- [electron/agent-memory-binding.test.cjs:10](<../../../../../electron/agent-memory-binding.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-67e3db57c5e79069"></a>

## isMemoryPath.&lt;anonymous@14:14&gt;

[electron/agent-memory-source.cjs:14](<../../../../../electron/agent-memory-source.cjs#L14>) · ArrowFunction · production · [Vault and stations](<../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [isMemoryPath](<agent-memory-source.cjs.md#s-e1cf95cc204c7e92>).

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

- [electron/agent-memory-binding.test.cjs:10](<../../../../../electron/agent-memory-binding.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-e6fa767eba9e5364"></a>

## memoryEntry

[electron/agent-memory-source.cjs:19](<../../../../../electron/agent-memory-source.cjs#L19>) · FunctionDeclaration · production · [Vault and stations](<../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: memoryEntry ([electron/agent-memory-source.cjs:1](<../../../../../electron/agent-memory-source.cjs#L1>)).

Lexical owner: [electron/agent-memory-source.cjs](<agent-memory-source.cjs.md#s-d3a5cdf7870c6d96>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |
| relativePath | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [isMemoryPath](<agent-memory-source.cjs.md#s-e1cf95cc204c7e92>) — [electron/agent-memory-source.cjs:20](<../../../../../electron/agent-memory-source.cjs#L20>)

**Called by (statically resolved):**

- [listMemoryFiles.visit](<agent-memory-source.cjs.md#s-6253e560b2e9a038>) — [electron/agent-memory-source.cjs:65](<../../../../../electron/agent-memory-source.cjs#L65>)
- [previewBoxSelection](<domains/universe/station-service.cjs.md#s-9e04aaf6fcb2ac7e>) — [electron/domains/universe/station-service.cjs:350](<../../../../../electron/domains/universe/station-service.cjs#L350>)
- [prepareBrainScope](<domains/universe/station-service.cjs.md#s-e4cff95cf847ee92>) — [electron/domains/universe/station-service.cjs:735](<../../../../../electron/domains/universe/station-service.cjs#L735>)
- [readBrainSource](<domains/universe/station-service.cjs.md#s-b62c400d5ba597c7>) — [electron/domains/universe/station-service.cjs:943](<../../../../../electron/domains/universe/station-service.cjs#L943>)

Unresolved / external call sites: 18.

- Error — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:21](<../../../../../electron/agent-memory-source.cjs#L21>)
- fs.realpath — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:22](<../../../../../electron/agent-memory-source.cjs#L22>)
- relativePath.split — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:24](<../../../../../electron/agent-memory-source.cjs#L24>)
- path.join — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:25](<../../../../../electron/agent-memory-source.cjs#L25>)
- fs.lstat — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:26](<../../../../../electron/agent-memory-source.cjs#L26>)
- stats.isSymbolicLink — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:27](<../../../../../electron/agent-memory-source.cjs#L27>)
- Error — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:28](<../../../../../electron/agent-memory-source.cjs#L28>)
- fs.realpath — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:30](<../../../../../electron/agent-memory-source.cjs#L30>)
- 10 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:10](<../../../../../electron/agent-memory-binding.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-41b6f35aa9c9f9f9"></a>

## listMemoryFiles

[electron/agent-memory-source.cjs:47](<../../../../../electron/agent-memory-source.cjs#L47>) · FunctionDeclaration · production · [Vault and stations](<../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: listMemoryFiles ([electron/agent-memory-source.cjs:1](<../../../../../electron/agent-memory-source.cjs#L1>)).

Lexical owner: [electron/agent-memory-source.cjs](<agent-memory-source.cjs.md#s-d3a5cdf7870c6d96>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| rootPath | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [listMemoryFiles.visit](<agent-memory-source.cjs.md#s-6253e560b2e9a038>) — [electron/agent-memory-source.cjs:74](<../../../../../electron/agent-memory-source.cjs#L74>)

**Called by (statically resolved):**

- [&lt;anonymous@30:75&gt;](<agent-memory-binding.test.cjs.md#s-cda0e40184f4850a>) — [electron/agent-memory-binding.test.cjs:37](<../../../../../electron/agent-memory-binding.test.cjs#L37>)

Unresolved / external call sites: 1.

- files.sort — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:75](<../../../../../electron/agent-memory-source.cjs#L75>)

**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:37](<../../../../../electron/agent-memory-binding.test.cjs#L37>) — static-call-site; coverage not established.
- [electron/agent-memory-binding.test.cjs:10](<../../../../../electron/agent-memory-binding.test.cjs#L10>) — file-import-only; coverage not established.

<a id="s-6253e560b2e9a038"></a>

## listMemoryFiles.visit

[electron/agent-memory-source.cjs:49](<../../../../../electron/agent-memory-source.cjs#L49>) · FunctionDeclaration · production · [Vault and stations](<../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [listMemoryFiles](<agent-memory-source.cjs.md#s-41b6f35aa9c9f9f9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| relative | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [listMemoryFiles.visit](<agent-memory-source.cjs.md#s-6253e560b2e9a038>) — [electron/agent-memory-source.cjs:62](<../../../../../electron/agent-memory-source.cjs#L62>)
- [isMemoryPath](<agent-memory-source.cjs.md#s-e1cf95cc204c7e92>) — [electron/agent-memory-source.cjs:63](<../../../../../electron/agent-memory-source.cjs#L63>)
- [memoryEntry](<agent-memory-source.cjs.md#s-e6fa767eba9e5364>) — [electron/agent-memory-source.cjs:65](<../../../../../electron/agent-memory-source.cjs#L65>)

**Called by (statically resolved):**

- [listMemoryFiles.visit](<agent-memory-source.cjs.md#s-6253e560b2e9a038>) — [electron/agent-memory-source.cjs:62](<../../../../../electron/agent-memory-source.cjs#L62>)
- [listMemoryFiles](<agent-memory-source.cjs.md#s-41b6f35aa9c9f9f9>) — [electron/agent-memory-source.cjs:74](<../../../../../electron/agent-memory-source.cjs#L74>)

Unresolved / external call sites: 10.

- path.join — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:50](<../../../../../electron/agent-memory-source.cjs#L50>)
- fs.lstat — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:53](<../../../../../electron/agent-memory-source.cjs#L53>)
- stats.isDirectory — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:58](<../../../../../electron/agent-memory-source.cjs#L58>)
- stats.isSymbolicLink — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:58](<../../../../../electron/agent-memory-source.cjs#L58>)
- fs.readdir — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:59](<../../../../../electron/agent-memory-source.cjs#L59>)
- entry.isSymbolicLink — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:60](<../../../../../electron/agent-memory-source.cjs#L60>)
- entry.isDirectory — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:62](<../../../../../electron/agent-memory-source.cjs#L62>)
- entry.isFile — external-or-dynamic-dispatch; [electron/agent-memory-source.cjs:63](<../../../../../electron/agent-memory-source.cjs#L63>)
- 2 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/agent-memory-binding.test.cjs:10](<../../../../../electron/agent-memory-binding.test.cjs#L10>) — file-import-only; coverage not established.
