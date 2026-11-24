# electron/ai/runtime-context.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/runtime-context.cjs:1](<../../../../../../electron/ai/runtime-context.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/runtime-context.cjs](<runtime-context.cjs.md#s-5051e08942050da3>) (Module)
- [hash](<runtime-context.cjs.md#s-9217c9e9275a4e6a>) (ArrowFunction)
- [canonicalPath](<runtime-context.cjs.md#s-a852c8bcae735911>) (VariableDeclaration)
- [canonical](<runtime-context.cjs.md#s-3c7f866ba3293dc3>) (VariableDeclaration)
- [normalize](<runtime-context.cjs.md#s-7f41855a6fde3f99>) (ArrowFunction)
- [canonicalHash](<runtime-context.cjs.md#s-354543450a50bc05>) (VariableDeclaration)
- [COMPILED_CANONICAL_SHA256](<runtime-context.cjs.md#s-7d15713247b01c9d>) (VariableDeclaration)
- [KERNEL_VERSION](<runtime-context.cjs.md#s-a4149768256e4a64>) (VariableDeclaration)
- [RUNTIME_KERNEL](<runtime-context.cjs.md#s-c608fb040ef776c4>) (VariableDeclaration)
- [MODULES](<runtime-context.cjs.md#s-49e32d3076b82abe>) (VariableDeclaration)
- [matchesCanonical](<runtime-context.cjs.md#s-7ae1079be7b54233>) (FunctionDeclaration)
- [needsPolicyEvidence](<runtime-context.cjs.md#s-3c69866df79c139e>) (FunctionDeclaration)
- [needsPolicyEvidence.&lt;anonymous@64:26&gt;](<runtime-context.cjs.md#s-c421d699630008f3>) (ArrowFunction)
- [selectRuntimeSources](<runtime-context.cjs.md#s-8df089888e38d14d>) (FunctionDeclaration)
- [selectRuntimeSources.&lt;anonymous@76:19&gt;](<runtime-context.cjs.md#s-d4f18b6d170e7e0a>) (ArrowFunction)
- [selectRuntimeSources.&lt;anonymous@80:24&gt;](<runtime-context.cjs.md#s-32aa0c170da069e8>) (ArrowFunction)
- [selectRuntimeSources.&lt;anonymous@83:46&gt;](<runtime-context.cjs.md#s-58dbbe0f5847a986>) (ArrowFunction)
- [runtimePolicy](<runtime-context.cjs.md#s-7f45e8f2e47d8040>) (FunctionDeclaration)
- [runtimePolicy.&lt;anonymous@100:37&gt;](<runtime-context.cjs.md#s-6d149e12899a005d>) (ArrowFunction)
- [runtimePolicy.&lt;anonymous@102:40&gt;](<runtime-context.cjs.md#s-030e019dd6804f4b>) (ArrowFunction)
- [runtimePolicy.&lt;anonymous@138:50&gt;](<runtime-context.cjs.md#s-c9cb63c2adb694b7>) (ArrowFunction)
- [runtimePolicy.&lt;anonymous@138:50&gt;.&lt;anonymous@140:36&gt;](<runtime-context.cjs.md#s-ebb46c36f5e47448>) (ArrowFunction)
- [runtimePolicy.&lt;anonymous@156:32&gt;](<runtime-context.cjs.md#s-ea60eeff0ba48080>) (ArrowFunction)
- [runtimePolicy.&lt;anonymous@165:9&gt;](<runtime-context.cjs.md#s-9c3c765d21e11fd5>) (ArrowFunction)
- [runtimePolicy.&lt;anonymous@174:28&gt;](<runtime-context.cjs.md#s-8a5a34570467738b>) (ArrowFunction)

<a id="s-5051e08942050da3"></a>

## electron/ai/runtime-context.cjs

[electron/ai/runtime-context.cjs:1](<../../../../../../electron/ai/runtime-context.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [hash](<runtime-context.cjs.md#s-9217c9e9275a4e6a>) — [electron/ai/runtime-context.cjs:16](<../../../../../../electron/ai/runtime-context.cjs#L16>)
- [normalize](<runtime-context.cjs.md#s-7f41855a6fde3f99>) — [electron/ai/runtime-context.cjs:16](<../../../../../../electron/ai/runtime-context.cjs#L16>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/ai/runtime-context.cjs:1](<../../../../../../electron/ai/runtime-context.cjs#L1>)
- require — module-loader; [electron/ai/runtime-context.cjs:2](<../../../../../../electron/ai/runtime-context.cjs#L2>)
- require — module-loader; [electron/ai/runtime-context.cjs:3](<../../../../../../electron/ai/runtime-context.cjs#L3>)

**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-9217c9e9275a4e6a"></a>

## hash

[electron/ai/runtime-context.cjs:4](<../../../../../../electron/ai/runtime-context.cjs#L4>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/runtime-context.cjs](<runtime-context.cjs.md#s-5051e08942050da3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [canonicalHash](<runtime-context.cjs.md#s-354543450a50bc05>) — [electron/ai/runtime-context.cjs:13](<../../../../../../electron/ai/runtime-context.cjs#L13>)
- [electron/ai/runtime-context.cjs](<runtime-context.cjs.md#s-5051e08942050da3>) — [electron/ai/runtime-context.cjs:16](<../../../../../../electron/ai/runtime-context.cjs#L16>)
- [matchesCanonical](<runtime-context.cjs.md#s-7ae1079be7b54233>) — [electron/ai/runtime-context.cjs:52](<../../../../../../electron/ai/runtime-context.cjs#L52>)
- [runtimePolicy.&lt;anonymous@156:32&gt;](<runtime-context.cjs.md#s-ea60eeff0ba48080>) — [electron/ai/runtime-context.cjs:158](<../../../../../../electron/ai/runtime-context.cjs#L158>)
- [runtimePolicy](<runtime-context.cjs.md#s-7f45e8f2e47d8040>) — [electron/ai/runtime-context.cjs:171](<../../../../../../electron/ai/runtime-context.cjs#L171>)

Unresolved / external call sites: 3.

- createHash("sha256").update(text).digest — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:4](<../../../../../../electron/ai/runtime-context.cjs#L4>)
- createHash("sha256").update — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:4](<../../../../../../electron/ai/runtime-context.cjs#L4>)
- createHash — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:4](<../../../../../../electron/ai/runtime-context.cjs#L4>)

**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-a852c8bcae735911"></a>

## canonicalPath

[electron/ai/runtime-context.cjs:5](<../../../../../../electron/ai/runtime-context.cjs#L5>) · VariableDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: canonicalPath ([electron/ai/runtime-context.cjs:1](<../../../../../../electron/ai/runtime-context.cjs#L1>)).

Lexical owner: [electron/ai/runtime-context.cjs](<runtime-context.cjs.md#s-5051e08942050da3>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-3c7f866ba3293dc3"></a>

## canonical

[electron/ai/runtime-context.cjs:7](<../../../../../../electron/ai/runtime-context.cjs#L7>) · VariableDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: canonical ([electron/ai/runtime-context.cjs:1](<../../../../../../electron/ai/runtime-context.cjs#L1>)).

Lexical owner: [electron/ai/runtime-context.cjs](<runtime-context.cjs.md#s-5051e08942050da3>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- fs.readFileSync — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:7](<../../../../../../electron/ai/runtime-context.cjs#L7>)
- path.join — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:7](<../../../../../../electron/ai/runtime-context.cjs#L7>)

**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-7f41855a6fde3f99"></a>

## normalize

[electron/ai/runtime-context.cjs:8](<../../../../../../electron/ai/runtime-context.cjs#L8>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/runtime-context.cjs](<runtime-context.cjs.md#s-5051e08942050da3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [electron/ai/runtime-context.cjs](<runtime-context.cjs.md#s-5051e08942050da3>) — [electron/ai/runtime-context.cjs:16](<../../../../../../electron/ai/runtime-context.cjs#L16>)
- [matchesCanonical](<runtime-context.cjs.md#s-7ae1079be7b54233>) — [electron/ai/runtime-context.cjs:52](<../../../../../../electron/ai/runtime-context.cjs#L52>)

Unresolved / external call sites: 3.

- text .replace(/^\\uFEFF/, "") .replace(/\\r\\n?/g, "\\n") .trim — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:9](<../../../../../../electron/ai/runtime-context.cjs#L9>)
- text .replace(/^\\uFEFF/, "") .replace — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:9](<../../../../../../electron/ai/runtime-context.cjs#L9>)
- text .replace — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:9](<../../../../../../electron/ai/runtime-context.cjs#L9>)

**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-354543450a50bc05"></a>

## canonicalHash

[electron/ai/runtime-context.cjs:13](<../../../../../../electron/ai/runtime-context.cjs#L13>) · VariableDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: canonicalHash ([electron/ai/runtime-context.cjs:1](<../../../../../../electron/ai/runtime-context.cjs#L1>)).

Lexical owner: [electron/ai/runtime-context.cjs](<runtime-context.cjs.md#s-5051e08942050da3>).

**Calls (statically resolved):**

- [hash](<runtime-context.cjs.md#s-9217c9e9275a4e6a>) — [electron/ai/runtime-context.cjs:13](<../../../../../../electron/ai/runtime-context.cjs#L13>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-7d15713247b01c9d"></a>

## COMPILED_CANONICAL_SHA256

[electron/ai/runtime-context.cjs:14](<../../../../../../electron/ai/runtime-context.cjs#L14>) · VariableDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: COMPILED_CANONICAL_SHA256 ([electron/ai/runtime-context.cjs:1](<../../../../../../electron/ai/runtime-context.cjs#L1>)).

Lexical owner: [electron/ai/runtime-context.cjs](<runtime-context.cjs.md#s-5051e08942050da3>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-a4149768256e4a64"></a>

## KERNEL_VERSION

[electron/ai/runtime-context.cjs:17](<../../../../../../electron/ai/runtime-context.cjs#L17>) · VariableDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: POLICY_VERSION ([electron/ai/agents/agent-policy.cjs:1](<../../../../../../electron/ai/agents/agent-policy.cjs#L1>)), KERNEL_VERSION ([electron/ai/runtime-context.cjs:1](<../../../../../../electron/ai/runtime-context.cjs#L1>)).

Lexical owner: [electron/ai/runtime-context.cjs](<runtime-context.cjs.md#s-5051e08942050da3>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-c608fb040ef776c4"></a>

## RUNTIME_KERNEL

[electron/ai/runtime-context.cjs:18](<../../../../../../electron/ai/runtime-context.cjs#L18>) · VariableDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: PROTECTED_POLICY ([electron/ai/agents/agent-policy.cjs:1](<../../../../../../electron/ai/agents/agent-policy.cjs#L1>)), RUNTIME_KERNEL ([electron/ai/runtime-context.cjs:1](<../../../../../../electron/ai/runtime-context.cjs#L1>)).

Lexical owner: [electron/ai/runtime-context.cjs](<runtime-context.cjs.md#s-5051e08942050da3>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91; "You are Orbistry Agent in STRICT_CONTEXT_ANALYSIS mode.", "Only host-authorized, session-bound research sources and verified computations over them are factual evidence. A filen — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:18](<../../../../../../electron/ai/runtime-context.cjs#L18>)

**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-49e32d3076b82abe"></a>

## MODULES

[electron/ai/runtime-context.cjs:29](<../../../../../../electron/ai/runtime-context.cjs#L29>) · VariableDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: MODULES ([electron/ai/runtime-context.cjs:1](<../../../../../../electron/ai/runtime-context.cjs#L1>)).

Lexical owner: [electron/ai/runtime-context.cjs](<runtime-context.cjs.md#s-5051e08942050da3>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Object.freeze — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:29](<../../../../../../electron/ai/runtime-context.cjs#L29>)

**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-7ae1079be7b54233"></a>

## matchesCanonical

[electron/ai/runtime-context.cjs:46](<../../../../../../electron/ai/runtime-context.cjs#L46>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: matchesCanonical ([electron/ai/runtime-context.cjs:1](<../../../../../../electron/ai/runtime-context.cjs#L1>)).

Lexical owner: [electron/ai/runtime-context.cjs](<runtime-context.cjs.md#s-5051e08942050da3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [hash](<runtime-context.cjs.md#s-9217c9e9275a4e6a>) — [electron/ai/runtime-context.cjs:52](<../../../../../../electron/ai/runtime-context.cjs#L52>)
- [normalize](<runtime-context.cjs.md#s-7f41855a6fde3f99>) — [electron/ai/runtime-context.cjs:52](<../../../../../../electron/ai/runtime-context.cjs#L52>)

**Called by (statically resolved):**

- [selectRuntimeSources.&lt;anonymous@76:19&gt;](<runtime-context.cjs.md#s-d4f18b6d170e7e0a>) — [electron/ai/runtime-context.cjs:76](<../../../../../../electron/ai/runtime-context.cjs#L76>)
- [selectRuntimeSources.&lt;anonymous@80:24&gt;](<runtime-context.cjs.md#s-32aa0c170da069e8>) — [electron/ai/runtime-context.cjs:80](<../../../../../../electron/ai/runtime-context.cjs#L80>)
- [runtimePolicy.&lt;anonymous@138:50&gt;.&lt;anonymous@140:36&gt;](<runtime-context.cjs.md#s-ebb46c36f5e47448>) — [electron/ai/runtime-context.cjs:141](<../../../../../../electron/ai/runtime-context.cjs#L141>)
- [&lt;anonymous@28:117&gt;](<runtime-context.test.cjs.md#s-4a1082cef1da8445>) — [electron/ai/runtime-context.test.cjs:35](<../../../../../../electron/ai/runtime-context.test.cjs#L35>)
- [&lt;anonymous@28:117&gt;](<runtime-context.test.cjs.md#s-4a1082cef1da8445>) — [electron/ai/runtime-context.test.cjs:37](<../../../../../../electron/ai/runtime-context.test.cjs#L37>)
- [&lt;anonymous@28:117&gt;](<runtime-context.test.cjs.md#s-4a1082cef1da8445>) — [electron/ai/runtime-context.test.cjs:41](<../../../../../../electron/ai/runtime-context.test.cjs#L41>)
- [&lt;anonymous@28:117&gt;](<runtime-context.test.cjs.md#s-4a1082cef1da8445>) — [electron/ai/runtime-context.test.cjs:46](<../../../../../../electron/ai/runtime-context.test.cjs#L46>)

Unresolved / external call sites: 2.

- &#91;"md", "markdown"&#93;.includes — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:49](<../../../../../../electron/ai/runtime-context.cjs#L49>)
- /\\.(md&#124;markdown)$/i.test — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:50](<../../../../../../electron/ai/runtime-context.cjs#L50>)

**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:35](<../../../../../../electron/ai/runtime-context.test.cjs#L35>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:37](<../../../../../../electron/ai/runtime-context.test.cjs#L37>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:41](<../../../../../../electron/ai/runtime-context.test.cjs#L41>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:46](<../../../../../../electron/ai/runtime-context.test.cjs#L46>) — static-call-site; coverage not established.
- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-3c69866df79c139e"></a>

## needsPolicyEvidence

[electron/ai/runtime-context.cjs:55](<../../../../../../electron/ai/runtime-context.cjs#L55>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/runtime-context.cjs](<runtime-context.cjs.md#s-5051e08942050da3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| question | any | compiler-inferred | required |
| history | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [selectRuntimeSources](<runtime-context.cjs.md#s-8df089888e38d14d>) — [electron/ai/runtime-context.cjs:75](<../../../../../../electron/ai/runtime-context.cjs#L75>)

Unresolved / external call sites: 3.

- policyIntent.test — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:62](<../../../../../../electron/ai/runtime-context.cjs#L62>)
- documentIntent.test — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:63](<../../../../../../electron/ai/runtime-context.cjs#L63>)
- (history ?? &#91;&#93;).some — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:64](<../../../../../../electron/ai/runtime-context.cjs#L64>)

**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-c421d699630008f3"></a>

## needsPolicyEvidence.&lt;anonymous@64:26&gt;

[electron/ai/runtime-context.cjs:64](<../../../../../../electron/ai/runtime-context.cjs#L64>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [needsPolicyEvidence](<runtime-context.cjs.md#s-3c69866df79c139e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| turn | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- policyIntent.test — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:64](<../../../../../../electron/ai/runtime-context.cjs#L64>)

**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-8df089888e38d14d"></a>

## selectRuntimeSources

[electron/ai/runtime-context.cjs:67](<../../../../../../electron/ai/runtime-context.cjs#L67>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: selectRuntimeSources ([electron/ai/runtime-context.cjs:1](<../../../../../../electron/ai/runtime-context.cjs#L1>)).

Lexical owner: [electron/ai/runtime-context.cjs](<runtime-context.cjs.md#s-5051e08942050da3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   sources,   userMessage,   history = &#91;&#93;,   agentId = "wonnyy-agent", } | { sources: any; userMessage: any; history?: {}; agentId?: string; } | compiler-inferred | required |

Returns: { sources: any; compacted: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [needsPolicyEvidence](<runtime-context.cjs.md#s-3c69866df79c139e>) — [electron/ai/runtime-context.cjs:75](<../../../../../../electron/ai/runtime-context.cjs#L75>)

**Called by (statically resolved):**

- [buildContextMessages](<inference/prompt-builder.cjs.md#s-241c37ad734d8bcd>) — [electron/ai/inference/prompt-builder.cjs:104](<../../../../../../electron/ai/inference/prompt-builder.cjs#L104>)
- [createContextOrchestrator.run](<orchestrator.cjs.md#s-be352215519f7acf>) — [electron/ai/orchestrator.cjs:427](<../../../../../../electron/ai/orchestrator.cjs#L427>)

Unresolved / external call sites: 4.

- sources.some — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:76](<../../../../../../electron/ai/runtime-context.cjs#L76>)
- sources.filter — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:80](<../../../../../../electron/ai/runtime-context.cjs#L80>)
- sources.filter(matchesCanonical).map — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:83](<../../../../../../electron/ai/runtime-context.cjs#L83>)
- sources.filter — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:83](<../../../../../../electron/ai/runtime-context.cjs#L83>)

**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-d4f18b6d170e7e0a"></a>

## selectRuntimeSources.&lt;anonymous@76:19&gt;

[electron/ai/runtime-context.cjs:76](<../../../../../../electron/ai/runtime-context.cjs#L76>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [selectRuntimeSources](<runtime-context.cjs.md#s-8df089888e38d14d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [matchesCanonical](<runtime-context.cjs.md#s-7ae1079be7b54233>) — [electron/ai/runtime-context.cjs:76](<../../../../../../electron/ai/runtime-context.cjs#L76>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-32aa0c170da069e8"></a>

## selectRuntimeSources.&lt;anonymous@80:24&gt;

[electron/ai/runtime-context.cjs:80](<../../../../../../electron/ai/runtime-context.cjs#L80>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [selectRuntimeSources](<runtime-context.cjs.md#s-8df089888e38d14d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [matchesCanonical](<runtime-context.cjs.md#s-7ae1079be7b54233>) — [electron/ai/runtime-context.cjs:80](<../../../../../../electron/ai/runtime-context.cjs#L80>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-58dbbe0f5847a986"></a>

## selectRuntimeSources.&lt;anonymous@83:46&gt;

[electron/ai/runtime-context.cjs:83](<../../../../../../electron/ai/runtime-context.cjs#L83>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [selectRuntimeSources](<runtime-context.cjs.md#s-8df089888e38d14d>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: { sourceId: any; relativePath: any; contentHash: any; canonicalHash: any; originalCharacters: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-7f45e8f2e47d8040"></a>

## runtimePolicy

[electron/ai/runtime-context.cjs:92](<../../../../../../electron/ai/runtime-context.cjs#L92>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: runtimePolicy ([electron/ai/runtime-context.cjs:1](<../../../../../../electron/ai/runtime-context.cjs#L1>)).

Lexical owner: [electron/ai/runtime-context.cjs](<runtime-context.cjs.md#s-5051e08942050da3>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   sources,   userMessage,   statistics,   configurationReferences = &#91;&#93;,   agentId = "wonnyy-agent", } | { sources: any; userMessage: any; statistics: any; configurationReferences?: {}; agentId?: string; } | compiler-inferred | required |

Returns: { system: any; configurationReferences: any; diagnostics: { kernelVersion: string; kernelHash: any; canonicalPath: string; canonicalHash: any; modules: any; }; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [hash](<runtime-context.cjs.md#s-9217c9e9275a4e6a>) — [electron/ai/runtime-context.cjs:171](<../../../../../../electron/ai/runtime-context.cjs#L171>)

**Called by (statically resolved):**

- [buildContextMessages](<inference/prompt-builder.cjs.md#s-241c37ad734d8bcd>) — [electron/ai/inference/prompt-builder.cjs:110](<../../../../../../electron/ai/inference/prompt-builder.cjs#L110>)

Unresolved / external call sites: 24.

- Set — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:99](<../../../../../../electron/ai/runtime-context.cjs#L99>)
- Set — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:100](<../../../../../../electron/ai/runtime-context.cjs#L100>)
- sources.map — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:100](<../../../../../../electron/ai/runtime-context.cjs#L100>)
- &#91;"pdf", "png", "jpg", "jpeg"&#93;.some — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:102](<../../../../../../electron/ai/runtime-context.cjs#L102>)
- ids.add — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:105](<../../../../../../electron/ai/runtime-context.cjs#L105>)
- types.has — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:106](<../../../../../../electron/ai/runtime-context.cjs#L106>)
- ids.add — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:107](<../../../../../../electron/ai/runtime-context.cjs#L107>)
- ids.add — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:108](<../../../../../../electron/ai/runtime-context.cjs#L108>)
- 16 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-6d149e12899a005d"></a>

## runtimePolicy.&lt;anonymous@100:37&gt;

[electron/ai/runtime-context.cjs:100](<../../../../../../electron/ai/runtime-context.cjs#L100>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runtimePolicy](<runtime-context.cjs.md#s-7f45e8f2e47d8040>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-030e019dd6804f4b"></a>

## runtimePolicy.&lt;anonymous@102:40&gt;

[electron/ai/runtime-context.cjs:102](<../../../../../../electron/ai/runtime-context.cjs#L102>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runtimePolicy](<runtime-context.cjs.md#s-7f45e8f2e47d8040>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| type | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- types.has — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:102](<../../../../../../electron/ai/runtime-context.cjs#L102>)

**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-c9cb63c2adb694b7"></a>

## runtimePolicy.&lt;anonymous@138:50&gt;

[electron/ai/runtime-context.cjs:138](<../../../../../../electron/ai/runtime-context.cjs#L138>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runtimePolicy](<runtime-context.cjs.md#s-7f45e8f2e47d8040>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| reference | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- reference.sources.map — external-or-dynamic-dispatch; [electron/ai/runtime-context.cjs:140](<../../../../../../electron/ai/runtime-context.cjs#L140>)

**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-ebb46c36f5e47448"></a>

## runtimePolicy.&lt;anonymous@138:50&gt;.&lt;anonymous@140:36&gt;

[electron/ai/runtime-context.cjs:140](<../../../../../../electron/ai/runtime-context.cjs#L140>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runtimePolicy.&lt;anonymous@138:50&gt;](<runtime-context.cjs.md#s-c9cb63c2adb694b7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [matchesCanonical](<runtime-context.cjs.md#s-7ae1079be7b54233>) — [electron/ai/runtime-context.cjs:141](<../../../../../../electron/ai/runtime-context.cjs#L141>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-ea60eeff0ba48080"></a>

## runtimePolicy.&lt;anonymous@156:32&gt;

[electron/ai/runtime-context.cjs:156](<../../../../../../electron/ai/runtime-context.cjs#L156>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runtimePolicy](<runtime-context.cjs.md#s-7f45e8f2e47d8040>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | any | compiler-inferred | required |

Returns: { id: any; hash: any; content: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [hash](<runtime-context.cjs.md#s-9217c9e9275a4e6a>) — [electron/ai/runtime-context.cjs:158](<../../../../../../electron/ai/runtime-context.cjs#L158>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-9c3c765d21e11fd5"></a>

## runtimePolicy.&lt;anonymous@165:9&gt;

[electron/ai/runtime-context.cjs:165](<../../../../../../electron/ai/runtime-context.cjs#L165>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runtimePolicy](<runtime-context.cjs.md#s-7f45e8f2e47d8040>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| module | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.

<a id="s-8a5a34570467738b"></a>

## runtimePolicy.&lt;anonymous@174:28&gt;

[electron/ai/runtime-context.cjs:174](<../../../../../../electron/ai/runtime-context.cjs#L174>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [runtimePolicy](<runtime-context.cjs.md#s-7f45e8f2e47d8040>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { id, hash } | { id: any; hash: any; } | compiler-inferred | required |

Returns: { id: any; hash: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/ai/runtime-context.test.cjs:14](<../../../../../../electron/ai/runtime-context.test.cjs#L14>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-runtime-kernel-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-runtime-kernel-smoke.cjs#L9>) — file-import-only; coverage not established.
