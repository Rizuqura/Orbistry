const crypto = require("node:crypto");
const fs = require("node:fs/promises");
const path = require("node:path");
const {
  readIndexedPdfText,
  getVaultSnapshot,
  readVaultFile,
  scanVault,
} = require("./vault-service.cjs");
const { BRAIN_ERROR_CODES, BrainScopeError } = require("./brain-errors.cjs");

const SCHEMA_VERSION = 1;
const SUPPORTED = new Set([
  ".md",
  ".markdown",
  ".csv",
  ".pdf",
  ".png",
  ".jpg",
  ".jpeg",
]);
const cache = new Map();
const readSourceText = async (root, relativePath) =>
  /\.pdf$/i.test(relativePath)
    ? readIndexedPdfText(root, relativePath)
    : (await readVaultFile(root, relativePath)).content;
const queues = new Map();
const brainScopes = new Map();
const BRAIN_SCOPE_TTL_MS = 5 * 60 * 1000;
const MAX_BRAIN_SCOPES = 128;

const emptyDocument = () => ({
  schemaVersion: SCHEMA_VERSION,
  revision: 0,
  stations: [],
  assignments: [],
  activeContext: [],
});
const metadataPath = (rootPath) =>
  path.join(rootPath, ".wonnyy", "stations.json");

function resolveKnowledgeObject(rootPath, relativePath) {
  if (typeof relativePath !== "string" || path.isAbsolute(relativePath))
    throw new Error("Invalid knowledge object path.");
  const absolute = path.resolve(rootPath, relativePath);
  const within = path.relative(path.resolve(rootPath), absolute);
  if (within.startsWith("..") || path.isAbsolute(within))
    throw new Error("Knowledge object is outside the active vault.");
  if (within.split(path.sep)[0] === ".wonnyy")
    throw new Error("Orbistry metadata cannot be labeled as knowledge.");
  return absolute;
}

function normalizeName(value) {
  if (typeof value !== "string") throw new Error("Station name must be text.");
  const name = value.trim().normalize("NFC");
  if (!name || /[\u0000-\u001f\u007f]/u.test(name))
    throw new Error(
      "Station name cannot be empty or contain control characters.",
    );
  return name;
}

function validateDocument(value) {
  if (
    !value ||
    typeof value !== "object" ||
    value.schemaVersion !== SCHEMA_VERSION ||
    !Number.isInteger(value.revision)
  )
    throw new Error("Unsupported or malformed Station metadata.");
  if (
    !Array.isArray(value.stations) ||
    !Array.isArray(value.assignments) ||
    !Array.isArray(value.activeContext)
  )
    throw new Error("Station metadata collections are malformed.");
  const stationIds = new Set();
  const names = new Set();
  for (const station of value.stations) {
    if (
      !station ||
      typeof station.id !== "string" ||
      typeof station.name !== "string" ||
      typeof station.createdAt !== "string" ||
      typeof station.updatedAt !== "string"
    )
      throw new Error("A Station record is malformed.");
    const name = normalizeName(station.name);
    if (stationIds.has(station.id) || names.has(name))
      throw new Error("Station IDs and names must be unique.");
    stationIds.add(station.id);
    names.add(name);
  }
  for (const assignment of value.assignments) {
    if (
      !assignment ||
      typeof assignment.relativePath !== "string" ||
      !["file", "folder"].includes(assignment.kind) ||
      !Array.isArray(assignment.stationIds)
    )
      throw new Error("A Station assignment is malformed.");
    if (assignment.stationIds.some((id) => !stationIds.has(id)))
      throw new Error("An assignment references an unknown Station.");
  }
  for (const entry of value.activeContext)
    if (
      !entry ||
      typeof entry.relativePath !== "string" ||
      typeof entry.addedAt !== "string"
    )
      throw new Error("An Active Context entry is malformed.");
  return structuredClone(value);
}

