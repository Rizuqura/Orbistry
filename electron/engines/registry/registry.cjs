const fs = require("node:fs/promises");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const { z } = require("zod");
const {
  safeDirectory,
  rejectSymlink,
  writeJson,
  writeTextAtomic,
  serialQueue,
} = require("../../core/persistence/json-store.cjs");
const { inspectPackage, readBytes, parseJson } = require("./package.cjs");
const {
  id,
  version,
  fail,
  sha,
  validateData,
  PROTOCOL,
  LIMITS,
} = require("../contracts/contract.cjs");
const { runPackage } = require("../runtime/runner.cjs");
const entityIdSchema = z.string().regex(/^[a-zA-Z0-9_-]{1,128}$/);
const storedVersion = z
  .object({
    digest: z.string().regex(/^[a-f0-9]{64}$/),
    trusted: z.boolean(),
    source: z.string().max(2000),
    disabled: z.boolean().optional(),
    installedAt: z.string().datetime(),
  })
  .strict();
const stateSchema = z
  .object({
    schemaVersion: z.literal(1),
    packages: z.record(
      id,
      z
        .object({ active: version, versions: z.record(version, storedVersion) })
        .strict(),
    ),
    links: z
      .array(
        z
          .object({
            grantId: z.string().uuid().optional(),
            entityId: entityIdSchema,
            engineId: id,
            operations: z.array(id).min(1).max(32),
            policy: z.enum(["manual", "automatic"]),
            allowNetwork: z.boolean(),
            digest: z.string().regex(/^[a-f0-9]{64}$/),
          })
          .strict(),
      )
      .max(10000),
  })
  .strict();
const completedReceipt = z
  .object({
    schemaVersion: z.literal(1),
    protocol: z.literal(PROTOCOL),
    executionId: z.string().uuid(),
    engineId: id,
    engineVersion: version,
    packageDigest: z.string().regex(/^[a-f0-9]{64}$/),
    operation: id,
    entityId: entityIdSchema,
    status: z.literal("succeeded"),
    startedAt: z.string().datetime(),
    finishedAt: z.string().datetime(),
    durationMs: z.number().int().nonnegative(),
    errorCode: z.null(),
    resultHash: z.string().regex(/^[a-f0-9]{64}$/),
    origin: z.literal("local_execution"),
    inputHash: z
      .string()
      .regex(/^[a-f0-9]{64}$/)
      .optional(),
    authorization: z
      .object({
        hostAdmitted: z.literal(true),
        policy: z.enum(["manual", "automatic"]),
        approved: z.boolean(),
        network: z.enum(["none", "outbound"]),
      })
      .strict()
      .optional(),
  })
  .strict();
const queues = new Map();
const REGISTRY_BYTES = 2 * 1024 * 1024;

/** Owns a per-Universe registry of immutable package versions and explicit Entity links. Descriptive JSON is never treated as trust or executable permission. */
class EnginePackageRegistry {
  /** Accepts an existing Universe root; authorize must return literal true for every execution/history admission. Default denies; truthy policy objects or strings never grant access. */
  constructor(root, { authorize = async () => false } = {}) {
    this.root = path.resolve(root);
    this.authorize = authorize;
  }

  /** Resolves a bounded metadata location under the canonical Universe, rejecting linked ancestors before reading or writing. */
  async location(...parts) {
    const root = await fs.realpath(this.root);
    let current = root;
    for (const part of [".engine", ...parts]) {
      current = path.join(current, part);
      if (!current.startsWith(root + path.sep))
        fail("ENGINE_PATH_INVALID", "Registry path escaped its Universe.");
      await rejectSymlink(current);
    }
    return current;
  }

  /** Reads checked registry metadata without executing packages or creating directories. */
  async read() {
    const file = await this.location("registry", "registry.json");
    let value;
    try {
      value = parseJson(await readBytes(file, REGISTRY_BYTES));
    } catch (error) {
      if (error.code === "ENOENT")
        return { schemaVersion: 1, packages: {}, links: [] };
      throw error;
    }
    const parsed = stateSchema.safeParse(value);
    if (!parsed.success)
      fail("ENGINE_REGISTRY_INVALID", "Engine registry metadata is invalid.");
    for (const item of Object.values(parsed.data.packages))
      if (!Object.hasOwn(item.versions, item.active))
        fail("ENGINE_REGISTRY_INVALID", "Active package version is missing.");
    return parsed.data;
  }

