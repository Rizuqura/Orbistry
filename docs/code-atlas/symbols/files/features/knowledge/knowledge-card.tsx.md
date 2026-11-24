# features/knowledge/knowledge-card.tsx: symbols

[Atlas](<../../../../README.md>) / [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>) / [features/knowledge/knowledge-card.tsx:1](<../../../../../../features/knowledge/knowledge-card.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/knowledge/knowledge-card.tsx](<knowledge-card.tsx.md#s-9336cbbe8a009572>) (Module)
- [KnowledgeCard](<knowledge-card.tsx.md#s-ed4922b5c749bb24>) (FunctionDeclaration)
- [KnowledgeCard.&lt;anonymous@25:11&gt;](<knowledge-card.tsx.md#s-fb1f9e50332810c5>) (FunctionType)
- [KnowledgeCard.focusCard](<knowledge-card.tsx.md#s-8c369e2af5a69ea6>) (FunctionExpression)
- [KnowledgeCard.fitWindow](<knowledge-card.tsx.md#s-78e2442c2bc34e31>) (FunctionExpression)
- [KnowledgeCard.fitWindow.containWindow](<knowledge-card.tsx.md#s-6cdea9755308ec5a>) (FunctionExpression)
- [KnowledgeCard.fitWindow.containWindow.&lt;anonymous@50:19&gt;](<knowledge-card.tsx.md#s-7b59900c9dcdc22e>) (ArrowFunction)
- [KnowledgeCard.fitWindow.&lt;anonymous@63:12&gt;](<knowledge-card.tsx.md#s-d5b7726d81b37723>) (ArrowFunction)
- [KnowledgeCard.startWindowDrag](<knowledge-card.tsx.md#s-bbeb5ab1d97709ed>) (FunctionDeclaration)
- [KnowledgeCard.moveWindow](<knowledge-card.tsx.md#s-89edae0b6d1b844e>) (FunctionDeclaration)
- [KnowledgeCard.stopWindowDrag](<knowledge-card.tsx.md#s-d87eb55faa7f2ddf>) (FunctionDeclaration)
- [KnowledgeCard.moveWindowByKey](<knowledge-card.tsx.md#s-3c51166d4ce4d4bf>) (FunctionDeclaration)
- [KnowledgeCard.moveWindowByKey.&lt;anonymous@131:17&gt;](<knowledge-card.tsx.md#s-4cd50950fc21b870>) (ArrowFunction)
- [KnowledgeCard.closeCard](<knowledge-card.tsx.md#s-3f4d2b1f45028fdc>) (FunctionDeclaration)
- [KnowledgeCard.&lt;anonymous@179:20&gt;](<knowledge-card.tsx.md#s-6e8b0acc36a37596>) (ArrowFunction)

<a id="s-9336cbbe8a009572"></a>

## features/knowledge/knowledge-card.tsx

[features/knowledge/knowledge-card.tsx:1](<../../../../../../features/knowledge/knowledge-card.tsx#L1>) · Module · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-ed4922b5c749bb24"></a>

## KnowledgeCard

[features/knowledge/knowledge-card.tsx:16](<../../../../../../features/knowledge/knowledge-card.tsx#L16>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Hosts explicit index editing and source previews in a movable, entity-ID scoped floating window with an unsaved-draft close guard.

Purpose evidence: jsdoc.

Exported as: KnowledgeCard ([features/knowledge/knowledge-card.tsx:1](<../../../../../../features/knowledge/knowledge-card.tsx#L1>)).

Lexical owner: [features/knowledge/knowledge-card.tsx](<knowledge-card.tsx.md#s-9336cbbe8a009572>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   chip,   disabled,   vaultPath,   onBack, } | Readonly&lt;{ chip: WorldViewChip; disabled: boolean; vaultPath: string &#124; null; onBack: () =&gt; void; }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [useConfirmation](<../dialogs/use-confirmation.tsx.md#s-68cb241f4bfc872f>) — [features/knowledge/knowledge-card.tsx:33](<../../../../../../features/knowledge/knowledge-card.tsx#L33>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- useState — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:27](<../../../../../../features/knowledge/knowledge-card.tsx#L27>)
- useState — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:28](<../../../../../../features/knowledge/knowledge-card.tsx#L28>)
- useRef — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:29](<../../../../../../features/knowledge/knowledge-card.tsx#L29>)
- useRef — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:30](<../../../../../../features/knowledge/knowledge-card.tsx#L30>)
- useState — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:31](<../../../../../../features/knowledge/knowledge-card.tsx#L31>)
- useRef — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:32](<../../../../../../features/knowledge/knowledge-card.tsx#L32>)
- useEffect — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:36](<../../../../../../features/knowledge/knowledge-card.tsx#L36>)
- useLayoutEffect — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:41](<../../../../../../features/knowledge/knowledge-card.tsx#L41>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-fb1f9e50332810c5"></a>

## KnowledgeCard.&lt;anonymous@25:11&gt;

[features/knowledge/knowledge-card.tsx:25](<../../../../../../features/knowledge/knowledge-card.tsx#L25>) · FunctionType · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [KnowledgeCard](<knowledge-card.tsx.md#s-ed4922b5c749bb24>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8c369e2af5a69ea6"></a>

## KnowledgeCard.focusCard

[features/knowledge/knowledge-card.tsx:36](<../../../../../../features/knowledge/knowledge-card.tsx#L36>) · FunctionExpression · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [KnowledgeCard](<knowledge-card.tsx.md#s-ed4922b5c749bb24>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- backRef.current?.focus — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:37](<../../../../../../features/knowledge/knowledge-card.tsx#L37>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-78e2442c2bc34e31"></a>

## KnowledgeCard.fitWindow

[features/knowledge/knowledge-card.tsx:41](<../../../../../../features/knowledge/knowledge-card.tsx#L41>) · FunctionExpression · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [KnowledgeCard](<knowledge-card.tsx.md#s-ed4922b5c749bb24>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: () =&gt; any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- setPosition — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:48](<../../../../../../features/knowledge/knowledge-card.tsx#L48>)
- ResizeObserver — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:49](<../../../../../../features/knowledge/knowledge-card.tsx#L49>)
- observer.observe — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:61](<../../../../../../features/knowledge/knowledge-card.tsx#L61>)
- observer.observe — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:62](<../../../../../../features/knowledge/knowledge-card.tsx#L62>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6cdea9755308ec5a"></a>

## KnowledgeCard.fitWindow.containWindow

[features/knowledge/knowledge-card.tsx:49](<../../../../../../features/knowledge/knowledge-card.tsx#L49>) · FunctionExpression · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [KnowledgeCard.fitWindow](<knowledge-card.tsx.md#s-78e2442c2bc34e31>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setPosition — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:50](<../../../../../../features/knowledge/knowledge-card.tsx#L50>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7b59900c9dcdc22e"></a>

## KnowledgeCard.fitWindow.containWindow.&lt;anonymous@50:19&gt;

[features/knowledge/knowledge-card.tsx:50](<../../../../../../features/knowledge/knowledge-card.tsx#L50>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [KnowledgeCard.fitWindow.containWindow](<knowledge-card.tsx.md#s-6cdea9755308ec5a>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| previous | any | compiler-inferred | required |

Returns: { x: any; y: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- Math.max — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:51](<../../../../../../features/knowledge/knowledge-card.tsx#L51>)
- Math.min — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:53](<../../../../../../features/knowledge/knowledge-card.tsx#L53>)
- Math.max — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:55](<../../../../../../features/knowledge/knowledge-card.tsx#L55>)
- Math.min — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:57](<../../../../../../features/knowledge/knowledge-card.tsx#L57>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d5b7726d81b37723"></a>

## KnowledgeCard.fitWindow.&lt;anonymous@63:12&gt;

[features/knowledge/knowledge-card.tsx:63](<../../../../../../features/knowledge/knowledge-card.tsx#L63>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [KnowledgeCard.fitWindow](<knowledge-card.tsx.md#s-78e2442c2bc34e31>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- observer.disconnect — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:63](<../../../../../../features/knowledge/knowledge-card.tsx#L63>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-bbeb5ab1d97709ed"></a>

## KnowledgeCard.startWindowDrag

[features/knowledge/knowledge-card.tsx:67](<../../../../../../features/knowledge/knowledge-card.tsx#L67>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Starts a title-bar drag using viewport pixels while leaving close-button activation to the button.

Purpose evidence: jsdoc.

Lexical owner: [KnowledgeCard](<knowledge-card.tsx.md#s-ed4922b5c749bb24>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | PointerEvent&lt;HTMLElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- (event.target as Element).closest — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:71](<../../../../../../features/knowledge/knowledge-card.tsx#L71>)
- event.preventDefault — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:74](<../../../../../../features/knowledge/knowledge-card.tsx#L74>)
- event.currentTarget.focus — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:75](<../../../../../../features/knowledge/knowledge-card.tsx#L75>)
- windowRef.current!.getBoundingClientRect — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:76](<../../../../../../features/knowledge/knowledge-card.tsx#L76>)
- event.currentTarget.setPointerCapture — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:82](<../../../../../../features/knowledge/knowledge-card.tsx#L82>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-89edae0b6d1b844e"></a>

## KnowledgeCard.moveWindow

[features/knowledge/knowledge-card.tsx:86](<../../../../../../features/knowledge/knowledge-card.tsx#L86>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Moves the floating window within its parent bounds using the captured pointer offset.

Purpose evidence: jsdoc.

Lexical owner: [KnowledgeCard](<knowledge-card.tsx.md#s-ed4922b5c749bb24>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | PointerEvent&lt;HTMLElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- parent.getBoundingClientRect — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:90](<../../../../../../features/knowledge/knowledge-card.tsx#L90>)
- setPosition — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:91](<../../../../../../features/knowledge/knowledge-card.tsx#L91>)
- Math.max — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:92](<../../../../../../features/knowledge/knowledge-card.tsx#L92>)
- Math.min — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:94](<../../../../../../features/knowledge/knowledge-card.tsx#L94>)
- Math.max — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:99](<../../../../../../features/knowledge/knowledge-card.tsx#L99>)
- Math.min — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:101](<../../../../../../features/knowledge/knowledge-card.tsx#L101>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d87eb55faa7f2ddf"></a>

## KnowledgeCard.stopWindowDrag

[features/knowledge/knowledge-card.tsx:110](<../../../../../../features/knowledge/knowledge-card.tsx#L110>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Releases title-bar capture at the end of a move or pointer cancellation.

Purpose evidence: jsdoc.

Lexical owner: [KnowledgeCard](<knowledge-card.tsx.md#s-ed4922b5c749bb24>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | PointerEvent&lt;HTMLElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- event.currentTarget.hasPointerCapture — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:112](<../../../../../../features/knowledge/knowledge-card.tsx#L112>)
- event.currentTarget.releasePointerCapture — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:113](<../../../../../../features/knowledge/knowledge-card.tsx#L113>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3c51166d4ce4d4bf"></a>

## KnowledgeCard.moveWindowByKey

[features/knowledge/knowledge-card.tsx:117](<../../../../../../features/knowledge/knowledge-card.tsx#L117>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Supports arrow-key window movement and Home centering from the focused title bar.

Purpose evidence: jsdoc.

Lexical owner: [KnowledgeCard](<knowledge-card.tsx.md#s-ed4922b5c749bb24>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| event | KeyboardEvent&lt;HTMLElement&gt; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- event.preventDefault — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:126](<../../../../../../features/knowledge/knowledge-card.tsx#L126>)
- Math.max — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:129](<../../../../../../features/knowledge/knowledge-card.tsx#L129>)
- Math.max — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:130](<../../../../../../features/knowledge/knowledge-card.tsx#L130>)
- setPosition — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:131](<../../../../../../features/knowledge/knowledge-card.tsx#L131>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4cd50950fc21b870"></a>

## KnowledgeCard.moveWindowByKey.&lt;anonymous@131:17&gt;

[features/knowledge/knowledge-card.tsx:131](<../../../../../../features/knowledge/knowledge-card.tsx#L131>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [KnowledgeCard.moveWindowByKey](<knowledge-card.tsx.md#s-3c51166d4ce4d4bf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| previous | any | compiler-inferred | required |

Returns: { x: any; y: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- Math.max — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:135](<../../../../../../features/knowledge/knowledge-card.tsx#L135>)
- Math.min — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:135](<../../../../../../features/knowledge/knowledge-card.tsx#L135>)
- Math.max — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:136](<../../../../../../features/knowledge/knowledge-card.tsx#L136>)
- Math.min — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:136](<../../../../../../features/knowledge/knowledge-card.tsx#L136>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3f4d2b1f45028fdc"></a>

## KnowledgeCard.closeCard

[features/knowledge/knowledge-card.tsx:142](<../../../../../../features/knowledge/knowledge-card.tsx#L142>) · FunctionDeclaration · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

Confirms discarding unsaved declaration edits before closing the floating workspace.

Purpose evidence: jsdoc.

Lexical owner: [KnowledgeCard](<knowledge-card.tsx.md#s-ed4922b5c749bb24>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: Promise&lt;void&gt; (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [KnowledgeCard.&lt;anonymous@179:20&gt;](<knowledge-card.tsx.md#s-6e8b0acc36a37596>) — [features/knowledge/knowledge-card.tsx:179](<../../../../../../features/knowledge/knowledge-card.tsx#L179>)

Unresolved / external call sites: 2.

- confirm — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:145](<../../../../../../features/knowledge/knowledge-card.tsx#L145>)
- onBack — external-or-dynamic-dispatch; [features/knowledge/knowledge-card.tsx:150](<../../../../../../features/knowledge/knowledge-card.tsx#L150>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-6e8b0acc36a37596"></a>

## KnowledgeCard.&lt;anonymous@179:20&gt;

[features/knowledge/knowledge-card.tsx:179](<../../../../../../features/knowledge/knowledge-card.tsx#L179>) · ArrowFunction · production · [Knowledge Cards and readers](<../../../../modules/portal-knowledge.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [KnowledgeCard](<knowledge-card.tsx.md#s-ed4922b5c749bb24>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [KnowledgeCard.closeCard](<knowledge-card.tsx.md#s-3f4d2b1f45028fdc>) — [features/knowledge/knowledge-card.tsx:179](<../../../../../../features/knowledge/knowledge-card.tsx#L179>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
