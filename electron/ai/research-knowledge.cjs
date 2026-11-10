const fs = require("node:fs/promises");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const { validId } = require("./conversation-store.cjs");
const { validateRunRecord } = require("./run-store.cjs");
const { rejectSymlink } = require("./json-store.cjs");
const { KnowledgeStore } = require("./knowledge-store.cjs");
const { readVaultFile, readIndexedPdfText } = require("../vault-service.cjs");
const { ModelRuntimeError } = require("./model-errors.cjs");
async function readCompletedRun(vault, id) {
  validId(id);
  const root = await fs.realpath(vault);
  const directory = path.join(root, ".wonnyy", "model-runs");
  // No mkdir/recovery on the source side: this feature is strictly read-only there.
  await rejectSymlink(path.join(root, ".wonnyy"));
  await rejectSymlink(directory);
  const file = path.join(directory, `${id}.json`);
  await rejectSymlink(file);
  if ((await fs.stat(file)).size > 8 * 1024 * 1024)
    throw new Error("Run metadata exceeds the read limit.");
  const run = validateRunRecord(JSON.parse(await fs.readFile(file, "utf8")));
  if (
    run.runId !== id ||
    run.status !== "succeeded" ||
    run.diagnostics?.agent?.id !== "wonnyy-agent"
  )
    throw new ModelRuntimeError(
      "MODEL_INVALID_REQUEST",
      "Select a completed Orbistry Agent run with recorded provenance.",
    );
  return run;
}
async function readResearchSource(vault, relativePath) {
  if (/\.pdf$/i.test(relativePath))
    return readIndexedPdfText(vault, relativePath);
  return (await readVaultFile(vault, relativePath)).content;
}
class ResearchKnowledge {
  constructor(appData) {
    this.appData = appData;
  }
  async store(vault) {
    return new KnowledgeStore(this.appData, await fs.realpath(vault));
  }
  async propose(vault, input) {
    if (
      !input ||
      Object.keys(input).some((key) => !["runId", "extraction"].includes(key))
    )
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "Use runId and structured extraction only.",
      );
    const run = await readCompletedRun(vault, input.runId);
    return (await this.store(vault)).propose(run, input.extraction);
  }
  async retrieve(vault, input, service) {
    if (
      !input ||
      Object.keys(input).some(
        (key) => !["conversationId", "query"].includes(key),
      )
    )
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "Use conversationId and query only.",
      );
    validId(input.conversationId);
    const { root, store } = await service.store(vault);
    const conversation = await store.read(input.conversationId);
    if (conversation.agentId !== "wonnyy-agent")
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "Knowledge consolidation is registered only for Orbistry Agent.",
      );
    const scope = await service.boundScope(root, conversation, {
      ownerId: "knowledge:" + randomUUID(),
    });
    const { querySchema } = require("./knowledge-store.cjs");
    const { parse } = require("./schemas.cjs");
    const query = parse(querySchema, input.query);
    const agent = service.agents
      ? await service.agents.get(conversation.agentId)
      : null;
    const knowledgeNode = agent?.construction?.active?.nodes.find(
      (node) => node.kind === "Knowledge",
    );
    if (knowledgeNode)
      query.maxTokens = Math.min(
        query.maxTokens,
        knowledgeNode.config.maxTokens ?? 1500,
      );
    return (await this.store(vault)).retrieve(
      query,
      scope.sources.map((s) => ({
        sourceId: s.id,
        relativePath: s.relativePath,
        contentHash: s.contentHash,
      })),
    );
  }
}
module.exports = { ResearchKnowledge, readCompletedRun, readResearchSource };
