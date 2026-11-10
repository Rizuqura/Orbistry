const { spawn } = require("child_process");
const path = require("path");
const electronBinary = require("electron");

// Some host environments set this for Electron tooling. Orbistry must remove it
// before launch, otherwise Electron runs its main process as plain Node.js.
const environment = { ...process.env };
delete environment.ELECTRON_RUN_AS_NODE;

const child = spawn(electronBinary, ["."], {
  cwd: path.resolve(__dirname, ".."),
  env: environment,
  stdio: "inherit",
});

child.on("exit", (code) => process.exit(code ?? 0));
child.on("error", (error) => {
  console.error("Could not launch the Orbistry desktop process:", error.message);
  process.exit(1);
});
