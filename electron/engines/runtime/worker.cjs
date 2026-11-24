const { inspectPackage, parseJson } = require("../registry/package.cjs");
const { validateData, LIMITS } = require("../contracts/contract.cjs");

/** Executes one explicitly trusted package in a dedicated process. This is fault/resource isolation, not an OS security sandbox. Only protocol JSON goes to stdout. */
async function main() {
  const chunks = [];
  let size = 0;
  for await (const chunk of process.stdin) {
    size += chunk.length;
    if (size > LIMITS.inputBytes + 4096) throw Error("Request too large");
    chunks.push(chunk);
  }
  const request = parseJson(Buffer.concat(chunks));
  const checked = await inspectPackage(process.argv[2]);
  if (checked.digest !== request.digest) throw Error("Package digest changed");
  const operation = checked.manifest.operations.find(
    (op) => op.id === request.operation,
  );
  if (!operation) throw Error("Unknown operation");
  validateData(operation.input_schema, request.input);
  // A package's diagnostic console must not corrupt the one-result protocol.
  console.log = console.info = console.warn = console.error = () => {};
  const engine = require(
    require("node:path").join(checked.root, checked.manifest.entry),
  );
  if (typeof engine.execute !== "function")
    throw Error("Entry must export execute");
  const data = await engine.execute({
    operation: operation.id,
    input: request.input,
    context: { entityId: request.entityId, executionId: request.executionId },
  });
  validateData(operation.output_schema, data);
  const output = JSON.stringify({
    protocol: "orbistry.engine/1",
    executionId: request.executionId,
    data,
  });
  if (Buffer.byteLength(output) > LIMITS.outputBytes)
    throw Error("Output too large");
  process.stdout.write(output);
}
main().catch(() => {
  process.stderr.write("Engine execution failed its contract.\n");
  process.exitCode = 1;
});
