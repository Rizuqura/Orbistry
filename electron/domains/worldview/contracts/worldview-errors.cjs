/** Identifies domain validation/conflict failures without exposing source contents or granting authority. */
class WorldViewError extends Error {
  /** Accepts a stable classification and a safe, actionable message; performs no I/O. */
  constructor(code, message) {
    super(message);
    this.name = "WorldViewError";
    this.code = code;
  }
}

/** Rejects a failed invariant with a structured domain error; no state is modified. */
function requireInvariant(condition, code, message) {
  if (!condition) throw new WorldViewError(code, message);
}

module.exports = { WorldViewError, requireInvariant };
