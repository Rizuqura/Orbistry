const { spawn } = require("node:child_process");
const path = require("node:path");
const { LIMITS, fail } = require("../contracts/contract.cjs");
const { parseJson } = require("../registry/package.cjs");

/** Runs the bundled protocol worker with a scrubbed environment and bounded output/deadline. Never interpolates commands into a shell; cancellation terminates the worker. Trusted plugins still execute with the user's OS permissions. */
async function runPackage(directory, request, operation, signal) {
  signal?.throwIfAborted();
  const input = JSON.stringify(request);
  if (Buffer.byteLength(JSON.stringify(request.input)) > LIMITS.inputBytes)
    fail("ENGINE_INPUT_TOO_LARGE", "Engine input exceeds 64 KiB.");
  return new Promise((resolve, reject) => {
    const env = { ELECTRON_RUN_AS_NODE: "1" };
    for (const key of ["SystemRoot", "WINDIR", "TEMP", "TMP", "LANG"])
      if (process.env[key]) env[key] = process.env[key];
    const child = spawn(
      process.execPath,
      [
        "--max-old-space-size=128",
        path.join(__dirname, "worker.cjs"),
        directory,
      ],
      {
        cwd: directory,
        env,
        shell: false,
        windowsHide: true,
        stdio: ["pipe", "pipe", "pipe"],
      },
    );
    const output = [];
    let bytes = 0,
      errorBytes = 0,
      stopped = false;
    /** Stops the direct worker and closes inherited pipes so a descendant cannot hold the host's deadline/cancellation promise open. */
    const stop = (code, message) => {
      if (stopped) return;
      stopped = true;
      clearTimeout(timer);
      signal?.removeEventListener("abort", abort);
      child.kill();
      child.stdin.destroy();
      child.stdout.destroy();
      child.stderr.destroy();
      reject(Object.assign(Error(message), { code }));
    };
    const abort = () => stop("ENGINE_CANCELLED", "Engine execution cancelled.");
    signal?.addEventListener("abort", abort, { once: true });
    const timer = setTimeout(
      () =>
        stop(
          "ENGINE_TIMEOUT",
          "Engine execution exceeded its declared deadline.",
        ),
      operation.timeout_ms,
    );
    child.stdout.on("data", (chunk) => {
      bytes += chunk.length;
      if (bytes > LIMITS.outputBytes)
        stop(
          "ENGINE_OUTPUT_TOO_LARGE",
          "Engine output exceeded its byte limit.",
        );
      else output.push(chunk);
    });
    child.stderr.on("data", (chunk) => {
      errorBytes += chunk.length;
      if (errorBytes > 65536)
        stop(
          "ENGINE_OUTPUT_TOO_LARGE",
          "Engine diagnostics exceeded their byte limit.",
        );
    });
    child.stdin.on("error", () => {
      /* Early process exit is handled by close/error, never a second completion. */
    });
    child.on("error", () =>
      stop("ENGINE_PROCESS_FAILED", "Engine worker could not start."),
    );
    child.on("close", (code) => {
      clearTimeout(timer);
      signal?.removeEventListener("abort", abort);
      if (stopped) return;
      stopped = true;
      if (code !== 0)
        return reject(
          Object.assign(
            Error("Engine worker failed its protocol or declared contract."),
            { code: "ENGINE_EXECUTION_FAILED" },
          ),
        );
      try {
        const result = parseJson(Buffer.concat(output));
        if (
          result.protocol !== "orbistry.engine/1" ||
          result.executionId !== request.executionId ||
          !Object.hasOwn(result, "data") ||
          Object.keys(result).length !== 3
        )
          fail(
            "ENGINE_PROTOCOL_INVALID",
            "Engine response did not match the request.",
          );
        resolve(result.data);
      } catch (error) {
        reject(error);
      }
    });
    child.stdin.end(input);
    if (signal?.aborted) abort();
  });
}
module.exports = { runPackage };
