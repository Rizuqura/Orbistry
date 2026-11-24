/** Shared runtime error/serialization contract. Legacy ModelRuntimeError names and codes remain unchanged for saved records and IPC consumers. */
const MODEL_ERROR_CODES = Object.freeze({
  INVALID_REQUEST: "MODEL_INVALID_REQUEST",
  CONTEXT_INSUFFICIENT: "CONTEXT_INSUFFICIENT",
  PULL_FAILED: "MODEL_PULL_FAILED",
  CONTEXT_INVALID: "MODEL_CONTEXT_INVALID",
  CONTEXT_TOO_LARGE: "MODEL_CONTEXT_TOO_LARGE",
  RUN_RECORD_INVALID: "MODEL_RUN_RECORD_INVALID",
  RUN_RECORD_EXISTS: "MODEL_RUN_RECORD_EXISTS",
  RUN_RECORD_NOT_FOUND: "MODEL_RUN_RECORD_NOT_FOUND",
  RUN_RECORD_FAILED: "MODEL_RUN_RECORD_FAILED",
  OFFLINE: "MODEL_OFFLINE",
  NOT_INSTALLED: "MODEL_NOT_INSTALLED",
  NOT_FOUND: "MODEL_NOT_FOUND",
  TIMEOUT: "MODEL_TIMEOUT",
  CANCELLED: "MODEL_CANCELLED",
  INVALID_RESPONSE: "MODEL_INVALID_RESPONSE",
  PROVIDER: "PROVIDER_ERROR",
  INTERNAL: "MODEL_INTERNAL_ERROR",
  BUSY: "MODEL_BUSY",
  RESTART_REQUIRED: "MODEL_RESTART_REQUIRED",
  STORAGE_INVALID: "MODEL_STORAGE_INVALID",
  STORAGE_FAILED: "MODEL_STORAGE_FAILED",
  INTERRUPTED: "MODEL_INTERRUPTED",
  AUTH_PERMISSION_DENIED: "AUTH_PERMISSION_DENIED",
  SCOPE_RESOLUTION_FAILED: "SCOPE_RESOLUTION_FAILED",
  NO_ELIGIBLE_ASSIGNMENTS: "NO_ELIGIBLE_ASSIGNMENTS",
  AGENT_ASSIGNMENT_MISMATCH: "AGENT_ASSIGNMENT_MISMATCH",
  ENTITY_ACCESS_DENIED: "ENTITY_ACCESS_DENIED",
  GATEWAY_DISPATCH_REQUIRED: "GATEWAY_DISPATCH_REQUIRED",
  CAPABILITY_NOT_AUTHORIZED: "CAPABILITY_NOT_AUTHORIZED",
  KNOWLEDGE_REFRESH_FAILED: "KNOWLEDGE_REFRESH_FAILED",
});

/** Preserves the application/IPC error constructor and legacy ModelRuntimeError name across core and AI imports. No logging or persistence occurs. */
class ModelRuntimeError extends Error {
  /** Captures a stable code, safe message and caller-redacted details for existing serializers. */
  constructor(code, message, details = {}) {
    super(message);
    this.name = "ModelRuntimeError";
    this.code = code;
    this.details = details;
  }
}

/** Serializes recognized shared/Brain errors; unknown exceptions become a content-free internal error. Pure; details must already be redacted by their producer. */
function serializeModelError(error) {
  if (error instanceof ModelRuntimeError) {
    return { code: error.code, message: error.message, details: error.details };
  }
  if (
    error?.name === "BrainScopeError" &&
    typeof error.code === "string" &&
    error.code.startsWith("BRAIN_")
  ) {
    return {
      code: error.code,
      message: error.message,
      details:
        error.details && typeof error.details === "object" ? error.details : {},
    };
  }
  return {
    code: MODEL_ERROR_CODES.INTERNAL,
    message:
      "An unexpected model runtime error occurred. Check the desktop logs for details.",
    details: {},
  };
}

module.exports = { MODEL_ERROR_CODES, ModelRuntimeError, serializeModelError };
