#!/usr/bin/env node
const path = require("node:path");
const {
  EnginePackageRegistry,
} = require("../electron/engines/registry/registry.cjs");
const {
  initPackage,
  pullPackage,
} = require("../electron/engines/registry/authoring.cjs");
const {
  inspectPackage,
  sealPackage,
  readBytes,
  parseJson,
} = require("../electron/engines/registry/package.cjs");
const {
  LIMITS,
  manifestSchema,
} = require("../electron/engines/contracts/contract.cjs");
const {
  createSigningKey,
  signPackage,
  verifyPackage,
} = require("../electron/engines/registry/signing.cjs");

/** Parses a fixed CLI contract. User/model text never becomes a shell command; unknown and duplicate options fail. */
function argumentsFor(args) {
  const command = args.shift();
  const options = {};
  const flags = new Set(["approve", "allow-network"]);
  for (let index = 0; index < args.length; index++) {
    const key = args[index].replace(/^--/, "");
    if (
      !args[index].startsWith("--") ||
      ![
        "vault",
        "source",
        "id",
        "entity",
        "operations",
        "policy",
        "digest",
        "operation",
        "input",
        "execution",
        "allow-network",
        "approve",
        "private-key",
        "public-key",
        "passphrase-env",
      ].includes(key) ||
      Object.hasOwn(options, key)
    )
      throw Error("Unknown or duplicate CLI option.");
    if (flags.has(key)) options[key] = true;
    else {
      const value = args[++index];
      if (!value || value.startsWith("--"))
        throw Error("Missing option value.");
      options[key] = value;
    }
  }
  return { command, options };
}

/** Provides terminal authoring, installation, review, linking, discovery and execution through the same public registry API. Only this explicit human CLI admits local operation requests. */
async function main() {
  const { command, options: o } = argumentsFor(process.argv.slice(2));
  if (!command || command === "help")
    return {
      usage: "npm run engine -- <command> [options]",
      commands: [
        "init --source <new-folder> --id <engine-id>",
        "seal|check --source <folder>",
        "keygen --private-key <new-private.pem> --public-key <new-public.pem> [--passphrase-env <name>]",
        "sign --source <folder> --private-key <private.pem> [--passphrase-env <name>]",
        "verify --source <folder> [--public-key <expected-publisher.pem>]",
        "install --vault <Universe> --source <folder>",
        "pull --vault <Universe> --source <https-manifest-url>",
        "trust|revoke --vault <Universe> --id <engine-id> --digest <sha256>",
        "link --vault <Universe> --entity <id> --id <engine-id> --operations <comma-list> [--policy manual|automatic] [--allow-network]",
        "unlink --vault <Universe> --entity <id> --id <engine-id>",
        "list|describe --vault <Universe> [--entity <id>]",
        "run --vault <Universe> --entity <id> --id <engine-id> --operation <id> --input <json-file> [--approve]",
        "result --vault <Universe> --entity <id> --execution <uuid>",
        "schema",
      ],
      guide: "docs/engines/ENGINE_AUTHORING.md",
    };
  if (command === "schema")
    return require("zod").z.toJSONSchema(manifestSchema);
  if (["keygen", "sign", "verify"].includes(command)) {
    let passphrase;
    if (o["passphrase-env"] !== undefined) {
      if (!/^[A-Za-z_][A-Za-z0-9_]{0,127}$/.test(o["passphrase-env"]))
        throw Error("Invalid passphrase environment variable name.");
      passphrase = process.env[o["passphrase-env"]];
      if (!passphrase || passphrase.length < 8 || passphrase.length > 1024)
        throw Error("Passphrase variable must contain 8–1024 characters.");
    }
    if (command === "keygen")
      return createSigningKey(o["private-key"], o["public-key"], passphrase);
    if (!o.source) throw Error("--source is required.");
    return command === "sign"
      ? signPackage(o.source, o["private-key"], passphrase)
      : verifyPackage(o.source, o["public-key"]);
  }
  if (["init", "seal", "check"].includes(command)) {
    if (!o.source) throw Error("--source is required.");
    const result =
      command === "init"
        ? await initPackage(o.source, o.id)
        : command === "seal"
          ? await sealPackage(o.source)
          : await inspectPackage(o.source);
    return {
      engineId: result.manifest.engine_id,
      version: result.manifest.engine_version,
      digest: result.digest,
      bytes: result.bytes,
      valid: true,
      signature: result.signature,
    };
  }
  if (!o.vault) throw Error("--vault is required.");
  const registry = new EnginePackageRegistry(path.resolve(o.vault), {
    authorize: async ({ entityId }) => entityId === o.entity,
  });
  if (command === "install") return registry.install(o.source);
  if (command === "pull") return pullPackage(registry, o.source);
  if (command === "trust" || command === "revoke")
    return registry.trust(o.id, o.digest, command === "trust");
  if (command === "link")
    return registry.link({
      entityId: o.entity,
      engineId: o.id,
      operations: o.operations?.split(","),
      policy: o.policy ?? "manual",
      allowNetwork: o["allow-network"] === true,
    });
  if (command === "unlink") return registry.unlink(o.entity, o.id);
  if (command === "list" || command === "describe")
    return registry.catalog(o.entity ?? null);
  if (command === "result") return registry.readResult(o.entity, o.execution);
  if (command === "run") {
    if (!o.input) throw Error("--input must name a JSON file.");
    return registry.execute({
      entityId: o.entity,
      engineId: o.id,
      operation: o.operation,
      input: parseJson(
        await readBytes(path.resolve(o.input), LIMITS.inputBytes),
      ),
      approved: o.approve === true,
    });
  }
  throw Error("Unknown engine command. Run help.");
}
main()
  .then((result) =>
    process.stdout.write(JSON.stringify(result, null, 2) + "\n"),
  )
  .catch((error) => {
    const known = /^ENGINE_[A-Z_]+$/.test(error.code ?? "");
    process.stderr.write(
      JSON.stringify({
        code: known ? error.code : "ENGINE_CLI_INVALID",
        message: known
          ? error.message
          : "Engine command failed. Check the command, paths and manifest contract.",
        ...(error.executionId ? { executionId: error.executionId } : {}),
      }) + "\n",
    );
    process.exitCode = 1;
  });
