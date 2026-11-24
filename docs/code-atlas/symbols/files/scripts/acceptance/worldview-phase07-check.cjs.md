# scripts/acceptance/worldview-phase07-check.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/worldview-phase07-check.cjs:1](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/worldview-phase07-check.cjs](<worldview-phase07-check.cjs.md#s-406c9f9967a8d6b8>) (Module)
- [waitSaved](<worldview-phase07-check.cjs.md#s-80d7ad6cdec9c31b>) (FunctionDeclaration)
- [waitSaved.&lt;anonymous@7:30&gt;](<worldview-phase07-check.cjs.md#s-62628d2e4e3373df>) (ArrowFunction)
- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) (FunctionDeclaration)
- [verifyWorldTagSearch.&lt;anonymous@37:28&gt;](<worldview-phase07-check.cjs.md#s-d3ce4ae5b1649458>) (ArrowFunction)
- [verifyWorldTagSearch.search](<worldview-phase07-check.cjs.md#s-ecf7c86419622fd1>) (FunctionDeclaration)
- [verifyWorldTagSearch.search.&lt;anonymous@60:32&gt;](<worldview-phase07-check.cjs.md#s-7303a0eefa4ede83>) (ArrowFunction)
- [verifyWorldTagSearch.&lt;anonymous@72:44&gt;](<worldview-phase07-check.cjs.md#s-6a246aafb029939b>) (ArrowFunction)
- [verifyWorldTagSearch.&lt;anonymous@85:45&gt;](<worldview-phase07-check.cjs.md#s-08a2bf2476639d96>) (ArrowFunction)
- [verifyWorldTagSearch.&lt;anonymous@85:45&gt;.&lt;anonymous@86:17&gt;](<worldview-phase07-check.cjs.md#s-3e8d8eb5a2f2dd06>) (ArrowFunction)
- [verifyWorldTagSearch.&lt;anonymous@93:39&gt;](<worldview-phase07-check.cjs.md#s-d5d32a1a97fad8ef>) (ArrowFunction)
- [verifyWorldTagSearch.&lt;anonymous@98:36&gt;](<worldview-phase07-check.cjs.md#s-79c5b1fd7fcdf85f>) (ArrowFunction)
- [verifyWorldTagSearch.&lt;anonymous@107:30&gt;](<worldview-phase07-check.cjs.md#s-f20a2c628f8ab52e>) (ArrowFunction)
- [verifyWorldTagSearch.&lt;anonymous@151:5&gt;](<worldview-phase07-check.cjs.md#s-e1401ba661fb95a1>) (ArrowFunction)
- [verifyWorldTagSearch.&lt;anonymous@154:34&gt;](<worldview-phase07-check.cjs.md#s-ca2fefd65905a41d>) (ArrowFunction)
- [verifyWorldTagSearch.&lt;anonymous@166:34&gt;](<worldview-phase07-check.cjs.md#s-3b6fff7e509264a7>) (ArrowFunction)
- [verifyWorldTagSearch.&lt;anonymous@179:34&gt;](<worldview-phase07-check.cjs.md#s-a5e3d89a3d720bc8>) (ArrowFunction)
- [verifyWorldTagSearch.&lt;anonymous@180:19&gt;](<worldview-phase07-check.cjs.md#s-c4389ce0ac377b29>) (ArrowFunction)
- [verifyWorldTagSearch.&lt;anonymous@209:5&gt;](<worldview-phase07-check.cjs.md#s-3962f66ea25d883d>) (ArrowFunction)
- [verifyWorldTagSearch.&lt;anonymous@209:5&gt;.&lt;anonymous@210:22&gt;](<worldview-phase07-check.cjs.md#s-6e3dad7ae5f5270c>) (ArrowFunction)
- [verifyWorldTagSearch.&lt;anonymous@243:5&gt;](<worldview-phase07-check.cjs.md#s-bda58f1bbe926567>) (ArrowFunction)

<a id="s-406c9f9967a8d6b8"></a>

## scripts/acceptance/worldview-phase07-check.cjs

[scripts/acceptance/worldview-phase07-check.cjs:1](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [scripts/acceptance/worldview-phase07-check.cjs:1](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L1>)
- require — module-loader; [scripts/acceptance/worldview-phase07-check.cjs:2](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L2>)
- require — module-loader; [scripts/acceptance/worldview-phase07-check.cjs:3](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L3>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-80d7ad6cdec9c31b"></a>

## waitSaved

[scripts/acceptance/worldview-phase07-check.cjs:6](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L6>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Waits for actual persisted writes and reports errors before testing the search index.

Purpose evidence: jsdoc.

Lexical owner: [scripts/acceptance/worldview-phase07-check.cjs](<worldview-phase07-check.cjs.md#s-406c9f9967a8d6b8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| page | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) — [scripts/acceptance/worldview-phase07-check.cjs:35](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L35>)
- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) — [scripts/acceptance/worldview-phase07-check.cjs:205](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L205>)
- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) — [scripts/acceptance/worldview-phase07-check.cjs:225](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L225>)
- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) — [scripts/acceptance/worldview-phase07-check.cjs:255](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L255>)

Unresolved / external call sites: 1.

- page.waitForFunction — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:7](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L7>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase07-check.cjs:35](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L35>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase07-check.cjs:205](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L205>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase07-check.cjs:225](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L225>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase07-check.cjs:255](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L255>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-62628d2e4e3373df"></a>

## waitSaved.&lt;anonymous@7:30&gt;

[scripts/acceptance/worldview-phase07-check.cjs:7](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L7>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [waitSaved](<worldview-phase07-check.cjs.md#s-80d7ad6cdec9c31b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:8](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L8>)
- status.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:9](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L9>)
- Error — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:9](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L9>)
- /Saving&#124;Loading/.test — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:10](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L10>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-0e57f6b27fe7cda5"></a>

## verifyWorldTagSearch

[scripts/acceptance/worldview-phase07-check.cjs:15](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L15>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Verifies persisted-only tag search, measured explanations, input/camera isolation, stable-ID location and metadata invalidation through desktop UI.

Purpose evidence: jsdoc.

Exported as: verifyWorldTagSearch ([scripts/acceptance/worldview-phase07-check.cjs:1](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L1>)).

Lexical owner: [scripts/acceptance/worldview-phase07-check.cjs](<worldview-phase07-check.cjs.md#s-406c9f9967a8d6b8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { page, vault, readChips, gridImage } | { page: any; vault: any; readChips: any; gridImage: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [waitSaved](<worldview-phase07-check.cjs.md#s-80d7ad6cdec9c31b>) — [scripts/acceptance/worldview-phase07-check.cjs:35](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L35>)
- [verifyWorldTagSearch.search](<worldview-phase07-check.cjs.md#s-ecf7c86419622fd1>) — [scripts/acceptance/worldview-phase07-check.cjs:71](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L71>)
- [verifyWorldTagSearch.search](<worldview-phase07-check.cjs.md#s-ecf7c86419622fd1>) — [scripts/acceptance/worldview-phase07-check.cjs:100](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L100>)
- [verifyWorldTagSearch.search](<worldview-phase07-check.cjs.md#s-ecf7c86419622fd1>) — [scripts/acceptance/worldview-phase07-check.cjs:102](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L102>)
- [verifyWorldTagSearch.search](<worldview-phase07-check.cjs.md#s-ecf7c86419622fd1>) — [scripts/acceptance/worldview-phase07-check.cjs:105](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L105>)
- [verifyWorldTagSearch.search](<worldview-phase07-check.cjs.md#s-ecf7c86419622fd1>) — [scripts/acceptance/worldview-phase07-check.cjs:115](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L115>)
- [verifyWorldTagSearch.search](<worldview-phase07-check.cjs.md#s-ecf7c86419622fd1>) — [scripts/acceptance/worldview-phase07-check.cjs:123](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L123>)
- [verifyWorldTagSearch.search](<worldview-phase07-check.cjs.md#s-ecf7c86419622fd1>) — [scripts/acceptance/worldview-phase07-check.cjs:146](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L146>)
- [verifyWorldTagSearch.search](<worldview-phase07-check.cjs.md#s-ecf7c86419622fd1>) — [scripts/acceptance/worldview-phase07-check.cjs:174](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L174>)
- [verifyWorldTagSearch.search](<worldview-phase07-check.cjs.md#s-ecf7c86419622fd1>) — [scripts/acceptance/worldview-phase07-check.cjs:192](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L192>)
- [waitSaved](<worldview-phase07-check.cjs.md#s-80d7ad6cdec9c31b>) — [scripts/acceptance/worldview-phase07-check.cjs:205](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L205>)
- [verifyWorldTagSearch.search](<worldview-phase07-check.cjs.md#s-ecf7c86419622fd1>) — [scripts/acceptance/worldview-phase07-check.cjs:206](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L206>)
- [verifyWorldTagSearch.search](<worldview-phase07-check.cjs.md#s-ecf7c86419622fd1>) — [scripts/acceptance/worldview-phase07-check.cjs:213](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L213>)
- [waitSaved](<worldview-phase07-check.cjs.md#s-80d7ad6cdec9c31b>) — [scripts/acceptance/worldview-phase07-check.cjs:225](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L225>)
- [verifyWorldTagSearch.search](<worldview-phase07-check.cjs.md#s-ecf7c86419622fd1>) — [scripts/acceptance/worldview-phase07-check.cjs:226](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L226>)
- [verifyWorldTagSearch.search](<worldview-phase07-check.cjs.md#s-ecf7c86419622fd1>) — [scripts/acceptance/worldview-phase07-check.cjs:231](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L231>)
- [waitSaved](<worldview-phase07-check.cjs.md#s-80d7ad6cdec9c31b>) — [scripts/acceptance/worldview-phase07-check.cjs:255](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L255>)

**Called by (statically resolved):**

- [main](<electron-worldview-smoke.cjs.md#s-d74fd257ed7793d3>) — [scripts/acceptance/electron-worldview-smoke.cjs:1207](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L1207>)

Unresolved / external call sites: 156.

- console.log — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:16](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L16>)
- page.getByRole("button", { name: "+ Add Chip", exact: true }).click — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:26](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L26>)
- page.getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:26](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L26>)
- page.getByRole — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:27](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L27>)
- dialog.getByLabel("Chip name", { exact: true }).fill — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:28](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L28>)
- dialog.getByLabel — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:28](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L28>)
- dialog.getByLabel("Tags (optional)", { exact: true }).fill — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:29](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L29>)
- dialog.getByLabel — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:29](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L29>)
- 148 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:1207](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L1207>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-d3ce4ae5b1649458"></a>

## verifyWorldTagSearch.&lt;anonymous@37:28&gt;

[scripts/acceptance/worldview-phase07-check.cjs:37](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L37>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entity | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-ecf7c86419622fd1"></a>

## verifyWorldTagSearch.search

[scripts/acceptance/worldview-phase07-check.cjs:58](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L58>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Submits a query and waits for its current debounced response, rejecting actual search errors.

Purpose evidence: jsdoc.

Lexical owner: [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| query | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) — [scripts/acceptance/worldview-phase07-check.cjs:71](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L71>)
- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) — [scripts/acceptance/worldview-phase07-check.cjs:100](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L100>)
- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) — [scripts/acceptance/worldview-phase07-check.cjs:102](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L102>)
- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) — [scripts/acceptance/worldview-phase07-check.cjs:105](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L105>)
- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) — [scripts/acceptance/worldview-phase07-check.cjs:115](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L115>)
- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) — [scripts/acceptance/worldview-phase07-check.cjs:123](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L123>)
- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) — [scripts/acceptance/worldview-phase07-check.cjs:146](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L146>)
- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) — [scripts/acceptance/worldview-phase07-check.cjs:174](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L174>)
- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) — [scripts/acceptance/worldview-phase07-check.cjs:192](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L192>)
- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) — [scripts/acceptance/worldview-phase07-check.cjs:206](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L206>)
- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) — [scripts/acceptance/worldview-phase07-check.cjs:213](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L213>)
- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) — [scripts/acceptance/worldview-phase07-check.cjs:226](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L226>)
- [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>) — [scripts/acceptance/worldview-phase07-check.cjs:231](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L231>)

Unresolved / external call sites: 2.

- input.fill — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:59](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L59>)
- page.waitForFunction — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:60](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L60>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/worldview-phase07-check.cjs:71](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L71>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase07-check.cjs:100](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L100>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase07-check.cjs:102](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L102>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase07-check.cjs:105](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L105>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase07-check.cjs:115](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L115>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase07-check.cjs:123](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L123>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase07-check.cjs:146](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L146>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase07-check.cjs:174](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L174>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase07-check.cjs:192](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L192>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase07-check.cjs:206](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L206>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase07-check.cjs:213](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L213>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase07-check.cjs:226](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L226>) — static-call-site; coverage not established.
- [scripts/acceptance/worldview-phase07-check.cjs:231](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L231>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-7303a0eefa4ede83"></a>

## verifyWorldTagSearch.search.&lt;anonymous@60:32&gt;

[scripts/acceptance/worldview-phase07-check.cjs:60](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L60>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyWorldTagSearch.search](<worldview-phase07-check.cjs.md#s-ecf7c86419622fd1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:61](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L61>)
- dropdown?.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:62](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L62>)
- Error — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:63](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L63>)
- dropdown?.getAttribute — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:65](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L65>)
- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:67](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L67>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-6a246aafb029939b"></a>

## verifyWorldTagSearch.&lt;anonymous@72:44&gt;

[scripts/acceptance/worldview-phase07-check.cjs:72](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L72>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| element | any | compiler-inferred | required |

Returns: { shadow: any; iconBorder: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- getComputedStyle — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:73](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L73>)
- getComputedStyle — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:74](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L74>)
- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:75](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L75>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-08a2bf2476639d96"></a>

## verifyWorldTagSearch.&lt;anonymous@85:45&gt;

[scripts/acceptance/worldview-phase07-check.cjs:85](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L85>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| buttons | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- buttons.map — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:86](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L86>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-3e8d8eb5a2f2dd06"></a>

## verifyWorldTagSearch.&lt;anonymous@85:45&gt;.&lt;anonymous@86:17&gt;

[scripts/acceptance/worldview-phase07-check.cjs:86](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L86>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyWorldTagSearch.&lt;anonymous@85:45&gt;](<worldview-phase07-check.cjs.md#s-08a2bf2476639d96>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| button | any | compiler-inferred | required |

Returns: { id: any; type: any; count: any; text: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-d5d32a1a97fad8ef"></a>

## verifyWorldTagSearch.&lt;anonymous@93:39&gt;

[scripts/acceptance/worldview-phase07-check.cjs:93](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L93>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| result | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-79c5b1fd7fcdf85f"></a>

## verifyWorldTagSearch.&lt;anonymous@98:36&gt;

[scripts/acceptance/worldview-phase07-check.cjs:98](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L98>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| result | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-f20a2c628f8ab52e"></a>

## verifyWorldTagSearch.&lt;anonymous@107:30&gt;

[scripts/acceptance/worldview-phase07-check.cjs:107](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L107>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:108](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L108>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-e1401ba661fb95a1"></a>

## verifyWorldTagSearch.&lt;anonymous@151:5&gt;

[scripts/acceptance/worldview-phase07-check.cjs:151](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L151>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entity | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- entity.name.split — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:151](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L151>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-ca2fefd65905a41d"></a>

## verifyWorldTagSearch.&lt;anonymous@154:34&gt;

[scripts/acceptance/worldview-phase07-check.cjs:154](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L154>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entity | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-3b6fff7e509264a7"></a>

## verifyWorldTagSearch.&lt;anonymous@166:34&gt;

[scripts/acceptance/worldview-phase07-check.cjs:166](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L166>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entity | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-a5e3d89a3d720bc8"></a>

## verifyWorldTagSearch.&lt;anonymous@179:34&gt;

[scripts/acceptance/worldview-phase07-check.cjs:179](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L179>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entity | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-c4389ce0ac377b29"></a>

## verifyWorldTagSearch.&lt;anonymous@180:19&gt;

[scripts/acceptance/worldview-phase07-check.cjs:180](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L180>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| entity | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- entity.name.split — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:180](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L180>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-3962f66ea25d883d"></a>

## verifyWorldTagSearch.&lt;anonymous@209:5&gt;

[scripts/acceptance/worldview-phase07-check.cjs:209](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L209>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| buttons | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- buttons.filter — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:210](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L210>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-6e3dad7ae5f5270c"></a>

## verifyWorldTagSearch.&lt;anonymous@209:5&gt;.&lt;anonymous@210:22&gt;

[scripts/acceptance/worldview-phase07-check.cjs:210](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L210>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyWorldTagSearch.&lt;anonymous@209:5&gt;](<worldview-phase07-check.cjs.md#s-3962f66ea25d883d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| button | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.

<a id="s-bda58f1bbe926567"></a>

## verifyWorldTagSearch.&lt;anonymous@243:5&gt;

[scripts/acceptance/worldview-phase07-check.cjs:243](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L243>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifyWorldTagSearch](<worldview-phase07-check.cjs.md#s-0e57f6b27fe7cda5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { vaultPath, ids } | { vaultPath: any; ids: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.worldview.request — external-or-dynamic-dispatch; [scripts/acceptance/worldview-phase07-check.cjs:245](<../../../../../../scripts/acceptance/worldview-phase07-check.cjs#L245>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-worldview-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-worldview-smoke.cjs#L11>) — file-import-only; coverage not established.
