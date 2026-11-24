const path = require("node:path");
const store = require("../../domains/entity/worldview-store.cjs");
const knowledge = require("../../domains/knowledge/knowledge-store.cjs");
const connectors = require("../../domains/entity/connector-store.cjs");
const tagSearch = require("../../domains/indexing/tag-association-service.cjs");
const { imageParserService } = require("../../image-parser-service.cjs");
const {
  listVaultMetadata,
  statVaultSource,
} = require("../../domains/universe/vault-service.cjs");

/** Registers narrow main-frame WorldView operations against the active Vault. Optional clipboard access copies only regenerated authorized Excel previews, never caller-supplied text. */
function registerWorldViewIpc(trustedIpc, getRoot, shell, clipboard) {
  const operations = {
    /** Copies only freshly authorized inspector data; arbitrary caller-provided clipboard text is not accepted. */
    "identity-copy": async (root, input) => {
      if (!clipboard?.writeText)
        throw new Error("Desktop clipboard is unavailable.");
      const { section, ...request } = input;
      const operation = Object.hasOwn(
        { identity: 1, knowledge: 1, capabilities: 1, log: 1 },
        section,
      )
        ? {
            identity: "status",
            knowledge: "chunks",
            capabilities: "capabilities",
            log: "status",
          }[section]
        : null;
      if (!operation) throw new Error("Choose an identity inspector section.");
      const result =
        await require("../../domains/knowledge/backend-identity-service.cjs").inspect(
          root,
          operation,
          request,
        );
      const value =
        section === "log"
          ? {
              status: result.status,
              compiledAt: result.manifest?.compiledAt ?? null,
              lastAttempt: result.lastAttempt,
              entries: result.manifest?.log ?? [],
            }
          : result;
      clipboard.writeText(JSON.stringify(value, null, 2));
      return { copied: true };
    },
    /** Reads a compact compiled identity and current source freshness for an existing entity. */
    "identity-status": (root, input) =>
      require("../../domains/knowledge/backend-identity-service.cjs").inspect(
        root,
        "status",
        input,
      ),
    /** Manually compiles the applied entity index without executing declared tools. */
    "identity-generate": (root, input) =>
      require("../../domains/knowledge/backend-identity-service.cjs").inspect(
        root,
        "generate",
        input,
      ),
    /** Retrieves one bounded, authorized knowledge page for the read-only inspector. */
    "identity-chunks": (root, input) =>
      require("../../domains/knowledge/backend-identity-service.cjs").inspect(
        root,
        "chunks",
        input,
      ),
    /** Discovers contracts without making provider calls or executing them. */
    "identity-capabilities": (root, input) =>
      require("../../domains/knowledge/backend-identity-service.cjs").inspect(
        root,
        "capabilities",
        input,
      ),
    /** Retrieves range-specific history only for an authorized applied price source or saved entity ticker. */
    "price-history": (root, input) =>
      require("../../financial-service.cjs").getAuthorizedHistory(root, input),
    /** Retrieves an authorized financial dataset from the applied Knowledge Card index. */
    "finance-index": (root, input) =>
      require("../../financial-service.cjs").getIndexedFinance(
        root,
        input.id,
        input.menuId,
        input.financeId,
        input.force ?? false,
      ),
    /** Retrieves only the Yahoo source identified by an applied entity/menu/declaration triple. */
    "price-index": (root, input) =>
      require("../../daily-price-service.cjs").getIndexedPrice(
        root,
        input.id,
        input.menuId,
        input.priceId,
        input.force ?? false,
      ),
    /** Saves a revision-checked Yahoo symbol in this entity's existing Knowledge Card metadata. */
    "price-symbol": (root, input) =>
      knowledge.savePriceSymbol(root, input.id, input.symbol, input.revision),
    /** Reads cached or fresh Yahoo prices for the currently saved entity ticker. */
    "price-get": (root, input) =>
      require("../../daily-price-service.cjs").getEntityPrice(
        root,
        input.id,
        input.force ?? false,
      ),
    /** Copies a freshly authorized bounded worksheet preview through Electron without granting browser clipboard permissions. */
    "knowledge-excel-copy": async (root, input) => {
      if (!clipboard) throw new Error("Desktop clipboard is unavailable.");
      const preview =
        await require("../../excel-service.cjs").excelService.request(
          root,
          input.id,
          input.sourceId,
          {
            sheetIndex: input.sheetIndex,
            rowOffset: input.rowOffset,
            columnOffset: input.columnOffset,
            sourceHash: input.sourceHash,
          },
        );
      clipboard.writeText(preview.markdown);
      return { copied: true };
    },
    /** Pages or exports an authorized Excel source through the bounded native Engine. */
    "knowledge-excel": (root, input) =>
      require("../../excel-service.cjs").excelService.request(
        root,
        input.id,
        input.sourceId,
        {
          sheetIndex: input.sheetIndex,
          rowOffset: input.rowOffset,
          columnOffset: input.columnOffset,
          format: input.format,
          sourceHash: input.sourceHash,
        },
      ),
    /** Saves human-authored source notes within the existing entity-scoped Knowledge Card companion. */
    "knowledge-note": (root, input) =>
      knowledge.saveKnowledgeNote(
        root,
        input.id,
        input.sourceId,
        input.note,
        input.revision,
      ),
    /** Loads an authorized, bounded original slide independently of image parsing. */
    "image-preview": (root, input) =>
      imageParserService.preview(
        root,
        input.id,
        input.carouselId,
        input.sourceId,
      ),
    /** Retrieves valid structured cached knowledge without processing or UI dependencies. */
    "image-knowledge": (root, input) =>
      imageParserService.getKnowledge(
        root,
        input.id,
        input.carouselId,
        input.sourceId,
      ),
    /** Starts explicitly requested background processing for this applied entity carousel. */
    "image-parse": (root, input) =>
      imageParserService.start(root, input.id, input.carouselId, {
        force: input.force,
      }),
    /** Reports the entity group's background processing state. */
    "image-status": (root, input) =>
      imageParserService.status(root, input.id, input.carouselId),
    /** Cancels the authorized group's current local processing job. */
    "image-cancel": (root, input) =>
      imageParserService.cancel(root, input.id, input.carouselId),
    /** Searches assigned persisted tags and direct entity names in this Universe's current World. */
    "tag-search": (root, input) => tagSearch.searchWorldTags(root, input.query),
    /** Initializes or updates the derived index without changing user metadata. */
    "tag-index": (root) => tagSearch.getTagIndex(root),
    /** Retrieves explainable frequency statistics within the current World. */
    "tag-associations": (root, input) =>
      tagSearch.getWorldTagStatistics(root, input.query),
    /** Rebuilds disposable engine cache data on explicit request. */
    "tag-rebuild": (root) => tagSearch.rebuildWorldTagCache(root),
    /** Creates one independent relationship with unrestricted geometric endpoints. */
    "connector-create": (root, input) =>
      connectors.createConnector(root, input.connector),
    /** Updates semantic fields with the editor's expected prior connection snapshot. */
    "connector-update": (root, input) =>
      connectors.updateConnector(
        root,
        input.connector,
        input.previousConnector,
      ),
    /** Removes a confirmed relationship by its stable identity. */
    "connector-delete": (root, input) =>
      connectors.deleteConnector(root, input.id),
    /** Loads one entity's manual declaration draft and applied menus. */
    "knowledge-load": (root, input) =>
      knowledge.readKnowledgeIndex(root, input.id),
    /** Saves explicit editor text without replacing the applied index. */
    "knowledge-draft": (root, input) =>
      knowledge.saveKnowledgeIndex(
        root,
        input.id,
        input.draft,
        input.revision,
        false,
      ),
    /** Validates syntax and live assignments without reading file contents. */
    "knowledge-validate": (root, input) =>
      knowledge.validateKnowledgeIndex(root, input.id, input.draft),
    /** Atomically applies all declarations only after complete validation. */
    "knowledge-apply": (root, input) =>
      knowledge.saveKnowledgeIndex(
        root,
        input.id,
        input.draft,
        input.revision,
        true,
      ),
    /** Reads an authorized original strictly for presentation. */
    "knowledge-preview": (root, input) =>
      knowledge.previewKnowledgeSource(root, input.id, input.sourceId),
    /** Reveals a currently assigned applied reference through the existing shell. */
    "knowledge-reveal": async (root, input) => {
      const source = await knowledge.resolveKnowledgeSource(
        root,
        input.id,
        input.sourceId,
      );
      const resolved = await statVaultSource(root, source.sourceRef);
      shell.showItemInFolder(resolved.absolutePath);
    },
    /** Loads saved indexes and current stat metadata. */
    load: async (root) => {
      const world = await store.loadWorldView(root);
      const relationships = await connectors.loadConnectors(root);
      return {
        ...world,
        connectors: relationships.connectors,
        issues: [...world.issues, ...relationships.issues],
      };
    },
    /** Saves chip fields while retaining server-owned source associations. */
    save: async (root, input) => store.saveWorldViewChip(root, input.chip),
    /** Deletes only an entity index. */
    delete: async (root, input) => store.deleteWorldViewChip(root, input.id),
    /** Lists Universe filenames and byte metadata without reading contents. */
    list: async (root, input) => listVaultMetadata(root, input),
    /** Registers confirmed file references. */
    assign: async (root, input) =>
      store.assignWorldViewFiles(root, input.id, input.sourceRefs),
    /** Removes an entity-source association. */
    unassign: async (root, input) =>
      store.unassignWorldViewFile(root, input.id, input.sourceId),
    /** Reveals the original file through Electron's existing OS shell without parsing it. */
    reveal: async (root, input) => {
      const source = await statVaultSource(root, input.sourceRef);
      if (!source.stats.isFile())
        throw new Error("Choose an original Universe file.");
      shell.showItemInFolder(source.absolutePath);
    },
  };
  for (const [name, operation] of Object.entries(operations)) {
    /** Validates the captured Universe root and returns explicit errors across the desktop bridge. */
    trustedIpc.handle(
      `worldview:${name}`,
      async function worldViewRequest(_, input) {
        try {
          const root = getRoot();
          if (
            !input ||
            typeof input.vaultPath !== "string" ||
            path.resolve(input.vaultPath) !== path.resolve(root)
          )
            throw new Error(
              "Universe changed. Reopen WorldView before continuing.",
            );
          return { ok: true, value: await operation(root, input) };
        } catch (error) {
          return { ok: false, error: error.message };
        }
      },
    );
  }
}
module.exports = { registerWorldViewIpc };
