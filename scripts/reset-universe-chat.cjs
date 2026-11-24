const path = require("node:path");
const { resetBackend } = require("../electron/ai/backend-reset.cjs");

/** Requires explicit existing profile/Universe paths. Defaults to a content-free preview; --apply clears history and non-NVIDIA configuration. */
async function main() {
  const [profile, vault, mode] = process.argv.slice(2);
  if (!profile || !vault || (mode && mode !== "--apply"))
    throw Error(
      "Usage: node scripts/reset-universe-chat.cjs <profile> <Universe> [--apply]",
    );
  const result = await resetBackend({
    profile: path.resolve(profile),
    vault: path.resolve(vault),
    apply: mode === "--apply",
  });
  process.stdout.write(JSON.stringify(result, null, 2) + "\n");
}
main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