async function load(rootPath) {
  const target = metadataPath(rootPath);
  try {
    const stats = await fs.stat(target);
    const current = cache.get(rootPath);
    if (current?.mtimeMs === stats.mtimeMs) return current;
    const loaded = {
      document: validateDocument(JSON.parse(await fs.readFile(target, "utf8"))),
      mtimeMs: stats.mtimeMs,
      error: null,
    };
    cache.set(rootPath, loaded);
    return loaded;
  } catch (error) {
    if (error?.code === "ENOENT") {
      const loaded = { document: emptyDocument(), mtimeMs: null, error: null };
      cache.set(rootPath, loaded);
      return loaded;
    }
    const current = cache.get(rootPath);
    if (current)
      return {
        ...current,
        error: `Station metadata was not reloaded: ${error.message}`,
      };
    return {
      document: emptyDocument(),
      mtimeMs: null,
      error: `Station metadata is unavailable: ${error.message}`,
    };
  }
}

async function save(rootPath, document) {
  const directory = path.dirname(metadataPath(rootPath));
  await fs.mkdir(directory, { recursive: true });
  const target = metadataPath(rootPath);
  const temporary = `${target}.${process.pid}.${Date.now()}.tmp`;
  document.revision += 1;
  await fs.writeFile(temporary, `${JSON.stringify(document, null, 2)}\n`, {
    encoding: "utf8",
    flag: "wx",
  });
  await fs.rename(temporary, target);
  const stats = await fs.stat(target);
  cache.set(rootPath, {
    document: structuredClone(document),
    mtimeMs: stats.mtimeMs,
    error: null,
  });
}

function mutate(rootPath, operation) {
  const next = (queues.get(rootPath) ?? Promise.resolve()).then(async () => {
    const loaded = await load(rootPath);
    if (loaded.error) throw new Error(loaded.error);
    const document = structuredClone(loaded.document);
    await operation(document);
    validateDocument(document);
    await save(rootPath, document);
    return getStationState(rootPath);
  });
  queues.set(
    rootPath,
    next.catch(() => {}),
  );
  return next;
}

function flatten(entries, output = new Map()) {
  for (const entry of entries) {
    output.set(entry.relativePath, entry);
    if (entry.children) flatten(entry.children, output);
  }
  return output;
}

async function getStationState(rootPath) {
  const loaded = await load(rootPath);
  const known = flatten((await scanVault(rootPath)).entries);
  const counts = new Map(
    loaded.document.stations.map((station) => [station.id, 0]),
  );
  const assignments = loaded.document.assignments.map((assignment) => {
    assignment.stationIds.forEach((id) =>
      counts.set(id, (counts.get(id) ?? 0) + 1),
    );
    return { ...assignment, missing: !known.has(assignment.relativePath) };
  });
  let contextEstimatedTokens = 0;
  const activeContext = [];
  for (const item of loaded.document.activeContext) {
    const entry = known.get(item.relativePath);
    const missing = !entry;
    let changed = false;
    if (entry?.kind === "file") {
      const content = await readSourceText(rootPath, entry.relativePath);
      contextEstimatedTokens += Math.ceil(content.length / 4);
      if (item.fingerprint) {
        const current = await fingerprint(rootPath, entry.relativePath, "file");
        changed = Boolean(
          item.fingerprint.sha256 && item.fingerprint.sha256 !== current.sha256,
        );
      }
    }
    activeContext.push({ ...item, missing, changed });
  }
  return {
    schemaVersion: SCHEMA_VERSION,
    revision: loaded.document.revision,
    stations: loaded.document.stations.map((station) => ({
      ...station,
      assignmentCount: counts.get(station.id) ?? 0,
    })),
    assignments,
    activeContext,
    contextEstimatedTokens,
    writable: !loaded.error,
    error: loaded.error,
  };
}

