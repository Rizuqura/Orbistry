const { ModelRuntimeError } = require("../model-errors.cjs");

function planningOnly(text) {
  return /^(?:<think>|(?:okay[, .]*|let me )?(?:i (?:need to|will|should|must) |first,? i |we need to ))/i.test(
    text.trim(),
  );
}

function validateAnswer(response, question = "", history = [], sources = []) {
  let value;
  try {
    value = JSON.parse(response.content);
  } catch {}
  if (
    response.finishReason !== "stop" ||
    !value ||
    Array.isArray(value) ||
    Object.keys(value).some((key) => !["answer", "citations"].includes(key)) ||
    typeof value.answer !== "string" ||
    !value.answer.trim() ||
    planningOnly(value.answer) ||
    (question &&
      value.answer.trim().toLocaleLowerCase() ===
        question.trim().toLocaleLowerCase())
  ) {
    throw new ModelRuntimeError(
      "MODEL_INVALID_RESPONSE",
      "The model did not finish a valid final answer. Retry, or adjust the output limit.",
      {
        reason:
          response.finishReason !== "stop"
            ? "truncated"
            : typeof value?.answer === "string" &&
                question &&
                value.answer.trim().toLowerCase() ===
                  question.trim().toLowerCase()
              ? "task_echo"
              : typeof value?.answer === "string" && planningOnly(value.answer)
                ? "planning"
                : "structure",
      },
    );
  }
  if (
    value.citations !== undefined &&
    (!Array.isArray(value.citations) ||
      value.citations.length > 32 ||
      value.citations.some(
        (id) =>
          typeof id !== "string" ||
          !sources.some((source) => source.sourceId === id),
      ))
  )
    throw new ModelRuntimeError(
      "MODEL_INVALID_RESPONSE",
      "The answer cites a source outside the attached Context Box.",
      { reason: "invalid_citation" },
    );
  const answer = value.answer.trim();
  // Repeated abstention is a valid outcome, never a reason to regenerate.
  if (/^(?:CONTEXT INSUFFICIENT|LIMITED CONTEXT)\b/.test(answer)) return answer;
  const normalize = (text) => text.toLowerCase().replace(/\s+/gu, " ").trim();
  // Short factual answers can legitimately repeat. Only reject a substantial
  // copied answer to a different question, and honor explicit repetition tasks.
  const requestedRepeat =
    /\b(?:repeat|quote|verbatim|say (?:that|it) again|same answer)\b/iu.test(
      question,
    );
  if (
    !requestedRepeat &&
    answer.length >= 160 &&
    history.some(
      (message, index) =>
        message.role === "assistant" &&
        history[index - 1]?.role === "user" &&
        normalize(history[index - 1].content) !== normalize(question) &&
        normalize(message.content) === normalize(answer),
    )
  ) {
    throw new ModelRuntimeError(
      "MODEL_INVALID_RESPONSE",
      "The model repeated an earlier answer instead of addressing the new question.",
      { reason: "repeated_answer" },
    );
  }
  return answer;
}

// Decode only a JSON answer string prefix. Withhold incomplete escapes/codepoints.
function answerPrefix(raw) {
  const match = /^\s*\{\s*"answer"\s*:\s*"/.exec(raw);
  if (!match) return "";
  let encoded = "";
  for (let i = match[0].length; i < raw.length; i++) {
    const char = raw[i];
    if (char === '"') break;
    if (char === "\\") {
      if (i + 1 >= raw.length) break;
      const length = raw[i + 1] === "u" ? 6 : 2;
      if (i + length > raw.length) break;
      encoded += raw.slice(i, i + length);
      i += length - 1;
    } else encoded += char;
  }
  try {
    const decoded = JSON.parse(`"${encoded}"`).replace(/[\uD800-\uDBFF]$/, "");
    if (planningOnly(decoded)) return "";
    // Hold the initial fragment until an opening sentence can be inspected.
    return decoded.length >= 80 ||
      /[.!?\n]/.test(decoded) ||
      /"\s*}\s*$/.test(raw)
      ? decoded
      : "";
  } catch {
    return "";
  }
}

module.exports = { answerPrefix, validateAnswer, planningOnly };
