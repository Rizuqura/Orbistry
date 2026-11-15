const { parentPort, workerData } = require("node:worker_threads");
const fs = require("node:fs/promises");
const { readWorkbook } = require("./reader.cjs");
const { renderWorkbook } = require("./markdown.cjs");
const { resultWorkbook } = require("./results.cjs");
const { LIMITS } = require("./limits.cjs");

/** Reads a bounded stable source snapshot; opens read-only and never writes or recalculates the workbook. */
async function readFile(filename) {
  const file = await fs.open(filename, "r");
  try {
    const before = await file.stat();
    if (!before.isFile() || before.size > LIMITS.fileBytes)
      throw new Error("Workbook must be a file within 25 MB.");
    const bytes = Buffer.alloc(before.size + 1);
    let length = 0;
    while (length < bytes.length) {
      const result = await file.read(
        bytes,
        length,
        bytes.length - length,
        length,
      );
      if (!result.bytesRead) break;
      length += result.bytesRead;
    }
    const after = await file.stat();
    if (
      length !== before.size ||
      before.size !== after.size ||
      before.mtimeMs !== after.mtimeMs ||
      before.ctimeMs !== after.ctimeMs
    )
      throw new Error("Workbook changed during reading. Retry.");
    return bytes.subarray(0, length);
  } finally {
    await file.close();
  }
}

/** Produces serializable structured data and bounded Markdown from one immutable snapshot, returning explicit errors to the worker owner. */
async function run() {
  try {
    if (workerData.model) {
      const result =
        workerData.format === "markdown"
          ? renderWorkbook(workerData.model, {
              full: true,
              formulaDisplay: workerData.valuesOnly ? "result" : "expression",
            })
          : JSON.stringify(
              workerData.valuesOnly
                ? resultWorkbook(workerData.model)
                : workerData.model,
            );
      if (Buffer.byteLength(result) > LIMITS.resultBytes)
        throw new Error("Workbook export exceeds 48 MB.");
      parentPort.postMessage({ ok: true, result });
      return;
    }
    const { input, options } = workerData;
    const filename = typeof input === "string" ? input : options.filename;
    const bytes =
      typeof input === "string" ? await readFile(input) : Buffer.from(input);
    const result = await readWorkbook(bytes, filename);
    if (options.sheet !== undefined) {
      result.sheets = result.sheets.filter(function selected(sheet) {
        return sheet.name === options.sheet;
      });
      if (!result.sheets.length)
        throw new Error(`Worksheet not found: ${options.sheet}`);
    }
    result.markdown = renderWorkbook(result);
    if (Buffer.byteLength(JSON.stringify(result)) > LIMITS.resultBytes)
      throw new Error("Structured workbook exceeds 48 MB.");
    parentPort.postMessage({ ok: true, result });
  } catch (error) {
    parentPort.postMessage({ ok: false, error: `Excel: ${error.message}` });
  }
}
void run();