function createStation(rootPath, value) {
  return mutate(rootPath, (document) => {
    const name = normalizeName(value);
    if (document.stations.some((station) => station.name === name))
      throw new Error(`Station “${name}” already exists.`);
    const now = new Date().toISOString();
    document.stations.push({
      id: crypto.randomUUID(),
      name,
      createdAt: now,
      updatedAt: now,
    });
  });
}
function renameStation(rootPath, stationId, value) {
  return mutate(rootPath, (document) => {
    const station = document.stations.find((item) => item.id === stationId);
    if (!station) throw new Error("Station not found.");
    const name = normalizeName(value);
    if (
      document.stations.some(
        (item) => item.id !== stationId && item.name === name,
      )
    )
      throw new Error(`Station “${name}” already exists.`);
    station.name = name;
    station.updatedAt = new Date().toISOString();
  });
}
function deleteStation(rootPath, stationId) {
  return mutate(rootPath, (document) => {
    if (!document.stations.some((station) => station.id === stationId))
      throw new Error("Station not found.");
    document.stations = document.stations.filter(
      (station) => station.id !== stationId,
    );
    document.assignments = document.assignments
      .map((assignment) => ({
        ...assignment,
        stationIds: assignment.stationIds.filter((id) => id !== stationId),
      }))
      .filter((assignment) => assignment.stationIds.length);
  });
}

async function fingerprint(rootPath, relativePath, kind) {
  const absolute = resolveKnowledgeObject(rootPath, relativePath);
  const stats = await fs.stat(absolute);
  if (kind === "folder") return { size: 0, modifiedMs: stats.mtimeMs };
  return {
    size: stats.size,
    modifiedMs: stats.mtimeMs,
    sha256: crypto
      .createHash("sha256")
      .update(await fs.readFile(absolute))
      .digest("hex"),
  };
}

function setAssignments(rootPath, relativePaths, stationId, assigned) {
  return mutate(rootPath, async (document) => {
    if (!document.stations.some((station) => station.id === stationId))
      throw new Error("Station not found.");
    const known = flatten((await scanVault(rootPath)).entries);
    for (const relativePath of [...new Set(relativePaths)]) {
      const entry = known.get(relativePath);
      if (!entry)
        throw new Error(`Knowledge object not found: ${relativePath}`);
      let record = document.assignments.find(
        (item) => item.relativePath === relativePath,
      );
      if (assigned && !record) {
        record = {
          relativePath,
          kind: entry.kind,
          stationIds: [],
          fingerprint: await fingerprint(rootPath, relativePath, entry.kind),
        };
        document.assignments.push(record);
      }
      if (!record) continue;
      record.stationIds = assigned
        ? [...new Set([...record.stationIds, stationId])]
        : record.stationIds.filter((id) => id !== stationId);
      if (!record.stationIds.length)
        document.assignments = document.assignments.filter(
          (item) => item !== record,
        );
    }
  });
}

function collectFiles(entry, output = []) {
  if (entry.kind === "file" && SUPPORTED.has(entry.extension))
    output.push(entry.relativePath);
  for (const child of entry.children ?? []) collectFiles(child, output);
  return output;
}
async function previewBoxSelection(rootPath, relativePaths) {
  if (!Array.isArray(relativePaths) || relativePaths.length > 1000)
    throw new Error("Choose up to 1000 vault objects.");
  const known = flatten((await scanVault(rootPath)).entries),
    selected = new Set(),
    skipped = new Set();
  function visit(entry) {
    if (entry.kind === "folder") {
      for (const child of entry.children ?? []) visit(child);
    } else if (SUPPORTED.has(entry.extension)) selected.add(entry.relativePath);
    else skipped.add(entry.relativePath);
  }
  for (const relativePath of relativePaths) {
    resolveKnowledgeObject(rootPath, relativePath);
    const entry = known.get(relativePath);
    if (entry) visit(entry);
    else skipped.add(relativePath);
  }
  return { files: [...selected].sort(), skipped: [...skipped].sort() };
}
async function inspectBoxSources(rootPath, items) {
  const known = flatten((await scanVault(rootPath)).entries);
  return Promise.all(
    items.map(async (item) => {
      resolveKnowledgeObject(rootPath, item.relativePath);
      const entry = known.get(item.relativePath);
      try {
        if (!entry || entry.kind !== "file" || !SUPPORTED.has(entry.extension))
          throw new Error(
            "Missing or unsupported file. Remove or relink this membership.",
          );
        const source = await readableSource(
          rootPath,
          entry,
          new Map(),
          new Map(),
          null,
        );
        return {
          ...item,
          status: "ready",
          contentHash: source.contentHash,
          estimatedTokens: source.estimatedTokens,
          type: source.type,
        };
      } catch (error) {
        return { ...item, status: "unavailable", message: error.message };
      }
    }),
  );
}
async function previewContext(rootPath, relativePaths) {
  const known = flatten((await scanVault(rootPath)).entries);
  const files = [];
  for (const relativePath of [...new Set(relativePaths)]) {
    const entry = known.get(relativePath);
    if (!entry) throw new Error(`Knowledge object not found: ${relativePath}`);
    if (entry.kind === "folder") files.push(...collectFiles(entry));
    else if (SUPPORTED.has(entry.extension)) files.push(relativePath);
  }
  const unique = [...new Set(files)].sort();
  let estimatedTokens = 0;
  for (const relativePath of unique) {
    const entry = known.get(relativePath);
    const content = await readSourceText(rootPath, relativePath);
    estimatedTokens += Math.ceil(content.length / 4);
  }
  return { files: unique, estimatedTokens };
}
function addContext(rootPath, relativePaths) {
  return mutate(rootPath, async (document) => {
    const preview = await previewContext(rootPath, relativePaths);
    const existing = new Set(
      document.activeContext.map((entry) => entry.relativePath),
    );
    for (const relativePath of preview.files)
      if (!existing.has(relativePath))
        document.activeContext.push({
          relativePath,
          addedAt: new Date().toISOString(),
          fingerprint: await fingerprint(rootPath, relativePath, "file"),
        });
  });
}
function removeContext(rootPath, relativePaths) {
  return mutate(rootPath, (document) => {
    const paths = new Set(relativePaths);
    document.activeContext = document.activeContext.filter(
      (entry) => !paths.has(entry.relativePath),
    );
  });
}
function clearContext(rootPath) {
  return mutate(rootPath, (document) => {
    document.activeContext = [];
  });
}

