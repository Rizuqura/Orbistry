const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const { selectUserDataPath } = require("./user-data-path.cjs");
const root = path.resolve("test-app-data");
const current = path.join(root, "QTerminal"),
  legacy = path.join(root, "wonnyy-amadeus");
test("renaming the app reuses legacy credentials/settings without moving files", () => {
  const exists = (target) =>
    target === path.join(legacy, "provider-credentials.json");
  assert.equal(selectUserDataPath(root, current, exists), legacy);
});
test("Orbistry reuses populated QTerminal profiles and prefers its own populated profile", () => {
  const orbistry = path.join(root, "Orbistry");
  const oldExists = (target) => target === path.join(current, "agents.json");
  assert.equal(selectUserDataPath(root, orbistry, oldExists), current);
  assert.equal(
    selectUserDataPath(
      root,
      orbistry,
      (target) =>
        oldExists(target) || target === path.join(orbistry, "agents.json"),
    ),
    orbistry,
  );
});
test("existing QTerminal settings take precedence over legacy state", () => {
  const exists = (target) =>
    [current, legacy].some(
      (directory) => target === path.join(directory, "model-settings.json"),
    );
  assert.equal(selectUserDataPath(root, current, exists), current);
});
test("explicit and isolated user-data paths are preserved", () => {
  assert.equal(
    selectUserDataPath(root, current, () => true, true),
    current,
  );
  const isolated = path.join(root, "isolated", "app-data");
  assert.equal(
    selectUserDataPath(root, isolated, () => true),
    isolated,
  );
  assert.equal(
    selectUserDataPath(root, current, () => false),
    current,
  );
});
test("Victoria display name preserves QTerminal credentials and prefers populated current storage", () => {
  const victoria = path.join(root, "QTerminal 1.0.0 Victoria");
  const exists = (target) =>
    target === path.join(current, "provider-credentials.json");
  assert.equal(selectUserDataPath(root, victoria, exists), current);
  assert.equal(
    selectUserDataPath(
      root,
      victoria,
      (target) =>
        exists(target) || target === path.join(victoria, "model-settings.json"),
    ),
    victoria,
  );
  assert.equal(selectUserDataPath(root, victoria, exists, true), victoria);
  assert.equal(
    selectUserDataPath(
      root,
      victoria,
      (target) => target === path.join(current, "agents.json"),
    ),
    current,
  );
});

test("ORB Terminal preserves the current Orbistry profile before older profiles", () => {
  const renamed = path.join(root, "ORB Terminal");
  const orbistry = path.join(root, "Orbistry");
  const exists = (file) =>
    [orbistry, current].some(
      (directory) => file === path.join(directory, "provider-credentials.json"),
    );
  assert.equal(selectUserDataPath(root, renamed, exists), orbistry);
  assert.equal(
    selectUserDataPath(
      root,
      renamed,
      (file) => exists(file) || file === path.join(renamed, "agents.json"),
    ),
    renamed,
  );
  assert.equal(selectUserDataPath(root, renamed, exists, true), renamed);
});
