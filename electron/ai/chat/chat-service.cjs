const fs = require("node:fs/promises");
const { ContextBoxStore } = require("../context-box-store.cjs");
const { randomUUID } = require("node:crypto");
const stations = require("../../domains/universe/station-service.cjs");
const { ConversationStore, validId } = require("./conversation-store.cjs");
const { inactiveIntegration } = require("../agents/assigned-chat.cjs");
const { contextIdentity } = require("../context-identity.cjs");
const { readModelRun } = require("../run-store.cjs");
const { ModelRuntimeError } = require("../model-errors.cjs");

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
  /** Tracks one assigned request under existing mutation admission. The owner/request IDs gate cancellation; the operation receives its abort signal. Always releases admission after success, failure or cancellation. */
  runAssignedRequest(ownerId, requestId, operation) {
    if (requestId !== undefined) validId(requestId);
    this.assertIdle();
    let finish;
    const active = {
      ownerId,
      requestId,
      controller: new AbortController(),
      finished: new Promise((resolve) => {
        finish = resolve;
      }),
    };
    // Reserve cancellation before the queue microtask, including disconnects
    // arriving immediately after admission and before any provider preparation.
    this.active = active;
    return this.queueMutation(async () => {
      try {
        active.controller.signal.throwIfAborted();
        return await operation(active.controller.signal);
      } finally {
        this.active = null;
        finish();
      }
    });
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
  /** Cancels admitted inference immediately, then serializes a Vault/knowledge mutation after the cancelled request settles. Never waits behind a request that needs this abort to finish. */
  changeKnowledge(operation) {
    const stopped = this.cancelAll();
    return this.queueMutation(async () => {
      await stopped;
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
    const { readBinding } = require("../agents/construction-context.cjs");
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
        !Object.hasOwn(
          require("../agents/agent-policy.cjs").AGENT_DEFINITIONS,
          agentId,
        )
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
        require("../context-identity.cjs").standaloneIdentity(agentId),
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
  /** Retains the renderer contract after removal of Universe orchestration; no historical task data is loaded. */
  async gatewayActivity() {
    return [];
  }
  async refreshSource() {
    inactiveIntegration();
  }
  /** Universe generation was removed by the reset. Preserve IPC/UI compatibility without executing a model, tool or writing a chat attempt. */
  async run() {
    throw new ModelRuntimeError(
      "UNIVERSE_CHAT_RESET",
      "Universe chat has been reset. Open an assigned Entity agent to chat; assignment, Identity and Engine tools remain available.",
    );
  }
}
module.exports = { ChatService, assertFields };
