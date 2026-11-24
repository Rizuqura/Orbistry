# scripts/code-atlas/powershell-parser.ps1: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/code-atlas/powershell-parser.ps1:1](<../../../../../../scripts/code-atlas/powershell-parser.ps1#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [&lt;module&gt;](<powershell-parser.ps1.md#s-b8a0e219d46f9c96>) (Module)
- [&lt;script&gt;](<powershell-parser.ps1.md#s-f038bcf2238bb2e9>) (PowerShellScript)

<a id="s-b8a0e219d46f9c96"></a>

## &lt;module&gt;

[scripts/code-atlas/powershell-parser.ps1:1](<../../../../../../scripts/code-atlas/powershell-parser.ps1#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

PowerShell source-file scope; parsed without execution.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-f038bcf2238bb2e9"></a>

## &lt;script&gt;

[scripts/code-atlas/powershell-parser.ps1:1](<../../../../../../scripts/code-atlas/powershell-parser.ps1#L1>) · PowerShellScript · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;module&gt;](<powershell-parser.ps1.md#s-b8a0e219d46f9c96>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: Dynamic PowerShell pipeline output; return type not inferred. (dynamic-language). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 19.

- New-Object System.Text.UTF8Encoding($false) — powershell-external-or-dynamic-command; [scripts/code-atlas/powershell-parser.ps1:8](<../../../../../../scripts/code-atlas/powershell-parser.ps1#L8>)
- New-Object System.Text.UTF8Encoding($false) — powershell-external-or-dynamic-command; [scripts/code-atlas/powershell-parser.ps1:9](<../../../../../../scripts/code-atlas/powershell-parser.ps1#L9>)
- &#91;Console&#93;::In.ReadToEnd() — powershell-member-dispatch; [scripts/code-atlas/powershell-parser.ps1:10](<../../../../../../scripts/code-atlas/powershell-parser.ps1#L10>)
- ConvertFrom-Json — powershell-external-or-dynamic-command; [scripts/code-atlas/powershell-parser.ps1:10](<../../../../../../scripts/code-atlas/powershell-parser.ps1#L10>)
- &#91;System.Management.Automation.Language.Parser&#93;::ParseInput($file.text, &#91;ref&#93;$tokens, &#91;ref&#93;$parseErrors) — powershell-member-dispatch; [scripts/code-atlas/powershell-parser.ps1:15](<../../../../../../scripts/code-atlas/powershell-parser.ps1#L15>)
- $ast.FindAll({ param($node) $node -is &#91;System.Management.Automation.Language.FunctionDefinitionAst&#93; }, $true) — powershell-member-dispatch; [scripts/code-atlas/powershell-parser.ps1:16](<../../../../../../scripts/code-atlas/powershell-parser.ps1#L16>)
- Where-Object { $null -ne $_ } — powershell-external-or-dynamic-command; [scripts/code-atlas/powershell-parser.ps1:19](<../../../../../../scripts/code-atlas/powershell-parser.ps1#L19>)
- ForEach-Object { $type = @($_.Attributes &#124; Where-Object { $_ -is &#91;System.Management.Automation.Language.TypeConstraintAst&#93; } &#124; ForEach-Object { $_.TypeName.FullName }) @{ name = $_ — powershell-external-or-dynamic-command; [scripts/code-atlas/powershell-parser.ps1:20](<../../../../../../scripts/code-atlas/powershell-parser.ps1#L20>)
- 11 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
