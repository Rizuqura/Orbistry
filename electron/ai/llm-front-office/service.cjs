/** Purpose: isolated experiment lifecycle from IPC intake to durable conversation result.
 * Inputs: owner-scoped requests/config; outputs: start/delta/usage/finish/error/cancelled events and records.
 * Dependencies: modular front office and existing ChatService/stores. Failure: safe public errors, recovery retains pending references.
 * Knobs: validated defaults/config. Owner: backend. No context, agent store, tools, RAG or hidden system prompts. */
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const { readJson, writeJson } = require("../json-store.cjs");
const { createModelRun, readModelRun } = require("../run-store.cjs");
const { applyRun, validId } = require("../conversation-store.cjs");
const { ModelRuntimeError } = require("../model-errors.cjs");
const {
  validateConfig,
  defaultConfig,
  provider,
  parse,
} = require("./experiment-contracts.cjs");
const {
  validateExperimentalConversation,
} = require("./conversation-manager.cjs");
const {
  normalizeRequest,
  conversationMessages,
  buildRequirements,
} = require("./request-intake.cjs");
const { CapabilityRegistry } = require("./model-registry.cjs");
const { routeModels } = require("./model-router.cjs");
const { reliabilityProfile } = require("./long-context-reliability.cjs");
const { ReliabilityController } = require("./reliability.cjs");
const { createLLMClient, gatewayHealth } = require("./provider-gateway.cjs");
const { createBaselineObserver } = require("./observability.cjs");
const { validateTrace } = require("./contracts.cjs");
const { processResponse } = require("./response-processor.cjs");
const { publicError } = require("./errors.cjs");
const { retainedTraces, recordTrace } = require("./telemetry-store.cjs");
const { exportTraces } = require("./export.cjs");

/** Reuse normal admission/cancellation and stores, with explicit mode gates at every entry. */
class FrontOfficeService {
  constructor({
    directory,
    service,
    registry,
    credentials,
    clientFactory = createLLMClient,
  }) {
    this.file = path.join(directory, "front-office-settings.json");
    this.service = service;
    this.registry = registry;
    this.credentials = credentials;
    this.catalog = new CapabilityRegistry(directory, registry, credentials);
    this.reliability = new ReliabilityController();
    this.clientFactory = clientFactory;
  }
  /** Read non-secret settings; reject corrupt content without echoing it. */
  async config() {
    try {
      return await readJson(this.file, validateConfig, defaultConfig());
    } catch {
      throw new ModelRuntimeError(
        "MODEL_STORAGE_INVALID",
        "Repair front-office-settings.json; invalid settings were not overwritten.",
      );
    }
  }
  /** Save a complete validated configuration; use the existing mutation admission queue. */
  saveConfig(value) {
    const config = validateConfig(value);
    return this.service.exclusive(async () => {
      await writeJson(this.file, config);
      return config;
    });
  }
  /** Inspect cached catalog/evidence/config without fetching provider APIs. */
  async state(task = "general") {
    parse(
      require("./experiment-contracts.cjs").z.enum([
        "general",
        "finance",
        "format",
        "retrieval",
        "conversation",
      ]),
      task,
    );
    const config = await this.config();
    const catalog = await this.catalog.state();
    return {
      config,
      ...catalog,
      profiles: catalog.profiles.map((p) => ({
        ...p,
        evidence: reliabilityProfile(
          p,
          catalog.evidence,
          task,
          config.routing.benchmarkMaxAgeDays,
        ),
        health: this.reliability.state(p.deploymentId),
        stale:
          Date.now() - Date.parse(p.source.checkedAt) >
          config.routing.benchmarkMaxAgeDays * 86400000,
      })),
      gatewayCredentialConfigured: (await this.credentials.status("litellm"))
        .configured,
    };
  }
  /** Refresh exactly the requested provider's metadata; no inference. */
  refresh(id) {
    parse(provider, id);
    return this.service.exclusive(() => this.catalog.refresh(id));
  }
  /** Create a new durable experiment with an optional manual session pin. */
  create(vault) {
    return this.service.exclusive(async () => {
      const config = await this.config();
      if (!config.enabled)
        throw new ModelRuntimeError(
          "MODEL_INVALID_REQUEST",
          "Enable experimental chat first.",
        );
      return (await this.service.store(vault)).store.createExperimental(
        config.routing.mode === "manual"
          ? config.routing.selectedDeploymentId
          : null,
      );
    });
  }
  /** List only explicit experimental conversations from the shared persistence. */
  async list(vault) {
    return (await (await this.service.store(vault)).store.list()).filter(
      (c) => c.schemaVersion === 5,
    );
  }
  /** Read an experiment and reject normal agent conversation IDs. */
  async read(vault, id) {
    validId(id);
    return validateExperimentalConversation(
      await (await this.service.store(vault)).store.read(id),
    );
  }
  /** Delete one explicit experiment; other chat modes and immutable runs are preserved. */
  remove(vault, id) {
    return this.service.exclusive(async () => {
      await this.read(vault, id);
      await (await this.service.store(vault)).store.remove(id);
    });
  }
  /** Export only retained content-free metrics. */
  async export(vault, format) {
    const config = await this.config();
    return exportTraces(
      await retainedTraces(
        (await this.service.store(vault)).root,
        config.telemetry.retentionDays,
      ),
      format,
    );
  }
  /** Reachability is not proof of the server version or provider quota. */
  async health() {
    return gatewayHealth(await this.config(), this.credentials);
  }

