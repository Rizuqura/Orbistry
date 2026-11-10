const test = require("node:test"),
  assert = require("node:assert/strict"),
  fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
const { initializeVault, saveVault } = require("./vault-settings.cjs");
test("Orbistry preserves the existing default QTerminal vault", async (t) => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-vault-"));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const docs = path.join(root, "Documents");
  const legacy = path.join(docs, "QTerminal Vault");
  await fs.mkdir(legacy, { recursive: true });
  assert.equal(await initializeVault(path.join(root, "profile"), docs), legacy);
});
test("fresh vault is empty and user-owned; explicit folder selection persists without importing developer data", async (t) => {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-vault-settings-"),
  );
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const profile = path.join(root, "profile"),
    docs = path.join(root, "Documents");
  const first = await initializeVault(profile, docs);
  assert.equal(first, path.join(docs, "Universe"));
  assert.deepEqual(await fs.readdir(first), []);
  const selected = path.join(root, "selected");
  await saveVault(profile, selected);
  assert.equal(await initializeVault(profile, docs), selected);
  assert.equal(await initializeVault(profile, docs, root), root);
  assert.equal(await initializeVault(profile, docs), selected);
});
