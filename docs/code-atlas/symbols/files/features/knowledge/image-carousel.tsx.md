# features/knowledge/image-carousel.tsx: symbols

[Atlas](<../../../../README.md>) / [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>) / [features/knowledge/image-carousel.tsx:1](<../../../../../../features/knowledge/image-carousel.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/knowledge/image-carousel.tsx](<image-carousel.tsx.md#s-3ba9f8ee610dfe88>) (Module)
- [TimelineScrubber](<image-carousel.tsx.md#s-c7c6c75007f341fe>) (FunctionDeclaration)
- [TimelineScrubber.&lt;anonymous@32:13&gt;](<image-carousel.tsx.md#s-6d26cca44757efb9>) (FunctionType)
- [TimelineScrubber.revealObservation](<image-carousel.tsx.md#s-f9bc6dc75d8b169e>) (FunctionExpression)
- [TimelineScrubber.scrub](<image-carousel.tsx.md#s-17da758792478bd0>) (FunctionDeclaration)
- [TimelineScrubber.selectMarker](<image-carousel.tsx.md#s-12c5263dbcd547a4>) (FunctionDeclaration)
- [TimelineScrubber.&lt;anonymous@104:25&gt;](<image-carousel.tsx.md#s-ca516ca742728be1>) (ArrowFunction)
- [ImageCarousel](<image-carousel.tsx.md#s-a12402427698faf4>) (FunctionDeclaration)
- [ImageCarousel.&lt;anonymous@144:18&gt;](<image-carousel.tsx.md#s-84dc0e56a6b18b66>) (FunctionType)
- [ImageCarousel.&lt;anonymous@155:29&gt;](<image-carousel.tsx.md#s-773ceb52e088cdc2>) (ArrowFunction)
- [ImageCarousel.&lt;anonymous@164:17&gt;](<image-carousel.tsx.md#s-46a6c8050387a4c4>) (ArrowFunction)
- [ImageCarousel.selectSlide](<image-carousel.tsx.md#s-835eb1f9e9d83870>) (FunctionDeclaration)
- [ImageCarousel.previous](<image-carousel.tsx.md#s-eb2bb3c6d6d7bd88>) (FunctionDeclaration)
- [ImageCarousel.next](<image-carousel.tsx.md#s-54c43c24da0de975>) (FunctionDeclaration)
- [ImageCarousel.selectThumbnail](<image-carousel.tsx.md#s-ea2e8f1876cb8990>) (FunctionDeclaration)
- [ImageCarousel.navigate](<image-carousel.tsx.md#s-14a429c97051ccf0>) (FunctionDeclaration)
- [ImageCarousel.locate](<image-carousel.tsx.md#s-c997c42ded29e071>) (FunctionDeclaration)
- [ImageCarousel.saveNotes](<image-carousel.tsx.md#s-8d1e3e27807cc102>) (FunctionDeclaration)
- [ImageCarousel.&lt;anonymous@309:23&gt;](<image-carousel.tsx.md#s-c5ce114d8be3cf14>) (ArrowFunction)
- [ImageCarousel.&lt;anonymous@382:25&gt;](<image-carousel.tsx.md#s-d2d12f2e274d12bc>) (ArrowFunction)

<a id="s-3ba9f8ee610dfe88"></a>

## features/knowledge/image-carousel.tsx

[features/knowledge/image-carousel.tsx:1](<../../../../../../features/knowledge/image-carousel.tsx#L1>) · Module · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c7c6c75007f341fe"></a>

## TimelineScrubber

[features/knowledge/image-carousel.tsx:25](<../../../../../../features/knowledge/image-carousel.tsx#L25>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Selects discrete observation indices with a native range and explicit-date markers, keeping the active marker visible in long collections.

Purpose evidence: jsdoc.

Lexical owner: [features/knowledge/image-carousel.tsx](<image-carousel.tsx.md#s-3ba9f8ee610dfe88>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   slides,   position,   onSelect, } | Readonly&lt;{ slides: readonly CarouselSlide&#91;&#93;; position: number; onSelect: (position: number) =&gt; void; }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [observationTime](<carousel-model.ts.md#s-c9991c1c6c6b682c>) — [features/knowledge/image-carousel.tsx:38](<../../../../../../features/knowledge/image-carousel.tsx#L38>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- useId — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:34](<../../../../../../features/knowledge/image-carousel.tsx#L34>)
- useRef — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:35](<../../../../../../features/knowledge/image-carousel.tsx#L35>)
- useEffect — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:43](<../../../../../../features/knowledge/image-carousel.tsx#L43>)
- Math.max — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:81](<../../../../../../features/knowledge/image-carousel.tsx#L81>)
- slides.map — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:104](<../../../../../../features/knowledge/image-carousel.tsx#L104>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6d26cca44757efb9"></a>

## TimelineScrubber.&lt;anonymous@32:13&gt;

[features/knowledge/image-carousel.tsx:32](<../../../../../../features/knowledge/image-carousel.tsx#L32>) · FunctionType · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [TimelineScrubber](<image-carousel.tsx.md#s-c7c6c75007f341fe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| position | number | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f9bc6dc75d8b169e"></a>

## TimelineScrubber.revealObservation

[features/knowledge/image-carousel.tsx:44](<../../../../../../features/knowledge/image-carousel.tsx#L44>) · FunctionExpression · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [TimelineScrubber](<image-carousel.tsx.md#s-c7c6c75007f341fe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- strip?.querySelector — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:46](<../../../../../../features/knowledge/image-carousel.tsx#L46>)
- strip?.querySelector — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:47](<../../../../../../features/knowledge/image-carousel.tsx#L47>)
- marker.getBoundingClientRect — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:51](<../../../../../../features/knowledge/image-carousel.tsx#L51>)
- strip.getBoundingClientRect — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:54](<../../../../../../features/knowledge/image-carousel.tsx#L54>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-17da758792478bd0"></a>

## TimelineScrubber.scrub

[features/knowledge/image-carousel.tsx:62](<../../../../../../features/knowledge/image-carousel.tsx#L62>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Publishes the native range's integer observation index immediately while scrubbing.

Purpose evidence: jsdoc.

Lexical owner: [TimelineScrubber](<image-carousel.tsx.md#s-c7c6c75007f341fe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | ChangeEvent&lt;HTMLInputElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- onSelect — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:63](<../../../../../../features/knowledge/image-carousel.tsx#L63>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-12c5263dbcd547a4"></a>

## TimelineScrubber.selectMarker

[features/knowledge/image-carousel.tsx:66](<../../../../../../features/knowledge/image-carousel.tsx#L66>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Selects the exact observation associated with a dated or undated marker.

Purpose evidence: jsdoc.

Lexical owner: [TimelineScrubber](<image-carousel.tsx.md#s-c7c6c75007f341fe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | MouseEvent&lt;HTMLButtonElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- onSelect — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:67](<../../../../../../features/knowledge/image-carousel.tsx#L67>)
- Number — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:67](<../../../../../../features/knowledge/image-carousel.tsx#L67>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ca516ca742728be1"></a>

## TimelineScrubber.&lt;anonymous@104:25&gt;

[features/knowledge/image-carousel.tsx:104](<../../../../../../features/knowledge/image-carousel.tsx#L104>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [TimelineScrubber](<image-carousel.tsx.md#s-c7c6c75007f341fe>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| slide | any | compiler-inferred | required |
| number | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [observationTime](<carousel-model.ts.md#s-c9991c1c6c6b682c>) — [features/knowledge/image-carousel.tsx:116](<../../../../../../features/knowledge/image-carousel.tsx#L116>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a12402427698faf4"></a>

## ImageCarousel

[features/knowledge/image-carousel.tsx:131](<../../../../../../features/knowledge/image-carousel.tsx#L131>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Presents Collection/Timeline originals with shared navigation, an observation-index scrubber, source metadata and human notes in the existing entity companion.

Purpose evidence: jsdoc.

Exported as: ImageCarousel ([features/knowledge/image-carousel.tsx:1](<../../../../../../features/knowledge/image-carousel.tsx#L1>)).

Lexical owner: [features/knowledge/image-carousel.tsx](<image-carousel.tsx.md#s-3ba9f8ee610dfe88>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   entityId,   vaultPath,   group,   sources,   index,   onIndexChange, } | Readonly&lt;{ entityId: string; vaultPath: string; group: KnowledgeCarousel; sources: readonly WorldViewSource&#91;&#93;; index: KnowledgeIndexState; onIndexChange: (value: KnowledgeIndexState) =&gt; void; }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [carouselSlides](<carousel-model.ts.md#s-47e63d9ba80428e7>) — [features/knowledge/image-carousel.tsx:146](<../../../../../../features/knowledge/image-carousel.tsx#L146>)
- [observationTime](<carousel-model.ts.md#s-c9991c1c6c6b682c>) — [features/knowledge/image-carousel.tsx:350](<../../../../../../features/knowledge/image-carousel.tsx#L350>)
- [observationTime](<carousel-model.ts.md#s-c9991c1c6c6b682c>) — [features/knowledge/image-carousel.tsx:354](<../../../../../../features/knowledge/image-carousel.tsx#L354>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 11.

- useState — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:147](<../../../../../../features/knowledge/image-carousel.tsx#L147>)
- useState — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:148](<../../../../../../features/knowledge/image-carousel.tsx#L148>)
- useState — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:149](<../../../../../../features/knowledge/image-carousel.tsx#L149>)
- useState — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:150](<../../../../../../features/knowledge/image-carousel.tsx#L150>)
- Math.min — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:151](<../../../../../../features/knowledge/image-carousel.tsx#L151>)
- Math.max — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:151](<../../../../../../features/knowledge/image-carousel.tsx#L151>)
- index.sourceNotes?.find — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:155](<../../../../../../features/knowledge/image-carousel.tsx#L155>)
- slides.some — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:164](<../../../../../../features/knowledge/image-carousel.tsx#L164>)
- 3 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-84dc0e56a6b18b66"></a>

## ImageCarousel.&lt;anonymous@144:18&gt;

[features/knowledge/image-carousel.tsx:144](<../../../../../../features/knowledge/image-carousel.tsx#L144>) · FunctionType · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ImageCarousel](<image-carousel.tsx.md#s-a12402427698faf4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | KnowledgeIndexState | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-773ceb52e088cdc2"></a>

## ImageCarousel.&lt;anonymous@155:29&gt;

[features/knowledge/image-carousel.tsx:155](<../../../../../../features/knowledge/image-carousel.tsx#L155>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ImageCarousel](<image-carousel.tsx.md#s-a12402427698faf4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| note | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-46a6c8050387a4c4"></a>

## ImageCarousel.&lt;anonymous@164:17&gt;

[features/knowledge/image-carousel.tsx:164](<../../../../../../features/knowledge/image-carousel.tsx#L164>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ImageCarousel](<image-carousel.tsx.md#s-a12402427698faf4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| slide | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [observationTime](<carousel-model.ts.md#s-c9991c1c6c6b682c>) — [features/knowledge/image-carousel.tsx:164](<../../../../../../features/knowledge/image-carousel.tsx#L164>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-835eb1f9e9d83870"></a>

## ImageCarousel.selectSlide

[features/knowledge/image-carousel.tsx:166](<../../../../../../features/knowledge/image-carousel.tsx#L166>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Selects a bounded slide and preserves note drafts under their source IDs.

Purpose evidence: jsdoc.

Lexical owner: [ImageCarousel](<image-carousel.tsx.md#s-a12402427698faf4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| next | number | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [ImageCarousel.previous](<image-carousel.tsx.md#s-eb2bb3c6d6d7bd88>) — [features/knowledge/image-carousel.tsx:172](<../../../../../../features/knowledge/image-carousel.tsx#L172>)
- [ImageCarousel.next](<image-carousel.tsx.md#s-54c43c24da0de975>) — [features/knowledge/image-carousel.tsx:176](<../../../../../../features/knowledge/image-carousel.tsx#L176>)
- [ImageCarousel.selectThumbnail](<image-carousel.tsx.md#s-ea2e8f1876cb8990>) — [features/knowledge/image-carousel.tsx:180](<../../../../../../features/knowledge/image-carousel.tsx#L180>)
- [ImageCarousel.navigate](<image-carousel.tsx.md#s-14a429c97051ccf0>) — [features/knowledge/image-carousel.tsx:188](<../../../../../../features/knowledge/image-carousel.tsx#L188>)

Unresolved / external call sites: 4.

- setPosition — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:167](<../../../../../../features/knowledge/image-carousel.tsx#L167>)
- Math.max — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:167](<../../../../../../features/knowledge/image-carousel.tsx#L167>)
- Math.min — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:167](<../../../../../../features/knowledge/image-carousel.tsx#L167>)
- setError — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:168](<../../../../../../features/knowledge/image-carousel.tsx#L168>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-eb2bb3c6d6d7bd88"></a>

## ImageCarousel.previous

[features/knowledge/image-carousel.tsx:171](<../../../../../../features/knowledge/image-carousel.tsx#L171>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Selects the preceding image.

Purpose evidence: jsdoc.

Lexical owner: [ImageCarousel](<image-carousel.tsx.md#s-a12402427698faf4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [ImageCarousel.selectSlide](<image-carousel.tsx.md#s-835eb1f9e9d83870>) — [features/knowledge/image-carousel.tsx:172](<../../../../../../features/knowledge/image-carousel.tsx#L172>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-54c43c24da0de975"></a>

## ImageCarousel.next

[features/knowledge/image-carousel.tsx:175](<../../../../../../features/knowledge/image-carousel.tsx#L175>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Selects the following image.

Purpose evidence: jsdoc.

Lexical owner: [ImageCarousel](<image-carousel.tsx.md#s-a12402427698faf4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [ImageCarousel.selectSlide](<image-carousel.tsx.md#s-835eb1f9e9d83870>) — [features/knowledge/image-carousel.tsx:176](<../../../../../../features/knowledge/image-carousel.tsx#L176>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ea2e8f1876cb8990"></a>

## ImageCarousel.selectThumbnail

[features/knowledge/image-carousel.tsx:179](<../../../../../../features/knowledge/image-carousel.tsx#L179>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Selects a thumbnail or observation directly.

Purpose evidence: jsdoc.

Lexical owner: [ImageCarousel](<image-carousel.tsx.md#s-a12402427698faf4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | MouseEvent&lt;HTMLButtonElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [ImageCarousel.selectSlide](<image-carousel.tsx.md#s-835eb1f9e9d83870>) — [features/knowledge/image-carousel.tsx:180](<../../../../../../features/knowledge/image-carousel.tsx#L180>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Number — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:180](<../../../../../../features/knowledge/image-carousel.tsx#L180>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-14a429c97051ccf0"></a>

## ImageCarousel.navigate

[features/knowledge/image-carousel.tsx:183](<../../../../../../features/knowledge/image-carousel.tsx#L183>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Handles arrows only for a focused viewer, preserving editing keys and isolating canvas shortcuts.

Purpose evidence: jsdoc.

Lexical owner: [ImageCarousel](<image-carousel.tsx.md#s-a12402427698faf4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | KeyboardEvent&lt;HTMLElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

- [ImageCarousel.selectSlide](<image-carousel.tsx.md#s-835eb1f9e9d83870>) — [features/knowledge/image-carousel.tsx:188](<../../../../../../features/knowledge/image-carousel.tsx#L188>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- (event.target as Element).closest — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:184](<../../../../../../features/knowledge/image-carousel.tsx#L184>)
- event.preventDefault — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:186](<../../../../../../features/knowledge/image-carousel.tsx#L186>)
- event.stopPropagation — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:187](<../../../../../../features/knowledge/image-carousel.tsx#L187>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c997c42ded29e071"></a>

## ImageCarousel.locate

[features/knowledge/image-carousel.tsx:192](<../../../../../../features/knowledge/image-carousel.tsx#L192>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Reveals the active original through existing assignment authorization.

Purpose evidence: jsdoc.

Lexical owner: [ImageCarousel](<image-carousel.tsx.md#s-a12402427698faf4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: Promise&lt;void&gt; (annotation). Implementation present.

**Calls (statically resolved):**

- [requireWorldViewBridge](<../worldview/chip-session.ts.md#s-724ceb52bd424e76>) — [features/knowledge/image-carousel.tsx:194](<../../../../../../features/knowledge/image-carousel.tsx#L194>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- requireWorldViewBridge().request — declaration-without-runtime-body; [features/knowledge/image-carousel.tsx:194](<../../../../../../features/knowledge/image-carousel.tsx#L194>)
- setError — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:200](<../../../../../../features/knowledge/image-carousel.tsx#L200>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8d1e3e27807cc102"></a>

## ImageCarousel.saveNotes

[features/knowledge/image-carousel.tsx:208](<../../../../../../features/knowledge/image-carousel.tsx#L208>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Saves bounded human notes with optimistic concurrency, updating the parent's revision after success.

Purpose evidence: jsdoc.

Lexical owner: [ImageCarousel](<image-carousel.tsx.md#s-a12402427698faf4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: Promise&lt;void&gt; (annotation). Implementation present.

**Calls (statically resolved):**

- [requireWorldViewBridge](<../worldview/chip-session.ts.md#s-724ceb52bd424e76>) — [features/knowledge/image-carousel.tsx:213](<../../../../../../features/knowledge/image-carousel.tsx#L213>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- setSaving — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:210](<../../../../../../features/knowledge/image-carousel.tsx#L210>)
- setError — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:211](<../../../../../../features/knowledge/image-carousel.tsx#L211>)
- requireWorldViewBridge().request — declaration-without-runtime-body; [features/knowledge/image-carousel.tsx:213](<../../../../../../features/knowledge/image-carousel.tsx#L213>)
- onIndexChange — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:223](<../../../../../../features/knowledge/image-carousel.tsx#L223>)
- setError — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:225](<../../../../../../features/knowledge/image-carousel.tsx#L225>)
- setSaving — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:229](<../../../../../../features/knowledge/image-carousel.tsx#L229>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c5ce114d8be3cf14"></a>

## ImageCarousel.&lt;anonymous@309:23&gt;

[features/knowledge/image-carousel.tsx:309](<../../../../../../features/knowledge/image-carousel.tsx#L309>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ImageCarousel](<image-carousel.tsx.md#s-a12402427698faf4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| slide | any | compiler-inferred | required |
| number | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d2d12f2e274d12bc"></a>

## ImageCarousel.&lt;anonymous@382:25&gt;

[features/knowledge/image-carousel.tsx:382](<../../../../../../features/knowledge/image-carousel.tsx#L382>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [ImageCarousel](<image-carousel.tsx.md#s-a12402427698faf4>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setDrafts — external-or-dynamic-dispatch; [features/knowledge/image-carousel.tsx:383](<../../../../../../features/knowledge/image-carousel.tsx#L383>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
