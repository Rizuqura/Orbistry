# scripts/acceptance/electron-victoria-smoke.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-victoria-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-victoria-smoke.cjs](<electron-victoria-smoke.cjs.md#s-2cb92af64ebaca55>) (Module)
- [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>) (FunctionDeclaration)
- [main.countChats](<electron-victoria-smoke.cjs.md#s-80986db5f19e0729>) (ArrowFunction)
- [main.countChats.&lt;anonymous@12:17&gt;](<electron-victoria-smoke.cjs.md#s-afe854ea3004c049>) (ArrowFunction)
- [main.countChats.&lt;anonymous@13:13&gt;](<electron-victoria-smoke.cjs.md#s-d67373bcc5f3ee4f>) (ArrowFunction)
- [main.composerInView](<electron-victoria-smoke.cjs.md#s-99b49bcec8313723>) (ArrowFunction)
- [main.composerInView.&lt;anonymous@15:26&gt;](<electron-victoria-smoke.cjs.md#s-c4fa84c49f6bae6a>) (ArrowFunction)
- [main.&lt;anonymous@47:26&gt;](<electron-victoria-smoke.cjs.md#s-abc2a8596f68f3ce>) (ArrowFunction)
- [main.&lt;anonymous@48:32&gt;](<electron-victoria-smoke.cjs.md#s-5831f4f2db46686d>) (ArrowFunction)
- [main.&lt;anonymous@52:26&gt;](<electron-victoria-smoke.cjs.md#s-a2092eafb5b8b093>) (ArrowFunction)
- [main.&lt;anonymous@154:17&gt;](<electron-victoria-smoke.cjs.md#s-2a6906ea7f92a50c>) (ArrowFunction)
- [main.&lt;anonymous@192:51&gt;](<electron-victoria-smoke.cjs.md#s-3fa8ea93c74dcc5f>) (ArrowFunction)
- [main.&lt;anonymous@228:14&gt;](<electron-victoria-smoke.cjs.md#s-4a177f00d6eb1f16>) (ArrowFunction)
- [&lt;anonymous@238:14&gt;](<electron-victoria-smoke.cjs.md#s-c407946dce615ba7>) (ArrowFunction)

<a id="s-2cb92af64ebaca55"></a>

## scripts/acceptance/electron-victoria-smoke.cjs

[scripts/acceptance/electron-victoria-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>) — [scripts/acceptance/electron-victoria-smoke.cjs:238](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L238>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [scripts/acceptance/electron-victoria-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L1>)
- require — module-loader; [scripts/acceptance/electron-victoria-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-victoria-smoke.cjs:3](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-victoria-smoke.cjs:4](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-victoria-smoke.cjs:5](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L5>)
- main().catch — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:238](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L238>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d788baab3a640b19"></a>

## main

[scripts/acceptance/electron-victoria-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L6>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-victoria-smoke.cjs](<electron-victoria-smoke.cjs.md#s-2cb92af64ebaca55>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [main.countChats](<electron-victoria-smoke.cjs.md#s-80986db5f19e0729>) — [scripts/acceptance/electron-victoria-smoke.cjs:87](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L87>)
- [main.countChats](<electron-victoria-smoke.cjs.md#s-80986db5f19e0729>) — [scripts/acceptance/electron-victoria-smoke.cjs:95](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L95>)
- [main.countChats](<electron-victoria-smoke.cjs.md#s-80986db5f19e0729>) — [scripts/acceptance/electron-victoria-smoke.cjs:122](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L122>)
- [main.countChats](<electron-victoria-smoke.cjs.md#s-80986db5f19e0729>) — [scripts/acceptance/electron-victoria-smoke.cjs:140](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L140>)
- [main.composerInView](<electron-victoria-smoke.cjs.md#s-99b49bcec8313723>) — [scripts/acceptance/electron-victoria-smoke.cjs:151](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L151>)
- [main.composerInView](<electron-victoria-smoke.cjs.md#s-99b49bcec8313723>) — [scripts/acceptance/electron-victoria-smoke.cjs:187](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L187>)
- [main.composerInView](<electron-victoria-smoke.cjs.md#s-99b49bcec8313723>) — [scripts/acceptance/electron-victoria-smoke.cjs:190](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L190>)
- [main.countChats](<electron-victoria-smoke.cjs.md#s-80986db5f19e0729>) — [scripts/acceptance/electron-victoria-smoke.cjs:211](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L211>)

**Called by (statically resolved):**

- [scripts/acceptance/electron-victoria-smoke.cjs](<electron-victoria-smoke.cjs.md#s-2cb92af64ebaca55>) — [scripts/acceptance/electron-victoria-smoke.cjs:238](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L238>)

Unresolved / external call sites: 152.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L7>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L7>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L7>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:22](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L22>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:23](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L23>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:26](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L26>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:27](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L27>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:32](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L32>)
- 144 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-victoria-smoke.cjs:238](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L238>) — static-call-site; coverage not established.

<a id="s-80986db5f19e0729"></a>

## main.countChats

[scripts/acceptance/electron-victoria-smoke.cjs:10](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L10>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>) — [scripts/acceptance/electron-victoria-smoke.cjs:87](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L87>)
- [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>) — [scripts/acceptance/electron-victoria-smoke.cjs:95](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L95>)
- [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>) — [scripts/acceptance/electron-victoria-smoke.cjs:122](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L122>)
- [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>) — [scripts/acceptance/electron-victoria-smoke.cjs:140](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L140>)
- [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>) — [scripts/acceptance/electron-victoria-smoke.cjs:211](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L211>)

Unresolved / external call sites: 2.

- page .evaluate(() =&gt; window.orbistryDesktop.ai.listConversations()) .then — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L11>)
- page .evaluate — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L11>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-victoria-smoke.cjs:87](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L87>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-victoria-smoke.cjs:95](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L95>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-victoria-smoke.cjs:122](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L122>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-victoria-smoke.cjs:140](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L140>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-victoria-smoke.cjs:211](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L211>) — static-call-site; coverage not established.

<a id="s-afe854ea3004c049"></a>

## main.countChats.&lt;anonymous@12:17&gt;

[scripts/acceptance/electron-victoria-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L12>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.countChats](<electron-victoria-smoke.cjs.md#s-80986db5f19e0729>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.listConversations — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L12>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d67373bcc5f3ee4f"></a>

## main.countChats.&lt;anonymous@13:13&gt;

[scripts/acceptance/electron-victoria-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L13>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.countChats](<electron-victoria-smoke.cjs.md#s-80986db5f19e0729>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| items | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-99b49bcec8313723"></a>

## main.composerInView

[scripts/acceptance/electron-victoria-smoke.cjs:14](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L14>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>) — [scripts/acceptance/electron-victoria-smoke.cjs:151](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L151>)
- [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>) — [scripts/acceptance/electron-victoria-smoke.cjs:187](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L187>)
- [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>) — [scripts/acceptance/electron-victoria-smoke.cjs:190](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L190>)

Unresolved / external call sites: 1.

- page.waitForFunction — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:15](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L15>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-victoria-smoke.cjs:151](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L151>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-victoria-smoke.cjs:187](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L187>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-victoria-smoke.cjs:190](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L190>) — static-call-site; coverage not established.

<a id="s-c4fa84c49f6bae6a"></a>

## main.composerInView.&lt;anonymous@15:26&gt;

[scripts/acceptance/electron-victoria-smoke.cjs:15](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L15>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.composerInView](<electron-victoria-smoke.cjs.md#s-99b49bcec8313723>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:16](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L16>)
- el.getBoundingClientRect — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:18](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L18>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-abc2a8596f68f3ce"></a>

## main.&lt;anonymous@47:26&gt;

[scripts/acceptance/electron-victoria-smoke.cjs:47](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L47>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- errors.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:47](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L47>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5831f4f2db46686d"></a>

## main.&lt;anonymous@48:32&gt;

[scripts/acceptance/electron-victoria-smoke.cjs:48](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L48>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a2092eafb5b8b093"></a>

## main.&lt;anonymous@52:26&gt;

[scripts/acceptance/electron-victoria-smoke.cjs:52](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L52>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { app, BrowserWindow } | { app: any; BrowserWindow: any; } | compiler-inferred | required |

Returns: { name: any; title: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- app.getName — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:53](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L53>)
- BrowserWindow.getAllWindows()&#91;0&#93;.getTitle — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:54](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L54>)
- BrowserWindow.getAllWindows — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:54](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L54>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2a6906ea7f92a50c"></a>

## main.&lt;anonymous@154:17&gt;

[scripts/acceptance/electron-victoria-smoke.cjs:154](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L154>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| el | any | compiler-inferred | required |

Returns: { font: any; size: any; filter: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- getComputedStyle — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:155](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L155>)
- getComputedStyle — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:156](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L156>)
- getComputedStyle — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:157](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L157>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3fa8ea93c74dcc5f"></a>

## main.&lt;anonymous@192:51&gt;

[scripts/acceptance/electron-victoria-smoke.cjs:192](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L192>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| el | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- el.getBoundingClientRect — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:193](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L193>)
- Boolean — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:194](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L194>)
- document .elementFromPoint(r.left + 40, r.top + 20) ?.closest — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:195](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L195>)
- document .elementFromPoint — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:195](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L195>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4a177f00d6eb1f16"></a>

## main.&lt;anonymous@228:14&gt;

[scripts/acceptance/electron-victoria-smoke.cjs:228](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L228>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-victoria-smoke.cjs.md#s-d788baab3a640b19>).

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

<a id="s-c407946dce615ba7"></a>

## &lt;anonymous@238:14&gt;

[scripts/acceptance/electron-victoria-smoke.cjs:238](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L238>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-victoria-smoke.cjs](<electron-victoria-smoke.cjs.md#s-2cb92af64ebaca55>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-victoria-smoke.cjs:239](<../../../../../../scripts/acceptance/electron-victoria-smoke.cjs#L239>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
