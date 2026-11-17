const path = require("node:path");
const fs = require("node:fs/promises");
const { randomUUID, createHash } = require("node:crypto");
const { z } = require("zod");
const {
  readJson,
  writeJson,
  serialQueue,
  rejectSymlink,
} = require("./json-store.cjs");
const { readWorldViewChip } = require("../worldview-store.cjs");
const {
  createIdentityRuntime,
} = require("../engines/backend-identity/identity-runtime.cjs");
const { ENGINE_DEFINITIONS } = require("./engine-registry.cjs");
const { runStandaloneTurn } = require("./standalone-chat.cjs");
const { ModelRuntimeError } = require("./model-errors.cjs");
const { priceEvidence, isApproval } = require("./entity-agent-protocol.cjs");
const {
  isReadOnlyOperation,
} = require("../engines/backend-identity/capability-registry.cjs");

const id = z.string().regex(/^[a-zA-Z0-9_-]{1,128}$/);
const assignmentSchema = z
  .object({
    id: z.string().uuid(),
    entityId: id,
    agentId: id,
    createdAt: z.string().datetime(),
  })
  .strict();
const stateSchema = z
  .object({
    schemaVersion: z.literal(1),
    assignments: z.array(assignmentSchema).max(10000),
  })
  .strict();
const referenceSchema = z
  .object({
    chunkId: z.string(),
    sourceId: z.string(),
    sourceVersion: z.string(),
    contentHash: z.string(),
    headingPath: z.array(z.string()),
    startLine: z.number(),
    endLine: z.number(),
    trust: z.literal("untrusted-source"),
  })
  .strict();
const executionSchema = z
  .object({
    id: z.string().uuid(),
    assignmentId: z.string().uuid(),
    entityId: id,
    nodeId: id,
    engineId: z.string().nullable(),
    operation: z.string().nullable(),
    engineVersion: z.string().nullable(),
    graphRevision: z.number().int().nonnegative(),
    identityVersion: z.string().nullable(),
    timestamp: z.string().datetime(),
    parameters: z.object({ force: z.boolean().optional() }).strict(),
    status: z.enum(["pending", "rejected", "failed", "succeeded"]),
    resultReference: z.string().uuid().nullable(),
    resultHash: z
      .string()
      .regex(/^[a-f0-9]{64}$/)
      .nullable(),
    error: z.string().nullable(),
    authorizationMode: z
      .enum(["human-approval", "standing-read-only"])
      .default("human-approval"),
    requestId: z.string().uuid().optional(),
    errorCode: z.string().optional(),
    providerHealth: z.enum(["unchecked", "succeeded", "failed"]).optional(),
    priceQuote: z
      .object({
        executionId: z.string().uuid(),
        engineId: z.literal("daily-price"),
        operation: z.literal("price"),
        status: z.literal("succeeded"),
        symbol: z.string(),
        price: z.number().finite(),
        currency: z.string(),
        priceType: z.literal("regular-session quote"),
        marketTimestamp: z.string().datetime(),
        retrievedAt: z.string().datetime(),
        source: z.string(),
        marketState: z.string(),
        delayMinutes: z.number().nullable(),
        cached: z.boolean(),
        stale: z.boolean(),
        warning: z.string().nullable(),
      })
      .strict()
      .optional(),
  })
  .strict();
const requestSchema = z
  .object({
    id: z.string().uuid(),
    assignmentId: z.string().uuid(),
    entityId: id,
    agentId: id,
    nodeId: id,
    capabilityId: z.string().regex(/^[a-f0-9]{64}$/),
    engineId: z.string(),
    operation: z.string(),
    symbol: z.string().nullable(),
    parameters: z.object({ force: z.boolean().optional() }).strict(),
    graphRevision: z.number().int().nonnegative(),
    identityVersion: z.string(),
    createdAt: z.string().datetime(),
    expiresAt: z.string().datetime(),
    userMessageId: z.string().uuid().nullable(),
    status: z.enum([
      "awaiting-approval",
      "executing",
      "succeeded",
      "failed",
      "cancelled",
      "expired",
    ]),
    executionId: z.string().uuid().nullable(),
    error: z.string().nullable(),
    authorizationMode: z
      .enum(["human-approval", "standing-read-only"])
      .default("human-approval"),
  })
  .strict();
const sessionSchema = z
  .object({
    schemaVersion: z.literal(1),
    assignmentId: z.string().uuid(),
    entityId: id,
    agentId: id,
    messages: z
      .array(
        z
          .object({
            id: z.string().uuid(),
            role: z.enum(["user", "assistant"]),
            content: z.string().max(1000000),
            at: z.string().datetime(),
            references: z.array(referenceSchema).optional(),
          })
          .strict(),
      )
      .max(200),
    error: z.string().max(2000).nullable(),
    executions: z.array(executionSchema).max(20).default([]),
    requests: z.array(requestSchema).max(20).default([]),
  })
  .strict();
const scopeSchema = z
  .object({ vaultPath: z.string().max(4096), assignmentId: z.string().uuid() })
  .strict();
const queues = new Map();

/** Serializes assignment/session mutations per Universe, including multiple service instances. Rejected operations leave the queue usable. */
function queueFor(root) {
  if (!queues.has(root)) queues.set(root, serialQueue());
  return queues.get(root);
}

/** Finds available-tool edges using the existing input-to-LLM graph contract. Pure, and never executes connected nodes. */
function connectedNodes(agent, kind) {
  const graph = agent.construction?.active;
  return (graph?.nodes ?? []).filter(
    (node) =>
      node.kind === kind &&
      graph.edges.some(
        (edge) =>
          edge.from === node.id &&
          graph.nodes.some(
            (target) => target.id === edge.to && target.kind === "LLM",
          ),
      ),
  );
}

/** Copies citation metadata only, preserving source identity/trust without duplicating chunk bodies in session history. */
function evidenceReference(chunk) {
  const {
    chunkId,
    sourceId,
    sourceVersion,
    contentHash,
    headingPath,
    startLine,
    endLine,
    trust,
  } = chunk;
  return {
    chunkId,
    sourceId,
    sourceVersion,
    contentHash,
    headingPath,
    startLine,
    endLine,
    trust,
  };
}

/** Owns World assignment/session persistence and bounded runtime access. Agent definitions stay in AgentStore, source storage stays in Vault. */
class EntityAgentService {
  /** Accepts existing trusted backend services. Injectable identity/entity readers support isolated tests without network access. */
  constructor({
    agents,
    registry,
    getVault,
    identityFactory = createIdentityRuntime,
    readEntity = readWorldViewChip,
  }) {
    Object.assign(this, {
      agents,
      registry,
      getVault,
      identityFactory,
      readEntity,
    });
  }

