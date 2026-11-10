const { ModelRuntimeError } = require("./model-errors.cjs");
const AGENT_ID = "wonnyy-agent";
const AGENT_DEFINITIONS = Object.freeze({
  [AGENT_ID]: { displayName: "Orbistry Agent", letter: "O" },
  chronoz: { displayName: "CHronoZ", letter: "C" },
});
const POLICY_VERSION = require("./runtime-context.cjs").KERNEL_VERSION;
const PROTECTED_POLICY = require("./runtime-context.cjs").RUNTIME_KERNEL;
function validateCustomInstructions(value) {
  if (
    typeof value !== "string" ||
    value.length > 8000 ||
    /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/u.test(value)
  )
    throw new ModelRuntimeError(
      "MODEL_INVALID_REQUEST",
      "Custom instructions must be text of at most 8000 characters.",
    );
  if (
    /(?:ignore|override|disable|bypass)\s+(?:(?:all|the|your|protected|system|context|orbistry|qterminal|wonnyy|chronoz|previous|safety)\s+){0,4}(?:rules|policy|instructions|boundaries|restrictions)|(?:browse|search)\s+(?:the\s+)?(?:web|internet|unbound\s+vault)/i.test(
      value,
    )
  )
    throw new ModelRuntimeError(
      "MODEL_INVALID_REQUEST",
      "Custom instructions conflict with protected context rules. Use tone, format and task preferences only.",
    );
  return value.trim();
}
module.exports = {
  AGENT_ID,
  AGENT_DEFINITIONS,
  POLICY_VERSION,
  PROTECTED_POLICY,
  validateCustomInstructions,
};
