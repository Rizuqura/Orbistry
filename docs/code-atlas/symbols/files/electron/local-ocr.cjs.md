# electron/local-ocr.cjs: symbols

[Atlas](<../../../README.md>) / [Vault and stations](<../../../modules/vault.md>) / [electron/local-ocr.cjs:1](<../../../../../electron/local-ocr.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/local-ocr.cjs](<local-ocr.cjs.md#s-8cdb75c83b46d2cf>) (Module)
- [recognizeFile](<local-ocr.cjs.md#s-be136e28f61960a0>) (FunctionDeclaration)
- [recognizeFile.&lt;anonymous@14:31&gt;](<local-ocr.cjs.md#s-93812b9a9a93f5ce>) (ArrowFunction)
- [recognizeFile.&lt;anonymous@14:31&gt;.&lt;anonymous@44:7&gt;](<local-ocr.cjs.md#s-73eb1f6cdf0887a6>) (ArrowFunction)
- [recognizeFile.&lt;anonymous@14:31&gt;.&lt;anonymous@44:7&gt;.&lt;anonymous@64:15&gt;](<local-ocr.cjs.md#s-70dbf1740b7d83e4>) (ArrowFunction)
- [recognizeFile.&lt;anonymous@74:14&gt;](<local-ocr.cjs.md#s-5aa4bc25a98921dd>) (ArrowFunction)

<a id="s-8cdb75c83b46d2cf"></a>

## electron/local-ocr.cjs

[electron/local-ocr.cjs:1](<../../../../../electron/local-ocr.cjs#L1>) · Module · production · [Vault and stations](<../../../modules/vault.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- require — module-loader; [electron/local-ocr.cjs:1](<../../../../../electron/local-ocr.cjs#L1>)
- require — module-loader; [electron/local-ocr.cjs:2](<../../../../../electron/local-ocr.cjs#L2>)
- Map — external-or-dynamic-dispatch; [electron/local-ocr.cjs:3](<../../../../../electron/local-ocr.cjs#L3>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-be136e28f61960a0"></a>

## recognizeFile

[electron/local-ocr.cjs:5](<../../../../../electron/local-ocr.cjs#L5>) · FunctionDeclaration · production · [Vault and stations](<../../../modules/vault.md>)

Runs the existing offline Windows OCR process for a literal image path. Optional abort signal cancels its child process; failures reject with readable diagnostics.

Purpose evidence: jsdoc.

Exported as: recognizeFile ([electron/local-ocr.cjs:1](<../../../../../electron/local-ocr.cjs#L1>)).

Lexical owner: [electron/local-ocr.cjs](<local-ocr.cjs.md#s-8cdb75c83b46d2cf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |
| { signal } | {} | compiler-inferred | optional, default present |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [recognizePdfPages](<domains/universe/vault-service.cjs.md#s-b56a1bb119665f19>) — [electron/domains/universe/vault-service.cjs:180](<../../../../../electron/domains/universe/vault-service.cjs#L180>)
- [readVaultFile](<domains/universe/vault-service.cjs.md#s-9d052ebb9a7eb12e>) — [electron/domains/universe/vault-service.cjs:599](<../../../../../electron/domains/universe/vault-service.cjs#L599>)

Unresolved / external call sites: 9.

- Promise.reject — external-or-dynamic-dispatch; [electron/local-ocr.cjs:7](<../../../../../electron/local-ocr.cjs#L7>)
- Error — external-or-dynamic-dispatch; [electron/local-ocr.cjs:7](<../../../../../electron/local-ocr.cjs#L7>)
- Promise.reject — external-or-dynamic-dispatch; [electron/local-ocr.cjs:9](<../../../../../electron/local-ocr.cjs#L9>)
- Error — external-or-dynamic-dispatch; [electron/local-ocr.cjs:10](<../../../../../electron/local-ocr.cjs#L10>)
- jobs.has — external-or-dynamic-dispatch; [electron/local-ocr.cjs:13](<../../../../../electron/local-ocr.cjs#L13>)
- jobs.get — external-or-dynamic-dispatch; [electron/local-ocr.cjs:13](<../../../../../electron/local-ocr.cjs#L13>)
- new Promise((resolve, reject) =&gt; { const command = path.join( process.env.SystemRoot &#124;&#124; "C:\\\\Windows", "System32", "WindowsPowerShell", "v1.0", "powershell.exe", ); const scriptPat — external-or-dynamic-dispatch; [electron/local-ocr.cjs:14](<../../../../../electron/local-ocr.cjs#L14>)
- Promise — external-or-dynamic-dispatch; [electron/local-ocr.cjs:14](<../../../../../electron/local-ocr.cjs#L14>)
- 1 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-93812b9a9a93f5ce"></a>

## recognizeFile.&lt;anonymous@14:31&gt;

[electron/local-ocr.cjs:14](<../../../../../electron/local-ocr.cjs#L14>) · ArrowFunction · production · [Vault and stations](<../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [recognizeFile](<local-ocr.cjs.md#s-be136e28f61960a0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| resolve | any | compiler-inferred | required |
| reject | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- path.join — external-or-dynamic-dispatch; [electron/local-ocr.cjs:15](<../../../../../electron/local-ocr.cjs#L15>)
- path .join(__dirname, "windows-ocr.ps1") .replace — external-or-dynamic-dispatch; [electron/local-ocr.cjs:22](<../../../../../electron/local-ocr.cjs#L22>)
- path .join — external-or-dynamic-dispatch; [electron/local-ocr.cjs:22](<../../../../../electron/local-ocr.cjs#L22>)
- execFile — external-or-dynamic-dispatch; [electron/local-ocr.cjs:25](<../../../../../electron/local-ocr.cjs#L25>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-73eb1f6cdf0887a6"></a>

## recognizeFile.&lt;anonymous@14:31&gt;.&lt;anonymous@44:7&gt;

[electron/local-ocr.cjs:44](<../../../../../electron/local-ocr.cjs#L44>) · ArrowFunction · production · [Vault and stations](<../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [recognizeFile.&lt;anonymous@14:31&gt;](<local-ocr.cjs.md#s-93812b9a9a93f5ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |
| stdout | any | compiler-inferred | required |
| stderr | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 13.

- reject — external-or-dynamic-dispatch; [electron/local-ocr.cjs:46](<../../../../../electron/local-ocr.cjs#L46>)
- Error — external-or-dynamic-dispatch; [electron/local-ocr.cjs:47](<../../../../../electron/local-ocr.cjs#L47>)
- /No Windows OCR/.test — external-or-dynamic-dispatch; [electron/local-ocr.cjs:52](<../../../../../electron/local-ocr.cjs#L52>)
- /100 megapixel/.test — external-or-dynamic-dispatch; [electron/local-ocr.cjs:54](<../../../../../electron/local-ocr.cjs#L54>)
- JSON.parse — external-or-dynamic-dispatch; [electron/local-ocr.cjs:60](<../../../../../electron/local-ocr.cjs#L60>)
- stdout.replace(/^\\uFEFF/, "").trim — external-or-dynamic-dispatch; [electron/local-ocr.cjs:60](<../../../../../electron/local-ocr.cjs#L60>)
- stdout.replace — external-or-dynamic-dispatch; [electron/local-ocr.cjs:60](<../../../../../electron/local-ocr.cjs#L60>)
- Array.isArray — external-or-dynamic-dispatch; [electron/local-ocr.cjs:62](<../../../../../electron/local-ocr.cjs#L62>)
- 5 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-70dbf1740b7d83e4"></a>

## recognizeFile.&lt;anonymous@14:31&gt;.&lt;anonymous@44:7&gt;.&lt;anonymous@64:15&gt;

[electron/local-ocr.cjs:64](<../../../../../electron/local-ocr.cjs#L64>) · ArrowFunction · production · [Vault and stations](<../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [recognizeFile.&lt;anonymous@14:31&gt;.&lt;anonymous@44:7&gt;](<local-ocr.cjs.md#s-73eb1f6cdf0887a6>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| p | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- Number.isInteger — external-or-dynamic-dispatch; [electron/local-ocr.cjs:64](<../../../../../electron/local-ocr.cjs#L64>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5aa4bc25a98921dd"></a>

## recognizeFile.&lt;anonymous@74:14&gt;

[electron/local-ocr.cjs:74](<../../../../../electron/local-ocr.cjs#L74>) · ArrowFunction · production · [Vault and stations](<../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [recognizeFile](<local-ocr.cjs.md#s-be136e28f61960a0>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- jobs.delete — external-or-dynamic-dispatch; [electron/local-ocr.cjs:74](<../../../../../electron/local-ocr.cjs#L74>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
