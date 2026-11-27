# scripts/fixtures/assigned-yahoo-package.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/fixtures/assigned-yahoo-package.cjs:1](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/fixtures/assigned-yahoo-package.cjs](<assigned-yahoo-package.cjs.md#s-a2d9a18d717f9699>) (Module)
- [linkMockYahoo](<assigned-yahoo-package.cjs.md#s-1c33c078b3b94add>) (FunctionDeclaration)

<a id="s-a2d9a18d717f9699"></a>

## scripts/fixtures/assigned-yahoo-package.cjs

[scripts/fixtures/assigned-yahoo-package.cjs:1](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 4.

- require — module-loader; [scripts/fixtures/assigned-yahoo-package.cjs:1](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L1>)
- require — module-loader; [scripts/fixtures/assigned-yahoo-package.cjs:2](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L2>)
- require — module-loader; [scripts/fixtures/assigned-yahoo-package.cjs:5](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L5>)
- require — module-loader; [scripts/fixtures/assigned-yahoo-package.cjs:6](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L6>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:106](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L106>) — file-import-only; coverage not established.

<a id="s-1c33c078b3b94add"></a>

## linkMockYahoo

[scripts/fixtures/assigned-yahoo-package.cjs:8](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L8>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Gives disposable Agent tests a real digest/link. Their existing provider mocks own execution.

Purpose evidence: jsdoc.

Exported as: linkMockYahoo ([scripts/fixtures/assigned-yahoo-package.cjs:1](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L1>)).

Lexical owner: [scripts/fixtures/assigned-yahoo-package.cjs](<assigned-yahoo-package.cjs.md#s-a2d9a18d717f9699>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| entityId | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EnginePackageRegistry.constructor](<../../electron/engines/registry/registry.cjs.md#s-0e6ad7bd522e9fad>) — [scripts/fixtures/assigned-yahoo-package.cjs:9](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L9>)
- [EnginePackageRegistry.read](<../../electron/engines/registry/registry.cjs.md#s-abffabd42b530015>) — [scripts/fixtures/assigned-yahoo-package.cjs:11](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L11>)
- [sealPackage](<../../electron/engines/registry/package.cjs.md#s-d9c25ce14dcf2863>) — [scripts/fixtures/assigned-yahoo-package.cjs:26](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L26>)
- [EnginePackageRegistry.install](<../../electron/engines/registry/registry.cjs.md#s-b97b1298e6d6e88c>) — [scripts/fixtures/assigned-yahoo-package.cjs:27](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L27>)
- [EnginePackageRegistry.trust](<../../electron/engines/registry/registry.cjs.md#s-c4a76488a257429f>) — [scripts/fixtures/assigned-yahoo-package.cjs:28](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L28>)
- [EnginePackageRegistry.link](<../../electron/engines/registry/registry.cjs.md#s-4a5a96d46040ffbd>) — [scripts/fixtures/assigned-yahoo-package.cjs:30](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L30>)

**Called by (statically resolved):**

- [fixture](<../../electron/ai/agents/entity-agents.test.cjs.md#s-9ad48d6b7854c1ed>) — [electron/ai/agents/entity-agents.test.cjs:106](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L106>)

Unresolved / external call sites: 8.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/fixtures/assigned-yahoo-package.cjs:12](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L12>)
- path.join — external-or-dynamic-dispatch; [scripts/fixtures/assigned-yahoo-package.cjs:13](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L13>)
- path.dirname — external-or-dynamic-dispatch; [scripts/fixtures/assigned-yahoo-package.cjs:13](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L13>)
- fs.copyFile — external-or-dynamic-dispatch; [scripts/fixtures/assigned-yahoo-package.cjs:15](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L15>)
- path.join — external-or-dynamic-dispatch; [scripts/fixtures/assigned-yahoo-package.cjs:16](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L16>)
- path.join — external-or-dynamic-dispatch; [scripts/fixtures/assigned-yahoo-package.cjs:20](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L20>)
- fs.writeFile — external-or-dynamic-dispatch; [scripts/fixtures/assigned-yahoo-package.cjs:22](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L22>)
- path.join — external-or-dynamic-dispatch; [scripts/fixtures/assigned-yahoo-package.cjs:23](<../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L23>)

**Related tests / acceptance harnesses:**

- [electron/ai/agents/entity-agents.test.cjs:106](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L106>) — static-call-site; coverage not established.
- [electron/ai/agents/entity-agents.test.cjs:106](<../../../../../../electron/ai/agents/entity-agents.test.cjs#L106>) — file-import-only; coverage not established.
