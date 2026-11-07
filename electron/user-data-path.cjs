const path = require("node:path");
const { existsSync } = require("node:fs");

// A display-name change must not strand existing encrypted keys or model settings.
// Prefer already-populated current storage, and never override an explicit path.
function selectUserDataPath(
  appData,
  current,
  exists = existsSync,
  explicit = false,
) {
  const populated = (directory) =>
    ["model-settings.json", "provider-credentials.json", "agents.json"].some(
      (name) => exists(path.join(directory, name)),
    );
  if (
    explicit ||
    path.resolve(path.dirname(current)) !== path.resolve(appData) ||
    !["orbistry", "qterminal", "qterminal 1.0.0 victoria"].includes(
      path.basename(current).toLowerCase(),
    ) ||
    populated(current)
  )
    return current;
  return (
    ["QTerminal", "wonnyy-amadeus", "Wonnyy"]
      .map((name) => path.join(appData, name))
      .find(populated) ?? current
  );
}
module.exports = { selectUserDataPath };
