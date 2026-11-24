const { randomUUID } = require("node:crypto");
const {
  contextIdentity,
  validateContextIdentity,
} = require("../context-identity.cjs");
const { ModelRuntimeError } = require("../model-errors.cjs");
const {
  contextBoxBindingSchema,
  contextFileBindingSchema,
  constructionSourceSchema,
} = require("./agent-construction.cjs");
const { parse } = require("../schemas.cjs");
const MAX_GUIDANCE_CHARS = 80000;
function invalid(message) {
  throw new ModelRuntimeError("MODEL_CONTEXT_INVALID", message);
}
async function readManifest(service, root, manifest, latest) {
  const ownerId = "construction:" + randomUUID();
  const scope = await service.knowledge.prepareBrainScope(
    root,
    { ownerId, activeStationIds: [], matchMode: "any" },
    manifest,
    latest,
  );
  const sources = [];
  for (const source of scope.sources)
    sources.push(
      await service.knowledge.readBrainSource(root, {
        ownerId,
        scopeId: scope.id,
        sourceId: source.id,
      }),
    );
  const chars = sources.reduce((sum, source) => sum + source.content.length, 0);
  if (chars > 80000)
    invalid(
      "This source exceeds the 80,000-character context limit. Choose a smaller document; content is never silently truncated.",
    );
  return {
    contextIdentity: contextIdentity(scope),
    sources,
    chars,
    estimatedTokens: scope.estimatedTokens,
  };
}
async function loadBox(service, vault, boxId, expected = null) {
  const { root, boxes } = await service.store(vault),
    box = await boxes.get(boxId);
  if (expected) {
    parse(contextBoxBindingSchema, expected);
    validateContextIdentity(expected.contextIdentity);
    if (expected.vaultPath !== root)
      invalid(
        "This agent's Context Box belongs to another vault. Rebind it in this vault before applying or sending.",
      );
    const paths = box.items.map((item) => item.relativePath).sort();
    if (
      JSON.stringify(paths) !==
      JSON.stringify(
        expected.contextIdentity.sources
          .map((source) => source.relativePath)
          .sort(),
      )
    )
      invalid(
        "A construction Context Box changed membership. Review and bind it again.",
      );
  }
  const reviewed = await readManifest(
    service,
    root,
    expected
      ? expected.contextIdentity.sources
      : box.items.map((item) => ({
          sourceId: item.relativePath,
          relativePath: item.relativePath,
        })),
    !expected,
  );
  return {
    binding: {
      vaultPath: root,
      boxId: box.id,
      boxName: box.name,
      boxRevision: box.revision,
      reviewedAt: expected?.reviewedAt ?? new Date().toISOString(),
      estimatedTokens: reviewed.estimatedTokens,
      contextIdentity: reviewed.contextIdentity,
    },
    sources: reviewed.sources,
    chars: reviewed.chars,
  };
}
async function readFile(service, vault, relativePath, expected = null) {
  try {
    const { root } = await service.store(vault);
    if (expected) {
      parse(contextFileBindingSchema, expected);
      validateContextIdentity(expected.contextIdentity);
      if (expected.vaultPath !== root || expected.relativePath !== relativePath)
        invalid(
          "This reviewed file belongs to another vault or path. Review and attach it again.",
        );
    }
    const preview = await service.knowledge.previewBoxSelection(root, [
      relativePath,
    ]);
    if (
      preview.skipped.length ||
      preview.files.length !== 1 ||
      preview.files[0] !== relativePath
    )
      invalid(
        "Choose one readable Markdown, CSV, PDF or PNG/JPG/JPEG OCR file inside the active vault.",
      );
    const reviewed = await readManifest(
      service,
      root,
      expected?.contextIdentity.sources ?? [
        { sourceId: relativePath, relativePath },
      ],
      !expected,
    );
    return {
      binding: {
        vaultPath: root,
        relativePath,
        reviewedAt: expected?.reviewedAt ?? new Date().toISOString(),
        estimatedTokens: reviewed.estimatedTokens,
        contextIdentity: reviewed.contextIdentity,
      },
      sources: reviewed.sources,
      chars: reviewed.chars,
    };
  } catch (error) {
    if (error?.name === "BrainScopeError")
      invalid(
        "The reviewed file changed or is unavailable. Review and attach the full current file again in this agent's settings.",
      );
    throw error;
  }
}
const readBinding = (service, vault, input) => {
  const binding = parse(constructionSourceSchema, input);
  return "relativePath" in binding
    ? readFile(service, vault, binding.relativePath, binding)
    : readBox(service, vault, binding.boxId, binding);
};
async function readBox(service, vault, boxId, expected = null) {
  try {
    return await loadBox(service, vault, boxId, expected);
  } catch (error) {
    if (error?.name === "BrainScopeError")
      invalid(
        "A construction Context Box source changed or is unavailable. Review and attach the box again in this agent's settings.",
      );
    throw error;
  }
}
async function constructionReferences(
  service,
  vault,
  config,
  validateResearch = false,
) {
  const references = [];
  let chars = 0;
  for (const node of config?.nodes ?? []) {
    const binding = node.config.contextFile ?? node.config.contextBox;
    if (!binding) continue;
    if (["Context", "Knowledge"].includes(node.kind) && !validateResearch)
      continue;
    const reviewed = await readBinding(service, vault, binding);
    if (["Context", "Knowledge"].includes(node.kind)) continue;
    chars += reviewed.chars;
    if (chars > MAX_GUIDANCE_CHARS)
      invalid(
        "Agent guidance exceeds 80,000 characters in total. Choose smaller documents or boxes; reference text is never silently truncated.",
      );
    references.push({
      nodeId: node.id,
      role: node.kind,
      ...("relativePath" in binding
        ? { relativePath: binding.relativePath }
        : { boxId: binding.boxId, boxName: reviewed.binding.boxName }),
      contextIdentity: reviewed.binding.contextIdentity,
      sources: reviewed.sources.map((source) => ({
        sourceId: source.sourceId,
        relativePath: source.relativePath,
        contentHash: source.contentHash,
        content: source.content,
      })),
    });
  }
  return references;
}
module.exports = {
  readBox,
  readFile,
  readBinding,
  constructionReferences,
  MAX_GUIDANCE_CHARS,
};
