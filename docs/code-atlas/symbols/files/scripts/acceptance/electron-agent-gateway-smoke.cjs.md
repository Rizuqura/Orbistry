# scripts/acceptance/electron-agent-gateway-smoke.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/electron-agent-gateway-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/electron-agent-gateway-smoke.cjs](<electron-agent-gateway-smoke.cjs.md#s-6d45ba981b9ba769>) (Module)
- [main](<electron-agent-gateway-smoke.cjs.md#s-86101a5475ac41e1>) (FunctionDeclaration)
- [main.&lt;anonymous@32:26&gt;](<electron-agent-gateway-smoke.cjs.md#s-5bf8e55a876fac0b>) (ArrowFunction)
- [main.&lt;anonymous@34:7&gt;](<electron-agent-gateway-smoke.cjs.md#s-206f8cd19a5f7ec0>) (ArrowFunction)
- [main.&lt;anonymous@34:7&gt;.getVault](<electron-agent-gateway-smoke.cjs.md#s-233bd4724def2db7>) (ArrowFunction)
- [main.&lt;anonymous@125:7&gt;](<electron-agent-gateway-smoke.cjs.md#s-be217325c47e398c>) (ArrowFunction)
- [main.&lt;anonymous@136:7&gt;](<electron-agent-gateway-smoke.cjs.md#s-84b624eeab86445f>) (ArrowFunction)
- [main.&lt;anonymous@138:24&gt;](<electron-agent-gateway-smoke.cjs.md#s-96e9ff03df07a54a>) (ArrowFunction)
- [main.&lt;anonymous@138:24&gt;.&lt;anonymous@139:31&gt;](<electron-agent-gateway-smoke.cjs.md#s-dea6e4e45fbf4c93>) (ArrowFunction)
- [main.&lt;anonymous@154:42&gt;](<electron-agent-gateway-smoke.cjs.md#s-c6c379d3040260cb>) (ArrowFunction)
- [main.&lt;anonymous@168:17&gt;](<electron-agent-gateway-smoke.cjs.md#s-870bb2953f60f9fb>) (ArrowFunction)
- [main.&lt;anonymous@237:32&gt;](<electron-agent-gateway-smoke.cjs.md#s-28915859f09f5a2b>) (ArrowFunction)
- [main.&lt;anonymous@252:24&gt;](<electron-agent-gateway-smoke.cjs.md#s-4e8b4cc2bbf84644>) (ArrowFunction)
- [main.&lt;anonymous@252:24&gt;.&lt;anonymous@253:52&gt;](<electron-agent-gateway-smoke.cjs.md#s-d22927251a5bbde1>) (ArrowFunction)
- [main.&lt;anonymous@270:24&gt;](<electron-agent-gateway-smoke.cjs.md#s-4bc0c9f6167710e2>) (ArrowFunction)
- [main.&lt;anonymous@270:24&gt;.&lt;anonymous@271:52&gt;](<electron-agent-gateway-smoke.cjs.md#s-9b56316693db21fa>) (ArrowFunction)
- [main.&lt;anonymous@323:7&gt;](<electron-agent-gateway-smoke.cjs.md#s-ab283e0f5000f1b2>) (ArrowFunction)
- [main.&lt;anonymous@332:7&gt;](<electron-agent-gateway-smoke.cjs.md#s-82a27efe3b0af04d>) (ArrowFunction)
- [main.&lt;anonymous@368:7&gt;](<electron-agent-gateway-smoke.cjs.md#s-3e874fbf9167904f>) (ArrowFunction)
- [&lt;anonymous@394:14&gt;](<electron-agent-gateway-smoke.cjs.md#s-fa5ac60b68b8f964>) (ArrowFunction)

<a id="s-6d45ba981b9ba769"></a>

## scripts/acceptance/electron-agent-gateway-smoke.cjs

[scripts/acceptance/electron-agent-gateway-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<electron-agent-gateway-smoke.cjs.md#s-86101a5475ac41e1>) — [scripts/acceptance/electron-agent-gateway-smoke.cjs:394](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L394>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [scripts/acceptance/electron-agent-gateway-smoke.cjs:1](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L1>)
- require — module-loader; [scripts/acceptance/electron-agent-gateway-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L2>)
- require — module-loader; [scripts/acceptance/electron-agent-gateway-smoke.cjs:3](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L3>)
- require — module-loader; [scripts/acceptance/electron-agent-gateway-smoke.cjs:4](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L4>)
- require — module-loader; [scripts/acceptance/electron-agent-gateway-smoke.cjs:5](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L5>)
- main().catch — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:394](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L394>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-86101a5475ac41e1"></a>

## main

[scripts/acceptance/electron-agent-gateway-smoke.cjs:7](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L7>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Verifies compact Gateway controls, read-only assignment inspection, preserved/deletable transcripts and Gateway-only new requests in an isolated offline desktop.

Purpose evidence: jsdoc.

Lexical owner: [scripts/acceptance/electron-agent-gateway-smoke.cjs](<electron-agent-gateway-smoke.cjs.md#s-6d45ba981b9ba769>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [scripts/acceptance/electron-agent-gateway-smoke.cjs](<electron-agent-gateway-smoke.cjs.md#s-6d45ba981b9ba769>) — [scripts/acceptance/electron-agent-gateway-smoke.cjs:394](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L394>)

Unresolved / external call sites: 201.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L8>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L8>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:8](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L8>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L9>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:10](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L10>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:11](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L11>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:12](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L12>)
- electron.launch — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:22](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L22>)
- 193 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-agent-gateway-smoke.cjs:394](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L394>) — static-call-site; coverage not established.

<a id="s-5bf8e55a876fac0b"></a>

## main.&lt;anonymous@32:26&gt;

[scripts/acceptance/electron-agent-gateway-smoke.cjs:32](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L32>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-agent-gateway-smoke.cjs.md#s-86101a5475ac41e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- errors.push — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:32](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L32>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-206f8cd19a5f7ec0"></a>

## main.&lt;anonymous@34:7&gt;

[scripts/acceptance/electron-agent-gateway-smoke.cjs:34](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L34>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-agent-gateway-smoke.cjs.md#s-86101a5475ac41e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { app, BrowserWindow } | { app: any; BrowserWindow: any; } | compiler-inferred | required |
| { repository, vault } | { repository: any; vault: any; } | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 33.

- BrowserWindow.getAllWindows()&#91;0&#93;.setSize — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:35](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L35>)
- BrowserWindow.getAllWindows — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:35](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L35>)
- BrowserWindow.getAllWindows()&#91;0&#93;.showInactive — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:36](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L36>)
- BrowserWindow.getAllWindows — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:36](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L36>)
- process .getBuiltinModule("node:module") .createRequire — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:37](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L37>)
- process .getBuiltinModule — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:37](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L37>)
- require — module-loader; [scripts/acceptance/electron-agent-gateway-smoke.cjs:40](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L40>)
- (require( repository + "/electron/ai/agents/agent-store.cjs", ).AgentStore) — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:41](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L41>)
- 25 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-233bd4724def2db7"></a>

## main.&lt;anonymous@34:7&gt;.getVault

[scripts/acceptance/electron-agent-gateway-smoke.cjs:46](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L46>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.&lt;anonymous@34:7&gt;](<electron-agent-gateway-smoke.cjs.md#s-206f8cd19a5f7ec0>).

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

<a id="s-be217325c47e398c"></a>

## main.&lt;anonymous@125:7&gt;

[scripts/acceptance/electron-agent-gateway-smoke.cjs:125](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L125>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-agent-gateway-smoke.cjs.md#s-86101a5475ac41e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelectorAll — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:125](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L125>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-84b624eeab86445f"></a>

## main.&lt;anonymous@136:7&gt;

[scripts/acceptance/electron-agent-gateway-smoke.cjs:136](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L136>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-agent-gateway-smoke.cjs.md#s-86101a5475ac41e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelectorAll — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:136](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L136>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-96e9ff03df07a54a"></a>

## main.&lt;anonymous@138:24&gt;

[scripts/acceptance/electron-agent-gateway-smoke.cjs:138](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L138>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-agent-gateway-smoke.cjs.md#s-86101a5475ac41e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { dialog } | { dialog: any; } | compiler-inferred | required |
| repository | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-dea6e4e45fbf4c93"></a>

## main.&lt;anonymous@138:24&gt;.&lt;anonymous@139:31&gt;

[scripts/acceptance/electron-agent-gateway-smoke.cjs:139](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L139>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.&lt;anonymous@138:24&gt;](<electron-agent-gateway-smoke.cjs.md#s-96e9ff03df07a54a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c6c379d3040260cb"></a>

## main.&lt;anonymous@154:42&gt;

[scripts/acceptance/electron-agent-gateway-smoke.cjs:154](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L154>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-agent-gateway-smoke.cjs.md#s-86101a5475ac41e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { width: any; height: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-870bb2953f60f9fb"></a>

## main.&lt;anonymous@168:17&gt;

[scripts/acceptance/electron-agent-gateway-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L168>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-agent-gateway-smoke.cjs.md#s-86101a5475ac41e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| node | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- node.getBoundingClientRect — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:168](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L168>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-28915859f09f5a2b"></a>

## main.&lt;anonymous@237:32&gt;

[scripts/acceptance/electron-agent-gateway-smoke.cjs:237](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L237>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-agent-gateway-smoke.cjs.md#s-86101a5475ac41e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- document .querySelector(".gateway-composer textarea") ?.value.includes — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:238](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L238>)
- document .querySelector — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:238](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L238>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4e8b4cc2bbf84644"></a>

## main.&lt;anonymous@252:24&gt;

[scripts/acceptance/electron-agent-gateway-smoke.cjs:252](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L252>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-agent-gateway-smoke.cjs.md#s-86101a5475ac41e1>).

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

<a id="s-d22927251a5bbde1"></a>

## main.&lt;anonymous@252:24&gt;.&lt;anonymous@253:52&gt;

[scripts/acceptance/electron-agent-gateway-smoke.cjs:253](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L253>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.&lt;anonymous@252:24&gt;](<electron-agent-gateway-smoke.cjs.md#s-4e8b4cc2bbf84644>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { action: string; answer: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4bc0c9f6167710e2"></a>

## main.&lt;anonymous@270:24&gt;

[scripts/acceptance/electron-agent-gateway-smoke.cjs:270](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L270>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-agent-gateway-smoke.cjs.md#s-86101a5475ac41e1>).

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

<a id="s-9b56316693db21fa"></a>

## main.&lt;anonymous@270:24&gt;.&lt;anonymous@271:52&gt;

[scripts/acceptance/electron-agent-gateway-smoke.cjs:271](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L271>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.&lt;anonymous@270:24&gt;](<electron-agent-gateway-smoke.cjs.md#s-4bc0c9f6167710e2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { action: string; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ab283e0f5000f1b2"></a>

## main.&lt;anonymous@323:7&gt;

[scripts/acceptance/electron-agent-gateway-smoke.cjs:323](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L323>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-agent-gateway-smoke.cjs.md#s-86101a5475ac41e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelectorAll — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:323](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L323>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-82a27efe3b0af04d"></a>

## main.&lt;anonymous@332:7&gt;

[scripts/acceptance/electron-agent-gateway-smoke.cjs:332](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L332>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-agent-gateway-smoke.cjs.md#s-86101a5475ac41e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelectorAll — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:332](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L332>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3e874fbf9167904f"></a>

## main.&lt;anonymous@368:7&gt;

[scripts/acceptance/electron-agent-gateway-smoke.cjs:368](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L368>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<electron-agent-gateway-smoke.cjs.md#s-86101a5475ac41e1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- document.querySelectorAll — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:368](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L368>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fa5ac60b68b8f964"></a>

## &lt;anonymous@394:14&gt;

[scripts/acceptance/electron-agent-gateway-smoke.cjs:394](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L394>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/electron-agent-gateway-smoke.cjs](<electron-agent-gateway-smoke.cjs.md#s-6d45ba981b9ba769>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/electron-agent-gateway-smoke.cjs:395](<../../../../../../scripts/acceptance/electron-agent-gateway-smoke.cjs#L395>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
