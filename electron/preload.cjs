const { contextBridge, ipcRenderer } = require("electron");

async function invokeBrain(channel, input) {
  const result = await ipcRenderer.invoke(channel, input);
  if (result?.ok) return result.value;
  const error = new Error(result?.error?.message || "Brain operation failed.");
  error.name = "BrainScopeError";
  error.code = result?.error?.code || "BRAIN_INTERNAL_ERROR";
  error.details = result?.error?.details || {};
  throw error;
}

async function invokeModel(channel, input) {
  const result = await ipcRenderer.invoke(channel, input);
  if (result?.ok) return result.value;
  const error = new Error(result?.error?.message || "Model operation failed.");
  error.name = "ModelRuntimeError";
  error.code = result?.error?.code || "MODEL_INTERNAL_ERROR";
  error.details = result?.error?.details || {};
  throw error;
}

// Future desktop capabilities must be exposed here deliberately, not by giving
// renderer components unrestricted Node.js or filesystem access.
contextBridge.exposeInMainWorld("orbistryDesktop", {
  apiVersion: 18,
  platform: process.platform,
  vault: {
    getSnapshot: () => ipcRenderer.invoke("vault:getSnapshot"),
    rescan: () => ipcRenderer.invoke("vault:rescan"),
    selectFolder: () => ipcRenderer.invoke("vault:selectFolder"),
    read: (relativePath) => ipcRenderer.invoke("vault:read", relativePath),
    saveMarkdown: async (input) => {
      const result = await ipcRenderer.invoke("vault:saveMarkdown", input);
      if (!result?.ok)
        throw new Error(result?.error || "Could not save Markdown.");
      return result.value;
    },
    readPdf: (relativePath) =>
      ipcRenderer.invoke("vault:readPdf", relativePath),
    search: (query) => ipcRenderer.invoke("vault:search", query),
  },
  stations: {
    getState: () => ipcRenderer.invoke("stations:getState"),
    create: (name) => ipcRenderer.invoke("stations:create", name),
    rename: (id, name) => ipcRenderer.invoke("stations:rename", id, name),
    delete: (id) => ipcRenderer.invoke("stations:delete", id),
    setAssignments: (paths, stationId, assigned) =>
      ipcRenderer.invoke("stations:setAssignments", paths, stationId, assigned),
    suggestions: () => ipcRenderer.invoke("stations:suggestions"),
    reattach: (fromPath, toPath) =>
      ipcRenderer.invoke("stations:reattach", fromPath, toPath),
  },
  context: {
    preview: (paths) => ipcRenderer.invoke("context:preview", paths),
    add: (paths) => ipcRenderer.invoke("context:add", paths),
    remove: (paths) => ipcRenderer.invoke("context:remove", paths),
    clear: () => ipcRenderer.invoke("context:clear"),
    buildPackage: () => ipcRenderer.invoke("context:buildPackage"),
    prepareBrainScope: (input) => invokeBrain("brain:prepareScope", input),
    readBrainSource: (input) => invokeBrain("brain:readSource", input),
  },
  ai: {
    engineState: () => invokeModel("ai:engineState"),
    chooseEngineFolder: () => invokeModel("ai:chooseEngineFolder"),
    probeEngine: () => invokeModel("ai:probeEngine"),
    executeEngine: (input) => invokeModel("ai:executeEngine", input),
    cancelEngine: () => invokeModel("ai:cancelEngine"),
    openEngineReport: (input) => invokeModel("ai:openEngineReport", input),
    connectCredential: (input) => invokeModel("ai:connectCredential", input),
    providedModels: () => invokeModel("ai:providedModels"),
    modelFavorites: () => invokeModel("ai:modelFavorites"),
    frontOfficeState: (task) => invokeModel("ai:frontOfficeState", task),
    frontOfficeConfig: (input) => invokeModel("ai:frontOfficeConfig", input),
    frontOfficeRefresh: (provider) =>
      invokeModel("ai:frontOfficeRefresh", provider),
    frontOfficeOverride: (input) =>
      invokeModel("ai:frontOfficeOverride", input),
    frontOfficeEvidence: (input) =>
      invokeModel("ai:frontOfficeEvidence", input),
    frontOfficeFavorite: (input) =>
      invokeModel("ai:frontOfficeFavorite", input),
    frontOfficeHealth: () => invokeModel("ai:frontOfficeHealth"),
    frontOfficeList: () => invokeModel("ai:frontOfficeList"),
    frontOfficeRead: (id) => invokeModel("ai:frontOfficeRead", id),
    frontOfficeCreate: () => invokeModel("ai:frontOfficeCreate"),
    frontOfficeDelete: (id) => invokeModel("ai:frontOfficeDelete", id),
    frontOfficeExport: (format) => invokeModel("ai:frontOfficeExport", format),
    frontOfficeChat: (input) => invokeModel("ai:frontOfficeChat", input),
    onFrontOfficeEvent: (callback) => {
      const listener = (_, value) => callback(value);
      ipcRenderer.on("ai:frontOfficeEvent", listener);
      return () => ipcRenderer.removeListener("ai:frontOfficeEvent", listener);
    },
    providerUsage: (input) => invokeModel("ai:providerUsage", input),
    openRouterUsage: (input) => invokeModel("ai:openRouterUsage", input),
    onUsageChanged: (callback) => {
      const listener = () => callback();
      ipcRenderer.on("ai:usageChanged", listener);
      return () => ipcRenderer.removeListener("ai:usageChanged", listener);
    },
    getAgent: (id) => invokeModel("ai:getAgent", id),
    listAgents: () => invokeModel("ai:listAgents"),
    createAgent: (input) => invokeModel("ai:createAgent", input),
    getVaultIdentity: () => invokeModel("ai:getVaultIdentity"),
    saveAgentConstruction: (input) =>
      invokeModel("ai:saveAgentConstruction", input),
    previewConstructionBox: (input) =>
      invokeModel("ai:previewConstructionBox", input),
    listConstructionFiles: () => invokeModel("ai:listConstructionFiles"),
    previewConstructionFile: (input) =>
      invokeModel("ai:previewConstructionFile", input),
    proposeKnowledge: (input) => invokeModel("ai:proposeKnowledge", input),
    retrieveKnowledge: (input) => invokeModel("ai:retrieveKnowledge", input),
    saveAgent: (input) => invokeModel("ai:saveAgent", input),
    chooseAgentAvatar: () => invokeModel("ai:chooseAgentAvatar"),
    chooseAgentBackdrop: (kind) => invokeModel("ai:chooseAgentBackdrop", kind),
    previewBoxSelection: (paths) =>
      invokeModel("ai:previewBoxSelection", paths),
    inspectContextBox: (id) => invokeModel("ai:inspectContextBox", id),
    editContextBox: (input) => invokeModel("ai:editContextBox", input),
    switchContextBox: (input) => invokeModel("ai:switchContextBox", input),
    listContextBoxes: () => invokeModel("ai:listContextBoxes"),
    saveContextBox: (input) => invokeModel("ai:saveContextBox", input),
    renameContextBox: (input) => invokeModel("ai:renameContextBox", input),
    checkConversation: (id) => invokeModel("ai:checkConversation", id),
    pullModel: (model) => invokeModel("ai:pullModel", model),
    pullStatus: () => invokeModel("ai:pullStatus"),
    cancelPull: (model) => invokeModel("ai:cancelPull", model),
    onPull: (callback) => {
      const listener = (_, value) => callback(value);
      ipcRenderer.on("ai:pull", listener);
      return () => ipcRenderer.removeListener("ai:pull", listener);
    },
    handshake: (version) => ipcRenderer.invoke("ai:handshake", version),
    models: () => invokeModel("ai:models"),
    checkRemoteModel: (input) => invokeModel("ai:checkRemoteModel", input),
    stopModelChecks: () => invokeModel("ai:stopModelChecks"),
    checkNvidiaModel: (model) => invokeModel("ai:checkNvidiaModel", model),
    settings: (input) => invokeModel("ai:settings", input),
    saveCredential: (input) => invokeModel("ai:saveCredential", input),
    removeCredential: (input) => invokeModel("ai:removeCredential", input),
    context: (input) => invokeModel("ai:context", input),
    listConversations: () => invokeModel("ai:listConversations"),
    createConversation: (input) => invokeModel("ai:createConversation", input),
    renameConversation: (input) => invokeModel("ai:renameConversation", input),
    deleteConversation: (id) => invokeModel("ai:deleteConversation", id),
    deleteMessage: (input) => invokeModel("ai:deleteMessage", input),
    clearConversations: () => invokeModel("ai:clearConversations"),
    resumeConversation: (id) => invokeModel("ai:resumeConversation", id),
    refreshSource: () => invokeModel("ai:refreshSource"),
    onEvent: (callback) => {
      const listener = (_, value) => callback(value);
      ipcRenderer.on("ai:event", listener);
      return () => ipcRenderer.removeListener("ai:event", listener);
    },
    getStatus: () => invokeModel("ai:getStatus"),
    listModels: () => invokeModel("ai:listModels"),
    testModel: (model) => invokeModel("ai:testModel", model),
    chat: (input) => invokeModel("ai:chat", input),
    cancel: (requestId) => invokeModel("ai:cancel", requestId),
  },
});
