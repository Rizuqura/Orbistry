const crypto = require("node:crypto");
const fs = require("node:fs/promises");
const path = require("node:path");
const { MODEL_ERROR_CODES, ModelRuntimeError } = require("./model-errors.cjs");
const { safeDirectory, rejectSymlink } = require("./json-store.cjs");
const { validateContextIdentity } = require("./context-identity.cjs");
const { validateSettings } = require("./model-registry.cjs");

const RUN_SCHEMA_VERSION = 1;
const RUN_ID_PATTERN = /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,127}$/u;
const CONTENT_HASH_PATTERN = /^[a-f0-9]{64}$/u;

const runsDirectory = (rootPath) =>
  path.join(path.resolve(rootPath), ".wonnyy", "model-runs");

function invalidRecord(message, details = {}) {
  throw new ModelRuntimeError(
    MODEL_ERROR_CODES.RUN_RECORD_INVALID,
    message,
    details,
  );
}

function validateError(value) {
  if (value === null) return null;
  if (
    !value ||
    typeof value !== "object" ||
    Array.isArray(value) ||
    typeof value.code !== "string" ||
    typeof value.message !== "string" ||
    !value.details ||
    typeof value.details !== "object" ||
    Array.isArray(value.details)
  )
    invalidRecord("Model run error metadata is malformed.");
  return {
    code: value.code,
    message: value.message,
    details: structuredClone(value.details),
  };
}

function validateSource(value, field, allowMissingHash = false) {
  if (!value || typeof value !== "object" || Array.isArray(value))
    invalidRecord(`Model run ${field} source is malformed.`);
  for (const key of ["sourceId", "relativePath"])
    if (typeof value[key] !== "string" || !value[key])
      invalidRecord(`Model run ${field} source has an invalid ${key}.`);
  if (
    (!allowMissingHash &&
      (typeof value.contentHash !== "string" ||
        !CONTENT_HASH_PATTERN.test(value.contentHash))) ||
    (allowMissingHash &&
      value.contentHash !== null &&
      (typeof value.contentHash !== "string" ||
        !CONTENT_HASH_PATTERN.test(value.contentHash)))
  )
    invalidRecord(`Model run ${field} source has an invalid contentHash.`);
  return {
    sourceId: value.sourceId,
    relativePath: value.relativePath,
    contentHash: value.contentHash,
  };
}