  /** Serializes registry mutations in-process and across CLI processes. A stale lock fails explicitly; it is never deleted speculatively. */
  async mutate(operation, { rollback, persist = true } = {}) {
    const directory = await this.location("registry");
    if (!queues.has(directory)) queues.set(directory, serialQueue());
    return queues.get(directory)(async () => {
      await safeDirectory(directory);
      const lock = path.join(directory, ".writer.lock");
      let handle;
      try {
        handle = await fs.open(lock, "wx");
      } catch (error) {
        if (error.code === "EEXIST")
          fail("ENGINE_REGISTRY_BUSY", "Registry is locked by another writer.");
        throw error;
      }
      try {
        const state = await this.read(),
          result = await operation(state);
        if (!persist) return result;
        const checkedState = stateSchema.parse(state);
        if (
          Buffer.byteLength(JSON.stringify(checkedState, null, 2) + "\n") >
          REGISTRY_BYTES
        )
          fail(
            "ENGINE_REGISTRY_FULL",
            "Registry metadata exceeds its 2 MiB limit; existing metadata was preserved.",
          );
        await writeJson(path.join(directory, "registry.json"), checkedState);
        return result;
      } catch (error) {
        // Keep the writer lock until a failed install's newly created directory is removed.
        if (rollback) await rollback();
        throw error;
      } finally {
        await handle.close();
        await fs.unlink(lock);
      }
    });
  }

  /** Installs only fully inspected bytes. Existing versions cannot be overwritten, built-in IDs cannot be shadowed, and installation never runs code or grants trust. */
  async install(directory, { source = "local" } = {}) {
    if (typeof source !== "string" || source.length > 2000)
      fail("ENGINE_SOURCE_INVALID", "Invalid package source metadata.");
    const checked = await inspectPackage(directory);
    if (
      Object.hasOwn(
        require("../definitions.cjs").ENGINE_DEFINITIONS,
        checked.manifest.engine_id,
      )
    )
      fail(
        "ENGINE_ID_RESERVED",
        "Built-in Engine IDs cannot be replaced by packages.",
      );
    let createdTarget;
    return this.mutate(
      async (state) => {
        const engineId = checked.manifest.engine_id,
          engineVersion = checked.manifest.engine_version;
        const prior = state.packages[engineId]?.versions[engineVersion];
        if (prior) {
          if (prior.digest !== checked.digest)
            fail(
              "ENGINE_VERSION_CONFLICT",
              "A different package already uses this version. Publish a new version.",
            );
          await this.installed(engineId, state, engineVersion);
          return {
            engineId,
            version: engineVersion,
            digest: prior.digest,
            installed: false,
            trusted: prior.trusted,
          };
        }
        const target = await this.location("packages", engineId, engineVersion);
        await safeDirectory(path.dirname(target));
        try {
          await fs.lstat(target);
          fail(
            "ENGINE_VERSION_CONFLICT",
            "Unregistered package directory already exists.",
          );
        } catch (error) {
          if (error.code !== "ENOENT") throw error;
        }
        const stage = path.join(path.dirname(target), ".stage-" + randomUUID());
        await safeDirectory(stage);
        try {
          for (const [name, bytes] of checked.files) {
            const file = path.join(stage, name);
            await safeDirectory(path.dirname(file));
            await fs.writeFile(file, bytes, { flag: "wx" });
          }
          await fs.rename(stage, target);
          createdTarget = target;
        } finally {
          await fs.rm(stage, { recursive: true, force: true });
        }
        const record = {
          digest: checked.digest,
          trusted: false,
          source,
          installedAt: new Date().toISOString(),
        };
        state.packages[engineId] ??= { active: engineVersion, versions: {} };
        state.packages[engineId].versions[engineVersion] = record;
        state.packages[engineId].active = engineVersion;
        // Version changes deliberately invalidate links until a human reviews and relinks.
        state.links = state.links.filter((link) => link.engineId !== engineId);
        return {
          engineId,
          version: engineVersion,
          digest: checked.digest,
          installed: true,
          trusted: false,
        };
      },
      {
        rollback: async () => {
          if (createdTarget) await fs.rm(createdTarget, { recursive: true });
        },
      },
    );
  }

