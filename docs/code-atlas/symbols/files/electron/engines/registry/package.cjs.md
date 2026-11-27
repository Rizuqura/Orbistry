# electron/engines/registry/package.cjs: symbols

[Atlas](<../../../../../README.md>) / [Engine package registry](<../../../../../modules/engine-registry.md>) / [electron/engines/registry/package.cjs:1](<../../../../../../../electron/engines/registry/package.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [electron/engines/registry/package.cjs](<package.cjs.md#s-fcfce52288830f34>) (Module)
- [readBytes](<package.cjs.md#s-a5f5a53e124cf066>) (FunctionDeclaration)
- [parseJson](<package.cjs.md#s-fb6b0b1816d9018a>) (FunctionDeclaration)
- [filesIn](<package.cjs.md#s-7a153ed7a6996a97>) (FunctionDeclaration)
- [inspectPackage](<package.cjs.md#s-71ed017a00706142>) (FunctionDeclaration)
- [inspectPackage.&lt;anonymous@95:5&gt;](<package.cjs.md#s-4bf83071d3a730d0>) (ArrowFunction)
- [sealPackage](<package.cjs.md#s-d9c25ce14dcf2863>) (FunctionDeclaration)
- [sealPackage.&lt;anonymous@133:5&gt;](<package.cjs.md#s-aaf4ade163a7bcbf>) (ArrowFunction)

<a id="s-fcfce52288830f34"></a>

## electron/engines/registry/package.cjs

[electron/engines/registry/package.cjs:1](<../../../../../../../electron/engines/registry/package.cjs#L1>) · Module · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 5.

- require — module-loader; [electron/engines/registry/package.cjs:1](<../../../../../../../electron/engines/registry/package.cjs#L1>)
- require — module-loader; [electron/engines/registry/package.cjs:2](<../../../../../../../electron/engines/registry/package.cjs#L2>)
- require — module-loader; [electron/engines/registry/package.cjs:9](<../../../../../../../electron/engines/registry/package.cjs#L9>)
- require — module-loader; [electron/engines/registry/package.cjs:10](<../../../../../../../electron/engines/registry/package.cjs#L10>)
- require — module-loader; [electron/engines/registry/package.cjs:11](<../../../../../../../electron/engines/registry/package.cjs#L11>)

**Related tests / acceptance harnesses:**

- [electron/engine-packages.test.cjs:16](<../../../../../../../electron/engine-packages.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:15](<../../../../../../../electron/engine-signing.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-a5f5a53e124cf066"></a>

## readBytes

[electron/engines/registry/package.cjs:14](<../../../../../../../electron/engines/registry/package.cjs#L14>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Reads a regular, non-linked file within a fixed byte limit. Rejects path changes/oversized files before collecting bytes.

Purpose evidence: jsdoc.

Exported as: readBytes ([electron/engines/registry/package.cjs:1](<../../../../../../../electron/engines/registry/package.cjs#L1>)).

Lexical owner: [electron/engines/registry/package.cjs](<package.cjs.md#s-fcfce52288830f34>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| file | any | compiler-inferred | required |
| maximum | any | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/package.cjs:17](<../../../../../../../electron/engines/registry/package.cjs#L17>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/package.cjs:25](<../../../../../../../electron/engines/registry/package.cjs#L25>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/package.cjs:39](<../../../../../../../electron/engines/registry/package.cjs#L39>)

**Called by (statically resolved):**

- [inspectPackage](<package.cjs.md#s-71ed017a00706142>) — [electron/engines/registry/package.cjs:87](<../../../../../../../electron/engines/registry/package.cjs#L87>)
- [inspectPackage](<package.cjs.md#s-71ed017a00706142>) — [electron/engines/registry/package.cjs:107](<../../../../../../../electron/engines/registry/package.cjs#L107>)
- [sealPackage](<package.cjs.md#s-d9c25ce14dcf2863>) — [electron/engines/registry/package.cjs:129](<../../../../../../../electron/engines/registry/package.cjs#L129>)
- [sealPackage](<package.cjs.md#s-d9c25ce14dcf2863>) — [electron/engines/registry/package.cjs:135](<../../../../../../../electron/engines/registry/package.cjs#L135>)
- [EnginePackageRegistry.read](<registry.cjs.md#s-abffabd42b530015>) — [electron/engines/registry/registry.cjs:120](<../../../../../../../electron/engines/registry/registry.cjs#L120>)
- [EnginePackageRegistry.readResult](<registry.cjs.md#s-34db5a148ab121e2>) — [electron/engines/registry/registry.cjs:536](<../../../../../../../electron/engines/registry/registry.cjs#L536>)
- [EnginePackageRegistry.readResult](<registry.cjs.md#s-34db5a148ab121e2>) — [electron/engines/registry/registry.cjs:567](<../../../../../../../electron/engines/registry/registry.cjs#L567>)
- [signPackage](<signing.cjs.md#s-9317466d274715e3>) — [electron/engines/registry/signing.cjs:106](<../../../../../../../electron/engines/registry/signing.cjs#L106>)
- [verifyPackage](<signing.cjs.md#s-3b8c467c9b1420c7>) — [electron/engines/registry/signing.cjs:149](<../../../../../../../electron/engines/registry/signing.cjs#L149>)
- [main](<../../../scripts/orbistry-engine.cjs.md#s-74bbb93b9a0b7abf>) — [scripts/orbistry-engine.cjs:156](<../../../../../../../scripts/orbistry-engine.cjs#L156>)

Unresolved / external call sites: 11.

- fs.lstat — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:15](<../../../../../../../electron/engines/registry/package.cjs#L15>)
- stat.isFile — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:16](<../../../../../../../electron/engines/registry/package.cjs#L16>)
- stat.isSymbolicLink — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:16](<../../../../../../../electron/engines/registry/package.cjs#L16>)
- fs.open — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:21](<../../../../../../../electron/engines/registry/package.cjs#L21>)
- handle.stat — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:23](<../../../../../../../electron/engines/registry/package.cjs#L23>)
- Buffer.alloc — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:26](<../../../../../../../electron/engines/registry/package.cjs#L26>)
- Math.min — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:26](<../../../../../../../electron/engines/registry/package.cjs#L26>)
- handle.read — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:29](<../../../../../../../electron/engines/registry/package.cjs#L29>)
- 3 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/engine-packages.test.cjs:16](<../../../../../../../electron/engine-packages.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:15](<../../../../../../../electron/engine-signing.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-fb6b0b1816d9018a"></a>

## parseJson

[electron/engines/registry/package.cjs:47](<../../../../../../../electron/engines/registry/package.cjs#L47>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Parses bounded JSON without returning parser snippets in errors.

Purpose evidence: jsdoc.

Exported as: parseJson ([electron/engines/registry/package.cjs:1](<../../../../../../../electron/engines/registry/package.cjs#L1>)).

Lexical owner: [electron/engines/registry/package.cjs](<package.cjs.md#s-fcfce52288830f34>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| bytes | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/package.cjs:51](<../../../../../../../electron/engines/registry/package.cjs#L51>)

**Called by (statically resolved):**

- [pullPackage](<authoring.cjs.md#s-dd26bc55111fb682>) — [electron/engines/registry/authoring.cjs:118](<../../../../../../../electron/engines/registry/authoring.cjs#L118>)
- [inspectPackage](<package.cjs.md#s-71ed017a00706142>) — [electron/engines/registry/package.cjs:91](<../../../../../../../electron/engines/registry/package.cjs#L91>)
- [sealPackage](<package.cjs.md#s-d9c25ce14dcf2863>) — [electron/engines/registry/package.cjs:128](<../../../../../../../electron/engines/registry/package.cjs#L128>)
- [EnginePackageRegistry.read](<registry.cjs.md#s-abffabd42b530015>) — [electron/engines/registry/registry.cjs:120](<../../../../../../../electron/engines/registry/registry.cjs#L120>)
- [EnginePackageRegistry.executeTool](<registry.cjs.md#s-f025f9ee5da1f3ed>) — [electron/engines/registry/registry.cjs:518](<../../../../../../../electron/engines/registry/registry.cjs#L518>)
- [EnginePackageRegistry.readResult](<registry.cjs.md#s-34db5a148ab121e2>) — [electron/engines/registry/registry.cjs:535](<../../../../../../../electron/engines/registry/registry.cjs#L535>)
- [EnginePackageRegistry.readResult](<registry.cjs.md#s-34db5a148ab121e2>) — [electron/engines/registry/registry.cjs:566](<../../../../../../../electron/engines/registry/registry.cjs#L566>)
- [EnginePackageRegistry.execute](<registry.cjs.md#s-61267d4d373b62b8>) — [electron/engines/registry/registry.cjs:627](<../../../../../../../electron/engines/registry/registry.cjs#L627>)
- [signPackage](<signing.cjs.md#s-9317466d274715e3>) — [electron/engines/registry/signing.cjs:117](<../../../../../../../electron/engines/registry/signing.cjs#L117>)
- [verifyPackage](<signing.cjs.md#s-3b8c467c9b1420c7>) — [electron/engines/registry/signing.cjs:152](<../../../../../../../electron/engines/registry/signing.cjs#L152>)
- [runPackage.&lt;anonymous@12:22&gt;.&lt;anonymous@80:23&gt;](<../runtime/runner.cjs.md#s-1caa8432e824596f>) — [electron/engines/runtime/runner.cjs:93](<../../../../../../../electron/engines/runtime/runner.cjs#L93>)
- [main](<../runtime/worker.cjs.md#s-fb07682c5c8192d8>) — [electron/engines/runtime/worker.cjs:13](<../../../../../../../electron/engines/runtime/worker.cjs#L13>)
- [main](<../../../scripts/orbistry-engine.cjs.md#s-74bbb93b9a0b7abf>) — [scripts/orbistry-engine.cjs:155](<../../../../../../../scripts/orbistry-engine.cjs#L155>)

Unresolved / external call sites: 3.

- JSON.parse — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:49](<../../../../../../../electron/engines/registry/package.cjs#L49>)
- bytes.toString("utf8").replace — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:49](<../../../../../../../electron/engines/registry/package.cjs#L49>)
- bytes.toString — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:49](<../../../../../../../electron/engines/registry/package.cjs#L49>)

**Related tests / acceptance harnesses:**

- [electron/engine-packages.test.cjs:16](<../../../../../../../electron/engine-packages.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:15](<../../../../../../../electron/engine-signing.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-7a153ed7a6996a97"></a>

## filesIn

[electron/engines/registry/package.cjs:56](<../../../../../../../electron/engines/registry/package.cjs#L56>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Lists portable package files without following links. Bundled dependencies must fit the same bounded integrity inventory.

Purpose evidence: jsdoc.

Exported as: filesIn ([electron/engines/registry/package.cjs:1](<../../../../../../../electron/engines/registry/package.cjs#L1>)).

Lexical owner: [electron/engines/registry/package.cjs](<package.cjs.md#s-fcfce52288830f34>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| root | any | compiler-inferred | required |
| directory | any | compiler-inferred | optional, default present |
| output | {} | compiler-inferred | optional, default present |
| budget | { entries: number; } | compiler-inferred | optional, default present |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/package.cjs:63](<../../../../../../../electron/engines/registry/package.cjs#L63>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/package.cjs:66](<../../../../../../../electron/engines/registry/package.cjs#L66>)
- [filePath](<../contracts/contract.cjs.md#s-37950761339869ee>) — [electron/engines/registry/package.cjs:72](<../../../../../../../electron/engines/registry/package.cjs#L72>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/package.cjs:74](<../../../../../../../electron/engines/registry/package.cjs#L74>)
- [filesIn](<package.cjs.md#s-7a153ed7a6996a97>) — [electron/engines/registry/package.cjs:75](<../../../../../../../electron/engines/registry/package.cjs#L75>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/package.cjs:77](<../../../../../../../electron/engines/registry/package.cjs#L77>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/package.cjs:79](<../../../../../../../electron/engines/registry/package.cjs#L79>)

**Called by (statically resolved):**

- [filesIn](<package.cjs.md#s-7a153ed7a6996a97>) — [electron/engines/registry/package.cjs:75](<../../../../../../../electron/engines/registry/package.cjs#L75>)
- [inspectPackage](<package.cjs.md#s-71ed017a00706142>) — [electron/engines/registry/package.cjs:94](<../../../../../../../electron/engines/registry/package.cjs#L94>)
- [sealPackage](<package.cjs.md#s-d9c25ce14dcf2863>) — [electron/engines/registry/package.cjs:132](<../../../../../../../electron/engines/registry/package.cjs#L132>)

Unresolved / external call sites: 12.

- path.relative(root, directory).split — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:62](<../../../../../../../electron/engines/registry/package.cjs#L62>)
- path.relative — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:62](<../../../../../../../electron/engines/registry/package.cjs#L62>)
- fs.opendir — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:64](<../../../../../../../electron/engines/registry/package.cjs#L64>)
- path.join — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:70](<../../../../../../../electron/engines/registry/package.cjs#L70>)
- path.relative(root, absolute).split(path.sep).join — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:71](<../../../../../../../electron/engines/registry/package.cjs#L71>)
- path.relative(root, absolute).split — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:71](<../../../../../../../electron/engines/registry/package.cjs#L71>)
- path.relative — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:71](<../../../../../../../electron/engines/registry/package.cjs#L71>)
- entry.isSymbolicLink — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:73](<../../../../../../../electron/engines/registry/package.cjs#L73>)
- 4 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/engine-packages.test.cjs:16](<../../../../../../../electron/engine-packages.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:15](<../../../../../../../electron/engine-signing.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-71ed017a00706142"></a>

## inspectPackage

[electron/engines/registry/package.cjs:85](<../../../../../../../electron/engines/registry/package.cjs#L85>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Inspects checksums and any publisher signature without loading JavaScript. Every non-manifest file must be listed exactly; returns verified bytes and proof status without granting local trust.

Purpose evidence: jsdoc.

Exported as: inspectPackage ([electron/engines/registry/package.cjs:1](<../../../../../../../electron/engines/registry/package.cjs#L1>)).

Lexical owner: [electron/engines/registry/package.cjs](<package.cjs.md#s-fcfce52288830f34>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [readBytes](<package.cjs.md#s-a5f5a53e124cf066>) — [electron/engines/registry/package.cjs:87](<../../../../../../../electron/engines/registry/package.cjs#L87>)
- [parseJson](<package.cjs.md#s-fb6b0b1816d9018a>) — [electron/engines/registry/package.cjs:91](<../../../../../../../electron/engines/registry/package.cjs#L91>)
- [manifest](<../contracts/contract.cjs.md#s-419652773bdad136>) — [electron/engines/registry/package.cjs:92](<../../../../../../../electron/engines/registry/package.cjs#L92>)
- [verifySignature](<signature.cjs.md#s-9f88c255d4e362de>) — [electron/engines/registry/package.cjs:93](<../../../../../../../electron/engines/registry/package.cjs#L93>)
- [filesIn](<package.cjs.md#s-7a153ed7a6996a97>) — [electron/engines/registry/package.cjs:94](<../../../../../../../electron/engines/registry/package.cjs#L94>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/package.cjs:100](<../../../../../../../electron/engines/registry/package.cjs#L100>)
- [readBytes](<package.cjs.md#s-a5f5a53e124cf066>) — [electron/engines/registry/package.cjs:107](<../../../../../../../electron/engines/registry/package.cjs#L107>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/package.cjs:110](<../../../../../../../electron/engines/registry/package.cjs#L110>)
- [sha](<../contracts/contract.cjs.md#s-27c50df18ef30dc9>) — [electron/engines/registry/package.cjs:111](<../../../../../../../electron/engines/registry/package.cjs#L111>)
- [fail](<../contracts/contract.cjs.md#s-b26f7a166006912b>) — [electron/engines/registry/package.cjs:112](<../../../../../../../electron/engines/registry/package.cjs#L112>)
- [sha](<../contracts/contract.cjs.md#s-27c50df18ef30dc9>) — [electron/engines/registry/package.cjs:118](<../../../../../../../electron/engines/registry/package.cjs#L118>)

**Called by (statically resolved):**

- [&lt;anonymous@274:113&gt;](<../../engine-packages.test.cjs.md#s-108502b67a7be5e5>) — [electron/engine-packages.test.cjs:276](<../../../../../../../electron/engine-packages.test.cjs#L276>)
- [&lt;anonymous@366:76&gt;](<../../engine-packages.test.cjs.md#s-9757c9e216f744fe>) — [electron/engine-packages.test.cjs:382](<../../../../../../../electron/engine-packages.test.cjs#L382>)
- [&lt;anonymous@387:73&gt;](<../../engine-packages.test.cjs.md#s-22e914933f749df3>) — [electron/engine-packages.test.cjs:389](<../../../../../../../electron/engine-packages.test.cjs#L389>)
- [&lt;anonymous@459:97&gt;.authorize](<../../engine-packages.test.cjs.md#s-8841dca5314a0d76>) — [electron/engine-packages.test.cjs:492](<../../../../../../../electron/engine-packages.test.cjs#L492>)
- [&lt;anonymous@574:106&gt;](<../../engine-packages.test.cjs.md#s-dd8dd447d9bb9292>) — [electron/engine-packages.test.cjs:576](<../../../../../../../electron/engine-packages.test.cjs#L576>)
- [&lt;anonymous@100:109&gt;](<../../engine-signing.test.cjs.md#s-6bb332f41f761ed8>) — [electron/engine-signing.test.cjs:111](<../../../../../../../electron/engine-signing.test.cjs#L111>)
- [&lt;anonymous@100:109&gt;](<../../engine-signing.test.cjs.md#s-6bb332f41f761ed8>) — [electron/engine-signing.test.cjs:125](<../../../../../../../electron/engine-signing.test.cjs#L125>)
- [&lt;anonymous@100:109&gt;](<../../engine-signing.test.cjs.md#s-6bb332f41f761ed8>) — [electron/engine-signing.test.cjs:138](<../../../../../../../electron/engine-signing.test.cjs#L138>)
- [&lt;anonymous@100:109&gt;](<../../engine-signing.test.cjs.md#s-6bb332f41f761ed8>) — [electron/engine-signing.test.cjs:143](<../../../../../../../electron/engine-signing.test.cjs#L143>)
- [&lt;anonymous@100:109&gt;](<../../engine-signing.test.cjs.md#s-6bb332f41f761ed8>) — [electron/engine-signing.test.cjs:157](<../../../../../../../electron/engine-signing.test.cjs#L157>)
- [&lt;anonymous@194:103&gt;](<../../engine-signing.test.cjs.md#s-41839bdef2512cfd>) — [electron/engine-signing.test.cjs:212](<../../../../../../../electron/engine-signing.test.cjs#L212>)
- [pullPackage](<authoring.cjs.md#s-dd26bc55111fb682>) — [electron/engines/registry/authoring.cjs:155](<../../../../../../../electron/engines/registry/authoring.cjs#L155>)
- [sealPackage](<package.cjs.md#s-d9c25ce14dcf2863>) — [electron/engines/registry/package.cjs:140](<../../../../../../../electron/engines/registry/package.cjs#L140>)
- [EnginePackageRegistry.install](<registry.cjs.md#s-b97b1298e6d6e88c>) — [electron/engines/registry/registry.cjs:180](<../../../../../../../electron/engines/registry/registry.cjs#L180>)
- [EnginePackageRegistry.installed](<registry.cjs.md#s-4b2796c726a80a4b>) — [electron/engines/registry/registry.cjs:274](<../../../../../../../electron/engines/registry/registry.cjs#L274>)
- [signPackage](<signing.cjs.md#s-9317466d274715e3>) — [electron/engines/registry/signing.cjs:102](<../../../../../../../electron/engines/registry/signing.cjs#L102>)
- [signPackage](<signing.cjs.md#s-9317466d274715e3>) — [electron/engines/registry/signing.cjs:130](<../../../../../../../electron/engines/registry/signing.cjs#L130>)
- [verifyPackage](<signing.cjs.md#s-3b8c467c9b1420c7>) — [electron/engines/registry/signing.cjs:142](<../../../../../../../electron/engines/registry/signing.cjs#L142>)
- [main](<../runtime/worker.cjs.md#s-fb07682c5c8192d8>) — [electron/engines/runtime/worker.cjs:14](<../../../../../../../electron/engines/runtime/worker.cjs#L14>)
- [main](<../../../scripts/orbistry-engine.cjs.md#s-74bbb93b9a0b7abf>) — [scripts/orbistry-engine.cjs:116](<../../../../../../../scripts/orbistry-engine.cjs#L116>)

Unresolved / external call sites: 10.

- fs.realpath — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:86](<../../../../../../../electron/engines/registry/package.cjs#L86>)
- path.join — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:88](<../../../../../../../electron/engines/registry/package.cjs#L88>)
- (await filesIn(root)).filter — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:94](<../../../../../../../electron/engines/registry/package.cjs#L94>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:98](<../../../../../../../electron/engines/registry/package.cjs#L98>)
- JSON.stringify — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:98](<../../../../../../../electron/engines/registry/package.cjs#L98>)
- Object.keys(contract.files).sort — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:98](<../../../../../../../electron/engines/registry/package.cjs#L98>)
- Object.keys — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:98](<../../../../../../../electron/engines/registry/package.cjs#L98>)
- Map — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:104](<../../../../../../../electron/engines/registry/package.cjs#L104>)
- 2 additional sites in [symbol-index.json](<../../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [electron/engine-packages.test.cjs:276](<../../../../../../../electron/engine-packages.test.cjs#L276>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:382](<../../../../../../../electron/engine-packages.test.cjs#L382>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:389](<../../../../../../../electron/engine-packages.test.cjs#L389>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:492](<../../../../../../../electron/engine-packages.test.cjs#L492>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:576](<../../../../../../../electron/engine-packages.test.cjs#L576>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:111](<../../../../../../../electron/engine-signing.test.cjs#L111>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:125](<../../../../../../../electron/engine-signing.test.cjs#L125>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:138](<../../../../../../../electron/engine-signing.test.cjs#L138>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:143](<../../../../../../../electron/engine-signing.test.cjs#L143>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:157](<../../../../../../../electron/engine-signing.test.cjs#L157>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:212](<../../../../../../../electron/engine-signing.test.cjs#L212>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:16](<../../../../../../../electron/engine-packages.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:15](<../../../../../../../electron/engine-signing.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-4bf83071d3a730d0"></a>

## inspectPackage.&lt;anonymous@95:5&gt;

[electron/engines/registry/package.cjs:95](<../../../../../../../electron/engines/registry/package.cjs#L95>) · ArrowFunction · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [inspectPackage](<package.cjs.md#s-71ed017a00706142>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/engine-packages.test.cjs:16](<../../../../../../../electron/engine-packages.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:15](<../../../../../../../electron/engine-signing.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-d9c25ce14dcf2863"></a>

## sealPackage

[electron/engines/registry/package.cjs:126](<../../../../../../../electron/engines/registry/package.cjs#L126>) · FunctionDeclaration · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

Rebuilds author-owned checksums and removes previous signatures so edited bytes must be re-signed explicitly. Never executes package code or grants trust.

Purpose evidence: jsdoc.

Exported as: sealPackage ([electron/engines/registry/package.cjs:1](<../../../../../../../electron/engines/registry/package.cjs#L1>)).

Lexical owner: [electron/engines/registry/package.cjs](<package.cjs.md#s-fcfce52288830f34>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| directory | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [parseJson](<package.cjs.md#s-fb6b0b1816d9018a>) — [electron/engines/registry/package.cjs:128](<../../../../../../../electron/engines/registry/package.cjs#L128>)
- [readBytes](<package.cjs.md#s-a5f5a53e124cf066>) — [electron/engines/registry/package.cjs:129](<../../../../../../../electron/engines/registry/package.cjs#L129>)
- [filesIn](<package.cjs.md#s-7a153ed7a6996a97>) — [electron/engines/registry/package.cjs:132](<../../../../../../../electron/engines/registry/package.cjs#L132>)
- [sha](<../contracts/contract.cjs.md#s-27c50df18ef30dc9>) — [electron/engines/registry/package.cjs:135](<../../../../../../../electron/engines/registry/package.cjs#L135>)
- [readBytes](<package.cjs.md#s-a5f5a53e124cf066>) — [electron/engines/registry/package.cjs:135](<../../../../../../../electron/engines/registry/package.cjs#L135>)
- [manifest](<../contracts/contract.cjs.md#s-419652773bdad136>) — [electron/engines/registry/package.cjs:138](<../../../../../../../electron/engines/registry/package.cjs#L138>)
- [writeJson](<../../core/persistence/json-store.cjs.md#s-5030c6156f98dba1>) — [electron/engines/registry/package.cjs:139](<../../../../../../../electron/engines/registry/package.cjs#L139>)
- [inspectPackage](<package.cjs.md#s-71ed017a00706142>) — [electron/engines/registry/package.cjs:140](<../../../../../../../electron/engines/registry/package.cjs#L140>)

**Called by (statically resolved):**

- [&lt;anonymous@227:98&gt;](<../../engine-packages.test.cjs.md#s-eded6cfb8360ff71>) — [electron/engine-packages.test.cjs:259](<../../../../../../../electron/engine-packages.test.cjs#L259>)
- [&lt;anonymous@366:76&gt;](<../../engine-packages.test.cjs.md#s-9757c9e216f744fe>) — [electron/engine-packages.test.cjs:373](<../../../../../../../electron/engine-packages.test.cjs#L373>)
- [&lt;anonymous@409:87&gt;](<../../engine-packages.test.cjs.md#s-d4ea045e0b519a5c>) — [electron/engine-packages.test.cjs:421](<../../../../../../../electron/engine-packages.test.cjs#L421>)
- [&lt;anonymous@409:87&gt;](<../../engine-packages.test.cjs.md#s-d4ea045e0b519a5c>) — [electron/engine-packages.test.cjs:446](<../../../../../../../electron/engine-packages.test.cjs#L446>)
- [&lt;anonymous@606:86&gt;](<../../engine-packages.test.cjs.md#s-1631cd253604baa9>) — [electron/engine-packages.test.cjs:620](<../../../../../../../electron/engine-packages.test.cjs#L620>)
- [&lt;anonymous@661:86&gt;](<../../engine-packages.test.cjs.md#s-61bdae00820745a0>) — [electron/engine-packages.test.cjs:672](<../../../../../../../electron/engine-packages.test.cjs#L672>)
- [&lt;anonymous@176:104&gt;](<../../engine-signing.test.cjs.md#s-090bc15d5cdc7060>) — [electron/engine-signing.test.cjs:184](<../../../../../../../electron/engine-signing.test.cjs#L184>)
- [initPackage](<authoring.cjs.md#s-bbfb28bee2f9c0b0>) — [electron/engines/registry/authoring.cjs:64](<../../../../../../../electron/engines/registry/authoring.cjs#L64>)
- [linkMockYahoo](<../../../scripts/fixtures/assigned-yahoo-package.cjs.md#s-1c33c078b3b94add>) — [scripts/fixtures/assigned-yahoo-package.cjs:26](<../../../../../../../scripts/fixtures/assigned-yahoo-package.cjs#L26>)
- [main](<../../../scripts/orbistry-engine.cjs.md#s-74bbb93b9a0b7abf>) — [scripts/orbistry-engine.cjs:115](<../../../../../../../scripts/orbistry-engine.cjs#L115>)

Unresolved / external call sites: 5.

- fs.realpath — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:127](<../../../../../../../electron/engines/registry/package.cjs#L127>)
- path.join — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:129](<../../../../../../../electron/engines/registry/package.cjs#L129>)
- (await filesIn(root)).filter — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:132](<../../../../../../../electron/engines/registry/package.cjs#L132>)
- path.join — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:135](<../../../../../../../electron/engines/registry/package.cjs#L135>)
- path.join — external-or-dynamic-dispatch; [electron/engines/registry/package.cjs:139](<../../../../../../../electron/engines/registry/package.cjs#L139>)

**Related tests / acceptance harnesses:**

- [electron/engine-packages.test.cjs:259](<../../../../../../../electron/engine-packages.test.cjs#L259>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:373](<../../../../../../../electron/engine-packages.test.cjs#L373>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:421](<../../../../../../../electron/engine-packages.test.cjs#L421>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:446](<../../../../../../../electron/engine-packages.test.cjs#L446>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:620](<../../../../../../../electron/engine-packages.test.cjs#L620>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:672](<../../../../../../../electron/engine-packages.test.cjs#L672>) — static-call-site; coverage not established.
- [electron/engine-signing.test.cjs:184](<../../../../../../../electron/engine-signing.test.cjs#L184>) — static-call-site; coverage not established.
- [electron/engine-packages.test.cjs:16](<../../../../../../../electron/engine-packages.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:15](<../../../../../../../electron/engine-signing.test.cjs#L15>) — file-import-only; coverage not established.

<a id="s-aaf4ade163a7bcbf"></a>

## sealPackage.&lt;anonymous@133:5&gt;

[electron/engines/registry/package.cjs:133](<../../../../../../../electron/engines/registry/package.cjs#L133>) · ArrowFunction · production · [Engine package registry](<../../../../../modules/engine-registry.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [sealPackage](<package.cjs.md#s-d9c25ce14dcf2863>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| name | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [electron/engine-packages.test.cjs:16](<../../../../../../../electron/engine-packages.test.cjs#L16>) — file-import-only; coverage not established.
- [electron/engine-signing.test.cjs:15](<../../../../../../../electron/engine-signing.test.cjs#L15>) — file-import-only; coverage not established.
