const {
  ModelRuntimeError,
  serializeModelError,
} = require("./model-errors.cjs");
const {
  z,
  parse,
  parseCredential,
  credentialProvider,
} = require("./schemas.cjs");
const { checkRemoteModel } = require("./model-check.cjs");
const { ModelPullService } = require("./model-pull.cjs");
const {
  ProviderUsageService,
  observeProviderUsage,
} = require("./provider-usage.cjs");
const { ModelAccess, providedPreview } = require("./model-access.cjs");
const API_VERSION = 18;
const { createRequestLogger } = require("./request-logger.cjs");

function registerAiIpc({
  ipcMain,
  getVault,
  service,
  registry,
  provider,
  credentials,
  agents,
  chooseAvatar,
  chooseBackdrop,
  engines,
  researchKnowledge,
  requestLoggerFactory = createRequestLogger,
}) {
  const compatible = new Set();
  const frontOffice =
    registry?.file && credentials
      ? new (require("./llm-front-office/service.cjs").FrontOfficeService)({
          directory: require("node:path").dirname(registry.file),
          service,
          registry,
          credentials,
        })
      : null;
  const checks = new Map();
  const clients = new Map();
  const usage = new ProviderUsageService({ credentials, registry, agents });
  const modelAccess = new ModelAccess(credentials);
  const usageChanged = () => {
    for (const sender of clients.values())
      if (!sender.isDestroyed?.()) sender.send?.("ai:usageChanged");
  };
  for (const id of ["ollama", "gemini", "nvidia", "openrouter"]) {
    let adapter;
    try {
      adapter =
        registry?.providerFor?.(id) ?? (id === "ollama" ? provider : null);
    } catch {
      continue;
    }
    observeProviderUsage(adapter, id, credentials, usage, usageChanged);
  }
  const pulls = new ModelPullService(provider, (status) => {
    for (const sender of clients.values())
      if (!sender.isDestroyed()) sender.send("ai:pull", status);
  });
  ipcMain.handle("ai:handshake", (event, version) => {
    if (version === API_VERSION) {
      compatible.add(event.sender.id);
      if (!clients.has(event.sender.id)) {
        clients.set(event.sender.id, event.sender);
        event.sender.once?.("destroyed", () => {
          clients.delete(event.sender.id);
          compatible.delete(event.sender.id);
          pulls.cancelOwner(event.sender.id);
          void service.cancel?.(event.sender.id);
          engines?.cancel(event.sender.id);
        });
      }
    } else {
      compatible.delete(event.sender.id);
      clients.delete(event.sender.id);
    }
    return { apiVersion: API_VERSION };
  });
  const handle = (name, operation) =>
    ipcMain.handle(`ai:${name}`, async (event, input) => {
      const requestLogger = ["chat", "frontOfficeChat"].includes(name)
        ? requestLoggerFactory({
            requestId: input?.requestId,
            mode: name === "chat" ? "agent" : "experiment",
          })
        : null;
      requestLogger?.step("REQUEST_RECEIVED", {
        messageCharacters:
          typeof input?.userMessage === "string"
            ? input.userMessage.length
            : null,
      });
      try {
        if (!compatible.has(event.sender.id))
          throw new ModelRuntimeError(
            "MODEL_RESTART_REQUIRED",
            "Restart Orbistry to load the matching desktop backend.",
          );
        const value = await operation(event, input, requestLogger);
        requestLogger?.step("RESULT_RETURNED");
        requestLogger?.finish();
        return { ok: true, value };
      } catch (error) {
        requestLogger?.fail(error);
        requestLogger?.finish(
          error?.code === "MODEL_CANCELLED" ? "cancelled" : "error",
          error,
        );
        if (
          !(error instanceof ModelRuntimeError) &&
          error?.name !== "BrainScopeError"
        )
          console.error(
            "Orbistry runtime operation failed.",
            error?.name ?? "Error",
          );
        return { ok: false, error: serializeModelError(error) };
      }
    });
  handle("pullStatus", () => pulls.list());
  const front = () => {
    if (!frontOffice)
      throw new ModelRuntimeError(
        "MODEL_RESTART_REQUIRED",
        "Restart Orbistry to load the experimental backend.",
      );
    return frontOffice;
  };
  handle("frontOfficeState", (_, task) => front().state(task ?? "general"));
  handle(
    "modelFavorites",
    async () => (await front().catalog.read()).favorites,
  );
  handle("providedModels", async () =>
    providedPreview(await front().catalog.state(), (id) => ({
      failures:
        front().reliability.state(id).failures ||
        Number(modelAccess.failedCheck(id)),
    })),
  );
  handle("connectCredential", (_, input) =>
    service.exclusive(async () => {
      const result = await modelAccess.connect(input);
      if (result.saved) {
        usage.invalidate(result.providerId);
        usageChanged();
      }
      return result;
    }),
  );
  handle("frontOfficeConfig", (_, input) => front().saveConfig(input));
  handle("frontOfficeRefresh", (_, input) => front().refresh(input));
  handle("frontOfficeOverride", (_, input) =>
    service.exclusive(() => front().catalog.override(input)),
  );
  handle("frontOfficeEvidence", (_, input) =>
    service.exclusive(() => front().catalog.addEvidence(input)),
  );
  handle("frontOfficeFavorite", (_, input) =>
    service.exclusive(() => front().catalog.favorite(input)),
  );
  handle("frontOfficeHealth", () => front().health());
  handle("frontOfficeList", () => front().list(getVault()));
  handle("frontOfficeRead", (_, id) => front().read(getVault(), id));
  handle("frontOfficeCreate", () => front().create(getVault()));
  handle("frontOfficeDelete", (_, id) => front().remove(getVault(), id));
  handle("frontOfficeExport", (_, format) =>
    front().export(getVault(), parse(z.enum(["json", "csv"]), format)),
  );
  handle("frontOfficeChat", (event, input, requestLogger) =>
    front().run(
      getVault(),
      event.sender.id,
      input,
      (value) => {
        if (event.sender.isDestroyed()) return false;
        event.sender.send("ai:frontOfficeEvent", value);
        return true;
      },
      requestLogger,
    ),
  );
  handle("pullModel", (event, model) => {
    service.assertIdle();
    return pulls.start(model, event.sender.id);
  });
  handle("cancelPull", (event, model) => {
    if (typeof model !== "string")
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "Invalid model name.",
      );
    return pulls.cancel(model, event.sender.id);
  });
  handle("getStatus", () => provider.getStatus());
  handle("openRouterUsage", (_, input) => {
    const options = parse(
      z.object({ refresh: z.boolean().optional() }).strict(),
      input ?? {},
    );
    return usage.legacyGet(options);
  });
  handle("providerUsage", (_, input) => {
    const options = parse(
      z
        .object({
          refresh: z.boolean().optional(),
          agentId: z.string().min(1).max(120).optional(),
        })
        .strict(),
      input ?? {},
    );
    return usage.get(options);
  });
  handle("listModels", () => provider.listModels());
  handle("testModel", (_, model) =>
    service.exclusive(() => provider.testModel(model)),
  );
  handle("models", () => registry.state());
  handle("getAgent", (_, id) => agents.get(id));
  if (engines) {
    handle("engineState", () => engines.state());
    handle("chooseEngineFolder", (event) => engines.configure(event.sender.id));
    handle("probeEngine", (event) => engines.probe(event.sender.id));
    handle("executeEngine", (event, input) =>
      engines.execute(event.sender.id, input),
    );
    handle("cancelEngine", (event) => {
      engines.cancel(event.sender.id);
      return true;
    });
    handle("openEngineReport", (_, input) => engines.open(input));
  }
  handle("listAgents", () => agents.list());
  handle("createAgent", (_, input) =>
    service.exclusive(() => agents.create(input)),
  );
  handle("getVaultIdentity", async () => ({
    vaultPath: (await service.store(getVault())).root,
  }));
  handle("saveAgentConstruction", (_, input) =>
    service.saveConstruction(getVault(), input),
  );
  handle("previewConstructionBox", (_, input) =>
    service.exclusive(() => service.previewConstructionBox(getVault(), input)),
  );
  handle("listConstructionFiles", () =>
    service.exclusive(() => service.listConstructionFiles(getVault())),
  );
  handle("previewConstructionFile", (_, input) =>
    service.exclusive(() => service.previewConstructionFile(getVault(), input)),
  );
  if (researchKnowledge) {
    handle("proposeKnowledge", (_, input) =>
      service.exclusive(() => researchKnowledge.propose(getVault(), input)),
    );
    handle("retrieveKnowledge", (_, input) =>
      service.exclusive(() =>
        researchKnowledge.retrieve(getVault(), input, service),
      ),
    );
  }
  handle("saveAgent", (_, input) => agents.save(input));
  handle("chooseAgentAvatar", () => chooseAvatar());
  handle("chooseAgentBackdrop", (_, kind) =>
    chooseBackdrop(parse(z.enum(["banner", "wallpaper"]), kind)),
  );
  handle("checkRemoteModel", (event, input) => {
    const { providerId, model } = parse(
      z
        .object({
          providerId: z.enum(["gemini", "nvidia", "openrouter"]),
          model: z
            .string()
            .min(1)
            .max(200)
            .regex(/^~?[A-Za-z0-9][A-Za-z0-9._:/-]*$/),
        })
        .strict(),
      input,
    );
    return service.exclusive(async () => {
      const controller = new AbortController();
      const abort = () =>
        controller.abort(
          new ModelRuntimeError("MODEL_CANCELLED", "Model check stopped."),
        );
      checks.set(event.sender.id, abort);
      event.sender.once?.("destroyed", abort);
      try {
        const result = await checkRemoteModel(
          registry.providerFor(providerId),
          providerId,
          model,
          controller.signal,
        );
        modelAccess.recordCheck(result);
        return result;
      } finally {
        checks.delete(event.sender.id);
        event.sender.removeListener?.("destroyed", abort);
      }
    });
  });
  handle("stopModelChecks", (event) => {
    checks.get(event.sender.id)?.();
  });
  handle("checkNvidiaModel", (_, model) =>
    service.exclusive(() => registry.providerFor("nvidia").probe(model)),
  );
  handle("saveCredential", (_, input) =>
    service.exclusive(async () => {
      const value = await credentials.save(parseCredential(input));
      modelAccess.clearChecks(input.providerId);
      usage.invalidate(input.providerId);
      usageChanged();
      return value;
    }),
  );
  handle("removeCredential", (_, input) =>
    service.exclusive(async () => {
      const value = await credentials.remove(parse(credentialProvider, input));
      modelAccess.clearChecks(input.providerId);
      usage.invalidate(input.providerId);
      usageChanged();
      return value;
    }),
  );
  handle("settings", (_, input) =>
    service.exclusive(async () => {
      const value = await registry.save(input);
      usage.selectionChanged();
      usageChanged();
      return value;
    }),
  );
  handle("previewBoxSelection", (_, paths) =>
    service.previewBoxSelection(getVault(), paths),
  );
  handle("inspectContextBox", (_, id) => service.inspectBox(getVault(), id));
  handle("editContextBox", (_, input) => service.editBox(getVault(), input));
  handle("switchContextBox", (_, input) =>
    service.switchBox(getVault(), input),
  );
  handle("listContextBoxes", () => service.listBoxes(getVault()));
  handle("saveContextBox", (_, input) => service.saveBox(getVault(), input));
  handle("renameContextBox", (_, input) =>
    service.renameBox(getVault(), input),
  );
  handle("checkConversation", (_, id) =>
    service.checkConversation(getVault(), id),
  );
  handle("context", (_, input) => service.context(getVault(), input));
  handle("listConversations", () => service.list(getVault()));
  handle("createConversation", (_, input) => service.create(getVault(), input));
  handle("renameConversation", (_, input) => service.rename(getVault(), input));
  handle("deleteConversation", (_, id) => service.remove(getVault(), id));
  handle("deleteMessage", (_, input) =>
    service.deleteMessage(getVault(), input),
  );
  handle("clearConversations", () => service.clear(getVault()));
  handle("resumeConversation", (_, id) => service.resume(getVault(), id));
  handle("refreshSource", () => service.refreshSource(getVault()));
  handle("cancel", (event, id) => service.cancel(event.sender.id, id));
  handle("chat", (event, input, requestLogger) =>
    pulls.list().some((p) => p.phase === "model-pulling")
      ? Promise.reject(
          new ModelRuntimeError(
            "MODEL_BUSY",
            "A model is downloading. Finish or cancel the download first.",
          ),
        )
      : service.run(
          getVault(),
          event.sender.id,
          input,
          (value) => {
            if (event.sender.isDestroyed()) return false;
            event.sender.send("ai:event", value);
            return true;
          },
          requestLogger,
        ),
  );
}

module.exports = { API_VERSION, registerAiIpc };
