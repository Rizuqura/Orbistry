# electron/ai/numeric-equations.cjs: symbols

[Atlas](<../../../../README.md>) / [Retained AI runtime](<../../../../modules/ai-runtime.md>) / [electron/ai/numeric-equations.cjs:1](<../../../../../../electron/ai/numeric-equations.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/ai/numeric-equations.cjs](<numeric-equations.cjs.md#s-f0c38f4f612c1e46>) (Module)
- [parseExpression](<numeric-equations.cjs.md#s-5a3fc6d759371696>) (FunctionDeclaration)
- [parseExpression.spaces](<numeric-equations.cjs.md#s-9e24486cb54dbc67>) (ArrowFunction)
- [parseExpression.bounded](<numeric-equations.cjs.md#s-c16b070b88ca16a3>) (ArrowFunction)
- [parseExpression.primary](<numeric-equations.cjs.md#s-8c3e27e3b86653a4>) (ArrowFunction)
- [parseExpression.product](<numeric-equations.cjs.md#s-a429a8ba125d62ba>) (ArrowFunction)
- [parseExpression.sum](<numeric-equations.cjs.md#s-4915f1bd0aeaf87c>) (ArrowFunction)
- [verifiedEquations](<numeric-equations.cjs.md#s-f0f6a680b4facadf>) (FunctionDeclaration)
- [verifiedEquations.&lt;anonymous@76:5&gt;](<numeric-equations.cjs.md#s-2e9cf8fef4f96847>) (ArrowFunction)
- [verifiedEquations.&lt;anonymous@131:11&gt;](<numeric-equations.cjs.md#s-0e019fe39542d0bd>) (ArrowFunction)

<a id="s-f0c38f4f612c1e46"></a>

## electron/ai/numeric-equations.cjs

[electron/ai/numeric-equations.cjs:1](<../../../../../../electron/ai/numeric-equations.cjs#L1>) · Module · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5a3fc6d759371696"></a>

## parseExpression

[electron/ai/numeric-equations.cjs:4](<../../../../../../electron/ai/numeric-equations.cjs#L4>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/ai/numeric-equations.cjs](<numeric-equations.cjs.md#s-f0c38f4f612c1e46>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| expression | any | compiler-inferred | required |

Returns: { inputs: {}; value: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parseExpression.sum](<numeric-equations.cjs.md#s-4915f1bd0aeaf87c>) — [electron/ai/numeric-equations.cjs:67](<../../../../../../electron/ai/numeric-equations.cjs#L67>)
- [parseExpression.spaces](<numeric-equations.cjs.md#s-9e24486cb54dbc67>) — [electron/ai/numeric-equations.cjs:68](<../../../../../../electron/ai/numeric-equations.cjs#L68>)

**Called by (statically resolved):**

- [verifiedEquations](<numeric-equations.cjs.md#s-f0f6a680b4facadf>) — [electron/ai/numeric-equations.cjs:115](<../../../../../../electron/ai/numeric-equations.cjs#L115>)

Unresolved / external call sites: 1.

- Error — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:70](<../../../../../../electron/ai/numeric-equations.cjs#L70>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-9e24486cb54dbc67"></a>

## parseExpression.spaces

[electron/ai/numeric-equations.cjs:9](<../../../../../../electron/ai/numeric-equations.cjs#L9>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [parseExpression](<numeric-equations.cjs.md#s-5a3fc6d759371696>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [parseExpression.primary](<numeric-equations.cjs.md#s-8c3e27e3b86653a4>) — [electron/ai/numeric-equations.cjs:22](<../../../../../../electron/ai/numeric-equations.cjs#L22>)
- [parseExpression.primary](<numeric-equations.cjs.md#s-8c3e27e3b86653a4>) — [electron/ai/numeric-equations.cjs:27](<../../../../../../electron/ai/numeric-equations.cjs#L27>)
- [parseExpression.primary](<numeric-equations.cjs.md#s-8c3e27e3b86653a4>) — [electron/ai/numeric-equations.cjs:32](<../../../../../../electron/ai/numeric-equations.cjs#L32>)
- [parseExpression.product](<numeric-equations.cjs.md#s-a429a8ba125d62ba>) — [electron/ai/numeric-equations.cjs:45](<../../../../../../electron/ai/numeric-equations.cjs#L45>)
- [parseExpression.product](<numeric-equations.cjs.md#s-a429a8ba125d62ba>) — [electron/ai/numeric-equations.cjs:51](<../../../../../../electron/ai/numeric-equations.cjs#L51>)
- [parseExpression.sum](<numeric-equations.cjs.md#s-4915f1bd0aeaf87c>) — [electron/ai/numeric-equations.cjs:57](<../../../../../../electron/ai/numeric-equations.cjs#L57>)
- [parseExpression.sum](<numeric-equations.cjs.md#s-4915f1bd0aeaf87c>) — [electron/ai/numeric-equations.cjs:63](<../../../../../../electron/ai/numeric-equations.cjs#L63>)
- [parseExpression](<numeric-equations.cjs.md#s-5a3fc6d759371696>) — [electron/ai/numeric-equations.cjs:68](<../../../../../../electron/ai/numeric-equations.cjs#L68>)

Unresolved / external call sites: 1.

- /\\s/.test — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:10](<../../../../../../electron/ai/numeric-equations.cjs#L10>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c16b070b88ca16a3"></a>

## parseExpression.bounded

[electron/ai/numeric-equations.cjs:12](<../../../../../../electron/ai/numeric-equations.cjs#L12>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [parseExpression](<numeric-equations.cjs.md#s-5a3fc6d759371696>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [parseExpression.primary](<numeric-equations.cjs.md#s-8c3e27e3b86653a4>) — [electron/ai/numeric-equations.cjs:34](<../../../../../../electron/ai/numeric-equations.cjs#L34>)
- [parseExpression.primary](<numeric-equations.cjs.md#s-8c3e27e3b86653a4>) — [electron/ai/numeric-equations.cjs:39](<../../../../../../electron/ai/numeric-equations.cjs#L39>)
- [parseExpression.product](<numeric-equations.cjs.md#s-a429a8ba125d62ba>) — [electron/ai/numeric-equations.cjs:50](<../../../../../../electron/ai/numeric-equations.cjs#L50>)
- [parseExpression.sum](<numeric-equations.cjs.md#s-4915f1bd0aeaf87c>) — [electron/ai/numeric-equations.cjs:62](<../../../../../../electron/ai/numeric-equations.cjs#L62>)

Unresolved / external call sites: 3.

- Number.isFinite — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:13](<../../../../../../electron/ai/numeric-equations.cjs#L13>)
- Math.abs — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:13](<../../../../../../electron/ai/numeric-equations.cjs#L13>)
- Error — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:14](<../../../../../../electron/ai/numeric-equations.cjs#L14>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8c3e27e3b86653a4"></a>

## parseExpression.primary

[electron/ai/numeric-equations.cjs:20](<../../../../../../electron/ai/numeric-equations.cjs#L20>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [parseExpression](<numeric-equations.cjs.md#s-5a3fc6d759371696>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parseExpression.spaces](<numeric-equations.cjs.md#s-9e24486cb54dbc67>) — [electron/ai/numeric-equations.cjs:22](<../../../../../../electron/ai/numeric-equations.cjs#L22>)
- [parseExpression.spaces](<numeric-equations.cjs.md#s-9e24486cb54dbc67>) — [electron/ai/numeric-equations.cjs:27](<../../../../../../electron/ai/numeric-equations.cjs#L27>)
- [parseExpression.sum](<numeric-equations.cjs.md#s-4915f1bd0aeaf87c>) — [electron/ai/numeric-equations.cjs:31](<../../../../../../electron/ai/numeric-equations.cjs#L31>)
- [parseExpression.spaces](<numeric-equations.cjs.md#s-9e24486cb54dbc67>) — [electron/ai/numeric-equations.cjs:32](<../../../../../../electron/ai/numeric-equations.cjs#L32>)
- [parseExpression.bounded](<numeric-equations.cjs.md#s-c16b070b88ca16a3>) — [electron/ai/numeric-equations.cjs:34](<../../../../../../electron/ai/numeric-equations.cjs#L34>)
- [parseExpression.bounded](<numeric-equations.cjs.md#s-c16b070b88ca16a3>) — [electron/ai/numeric-equations.cjs:39](<../../../../../../electron/ai/numeric-equations.cjs#L39>)

**Called by (statically resolved):**

- [parseExpression.product](<numeric-equations.cjs.md#s-a429a8ba125d62ba>) — [electron/ai/numeric-equations.cjs:44](<../../../../../../electron/ai/numeric-equations.cjs#L44>)
- [parseExpression.product](<numeric-equations.cjs.md#s-a429a8ba125d62ba>) — [electron/ai/numeric-equations.cjs:48](<../../../../../../electron/ai/numeric-equations.cjs#L48>)

Unresolved / external call sites: 9.

- Error — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:21](<../../../../../../electron/ai/numeric-equations.cjs#L21>)
- Error — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:25](<../../../../../../electron/ai/numeric-equations.cjs#L25>)
- Error — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:33](<../../../../../../electron/ai/numeric-equations.cjs#L33>)
- expression.slice(index).match — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:36](<../../../../../../electron/ai/numeric-equations.cjs#L36>)
- expression.slice — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:36](<../../../../../../electron/ai/numeric-equations.cjs#L36>)
- Error — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:37](<../../../../../../electron/ai/numeric-equations.cjs#L37>)
- Number — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:39](<../../../../../../electron/ai/numeric-equations.cjs#L39>)
- match&#91;0&#93;.replaceAll — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:39](<../../../../../../electron/ai/numeric-equations.cjs#L39>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a429a8ba125d62ba"></a>

## parseExpression.product

[electron/ai/numeric-equations.cjs:43](<../../../../../../electron/ai/numeric-equations.cjs#L43>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [parseExpression](<numeric-equations.cjs.md#s-5a3fc6d759371696>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parseExpression.primary](<numeric-equations.cjs.md#s-8c3e27e3b86653a4>) — [electron/ai/numeric-equations.cjs:44](<../../../../../../electron/ai/numeric-equations.cjs#L44>)
- [parseExpression.spaces](<numeric-equations.cjs.md#s-9e24486cb54dbc67>) — [electron/ai/numeric-equations.cjs:45](<../../../../../../electron/ai/numeric-equations.cjs#L45>)
- [parseExpression.primary](<numeric-equations.cjs.md#s-8c3e27e3b86653a4>) — [electron/ai/numeric-equations.cjs:48](<../../../../../../electron/ai/numeric-equations.cjs#L48>)
- [parseExpression.bounded](<numeric-equations.cjs.md#s-c16b070b88ca16a3>) — [electron/ai/numeric-equations.cjs:50](<../../../../../../electron/ai/numeric-equations.cjs#L50>)
- [parseExpression.spaces](<numeric-equations.cjs.md#s-9e24486cb54dbc67>) — [electron/ai/numeric-equations.cjs:51](<../../../../../../electron/ai/numeric-equations.cjs#L51>)

**Called by (statically resolved):**

- [parseExpression.sum](<numeric-equations.cjs.md#s-4915f1bd0aeaf87c>) — [electron/ai/numeric-equations.cjs:56](<../../../../../../electron/ai/numeric-equations.cjs#L56>)
- [parseExpression.sum](<numeric-equations.cjs.md#s-4915f1bd0aeaf87c>) — [electron/ai/numeric-equations.cjs:60](<../../../../../../electron/ai/numeric-equations.cjs#L60>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-4915f1bd0aeaf87c"></a>

## parseExpression.sum

[electron/ai/numeric-equations.cjs:55](<../../../../../../electron/ai/numeric-equations.cjs#L55>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [parseExpression](<numeric-equations.cjs.md#s-5a3fc6d759371696>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parseExpression.product](<numeric-equations.cjs.md#s-a429a8ba125d62ba>) — [electron/ai/numeric-equations.cjs:56](<../../../../../../electron/ai/numeric-equations.cjs#L56>)
- [parseExpression.spaces](<numeric-equations.cjs.md#s-9e24486cb54dbc67>) — [electron/ai/numeric-equations.cjs:57](<../../../../../../electron/ai/numeric-equations.cjs#L57>)
- [parseExpression.product](<numeric-equations.cjs.md#s-a429a8ba125d62ba>) — [electron/ai/numeric-equations.cjs:60](<../../../../../../electron/ai/numeric-equations.cjs#L60>)
- [parseExpression.bounded](<numeric-equations.cjs.md#s-c16b070b88ca16a3>) — [electron/ai/numeric-equations.cjs:62](<../../../../../../electron/ai/numeric-equations.cjs#L62>)
- [parseExpression.spaces](<numeric-equations.cjs.md#s-9e24486cb54dbc67>) — [electron/ai/numeric-equations.cjs:63](<../../../../../../electron/ai/numeric-equations.cjs#L63>)

**Called by (statically resolved):**

- [parseExpression.primary](<numeric-equations.cjs.md#s-8c3e27e3b86653a4>) — [electron/ai/numeric-equations.cjs:31](<../../../../../../electron/ai/numeric-equations.cjs#L31>)
- [parseExpression](<numeric-equations.cjs.md#s-5a3fc6d759371696>) — [electron/ai/numeric-equations.cjs:67](<../../../../../../electron/ai/numeric-equations.cjs#L67>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f0f6a680b4facadf"></a>

## verifiedEquations

[electron/ai/numeric-equations.cjs:73](<../../../../../../electron/ai/numeric-equations.cjs#L73>) · FunctionDeclaration · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: verifiedEquations ([electron/ai/numeric-equations.cjs:1](<../../../../../../electron/ai/numeric-equations.cjs#L1>)).

Lexical owner: [electron/ai/numeric-equations.cjs](<numeric-equations.cjs.md#s-f0c38f4f612c1e46>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| text | any | compiler-inferred | required |
| supported | any | compiler-inferred | required |

Returns: { verified: {}; rejected: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parseExpression](<numeric-equations.cjs.md#s-5a3fc6d759371696>) — [electron/ai/numeric-equations.cjs:115](<../../../../../../electron/ai/numeric-equations.cjs#L115>)

**Called by (statically resolved):**

- [inspectDatasetAnswer](<dataset-evidence.cjs.md#s-5b66ea9d9a17227b>) — [electron/ai/dataset-evidence.cjs:135](<../../../../../../electron/ai/dataset-evidence.cjs#L135>)

Unresolved / external call sites: 27.

- text.replace — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:74](<../../../../../../electron/ai/numeric-equations.cjs#L74>)
- normalized.matchAll — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:81](<../../../../../../electron/ai/numeric-equations.cjs#L81>)
- normalized .slice(match.index + 1) .match — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:83](<../../../../../../electron/ai/numeric-equations.cjs#L83>)
- normalized .slice — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:83](<../../../../../../electron/ai/numeric-equations.cjs#L83>)
- Number — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:99](<../../../../../../electron/ai/numeric-equations.cjs#L99>)
- right&#91;1&#93;.replaceAll — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:99](<../../../../../../electron/ai/numeric-equations.cjs#L99>)
- right&#91;1&#93;.toLowerCase().split — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:101](<../../../../../../electron/ai/numeric-equations.cjs#L101>)
- right&#91;1&#93;.toLowerCase — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:101](<../../../../../../electron/ai/numeric-equations.cjs#L101>)
- 19 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2e9cf8fef4f96847"></a>

## verifiedEquations.&lt;anonymous@76:5&gt;

[electron/ai/numeric-equations.cjs:76](<../../../../../../electron/ai/numeric-equations.cjs#L76>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifiedEquations](<numeric-equations.cjs.md#s-f0f6a680b4facadf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| char | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0e019fe39542d0bd"></a>

## verifiedEquations.&lt;anonymous@131:11&gt;

[electron/ai/numeric-equations.cjs:131](<../../../../../../electron/ai/numeric-equations.cjs#L131>) · ArrowFunction · production · [Retained AI runtime](<../../../../modules/ai-runtime.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [verifiedEquations](<numeric-equations.cjs.md#s-f0f6a680b4facadf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- Math.abs — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:132](<../../../../../../electron/ai/numeric-equations.cjs#L132>)
- Math.abs — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:133](<../../../../../../electron/ai/numeric-equations.cjs#L133>)
- Number.isInteger — external-or-dynamic-dispatch; [electron/ai/numeric-equations.cjs:134](<../../../../../../electron/ai/numeric-equations.cjs#L134>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