// Explicit chat actions replace approval atomically; viewing history never calls these.
function approveChatSource(rootPath, source) {
  return mutate(rootPath, async (document) => {
    const sources = Array.isArray(source) ? source : [source];
    if (!sources.length || sources.length > 32)
      throw new Error("Approve 1 to 32 sources.");
    await scanVault(rootPath);
    const approved = [];
    for (const item of sources) {
      if (
        !item ||
        typeof item.relativePath !== "string" ||
        !/\.(?:md|markdown|csv|pdf|png|jpg|jpeg)$/i.test(item.relativePath)
      )
        throw new Error("Unsupported source.");
      const text = await readSourceText(rootPath, item.relativePath);
      if (
        !text.trim() ||
        crypto.createHash("sha256").update(text).digest("hex") !==
          item.contentHash
      )
        throw new BrainScopeError(
          BRAIN_ERROR_CODES.SOURCE_CHANGED,
          "A source version is unavailable. The old chat remains viewable.",
        );
      approved.push({
        relativePath: item.relativePath,
        addedAt: new Date().toISOString(),
        fingerprint: await fingerprint(rootPath, item.relativePath, "file"),
      });
    }
    document.activeContext = approved;
  });
}
function refreshChatSource(rootPath) {
  return mutate(rootPath, async (document) => {
    if (!document.activeContext.length || document.activeContext.length > 32)
      throw new Error("Approve 1 to 32 sources first.");
    for (const item of document.activeContext) {
      if (!/\.(?:md|markdown|csv|pdf|png|jpg|jpeg)$/i.test(item.relativePath))
        throw new Error("Unsupported source.");
      item.fingerprint = await fingerprint(rootPath, item.relativePath, "file");
    }
  });
}

