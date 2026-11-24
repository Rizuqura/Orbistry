# scripts/nvidia-agent-live.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/nvidia-agent-live.cjs:1](<../../../../../scripts/nvidia-agent-live.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/nvidia-agent-live.cjs](<nvidia-agent-live.cjs.md#s-5d0480917ed71577>) (Module)
- [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>) (FunctionDeclaration)
- [main.checkpoint](<nvidia-agent-live.cjs.md#s-85370e4efbb7ee50>) (ArrowFunction)
- [main.&lt;anonymous@23:27&gt;](<nvidia-agent-live.cjs.md#s-b9be4c9dc8bec7ab>) (ArrowFunction)
- [main.stopChecks](<nvidia-agent-live.cjs.md#s-04efcabd7b419a15>) (ArrowFunction)
- [main.stopChecks.&lt;anonymous@70:9&gt;](<nvidia-agent-live.cjs.md#s-7d915aeee68c7b8e>) (ArrowFunction)
- [main.stopChecks.&lt;anonymous@70:9&gt;.&lt;anonymous@72:13&gt;](<nvidia-agent-live.cjs.md#s-751a5c89891ba817>) (ArrowFunction)
- [main.&lt;anonymous@78:39&gt;](<nvidia-agent-live.cjs.md#s-ae0d543aa08b67ca>) (ArrowFunction)
- [main.&lt;anonymous@80:25&gt;](<nvidia-agent-live.cjs.md#s-38a484d3126cd7fa>) (ArrowFunction)
- [main.&lt;anonymous@81:25&gt;](<nvidia-agent-live.cjs.md#s-a40706a73583969d>) (ArrowFunction)
- [main.&lt;anonymous@122:7&gt;](<nvidia-agent-live.cjs.md#s-8ab11e42414a483d>) (ArrowFunction)
- [main.&lt;anonymous@129:52&gt;](<nvidia-agent-live.cjs.md#s-fce8768e1099e27f>) (ArrowFunction)
- [main.&lt;anonymous@143:41&gt;](<nvidia-agent-live.cjs.md#s-96a49e36cae0282a>) (ArrowFunction)
- [main.&lt;anonymous@161:9&gt;](<nvidia-agent-live.cjs.md#s-5bb1bccb3dbe7c08>) (ArrowFunction)
- [main.&lt;anonymous@194:14&gt;](<nvidia-agent-live.cjs.md#s-84779fa80d323cc6>) (ArrowFunction)
- [&lt;anonymous@210:14&gt;](<nvidia-agent-live.cjs.md#s-3fa428cfc3971069>) (ArrowFunction)

<a id="s-5d0480917ed71577"></a>

## scripts/nvidia-agent-live.cjs

[scripts/nvidia-agent-live.cjs:1](<../../../../../scripts/nvidia-agent-live.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>) — [scripts/nvidia-agent-live.cjs:210](<../../../../../scripts/nvidia-agent-live.cjs#L210>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [scripts/nvidia-agent-live.cjs:3](<../../../../../scripts/nvidia-agent-live.cjs#L3>)
- require — module-loader; [scripts/nvidia-agent-live.cjs:4](<../../../../../scripts/nvidia-agent-live.cjs#L4>)
- require — module-loader; [scripts/nvidia-agent-live.cjs:5](<../../../../../scripts/nvidia-agent-live.cjs#L5>)
- require — module-loader; [scripts/nvidia-agent-live.cjs:6](<../../../../../scripts/nvidia-agent-live.cjs#L6>)
- require — module-loader; [scripts/nvidia-agent-live.cjs:7](<../../../../../scripts/nvidia-agent-live.cjs#L7>)
- main().catch — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:210](<../../../../../scripts/nvidia-agent-live.cjs#L210>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8cf215b42662a709"></a>

## main

[scripts/nvidia-agent-live.cjs:8](<../../../../../scripts/nvidia-agent-live.cjs#L8>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/nvidia-agent-live.cjs](<nvidia-agent-live.cjs.md#s-5d0480917ed71577>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [main.checkpoint](<nvidia-agent-live.cjs.md#s-85370e4efbb7ee50>) — [scripts/nvidia-agent-live.cjs:76](<../../../../../scripts/nvidia-agent-live.cjs#L76>)
- [main.stopChecks](<nvidia-agent-live.cjs.md#s-04efcabd7b419a15>) — [scripts/nvidia-agent-live.cjs:77](<../../../../../scripts/nvidia-agent-live.cjs#L77>)
- [main.stopChecks](<nvidia-agent-live.cjs.md#s-04efcabd7b419a15>) — [scripts/nvidia-agent-live.cjs:90](<../../../../../scripts/nvidia-agent-live.cjs#L90>)
- [main.checkpoint](<nvidia-agent-live.cjs.md#s-85370e4efbb7ee50>) — [scripts/nvidia-agent-live.cjs:91](<../../../../../scripts/nvidia-agent-live.cjs#L91>)
- [main.checkpoint](<nvidia-agent-live.cjs.md#s-85370e4efbb7ee50>) — [scripts/nvidia-agent-live.cjs:103](<../../../../../scripts/nvidia-agent-live.cjs#L103>)
- [readModelRun](<../electron/ai/run-store.cjs.md#s-260afe334a71b9ae>) — [scripts/nvidia-agent-live.cjs:125](<../../../../../scripts/nvidia-agent-live.cjs#L125>)

**Called by (statically resolved):**

- [scripts/nvidia-agent-live.cjs](<nvidia-agent-live.cjs.md#s-5d0480917ed71577>) — [scripts/nvidia-agent-live.cjs:210](<../../../../../scripts/nvidia-agent-live.cjs#L210>)

Unresolved / external call sites: 82.

- process.argv.includes — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:9](<../../../../../scripts/nvidia-agent-live.cjs#L9>)
- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:10](<../../../../../scripts/nvidia-agent-live.cjs#L10>)
- path.join — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:11](<../../../../../scripts/nvidia-agent-live.cjs#L11>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:11](<../../../../../scripts/nvidia-agent-live.cjs#L11>)
- path.resolve — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:13](<../../../../../scripts/nvidia-agent-live.cjs#L13>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:14](<../../../../../scripts/nvidia-agent-live.cjs#L14>)
- process.argv.find((a) =&gt; a.startsWith("--model="))?.slice — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:23](<../../../../../scripts/nvidia-agent-live.cjs#L23>)
- process.argv.find — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:23](<../../../../../scripts/nvidia-agent-live.cjs#L23>)
- 74 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-85370e4efbb7ee50"></a>

## main.checkpoint

[scripts/nvidia-agent-live.cjs:16](<../../../../../scripts/nvidia-agent-live.cjs#L16>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>) — [scripts/nvidia-agent-live.cjs:76](<../../../../../scripts/nvidia-agent-live.cjs#L76>)
- [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>) — [scripts/nvidia-agent-live.cjs:91](<../../../../../scripts/nvidia-agent-live.cjs#L91>)
- [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>) — [scripts/nvidia-agent-live.cjs:103](<../../../../../scripts/nvidia-agent-live.cjs#L103>)

Unresolved / external call sites: 2.

- console.log — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:17](<../../../../../scripts/nvidia-agent-live.cjs#L17>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:17](<../../../../../scripts/nvidia-agent-live.cjs#L17>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b9be4c9dc8bec7ab"></a>

## main.&lt;anonymous@23:27&gt;

[scripts/nvidia-agent-live.cjs:23](<../../../../../scripts/nvidia-agent-live.cjs#L23>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- a.startsWith — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:23](<../../../../../scripts/nvidia-agent-live.cjs#L23>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-04efcabd7b419a15"></a>

## main.stopChecks

[scripts/nvidia-agent-live.cjs:43](<../../../../../scripts/nvidia-agent-live.cjs#L43>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>) — [scripts/nvidia-agent-live.cjs:77](<../../../../../scripts/nvidia-agent-live.cjs#L77>)
- [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>) — [scripts/nvidia-agent-live.cjs:90](<../../../../../scripts/nvidia-agent-live.cjs#L90>)

Unresolved / external call sites: 15.

- page.getByRole("button", { name: "SETTINGS", exact: true }).click — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:44](<../../../../../scripts/nvidia-agent-live.cjs#L44>)
- page.getByRole — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:44](<../../../../../scripts/nvidia-agent-live.cjs#L44>)
- page .locator("details") .filter({ has: page .locator("summary") .filter({ hasText: /^LLM Backend \\/ Front Office$/ }), }) .first — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:45](<../../../../../scripts/nvidia-agent-live.cjs#L45>)
- page .locator("details") .filter — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:45](<../../../../../scripts/nvidia-agent-live.cjs#L45>)
- page .locator — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:45](<../../../../../scripts/nvidia-agent-live.cjs#L45>)
- page .locator("summary") .filter — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:48](<../../../../../scripts/nvidia-agent-live.cjs#L48>)
- page .locator — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:48](<../../../../../scripts/nvidia-agent-live.cjs#L48>)
- details.getAttribute — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:53](<../../../../../scripts/nvidia-agent-live.cjs#L53>)
- 7 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7d915aeee68c7b8e"></a>

## main.stopChecks.&lt;anonymous@70:9&gt;

[scripts/nvidia-agent-live.cjs:70](<../../../../../scripts/nvidia-agent-live.cjs#L70>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.stopChecks](<nvidia-agent-live.cjs.md#s-04efcabd7b419a15>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- &#91;...document.querySelectorAll("button")&#93;.find — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:71](<../../../../../scripts/nvidia-agent-live.cjs#L71>)
- document.querySelectorAll — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:71](<../../../../../scripts/nvidia-agent-live.cjs#L71>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-751a5c89891ba817"></a>

## main.stopChecks.&lt;anonymous@70:9&gt;.&lt;anonymous@72:13&gt;

[scripts/nvidia-agent-live.cjs:72](<../../../../../scripts/nvidia-agent-live.cjs#L72>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.stopChecks.&lt;anonymous@70:9&gt;](<nvidia-agent-live.cjs.md#s-7d915aeee68c7b8e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| b | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- b.textContent.trim — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:72](<../../../../../scripts/nvidia-agent-live.cjs#L72>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ae0d543aa08b67ca"></a>

## main.&lt;anonymous@78:39&gt;

[scripts/nvidia-agent-live.cjs:78](<../../../../../scripts/nvidia-agent-live.cjs#L78>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-38a484d3126cd7fa"></a>

## main.&lt;anonymous@80:25&gt;

[scripts/nvidia-agent-live.cjs:80](<../../../../../scripts/nvidia-agent-live.cjs#L80>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.vault.rescan — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:80](<../../../../../scripts/nvidia-agent-live.cjs#L80>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a40706a73583969d"></a>

## main.&lt;anonymous@81:25&gt;

[scripts/nvidia-agent-live.cjs:81](<../../../../../scripts/nvidia-agent-live.cjs#L81>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.editContextBox — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:82](<../../../../../scripts/nvidia-agent-live.cjs#L82>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8ab11e42414a483d"></a>

## main.&lt;anonymous@122:7&gt;

[scripts/nvidia-agent-live.cjs:122](<../../../../../scripts/nvidia-agent-live.cjs#L122>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop.ai.listConversations — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:122](<../../../../../scripts/nvidia-agent-live.cjs#L122>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fce8768e1099e27f"></a>

## main.&lt;anonymous@129:52&gt;

[scripts/nvidia-agent-live.cjs:129](<../../../../../scripts/nvidia-agent-live.cjs#L129>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>).

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

<a id="s-96a49e36cae0282a"></a>

## main.&lt;anonymous@143:41&gt;

[scripts/nvidia-agent-live.cjs:143](<../../../../../scripts/nvidia-agent-live.cjs#L143>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { modelId: any; providerId: any; outputLimit: any; streaming: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5bb1bccb3dbe7c08"></a>

## main.&lt;anonymous@161:9&gt;

[scripts/nvidia-agent-live.cjs:161](<../../../../../scripts/nvidia-agent-live.cjs#L161>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>).

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

<a id="s-84779fa80d323cc6"></a>

## main.&lt;anonymous@194:14&gt;

[scripts/nvidia-agent-live.cjs:194](<../../../../../scripts/nvidia-agent-live.cjs#L194>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<nvidia-agent-live.cjs.md#s-8cf215b42662a709>).

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

<a id="s-3fa428cfc3971069"></a>

## &lt;anonymous@210:14&gt;

[scripts/nvidia-agent-live.cjs:210](<../../../../../scripts/nvidia-agent-live.cjs#L210>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/nvidia-agent-live.cjs](<nvidia-agent-live.cjs.md#s-5d0480917ed71577>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/nvidia-agent-live.cjs:211](<../../../../../scripts/nvidia-agent-live.cjs#L211>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
