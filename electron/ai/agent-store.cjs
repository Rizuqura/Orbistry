const path = require("node:path");
const fs = require("node:fs/promises");
const { createHash } = require("node:crypto");
const {
  readJson,
  writeJson,
  serialQueue,
  safeDirectory,
  rejectSymlink,
} = require("./json-store.cjs");
const { z, parse } = require("./schemas.cjs");
const { ModelRuntimeError } = require("./model-errors.cjs");
const { SYSTEM_PROMPT } = require("./prompt-builder.cjs");
const {
  stateSchema,
  configSchema,
  defaults,
  validateConstruction,
  appearanceSchema,
  appearanceOptions,
  defaultAppearance,
} = require("./agent-construction.cjs");
const {
  AGENT_ID,
  AGENT_DEFINITIONS,
  POLICY_VERSION,
  validateCustomInstructions,
} = require("./agent-policy.cjs");
const idSchema = z.string().regex(/^[a-z0-9][a-z0-9_-]{0,63}$/);
const rowSchema = z
  .object({
    id: idSchema,
    displayName: z.string().min(1).max(120),
    avatar: z.union([
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
    ]),
    customInstructions: z.string().max(8000),
    description: z.string().max(240).optional(),
    personality: z.string().max(2000).optional(),
    construction: stateSchema.optional(),
    appearance: appearanceSchema.optional(),
    mode: z.literal("strict-context-analysis"),
    policyVersion: z.string(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
  })
  .strict();
const schema = z
  .object({
    schemaVersion: z.literal(1),
    includeDefaultAgents: z.boolean().optional(),
    agents: z.record(idSchema, rowSchema),
  })
  .strict();
const seed = (id = AGENT_ID) => {
  const definition = AGENT_DEFINITIONS[id];
  if (!definition) return null;
  const timestamp = new Date().toISOString();
  return {
    id,
    displayName: definition.displayName,
    avatar: { type: "letter", letter: definition.letter },
    customInstructions: "",
    mode: "strict-context-analysis",
    policyVersion: POLICY_VERSION,
    createdAt: timestamp,
    updatedAt: timestamp,
  };
};
const fallbackAvatar = (row) => ({
  type: "letter",
  letter:
    AGENT_DEFINITIONS[row.id]?.letter ??
    row.displayName.toUpperCase().match(/[A-Z0-9]/)?.[0] ??
    "A",
});
const defaultIds = (state, allowDefaults) =>
  !allowDefaults || state.includeDefaultAgents === false
    ? []
    : Object.keys(AGENT_DEFINITIONS);
const storedOrDefault = (state, id, allowDefaults) =>
  state.agents[id] ??
  (!allowDefaults || state.includeDefaultAgents === false ? null : seed(id));
// Discard only the retired prototype reference in memory. Reads never rewrite
// existing profiles; all other fields still pass the strict storage schema.
function withoutRetiredReferences(value) {
  const copy = structuredClone(value);
  for (const row of Object.values(copy?.agents ?? {})) {
    for (const config of [
      row?.construction?.draft,
      row?.construction?.active,
    ]) {
      for (const node of Array.isArray(config?.nodes) ? config.nodes : []) {
        if (
          node?.kind === "Skill" &&
          node.config &&
          typeof node.config === "object"
        )
          delete node.config.tabularModelId;
      }
    }
  }
  return copy;
}
class AgentStore {
  constructor(directory, decodeImage, options = {}) {
    this.file = path.join(directory, "agents.json");
    this.assets = path.join(directory, "agent-assets");
    this.decodeImage = decodeImage;
    this.includeDefaultAgents = options.includeDefaultAgents === true;
    this.queue = serialQueue();
  }
  normalizeProfiles(state) {
    if (this.includeDefaultAgents) return state; // Explicit historical test fixtures only.
    const legacy = state?.agents?.chronoz;
    if (legacy?.displayName === "CHronoZ") {
      const names = new Set(
        Object.values(state.agents)
          .filter((row) => row !== legacy)
          .map((row) => row.displayName.toLowerCase()),
      );
      let name = "Agent",
        index = 2;
      while (names.has(name.toLowerCase())) name = "Agent " + index++;
      legacy.displayName = name;
      if (legacy.avatar?.type === "letter" && legacy.avatar.letter === "C")
        legacy.avatar.letter = "A";
      for (const config of [
        legacy.construction?.draft,
        legacy.construction?.active,
      ])
        if (config?.displayName === "CHronoZ") config.displayName = name;
    }
    return state;
  }
  read() {
    return readJson(
      this.file,
      (value) =>
        parse(
          schema,
          this.normalizeProfiles(withoutRetiredReferences(value)),
          "MODEL_STORAGE_INVALID",
          "Agent settings are invalid; they have not been overwritten.",
        ),
      {
        schemaVersion: 1,
        includeDefaultAgents: this.includeDefaultAgents,
        agents: this.includeDefaultAgents ? { [AGENT_ID]: seed() } : {},
      },
    );
  }
  async list() {
    const state = await this.read();
    return Promise.all(
      [
        ...new Set([
          ...defaultIds(state, this.includeDefaultAgents),
          ...Object.keys(state.agents),
        ]),
      ].map((id) => this.get(id)),
    );
  }
  create(input) {
    return this.queue(async () => {
      const patch = parse(
        z
          .object({
            name: configSchema.shape.displayName,
            creationId: z.string().uuid(),
          })
          .strict(),
        input,
      );
      const state = await this.read();
      const id = "agent-" + patch.creationId.toLowerCase();
      if (state.agents[id]) {
        if (state.agents[id].displayName !== patch.name)
          throw new ModelRuntimeError(
            "MODEL_INVALID_REQUEST",
            "This creation request already belongs to another agent name.",
          );
        return this.get(id);
      }
      const existing = [
        ...Object.values(state.agents),
        ...defaultIds(state, this.includeDefaultAgents)
          .filter((key) => !state.agents[key])
          .map((key) => seed(key)),
      ];
      if (
        existing.some(
          (row) => row.displayName.toLowerCase() === patch.name.toLowerCase(),
        )
      )
        throw new ModelRuntimeError(
          "MODEL_INVALID_REQUEST",
          "An agent with this name already exists. Choose another name.",
        );
      const timestamp = new Date().toISOString();
      const row = {
        id,
        displayName: patch.name,
        customInstructions: "",
        mode: "strict-context-analysis",
        policyVersion: POLICY_VERSION,
        createdAt: timestamp,
        updatedAt: timestamp,
      };
      state.agents[id] = { ...row, avatar: fallbackAvatar(row) };
      await writeJson(this.file, state);
      return this.get(id);
    });
  }
  async get(id = AGENT_ID) {
    parse(idSchema, id);
    const state = await this.read();
    const row = storedOrDefault(state, id, this.includeDefaultAgents);
    if (!row || row.id !== id)
      throw new ModelRuntimeError("MODEL_INVALID_REQUEST", "Unknown agent.");
    const compiled = row.construction?.active
      ? validateConstruction(row.construction.active, id, true)
      : null;
    const value = {
      ...row,
      policyVersion: POLICY_VERSION,
      protectedInstructions: SYSTEM_PROMPT.replaceAll(
        "Orbistry Agent",
        row.displayName,
      ),
      skills: this.includeDefaultAgents
        ? (compiled?.skills ?? require("./skills.cjs").skillsFor(id))
        : [],
      availableSkills: this.includeDefaultAgents
        ? require("./skills.cjs").skillsFor(id)
        : [],
      description: row.description ?? "",
      personality: row.personality ?? "",
      runtimeInstructions: compiled?.preferences ?? row.customInstructions,
      runtimeModel: compiled?.model ?? {},
      appearance: await this.resolveAppearance(
        row.appearance ?? defaultAppearance(),
      ),
      construction: row.construction
        ? {
            ...row.construction,
            draftAvatarUrl: await this.avatarUrl(row.construction.draftAvatar),
            draftAppearance: await this.resolveAppearance(
              row.construction.draftAppearance ??
                row.appearance ??
                defaultAppearance(),
            ),
          }
        : {
            revision: 0,
            draftRevision: 0,
            activeRevision: 0,
            draft: defaults(row, !this.includeDefaultAgents),
            active: null,
            draftAvatar: row.avatar,
            draftAvatarUrl: await this.avatarUrl(row.avatar),
            draftAppearance: await this.resolveAppearance(
              row.appearance ?? defaultAppearance(),
            ),
            log: [],
          },
      avatarUrl: null,
    };
    if (row.avatar.type === "local-asset") {
      try {
        const file = path.join(this.assets, row.avatar.assetId + ".png");
        await rejectSymlink(file);
        const bytes = await fs.readFile(file);
        if (
          bytes.length > 512 * 1024 ||
          createHash("sha256").update(bytes).digest("hex") !==
            row.avatar.assetId
        )
          throw new Error("Invalid avatar");
        value.avatarUrl = "data:image/png;base64," + bytes.toString("base64");
      } catch {
        value.avatar = fallbackAvatar(row);
      }
    }
    return value;
  }
  async avatarUrl(avatar, maxBytes = 512 * 1024) {
    if (avatar.type !== "local-asset") return null;
    try {
      const file = path.join(this.assets, avatar.assetId + ".png");
      await rejectSymlink(file);
      const bytes = await fs.readFile(file);
      if (
        bytes.length > maxBytes ||
        createHash("sha256").update(bytes).digest("hex") !== avatar.assetId
      )
        return null;
      return "data:image/png;base64," + bytes.toString("base64");
    } catch {
      return null;
    }
  }
  async resolveAppearance(value) {
    return {
      ...value,
      bannerUrl: value.banner
        ? await this.avatarUrl(value.banner, 4 * 1024 * 1024)
        : null,
      wallpaperUrl: value.wallpaper
        ? await this.avatarUrl(value.wallpaper, 4 * 1024 * 1024)
        : null,
    };
  }
  async backdropAsset(data, previous, kind) {
    if (data === undefined) return previous;
    if (data === null) return null;
    if (!/^data:image\/png;base64,[A-Za-z0-9+/]+={0,2}$/.test(data))
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "Choose a local PNG, JPG or WebP image.",
      );
    const url = await this.prepareBackdrop(
      Buffer.from(data.split(",")[1], "base64"),
      ".png",
      kind,
    );
    const bytes = Buffer.from(url.split(",")[1], "base64"),
      assetId = createHash("sha256").update(bytes).digest("hex");
    await safeDirectory(this.assets);
    const file = path.join(this.assets, assetId + ".png");
    await rejectSymlink(file);
    await fs.writeFile(file, bytes);
    return { type: "local-asset", assetId };
  }
  async constructionAvatar(data, previous, row) {
    if (data === undefined) return previous;
    if (data === null) return fallbackAvatar(row);
    if (!/^data:image\/png;base64,[A-Za-z0-9+/]+={0,2}$/.test(data))
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "Invalid profile picture.",
      );
    const url = await this.prepareAvatar(
      Buffer.from(data.split(",")[1], "base64"),
      ".png",
    );
    const bytes = Buffer.from(url.split(",")[1], "base64");
    const assetId = createHash("sha256").update(bytes).digest("hex");
    await safeDirectory(this.assets);
    const file = path.join(this.assets, assetId + ".png");
    await rejectSymlink(file);
    await fs.writeFile(file, bytes);
    return { type: "local-asset", assetId };
  }
  saveConstruction(input) {
    return this.queue(async () => {
      const patch = parse(
        z
          .object({
            id: idSchema,
            action: z.enum(["draft", "apply"]),
            expectedRevision: z.number().int().min(0),
            config: configSchema,
            avatarDataUrl: z.string().max(700000).nullable().optional(),
            bannerDataUrl: z.string().max(6000000).nullable().optional(),
            wallpaperDataUrl: z.string().max(6000000).nullable().optional(),
            appearance: appearanceOptions.optional(),
          })
          .strict(),
        input,
      );
      const state = await this.read();
      const row = storedOrDefault(state, patch.id, this.includeDefaultAgents);
      if (!row)
        throw new ModelRuntimeError("MODEL_INVALID_REQUEST", "Unknown agent.");
      if ((row.construction?.revision ?? 0) !== patch.expectedRevision)
        throw new ModelRuntimeError(
          "MODEL_INVALID_REQUEST",
          "Agent configuration changed. Reopen Settings before saving.",
        );
      const { config } = validateConstruction(
        patch.config,
        patch.id,
        patch.action === "apply",
      );
      const avatar = await this.constructionAvatar(
        patch.avatarDataUrl,
        row.construction?.draftAvatar ?? row.avatar,
        row,
      );
      const revision = (row.construction?.revision ?? 0) + 1;
      const oldAppearance =
        row.construction?.draftAppearance ??
        row.appearance ??
        defaultAppearance();
      const appearance = {
        ...oldAppearance,
        ...patch.appearance,
        banner: await this.backdropAsset(
          patch.bannerDataUrl,
          oldAppearance.banner,
          "banner",
        ),
        wallpaper: await this.backdropAsset(
          patch.wallpaperDataUrl,
          oldAppearance.wallpaper,
          "wallpaper",
        ),
      };
      if (appearance.wallpaperMode === "image" && !appearance.wallpaper)
        throw new ModelRuntimeError(
          "MODEL_INVALID_REQUEST",
          "Upload a wallpaper or choose a built-in background.",
        );
      const at = new Date().toISOString();
      state.agents[patch.id] = {
        ...row,
        ...(patch.action === "apply"
          ? {
              displayName: config.displayName,
              description: config.description,
              personality: config.personality,
              customInstructions: config.instructions,
              avatar,
              appearance,
            }
          : {}),
        updatedAt: at,
        construction: {
          revision,
          draftRevision: revision,
          activeRevision:
            patch.action === "apply"
              ? revision
              : (row.construction?.activeRevision ?? 0),
          draft: config,
          active:
            patch.action === "apply"
              ? config
              : (row.construction?.active ?? null),
          draftAvatar: avatar,
          draftAppearance: appearance,
          log: [
            ...(row.construction?.log ?? []),
            { revision, action: patch.action, at },
          ].slice(-20),
        },
      };
      await writeJson(this.file, state);
      return this.get(patch.id);
    });
  }
  decodePicture(bytes, extension) {
    const png = bytes
      .subarray(0, 8)
      .equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
    const jpeg = bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
    const webp =
      bytes.toString("ascii", 0, 4) === "RIFF" &&
      bytes.toString("ascii", 8, 12) === "WEBP";
    if (
      !bytes.length ||
      bytes.length > 5 * 1024 * 1024 ||
      !(
        (extension === ".png" && png) ||
        ([".jpg", ".jpeg"].includes(extension) && jpeg) ||
        (extension === ".webp" && webp)
      )
    )
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "Choose a valid PNG, JPG or WebP image up to 5 MB.",
      );
    const image = this.decodeImage?.(bytes);
    const size = image?.getSize();
    if (
      !size ||
      image.isEmpty() ||
      !size.width ||
      !size.height ||
      size.width > 8192 ||
      size.height > 8192 ||
      size.width * size.height > 16000000
    )
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "The image cannot be decoded or exceeds 8192 pixels per side.",
      );
    return image;
  }
  async prepareBackdrop(bytes, extension, kind) {
    if (!["banner", "wallpaper"].includes(kind))
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "Unknown image purpose.",
      );
    let image = this.decodePicture(bytes, extension);
    const size = image.getSize();
    if (kind === "banner") {
      const ratio = 1600 / 480,
        w = Math.min(size.width, Math.floor(size.height * ratio)),
        h = Math.min(size.height, Math.floor(size.width / ratio));
      image = image
        .crop({
          x: Math.floor((size.width - w) / 2),
          y: Math.floor((size.height - h) / 2),
          width: Math.max(1, w),
          height: Math.max(1, h),
        })
        .resize({ width: 1600, height: 480 });
    } else {
      const scale = Math.min(1, 1600 / size.width, 1000 / size.height);
      image = image.resize({
        width: Math.max(1, Math.round(size.width * scale)),
        height: Math.max(1, Math.round(size.height * scale)),
      });
    }
    const processed = image.toPNG();
    if (!processed.length || processed.length > 4 * 1024 * 1024)
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "The processed image is too large. Choose a smaller image.",
      );
    return "data:image/png;base64," + processed.toString("base64");
  }
  async prepareAvatar(bytes, extension) {
    const image = this.decodePicture(bytes, extension),
      size = image.getSize();
    const side = Math.min(size.width, size.height);
    const processed = image
      .crop({
        x: Math.floor((size.width - side) / 2),
        y: Math.floor((size.height - side) / 2),
        width: side,
        height: side,
      })
      .resize({ width: 128, height: 128 })
      .toPNG();
    if (!processed.length || processed.length > 512 * 1024)
      throw new ModelRuntimeError(
        "MODEL_INVALID_REQUEST",
        "Could not process this profile picture.",
      );
    return "data:image/png;base64," + processed.toString("base64");
  }
  save(input) {
    return this.queue(async () => {
      const patch = parse(
        z
          .object({
            id: idSchema,
            customInstructions: z.string().max(8000),
            avatarDataUrl: z.string().max(700000).nullable().optional(),
          })
          .strict(),
        input,
      );
      const customInstructions = validateCustomInstructions(
        patch.customInstructions,
      );
      const state = await this.read();
      const row = storedOrDefault(state, patch.id, this.includeDefaultAgents);
      if (!row || row.id !== patch.id)
        throw new ModelRuntimeError("MODEL_INVALID_REQUEST", "Unknown agent.");
      let avatar = row.avatar;
      if (patch.avatarDataUrl === null) avatar = fallbackAvatar(row);
      else if (patch.avatarDataUrl !== undefined) {
        if (
          !/^data:image\/png;base64,[A-Za-z0-9+/]+={0,2}$/.test(
            patch.avatarDataUrl,
          )
        )
          throw new ModelRuntimeError(
            "MODEL_INVALID_REQUEST",
            "Invalid profile picture.",
          );
        const bytes = Buffer.from(patch.avatarDataUrl.split(",")[1], "base64");
        const url = await this.prepareAvatar(bytes, ".png");
        const processed = Buffer.from(url.split(",")[1], "base64");
        const assetId = createHash("sha256").update(processed).digest("hex");
        await safeDirectory(this.assets);
        const file = path.join(this.assets, assetId + ".png");
        await rejectSymlink(file);
        await fs.writeFile(file, processed);
        avatar = { type: "local-asset", assetId };
      }
      state.agents[patch.id] = {
        ...row,
        avatar,
        customInstructions,
        policyVersion: POLICY_VERSION,
        updatedAt: new Date().toISOString(),
      };
      if (row.construction) {
        const previous = row.construction;
        const revision = previous.revision + 1;
        const clean = previous.draftRevision === previous.activeRevision;
        state.agents[patch.id].construction = {
          ...previous,
          revision,
          activeRevision: previous.active ? revision : 0,
          active: previous.active
            ? { ...previous.active, instructions: customInstructions }
            : null,
          ...(clean
            ? {
                draft: { ...previous.draft, instructions: customInstructions },
                draftAvatar: avatar,
                draftRevision: revision,
              }
            : {}),
          log: [
            ...previous.log,
            { revision, action: "profile", at: new Date().toISOString() },
          ].slice(-20),
        };
      }
      await writeJson(this.file, state);
      return this.get(patch.id);
    });
  }
}
module.exports = { AgentStore, AGENT_ID };