async function buildContextPackage(rootPath) {
  const loaded = await load(rootPath);
  const known = flatten((await scanVault(rootPath)).entries);
  const assignmentMap = new Map(
    loaded.document.assignments.map((item) => [
      item.relativePath,
      item.stationIds,
    ]),
  );
  const stationMap = new Map(
    loaded.document.stations.map((item) => [item.id, item.name]),
  );
  const sources = [];
  for (const [order, item] of loaded.document.activeContext.entries()) {
    const entry = known.get(item.relativePath);
    if (!entry || entry.kind !== "file" || !SUPPORTED.has(entry.extension)) {
      sources.push({
        id: item.relativePath,
        relativePath: item.relativePath,
        order,
        missing: true,
        stations: [],
        content: null,
        contentHash: null,
        estimatedTokens: 0,
      });
      continue;
    }
    const content = await readSourceText(rootPath, entry.relativePath);
    sources.push({
      id: entry.relativePath,
      relativePath: entry.relativePath,
      name: entry.name,
      type: entry.extension.slice(1),
      order,
      missing: false,
      stations: (assignmentMap.get(entry.relativePath) ?? [])
        .map((id) => stationMap.get(id))
        .filter(Boolean),
      content,
      contentHash: crypto.createHash("sha256").update(content).digest("hex"),
      estimatedTokens: Math.ceil(content.length / 4),
    });
  }
  return {
    schemaVersion: SCHEMA_VERSION,
    vault: { rootPath },
    generatedAt: new Date().toISOString(),
    tokenEstimateMethod: "ceil(characters / 4)",
    estimatedTokens: sources.reduce(
      (sum, source) => sum + source.estimatedTokens,
      0,
    ),
    sources,
  };
}

async function readableSource(
  rootPath,
  entry,
  assignmentMap,
  stationMap,
  recordedContext,
) {
  const extension = entry.extension.toLowerCase();
  const content = await readSourceText(rootPath, entry.relativePath);
  const contentHash = crypto.createHash("sha256").update(content).digest("hex");
  const recorded = recordedContext?.get(entry.relativePath);
  return {
    id: entry.relativePath,
    relativePath: entry.relativePath,
    name: entry.name,
    type: extension.slice(1),
    stations: (assignmentMap.get(entry.relativePath) ?? [])
      .map((id) => stationMap.get(id))
      .filter(Boolean),
    estimatedTokens: Math.ceil(content.length / 4),
    contentHash,
    missing: false,
    changed: Boolean(
      recorded?.fingerprint?.sha256 &&
      recorded.fingerprint.sha256 !==
        ([".pdf", ".png", ".jpg", ".jpeg"].includes(extension)
          ? (await fingerprint(rootPath, entry.relativePath, "file")).sha256
          : contentHash),
    ),
  };
}

function assertPlainObject(value, label) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new BrainScopeError(
      BRAIN_ERROR_CODES.INVALID_REQUEST,
      `${label} must be an object.`,
    );
  }
}

function validateCapabilityId(value, field) {
  if (
    typeof value !== "string" ||
    !value.trim() ||
    value.length > 128 ||
    /[\u0000-\u001f\u007f]/u.test(value)
  ) {
    throw new BrainScopeError(
      BRAIN_ERROR_CODES.INVALID_REQUEST,
      `${field} must be a non-empty identifier of at most 128 characters.`,
      { field },
    );
  }
  return value;
}

function validateScopeRequest(rawInput) {
  assertPlainObject(rawInput, "Brain Scope request");
  const allowedFields = new Set(["ownerId", "activeStationIds", "matchMode"]);
  const unknownFields = Object.keys(rawInput).filter(
    (field) => !allowedFields.has(field),
  );
  if (unknownFields.length)
    throw new BrainScopeError(
      BRAIN_ERROR_CODES.INVALID_REQUEST,
      "Brain Scope request contains unsupported fields.",
      { fields: unknownFields },
    );
  const ownerId = validateCapabilityId(rawInput.ownerId, "ownerId");
  if (
    !Array.isArray(rawInput.activeStationIds) ||
    rawInput.activeStationIds.some((id) => typeof id !== "string" || !id)
  ) {
    throw new BrainScopeError(
      BRAIN_ERROR_CODES.INVALID_REQUEST,
      "activeStationIds must be an array of non-empty Station identifiers.",
      { field: "activeStationIds" },
    );
  }
  if (rawInput.matchMode !== "any" && rawInput.matchMode !== "all") {
    throw new BrainScopeError(
      BRAIN_ERROR_CODES.INVALID_REQUEST,
      'matchMode must be either "any" or "all".',
      { field: "matchMode" },
    );
  }
  return {
    ownerId,
    activeStationIds: [...new Set(rawInput.activeStationIds)].sort(),
    matchMode: rawInput.matchMode,
  };
}