function validateRunRecord(value) {
  if (value?.schemaVersion === 3)
    return require("./llm-front-office/conversation-manager.cjs").validateExperimentalRun(
      value,
    );
  if (!value || typeof value !== "object" || Array.isArray(value))
    invalidRecord("Model run record must be an object.");
  const allowed = new Set([
    "schemaVersion",
    "runId",
    "status",
    "startedAt",
    "completedAt",
    "durationMs",
    "scope",
    "provider",
    "model",
    "promptVersion",
    "userMessage",
    "sourcesAvailable",
    "sourcesActuallyRead",
    "response",
    "finishReason",
    "usage",
    "error",
    ...(value.schemaVersion === 2
      ? [
          "conversationId",
          "requestId",
          "contextIdentity",
          "settings",
          "diagnostics",
        ]
      : []),
  ]);
  const unknown = Object.keys(value).filter((field) => !allowed.has(field));
  if (unknown.length)
    invalidRecord("Model run record contains unsupported fields.", {
      fields: unknown,
    });
  if (value.schemaVersion === 2) {
    try {
      if (
        value.diagnostics?.engineOnly === true &&
        value.diagnostics.engineToolTurn !== true
      )
        throw new Error("Source-free runs require the Engine runtime.");
      if (value.diagnostics?.engineToolTurn === true) {
        require("./schemas.cjs").parse(
          require("./schemas.cjs")
            .z.array(require("./engine-chat.cjs").reportSchema)
            .max(1),
          value.diagnostics.engineReports,
        );
        if (value.sourcesAvailable?.length || value.sourcesActuallyRead?.length)
          throw new Error(
            "Engine reports are attachments, not reviewed evidence.",
          );
      }
      if (value.diagnostics?.standalone === true) {
        if (
          value.sourcesAvailable?.length ||
          value.sourcesActuallyRead?.length ||
          value.diagnostics.engineToolTurn
        )
          throw new Error("Standalone runs cannot contain evidence or tools.");
        if (value.contextIdentity?.sources?.length)
          validateContextIdentity(value.contextIdentity);
        else if (
          value.contextIdentity?.id ===
          require("./context-identity.cjs").engineIdentity(
            value.diagnostics.agentId,
          ).id
        )
          require("./context-identity.cjs").validateEngineIdentity(
            value.contextIdentity,
            value.diagnostics.agentId,
          );
        else
          require("./context-identity.cjs").validateStandaloneIdentity(
            value.contextIdentity,
            value.diagnostics.agentId,
          );
      } else if (value.diagnostics?.engineOnly === true)
        require("./context-identity.cjs").validateEngineIdentity(
          value.contextIdentity,
          value.diagnostics.agentId,
        );
      else validateContextIdentity(value.contextIdentity);
      validateSettings(value.settings);
      if (
        !value.diagnostics ||
        typeof value.diagnostics !== "object" ||
        Array.isArray(value.diagnostics)
      )
        throw new Error("Invalid diagnostics");
    } catch {
      invalidRecord(
        "Conversation run context, settings, or diagnostics are invalid.",
      );
    }
  }
  if (![1, 2].includes(value.schemaVersion))
    invalidRecord("Model run schema version is unsupported.");
  if (
    value.schemaVersion === 2 &&
    (!RUN_ID_PATTERN.test(value.conversationId ?? "") ||
      !RUN_ID_PATTERN.test(value.requestId ?? "") ||
      !CONTENT_HASH_PATTERN.test(value.contextIdentity?.id ?? "") ||
      !value.settings ||
      !value.diagnostics)
  )
    invalidRecord("Conversation run metadata is incomplete.");
  if (typeof value.runId !== "string" || !RUN_ID_PATTERN.test(value.runId))
    invalidRecord("Model run ID is invalid.");
  if (
    !(
      value.schemaVersion === 2
        ? ["succeeded", "failed", "cancelled"]
        : ["succeeded", "failed"]
    ).includes(value.status)
  )
    invalidRecord("Model run status is invalid.");
  const startedMs = Date.parse(value.startedAt);
  const completedMs = Date.parse(value.completedAt);
  if (
    !Number.isFinite(startedMs) ||
    !Number.isFinite(completedMs) ||
    completedMs < startedMs
  )
    invalidRecord("Model run timestamps are invalid.");
  if (!Number.isFinite(value.durationMs) || value.durationMs < 0)
    invalidRecord("Model run duration is invalid.");
  if (
    typeof value.provider !== "string" ||
    !value.provider ||
    typeof value.model !== "string" ||
    !value.model
  )
    invalidRecord("Model run provider or model is invalid.");
  if (typeof value.userMessage !== "string" || !value.userMessage)
    invalidRecord("Model run question is invalid.");
  if (
    !Array.isArray(value.sourcesAvailable) ||
    !Array.isArray(value.sourcesActuallyRead)
  )
    invalidRecord("Model run source collections are invalid.");
  const scope =
    value.scope === null
      ? null
      : {
          id: value.scope?.id,
          mode: value.scope?.mode,
          manifestVersion: value.scope?.manifestVersion,
        };
  if (
    scope &&
    [scope.id, scope.mode, scope.manifestVersion].some(
      (item) => typeof item !== "string" || !item,
    )
  )
    invalidRecord("Model run scope metadata is malformed.");
  if (scope && !["universe", "station", "active-context"].includes(scope.mode))
    invalidRecord("Model run scope mode is invalid.");
  const succeeded = value.status === "succeeded";
  if (
    succeeded &&
    (typeof value.response !== "string" ||
      !value.response ||
      typeof value.finishReason !== "string" ||
      !value.finishReason ||
      value.error !== null ||
      !scope ||
      typeof value.promptVersion !== "string" ||
      !value.promptVersion)
  )
    invalidRecord("Successful model run data is incomplete.");
  if (
    !succeeded &&
    (value.response !== null ||
      value.finishReason !== null ||
      value.error === null)
  )
    invalidRecord("Failed model run data is incomplete.");
  let usage = null;
  if (value.usage !== null) {
    if (
      !value.usage ||
      typeof value.usage !== "object" ||
      Array.isArray(value.usage) ||
      Object.keys(value.usage).some(
        (field) =>
          !["promptTokens", "completionTokens", "totalDurationNs"].includes(
            field,
          ),
      )
    )
      invalidRecord("Model run usage is malformed.");
    for (const field of ["promptTokens", "completionTokens", "totalDurationNs"])
      if (
        value.usage[field] !== null &&
        (!Number.isFinite(value.usage[field]) || value.usage[field] < 0)
      )
        invalidRecord("Model run usage is malformed.");
    usage = {
      promptTokens: value.usage.promptTokens ?? null,
      completionTokens: value.usage.completionTokens ?? null,
      totalDurationNs: value.usage.totalDurationNs ?? null,
    };
  }
  return {
    schemaVersion: value.schemaVersion,
    ...(value.schemaVersion === 2
      ? {
          conversationId: value.conversationId,
          requestId: value.requestId,
          contextIdentity: structuredClone(value.contextIdentity),
          settings: structuredClone(value.settings),
          diagnostics: structuredClone(value.diagnostics),
        }
      : {}),
    runId: value.runId,
    status: value.status,
    startedAt: value.startedAt,
    completedAt: value.completedAt,
    durationMs: value.durationMs,
    scope,
    provider: value.provider,
    model: value.model,
    promptVersion: value.promptVersion ?? null,
    userMessage: value.userMessage,
    sourcesAvailable: value.sourcesAvailable.map((source) =>
      validateSource(source, "available", true),
    ),
    sourcesActuallyRead: value.sourcesActuallyRead.map((source) =>
      validateSource(source, "read"),
    ),
    response: value.response,
    finishReason: value.finishReason,
    usage,
    error: validateError(value.error),
  };
}

