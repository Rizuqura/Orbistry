// A chat pop-out renders the opener's live React controller into about:blank.
// It gets no additional IPC permissions and closes with its workspace window.
function installChatWindowHandler(owner, { icon, openExternal }) {
  let chatWindow = null;
  const externalOnly = ({ url }) => {
    if (url.startsWith("https://")) {
      void openExternal(url);
    }
    return { action: "deny" };
  };

  owner.webContents.setWindowOpenHandler((details) => {
    if (
      details.url !== "about:blank" ||
      details.frameName !== "orbistry-chat-window"
    ) {
      return externalOnly(details);
    }
    if (chatWindow && !chatWindow.isDestroyed()) {
      chatWindow.show();
      chatWindow.focus();
      return { action: "deny" };
    }
    return {
      action: "allow",
      outlivesOpener: false,
      overrideBrowserWindowOptions: {
        width: 560,
        height: 820,
        minWidth: 420,
        minHeight: 480,
        title: "ORB Terminal Chat",
        backgroundColor: "#142630",
        icon,
        autoHideMenuBar: true,
        show: owner.isVisible(),
        webPreferences: {
          contextIsolation: true,
          nodeIntegration: false,
          sandbox: true,
          webviewTag: false,
        },
      },
    };
  });

  owner.webContents.on("did-create-window", (child, details) => {
    if (details.frameName !== "orbistry-chat-window") {
      return;
    }
    chatWindow = child;
    child.setMenu(null);
    child.setIcon(icon);
    // The blank document is a render target, never a second app/navigation host.
    child.webContents.on("will-navigate", (event) => event.preventDefault());
    child.webContents.on("will-attach-webview", (event) =>
      event.preventDefault(),
    );
    child.webContents.setWindowOpenHandler(externalOnly);
    child.once("closed", () => {
      if (chatWindow === child) {
        chatWindow = null;
      }
    });
  });
}

module.exports = { installChatWindowHandler };
