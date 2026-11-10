// Playwright launches this entry with an isolated vault and application-data directory.
const { app } = require("electron");
if (!process.env.ORBISTRY_SMOKE_DATA)
  throw new Error("Smoke test requires isolated application data.");
app.setPath("userData", process.env.ORBISTRY_SMOKE_DATA);
const fs = require("node:fs"),
  path = require("node:path");
const agentsFile = path.join(process.env.ORBISTRY_SMOKE_DATA, "agents.json");
fs.mkdirSync(path.dirname(agentsFile), { recursive: true });
if (!fs.existsSync(agentsFile))
  fs.writeFileSync(agentsFile, '{"schemaVersion":1,"agents":{}}');
// Hidden UI acceptance needs foreground-equivalent animation and timer scheduling.
app.on("browser-window-created", (_, window) =>
  window.webContents.setBackgroundThrottling(false),
);
require("../electron/main.cjs");
