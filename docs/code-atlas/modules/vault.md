# Vault and stations

[Atlas](<../README.md>) / [All symbols and callers/callees](<../symbols/vault.md>)

Owns controlled file access, Vault settings, stations, source bindings and OCR adapters.

Owns: Vault/station/OCR services under electron/. This ownership is editorial; source locations and import edges below are generated facts.

11 source files; 274 callable declarations; 1 contract declarations.

## Entry points and exported symbols

Candidates from compiler export tables and methods on exported classes. Registration, availability, authorization and runtime reachability must be checked separately.

| Symbol | Source | Kind |
| --- | --- | --- |
| [isMemoryPath](<../symbols/files/electron/agent-memory-source.cjs.md#s-e1cf95cc204c7e92>) | [electron/agent-memory-source.cjs:5](<../../../electron/agent-memory-source.cjs#L5>) | FunctionDeclaration |
| [memoryEntry](<../symbols/files/electron/agent-memory-source.cjs.md#s-e6fa767eba9e5364>) | [electron/agent-memory-source.cjs:19](<../../../electron/agent-memory-source.cjs#L19>) | FunctionDeclaration |
| [listMemoryFiles](<../symbols/files/electron/agent-memory-source.cjs.md#s-41b6f35aa9c9f9f9>) | [electron/agent-memory-source.cjs:47](<../../../electron/agent-memory-source.cjs#L47>) | FunctionDeclaration |
| [normalizeName](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-9ed7dfe6ea5686fe>) | [electron/domains/universe/station-service.cjs:58](<../../../electron/domains/universe/station-service.cjs#L58>) | FunctionDeclaration |
| [getStationState](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-20f799fba0e708b2>) | [electron/domains/universe/station-service.cjs:197](<../../../electron/domains/universe/station-service.cjs#L197>) | FunctionDeclaration |
| [createStation](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-18fcc5a11469c860>) | [electron/domains/universe/station-service.cjs:242](<../../../electron/domains/universe/station-service.cjs#L242>) | FunctionDeclaration |
| [renameStation](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-6831d5ac741e96fd>) | [electron/domains/universe/station-service.cjs:256](<../../../electron/domains/universe/station-service.cjs#L256>) | FunctionDeclaration |
| [deleteStation](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-94bd504d7abffd42>) | [electron/domains/universe/station-service.cjs:271](<../../../electron/domains/universe/station-service.cjs#L271>) | FunctionDeclaration |
| [setAssignments](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-8566cde75c8e8816>) | [electron/domains/universe/station-service.cjs:301](<../../../electron/domains/universe/station-service.cjs#L301>) | FunctionDeclaration |
| [previewBoxSelection](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-9e04aaf6fcb2ac7e>) | [electron/domains/universe/station-service.cjs:340](<../../../electron/domains/universe/station-service.cjs#L340>) | FunctionDeclaration |
| [inspectBoxSources](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-c14efa654fb7576e>) | [electron/domains/universe/station-service.cjs:371](<../../../electron/domains/universe/station-service.cjs#L371>) | FunctionDeclaration |
| [previewContext](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-d12d2c8276f5d665>) | [electron/domains/universe/station-service.cjs:402](<../../../electron/domains/universe/station-service.cjs#L402>) | FunctionDeclaration |
| [addContext](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-8078b0ccaa1169b3>) | [electron/domains/universe/station-service.cjs:420](<../../../electron/domains/universe/station-service.cjs#L420>) | FunctionDeclaration |
| [removeContext](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-5a88ddeda96a5945>) | [electron/domains/universe/station-service.cjs:435](<../../../electron/domains/universe/station-service.cjs#L435>) | FunctionDeclaration |
| [clearContext](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-512789ba8c0937f1>) | [electron/domains/universe/station-service.cjs:443](<../../../electron/domains/universe/station-service.cjs#L443>) | FunctionDeclaration |
| [approveChatSource](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-472001760b36f952>) | [electron/domains/universe/station-service.cjs:450](<../../../electron/domains/universe/station-service.cjs#L450>) | FunctionDeclaration |
| [refreshChatSource](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-9bc1363ab982f9eb>) | [electron/domains/universe/station-service.cjs:483](<../../../electron/domains/universe/station-service.cjs#L483>) | FunctionDeclaration |
| [buildContextPackage](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-a5fd419cec67aa9e>) | [electron/domains/universe/station-service.cjs:495](<../../../electron/domains/universe/station-service.cjs#L495>) | FunctionDeclaration |
| [prepareBrainScope](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-e4cff95cf847ee92>) | [electron/domains/universe/station-service.cjs:697](<../../../electron/domains/universe/station-service.cjs#L697>) | FunctionDeclaration |
| [readBrainSource](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-b62c400d5ba597c7>) | [electron/domains/universe/station-service.cjs:904](<../../../electron/domains/universe/station-service.cjs#L904>) | FunctionDeclaration |
| [suggestReattachments](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-1a29d8ab058ae410>) | [electron/domains/universe/station-service.cjs:983](<../../../electron/domains/universe/station-service.cjs#L983>) | FunctionDeclaration |
| [reattach](<../symbols/files/electron/domains/universe/station-service.cjs.md#s-99e59c9ef5c1b5f8>) | [electron/domains/universe/station-service.cjs:1007](<../../../electron/domains/universe/station-service.cjs#L1007>) | FunctionDeclaration |
| [MAX_PDF_BYTES](<../symbols/files/electron/domains/universe/vault-service.cjs.md#s-bcb62e57f8ddadc3>) | [electron/domains/universe/vault-service.cjs:53](<../../../electron/domains/universe/vault-service.cjs#L53>) | VariableDeclaration |
| [getVaultSnapshot](<../symbols/files/electron/domains/universe/vault-service.cjs.md#s-60cd18784dff7ee6>) | [electron/domains/universe/vault-service.cjs:62](<../../../electron/domains/universe/vault-service.cjs#L62>) | FunctionDeclaration |
| [readIndexedPdfText](<../symbols/files/electron/domains/universe/vault-service.cjs.md#s-af94c3891425ab49>) | [electron/domains/universe/vault-service.cjs:72](<../../../electron/domains/universe/vault-service.cjs#L72>) | FunctionDeclaration |
| [scanVault](<../symbols/files/electron/domains/universe/vault-service.cjs.md#s-ad799bd82bfa8317>) | [electron/domains/universe/vault-service.cjs:473](<../../../electron/domains/universe/vault-service.cjs#L473>) | FunctionDeclaration |
| [resolveVaultFile](<../symbols/files/electron/domains/universe/vault-service.cjs.md#s-33166077e274dba1>) | [electron/domains/universe/vault-service.cjs:553](<../../../electron/domains/universe/vault-service.cjs#L553>) | FunctionDeclaration |
| [readVaultFile](<../symbols/files/electron/domains/universe/vault-service.cjs.md#s-9d052ebb9a7eb12e>) | [electron/domains/universe/vault-service.cjs:582](<../../../electron/domains/universe/vault-service.cjs#L582>) | FunctionDeclaration |
| [saveMarkdownFile](<../symbols/files/electron/domains/universe/vault-service.cjs.md#s-cd52a2c411cf82b4>) | [electron/domains/universe/vault-service.cjs:642](<../../../electron/domains/universe/vault-service.cjs#L642>) | FunctionDeclaration |
| [readPdfFile](<../symbols/files/electron/domains/universe/vault-service.cjs.md#s-c7c9c0d4ce6d660a>) | [electron/domains/universe/vault-service.cjs:716](<../../../electron/domains/universe/vault-service.cjs#L716>) | FunctionDeclaration |
| [searchPdfText](<../symbols/files/electron/domains/universe/vault-service.cjs.md#s-07da9c56591cfd22>) | [electron/domains/universe/vault-service.cjs:761](<../../../electron/domains/universe/vault-service.cjs#L761>) | FunctionDeclaration |
| [getIndexedPdfText](<../symbols/files/electron/domains/universe/vault-service.cjs.md#s-c4600a9a0b9e04ff>) | [electron/domains/universe/vault-service.cjs:786](<../../../electron/domains/universe/vault-service.cjs#L786>) | FunctionDeclaration |
| [statVaultSource](<../symbols/files/electron/domains/universe/vault-service.cjs.md#s-11f97228db17e5f8>) | [electron/domains/universe/vault-service.cjs:793](<../../../electron/domains/universe/vault-service.cjs#L793>) | FunctionDeclaration |
| [listVaultMetadata](<../symbols/files/electron/domains/universe/vault-service.cjs.md#s-2d9f46608e712f74>) | [electron/domains/universe/vault-service.cjs:852](<../../../electron/domains/universe/vault-service.cjs#L852>) | FunctionDeclaration |
| [readVaultPreview](<../symbols/files/electron/domains/universe/vault-service.cjs.md#s-729160f41f814b5f>) | [electron/domains/universe/vault-service.cjs:938](<../../../electron/domains/universe/vault-service.cjs#L938>) | FunctionDeclaration |
| [initializeVault](<../symbols/files/electron/domains/universe/vault-settings.cjs.md#s-50d69121ed2233a7>) | [electron/domains/universe/vault-settings.cjs:17](<../../../electron/domains/universe/vault-settings.cjs#L17>) | FunctionDeclaration |
| [saveVault](<../symbols/files/electron/domains/universe/vault-settings.cjs.md#s-52abb0192c9554e9>) | [electron/domains/universe/vault-settings.cjs:33](<../../../electron/domains/universe/vault-settings.cjs#L33>) | FunctionDeclaration |
| [recognizeFile](<../symbols/files/electron/local-ocr.cjs.md#s-be136e28f61960a0>) | [electron/local-ocr.cjs:5](<../../../electron/local-ocr.cjs#L5>) | FunctionDeclaration |
| [&lt;script&gt;](<../symbols/files/electron/windows-ocr.ps1.md#s-343fc673016ab91c>) | [electron/windows-ocr.ps1:1](<../../../electron/windows-ocr.ps1#L1>) | PowerShellScript |

## Depends on

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Electron composition and IPC security](<desktop.md>): 1 import sites; example [electron/domains/universe/station-service.cjs:14](<../../../electron/domains/universe/station-service.cjs#L14>).
- [Shared deterministic infrastructure](<shared.md>): 2 import sites; example [electron/domains/universe/vault-settings.cjs:7](<../../../electron/domains/universe/vault-settings.cjs#L7>).

## Depended on by

Literal runtime production-file imports only; lazy imports are included. Type, test, tool and external dependencies remain available in the full index.

- [Retained AI runtime](<ai-runtime.md>): 2 import sites; example [electron/ai/chat/chat-service.cjs:4](<../../../electron/ai/chat/chat-service.cjs#L4>).
- [Electron composition and IPC security](<desktop.md>): 3 import sites; example [electron/main.cjs:17](<../../../electron/main.cjs#L17>).
- [Built-in Engines and data adapters](<engines.md>): 3 import sites; example [electron/excel-service.cjs:4](<../../../electron/excel-service.cjs#L4>).
- [Entity domain](<entity-domain.md>): 1 import sites; example [electron/domains/entity/worldview-store.cjs:10](<../../../electron/domains/entity/worldview-store.cjs#L10>).
- [Backend Identity Engine](<identity.md>): 1 import sites; example [electron/engines/backend-identity/identity-compiler.cjs:13](<../../../electron/engines/backend-identity/identity-compiler.cjs#L13>).
- [Knowledge indexing and source access](<knowledge.md>): 1 import sites; example [electron/domains/knowledge/knowledge-store.cjs:8](<../../../electron/domains/knowledge/knowledge-store.cjs#L8>).
- [WorldView desktop IPC](<worldview.md>): 1 import sites; example [electron/core/ipc/worldview-ipc.cjs:13](<../../../electron/core/ipc/worldview-ipc.cjs#L13>).

## Contracts

- [schema](<../symbols/files/electron/domains/universe/vault-settings.cjs.md#s-b7629a374ead0bc3>) — zod-syntax-candidate; local schema/type.

## Source inventory

| File | Role | Declarations |
| --- | --- | --- |
| [electron/agent-memory-binding.test.cjs:1](<../../../electron/agent-memory-binding.test.cjs#L1>) | test | 15 |
| [electron/agent-memory-source.cjs:1](<../../../electron/agent-memory-source.cjs#L1>) | production | 5 |
| [electron/document-ocr.test.cjs:1](<../../../electron/document-ocr.test.cjs#L1>) | test | 5 |
| [electron/domains/universe/station-service.cjs:1](<../../../electron/domains/universe/station-service.cjs#L1>) | production | 97 |
| [electron/domains/universe/station-service.test.cjs:1](<../../../electron/domains/universe/station-service.test.cjs#L1>) | test | 42 |
| [electron/domains/universe/vault-service.cjs:1](<../../../electron/domains/universe/vault-service.cjs#L1>) | production | 55 |
| [electron/domains/universe/vault-service.test.cjs:1](<../../../electron/domains/universe/vault-service.test.cjs#L1>) | test | 40 |
| [electron/domains/universe/vault-settings.cjs:1](<../../../electron/domains/universe/vault-settings.cjs#L1>) | production | 5 |
| [electron/domains/universe/vault-settings.test.cjs:1](<../../../electron/domains/universe/vault-settings.test.cjs#L1>) | test | 4 |
| [electron/local-ocr.cjs:1](<../../../electron/local-ocr.cjs#L1>) | production | 5 |
| [electron/windows-ocr.ps1:1](<../../../electron/windows-ocr.ps1#L1>) | production | 3 |