  /** Rechecks every installed byte against both its manifest and registered digest before trusting, exposing or executing the active version. */
  async installed(engineId, state = null, requestedVersion = null) {
    id.parse(engineId);
    state ??= await this.read();
    const entry = state.packages[engineId];
    if (!entry)
      fail("ENGINE_NOT_INSTALLED", "Engine package is not installed.");
    const selectedVersion = requestedVersion ?? entry.active;
    const record = entry.versions[selectedVersion];
    if (!record)
      fail("ENGINE_NOT_INSTALLED", "Engine package version is not installed.");
    const checked = await inspectPackage(
      await this.location("packages", engineId, selectedVersion),
    );
    if (
      checked.digest !== record.digest ||
      checked.manifest.engine_id !== engineId ||
      checked.manifest.engine_version !== selectedVersion
    )
      fail("ENGINE_INTEGRITY_FAILED", "Installed Engine package changed.");
    return { ...checked, record };
  }

  /** Records explicit approval of exact reviewed code bytes; neither install nor a model can mint this approval automatically. */
  async trust(engineId, expectedDigest, trusted = true) {
    return this.mutate(async (state) => {
      const checked = await this.installed(engineId, state);
      if (checked.digest !== expectedDigest)
        fail(
          "ENGINE_CHANGED",
          "Trust digest does not match the installed package.",
        );
      checked.record.trusted = trusted;
      if (!trusted)
        state.links = state.links.filter((link) => link.engineId !== engineId);
      return { engineId, digest: checked.digest, trusted };
    });
  }

  /** Enables or disables the reviewed active digest. Disabling drops links, including their network grants. */
  async setEnabled(engineId, digest, enabled) {
    id.parse(engineId);
    z.boolean().parse(enabled);
    return this.mutate(async (state) => {
      const checked = await this.installed(engineId, state);
      if (digest !== checked.digest)
        fail("ENGINE_CHANGED", "Review the current package digest.");
      checked.record.disabled = !enabled;
      if (!enabled)
        state.links = state.links.filter((link) => link.engineId !== engineId);
      return { engineId, enabled };
    });
  }

  /** Detaches all registered versions of one package under the writer lock. History and Entity documents live outside these directories. */
  async uninstall(engineId, digest) {
    id.parse(engineId);
    const moved = [];
    const result = await this.mutate(
      async (state) => {
        const item = state.packages[engineId];
        if (!item)
          fail("ENGINE_NOT_INSTALLED", "Engine package is not installed.");
        if (item.versions[item.active].digest !== digest)
          fail("ENGINE_CHANGED", "Review the current package digest.");
        for (const v of Object.keys(item.versions)) {
          // Verify exact inventory before removing any directory that might contain user edits.
          await this.installed(engineId, state, v);
          const source = await this.location("packages", engineId, v);
          const trash = await this.location(
            "packages",
            engineId,
            ".removed-" + randomUUID(),
          );
          await fs.rename(source, trash);
          moved.push({ source, trash });
        }
        delete state.packages[engineId];
        state.links = state.links.filter((link) => link.engineId !== engineId);
        return { engineId, uninstalled: true };
      },
      {
        rollback: async () => {
          for (const { source, trash } of moved.reverse())
            await fs.rename(trash, source);
        },
      },
    );
    for (const { trash } of moved) await fs.rm(trash, { recursive: true });
    return result;
  }

