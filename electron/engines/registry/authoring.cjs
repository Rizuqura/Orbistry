const fs = require("node:fs/promises");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const { manifest, id, LIMITS, fail } = require("../contracts/contract.cjs");
const { sealPackage, inspectPackage, parseJson } = require("./package.cjs");
const { safeDirectory } = require("../../core/persistence/json-store.cjs");

/** Creates an editable self-contained starter package in a new explicit folder. Refuses existing directories; creates no registration or trust grant. */
async function initPackage(directory, engineId) {
  id.parse(engineId);
  const root = path.resolve(directory);
  await safeDirectory(path.dirname(root));
  await fs.mkdir(root);
  const input = {
    type: "object",
    properties: { left: { type: "number" }, right: { type: "number" } },
    required: ["left", "right"],
    additionalProperties: false,
  };
  const output = {
    type: "object",
    properties: { sum: { type: "number" } },
    required: ["sum"],
    additionalProperties: false,
  };
  await fs.writeFile(
    path.join(root, "index.cjs"),
    `/** Executes a deterministic operation using only explicit inputs. No source writes or network access. */\nasync function execute({ operation, input, context }) {\n  if (operation !== "add") throw Error("Unsupported operation");\n  return { sum: input.left + input.right };\n}\nmodule.exports = { execute };\n`,
    { flag: "wx" },
  );
  await fs.writeFile(
    path.join(root, "README.md"),
    `# ${engineId}\n\nOrbistry Engine protocol v1 starter. Export async execute({ operation, input, context }) from index.cjs. Context contains only host-generated entityId and executionId. After editing, run the registry CLI's seal and check commands. Review code before trust.\n`,
    { flag: "wx" },
  );
  await fs.writeFile(
    path.join(root, "engine_manifest.json"),
    JSON.stringify(
      {
        schema_version: 2,
        protocol: "orbistry.engine/1",
        engine_id: engineId,
        engine_version: "1.0.0",
        name: engineId,
        description: "Deterministic addition starter engine.",
        entry: "index.cjs",
        operations: [
          {
            id: "add",
            description: "Add two explicit numbers.",
            input_schema: input,
            output_schema: output,
            read_only: true,
            network: "none",
            timeout_ms: 10000,
          },
        ],
        files: {},
      },
      null,
      2,
    ),
  );
  return sealPackage(root);
}

/** Downloads a response within fixed limits. No redirect following, HTML evaluation, install scripts or credential forwarding occur. */
async function download(url, maximum, fetchImpl, signal) {
  const response = await fetchImpl(url, { redirect: "error", signal });
  if (!response.ok || !response.body)
    fail("ENGINE_DOWNLOAD_FAILED", "Engine download failed.");
  if (Number(response.headers.get("content-length")) > maximum)
    fail(
      "ENGINE_PACKAGE_TOO_LARGE",
      "Engine download exceeded its byte limit.",
    );
  const chunks = [];
  let total = 0;
  for await (const chunk of response.body) {
    total += chunk.length;
    if (total > maximum)
      fail(
        "ENGINE_PACKAGE_TOO_LARGE",
        "Engine download exceeded its byte limit.",
      );
    chunks.push(Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}

/** Pulls an HTTPS manifest plus same-directory integrity-listed files into untrusted staging, then installs verified bytes. Explicit trust remains a separate human action. */
async function pullPackage(
  registry,
  source,
  { fetchImpl = fetch, signal } = {},
) {
  let url;
  try {
    url = new URL(source);
  } catch {
    fail("ENGINE_SOURCE_INVALID", "Provide an HTTPS engine_manifest.json URL.");
  }
  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    !url.pathname.endsWith("/engine_manifest.json")
  )
    fail(
      "ENGINE_SOURCE_INVALID",
      "Pull requires a credential-free HTTPS manifest URL without query or fragment.",
    );
  const deadline = AbortSignal.timeout(60000),
    combined = signal ? AbortSignal.any([signal, deadline]) : deadline;
  const raw = await download(url.href, 256 * 1024, fetchImpl, combined),
    checked = manifest(parseJson(raw));
  const stage = await registry.location(
    "registry",
    ".download-" + randomUUID(),
  );
  await safeDirectory(stage);
  try {
    await fs.writeFile(path.join(stage, "engine_manifest.json"), raw, {
      flag: "wx",
    });
    let total = raw.length;
    for (const name of Object.keys(checked.files).sort()) {
      const target = new URL(
        name.split("/").map(encodeURIComponent).join("/"),
        url,
      );
      if (
        target.origin !== url.origin ||
        !target.pathname.startsWith(
          url.pathname.slice(0, -"engine_manifest.json".length),
        )
      )
        fail(
          "ENGINE_SOURCE_INVALID",
          "Package download escaped its source directory.",
        );
      const bytes = await download(
        target.href,
        Math.min(LIMITS.fileBytes, LIMITS.packageBytes - total),
        fetchImpl,
        combined,
      );
      total += bytes.length;
      const file = path.join(stage, name);
      await safeDirectory(path.dirname(file));
      await fs.writeFile(file, bytes, { flag: "wx" });
    }
    await inspectPackage(stage);
    return await registry.install(stage, { source: url.href });
  } finally {
    await fs.rm(stage, { recursive: true, force: true });
  }
}
module.exports = { initPackage, pullPackage };
