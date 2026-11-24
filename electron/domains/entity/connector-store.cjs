/** Compatibility entry for existing Identity/Agent consumers. Connection persistence is owned by the WorldView domain; exports retain their original behavior. */
module.exports = require("../worldview/repositories/legacy-connection-store.cjs");
