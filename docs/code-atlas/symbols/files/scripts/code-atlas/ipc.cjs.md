# scripts/code-atlas/ipc.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/code-atlas/ipc.cjs:1](<../../../../../../scripts/code-atlas/ipc.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/code-atlas/ipc.cjs](<ipc.cjs.md#s-0ea5b5bdba75698c>) (Module)
- [discoverIpc](<ipc.cjs.md#s-c350b63746d45342>) (FunctionDeclaration)
- [discoverIpc.literal](<ipc.cjs.md#s-39da2512be2b7207>) (FunctionDeclaration)
- [discoverIpc.wrapperPrefix](<ipc.cjs.md#s-3b917a5ed217fd8d>) (FunctionDeclaration)
- [discoverIpc.wrapperPrefix.find](<ipc.cjs.md#s-c18afbc6eff7bd7f>) (FunctionDeclaration)
- [discoverIpc.wrapperPrefix.find.body](<ipc.cjs.md#s-f07610b5d3c2ecad>) (FunctionDeclaration)
- [discoverIpc.tableExpansion](<ipc.cjs.md#s-aa2039f9943d3c47>) (FunctionDeclaration)
- [discoverIpc.tableExpansion.&lt;anonymous@93:57&gt;](<ipc.cjs.md#s-f188cd758ff78d7c>) (ArrowFunction)
- [discoverIpc.visit](<ipc.cjs.md#s-42a983d605a7a10f>) (FunctionDeclaration)
- [discoverIpc.visit.&lt;anonymous@190:33&gt;](<ipc.cjs.md#s-a1839cfe67200d6a>) (ArrowFunction)
- [discoverIpc.visit.&lt;anonymous@206:29&gt;](<ipc.cjs.md#s-b68029ce0befe14f>) (ArrowFunction)

<a id="s-0ea5b5bdba75698c"></a>

## scripts/code-atlas/ipc.cjs

[scripts/code-atlas/ipc.cjs:1](<../../../../../../scripts/code-atlas/ipc.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [scripts/code-atlas/ipc.cjs:1](<../../../../../../scripts/code-atlas/ipc.cjs#L1>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:7](<../../../../../../scripts/code-atlas/atlas.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-c350b63746d45342"></a>

## discoverIpc

[scripts/code-atlas/ipc.cjs:4](<../../../../../../scripts/code-atlas/ipc.cjs#L4>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Extracts named Electron channels and narrow local wrapper expansions without executing handlers. Dynamic patterns remain separate records.

Purpose evidence: jsdoc.

Exported as: discoverIpc ([scripts/code-atlas/ipc.cjs:1](<../../../../../../scripts/code-atlas/ipc.cjs#L1>)).

Lexical owner: [scripts/code-atlas/ipc.cjs](<ipc.cjs.md#s-0ea5b5bdba75698c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| state | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [discoverIpc.visit](<ipc.cjs.md#s-42a983d605a7a10f>) — [scripts/code-atlas/ipc.cjs:208](<../../../../../../scripts/code-atlas/ipc.cjs#L208>)

**Called by (statically resolved):**

- [&lt;anonymous@168:114&gt;](<atlas.test.cjs.md#s-13b66e59ab593aea>) — [scripts/code-atlas/atlas.test.cjs:176](<../../../../../../scripts/code-atlas/atlas.test.cjs#L176>)
- [buildAtlas](<generate.cjs.md#s-5686d6c95fadcfb1>) — [scripts/code-atlas/generate.cjs:112](<../../../../../../scripts/code-atlas/generate.cjs#L112>)

Unresolved / external call sites: 3.

- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:7](<../../../../../../scripts/code-atlas/ipc.cjs#L7>)
- /\\.test\\./.test — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:7](<../../../../../../scripts/code-atlas/ipc.cjs#L7>)
- Map — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:8](<../../../../../../scripts/code-atlas/ipc.cjs#L8>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:176](<../../../../../../scripts/code-atlas/atlas.test.cjs#L176>) — static-call-site; coverage not established.
- [scripts/code-atlas/atlas.test.cjs:7](<../../../../../../scripts/code-atlas/atlas.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-39da2512be2b7207"></a>

## discoverIpc.literal

[scripts/code-atlas/ipc.cjs:10](<../../../../../../scripts/code-atlas/ipc.cjs#L10>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Obtains only literal values; interpolated values are never guessed.

Purpose evidence: jsdoc.

Lexical owner: [discoverIpc](<ipc.cjs.md#s-c350b63746d45342>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [discoverIpc.tableExpansion.&lt;anonymous@93:57&gt;](<ipc.cjs.md#s-f188cd758ff78d7c>) — [scripts/code-atlas/ipc.cjs:102](<../../../../../../scripts/code-atlas/ipc.cjs#L102>)
- [discoverIpc.visit](<ipc.cjs.md#s-42a983d605a7a10f>) — [scripts/code-atlas/ipc.cjs:138](<../../../../../../scripts/code-atlas/ipc.cjs#L138>)

Unresolved / external call sites: 2.

- ts.isStringLiteral — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:12](<../../../../../../scripts/code-atlas/ipc.cjs#L12>)
- ts.isNoSubstitutionTemplateLiteral — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:12](<../../../../../../scripts/code-atlas/ipc.cjs#L12>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:7](<../../../../../../scripts/code-atlas/atlas.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-3b917a5ed217fd8d"></a>

## discoverIpc.wrapperPrefix

[scripts/code-atlas/ipc.cjs:17](<../../../../../../scripts/code-atlas/ipc.cjs#L17>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Recognizes the reviewed local AI handle wrapper from its own declaration and ipcMain.handle template.

Purpose evidence: jsdoc.

Lexical owner: [discoverIpc](<ipc.cjs.md#s-c350b63746d45342>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| expression | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [discoverIpc.wrapperPrefix.find](<ipc.cjs.md#s-c18afbc6eff7bd7f>) — [scripts/code-atlas/ipc.cjs:54](<../../../../../../scripts/code-atlas/ipc.cjs#L54>)

**Called by (statically resolved):**

- [discoverIpc.visit](<ipc.cjs.md#s-42a983d605a7a10f>) — [scripts/code-atlas/ipc.cjs:135](<../../../../../../scripts/code-atlas/ipc.cjs#L135>)

Unresolved / external call sites: 4.

- state.recordFor — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:18](<../../../../../../scripts/code-atlas/ipc.cjs#L18>)
- wrapperCache.has — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:20](<../../../../../../scripts/code-atlas/ipc.cjs#L20>)
- wrapperCache.get — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:20](<../../../../../../scripts/code-atlas/ipc.cjs#L20>)
- wrapperCache.set — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:55](<../../../../../../scripts/code-atlas/ipc.cjs#L55>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:7](<../../../../../../scripts/code-atlas/atlas.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-c18afbc6eff7bd7f"></a>

## discoverIpc.wrapperPrefix.find

[scripts/code-atlas/ipc.cjs:23](<../../../../../../scripts/code-atlas/ipc.cjs#L23>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Checks the bound wrapper's syntax for a direct channel-prefix template.

Purpose evidence: jsdoc.

Lexical owner: [discoverIpc.wrapperPrefix](<ipc.cjs.md#s-3b917a5ed217fd8d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [discoverIpc.wrapperPrefix.find.body](<ipc.cjs.md#s-f07610b5d3c2ecad>) — [scripts/code-atlas/ipc.cjs:50](<../../../../../../scripts/code-atlas/ipc.cjs#L50>)

**Called by (statically resolved):**

- [discoverIpc.wrapperPrefix](<ipc.cjs.md#s-3b917a5ed217fd8d>) — [scripts/code-atlas/ipc.cjs:54](<../../../../../../scripts/code-atlas/ipc.cjs#L54>)

Unresolved / external call sites: 3.

- state.nodeRecords.get — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:25](<../../../../../../scripts/code-atlas/ipc.cjs#L25>)
- node.parameters&#91;0&#93;.name.getText — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:28](<../../../../../../scripts/code-atlas/ipc.cjs#L28>)
- ts.forEachChild — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:52](<../../../../../../scripts/code-atlas/ipc.cjs#L52>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:7](<../../../../../../scripts/code-atlas/atlas.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-f07610b5d3c2ecad"></a>

## discoverIpc.wrapperPrefix.find.body

[scripts/code-atlas/ipc.cjs:30](<../../../../../../scripts/code-atlas/ipc.cjs#L30>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Scans the wrapper body for ipcMain.handle(&#96;${parameter}&#96;) without evaluating it.

Purpose evidence: jsdoc.

Lexical owner: [discoverIpc.wrapperPrefix.find](<ipc.cjs.md#s-c18afbc6eff7bd7f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| child | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [discoverIpc.wrapperPrefix.find](<ipc.cjs.md#s-c18afbc6eff7bd7f>) — [scripts/code-atlas/ipc.cjs:50](<../../../../../../scripts/code-atlas/ipc.cjs#L50>)

Unresolved / external call sites: 6.

- ts.isCallExpression — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:32](<../../../../../../scripts/code-atlas/ipc.cjs#L32>)
- ts.isPropertyAccessExpression — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:33](<../../../../../../scripts/code-atlas/ipc.cjs#L33>)
- child.expression.expression.getText — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:34](<../../../../../../scripts/code-atlas/ipc.cjs#L34>)
- ts.isTemplateExpression — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:40](<../../../../../../scripts/code-atlas/ipc.cjs#L40>)
- channel.templateSpans&#91;0&#93;.expression.getText — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:42](<../../../../../../scripts/code-atlas/ipc.cjs#L42>)
- ts.forEachChild — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:48](<../../../../../../scripts/code-atlas/ipc.cjs#L48>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:7](<../../../../../../scripts/code-atlas/atlas.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-aa2039f9943d3c47"></a>

## discoverIpc.tableExpansion

[scripts/code-atlas/ipc.cjs:59](<../../../../../../scripts/code-atlas/ipc.cjs#L59>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Expands an Object.entries operation table only when its initializer and keys are statically literal.

Purpose evidence: jsdoc.

Lexical owner: [discoverIpc](<ipc.cjs.md#s-c350b63746d45342>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |
| channel | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [discoverIpc.visit](<ipc.cjs.md#s-42a983d605a7a10f>) — [scripts/code-atlas/ipc.cjs:187](<../../../../../../scripts/code-atlas/ipc.cjs#L187>)

Unresolved / external call sites: 12.

- ts.isTemplateExpression — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:61](<../../../../../../scripts/code-atlas/ipc.cjs#L61>)
- ts.isForOfStatement — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:67](<../../../../../../scripts/code-atlas/ipc.cjs#L67>)
- ts.isVariableDeclarationList — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:68](<../../../../../../scripts/code-atlas/ipc.cjs#L68>)
- ts.isArrayBindingPattern — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:72](<../../../../../../scripts/code-atlas/ipc.cjs#L72>)
- binding.elements&#91;0&#93;?.name?.getText — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:73](<../../../../../../scripts/code-atlas/ipc.cjs#L73>)
- channel.templateSpans&#91;0&#93;.expression.getText — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:74](<../../../../../../scripts/code-atlas/ipc.cjs#L74>)
- ts.isCallExpression — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:79](<../../../../../../scripts/code-atlas/ipc.cjs#L79>)
- entries.expression.getText — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:80](<../../../../../../scripts/code-atlas/ipc.cjs#L80>)
- 4 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:7](<../../../../../../scripts/code-atlas/atlas.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-f188cd758ff78d7c"></a>

## discoverIpc.tableExpansion.&lt;anonymous@93:57&gt;

[scripts/code-atlas/ipc.cjs:93](<../../../../../../scripts/code-atlas/ipc.cjs#L93>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [discoverIpc.tableExpansion](<ipc.cjs.md#s-aa2039f9943d3c47>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| property | any | compiler-inferred | required |

Returns: {} (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [discoverIpc.literal](<ipc.cjs.md#s-39da2512be2b7207>) — [scripts/code-atlas/ipc.cjs:102](<../../../../../../scripts/code-atlas/ipc.cjs#L102>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- ts.isPropertyAssignment — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:95](<../../../../../../scripts/code-atlas/ipc.cjs#L95>)
- ts.isMethodDeclaration — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:96](<../../../../../../scripts/code-atlas/ipc.cjs#L96>)
- ts.isComputedPropertyName — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:97](<../../../../../../scripts/code-atlas/ipc.cjs#L97>)
- ts.isIdentifier — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:100](<../../../../../../scripts/code-atlas/ipc.cjs#L100>)
- ts.isPropertyAssignment — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:103](<../../../../../../scripts/code-atlas/ipc.cjs#L103>)
- state.recordFor — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:104](<../../../../../../scripts/code-atlas/ipc.cjs#L104>)
- state.recordFor — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:105](<../../../../../../scripts/code-atlas/ipc.cjs#L105>)

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:7](<../../../../../../scripts/code-atlas/atlas.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-42a983d605a7a10f"></a>

## discoverIpc.visit

[scripts/code-atlas/ipc.cjs:117](<../../../../../../scripts/code-atlas/ipc.cjs#L117>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Records boundary syntax independently from ordinary function calls and runtime reachability.

Purpose evidence: jsdoc.

Lexical owner: [discoverIpc](<ipc.cjs.md#s-c350b63746d45342>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |
| owner | any | compiler-inferred | optional, default present |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [discoverIpc.wrapperPrefix](<ipc.cjs.md#s-3b917a5ed217fd8d>) — [scripts/code-atlas/ipc.cjs:135](<../../../../../../scripts/code-atlas/ipc.cjs#L135>)
- [discoverIpc.literal](<ipc.cjs.md#s-39da2512be2b7207>) — [scripts/code-atlas/ipc.cjs:138](<../../../../../../scripts/code-atlas/ipc.cjs#L138>)
- [discoverIpc.tableExpansion](<ipc.cjs.md#s-aa2039f9943d3c47>) — [scripts/code-atlas/ipc.cjs:187](<../../../../../../scripts/code-atlas/ipc.cjs#L187>)

**Called by (statically resolved):**

- [discoverIpc.visit.&lt;anonymous@206:29&gt;](<ipc.cjs.md#s-b68029ce0befe14f>) — [scripts/code-atlas/ipc.cjs:206](<../../../../../../scripts/code-atlas/ipc.cjs#L206>)
- [discoverIpc](<ipc.cjs.md#s-c350b63746d45342>) — [scripts/code-atlas/ipc.cjs:208](<../../../../../../scripts/code-atlas/ipc.cjs#L208>)

Unresolved / external call sites: 19.

- state.nodeRecords.get — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:118](<../../../../../../scripts/code-atlas/ipc.cjs#L118>)
- ts.isCallExpression — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:119](<../../../../../../scripts/code-atlas/ipc.cjs#L119>)
- ts.isPropertyAccessExpression — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:121](<../../../../../../scripts/code-atlas/ipc.cjs#L121>)
- ts.isPropertyAccessExpression — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:124](<../../../../../../scripts/code-atlas/ipc.cjs#L124>)
- expression.expression.getText — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:125](<../../../../../../scripts/code-atlas/ipc.cjs#L125>)
- &#91;"ipcMain", "trustedIpc"&#93;.includes — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:128](<../../../../../../scripts/code-atlas/ipc.cjs#L128>)
- ts.isIdentifier — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:131](<../../../../../../scripts/code-atlas/ipc.cjs#L131>)
- ts.isIdentifier — external-or-dynamic-dispatch; [scripts/code-atlas/ipc.cjs:134](<../../../../../../scripts/code-atlas/ipc.cjs#L134>)
- 11 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:7](<../../../../../../scripts/code-atlas/atlas.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-a1839cfe67200d6a"></a>

## discoverIpc.visit.&lt;anonymous@190:33&gt;

[scripts/code-atlas/ipc.cjs:190](<../../../../../../scripts/code-atlas/ipc.cjs#L190>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [discoverIpc.visit](<ipc.cjs.md#s-42a983d605a7a10f>).

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

- [scripts/code-atlas/atlas.test.cjs:7](<../../../../../../scripts/code-atlas/atlas.test.cjs#L7>) — file-import-only; coverage not established.

<a id="s-b68029ce0befe14f"></a>

## discoverIpc.visit.&lt;anonymous@206:29&gt;

[scripts/code-atlas/ipc.cjs:206](<../../../../../../scripts/code-atlas/ipc.cjs#L206>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [discoverIpc.visit](<ipc.cjs.md#s-42a983d605a7a10f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| child | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [discoverIpc.visit](<ipc.cjs.md#s-42a983d605a7a10f>) — [scripts/code-atlas/ipc.cjs:206](<../../../../../../scripts/code-atlas/ipc.cjs#L206>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/code-atlas/atlas.test.cjs:7](<../../../../../../scripts/code-atlas/atlas.test.cjs#L7>) — file-import-only; coverage not established.
