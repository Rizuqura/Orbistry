# scripts/fixtures/chat-context-tools.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/fixtures/chat-context-tools.cjs:1](<../../../../../../scripts/fixtures/chat-context-tools.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/fixtures/chat-context-tools.cjs](<chat-context-tools.cjs.md#s-f2308f094f67bbd1>) (Module)
- [openContextTools](<chat-context-tools.cjs.md#s-e7640695526089a7>) (FunctionDeclaration)

<a id="s-f2308f094f67bbd1"></a>

## scripts/fixtures/chat-context-tools.cjs

[scripts/fixtures/chat-context-tools.cjs:1](<../../../../../../scripts/fixtures/chat-context-tools.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-chat-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-chat-smoke.cjs#L2>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-chat-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-online-chat-smoke.cjs#L2>) — file-import-only; coverage not established.
- [scripts/agent-electron-acceptance.cjs:2](<../../../../../../scripts/agent-electron-acceptance.cjs#L2>) — file-import-only; coverage not established.

<a id="s-e7640695526089a7"></a>

## openContextTools

[scripts/fixtures/chat-context-tools.cjs:2](<../../../../../../scripts/fixtures/chat-context-tools.cjs#L2>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Exported as: openContextTools ([scripts/fixtures/chat-context-tools.cjs:1](<../../../../../../scripts/fixtures/chat-context-tools.cjs#L1>)).

Lexical owner: [scripts/fixtures/chat-context-tools.cjs](<chat-context-tools.cjs.md#s-f2308f094f67bbd1>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| page | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main.createExplicit](<../acceptance/electron-chat-smoke.cjs.md#s-b4c8abc3d1bf8b43>) — [scripts/acceptance/electron-chat-smoke.cjs:141](<../../../../../../scripts/acceptance/electron-chat-smoke.cjs#L141>)
- [main](<../acceptance/electron-online-chat-smoke.cjs.md#s-a5b6e52cf8227a1a>) — [scripts/acceptance/electron-online-chat-smoke.cjs:101](<../../../../../../scripts/acceptance/electron-online-chat-smoke.cjs#L101>)
- [main](<../agent-electron-acceptance.cjs.md#s-1be80f27feb16f2f>) — [scripts/agent-electron-acceptance.cjs:694](<../../../../../../scripts/agent-electron-acceptance.cjs#L694>)
- [main](<../agent-electron-acceptance.cjs.md#s-1be80f27feb16f2f>) — [scripts/agent-electron-acceptance.cjs:862](<../../../../../../scripts/agent-electron-acceptance.cjs#L862>)
- [main](<../agent-electron-acceptance.cjs.md#s-1be80f27feb16f2f>) — [scripts/agent-electron-acceptance.cjs:925](<../../../../../../scripts/agent-electron-acceptance.cjs#L925>)
- [main](<../agent-electron-acceptance.cjs.md#s-1be80f27feb16f2f>) — [scripts/agent-electron-acceptance.cjs:961](<../../../../../../scripts/agent-electron-acceptance.cjs#L961>)
- [main](<../agent-electron-acceptance.cjs.md#s-1be80f27feb16f2f>) — [scripts/agent-electron-acceptance.cjs:1063](<../../../../../../scripts/agent-electron-acceptance.cjs#L1063>)
- [main](<../agent-electron-acceptance.cjs.md#s-1be80f27feb16f2f>) — [scripts/agent-electron-acceptance.cjs:1105](<../../../../../../scripts/agent-electron-acceptance.cjs#L1105>)

Unresolved / external call sites: 5.

- page.locator(".chat-panel .chat-context-tools").first — external-or-dynamic-dispatch; [scripts/fixtures/chat-context-tools.cjs:3](<../../../../../../scripts/fixtures/chat-context-tools.cjs#L3>)
- page.locator — external-or-dynamic-dispatch; [scripts/fixtures/chat-context-tools.cjs:3](<../../../../../../scripts/fixtures/chat-context-tools.cjs#L3>)
- details.getAttribute — external-or-dynamic-dispatch; [scripts/fixtures/chat-context-tools.cjs:4](<../../../../../../scripts/fixtures/chat-context-tools.cjs#L4>)
- details.locator("summary").click — external-or-dynamic-dispatch; [scripts/fixtures/chat-context-tools.cjs:5](<../../../../../../scripts/fixtures/chat-context-tools.cjs#L5>)
- details.locator — external-or-dynamic-dispatch; [scripts/fixtures/chat-context-tools.cjs:5](<../../../../../../scripts/fixtures/chat-context-tools.cjs#L5>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/electron-chat-smoke.cjs:141](<../../../../../../scripts/acceptance/electron-chat-smoke.cjs#L141>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-online-chat-smoke.cjs:101](<../../../../../../scripts/acceptance/electron-online-chat-smoke.cjs#L101>) — static-call-site; coverage not established.
- [scripts/agent-electron-acceptance.cjs:694](<../../../../../../scripts/agent-electron-acceptance.cjs#L694>) — static-call-site; coverage not established.
- [scripts/agent-electron-acceptance.cjs:862](<../../../../../../scripts/agent-electron-acceptance.cjs#L862>) — static-call-site; coverage not established.
- [scripts/agent-electron-acceptance.cjs:925](<../../../../../../scripts/agent-electron-acceptance.cjs#L925>) — static-call-site; coverage not established.
- [scripts/agent-electron-acceptance.cjs:961](<../../../../../../scripts/agent-electron-acceptance.cjs#L961>) — static-call-site; coverage not established.
- [scripts/agent-electron-acceptance.cjs:1063](<../../../../../../scripts/agent-electron-acceptance.cjs#L1063>) — static-call-site; coverage not established.
- [scripts/agent-electron-acceptance.cjs:1105](<../../../../../../scripts/agent-electron-acceptance.cjs#L1105>) — static-call-site; coverage not established.
- [scripts/acceptance/electron-chat-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-chat-smoke.cjs#L2>) — file-import-only; coverage not established.
- [scripts/acceptance/electron-online-chat-smoke.cjs:2](<../../../../../../scripts/acceptance/electron-online-chat-smoke.cjs#L2>) — file-import-only; coverage not established.
- [scripts/agent-electron-acceptance.cjs:2](<../../../../../../scripts/agent-electron-acceptance.cjs#L2>) — file-import-only; coverage not established.
