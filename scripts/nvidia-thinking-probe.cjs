// Explicitly invoked real-provider comparison, capped at two 256-output calls.
const { _electron: electron } = require("playwright");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
async function main() {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-nvidia-thinking-"),
  );
  let app;
  try {
    const env = {
      ...process.env,
      QT_NVIDIA_PROBE_PROFILE: path.join(root, "profile"),
      QT_NVIDIA_TEST_MODEL:
        process.argv.find((a) => a.startsWith("--model="))?.slice(8) ??
        process.env.QT_NVIDIA_TEST_MODEL,
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    app = await electron.launch({
      args: [
        path.resolve("scripts/nvidia-thinking-probe-main.cjs"),
        "--hidden",
      ],
      env,
      timeout: 30000,
    });
    const results = [];
    for (const disabled of [false, true]) {
      const result = await app.evaluate(
        async (_, value) => globalThis.nvidiaProbe.run(value),
        disabled,
      );
      results.push(result);
      console.log(JSON.stringify(result));
    }
    await fs.mkdir("test-results/nvidia-thinking", { recursive: true });
    await fs.writeFile(
      "test-results/nvidia-thinking/raw-comparison.json",
      JSON.stringify(
        { capturedAt: new Date().toISOString(), results },
        null,
        2,
      ),
    );
  } finally {
    await app?.close();
    if (!path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep))
      throw Error("Unsafe cleanup");
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch(() => {
  console.error(
    "NVIDIA diagnostic failed; no raw credential/provider error was logged.",
  );
  process.exitCode = 1;
});
