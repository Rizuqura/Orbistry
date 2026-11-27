# scripts/acceptance/yahoo-package-lifecycle.cjs: symbols

[Atlas](<../../../../README.md>) / [Development and acceptance tooling](<../../../../modules/tooling.md>) / [scripts/acceptance/yahoo-package-lifecycle.cjs:1](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/acceptance/yahoo-package-lifecycle.cjs](<yahoo-package-lifecycle.cjs.md#s-12d902ad1c28773f>) (Module)
- [main](<yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>) (FunctionDeclaration)
- [main.setup](<yahoo-package-lifecycle.cjs.md#s-5db784ad2aa16e3b>) (MethodDeclaration)
- [main.setup.&lt;anonymous@33:56&gt;](<yahoo-package-lifecycle.cjs.md#s-0dc00e08c0c1ee3b>) (ArrowFunction)
- [main.authorize](<yahoo-package-lifecycle.cjs.md#s-d9be9497885a3968>) (ArrowFunction)
- [main.price](<yahoo-package-lifecycle.cjs.md#s-a6820aaa27b481af>) (ArrowFunction)
- [main.activate](<yahoo-package-lifecycle.cjs.md#s-02b9698bcd977169>) (FunctionDeclaration)
- [main.verifyAll](<yahoo-package-lifecycle.cjs.md#s-53e46664c77822ce>) (FunctionDeclaration)
- [main.verifyAll.&lt;anonymous@83:46&gt;](<yahoo-package-lifecycle.cjs.md#s-7797fd5d48d7aef9>) (ArrowFunction)
- [main.&lt;anonymous@133:9&gt;](<yahoo-package-lifecycle.cjs.md#s-d70e233ee6a76db5>) (ArrowFunction)
- [&lt;anonymous@152:14&gt;](<yahoo-package-lifecycle.cjs.md#s-c6fa0928fc0b36f9>) (ArrowFunction)

<a id="s-12d902ad1c28773f"></a>

## scripts/acceptance/yahoo-package-lifecycle.cjs

[scripts/acceptance/yahoo-package-lifecycle.cjs:1](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:152](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L152>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 11.

- require — module-loader; [scripts/acceptance/yahoo-package-lifecycle.cjs:1](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L1>)
- require — module-loader; [scripts/acceptance/yahoo-package-lifecycle.cjs:2](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L2>)
- require — module-loader; [scripts/acceptance/yahoo-package-lifecycle.cjs:3](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L3>)
- require — module-loader; [scripts/acceptance/yahoo-package-lifecycle.cjs:4](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L4>)
- require — module-loader; [scripts/acceptance/yahoo-package-lifecycle.cjs:5](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L5>)
- require — module-loader; [scripts/acceptance/yahoo-package-lifecycle.cjs:8](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L8>)
- require — module-loader; [scripts/acceptance/yahoo-package-lifecycle.cjs:12](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L12>)
- require — module-loader; [scripts/acceptance/yahoo-package-lifecycle.cjs:13](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L13>)
- 3 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a519dde3e44c97fd"></a>

## main

[scripts/acceptance/yahoo-package-lifecycle.cjs:22](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L22>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

Bundles the real five adapters against a synthetic upstream client, then installs their sealed artifact.

Purpose evidence: jsdoc.

Lexical owner: [scripts/acceptance/yahoo-package-lifecycle.cjs](<yahoo-package-lifecycle.cjs.md#s-12d902ad1c28773f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [build](<../../packages/yahoo-finance/build.cjs.md#s-baf3ec01e83ea7d5>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:29](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L29>)
- [saveKnowledgeIndex](<../../electron/domains/knowledge/knowledge-store.cjs.md#s-23c92923d2d74292>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:49](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L49>)
- [EnginePackageRegistry.constructor](<../../electron/engines/registry/registry.cjs.md#s-0e6ad7bd522e9fad>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:57](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L57>)
- [main.activate](<yahoo-package-lifecycle.cjs.md#s-02b9698bcd977169>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:125](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L125>)
- [main.verifyAll](<yahoo-package-lifecycle.cjs.md#s-53e46664c77822ce>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:126](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L126>)
- [EnginePackageRegistry.uninstall](<../../electron/engines/registry/registry.cjs.md#s-84842efbe2884dcf>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:127](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L127>)
- [main.price](<yahoo-package-lifecycle.cjs.md#s-a6820aaa27b481af>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:128](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L128>)
- [status](<../../electron/engines/backend-identity/identity-compiler.cjs.md#s-1d61d04d4313288f>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:129](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L129>)
- [generate](<../../electron/engines/backend-identity/identity-compiler.cjs.md#s-f539d3e969846edf>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:130](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L130>)
- [status](<../../electron/engines/backend-identity/identity-compiler.cjs.md#s-1d61d04d4313288f>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:132](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L132>)
- [readKnowledgeIndex](<../../electron/domains/knowledge/knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:136](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L136>)
- [EnginePackageRegistry.readResult](<../../electron/engines/registry/registry.cjs.md#s-34db5a148ab121e2>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:138](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L138>)
- [main.activate](<yahoo-package-lifecycle.cjs.md#s-02b9698bcd977169>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:141](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L141>)
- [main.verifyAll](<yahoo-package-lifecycle.cjs.md#s-53e46664c77822ce>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:142](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L142>)
- [readKnowledgeIndex](<../../electron/domains/knowledge/knowledge-store.cjs.md#s-c0c55e94f399d0ad>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:144](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L144>)

**Called by (statically resolved):**

- [scripts/acceptance/yahoo-package-lifecycle.cjs](<yahoo-package-lifecycle.cjs.md#s-12d902ad1c28773f>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:152](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L152>)

Unresolved / external call sites: 18.

- fs.mkdtemp — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:23](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L23>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:23](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L23>)
- os.tmpdir — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:23](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L23>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:25](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L25>)
- path.join — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:26](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L26>)
- fs.mkdir — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:28](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L28>)
- saveWorldViewChip — signature-only-candidate; [scripts/acceptance/yahoo-package-lifecycle.cjs:39](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L39>)
- require — module-loader; [scripts/acceptance/yahoo-package-lifecycle.cjs:77](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L77>)
- 10 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/yahoo-package-lifecycle.cjs:152](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L152>) — static-call-site; coverage not established.

<a id="s-5db784ad2aa16e3b"></a>

## main.setup

[scripts/acceptance/yahoo-package-lifecycle.cjs:32](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L32>) · MethodDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| b | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- b.onResolve — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:33](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L33>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-0dc00e08c0c1ee3b"></a>

## main.setup.&lt;anonymous@33:56&gt;

[scripts/acceptance/yahoo-package-lifecycle.cjs:33](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L33>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.setup](<yahoo-package-lifecycle.cjs.md#s-5db784ad2aa16e3b>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: { path: any; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- path.resolve — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:34](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L34>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d9be9497885a3968"></a>

## main.authorize

[scripts/acceptance/yahoo-package-lifecycle.cjs:58](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L58>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| r | any | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-a6820aaa27b481af"></a>

## main.price

[scripts/acceptance/yahoo-package-lifecycle.cjs:60](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L60>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [getIndexedPrice](<../../electron/daily-price-service.cjs.md#s-7b912d435b7535f2>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:61](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L61>)

**Called by (statically resolved):**

- [main.activate](<yahoo-package-lifecycle.cjs.md#s-02b9698bcd977169>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:65](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L65>)
- [main.activate](<yahoo-package-lifecycle.cjs.md#s-02b9698bcd977169>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:67](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L67>)
- [main.verifyAll](<yahoo-package-lifecycle.cjs.md#s-53e46664c77822ce>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:94](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L94>)
- [main](<yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:128](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L128>)

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

- [scripts/acceptance/yahoo-package-lifecycle.cjs:65](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L65>) — static-call-site; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:67](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L67>) — static-call-site; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:94](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L94>) — static-call-site; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:128](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L128>) — static-call-site; coverage not established.

<a id="s-02b9698bcd977169"></a>

## main.activate

[scripts/acceptance/yahoo-package-lifecycle.cjs:63](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L63>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [EnginePackageRegistry.install](<../../electron/engines/registry/registry.cjs.md#s-b97b1298e6d6e88c>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:64](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L64>)
- [main.price](<yahoo-package-lifecycle.cjs.md#s-a6820aaa27b481af>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:65](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L65>)
- [EnginePackageRegistry.trust](<../../electron/engines/registry/registry.cjs.md#s-c4a76488a257429f>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:66](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L66>)
- [main.price](<yahoo-package-lifecycle.cjs.md#s-a6820aaa27b481af>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:67](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L67>)
- [EnginePackageRegistry.link](<../../electron/engines/registry/registry.cjs.md#s-4a5a96d46040ffbd>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:68](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L68>)

**Called by (statically resolved):**

- [main](<yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:125](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L125>)
- [main](<yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:141](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L141>)

Unresolved / external call sites: 2.

- assert.rejects — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:65](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L65>)
- assert.rejects — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:67](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L67>)

**Related tests / acceptance harnesses:**

- [scripts/acceptance/yahoo-package-lifecycle.cjs:125](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L125>) — static-call-site; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:141](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L141>) — static-call-site; coverage not established.

<a id="s-53e46664c77822ce"></a>

## main.verifyAll

[scripts/acceptance/yahoo-package-lifecycle.cjs:78](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L78>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [generate](<../../electron/engines/backend-identity/identity-compiler.cjs.md#s-f539d3e969846edf>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:79](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L79>)
- [status](<../../electron/engines/backend-identity/identity-compiler.cjs.md#s-1d61d04d4313288f>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:80](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L80>)
- [EnginePackageRegistry.execute](<../../electron/engines/registry/registry.cjs.md#s-61267d4d373b62b8>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:86](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L86>)
- [main.price](<yahoo-package-lifecycle.cjs.md#s-a6820aaa27b481af>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:94](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L94>)
- [getAuthorizedHistory](<../../electron/financial-service.cjs.md#s-e00c905ba349043c>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:99](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L99>)
- [getIndexedFinance](<../../electron/financial-service.cjs.md#s-5cdbc96d6a69cfe2>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:110](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L110>)

**Called by (statically resolved):**

- [main](<yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:126](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L126>)
- [main](<yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>) — [scripts/acceptance/yahoo-package-lifecycle.cjs:142](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L142>)

Unresolved / external call sites: 9.

- assert.equal — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:81](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L81>)
- assert.deepEqual — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:82](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L82>)
- snapshot.manifest.packageSources.map — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:83](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L83>)
- assert.equal — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:92](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L92>)
- assert.equal — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:93](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L93>)
- assert.equal — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:97](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L97>)
- assert.equal — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:118](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L118>)
- Object.values — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:120](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L120>)
- 1 additional sites in [symbol-index.json](<../../../symbol-index.json>).

**Related tests / acceptance harnesses:**

- [scripts/acceptance/yahoo-package-lifecycle.cjs:126](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L126>) — static-call-site; coverage not established.
- [scripts/acceptance/yahoo-package-lifecycle.cjs:142](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L142>) — static-call-site; coverage not established.

<a id="s-7797fd5d48d7aef9"></a>

## main.verifyAll.&lt;anonymous@83:46&gt;

[scripts/acceptance/yahoo-package-lifecycle.cjs:83](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L83>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main.verifyAll](<yahoo-package-lifecycle.cjs.md#s-53e46664c77822ce>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-d70e233ee6a76db5"></a>

## main.&lt;anonymous@133:9&gt;

[scripts/acceptance/yahoo-package-lifecycle.cjs:133](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L133>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<yahoo-package-lifecycle.cjs.md#s-a519dde3e44c97fd>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| source | any | compiler-inferred | required |

Returns: boolean (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-c6fa0928fc0b36f9"></a>

## &lt;anonymous@152:14&gt;

[scripts/acceptance/yahoo-package-lifecycle.cjs:152](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L152>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/acceptance/yahoo-package-lifecycle.cjs](<yahoo-package-lifecycle.cjs.md#s-12d902ad1c28773f>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 1.

- console.error — external-or-dynamic-dispatch; [scripts/acceptance/yahoo-package-lifecycle.cjs:153](<../../../../../../scripts/acceptance/yahoo-package-lifecycle.cjs#L153>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
