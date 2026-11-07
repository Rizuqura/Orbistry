// Deterministic child process for the external-engine trust-boundary tests.
const fs = require("node:fs");
const path = require("node:path");
const root = process.argv[2];
const mode = JSON.parse(
  fs.readFileSync(path.join(root, "fixture-mode.json"), "utf8"),
);
let input = "";
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  const args = JSON.parse(input);
  if (mode.kind === "timeout") return setTimeout(() => {}, 60000);
  if (mode.kind === "stdout") return process.stdout.write("x".repeat(8192));
  if (mode.kind === "stderr") return process.stderr.write("x".repeat(8192));
  if (mode.kind === "malformed")
    return process.stdout.write('{"status":"READY"}\n{"status":"READY"}');
  if (mode.kind === "array") return process.stdout.write("[]");
  if (mode.kind === "badshape") return process.stdout.write('{"status":"OK"}');
  const payload = mode.payload ?? {
    status: args.month === "2026-11" ? "SCHEDULED" : "PARTIAL",
    issue_month: args.month ?? "2026-10",
    ...(!(args.month === "2026-11")
      ? {
          primary_output: {
            path: path.join(root, "outputs", "2026-10", "chronoz_report.pdf"),
            media_type: "application/pdf",
            sha256: mode.sha256,
          },
        }
      : {}),
  };
  process.stdout.write(
    JSON.stringify({ ...payload, fixture_arguments: args }) + "\n",
  );
  process.exitCode =
    mode.exitCode ??
    (payload.status === "PARTIAL"
      ? 2
      : ["FAILED", "BLOCKED"].includes(payload.status)
        ? 1
        : 0);
});
