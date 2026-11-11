const test = require("node:test");
const assert = require("node:assert/strict");
const { EventEmitter } = require("node:events");
const { installChatWindowHandler } = require("./chat-window.cjs");

function contents() {
  const value = new EventEmitter();
  value.setWindowOpenHandler = (handler) => {
    value.open = handler;
  };
  return value;
}

test("chat pop-out allows only its named blank target and confines the child", () => {
  const external = [];
  const owner = { webContents: contents(), isVisible: () => false };
  installChatWindowHandler(owner, {
    icon: "icon",
    openExternal: (url) => external.push(url),
  });
  const open = (url, frameName = "orbistry-chat-window") =>
    owner.webContents.open({ url, frameName });
  assert.equal(open("about:blank", "other-window").action, "deny");
  assert.equal(open("file:///private.txt").action, "deny");
  assert.equal(open("javascript:alert(1)").action, "deny");
  assert.equal(open("https://example.com").action, "deny");
  assert.deepEqual(external, ["https://example.com"]);
  const allowed = open("about:blank");
  assert.equal(allowed.action, "allow");
  assert.equal(allowed.outlivesOpener, false);
  assert.equal(allowed.overrideBrowserWindowOptions.show, false);
  assert.deepEqual(allowed.overrideBrowserWindowOptions.webPreferences, {
    contextIsolation: true,
    nodeIntegration: false,
    sandbox: true,
    webviewTag: false,
  });

  let focused = 0;
  const child = new EventEmitter();
  Object.assign(child, {
    webContents: contents(),
    isDestroyed: () => false,
    show() {},
    focus() {
      focused++;
    },
    setMenu() {},
    setIcon() {},
  });
  owner.webContents.emit("did-create-window", child, {
    frameName: "orbistry-chat-window",
  });
  assert.equal(open("about:blank").action, "deny");
  assert.equal(focused, 1);
  let prevented = 0;
  child.webContents.emit("will-navigate", {
    preventDefault() {
      prevented++;
    },
  });
  child.webContents.emit("will-attach-webview", {
    preventDefault() {
      prevented++;
    },
  });
  assert.equal(prevented, 2);
  assert.equal(child.webContents.open({ url: "about:blank" }).action, "deny");
  child.emit("closed");
  assert.equal(open("about:blank").action, "allow");
});