  /** Checks the renderer's captured Universe before accessing metadata. Throws if navigation changed the active root. */
  root(vaultPath) {
    const root = path.resolve(this.getVault());
    if (typeof vaultPath !== "string" || path.resolve(vaultPath) !== root)
      throw new Error("Universe changed. Reopen assigned agents.");
    return root;
  }

  /** Returns an internal World metadata path. All caller-controlled path segments are schema-validated UUIDs. */
  directory(root) {
    return path.join(root, ".wonnyy", "worldview", "agents");
  }

  /** Rejects linked metadata ancestors before reading, keeping assignment/session reads inside the selected Universe. */
  async checkPath(root, ...parts) {
    let current = root;
    for (const part of [".wonnyy", "worldview", "agents", ...parts]) {
      current = path.join(current, part);
      await rejectSymlink(current);
    }
    return current;
  }

  /** Loads validated assignments without creating files for entities with no agents. */
  async read(root) {
    return readJson(
      await this.checkPath(root, "assignments.json"),
      (value) => stateSchema.parse(value),
      { schemaVersion: 1, assignments: [] },
    );
  }

  /** Persists assignment references with the existing synced atomic JSON writer. */
  write(root, state) {
    return writeJson(
      path.join(this.directory(root), "assignments.json"),
      stateSchema.parse(state),
    );
  }

  /** Resolves live entity and agent identities from a persisted assignment, rejecting removed entities or definitions. */
  async binding(root, assignmentId) {
    if (this.root(root) !== root) throw new Error("Universe changed.");
    const assignment = (await this.read(root)).assignments.find(
      (item) => item.id === assignmentId,
    );
    if (!assignment) throw new Error("Agent assignment is unavailable.");
    const entity = await this.readEntity(root, assignment.entityId);
    const agent = await this.agents.get(assignment.agentId);
    return { assignment, entity, agent };
  }

  /** Reads compact assignment references for chip indicators or one entity's manager, without loading knowledge or definitions. */
  async list(raw) {
    const input = z
      .object({ vaultPath: z.string(), entityId: id.optional() })
      .strict()
      .parse(raw);
    const root = this.root(input.vaultPath);
    if (input.entityId) await this.readEntity(root, input.entityId);
    const state = await this.read(root);
    return state.assignments.filter(
      (item) => !input.entityId || item.entityId === input.entityId,
    );
  }

  /** Idempotently associates an existing definition with an entity. Concurrent retries cannot duplicate assignments or modify the definition. */
  async assign(raw) {
    const input = z
      .object({ vaultPath: z.string(), entityId: id, agentId: id })
      .strict()
      .parse(raw);
    const root = this.root(input.vaultPath);
    return queueFor(root)(async () => {
      await this.readEntity(root, input.entityId);
      await this.agents.get(input.agentId);
      const state = await this.read(root);
      const existing = state.assignments.find(
        (item) =>
          item.entityId === input.entityId && item.agentId === input.agentId,
      );
      if (existing) return existing;
      const assignment = assignmentSchema.parse({
        id: randomUUID(),
        entityId: input.entityId,
        agentId: input.agentId,
        createdAt: new Date().toISOString(),
      });
      state.assignments.push(assignment);
      this.root(root);
      await this.write(root, state);
      return assignment;
    });
  }

  /** Removes only the requested association. Historical sessions remain isolated under their original assignment UUID. */
  async remove(raw) {
    const input = scopeSchema.parse(raw);
    const root = this.root(input.vaultPath);
    return queueFor(root)(async () => {
      const state = await this.read(root);
      state.assignments = state.assignments.filter(
        (item) => item.id !== input.assignmentId,
      );
      await this.write(root, state);
      return true;
    });
  }

  /** Loads one bounded session and checks every persisted owner field against its live assignment. */
  async session(root, assignment) {
    const session = await readJson(
      await this.checkPath(root, "sessions", assignment.id + ".json"),
      (value) => sessionSchema.parse(value),
      {
        schemaVersion: 1,
        assignmentId: assignment.id,
        entityId: assignment.entityId,
        agentId: assignment.agentId,
        messages: [],
        error: null,
        executions: [],
        requests: [],
      },
    );
    if (
      session.assignmentId !== assignment.id ||
      session.entityId !== assignment.entityId ||
      session.agentId !== assignment.agentId ||
      session.executions.some(
        (execution) =>
          execution.assignmentId !== assignment.id ||
          execution.entityId !== assignment.entityId,
      ) ||
      session.requests.some(
        (request) =>
          request.assignmentId !== assignment.id ||
          request.entityId !== assignment.entityId ||
          request.agentId !== assignment.agentId,
      )
    )
      throw new Error("Session owner does not match this assignment.");
    return session;
  }

  /** Saves bounded history atomically. Full oldest exchanges are removed together to retain user/assistant pairing. */
  saveSession(root, session) {
    session.executions = session.executions.slice(-20);
    session.requests = session.requests.slice(-20);
    while (
      session.messages.length > 199 ||
      session.messages.reduce(
        (size, message) => size + message.content.length,
        0,
      ) > 200000
    ) {
      session.messages.shift();
      while (session.messages[0]?.role === "assistant")
        session.messages.shift();
    }
    return writeJson(
      path.join(
        this.directory(root),
        "sessions",
        session.assignmentId + ".json",
      ),
      sessionSchema.parse(session),
    );
  }

  /** Creates scoped host permissions. Execution needs an exact admitted node; refresh grants only compile derived identity from assigned sources, never source/entity writes. */
  runtime(root, assignment, executionGrant = null, refreshGrant = false) {
    return this.identityFactory({
      /** Rechecks the active Universe and assignment on every identity-runtime authorization boundary. */
      authorize: async ({ root: requestedRoot, entityId, permission }) => {
        if (requestedRoot !== root || entityId !== assignment.entityId)
          return false;
        const current = await this.binding(root, assignment.id);
        if (
          permission === "knowledge:read" &&
          !connectedNodes(current.agent, "Knowledge").length &&
          !refreshGrant
        )
          return false;
        const executionAllowed =
          executionGrant &&
          current.agent.construction?.activeRevision ===
            executionGrant.graphRevision &&
          connectedNodes(current.agent, "Engine").some(
            (node) =>
              node.id === executionGrant.nodeId &&
              (node.config.permissionPolicy === "read-only-approval" ||
                (node.config.permissionPolicy === "read-only-auto" &&
                  isReadOnlyOperation(
                    node.config.engineId,
                    node.config.operation,
                  ))),
          );
        return [
          "entity:read",
          "knowledge:read",
          ...(refreshGrant ? ["identity:compile"] : []),
          ...(executionAllowed
            ? ["capability:execute", "provider:yahoo-finance:read"]
            : []),
        ].includes(permission);
      },
    });
  }

