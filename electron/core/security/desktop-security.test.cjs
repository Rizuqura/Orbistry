const test = require("node:test"),
  assert = require("node:assert/strict");
const {
  guardedIpc,
  developmentUrl,
  sameDocument,
} = require("./desktop-security.cjs");
test("desktop IPC rejects other windows, subframes and navigated documents", () => {
  const url = "file:///C:/Orbistry/out/index.html",
    frame = { url },
    contents = { mainFrame: frame };
  let handler;
  guardedIpc(
    {
      handle: (_, fn) => {
        handler = fn;
      },
    },
    () => contents,
    url,
  ).handle("test", (_, value) => value);
  assert.equal(handler({ sender: contents, senderFrame: frame }, 42), 42);
  assert.throws(
    () => handler({ sender: {}, senderFrame: frame }),
    /main frame/,
  );
  assert.throws(
    () => handler({ sender: contents, senderFrame: { url } }),
    /main frame/,
  );
  frame.url = "https://attacker.invalid";
  assert.throws(
    () => handler({ sender: contents, senderFrame: frame }),
    /main frame/,
  );
});
test("packaged apps ignore development URLs; development remains loopback-only", () => {
  assert.equal(developmentUrl("https://attacker.invalid", true), null);
  assert.equal(
    developmentUrl("http://localhost:3000", false),
    "http://localhost:3000/",
  );
  assert.throws(
    () => developmentUrl("https://attacker.invalid", false),
    /local HTTP/,
  );
  assert.ok(
    sameDocument(
      "file:///C:/app/index.html#section",
      "file:///C:/app/index.html",
    ),
  );
  assert.ok(
    !sameDocument("file:///C:/app/other.html", "file:///C:/app/index.html"),
  );
});
