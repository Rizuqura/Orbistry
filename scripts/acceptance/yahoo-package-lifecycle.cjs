const fs = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const assert = require("node:assert/strict");
const { build } = require("../../packages/yahoo-finance/build.cjs");
const {
  saveWorldViewChip,
} = require("../../electron/domains/entity/worldview-store.cjs");
const {
  saveKnowledgeIndex,
  readKnowledgeIndex,
} = require("../../electron/domains/knowledge/knowledge-store.cjs");
const { getIndexedPrice } = require("../../electron/daily-price-service.cjs");
const {
  getIndexedFinance,
  getAuthorizedHistory,
} = require("../../electron/financial-service.cjs");
const {
  EnginePackageRegistry,
} = require("../../electron/engines/registry/registry.cjs");
/** Bundles the real five adapters against a synthetic upstream client, then installs their sealed artifact. */
async function main() {
  const temp = await fs.mkdtemp(path.join(os.tmpdir(), "orb-yahoo-"));
  try {
    const root = path.join(temp, "Universe"),
      source = path.join(temp, "package"),
      id = "listing";
    await fs.mkdir(root);
    await build(source, [
      {
        name: "fixture-client",
        setup(b) {
          b.onResolve({ filter: /^\.\/client\.cjs$/ }, () => ({
            path: path.resolve(__dirname, "../fixtures/yahoo-client.cjs"),
          }));
        },
      },
    ]);
    await saveWorldViewChip(root, {
      id,
      name: "Listing",
      tags: [],
      icon: "",
      color: "#263f4b",
      position: { x: 0, y: 0 },
    });
    const declaration =
      '# Market\nsource: yahooPrice("TSM")\nsource: yahooFinancials("TSM")\nsource: yahooEarnings("TSM")';
    const { menus } = await saveKnowledgeIndex(
        root,
        id,
        declaration,
        null,
        true,
      ),
      menu = menus[0];
    const registry = new EnginePackageRegistry(root, {
      authorize: async (r) => r.entityId === id,
    });
    const price = () =>
      getIndexedPrice(root, id, menu.id, menu.prices[0].id, true);
    const engineId = "yahoo-finance";
    async function activate() {
      const { digest } = await registry.install(source);
      await assert.rejects(price());
      await registry.trust(engineId, digest);
      await assert.rejects(price());
      await registry.link({
        entityId: id,
        engineId,
        operations: ["price", "quote", "history", "financials", "earnings"],
        policy: "automatic",
        allowNetwork: true,
      });
      return digest;
    }
    const identity = require("../../electron/engines/backend-identity/identity-compiler.cjs");
    async function verifyAll() {
      await identity.generate(root, id);
      const snapshot = await identity.status(root, id);
      assert.equal(snapshot.status, "fresh");
      assert.deepEqual(
        snapshot.manifest.packageSources.map((source) => source.status),
        ["available", "available", "available"],
      );
      const quote = await registry.execute({
        entityId: id,
        engineId,
        operation: "quote",
        input: { symbol: "TSM" },
      });
      assert.equal(quote.data.price, 123.45);
      assert.equal(
        (await price()).snapshot.marketTime,
        "2025-02-03T16:00:00.000Z",
      );
      assert.equal(
        (
          await getAuthorizedHistory(root, {
            id,
            menuId: menu.id,
            priceId: menu.prices[0].id,
            range: "1M",
            force: true,
          })
        ).snapshot.observations.length,
        1,
      );
      for (const ref of menu.finance) {
        const { snapshot } = await getIndexedFinance(
          root,
          id,
          menu.id,
          ref.id,
          true,
        );
        if (ref.kind === "earnings")
          assert.equal(snapshot.history[0].actual, 2);
        else
          for (const series of Object.values(snapshot.statements))
            assert.equal(series.annual[0].values.totalRevenue, 500);
      }
      return quote.receipt;
    }
    const digest = await activate();
    const originalReceipt = await verifyAll();
    await registry.uninstall(engineId, digest);
    await assert.rejects(price());
    assert.equal((await identity.status(root, id)).status, "stale");
    await identity.generate(root, id);
    assert.ok(
      (await identity.status(root, id)).manifest.packageSources.every(
        (source) => source.status === "package_missing",
      ),
    );
    assert.equal((await readKnowledgeIndex(root, id)).applied, declaration);
    assert.equal(
      (await registry.readResult(id, originalReceipt.executionId)).origin,
      "historical",
    );
    await activate();
    const restored = await verifyAll();
    assert.notEqual(restored.executionId, originalReceipt.executionId);
    assert.equal((await readKnowledgeIndex(root, id)).menus.length, 1);
    console.log(
      "All five Yahoo operations, original declarations, receipt, removal and reviewed restoration passed with a synthetic upstream.",
    );
  } finally {
    await fs.rm(temp, { recursive: true, force: true });
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
