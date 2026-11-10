const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");

async function main() {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-empty-agents-"),
  );
  const data = path.join(root, "profile");
  let app;
  const errors = [];
  const launch = async () => {
    const env = {
      ...process.env,
      ORBISTRY_VAULT_PATH: root,
      ORBISTRY_SMOKE_DATA: data,
    };
    delete env.ELECTRON_START_URL;
    delete env.ELECTRON_RUN_AS_NODE;
    app = await electron.launch({
      args: [
        path.resolve("scripts/electron-online-smoke-main.cjs"),
        "--hidden",
      ],
      env,
    });
    const page = await app.firstWindow();
    page.on("pageerror", (error) => errors.push(error.message));
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    return page;
  };
  try {
    await fs.mkdir(data);
    await fs.writeFile(
      path.join(data, "agents.json"),
      JSON.stringify({
        schemaVersion: 1,
        includeDefaultAgents: false,
        agents: {},
      }),
    );
    let page = await launch();
    await page
      .getByRole("heading", { name: "Build your first agent" })
      .waitFor();
    assert.equal(await page.locator(".agent-bot-row").count(), 0);
    assert.deepEqual(
      await page.evaluate(() => window.orbistryDesktop.ai.listAgents()),
      [],
    );
    await app.close();
    page = await launch();
    await page
      .getByRole("heading", { name: "Build your first agent" })
      .waitFor();
    await page.locator(".agent-add-button").click();
    const dialog = page.getByRole("dialog", { name: "Add agent", exact: true });
    await dialog
      .getByRole("textbox", { name: "Agent name", exact: true })
      .fill("My agent");
    await dialog
      .getByRole("button", { name: "Create agent", exact: true })
      .click();
    await dialog.waitFor({ state: "hidden" });
    await page
      .getByRole("complementary", { name: "My agent", exact: true })
      .waitFor();
    assert.equal(await page.locator(".agent-bot-row").count(), 1);
    assert.deepEqual(
      (await page.evaluate(() => window.orbistryDesktop.ai.listAgents())).map(
        (agent) => agent.displayName,
      ),
      ["My agent"],
    );
    assert.deepEqual(errors, []);
    console.log(
      "PASS: empty agents survive restart; first custom agent is created and selected without seeded contacts or startup errors.",
    );
  } finally {
    if (app) await app.close().catch(() => {});
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
