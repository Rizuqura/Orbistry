const { z, parse } = require("./schemas.cjs");
const { validateCustomInstructions } = require("./agent-policy.cjs");
const { skillsFor } = require("./skills.cjs");
const { ModelRuntimeError } = require("./model-errors.cjs");
const kinds = [
  "Context",
  "Personality",
  "Skill",
  "LLM",
  "Workflow",
  "Knowledge",
  "Output",
  "Engine",
];
const identifier = z.string().regex(/^[a-zA-Z0-9_-]{1,64}$/);
const contextBoxBindingSchema = z
  .object({
    vaultPath: z.string().min(1).max(4096),
    boxId: z.string().regex(/^[a-zA-Z0-9_-]{1,128}$/),
    boxName: z.string().min(1).max(120),
    boxRevision: z.number().int().min(1),
    reviewedAt: z.string().datetime(),
    estimatedTokens: z.number().int().min(0),
    contextIdentity: z
      .object({
        id: z.string().regex(/^[a-f0-9]{64}$/),
        mode: z.literal("active-context"),
        sources: z
          .array(
            z
              .object({
                sourceId: z.string().min(1),
                relativePath: z.string().min(1),
                contentHash: z.string().regex(/^[a-f0-9]{64}$/),
              })
              .strict(),
          )
          .min(1)
          .max(32),
      })
      .strict(),
  })
  .strict();
const contextFileBindingSchema = contextBoxBindingSchema
  .omit({ boxId: true, boxName: true, boxRevision: true })
  .extend({ relativePath: z.string().min(1).max(4096) })
  .strict()
  .refine(
    (value) =>
      value.contextIdentity.sources.length === 1 &&
      value.contextIdentity.sources[0].relativePath === value.relativePath &&
      value.contextIdentity.sources[0].sourceId === value.relativePath,
    "A file binding must identify exactly its reviewed file.",
  );
const constructionSourceSchema = z.union([
  contextBoxBindingSchema,
  contextFileBindingSchema,
]);
const imageReference = z
  .object({
    type: z.literal("local-asset"),
    assetId: z.string().regex(/^[a-f0-9]{64}$/),
  })
  .strict()
  .nullable();
const appearanceOptions = z
  .object({
    wallpaperMode: z.enum(["none", "dots", "image"]),
    dim: z.number().int().min(0).max(90),
    fontSize: z.union([
      z.literal(14),
      z.literal(15),
      z.literal(16),
      z.literal(18),
    ]),
  })
  .strict();
const appearanceSchema = appearanceOptions
  .extend({ banner: imageReference, wallpaper: imageReference })
  .strict();
const defaultAppearance = () => ({
  banner: null,
  wallpaper: null,
  wallpaperMode: "none",
  dim: 60,
  fontSize: 15,
});
const nodeSchema = z
  .object({
    id: identifier,
    kind: z.enum(kinds),
    x: z.number().finite().min(0).max(880),
    y: z.number().finite().min(0).max(520),
    config: z
      .object({
        instructions: z.string().max(1200).optional(),
        contextBox: contextBoxBindingSchema.optional(),
        contextFile: contextFileBindingSchema.optional(),
        maxTokens: z.number().int().min(64).max(8000).optional(),
        providerId: z
          .enum(["ollama", "openrouter", "gemini", "nvidia"])
          .optional(),
        modelId: z.string().trim().max(240).optional(),
        skillId: z.enum(["knowledge-consolidation"]).optional(),
        engineId: z.literal("chronoz").optional(),
        instanceId: z.string().uuid().optional(),
        mode: z
          .enum(["bound-only", "single-pass", "preview-only", "text"])
          .optional(),
      })
      .strict(),
  })
  .strict();
const configSchema = z
  .object({
    displayName: z
      .string()
      .trim()
      .min(1)
      .max(120)
      .refine((value) => !/[\u0000-\u001f\u007f]/u.test(value)),
    description: z.string().trim().max(240),
    personality: z.string().max(2000),
    instructions: z.string().max(8000),
    nodes: z.array(nodeSchema).max(8),
    edges: z
      .array(z.object({ from: identifier, to: identifier }).strict())
      .max(12),
  })
  .strict();
const avatarSchema = z.union([
  z
    .object({
      type: z.literal("letter"),
      letter: z.string().regex(/^[A-Z0-9]$/),
    })
    .strict(),
  z
    .object({
      type: z.literal("local-asset"),
      assetId: z.string().regex(/^[a-f0-9]{64}$/),
    })
    .strict(),
]);
const stateSchema = z
  .object({
    revision: z.number().int().min(1),
    draftRevision: z.number().int().min(1),
    activeRevision: z.number().int().min(0),
    draft: configSchema,
    active: configSchema.nullable(),
    draftAvatar: avatarSchema,
    draftAppearance: appearanceSchema.optional(),
    log: z
      .array(
        z
          .object({
            revision: z.number().int(),
            action: z.enum(["draft", "apply", "profile"]),
            at: z.string().datetime(),
          })
          .strict(),
      )
      .max(20),
  })
  .strict();
