# electron/windows-ocr.ps1: symbols

[Atlas](<../../../README.md>) / [Vault and stations](<../../../modules/vault.md>) / [electron/windows-ocr.ps1:1](<../../../../../electron/windows-ocr.ps1#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [&lt;module&gt;](<windows-ocr.ps1.md#s-42eefc600aa3548e>) (Module)
- [&lt;script&gt;](<windows-ocr.ps1.md#s-343fc673016ab91c>) (PowerShellScript)
- [Await](<windows-ocr.ps1.md#s-af2a57bca6d837fe>) (PowerShellFunction)
- [Read-Text](<windows-ocr.ps1.md#s-73b60a1d1e44cada>) (PowerShellFunction)

<a id="s-42eefc600aa3548e"></a>

## &lt;module&gt;

[electron/windows-ocr.ps1:1](<../../../../../electron/windows-ocr.ps1#L1>) · Module · production · [Vault and stations](<../../../modules/vault.md>)

PowerShell source-file scope; parsed without execution.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-343fc673016ab91c"></a>

## &lt;script&gt;

[electron/windows-ocr.ps1:1](<../../../../../electron/windows-ocr.ps1#L1>) · PowerShellScript · production · [Vault and stations](<../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;module&gt;](<windows-ocr.ps1.md#s-42eefc600aa3548e>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| $LiteralPath | string | annotation | optionality not classified |

Returns: Dynamic PowerShell pipeline output; return type not inferred. (dynamic-language). Implementation present.

**Calls (statically resolved):**

- [Await](<windows-ocr.ps1.md#s-af2a57bca6d837fe>) — [electron/windows-ocr.ps1:36](<../../../../../electron/windows-ocr.ps1#L36>)
- [Await](<windows-ocr.ps1.md#s-af2a57bca6d837fe>) — [electron/windows-ocr.ps1:38](<../../../../../electron/windows-ocr.ps1#L38>)
- [Read-Text](<windows-ocr.ps1.md#s-73b60a1d1e44cada>) — [electron/windows-ocr.ps1:39](<../../../../../electron/windows-ocr.ps1#L39>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 14.

- New-Object System.Text.UTF8Encoding($false) — powershell-external-or-dynamic-command; [electron/windows-ocr.ps1:3](<../../../../../electron/windows-ocr.ps1#L3>)
- Add-Type -AssemblyName System.Runtime.WindowsRuntime — powershell-external-or-dynamic-command; [electron/windows-ocr.ps1:4](<../../../../../electron/windows-ocr.ps1#L4>)
- &#91;System.WindowsRuntimeSystemExtensions&#93;.GetMethods() — powershell-member-dispatch; [electron/windows-ocr.ps1:10](<../../../../../electron/windows-ocr.ps1#L10>)
- Where-Object { $_.Name -eq 'AsTask' -and $_.IsGenericMethod -and $_.GetParameters().Count -eq 1 -and $_.GetGenericArguments().Count -eq 1 } — powershell-external-or-dynamic-command; [electron/windows-ocr.ps1:10](<../../../../../electron/windows-ocr.ps1#L10>)
- $_.GetParameters() — powershell-member-dispatch; [electron/windows-ocr.ps1:10](<../../../../../electron/windows-ocr.ps1#L10>)
- $_.GetGenericArguments() — powershell-member-dispatch; [electron/windows-ocr.ps1:10](<../../../../../electron/windows-ocr.ps1#L10>)
- Select-Object -First 1 — powershell-external-or-dynamic-command; [electron/windows-ocr.ps1:10](<../../../../../electron/windows-ocr.ps1#L10>)
- &#91;Windows.Media.Ocr.OcrEngine&#93;::TryCreateFromUserProfileLanguages() — powershell-member-dispatch; [electron/windows-ocr.ps1:16](<../../../../../electron/windows-ocr.ps1#L16>)
- 6 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-af2a57bca6d837fe"></a>

## Await

[electron/windows-ocr.ps1:11](<../../../../../electron/windows-ocr.ps1#L11>) · PowerShellFunction · production · [Vault and stations](<../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;script&gt;](<windows-ocr.ps1.md#s-343fc673016ab91c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| $Operation | unconstrained PowerShell value | dynamic-language | optionality not classified |
| $ResultType | Type | annotation | optionality not classified |

Returns: Dynamic PowerShell pipeline output; return type not inferred. (dynamic-language). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [Read-Text](<windows-ocr.ps1.md#s-73b60a1d1e44cada>) — [electron/windows-ocr.ps1:24](<../../../../../electron/windows-ocr.ps1#L24>)
- [Read-Text](<windows-ocr.ps1.md#s-73b60a1d1e44cada>) — [electron/windows-ocr.ps1:30](<../../../../../electron/windows-ocr.ps1#L30>)
- [Read-Text](<windows-ocr.ps1.md#s-73b60a1d1e44cada>) — [electron/windows-ocr.ps1:32](<../../../../../electron/windows-ocr.ps1#L32>)
- [&lt;script&gt;](<windows-ocr.ps1.md#s-343fc673016ab91c>) — [electron/windows-ocr.ps1:36](<../../../../../electron/windows-ocr.ps1#L36>)
- [&lt;script&gt;](<windows-ocr.ps1.md#s-343fc673016ab91c>) — [electron/windows-ocr.ps1:38](<../../../../../electron/windows-ocr.ps1#L38>)

Unresolved / external call sites: 4.

- $asTask.MakeGenericMethod($ResultType).Invoke($null, @($Operation)) — powershell-member-dispatch; [electron/windows-ocr.ps1:12](<../../../../../electron/windows-ocr.ps1#L12>)
- $asTask.MakeGenericMethod($ResultType) — powershell-member-dispatch; [electron/windows-ocr.ps1:12](<../../../../../electron/windows-ocr.ps1#L12>)
- $task.GetAwaiter().GetResult() — powershell-member-dispatch; [electron/windows-ocr.ps1:13](<../../../../../electron/windows-ocr.ps1#L13>)
- $task.GetAwaiter() — powershell-member-dispatch; [electron/windows-ocr.ps1:13](<../../../../../electron/windows-ocr.ps1#L13>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-73b60a1d1e44cada"></a>

## Read-Text

[electron/windows-ocr.ps1:22](<../../../../../electron/windows-ocr.ps1#L22>) · PowerShellFunction · production · [Vault and stations](<../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [&lt;script&gt;](<windows-ocr.ps1.md#s-343fc673016ab91c>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| $Stream | unconstrained PowerShell value | dynamic-language | optionality not classified |

Returns: Dynamic PowerShell pipeline output; return type not inferred. (dynamic-language). Implementation present.

**Calls (statically resolved):**

- [Await](<windows-ocr.ps1.md#s-af2a57bca6d837fe>) — [electron/windows-ocr.ps1:24](<../../../../../electron/windows-ocr.ps1#L24>)
- [Await](<windows-ocr.ps1.md#s-af2a57bca6d837fe>) — [electron/windows-ocr.ps1:30](<../../../../../electron/windows-ocr.ps1#L30>)
- [Await](<windows-ocr.ps1.md#s-af2a57bca6d837fe>) — [electron/windows-ocr.ps1:32](<../../../../../electron/windows-ocr.ps1#L32>)

**Called by (statically resolved):**

- [&lt;script&gt;](<windows-ocr.ps1.md#s-343fc673016ab91c>) — [electron/windows-ocr.ps1:39](<../../../../../electron/windows-ocr.ps1#L39>)

Unresolved / external call sites: 14.

- $Stream.Seek(0) — powershell-member-dispatch; [electron/windows-ocr.ps1:23](<../../../../../electron/windows-ocr.ps1#L23>)
- &#91;Windows.Graphics.Imaging.BitmapDecoder&#93;::CreateAsync($Stream) — powershell-member-dispatch; [electron/windows-ocr.ps1:24](<../../../../../electron/windows-ocr.ps1#L24>)
- &#91;Math&#93;::Min(1.0, &#91;Math&#93;::Min(2400, &#91;Windows.Media.Ocr.OcrEngine&#93;::MaxImageDimension) / &#91;Math&#93;::Max($decoder.PixelWidth, $decoder.PixelHeight)) — powershell-member-dispatch; [electron/windows-ocr.ps1:26](<../../../../../electron/windows-ocr.ps1#L26>)
- &#91;Math&#93;::Min(2400, &#91;Windows.Media.Ocr.OcrEngine&#93;::MaxImageDimension) — powershell-member-dispatch; [electron/windows-ocr.ps1:26](<../../../../../electron/windows-ocr.ps1#L26>)
- &#91;Math&#93;::Max($decoder.PixelWidth, $decoder.PixelHeight) — powershell-member-dispatch; [electron/windows-ocr.ps1:26](<../../../../../electron/windows-ocr.ps1#L26>)
- New-Object Windows.Graphics.Imaging.BitmapTransform — powershell-external-or-dynamic-command; [electron/windows-ocr.ps1:27](<../../../../../electron/windows-ocr.ps1#L27>)
- &#91;Math&#93;::Max(1, &#91;Math&#93;::Floor($decoder.PixelWidth * $factor)) — powershell-member-dispatch; [electron/windows-ocr.ps1:28](<../../../../../electron/windows-ocr.ps1#L28>)
- &#91;Math&#93;::Floor($decoder.PixelWidth * $factor) — powershell-member-dispatch; [electron/windows-ocr.ps1:28](<../../../../../electron/windows-ocr.ps1#L28>)
- 6 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
