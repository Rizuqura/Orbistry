const fs = require("node:fs/promises");
const { ContextBoxStore } = require("./context-box-store.cjs");
const { randomUUID } = require("node:crypto");
const stations = require("../station-service.cjs");
const {
  ConversationStore,
  validId,
  applyRun,
} = require("./conversation-store.cjs");
const { createContextOrchestrator } = require("./orchestrator.cjs");
const { contextIdentity } = require("./context-identity.cjs");
const { createModelRun, readModelRun } = require("./run-store.cjs");
const {
  ModelRuntimeError,
  serializeModelError,
} = require("./model-errors.cjs");
const { validateUserMessage } = require("./prompt-builder.cjs");

function assertFields(value, fields) {
  if (
    !value ||
    typeof value !== "object" ||
    Array.isArray(value) ||
    Object.keys(value).some((key) => !fields.includes(key))
  )
    throw new ModelRuntimeError(
      "MODEL_INVALID_REQUEST",
      "Unsupported chat request fields. Restart the desktop application if it was updated.",
    );
}

class ChatService {
  constructor({ provider, registry, knowledge = stations, agents }) {
    this.provider = provider;
    this.registry = registry;
    this.knowledge = knowledge;
    this.agents = agents;
    this.stores = new Map();
    this.active = null;
    this.pendingMutations = 0;
    this.mutationTail = Promise.resolve();
  }
  async store(vault) {
    const root = await fs.realpath(vault);
    if (!this.stores.has(root)) {
      const loading = (async () => {
        const store = new ConversationStore(root, (id) =>
          readModelRun(root, id),
        );
        await store.recover();
        return { root, store, boxes: new ContextBoxStore(root) };
      })();
      this.stores.set(root, loading);
      loading.catch(() => this.stores.delete(root));
    }
    return this.stores.get(root);
  }
  assertIdle() {
    if (this.active || this.pendingMutations)
      throw new ModelRuntimeError(
        "MODEL_BUSY",
        "Wait for the current operation or stop the response before changing models or conversations.",
      );
  }
  async exclusive(operation) {
    this.assertIdle();
    return this.queueMutation(operation);
  }
  queueMutation(operation) {
    // Reserve admission immediately, including while waiting for another write
    // or vault scan. A rejected operation must not poison subsequent changes.
    this.pendingMutations++;
    const result = this.mutationTail.then(async () => {
      try {
        return await operation();
      } finally {
        this.pendingMutations--;
      }
    });
    this.mutationTail = result.catch(() => {});
    return result;
  }
  changeKnowledge(operation) {
    return this.queueMutation(async () => {
      await this.cancelAll();
      return await operation();
    });
  }
  async cancel(ownerId, requestId) {
    const active = this.active;
    if (
      !active ||
      active.ownerId !== ownerId ||
      (requestId && requestId !== active.requestId)
    )
      return false;
    active.controller.abort(
      new ModelRuntimeError("MODEL_CANCELLED", "The response was stopped."),
    );
    await active.finished;
    return true;
  }
  async cancelAll() {
    const active = this.active;
    if (active) await this.cancel(active.ownerId, active.requestId);
  }
  async context(vault, scopeInput) {
    assertFields(scopeInput, ["activeStationIds", "matchMode"]);
    const scope = await this.knowledge.prepareBrainScope(vault, {
      ...scopeInput,
      ownerId: `context:${randomUUID()}`,
    });
    return contextIdentity(scope);
  }
  async list(vault) {
    return (await (await this.store(vault)).store.list()).filter(
      (c) => c.schemaVersion !== 5,
    );
  }
  async listBoxes(vault) {
    return (await this.store(vault)).boxes.list();
  }
  async previewConstructionBox(vault, input) {
    assertFields(input, ["boxId"]);
    validId(input.boxId);
    return require("./construction-context.cjs").readBox(
      this,
      vault,
      input.boxId,
    );
  }
  async listConstructionFiles(vault) {
    const snapshot = await require("../vault-service.cjs").scanVault(
      (await this.store(vault)).root,
    );
    if (snapshot.status !== "ready")
      throw new ModelRuntimeError(
        "MODEL_CONTEXT_INVALID",
        snapshot.message ?? "The vault is unavailable.",
      );
    const files = [];
    const visit = (entries) => {
      for (const entry of entries) {
        if (entry.kind === "file") files.push(entry.relativePath);
        else visit(entry.children ?? []);
      }
    };
    visit(snapshot.entries);
    return files.sort();
  }
  async previewConstructionFile(vault, input) {
    assertFields(input, ["relativePath"]);
    if (
      typeof input.relativePath !== "string" ||
      !input.relativePath ||
      input.relativePath.length > 128
    )
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "Choose a supported vault file with a path of at most 128 characters.",
      );
    return require("./construction-context.cjs").readFile(
      this,
      vault,
      input.relativePath,
    );
  }
  async saveConstruction(vault, input) {
    return this.exclusive(async () => {
      if (input?.action === "apply") {
        const { config } =
          require("./agent-construction.cjs").validateConstruction(
            input.config,
            input.id,
            true,
          );
        await require("./construction-context.cjs").constructionReferences(
          this,
          vault,
          config,
          true,
        );
      }
      return this.agents.saveConstruction(input);
    });
  }
  async saveBox(vault, input) {
    assertFields(input, ["name"]);
    return this.exclusive(async () => {
      const { root, boxes } = await this.store(vault);
      return boxes.create(
        input.name,
        await this.context(root, { activeStationIds: [], matchMode: "any" }),
      );
    });
  }
  async renameBox(vault, input) {
    assertFields(input, ["id", "name"]);
    return this.exclusive(async () =>
      (await this.store(vault)).boxes.rename(input.id, input.name),
    );
  }
  async previewBoxSelection(vault, paths) {
    return this.knowledge.previewBoxSelection(
      (await this.store(vault)).root,
      paths,
    );
  }
  async inspectBox(vault, id) {
    const { root, boxes } = await this.store(vault),
      box = await boxes.get(id);
    return {
      ...box,
      items: await this.knowledge.inspectBoxSources(root, box.items),
    };
  }
  async editBox(vault, input) {
    assertFields(input, [
      "action",
      "id",
      "name",
      "paths",
      "itemId",
      "relativePath",
    ]);
    return this.exclusive(async () => {
      const { root, boxes } = await this.store(vault);
      if (input.action === "delete") return boxes.remove(input.id);
      if (input.action === "remove")
        return boxes.removeItem(input.id, input.itemId);
      if (input.action === "relink") {
        const preview = await this.knowledge.previewBoxSelection(root, [
          input.relativePath,
        ]);
        if (
          preview.files.length !== 1 ||
          preview.files[0] !== input.relativePath
        )
          throw new ModelRuntimeError(
            "MODEL_INVALID_REQUEST",
            "Choose one supported file in this vault.",
          );
        return boxes.relink(input.id, input.itemId, input.relativePath);
      }
      if (!["create", "add"].includes(input.action))
        throw new ModelRuntimeError(
          "MODEL_INVALID_REQUEST",
          "Unknown Context Box action.",
        );
      const preview = await this.knowledge.previewBoxSelection(
        root,
        input.paths ?? [],
      );
      if (preview.skipped.length)
        throw new ModelRuntimeError(
          "MODEL_INVALID_REQUEST",
          "Selection changed. Review supported files again before saving.",
        );
      return input.action === "create"
        ? boxes.create(input.name, null, preview.files)
        : boxes.add(input.id, preview.files);
    });
  }
  async switchBox(vault, input) {
    assertFields(input, ["conversationId", "contextBoxId"]);
    return this.exclusive(async () => {
      if (
        (await (await this.store(vault)).store.read(input.conversationId))
          .engineOnly
      )
        throw new ModelRuntimeError(
          "MODEL_INVALID_REQUEST",
          "Start a new research chat to attach sources. Engine chats keep their source-free history.",
        );
      const { root, store, boxes } = await this.store(vault),
        box = await boxes.get(input.contextBoxId);
      const identity = contextIdentity(
        await this.boundScope(
          root,
          { contextBoxId: box.id },
          { ownerId: "switch:" + randomUUID() },
        ),
      );
      return store.update(input.conversationId, (value) => {
        this.upgradeConversation(value);
        value.contextBoxId = box.id;
        value.contextBoxRevision = box.revision;
        value.contextIdentity = identity;
        delete value.agentKnowledge;
        delete value.contextFile;
        value.schemaVersion = 3;
        value.contextTransitions ??= [];
        value.contextTransitions.push({
          contextBoxId: box.id,
          contextBoxRevision: box.revision,
          contextIdentity: identity,
          changedAt: new Date().toISOString(),
        });
      });
    });
  }
  upgradeConversation(value) {
    if (value.schemaVersion >= 3) return;
    for (const message of value.messages)
      if (message.role === "assistant")
        message.contextIdentity = value.contextIdentity;
    for (const attempt of value.attempts)
      attempt.contextIdentity = value.contextIdentity;
    value.schemaVersion = 3;
    value.creationId ??= randomUUID();
  }
  async boundScope(root, conversation, scope, pinned = false) {
    if (!conversation.contextBoxId && !conversation.contextFile)
      throw new ModelRuntimeError(
        "MODEL_CONTEXT_INVALID",
        "Legacy chat is read-only. Create a bound chat with a Context Box.",
      );
    const box = conversation.contextFile
      ? null
      : await (await this.store(root)).boxes.get(conversation.contextBoxId);
    const { readBinding } = require("./construction-context.cjs");
    if (conversation.contextFile && !pinned)
      await readBinding(this, root, conversation.contextFile);
    const knowledge = conversation.agentKnowledge;
    if (knowledge && !pinned) await readBinding(this, root, knowledge);
    const paths = [
      ...new Set([
        ...(box
          ? box.items.map((item) => item.relativePath)
          : conversation.contextFile.contextIdentity.sources.map(
              (source) => source.relativePath,
            )),
        ...(knowledge?.contextIdentity.sources.map(
          (source) => source.relativePath,
        ) ?? []),
      ]),
    ];
    const prepared = await this.knowledge.prepareBrainScope(
      root,
      { ...scope, activeStationIds: [], matchMode: "any" },
      pinned
        ? conversation.contextIdentity.sources
        : paths.map((relativePath) => ({
            sourceId: relativePath,
            relativePath,
          })),
      !pinned,
    );
    if (
      [conversation.contextFile, knowledge]
        .filter(Boolean)
        .flatMap((binding) => binding.contextIdentity.sources)
        .some(
          (expected) =>
            !prepared.sources.some(
              (source) =>
                source.id === expected.sourceId &&
                source.contentHash === expected.contentHash,
            ),
        )
    )
      throw new ModelRuntimeError(
        "MODEL_CONTEXT_INVALID",
        "A reviewed research file or agent Knowledge source changed. Review it in agent settings and explicitly create a new chat.",
      );
    return prepared;
  }
  async checkConversation(vault, id) {
    const { root, store } = await this.store(vault);
    const candidate = await store.read(id);
    if (candidate.engineOnly)
      return require("./context-identity.cjs").engineIdentity(
        candidate.agentId,
      );
    return contextIdentity(
      await this.boundScope(root, await store.read(id), {
        ownerId: "check:" + randomUUID(),
      }),
    );
  }
  async create(vault, input) {
    return this.exclusive(async () => {
      const { root, store } = await this.store(vault);
      assertFields(input, [
        "contextBoxId",
        "contextFile",
        "creationId",
        "agentId",
        "includeAgentKnowledge",
        "engineOnly",
      ]);
      if (
        input.engineOnly !== undefined &&
        typeof input.engineOnly !== "boolean"
      )
        throw new ModelRuntimeError(
          "MODEL_INVALID_REQUEST",
          "Invalid Engine chat mode.",
        );
      if (
        input.engineOnly
          ? input.contextBoxId ||
            input.contextFile ||
            input.includeAgentKnowledge
          : Boolean(input.contextBoxId) === Boolean(input.contextFile)
      )
        throw new ModelRuntimeError(
          "MODEL_INVALID_REQUEST",
          "Choose a Context Box or a reviewed single file for this chat.",
        );
      if (input.contextFile)
        require("./schemas.cjs").parse(
          require("./agent-construction.cjs").contextFileBindingSchema,
          input.contextFile,
        );
      if (
        input.includeAgentKnowledge !== undefined &&
        typeof input.includeAgentKnowledge !== "boolean"
      )
        throw new ModelRuntimeError(
          "MODEL_INVALID_REQUEST",
          "Invalid knowledge selection.",
        );
      const agentId = input.agentId ?? "wonnyy-agent";
      if (
        typeof agentId !== "string" ||
        (!this.agents &&
          !Object.hasOwn(
            require("./agent-policy.cjs").AGENT_DEFINITIONS,
            agentId,
          ))
      )
        throw new ModelRuntimeError("MODEL_INVALID_REQUEST", "Unknown agent.");
      const agent = this.agents ? await this.agents.get(agentId) : null;
      if (input.engineOnly && !require("./engine-chat.cjs").engineNode(agent))
        throw new ModelRuntimeError(
          "MODEL_INVALID_REQUEST",
          "Apply an Engine binding for this agent before creating an Engine chat.",
        );
      validId(input.creationId);
      const existing = (await store.list()).find(
        (c) => c.creationId === input.creationId,
      );
      if (existing) {
        if (
          Boolean(existing.engineOnly) !== Boolean(input.engineOnly) ||
          existing.contextBoxId !== input.contextBoxId ||
          existing.contextFile?.contextIdentity.id !==
            input.contextFile?.contextIdentity?.id ||
          existing.agentId !== agentId ||
          Boolean(existing.agentKnowledge) !==
            Boolean(input.includeAgentKnowledge)
        )
          throw new ModelRuntimeError(
            "MODEL_INVALID_REQUEST",
            "Creation IDs cannot be reused for a different Context Box or agent.",
          );
        return existing;
      }
      const { readBinding } = require("./construction-context.cjs");
      if (input.engineOnly)
        return store.create(
          require("./context-identity.cjs").engineIdentity(agentId),
          null,
          input.creationId,
          agentId,
          null,
          null,
          true,
        );
      const contextFile = input.contextFile
        ? (await readBinding(this, root, input.contextFile)).binding
        : null;
      const box = contextFile
        ? null
        : await (await this.store(root)).boxes.get(input.contextBoxId);
      let agentKnowledge = null;
      if (input.includeAgentKnowledge) {
        const knowledgeNode = agent?.construction?.active?.nodes.find(
          (node) => node.kind === "Knowledge",
        );
        const binding =
          knowledgeNode?.config.contextFile ?? knowledgeNode?.config.contextBox;
        if (!binding)
          throw new ModelRuntimeError(
            "MODEL_CONTEXT_INVALID",
            "This agent has no reviewed Knowledge box. Reopen its settings.",
          );
        agentKnowledge = (await readBinding(this, root, binding)).binding;
      }
      const candidate = {
        ...(box
          ? {
              contextBoxId: box.id,
              contextBoxRevision: box.revision,
              contextIdentity: box.contextIdentity,
            }
          : { contextFile }),
        ...(agentKnowledge ? { agentKnowledge } : {}),
      };
      const identity = contextIdentity(
        await this.boundScope(root, candidate, {
          ownerId: "create:" + randomUUID(),
        }),
      );
      return store.create(
        identity,
        box,
        input.creationId,
        agentId,
        agentKnowledge,
        contextFile,
      );
    });
  }
  async rename(vault, input) {
    assertFields(input, ["conversationId", "title"]);
    if (
      typeof input.title !== "string" ||
      !input.title.trim() ||
      input.title.length > 120
    )
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "Use a chat title between 1 and 120 characters.",
      );
    return this.exclusive(async () =>
      (await this.store(vault)).store.update(input.conversationId, (value) => {
        value.title = input.title.trim();
      }),
    );
  }
  async remove(vault, id) {
    return this.exclusive(async () =>
      (await this.store(vault)).store.remove(id),
    );
  }
  async deleteMessage(vault, input) {
    assertFields(input, ["conversationId", "messageId"]);
    validId(input.conversationId);
    validId(input.messageId);
    return this.exclusive(async () =>
      (await this.store(vault)).store.update(input.conversationId, (value) => {
        const message = value.messages.find(
          (item) => item.id === input.messageId,
        );
        if (!message) return; // Repeated deletion is safe.
        if (message.role === "user") {
          value.messages = value.messages.filter(
            (item) =>
              item.id !== message.id && item.userMessageId !== message.id,
          );
          value.attempts = value.attempts.filter(
            (item) => item.userMessageId !== message.id,
          );
        } else
          value.messages = value.messages.filter(
            (item) => item.id !== message.id,
          );
        // Immutable run records remain intact. Recovery only reconciles pending
        // attempts, so deleted completed messages cannot be restored on restart.
      }),
    );
  }
  async clear(vault) {
    return this.exclusive(async () => {
      const { store } = await this.store(vault);
      for (const conversation of await store.list())
        if (conversation.schemaVersion !== 5)
          await store.remove(conversation.id);
    });
  }
  async resume(vault, id) {
    return this.exclusive(async () => {
      const { root, store } = await this.store(vault);
      const conversation = await store.read(id);
      await this.checkConversation(root, id);
      return conversation;
    });
  }
  async refreshSource(vault) {
    return this.exclusive(async () =>
      this.knowledge.refreshChatSource((await this.store(vault)).root),
    );
  }
  async run(vault, ownerId, input, sendEvent = () => {}, requestLogger) {
    assertFields(input, [
      "conversationId",
      "requestId",
      "userMessage",
      "expectedContextId",
      "activeStationIds",
      "matchMode",
      "retryOf",
    ]);
    validId(input.requestId);
    validId(input.conversationId);
    const question = validateUserMessage(input.userMessage);
    requestLogger?.step("REQUEST_VALIDATED", {
      messageCharacters: question.length,
    });
    if (/^\/loop(?:\s|$)/i.test(question))
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "This repository has no /loop extraction workflow. Use a normal research question, then Create knowledge proposal on a completed Wonnyy answer. No loop was executed.",
      );
    this.assertIdle();
    requestLogger?.step("ADMISSION_ACCEPTED");
    let finish;
    const active = {
      ownerId,
      requestId: input.requestId,
      controller: new AbortController(),
      finished: new Promise((resolve) => {
        finish = resolve;
      }),
    };
    this.active = active;
    const runId = randomUUID();
    requestLogger?.update({ runId });
    requestLogger?.step("FRONT_OFFICE_PATH", {
      routingMode: "agent",
      routerActive: false,
    });
    const emit = (event) =>
      sendEvent({
        ...event,
        requestId: input.requestId,
        conversationId: input.conversationId,
        runId,
      });
    let timer;
    let store;
    let root;
    let pending = false;
    let committed = false;
    try {
      ({ root, store } = await this.store(vault));
      let conversation = await store.read(input.conversationId);
      requestLogger?.step("CONVERSATION_LOADED", {
        historyMessages: conversation.messages.length,
      });
      if (conversation.schemaVersion === 5)
        throw new ModelRuntimeError(
          "MODEL_INVALID_REQUEST",
          "Use the experimental chat entry point for this conversation.",
        );
      const agentConfig = this.agents
        ? await this.agents.get(conversation.agentId)
        : null;
      const previous = conversation.attempts.find(
        (attempt) => attempt.requestId === input.requestId,
      );
      if (previous) {
        requestLogger?.step("REQUEST_REPLAYED");
        const original = conversation.messages.find(
          (message) => message.id === previous.userMessageId,
        );
        if (original.content !== question)
          throw new ModelRuntimeError(
            "MODEL_INVALID_REQUEST",
            "Request IDs cannot be reused for different messages.",
          );
        if (previous.status === "pending")
          throw new ModelRuntimeError(
            "MODEL_BUSY",
            "This request is already pending.",
          );
        return {
          conversation,
          run:
            previous.status === "interrupted"
              ? null
              : await readModelRun(root, previous.runId),
        };
      }
      if (!conversation.engineOnly && agentConfig?.construction?.active)
        agentConfig.configurationReferences =
          await require("./construction-context.cjs").constructionReferences(
            this,
            root,
            agentConfig.construction.active,
          );
      let identity;
      try {
        requestLogger?.step("BINDING_VALIDATING");
        identity = conversation.engineOnly
          ? require("./context-identity.cjs").engineIdentity(
              conversation.agentId,
            )
          : contextIdentity(
              await this.boundScope(root, conversation, {
                ownerId: "check:" + runId,
              }),
            );
      } catch (error) {
        if (error.code === "BRAIN_SOURCE_CHANGED")
          throw new ModelRuntimeError("MODEL_CONTEXT_INVALID", error.message);
        throw error;
      }
      const contextChanged = identity.id !== conversation.contextIdentity.id;
      requestLogger?.step("BINDING_VALIDATED", { contextChanged });
      if (
        ![identity.id, conversation.contextIdentity.id].includes(
          input.expectedContextId,
        )
      )
        throw new ModelRuntimeError(
          "MODEL_CONTEXT_INVALID",
          "This chat's binding changed while the request was prepared. Recheck the attached box before sending.",
        );
      const boxForTurn =
        conversation.engineOnly || conversation.contextFile
          ? null
          : await (await this.store(root)).boxes.get(conversation.contextBoxId);
      const sharedSettings = await this.registry.read();
      const settings =
        agentConfig?.runtimeModel?.providerId &&
        agentConfig.runtimeModel.modelId
          ? {
              ...sharedSettings,
              providerId: agentConfig.runtimeModel.providerId,
              modelId: agentConfig.runtimeModel.modelId,
            }
          : sharedSettings;
      requestLogger?.update({
        provider: settings.providerId,
        model: settings.modelId,
      });
      requestLogger?.step("MODEL_CHECKING", {
        outputTokenCap: settings.outputLimit,
        contextWindow: settings.contextWindow,
        streaming: settings.streaming,
        deadlineMs: settings.absoluteTimeoutMs,
      });
      active.controller.signal.throwIfAborted();
      timer = setTimeout(
        () =>
          active.controller.abort(
            new ModelRuntimeError(
              "MODEL_TIMEOUT",
              "The absolute run time limit was exceeded.",
            ),
          ),
        settings.absoluteTimeoutMs,
      );
      emit({
        state: "MODEL_CHECKING",
        status: {
          message: "Checking selected model availability.",
        },
      });
      await this.registry.validateSelection(settings, {
        signal: active.controller.signal,
      });
      requestLogger?.step("MODEL_SELECTED");
      const history = [];
      for (const answer of conversation.messages.filter(
        (message) =>
          message.role === "assistant" &&
          (message.contextIdentity ?? conversation.contextIdentity).id ===
            identity.id &&
          (conversation.contextFile
            ? message.contextFile?.relativePath ===
              conversation.contextFile.relativePath
            : !message.contextFile &&
              (!message.contextBox ||
                message.contextBox.id === conversation.contextBoxId)),
      )) {
        const user = conversation.messages.find(
          (message) => message.id === answer.userMessageId,
        );
        if (user)
          history.push(
            { role: "user", content: user.content },
            { role: "assistant", content: answer.content },
          );
      }
      let userMessageId = randomUUID();
      // Only backend-owned successful runs from this exact approved snapshot
      // may contribute analytical memory. Recompute their queries below.
      const datasetHistory = [];
      for (const answer of conversation.messages
        .filter((message) => message.role === "assistant")
        .slice(-2)) {
        if (!answer.runId) continue;
        const previous = await readModelRun(root, answer.runId);
        if (
          previous?.status === "succeeded" &&
          previous.contextIdentity?.id === identity.id &&
          previous.diagnostics?.datasetAnalysis?.queries
        ) {
          datasetHistory.push({
            runId: previous.runId,
            contextIdentityId: identity.id,
            question: previous.userMessage,
            queries: previous.diagnostics.datasetAnalysis.queries,
          });
        }
      }
      const lastAttempt = conversation.attempts.at(-1);
      const retryOf =
        input.retryOf ??
        (lastAttempt &&
        ["failed", "cancelled", "interrupted"].includes(lastAttempt.status) &&
        conversation.messages.find(
          (message) => message.id === lastAttempt.userMessageId,
        )?.content === question
          ? lastAttempt.requestId
          : undefined);
      if (retryOf) {
        const failed = conversation.attempts.find(
          (attempt) => attempt.requestId === retryOf,
        );
        if (
          !failed ||
          !["failed", "cancelled", "interrupted"].includes(failed.status) ||
          conversation.messages.find(
            (message) => message.id === failed.userMessageId,
          )?.content !== question ||
          conversation.attempts.at(-1) !== failed ||
          (failed.contextIdentity ?? conversation.contextIdentity).id !==
            identity.id
        )
          throw new ModelRuntimeError(
            "MODEL_INVALID_REQUEST",
            "Only the latest failed turn with unchanged Context Box sources can be retried. Send a new message if the box or its files changed.",
          );
        userMessageId = failed.userMessageId;
      }
      conversation = await store.update(conversation.id, (value) => {
        this.upgradeConversation(value);
        value.contextIdentity = identity;
        if (boxForTurn) value.contextBoxRevision = boxForTurn.revision;
        if (!retryOf)
          value.messages.push({
            id: userMessageId,
            conversationId: value.id,
            role: "user",
            content: question,
            createdAt: new Date().toISOString(),
          });
        value.attempts.push({
          requestId: input.requestId,
          runId,
          userMessageId,
          status: "pending",
          error: null,
          contextIdentity: identity,
        });
      });
      pending = true;
      emit({
        state: "PREPARING_CONTEXT",
        conversation,
        status: {
          message: contextChanged
            ? "Context Box sources changed. Reading the latest files; previous answers retain their original evidence."
            : "Reading this chat's Context Box.",
        },
      });
      let engineSelection = null;
      const orchestrator = createContextOrchestrator({
        prepareScope: (scope) =>
          this.boundScope(root, conversation, scope, true),
        readSource: (source) => this.knowledge.readBrainSource(root, source),
        provider:
          this.registry.providerFor?.(settings.providerId) ?? this.provider,
        providerName: settings.providerId,
        recordRun: (record) =>
          createModelRun(
            root,
            engineSelection
              ? {
                  ...record,
                  diagnostics: {
                    ...record.diagnostics,
                    engineToolSelection: engineSelection,
                  },
                }
              : record,
          ),
      });
      const engineHandled = await require("./engine-chat.cjs").runEngineTurn({
        provider:
          this.registry.providerFor?.(settings.providerId) ?? this.provider,
        providerId: settings.providerId,
        settings,
        question,
        history: history.slice(-24),
        signal: active.controller.signal,
        engines: this.engines,
        agent: agentConfig,
        ownerId,
        conversationId: conversation.id,
        runId,
        requestId: input.requestId,
        identity,
        engineOnly: conversation.engineOnly,
        recordRun: (record) => createModelRun(root, record),
        onEvent: emit,
        onDiagnostic: (step, details) => requestLogger?.step(step, details),
        onSelection: (selection) => {
          engineSelection = selection;
        },
      });
      if (!engineHandled)
        await orchestrator.run(
          {
            model: settings.modelId,
            userMessage: question,
            history: history.slice(-24),
            activeStationIds: input.activeStationIds,
            matchMode: input.matchMode,
          },
          {
            runId,
            requestId: input.requestId,
            requestLogger,
            conversationId: conversation.id,
            contextIdentity: identity,
            contextChanged,
            datasetHistory,
            contextBox: boxForTurn,
            contextFile: conversation.contextFile,
            agentKnowledge: conversation.agentKnowledge,
            agentConfig,
            earlierExchangesDropped: Math.max(0, history.length / 2 - 12),
            settings,
            prepareModel: true,
            signal: active.controller.signal,
            onEvent: emit,
          },
        );
      committed = true;
      requestLogger?.step("RUN_SAVED");
      const run = await readModelRun(root, runId);
      requestLogger?.step("CONVERSATION_SAVING");
      conversation = await store.update(conversation.id, (value) =>
        applyRun(
          value,
          value.attempts.find((attempt) => attempt.runId === runId),
          run,
        ),
      );
      requestLogger?.step("CONVERSATION_SAVED");
      requestLogger?.step("RENDERER_EVENT_DISPATCHING");
      const delivered = emit({
        state: run.diagnostics?.contextInsufficient
          ? "CONTEXT_INSUFFICIENT"
          : run.diagnostics?.limitedContext
            ? "LIMITED_CONTEXT"
            : "READY",
        conversation,
        diagnostics: run.diagnostics,
      });
      requestLogger?.step(
        delivered === false ? "RENDERER_EVENT_SKIPPED" : "RENDERER_EVENT_SENT",
        {},
        delivered === false ? "skipped" : "ok",
      );
      return { conversation, run };
    } catch (error) {
      requestLogger?.fail(error);
      if (pending && !committed) {
        // Preserve pending references if recording failed: restart recovery owns them.
        try {
          const record = await readModelRun(root, runId);
          await store.update(input.conversationId, (value) =>
            applyRun(
              value,
              value.attempts.find((attempt) => attempt.runId === runId),
              record,
            ),
          );
        } catch (recordError) {
          if (recordError.code !== "MODEL_RUN_RECORD_NOT_FOUND")
            error = recordError;
        }
      }
      if (active.controller.signal.aborted && !committed)
        error = active.controller.signal.reason;
      emit({
        state:
          error.code === "MODEL_CANCELLED"
            ? "CANCELLED"
            : error.code === "CONTEXT_INSUFFICIENT"
              ? "CONTEXT_INSUFFICIENT"
              : "ERROR",
        error: serializeModelError(error),
      });
      throw error;
    } finally {
      clearTimeout(timer);
      if (this.active === active) this.active = null;
      finish();
    }
  }
}

module.exports = { ChatService, assertFields };
