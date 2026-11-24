# features/knowledge/carousel-source.tsx: symbols

[Atlas](<../../../../README.md>) / [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>) / [features/knowledge/carousel-source.tsx:1](<../../../../../../features/knowledge/carousel-source.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/knowledge/carousel-source.tsx](<carousel-source.tsx.md#s-26e4e9fb6a107287>) (Module)
- [useCarouselSource](<carousel-source.tsx.md#s-ec367cb44816b01c>) (FunctionDeclaration)
- [useCarouselSource.loadOriginal](<carousel-source.tsx.md#s-98c473b6638d1c84>) (FunctionExpression)
- [useCarouselSource.loadOriginal.&lt;anonymous@26:69&gt;](<carousel-source.tsx.md#s-3c30fb16b38c98e9>) (ArrowFunction)
- [useCarouselSource.loadOriginal.&lt;anonymous@32:77&gt;](<carousel-source.tsx.md#s-d50899a3b706d36d>) (ArrowFunction)
- [useCarouselSource.loadOriginal.discardOriginal](<carousel-source.tsx.md#s-1baf80156dc2b36d>) (FunctionExpression)
- [CarouselImage](<carousel-source.tsx.md#s-83445a8c4b20df79>) (FunctionDeclaration)
- [CarouselImage.failedImage](<carousel-source.tsx.md#s-c53830db708e9ba1>) (FunctionDeclaration)

<a id="s-26e4e9fb6a107287"></a>

## features/knowledge/carousel-source.tsx

[features/knowledge/carousel-source.tsx:1](<../../../../../../features/knowledge/carousel-source.tsx#L1>) · Module · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ec367cb44816b01c"></a>

## useCarouselSource

[features/knowledge/carousel-source.tsx:7](<../../../../../../features/knowledge/carousel-source.tsx#L7>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Resolves one applied source through the existing read-only Vault preview boundary. Discards stale results and performs no processing.

Purpose evidence: jsdoc.

Exported as: useCarouselSource ([features/knowledge/carousel-source.tsx:1](<../../../../../../features/knowledge/carousel-source.tsx#L1>)).

Lexical owner: [features/knowledge/carousel-source.tsx](<carousel-source.tsx.md#s-26e4e9fb6a107287>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| vaultPath | string | annotation | required |
| entityId | string | annotation | required |
| sourceId | string | annotation | required |

Returns: { preview: any; error: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [CarouselImage](<carousel-source.tsx.md#s-83445a8c4b20df79>) — [features/knowledge/carousel-source.tsx:60](<../../../../../../features/knowledge/carousel-source.tsx#L60>)

Unresolved / external call sites: 3.

- useState — external-or-dynamic-dispatch; [features/knowledge/carousel-source.tsx:12](<../../../../../../features/knowledge/carousel-source.tsx#L12>)
- useState — external-or-dynamic-dispatch; [features/knowledge/carousel-source.tsx:13](<../../../../../../features/knowledge/carousel-source.tsx#L13>)
- useEffect — external-or-dynamic-dispatch; [features/knowledge/carousel-source.tsx:14](<../../../../../../features/knowledge/carousel-source.tsx#L14>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-98c473b6638d1c84"></a>

## useCarouselSource.loadOriginal

[features/knowledge/carousel-source.tsx:15](<../../../../../../features/knowledge/carousel-source.tsx#L15>) · FunctionExpression · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [useCarouselSource](<carousel-source.tsx.md#s-ec367cb44816b01c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [requireWorldViewBridge](<../worldview/chip-session.ts.md#s-724ceb52bd424e76>) — [features/knowledge/carousel-source.tsx:19](<../../../../../../features/knowledge/carousel-source.tsx#L19>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- setPreview — external-or-dynamic-dispatch; [features/knowledge/carousel-source.tsx:17](<../../../../../../features/knowledge/carousel-source.tsx#L17>)
- setError — external-or-dynamic-dispatch; [features/knowledge/carousel-source.tsx:18](<../../../../../../features/knowledge/carousel-source.tsx#L18>)
- requireWorldViewBridge() .request&lt;KnowledgeSourcePreview&gt;("knowledge-preview", { vaultPath, id: entityId, sourceId, }) .then — external-or-dynamic-dispatch; [features/knowledge/carousel-source.tsx:19](<../../../../../../features/knowledge/carousel-source.tsx#L19>)
- requireWorldViewBridge() .request — declaration-without-runtime-body; [features/knowledge/carousel-source.tsx:19](<../../../../../../features/knowledge/carousel-source.tsx#L19>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3c30fb16b38c98e9"></a>

## useCarouselSource.loadOriginal.&lt;anonymous@26:69&gt;

[features/knowledge/carousel-source.tsx:26](<../../../../../../features/knowledge/carousel-source.tsx#L26>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Accepts original image data for the current slide.

Purpose evidence: jsdoc.

Lexical owner: [useCarouselSource.loadOriginal](<carousel-source.tsx.md#s-98c473b6638d1c84>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- setPreview — external-or-dynamic-dispatch; [features/knowledge/carousel-source.tsx:28](<../../../../../../features/knowledge/carousel-source.tsx#L28>)
- setError — external-or-dynamic-dispatch; [features/knowledge/carousel-source.tsx:29](<../../../../../../features/knowledge/carousel-source.tsx#L29>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d50899a3b706d36d"></a>

## useCarouselSource.loadOriginal.&lt;anonymous@32:77&gt;

[features/knowledge/carousel-source.tsx:32](<../../../../../../features/knowledge/carousel-source.tsx#L32>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Reports unavailable originals independently of navigation.

Purpose evidence: jsdoc.

Lexical owner: [useCarouselSource.loadOriginal](<carousel-source.tsx.md#s-98c473b6638d1c84>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| cause | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setError — external-or-dynamic-dispatch; [features/knowledge/carousel-source.tsx:35](<../../../../../../features/knowledge/carousel-source.tsx#L35>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-1baf80156dc2b36d"></a>

## useCarouselSource.loadOriginal.discardOriginal

[features/knowledge/carousel-source.tsx:39](<../../../../../../features/knowledge/carousel-source.tsx#L39>) · FunctionExpression · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Ignores an earlier slide response after switching or unmounting.

Purpose evidence: jsdoc.

Lexical owner: [useCarouselSource.loadOriginal](<carousel-source.tsx.md#s-98c473b6638d1c84>).

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

<a id="s-83445a8c4b20df79"></a>

## CarouselImage

[features/knowledge/carousel-source.tsx:49](<../../../../../../features/knowledge/carousel-source.tsx#L49>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Renders a resolved original with browser decoding feedback. Source access stays in the dedicated resolver hook.

Purpose evidence: jsdoc.

Exported as: CarouselImage ([features/knowledge/carousel-source.tsx:1](<../../../../../../features/knowledge/carousel-source.tsx#L1>)).

Lexical owner: [features/knowledge/carousel-source.tsx](<carousel-source.tsx.md#s-26e4e9fb6a107287>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   vaultPath,   entityId,   sourceId,   name, } | Readonly&lt;{ vaultPath: string; entityId: string; sourceId: string; name: string; }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [useCarouselSource](<carousel-source.tsx.md#s-ec367cb44816b01c>) — [features/knowledge/carousel-source.tsx:60](<../../../../../../features/knowledge/carousel-source.tsx#L60>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- useState — external-or-dynamic-dispatch; [features/knowledge/carousel-source.tsx:61](<../../../../../../features/knowledge/carousel-source.tsx#L61>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c53830db708e9ba1"></a>

## CarouselImage.failedImage

[features/knowledge/carousel-source.tsx:63](<../../../../../../features/knowledge/carousel-source.tsx#L63>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Reports browser decoding failure while keeping other slides usable.

Purpose evidence: jsdoc.

Lexical owner: [CarouselImage](<carousel-source.tsx.md#s-83445a8c4b20df79>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setDecodeError — external-or-dynamic-dispatch; [features/knowledge/carousel-source.tsx:64](<../../../../../../features/knowledge/carousel-source.tsx#L64>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