  /** Checks the whole assigned identity before a chat turn and recompiles missing/stale snapshots through the existing compiler. Unchanged inputs reuse their immutable version; source files and applied declarations are never edited. */
  async refreshIdentity(root, binding) {
    const runtime = this.runtime(root, binding.assignment, null, true);
    const scope = { root, entityId: binding.assignment.entityId };
    const identity = await runtime.getIdentity(scope);
    if (identity.status === "fresh") return identity;
    try {
      return await runtime.generate(scope);
    } catch {
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "The agent could not refresh the entity identity. Check assigned source availability and the applied Knowledge Card index, then retry. Existing snapshots and source files were preserved.",
        { toolError: "IDENTITY_REFRESH_FAILED" },
      );
    }
  }

  /** Resolves current identity metadata lazily and reports missing/stale knowledge explicitly. Discovery never probes or executes providers. */
  async context(root, binding, session) {
    const { assignment, agent, entity } = binding;
    const runtime = this.runtime(root, assignment);
    const scope = { root, entityId: assignment.entityId };
    const identity = await runtime.getIdentity(scope);
    const capabilities =
      identity.status === "fresh" ? await runtime.listCapabilities(scope) : [];
    const engines = connectedNodes(agent, "Engine").map((node) => {
      const operation =
        node.config.operation ??
        (node.config.engineId === "chronoz" ? "get_report" : "");
      const matches = capabilities.filter(
        (capability) =>
          capability.engineId === node.config.engineId &&
          capability.operation === operation &&
          (!node.config.engineVersion ||
            capability.version === node.config.engineVersion),
      );
      const registered =
        Object.hasOwn(ENGINE_DEFINITIONS, node.config.engineId) &&
        ENGINE_DEFINITIONS[node.config.engineId].operations.includes(operation);
      const configured = matches.some(
        (item) => item.availability === "configured",
      );
      const automatic =
        node.config.permissionPolicy === "read-only-auto" &&
        isReadOnlyOperation(node.config.engineId, operation);
      const enabled =
        automatic || node.config.permissionPolicy === "read-only-approval";
      const last = session?.executions.findLast(
        (execution) =>
          execution.nodeId === node.id &&
          execution.graphRevision === agent.construction?.activeRevision,
      );
      let health = last?.providerHealth ?? "unchecked";
      if (last?.status === "failed") health = "failed";
      const reasons = [
        !registered && "The engine operation is not registered.",
        !configured &&
          `The entity identity has no configured ${node.config.engineId} / ${operation} declaration matching this node's version. Review the applied Knowledge Card index and node operation.`,
        !enabled &&
          "This node has no permitted read adapter. Choose Automatic read-only access for a supported operation in Workbench, or review its execution policy.",
      ].filter(Boolean);
      return {
        nodeId: node.id,
        engineId: node.config.engineId,
        operation,
        permissionPolicy: node.config.permissionPolicy ?? "disabled",
        registered,
        configured,
        enabled,
        authorization: automatic
          ? "automatic-read-only"
          : enabled
            ? "approval-required"
            : "disabled",
        authorized:
          (automatic && configured) ||
          (last?.status === "pending" &&
            last.identityVersion === identity.manifest?.identityVersion),
        health: { status: health, checkedAt: last?.timestamp ?? null },
        executed: Boolean(last && last.status !== "rejected"),
        succeeded: last?.status === "succeeded",
        reason: reasons.length
          ? reasons.join(" ")
          : automatic
            ? "Standing permission allows this entity's read-only engine without an approval prompt. Source files and entity settings cannot be changed."
            : "Human approval is required for each invocation. Provider health is checked during execution.",
        status: configured ? "configured" : "unavailable",
        capabilities: matches,
      };
    });
    return {
      entity: {
        id: entity.id,
        name: entity.name,
        category: entity.category ?? null,
        tags: entity.tags ?? [],
      },
      identityStatus: identity.status,
      identityVersion: identity.manifest?.identityVersion ?? null,
      knowledge: identity.manifest?.knowledge ?? null,
      referenceOnlyCount:
        identity.manifest?.sources.filter(
          (source) => source.status === "reference-only",
        ).length ?? 0,
      engines,
      knowledgeAccess: {
        connected: connectedNodes(agent, "Knowledge").length > 0,
        reason: connectedNodes(agent, "Knowledge").length
          ? "Entity-scoped heading traversal and chunk retrieval are available when the identity is fresh."
          : "Add and connect a Knowledge node in Workbench, then Save & apply to access the indexed content.",
      },
    };
  }

  /** Opens isolated history with live metadata and graph availability. No model or financial API is called. */
  async open(raw) {
    const input = scopeSchema.parse(raw);
    const root = this.root(input.vaultPath);
    const binding = await this.binding(root, input.assignmentId);
    const session = await this.session(root, binding.assignment);
    const context = await this.context(root, binding, session);
    const settings = await this.settings(binding.agent);
    this.root(root);
    return {
      assignment: binding.assignment,
      session,
      context,
      providerConfigured: Boolean(settings?.modelId),
      providerId: settings?.providerId ?? null,
      modelId: settings?.modelId ?? null,
    };
  }

  /** Inherits shared model settings or the definition's explicit selection, preserving provider choice and credentials in existing services. */
  async settings(agent) {
    if (!this.registry) return null;
    const shared = await this.registry.read();
    return agent.runtimeModel?.providerId && agent.runtimeModel.modelId
      ? { ...shared, ...agent.runtimeModel }
      : shared;
  }

  /** Loads at most three current-version successful results for this assignment, within a shared prompt budget. Oversized results remain explicit references. */
  async recentResults(root, binding, context, session, settings) {
    let remainingBytes = Math.min(
      6000,
      Math.max(0, (settings.contextWindow * 3) / 8),
    );
    const results = [];
    const eligible = session.executions
      .filter(
        (execution) =>
          execution.status === "succeeded" &&
          execution.assignmentId === binding.assignment.id &&
          execution.identityVersion === context.identityVersion &&
          execution.graphRevision ===
            binding.agent.construction?.activeRevision,
      )
      .slice(-3);
    for (const execution of eligible) {
      if (execution.priceQuote) {
        const rawFile = await this.checkPath(
          root,
          "results",
          execution.resultReference + ".json",
        );
        const raw = JSON.parse(
          (
            await require("./chronoz-adapter.cjs").boundedRead(
              rawFile,
              1024 * 1024,
            )
          ).toString("utf8"),
        );
        if (
          createHash("sha256").update(JSON.stringify(raw)).digest("hex") !==
          execution.resultHash
        )
          throw new Error(
            "Stored capability result changed. Execute the capability again.",
          );
        results.push({
          execution,
          contentStatus: "included",
          result: priceEvidence(execution, raw),
        });
        continue;
      }
      const file = await this.checkPath(
        root,
        "results",
        execution.resultReference + ".json",
      );
      const stats = await fs.stat(file);
      if (!stats.isFile())
        throw new Error("Stored capability result is unavailable.");
      if (stats.size > remainingBytes) {
        results.push({ execution, contentStatus: "over-budget" });
        continue;
      }
      const bytesBuffer = await require("./chronoz-adapter.cjs").boundedRead(
        file,
        remainingBytes,
      );
      const result = JSON.parse(bytesBuffer.toString("utf8"));
      if (
        createHash("sha256").update(JSON.stringify(result)).digest("hex") !==
        execution.resultHash
      )
        throw new Error(
          "Stored capability result changed. Execute the capability again.",
        );
      const bytes = Buffer.byteLength(JSON.stringify(result), "utf8");
      const included = bytes <= remainingBytes;
      if (included) remainingBytes -= bytes;
      results.push({
        execution,
        contentStatus: included ? "included" : "over-budget",
        ...(included ? { result } : {}),
      });
    }
    return results;
  }

  /** Reads one successful current-scope result with hash verification. Nested JSON values are paginated by field path and byte budget so large financial data stays readable without overflowing context. */
  async readResult(
    root,
    binding,
    context,
    executionId,
    offset = 0,
    limit = 50,
  ) {
    z.string().uuid().parse(executionId);
    z.number().int().min(0).max(100000).parse(offset);
    z.number().int().min(1).max(100).parse(limit);
    const session = await this.session(root, binding.assignment);
    const execution = session.executions.find(
      (item) => item.id === executionId,
    );
    if (
      !execution ||
      execution.status !== "succeeded" ||
      execution.assignmentId !== binding.assignment.id ||
      execution.entityId !== binding.assignment.entityId ||
      execution.identityVersion !== context.identityVersion ||
      execution.graphRevision !== binding.agent.construction.activeRevision ||
      !context.engines.some(
        (node) => node.nodeId === execution.nodeId && node.enabled,
      )
    )
      throw new Error(
        "Engine result is unavailable for this assignment, graph or identity version.",
      );
    const file = await this.checkPath(root, "results", execution.id + ".json");
    const raw = JSON.parse(
      (
        await require("./chronoz-adapter.cjs").boundedRead(file, 1024 * 1024)
      ).toString("utf8"),
    );
    if (
      createHash("sha256").update(JSON.stringify(raw)).digest("hex") !==
      execution.resultHash
    )
      throw new Error(
        "Stored capability result changed. Request a fresh engine read.",
      );
    const entries = [];
    /** Visits immutable JSON values, preserving provider field names and values without interpreting them as instructions. */
    function visit(value, fieldPath) {
      if (
        value !== null &&
        typeof value === "object" &&
        Object.keys(value).length
      ) {
        for (const [key, child] of Object.entries(value))
          visit(child, [...fieldPath, key]);
      } else entries.push({ path: fieldPath, value });
    }
    visit(raw, []);
    const items = [];
    let bytes = 0;
    for (const entry of entries.slice(offset, offset + limit)) {
      const size = Buffer.byteLength(JSON.stringify(entry));
      if (size > 6000)
        throw new Error(
          "One engine result field exceeds the readable page budget.",
        );
      if (bytes + size > 6000) break;
      items.push(entry);
      bytes += size;
    }
    return {
      executionId,
      engineId: execution.engineId,
      operation: execution.operation,
      resultHash: execution.resultHash,
      items,
      offset,
      total: entries.length,
      nextOffset:
        offset + items.length < entries.length ? offset + items.length : null,
    };
  }

  /** Retrieves a lexical page only through the existing entity identity boundary, preserving chunk provenance and continuation. */
  async retrieve(raw) {
    const input = scopeSchema
      .extend({
        query: z.string().max(200),
        offset: z.number().int().min(0).max(2048).default(0),
        limit: z.number().int().min(1).max(20).default(5),
      })
      .parse(raw);
    const root = this.root(input.vaultPath);
    const { assignment, agent } = await this.binding(root, input.assignmentId);
    if (!connectedNodes(agent, "Knowledge").length)
      throw new Error(
        "Connect a Knowledge node and Save & apply before retrieving entity knowledge.",
      );
    return this.runtime(root, assignment).searchChunks({
      root,
      entityId: assignment.entityId,
      query: input.query,
      offset: input.offset,
      limit: input.limit,
    });
  }

  /** Converts backend failures into actionable, secret-free tool diagnostics. Invalid source text and provider bodies are never exposed as errors. */
  toolError(error, status = "failed") {
    if (error?.details?.toolError)
      return { code: error.details.toolError, message: error.message };
    if (error?.name === "ZodError")
      return {
        code:
          status === "rejected"
            ? "PARAMETERS_INVALID"
            : "ENGINE_INVALID_RESPONSE",
        message:
          status === "rejected"
            ? "Capability parameters were rejected. Only the declared parameters are allowed."
            : "The backend returned an invalid result. Check provider availability or regenerate the entity identity before retrying.",
      };
    if (
      /graph.*changed|scope.*changed|Universe changed/i.test(
        error?.message ?? "",
      )
    )
      return {
        code: "REQUEST_STALE",
        message:
          "The graph or assignment scope changed. Refresh the agent state and request approval again.",
      };
    if (/stale|identity.*missing|identity.*changed/i.test(error?.message ?? ""))
      return {
        code: "IDENTITY_STALE",
        message:
          "The entity identity is missing or changed. Regenerate Backend Identity and request approval again.",
      };
    if (/approval|permission|disabled/i.test(error?.message ?? ""))
      return {
        code: "PERMISSION_DENIED",
        message:
          "Execution was rejected. Enable Read-only with human approval for this node and approve the exact request.",
      };
    if (/capability|not configured|not registered/i.test(error?.message ?? ""))
      return {
        code: "CAPABILITY_UNAVAILABLE",
        message:
          "The capability is unavailable for this assignment. Check the node operation, version and entity index declaration.",
      };
    if (
      /timeout|timed out|aborted/i.test(error?.message ?? "") ||
      ["TimeoutError", "AbortError"].includes(error?.name)
    )
      return {
        code: "PROVIDER_TIMEOUT",
        message:
          "The price provider timed out. Request a fresh execution when connectivity recovers.",
      };
    return {
      code: status === "rejected" ? "REQUEST_REJECTED" : "ENGINE_FAILED",
      message:
        status === "rejected"
          ? "Capability request was rejected. Verify its applied node, entity scope, parameters and approval."
          : "The registered engine could not return valid data. Check provider connectivity and the configured ticker, then retry with a new request.",
    };
  }

  /** Persists an invocation bound to current graph, identity, capability and normalized parameters, recording standing-read permission or required human approval. This method itself never executes an engine. */
  async createRequest(root, binding, input, userMessageId = null) {
    const context = await this.context(root, binding);
    const engine = context.engines.find((node) => node.nodeId === input.nodeId);
    if (!engine?.enabled)
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "Execution is disabled or this node has no supported read-only adapter. Review its operation and execution policy in Workbench, then Save & apply.",
        { toolError: "PERMISSION_DENIED" },
      );
    const capability = engine.capabilities.find(
      (item) =>
        item.capabilityId === input.capabilityId &&
        item.availability === "configured",
    );
    if (!capability)
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "The requested capability is unavailable for this entity, operation or version.",
        { toolError: "CAPABILITY_UNAVAILABLE" },
      );
    const node = connectedNodes(binding.agent, "Engine").find(
      (item) => item.id === input.nodeId,
    );
    const parameters = z
      .object({ force: z.boolean().optional() })
      .strict()
      .parse({ ...node.config.parameters, ...input.arguments });
    const session = await this.session(root, binding.assignment);
    const matching = session.requests.find((request) =>
      input.requestId
        ? request.id === input.requestId
        : request.status === "awaiting-approval" &&
          Date.parse(request.expiresAt) > Date.now() &&
          request.nodeId === node.id &&
          request.capabilityId === capability.capabilityId &&
          request.identityVersion === context.identityVersion &&
          request.graphRevision === binding.agent.construction.activeRevision &&
          JSON.stringify(request.parameters) === JSON.stringify(parameters),
    );
    if (matching) {
      if (
        matching.nodeId !== node.id ||
        matching.capabilityId !== capability.capabilityId ||
        JSON.stringify(matching.parameters) !== JSON.stringify(parameters)
      )
        throw new Error("Request token belongs to different parameters.");
      return matching;
    }
    const now = Date.now();
    const request = requestSchema.parse({
      id: input.requestId ?? randomUUID(),
      assignmentId: binding.assignment.id,
      entityId: binding.assignment.entityId,
      agentId: binding.agent.id,
      nodeId: node.id,
      capabilityId: capability.capabilityId,
      engineId: capability.engineId,
      operation: capability.operation,
      symbol: capability.symbol,
      parameters,
      graphRevision: binding.agent.construction.activeRevision,
      identityVersion: context.identityVersion,
      createdAt: new Date(now).toISOString(),
      expiresAt: new Date(now + 10 * 60 * 1000).toISOString(),
      userMessageId,
      status: "awaiting-approval",
      executionId: null,
      error: null,
      authorizationMode:
        engine.authorization === "automatic-read-only"
          ? "standing-read-only"
          : "human-approval",
    });
    session.requests.push(request);
    await this.saveSession(root, session);
    return request;
  }

  /** Creates a manually requested approval through the same backend proposal boundary used by model actions. A client token makes retries idempotent. */
  async propose(raw) {
    const input = scopeSchema
      .extend({
        requestId: z.string().uuid().optional(),
        nodeId: id,
        capabilityId: z.string().regex(/^[a-f0-9]{64}$/),
        arguments: z
          .object({ force: z.boolean().optional() })
          .strict()
          .optional(),
      })
      .parse(raw);
    const root = this.root(input.vaultPath);
    return queueFor(root)(async () =>
      this.createRequest(
        root,
        await this.binding(root, input.assignmentId),
        input,
      ),
    );
  }

  /** Consumes one exact pending approval before any engine work. Completed or interrupted claims cannot be executed again by retries. */
  async consumeRequest(root, binding, session, requestId) {
    const request = session.requests.find((item) => item.id === requestId);
    if (!request || request.status !== "awaiting-approval")
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "This approval is unavailable or already consumed. Refresh the request state.",
      );
    if (Date.parse(request.expiresAt) <= Date.now()) {
      request.status = "expired";
      await this.saveSession(root, session);
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "Approval expired. Ask the agent for a fresh proposal.",
      );
    }
    const context = await this.context(root, binding);
    const capability = context.engines
      .find((node) => node.nodeId === request.nodeId && node.enabled)
      ?.capabilities.find((item) => item.capabilityId === request.capabilityId);
    if (
      request.graphRevision !== binding.agent.construction.activeRevision ||
      request.identityVersion !== context.identityVersion ||
      !capability ||
      capability.symbol !== request.symbol ||
      capability.engineId !== request.engineId ||
      capability.operation !== request.operation
    ) {
      request.status = "cancelled";
      request.error =
        "Approval scope changed. Request a fresh proposal after reviewing the graph and entity identity.";
      await this.saveSession(root, session);
      throw new ModelRuntimeError("MODEL_INVALID_REQUEST", request.error);
    }
    request.status = "executing";
    await this.saveSession(root, session);
    let result;
    let failure;
    try {
      result = await this.executeBound(root, {
        assignmentId: binding.assignment.id,
        nodeId: request.nodeId,
        capabilityId: request.capabilityId,
        arguments: request.parameters,
        approved: request.authorizationMode === "human-approval",
        requestId: request.id,
      });
    } catch (error) {
      failure = error;
    }
    const current = await this.session(root, binding.assignment);
    const consumed = current.requests.find((item) => item.id === request.id);
    consumed.status = failure ? "failed" : "succeeded";
    consumed.executionId =
      result?.audit.id ?? failure?.details?.executionId ?? null;
    consumed.error = failure?.message ?? null;
    await this.saveSession(root, current);
    if (failure) throw failure;
    return result;
  }

  /** Applies one human decision by stored request ID and continues the agent after successful execution. Renderer-supplied operation parameters are never accepted here. */
  async decide(raw) {
    const input = scopeSchema
      .extend({ requestId: z.string().uuid(), approved: z.boolean() })
      .parse(raw);
    const root = this.root(input.vaultPath);
    return queueFor(root)(async () => {
      const binding = await this.binding(root, input.assignmentId);
      const session = await this.session(root, binding.assignment);
      const request = session.requests.find(
        (item) => item.id === input.requestId,
      );
      if (!request)
        throw new Error("Approval request does not belong to this assignment.");
      if (request.status !== "awaiting-approval")
        return this.open({ vaultPath: root, assignmentId: input.assignmentId });
      if (!input.approved) {
        request.status = "cancelled";
        await this.saveSession(root, session);
        return this.open({ vaultPath: root, assignmentId: input.assignmentId });
      }
      return this.sendTurn(root, {
        assignmentId: input.assignmentId,
        message: `Approve request ${request.id}. Return the executed result and provenance.`,
        approvalRequestId: request.id,
      });
    });
  }

  /** Dispatches validated actions to scoped knowledge/result readers or registered read adapters. Standing reads continue immediately; manual-policy proposals pause. Enforces graph freshness, deduplication and bounded evidence. */
  toolRuntime(
    root,
    binding,
    context,
    session,
    userMessageId,
    references,
    initialChunks,
    settings,
    approvedExecution,
  ) {
    let remaining = Math.max(
      0,
      Math.min(
        connectedNodes(binding.agent, "Knowledge")[0]?.config.maxTokens ?? 2000,
        Math.floor(settings.contextWindow / 4),
      ) - initialChunks.reduce((sum, chunk) => sum + chunk.tokenEstimate, 0),
    );
    const known = new Set(references.map((item) => item.chunkId));
    const automaticReceipts = new Map();
    return {
      dispatch: async (action) => {
        try {
          const current = await this.binding(root, binding.assignment.id);
          if (
            current.agent.construction.activeRevision !==
            binding.agent.construction.activeRevision
          )
            throw new Error("Agent graph changed during tool routing.");
          if (action.action === "engine.request") {
            const node = connectedNodes(current.agent, "Engine").find(
              (item) => item.id === action.nodeId,
            );
            const key = JSON.stringify([
              action.nodeId,
              action.capabilityId,
              action.arguments?.force ??
                node?.config.parameters?.force ??
                false,
            ]);
            if (automaticReceipts.has(key)) return automaticReceipts.get(key);
            if (
              approvedExecution?.nodeId === action.nodeId &&
              session.requests.find(
                (request) => request.id === approvedExecution.requestId,
              )?.capabilityId === action.capabilityId
            ) {
              const receipt = session.executions.find(
                (execution) => execution.id === approvedExecution.id,
              );
              return {
                status: "succeeded",
                tool: action.action,
                alreadyExecuted: true,
                executionId: receipt.id,
                result: receipt.priceQuote ?? {
                  resultReference: receipt.resultReference,
                },
              };
            }
            const request = await this.createRequest(
              root,
              current,
              action,
              userMessageId,
            );
            if (request.authorizationMode === "standing-read-only") {
              // Remember admission before provider work. Model retries within this
              // turn cannot silently re-run a failed or uncertain invocation.
              automaticReceipts.set(key, {
                status: "failed",
                tool: action.action,
                error: {
                  code: "ALREADY_ATTEMPTED",
                  message:
                    "This read was already attempted in this turn. Inspect its execution history before requesting a fresh turn.",
                },
              });
              const result = await this.consumeRequest(
                root,
                current,
                await this.session(root, current.assignment),
                request.id,
              );
              const receipt = {
                status: "succeeded",
                tool: action.action,
                executionId: result.audit.id,
                result:
                  result.audit.priceQuote ??
                  (await this.readResult(
                    root,
                    current,
                    context,
                    result.audit.id,
                  )),
              };
              automaticReceipts.set(key, receipt);
              return receipt;
            }
            return {
              pendingApproval: true,
              requestId: request.id,
              message: `Approval required for ${request.engineId} / ${request.operation} · ${request.symbol ?? "entity source"}. Request ${request.id}. Select Approve request or reply Yes, please to approve this exact pending request.`,
            };
          }
          if (action.action === "engine.readResult")
            return {
              status: "succeeded",
              tool: action.action,
              ...(await this.readResult(
                root,
                current,
                context,
                action.executionId,
                action.offset,
                action.limit,
              )),
            };
          if (!context.knowledgeAccess.connected)
            throw new ModelRuntimeError(
              "MODEL_INVALID_REQUEST",
              context.knowledgeAccess.reason,
              { toolError: "KNOWLEDGE_NODE_REQUIRED" },
            );
          const runtime = this.runtime(root, binding.assignment);
          const scope = {
            root,
            entityId: binding.assignment.entityId,
            version: context.identityVersion,
          };
          if (action.action === "knowledge.listTopics") {
            const page = await runtime.listTopics({
              ...scope,
              offset: action.offset,
              limit: action.limit,
            });
            for (const topic of page.items) {
              const chunk = topic.chunks[0];
              if (chunk && !known.has(chunk.chunkId)) {
                known.add(chunk.chunkId);
                references.push(evidenceReference({ ...topic, ...chunk }));
              }
            }
            return { status: "succeeded", tool: action.action, ...page };
          }
          const page =
            action.action === "knowledge.getChunk"
              ? {
                  items: [
                    await runtime.getChunk({
                      ...scope,
                      chunkId: action.chunkId,
                    }),
                  ],
                  nextOffset: null,
                }
              : await runtime.searchChunks({
                  ...scope,
                  query: action.query,
                  offset: action.offset,
                  limit: action.limit ?? 5,
                });
          const items = [];
          for (const chunk of page.items) {
            if (chunk.tokenEstimate > remaining) continue;
            remaining -= chunk.tokenEstimate;
            items.push(chunk);
            if (!known.has(chunk.chunkId)) {
              known.add(chunk.chunkId);
              references.push(evidenceReference(chunk));
            }
          }
          return {
            ...page,
            items,
            status: "succeeded",
            tool: action.action,
            omittedChunks: page.items.length - items.length,
          };
        } catch (error) {
          return {
            status: "failed",
            tool: action.action,
            error: this.toolError(error),
          };
        }
      },
    };
  }

  /** Runs a direct assignment turn through the existing provider runner. Bounded untrusted evidence is assembled on demand and tools never auto-run. Errors persist in the session. */
  async send(raw) {
    const input = scopeSchema
      .extend({
        message: z.string().trim().min(1).max(8000),
        requestId: z.string().uuid().optional(),
      })
      .parse(raw);
    const root = this.root(input.vaultPath);
    return queueFor(root)(() => this.sendTurn(root, input));
  }

  /** Executes one already-serialized chat/approval turn. Internal callers retain the root queue while tools use the existing authorization boundary. */
  async sendTurn(root, input) {
    const binding = await this.binding(root, input.assignmentId);
    let session = await this.session(root, binding.assignment);
    if (
      input.requestId &&
      session.messages.some((message) => message.id === input.requestId)
    )
      return this.open({ vaultPath: root, assignmentId: input.assignmentId });
    // Failed user-only turns remain visible in the transcript. Provider history contains completed exchanges so retries cannot misalign pairs.
    const history = [];
    for (let index = 1; index < session.messages.length; index++) {
      const message = session.messages[index];
      const previous = session.messages[index - 1];
      if (message.role === "assistant" && previous.role === "user")
        history.push(
          { role: "user", content: previous.content },
          { role: "assistant", content: message.content },
        );
    }
    const userMessageId = input.requestId ?? randomUUID();
    session.messages.push({
      id: userMessageId,
      role: "user",
      content: input.message,
      at: new Date().toISOString(),
    });
    session.error =
      "Response pending. If this request was interrupted, send the message again.";
    await this.saveSession(root, session);
    let timer;
    let approvedResult;
    try {
      // Refresh is a scoped derived-data operation, independent of LLM tool choice.
      // A stale approval is still cancelled if compilation changes its bound version.
      await this.refreshIdentity(root, binding);
      const pending = session.requests.filter(
        (request) =>
          request.status === "awaiting-approval" &&
          Date.parse(request.expiresAt) > Date.now(),
      );
      if (isApproval(input.message) && pending.length > 1)
        throw new ModelRuntimeError(
          "MODEL_INVALID_REQUEST",
          "Several requests await approval. Choose the exact request's approval button.",
        );
      const approvalId =
        input.approvalRequestId ??
        (isApproval(input.message) && pending.length === 1
          ? pending[0].id
          : null);
      if (approvalId) {
        approvedResult = await this.consumeRequest(
          root,
          binding,
          session,
          approvalId,
        );
        session = await this.session(root, binding.assignment);
      } else if (
        isApproval(input.message) &&
        !pending.length &&
        session.requests.at(-1)?.status === "succeeded"
      ) {
        const completed = session.requests.at(-1);
        session.messages.push({
          id: randomUUID(),
          role: "assistant",
          content: `This request already succeeded. Execution ${completed.executionId}. No new invocation was accepted.`,
          at: new Date().toISOString(),
        });
        session.error = null;
        await this.saveSession(root, session);
        return this.open({ vaultPath: root, assignmentId: input.assignmentId });
      }
      const settings = await this.settings(binding.agent);
      if (!settings?.modelId)
        throw new ModelRuntimeError(
          "MODEL_NOT_FOUND",
          "LLM provider is not configured. Select an available model in Settings.",
        );
      const controller = new AbortController();
      timer = setTimeout(
        () =>
          controller.abort(
            new ModelRuntimeError("MODEL_TIMEOUT", "Agent response timed out."),
          ),
        settings.absoluteTimeoutMs ?? 120000,
      );
      await this.registry.validateSelection(settings, {
        signal: controller.signal,
      });
      const context = await this.context(root, binding, session);
      const knowledgeNode = connectedNodes(binding.agent, "Knowledge")[0];
      let chunks = [];
      if (knowledgeNode && context.identityStatus === "fresh") {
        const page = await this.retrieve({
          vaultPath: root,
          assignmentId: input.assignmentId,
          query: input.message.slice(0, 200),
        });
        let remaining = Math.min(
          knowledgeNode.config.maxTokens ?? 2000,
          Math.max(0, Math.floor(settings.contextWindow / 4)),
        );
        chunks = page.items.filter((chunk) => {
          if (chunk.tokenEstimate > remaining) return false;
          remaining -= chunk.tokenEstimate;
          return true;
        });
      }
      const references = chunks.map(
        ({
          chunkId,
          sourceId,
          sourceVersion,
          contentHash,
          headingPath,
          startLine,
          endLine,
          trust,
        }) => ({
          chunkId,
          sourceId,
          sourceVersion,
          contentHash,
          headingPath,
          startLine,
          endLine,
          trust,
        }),
      );
      let record;
      await runStandaloneTurn({
        provider: this.registry.providerFor(settings.providerId),
        settings,
        question: input.message,
        history,
        agent: binding.agent,
        agentId: binding.agent.id,
        runId: randomUUID(),
        requestId: randomUUID(),
        conversationId: binding.assignment.id,
        identity: { id: context.identityVersion ?? binding.assignment.id },
        signal: controller.signal,
        // The model receives compact availability metadata. Full registry schemas stay at the execution boundary.
        entityContext: {
          ...context,
          chunks,
          capabilityResults: await this.recentResults(
            root,
            binding,
            context,
            session,
            settings,
          ),
          engines: context.engines.map(({ capabilities, ...engine }) => ({
            ...engine,
            capabilities: capabilities.map(
              ({ capabilityId, sourceId, symbol, availability, version }) => ({
                capabilityId,
                sourceId,
                symbol,
                availability,
                version,
              }),
            ),
          })),
        },
        toolRuntime: this.toolRuntime(
          root,
          binding,
          context,
          session,
          userMessageId,
          references,
          chunks,
          settings,
          approvedResult?.audit,
        ),
        onEvent: () => {},
        /** Captures the existing runner's normalized outcome without copying private prompts into a second run store. */
        recordRun: async (value) => {
          record = value;
        },
      });
      const current = await this.binding(root, binding.assignment.id);
      if (
        current.agent.construction?.activeRevision !==
        binding.agent.construction?.activeRevision
      )
        throw new Error(
          "Agent definition changed during generation. Retry with the current graph.",
        );
      const currentIdentity = await this.runtime(
        root,
        current.assignment,
      ).getIdentity({ root, entityId: current.assignment.entityId });
      if (
        (currentIdentity.manifest?.identityVersion ?? null) !==
          context.identityVersion ||
        currentIdentity.status !== context.identityStatus
      )
        throw new Error(
          "Entity identity changed during generation. Retry with current knowledge.",
        );
      if (!record?.response || record.response.length > 100000)
        throw new Error("Agent response exceeded the session limit.");
      session.messages.push({
        id: record.runId,
        role: "assistant",
        content: record.response,
        at: new Date().toISOString(),
        references,
      });
      session.error = null;
    } catch (error) {
      // Log only classifications. Provider diagnostics and private source text never enter process logs.
      console.error(
        JSON.stringify({
          component: "entity-agent",
          operation: "send",
          assignmentId: binding.assignment.id,
          errorCode: error.code ?? error.name,
        }),
      );
      session.error =
        error instanceof ModelRuntimeError
          ? error.message.slice(0, 2000)
          : "Assigned agent request failed. Reopen the current identity and verify its sources before retrying.";
    } finally {
      clearTimeout(timer);
    }
    // Tool dispatchers persist their own ledger entries. Merge those ledgers before committing the final chat response.
    const currentSession = await this.session(root, binding.assignment);
    session.requests = currentSession.requests;
    session.executions = currentSession.executions;
    await this.saveSession(root, session);
    return {
      ...(await this.open({
        vaultPath: root,
        assignmentId: input.assignmentId,
      })),
      ...(approvedResult ? { toolResult: approvedResult.result } : {}),
    };
  }

  /** Executes one read-only capability under a standing node permission or explicit human approval. Checks the live graph/schema and audits successes/rejections with allowlisted parameters. */
  async execute(raw) {
    const input = scopeSchema
      .extend({
        nodeId: id,
        capabilityId: z.string().regex(/^[a-f0-9]{64}$/),
        approved: z.boolean(),
        arguments: z.unknown().optional(),
      })
      .parse(raw);
    const root = this.root(input.vaultPath);
    return queueFor(root)(() => this.executeBound(root, input));
  }

  /** Executes one validated input inside the caller's existing queue, retaining audit and permission checks for chat continuations and legacy direct callers. */
  async executeBound(root, input) {
    const { assignment, agent } = await this.binding(root, input.assignmentId);
    const node = connectedNodes(agent, "Engine").find(
      (item) => item.id === input.nodeId,
    );
    const audit = {
      id: randomUUID(),
      assignmentId: assignment.id,
      entityId: assignment.entityId,
      nodeId: input.nodeId,
      engineId: node?.config.engineId ?? null,
      operation: node?.config.operation ?? null,
      engineVersion: node?.config.engineVersion ?? null,
      graphRevision: agent.construction?.activeRevision ?? 0,
      identityVersion: null,
      timestamp: new Date().toISOString(),
      parameters: {},
      status: "rejected",
      resultReference: null,
      resultHash: null,
      error: null,
      ...(input.requestId ? { requestId: input.requestId } : {}),
    };
    try {
      const automatic =
        node?.config.permissionPolicy === "read-only-auto" &&
        isReadOnlyOperation(node.config.engineId, node.config.operation);
      if (
        !automatic &&
        (!input.approved ||
          node?.config.permissionPolicy !== "read-only-approval")
      )
        throw new Error(
          "Human approval and agent read-only permission are required.",
        );
      const context = await this.context(root, {
        assignment,
        agent,
        entity: await this.readEntity(root, assignment.entityId),
      });
      const capability = context.engines
        .find((item) => item.nodeId === node.id)
        ?.capabilities.find((item) => item.capabilityId === input.capabilityId);
      if (!capability || capability.availability !== "configured")
        throw new Error("This capability is unavailable for this assignment.");
      audit.authorizationMode = automatic
        ? "standing-read-only"
        : "human-approval";
      const parameters = z
        .object({ force: z.boolean().optional() })
        .strict()
        .parse(input.arguments ?? node.config.parameters ?? {});
      audit.parameters = parameters;
      audit.identityVersion = context.identityVersion;
      audit.status = "pending";
      // Persist admission before any provider work so interruption leaves an auditable pending request.
      await writeJson(
        path.join(this.directory(root), "executions", audit.id + ".json"),
        executionSchema.parse(audit),
      );
      const pendingSession = await this.session(root, assignment);
      pendingSession.executions.push(audit);
      await this.saveSession(root, pendingSession);
      const result = await this.runtime(root, assignment, {
        nodeId: node.id,
        graphRevision: agent.construction.activeRevision,
      }).executeCapability({
        root,
        entityId: assignment.entityId,
        capabilityId: capability.capabilityId,
        version: context.identityVersion,
        arguments: parameters,
      });
      const current = await this.binding(root, assignment.id);
      if (
        current.agent.construction?.activeRevision !==
        agent.construction?.activeRevision
      )
        throw new Error("Agent permissions changed during execution.");
      const summary = priceEvidence(audit, result);
      if (summary && summary.symbol !== capability.symbol)
        throw new Error("The engine returned a different symbol.");
      await writeJson(
        path.join(this.directory(root), "results", audit.id + ".json"),
        result,
      );
      audit.status = "succeeded";
      audit.providerHealth =
        result.stale === true
          ? "failed"
          : result.cached === false
            ? "succeeded"
            : "unchecked";
      audit.resultReference = audit.id;
      audit.resultHash = createHash("sha256")
        .update(JSON.stringify(result))
        .digest("hex");
      if (summary) audit.priceQuote = summary;
      return { audit, result };
    } catch (error) {
      if (audit.status === "pending") audit.status = "failed";
      const failure = this.toolError(error, audit.status);
      audit.error = failure.message;
      audit.errorCode = failure.code;
      throw new ModelRuntimeError("MODEL_INVALID_REQUEST", failure.message, {
        toolError: failure.code,
        executionId: audit.id,
      });
    } finally {
      await writeJson(
        path.join(this.directory(root), "executions", audit.id + ".json"),
        executionSchema.parse(audit),
      );
      const session = await this.session(root, assignment);
      session.executions = session.executions.filter(
        (execution) => execution.id !== audit.id,
      );
      session.executions.push(audit);
      await this.saveSession(root, session);
    }
  }
}

/** Returns current registry contracts for construction controls. Registration describes availability without claiming successful execution. */
function engineDefinitions() {
  return Object.values(ENGINE_DEFINITIONS);
}

module.exports = { EntityAgentService, connectedNodes, engineDefinitions };
