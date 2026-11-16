#!/usr/bin/env node
const engine = require("./index.cjs");
/** Reads one bounded JSON request and emits one structured result; discovery is offline and errors go to stderr without stack traces. */
async function main() {
  if (process.argv.slice(2).join(" ") === "--describe") {
    console.log(JSON.stringify(engine.toolContract));
    return;
  }
  if (process.argv.length !== 2)
    throw new Error(
      "Usage: node cli.cjs [--describe]; provide one JSON request on stdin.",
    );
  let request = "";
  for await (const chunk of process.stdin) {
    request += chunk;
    if (Buffer.byteLength(request) > 65536)
      throw new Error("Engine request exceeds 64 KiB.");
  }
  console.log(JSON.stringify(await engine.execute(JSON.parse(request))));
}
main().catch(function failed(error) {
  console.error(JSON.stringify({ error: error.message }));
  process.exitCode = 1;
});