function validateSourceReadRequest(rawInput) {
  assertPlainObject(rawInput, "Brain source read request");
  const allowedFields = new Set(["ownerId", "scopeId", "sourceId"]);
  const unknownFields = Object.keys(rawInput).filter(
    (field) => !allowedFields.has(field),
  );
  if (unknownFields.length)
    throw new BrainScopeError(
      BRAIN_ERROR_CODES.INVALID_REQUEST,
      "Brain source read request contains unsupported fields.",
      { fields: unknownFields },
    );
  return {
    ownerId: validateCapabilityId(rawInput.ownerId, "ownerId"),
    scopeId: validateCapabilityId(rawInput.scopeId, "scopeId"),
    sourceId: validateCapabilityId(rawInput.sourceId, "sourceId"),
  };
}

function pruneBrainScopes(now = Date.now()) {
  for (const [scopeId, scope] of brainScopes)
    if (scope.expiresAtMs <= now) brainScopes.delete(scopeId);
  while (brainScopes.size >= MAX_BRAIN_SCOPES)
    brainScopes.delete(brainScopes.keys().next().value);
}

function scopeManifestVersion(
  documentRevision,
  mode,
  matchMode,
  activeStationIds,
  sources,
) {
  const manifest = {
    schemaVersion: SCHEMA_VERSION,
    documentRevision,
    mode,
    matchMode,
    stationIds: activeStationIds,
    sources: sources.map((source) => ({
      id: source.id,
      hash: source.contentHash,
      missing: source.missing,
    })),
  };
  return crypto
    .createHash("sha256")
    .update(JSON.stringify(manifest))
    .digest("hex");
}