  /** Links explicitly chosen operations to an existing Entity. Automatic permission and outbound-network consent are separate host-owned settings. */
  async link({
    entityId,
    engineId,
    operations,
    policy = "manual",
    allowNetwork = false,
  }) {
    entityIdSchema.parse(entityId);
    id.parse(engineId);
    await require("../../domains/entity/worldview-store.cjs").readWorldViewChip(
      this.root,
      entityId,
    );
    return this.mutate(async (state) => {
      const checked = await this.installed(engineId, state);
      if (!checked.record.trusted)
        fail(
          "ENGINE_NOT_TRUSTED",
          "Review and trust the exact Engine package first.",
        );
      if (checked.record.disabled)
        fail("ENGINE_DISABLED", "Enable this package before linking.");
      const requested = {
        grantId: randomUUID(),
        entityId,
        engineId,
        operations,
        policy,
        allowNetwork,
        digest: checked.digest,
      };
      const parsed = stateSchema.shape.links.element.safeParse(requested);
      if (
        !parsed.success ||
        new Set(operations).size !== operations.length ||
        operations.some(
          (op) => !checked.manifest.operations.some((item) => item.id === op),
        )
      )
        fail(
          "ENGINE_LINK_INVALID",
          "Invalid Engine link or operation selection.",
        );
      state.links = state.links.filter(
        (link) => link.entityId !== entityId || link.engineId !== engineId,
      );
      state.links.push(parsed.data);
      return parsed.data;
    });
  }

  /** Removes one Entity link without removing installed packages or execution history. */
  async unlink(entityId, engineId) {
    entityIdSchema.parse(entityId);
    id.parse(engineId);
    return this.mutate((state) => {
      state.links = state.links.filter(
        (link) => link.entityId !== entityId || link.engineId !== engineId,
      );
      return { entityId, engineId, linked: false };
    });
  }

  /** Exposes verified contracts, signature status and scope-filtered Entity links without loading package code. Descriptions and proof metadata never grant authorization. */
  async catalog(entityId = null, selectedIds = null) {
    if (entityId !== null) entityIdSchema.parse(entityId);
    const state = await this.read(),
      engines = [];
    for (const engineId of Object.keys(state.packages).sort()) {
      if (selectedIds && !selectedIds.has(engineId)) continue;
      const checked = await this.installed(engineId, state);
      const link = state.links.find(
        (item) =>
          item.engineId === engineId &&
          item.entityId === entityId &&
          item.digest === checked.digest,
      );
      const operations = checked.manifest.operations.map((op) => ({
        ...op,
        available: Boolean(
          !checked.record.disabled &&
          checked.record.trusted &&
          link?.operations.includes(op.id) &&
          (op.network === "none" || link.allowNetwork),
        ),
      }));
      engines.push({
        engineId,
        version: checked.manifest.engine_version,
        name: checked.manifest.name,
        description: checked.manifest.description,
        digest: checked.digest,
        trusted: checked.record.trusted,
        disabled: checked.record.disabled === true,
        sources: checked.manifest.sources ?? [],
        policy: link?.policy ?? "unlinked",
        operations,
        signature: checked.signature,
        links: state.links
          .filter(
            (item) =>
              item.engineId === engineId &&
              item.digest === checked.digest &&
              (entityId === null || item.entityId === entityId),
          )
          .map(({ entityId, operations, policy, allowNetwork }) => ({
            entityId,
            operations,
            policy,
            allowNetwork,
          })),
      });
    }
    const bindings = engines.flatMap((engine) =>
      engine.operations
        .filter((op) => op.available)
        .map((op) => ({
          name: "engine_" + sha(engine.engineId + ":" + op.id).slice(0, 40),
          engineId: engine.engineId,
          operation: op.id,
          digest: engine.digest,
          approvalRequired: engine.policy === "manual",
          description: op.description,
          parameters: op.input_schema,
        })),
    );
    return {
      protocol: PROTOCOL,
      entityId,
      engines,
      tools: bindings.map(({ name, description, parameters }) => ({
        type: "function",
        function: { name, description, parameters },
      })),
      bindings: bindings.map(
        ({ description, parameters, ...binding }) => binding,
      ),
    };
  }

