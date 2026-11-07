const path = require("node:path");
const fs = require("node:fs/promises");
const { randomUUID } = require("node:crypto");
const { z, parse } = require("./schemas.cjs");
const { readJson, writeJson } = require("./json-store.cjs");
const { ModelRuntimeError } = require("./model-errors.cjs");
const adapter = require("./chronoz-adapter.cjs");
const ENGINE_DEFINITIONS = Object.freeze({
  chronoz: {
    id: "chronoz",
    name: "CHronoZ",
    version: "1.0.0",
    operations: ["get_report"],
    nativeToolCalling: true,
  },
});
const registrationSchema = z
  .object({
    schemaVersion: z.literal(1),
    root: z.string().max(4096),
    fingerprint: z.string().regex(/^[a-f0-9]{64}$/),
    version: z.literal("1.0.0"),
    probe: z
      .object({
        status: z.string().max(32),
        diagnostic: z.string().max(400),
        at: z.string().datetime(),
      })
      .strict(),
  })
  .strict();
const bindingInput = z.object({
  agentId: z.string().regex(/^[a-z0-9][a-z0-9_-]{0,63}$/),
  instanceId: z.string().uuid(),
});
const executeSchema = bindingInput
  .extend({
    engineId: z.literal("chronoz"),
    operation: z.literal("get_report"),
    arguments: adapter.argumentsSchema,
  })
  .strict();
