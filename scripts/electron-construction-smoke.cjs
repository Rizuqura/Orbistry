const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
async function main() {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-construction-"),
  );
  const vault = path.join(root, "vault"),
    data = path.join(root, "app-data");
  let app, page;
  const errors = [];
  const launch = async () => {
    const env = {
      ...process.env,
      ORBISTRY_SMOKE_DATA: data,
      ORBISTRY_VAULT_PATH: vault,
    };
    delete env.ELECTRON_START_URL;
    delete env.ELECTRON_RUN_AS_NODE;
    app = await electron.launch({
      args: [
        path.resolve("scripts/electron-online-smoke-main.cjs"),
        "--hidden",
      ],
      env,
      timeout: 30000,
    });
    page = await app.firstWindow();
    page.setDefaultTimeout(20000);
    page.on("pageerror", (e) => errors.push(e.message));
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
  };
  const close = async () => {
    await page
      .getByRole("button", { name: "Close agent settings", exact: true })
      .click();
    await page
      .locator(".agent-construction-dialog")
      .waitFor({ state: "hidden" });
  };
  const open = async (id = "wonnyy-agent") => {
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    const profile = await get(id);
    await page
      .getByRole("button", {
        name: profile.displayName + " settings",
        exact: true,
      })
      .click();
    await page
      .getByRole("textbox", { name: "Agent name", exact: true })
      .waitFor();
    assert.equal(
      await page
        .getByRole("combobox", { name: "Construction agent", exact: true })
        .count(),
      0,
    );
  };
  const get = (id = "wonnyy-agent") =>
    page.evaluate((id) => window.orbistryDesktop.ai.getAgent(id), id);
  try {
    await fs.mkdir(vault);
    await fs.mkdir(data);
    await fs.writeFile(path.join(vault, "a.md"), "ALPHA allocation is 25%.");
    await launch();
    await open();
    const studio = page.getByRole("region", {
      name: "Agent Construction Studio",
    });
    assert.equal(await studio.locator(".studio-node").count(), 4);
    await fs.mkdir("test-results", { recursive: true });
    for (const width of [1440, 1024, 680]) {
      await page.setViewportSize({ width, height: 1200 });
      const layout = await studio
        .locator(".studio-workbench")
        .evaluate((el) => ({ width: el.clientWidth, scroll: el.scrollWidth }));
      assert.ok(
        layout.scroll <= layout.width + 1,
        JSON.stringify({ width, layout }),
      );
      const dimensions = await studio
        .locator(".studio-bubble")
        .first()
        .evaluate((el) => ({
          radius: getComputedStyle(el).borderRadius,
          animation: getComputedStyle(el).animationName,
        }));
      assert.equal(dimensions.radius, "0px");
      assert.equal(dimensions.animation, "none");
    }
    await page.setViewportSize({ width: 1440, height: 1400 });
    await studio
      .locator(".studio-workbench")
      .screenshot({ path: "test-results/agent-workbench.png" });
    await page.setViewportSize({ width: 1440, height: 900 });
    await studio
      .getByRole("textbox", { name: "Agent description", exact: true })
      .fill("Unsaved close test");
    await page.keyboard.press("Escape");
    let discard = page.getByRole("dialog", {
      name: "Discard changes",
      exact: true,
    });
    await discard.getByRole("button", { name: "Cancel", exact: true }).click();
    assert.equal(
      await studio
        .getByRole("textbox", { name: "Agent description", exact: true })
        .inputValue(),
      "Unsaved close test",
    );
    await page
      .getByRole("button", { name: "Close agent settings", exact: true })
      .click();
    discard = page.getByRole("dialog", {
      name: "Discard changes",
      exact: true,
    });
    await discard
      .getByRole("button", { name: "Discard changes", exact: true })
      .click();
    await page
      .locator(".agent-construction-dialog")
      .waitFor({ state: "hidden" });
    assert.equal((await get()).construction.draft.description, "");
    assert.equal(
      await page.evaluate(() =>
        document.activeElement?.getAttribute("aria-label"),
      ),
      "Orbistry Agent settings",
    );
    await open();
    await studio
      .getByRole("textbox", { name: "Agent name", exact: true })
      .fill("Orbistry Research");
    await studio
      .getByRole("textbox", { name: "Agent description", exact: true })
      .fill("Context · research · evidence");
    await studio
      .getByRole("textbox", { name: "Agent personality", exact: true })
      .fill("STUDIO_UI_PREF: Use concise findings.");
    await app.evaluate(
      async ({ dialog, nativeImage }, file) => {
        await process.getBuiltinModule("fs/promises").writeFile(
          file,
          nativeImage
            .createFromBitmap(Buffer.alloc(64 * 32 * 4, 180), {
              width: 64,
              height: 32,
            })
            .toPNG(),
        );
        dialog.showOpenDialog = async () => ({
          canceled: false,
          filePaths: [file],
        });
      },
      path.join(root, "avatar.png"),
    );
    await studio
      .getByRole("button", { name: "Upload / Change PFP", exact: true })
      .click();
    await studio.locator(".studio-identity img").waitFor();
    const ctx = studio.getByRole("group", {
      name: "Context node",
      exact: true,
    });
    await ctx.focus();
    const x = await ctx.evaluate((el) => parseFloat(el.style.left));
    await ctx.press("ArrowRight");
    assert.equal(await ctx.evaluate((el) => parseFloat(el.style.left)), x + 16);
    const body = await ctx.boundingBox();
    await page.mouse.move(body.x + 50, body.y + 25);
    await page.mouse.down();
    await page.mouse.move(body.x + 82, body.y + 41, { steps: 4 });
    await page.mouse.up();
    const canvasScale = await studio
      .locator(".studio-canvas")
      .evaluate((el) => Number(el.dataset.canvasScale));
    assert.equal(
      await ctx.evaluate((el) => parseFloat(el.style.left)),
      Math.round((x + 16 + 32 / canvasScale) / 8) * 8,
    );
    await studio
      .getByRole("button", { name: "Add Personality", exact: true })
      .dragTo(studio.locator(".studio-canvas"), {
        targetPosition: { x: 160, y: 70 },
      });
    const personality = studio.getByRole("group", {
      name: "Personality node",
      exact: true,
    });
    await personality.waitFor();
    await personality.focus();
    await studio
      .getByRole("textbox", { name: "Personality preferences", exact: true })
      .fill("STUDIO_NODE_PREF: Explicitly identify gaps.");
    await studio
      .getByRole("button", { name: "Connect from Personality", exact: true })
      .press("Enter");
    await studio
      .getByRole("button", { name: "Connect to LLM", exact: true })
      .click();
    await personality.focus();
    await studio
      .getByRole("button", { name: "Remove personality → llm", exact: true })
      .click();
    await studio
      .locator(".studio-canvas-viewport")
      .evaluate((element) =>
        element.scrollIntoView({ block: "center", inline: "nearest" }),
      );
    const outlet = await studio
      .getByRole("button", { name: "Connect from Personality", exact: true })
      .boundingBox();
    const inlet = await studio
      .getByRole("button", { name: "Connect to LLM", exact: true })
      .boundingBox();
    assert.equal(
      await page.evaluate(
        ({ x, y, width, height }) =>
          document
            .elementFromPoint(x + width / 2, y + height / 2)
            ?.getAttribute("aria-label"),
        outlet,
      ),
      "Connect from Personality",
    );
    await page.mouse.move(
      outlet.x + outlet.width / 2,
      outlet.y + outlet.height / 2,
    );
    await page.mouse.down();
    await page.mouse.move(
      inlet.x + inlet.width / 2,
      inlet.y + inlet.height / 2,
      { steps: 6 },
    );
    await page.mouse.up();
    await page.waitForFunction(
      () =>
        document.querySelectorAll(".studio-connections > path").length === 4,
    );
    await studio.getByRole("group", { name: "LLM node", exact: true }).focus();
    await studio
      .getByRole("combobox", { name: "Agent model", exact: true })
      .selectOption("ollama/qwen3:4b");
    await studio
      .getByRole("button", { name: "Save draft", exact: true })
      .click();
    await studio
      .getByText("Draft saved. The live agent is unchanged.", { exact: true })
      .waitFor();
    let profile = await get();
    assert.equal(profile.displayName, "Orbistry Agent");
    assert.equal(profile.avatarUrl, null);
    assert.equal(profile.construction.activeRevision, 0);
    assert.ok(profile.construction.draftAvatarUrl);
    assert.equal(profile.runtimeInstructions, "");
    const persisted = await fs.readFile(path.join(data, "agents.json"), "utf8");
    assert.ok(!persisted.includes("data:image"));
    await close();
    assert.equal(
      (await page.evaluate(() => window.orbistryDesktop.ai.listConversations()))
        .length,
      0,
    );
    await open();
    await page.waitForFunction(
      () =>
        document.querySelector('input[aria-label="Agent name"]')?.value ===
        "Orbistry Research",
    );
    assert.equal(
      await studio
        .getByRole("textbox", { name: "Agent name", exact: true })
        .inputValue(),
      "Orbistry Research",
    );
    await studio
      .getByRole("button", { name: "Save & apply", exact: true })
      .click();
    await studio
      .getByText(
        "Configuration applied. It will be used on the next request.",
        { exact: true },
      )
      .waitFor();
    profile = await get();
    assert.equal(profile.displayName, "Orbistry Research");
    assert.match(profile.runtimeInstructions, /STUDIO_NODE_PREF/);
    assert.ok(profile.avatarUrl);
    const savedPosition = profile.construction.active.nodes.find(
      (n) => n.kind === "Context",
    ).x;
    await close();
    await page.evaluate(() =>
      window.orbistryDesktop.ai.editContextBox({
        action: "create",
        name: "Studio source",
        paths: ["a.md"],
      }),
    );
    const panel = page.getByRole("complementary", {
      name: "Orbistry Research",
      exact: true,
    });
    await panel
      .getByRole("button", { name: "+ New Chat", exact: true })
      .click();
    const picker = page.getByRole("dialog", {
      name: "New Orbistry Research chat",
      exact: true,
    });
    await picker.getByRole("radio", { name: /Studio source/ }).check();
    await picker
      .getByRole("button", { name: "Start Chat", exact: true })
      .click();
    await picker.waitFor({ state: "hidden" });
    await page
      .getByRole("textbox", { name: "Chat question", exact: true })
      .fill("Summarize the bound source.");
    await panel
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await panel.locator(".chat-message-assistant .chat-run-id").waitFor();
    const request = await app.evaluate(() =>
      globalThis.onlineSmoke.localRequests.findLast((r) =>
        r.messages?.some(
          (m) => m.role === "system" && m.content.includes("STUDIO_UI_PREF"),
        ),
      ),
    );
    assert.ok(request);
    assert.match(request.messages[0].content, /You are Orbistry Research/);
    assert.match(request.messages[0].content, /STUDIO_NODE_PREF/);
    assert.equal(request.model, "qwen3:4b");
    await open();
    await close();
    await open("chronoz");
    await page.waitForFunction(
      () =>
        document.querySelector('input[aria-label="Agent name"]')?.value ===
        "CHronoZ",
    );
    assert.equal(
      await studio
        .getByRole("textbox", { name: "Agent name", exact: true })
        .inputValue(),
      "CHronoZ",
    );
    assert.equal((await get("chronoz")).construction.activeRevision, 0);
    await studio
      .getByRole("textbox", { name: "Agent description", exact: true })
      .fill("Chrono independent profile");
    await studio
      .getByRole("button", { name: "Save & apply", exact: true })
      .click();
    await studio
      .getByText(
        "Configuration applied. It will be used on the next request.",
        { exact: true },
      )
      .waitFor();
    assert.equal((await get()).displayName, "Orbistry Research");
    assert.deepEqual((await get("chronoz")).skills, []);
    assert.equal((await get("chronoz")).avatarUrl, null);
    await close();
    await open();
    await page.waitForFunction(
      () =>
        document.querySelector('input[aria-label="Agent name"]')?.value ===
        "Orbistry Research",
    );
    await studio
      .getByRole("group", { name: "Personality node", exact: true })
      .focus();
    await page.emulateMedia({ reducedMotion: "reduce" });
    assert.equal(
      await studio
        .locator(".studio-bubble")
        .first()
        .evaluate((el) => getComputedStyle(el).animationName),
      "none",
    );
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/agent-construction.png" });
    await studio
      .getByRole("button", { name: "Delete Personality", exact: true })
      .click();
    await studio
      .getByRole("button", { name: "Remove PFP", exact: true })
      .click();
    await studio
      .getByRole("button", { name: "Save draft", exact: true })
      .click();
    await studio
      .getByText("Draft saved. The live agent is unchanged.", { exact: true })
      .waitFor();
    assert.equal((await get()).construction.active.nodes.length, 5);
    assert.ok((await get()).avatarUrl);
    assert.equal((await get()).construction.draftAvatar.type, "letter");
    await app.close();
    app = null;
    await launch();
    await open();
    assert.equal((await get()).construction.activeRevision, 2);
    assert.equal((await get()).construction.draftRevision, 3);
    assert.equal(
      (await get()).construction.active.nodes.find((n) => n.kind === "Context")
        .x,
      savedPosition,
    );
    await close();
    await page.getByRole("button", { name: "SETTINGS", exact: true }).click();
    assert.equal(
      await page
        .getByRole("tab", { name: "Agent Construction", exact: true })
        .count(),
      0,
    );
    assert.equal(
      await page
        .getByRole("region", { name: "Agent Construction Studio", exact: true })
        .count(),
      0,
    );
    await page
      .getByRole("button", { name: "Change vault folder", exact: true })
      .waitFor();
    assert.deepEqual(errors, []);
    await fs.writeFile(
      "test-results/construction.json",
      JSON.stringify(
        {
          passed: true,
          transport: "synthetic",
          checks: [
            "Close/Escape protects unsaved edits and returns focus to the agent menu",
            "Agent three-dot menu opens the same shared construction graph in an agent-scoped modal",
            "Native PFP preview, draft asset reference and apply synchronization",
            "Library drag/drop, keyboard movement, validated connections and removal",
            "Saved drafts do not alter active runtime",
            "Independent agent configuration and persistent active/draft revisions",
            "Applied graph identity/personality/preferences reach the actual main-process model request",
            "Reduced-motion animation disabled; General settings retained",
          ],
        },
        null,
        2,
      ),
    );
    console.log(
      "PASS: Agent Construction UI, default-agent isolation, PFP draft/apply, drag/drop connections, keyboard movement, restart and reduced motion",
    );
  } catch (error) {
    console.log(await page?.getByRole("alert").allTextContents());
    await page
      ?.screenshot({ path: "test-results/construction-failure.png" })
      .catch(() => {});
    throw error;
  } finally {
    await app?.close();
    assert.ok(
      path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep),
    );
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((error) => {
  console.error(error.stack);
  process.exitCode = 1;
});
