# features/model-settings/provided-models.tsx: symbols

[Atlas](<../../../../README.md>) / [Settings and Engine list](<../../../../modules/portal-settings.md>) / [features/model-settings/provided-models.tsx:1](<../../../../../../features/model-settings/provided-models.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/model-settings/provided-models.tsx](<provided-models.tsx.md#s-17b37e76ebbd6f31>) (Module)
- [ProvidedModels](<provided-models.tsx.md#s-68162b688a476517>) (FunctionDeclaration)
- [ProvidedModels.&lt;anonymous@12:13&gt;](<provided-models.tsx.md#s-4374280810bac7a2>) (ArrowFunction)
- [ProvidedModels.&lt;anonymous@12:13&gt;.&lt;anonymous@24:13&gt;](<provided-models.tsx.md#s-8401d26b3b367d92>) (ArrowFunction)
- [ProvidedModels.&lt;anonymous@12:13&gt;.&lt;anonymous@27:14&gt;](<provided-models.tsx.md#s-f2c95d9fc6553e68>) (ArrowFunction)
- [ProvidedModels.&lt;anonymous@12:13&gt;.&lt;anonymous@33:16&gt;](<provided-models.tsx.md#s-4b931805de040f7c>) (ArrowFunction)
- [ProvidedModels.&lt;anonymous@12:13&gt;.&lt;anonymous@36:12&gt;](<provided-models.tsx.md#s-9a3fbe6df30f22e2>) (ArrowFunction)
- [ProvidedModels.&lt;anonymous@54:20&gt;](<provided-models.tsx.md#s-801f945321972808>) (ArrowFunction)
- [ProvidedModels.&lt;anonymous@54:20&gt;.&lt;anonymous@54:38&gt;](<provided-models.tsx.md#s-46018fafaa8963a4>) (ArrowFunction)
- [ProvidedModels.&lt;anonymous@67:23&gt;](<provided-models.tsx.md#s-c2dacdc2cb6c1d16>) (ArrowFunction)
- [ProvidedModels.&lt;anonymous@67:23&gt;.&lt;anonymous@79:43&gt;](<provided-models.tsx.md#s-ee2e6e1c1a527c18>) (ArrowFunction)

<a id="s-17b37e76ebbd6f31"></a>

## features/model-settings/provided-models.tsx

[features/model-settings/provided-models.tsx:1](<../../../../../../features/model-settings/provided-models.tsx#L1>) · Module · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-68162b688a476517"></a>

## ProvidedModels

[features/model-settings/provided-models.tsx:7](<../../../../../../features/model-settings/provided-models.tsx#L7>) · FunctionDeclaration · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

This surface consumes only the backend's public, non-executable projection.

Purpose evidence: jsdoc.

Exported as: ProvidedModels ([features/model-settings/provided-models.tsx:1](<../../../../../../features/model-settings/provided-models.tsx#L1>)).

Lexical owner: [features/model-settings/provided-models.tsx](<provided-models.tsx.md#s-17b37e76ebbd6f31>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- useState — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:8](<../../../../../../features/model-settings/provided-models.tsx#L8>)
- useState — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:9](<../../../../../../features/model-settings/provided-models.tsx#L9>)
- useState — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:10](<../../../../../../features/model-settings/provided-models.tsx#L10>)
- useState — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:11](<../../../../../../features/model-settings/provided-models.tsx#L11>)
- useEffect — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:12](<../../../../../../features/model-settings/provided-models.tsx#L12>)
- models.map — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:67](<../../../../../../features/model-settings/provided-models.tsx#L67>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4374280810bac7a2"></a>

## ProvidedModels.&lt;anonymous@12:13&gt;

[features/model-settings/provided-models.tsx:12](<../../../../../../features/model-settings/provided-models.tsx#L12>) · ArrowFunction · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProvidedModels](<provided-models.tsx.md#s-68162b688a476517>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- setLoading — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:14](<../../../../../../features/model-settings/provided-models.tsx#L14>)
- setError — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:15](<../../../../../../features/model-settings/provided-models.tsx#L15>)
- setError — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:18](<../../../../../../features/model-settings/provided-models.tsx#L18>)
- setLoading — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:19](<../../../../../../features/model-settings/provided-models.tsx#L19>)
- ai .providedModels() .then((values) =&gt; { if (!disposed) setModels(values); }) .catch(() =&gt; { if (!disposed) setError( "Cannot load saved favorites. Retry or check the local catalog — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:22](<../../../../../../features/model-settings/provided-models.tsx#L22>)
- ai .providedModels() .then((values) =&gt; { if (!disposed) setModels(values); }) .catch — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:22](<../../../../../../features/model-settings/provided-models.tsx#L22>)
- ai .providedModels() .then — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:22](<../../../../../../features/model-settings/provided-models.tsx#L22>)
- ai .providedModels — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:22](<../../../../../../features/model-settings/provided-models.tsx#L22>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8401d26b3b367d92"></a>

## ProvidedModels.&lt;anonymous@12:13&gt;.&lt;anonymous@24:13&gt;

[features/model-settings/provided-models.tsx:24](<../../../../../../features/model-settings/provided-models.tsx#L24>) · ArrowFunction · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProvidedModels.&lt;anonymous@12:13&gt;](<provided-models.tsx.md#s-4374280810bac7a2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| values | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setModels — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:25](<../../../../../../features/model-settings/provided-models.tsx#L25>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f2c95d9fc6553e68"></a>

## ProvidedModels.&lt;anonymous@12:13&gt;.&lt;anonymous@27:14&gt;

[features/model-settings/provided-models.tsx:27](<../../../../../../features/model-settings/provided-models.tsx#L27>) · ArrowFunction · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProvidedModels.&lt;anonymous@12:13&gt;](<provided-models.tsx.md#s-4374280810bac7a2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setError — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:29](<../../../../../../features/model-settings/provided-models.tsx#L29>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4b931805de040f7c"></a>

## ProvidedModels.&lt;anonymous@12:13&gt;.&lt;anonymous@33:16&gt;

[features/model-settings/provided-models.tsx:33](<../../../../../../features/model-settings/provided-models.tsx#L33>) · ArrowFunction · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProvidedModels.&lt;anonymous@12:13&gt;](<provided-models.tsx.md#s-4374280810bac7a2>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setLoading — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:34](<../../../../../../features/model-settings/provided-models.tsx#L34>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9a3fbe6df30f22e2"></a>

## ProvidedModels.&lt;anonymous@12:13&gt;.&lt;anonymous@36:12&gt;

[features/model-settings/provided-models.tsx:36](<../../../../../../features/model-settings/provided-models.tsx#L36>) · ArrowFunction · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProvidedModels.&lt;anonymous@12:13&gt;](<provided-models.tsx.md#s-4374280810bac7a2>).

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

<a id="s-801f945321972808"></a>

## ProvidedModels.&lt;anonymous@54:20&gt;

[features/model-settings/provided-models.tsx:54](<../../../../../../features/model-settings/provided-models.tsx#L54>) · ArrowFunction · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProvidedModels](<provided-models.tsx.md#s-68162b688a476517>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setRevision — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:54](<../../../../../../features/model-settings/provided-models.tsx#L54>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-46018fafaa8963a4"></a>

## ProvidedModels.&lt;anonymous@54:20&gt;.&lt;anonymous@54:38&gt;

[features/model-settings/provided-models.tsx:54](<../../../../../../features/model-settings/provided-models.tsx#L54>) · ArrowFunction · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProvidedModels.&lt;anonymous@54:20&gt;](<provided-models.tsx.md#s-801f945321972808>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c2dacdc2cb6c1d16"></a>

## ProvidedModels.&lt;anonymous@67:23&gt;

[features/model-settings/provided-models.tsx:67](<../../../../../../features/model-settings/provided-models.tsx#L67>) · ArrowFunction · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProvidedModels](<provided-models.tsx.md#s-68162b688a476517>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| model | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- model.capabilities.map — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:79](<../../../../../../features/model-settings/provided-models.tsx#L79>)
- model.contextLength?.toLocaleString — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:86](<../../../../../../features/model-settings/provided-models.tsx#L86>)
- model.outputLimit?.toLocaleString — external-or-dynamic-dispatch; [features/model-settings/provided-models.tsx:88](<../../../../../../features/model-settings/provided-models.tsx#L88>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ee2e6e1c1a527c18"></a>

## ProvidedModels.&lt;anonymous@67:23&gt;.&lt;anonymous@79:43&gt;

[features/model-settings/provided-models.tsx:79](<../../../../../../features/model-settings/provided-models.tsx#L79>) · ArrowFunction · production · [Settings and Engine list](<../../../../modules/portal-settings.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ProvidedModels.&lt;anonymous@67:23&gt;](<provided-models.tsx.md#s-c2dacdc2cb6c1d16>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| capability | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
