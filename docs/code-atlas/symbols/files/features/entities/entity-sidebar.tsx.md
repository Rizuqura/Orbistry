# features/entities/entity-sidebar.tsx: symbols

[Atlas](<../../../../README.md>) / [Entity UI](<../../../../modules/portal-entities.md>) / [features/entities/entity-sidebar.tsx:1](<../../../../../../features/entities/entity-sidebar.tsx#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [features/entities/entity-sidebar.tsx](<entity-sidebar.tsx.md#s-fc42d2dac04764f9>) (Module)
- [EntitySidebar](<entity-sidebar.tsx.md#s-a1a09216cf8740cb>) (FunctionDeclaration)
- [EntitySidebar.&lt;anonymous@16:13&gt;](<entity-sidebar.tsx.md#s-0caa72fcf191bf28>) (FunctionType)
- [EntitySidebar.&lt;anonymous@33:20&gt;](<entity-sidebar.tsx.md#s-af3281deb610758a>) (ArrowFunction)
- [EntitySidebar.&lt;anonymous@44:20&gt;](<entity-sidebar.tsx.md#s-5efb4d158ba85fa5>) (ArrowFunction)
- [EntitySidebar.&lt;anonymous@44:20&gt;.&lt;anonymous@50:22&gt;](<entity-sidebar.tsx.md#s-4f3b01f1852153d2>) (ArrowFunction)

<a id="s-fc42d2dac04764f9"></a>

## features/entities/entity-sidebar.tsx

[features/entities/entity-sidebar.tsx:1](<../../../../../../features/entities/entity-sidebar.tsx#L1>) · Module · production · [Entity UI](<../../../../modules/portal-entities.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a1a09216cf8740cb"></a>

## EntitySidebar

[features/entities/entity-sidebar.tsx:7](<../../../../../../features/entities/entity-sidebar.tsx#L7>) · FunctionDeclaration · production · [Entity UI](<../../../../modules/portal-entities.md>)

Lists current WorldView entities without reading sources; selection delegates to the existing camera controls.

Purpose evidence: jsdoc.

Exported as: EntitySidebar ([features/entities/entity-sidebar.tsx:1](<../../../../../../features/entities/entity-sidebar.tsx#L1>)).

Lexical owner: [features/entities/entity-sidebar.tsx](<entity-sidebar.tsx.md#s-fc42d2dac04764f9>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| {   chips,   selectedId,   disabled,   onSelect, } | Readonly&lt;{ chips: readonly WorldViewChip&#91;&#93;; selectedId?: string; disabled: boolean; onSelect: (id: string) =&gt; void; }&gt; | annotation | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- useState — external-or-dynamic-dispatch; [features/entities/entity-sidebar.tsx:18](<../../../../../../features/entities/entity-sidebar.tsx#L18>)
- chips.map — external-or-dynamic-dispatch; [features/entities/entity-sidebar.tsx:44](<../../../../../../features/entities/entity-sidebar.tsx#L44>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0caa72fcf191bf28"></a>

## EntitySidebar.&lt;anonymous@16:13&gt;

[features/entities/entity-sidebar.tsx:16](<../../../../../../features/entities/entity-sidebar.tsx#L16>) · FunctionType · production · [Entity UI](<../../../../modules/portal-entities.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EntitySidebar](<entity-sidebar.tsx.md#s-a1a09216cf8740cb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| id | string | annotation | required |

Returns: void (annotation). Declaration only; no runtime body indexed.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-af3281deb610758a"></a>

## EntitySidebar.&lt;anonymous@33:20&gt;

[features/entities/entity-sidebar.tsx:33](<../../../../../../features/entities/entity-sidebar.tsx#L33>) · ArrowFunction · production · [Entity UI](<../../../../modules/portal-entities.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EntitySidebar](<entity-sidebar.tsx.md#s-a1a09216cf8740cb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- setMinimized — external-or-dynamic-dispatch; [features/entities/entity-sidebar.tsx:33](<../../../../../../features/entities/entity-sidebar.tsx#L33>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5efb4d158ba85fa5"></a>

## EntitySidebar.&lt;anonymous@44:20&gt;

[features/entities/entity-sidebar.tsx:44](<../../../../../../features/entities/entity-sidebar.tsx#L44>) · ArrowFunction · production · [Entity UI](<../../../../modules/portal-entities.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EntitySidebar](<entity-sidebar.tsx.md#s-a1a09216cf8740cb>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| chip | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- chip.name.slice — external-or-dynamic-dispatch; [features/entities/entity-sidebar.tsx:60](<../../../../../../features/entities/entity-sidebar.tsx#L60>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4f3b01f1852153d2"></a>

## EntitySidebar.&lt;anonymous@44:20&gt;.&lt;anonymous@50:22&gt;

[features/entities/entity-sidebar.tsx:50](<../../../../../../features/entities/entity-sidebar.tsx#L50>) · ArrowFunction · production · [Entity UI](<../../../../modules/portal-entities.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [EntitySidebar.&lt;anonymous@44:20&gt;](<entity-sidebar.tsx.md#s-5efb4d158ba85fa5>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- onSelect — external-or-dynamic-dispatch; [features/entities/entity-sidebar.tsx:50](<../../../../../../features/entities/entity-sidebar.tsx#L50>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
