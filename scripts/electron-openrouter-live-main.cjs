// Permit real discovery, but never forward inference during catalog acceptance.
const { app } = require("electron");
const path = require("node:path");
const { selectUserDataPath } = require("../electron/user-data-path.cjs");
app.setPath(
  "userData",
  selectUserDataPath(
    app.getPath("appData"),
    path.join(app.getPath("appData"), "orbistry"),
  ),
);
const originalFetch = globalThis.fetch;
globalThis.catalogOnlyReport = {
  blockedRequests: 0,
  forwardedInferenceRequests: 0,
};
globalThis.fetch = (url, init = {}) => {
  if (init.body || !["GET", "HEAD"].includes(init.method ?? "GET")) {
    globalThis.catalogOnlyReport.blockedRequests++;
    return Promise.reject(
      new Error("Inference is disabled during catalog acceptance."),
    );
  }
  return originalFetch(url, init);
};
require("../electron/main.cjs");
