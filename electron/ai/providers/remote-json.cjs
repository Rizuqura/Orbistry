const { ModelRuntimeError } = require("../model-errors.cjs");
/** Reads bounded provider JSON without retaining response/error bodies in diagnostics. */
async function readRemoteJson(response) {
  let bytes = 0,
    text = "";
  const decoder = new TextDecoder();
  for await (const part of response.body) {
    bytes += part.byteLength;
    if (bytes > 4 * 1024 * 1024)
      throw new ModelRuntimeError(
        "MODEL_INVALID_RESPONSE",
        "Provider response exceeded the metadata limit.",
      );
    text += decoder.decode(part, { stream: true });
  }
  try {
    return JSON.parse(text + decoder.decode());
  } catch {
    throw new ModelRuntimeError(
      "MODEL_INVALID_RESPONSE",
      "Provider returned invalid JSON.",
    );
  }
}
module.exports = { readRemoteJson };