function runPath(rootPath, runId) {
  if (typeof runId !== "string" || !RUN_ID_PATTERN.test(runId))
    invalidRecord("Model run ID is invalid.");
  return path.join(runsDirectory(rootPath), `${runId}.json`);
}

async function createModelRun(rootPath, rawRecord) {
  const record = validateRunRecord(rawRecord);
  const directory = runsDirectory(rootPath);
  await safeDirectory(directory);
  const target = runPath(rootPath, record.runId);
  const temporary = path.join(
    directory,
    `.${record.runId}.${process.pid}.${crypto.randomUUID()}.tmp`,
  );
  try {
    const file = await fs.open(temporary, "wx");
    try {
      await file.writeFile(`${JSON.stringify(record, null, 2)}\n`);
      await file.sync();
    } finally {
      await file.close();
    }
    try {
      await fs.link(temporary, target);
    } catch (error) {
      if (error?.code === "EEXIST")
        throw new ModelRuntimeError(
          MODEL_ERROR_CODES.RUN_RECORD_EXISTS,
          "An immutable record already exists for this model run.",
          { runId: record.runId },
        );
      throw error;
    }
    return structuredClone(record);
  } catch (error) {
    if (error instanceof ModelRuntimeError) throw error;
    throw new ModelRuntimeError(
      MODEL_ERROR_CODES.RUN_RECORD_FAILED,
      "The model run record could not be saved.",
      {
        runId: record.runId,
        cause: error instanceof Error ? error.message : String(error),
      },
    );
  } finally {
    await fs.rm(temporary, { force: true }).catch(() => {});
  }
}

async function readModelRun(rootPath, runId) {
  try {
    await safeDirectory(runsDirectory(rootPath));
    await rejectSymlink(runPath(rootPath, runId));
    return validateRunRecord(
      JSON.parse(await fs.readFile(runPath(rootPath, runId), "utf8")),
    );
  } catch (error) {
    if (error instanceof ModelRuntimeError) throw error;
    if (error?.code === "ENOENT")
      throw new ModelRuntimeError(
        MODEL_ERROR_CODES.RUN_RECORD_NOT_FOUND,
        "Model run record was not found.",
        { runId },
      );
    throw new ModelRuntimeError(
      MODEL_ERROR_CODES.RUN_RECORD_INVALID,
      "Model run record is unreadable or malformed.",
      { runId },
    );
  }
}

async function listModelRuns(rootPath) {
  let entries;
  try {
    entries = await fs.readdir(runsDirectory(rootPath), {
      withFileTypes: true,
    });
  } catch (error) {
    if (error?.code === "ENOENT") return [];
    throw error;
  }
  const records = [];
  for (const entry of entries
    .filter((item) => item.isFile() && item.name.endsWith(".json"))
    .sort((a, b) => a.name.localeCompare(b.name)))
    records.push(await readModelRun(rootPath, entry.name.slice(0, -5)));
  return records.sort(
    (a, b) =>
      b.startedAt.localeCompare(a.startedAt) || a.runId.localeCompare(b.runId),
  );
}

module.exports = {
  RUN_SCHEMA_VERSION,
  createModelRun,
  listModelRuns,
  readModelRun,
  validateRunRecord,
};
