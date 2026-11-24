# scripts/orbistry-engine.cjs: symbols

[Atlas](<../../../README.md>) / [Development and acceptance tooling](<../../../modules/tooling.md>) / [scripts/orbistry-engine.cjs:1](<../../../../../scripts/orbistry-engine.cjs#L1>)

Compiler-inferred contracts exclude external/global types. No static relationship establishes execution, authorization or coverage.

## Declarations

- [scripts/orbistry-engine.cjs](<orbistry-engine.cjs.md#s-97a7479526c731ef>) (Module)
- [argumentsFor](<orbistry-engine.cjs.md#s-7450bae196ffcf91>) (FunctionDeclaration)
- [main](<orbistry-engine.cjs.md#s-74bbb93b9a0b7abf>) (FunctionDeclaration)
- [main.authorize](<orbistry-engine.cjs.md#s-5b7eb382339ff424>) (ArrowFunction)
- [&lt;anonymous@160:9&gt;](<orbistry-engine.cjs.md#s-094d319bbbddc368>) (ArrowFunction)
- [&lt;anonymous@163:10&gt;](<orbistry-engine.cjs.md#s-82bad0bdcbc3ef45>) (ArrowFunction)

<a id="s-97a7479526c731ef"></a>

## scripts/orbistry-engine.cjs

[scripts/orbistry-engine.cjs:1](<../../../../../scripts/orbistry-engine.cjs#L1>) · Module · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Source-file initialization scope; call edges here describe top-level expressions.

Purpose evidence: structural.

**Calls (statically resolved):**

- [main](<orbistry-engine.cjs.md#s-74bbb93b9a0b7abf>) — [scripts/orbistry-engine.cjs:159](<../../../../../scripts/orbistry-engine.cjs#L159>)

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 8.

- require — module-loader; [scripts/orbistry-engine.cjs:2](<../../../../../scripts/orbistry-engine.cjs#L2>)
- require — module-loader; [scripts/orbistry-engine.cjs:5](<../../../../../scripts/orbistry-engine.cjs#L5>)
- require — module-loader; [scripts/orbistry-engine.cjs:9](<../../../../../scripts/orbistry-engine.cjs#L9>)
- require — module-loader; [scripts/orbistry-engine.cjs:15](<../../../../../scripts/orbistry-engine.cjs#L15>)
- require — module-loader; [scripts/orbistry-engine.cjs:19](<../../../../../scripts/orbistry-engine.cjs#L19>)
- require — module-loader; [scripts/orbistry-engine.cjs:24](<../../../../../scripts/orbistry-engine.cjs#L24>)
- main() .then((result) =&gt; process.stdout.write(JSON.stringify(result, null, 2) + "\\n"), ) .catch — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:159](<../../../../../scripts/orbistry-engine.cjs#L159>)
- main() .then — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:159](<../../../../../scripts/orbistry-engine.cjs#L159>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-7450bae196ffcf91"></a>

## argumentsFor

[scripts/orbistry-engine.cjs:27](<../../../../../scripts/orbistry-engine.cjs#L27>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Parses a fixed CLI contract. User/model text never becomes a shell command; unknown and duplicate options fail.

Purpose evidence: jsdoc.

Lexical owner: [scripts/orbistry-engine.cjs](<orbistry-engine.cjs.md#s-97a7479526c731ef>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| args | any | compiler-inferred | required |

Returns: { command: any; options: {}; } (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

- [main](<orbistry-engine.cjs.md#s-74bbb93b9a0b7abf>) — [scripts/orbistry-engine.cjs:68](<../../../../../scripts/orbistry-engine.cjs#L68>)

Unresolved / external call sites: 10.

- args.shift — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:28](<../../../../../scripts/orbistry-engine.cjs#L28>)
- Set — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:30](<../../../../../scripts/orbistry-engine.cjs#L30>)
- args&#91;index&#93;.replace — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:32](<../../../../../scripts/orbistry-engine.cjs#L32>)
- args&#91;index&#93;.startsWith — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:34](<../../../../../scripts/orbistry-engine.cjs#L34>)
- &#91; "vault", "source", "id", "entity", "operations", "policy", "digest", "operation", "input", "execution", "allow-network", "approve", "private-key", "public-key", "passphrase-env", — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:35](<../../../../../scripts/orbistry-engine.cjs#L35>)
- Object.hasOwn — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:52](<../../../../../scripts/orbistry-engine.cjs#L52>)
- Error — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:54](<../../../../../scripts/orbistry-engine.cjs#L54>)
- flags.has — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:55](<../../../../../scripts/orbistry-engine.cjs#L55>)
- 2 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-74bbb93b9a0b7abf"></a>

## main

[scripts/orbistry-engine.cjs:67](<../../../../../scripts/orbistry-engine.cjs#L67>) · FunctionDeclaration · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

Provides terminal authoring, installation, review, linking, discovery and execution through the same public registry API. Only this explicit human CLI admits local operation requests.

Purpose evidence: jsdoc.

Lexical owner: [scripts/orbistry-engine.cjs](<orbistry-engine.cjs.md#s-97a7479526c731ef>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| (none) | — | source syntax | — |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

- [argumentsFor](<orbistry-engine.cjs.md#s-7450bae196ffcf91>) — [scripts/orbistry-engine.cjs:68](<../../../../../scripts/orbistry-engine.cjs#L68>)
- [createSigningKey](<../electron/engines/registry/signing.cjs.md#s-dbf5e585ccf2aea6>) — [scripts/orbistry-engine.cjs:102](<../../../../../scripts/orbistry-engine.cjs#L102>)
- [signPackage](<../electron/engines/registry/signing.cjs.md#s-9317466d274715e3>) — [scripts/orbistry-engine.cjs:105](<../../../../../scripts/orbistry-engine.cjs#L105>)
- [verifyPackage](<../electron/engines/registry/signing.cjs.md#s-3b8c467c9b1420c7>) — [scripts/orbistry-engine.cjs:106](<../../../../../scripts/orbistry-engine.cjs#L106>)
- [initPackage](<../electron/engines/registry/authoring.cjs.md#s-bbfb28bee2f9c0b0>) — [scripts/orbistry-engine.cjs:112](<../../../../../scripts/orbistry-engine.cjs#L112>)
- [sealPackage](<../electron/engines/registry/package.cjs.md#s-d9c25ce14dcf2863>) — [scripts/orbistry-engine.cjs:114](<../../../../../scripts/orbistry-engine.cjs#L114>)
- [inspectPackage](<../electron/engines/registry/package.cjs.md#s-71ed017a00706142>) — [scripts/orbistry-engine.cjs:115](<../../../../../scripts/orbistry-engine.cjs#L115>)
- [EnginePackageRegistry.constructor](<../electron/engines/registry/registry.cjs.md#s-67d4e7282499da54>) — [scripts/orbistry-engine.cjs:126](<../../../../../scripts/orbistry-engine.cjs#L126>)
- [EnginePackageRegistry.install](<../electron/engines/registry/registry.cjs.md#s-23fa9e3f7160bfa9>) — [scripts/orbistry-engine.cjs:129](<../../../../../scripts/orbistry-engine.cjs#L129>)
- [pullPackage](<../electron/engines/registry/authoring.cjs.md#s-dd26bc55111fb682>) — [scripts/orbistry-engine.cjs:130](<../../../../../scripts/orbistry-engine.cjs#L130>)
- [EnginePackageRegistry.trust](<../electron/engines/registry/registry.cjs.md#s-875db17c7cae1a9d>) — [scripts/orbistry-engine.cjs:132](<../../../../../scripts/orbistry-engine.cjs#L132>)
- [EnginePackageRegistry.link](<../electron/engines/registry/registry.cjs.md#s-cc2ef75797a08101>) — [scripts/orbistry-engine.cjs:134](<../../../../../scripts/orbistry-engine.cjs#L134>)
- [EnginePackageRegistry.unlink](<../electron/engines/registry/registry.cjs.md#s-0acfac64666866c4>) — [scripts/orbistry-engine.cjs:141](<../../../../../scripts/orbistry-engine.cjs#L141>)
- [EnginePackageRegistry.catalog](<../electron/engines/registry/registry.cjs.md#s-31238ee0e1cb396f>) — [scripts/orbistry-engine.cjs:143](<../../../../../scripts/orbistry-engine.cjs#L143>)
- [EnginePackageRegistry.readResult](<../electron/engines/registry/registry.cjs.md#s-d6c27a69455a5f09>) — [scripts/orbistry-engine.cjs:144](<../../../../../scripts/orbistry-engine.cjs#L144>)
- [EnginePackageRegistry.execute](<../electron/engines/registry/registry.cjs.md#s-a35bb6e14bafba1e>) — [scripts/orbistry-engine.cjs:147](<../../../../../scripts/orbistry-engine.cjs#L147>)
- [parseJson](<../electron/engines/registry/package.cjs.md#s-fb6b0b1816d9018a>) — [scripts/orbistry-engine.cjs:151](<../../../../../scripts/orbistry-engine.cjs#L151>)
- [readBytes](<../electron/engines/registry/package.cjs.md#s-a5f5a53e124cf066>) — [scripts/orbistry-engine.cjs:152](<../../../../../scripts/orbistry-engine.cjs#L152>)

**Called by (statically resolved):**

- [scripts/orbistry-engine.cjs](<orbistry-engine.cjs.md#s-97a7479526c731ef>) — [scripts/orbistry-engine.cjs:159](<../../../../../scripts/orbistry-engine.cjs#L159>)

Unresolved / external call sites: 16.

- process.argv.slice — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:68](<../../../../../scripts/orbistry-engine.cjs#L68>)
- require("zod").z.toJSONSchema — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:91](<../../../../../scripts/orbistry-engine.cjs#L91>)
- require — module-loader; [scripts/orbistry-engine.cjs:91](<../../../../../scripts/orbistry-engine.cjs#L91>)
- &#91;"keygen", "sign", "verify"&#93;.includes — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:92](<../../../../../scripts/orbistry-engine.cjs#L92>)
- /^&#91;A-Za-z_&#93;&#91;A-Za-z0-9_&#93;{0,127}$/.test — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:95](<../../../../../scripts/orbistry-engine.cjs#L95>)
- Error — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:96](<../../../../../scripts/orbistry-engine.cjs#L96>)
- Error — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:99](<../../../../../scripts/orbistry-engine.cjs#L99>)
- Error — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:103](<../../../../../scripts/orbistry-engine.cjs#L103>)
- 8 additional sites in [symbol-index.json](<../../symbol-index.json>).

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-5b7eb382339ff424"></a>

## main.authorize

[scripts/orbistry-engine.cjs:127](<../../../../../scripts/orbistry-engine.cjs#L127>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [main](<orbistry-engine.cjs.md#s-74bbb93b9a0b7abf>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| { entityId } | { entityId: any; } | compiler-inferred | required |

Returns: unknown (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 0.


**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-094d319bbbddc368"></a>

## &lt;anonymous@160:9&gt;

[scripts/orbistry-engine.cjs:160](<../../../../../scripts/orbistry-engine.cjs#L160>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/orbistry-engine.cjs](<orbistry-engine.cjs.md#s-97a7479526c731ef>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| result | any | compiler-inferred | required |

Returns: any (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 2.

- process.stdout.write — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:161](<../../../../../scripts/orbistry-engine.cjs#L161>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:161](<../../../../../scripts/orbistry-engine.cjs#L161>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.

<a id="s-82bad0bdcbc3ef45"></a>

## &lt;anonymous@163:10&gt;

[scripts/orbistry-engine.cjs:163](<../../../../../scripts/orbistry-engine.cjs#L163>) · ArrowFunction · tooling · [Development and acceptance tooling](<../../../modules/tooling.md>)

No purpose documentation on this declaration; inspect the linked implementation.

Purpose evidence: undocumented.

Lexical owner: [scripts/orbistry-engine.cjs](<orbistry-engine.cjs.md#s-97a7479526c731ef>).

| Parameter | Contract | Evidence | Optional / rest |
| --- | --- | --- | --- |
| error | any | compiler-inferred | required |

Returns: void (compiler-inferred). Implementation present.

**Calls (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

**Called by (statically resolved):**

No resolved sites. This does not prove absence of runtime callers or callees.

Unresolved / external call sites: 3.

- /^ENGINE_&#91;A-Z_&#93;+$/.test — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:164](<../../../../../scripts/orbistry-engine.cjs#L164>)
- process.stderr.write — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:165](<../../../../../scripts/orbistry-engine.cjs#L165>)
- JSON.stringify — external-or-dynamic-dispatch; [scripts/orbistry-engine.cjs:166](<../../../../../scripts/orbistry-engine.cjs#L166>)

**Related tests / acceptance harnesses:**

No direct static call/import association found; coverage unknown.
