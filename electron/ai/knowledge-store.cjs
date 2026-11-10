const fs = require("node:fs/promises");
const path = require("node:path");
const { createHash, randomUUID } = require("node:crypto");
const { setTimeout: delay } = require("node:timers/promises");
const { z, parse } = require("./schemas.cjs");
const { safeDirectory, rejectSymlink } = require("./json-store.cjs");
const { ModelRuntimeError } = require("./model-errors.cjs");
const hash = (text) => createHash("sha256").update(text).digest("hex");
const text = z.string().trim().min(1).max(4000);
const short = z.string().trim().min(1).max(240);
const id = z.string().regex(/^[a-f0-9]{64}$/);
const ids = z.array(id).max(32).default([]);
const observation = z
  .object({
    kind: z.enum(["evidence", "analytical", "process"]),
    claim: text,
    entity: short,
    topic: short,
    period: short,
    metricValue: short.optional(),
    sourceId: short.optional(),
    location: short.optional(),
    quote: text.optional(),
    supportingIds: ids,
    contradictingIds: ids,
    assumptions: z.array(text).max(16).default([]),
    questions: z.array(text).max(16).default([]),
    rationale: text.optional(),
    previousHypothesisIds: ids,
  })
  .strict();
const extractionSchema = z
  .object({
    objective: text,
    observations: z.array(observation).min(1).max(32),
  })
  .strict();
const approvalSchema = z
  .object({
    iteration: z.number().int().min(0).max(99999999),
    recordId: id,
    reviewer: short,
    rationale: text,
    supersedes: id.optional(),
  })
  .strict();
const querySchema = z
  .object({
    entity: short,
    topic: short,
    period: short,
    maxTokens: z.number().int().min(64).max(8000).default(1500),
  })
  .strict();
const normalize = (value) =>
  value.normalize("NFKC").toLowerCase().replace(/\s+/g, " ").trim();
const recordId = (record) =>
  hash(
    JSON.stringify(
      [
        record.kind,
        record.entity,
        record.topic,
        record.period,
        record.claim,
      ].map(normalize),
    ),
  );
const sameSubject = (a, b) =>
  ["entity", "topic", "period"].every(
    (key) => normalize(a[key]) === normalize(b[key]),
  );
