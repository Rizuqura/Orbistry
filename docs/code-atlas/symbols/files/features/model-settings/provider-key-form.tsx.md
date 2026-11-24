# features/model-settings/provider-key-form.tsx: symbols

[Atlas](<../../../../README.md>) / [Settings and Engine list](<../../../../modules/portal-settings.md>) / [features/model-settings/provider-key-form.tsx:1](<../../../../../../features/model-settings/provider-key-form.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/model-settings/provider-key-form.tsx](<provider-key-form.tsx.md#s-354096676ee40c67>) (Module)
- [RemoteProvider](<provider-key-form.tsx.md#s-4abe5beeb39ed047>) (TypeAliasDeclaration)
- [ProviderKeyForm](<provider-key-form.tsx.md#s-701885bd959d5077>) (FunctionDeclaration)
- [ProviderKeyForm.&lt;anonymous@15:12&gt;](<provider-key-form.tsx.md#s-49dcdfa14af4f7dd>) (FunctionType)
- [ProviderKeyForm.&lt;anonymous@18:16&gt;](<provider-key-form.tsx.md#s-118c9e49530a5232>) (FunctionType)
- [ProviderKeyForm.&lt;anonymous@39:19&gt;](<provider-key-form.tsx.md#s-70d144d2764a8213>) (ArrowFunction)
- [ProviderKeyForm.&lt;anonymous@80:23&gt;](<provider-key-form.tsx.md#s-5d9f1e298cac727e>) (ArrowFunction)

<a id="s-354096676ee40c67"></a>

## features/model-settings/provider-key-form.tsx

[features/model-settings/provider-key-form.tsx:1](<../../../../../../features/model-settings/provider-key-form.tsx#L1>) · Module · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4abe5beeb39ed047"></a>

## RemoteProvider

[features/model-settings/provider-key-form.tsx:6](<../../../../../../features/model-settings/provider-key-form.tsx#L6>) · TypeAliasDeclaration · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [features/model-settings/provider-key-form.tsx](<provider-key-form.tsx.md#s-354096676ee40c67>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-701885bd959d5077"></a>

## ProviderKeyForm

[features/model-settings/provider-key-form.tsx:9](<../../../../../../features/model-settings/provider-key-form.tsx#L9>) · FunctionDeclaration · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

Keep the secret in the masked input, outside persisted UI or agent state.

Purpose evidence: jsdoc.

Exported as: ProviderKeyForm ([features/model-settings/provider-key-form.tsx:1](<../../../../../../features/model-settings/provider-key-form.tsx#L1>)).

Lexical owner: [features/model-settings/provider-key-form.tsx](<provider-key-form.tsx.md#s-354096676ee40c67>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   busy,   connect,   onConnected, } | { busy: boolean; connect: ( input: Parameters&lt;AiBridge&#91;"connectCredential"&#93;&gt;&#91;0&#93;, ) =&gt; Promise&lt;ProviderConnection &#124; null&gt;; onConnected: (provider: RemoteProvider) =&gt; void; } | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- useRef — external-or-dynamic-dispatch; [features/model-settings/provider-key-form.tsx:20](<../../../../../../features/model-settings/provider-key-form.tsx#L20>)
- useRef — external-or-dynamic-dispatch; [features/model-settings/provider-key-form.tsx:21](<../../../../../../features/model-settings/provider-key-form.tsx#L21>)
- useState — external-or-dynamic-dispatch; [features/model-settings/provider-key-form.tsx:22](<../../../../../../features/model-settings/provider-key-form.tsx#L22>)
- useState — external-or-dynamic-dispatch; [features/model-settings/provider-key-form.tsx:23](<../../../../../../features/model-settings/provider-key-form.tsx#L23>)
- useState — external-or-dynamic-dispatch; [features/model-settings/provider-key-form.tsx:24](<../../../../../../features/model-settings/provider-key-form.tsx#L24>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-49dcdfa14af4f7dd"></a>

## ProviderKeyForm.&lt;anonymous@15:12&gt;

[features/model-settings/provider-key-form.tsx:15](<../../../../../../features/model-settings/provider-key-form.tsx#L15>) · FunctionType · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProviderKeyForm](<provider-key-form.tsx.md#s-701885bd959d5077>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| input | Parameters&lt;AiBridge&#91;"connectCredential"&#93;&gt;&#91;0&#93; | annotation | required |

Returns: Promise&lt;ProviderConnection &#124; null&gt; (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-118c9e49530a5232"></a>

## ProviderKeyForm.&lt;anonymous@18:16&gt;

[features/model-settings/provider-key-form.tsx:18](<../../../../../../features/model-settings/provider-key-form.tsx#L18>) · FunctionType · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProviderKeyForm](<provider-key-form.tsx.md#s-701885bd959d5077>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| provider | RemoteProvider | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-70d144d2764a8213"></a>

## ProviderKeyForm.&lt;anonymous@39:19&gt;

[features/model-settings/provider-key-form.tsx:39](<../../../../../../features/model-settings/provider-key-form.tsx#L39>) · ArrowFunction · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProviderKeyForm](<provider-key-form.tsx.md#s-701885bd959d5077>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 11.

- event.preventDefault — external-or-dynamic-dispatch; [features/model-settings/provider-key-form.tsx:40](<../../../../../../features/model-settings/provider-key-form.tsx#L40>)
- setChecking — external-or-dynamic-dispatch; [features/model-settings/provider-key-form.tsx:43](<../../../../../../features/model-settings/provider-key-form.tsx#L43>)
- setError — external-or-dynamic-dispatch; [features/model-settings/provider-key-form.tsx:44](<../../../../../../features/model-settings/provider-key-form.tsx#L44>)
- setResult — external-or-dynamic-dispatch; [features/model-settings/provider-key-form.tsx:45](<../../../../../../features/model-settings/provider-key-form.tsx#L45>)
- connect — declaration-without-runtime-body; [features/model-settings/provider-key-form.tsx:47](<../../../../../../features/model-settings/provider-key-form.tsx#L47>)
- input.current.value.trim — external-or-dynamic-dispatch; [features/model-settings/provider-key-form.tsx:48](<../../../../../../features/model-settings/provider-key-form.tsx#L48>)
- setResult — external-or-dynamic-dispatch; [features/model-settings/provider-key-form.tsx:50](<../../../../../../features/model-settings/provider-key-form.tsx#L50>)
- onConnected — declaration-without-runtime-body; [features/model-settings/provider-key-form.tsx:53](<../../../../../../features/model-settings/provider-key-form.tsx#L53>)
- 3 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5d9f1e298cac727e"></a>

## ProviderKeyForm.&lt;anonymous@80:23&gt;

[features/model-settings/provider-key-form.tsx:80](<../../../../../../features/model-settings/provider-key-form.tsx#L80>) · ArrowFunction · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProviderKeyForm](<provider-key-form.tsx.md#s-701885bd959d5077>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- setResult — external-or-dynamic-dispatch; [features/model-settings/provider-key-form.tsx:81](<../../../../../../features/model-settings/provider-key-form.tsx#L81>)
- setError — external-or-dynamic-dispatch; [features/model-settings/provider-key-form.tsx:82](<../../../../../../features/model-settings/provider-key-form.tsx#L82>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
