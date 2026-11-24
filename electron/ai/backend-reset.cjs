const fs = require("node:fs/promises");
const path = require("node:path");
const { createHash } = require("node:crypto");
const { createReadStream } = require("node:fs");
const { DEFAULTS, validateSettings } = require("./model-registry.cjs");
const { validateCredentialState } = require("./credential-store.cjs");
const { writeJson } = require("./json-store.cjs");

/** Resolves an allowlisted reset target inside an explicit root and rejects linked ancestors. Missing targets are safe no-ops; no provider/source data is read. */
async function target(root, relative) {
  const absolute = path.resolve(root, relative);
  if (!absolute.startsWith(root + path.sep))
    throw Error("Reset target escaped its root.");
  let current = root;
  for (const part of path.relative(root, absolute).split(path.sep)) {
    current = path.join(current, part);
    try {
      if ((await fs.lstat(current)).isSymbolicLink())
        throw Error("Linked reset targets are not permitted.");
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
  return absolute;
}

/** Lists only real files/directories below one verified reset target; refuses links instead of following them during removal. */
async function inventory(directory) {
  let entries;
  try {
    entries = await fs.readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
  const files = [];
  for (const entry of entries) {
    if (entry.isSymbolicLink())
      throw Error("Linked history entries are not permitted.");
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await inventory(file)));
    else if (entry.isFile()) files.push(file);
    else throw Error("Unsupported history entry.");
  }
  return files;
}

/** Reads a known optional configuration file. Invalid JSON aborts the reset before mutation. */
async function optional(file) {
  try {
    return JSON.parse(await fs.readFile(file, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
}

/** Hashes a retained file in bounded stream chunks instead of loading its entire Engine result into memory. Read errors abort reset verification. */
async function hashFile(file) {
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(file)) hash.update(chunk);
  return hash.digest("hex");
}

/** Plans or applies the explicitly requested history/provider reset. Preserves definitions, construction, assignments, source/index/Identity data and Engine execution/results; never decrypts credentials or calls a provider. */
async function resetBackend({ profile, vault, apply = false }) {
  profile = await fs.realpath(profile);
  vault = await fs.realpath(vault);
  if (
    profile === vault ||
    profile.startsWith(vault + path.sep) ||
    vault.startsWith(profile + path.sep)
  )
    throw Error("Profile and Universe roots must not overlap.");
  const history = [
    ".wonnyy/conversations",
    ".wonnyy/model-runs",
    ".wonnyy/front-office-metrics",
    ".wonnyy/worldview/agents/gateway-tasks",
  ];
  const directories = await Promise.all(
    history.map((relative) => target(vault, relative)),
  );
  const disposable = [
    "front-office-settings.json",
    "front-office-catalog.json",
    "huggingface-infrastructure.json",
  ];
  const profileFiles = await Promise.all(
    disposable.map((relative) => target(profile, relative)),
  );
  let configurationFiles = 0;
  for (const file of profileFiles) {
    try {
      if (!(await fs.stat(file)).isFile())
        throw Error("Reset configuration target must be a regular file.");
      configurationFiles++;
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
  const credentialFile = await target(profile, "provider-credentials.json");
  const settingsFile = await target(profile, "model-settings.json");
  const credentials = await optional(credentialFile),
    settings = await optional(settingsFile);
  if (credentials !== null) validateCredentialState(credentials);
  if (settings !== null) validateSettings(settings);
  const protectedFiles = [
    await target(profile, "agents.json"),
    await target(profile, "engines.json"),
    await target(vault, ".wonnyy/worldview/agents/assignments.json"),
  ];
  for (const relative of apply
    ? [
        ".wonnyy/worldview/agents/executions",
        ".wonnyy/worldview/agents/results",
      ]
    : [])
    protectedFiles.push(...(await inventory(await target(vault, relative))));
  const preserved = new Map();
  for (const file of apply ? protectedFiles : []) {
    try {
      preserved.set(file, await hashFile(file));
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
  const files = (await Promise.all(directories.map(inventory))).flat();
  const sessionsDirectory = await target(
    vault,
    ".wonnyy/worldview/agents/sessions",
  );
  const sessions = [];
  for (const file of await inventory(sessionsDirectory)) {
    if (!file.endsWith(".json"))
      throw Error("Unexpected assigned session file.");
    const session = await optional(file);
    if (
      !session ||
      !Array.isArray(session.messages) ||
      !Array.isArray(session.executions) ||
      !Array.isArray(session.requests) ||
      !session.requests.every(
        (request) =>
          request &&
          typeof request === "object" &&
          typeof request.status === "string",
      )
    )
      throw Error("Invalid assigned session; reset aborted.");
    sessions.push({ file, session });
  }
  const result = {
    applied: apply,
    historyFiles: files.length,
    assignedMessages: sessions.reduce(
      (sum, item) => sum + item.session.messages.length,
      0,
    ),
    providerConfigurationFiles: configurationFiles,
    nvidiaCredentialRetained: Boolean(credentials?.nvidia),
    constructionAndAssignmentsPreserved: null,
  };
  if (!apply) return result;
  // All roots, targets, JSON and directory entries have been checked before mutation.
  for (const directory of directories)
    await fs.rm(directory, { recursive: true, force: true });
  for (const file of profileFiles) await fs.rm(file, { force: true });
  if (credentials)
    await writeJson(credentialFile, {
      schemaVersion: 1,
      gemini: null,
      ...(credentials.nvidia ? { nvidia: credentials.nvidia } : {}),
    });
  await writeJson(
    settingsFile,
    settings?.providerId === "nvidia"
      ? settings
      : { ...DEFAULTS, providerId: "nvidia" },
  );
  for (const { file, session } of sessions) {
    session.messages = [];
    session.error = null;
    for (const request of session.requests)
      if (request.status === "awaiting-approval") request.status = "cancelled";
    await writeJson(file, session);
  }
  for (const [file, hash] of preserved) {
    if ((await hashFile(file)) !== hash)
      throw Error("Protected reset state changed.");
  }
  if ((await optional(credentialFile))?.nvidia !== credentials?.nvidia)
    throw Error("NVIDIA credential changed.");
  result.constructionAndAssignmentsPreserved = true;
  return result;
}
module.exports = { resetBackend };
