// App-owned JSON adapter. Neither documents nor models supply process options.
const fs = require("node:fs/promises");
const path = require("node:path");
const { spawn } = require("node:child_process");
const { createHash } = require("node:crypto");
const { z, parse } = require("./schemas.cjs");
const { ModelRuntimeError } = require("./model-errors.cjs");
const sha = (bytes) => createHash("sha256").update(bytes).digest("hex");
const monthSchema = z.string().regex(/^(19|20|21)\d{2}-(0[1-9]|1[0-2])$/);
const argumentsSchema = z.object({ month: monthSchema.optional() }).strict();
const responseSchema = z
  .object({
    status: z.enum([
      "SCHEDULED",
      "FROZEN",
      "GENERATING",
      "PUBLISHED",
      "PARTIAL",
      "BLOCKED",
      "FAILED",
      "READY",
    ]),
    issue_month: monthSchema.optional(),
    month: monthSchema.optional(),
    primary_output: z
      .object({
        path: z.string().min(1).max(4096),
        media_type: z.literal("application/pdf"),
        sha256: z.string().regex(/^[a-f0-9]{64}$/),
      })
      .passthrough()
      .optional(),
    report_path: z.string().max(4096).nullable().optional(),
  })
  .passthrough();
function fail(message, code = "MODEL_INVALID_RESPONSE") {
  throw new ModelRuntimeError(code, message);
}
function contained(root, target) {
  const relative = path.relative(root, target);
  return (
    relative !== "" &&
    !relative.startsWith(".." + path.sep) &&
    relative !== ".." &&
    !path.isAbsolute(relative)
  );
}
async function unlinked(target) {
  const absolute = path.resolve(target);
  for (let p = absolute; path.dirname(p) !== p; p = path.dirname(p)) {
    if ((await fs.lstat(p)).isSymbolicLink())
      fail(
        "Linked bundle/report paths are not allowed. Extract a fresh bundle.",
      );
  }
  // Windows native pickers/temp paths may use 8.3 names or different casing.
  // Canonicalize after rejecting links; compare this identity on subsequent runs.
  return fs.realpath(absolute);
}
async function boundedRead(file, maxBytes) {
  await unlinked(file);
  const handle = await fs.open(file, "r");
  try {
    const info = await handle.stat();
    if (!info.isFile() || info.size > maxBytes)
      fail("Engine file is missing, oversized or not a regular file.");
    // Read from the checked descriptor with a hard allocation bound, including growth races.
    const bytes = Buffer.alloc(info.size + 1);
    let length = 0;
    while (length < bytes.length) {
      const read = await handle.read(
        bytes,
        length,
        bytes.length - length,
        length,
      );
      if (!read.bytesRead) break;
      length += read.bytesRead;
    }
    if (length !== info.size)
      fail(
        "Engine file changed while reading. Retry after the bundle is idle.",
      );
    return bytes.subarray(0, length);
  } finally {
    await handle.close();
  }
}
async function inspectBundle(folder) {
  try {
    return await inspectBundleFiles(folder);
  } catch (error) {
    if (error instanceof ModelRuntimeError) throw error;
    fail(
      "Cannot validate CHronoZ. Choose the extracted Online 1.0.0 portable folder containing package_manifest.json, runtime and src.",
      "MODEL_NOT_INSTALLED",
    );
  }
}
async function inspectBundleFiles(folder) {
  const root = await unlinked(folder);
  if (!(await fs.stat(root)).isDirectory())
    fail("Choose the extracted CHronoZ bundle folder.");
  const manifestBytes = await boundedRead(
    path.join(root, "package_manifest.json"),
    8 * 1024 * 1024,
  );
  let manifest;
  try {
    manifest = JSON.parse(manifestBytes.toString("utf8"));
  } catch {
    fail("Invalid CHronoZ package manifest.");
  }
  if (
    manifest.integration_version !== "1.0.0" ||
    manifest.engine_version !== "0.5.0" ||
    manifest.platform !== "Windows x64" ||
    !Array.isArray(manifest.files) ||
    manifest.files.length > 20000
  )
    fail("Expected CHronoZ Online 1.0.0 Windows x64 portable bundle.");
  const pinned = new Map();
  for (const row of manifest.files) {
    if (
      typeof row.path !== "string" ||
      !/^[a-f0-9]{64}$/.test(row.sha256) ||
      row.path.includes("\\") ||
      !contained(root, path.resolve(root, row.path))
    )
      fail("Unsafe package manifest entry.");
    if (pinned.has(row.path)) fail("Duplicate package manifest entry.");
    pinned.set(row.path, row.sha256);
  }
  for (const required of [
    "runtime/python.exe",
    "runtime/python314._pth",
    "src/chronoz/__init__.py",
    "src/chronoz/issue/trigger.py",
    "src/chronoz/issue/report_contract.json",
  ])
    if (!pinned.has(required)) fail("Incomplete portable bundle: " + required);
  // Pin ALL runtime/import files, including DLLs, .pth and sitecustomize. Reject added
  // importable files as well as changed ones. -B prevents new bytecode in this tree.
  const identity = createHash("sha256").update(manifestBytes);
  let count = 0,
    total = 0;
  async function walk(directory) {
    for (const entry of (
      await fs.readdir(directory, { withFileTypes: true })
    ).sort((a, b) => a.name.localeCompare(b.name))) {
      const file = path.join(directory, entry.name);
      if (entry.isSymbolicLink()) fail("Linked runtime files are not allowed.");
      if (entry.isDirectory()) {
        await walk(file);
        continue;
      }
      const relative = path.relative(root, file).split(path.sep).join("/");
      if (++count > 20000 || !pinned.has(relative))
        fail(
          "Unregistered runtime file. Extract a fresh CHronoZ bundle: " +
            relative,
        );
      const bytes = await boundedRead(file, 64 * 1024 * 1024);
      total += bytes.length;
      if (total > 512 * 1024 * 1024 || sha(bytes) !== pinned.get(relative))
        fail("Bundle integrity check failed: " + relative);
      identity.update(relative).update(sha(bytes));
    }
  }
  await walk(path.join(root, "runtime"));
  await walk(path.join(root, "src"));
  for (const relative of pinned.keys())
    if (relative.startsWith("runtime/") || relative.startsWith("src/"))
      await fs.access(path.join(root, relative));
  const tool = JSON.parse(
    (await boundedRead(path.join(root, "chronoz-tool.json"), 65536)).toString(
      "utf8",
    ),
  );
  if (
    tool?.function?.name !== "chronoz_issue" ||
    !tool.function.parameters?.properties?.operation?.enum?.includes(
      "get_report",
    )
  )
    fail("CHronoZ JSON entrypoint is missing.");
  identity.update(JSON.stringify(tool));
  return {
    root,
    fingerprint: identity.digest("hex"),
    version: manifest.integration_version,
  };
}
function runTrigger(
  bundle,
  operation,
  args,
  {
    signal,
    timeoutMs = 60000,
    maxOutputBytes = 1024 * 1024,
    spawnImpl = spawn,
  } = {},
) {
  parse(argumentsSchema, args);
  if (!["get_report", "status"].includes(operation))
    fail("Engine operation is not permitted.", "MODEL_INVALID_REQUEST");
  if (signal?.aborted)
    return Promise.reject(
      new ModelRuntimeError("MODEL_CANCELLED", "Engine request canceled."),
    );
  return new Promise((resolve, reject) => {
    let child,
      timer,
      settled = false,
      failure,
      out = [],
      outSize = 0,
      errSize = 0;
    const finish = (error, value) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      signal?.removeEventListener("abort", cancel);
      error ? reject(error) : resolve(value);
    };
    const stop = (code, message) => {
      failure ??= new ModelRuntimeError(code, message);
      child?.kill();
    };
    const cancel = () => stop("MODEL_CANCELLED", "Engine request canceled.");
    try {
      // Minimal environment: do not inherit provider keys, FRED keys, PYTHONPATH,
      // NODE_OPTIONS or executable search paths from the host application.
      const env = {};
      for (const key of ["SystemRoot", "WINDIR", "TEMP", "TMP"])
        if (process.env[key]) env[key] = process.env[key];
      child = spawnImpl(
        path.join(bundle.root, "runtime", "python.exe"),
        ["-B", "-m", "chronoz.issue.trigger", bundle.root],
        {
          cwd: bundle.root,
          shell: false,
          windowsHide: true,
          env,
          stdio: ["pipe", "pipe", "pipe"],
        },
      );
      signal?.addEventListener("abort", cancel, { once: true });
      if (signal?.aborted) cancel();
      timer = setTimeout(
        () =>
          stop(
            "MODEL_TIMEOUT",
            "CHronoZ timed out. Inspect the bundle and retry.",
          ),
        timeoutMs,
      );
      child.on("error", () =>
        finish(
          new ModelRuntimeError(
            "MODEL_NOT_INSTALLED",
            "Cannot start the bundled Python interpreter. Re-extract CHronoZ.",
          ),
        ),
      );
      child.stdout.on("data", (data) => {
        outSize += data.length;
        if (outSize > maxOutputBytes)
          stop(
            "MODEL_INVALID_RESPONSE",
            "CHronoZ stdout exceeded the output limit.",
          );
        else out.push(data);
      });
      child.stderr.on("data", (data) => {
        errSize += data.length;
        if (errSize > maxOutputBytes)
          stop(
            "MODEL_INVALID_RESPONSE",
            "CHronoZ stderr exceeded the output limit.",
          );
      });
      child.stdin.on("error", () =>
        stop(
          "MODEL_INVALID_RESPONSE",
          "CHronoZ did not accept its JSON request.",
        ),
      );
      child.on("close", (exitCode) => {
        if (failure) return finish(failure);
        try {
          const payload = parse(
            responseSchema,
            JSON.parse(Buffer.concat(out).toString("utf8")),
            "MODEL_INVALID_RESPONSE",
            "CHronoZ returned an invalid JSON response.",
          );
          const expected = ["BLOCKED", "FAILED"].includes(payload.status)
            ? 1
            : payload.status === "PARTIAL"
              ? 2
              : 0;
          if (
            exitCode !== expected ||
            (args.month &&
              (payload.issue_month ?? payload.month) &&
              args.month !== (payload.issue_month ?? payload.month))
          )
            fail(
              "CHronoZ exit code or report month does not match its response.",
            );
          if (
            ["PUBLISHED", "PARTIAL"].includes(payload.status) &&
            !payload.primary_output
          )
            fail("CHronoZ returned no PDF for a published issue.");
          finish(null, payload);
        } catch (error) {
          finish(
            error instanceof ModelRuntimeError
              ? error
              : new ModelRuntimeError(
                  "MODEL_INVALID_RESPONSE",
                  "CHronoZ must return exactly one JSON object.",
                ),
          );
        }
      });
      child.stdin.end(JSON.stringify({ operation, ...args }) + "\n");
    } catch {
      finish(
        new ModelRuntimeError(
          "MODEL_NOT_INSTALLED",
          "Cannot start the approved CHronoZ bundle.",
        ),
      );
    }
  });
}
async function verifyReport(bundle, payload, requestedMonth) {
  const output = payload.primary_output;
  if (!output) return null;
  if (!["PUBLISHED", "PARTIAL", "READY"].includes(payload.status))
    fail("Unexpected PDF for an unavailable issue.");
  const month = parse(
    monthSchema,
    payload.issue_month ?? payload.month,
    "MODEL_INVALID_RESPONSE",
    "Report is missing its issue month.",
  );
  if (requestedMonth && requestedMonth !== month)
    fail("Returned PDF belongs to another month.");
  const expected = path.join(bundle.root, "outputs", month);
  if (
    !path.isAbsolute(output.path) ||
    !contained(expected, output.path) ||
    path.extname(output.path).toLowerCase() !== ".pdf"
  )
    fail("Report path is outside the approved monthly output directory.");
  await unlinked(expected);
  await unlinked(output.path);
  if (!contained(await fs.realpath(expected), await fs.realpath(output.path)))
    fail("Report escaped the approved issue folder.");
  const bytes = await boundedRead(output.path, 32 * 1024 * 1024);
  if (
    bytes.length < 5 ||
    bytes.subarray(0, 5).toString() !== "%PDF-" ||
    sha(bytes) !== output.sha256
  )
    fail(
      "PDF checksum or file signature mismatch. Restore the original CHronoZ issue.",
    );
  return { bytes, month, path: output.path, sha256: output.sha256 };
}
module.exports = {
  inspectBundle,
  runTrigger,
  verifyReport,
  argumentsSchema,
  monthSchema,
  sha,
  unlinked,
  boundedRead,
};