  /** Run one idempotent, owner-cancellable experiment; full history is preflighted and never truncated. */
  async run(vault, ownerId, raw, emit = () => {}, requestLogger) {
    const request = normalizeRequest(raw);
    requestLogger?.step("REQUEST_VALIDATED", {
      messageCharacters: request.userMessage.length,
    });
    this.service.assertIdle();
    requestLogger?.step("ADMISSION_ACCEPTED");
    const runId = randomUUID();
    requestLogger?.update({ runId });
    const controller = new AbortController();
    let done;
    const active = {
      ownerId,
      requestId: request.requestId,
      controller,
      finished: new Promise((resolve) => {
        done = resolve;
      }),
    };
    this.service.active = active;
    const observer = createBaselineObserver({
      mode: "experiment",
      requestId: request.requestId,
      runId,
      conversationId: request.conversationId,
      providerId: "unknown",
      modelId: "unknown",
      requestLogger,
    });
    observer.stage("REQUEST_RECEIVED");
    observer.stage("REQUEST_VALIDATED");
    const startedAt = new Date().toISOString();
    const started = performance.now();
    const event = (data) =>
      emit({
        ...data,
        requestId: request.requestId,
        conversationId: request.conversationId,
        runId,
      });
    let root,
      store,
      config,
      conversation,
      plan,
      requirements,
      attempts = [],
      validation = null,
      response = null,
      pending = false,
      published = false,
      deadline;
    let rejections = [];
    let debugMessages;
    const trace = () => {
      const value = observer.snapshot();
      const primary = plan?.primary;
      if (primary) {
        value.providerId = primary.model.providerId;
        value.requestedModelId = primary.model.modelId;
        value.deploymentAlias = `${primary.model.providerId}:default`;
        value.selectionReason =
          config.routing.mode === "auto"
            ? "capability-router"
            : "manual-experiment";
        value.routing = {
          selectedDeploymentId: primary.model.deploymentId,
          eligibleDeploymentIds: plan.eligibleDeploymentIds,
          selectionReasons: plan.selectionReasons,
          warnings: plan.warnings,
          fallbackUsed: attempts.some((a) => a.fallback),
        };
        // Price only the reported counts of all calls with fresh price metadata.
        const cost = value.calls.map((call, i) => {
          const profile = [plan.primary, ...plan.fallback].find(
            (c) => c.model.deploymentId === attempts[i]?.deploymentId,
          )?.model;
          const priceSource = profile?.pricingSource ?? profile?.source;
          call.costSource =
            priceSource &&
            Date.now() - Date.parse(priceSource.checkedAt) <=
              config.routing.benchmarkMaxAgeDays * 86400000
              ? priceSource
              : null;
          call.estimatedCostUsd =
            profile &&
            call.costSource &&
            call.reportedPromptTokens !== null &&
            call.reportedCompletionTokens !== null &&
            profile.inputUsdPerMillion !== null &&
            profile.outputUsdPerMillion !== null
              ? (call.reportedPromptTokens * profile.inputUsdPerMillion +
                  call.reportedCompletionTokens * profile.outputUsdPerMillion) /
                1000000
              : null;
          return call.estimatedCostUsd;
        });
        value.estimatedCostUsd =
          cost.length && cost.every((c) => c !== null)
            ? cost.reduce((a, b) => a + b, 0)
            : null;
        value.costSources = value.calls
          .map((c) => c.costSource)
          .filter((s) => s !== null);
        value.costSource =
          value.estimatedCostUsd === null ||
          value.costSources.some(
            (s) => JSON.stringify(s) !== JSON.stringify(value.costSources[0]),
          )
            ? null
            : value.costSources[0];
      }
      value.estimatedInputTokens = requirements?.expectedInputTokens ?? null;
      value.historyMessages = requirements?.historyMessages ?? 0;
      value.formatPass = validation?.valid ?? null;
      if (rejections.length) value.rejections = rejections;
      return validateTrace(value);
    };
    const record = (status, error = null) => ({
      schemaVersion: 3,
      mode: "front-office",
      runId,
      conversationId: request.conversationId,
      requestId: request.requestId,
      status,
      startedAt,
      completedAt: new Date().toISOString(),
      durationMs: Math.max(0, Math.round(performance.now() - started)),
      provider:
        response?.provider ?? plan?.primary.model.providerId ?? "unknown",
      model: response?.model ?? plan?.primary.model.modelId ?? "unknown",
      userMessage: request.userMessage,
      response: status === "succeeded" ? response.content : null,
      finishReason: status === "succeeded" ? response.finishReason : null,
      usage: response?.usage ?? null,
      error,
      settings: config,
      diagnostics: {
        frontOffice: trace(),
        validation,
        attempts,
        transport: request.transport,
        reasoningTokens: response?.reasoningTokens ?? null,
        ...(config.telemetry.rawPromptLogging ||
        config.telemetry.rawResponseLogging
          ? {
              debug: {
                ...(config.telemetry.rawPromptLogging && debugMessages
                  ? { messages: debugMessages }
                  : {}),
                ...(config.telemetry.rawResponseLogging
                  ? { response: response?.content ?? null }
                  : {}),
              },
            }
          : {}),
      },
    });
    try {
      config = await this.config();
      requestLogger?.step("FRONT_OFFICE_PATH", {
        routingMode: config.routing.mode,
        routerActive: true,
        transport: request.transport,
      });
      if (!config.enabled)
        throw new ModelRuntimeError(
          "MODEL_INVALID_REQUEST",
          "Enable experimental chat first.",
        );
      deadline = setTimeout(
        () =>
          controller.abort(
            new ModelRuntimeError(
              "MODEL_TIMEOUT",
              "The total experiment deadline was reached.",
            ),
          ),
        Math.max(
          1,
          config.reliability.deadlineMs - (performance.now() - started),
        ),
      );
      ({ root, store } = await this.service.store(vault));
      conversation = validateExperimentalConversation(
        await store.read(request.conversationId),
      );
      requestLogger?.step("CONVERSATION_LOADED", {
        historyMessages: conversation.messages.length,
      });
      // Global auto-mode changes apply to new unpinned sessions; existing
      // manual conversations retain their explicit deployment choice.
      if (conversation.selection) {
        config.routing.mode = "manual";
        config.routing.selectedDeploymentId = conversation.selection;
      }
      const previous = conversation.attempts.find(
        (a) => a.requestId === request.requestId,
      );
      if (previous) {
        requestLogger?.step("REQUEST_REPLAYED");
        if (
          conversation.messages.find((m) => m.id === previous.userMessageId)
            ?.content !== request.userMessage
        )
          throw new ModelRuntimeError(
            "MODEL_INVALID_REQUEST",
            "Request ID cannot be reused with a different message.",
          );
        if (previous.status === "pending")
          throw new ModelRuntimeError(
            "MODEL_BUSY",
            "This experiment is already pending.",
          );
        return {
          conversation,
          run:
            previous.status === "interrupted"
              ? null
              : await readModelRun(root, previous.runId),
        };
      }
      const messages = conversationMessages(conversation, request.userMessage);
      if (config.telemetry.rawPromptLogging) debugMessages = messages;
      controller.signal.throwIfAborted();
      requirements = buildRequirements(
        request,
        messages,
        config,
        conversation.selection ?? config.routing.selectedDeploymentId,
      );
      requestLogger?.step("BUDGET_CHECKING", {
        inputTokensEstimated: requirements.expectedInputTokens,
        outputTokenCap: config.generation.maxOutputTokens,
        contextWindow: config.generation.contextWindow,
        historyMessages: requirements.historyMessages,
      });
      if (config.routing.mode === "manual" && !requirements.userModelOverride)
        throw new ModelRuntimeError(
          "MODEL_INVALID_REQUEST",
          "Select an explicit deployment before starting manual experiments.",
        );
      let userMessageId = randomUUID();
      if (request.retryOf) {
        const failed = conversation.attempts.at(-1);
        if (
          !failed ||
          failed.requestId !== request.retryOf ||
          !["failed", "cancelled", "interrupted"].includes(failed.status) ||
          conversation.messages.find((m) => m.id === failed.userMessageId)
            ?.content !== request.userMessage
        )
          throw new ModelRuntimeError(
            "MODEL_INVALID_REQUEST",
            "Only the latest failed experiment turn can be retried without another user message.",
          );
        userMessageId = failed.userMessageId;
      }
      conversation = await store.update(conversation.id, (c) => {
        if (!request.retryOf)
          c.messages.push({
            id: userMessageId,
            conversationId: c.id,
            role: "user",
            content: request.userMessage,
            createdAt: new Date().toISOString(),
          });
        c.attempts.push({
          requestId: request.requestId,
          runId,
          userMessageId,
          status: "pending",
          error: null,
        });
        if (!c.selection && config.routing.mode === "manual")
          c.selection = requirements.userModelOverride;
      });
      pending = true;
      event({ type: "start" });
      const catalog = await this.catalog.state();
      observer.stage("MODEL_CANDIDATES_EVALUATED", "ok", {
        candidateCount: catalog.profiles.length,
      });
      controller.signal.throwIfAborted();
      plan = routeModels(
        requirements,
        catalog.profiles,
        catalog.evidence,
        config,
        (id) => this.reliability.healthy(id),
      );
      observer.stage("MODEL_SELECTED", "ok", {
        provider: plan.primary.model.providerId,
        model: plan.primary.model.modelId,
      });
      requestLogger?.update({
        provider: plan.primary.model.providerId,
        model: plan.primary.model.modelId,
      });
      requestLogger?.step("BUDGET_CHECKED", {
        inputTokensEstimated: plan.primary.budget.estimatedInputTokens,
        outputTokenCap: plan.primary.budget.reservedOutputTokens,
        headroomTokens: plan.primary.budget.headroomTokens,
      });
      requestLogger?.step("PROMPT_READY", {
        historyMessages: requirements.historyMessages,
      });
      event({
        type: "routing",
        routing: {
          selectedDeploymentId: plan.primary.model.deploymentId,
          selectionReasons: plan.selectionReasons,
          warnings: plan.warnings,
          estimatedInputTokens: requirements.expectedInputTokens,
          historyMessages: requirements.historyMessages,
          budget: plan.primary.budget,
        },
      });
      const execution = await this.reliability.execute(
        plan,
        config,
        async (candidate, signal, markPartial) => {
          const client = this.clientFactory({
            model: candidate.model,
            transport: request.transport,
            config,
            registry: this.registry,
            credentials: this.credentials,
          });
          let length = 0;
          return observer.complete(client, {
            id: request.requestId,
            model: candidate.model.modelId,
            onStage: (name, status, metadata) =>
              observer.stage(name, status, {
                ...metadata,
                provider: candidate.model.providerId,
                model: candidate.model.modelId,
              }),
            messages,
            signal,
            settings: {
              streaming: config.generation.streaming,
              outputLimit: config.generation.maxOutputTokens,
            },
            onContent: (content) => {
              if (signal.aborted) return;
              const delta = content.slice(length);
              length = content.length;
              if (delta) {
                markPartial();
                event({ type: "delta", delta });
              }
            },
          });
        },
        {
          signal: controller.signal,
          onAttempt: (attempt) => {
            const deployment = attempt.deploymentId.split(":");
            requestLogger?.update({
              provider: deployment.shift(),
              model: deployment.join(":"),
            });
            requestLogger?.step(
              attempt.fallback ? "FALLBACK_SELECTED" : "MODEL_SELECTED",
              { attempt: attempt.index, fallback: attempt.fallback },
            );
            attempts.push(attempt);
            event({ type: "attempt", attempt });
          },
        },
      );
      attempts = execution.attempts;
      response = execution.result;
      if (response.usage?.completionTokens > config.generation.maxOutputTokens)
        throw new ModelRuntimeError(
          "MODEL_INVALID_RESPONSE",
          "Provider-reported output exceeded the requested cap.",
        );
      try {
        validation = processResponse(response, config.generation);
      } catch (error) {
        observer.stage("OUTPUT_VALIDATED", "error", { errorCode: error?.code });
        throw error;
      }
      observer.stage("OUTPUT_VALIDATED", validation.valid ? "ok" : "error");
      // This durable metric ends before persistence/rendering (see timingBoundary).
      // Only the external DOM diagnostic can attest FRONTEND_RESPONSE_DELIVERED.
      observer.stage("REQUEST_COMPLETED");
      observer.finish("succeeded");
      const run = record("succeeded");
      requestLogger?.step("STORAGE_WRITING");
      await createModelRun(root, run);
      requestLogger?.step("RUN_SAVED");
      published = true;
      requestLogger?.step("CONVERSATION_SAVING");
      conversation = await store.update(conversation.id, (c) =>
        applyRun(
          c,
          c.attempts.find((a) => a.runId === runId),
          run,
        ),
      );
      requestLogger?.step("CONVERSATION_SAVED");
      try {
        await recordTrace(
          root,
          run.diagnostics.frontOffice,
          config.telemetry.retentionDays,
        );
      } catch {
        event({
          type: "warning",
          message:
            "Metrics retention storage failed; the immutable run still contains its trace.",
        });
      }
      event({
        type: "usage",
        usage: {
          promptTokens: run.diagnostics.frontOffice.reportedPromptTokens,
          completionTokens:
            run.diagnostics.frontOffice.reportedCompletionTokens,
          coverage: run.diagnostics.frontOffice.usageCoverage,
          estimatedCostUsd: run.diagnostics.frontOffice.estimatedCostUsd,
        },
      });
      requestLogger?.step("RENDERER_EVENT_DISPATCHING");
      const delivered = event({
        type: "finish",
        trace: run.diagnostics.frontOffice,
        validation,
      });
      requestLogger?.step(
        delivered === false ? "RENDERER_EVENT_SKIPPED" : "RENDERER_EVENT_SENT",
        {},
        delivered === false ? "skipped" : "ok",
      );
      return { conversation, run };
    } catch (error) {
      const original = controller.signal.aborted
        ? controller.signal.reason
        : error;
      if (
        original?.code === "MODEL_UNAVAILABLE" &&
        Array.isArray(original.details?.rejections)
      ) {
        const { z, deploymentId } = require("./experiment-contracts.cjs");
        const safe = z
          .array(
            z
              .object({ deploymentId, reasons: z.array(z.string().max(500)) })
              .strict(),
          )
          .safeParse(original.details.rejections);
        if (safe.success) {
          rejections = safe.data;
          event({
            type: "routing",
            routing: { rejections, eligibleDeploymentIds: [] },
          });
        }
      }
      attempts = original?.frontOfficeAttempts ?? attempts;
      const failure = publicError(original);
      requestLogger?.fail(original);
      for (const row of rejections.slice(0, 5)) {
        const categories = [
          "context",
          "output",
          "cost",
          "credential",
          "provider",
          "circuit",
          "parameter",
          "capability",
          "stale",
          "evidence",
        ].filter((category) =>
          row.reasons.some((reason) => reason.toLowerCase().includes(category)),
        );
        const [provider, ...model] = row.deploymentId.split(":");
        requestLogger?.step(
          "ROUTING_REJECTED",
          {
            provider,
            model: model.join(":"),
            reasonCategories: categories.length ? categories : ["other"],
            rejectedCount: rejections.length,
          },
          "error",
        );
      }
      observer.stage(
        observer.snapshot().stages.at(-1)?.stage ?? "REQUEST_RECEIVED",
        "error",
        { errorCode: failure.code },
      );
      observer.stage(
        "REQUEST_COMPLETED",
        failure.code === "MODEL_CANCELLED" ? "skipped" : "error",
        { errorCode: failure.code },
      );
      const status =
        failure.code === "MODEL_CANCELLED" ? "cancelled" : "failed";
      observer.finish(status, { code: failure.code });
      if (pending && !published) {
        const run = record(status, failure);
        await createModelRun(root, run);
        conversation = await store.update(request.conversationId, (c) =>
          applyRun(
            c,
            c.attempts.find((a) => a.runId === runId),
            run,
          ),
        );
        try {
          await recordTrace(
            root,
            run.diagnostics.frontOffice,
            config.telemetry.retentionDays,
          );
        } catch {
          /* The run remains the durable trace owner. */
        }
      }
      event({
        type: status === "cancelled" ? "cancelled" : "error",
        error: failure,
        trace: trace(),
      });
      throw new ModelRuntimeError(failure.code, failure.message);
    } finally {
      clearTimeout(deadline);
      if (this.service.active === active) this.service.active = null;
      done();
    }
  }
}
module.exports = { FrontOfficeService };
