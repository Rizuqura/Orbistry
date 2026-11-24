const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");
const { API_VERSION, registerAiIpc } = require("./ipc.cjs");
const { ModelRuntimeError } = require("./model-errors.cjs");

test("credential IPC requires compatibility, validates secret inputs without echoing them, and reserves idle admission", async () => {
  const handlers = new Map();
  let busy = false,
    writes = 0;
  registerAiIpc({
    ipcMain: { handle: (name, handler) => handlers.set(name, handler) },
    service: {
      exclusive: async (operation) => {
        if (busy) throw new ModelRuntimeError("MODEL_BUSY", "Busy");
        return operation();
      },
    },
    credentials: {
      save: async () => {
        writes++;
        return { configured: true };
      },
    },
  });
  const event = { sender: { id: 3 } };
  const call = (input) => handlers.get("ai:saveCredential")(event, input);
  const input = { providerId: "gemini", apiKey: "secret-test-key" };
  assert.equal((await call(input)).error.code, "MODEL_RESTART_REQUIRED");
  handlers.get("ai:handshake")(event, API_VERSION);
  const invalid = await call({
    ...input,
    endpoint: "https://unapproved.invalid",
  });
  assert.equal(invalid.error.code, "MODEL_INVALID_REQUEST");
  assert.doesNotMatch(JSON.stringify(invalid), /secret-test-key/);
  busy = true;
  assert.equal((await call(input)).error.code, "MODEL_BUSY");
  assert.equal(writes, 0);
  busy = false;
  assert.deepEqual(await call(input), {
    ok: true,
    value: { configured: true },
  });
  handlers.get("ai:handshake")(event, API_VERSION - 1);
  assert.equal((await call(input)).error.code, "MODEL_RESTART_REQUIRED");
  assert.equal(writes, 1);
  assert.equal(handlers.has("ai:getCredential"), false);
});

test("preload and renderer agree with main; handshake gates versioned IPC", async () => {
  const handlers = new Map();
  let bridge;
  let listener;
  const ipcRenderer = {
    invoke: (channel, input) =>
      handlers.get(channel)({ sender: { id: 1 } }, input),
    on: (_, value) => {
      listener = value;
    },
    removeListener: (_, value) => {
      assert.equal(value, listener);
      listener = null;
    },
  };
  vm.runInNewContext(
    fs.readFileSync(path.join(__dirname, "../preload.cjs"), "utf8"),
    {
      require: (name) => {
        assert.equal(name, "electron");
        return {
          contextBridge: {
            exposeInMainWorld: (_, value) => {
              bridge = value;
            },
          },
          ipcRenderer,
        };
      },
      process: { platform: "win32" },
    },
  );
  registerAiIpc({
    ipcMain: { handle: (name, handler) => handlers.set(name, handler) },
    getVault: () => "vault",
    service: {},
    registry: { state: async () => ({ online: true }) },
    provider: {},
  });
  assert.equal(bridge.apiVersion, API_VERSION);
  assert.equal("infrastructure" in bridge.ai, false);
  assert.equal(handlers.has("ai:infrastructure"), false);
  const renderer = fs.readFileSync(
    path.join(__dirname, "../../features/chat/desktop-client.ts"),
    "utf8",
  );
  assert.match(renderer, new RegExp(`AI_API_VERSION = ${API_VERSION}`));
  await assert.rejects(bridge.ai.models(), { code: "MODEL_RESTART_REQUIRED" });
  await bridge.ai.handshake(API_VERSION);
  assert.equal((await bridge.ai.models()).online, true);
  const unsubscribe = bridge.ai.onEvent(() => {});
  assert.equal(typeof listener, "function");
  unsubscribe();
  assert.equal(listener, null);
});
