# scripts/acceptance/electron-ui-polish-smoke.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-ui-polish-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-ui-polish-smoke.cjs](<electron-ui-polish-smoke.cjs.md#s-2d018aeeb8305b79>) (Module)
- [main](<electron-ui-polish-smoke.cjs.md#s-dc7d511673c38c2a>) (FunctionDeclaration)
- [main.&lt;anonymous@31:26&gt;](<electron-ui-polish-smoke.cjs.md#s-257bc9718ce195e2>) (ArrowFunction)
- [main.&lt;anonymous@32:32&gt;](<electron-ui-polish-smoke.cjs.md#s-00af5cf054ad1ec5>) (ArrowFunction)
- [main.&lt;anonymous@33:25&gt;](<electron-ui-polish-smoke.cjs.md#s-67060da5aed13a8b>) (ArrowFunction)
- [main.&lt;anonymous@39:40&gt;](<electron-ui-polish-smoke.cjs.md#s-76374bef373cdad7>) (ArrowFunction)
- [main.&lt;anonymous@39:40&gt;.rect](<electron-ui-polish-smoke.cjs.md#s-501305d29110f7ab>) (ArrowFunction)
- [main.checkWindowIcon](<electron-ui-polish-smoke.cjs.md#s-1406c982b3175bdc>) (FunctionDeclaration)
- [main.checkWindowIcon.&lt;anonymous@85:31&gt;](<electron-ui-polish-smoke.cjs.md#s-2c574871012b013d>) (ArrowFunction)
- [main.&lt;anonymous@137:32&gt;](<electron-ui-polish-smoke.cjs.md#s-14efcc249fe2f29d>) (ArrowFunction)
- [main.&lt;anonymous@151:40&gt;](<electron-ui-polish-smoke.cjs.md#s-1410e36e672ed327>) (ArrowFunction)
- [main.&lt;anonymous@166:27&gt;](<electron-ui-polish-smoke.cjs.md#s-f3aabd70db5090d2>) (ArrowFunction)
- [main.&lt;anonymous@170:28&gt;](<electron-ui-polish-smoke.cjs.md#s-541ba20a9ee9ac1f>) (ArrowFunction)
- [main.&lt;anonymous@190:14&gt;](<electron-ui-polish-smoke.cjs.md#s-67b2888a8eff4211>) (ArrowFunction)
- [&lt;anonymous@200:14&gt;](<electron-ui-polish-smoke.cjs.md#s-02900cb4b3d924e8>) (ArrowFunction)

<a id="s-2d018aeeb8305b79"></a>

## scripts/acceptance/electron-ui-polish-smoke.cjs

[scripts/acceptance/electron-ui-polish-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<electron-ui-polish-smoke.cjs.md#s-dc7d511673c38c2a>) — [scripts/acceptance/electron-ui-polish-smoke.cjs:200](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L200>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [scripts/acceptance/electron-ui-polish-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L1>)
- require — module-loader; [scripts/acceptance/electron-ui-polish-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-ui-polish-smoke.cjs:3](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-ui-polish-smoke.cjs:4](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-ui-polish-smoke.cjs:5](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L5>)
- main().catch — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:200](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L200>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-dc7d511673c38c2a"></a>

## main

[scripts/acceptance/electron-ui-polish-smoke.cjs:6](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L6>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-ui-polish-smoke.cjs](<electron-ui-polish-smoke.cjs.md#s-2d018aeeb8305b79>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [main.checkWindowIcon](<electron-ui-polish-smoke.cjs.md#s-1406c982b3175bdc>) — [scripts/acceptance/electron-ui-polish-smoke.cjs:99](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L99>)
- [main.checkWindowIcon](<electron-ui-polish-smoke.cjs.md#s-1406c982b3175bdc>) — [scripts/acceptance/electron-ui-polish-smoke.cjs:105](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L105>)

**Called by (statically resolved):**

- [scripts/acceptance/electron-ui-polish-smoke.cjs](<electron-ui-polish-smoke.cjs.md#s-2d018aeeb8305b79>) — [scripts/acceptance/electron-ui-polish-smoke.cjs:200](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L200>)

Unresolved / external call sites: 99.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L7>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L7>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L7>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L11>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L11>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L13>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:13](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L13>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:16](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L16>)
- 91 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-ui-polish-smoke.cjs:200](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L200>) — static-call-site; coverage not established.

<a id="s-257bc9718ce195e2"></a>

## main.&lt;anonymous@31:26&gt;

[scripts/acceptance/electron-ui-polish-smoke.cjs:31](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L31>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-ui-polish-smoke.cjs.md#s-dc7d511673c38c2a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- errors.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:31](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L31>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-00af5cf054ad1ec5"></a>

## main.&lt;anonymous@32:32&gt;

[scripts/acceptance/electron-ui-polish-smoke.cjs:32](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L32>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-ui-polish-smoke.cjs.md#s-dc7d511673c38c2a>).

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

<a id="s-67060da5aed13a8b"></a>

## main.&lt;anonymous@33:25&gt;

[scripts/acceptance/electron-ui-polish-smoke.cjs:33](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L33>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-ui-polish-smoke.cjs.md#s-dc7d511673c38c2a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.handshake — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:33](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L33>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-76374bef373cdad7"></a>

## main.&lt;anonymous@39:40&gt;

[scripts/acceptance/electron-ui-polish-smoke.cjs:39](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L39>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-ui-polish-smoke.cjs.md#s-dc7d511673c38c2a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { search: any; title: any; change: any; refresh: any; toggle: any; scheme: any; scroll: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [main.&lt;anonymous@39:40&gt;.rect](<electron-ui-polish-smoke.cjs.md#s-501305d29110f7ab>) — [scripts/acceptance/electron-ui-polish-smoke.cjs:43](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L43>)
- [main.&lt;anonymous@39:40&gt;.rect](<electron-ui-polish-smoke.cjs.md#s-501305d29110f7ab>) — [scripts/acceptance/electron-ui-polish-smoke.cjs:44](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L44>)
- [main.&lt;anonymous@39:40&gt;.rect](<electron-ui-polish-smoke.cjs.md#s-501305d29110f7ab>) — [scripts/acceptance/electron-ui-polish-smoke.cjs:45](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L45>)
- [main.&lt;anonymous@39:40&gt;.rect](<electron-ui-polish-smoke.cjs.md#s-501305d29110f7ab>) — [scripts/acceptance/electron-ui-polish-smoke.cjs:46](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L46>)
- [main.&lt;anonymous@39:40&gt;.rect](<electron-ui-polish-smoke.cjs.md#s-501305d29110f7ab>) — [scripts/acceptance/electron-ui-polish-smoke.cjs:47](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L47>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- getComputedStyle — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:48](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L48>)
- getComputedStyle — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:49](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L49>)
- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:49](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L49>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-501305d29110f7ab"></a>

## main.&lt;anonymous@39:40&gt;.rect

[scripts/acceptance/electron-ui-polish-smoke.cjs:40](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L40>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.&lt;anonymous@39:40&gt;](<electron-ui-polish-smoke.cjs.md#s-76374bef373cdad7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| s | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main.&lt;anonymous@39:40&gt;](<electron-ui-polish-smoke.cjs.md#s-76374bef373cdad7>) — [scripts/acceptance/electron-ui-polish-smoke.cjs:43](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L43>)
- [main.&lt;anonymous@39:40&gt;](<electron-ui-polish-smoke.cjs.md#s-76374bef373cdad7>) — [scripts/acceptance/electron-ui-polish-smoke.cjs:44](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L44>)
- [main.&lt;anonymous@39:40&gt;](<electron-ui-polish-smoke.cjs.md#s-76374bef373cdad7>) — [scripts/acceptance/electron-ui-polish-smoke.cjs:45](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L45>)
- [main.&lt;anonymous@39:40&gt;](<electron-ui-polish-smoke.cjs.md#s-76374bef373cdad7>) — [scripts/acceptance/electron-ui-polish-smoke.cjs:46](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L46>)
- [main.&lt;anonymous@39:40&gt;](<electron-ui-polish-smoke.cjs.md#s-76374bef373cdad7>) — [scripts/acceptance/electron-ui-polish-smoke.cjs:47](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L47>)

Unresolved / external call sites: 3.

- document.querySelector(s).getBoundingClientRect().toJSON — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:41](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L41>)
- document.querySelector(s).getBoundingClientRect — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:41](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L41>)
- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:41](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L41>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-ui-polish-smoke.cjs:43](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L43>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-ui-polish-smoke.cjs:44](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L44>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-ui-polish-smoke.cjs:45](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L45>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-ui-polish-smoke.cjs:46](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L46>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-ui-polish-smoke.cjs:47](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L47>) — static-call-site; coverage not established.

<a id="s-1406c982b3175bdc"></a>

## main.checkWindowIcon

[scripts/acceptance/electron-ui-polish-smoke.cjs:80](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L80>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-ui-polish-smoke.cjs.md#s-dc7d511673c38c2a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| label | any | compiler-inferred | required |
| shape | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<electron-ui-polish-smoke.cjs.md#s-dc7d511673c38c2a>) — [scripts/acceptance/electron-ui-polish-smoke.cjs:99](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L99>)
- [main](<electron-ui-polish-smoke.cjs.md#s-dc7d511673c38c2a>) — [scripts/acceptance/electron-ui-polish-smoke.cjs:105](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L105>)

Unresolved / external call sites: 8.

- panel.getByRole — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:81](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L81>)
- assert.equal — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:82](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L82>)
- button.getAttribute — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:82](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L82>)
- assert.equal — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:83](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L83>)
- button.locator(&#96;svg ${shape}&#96;).count — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:83](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L83>)
- button.locator — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:83](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L83>)
- assert.ok — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:84](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L84>)
- button.evaluate — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:85](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L85>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-ui-polish-smoke.cjs:99](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L99>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-ui-polish-smoke.cjs:105](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L105>) — static-call-site; coverage not established.

<a id="s-2c574871012b013d"></a>

## main.checkWindowIcon.&lt;anonymous@85:31&gt;

[scripts/acceptance/electron-ui-polish-smoke.cjs:85](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L85>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.checkWindowIcon](<electron-ui-polish-smoke.cjs.md#s-1406c982b3175bdc>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| el | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- el.getBoundingClientRect — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:86](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L86>)
- el.querySelector("svg").getBoundingClientRect — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:87](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L87>)
- el.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:87](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L87>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-14efcc249fe2f29d"></a>

## main.&lt;anonymous@137:32&gt;

[scripts/acceptance/electron-ui-polish-smoke.cjs:137](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L137>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-ui-polish-smoke.cjs.md#s-dc7d511673c38c2a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- document .querySelector(".chat-panel-floating") .getBoundingClientRect — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:138](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L138>)
- document .querySelector — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:138](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L138>)
- document.querySelector(".pv-canvas").getBoundingClientRect — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:141](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L141>)
- document.querySelector — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:141](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L141>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1410e36e672ed327"></a>

## main.&lt;anonymous@151:40&gt;

[scripts/acceptance/electron-ui-polish-smoke.cjs:151](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L151>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-ui-polish-smoke.cjs.md#s-dc7d511673c38c2a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.listConversations — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:152](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L152>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f3aabd70db5090d2"></a>

## main.&lt;anonymous@166:27&gt;

[scripts/acceptance/electron-ui-polish-smoke.cjs:166](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L166>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-ui-polish-smoke.cjs.md#s-dc7d511673c38c2a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.listConversations — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:166](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L166>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-541ba20a9ee9ac1f"></a>

## main.&lt;anonymous@170:28&gt;

[scripts/acceptance/electron-ui-polish-smoke.cjs:170](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L170>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-ui-polish-smoke.cjs.md#s-dc7d511673c38c2a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.getAgent — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:170](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L170>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-67b2888a8eff4211"></a>

## main.&lt;anonymous@190:14&gt;

[scripts/acceptance/electron-ui-polish-smoke.cjs:190](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L190>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-ui-polish-smoke.cjs.md#s-dc7d511673c38c2a>).

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

<a id="s-02900cb4b3d924e8"></a>

## &lt;anonymous@200:14&gt;

[scripts/acceptance/electron-ui-polish-smoke.cjs:200](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L200>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-ui-polish-smoke.cjs](<electron-ui-polish-smoke.cjs.md#s-2d018aeeb8305b79>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-ui-polish-smoke.cjs:201](<../../../../../../scripts/acceptance/electron-ui-polish-smoke.cjs#L201>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
