const path = require("node:path");
const store = require("./worldview-store.cjs");
const { listVaultMetadata, statVaultSource } = require("./vault-service.cjs");

/** Registers narrow main-frame WorldView operations against the existing active Vault; no arbitrary paths are exposed. */
function registerWorldViewIpc(trustedIpc, getRoot, shell) {
  const operations = {
    /** Loads saved indexes and current stat metadata. */
    load: async (root) => store.loadWorldView(root),
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
