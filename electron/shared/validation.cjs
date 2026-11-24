const { ModelRuntimeError } = require("./runtime-errors.cjs");

/** Validates caller-supplied Zod contracts without serializing invalid inputs; preserves legacy error codes/messages, including credential redaction. Pure. */
function parse(
  schema,
  input,
  code = "MODEL_INVALID_REQUEST",
  message = "The request or provider response has an invalid format.",
) {
  const result = schema.safeParse(input);
  if (!result.success) throw new ModelRuntimeError(code, message);
  return result.data;
}

module.exports = { parse };
