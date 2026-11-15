const { Worker } = require("node:worker_threads");
const path = require("node:path");
const { LIMITS, VERSION } = require("./limits.cjs");
const rendering = require("./markdown.cjs");
const definition = Object.freeze({
  id: "wonton-excel",
  name: "Wonton Excel",
  version: VERSION,
  operations: ["excel"],
  nativeToolCalling: false,
  readOnly: true,
});

/** Runs offline XLSX extraction in a disposable bounded worker. Accepts a local filename or bytes plus options.filename; rejects unsupported modes, limits and corrupt content. */
async function excel(input, options = {}) {
  if (options.mode !== undefined && options.mode !== "faithful")
    throw new Error("Only faithful mode is supported.");
  if (options.sheet !== undefined && typeof options.sheet !== "string")
    throw new Error("Worksheet selection must use an exact name.");
  if (typeof input !== "string" && !(input instanceof Uint8Array))
    throw new Error("Provide a local XLSX filename or workbook bytes.");
  return runWorker({ input, options });
}

/** Exports an extracted model in a background worker. valuesOnly selects formatted final text for Portal exports. Invalid formats or option types throw. */
function exportWorkbook(model, format, { valuesOnly = false } = {}) {
  if (!["markdown", "structured"].includes(format))
    throw new Error("Unsupported workbook export format.");
  if (typeof valuesOnly !== "boolean")
    throw new Error("valuesOnly must be a boolean.");
  return runWorker({ model, format, valuesOnly });
}

/** Owns one worker's bounded lifecycle for extraction or derived export, surfacing timeouts and unexpected exits. */
function runWorker(data) {
  return new Promise(function processing(resolve, reject) {
    const worker = new Worker(path.join(__dirname, "worker.cjs"), {
      workerData: data,
      resourceLimits: { maxOldGenerationSizeMb: 256, stackSizeMb: 4 },
    });
    let settled = false;
    /** Settles the caller once and releases the worker and timeout on both success and failure. */
    function finish(error, result) {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      void worker.terminate();
      if (error) reject(error);
      else resolve(result);
    }
    const timer = setTimeout(function timeout() {
      finish(new Error("Workbook processing exceeded 20 seconds."));
    }, LIMITS.timeoutMs);
    worker.once("message", function message(response) {
      finish(response.ok ? null : new Error(response.error), response.result);
    });
    worker.once("error", function failed(error) {
      finish(new Error(`Workbook worker failed: ${error.message}`));
    });
    worker.once("exit", function exited(code) {
      if (!settled)
        finish(
          new Error(
            `Workbook worker exited before returning a result (${code}).`,
          ),
        );
    });
  });
}
module.exports = {
  excel,
  exportWorkbook,
  definition,
  LIMITS,
  VERSION,
  ...rendering,
};
