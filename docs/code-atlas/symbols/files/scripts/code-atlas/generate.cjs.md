# scripts/code-atlas/generate.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/code-atlas/generate.cjs:1](<../../../../../../scripts/code-atlas/generate.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/code-atlas/generate.cjs](<generate.cjs.md#s-ac803ea826afb250>) (Module)
- [included](<generate.cjs.md#s-2a2e1b797f0a0359>) (FunctionDeclaration)
- [included.&lt;anonymous@45:26&gt;](<generate.cjs.md#s-7385d76692268859>) (ArrowFunction)
- [inventory](<generate.cjs.md#s-02a34d5fca877940>) (FunctionDeclaration)
- [buildAtlas](<generate.cjs.md#s-5686d6c95fadcfb1>) (FunctionDeclaration)
- [buildAtlas.&lt;anonymous@115:7&gt;](<generate.cjs.md#s-0282a2e5f97e0a59>) (ArrowFunction)
- [buildAtlas.&lt;anonymous@119:10&gt;](<generate.cjs.md#s-b67828cd8e83219c>) (ArrowFunction)
- [existingArtifacts](<generate.cjs.md#s-cf00d5d75539f741>) (FunctionDeclaration)
- [existingArtifacts.visit](<generate.cjs.md#s-41d7adecf44416f5>) (FunctionDeclaration)
- [validateLinks](<generate.cjs.md#s-fe660342bc01da7c>) (FunctionDeclaration)
- [validateLinks.&lt;anonymous@180:45&gt;](<generate.cjs.md#s-16c6a877a7200216>) (ArrowFunction)
- [validateLinks.&lt;anonymous@184:55&gt;](<generate.cjs.md#s-d056a6de957d05a7>) (ArrowFunction)
- [validateLinks.&lt;anonymous@185:54&gt;](<generate.cjs.md#s-743337b8d9a13513>) (ArrowFunction)
- [checkAtlas](<generate.cjs.md#s-c248b316de4d682d>) (FunctionDeclaration)
- [writeAtlas](<generate.cjs.md#s-b25f0ed450603f96>) (FunctionDeclaration)
- [writeAtlas.&lt;anonymous@245:7&gt;](<generate.cjs.md#s-bdaae0e57e7e5e9c>) (ArrowFunction)
- [writeAtlas.&lt;anonymous@252:38&gt;](<generate.cjs.md#s-4761773770e51041>) (ArrowFunction)

<a id="s-ac803ea826afb250"></a>

## scripts/code-atlas/generate.cjs

[scripts/code-atlas/generate.cjs:1](<../../../../../../scripts/code-atlas/generate.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 9.

- require — module-loader; [scripts/code-atlas/generate.cjs:1](<../../../../../../scripts/code-atlas/generate.cjs#L1>)
- require — module-loader; [scripts/code-atlas/generate.cjs:2](<../../../../../../scripts/code-atlas/generate.cjs#L2>)
- require — module-loader; [scripts/code-atlas/generate.cjs:3](<../../../../../../scripts/code-atlas/generate.cjs#L3>)
- require — module-loader; [scripts/code-atlas/generate.cjs:4](<../../../../../../scripts/code-atlas/generate.cjs#L4>)
- require — module-loader; [scripts/code-atlas/generate.cjs:5](<../../../../../../scripts/code-atlas/generate.cjs#L5>)
- require — module-loader; [scripts/code-atlas/generate.cjs:6](<../../../../../../scripts/code-atlas/generate.cjs#L6>)
- require — module-loader; [scripts/code-atlas/generate.cjs:7](<../../../../../../scripts/code-atlas/generate.cjs#L7>)
- require — module-loader; [scripts/code-atlas/generate.cjs:8](<../../../../../../scripts/code-atlas/generate.cjs#L8>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:15](<../../../../../../scripts/code-atlas/atlas.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-2a2e1b797f0a0359"></a>

## included

[scripts/code-atlas/generate.cjs:42](<../../../../../../scripts/code-atlas/generate.cjs#L42>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Defines repository intelligence scope; excludes local state/secrets and its own generated artifacts.

Purpose evidence: jsdoc.

Exported as: included ([scripts/code-atlas/generate.cjs:1](<../../../../../../scripts/code-atlas/generate.cjs#L1>)).

Lexical owner: [scripts/code-atlas/generate.cjs](<generate.cjs.md#s-ac803ea826afb250>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@319:114&gt;](<atlas.test.cjs.md#s-390f347db0ddaf57>) — [scripts/code-atlas/atlas.test.cjs:331](<../../../../../../scripts/code-atlas/atlas.test.cjs#L331>)
- [&lt;anonymous@319:114&gt;](<atlas.test.cjs.md#s-390f347db0ddaf57>) — [scripts/code-atlas/atlas.test.cjs:332](<../../../../../../scripts/code-atlas/atlas.test.cjs#L332>)
- [&lt;anonymous@319:114&gt;](<atlas.test.cjs.md#s-390f347db0ddaf57>) — [scripts/code-atlas/atlas.test.cjs:333](<../../../../../../scripts/code-atlas/atlas.test.cjs#L333>)

Unresolved / external call sites: 8.

- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:44](<../../../../../../scripts/code-atlas/generate.cjs#L44>)
- file.split("/").some — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:45](<../../../../../../scripts/code-atlas/generate.cjs#L45>)
- file.split — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:45](<../../../../../../scripts/code-atlas/generate.cjs#L45>)
- path.posix.basename — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:48](<../../../../../../scripts/code-atlas/generate.cjs#L48>)
- /^\\.env(?!\\.example$)/.test — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:50](<../../../../../../scripts/code-atlas/generate.cjs#L50>)
- /(?:\\.engine-private\\.pem&#124;\\.tsbuildinfo&#124;\\.log&#124;\\.db&#124;\\.sqlite\\d?)$/.test — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:51](<../../../../../../scripts/code-atlas/generate.cjs#L51>)
- /^(?:provider-credentials&#124;model-settings&#124;vault-settings&#124;agents&#124;credentials&#124;tokens)\\.json$/.test — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:54](<../../../../../../scripts/code-atlas/generate.cjs#L54>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:57](<../../../../../../scripts/code-atlas/generate.cjs#L57>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:331](<../../../../../../scripts/code-atlas/atlas.test.cjs#L331>) — static-call-site; coverage not established.
- [scripts/code-atlas/atlas.test.cjs:332](<../../../../../../scripts/code-atlas/atlas.test.cjs#L332>) — static-call-site; coverage not established.
- [scripts/code-atlas/atlas.test.cjs:333](<../../../../../../scripts/code-atlas/atlas.test.cjs#L333>) — static-call-site; coverage not established.
- [scripts/code-atlas/atlas.test.cjs:15](<../../../../../../scripts/code-atlas/atlas.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-7385d76692268859"></a>

## included.&lt;anonymous@45:26&gt;

[scripts/code-atlas/generate.cjs:45](<../../../../../../scripts/code-atlas/generate.cjs#L45>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [included](<generate.cjs.md#s-2a2e1b797f0a0359>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| part | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- EXCLUDED.has — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:45](<../../../../../../scripts/code-atlas/generate.cjs#L45>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:15](<../../../../../../scripts/code-atlas/atlas.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-02a34d5fca877940"></a>

## inventory

[scripts/code-atlas/generate.cjs:63](<../../../../../../scripts/code-atlas/generate.cjs#L63>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Inventories ignored-aware repository files using ripgrep; fails if source paths are symlinks or escape the root.

Purpose evidence: jsdoc.

Exported as: inventory ([scripts/code-atlas/generate.cjs:1](<../../../../../../scripts/code-atlas/generate.cjs#L1>)).

Lexical owner: [scripts/code-atlas/generate.cjs](<generate.cjs.md#s-ac803ea826afb250>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [buildAtlas](<generate.cjs.md#s-5686d6c95fadcfb1>) — [scripts/code-atlas/generate.cjs:108](<../../../../../../scripts/code-atlas/generate.cjs#L108>)

Unresolved / external call sites: 13.

- execFileSync( "rg", &#91; "--files", "--hidden", "-g", "!.git", "-g", "!node_modules", "-g", "!docs/code-atlas", "-g", "!.next", "-g", "!out", "-g", "!dist", "-g", "!tmp", "-g", "!test — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:64](<../../../../../../scripts/code-atlas/generate.cjs#L64>)
- execFileSync( "rg", &#91; "--files", "--hidden", "-g", "!.git", "-g", "!node_modules", "-g", "!docs/code-atlas", "-g", "!.next", "-g", "!out", "-g", "!dist", "-g", "!tmp", "-g", "!test — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:64](<../../../../../../scripts/code-atlas/generate.cjs#L64>)
- execFileSync( "rg", &#91; "--files", "--hidden", "-g", "!.git", "-g", "!node_modules", "-g", "!docs/code-atlas", "-g", "!.next", "-g", "!out", "-g", "!dist", "-g", "!tmp", "-g", "!test — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:64](<../../../../../../scripts/code-atlas/generate.cjs#L64>)
- execFileSync( "rg", &#91; "--files", "--hidden", "-g", "!.git", "-g", "!node_modules", "-g", "!docs/code-atlas", "-g", "!.next", "-g", "!out", "-g", "!dist", "-g", "!tmp", "-g", "!test — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:64](<../../../../../../scripts/code-atlas/generate.cjs#L64>)
- execFileSync( "rg", &#91; "--files", "--hidden", "-g", "!.git", "-g", "!node_modules", "-g", "!docs/code-atlas", "-g", "!.next", "-g", "!out", "-g", "!dist", "-g", "!tmp", "-g", "!test — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:64](<../../../../../../scripts/code-atlas/generate.cjs#L64>)
- execFileSync( "rg", &#91; "--files", "--hidden", "-g", "!.git", "-g", "!node_modules", "-g", "!docs/code-atlas", "-g", "!.next", "-g", "!out", "-g", "!dist", "-g", "!tmp", "-g", "!test — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:64](<../../../../../../scripts/code-atlas/generate.cjs#L64>)
- execFileSync — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:64](<../../../../../../scripts/code-atlas/generate.cjs#L64>)
- path.resolve — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:95](<../../../../../../scripts/code-atlas/generate.cjs#L95>)
- 5 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:15](<../../../../../../scripts/code-atlas/atlas.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-5686d6c95fadcfb1"></a>

## buildAtlas

[scripts/code-atlas/generate.cjs:106](<../../../../../../scripts/code-atlas/generate.cjs#L106>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Builds artifacts in memory; reads only inventoried code, selected JSON contracts and package declarations.

Purpose evidence: jsdoc.

Exported as: buildAtlas ([scripts/code-atlas/generate.cjs:1](<../../../../../../scripts/code-atlas/generate.cjs#L1>)).

Lexical owner: [scripts/code-atlas/generate.cjs](<generate.cjs.md#s-ac803ea826afb250>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| { files = inventory(root), architecture = true } | { files?: any; architecture?: boolean; } | compiler-inferred | optional, default present |

Returns: { data: { schemaVersion: number; analyzer: { name: string; typescriptVersion: any; externalTypesLoaded: boolean; sourceBodiesExecuted: boolean; }; inventory: any; files: {}; symbols: {}; dependencies: {}; exports: {}; calls: {}; unresolvedCalls: {}; diagnostics: {}; }; artifacts: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [inventory](<generate.cjs.md#s-02a34d5fca877940>) — [scripts/code-atlas/generate.cjs:108](<../../../../../../scripts/code-atlas/generate.cjs#L108>)
- [analyze](<analyze.cjs.md#s-50c93f94f5c6bf5b>) — [scripts/code-atlas/generate.cjs:110](<../../../../../../scripts/code-atlas/generate.cjs#L110>)
- [appendPowerShell](<powershell.cjs.md#s-ebdb565846169f3a>) — [scripts/code-atlas/generate.cjs:111](<../../../../../../scripts/code-atlas/generate.cjs#L111>)
- [discoverIpc](<ipc.cjs.md#s-c350b63746d45342>) — [scripts/code-atlas/generate.cjs:112](<../../../../../../scripts/code-atlas/generate.cjs#L112>)
- [render](<render.cjs.md#s-795102933500a447>) — [scripts/code-atlas/generate.cjs:135](<../../../../../../scripts/code-atlas/generate.cjs#L135>)

**Called by (statically resolved):**

- [main](<../code-atlas.cjs.md#s-2ad6b99e90e1524d>) — [scripts/code-atlas.cjs:13](<../../../../../../scripts/code-atlas.cjs#L13>)
- [&lt;anonymous@208:125&gt;](<atlas.test.cjs.md#s-0d996b01dc2fd63f>) — [scripts/code-atlas/atlas.test.cjs:233](<../../../../../../scripts/code-atlas/atlas.test.cjs#L233>)
- [&lt;anonymous@208:125&gt;](<atlas.test.cjs.md#s-0d996b01dc2fd63f>) — [scripts/code-atlas/atlas.test.cjs:234](<../../../../../../scripts/code-atlas/atlas.test.cjs#L234>)
- [&lt;anonymous@208:125&gt;](<atlas.test.cjs.md#s-0d996b01dc2fd63f>) — [scripts/code-atlas/atlas.test.cjs:283](<../../../../../../scripts/code-atlas/atlas.test.cjs#L283>)

Unresolved / external call sites: 11.

- files .filter( (file) =&gt; /^docs\\/engines\\/.*schema\\.json$/.test(file) &#124;&#124; /^examples\\/engines\\/.*\\/engine_manifest\\.json$/.test(file), ) .map — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:113](<../../../../../../scripts/code-atlas/generate.cjs#L113>)
- files .filter — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:113](<../../../../../../scripts/code-atlas/generate.cjs#L113>)
- JSON.parse — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:128](<../../../../../../scripts/code-atlas/generate.cjs#L128>)
- fs.readFileSync — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:129](<../../../../../../scripts/code-atlas/generate.cjs#L129>)
- path.join — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:129](<../../../../../../scripts/code-atlas/generate.cjs#L129>)
- Error — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:132](<../../../../../../scripts/code-atlas/generate.cjs#L132>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:133](<../../../../../../scripts/code-atlas/generate.cjs#L133>)
- &#91;...artifacts.keys(), MANIFEST&#93;.sort — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:136](<../../../../../../scripts/code-atlas/generate.cjs#L136>)
- 3 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:233](<../../../../../../scripts/code-atlas/atlas.test.cjs#L233>) — static-call-site; coverage not established.
- [scripts/code-atlas/atlas.test.cjs:234](<../../../../../../scripts/code-atlas/atlas.test.cjs#L234>) — static-call-site; coverage not established.
- [scripts/code-atlas/atlas.test.cjs:283](<../../../../../../scripts/code-atlas/atlas.test.cjs#L283>) — static-call-site; coverage not established.
- [scripts/code-atlas/atlas.test.cjs:15](<../../../../../../scripts/code-atlas/atlas.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-0282a2e5f97e0a59"></a>

## buildAtlas.&lt;anonymous@115:7&gt;

[scripts/code-atlas/generate.cjs:115](<../../../../../../scripts/code-atlas/generate.cjs#L115>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [buildAtlas](<generate.cjs.md#s-5686d6c95fadcfb1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- /^docs\\/engines\\/.*schema\\.json$/.test — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:116](<../../../../../../scripts/code-atlas/generate.cjs#L116>)
- /^examples\\/engines\\/.*\\/engine_manifest\\.json$/.test — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:117](<../../../../../../scripts/code-atlas/generate.cjs#L117>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:15](<../../../../../../scripts/code-atlas/atlas.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-b67828cd8e83219c"></a>

## buildAtlas.&lt;anonymous@119:10&gt;

[scripts/code-atlas/generate.cjs:119](<../../../../../../scripts/code-atlas/generate.cjs#L119>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [buildAtlas](<generate.cjs.md#s-5686d6c95fadcfb1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: { file: any; kind: string; declaration: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- file.endsWith — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:121](<../../../../../../scripts/code-atlas/generate.cjs#L121>)
- JSON.parse — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:124](<../../../../../../scripts/code-atlas/generate.cjs#L124>)
- fs.readFileSync(path.join(root, file), "utf8").replace — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:125](<../../../../../../scripts/code-atlas/generate.cjs#L125>)
- fs.readFileSync — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:125](<../../../../../../scripts/code-atlas/generate.cjs#L125>)
- path.join — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:125](<../../../../../../scripts/code-atlas/generate.cjs#L125>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:15](<../../../../../../scripts/code-atlas/atlas.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-cf00d5d75539f741"></a>

## existingArtifacts

[scripts/code-atlas/generate.cjs:149](<../../../../../../scripts/code-atlas/generate.cjs#L149>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Lists existing Atlas files without following links, rejecting non-files and unsafe generated output ancestors.

Purpose evidence: jsdoc.

Lexical owner: [scripts/code-atlas/generate.cjs](<generate.cjs.md#s-ac803ea826afb250>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [existingArtifacts.visit](<generate.cjs.md#s-41d7adecf44416f5>) — [scripts/code-atlas/generate.cjs:172](<../../../../../../scripts/code-atlas/generate.cjs#L172>)

**Called by (statically resolved):**

- [checkAtlas](<generate.cjs.md#s-c248b316de4d682d>) — [scripts/code-atlas/generate.cjs:223](<../../../../../../scripts/code-atlas/generate.cjs#L223>)
- [writeAtlas](<generate.cjs.md#s-b25f0ed450603f96>) — [scripts/code-atlas/generate.cjs:238](<../../../../../../scripts/code-atlas/generate.cjs#L238>)

Unresolved / external call sites: 9.

- path.join — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:151](<../../../../../../scripts/code-atlas/generate.cjs#L151>)
- path.join — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:152](<../../../../../../scripts/code-atlas/generate.cjs#L152>)
- fs.existsSync — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:154](<../../../../../../scripts/code-atlas/generate.cjs#L154>)
- fs.lstatSync(directory).isSymbolicLink — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:155](<../../../../../../scripts/code-atlas/generate.cjs#L155>)
- fs.lstatSync — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:155](<../../../../../../scripts/code-atlas/generate.cjs#L155>)
- fs.lstatSync(directory).isDirectory — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:156](<../../../../../../scripts/code-atlas/generate.cjs#L156>)
- fs.lstatSync — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:156](<../../../../../../scripts/code-atlas/generate.cjs#L156>)
- Error — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:158](<../../../../../../scripts/code-atlas/generate.cjs#L158>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:15](<../../../../../../scripts/code-atlas/atlas.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-41d7adecf44416f5"></a>

## existingArtifacts.visit

[scripts/code-atlas/generate.cjs:160](<../../../../../../scripts/code-atlas/generate.cjs#L160>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Traverses only the generated documentation directory and reports repository-relative file names.

Purpose evidence: jsdoc.

Lexical owner: [existingArtifacts](<generate.cjs.md#s-cf00d5d75539f741>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [existingArtifacts.visit](<generate.cjs.md#s-41d7adecf44416f5>) — [scripts/code-atlas/generate.cjs:166](<../../../../../../scripts/code-atlas/generate.cjs#L166>)
- [portable](<catalog.cjs.md#s-60683316afa4a320>) — [scripts/code-atlas/generate.cjs:168](<../../../../../../scripts/code-atlas/generate.cjs#L168>)

**Called by (statically resolved):**

- [existingArtifacts.visit](<generate.cjs.md#s-41d7adecf44416f5>) — [scripts/code-atlas/generate.cjs:166](<../../../../../../scripts/code-atlas/generate.cjs#L166>)
- [existingArtifacts](<generate.cjs.md#s-cf00d5d75539f741>) — [scripts/code-atlas/generate.cjs:172](<../../../../../../scripts/code-atlas/generate.cjs#L172>)

Unresolved / external call sites: 10.

- fs.existsSync — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:161](<../../../../../../scripts/code-atlas/generate.cjs#L161>)
- fs.readdirSync — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:162](<../../../../../../scripts/code-atlas/generate.cjs#L162>)
- path.join — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:163](<../../../../../../scripts/code-atlas/generate.cjs#L163>)
- entry.isSymbolicLink — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:164](<../../../../../../scripts/code-atlas/generate.cjs#L164>)
- Error — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:165](<../../../../../../scripts/code-atlas/generate.cjs#L165>)
- entry.isDirectory — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:166](<../../../../../../scripts/code-atlas/generate.cjs#L166>)
- entry.isFile — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:167](<../../../../../../scripts/code-atlas/generate.cjs#L167>)
- found.push — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:168](<../../../../../../scripts/code-atlas/generate.cjs#L168>)
- 2 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:15](<../../../../../../scripts/code-atlas/atlas.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-fe660342bc01da7c"></a>

## validateLinks

[scripts/code-atlas/generate.cjs:177](<../../../../../../scripts/code-atlas/generate.cjs#L177>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Validates generated relative links, explicit symbol anchors and source-line bounds against virtual artifacts and the source inventory.

Purpose evidence: jsdoc.

Exported as: validateLinks ([scripts/code-atlas/generate.cjs:1](<../../../../../../scripts/code-atlas/generate.cjs#L1>)).

Lexical owner: [scripts/code-atlas/generate.cjs](<generate.cjs.md#s-ac803ea826afb250>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| artifacts | any | compiler-inferred | required |
| data | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@208:125&gt;](<atlas.test.cjs.md#s-0d996b01dc2fd63f>) — [scripts/code-atlas/atlas.test.cjs:236](<../../../../../../scripts/code-atlas/atlas.test.cjs#L236>)
- [&lt;anonymous@208:125&gt;](<atlas.test.cjs.md#s-0d996b01dc2fd63f>) — [scripts/code-atlas/atlas.test.cjs:270](<../../../../../../scripts/code-atlas/atlas.test.cjs#L270>)
- [&lt;anonymous@208:125&gt;](<atlas.test.cjs.md#s-0d996b01dc2fd63f>) — [scripts/code-atlas/atlas.test.cjs:275](<../../../../../../scripts/code-atlas/atlas.test.cjs#L275>)
- [checkAtlas](<generate.cjs.md#s-c248b316de4d682d>) — [scripts/code-atlas/generate.cjs:222](<../../../../../../scripts/code-atlas/generate.cjs#L222>)
- [writeAtlas](<generate.cjs.md#s-b25f0ed450603f96>) — [scripts/code-atlas/generate.cjs:236](<../../../../../../scripts/code-atlas/generate.cjs#L236>)

Unresolved / external call sites: 30.

- Set — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:179](<../../../../../../scripts/code-atlas/generate.cjs#L179>)
- Map — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:180](<../../../../../../scripts/code-atlas/generate.cjs#L180>)
- data.files.map — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:180](<../../../../../../scripts/code-atlas/generate.cjs#L180>)
- /\\.(?:md&#124;svg)$/.test — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:182](<../../../../../../scripts/code-atlas/generate.cjs#L182>)
- file.endsWith — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:183](<../../../../../../scripts/code-atlas/generate.cjs#L183>)
- &#91;...content.matchAll(/\\&#93;\\(&lt;(&#91;^&gt;&#93;+)&gt;\\)/g)&#93;.map — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:184](<../../../../../../scripts/code-atlas/generate.cjs#L184>)
- content.matchAll — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:184](<../../../../../../scripts/code-atlas/generate.cjs#L184>)
- &#91;...content.matchAll(/href="(&#91;^"&#93;+)"/g)&#93;.map — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:185](<../../../../../../scripts/code-atlas/generate.cjs#L185>)
- 22 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:236](<../../../../../../scripts/code-atlas/atlas.test.cjs#L236>) — static-call-site; coverage not established.
- [scripts/code-atlas/atlas.test.cjs:270](<../../../../../../scripts/code-atlas/atlas.test.cjs#L270>) — static-call-site; coverage not established.
- [scripts/code-atlas/atlas.test.cjs:275](<../../../../../../scripts/code-atlas/atlas.test.cjs#L275>) — static-call-site; coverage not established.
- [scripts/code-atlas/atlas.test.cjs:15](<../../../../../../scripts/code-atlas/atlas.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-16c6a877a7200216"></a>

## validateLinks.&lt;anonymous@180:45&gt;

[scripts/code-atlas/generate.cjs:180](<../../../../../../scripts/code-atlas/generate.cjs#L180>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateLinks](<generate.cjs.md#s-fe660342bc01da7c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:15](<../../../../../../scripts/code-atlas/atlas.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-d056a6de957d05a7"></a>

## validateLinks.&lt;anonymous@184:55&gt;

[scripts/code-atlas/generate.cjs:184](<../../../../../../scripts/code-atlas/generate.cjs#L184>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateLinks](<generate.cjs.md#s-fe660342bc01da7c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| match | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:15](<../../../../../../scripts/code-atlas/atlas.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-743337b8d9a13513"></a>

## validateLinks.&lt;anonymous@185:54&gt;

[scripts/code-atlas/generate.cjs:185](<../../../../../../scripts/code-atlas/generate.cjs#L185>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [validateLinks](<generate.cjs.md#s-fe660342bc01da7c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| match | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:15](<../../../../../../scripts/code-atlas/atlas.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-c248b316de4d682d"></a>

## checkAtlas

[scripts/code-atlas/generate.cjs:221](<../../../../../../scripts/code-atlas/generate.cjs#L221>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Compares exact generated bytes and reports stale/missing/extra files without mutating the repository.

Purpose evidence: jsdoc.

Exported as: checkAtlas ([scripts/code-atlas/generate.cjs:1](<../../../../../../scripts/code-atlas/generate.cjs#L1>)).

Lexical owner: [scripts/code-atlas/generate.cjs](<generate.cjs.md#s-ac803ea826afb250>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| artifacts | any | compiler-inferred | required |
| data | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateLinks](<generate.cjs.md#s-fe660342bc01da7c>) — [scripts/code-atlas/generate.cjs:222](<../../../../../../scripts/code-atlas/generate.cjs#L222>)
- [existingArtifacts](<generate.cjs.md#s-cf00d5d75539f741>) — [scripts/code-atlas/generate.cjs:223](<../../../../../../scripts/code-atlas/generate.cjs#L223>)

**Called by (statically resolved):**

- [main](<../code-atlas.cjs.md#s-2ad6b99e90e1524d>) — [scripts/code-atlas.cjs:15](<../../../../../../scripts/code-atlas.cjs#L15>)
- [&lt;anonymous@208:125&gt;](<atlas.test.cjs.md#s-0d996b01dc2fd63f>) — [scripts/code-atlas/atlas.test.cjs:238](<../../../../../../scripts/code-atlas/atlas.test.cjs#L238>)
- [&lt;anonymous@208:125&gt;](<atlas.test.cjs.md#s-0d996b01dc2fd63f>) — [scripts/code-atlas/atlas.test.cjs:242](<../../../../../../scripts/code-atlas/atlas.test.cjs#L242>)
- [&lt;anonymous@208:125&gt;](<atlas.test.cjs.md#s-0d996b01dc2fd63f>) — [scripts/code-atlas/atlas.test.cjs:252](<../../../../../../scripts/code-atlas/atlas.test.cjs#L252>)

Unresolved / external call sites: 7.

- existing.includes — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:225](<../../../../../../scripts/code-atlas/generate.cjs#L225>)
- issues.push — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:225](<../../../../../../scripts/code-atlas/generate.cjs#L225>)
- fs.readFileSync — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:226](<../../../../../../scripts/code-atlas/generate.cjs#L226>)
- path.join — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:226](<../../../../../../scripts/code-atlas/generate.cjs#L226>)
- issues.push — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:227](<../../../../../../scripts/code-atlas/generate.cjs#L227>)
- artifacts.has — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:230](<../../../../../../scripts/code-atlas/generate.cjs#L230>)
- issues.push — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:230](<../../../../../../scripts/code-atlas/generate.cjs#L230>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:238](<../../../../../../scripts/code-atlas/atlas.test.cjs#L238>) — static-call-site; coverage not established.
- [scripts/code-atlas/atlas.test.cjs:242](<../../../../../../scripts/code-atlas/atlas.test.cjs#L242>) — static-call-site; coverage not established.
- [scripts/code-atlas/atlas.test.cjs:252](<../../../../../../scripts/code-atlas/atlas.test.cjs#L252>) — static-call-site; coverage not established.
- [scripts/code-atlas/atlas.test.cjs:15](<../../../../../../scripts/code-atlas/atlas.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-b25f0ed450603f96"></a>

## writeAtlas

[scripts/code-atlas/generate.cjs:235](<../../../../../../scripts/code-atlas/generate.cjs#L235>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Writes only generated Atlas artifacts. Removes obsolete previously owned files, while refusing to overwrite/delete unexpected manual files.

Purpose evidence: jsdoc.

Exported as: writeAtlas ([scripts/code-atlas/generate.cjs:1](<../../../../../../scripts/code-atlas/generate.cjs#L1>)).

Lexical owner: [scripts/code-atlas/generate.cjs](<generate.cjs.md#s-ac803ea826afb250>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| artifacts | any | compiler-inferred | required |
| data | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [validateLinks](<generate.cjs.md#s-fe660342bc01da7c>) — [scripts/code-atlas/generate.cjs:236](<../../../../../../scripts/code-atlas/generate.cjs#L236>)
- [existingArtifacts](<generate.cjs.md#s-cf00d5d75539f741>) — [scripts/code-atlas/generate.cjs:238](<../../../../../../scripts/code-atlas/generate.cjs#L238>)

**Called by (statically resolved):**

- [main](<../code-atlas.cjs.md#s-2ad6b99e90e1524d>) — [scripts/code-atlas.cjs:21](<../../../../../../scripts/code-atlas.cjs#L21>)
- [&lt;anonymous@208:125&gt;](<atlas.test.cjs.md#s-0d996b01dc2fd63f>) — [scripts/code-atlas/atlas.test.cjs:237](<../../../../../../scripts/code-atlas/atlas.test.cjs#L237>)
- [&lt;anonymous@208:125&gt;.&lt;anonymous@257:5&gt;](<atlas.test.cjs.md#s-1e13f51e6518c262>) — [scripts/code-atlas/atlas.test.cjs:257](<../../../../../../scripts/code-atlas/atlas.test.cjs#L257>)

Unresolved / external call sites: 23.

- Error — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:237](<../../../../../../scripts/code-atlas/generate.cjs#L237>)
- linkErrors.join — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:237](<../../../../../../scripts/code-atlas/generate.cjs#L237>)
- existing.includes — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:239](<../../../../../../scripts/code-atlas/generate.cjs#L239>)
- JSON.parse — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:240](<../../../../../../scripts/code-atlas/generate.cjs#L240>)
- fs.readFileSync — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:240](<../../../../../../scripts/code-atlas/generate.cjs#L240>)
- path.join — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:240](<../../../../../../scripts/code-atlas/generate.cjs#L240>)
- Array.isArray — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:243](<../../../../../../scripts/code-atlas/generate.cjs#L243>)
- previous.some — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:244](<../../../../../../scripts/code-atlas/generate.cjs#L244>)
- 15 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:237](<../../../../../../scripts/code-atlas/atlas.test.cjs#L237>) — static-call-site; coverage not established.
- [scripts/code-atlas/atlas.test.cjs:257](<../../../../../../scripts/code-atlas/atlas.test.cjs#L257>) — static-call-site; coverage not established.
- [scripts/code-atlas/atlas.test.cjs:15](<../../../../../../scripts/code-atlas/atlas.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-bdaae0e57e7e5e9c"></a>

## writeAtlas.&lt;anonymous@245:7&gt;

[scripts/code-atlas/generate.cjs:245](<../../../../../../scripts/code-atlas/generate.cjs#L245>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [writeAtlas](<generate.cjs.md#s-b25f0ed450603f96>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:247](<../../../../../../scripts/code-atlas/generate.cjs#L247>)
- path.posix.normalize — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:248](<../../../../../../scripts/code-atlas/generate.cjs#L248>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:15](<../../../../../../scripts/code-atlas/atlas.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-4761773770e51041"></a>

## writeAtlas.&lt;anonymous@252:38&gt;

[scripts/code-atlas/generate.cjs:252](<../../../../../../scripts/code-atlas/generate.cjs#L252>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [writeAtlas](<generate.cjs.md#s-b25f0ed450603f96>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- previous.includes — external-or-dynamic-dispatch; [scripts/code-atlas/generate.cjs:252](<../../../../../../scripts/code-atlas/generate.cjs#L252>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:15](<../../../../../../scripts/code-atlas/atlas.test.cjs#L15>) — file-import-only; coverage not established.