  /** Routes a model-provided name/arguments pair through the current host Entity scope. Approval comes from the host options, never from model arguments or package descriptions. */
  async executeTool(entityId, call, { approved = false, signal } = {}) {
    if (
      !call ||
      typeof call.name !== "string" ||
      Object.keys(call).some((key) => !["name", "arguments"].includes(key))
    )
      fail("ENGINE_TOOL_INVALID", "Invalid model tool call.");
    const catalog = await this.catalog(entityId),
      binding = catalog.bindings.find((item) => item.name === call.name);
    if (!binding)
      fail(
        "ENGINE_TOOL_UNAVAILABLE",
        "Tool is not linked and available in this Entity scope.",
      );
    if (
      typeof call.arguments === "string" &&
      Buffer.byteLength(call.arguments) > 65536
    )
      fail("ENGINE_INPUT_TOO_LARGE", "Tool arguments exceed 64 KiB.");
    const input =
      typeof call.arguments === "string"
        ? parseJson(Buffer.from(call.arguments))
        : call.arguments;
    return this.execute({
      entityId,
      engineId: binding.engineId,
      operation: binding.operation,
      input,
      approved,
      signal,
    });
  }

  /** Reads an exact historical result under literal-true host admission and Entity ownership/hash checks. Does not load an Engine, create an execution or call a provider. */
  async readResult(entityId, executionId) {
    entityIdSchema.parse(entityId);
    z.string().uuid().parse(executionId);
    const parsed = completedReceipt.safeParse(
      parseJson(
        await readBytes(
          await this.location("registry", "executions", executionId + ".json"),
          16384,
        ),
      ),
    );
    if (
      !parsed.success ||
      parsed.data.executionId !== executionId ||
      parsed.data.entityId !== entityId
    )
      fail(
        "ENGINE_RESULT_UNAVAILABLE",
        "Historical result does not belong to this Entity or did not complete.",
      );
    const receipt = parsed.data;
    const authorization = {
      entityId,
      engineId: receipt.engineId,
      operation: receipt.operation,
      digest: receipt.packageDigest,
      inputHash: receipt.inputHash,
      history: true,
    };
    if ((await this.authorize(authorization)) !== true)
      fail("ENGINE_NOT_AUTHORIZED", "Host rejected historical result access.");
    await require("../../domains/entity/worldview-store.cjs").readWorldViewChip(
      this.root,
      entityId,
    );
    const data = parseJson(
      await readBytes(
        await this.location("registry", "results", executionId + ".json"),
      ),
    );
    if (sha(JSON.stringify(data)) !== receipt.resultHash)
      fail("ENGINE_INTEGRITY_FAILED", "Historical result changed.");
    if ((await this.authorize(authorization)) !== true)
      fail("ENGINE_NOT_AUTHORIZED", "Host rejected historical result access.");
    await require("../../domains/entity/worldview-store.cjs").readWorldViewChip(
      this.root,
      entityId,
    );
    return { receipt, data, origin: "historical" };
  }

