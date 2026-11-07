const {
  app,
  BrowserWindow,
  dialog,
  shell,
  ipcMain,
  safeStorage,
  nativeImage,
} = require("electron");
const path = require("path");
const { pathToFileURL } = require("node:url");
const { initializeVault, saveVault } = require("./vault-settings.cjs");
const {
  guardedIpc,
  developmentUrl,
  sameDocument,
} = require("./desktop-security.cjs");
const {
  readPdfFile,
  readVaultFile,
  saveMarkdownFile,
  scanVault,
  searchPdfText,
} = require("./vault-service.cjs");
const stations = require("./station-service.cjs");
const { serializeBrainError } = require("./brain-errors.cjs");
const { OllamaProvider } = require("./ai/providers/ollama-provider.cjs");
const { ChatService } = require("./ai/chat-service.cjs");
const { ModelRegistry } = require("./ai/model-registry.cjs");
const { ProviderRegistry } = require("./ai/provider-registry.cjs");
const { CredentialStore } = require("./ai/credential-store.cjs");
const { AgentStore } = require("./ai/agent-store.cjs");
const {
  OpenRouterProvider,
} = require("./ai/providers/openrouter-provider.cjs");
const { NvidiaProvider } = require("./ai/providers/nvidia-provider.cjs");
const { GeminiProvider } = require("./ai/providers/gemini-provider.cjs");
const { registerAiIpc } = require("./ai/ipc.cjs");
const { ModelRuntimeError } = require("./ai/model-errors.cjs");

const devUrl = developmentUrl(process.env.ELECTRON_START_URL, app.isPackaged);
const isDevelopment = Boolean(devUrl);
const entryUrl =
  devUrl ?? pathToFileURL(path.join(__dirname, "..", "out", "index.html")).href;
let mainWindow;
const trustedIpc = guardedIpc(ipcMain, () => mainWindow?.webContents, entryUrl);
let activeVaultPath;
let ollamaProvider;
let chatService;

function getOllamaProvider() {
  ollamaProvider ??= new OllamaProvider();
  return ollamaProvider;
}

function getVaultSnapshot() {
  return scanVault(activeVaultPath);
}

function changeVaultKnowledge(operation) {
  const vaultPath = activeVaultPath;
  return chatService.changeKnowledge(() => {
    if (vaultPath !== activeVaultPath)
      throw new ModelRuntimeError(
        "MODEL_CONTEXT_INVALID",
        "The active vault changed before this operation started. Retry in the current vault.",
      );
    return operation(vaultPath);
  });
}

async function selectVaultFolder() {
  const result = await dialog.showOpenDialog(BrowserWindow.getFocusedWindow(), {
    title: "Select Orbistry Universe",
    defaultPath: activeVaultPath,
    properties: ["openDirectory"],
  });
  if (result.canceled || result.filePaths.length === 0) return null;
  return chatService.changeKnowledge(() => {
    activeVaultPath = result.filePaths[0];
    return saveVault(app.getPath("userData"), activeVaultPath).then(
      getVaultSnapshot,
    );
  });
}

async function brainOperation(operation) {
  try {
    return { ok: true, value: await operation() };
  } catch (error) {
    return { ok: false, error: serializeBrainError(error) };
  }
}

function createWindow() {
  const window = new BrowserWindow({
    show: !app.commandLine.hasSwitch("hidden"),
    width: 1440,
    height: 900,
    minWidth: 1100,
    minHeight: 700,
    backgroundColor: "#0a0d0e",
    title: "Orbistry",
    icon: path.join(__dirname, "..", "build", "icon.png"),
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });
  mainWindow = window;
  window.webContents.on("will-prevent-unload", (event) => {
    const response = dialog.showMessageBoxSync(window, {
      type: "question",
      buttons: ["Keep editing", "Discard changes"],
      defaultId: 0,
      cancelId: 0,
      message: "Leave without saving Markdown changes?",
      detail:
        "Unsaved edits will be lost. Wait for any save to finish before leaving.",
    });
    // Electron uses preventDefault here to allow the requested close/reload.
    if (response === 1) event.preventDefault();
  });
  window.webContents.session.setPermissionRequestHandler((_, __, callback) =>
    callback(false),
  );
  window.webContents.session.setPermissionCheckHandler(() => false);
  window.webContents.on("will-navigate", (event, url) => {
    if (!sameDocument(url, entryUrl)) event.preventDefault();
  });
  window.webContents.on("will-attach-webview", (event) =>
    event.preventDefault(),
  );

  window.webContents.on("destroyed", () => {
    void chatService?.cancelAll();
  });

  window.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("https://")) {
      shell.openExternal(url);
    }

    return { action: "deny" };
  });

  if (isDevelopment) {
    window.loadURL(devUrl);
  } else {
    window.loadFile(path.join(__dirname, "..", "out", "index.html"));
  }
}

const { selectUserDataPath } = require("./user-data-path.cjs");
app.setPath(
  "userData",
  selectUserDataPath(
    app.getPath("appData"),
    app.getPath("userData"),
    undefined,
    app.commandLine.hasSwitch("user-data-dir"),
  ),
);
app.setName("Orbistry");

