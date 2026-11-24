const { app } = require("electron");
if (!process.env.ORBISTRY_RELEASE_DOCUMENTS)
  throw Error("Isolated documents required");
app.setPath("documents", process.env.ORBISTRY_RELEASE_DOCUMENTS);
require("./electron-online-smoke-main.cjs");
