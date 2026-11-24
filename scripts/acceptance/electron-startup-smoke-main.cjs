const { ipcMain } = require("electron");
const originalHandle = ipcMain.handle.bind(ipcMain);
globalThis.holdStartup = () => {
  globalThis.startupGate = new Promise((resolve) => {
    globalThis.releaseStartup = resolve;
  });
};
globalThis.holdStartup();
ipcMain.handle = (channel, handler) =>
  originalHandle(
    channel,
    channel === "vault:rescan"
      ? async (...args) => {
          await globalThis.startupGate;
          if (globalThis.failStartup)
            throw new Error("Synthetic startup scan failure");
          return handler(...args);
        }
      : handler,
  );
require("./electron-online-smoke-main.cjs");
