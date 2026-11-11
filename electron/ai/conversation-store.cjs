const fs = require("node:fs/promises");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const {
  readJson,
  writeJson,
  serialQueue,
  safeDirectory,
  rejectSymlink,
} = require("./json-store.cjs");
const { ModelRuntimeError } = require("./model-errors.cjs");
const { validateContextIdentity } = require("./context-identity.cjs");

const ID = /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}$/;
function validId(id) {
  if (typeof id !== "string" || !ID.test(id))
    throw new ModelRuntimeError(
      "MODEL_INVALID_REQUEST",
      "Invalid conversation or request identifier.",
    );
  return id;
}

function validateConversation(value) {
  if (value?.schemaVersion === 5)
    return require("./llm-front-office/conversation-manager.cjs").validateExperimentalConversation(
      value,
    );
  if (value?.agentKnowledge) {
    require("./schemas.cjs").parse(
      require("./agent-construction.cjs").constructionSourceSchema,
      value.agentKnowledge,
      "MODEL_STORAGE_INVALID",
    );
    validateContextIdentity(value.agentKnowledge.contextIdentity);
  }
  if (
    !value ||
    ![1, 2, 3, 4, 6, 7].includes(value.schemaVersion) ||
    !ID.test(value.id) ||
    typeof value.title !== "string" ||
    !Number.isFinite(Date.parse(value.createdAt)) ||
    !Number.isFinite(Date.parse(value.updatedAt)) ||
    !/^[a-f0-9]{64}$/.test(value.contextIdentity?.id ?? "") ||
    value.contextIdentity.mode !== "active-context" ||
    (!value.contextIdentity.sources?.length &&
      ![6, 7].includes(value.schemaVersion)) ||
    !Array.isArray(value.messages) ||
    !Array.isArray(value.attempts)
  )
    throw new Error("Invalid conversation schema.");
  const checkIdentity =
    value.schemaVersion === 7
      ? (identity) =>
          require("./context-identity.cjs").validateStandaloneIdentity(
            identity,
            value.agentId,
          )
      : value.schemaVersion === 6
        ? (identity) =>
            require("./context-identity.cjs").validateEngineIdentity(
              identity,
              value.agentId,
            )
        : validateContextIdentity;
  if (
    value.schemaVersion === 6 &&
    (value.engineOnly !== true ||
      !ID.test(value.creationId) ||
      value.contextBoxId !== undefined ||
      value.contextFile !== undefined ||
      value.agentKnowledge !== undefined)
  )
    throw new Error("Invalid Engine-only conversation.");
  if (value.schemaVersion !== 6 && value.engineOnly !== undefined)
    throw new Error("Engine-only mode requires schema 6.");
  if (
    value.agentId !== undefined &&
    (typeof value.agentId !== "string" || !ID.test(value.agentId))
  )
    throw new Error("Invalid agent binding.");
  if (
    [2, 3].includes(value.schemaVersion) &&
    (typeof value.contextBoxId !== "string" ||
      !ID.test(value.contextBoxId) ||
      typeof value.creationId !== "string" ||
      !ID.test(value.creationId) ||
      !Number.isInteger(value.contextBoxRevision) ||
      value.contextBoxRevision < 1)
  )
    throw new Error("Invalid Context Box binding.");
  if (value.schemaVersion === 4) {
    require("./schemas.cjs").parse(
      require("./agent-construction.cjs").contextFileBindingSchema,
      value.contextFile,
      "MODEL_STORAGE_INVALID",
    );
    validateContextIdentity(value.contextFile.contextIdentity);
    if (
      value.contextBoxId !== undefined ||
      value.contextBoxRevision !== undefined ||
      !ID.test(value.creationId)
    )
      throw new Error("Invalid direct-file chat binding.");
  } else if (value.contextFile !== undefined)
    throw new Error("Direct file chats require schema 4.");
  if (
    value.schemaVersion === 7 &&
    (value.standalone !== true ||
      !ID.test(value.creationId) ||
      value.contextBoxId !== undefined ||
      value.contextFile !== undefined ||
      value.agentKnowledge !== undefined)
  )
    throw new Error("Invalid standalone conversation.");
  const source = value.contextIdentity.sources[0];
  checkIdentity(value.contextIdentity);
  if (
    ![6, 7].includes(value.schemaVersion) &&
    (typeof source.sourceId !== "string" ||
      typeof source.relativePath !== "string" ||
      !/^[a-f0-9]{64}$/.test(source.contentHash))
  )
    throw new Error("Invalid conversation source.");
  for (const message of value.messages) {
    if (
      message.standalone !== undefined &&
      (message.standalone !== true ||
        message.role !== "assistant" ||
        message.engineToolTurn === true)
    )
      throw new Error("Invalid standalone message marker.");
    if (
      message.engineToolTurn !== undefined &&
      typeof message.engineToolTurn !== "boolean"
    )
      throw new Error("Invalid Engine turn marker.");
    if (message.engineReports !== undefined) {
      if (message.role !== "assistant" || message.engineToolTurn !== true)
        throw new Error("Invalid Engine attachment owner.");
      require("./schemas.cjs").parse(
        require("./schemas.cjs")
          .z.array(require("./engine-chat.cjs").reportSchema)
          .max(1),
        message.engineReports,
        "MODEL_STORAGE_INVALID",
      );
    }
    if (
      !ID.test(message.id) ||
      message.conversationId !== value.id ||
      !["user", "assistant"].includes(message.role) ||
      typeof message.content !== "string" ||
      !Number.isFinite(Date.parse(message.createdAt))
    )
      throw new Error("Invalid conversation message.");
  }
  for (const attempt of value.attempts) {
    if (value.schemaVersion >= 3) checkIdentity(attempt.contextIdentity);
    if (
      !ID.test(attempt.requestId) ||
      !ID.test(attempt.runId) ||
      !value.messages.some(
        (message) =>
          message.id === attempt.userMessageId && message.role === "user",
      ) ||
      !["pending", "succeeded", "failed", "cancelled", "interrupted"].includes(
        attempt.status,
      )
    )
      throw new Error("Invalid conversation attempt.");
  }
  if (
    new Set(value.messages.map((item) => item.id)).size !==
      value.messages.length ||
    new Set(value.attempts.map((item) => item.requestId)).size !==
      value.attempts.length ||
    new Set(value.attempts.map((item) => item.runId)).size !==
      value.attempts.length
  )
    throw new Error("Duplicate conversation identifiers.");
  for (const message of value.messages.filter(
    (item) => item.role === "assistant",
  )) {
    if (value.schemaVersion >= 3) checkIdentity(message.contextIdentity);
    if (
      typeof message.model !== "string" ||
      (message.provider !== undefined &&
        // Read compatibility for retired prototype messages; no execution adapter.
        !["ollama", "gemini", "nvidia", "openrouter", "local-tabular"].includes(
          message.provider,
        )) ||
      !value.attempts.some(
        (attempt) =>
          attempt.runId === message.runId &&
          attempt.status === "succeeded" &&
          (value.schemaVersion < 3 ||
            attempt.contextIdentity.id === message.contextIdentity.id) &&
          attempt.userMessageId === message.userMessageId,
      ) ||
      JSON.stringify(message.sources) !==
        JSON.stringify(
          message.engineToolTurn || message.standalone === true
            ? []
            : (message.contextIdentity ?? value.contextIdentity).sources,
        )
    )
      throw new Error(
        "Assistant message provenance does not match its conversation.",
      );
  }
  // Legacy histories belong to the original agent. Normalize on read without
  // rewriting files; a later explicit mutation persists this stable association.
  return structuredClone({
    ...value,
    agentId: value.agentId ?? "wonnyy-agent",
  });
}

