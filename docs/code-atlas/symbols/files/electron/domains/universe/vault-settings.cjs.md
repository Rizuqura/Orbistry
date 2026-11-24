# electron/domains/universe/vault-settings.cjs: symbols

[Atlas](<../../../../../README.md>) / [Vault and stations](<../../../../../modules/vault.md>) / [electron/domains/universe/vault-settings.cjs:1](<../../../../../../../electron/domains/universe/vault-settings.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/domains/universe/vault-settings.cjs](<vault-settings.cjs.md#s-604fac0e2eff2149>) (Module)
- [schema](<vault-settings.cjs.md#s-b7629a374ead0bc3>) (SchemaBinding)
- [file](<vault-settings.cjs.md#s-ca054d2f5cb18450>) (ArrowFunction)
- [initializeVault](<vault-settings.cjs.md#s-50d69121ed2233a7>) (FunctionDeclaration)
- [initializeVault.&lt;anonymous@21:5&gt;](<vault-settings.cjs.md#s-0b5f326b217193eb>) (ArrowFunction)
- [saveVault](<vault-settings.cjs.md#s-52abb0192c9554e9>) (FunctionDeclaration)

<a id="s-604fac0e2eff2149"></a>

## electron/domains/universe/vault-settings.cjs

[electron/domains/universe/vault-settings.cjs:1](<../../../../../../../electron/domains/universe/vault-settings.cjs#L1>) · Module · production · [Vault and stations](<../../../../../modules/vault.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- require — module-loader; [electron/domains/universe/vault-settings.cjs:1](<../../../../../../../electron/domains/universe/vault-settings.cjs#L1>)
- require — module-loader; [electron/domains/universe/vault-settings.cjs:2](<../../../../../../../electron/domains/universe/vault-settings.cjs#L2>)
- require — module-loader; [electron/domains/universe/vault-settings.cjs:3](<../../../../../../../electron/domains/universe/vault-settings.cjs#L3>)
- require — module-loader; [electron/domains/universe/vault-settings.cjs:7](<../../../../../../../electron/domains/universe/vault-settings.cjs#L7>)
- require — module-loader; [electron/domains/universe/vault-settings.cjs:8](<../../../../../../../electron/domains/universe/vault-settings.cjs#L8>)
- require — module-loader; [electron/domains/universe/vault-settings.cjs:9](<../../../../../../../electron/domains/universe/vault-settings.cjs#L9>)

**Related tests / acceptance harnesses:**

- [electron/domains/universe/vault-settings.test.cjs:6](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-b7629a374ead0bc3"></a>

## schema

[electron/domains/universe/vault-settings.cjs:10](<../../../../../../../electron/domains/universe/vault-settings.cjs#L10>) · SchemaBinding · production · [Vault and stations](<../../../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/domains/universe/vault-settings.cjs](<vault-settings.cjs.md#s-604fac0e2eff2149>).

Contract evidence: zod-syntax-candidate. [Full declaration index](<../../../../../contracts/contract-index.json>).

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 6.

- z .object({ schemaVersion: z.literal(1), vaultPath: z.string().min(1).max(32768), }) .strict — external-or-dynamic-dispatch; [electron/domains/universe/vault-settings.cjs:10](<../../../../../../../electron/domains/universe/vault-settings.cjs#L10>)
- z .object — external-or-dynamic-dispatch; [electron/domains/universe/vault-settings.cjs:10](<../../../../../../../electron/domains/universe/vault-settings.cjs#L10>)
- z.literal — external-or-dynamic-dispatch; [electron/domains/universe/vault-settings.cjs:12](<../../../../../../../electron/domains/universe/vault-settings.cjs#L12>)
- z.string().min(1).max — external-or-dynamic-dispatch; [electron/domains/universe/vault-settings.cjs:13](<../../../../../../../electron/domains/universe/vault-settings.cjs#L13>)
- z.string().min — external-or-dynamic-dispatch; [electron/domains/universe/vault-settings.cjs:13](<../../../../../../../electron/domains/universe/vault-settings.cjs#L13>)
- z.string — external-or-dynamic-dispatch; [electron/domains/universe/vault-settings.cjs:13](<../../../../../../../electron/domains/universe/vault-settings.cjs#L13>)

**Related tests / acceptance harnesses:**

- [electron/domains/universe/vault-settings.test.cjs:6](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-ca054d2f5cb18450"></a>

## file

[electron/domains/universe/vault-settings.cjs:16](<../../../../../../../electron/domains/universe/vault-settings.cjs#L16>) · ArrowFunction · production · [Vault and stations](<../../../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [electron/domains/universe/vault-settings.cjs](<vault-settings.cjs.md#s-604fac0e2eff2149>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [initializeVault](<vault-settings.cjs.md#s-50d69121ed2233a7>) — [electron/domains/universe/vault-settings.cjs:20](<../../../../../../../electron/domains/universe/vault-settings.cjs#L20>)
- [saveVault](<vault-settings.cjs.md#s-52abb0192c9554e9>) — [electron/domains/universe/vault-settings.cjs:38](<../../../../../../../electron/domains/universe/vault-settings.cjs#L38>)

Unresolved / external call sites: 1.

- path.join — external-or-dynamic-dispatch; [electron/domains/universe/vault-settings.cjs:16](<../../../../../../../electron/domains/universe/vault-settings.cjs#L16>)

**Related tests / acceptance harnesses:**

- [electron/domains/universe/vault-settings.test.cjs:6](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-50d69121ed2233a7"></a>

## initializeVault

[electron/domains/universe/vault-settings.cjs:17](<../../../../../../../electron/domains/universe/vault-settings.cjs#L17>) · FunctionDeclaration · production · [Vault and stations](<../../../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: initializeVault ([electron/domains/universe/vault-settings.cjs:1](<../../../../../../../electron/domains/universe/vault-settings.cjs#L1>)).

Lexical owner: [electron/domains/universe/vault-settings.cjs](<vault-settings.cjs.md#s-604fac0e2eff2149>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |
| documents | any | compiler-inferred | required |
| override | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readJson](<../../core/persistence/json-store.cjs.md#s-7f9e3b493f3ab942>) — [electron/domains/universe/vault-settings.cjs:19](<../../../../../../../electron/domains/universe/vault-settings.cjs#L19>)
- [file](<vault-settings.cjs.md#s-ca054d2f5cb18450>) — [electron/domains/universe/vault-settings.cjs:20](<../../../../../../../electron/domains/universe/vault-settings.cjs#L20>)

**Called by (statically resolved):**

- [&lt;anonymous@7:65&gt;](<vault-settings.test.cjs.md#s-2dee2a5e3d193b3d>) — [electron/domains/universe/vault-settings.test.cjs:13](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L13>)
- [&lt;anonymous@15:114&gt;](<vault-settings.test.cjs.md#s-a7a2af81c4c035ce>) — [electron/domains/universe/vault-settings.test.cjs:22](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L22>)
- [&lt;anonymous@15:114&gt;](<vault-settings.test.cjs.md#s-a7a2af81c4c035ce>) — [electron/domains/universe/vault-settings.test.cjs:27](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L27>)
- [&lt;anonymous@15:114&gt;](<vault-settings.test.cjs.md#s-a7a2af81c4c035ce>) — [electron/domains/universe/vault-settings.test.cjs:28](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L28>)
- [&lt;anonymous@15:114&gt;](<vault-settings.test.cjs.md#s-a7a2af81c4c035ce>) — [electron/domains/universe/vault-settings.test.cjs:29](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L29>)
- [&lt;anonymous@163:22&gt;](<../../main.cjs.md#s-2232a6bfcb723f81>) — [electron/main.cjs:164](<../../../../../../../electron/main.cjs#L164>)

Unresolved / external call sites: 5.

- path.resolve — external-or-dynamic-dispatch; [electron/domains/universe/vault-settings.cjs:18](<../../../../../../../electron/domains/universe/vault-settings.cjs#L18>)
- path.join — external-or-dynamic-dispatch; [electron/domains/universe/vault-settings.cjs:26](<../../../../../../../electron/domains/universe/vault-settings.cjs#L26>)
- existsSync — external-or-dynamic-dispatch; [electron/domains/universe/vault-settings.cjs:27](<../../../../../../../electron/domains/universe/vault-settings.cjs#L27>)
- path.join — external-or-dynamic-dispatch; [electron/domains/universe/vault-settings.cjs:29](<../../../../../../../electron/domains/universe/vault-settings.cjs#L29>)
- fs.mkdir — external-or-dynamic-dispatch; [electron/domains/universe/vault-settings.cjs:30](<../../../../../../../electron/domains/universe/vault-settings.cjs#L30>)

**Related tests / acceptance harnesses:**

- [electron/domains/universe/vault-settings.test.cjs:13](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L13>) — static-call-site; coverage not established.
- [electron/domains/universe/vault-settings.test.cjs:22](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L22>) — static-call-site; coverage not established.
- [electron/domains/universe/vault-settings.test.cjs:27](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L27>) — static-call-site; coverage not established.
- [electron/domains/universe/vault-settings.test.cjs:28](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L28>) — static-call-site; coverage not established.
- [electron/domains/universe/vault-settings.test.cjs:29](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L29>) — static-call-site; coverage not established.
- [electron/domains/universe/vault-settings.test.cjs:6](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-0b5f326b217193eb"></a>

## initializeVault.&lt;anonymous@21:5&gt;

[electron/domains/universe/vault-settings.cjs:21](<../../../../../../../electron/domains/universe/vault-settings.cjs#L21>) · ArrowFunction · production · [Vault and stations](<../../../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [initializeVault](<vault-settings.cjs.md#s-50d69121ed2233a7>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| value | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/domains/universe/vault-settings.cjs:21](<../../../../../../../electron/domains/universe/vault-settings.cjs#L21>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/universe/vault-settings.test.cjs:6](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L6>) — file-import-only; coverage not established.

<a id="s-52abb0192c9554e9"></a>

## saveVault

[electron/domains/universe/vault-settings.cjs:33](<../../../../../../../electron/domains/universe/vault-settings.cjs#L33>) · FunctionDeclaration · production · [Vault and stations](<../../../../../modules/vault.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: saveVault ([electron/domains/universe/vault-settings.cjs:1](<../../../../../../../electron/domains/universe/vault-settings.cjs#L1>)).

Lexical owner: [electron/domains/universe/vault-settings.cjs](<vault-settings.cjs.md#s-604fac0e2eff2149>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |
| vaultPath | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parse](<../../shared/validation.cjs.md#s-f29367528a73f24d>) — [electron/domains/universe/vault-settings.cjs:34](<../../../../../../../electron/domains/universe/vault-settings.cjs#L34>)
- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/domains/universe/vault-settings.cjs:38](<../../../../../../../electron/domains/universe/vault-settings.cjs#L38>)
- [file](<vault-settings.cjs.md#s-ca054d2f5cb18450>) — [electron/domains/universe/vault-settings.cjs:38](<../../../../../../../electron/domains/universe/vault-settings.cjs#L38>)

**Called by (statically resolved):**

- [&lt;anonymous@15:114&gt;](<vault-settings.test.cjs.md#s-a7a2af81c4c035ce>) — [electron/domains/universe/vault-settings.test.cjs:26](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L26>)
- [selectVaultFolder.&lt;anonymous@73:38&gt;](<../../main.cjs.md#s-4f5604f3d640b0cc>) — [electron/main.cjs:75](<../../../../../../../electron/main.cjs#L75>)

Unresolved / external call sites: 1.

- path.resolve — external-or-dynamic-dispatch; [electron/domains/universe/vault-settings.cjs:36](<../../../../../../../electron/domains/universe/vault-settings.cjs#L36>)

**Related tests / acceptance harnesses:**

- [electron/domains/universe/vault-settings.test.cjs:26](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L26>) — static-call-site; coverage not established.
- [electron/domains/universe/vault-settings.test.cjs:6](<../../../../../../../electron/domains/universe/vault-settings.test.cjs#L6>) — file-import-only; coverage not established.