const numberName = (number) => `iteration${String(number).padStart(4, "0")}.md`;
function invalid(message) {
  throw new ModelRuntimeError("MODEL_INVALID_REQUEST", message);
}
function markdown(value, title) {
  // JSON is the authoritative metadata; narrative is informational and never executed.
  return `# ${title}\n\nUntrusted research data. Review provenance and meaning before reuse.\n\n\`\`\`json\n${JSON.stringify(value, null, 2)}\n\`\`\`\n`;
}
async function readMarkdown(file) {
  await rejectSymlink(file);
  const stats = await fs.stat(file);
  if (stats.size > 2 * 1024 * 1024)
    invalid("Knowledge record exceeds the storage limit.");
  const content = await fs.readFile(file, "utf8");
  const match = content.match(/\n```json\n([\s\S]*)\n```\n$/);
  if (!match)
    invalid("Knowledge Markdown is malformed; it was not overwritten.");
  return JSON.parse(match[1]);
}
async function immutableWrite(file, value, title) {
  await safeDirectory(path.dirname(file));
  // Publish only a fully flushed file; hard-link publication cannot overwrite history.
  const temporary = `${file}.${randomUUID()}.tmp`;
  try {
    const handle = await fs.open(temporary, "wx", 0o600);
    try {
      await handle.writeFile(markdown(value, title));
      await handle.sync();
    } finally {
      await handle.close();
    }
    await fs.link(temporary, file);
  } finally {
    await fs.rm(temporary, { force: true });
  }
}
class KnowledgeStore {
  constructor(appData, vault) {
    this.appData = path.resolve(appData);
    this.vault = path.resolve(vault);
    const relative = path.relative(this.vault, this.appData);
    if (
      !relative ||
      (!relative.startsWith(".." + path.sep) &&
        relative !== ".." &&
        !path.isAbsolute(relative))
    )
      invalid("Knowledge outbox must be outside the research vault.");
    this.directory = path.join(
      this.appData,
      "research-outbox",
      hash(this.vault),
      "skill",
    );
    this.assertOutputOutside();
  }
  assertOutputOutside() {
    const relative = path.relative(this.vault, this.directory);
    if (
      !relative ||
      (!relative.startsWith(".." + path.sep) &&
        relative !== ".." &&
        !path.isAbsolute(relative))
    )
      invalid("Knowledge output must remain outside the Bank Vault.");
  }
  async checkBoundary() {
    // Resolve both roots to catch alternate spellings, junctions and symlink aliases.
    const vault = await fs.realpath(this.vault);
    await safeDirectory(this.appData);
    const appData = await fs.realpath(this.appData);
    const relative = path.relative(vault, appData);
    if (
      !relative ||
      (!relative.startsWith(".." + path.sep) &&
        relative !== ".." &&
        !path.isAbsolute(relative))
    )
      invalid("Outbox resolves inside the Bank Vault.");
    this.vault = vault;
    this.appData = appData;
    this.directory = path.join(
      appData,
      "research-outbox",
      hash(vault),
      "skill",
    );
    this.assertOutputOutside();
    await safeDirectory(this.directory);
  }
  async locked(operation) {
    await this.checkBoundary();
    const lock = path.join(this.directory, ".writer.lock");
    let handle;
    for (let attempt = 0; attempt < 50; attempt++) {
      try {
        handle = await fs.open(lock, "wx", 0o600);
        break;
      } catch (error) {
        if (error.code !== "EEXIST") throw error;
        await delay(20);
      }
    }
    if (!handle)
      invalid(
        "Knowledge writer is locked. Retry, or inspect a stale lock after stopping all writers.",
      );
    try {
      await handle.writeFile(
        JSON.stringify({ pid: process.pid, at: new Date().toISOString() }),
      );
      return await operation();
    } finally {
      await handle.close();
      await fs.unlink(lock);
    }
  }
  async entries(directory) {
    for (
      let current = directory;
      path.dirname(current) !== current;
      current = path.dirname(current)
    )
      await rejectSymlink(current);
    return fs.readdir(directory, { withFileTypes: true }).catch((error) => {
      if (error.code === "ENOENT") return [];
      throw error;
    });
  }
  async proposals() {
    const directory = path.join(this.directory, "iteration");
    return Promise.all(
      (await this.entries(directory))
        .filter((entry) => /^iteration\d{4,8}\.md$/.test(entry.name))
        .map(async (entry) => {
          if (!entry.isFile()) invalid("Unexpected symbolic knowledge record.");
          const value = await readMarkdown(path.join(directory, entry.name));
          if (
            value.schemaVersion !== 1 ||
            value.vault !== this.vault ||
            !Number.isInteger(value.iteration) ||
            numberName(value.iteration) !== entry.name ||
            !Array.isArray(value.records)
          )
            invalid("Invalid iteration record.");
          return value;
        }),
    );
  }
  async versions() {
    const versions = [];
    for (const kind of ["evidence", "analytical", "process"]) {
      const directory = path.join(this.directory, "knowledge", kind);
      for (const entry of await this.entries(directory)) {
        if (!/^[a-f0-9]{64}-v\d{4,8}\.md$/.test(entry.name)) continue;
        if (!entry.isFile()) invalid("Unexpected symbolic knowledge record.");
        const value = await readMarkdown(path.join(directory, entry.name));
        if (
          value.schemaVersion !== 1 ||
          value.vault !== this.vault ||
          value.record?.kind !== kind ||
          !Number.isInteger(value.version) ||
          value.version < 1 ||
          value.record.id !== recordId(value.record) ||
          entry.name !==
            `${value.record.id}-v${String(value.version).padStart(4, "0")}.md` ||
          !value.approval?.reviewer ||
          !value.approval?.rationale ||
          ![
            "operator-verified-quote",
            "operator-reviewed-interpretation",
          ].includes(value.verification) ||
          !Array.isArray(value.sources) ||
          (kind !== "process" && !value.sources.length) ||
          (kind === "evidence" &&
            (!value.record.provenance?.quote ||
              !value.record.provenance?.location ||
              !value.sources.some(
                (source) =>
                  source.sourceId === value.record.provenance.sourceId &&
                  source.contentHash === value.record.provenance.contentHash,
              ))) ||
          !["reusable", "superseded"].includes(value.lifecycle)
        )
          invalid("Invalid committed knowledge metadata.");
        versions.push(value);
      }
    }
    return versions;
  }
  async latest() {
    const latest = new Map();
    for (const value of await this.versions())
      if (
        !latest.has(value.record.id) ||
        latest.get(value.record.id).version < value.version
      )
        latest.set(value.record.id, value);
    const superseded = new Set(
      [...latest.values()].map((value) => value.supersedes).filter(Boolean),
    );
    return [...latest.values()].map((value) =>
      superseded.has(value.record.id)
        ? { ...value, lifecycle: "superseded" }
        : value,
    );
  }
  async propose(run, input) {
    const extraction = parse(extractionSchema, input);
    if (
      run.status !== "succeeded" ||
      run.schemaVersion !== 2 ||
      run.diagnostics?.agent?.id !== "wonnyy-agent"
    )
      invalid(
        "Use a completed Orbistry Agent run with recorded agent provenance.",
      );
    return this.locked(async () => {
      const prior = await this.proposals();
      const committed = await this.latest();
      const all = [
        ...prior.flatMap((p) => p.records),
        ...committed.map((p) => p.record),
      ];
      const records = extraction.observations.map((item) => {
        const source = run.sourcesActuallyRead.find(
          (source) => source.sourceId === item.sourceId,
        );
        if (
          item.sourceId &&
          (!source ||
            !run.contextIdentity.sources.some(
              (bound) =>
                bound.sourceId === source.sourceId &&
                bound.contentHash === source.contentHash,
            ))
        )
          invalid("Evidence source is outside this run's read manifest.");
        const record = {
          ...item,
          id: recordId(item),
          provenance: source
            ? {
                ...source,
                location: item.location ?? null,
                quote: item.quote ?? null,
              }
            : null,
          extractedAt: new Date().toISOString(),
          lifecycleHistory: ["extracted", "candidate"],
          verification: "unverified",
          approval: "pending",
          lifecycle: "candidate",
          runId: run.runId,
          conversationId: run.conversationId,
        };
        record.duplicateIds = [
          ...new Set(all.filter((r) => r.id === record.id).map((r) => r.id)),
        ];
        record.conflictingIds = [
          ...new Set(
            all
              .filter(
                (r) =>
                  r.kind === "evidence" &&
                  record.kind === "evidence" &&
                  sameSubject(r, record) &&
                  r.metricValue &&
                  record.metricValue &&
                  normalize(r.metricValue) !== normalize(record.metricValue),
              )
              .map((r) => r.id),
          ),
        ];
        record.relatedPeriodIds = [
          ...new Set(
            all
              .filter(
                (r) =>
                  normalize(r.entity) === normalize(record.entity) &&
                  normalize(r.topic) === normalize(record.topic) &&
                  normalize(r.period) !== normalize(record.period),
              )
              .map((r) => r.id),
          ),
        ];
        all.push(record);
        return record;
      });
      const iteration = prior.length
        ? Math.max(...prior.map((p) => p.iteration)) + 1
        : 0;
      if (iteration > 99999999)
        invalid("Iteration numbering capacity exceeded.");
      const proposal = {
        schemaVersion: 1,
        vault: this.vault,
        iteration,
        objective: extraction.objective,
        createdAt: new Date().toISOString(),
        runId: run.runId,
        contextIdentity: run.contextIdentity,
        status: "pending-review",
        records,
      };
      await immutableWrite(
        path.join(this.directory, "iteration", numberName(iteration)),
        proposal,
        `Knowledge proposal ${numberName(iteration)}`,
      );
      return proposal;
    });
  }
  // Operator-only interface: deliberately NOT registered with renderer IPC or model tools.
  async approve(input, readSource) {
    const request = parse(approvalSchema, input);
    return this.locked(async () => {
      const proposal = (await this.proposals()).find(
        (p) => p.iteration === request.iteration,
      );
      const record = proposal?.records.find((r) => r.id === request.recordId);
      if (!record || record.id !== recordId(record))
        invalid("Candidate does not exist or has changed.");
      const current = await this.latest();
      if (request.supersedes === record.id)
        invalid("A record cannot supersede itself.");
      const existing = current.find((v) => v.record.id === record.id);
      if (existing?.iteration === proposal.iteration)
        invalid(
          "This candidate already has committed history for this iteration.",
        );
      if (existing?.lifecycle === "superseded")
        invalid("Superseded records cannot be silently reactivated.");
      const dependencies = [
        ...new Set([...record.supportingIds, ...record.contradictingIds]),
      ].map((id) =>
        current.find(
          (v) =>
            v.record.id === id &&
            v.record.kind === "evidence" &&
            v.lifecycle === "reusable",
        ),
      );
      if (dependencies.some((v) => !v))
        invalid("Hypothesis links must identify approved, current knowledge.");
      if (
        record.previousHypothesisIds.some(
          (id) =>
            !current.some(
              (v) => v.record.id === id && v.record.kind === "analytical",
            ),
        )
      )
        invalid(
          "Previous hypothesis IDs must identify committed analytical knowledge.",
        );
      if (
        record.kind === "analytical" &&
        (!record.supportingIds.length ||
          !record.rationale ||
          !record.questions.length)
      )
        invalid(
          "An analytical hypothesis needs approved support, rationale and unresolved questions; it is not factual evidence.",
        );
      if (
        record.kind === "evidence" &&
        (!record.provenance?.location || !record.provenance?.quote)
      )
        invalid(
          "Evidence without an exact source location and quotation cannot be verified.",
        );
      const sources = [
        record.provenance,
        ...dependencies.flatMap((d) => d.sources),
      ].filter(Boolean);
      for (const source of sources) {
        const content = await readSource(source.relativePath);
        if (
          hash(content) !== source.contentHash ||
          !source.quote ||
          !content.includes(source.quote)
        )
          invalid(
            "Source hash or quotation changed. Re-extract and review before approval.",
          );
      }
      const superseded =
        request.supersedes &&
        current.find(
          (v) =>
            v.record.id === request.supersedes && v.lifecycle === "reusable",
        );
      if (
        request.supersedes &&
        (!superseded ||
          superseded.record.kind !== record.kind ||
          !sameSubject(superseded.record, record))
      )
        invalid(
          "Supersession must identify current knowledge for the same entity, topic and period.",
        );
      const value = {
        schemaVersion: 1,
        vault: this.vault,
        version: (existing?.version ?? 0) + 1,
        iteration: proposal.iteration,
        record,
        sources,
        verification:
          record.kind === "evidence"
            ? "operator-verified-quote"
            : "operator-reviewed-interpretation",
        approval: {
          reviewer: request.reviewer,
          rationale: request.rationale,
          at: new Date().toISOString(),
        },
        lifecycle: "reusable",
        lifecycleHistory: [
          "extracted",
          "candidate",
          "verified",
          "consolidated",
          "reusable",
        ],
        supersedes: request.supersedes ?? existing?.supersedes ?? null,
      };
      // One atomic commit contains the supersession relationship. Old files remain immutable.
      await immutableWrite(
        path.join(
          this.directory,
          "knowledge",
          record.kind,
          `${record.id}-v${String(value.version).padStart(4, "0")}.md`,
        ),
        value,
        `Reviewed ${record.kind} ${record.id}`,
      );
      return value;
    });
  }
  async retrieve(input, manifest) {
    const query = parse(querySchema, input);
    await this.checkBoundary();
    const current = await this.latest();
    const superseded = new Set(
      current
        .filter((v) => v.lifecycle === "superseded")
        .map((v) => v.record.id),
    );
    const candidates = current.filter(
      (v) =>
        v.lifecycle === "reusable" &&
        !superseded.has(v.record.id) &&
        normalize(v.record.entity) === normalize(query.entity) &&
        normalize(v.record.topic) === normalize(query.topic) &&
        normalize(v.record.period) === normalize(query.period),
    );
    const chosen = [],
      excluded = [];
    let tokens = 0;
    for (const value of candidates.sort(
      (a, b) =>
        Number(b.record.kind === "evidence") -
          Number(a.record.kind === "evidence") ||
        b.approval.at.localeCompare(a.approval.at) ||
        a.record.id.localeCompare(b.record.id),
    )) {
      const active = value.sources.every((s) =>
        manifest.some(
          (m) =>
            m.sourceId === s.sourceId &&
            m.relativePath === s.relativePath &&
            m.contentHash === s.contentHash,
        ),
      );
      const dependencies = [
        ...value.record.supportingIds,
        ...value.record.contradictingIds,
      ];
      if (!active || dependencies.some((id) => superseded.has(id))) {
        excluded.push({
          id: value.record.id,
          reason:
            "Source version, session binding or supporting knowledge changed",
        });
        continue;
      }
      const cost = Math.ceil(
        Buffer.byteLength(JSON.stringify(value), "utf8") / 2,
      ); // Conservative estimate, not provider-measured tokens.
      if (tokens + cost > query.maxTokens) {
        excluded.push({ id: value.record.id, reason: "Context budget" });
        continue;
      }
      tokens += cost;
      chosen.push(value);
    }
    return {
      objective: query,
      evidence: chosen.filter((v) => v.record.kind === "evidence"),
      analytical: chosen.filter((v) => v.record.kind === "analytical"),
      process: chosen.filter((v) => v.record.kind === "process"),
      estimatedTokens: tokens,
      excluded,
      limitation:
        "Operator review and exact quotation checks do not guarantee factual or semantic correctness. Retrieval is a preview; the existing Context Box remains the only documentary evidence authority.",
    };
  }
}
module.exports = {
  KnowledgeStore,
  extractionSchema,
  querySchema,
  hash,
  recordId,
  readMarkdown,
};