async function prepareBrainScope(
  rootPath,
  rawInput,
  approvedManifest = null,
  latest = false,
) {
  if (approvedManifest && !approvedManifest.length)
    throw new BrainScopeError(
      BRAIN_ERROR_CODES.SOURCE_CHANGED,
      "This Context Box is empty. Add supported files before starting a chat.",
    );
  if (latest) await scanVault(rootPath);
  const input = validateScopeRequest(rawInput);
  const { ownerId, matchMode } = input;
  const loaded = await load(rootPath);
  if (loaded.error)
    throw new BrainScopeError(
      BRAIN_ERROR_CODES.VAULT_UNAVAILABLE,
      loaded.error,
    );
  const snapshot = await getVaultSnapshot(rootPath);
  if (snapshot.status !== "ready")
    throw new BrainScopeError(
      BRAIN_ERROR_CODES.VAULT_UNAVAILABLE,
      snapshot.message || "Vault is unavailable.",
    );
  const known = flatten(snapshot.entries);
  const stationMap = new Map(
    loaded.document.stations.map((station) => [station.id, station.name]),
  );
  const unknownStationIds = input.activeStationIds.filter(
    (id) => !stationMap.has(id),
  );
  if (unknownStationIds.length) {
    throw new BrainScopeError(
      BRAIN_ERROR_CODES.INVALID_STATIONS,
      "Brain Scope references unknown or stale Stations. Refresh the Station state before continuing.",
      { stationIds: unknownStationIds },
    );
  }
  const activeStationIds = input.activeStationIds;
  const assignmentMap = new Map(
    loaded.document.assignments.map((item) => [
      item.relativePath,
      item.stationIds,
    ]),
  );
  const activeContext = approvedManifest
    ? approvedManifest.map((s) => ({ relativePath: s.relativePath }))
    : loaded.document.activeContext;
  const recordedContext = new Map(
    activeContext.map((item) => [item.relativePath, item]),
  );
  const selectedPaths = new Set();
  let mode;
  let reason;

  if (activeContext.length > 0) {
    mode = "active-context";
    reason = "Active Context overrides the current Planet view.";
    activeContext.forEach((item) => selectedPaths.add(item.relativePath));
  } else if (activeStationIds.length > 0) {
    mode = "station";
    reason = `${matchMode.toUpperCase()} match across ${activeStationIds.length} active Station${activeStationIds.length === 1 ? "" : "s"}.`;
    for (const assignment of loaded.document.assignments) {
      const count = activeStationIds.filter((id) =>
        assignment.stationIds.includes(id),
      ).length;
      if (
        (matchMode === "any" && count > 0) ||
        (matchMode === "all" && count === activeStationIds.length)
      )
        selectedPaths.add(assignment.relativePath);
    }
  } else {
    mode = "universe";
    reason = "No Station or Active Context narrows the universal vault.";
    for (const entry of known.values())
      if (entry.kind === "file" && SUPPORTED.has(entry.extension))
        selectedPaths.add(entry.relativePath);
  }

  const filePaths = new Set();
  const missing = [];
  for (const relativePath of selectedPaths) {
    const entry = known.get(relativePath);
    if (!entry) {
      missing.push(relativePath);
      continue;
    }
    if (entry.kind === "folder")
      collectFiles(entry).forEach((pathValue) => filePaths.add(pathValue));
    else if (SUPPORTED.has(entry.extension)) filePaths.add(relativePath);
  }
  const sources = [];
  for (const relativePath of [...filePaths].sort()) {
    const entry = known.get(relativePath);
    if (entry?.kind === "file" && SUPPORTED.has(entry.extension)) {
      try {
        sources.push(
          await readableSource(
            rootPath,
            entry,
            assignmentMap,
            stationMap,
            recordedContext,
          ),
        );
      } catch (error) {
        if (!approvedManifest) throw error;
        throw new BrainScopeError(
          BRAIN_ERROR_CODES.SOURCE_CHANGED,
          "A Context Box source is missing, unreadable or unsupported. Open the box to remove or relink it.",
        );
      }
    }
  }
  for (const relativePath of missing.sort())
    sources.push({
      id: relativePath,
      relativePath,
      name: path.basename(relativePath),
      type: "md",
      stations: [],
      estimatedTokens: 0,
      contentHash: null,
      missing: true,
      changed: false,
    });

  if (
    approvedManifest &&
    (sources.length !== approvedManifest.length ||
      sources.some((source) => {
        const expected = approvedManifest.find(
          (item) =>
            item.sourceId === source.id &&
            item.relativePath === source.relativePath,
        );
        return (
          !expected ||
          source.missing ||
          (!latest && expected.contentHash !== source.contentHash)
        );
      }))
  )
    throw new BrainScopeError(
      BRAIN_ERROR_CODES.SOURCE_CHANGED,
      "A Context Box source is missing, unreadable or unsupported. Open the box to remove or relink it.",
    );
  const createdAtMs = Date.now();
  const manifestVersion = scopeManifestVersion(
    loaded.document.revision,
    mode,
    matchMode,
    activeStationIds,
    sources,
  );
  const scope = {
    id: crypto.randomUUID(),
    ownerId,
    mode,
    reason,
    stationIds: activeStationIds,
    stationNames: activeStationIds.map((id) => stationMap.get(id)),
    manifestVersion,
    createdAt: new Date(createdAtMs).toISOString(),
    expiresAt: new Date(createdAtMs + BRAIN_SCOPE_TTL_MS).toISOString(),
    estimatedTokens: sources.reduce(
      (sum, source) => sum + source.estimatedTokens,
      0,
    ),
    sources,
  };
  const resolvedRoot = path.resolve(rootPath);
  pruneBrainScopes(createdAtMs);
  brainScopes.set(scope.id, {
    rootPath: resolvedRoot,
    ownerId,
    manifestVersion,
    expiresAtMs: createdAtMs + BRAIN_SCOPE_TTL_MS,
    allowed: new Map(
      sources
        .filter((source) => !source.missing)
        .map((source) => [source.id, source.contentHash]),
    ),
  });
  return scope;
}

