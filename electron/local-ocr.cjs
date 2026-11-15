const { execFile } = require("node:child_process");
const path = require("node:path");
const jobs = new Map();
/** Runs the existing offline Windows OCR process for a literal image path. Optional abort signal cancels its child process; failures reject with readable diagnostics. */
function recognizeFile(file, { signal } = {}) {
  if (signal?.aborted)
    return Promise.reject(new Error("Local OCR was cancelled."));
  if (process.platform !== "win32")
    return Promise.reject(
      new Error("Local image/scanned PDF text reading requires Windows OCR."),
    );
  const key = file;
  if (jobs.has(key)) return jobs.get(key);
  const pending = new Promise((resolve, reject) => {
    const command = path.join(
      process.env.SystemRoot || "C:\\Windows",
      "System32",
      "WindowsPowerShell",
      "v1.0",
      "powershell.exe",
    );
    const scriptPath = path
      .join(__dirname, "windows-ocr.ps1")
      .replace(`app.asar${path.sep}`, `app.asar.unpacked${path.sep}`);
    execFile(
      command,
      [
        "-NoProfile",
        "-NonInteractive",
        "-ExecutionPolicy",
        "Bypass",
        "-File",
        scriptPath,
        "-LiteralPath",
        file,
      ],
      {
        windowsHide: true,
        timeout: 120000,
        maxBuffer: 8 * 1024 * 1024,
        encoding: "utf8",
        signal,
      },
      (error, stdout, stderr) => {
        if (error)
          return reject(
            new Error(
              error.name === "AbortError"
                ? "Local OCR was cancelled."
                : error.killed
                  ? "Local OCR timed out. Split the document into smaller files."
                  : /No Windows OCR/.test(stderr)
                    ? "No Windows OCR language is installed. Install an OCR language in Windows Settings."
                    : /100 megapixel/.test(stderr)
                      ? "Image exceeds the 100 megapixel decoding limit. Resize the image and review it again."
                      : "Local OCR could not read this file. Check that it is valid and that Windows OCR is installed.",
            ),
          );
        try {
          const result = JSON.parse(stdout.replace(/^\uFEFF/, "").trim());
          if (
            !Array.isArray(result.pages) ||
            result.pages.some(
              (p) => !Number.isInteger(p.page) || typeof p.text !== "string",
            )
          )
            throw Error();
          resolve(result);
        } catch {
          reject(new Error("Local OCR returned invalid text data."));
        }
      },
    );
  }).finally(() => jobs.delete(key));
  jobs.set(key, pending);
  return pending;
}
module.exports = { recognizeFile };
