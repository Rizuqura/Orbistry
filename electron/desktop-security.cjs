const { ModelRuntimeError } = require("./ai/model-errors.cjs");
function sameDocument(actual, expected) {
  try {
    const first = new URL(actual),
      second = new URL(expected);
    first.hash = "";
    second.hash = "";
    return first.href === second.href;
  } catch {
    return false;
  }
}
function guardedIpc(ipcMain, getContents, entryUrl) {
  return {
    handle(channel, handler) {
      ipcMain.handle(channel, (event, ...args) => {
        const contents = getContents();
        if (
          !contents ||
          event.sender !== contents ||
          event.senderFrame !== contents.mainFrame ||
          !sameDocument(event.senderFrame.url, entryUrl)
        )
          throw new ModelRuntimeError(
            "MODEL_INVALID_REQUEST",
            "This desktop operation is only available to the Orbistry main frame.",
          );
        return handler(event, ...args);
      });
    },
  };
}
function developmentUrl(value, packaged) {
  if (!value || packaged) return null;
  const url = new URL(value);
  if (
    url.protocol !== "http:" ||
    !["localhost", "127.0.0.1", "[::1]"].includes(url.hostname) ||
    url.username ||
    url.password
  )
    throw Error("The development renderer must use local HTTP.");
  return url.href;
}
module.exports = { sameDocument, guardedIpc, developmentUrl };
