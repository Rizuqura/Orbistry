const { createHash } = require("node:crypto");
const { ModelRuntimeError } = require("./model-errors.cjs");
const SOURCE_TYPES = ["md", "markdown", "csv", "pdf", "png", "jpg", "jpeg"];
function contextIdentity(scope) {
  const input = scope?.sources;
  if (
    scope?.mode !== "active-context" ||
    !Array.isArray(input) ||
    !input.length ||
    input.length > 32 ||
    input.some(
      (source) =>
        !source ||
        !SOURCE_TYPES.includes(source.type) ||
        source.missing ||
        source.changed ||
        typeof source.id !== "string" ||
        !source.id ||
        typeof source.relativePath !== "string" ||
        !source.relativePath ||
        !/^[a-f0-9]{64}$/.test(source.contentHash ?? ""),
    ) ||
    new Set(input.map((source) => source.id)).size !== input.length ||
    new Set(input.map((source) => source.relativePath)).size !== input.length
  )
    throw new ModelRuntimeError(
      "MODEL_CONTEXT_INVALID",
      "Use 1 to 32 available Markdown, CSV, PDF or image OCR files in the selected Context Box or explicitly reviewed Active Context.",
    );
  const sources = input
    .map((source) => ({
      sourceId: source.id,
      relativePath: source.relativePath,
      contentHash: source.contentHash,
    }))
    .sort((a, b) =>
      a.sourceId < b.sourceId ? -1 : a.sourceId > b.sourceId ? 1 : 0,
    );
  return {
    id: createHash("sha256")
      .update(JSON.stringify({ mode: scope.mode, sources }))
      .digest("hex"),
    mode: scope.mode,
    sources,
  };
}
function validateContextIdentity(value) {
  const expected = contextIdentity({
    mode: value?.mode,
    sources: Array.isArray(value?.sources)
      ? value.sources.map((item) => ({
          id: item?.sourceId,
          relativePath: item?.relativePath,
          contentHash: item?.contentHash,
          type: item?.relativePath?.split(".").pop()?.toLowerCase(),
        }))
      : [],
  });
  if (expected.id !== value.id)
    throw new ModelRuntimeError(
      "MODEL_STORAGE_INVALID",
      "Stored source identity does not match its source references.",
    );
  return expected;
}
// Explicitly isolated source-free identity; never accepted by research bindings.
function engineIdentity(agentId) {
  return {
    id: createHash("sha256")
      .update(JSON.stringify({ mode: "engine-only", agentId }))
      .digest("hex"),
    mode: "active-context",
    sources: [],
  };
}
function validateEngineIdentity(value, agentId) {
  if (JSON.stringify(value) !== JSON.stringify(engineIdentity(agentId)))
    throw new ModelRuntimeError(
      "MODEL_STORAGE_INVALID",
      "Invalid source-free Engine chat identity.",
    );
  return value;
}
module.exports = {
  contextIdentity,
  validateContextIdentity,
  engineIdentity,
  validateEngineIdentity,
};
