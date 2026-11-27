const fs = require("node:fs/promises");
const path = require("node:path");
const {
  EnginePackageRegistry,
} = require("../../electron/engines/registry/registry.cjs");
const { sealPackage } = require("../../electron/engines/registry/package.cjs");
/** Gives disposable Agent tests a real digest/link. Their existing provider mocks own execution. */
async function linkMockYahoo(root, entityId) {
  const registry = new EnginePackageRegistry(root),
    engineId = "yahoo-finance";
  if (!(await registry.read()).packages[engineId]) {
    const source = await fs.mkdtemp(
      path.join(path.dirname(root), "mock-yahoo-"),
    );
    await fs.copyFile(
      path.join(
        __dirname,
        "../../packages/yahoo-finance/manifest.template.json",
      ),
      path.join(source, "engine_manifest.json"),
    );
    await fs.writeFile(
      path.join(source, "index.cjs"),
      'exports.execute=()=>{throw Error("Fixture requires a provider mock")};',
    );
    await sealPackage(source);
    const { digest } = await registry.install(source);
    await registry.trust(engineId, digest);
  }
  await registry.link({
    entityId,
    engineId,
    operations: ["price", "financials", "earnings", "history"],
    policy: "automatic",
    allowNetwork: true,
  });
}
module.exports = { linkMockYahoo };
