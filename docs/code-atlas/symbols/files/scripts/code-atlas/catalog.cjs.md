# scripts/code-atlas/catalog.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/code-atlas/catalog.cjs:1](<../../../../../../scripts/code-atlas/catalog.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/code-atlas/catalog.cjs](<catalog.cjs.md#s-22b5449a26473c71>) (Module)
- [MODULES](<catalog.cjs.md#s-8e32e0098d4ac13f>) (VariableDeclaration)
- [MODULES.&lt;anonymous@161:7&gt;](<catalog.cjs.md#s-5ec114d485d7f1ea>) (ArrowFunction)
- [moduleFor](<catalog.cjs.md#s-760ea599ad9258b2>) (FunctionDeclaration)
- [roleFor](<catalog.cjs.md#s-83de78c6acc3c1e2>) (FunctionDeclaration)
- [portable](<catalog.cjs.md#s-c39d81ba81a8717f>) (FunctionDeclaration)

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

- &#91; &#91; "entity-domain", "Entity domain", "Owns stable Entity keys, metadata, logical ports and recorded Vault references. Adapts shared Markdown persistence.", "electron/domains/entit — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:4](<../../../../../../scripts/code-atlas/catalog.cjs#L4>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5ec114d485d7f1ea"></a>

## MODULES.&lt;anonymous@161:7&gt;

[scripts/code-atlas/catalog.cjs:161](<../../../../../../scripts/code-atlas/catalog.cjs#L161>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

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

<a id="s-760ea599ad9258b2"></a>

## moduleFor

[scripts/code-atlas/catalog.cjs:164](<../../../../../../scripts/code-atlas/catalog.cjs#L164>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Assigns one editorial owner using existing source paths; no source is moved or evaluated.

Purpose evidence: jsdoc.

Exported as: moduleFor ([scripts/code-atlas/catalog.cjs:1](<../../../../../../scripts/code-atlas/catalog.cjs#L1>)).

Lexical owner: [scripts/code-atlas/catalog.cjs](<catalog.cjs.md#s-22b5449a26473c71>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |

Returns: "worldview" &#124; "agents" &#124; "knowledge" &#124; "vault" &#124; "engines" &#124; "identity" &#124; "worldview-domain" &#124; "portal-entities" &#124; "portal-knowledge" &#124; "portal-documents" &#124; "shared" &#124; "desktop" &#124; "connectors" &#124; "entity-domain" &#124; "engine-registry" &#124; "tooling" &#124; "examples" &#124; "contracts" &#124; "portal-worldview" &#124; "portal-agents" &#124; "portal-chat" &#124; "portal-settings" &#124; "portal-shell" &#124; "providers" &#124; "ai-runtime" &#124; "configuration" (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [analyze](<analyze.cjs.md#s-50c93f94f5c6bf5b>) — [scripts/code-atlas/analyze.cjs:277](<../../../../../../scripts/code-atlas/analyze.cjs#L277>)
- [appendPowerShell](<powershell.cjs.md#s-ebdb565846169f3a>) — [scripts/code-atlas/powershell.cjs:38](<../../../../../../scripts/code-atlas/powershell.cjs#L38>)

Unresolved / external call sites: 41.

- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:165](<../../../../../../scripts/code-atlas/catalog.cjs#L165>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:166](<../../../../../../scripts/code-atlas/catalog.cjs#L166>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:167](<../../../../../../scripts/code-atlas/catalog.cjs#L167>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:168](<../../../../../../scripts/code-atlas/catalog.cjs#L168>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:169](<../../../../../../scripts/code-atlas/catalog.cjs#L169>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:170](<../../../../../../scripts/code-atlas/catalog.cjs#L170>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:171](<../../../../../../scripts/code-atlas/catalog.cjs#L171>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:172](<../../../../../../scripts/code-atlas/catalog.cjs#L172>)
- 33 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-83de78c6acc3c1e2"></a>

## roleFor

[scripts/code-atlas/catalog.cjs:246](<../../../../../../scripts/code-atlas/catalog.cjs#L246>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

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

- /\\.test\\.&#91;cm&#93;?&#91;jt&#93;sx?$/.test — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:247](<../../../../../../scripts/code-atlas/catalog.cjs#L247>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:248](<../../../../../../scripts/code-atlas/catalog.cjs#L248>)
- /\\.d\\.&#91;cm&#93;?ts$/.test — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:249](<../../../../../../scripts/code-atlas/catalog.cjs#L249>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:249](<../../../../../../scripts/code-atlas/catalog.cjs#L249>)
- file.startsWith — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:251](<../../../../../../scripts/code-atlas/catalog.cjs#L251>)
- /^(app&#124;components&#124;features&#124;electron)\\//.test — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:252](<../../../../../../scripts/code-atlas/catalog.cjs#L252>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c39d81ba81a8717f"></a>

## portable

[scripts/code-atlas/catalog.cjs:257](<../../../../../../scripts/code-atlas/catalog.cjs#L257>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

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

- file.split(path.sep).join — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:258](<../../../../../../scripts/code-atlas/catalog.cjs#L258>)
- file.split — external-or-dynamic-dispatch; [scripts/code-atlas/catalog.cjs:258](<../../../../../../scripts/code-atlas/catalog.cjs#L258>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
