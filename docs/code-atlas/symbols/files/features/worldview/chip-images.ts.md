# features/worldview/chip-images.ts: symbols

[Atlas](<../../../../README.md>) / [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>) / [features/worldview/chip-images.ts:1](<../../../../../../features/worldview/chip-images.ts#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/worldview/chip-images.ts](<chip-images.ts.md#s-ec61264a0f121dfa>) (Module)
- [createChipImageCache](<chip-images.ts.md#s-c4c7df2feccebf39>) (FunctionDeclaration)
- [createChipImageCache.&lt;anonymous@8:13&gt;](<chip-images.ts.md#s-373a08bf2ca779a6>) (FunctionType)
- [createChipImageCache.&lt;anonymous@9:12&gt;](<chip-images.ts.md#s-f958ba7d88506096>) (FunctionType)
- [createChipImageCache.sync](<chip-images.ts.md#s-67b781dfec81f6a1>) (FunctionDeclaration)
- [createChipImageCache.sync.iconLoaded](<chip-images.ts.md#s-2f5f648c8311aee5>) (FunctionExpression)
- [createChipImageCache.sync.iconFailed](<chip-images.ts.md#s-7d00329e552dd998>) (FunctionExpression)
- [createChipImageCache.dispose](<chip-images.ts.md#s-b76832bfcd5332b5>) (FunctionDeclaration)

<a id="s-ec61264a0f121dfa"></a>

## features/worldview/chip-images.ts

[features/worldview/chip-images.ts:1](<../../../../../../features/worldview/chip-images.ts#L1>) · Module · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c4c7df2feccebf39"></a>

## createChipImageCache

[features/worldview/chip-images.ts:7](<../../../../../../features/worldview/chip-images.ts#L7>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Owns decoded session icons for one canvas; sync/dispose release unused image handlers. Calls onChange after decoding and onError on a failed image; never performs remote requests.

Purpose evidence: jsdoc.

Exported as: createChipImageCache ([features/worldview/chip-images.ts:1](<../../../../../../features/worldview/chip-images.ts#L1>)).

Lexical owner: [features/worldview/chip-images.ts](<chip-images.ts.md#s-ec61264a0f121dfa>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| onChange | () =&gt; void | annotation | required |
| onError | () =&gt; void | annotation | required |

Returns: { images: ReadonlyMap&lt;string, CanvasImageSource&gt;; sync: (chips: readonly WorldViewChip&#91;&#93;) =&gt; void; dispose: () =&gt; void; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [WorldView.connectWorldCanvas](<worldview.tsx.md#s-64662d49c3ebf665>) — [features/worldview/worldview.tsx:272](<../../../../../../features/worldview/worldview.tsx#L272>)

Unresolved / external call sites: 2.

- Map — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:11](<../../../../../../features/worldview/chip-images.ts#L11>)
- Map — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:12](<../../../../../../features/worldview/chip-images.ts#L12>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-373a08bf2ca779a6"></a>

## createChipImageCache.&lt;anonymous@8:13&gt;

[features/worldview/chip-images.ts:8](<../../../../../../features/worldview/chip-images.ts#L8>) · FunctionType · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createChipImageCache](<chip-images.ts.md#s-c4c7df2feccebf39>).

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

<a id="s-f958ba7d88506096"></a>

## createChipImageCache.&lt;anonymous@9:12&gt;

[features/worldview/chip-images.ts:9](<../../../../../../features/worldview/chip-images.ts#L9>) · FunctionType · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createChipImageCache](<chip-images.ts.md#s-c4c7df2feccebf39>).

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

<a id="s-67b781dfec81f6a1"></a>

## createChipImageCache.sync

[features/worldview/chip-images.ts:16](<../../../../../../features/worldview/chip-images.ts#L16>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Loads newly referenced data icons and removes images no longer used by any chip.

Purpose evidence: jsdoc.

Lexical owner: [createChipImageCache](<chip-images.ts.md#s-c4c7df2feccebf39>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chips | readonly WorldViewChip&#91;&#93; | annotation | required |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 11.

- Set — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:17](<../../../../../../features/worldview/chip-images.ts#L17>)
- sources.add — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:18](<../../../../../../features/worldview/chip-images.ts#L18>)
- images.keys — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:19](<../../../../../../features/worldview/chip-images.ts#L19>)
- sources.has — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:20](<../../../../../../features/worldview/chip-images.ts#L20>)
- images.delete — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:20](<../../../../../../features/worldview/chip-images.ts#L20>)
- sources.has — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:22](<../../../../../../features/worldview/chip-images.ts#L22>)
- pending.delete — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:25](<../../../../../../features/worldview/chip-images.ts#L25>)
- images.has — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:29](<../../../../../../features/worldview/chip-images.ts#L29>)
- 3 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2f5f648c8311aee5"></a>

## createChipImageCache.sync.iconLoaded

[features/worldview/chip-images.ts:33](<../../../../../../features/worldview/chip-images.ts#L33>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createChipImageCache.sync](<chip-images.ts.md#s-67b781dfec81f6a1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- pending.get — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:34](<../../../../../../features/worldview/chip-images.ts#L34>)
- pending.delete — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:35](<../../../../../../features/worldview/chip-images.ts#L35>)
- images.set — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:36](<../../../../../../features/worldview/chip-images.ts#L36>)
- onChange — declaration-without-runtime-body; [features/worldview/chip-images.ts:37](<../../../../../../features/worldview/chip-images.ts#L37>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7d00329e552dd998"></a>

## createChipImageCache.sync.iconFailed

[features/worldview/chip-images.ts:40](<../../../../../../features/worldview/chip-images.ts#L40>) · FunctionExpression · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [createChipImageCache.sync](<chip-images.ts.md#s-67b781dfec81f6a1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- pending.get — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:41](<../../../../../../features/worldview/chip-images.ts#L41>)
- pending.delete — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:42](<../../../../../../features/worldview/chip-images.ts#L42>)
- onError — declaration-without-runtime-body; [features/worldview/chip-images.ts:43](<../../../../../../features/worldview/chip-images.ts#L43>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-b76832bfcd5332b5"></a>

## createChipImageCache.dispose

[features/worldview/chip-images.ts:50](<../../../../../../features/worldview/chip-images.ts#L50>) · FunctionDeclaration · production · [WorldView and Knowledge Cards (Portal)](<../../../../modules/portal-worldview.md>)

Releases all pending callbacks so an unmounted WorldView cannot schedule new paints.

Purpose evidence: jsdoc.

Lexical owner: [createChipImageCache](<chip-images.ts.md#s-c4c7df2feccebf39>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (annotation). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- pending.values — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:52](<../../../../../../features/worldview/chip-images.ts#L52>)
- pending.clear — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:56](<../../../../../../features/worldview/chip-images.ts#L56>)
- images.clear — external-or-dynamic-dispatch; [features/worldview/chip-images.ts:57](<../../../../../../features/worldview/chip-images.ts#L57>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