async function readBrainSource(rootPath, rawInput) {
  const { ownerId, scopeId, sourceId } = validateSourceReadRequest(rawInput);
  const now = Date.now();
  const scope = brainScopes.get(scopeId);
  if (!scope || scope.rootPath !== path.resolve(rootPath)) {
    throw new BrainScopeError(
      BRAIN_ERROR_CODES.SCOPE_NOT_FOUND,
      "Brain Scope is unavailable. Prepare a new scope before reading sources.",
      { scopeId },
    );
  }
  if (scope.expiresAtMs <= now) {
    brainScopes.delete(scopeId);
    throw new BrainScopeError(
      BRAIN_ERROR_CODES.SCOPE_EXPIRED,
      "Brain Scope expired. Prepare a new scope before reading sources.",
      { scopeId },
    );
  }
  if (scope.ownerId !== ownerId) {
    throw new BrainScopeError(
      BRAIN_ERROR_CODES.OWNER_MISMATCH,
      "Brain Scope belongs to a different model run.",
      { scopeId },
    );
  }
  if (!scope.allowed.has(sourceId)) {
    throw new BrainScopeError(
      BRAIN_ERROR_CODES.SOURCE_NOT_AUTHORIZED,
      "Source is outside the prepared Brain Scope.",
      { scopeId, sourceId },
    );
  }
  const snapshot = await getVaultSnapshot(rootPath);
  const entry = flatten(snapshot.entries).get(sourceId);
  if (
    snapshot.status !== "ready" ||
    !entry ||
    entry.kind !== "file" ||
    !SUPPORTED.has(entry.extension)
  ) {
    throw new BrainScopeError(
      BRAIN_ERROR_CODES.SOURCE_UNAVAILABLE,
      "Brain source is missing or unsupported.",
      { scopeId, sourceId },
    );
  }
  const extension = entry.extension.toLowerCase();
  const content = await readSourceText(rootPath, sourceId);
  const contentHash = crypto.createHash("sha256").update(content).digest("hex");
  if (scope.allowed.get(sourceId) !== contentHash) {
    throw new BrainScopeError(
      BRAIN_ERROR_CODES.SOURCE_CHANGED,
      "Brain source changed after the scope was prepared. Prepare a fresh scope before reading it.",
      { scopeId, sourceId },
    );
  }
  return {
    scopeId,
    ownerId,
    manifestVersion: scope.manifestVersion,
    sourceId,
    relativePath: sourceId,
    type: extension.slice(1),
    content,
    contentHash,
    estimatedTokens: Math.ceil(content.length / 4),
  };
}

async function suggestReattachments(rootPath) {
  const loaded = await load(rootPath);
  const known = flatten((await scanVault(rootPath)).entries);
  const suggestions = [];
  for (const assignment of loaded.document.assignments.filter(
    (item) => !known.has(item.relativePath) && item.fingerprint?.sha256,
  )) {
    const candidates = [];
    for (const entry of known.values())
      if (entry.kind === "file") {
        const stats = await fs.stat(
          resolveKnowledgeObject(rootPath, entry.relativePath),
        );
        if (
          stats.size === assignment.fingerprint.size &&
          (await fingerprint(rootPath, entry.relativePath, "file")).sha256 ===
            assignment.fingerprint.sha256
        )
          candidates.push(entry.relativePath);
      }
    suggestions.push({ relativePath: assignment.relativePath, candidates });
  }
  return suggestions;
}
function reattach(rootPath, fromPath, toPath) {
  return mutate(rootPath, async (document) => {
    const record = document.assignments.find(
      (item) => item.relativePath === fromPath,
    );
    if (!record) throw new Error("Orphaned assignment not found.");
    const stats = await fs.stat(resolveKnowledgeObject(rootPath, toPath));
    record.relativePath = toPath;
    record.kind = stats.isDirectory() ? "folder" : "file";
    record.fingerprint = await fingerprint(rootPath, toPath, record.kind);
    document.activeContext = document.activeContext.map((entry) =>
      entry.relativePath === fromPath
        ? { ...entry, relativePath: toPath }
        : entry,
    );
  });
}

module.exports = {
  previewBoxSelection,
  inspectBoxSources,
  addContext,
  approveChatSource,
  refreshChatSource,
  buildContextPackage,
  clearContext,
  createStation,
  deleteStation,
  getStationState,
  normalizeName,
  prepareBrainScope,
  previewContext,
  readBrainSource,
  reattach,
  removeContext,
  renameStation,
  setAssignments,
  suggestReattachments,
};