function defaults(row, generic = false) {
  return {
    displayName: row.displayName,
    description: row.description ?? "",
    personality: row.personality ?? "",
    instructions: row.customInstructions,
    nodes: [
      {
        id: "context",
        kind: "Context",
        x: 64,
        y: 160,
        config: { mode: "bound-only" },
      },
      { id: "llm", kind: "LLM", x: 352, y: 160, config: {} },
      {
        id: "output",
        kind: "Output",
        x: 640,
        y: 160,
        config: { mode: "text" },
      },
      {
        id: "skill",
        kind: "Skill",
        x: 352,
        y: 368,
        config:
          !generic && skillsFor(row.id).length
            ? { skillId: skillsFor(row.id)[0] }
            : {},
      },
    ],
    edges: [
      { from: "context", to: "llm" },
      { from: "llm", to: "output" },
      { from: "skill", to: "llm" },
    ],
  };
}
function invalid(message) {
  throw new ModelRuntimeError("MODEL_INVALID_REQUEST", message);
}
function validateConstruction(value, agentId, apply = false) {
  const config = parse(configSchema, value);
  const nodes = new Map(config.nodes.map((node) => [node.id, node]));
  if (
    nodes.size !== config.nodes.length ||
    new Set(
      config.nodes
        .filter((node) => node.kind !== "Engine")
        .map((node) => node.kind),
    ).size !== config.nodes.filter((node) => node.kind !== "Engine").length
  )
    invalid("Use unique node IDs and at most one node of each category.");
  const engines = config.nodes.filter((node) => node.kind === "Engine");
  if (engines.length > 1)
    invalid("Only one CHronoZ instance is supported in v0.1.");
  const fields = {
    Context: ["mode", "contextBox", "contextFile"],
    Personality: ["instructions", "contextBox", "contextFile"],
    Skill: ["skillId", "contextBox", "contextFile"],
    LLM: ["providerId", "modelId"],
    Workflow: ["mode", "instructions", "contextBox", "contextFile"],
    Knowledge: ["mode", "maxTokens", "contextBox", "contextFile"],
    Output: ["mode", "instructions", "contextBox", "contextFile"],
    Engine: ["engineId", "instanceId"],
  };
  const modes = {
    Context: "bound-only",
    Workflow: "single-pass",
    Knowledge: "preview-only",
    Output: "text",
  };
  for (const node of config.nodes) {
    if (
      node.kind === "Engine" &&
      (!node.config.instanceId || (apply && node.config.engineId !== "chronoz"))
    )
      invalid(
        "Choose the registered CHronoZ engine before applying; each engine needs an instance ID.",
      );
    if (
      Object.keys(node.config).some((key) => !fields[node.kind].includes(key))
    )
      invalid(`Unsupported ${node.kind} configuration.`);
    if (modes[node.kind] && node.config.mode !== modes[node.kind])
      invalid(`${node.kind} must use ${modes[node.kind]} mode.`);
    if (node.config.instructions)
      validateCustomInstructions(node.config.instructions);
    if (
      node.kind === "Skill" &&
      node.config.skillId &&
      !skillsFor(agentId).includes(node.config.skillId)
    )
      invalid("This skill is not registered for this agent.");
    if (node.config.contextBox)
      require("./context-identity.cjs").validateContextIdentity(
        node.config.contextBox.contextIdentity,
      );
    if (node.config.contextBox && node.config.contextFile)
      invalid("Choose a Context Box or a single file for each node.");
    if (node.config.contextFile)
      require("./context-identity.cjs").validateContextIdentity(
        node.config.contextFile.contextIdentity,
      );
    if (
      node.kind === "LLM" &&
      Boolean(node.config.providerId) !== Boolean(node.config.modelId)
    )
      invalid("Choose both a provider and model, or inherit the shared model.");
  }
  const edges = new Set();
  for (const edge of config.edges) {
    const from = nodes.get(edge.from),
      to = nodes.get(edge.to),
      key = edge.from + ":" + edge.to;
    if (
      !from ||
      !to ||
      edges.has(key) ||
      from.id === to.id ||
      !(
        (from.kind === "LLM" && to.kind === "Output") ||
        (!["LLM", "Output"].includes(from.kind) && to.kind === "LLM")
      )
    )
      invalid(
        "Connect inputs to LLM, then LLM to Output. Duplicate or cyclic connections are not allowed.",
      );
    edges.add(key);
  }
  if (apply) {
    for (const kind of ["Context", "LLM", "Output"])
      if (!config.nodes.some((node) => node.kind === kind))
        invalid("An active graph needs Context, LLM and Output.");
    for (const node of config.nodes)
      if (
        node.kind !== "Output" &&
        !config.edges.some((edge) => edge.from === node.id)
      )
        invalid(`Connect ${node.kind} before applying.`);
  }
  validateCustomInstructions(config.instructions);
  validateCustomInstructions(config.personality);
  const preferences = [
    config.instructions,
    config.personality ? "Personality preferences:\n" + config.personality : "",
    ...config.nodes
      .filter((node) =>
        config.edges.some(
          (edge) =>
            edge.from === node.id ||
            (node.kind === "Output" && edge.to === node.id),
        ),
      )
      .map((node) =>
        node.config.instructions
          ? `${node.kind} preferences:\n${node.config.instructions}`
          : "",
      ),
  ]
    .filter(Boolean)
    .join("\n\n");
  validateCustomInstructions(preferences);
  return {
    config,
    preferences,
    model: config.nodes.find((node) => node.kind === "LLM")?.config ?? {},
    skills: config.nodes
      .filter(
        (node) =>
          node.kind === "Skill" &&
          node.config.skillId &&
          config.edges.some((edge) => edge.from === node.id),
      )
      .map((node) => node.config.skillId),
  };
}
module.exports = {
  contextBoxBindingSchema,
  contextFileBindingSchema,
  constructionSourceSchema,
  appearanceSchema,
  appearanceOptions,
  defaultAppearance,
  configSchema,
  stateSchema,
  avatarSchema,
  defaults,
  validateConstruction,
};
