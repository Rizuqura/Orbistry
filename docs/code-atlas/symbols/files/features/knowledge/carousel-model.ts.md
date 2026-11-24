# features/knowledge/carousel-model.ts: symbols

[Atlas](<../../../../README.md>) / [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>) / [features/knowledge/carousel-model.ts:1](<../../../../../../features/knowledge/carousel-model.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/knowledge/carousel-model.ts](<carousel-model.ts.md#s-669db2106669d06b>) (Module)
- [CarouselSlide](<carousel-model.ts.md#s-537f79990cca4bed>) (TypeAliasDeclaration)
- [observationTime](<carousel-model.ts.md#s-c9991c1c6c6b682c>) (FunctionDeclaration)
- [carouselSlides](<carousel-model.ts.md#s-47e63d9ba80428e7>) (FunctionDeclaration)
- [carouselSlides.&lt;anonymous@33:38&gt;](<carousel-model.ts.md#s-6e1e0488ff714152>) (ArrowFunction)
- [carouselSlides.&lt;anonymous@33:38&gt;.&lt;anonymous@34:33&gt;](<carousel-model.ts.md#s-61f043a201663191>) (ArrowFunction)
- [carouselSlides.&lt;anonymous@33:38&gt;.&lt;anonymous@36:26&gt;](<carousel-model.ts.md#s-66caf4a86fecc96b>) (ArrowFunction)
- [carouselSlides.&lt;anonymous@41:18&gt;](<carousel-model.ts.md#s-358a3537d8e4ca30>) (ArrowFunction)
- [carouselSlides.&lt;anonymous@44:7&gt;](<carousel-model.ts.md#s-169bdb0cbc25c903>) (ArrowFunction)

<a id="s-669db2106669d06b"></a>

## features/knowledge/carousel-model.ts

[features/knowledge/carousel-model.ts:1](<../../../../../../features/knowledge/carousel-model.ts#L1>) · Module · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/knowledge/image-carousel.test.cjs:9](<../../../../../../features/knowledge/image-carousel.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-537f79990cca4bed"></a>

## CarouselSlide

[features/knowledge/carousel-model.ts:6](<../../../../../../features/knowledge/carousel-model.ts#L6>) · TypeAliasDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: CarouselSlide ([features/knowledge/carousel-model.ts:1](<../../../../../../features/knowledge/carousel-model.ts#L1>)).

Lexical owner: [features/knowledge/carousel-model.ts](<carousel-model.ts.md#s-669db2106669d06b>).

Contract evidence: typescript-declaration. [Full declaration index](<../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/knowledge/image-carousel.test.cjs:9](<../../../../../../features/knowledge/image-carousel.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-c9991c1c6c6b682c"></a>

## observationTime

[features/knowledge/carousel-model.ts:10](<../../../../../../features/knowledge/carousel-model.ts#L10>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Validates explicitly supplied ISO observation dates, including calendar-day validation. Never uses filenames or filesystem dates.

Purpose evidence: jsdoc.

Exported as: observationTime ([features/knowledge/carousel-model.ts:1](<../../../../../../features/knowledge/carousel-model.ts#L1>)).

Lexical owner: [features/knowledge/carousel-model.ts](<carousel-model.ts.md#s-669db2106669d06b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | string | annotation | optional |

Returns: number &#124; null (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [carouselSlides.&lt;anonymous@41:18&gt;](<carousel-model.ts.md#s-358a3537d8e4ca30>) — [features/knowledge/carousel-model.ts:41](<../../../../../../features/knowledge/carousel-model.ts#L41>)
- [carouselSlides.&lt;anonymous@44:7&gt;](<carousel-model.ts.md#s-169bdb0cbc25c903>) — [features/knowledge/carousel-model.ts:44](<../../../../../../features/knowledge/carousel-model.ts#L44>)
- [carouselSlides.&lt;anonymous@44:7&gt;](<carousel-model.ts.md#s-169bdb0cbc25c903>) — [features/knowledge/carousel-model.ts:44](<../../../../../../features/knowledge/carousel-model.ts#L44>)
- [&lt;anonymous@36:70&gt;](<image-carousel.test.cjs.md#s-eac974af3027a123>) — [features/knowledge/image-carousel.test.cjs:93](<../../../../../../features/knowledge/image-carousel.test.cjs#L93>)
- [TimelineScrubber](<image-carousel.tsx.md#s-c7c6c75007f341fe>) — [features/knowledge/image-carousel.tsx:38](<../../../../../../features/knowledge/image-carousel.tsx#L38>)
- [TimelineScrubber.&lt;anonymous@104:25&gt;](<image-carousel.tsx.md#s-ca516ca742728be1>) — [features/knowledge/image-carousel.tsx:116](<../../../../../../features/knowledge/image-carousel.tsx#L116>)
- [ImageCarousel.&lt;anonymous@164:17&gt;](<image-carousel.tsx.md#s-46a6c8050387a4c4>) — [features/knowledge/image-carousel.tsx:164](<../../../../../../features/knowledge/image-carousel.tsx#L164>)
- [ImageCarousel](<image-carousel.tsx.md#s-a12402427698faf4>) — [features/knowledge/image-carousel.tsx:350](<../../../../../../features/knowledge/image-carousel.tsx#L350>)
- [ImageCarousel](<image-carousel.tsx.md#s-a12402427698faf4>) — [features/knowledge/image-carousel.tsx:354](<../../../../../../features/knowledge/image-carousel.tsx#L354>)

Unresolved / external call sites: 10.

- /^\\d{4}-\\d{2}-\\d{2}(?:T\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?(?:Z&#124;&#91;+-&#93;\\d{2}:\\d{2}))?$/.test — external-or-dynamic-dispatch; [features/knowledge/carousel-model.ts:13](<../../../../../../features/knowledge/carousel-model.ts#L13>)
- Date — external-or-dynamic-dispatch; [features/knowledge/carousel-model.ts:18](<../../../../../../features/knowledge/carousel-model.ts#L18>)
- value.slice — external-or-dynamic-dispatch; [features/knowledge/carousel-model.ts:18](<../../../../../../features/knowledge/carousel-model.ts#L18>)
- Number.isFinite — external-or-dynamic-dispatch; [features/knowledge/carousel-model.ts:20](<../../../../../../features/knowledge/carousel-model.ts#L20>)
- day.getTime — external-or-dynamic-dispatch; [features/knowledge/carousel-model.ts:20](<../../../../../../features/knowledge/carousel-model.ts#L20>)
- day.toISOString().slice — external-or-dynamic-dispatch; [features/knowledge/carousel-model.ts:21](<../../../../../../features/knowledge/carousel-model.ts#L21>)
- day.toISOString — external-or-dynamic-dispatch; [features/knowledge/carousel-model.ts:21](<../../../../../../features/knowledge/carousel-model.ts#L21>)
- value.slice — external-or-dynamic-dispatch; [features/knowledge/carousel-model.ts:21](<../../../../../../features/knowledge/carousel-model.ts#L21>)
- 2 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [features/knowledge/image-carousel.test.cjs:93](<../../../../../../features/knowledge/image-carousel.test.cjs#L93>) — static-call-site; coverage not established.
- [features/knowledge/image-carousel.test.cjs:9](<../../../../../../features/knowledge/image-carousel.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-47e63d9ba80428e7"></a>

## carouselSlides

[features/knowledge/carousel-model.ts:29](<../../../../../../features/knowledge/carousel-model.ts#L29>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Resolves viewer metadata. Timeline sorts only fully dated sets, otherwise retaining declared order. Pure.

Purpose evidence: jsdoc.

Exported as: carouselSlides ([features/knowledge/carousel-model.ts:1](<../../../../../../features/knowledge/carousel-model.ts#L1>)).

Lexical owner: [features/knowledge/carousel-model.ts](<carousel-model.ts.md#s-669db2106669d06b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| group | KnowledgeCarousel | annotation | required |
| sources | readonly WorldViewSource&#91;&#93; | annotation | required |

Returns: CarouselSlide&#91;&#93; (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@36:70&gt;](<image-carousel.test.cjs.md#s-eac974af3027a123>) — [features/knowledge/image-carousel.test.cjs:88](<../../../../../../features/knowledge/image-carousel.test.cjs#L88>)
- [&lt;anonymous@36:70&gt;](<image-carousel.test.cjs.md#s-eac974af3027a123>) — [features/knowledge/image-carousel.test.cjs:115](<../../../../../../features/knowledge/image-carousel.test.cjs#L115>)
- [&lt;anonymous@36:70&gt;](<image-carousel.test.cjs.md#s-eac974af3027a123>) — [features/knowledge/image-carousel.test.cjs:119](<../../../../../../features/knowledge/image-carousel.test.cjs#L119>)
- [ImageCarousel](<image-carousel.tsx.md#s-a12402427698faf4>) — [features/knowledge/image-carousel.tsx:146](<../../../../../../features/knowledge/image-carousel.tsx#L146>)

Unresolved / external call sites: 3.

- group.sourceIds.map — external-or-dynamic-dispatch; [features/knowledge/carousel-model.ts:33](<../../../../../../features/knowledge/carousel-model.ts#L33>)
- slides.every — external-or-dynamic-dispatch; [features/knowledge/carousel-model.ts:41](<../../../../../../features/knowledge/carousel-model.ts#L41>)
- slides.sort — external-or-dynamic-dispatch; [features/knowledge/carousel-model.ts:43](<../../../../../../features/knowledge/carousel-model.ts#L43>)

**Related tests / acceptance harnesses:**

- [features/knowledge/image-carousel.test.cjs:88](<../../../../../../features/knowledge/image-carousel.test.cjs#L88>) — static-call-site; coverage not established.
- [features/knowledge/image-carousel.test.cjs:115](<../../../../../../features/knowledge/image-carousel.test.cjs#L115>) — static-call-site; coverage not established.
- [features/knowledge/image-carousel.test.cjs:119](<../../../../../../features/knowledge/image-carousel.test.cjs#L119>) — static-call-site; coverage not established.
- [features/knowledge/image-carousel.test.cjs:9](<../../../../../../features/knowledge/image-carousel.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-6e1e0488ff714152"></a>

## carouselSlides.&lt;anonymous@33:38&gt;

[features/knowledge/carousel-model.ts:33](<../../../../../../features/knowledge/carousel-model.ts#L33>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [carouselSlides](<carousel-model.ts.md#s-47e63d9ba80428e7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| sourceId | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- group.observations?.find — external-or-dynamic-dispatch; [features/knowledge/carousel-model.ts:34](<../../../../../../features/knowledge/carousel-model.ts#L34>)
- sources.find — external-or-dynamic-dispatch; [features/knowledge/carousel-model.ts:36](<../../../../../../features/knowledge/carousel-model.ts#L36>)

**Related tests / acceptance harnesses:**

- [features/knowledge/image-carousel.test.cjs:9](<../../../../../../features/knowledge/image-carousel.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-61f043a201663191"></a>

## carouselSlides.&lt;anonymous@33:38&gt;.&lt;anonymous@34:33&gt;

[features/knowledge/carousel-model.ts:34](<../../../../../../features/knowledge/carousel-model.ts#L34>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [carouselSlides.&lt;anonymous@33:38&gt;](<carousel-model.ts.md#s-6e1e0488ff714152>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| item | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/knowledge/image-carousel.test.cjs:9](<../../../../../../features/knowledge/image-carousel.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-66caf4a86fecc96b"></a>

## carouselSlides.&lt;anonymous@33:38&gt;.&lt;anonymous@36:26&gt;

[features/knowledge/carousel-model.ts:36](<../../../../../../features/knowledge/carousel-model.ts#L36>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [carouselSlides.&lt;anonymous@33:38&gt;](<carousel-model.ts.md#s-6e1e0488ff714152>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/knowledge/image-carousel.test.cjs:9](<../../../../../../features/knowledge/image-carousel.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-358a3537d8e4ca30"></a>

## carouselSlides.&lt;anonymous@41:18&gt;

[features/knowledge/carousel-model.ts:41](<../../../../../../features/knowledge/carousel-model.ts#L41>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [carouselSlides](<carousel-model.ts.md#s-47e63d9ba80428e7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| slide | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [observationTime](<carousel-model.ts.md#s-c9991c1c6c6b682c>) — [features/knowledge/carousel-model.ts:41](<../../../../../../features/knowledge/carousel-model.ts#L41>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/knowledge/image-carousel.test.cjs:9](<../../../../../../features/knowledge/image-carousel.test.cjs#L9>) — file-import-only; coverage not established.

<a id="s-169bdb0cbc25c903"></a>

## carouselSlides.&lt;anonymous@44:7&gt;

[features/knowledge/carousel-model.ts:44](<../../../../../../features/knowledge/carousel-model.ts#L44>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [carouselSlides](<carousel-model.ts.md#s-47e63d9ba80428e7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| a | any | compiler-inferred | required |
| b | any | compiler-inferred | required |

Returns: number (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [observationTime](<carousel-model.ts.md#s-c9991c1c6c6b682c>) — [features/knowledge/carousel-model.ts:44](<../../../../../../features/knowledge/carousel-model.ts#L44>)
- [observationTime](<carousel-model.ts.md#s-c9991c1c6c6b682c>) — [features/knowledge/carousel-model.ts:44](<../../../../../../features/knowledge/carousel-model.ts#L44>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [features/knowledge/image-carousel.test.cjs:9](<../../../../../../features/knowledge/image-carousel.test.cjs#L9>) — file-import-only; coverage not established.
