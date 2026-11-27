# Developing an Orbistry Engine

Use [the authoring guide](ENGINE_AUTHORING.md) for the CLI, signing and trust procedure. The registry accepts a directory containing a manifest and its integrity-listed runtime files. Publish these bytes together. Orbistry installs a verified copy under the selected Universe.

| Path | Owner and purpose |
| --- | --- |
| `engine_manifest.json` | Author declares package ID, version, display metadata, entry, operations, checksums and optional publisher signature. |
| `index.cjs` | CommonJS module exports `async execute({operation,input,context})`. Return the declared JSON value. Orbistry wraps it in an execution receipt. |
| Additional files | Include every runtime dependency in the sealed inventory. Bundle dependencies for packages that exceed the file count. Keep publisher private keys outside this directory. |

Use manifest schema 2 for operation-only packages. Schema 3 adds a required nonempty `sources` list. Both use worker protocol `orbistry.engine/1`. Each source has a unique ID, a declared operation, a data kind and a presentation. Supported kinds are scalar, table, time_series and document. The available presentation is json. The host renders text and never loads package-supplied UI code.

For an exact complete manifest, copy [weather-demo](../../examples/engines/weather-demo/engine_manifest.json) and its [entry](../../examples/engines/weather-demo/index.cjs). Its synthetic hourly observations can be reproduced without credentials.

```json
{"id":"hourly","operation":"temperature","kind":"time_series","presentation":"json"}
```

Each operation declares input_schema, output_schema, read_only, network and timeout_ms. The source inherits these contracts from its operation. Schema 3 output also supports a nullable pair `{"anyOf":[T,{"type":"null"}]}` and typed additionalProperties for maps. Use the [machine-readable manifest schema](engine-manifest.schema.json) in your editor and run the CLI check for integrity and semantic validation.

In a Knowledge Card, choose **Write Index ? Installed Engine sources** to inspect the operation and input schema. Provide JSON literals in the applied declaration. The integer selects the compatible major version.

```text
# Climate
source: engineSource("weather-demo","hourly",1,{"station":"lab"})
```

The parser derives a declaration ID from its menu and arguments. The registry resolves its operation from the active, verified manifest. Reading or applying an index does not execute a package. For a card, grant the exact Entity operation automatic read permission and separate outbound consent when declared. Open the section and choose **Run source**. A missing or disabled source retains its declaration. Choose **Check availability** after restoring its package.

For an Assigned Agent, select the installed package operation in Workbench, choose per-request approval, connect the Engine node and apply the graph. The graph pins version and digest. Apply the external source declaration to the assigned Entity and refresh its Backend Identity. Each invocation uses the saved declaration's input and requires a human decision. The scoped Registry API and CLI also support operation-only packages.
