/** Conservatively estimates UTF-8 token/framing cost for explicit messages. Shared with deterministic chunking; no inference, truncation or external state. */
const estimateTokens = (messages) =>
  messages.reduce(
    (sum, message) =>
      sum + Math.ceil(Buffer.byteLength(message.content, "utf8") / 3) + 12,
    0,
  );

module.exports = { estimateTokens };
