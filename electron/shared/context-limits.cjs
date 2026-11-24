// Application ceilings, not claims about any particular model's capacity.
const LOCAL_CONTEXT_LIMIT = 32768;
const REMOTE_CONTEXT_LIMIT = 2097152;

/** Returns the application ceiling capped by a valid advertised capacity; invalid/missing capacities use the existing conservative default. Pure. */
function contextLimit(providerId, advertisedLength) {
  const ceiling =
    providerId === "ollama" ? LOCAL_CONTEXT_LIMIT : REMOTE_CONTEXT_LIMIT;
  return Math.min(
    ceiling,
    Number.isSafeInteger(advertisedLength) && advertisedLength > 0
      ? advertisedLength
      : LOCAL_CONTEXT_LIMIT,
  );
}

module.exports = { LOCAL_CONTEXT_LIMIT, REMOTE_CONTEXT_LIMIT, contextLimit };
