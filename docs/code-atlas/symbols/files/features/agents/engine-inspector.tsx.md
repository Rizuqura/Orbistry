# features/agents/engine-inspector.tsx: symbols

[Atlas](<../../../../README.md>) / [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>) / [features/agents/engine-inspector.tsx:1](<../../../../../../features/agents/engine-inspector.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/agents/engine-inspector.tsx](<engine-inspector.tsx.md#s-f23a353b838a354d>) (Module)
- [EngineInspector](<engine-inspector.tsx.md#s-d17af9c9408aeb76>) (FunctionDeclaration)
- [EngineInspector.&lt;anonymous@16:11&gt;](<engine-inspector.tsx.md#s-708755d49f5081c7>) (FunctionType)
- [EngineInspector.&lt;anonymous@26:13&gt;](<engine-inspector.tsx.md#s-637a8ad351992dfe>) (ArrowFunction)
- [EngineInspector.&lt;anonymous@26:13&gt;.&lt;anonymous@37:13&gt;](<engine-inspector.tsx.md#s-c2126e965b0fba41>) (ArrowFunction)
- [EngineInspector.&lt;anonymous@26:13&gt;.&lt;anonymous@40:14&gt;](<engine-inspector.tsx.md#s-ebec067a3b3a59ea>) (ArrowFunction)
- [EngineInspector.&lt;anonymous@26:13&gt;.&lt;anonymous@43:16&gt;](<engine-inspector.tsx.md#s-7ea0859c0e2ccbd2>) (ArrowFunction)
- [EngineInspector.&lt;anonymous@26:13&gt;.&lt;anonymous@46:12&gt;](<engine-inspector.tsx.md#s-0fdc3d87c6a93230>) (ArrowFunction)
- [EngineInspector.perform](<engine-inspector.tsx.md#s-1bd94a51c810c81f>) (ArrowFunction)
- [EngineInspector.perform.&lt;anonymous@51:34&gt;](<engine-inspector.tsx.md#s-11e32e0eea0cbbae>) (FunctionType)
- [EngineInspector.retrieve](<engine-inspector.tsx.md#s-24a7e567909c607e>) (ArrowFunction)
- [EngineInspector.retrieve.&lt;anonymous@70:13&gt;](<engine-inspector.tsx.md#s-9c33217e37d674f9>) (ArrowFunction)
- [EngineInspector.&lt;anonymous@116:18&gt;](<engine-inspector.tsx.md#s-8c5e25a4703f6aee>) (ArrowFunction)
- [EngineInspector.&lt;anonymous@116:18&gt;.&lt;anonymous@117:24&gt;](<engine-inspector.tsx.md#s-1f235ea06fc46f8c>) (ArrowFunction)
- [EngineInspector.&lt;anonymous@128:18&gt;](<engine-inspector.tsx.md#s-0d910dfec433e1d4>) (ArrowFunction)
- [EngineInspector.&lt;anonymous@128:18&gt;.&lt;anonymous@129:24&gt;](<engine-inspector.tsx.md#s-d27bd5b1fc6b07e3>) (ArrowFunction)
- [EngineInspector.&lt;anonymous@165:21&gt;](<engine-inspector.tsx.md#s-3c8ae0ae5dfe2fd3>) (ArrowFunction)
- [EngineInspector.&lt;anonymous@171:18&gt;](<engine-inspector.tsx.md#s-88a96254a8ebfa59>) (ArrowFunction)
- [EngineInspector.&lt;anonymous@182:18&gt;](<engine-inspector.tsx.md#s-eba5f60fead282d7>) (ArrowFunction)
- [EngineInspector.&lt;anonymous@188:18&gt;](<engine-inspector.tsx.md#s-6412a4266a56470b>) (ArrowFunction)
- [EngineInspector.&lt;anonymous@194:20&gt;](<engine-inspector.tsx.md#s-d2bc8240c9f24e2d>) (ArrowFunction)
- [EngineInspector.&lt;anonymous@208:26&gt;](<engine-inspector.tsx.md#s-d215062ca1e37298>) (ArrowFunction)
- [EngineInspector.&lt;anonymous@208:26&gt;.&lt;anonymous@209:32&gt;](<engine-inspector.tsx.md#s-5867bac3367a8932>) (ArrowFunction)

<a id="s-f23a353b838a354d"></a>

## features/agents/engine-inspector.tsx

[features/agents/engine-inspector.tsx:1](<../../../../../../features/agents/engine-inspector.tsx#L1>) · Module · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d17af9c9408aeb76"></a>

## EngineInspector

[features/agents/engine-inspector.tsx:5](<../../../../../../features/agents/engine-inspector.tsx#L5>) · FunctionDeclaration · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: EngineInspector ([features/agents/engine-inspector.tsx:1](<../../../../../../features/agents/engine-inspector.tsx#L1>)).

Lexical owner: [features/agents/engine-inspector.tsx](<engine-inspector.tsx.md#s-f23a353b838a354d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   agentId,   instanceId,   applied,   blocked,   onBusy, } | { agentId: string; instanceId: string; applied: boolean; blocked: boolean; onBusy: (busy: boolean) =&gt; void; } | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 12.

- useState — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:18](<../../../../../../features/agents/engine-inspector.tsx#L18>)
- useState — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:19](<../../../../../../features/agents/engine-inspector.tsx#L19>)
- useState — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:20](<../../../../../../features/agents/engine-inspector.tsx#L20>)
- useState — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:21](<../../../../../../features/agents/engine-inspector.tsx#L21>)
- useState — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:22](<../../../../../../features/agents/engine-inspector.tsx#L22>)
- useState — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:23](<../../../../../../features/agents/engine-inspector.tsx#L23>)
- useRef — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:24](<../../../../../../features/agents/engine-inspector.tsx#L24>)
- useRef — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:25](<../../../../../../features/agents/engine-inspector.tsx#L25>)
- 4 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-708755d49f5081c7"></a>

## EngineInspector.&lt;anonymous@16:11&gt;

[features/agents/engine-inspector.tsx:16](<../../../../../../features/agents/engine-inspector.tsx#L16>) · FunctionType · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector](<engine-inspector.tsx.md#s-d17af9c9408aeb76>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| busy | boolean | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-637a8ad351992dfe"></a>

## EngineInspector.&lt;anonymous@26:13&gt;

[features/agents/engine-inspector.tsx:26](<../../../../../../features/agents/engine-inspector.tsx#L26>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector](<engine-inspector.tsx.md#s-d17af9c9408aeb76>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- setError — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:31](<../../../../../../features/agents/engine-inspector.tsx#L31>)
- setLoading — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:32](<../../../../../../features/agents/engine-inspector.tsx#L32>)
- api .engineState() .then((value) =&gt; { if (alive && sequence === epoch.current) setState(value); }) .catch((e: Error) =&gt; { if (alive) setError(e.message); }) .finally — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:35](<../../../../../../features/agents/engine-inspector.tsx#L35>)
- api .engineState() .then((value) =&gt; { if (alive && sequence === epoch.current) setState(value); }) .catch — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:35](<../../../../../../features/agents/engine-inspector.tsx#L35>)
- api .engineState() .then — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:35](<../../../../../../features/agents/engine-inspector.tsx#L35>)
- api .engineState — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:35](<../../../../../../features/agents/engine-inspector.tsx#L35>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c2126e965b0fba41"></a>

## EngineInspector.&lt;anonymous@26:13&gt;.&lt;anonymous@37:13&gt;

[features/agents/engine-inspector.tsx:37](<../../../../../../features/agents/engine-inspector.tsx#L37>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector.&lt;anonymous@26:13&gt;](<engine-inspector.tsx.md#s-637a8ad351992dfe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setState — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:38](<../../../../../../features/agents/engine-inspector.tsx#L38>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ebec067a3b3a59ea"></a>

## EngineInspector.&lt;anonymous@26:13&gt;.&lt;anonymous@40:14&gt;

[features/agents/engine-inspector.tsx:40](<../../../../../../features/agents/engine-inspector.tsx#L40>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector.&lt;anonymous@26:13&gt;](<engine-inspector.tsx.md#s-637a8ad351992dfe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | Error | annotation | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setError — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:41](<../../../../../../features/agents/engine-inspector.tsx#L41>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7ea0859c0e2ccbd2"></a>

## EngineInspector.&lt;anonymous@26:13&gt;.&lt;anonymous@43:16&gt;

[features/agents/engine-inspector.tsx:43](<../../../../../../features/agents/engine-inspector.tsx#L43>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector.&lt;anonymous@26:13&gt;](<engine-inspector.tsx.md#s-637a8ad351992dfe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setLoading — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:44](<../../../../../../features/agents/engine-inspector.tsx#L44>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0fdc3d87c6a93230"></a>

## EngineInspector.&lt;anonymous@26:13&gt;.&lt;anonymous@46:12&gt;

[features/agents/engine-inspector.tsx:46](<../../../../../../features/agents/engine-inspector.tsx#L46>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector.&lt;anonymous@26:13&gt;](<engine-inspector.tsx.md#s-637a8ad351992dfe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- api.cancelEngine — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:48](<../../../../../../features/agents/engine-inspector.tsx#L48>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1bd94a51c810c81f"></a>

## EngineInspector.perform

[features/agents/engine-inspector.tsx:51](<../../../../../../features/agents/engine-inspector.tsx#L51>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector](<engine-inspector.tsx.md#s-d17af9c9408aeb76>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| action | () =&gt; Promise&lt;void&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [EngineInspector.retrieve](<engine-inspector.tsx.md#s-24a7e567909c607e>) — [features/agents/engine-inspector.tsx:70](<../../../../../../features/agents/engine-inspector.tsx#L70>)
- [EngineInspector.&lt;anonymous@116:18&gt;](<engine-inspector.tsx.md#s-8c5e25a4703f6aee>) — [features/agents/engine-inspector.tsx:117](<../../../../../../features/agents/engine-inspector.tsx#L117>)
- [EngineInspector.&lt;anonymous@128:18&gt;](<engine-inspector.tsx.md#s-0d910dfec433e1d4>) — [features/agents/engine-inspector.tsx:129](<../../../../../../features/agents/engine-inspector.tsx#L129>)
- [EngineInspector.&lt;anonymous@208:26&gt;](<engine-inspector.tsx.md#s-d215062ca1e37298>) — [features/agents/engine-inspector.tsx:209](<../../../../../../features/agents/engine-inspector.tsx#L209>)

Unresolved / external call sites: 8.

- setLoading — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:55](<../../../../../../features/agents/engine-inspector.tsx#L55>)
- setRunning — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:56](<../../../../../../features/agents/engine-inspector.tsx#L56>)
- onBusy — declaration-without-runtime-body; [features/agents/engine-inspector.tsx:57](<../../../../../../features/agents/engine-inspector.tsx#L57>)
- setError — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:58](<../../../../../../features/agents/engine-inspector.tsx#L58>)
- action — declaration-without-runtime-body; [features/agents/engine-inspector.tsx:60](<../../../../../../features/agents/engine-inspector.tsx#L60>)
- setError — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:62](<../../../../../../features/agents/engine-inspector.tsx#L62>)
- setRunning — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:65](<../../../../../../features/agents/engine-inspector.tsx#L65>)
- onBusy — declaration-without-runtime-body; [features/agents/engine-inspector.tsx:66](<../../../../../../features/agents/engine-inspector.tsx#L66>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-11e32e0eea0cbbae"></a>

## EngineInspector.perform.&lt;anonymous@51:34&gt;

[features/agents/engine-inspector.tsx:51](<../../../../../../features/agents/engine-inspector.tsx#L51>) · FunctionType · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector.perform](<engine-inspector.tsx.md#s-1bd94a51c810c81f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: Promise&lt;void&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-24a7e567909c607e"></a>

## EngineInspector.retrieve

[features/agents/engine-inspector.tsx:69](<../../../../../../features/agents/engine-inspector.tsx#L69>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector](<engine-inspector.tsx.md#s-d17af9c9408aeb76>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| selectedMonth | string | annotation | optional |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineInspector.perform](<engine-inspector.tsx.md#s-1bd94a51c810c81f>) — [features/agents/engine-inspector.tsx:70](<../../../../../../features/agents/engine-inspector.tsx#L70>)

**Called by (statically resolved):**

- [EngineInspector.&lt;anonymous@171:18&gt;](<engine-inspector.tsx.md#s-88a96254a8ebfa59>) — [features/agents/engine-inspector.tsx:171](<../../../../../../features/agents/engine-inspector.tsx#L171>)
- [EngineInspector.&lt;anonymous@182:18&gt;](<engine-inspector.tsx.md#s-eba5f60fead282d7>) — [features/agents/engine-inspector.tsx:182](<../../../../../../features/agents/engine-inspector.tsx#L182>)
- [EngineInspector.&lt;anonymous@188:18&gt;](<engine-inspector.tsx.md#s-6412a4266a56470b>) — [features/agents/engine-inspector.tsx:188](<../../../../../../features/agents/engine-inspector.tsx#L188>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9c33217e37d674f9"></a>

## EngineInspector.retrieve.&lt;anonymous@70:13&gt;

[features/agents/engine-inspector.tsx:70](<../../../../../../features/agents/engine-inspector.tsx#L70>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector.retrieve](<engine-inspector.tsx.md#s-24a7e567909c607e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- setResult — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:71](<../../../../../../features/agents/engine-inspector.tsx#L71>)
- Error — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:74](<../../../../../../features/agents/engine-inspector.tsx#L74>)
- setResult — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:75](<../../../../../../features/agents/engine-inspector.tsx#L75>)
- api.executeEngine — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:76](<../../../../../../features/agents/engine-inspector.tsx#L76>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8c5e25a4703f6aee"></a>

## EngineInspector.&lt;anonymous@116:18&gt;

[features/agents/engine-inspector.tsx:116](<../../../../../../features/agents/engine-inspector.tsx#L116>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector](<engine-inspector.tsx.md#s-d17af9c9408aeb76>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineInspector.perform](<engine-inspector.tsx.md#s-1bd94a51c810c81f>) — [features/agents/engine-inspector.tsx:117](<../../../../../../features/agents/engine-inspector.tsx#L117>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1f235ea06fc46f8c"></a>

## EngineInspector.&lt;anonymous@116:18&gt;.&lt;anonymous@117:24&gt;

[features/agents/engine-inspector.tsx:117](<../../../../../../features/agents/engine-inspector.tsx#L117>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector.&lt;anonymous@116:18&gt;](<engine-inspector.tsx.md#s-8c5e25a4703f6aee>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- window.orbistryDesktop?.ai.chooseEngineFolder — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:119](<../../../../../../features/agents/engine-inspector.tsx#L119>)
- setState — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:120](<../../../../../../features/agents/engine-inspector.tsx#L120>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0d910dfec433e1d4"></a>

## EngineInspector.&lt;anonymous@128:18&gt;

[features/agents/engine-inspector.tsx:128](<../../../../../../features/agents/engine-inspector.tsx#L128>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector](<engine-inspector.tsx.md#s-d17af9c9408aeb76>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineInspector.perform](<engine-inspector.tsx.md#s-1bd94a51c810c81f>) — [features/agents/engine-inspector.tsx:129](<../../../../../../features/agents/engine-inspector.tsx#L129>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d27bd5b1fc6b07e3"></a>

## EngineInspector.&lt;anonymous@128:18&gt;.&lt;anonymous@129:24&gt;

[features/agents/engine-inspector.tsx:129](<../../../../../../features/agents/engine-inspector.tsx#L129>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector.&lt;anonymous@128:18&gt;](<engine-inspector.tsx.md#s-0d910dfec433e1d4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- window.orbistryDesktop?.ai.probeEngine — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:130](<../../../../../../features/agents/engine-inspector.tsx#L130>)
- setState — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:131](<../../../../../../features/agents/engine-inspector.tsx#L131>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3c8ae0ae5dfe2fd3"></a>

## EngineInspector.&lt;anonymous@165:21&gt;

[features/agents/engine-inspector.tsx:165](<../../../../../../features/agents/engine-inspector.tsx#L165>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector](<engine-inspector.tsx.md#s-d17af9c9408aeb76>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| e | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setMonth — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:165](<../../../../../../features/agents/engine-inspector.tsx#L165>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-88a96254a8ebfa59"></a>

## EngineInspector.&lt;anonymous@171:18&gt;

[features/agents/engine-inspector.tsx:171](<../../../../../../features/agents/engine-inspector.tsx#L171>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector](<engine-inspector.tsx.md#s-d17af9c9408aeb76>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineInspector.retrieve](<engine-inspector.tsx.md#s-24a7e567909c607e>) — [features/agents/engine-inspector.tsx:171](<../../../../../../features/agents/engine-inspector.tsx#L171>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-eba5f60fead282d7"></a>

## EngineInspector.&lt;anonymous@182:18&gt;

[features/agents/engine-inspector.tsx:182](<../../../../../../features/agents/engine-inspector.tsx#L182>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector](<engine-inspector.tsx.md#s-d17af9c9408aeb76>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineInspector.retrieve](<engine-inspector.tsx.md#s-24a7e567909c607e>) — [features/agents/engine-inspector.tsx:182](<../../../../../../features/agents/engine-inspector.tsx#L182>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6412a4266a56470b"></a>

## EngineInspector.&lt;anonymous@188:18&gt;

[features/agents/engine-inspector.tsx:188](<../../../../../../features/agents/engine-inspector.tsx#L188>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector](<engine-inspector.tsx.md#s-d17af9c9408aeb76>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineInspector.retrieve](<engine-inspector.tsx.md#s-24a7e567909c607e>) — [features/agents/engine-inspector.tsx:188](<../../../../../../features/agents/engine-inspector.tsx#L188>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d2bc8240c9f24e2d"></a>

## EngineInspector.&lt;anonymous@194:20&gt;

[features/agents/engine-inspector.tsx:194](<../../../../../../features/agents/engine-inspector.tsx#L194>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector](<engine-inspector.tsx.md#s-d17af9c9408aeb76>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop?.ai.cancelEngine — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:194](<../../../../../../features/agents/engine-inspector.tsx#L194>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d215062ca1e37298"></a>

## EngineInspector.&lt;anonymous@208:26&gt;

[features/agents/engine-inspector.tsx:208](<../../../../../../features/agents/engine-inspector.tsx#L208>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector](<engine-inspector.tsx.md#s-d17af9c9408aeb76>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EngineInspector.perform](<engine-inspector.tsx.md#s-1bd94a51c810c81f>) — [features/agents/engine-inspector.tsx:209](<../../../../../../features/agents/engine-inspector.tsx#L209>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5867bac3367a8932"></a>

## EngineInspector.&lt;anonymous@208:26&gt;.&lt;anonymous@209:32&gt;

[features/agents/engine-inspector.tsx:209](<../../../../../../features/agents/engine-inspector.tsx#L209>) · ArrowFunction · production · [Agent workspace and construction (Portal)](<../../../../modules/portal-agents.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EngineInspector.&lt;anonymous@208:26&gt;](<engine-inspector.tsx.md#s-d215062ca1e37298>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- window.orbistryDesktop?.ai.openEngineReport — external-or-dynamic-dispatch; [features/agents/engine-inspector.tsx:210](<../../../../../../features/agents/engine-inspector.tsx#L210>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
