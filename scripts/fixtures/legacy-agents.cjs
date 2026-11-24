// Explicit compatibility fixtures; production fresh installs have no agents.
const {
  AgentStore: Store,
  AGENT_ID,
} = require("../../electron/ai/agents/agent-store.cjs");
class AgentStore extends Store {
  constructor(directory, decodeImage) {
    super(directory, decodeImage, { includeDefaultAgents: true });
  }
}
module.exports = { AgentStore, AGENT_ID };