app.whenReady().then(async () => {
  activeVaultPath = await initializeVault(
    app.getPath("userData"),
    app.getPath("documents"),
    process.env.WONNYY_VAULT_PATH,
  );
  app.setAppUserModelId("com.wonnyy.amadeus");
  trustedIpc.handle("vault:getSnapshot", getVaultSnapshot);
  trustedIpc.handle("vault:rescan", () => changeVaultKnowledge(scanVault));
  trustedIpc.handle("vault:selectFolder", selectVaultFolder);
  trustedIpc.handle("vault:read", (_, relativePath) =>
    readVaultFile(activeVaultPath, relativePath),
  );
  trustedIpc.handle("vault:saveMarkdown", async (_, input) => {
    try {
      return {
        ok: true,
        value: await changeVaultKnowledge((vaultPath) =>
          saveMarkdownFile(vaultPath, input),
        ),
      };
    } catch (error) {
      return { ok: false, error: error.message || "Could not save Markdown." };
    }
  });
  trustedIpc.handle("vault:readPdf", (_, relativePath) =>
    readPdfFile(activeVaultPath, relativePath),
  );
  trustedIpc.handle("vault:search", (_, query) =>
    searchPdfText(activeVaultPath, query),
  );
  trustedIpc.handle("stations:getState", () =>
    stations.getStationState(activeVaultPath),
  );
  trustedIpc.handle("stations:create", (_, name) =>
    stations.createStation(activeVaultPath, name),
  );
  trustedIpc.handle("stations:rename", (_, id, name) =>
    stations.renameStation(activeVaultPath, id, name),
  );
  trustedIpc.handle("stations:delete", (_, id) =>
    stations.deleteStation(activeVaultPath, id),
  );
  trustedIpc.handle(
    "stations:setAssignments",
    (_, paths, stationId, assigned) =>
      stations.setAssignments(activeVaultPath, paths, stationId, assigned),
  );
  trustedIpc.handle("stations:suggestions", () =>
    stations.suggestReattachments(activeVaultPath),
  );
  trustedIpc.handle("stations:reattach", (_, fromPath, toPath) =>
    stations.reattach(activeVaultPath, fromPath, toPath),
  );
  trustedIpc.handle("context:preview", (_, paths) =>
    stations.previewContext(activeVaultPath, paths),
  );
  trustedIpc.handle("context:add", (_, paths) =>
    changeVaultKnowledge((vaultPath) => stations.addContext(vaultPath, paths)),
  );
  trustedIpc.handle("context:remove", (_, paths) =>
    changeVaultKnowledge((vaultPath) =>
      stations.removeContext(vaultPath, paths),
    ),
  );
  trustedIpc.handle("context:clear", () =>
    changeVaultKnowledge((vaultPath) => stations.clearContext(vaultPath)),
  );
  trustedIpc.handle("context:buildPackage", () =>
    stations.buildContextPackage(activeVaultPath),
  );
  trustedIpc.handle("brain:prepareScope", (_, input) =>
    brainOperation(() => stations.prepareBrainScope(activeVaultPath, input)),
  );
  trustedIpc.handle("brain:readSource", (_, input) =>
    brainOperation(() => stations.readBrainSource(activeVaultPath, input)),
  );
  const provider = getOllamaProvider();
  const credentials = new CredentialStore(app.getPath("userData"), safeStorage);
  const providers = new ProviderRegistry({
    ollama: provider,
    gemini: new GeminiProvider({ credentials }),
    nvidia: new NvidiaProvider({ credentials }),
    openrouter: new OpenRouterProvider({ credentials }),
  });
  const registry = new ModelRegistry(providers, app.getPath("userData"));
  const agents = new AgentStore(app.getPath("userData"), (bytes) =>
    nativeImage.createFromBuffer(bytes),
  );
  chatService = new ChatService({ provider, registry, agents });
  const chooseAgentPicture = async (kind) => {
    const result = await dialog.showOpenDialog({
      title:
        kind === "avatar"
          ? "Choose agent profile picture"
          : kind === "banner"
            ? "Choose profile banner"
            : "Choose chat wallpaper",
      properties: ["openFile"],
      filters: [
        {
          name: "Images",
          extensions: ["png", "jpg", "jpeg", "webp"],
        },
      ],
    });
    if (result.canceled || !result.filePaths[0]) return null;
    const file = result.filePaths[0],
      fs = require("node:fs/promises");
    const stat = await fs.stat(file);
    if (!stat.isFile() || stat.size > 5 * 1024 * 1024)
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "Choose an image up to 5 MB.",
      );
    const bytes = await fs.readFile(file),
      extension = path.extname(file).toLowerCase();
    return kind === "avatar"
      ? agents.prepareAvatar(bytes, extension)
      : agents.prepareBackdrop(bytes, extension, kind);
  };
  const engines = new (require("./ai/engine-registry.cjs").EngineRegistry)(
    app.getPath("userData"),
    {
      agents,
      chooseFolder: async () => {
        const selected = await dialog.showOpenDialog({
          title: "Choose CHronoZ Online portable bundle",
          properties: ["openDirectory"],
        });
        return selected.canceled ? null : (selected.filePaths[0] ?? null);
      },
      openPath: (file) => shell.openPath(file),
    },
  );
  app.once("before-quit", () => engines.shutdown());
  chatService.engines = engines;
  registerAiIpc({
    engines,
    researchKnowledge:
      new (require("./ai/research-knowledge.cjs").ResearchKnowledge)(
        app.getPath("userData"),
      ),
    agents,
    chooseAvatar: () => chooseAgentPicture("avatar"),
    chooseBackdrop: (kind) => chooseAgentPicture(kind),
    credentials,
    ipcMain: trustedIpc,
    getVault: () => activeVaultPath,
    service: chatService,
    registry,
    provider,
  });
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
