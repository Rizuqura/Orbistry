# scripts/acceptance/electron-backend-identity-smoke.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-backend-identity-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-backend-identity-smoke.cjs](<electron-backend-identity-smoke.cjs.md#s-20b6624bdc56ccac>) (Module)
- [main](<electron-backend-identity-smoke.cjs.md#s-05124267a5569e9e>) (FunctionDeclaration)
- [main.&lt;anonymous@41:26&gt;](<electron-backend-identity-smoke.cjs.md#s-3dfb224ac3bf6868>) (ArrowFunction)
- [main.&lt;anonymous@42:24&gt;](<electron-backend-identity-smoke.cjs.md#s-488c5c2c746c3a86>) (ArrowFunction)
- [main.&lt;anonymous@42:24&gt;.&lt;anonymous@50:32&gt;](<electron-backend-identity-smoke.cjs.md#s-05f751f0b437b705>) (ArrowFunction)
- [main.&lt;anonymous@42:24&gt;.&lt;anonymous@54:29&gt;](<electron-backend-identity-smoke.cjs.md#s-acd8aaa12fbe7e39>) (ArrowFunction)
- [main.&lt;anonymous@64:7&gt;](<electron-backend-identity-smoke.cjs.md#s-acb4b52f465a196a>) (ArrowFunction)
- [main.&lt;anonymous@75:7&gt;](<electron-backend-identity-smoke.cjs.md#s-9ad0fda20869e19a>) (ArrowFunction)
- [main.&lt;anonymous@131:7&gt;](<electron-backend-identity-smoke.cjs.md#s-b69b1f6c7850a10d>) (ArrowFunction)
- [main.&lt;anonymous@172:7&gt;](<electron-backend-identity-smoke.cjs.md#s-353fe7c6dde94b31>) (ArrowFunction)
- [main.&lt;anonymous@199:37&gt;](<electron-backend-identity-smoke.cjs.md#s-79dae1200172c2c1>) (ArrowFunction)
- [main.&lt;anonymous@206:39&gt;](<electron-backend-identity-smoke.cjs.md#s-75af5205cab39c22>) (ArrowFunction)
- [main.&lt;anonymous@300:7&gt;](<electron-backend-identity-smoke.cjs.md#s-6256d8ecd11ec49c>) (ArrowFunction)
- [main.&lt;anonymous@311:37&gt;](<electron-backend-identity-smoke.cjs.md#s-4a421695dbb5e1a1>) (ArrowFunction)
- [main.&lt;anonymous@328:7&gt;](<electron-backend-identity-smoke.cjs.md#s-1a287588a72e09e9>) (ArrowFunction)
- [main.&lt;anonymous@353:24&gt;](<electron-backend-identity-smoke.cjs.md#s-3b956d2fdb9625b0>) (ArrowFunction)
- [main.&lt;anonymous@358:32&gt;](<electron-backend-identity-smoke.cjs.md#s-6546390d41cd49e2>) (ArrowFunction)
- [main.&lt;anonymous@381:16&gt;](<electron-backend-identity-smoke.cjs.md#s-68f83b0f94f2e7cf>) (ArrowFunction)
- [failed](<electron-backend-identity-smoke.cjs.md#s-16e356a65de8738c>) (FunctionExpression)

<a id="s-20b6624bdc56ccac"></a>

## scripts/acceptance/electron-backend-identity-smoke.cjs

[scripts/acceptance/electron-backend-identity-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<electron-backend-identity-smoke.cjs.md#s-05124267a5569e9e>) — [scripts/acceptance/electron-backend-identity-smoke.cjs:391](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L391>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 7.

- require — module-loader; [scripts/acceptance/electron-backend-identity-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L1>)
- require — module-loader; [scripts/acceptance/electron-backend-identity-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-backend-identity-smoke.cjs:3](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-backend-identity-smoke.cjs:4](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-backend-identity-smoke.cjs:5](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L5>)
- require — module-loader; [scripts/acceptance/electron-backend-identity-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L6>)
- main().catch — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:391](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L391>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-05124267a5569e9e"></a>

## main

[scripts/acceptance/electron-backend-identity-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L9>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Verifies the real menu, independent floating inspector, offline compilation, freshness and clipboard routing using disposable app/source data. Providers and system clipboard writes are intercepted in this isolated test only.

Purpose evidence: jsdoc.

Lexical owner: [scripts/acceptance/electron-backend-identity-smoke.cjs](<electron-backend-identity-smoke.cjs.md#s-20b6624bdc56ccac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [createChip](<electron-worldview-smoke.cjs.md#s-a98134da941ff00c>) — [scripts/acceptance/electron-backend-identity-smoke.cjs:62](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L62>)
- [readChips](<electron-worldview-smoke.cjs.md#s-ad27b3f857382c88>) — [scripts/acceptance/electron-backend-identity-smoke.cjs:69](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L69>)

**Called by (statically resolved):**

- [scripts/acceptance/electron-backend-identity-smoke.cjs](<electron-backend-identity-smoke.cjs.md#s-20b6624bdc56ccac>) — [scripts/acceptance/electron-backend-identity-smoke.cjs:391](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L391>)

Unresolved / external call sites: 185.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:10](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L10>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L11>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L11>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L13>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L14>)
- path.resolve — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:15](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L15>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:18](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L18>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:19](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L19>)
- 177 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-backend-identity-smoke.cjs:391](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L391>) — static-call-site; coverage not established.

<a id="s-3dfb224ac3bf6868"></a>

## main.&lt;anonymous@41:26&gt;

[scripts/acceptance/electron-backend-identity-smoke.cjs:41](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L41>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-backend-identity-smoke.cjs.md#s-05124267a5569e9e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- errors.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:41](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L41>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-488c5c2c746c3a86"></a>

## main.&lt;anonymous@42:24&gt;

[scripts/acceptance/electron-backend-identity-smoke.cjs:42](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L42>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-backend-identity-smoke.cjs.md#s-05124267a5569e9e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { BrowserWindow, clipboard } | { BrowserWindow: any; clipboard: any; } | compiler-inferred | required |
| repository | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- BrowserWindow.getAllWindows()&#91;0&#93;.showInactive — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:43](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L43>)
- BrowserWindow.getAllWindows — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:43](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L43>)
- process .getBuiltinModule("node:module") .createRequire — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:44](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L44>)
- process .getBuiltinModule — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:44](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L44>)
- require — module-loader; [scripts/acceptance/electron-backend-identity-smoke.cjs:48](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L48>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-05f751f0b437b705"></a>

## main.&lt;anonymous@42:24&gt;.&lt;anonymous@50:32&gt;

[scripts/acceptance/electron-backend-identity-smoke.cjs:50](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L50>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.&lt;anonymous@42:24&gt;](<electron-backend-identity-smoke.cjs.md#s-488c5c2c746c3a86>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:52](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L52>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-acd8aaa12fbe7e39"></a>

## main.&lt;anonymous@42:24&gt;.&lt;anonymous@54:29&gt;

[scripts/acceptance/electron-backend-identity-smoke.cjs:54](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L54>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.&lt;anonymous@42:24&gt;](<electron-backend-identity-smoke.cjs.md#s-488c5c2c746c3a86>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-acb4b52f465a196a"></a>

## main.&lt;anonymous@64:7&gt;

[scripts/acceptance/electron-backend-identity-smoke.cjs:64](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L64>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-backend-identity-smoke.cjs.md#s-05124267a5569e9e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- /Saving&#124;Loading/.test — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:65](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L65>)
- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:66](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L66>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9ad0fda20869e19a"></a>

## main.&lt;anonymous@75:7&gt;

[scripts/acceptance/electron-backend-identity-smoke.cjs:75](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L75>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-backend-identity-smoke.cjs.md#s-05124267a5569e9e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _ | any | compiler-inferred | required |
| { root, id, repository } | { root: any; id: any; repository: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 11.

- process .getBuiltinModule("node:module") .createRequire — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:76](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L76>)
- process .getBuiltinModule — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:76](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L76>)
- require( repository + "/electron/domains/entity/worldview-store.cjs", ).assignWorldViewFiles — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:79](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L79>)
- require — module-loader; [scripts/acceptance/electron-backend-identity-smoke.cjs:79](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L79>)
- require( repository + "/electron/domains/knowledge/knowledge-store.cjs", ).saveKnowledgeIndex — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:82](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L82>)
- require — module-loader; [scripts/acceptance/electron-backend-identity-smoke.cjs:82](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L82>)
- require( repository + "/electron/domains/entity/worldview-store.cjs", ).saveWorldViewChip — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:91](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L91>)
- require — module-loader; [scripts/acceptance/electron-backend-identity-smoke.cjs:91](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L91>)
- 3 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b69b1f6c7850a10d"></a>

## main.&lt;anonymous@131:7&gt;

[scripts/acceptance/electron-backend-identity-smoke.cjs:131](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L131>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-backend-identity-smoke.cjs.md#s-05124267a5569e9e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- /Saving&#124;Loading/.test — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:132](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L132>)
- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:133](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L133>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-353fe7c6dde94b31"></a>

## main.&lt;anonymous@172:7&gt;

[scripts/acceptance/electron-backend-identity-smoke.cjs:172](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L172>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-backend-identity-smoke.cjs.md#s-05124267a5569e9e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { root, id } | { root: any; id: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.worldview.request — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:173](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L173>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-79dae1200172c2c1"></a>

## main.&lt;anonymous@199:37&gt;

[scripts/acceptance/electron-backend-identity-smoke.cjs:199](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L199>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-backend-identity-smoke.cjs.md#s-05124267a5569e9e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-75af5205cab39c22"></a>

## main.&lt;anonymous@206:39&gt;

[scripts/acceptance/electron-backend-identity-smoke.cjs:206](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L206>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-backend-identity-smoke.cjs.md#s-05124267a5569e9e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6256d8ecd11ec49c"></a>

## main.&lt;anonymous@300:7&gt;

[scripts/acceptance/electron-backend-identity-smoke.cjs:300](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L300>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-backend-identity-smoke.cjs.md#s-05124267a5569e9e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { root, id } | { root: any; id: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.worldview.request — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:301](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L301>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4a421695dbb5e1a1"></a>

## main.&lt;anonymous@311:37&gt;

[scripts/acceptance/electron-backend-identity-smoke.cjs:311](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L311>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-backend-identity-smoke.cjs.md#s-05124267a5569e9e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1a287588a72e09e9"></a>

## main.&lt;anonymous@328:7&gt;

[scripts/acceptance/electron-backend-identity-smoke.cjs:328](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L328>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-backend-identity-smoke.cjs.md#s-05124267a5569e9e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { root, id } | { root: any; id: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.worldview.request — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:329](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L329>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3b956d2fdb9625b0"></a>

## main.&lt;anonymous@353:24&gt;

[scripts/acceptance/electron-backend-identity-smoke.cjs:353](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L353>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-backend-identity-smoke.cjs.md#s-05124267a5569e9e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { BrowserWindow } | { BrowserWindow: any; } | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- BrowserWindow.getAllWindows — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:354](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L354>)
- window.getBounds — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:355](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L355>)
- window.setSize — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:356](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L356>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6546390d41cd49e2"></a>

## main.&lt;anonymous@358:32&gt;

[scripts/acceptance/electron-backend-identity-smoke.cjs:358](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L358>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-backend-identity-smoke.cjs.md#s-05124267a5569e9e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- document .querySelector(".backend-identity-window") .getBoundingClientRect — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:359](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L359>)
- document .querySelector — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:359](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L359>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-68f83b0f94f2e7cf"></a>

## main.&lt;anonymous@381:16&gt;

[scripts/acceptance/electron-backend-identity-smoke.cjs:381](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L381>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-backend-identity-smoke.cjs.md#s-05124267a5569e9e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-16e356a65de8738c"></a>

## failed

[scripts/acceptance/electron-backend-identity-smoke.cjs:391](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L391>) · FunctionExpression · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-backend-identity-smoke.cjs](<electron-backend-identity-smoke.cjs.md#s-20b6624bdc56ccac>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-backend-identity-smoke.cjs:392](<../../../../../../scripts/acceptance/electron-backend-identity-smoke.cjs#L392>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