function denied(message) {
  throw new ModelRuntimeError("MODEL_INVALID_REQUEST", message);
}
class EngineRegistry {
  constructor(
    directory,
    {
      agents,
      chooseFolder,
      openPath,
      adapterImpl = adapter,
      processOptions = {},
    } = {},
  ) {
    this.directory = directory;
    this.file = path.join(directory, "engines.json");
    this.agents = agents;
    this.chooseFolder = chooseFolder;
    this.openPath = openPath;
    this.adapter = adapterImpl;
    this.processOptions = processOptions;
    this.running = null;
  }
  async registration() {
    return readJson(this.file, (v) => parse(registrationSchema, v), null);
  }
  async checked(registration) {
    if (!registration)
      denied(
        "CHronoZ is not configured. Choose its portable bundle folder first.",
      );
    const current = await this.adapter.inspectBundle(registration.root);
    if (
      current.fingerprint !== registration.fingerprint ||
      current.root !== registration.root
    )
      denied(
        "CHronoZ bundle changed since approval. Re-extract or explicitly choose the folder again.",
      );
    return current;
  }
  async state() {
    const registration = await this.registration();
    const base = {
      ...ENGINE_DEFINITIONS.chronoz,
      bundlePath: registration?.root ?? null,
      probe: registration?.probe ?? null,
    };
    if (this.running) return { ...base, status: "Running" };
    if (!registration) return { ...base, status: "Not configured" };
    try {
      await this.checked(registration);
      return { ...base, status: registration.probe.status };
    } catch {
      return {
        ...base,
        status: "Unavailable",
        probe: {
          status: "Unavailable",
          diagnostic:
            "Bundle is missing or changed. Select a fresh extracted bundle.",
          at: new Date().toISOString(),
        },
      };
    }
  }
  async exclusive(owner, operation, parentSignal) {
    if (this.running)
      throw new ModelRuntimeError(
        "MODEL_BUSY",
        "CHronoZ is already running. Wait or cancel the active request.",
      );
    const controller = new AbortController();
    const cancel = () => controller.abort(parentSignal.reason);
    parentSignal?.addEventListener("abort", cancel, { once: true });
    if (parentSignal?.aborted) cancel();
    this.running = { owner, controller };
    try {
      return await operation(controller.signal);
    } finally {
      parentSignal?.removeEventListener("abort", cancel);
      this.running = null;
    }
  }
  cancel(owner) {
    if (this.running?.owner === owner) this.running.controller.abort();
  }
  shutdown() {
    this.running?.controller.abort();
  }
  async configure(owner) {
    return this.exclusive(owner, async (signal) => {
      const folder = await this.chooseFolder();
      if (!folder) return null;
      const bundle = await this.adapter.inspectBundle(folder);
      const payload = await this.adapter.runTrigger(
        bundle,
        "status",
        {},
        {
          ...this.processOptions,
          signal,
          timeoutMs: this.processOptions.probeTimeoutMs ?? 30000,
        },
      );
      await this.adapter.verifyReport(bundle, payload);
      const current = await this.adapter.inspectBundle(folder);
      if (bundle.fingerprint !== current.fingerprint)
        denied(
          "Bundle changed during the probe. Select a fresh extracted copy.",
        );
      if (signal.aborted)
        throw new ModelRuntimeError(
          "MODEL_CANCELLED",
          "Engine configuration canceled.",
        );
      const probe = this.probeResult(payload);
      await writeJson(this.file, {
        schemaVersion: 1,
        root: bundle.root,
        fingerprint: bundle.fingerprint,
        version: bundle.version,
        probe,
      });
      return {
        ...ENGINE_DEFINITIONS.chronoz,
        bundlePath: bundle.root,
        status: probe.status,
        probe,
      };
    });
  }
  probeResult(payload) {
    const status =
      payload.status === "PARTIAL"
        ? "Partial"
        : payload.status === "BLOCKED"
          ? "Blocked"
          : payload.status === "FAILED"
            ? "Failed"
            : payload.primary_output
              ? "Ready"
              : "Detected";
    // Never expose raw engine diagnostics/stderr; they may contain secrets.
    return {
      status,
      diagnostic: payload.primary_output
        ? "Existing PDF verified. Research status: " + payload.status
        : "Runtime responded: " +
          payload.status +
          ". get_report never acquires or publishes data.",
      at: new Date().toISOString(),
    };
  }
  async probe(owner) {
    return this.exclusive(owner, async (signal) => {
      const registration = await this.registration(),
        bundle = await this.checked(registration);
      const payload = await this.adapter.runTrigger(
        bundle,
        "status",
        {},
        {
          ...this.processOptions,
          signal,
          timeoutMs: this.processOptions.probeTimeoutMs ?? 30000,
        },
      );
      await this.adapter.verifyReport(bundle, payload);
      const probe = this.probeResult(payload);
      await writeJson(this.file, { ...registration, probe });
      return {
        ...ENGINE_DEFINITIONS.chronoz,
        bundlePath: bundle.root,
        status: probe.status,
        probe,
      };
    });
  }
  async binding(input) {
    const profile = await this.agents.get(input.agentId);
    const graph = profile.construction?.active;
    const node = graph?.nodes.find(
      (n) =>
        n.kind === "Engine" &&
        n.config.engineId === "chronoz" &&
        n.config.instanceId === input.instanceId,
    );
    if (
      !node ||
      !graph.edges.some(
        (e) =>
          e.from === node.id &&
          graph.nodes.some((n) => n.id === e.to && n.kind === "LLM"),
      )
    )
      denied(
        "This engine is not connected in this agent's applied graph. Connect Engine to LLM and Save & apply first.",
      );
    return {
      agentId: profile.id,
      graphRevision: profile.construction.activeRevision,
      graphHash: adapter.sha(JSON.stringify(graph)),
      instanceId: input.instanceId,
    };
  }
  async execute(owner, raw, options = {}) {
    const input = parse(executeSchema, raw);
    return this.exclusive(
      owner,
      async (signal) => {
        const provenance = await this.binding(input);
        const run = {
          schemaVersion: 1,
          id: randomUUID(),
          ...provenance,
          engineId: input.engineId,
          engineVersion: "1.0.0",
          operation: input.operation,
          arguments: input.arguments,
          ...(options.conversationId
            ? {
                conversationId: options.conversationId,
                chatRunId: options.chatRunId,
              }
            : {}),
          startedAt: new Date().toISOString(),
        };
        const started = Date.now();
        try {
          const registration = await this.registration(),
            bundle = await this.checked(registration);
          const payload = await this.adapter.runTrigger(
            bundle,
            input.operation,
            input.arguments,
            { ...this.processOptions, signal },
          );
          const report = await this.adapter.verifyReport(
            bundle,
            payload,
            input.arguments.month,
          );
          if (signal.aborted)
            throw new ModelRuntimeError(
              "MODEL_CANCELLED",
              "Engine request canceled.",
            );
          let attachment = null;
          if (report) {
            // Copy ONLY verified bytes to an app-managed PDF. No host path from the
            // model/renderer is accepted by the opening API, and no text enters AI context.
            const file = path.join(
              this.directory,
              "engine-reports",
              run.id + ".pdf",
            );
            await require("./json-store.cjs").safeDirectory(path.dirname(file));
            await fs.writeFile(file, report.bytes, { flag: "wx" });
            attachment = {
              runId: run.id,
              month: report.month,
              researchStatus: payload.status,
              sha256: report.sha256,
              sourcePath: report.path,
            };
          }
          const result = {
            status: payload.status,
            attachment,
            diagnostic: report
              ? "PDF verified. Interpretation is not enabled; review the report or explicitly add it to reviewed research context."
              : "No published PDF is available (" +
                payload.status +
                "). No data was acquired.",
          };
          await this.record({
            ...run,
            ...result,
            outcome: payload.status,
            durationMs: Date.now() - started,
            finishedAt: new Date().toISOString(),
          });
          return result;
        } catch (error) {
          const code =
            error instanceof ModelRuntimeError
              ? error.code
              : "MODEL_INTERNAL_ERROR";
          await this.record({
            ...run,
            outcome: code,
            attachment: null,
            durationMs: Date.now() - started,
            finishedAt: new Date().toISOString(),
          });
          if (error instanceof ModelRuntimeError) throw error;
          throw new ModelRuntimeError(
            code,
            "CHronoZ bundle or report is unavailable. Probe or reconfigure the bundle and retry.",
          );
        }
      },
      options.signal,
    );
  }
  record(run) {
    return writeJson(
      path.join(this.directory, "engine-runs", run.id + ".json"),
      run,
    );
  }
  async open(raw) {
    const input = parse(
      bindingInput.extend({ runId: z.string().uuid() }).strict(),
      raw,
    );
    await this.binding(input);
    const run = await readJson(
      path.join(this.directory, "engine-runs", input.runId + ".json"),
      (value) => value,
    );
    if (
      run.agentId !== input.agentId ||
      run.instanceId !== input.instanceId ||
      !run.attachment ||
      run.attachment.runId !== input.runId
    )
      denied("This report does not belong to the chosen agent/engine.");
    const file = path.join(
      this.directory,
      "engine-reports",
      input.runId + ".pdf",
    );
    const bytes = await adapter.boundedRead(file, 32 * 1024 * 1024);
    if (
      adapter.sha(bytes) !== run.attachment.sha256 ||
      bytes.subarray(0, 5).toString() !== "%PDF-"
    )
      denied("Managed PDF changed. Retrieve the report again.");
    const error = await this.openPath(file);
    if (error)
      denied(
        "Windows could not open the PDF. Install or choose a PDF reader and retry.",
      );
    return { opened: true };
  }
}
module.exports = { EngineRegistry, ENGINE_DEFINITIONS };