  /** Executes one linked operation after literal-true live host authorization. Persists receipts, validates output, and withholds a result if trust/link/Entity authorization changes mid-flight. */
  async execute({
    entityId,
    engineId,
    operation,
    input,
    approved = false,
    signal,
  }) {
    entityIdSchema.parse(entityId);
    id.parse(engineId);
    id.parse(operation);
    const state = await this.read(),
      checked = await this.installed(engineId, state);
    const link = state.links.find(
      (item) =>
        item.entityId === entityId &&
        item.engineId === engineId &&
        item.digest === checked.digest,
    );
    const op = checked.manifest.operations.find(
      (item) => item.id === operation,
    );
    if (checked.record.disabled)
      fail("ENGINE_DISABLED", "Engine package is disabled.");
    if (!checked.record.trusted || !op || !link?.operations.includes(operation))
      fail(
        "ENGINE_NOT_AUTHORIZED",
        "Engine is not trusted and linked for this Entity operation.",
      );
    if (op.network === "outbound" && !link.allowNetwork)
      fail(
        "ENGINE_NETWORK_DENIED",
        "Outbound network capability is not approved for this link.",
      );
    if (link.policy === "manual" && approved !== true)
      fail(
        "ENGINE_APPROVAL_REQUIRED",
        "This Engine link requires exact human approval for each request.",
      );
    validateData(op.input_schema, input);
    const serializedInput = JSON.stringify(input);
    if (Buffer.byteLength(serializedInput) > LIMITS.inputBytes)
      fail("ENGINE_INPUT_TOO_LARGE", "Engine input exceeds 64 KiB.");
    // Snapshot caller-owned objects before asynchronous approval so the receipt and worker use the exact same arguments.
    input = parseJson(Buffer.from(serializedInput));
    validateData(op.input_schema, input);
    const inputHash = sha(serializedInput);
    const authorization = {
      entityId,
      engineId,
      operation,
      digest: checked.digest,
      inputHash,
      network: op.network,
      approved,
      signal,
    };
    if ((await this.authorize(authorization)) !== true)
      fail("ENGINE_NOT_AUTHORIZED", "Host rejected this Entity operation.");
    await require("../../domains/entity/worldview-store.cjs").readWorldViewChip(
      this.root,
      entityId,
    );
    const executionId = randomUUID(),
      started = Date.now();
    const receipt = {
      schemaVersion: 1,
      protocol: PROTOCOL,
      executionId,
      engineId,
      engineVersion: checked.manifest.engine_version,
      packageDigest: checked.digest,
      operation,
      entityId,
      status: "running",
      startedAt: new Date(started).toISOString(),
      finishedAt: null,
      errorCode: null,
      resultHash: null,
      origin: "local_execution",
      inputHash,
      authorization: {
        hostAdmitted: true,
        policy: link.policy,
        approved: approved === true,
        network: op.network,
      },
    };
    const receiptPath = await this.location(
      "registry",
      "executions",
      executionId + ".json",
    );
    await writeJson(receiptPath, receipt);
    try {
      const data = await runPackage(
        checked.root,
        { executionId, entityId, operation, input, digest: checked.digest },
        op,
        signal,
      );
      validateData(op.output_schema, data);
      signal?.throwIfAborted();
      if ((await this.authorize(authorization)) !== true)
        fail(
          "ENGINE_AUTHORIZATION_CHANGED",
          "Engine authorization changed during execution.",
        );
      // Linearize grant revocation and successful receipt publication across CLI and desktop writers.
      return await this.mutate(
        async (current) => {
          await this.installed(engineId, current);
          if (
            JSON.stringify(
              current.links.find(
                (item) =>
                  item.entityId === entityId && item.engineId === engineId,
              ),
            ) !== JSON.stringify(link) ||
            current.packages[engineId].versions[checked.manifest.engine_version]
              ?.disabled ||
            current.packages[engineId].active !==
              checked.manifest.engine_version ||
            !current.packages[engineId].versions[
              checked.manifest.engine_version
            ].trusted
          )
            fail(
              "ENGINE_AUTHORIZATION_CHANGED",
              "Engine authorization changed during execution.",
            );
          await require("../../domains/entity/worldview-store.cjs").readWorldViewChip(
            this.root,
            entityId,
          );
          // Preserve the protocol byte bound on disk; indentation can expand valid nested JSON beyond the historical reader's limit.
          await writeTextAtomic(
            await this.location("registry", "results", executionId + ".json"),
            JSON.stringify(data) + "\n",
            null,
          );
          signal?.throwIfAborted();
          receipt.resultHash = sha(JSON.stringify(data));
          receipt.status = "succeeded";
          receipt.finishedAt = new Date().toISOString();
          receipt.durationMs = Date.now() - started;
          await writeJson(receiptPath, receipt);
          return { receipt, data };
        },
        { persist: false },
      );
    } catch (error) {
      receipt.status =
        signal?.aborted || error.code === "ENGINE_CANCELLED"
          ? "cancelled"
          : "failed";
      receipt.errorCode = /^ENGINE_[A-Z_]+$/.test(error.code ?? "")
        ? error.code
        : "ENGINE_EXECUTION_FAILED";
      throw Object.assign(
        Error("Engine execution did not complete. Inspect its receipt."),
        { code: receipt.errorCode, executionId },
      );
    } finally {
      if (receipt.status !== "succeeded") {
        receipt.finishedAt = new Date().toISOString();
        receipt.durationMs = Date.now() - started;
        await writeJson(receiptPath, receipt);
      }
    }
  }
}
module.exports = { EnginePackageRegistry };