function applyRun(conversation, attempt, record) {
  if (conversation.schemaVersion === 5) {
    if (
      record.schemaVersion !== 3 ||
      record.conversationId !== conversation.id ||
      record.runId !== attempt.runId ||
      record.requestId !== attempt.requestId
    )
      throw new ModelRuntimeError(
        "MODEL_STORAGE_INVALID",
        "Experimental run does not belong to this chat.",
      );
    attempt.status = record.status;
    attempt.error = record.error;
    if (
      record.status === "succeeded" &&
      !conversation.messages.some((m) => m.runId === record.runId)
    )
      conversation.messages.push({
        id: randomUUID(),
        conversationId: conversation.id,
        role: "assistant",
        content: record.response,
        createdAt: record.completedAt,
        runId: record.runId,
        userMessageId: attempt.userMessageId,
        model: record.model,
        provider: record.provider,
      });
    return;
  }
  attempt.status = record.status;
  attempt.error = record.error;
  if (
    record.status === "succeeded" &&
    !conversation.messages.some((message) => message.runId === record.runId)
  ) {
    conversation.messages.push({
      id: randomUUID(),
      conversationId: conversation.id,
      role: "assistant",
      content: record.response,
      createdAt: record.completedAt,
      runId: record.runId,
      userMessageId: attempt.userMessageId,
      sources: record.sourcesActuallyRead,
      ...(record.diagnostics?.standalone === true ? { standalone: true } : {}),
      model: record.model,
      provider: record.provider,
      ...(record.diagnostics?.engineToolTurn
        ? {
            engineToolTurn: true,
            engineReports: record.diagnostics.engineReports ?? [],
          }
        : {}),
      ...(record.diagnostics?.agentKnowledge
        ? {
            knowledgeBox: {
              id:
                record.diagnostics.agentKnowledge.boxId ??
                record.diagnostics.agentKnowledge.contextIdentity.id,
              name:
                record.diagnostics.agentKnowledge.boxName ??
                record.diagnostics.agentKnowledge.relativePath,
            },
          }
        : {}),
      ...(conversation.schemaVersion >= 3
        ? { contextIdentity: record.contextIdentity }
        : {}),
      ...(record.diagnostics?.contextBox
        ? { contextBox: record.diagnostics.contextBox }
        : {}),
      ...(record.diagnostics?.contextFile
        ? {
            contextFile: {
              relativePath: record.diagnostics.contextFile.relativePath,
            },
          }
        : {}),
    });
  }
}

