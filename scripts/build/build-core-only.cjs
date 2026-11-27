const fs = require("node:fs/promises");
const path = require("node:path");
const { build, Platform, Arch } = require("electron-builder");
const desktop = require("../../package.json").build;
// A fresh output keeps the normal desktop artifact available for comparison.
async function buildCoreOnly() {
  const parent = path.resolve(".cache", "core-only");
  await fs.mkdir(parent, { recursive: true });
  const output = await fs.mkdtemp(path.join(parent, "desktop-"));
  const optional = [
    "packages/**",
    "electron/engines/daily-price/**",
    "electron/engines/yahoo-financials/**",
    "electron/engines/excel/**",
    "electron/engines/image-parser/**",
    "electron/ai/chronoz-adapter.cjs",
    ...["yahoo-finance2", "unzipper", "ssf", "sax"].map(
      (name) => "**/node_modules/" + name + "/**",
    ),
  ];
  await build({
    targets: Platform.WINDOWS.createTarget("dir", Arch.x64),
    config: {
      extends: null,
      ...desktop,
      directories: { output },
      electronDist: path.resolve("node_modules/electron/dist"),
      npmRebuild: false,
      files: [...desktop.files, ...optional.map((pattern) => "!" + pattern)],
      win: { ...desktop.win, signAndEditExecutable: false },
    },
  });
  console.log(path.join(output, "win-unpacked", desktop.productName + ".exe"));
}
buildCoreOnly().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
