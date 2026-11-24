<#
Parses inventoried PowerShell text into documentation records using the native AST.
Input: JSON on stdin containing files with path/text. Output: JSON syntax records.
Errors: parsing/serialization errors terminate the parser. Side effects: stdout only.
Indexed scripts are never dot-sourced, invoked, imported or evaluated.
#>
$ErrorActionPreference = 'Stop'
[Console]::InputEncoding = New-Object System.Text.UTF8Encoding($false)
[Console]::OutputEncoding = New-Object System.Text.UTF8Encoding($false)
$request = [Console]::In.ReadToEnd() | ConvertFrom-Json
$results = @()
foreach ($file in $request.files) {
  $tokens = $null
  $parseErrors = $null
  $ast = [System.Management.Automation.Language.Parser]::ParseInput($file.text, [ref]$tokens, [ref]$parseErrors)
  $functions = @($ast.FindAll({ param($node) $node -is [System.Management.Automation.Language.FunctionDefinitionAst] }, $true))
  $declarations = @()
  foreach ($function in $functions) {
    $parameters = @($function.Parameters) + @($function.Body.ParamBlock.Parameters) | Where-Object { $null -ne $_ }
    $params = @($parameters | ForEach-Object {
      $type = @($_.Attributes | Where-Object { $_ -is [System.Management.Automation.Language.TypeConstraintAst] } | ForEach-Object { $_.TypeName.FullName })
      @{ name = $_.Name.VariablePath.UserPath; type = ($type -join ', '); defaultPresent = ($null -ne $_.DefaultValue) }
    })
    $parent = $function.Parent
    while ($null -ne $parent -and $parent -isnot [System.Management.Automation.Language.FunctionDefinitionAst]) { $parent = $parent.Parent }
    $help = $function.GetHelpContent()
    $declarations += @{ name = $function.Name; line = $function.Extent.StartLineNumber; column = $function.Extent.StartColumnNumber; endLine = $function.Extent.EndLineNumber; parentLine = $(if ($null -ne $parent) { $parent.Extent.StartLineNumber } else { $null }); parentColumn = $(if ($null -ne $parent) { $parent.Extent.StartColumnNumber } else { $null }); parameters = $params; purpose = $(if ($null -ne $help) { $help.Synopsis } else { $null }) }
  }
  $commands = @()
  $nodes = @($ast.FindAll({ param($node) $node -is [System.Management.Automation.Language.CommandAst] -or $node -is [System.Management.Automation.Language.InvokeMemberExpressionAst] }, $true))
  foreach ($node in $nodes) {
    $parent = $node.Parent
    while ($null -ne $parent -and $parent -isnot [System.Management.Automation.Language.FunctionDefinitionAst]) { $parent = $parent.Parent }
    $name = $null
    if ($node -is [System.Management.Automation.Language.CommandAst]) { $name = $node.GetCommandName() }
    $commands += @{ name = $name; expression = $node.Extent.Text; line = $node.Extent.StartLineNumber; column = $node.Extent.StartColumnNumber; ownerLine = $(if ($null -ne $parent) { $parent.Extent.StartLineNumber } else { $null }); ownerColumn = $(if ($null -ne $parent) { $parent.Extent.StartColumnNumber } else { $null }); member = ($node -is [System.Management.Automation.Language.InvokeMemberExpressionAst]) }
  }
  $scriptParams = @($ast.ParamBlock.Parameters | Where-Object { $null -ne $_ } | ForEach-Object {
    $type = @($_.Attributes | Where-Object { $_ -is [System.Management.Automation.Language.TypeConstraintAst] } | ForEach-Object { $_.TypeName.FullName })
    @{ name = $_.Name.VariablePath.UserPath; type = ($type -join ', '); defaultPresent = ($null -ne $_.DefaultValue) }
  })
  $errors = @($parseErrors | ForEach-Object { @{ line = $_.Extent.StartLineNumber; message = $_.Message } })
  $results += @{ file = $file.path; declarations = $declarations; commands = $commands; parameters = $scriptParams; errors = $errors }
}
ConvertTo-Json -InputObject @{ files = $results } -Depth 20 -Compress
