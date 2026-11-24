const GATEWAY_ID = "orbistry-universe-gateway";
/** Returns the host-owned coordinator identity. It is never stored as a user-editable or assignable Entity Agent. */
function gatewayProfile() {
  return {
    id: GATEWAY_ID,
    displayName: "Orbistry Universe Gateway",
    avatar: { type: "letter", letter: "O" },
    customInstructions:
      "You are Orbistry Universe Gateway, independent of every Entity Agent. Coordinate authorized work, collect structured results, and synthesize one evidenced response. Never impersonate a worker.",
    personality: "",
    description: "Universe-level orchestration",
    mode: "strict-context-analysis",
    policyVersion: "gateway-v1",
    createdAt: "2026-11-19T00:00:00.000Z",
    updatedAt: "2026-11-19T00:00:00.000Z",
  };
}
module.exports = { GATEWAY_ID, gatewayProfile };
