# scripts/code-atlas/catalog.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/code-atlas/catalog.cjs:1](<../../../../../../scripts/code-atlas/catalog.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/code-atlas/catalog.cjs](<catalog.cjs.md#s-22b5449a26473c71>) (Module)
- [MODULES](<catalog.cjs.md#s-8e32e0098d4ac13f>) (VariableDeclaration)
- [MODULES.&lt;anonymous@149:7&gt;](<catalog.cjs.md#s-2d2c495c203ad21b>) (ArrowFunction)
- [moduleFor](<catalog.cjs.md#s-2ebdbca349133d25>) (FunctionDeclaration)
- [roleFor](<catalog.cjs.md#s-3823f18765a04090>) (FunctionDeclaration)
- [portable](<catalog.cjs.md#s-eaf9bd3db901e033>) (FunctionDeclaration)

<a id="s-22b5449a26473c71"></a>

## scripts/code-atlas/catalog.cjs

[scripts/code-atlas/catalog.cjs:1](<../../../../../../scripts/code-atlas/catalog.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- require — module-loader; [scripts/code-atlas/catalog.cjs:1](<../../../../../../scripts/code-atlas/catalog.cjs#L1>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-8e32e0098d4ac13f"></a>

## MODULES

[scripts/code-atlas/catalog.cjs:4](<../../../../../../scripts/code-atlas/catalog.cjs#L4>) · VariableDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: MODULES ([scripts/code-atlas/catalog.cjs:1](<../../../../../../scripts/code-atlas/catalog.cjs#L1>)).

Lexical owner: [scripts/code-atlas/catalog.cjs](<catalog.cjs.md#s-22b5449a26473c71>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- &#91; &#91; "portal-entities", "Entity UI", "Edits Entity metadata, source assignments and navigation.", "features/entities/", &#93;, &#91; "portal-knowledge", "Knowledge Cards and readers", "Pres — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:4](<../../../../../../scripts/code-atlas/catalog.cjs#L4>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2d2c495c203ad21b"></a>

## MODULES.&lt;anonymous@149:7&gt;

[scripts/code-atlas/catalog.cjs:149](<../../../../../../scripts/code-atlas/catalog.cjs#L149>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [MODULES](<catalog.cjs.md#s-8e32e0098d4ac13f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| &#91;id, name, purpose, owns&#93; | &#91;any, any, any, any&#93; | compiler-inferred | required |

Returns: { id: any; name: any; purpose: any; owns: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-2ebdbca349133d25"></a>

## moduleFor

[scripts/code-atlas/catalog.cjs:152](<../../../../../../scripts/code-atlas/catalog.cjs#L152>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Assigns one editorial owner using existing source paths; no source is moved or evaluated.

Purpose evidence: jsdoc.

Exported as: moduleFor ([scripts/code-atlas/catalog.cjs:1](<../../../../../../scripts/code-atlas/catalog.cjs#L1>)).

Lexical owner: [scripts/code-atlas/catalog.cjs](<catalog.cjs.md#s-22b5449a26473c71>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: "worldview" &#124; "agents" &#124; "knowledge" &#124; "vault" &#124; "engines" &#124; "identity" &#124; "portal-entities" &#124; "portal-knowledge" &#124; "portal-documents" &#124; "shared" &#124; "desktop" &#124; "connectors" &#124; "engine-registry" &#124; "tooling" &#124; "examples" &#124; "contracts" &#124; "portal-worldview" &#124; "portal-agents" &#124; "portal-chat" &#124; "portal-settings" &#124; "portal-shell" &#124; "providers" &#124; "ai-runtime" &#124; "configuration" (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [analyze](<analyze.cjs.md#s-50c93f94f5c6bf5b>) — [scripts/code-atlas/analyze.cjs:277](<../../../../../../scripts/code-atlas/analyze.cjs#L277>)
- [appendPowerShell](<powershell.cjs.md#s-ebdb565846169f3a>) — [scripts/code-atlas/powershell.cjs:38](<../../../../../../scripts/code-atlas/powershell.cjs#L38>)

Unresolved / external call sites: 38.

- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:153](<../../../../../../scripts/code-atlas/catalog.cjs#L153>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:154](<../../../../../../scripts/code-atlas/catalog.cjs#L154>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:155](<../../../../../../scripts/code-atlas/catalog.cjs#L155>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:156](<../../../../../../scripts/code-atlas/catalog.cjs#L156>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:157](<../../../../../../scripts/code-atlas/catalog.cjs#L157>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:158](<../../../../../../scripts/code-atlas/catalog.cjs#L158>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:160](<../../../../../../scripts/code-atlas/catalog.cjs#L160>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:161](<../../../../../../scripts/code-atlas/catalog.cjs#L161>)
- 30 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-3823f18765a04090"></a>

## roleFor

[scripts/code-atlas/catalog.cjs:231](<../../../../../../scripts/code-atlas/catalog.cjs#L231>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Classifies evidence sources without equating test association with executable coverage.

Purpose evidence: jsdoc.

Exported as: roleFor ([scripts/code-atlas/catalog.cjs:1](<../../../../../../scripts/code-atlas/catalog.cjs#L1>)).

Lexical owner: [scripts/code-atlas/catalog.cjs](<catalog.cjs.md#s-22b5449a26473c71>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: "test" &#124; "tooling" &#124; "configuration" &#124; "declaration" &#124; "example" &#124; "production" (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [analyze](<analyze.cjs.md#s-50c93f94f5c6bf5b>) — [scripts/code-atlas/analyze.cjs:278](<../../../../../../scripts/code-atlas/analyze.cjs#L278>)
- [analyze](<analyze.cjs.md#s-50c93f94f5c6bf5b>) — [scripts/code-atlas/analyze.cjs:661](<../../../../../../scripts/code-atlas/analyze.cjs#L661>)
- [appendPowerShell](<powershell.cjs.md#s-ebdb565846169f3a>) — [scripts/code-atlas/powershell.cjs:39](<../../../../../../scripts/code-atlas/powershell.cjs#L39>)

Unresolved / external call sites: 6.

- /\\.test\\.&#91;cm&#93;?&#91;jt&#93;sx?$/.test — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:232](<../../../../../../scripts/code-atlas/catalog.cjs#L232>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:233](<../../../../../../scripts/code-atlas/catalog.cjs#L233>)
- /\\.d\\.&#91;cm&#93;?ts$/.test — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:234](<../../../../../../scripts/code-atlas/catalog.cjs#L234>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:234](<../../../../../../scripts/code-atlas/catalog.cjs#L234>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:236](<../../../../../../scripts/code-atlas/catalog.cjs#L236>)
- /^(app&#124;components&#124;features&#124;electron)\\//.test — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:237](<../../../../../../scripts/code-atlas/catalog.cjs#L237>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-eaf9bd3db901e033"></a>

## portable

[scripts/code-atlas/catalog.cjs:242](<../../../../../../scripts/code-atlas/catalog.cjs#L242>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Normalizes generated paths so output is byte-identical across supported operating systems.

Purpose evidence: jsdoc.

Exported as: portable ([scripts/code-atlas/catalog.cjs:1](<../../../../../../scripts/code-atlas/catalog.cjs#L1>)).

Lexical owner: [scripts/code-atlas/catalog.cjs](<catalog.cjs.md#s-22b5449a26473c71>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [analyze.&lt;anonymous@178:21&gt;](<analyze.cjs.md#s-0c06eaf444fee3c5>) — [scripts/code-atlas/analyze.cjs:178](<../../../../../../scripts/code-atlas/analyze.cjs#L178>)
- [analyze.&lt;anonymous@187:29&gt;.&lt;anonymous@188:15&gt;](<analyze.cjs.md#s-7344e6ed1a5c2dbb>) — [scripts/code-atlas/analyze.cjs:190](<../../../../../../scripts/code-atlas/analyze.cjs#L190>)
- [existingArtifacts.visit](<generate.cjs.md#s-41d7adecf44416f5>) — [scripts/code-atlas/generate.cjs:168](<../../../../../../scripts/code-atlas/generate.cjs#L168>)

Unresolved / external call sites: 2.

- file.split(path.sep).join — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:243](<../../../../../../scripts/code-atlas/catalog.cjs#L243>)
- file.split — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:243](<../../../../../../scripts/code-atlas/catalog.cjs#L243>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
