# scripts/acceptance/electron-markdown-editor-smoke.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-markdown-editor-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-markdown-editor-smoke.cjs](<electron-markdown-editor-smoke.cjs.md#s-9185dd379115c6b7>) (Module)
- [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>) (FunctionDeclaration)
- [main.&lt;anonymous@36:23&gt;](<electron-markdown-editor-smoke.cjs.md#s-b37f56b70bdf36d1>) (ArrowFunction)
- [main.&lt;anonymous@37:26&gt;](<electron-markdown-editor-smoke.cjs.md#s-926e8bc31da79c53>) (ArrowFunction)
- [main.open](<electron-markdown-editor-smoke.cjs.md#s-cde8c3264e0fb25f>) (ArrowFunction)
- [main.edit](<electron-markdown-editor-smoke.cjs.md#s-2244cce5b07f9711>) (ArrowFunction)
- [main.close](<electron-markdown-editor-smoke.cjs.md#s-97d6ad53656e8a78>) (ArrowFunction)
- [main.&lt;anonymous@58:7&gt;](<electron-markdown-editor-smoke.cjs.md#s-3dd18e35c35cb242>) (ArrowFunction)
- [main.&lt;anonymous@58:7&gt;.&lt;anonymous@59:21&gt;](<electron-markdown-editor-smoke.cjs.md#s-f929839f2297985f>) (ArrowFunction)
- [main.&lt;anonymous@58:7&gt;.&lt;anonymous@59:21&gt;.&lt;anonymous@61:39&gt;](<electron-markdown-editor-smoke.cjs.md#s-2cf7d1b9d7a261a0>) (ArrowFunction)
- [&lt;anonymous@145:14&gt;](<electron-markdown-editor-smoke.cjs.md#s-3ce7ca13f10aea7c>) (ArrowFunction)

<a id="s-9185dd379115c6b7"></a>

## scripts/acceptance/electron-markdown-editor-smoke.cjs

[scripts/acceptance/electron-markdown-editor-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:145](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L145>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [scripts/acceptance/electron-markdown-editor-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L1>)
- require — module-loader; [scripts/acceptance/electron-markdown-editor-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-markdown-editor-smoke.cjs:3](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-markdown-editor-smoke.cjs:4](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-markdown-editor-smoke.cjs:5](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L5>)
- main().catch — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:145](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L145>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bbe16220e40bde68"></a>

## main

[scripts/acceptance/electron-markdown-editor-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L7>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-markdown-editor-smoke.cjs](<electron-markdown-editor-smoke.cjs.md#s-9185dd379115c6b7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [main.open](<electron-markdown-editor-smoke.cjs.md#s-cde8c3264e0fb25f>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:54](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L54>)
- [main.edit](<electron-markdown-editor-smoke.cjs.md#s-2244cce5b07f9711>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:55](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L55>)
- [main.close](<electron-markdown-editor-smoke.cjs.md#s-97d6ad53656e8a78>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:74](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L74>)
- [main.edit](<electron-markdown-editor-smoke.cjs.md#s-2244cce5b07f9711>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:85](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L85>)
- [main.open](<electron-markdown-editor-smoke.cjs.md#s-cde8c3264e0fb25f>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:87](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L87>)
- [main.edit](<electron-markdown-editor-smoke.cjs.md#s-2244cce5b07f9711>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:94](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L94>)
- [main.close](<electron-markdown-editor-smoke.cjs.md#s-97d6ad53656e8a78>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:109](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L109>)
- [main.open](<electron-markdown-editor-smoke.cjs.md#s-cde8c3264e0fb25f>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:113](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L113>)
- [main.edit](<electron-markdown-editor-smoke.cjs.md#s-2244cce5b07f9711>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:114](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L114>)
- [main.open](<electron-markdown-editor-smoke.cjs.md#s-cde8c3264e0fb25f>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:124](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L124>)

**Called by (statically resolved):**

- [scripts/acceptance/electron-markdown-editor-smoke.cjs](<electron-markdown-editor-smoke.cjs.md#s-9185dd379115c6b7>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:145](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L145>)

Unresolved / external call sites: 91.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L8>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L8>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L8>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L9>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L13>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L14>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L14>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:15](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L15>)
- 83 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-markdown-editor-smoke.cjs:145](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L145>) — static-call-site; coverage not established.

<a id="s-b37f56b70bdf36d1"></a>

## main.&lt;anonymous@36:23&gt;

[scripts/acceptance/electron-markdown-editor-smoke.cjs:36](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L36>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>).

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

<a id="s-926e8bc31da79c53"></a>

## main.&lt;anonymous@37:26&gt;

[scripts/acceptance/electron-markdown-editor-smoke.cjs:37](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L37>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- errors.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:37](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L37>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-cde8c3264e0fb25f"></a>

## main.open

[scripts/acceptance/electron-markdown-editor-smoke.cjs:40](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L40>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:54](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L54>)
- [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:87](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L87>)
- [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:113](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L113>)
- [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:124](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L124>)

Unresolved / external call sites: 2.

- page.locator(&#96;.file-row&#91;title="${name}"&#93;&#96;).dblclick — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:41](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L41>)
- page.locator — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:41](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L41>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-markdown-editor-smoke.cjs:54](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L54>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-markdown-editor-smoke.cjs:87](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L87>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-markdown-editor-smoke.cjs:113](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L113>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-markdown-editor-smoke.cjs:124](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L124>) — static-call-site; coverage not established.

<a id="s-2244cce5b07f9711"></a>

## main.edit

[scripts/acceptance/electron-markdown-editor-smoke.cjs:42](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L42>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:55](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L55>)
- [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:85](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L85>)
- [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:94](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L94>)
- [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:114](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L114>)

Unresolved / external call sites: 2.

- page.getByRole("button", { name: "Edit Markdown", exact: true }).click — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:43](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L43>)
- page.getByRole — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:43](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L43>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-markdown-editor-smoke.cjs:55](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L55>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-markdown-editor-smoke.cjs:85](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L85>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-markdown-editor-smoke.cjs:94](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L94>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-markdown-editor-smoke.cjs:114](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L114>) — static-call-site; coverage not established.

<a id="s-97d6ad53656e8a78"></a>

## main.close

[scripts/acceptance/electron-markdown-editor-smoke.cjs:48](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L48>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:74](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L74>)
- [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>) — [scripts/acceptance/electron-markdown-editor-smoke.cjs:109](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L109>)

Unresolved / external call sites: 2.

- page.getByRole("button", { name: "Close document", exact: true }).click — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:49](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L49>)
- page.getByRole — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:49](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L49>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-markdown-editor-smoke.cjs:74](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L74>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-markdown-editor-smoke.cjs:109](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L109>) — static-call-site; coverage not established.

<a id="s-3dd18e35c35cb242"></a>

## main.&lt;anonymous@58:7&gt;

[scripts/acceptance/electron-markdown-editor-smoke.cjs:58](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L58>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-markdown-editor-smoke.cjs.md#s-bbe16220e40bde68>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { dialog, BrowserWindow } | { dialog: any; BrowserWindow: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Promise — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:59](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L59>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f929839f2297985f"></a>

## main.&lt;anonymous@58:7&gt;.&lt;anonymous@59:21&gt;

[scripts/acceptance/electron-markdown-editor-smoke.cjs:59](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L59>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.&lt;anonymous@58:7&gt;](<electron-markdown-editor-smoke.cjs.md#s-3dd18e35c35cb242>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| resolve | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- BrowserWindow.getAllWindows()&#91;0&#93;.close — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:66](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L66>)
- BrowserWindow.getAllWindows — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:66](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L66>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2cf7d1b9d7a261a0"></a>

## main.&lt;anonymous@58:7&gt;.&lt;anonymous@59:21&gt;.&lt;anonymous@61:39&gt;

[scripts/acceptance/electron-markdown-editor-smoke.cjs:61](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L61>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.&lt;anonymous@58:7&gt;.&lt;anonymous@59:21&gt;](<electron-markdown-editor-smoke.cjs.md#s-f929839f2297985f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| _window | any | compiler-inferred | required |
| options | any | compiler-inferred | required |

Returns: number (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- resolve — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:63](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L63>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3ce7ca13f10aea7c"></a>

## &lt;anonymous@145:14&gt;

[scripts/acceptance/electron-markdown-editor-smoke.cjs:145](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L145>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-markdown-editor-smoke.cjs](<electron-markdown-editor-smoke.cjs.md#s-9185dd379115c6b7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-markdown-editor-smoke.cjs:146](<../../../../../../scripts/acceptance/electron-markdown-editor-smoke.cjs#L146>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