class ConversationStore {
  constructor(rootPath, readRun) {
    this.directory = path.join(rootPath, ".wonnyy", "conversations");
    this.readRun = readRun;
    this.queue = serialQueue();
  }
  file(id) {
    return path.join(this.directory, `${validId(id)}.json`);
  }
  async read(id) {
    await safeDirectory(this.directory);
    const value = await readJson(this.file(id), validateConversation);
    if (value.id !== id)
      throw new ModelRuntimeError(
        "MODEL_STORAGE_INVALID",
        "Conversation identity does not match its filename.",
      );
    return value;
  }
  async write(value) {
    await writeJson(this.file(value.id), validateConversation(value));
  }
  list() {
    return this.queue(async () => {
      await safeDirectory(this.directory);
      const files = (await fs.readdir(this.directory)).filter((name) =>
        name.endsWith(".json"),
      );
      const conversations = await Promise.all(
        files.map((name) => this.read(name.slice(0, -5))),
      );
      return conversations.sort((a, b) =>
        b.updatedAt.localeCompare(a.updatedAt),
      );
    });
  }
  create(
    contextIdentity,
    box = null,
    creationId = null,
    agentId = "wonnyy-agent",
    agentKnowledge = null,
    contextFile = null,
    engineOnly = false,
    standalone = false,
  ) {
    return this.queue(async () => {
      const timestamp = new Date().toISOString();
      const value = {
        schemaVersion: standalone
          ? 7
          : engineOnly
            ? 6
            : contextFile
              ? 4
              : box
                ? 3
                : 1,
        ...(standalone ? { standalone: true, creationId } : {}),
        ...(engineOnly ? { engineOnly: true, creationId } : {}),
        agentId: validId(agentId),
        ...(agentKnowledge ? { agentKnowledge } : {}),
        ...(contextFile ? { contextFile, creationId } : {}),
        ...(box
          ? {
              contextBoxId: box.id,
              contextBoxRevision: box.revision,
              creationId,
            }
          : {}),
        id: randomUUID(),
        title: standalone
          ? "Untitled chat"
          : engineOnly
            ? "Engine chat"
            : box || contextFile
              ? "Untitled chat"
              : path.basename(contextIdentity.sources[0].relativePath),
        createdAt: timestamp,
        updatedAt: timestamp,
        contextIdentity,
        messages: [],
        attempts: [],
      };
      await this.write(value);
      return value;
    });
  }
  update(id, operation) {
    return this.queue(async () => {
      const value = await this.read(id);
      await operation(value);
      value.updatedAt = new Date().toISOString();
      await this.write(value);
      return value;
    });
  }
  /** Create an explicitly isolated experiment in the same durable store. */
  createExperimental(selection = null) {
    return this.queue(async () => {
      const timestamp = new Date().toISOString();
      const value = {
        schemaVersion: 5,
        mode: "front-office",
        id: randomUUID(),
        title: "Experimental chat",
        createdAt: timestamp,
        updatedAt: timestamp,
        selection,
        messages: [],
        attempts: [],
      };
      await this.write(value);
      return value;
    });
  }
  remove(id) {
    return this.queue(async () => {
      await this.read(id);
      await rejectSymlink(this.file(id));
      await fs.unlink(this.file(id));
    });
  }
  async recover() {
    // Only existing snapshots own recovery references. Deleted chats stay deleted.
    for (const value of await this.list()) {
      if (!value.attempts.some((attempt) => attempt.status === "pending"))
        continue;
      await this.update(value.id, async (conversation) => {
        for (const attempt of conversation.attempts.filter(
          (item) => item.status === "pending",
        )) {
          try {
            const run = await this.readRun(attempt.runId);
            if (
              run.conversationId !== conversation.id ||
              (conversation.schemaVersion !== 5 &&
                run.contextIdentity?.id !==
                  (attempt.contextIdentity ?? conversation.contextIdentity)
                    .id) ||
              (conversation.schemaVersion === 5 && run.schemaVersion !== 3)
            )
              throw new ModelRuntimeError(
                "MODEL_STORAGE_INVALID",
                "Run does not belong to this conversation.",
              );
            applyRun(conversation, attempt, run);
          } catch (error) {
            if (error.code !== "MODEL_RUN_RECORD_NOT_FOUND") throw error;
            attempt.status = "interrupted";
            attempt.error = {
              code: "MODEL_INTERRUPTED",
              message:
                "The app closed before this response was recorded. Retry explicitly.",
              details: {},
            };
          }
        }
      });
    }
  }
}

module.exports = { ConversationStore, validateConversation, validId, applyRun };
