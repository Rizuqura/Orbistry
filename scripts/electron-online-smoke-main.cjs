const { app } = require("electron");
if (!process.env.ORBISTRY_SMOKE_DATA)
  throw new Error("Isolated application data required");
app.setPath("userData", process.env.ORBISTRY_SMOKE_DATA);
// Existing acceptance cases intentionally exercise legacy built-in profiles.
// Release first-run acceptance never seeds a profile.
if (!process.env.ORBISTRY_RELEASE_DOCUMENTS) {
  const fs = require("node:fs"),
    path = require("node:path");
  const file = path.join(process.env.ORBISTRY_SMOKE_DATA, "agents.json");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (!fs.existsSync(file))
    fs.writeFileSync(file, '{"schemaVersion":1,"agents":{}}');
}
const { createOnlineSmokeFetch } = require("./fixtures/online-smoke-fetch.cjs");
const mock = createOnlineSmokeFetch();
globalThis.fetch = mock.fetchImpl;
globalThis.onlineSmoke = mock.state;
// Hidden UI acceptance needs foreground-equivalent animation and timer scheduling.
app.on("browser-window-created", (_, window) =>
  window.webContents.setBackgroundThrottling(false),
);
require("../electron/main.cjs");
