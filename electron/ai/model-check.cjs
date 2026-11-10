const { DEFAULTS } = require("./model-registry.cjs");
const { ANSWER_FORMAT } = require("./orchestrator.cjs");
const { buildContextMessages } = require("./prompt-builder.cjs");
const { validateAnswer } = require("./response-validation.cjs");
const { serializeModelError } = require("./model-errors.cjs");

async function checkRemoteModel(provider, providerId, model, signal) {
  const started = Date.now();
  try {
    const { messages } = buildContextMessages({
      userMessage:
        "What percentage is allocated to bonds? Reply exactly with the percentage, such as 10%.",
      source: {
        sourceId: "orbistry-model-check",
        relativePath: "synthetic-check.md",
        type: "md",
        contentHash: "a".repeat(64),
        content:
          "Synthetic allocation example: cash 25%, bonds 40%, stocks 35%.",
      },
    });
    const response = await provider.complete({
      model,
      messages,
      format: ANSWER_FORMAT,
      signal,
      settings: {
        ...DEFAULTS,
        providerId,
        modelId: model,
        streaming: false,
        absoluteTimeoutMs: 30000,
      },
    });
    let passed = false;
    try {
      passed = validateAnswer(response).trim() === "40%";
    } catch {}
    return {
      providerId,
      model,
      passed,
      latencyMs: Date.now() - started,
      checkedAt: new Date().toISOString(),
      message: passed
        ? "Passed synthetic source check"
        : "Responded, but did not pass the source-answer check",
    };
  } catch (error) {
    const safe = serializeModelError(error);
    return {
      providerId,
      model,
      passed: false,
      latencyMs: Date.now() - started,
      checkedAt: new Date().toISOString(),
      message: safe.message,
      code: safe.code,
    };
  }
}
module.exports = { checkRemoteModel };
