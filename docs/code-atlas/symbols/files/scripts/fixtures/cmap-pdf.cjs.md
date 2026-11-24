# scripts/fixtures/cmap-pdf.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/fixtures/cmap-pdf.cjs:1](<../../../../../../scripts/fixtures/cmap-pdf.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/fixtures/cmap-pdf.cjs](<cmap-pdf.cjs.md#s-bbb88b1057c32f9f>) (Module)
- [cmapPdf](<cmap-pdf.cjs.md#s-8d66225473a2ebb8>) (FunctionDeclaration)
- [cmapPdf.&lt;anonymous@23:10&gt;](<cmap-pdf.cjs.md#s-b3da00fddd97f1b9>) (ArrowFunction)

<a id="s-bbb88b1057c32f9f"></a>

## scripts/fixtures/cmap-pdf.cjs

[scripts/fixtures/cmap-pdf.cjs:1](<../../../../../../scripts/fixtures/cmap-pdf.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/domains/universe/vault-service.test.cjs:6](<../../../../../../electron/domains/universe/vault-service.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-chat-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-chat-smoke.cjs#L9>) — file-import-only; coverage not established.
- [scripts/agent-electron-acceptance.cjs:9](<../../../../../../scripts/agent-electron-acceptance.cjs#L9>) — file-import-only; coverage not established.

<a id="s-8d66225473a2ebb8"></a>

## cmapPdf

[scripts/fixtures/cmap-pdf.cjs:3](<../../../../../../scripts/fixtures/cmap-pdf.cjs#L3>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: cmapPdf ([scripts/fixtures/cmap-pdf.cjs:1](<../../../../../../scripts/fixtures/cmap-pdf.cjs#L1>)).

Lexical owner: [scripts/fixtures/cmap-pdf.cjs](<cmap-pdf.cjs.md#s-bbb88b1057c32f9f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [&lt;anonymous@358:82&gt;.&lt;anonymous@359:19&gt;](<../../electron/domains/universe/vault-service.test.cjs.md#s-590b12cd4f528cc1>) — [electron/domains/universe/vault-service.test.cjs:360](<../../../../../../electron/domains/universe/vault-service.test.cjs#L360>)
- [main](<../acceptance/electron-chat-smoke.cjs.md#s-326416153147ca9a>) — [scripts/acceptance/electron-chat-smoke.cjs:531](<../../../../../../scripts/acceptance/electron-chat-smoke.cjs#L531>)

Unresolved / external call sites: 8.

- Buffer.byteLength — external-or-dynamic-dispatch; [scripts/fixtures/cmap-pdf.cjs:10](<../../../../../../scripts/fixtures/cmap-pdf.cjs#L10>)
- bodies.entries — external-or-dynamic-dispatch; [scripts/fixtures/cmap-pdf.cjs:16](<../../../../../../scripts/fixtures/cmap-pdf.cjs#L16>)
- offsets.push — external-or-dynamic-dispatch; [scripts/fixtures/cmap-pdf.cjs:17](<../../../../../../scripts/fixtures/cmap-pdf.cjs#L17>)
- Buffer.byteLength — external-or-dynamic-dispatch; [scripts/fixtures/cmap-pdf.cjs:17](<../../../../../../scripts/fixtures/cmap-pdf.cjs#L17>)
- Buffer.byteLength — external-or-dynamic-dispatch; [scripts/fixtures/cmap-pdf.cjs:20](<../../../../../../scripts/fixtures/cmap-pdf.cjs#L20>)
- offsets .map((offset) =&gt; &#96;${String(offset).padStart(10, "0")} 00000 n \\n&#96;) .join — external-or-dynamic-dispatch; [scripts/fixtures/cmap-pdf.cjs:22](<../../../../../../scripts/fixtures/cmap-pdf.cjs#L22>)
- offsets .map — external-or-dynamic-dispatch; [scripts/fixtures/cmap-pdf.cjs:22](<../../../../../../scripts/fixtures/cmap-pdf.cjs#L22>)
- Buffer.from — external-or-dynamic-dispatch; [scripts/fixtures/cmap-pdf.cjs:26](<../../../../../../scripts/fixtures/cmap-pdf.cjs#L26>)

**Related tests / acceptance harnesses:**

- [electron/domains/universe/vault-service.test.cjs:360](<../../../../../../electron/domains/universe/vault-service.test.cjs#L360>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-chat-smoke.cjs:531](<../../../../../../scripts/acceptance/electron-chat-smoke.cjs#L531>) — static-call-site; coverage not established.
- [electron/domains/universe/vault-service.test.cjs:6](<../../../../../../electron/domains/universe/vault-service.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-chat-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-chat-smoke.cjs#L9>) — file-import-only; coverage not established.
- [scripts/agent-electron-acceptance.cjs:9](<../../../../../../scripts/agent-electron-acceptance.cjs#L9>) — file-import-only; coverage not established.

<a id="s-b3da00fddd97f1b9"></a>

## cmapPdf.&lt;anonymous@23:10&gt;

[scripts/fixtures/cmap-pdf.cjs:23](<../../../../../../scripts/fixtures/cmap-pdf.cjs#L23>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [cmapPdf](<cmap-pdf.cjs.md#s-8d66225473a2ebb8>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| offset | any | compiler-inferred | required |

Returns: string (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- String(offset).padStart — external-or-dynamic-dispatch; [scripts/fixtures/cmap-pdf.cjs:23](<../../../../../../scripts/fixtures/cmap-pdf.cjs#L23>)
- String — external-or-dynamic-dispatch; [scripts/fixtures/cmap-pdf.cjs:23](<../../../../../../scripts/fixtures/cmap-pdf.cjs#L23>)

**Related tests / acceptance harnesses:**

- [electron/domains/universe/vault-service.test.cjs:6](<../../../../../../electron/domains/universe/vault-service.test.cjs#L6>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-chat-smoke.cjs:9](<../../../../../../scripts/acceptance/electron-chat-smoke.cjs#L9>) — file-import-only; coverage not established.
- [scripts/agent-electron-acceptance.cjs:9](<../../../../../../scripts/agent-electron-acceptance.cjs#L9>) — file-import-only; coverage not established.
