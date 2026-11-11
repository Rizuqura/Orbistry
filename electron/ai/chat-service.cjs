const fs = require("node:fs/promises");
const { ContextBoxStore } = require("./context-box-store.cjs");
const { randomUUID } = require("node:crypto");
const stations = require("../station-service.cjs");
const {
  ConversationStore,
  validId,
  applyRun,
} = require("./conversation-store.cjs");
const {
  runStandaloneTurn,
  inactiveIntegration,
} = require("./standalone-chat.cjs");
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
  async previewConstructionBox() {
    inactiveIntegration();
  }
  async listConstructionFiles() {
    return [];
  }
  async previewConstructionFile() {
    inactiveIntegration();
  }
  async saveConstruction(vault, input) {
    return this.exclusive(() => this.agents.saveConstruction(input));
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
  async switchBox() {
    inactiveIntegration();
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
    // Stored bindings are historical metadata; never resolve them at runtime.
    return (await (await this.store(vault)).store.read(id)).contextIdentity;
  }
  async create(vault, input) {
    return this.exclusive(async () => {
      assertFields(input, [
        "contextBoxId",
        "contextFile",
        "creationId",
        "agentId",
        "includeAgentKnowledge",
        "engineOnly",
      ]);
      validId(input.creationId);
      const agentId = input.agentId ?? "wonnyy-agent";
      validId(agentId);
      if (this.agents) await this.agents.get(agentId);
      else if (
        !Object.hasOwn(require("./agent-policy.cjs").AGENT_DEFINITIONS, agentId)
      )
        throw new ModelRuntimeError("MODEL_INVALID_REQUEST", "Unknown agent.");
      const { store } = await this.store(vault);
      const existing = (await store.list()).find(
        (c) => c.creationId === input.creationId,
      );
      if (existing) {
        if (existing.agentId !== agentId)
          throw new ModelRuntimeError(
            "MODEL_INVALID_REQUEST",
            "Creation ID belongs to another agent.",
          );
        return existing;
      }
      // Ignore legacy attachment inputs without resolving or persisting them.
      return store.create(
        require("./context-identity.cjs").standaloneIdentity(agentId),
        null,
        input.creationId,
        agentId,
        null,
        null,
        false,
        true,
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
  async refreshSource() {
    inactiveIntegration();
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
        "This repository has no /loop extraction workflow. Use a normal research question, then Create knowledge proposal on a completed Orbistry answer. No loop was executed.",
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
      const identity = conversation.contextIdentity;
      requestLogger?.step("BINDING_VALIDATED", { standalone: true });
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
        (message) => message.role === "assistant",
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
        value.contextIdentity = identity;
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
        status: { message: "Preparing conversation." },
      });
      await runStandaloneTurn({
        provider:
          this.registry.providerFor?.(settings.providerId) ?? this.provider,
        settings,
        question,
        history,
        agent: agentConfig,
        runId,
        requestId: input.requestId,
        conversationId: conversation.id,
        identity,
        agentId: conversation.agentId,
        signal: active.controller.signal,
        onEvent: emit,
        requestLogger,
        recordRun: (record) => createModelRun(root, record),
      });
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
