const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict"),
  fs = require("node:fs/promises"),
  os = require("node:os"),
  path = require("node:path");
async function assertBannerEdge(locator) {
  assert.ok(
    await locator.evaluate((el) => el.classList.contains("agent-banner")),
  );
  const { createCanvas, loadImage } = require("@napi-rs/canvas");
  const image = await loadImage(await locator.screenshot());
  const canvas = createCanvas(image.width, image.height);
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0);
  // A solid-white fixture exposes uncovered bottom pixels at any header size.
  const start = Math.floor(image.width / 4);
  const pixels = context.getImageData(start, image.height - 2, start, 2).data;
  for (let i = 0; i < pixels.length; i += 4)
    assert.ok(
      Math.max(pixels[i], pixels[i + 1], pixels[i + 2]) < 100,
      "Banner overlay must dim the complete bottom edge",
    );
}
async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-appearance-")),
    vault = path.join(root, "vault"),
    data = path.join(root, "app-data");
  let app, page;
  const errors = [],
    requests = [];
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
    page.on("request", (r) => requests.push(r.url()));
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
  };
  const open = async () => {
    await page
      .getByRole("button", { name: "Orbistry Agent settings", exact: true })
      .click();
    await page
      .getByRole("dialog", { name: "Orbistry Agent settings", exact: true })
      .waitFor();
  };
  const close = async () => {
    await page
      .getByRole("button", { name: "Close agent settings", exact: true })
      .click();
    await page
      .locator(".agent-construction-dialog")
      .waitFor({ state: "hidden" });
  };
  const get = () => page.evaluate(() => window.orbistryDesktop.ai.getAgent());
  try {
    await fs.mkdir(vault);
    await fs.mkdir(data);
    await fs.writeFile(path.join(vault, "a.md"), "ALPHA allocation is 25%.");
    await launch();
    await open();
    let studio = page.getByRole("region", {
      name: "Agent Construction Studio",
      exact: true,
    });
    await studio
      .getByText("Profile banner & chat appearance", { exact: true })
      .click();
    await app.evaluate(async ({ dialog, nativeImage }, root) => {
      const fs = process.getBuiltinModule("fs/promises"),
        path = process.getBuiltinModule("path");
      const banner = path.join(root, "banner.png"),
        wallpaper = path.join(root, "wallpaper.png");
      const width = 900,
        height = 420,
        pixels = Buffer.alloc(width * height * 4);
      for (let y = 0; y < height; y++)
        for (let x = 0; x < width; x++) {
          const n = (y * width + x) * 4;
          pixels[n] = 30 + Math.round((x / width) * 50);
          pixels[n + 1] = 65 + Math.round((y / height) * 70);
          pixels[n + 2] = 100 + Math.round((x / width) * 65);
          pixels[n + 3] = 255;
        }
      const image = nativeImage.createFromBitmap(pixels, { width, height });
      const white = nativeImage.createFromBitmap(
        Buffer.alloc(width * height * 4, 255),
        { width, height },
      );
      await fs.writeFile(banner, white.toPNG());
      await fs.writeFile(wallpaper, image.toPNG());
      dialog.showOpenDialog = async (options) => ({
        canceled: false,
        filePaths: [options.title.includes("banner") ? banner : wallpaper],
      });
    }, root);
    await studio
      .getByRole("button", { name: "Upload / Change banner", exact: true })
      .click();
    await studio
      .getByAltText("Profile banner preview", { exact: true })
      .waitFor();
    await studio
      .getByRole("button", { name: "Upload / Change wallpaper", exact: true })
      .click();
    await page.waitForFunction(() =>
      document
        .querySelector('[aria-label="Chat appearance preview"]')
        .style.backgroundImage.includes("data:image/png"),
    );
    await studio
      .getByRole("combobox", { name: "Message text size", exact: true })
      .selectOption("16");
    await studio
      .getByRole("button", { name: "Save draft", exact: true })
      .click();
    await studio
      .getByText("Draft saved. The live agent is unchanged.", { exact: true })
      .waitFor();
    assert.equal((await get()).appearance.bannerUrl, null);
    assert.ok((await get()).construction.draftAppearance.bannerUrl);
    await close();
    await open();
    await studio
      .getByText("Profile banner & chat appearance", { exact: true })
      .click();
    assert.equal(
      await studio
        .getByRole("combobox", { name: "Message text size", exact: true })
        .inputValue(),
      "16",
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
    const profile = await get();
    assert.ok(profile.appearance.bannerUrl);
    assert.ok(profile.appearance.wallpaperUrl);
    assert.equal(
      (await page.evaluate(() => window.orbistryDesktop.ai.getAgent("chronoz")))
        .appearance.wallpaperUrl,
      null,
    );
    assert.ok(
      !(await fs.readFile(path.join(data, "agents.json"), "utf8")).includes(
        "data:image",
      ),
    );
    await close();
    await assertBannerEdge(
      page.locator('.agent-bot-row[data-agent-id="wonnyy-agent"]'),
    );
    assert.ok(
      await page
        .locator('.agent-bot-row[data-agent-id="wonnyy-agent"]')
        .evaluate((el) => el.style.backgroundImage.includes("data:image/png")),
    );
    await page.evaluate(() =>
      window.orbistryDesktop.ai.editContextBox({
        action: "create",
        name: "Appearance source",
        paths: ["a.md"],
      }),
    );
    const panel = page.getByRole("complementary", {
      name: "Orbistry Agent",
      exact: true,
    });
    await panel
      .getByRole("button", { name: "+ New Chat", exact: true })
      .click();
    const picker = page.getByRole("dialog", {
      name: "New Orbistry Agent chat",
      exact: true,
    });
    await picker.getByRole("radio", { name: /Appearance source/ }).check();
    await picker
      .getByRole("button", { name: "Start Chat", exact: true })
      .click();
    await picker.waitFor({ state: "hidden" });
    const answer =
      "## Research summary\n\n**ALPHA** allocation is **25%**.\n\n- Keep source evidence separate from inference.\n- Use `allocation` as the metric label.\n\n| Metric | Value |\n| --- | --- |\n| ALPHA allocation | 25% |\n\n```text\nALPHA = 25%\n<script>globalThis.badMarkdown = true</script>\n```\n\n<img src=x onerror=bad()>\n![blocked image](https://example.invalid/tracker.png)\n[unsafe](javascript:bad)";
    await app.evaluate((_, answer) => {
      globalThis.onlineSmoke.localAnswer = answer;
    }, answer);
    await panel
      .getByRole("textbox", { name: "Chat question", exact: true })
      .fill("Summarize the attached allocation with clear formatting.");
    await panel
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    await panel.locator(".chat-message-assistant .chat-run-id").waitFor();
    const message = panel.locator(".chat-message-assistant").last();
    assert.equal(
      await message.locator("strong").filter({ hasText: "25%" }).count(),
      1,
    );
    assert.equal(await message.locator("li").count(), 2);
    assert.equal(await message.locator("table").count(), 1);
    assert.equal(await message.locator("pre code").count(), 1);
    assert.equal(
      await message.locator("script,img,a[href^='javascript:']").count(),
      0,
    );
    assert.equal(await page.evaluate(() => globalThis.badMarkdown), undefined);
    assert.equal(
      await message.evaluate((el) => getComputedStyle(el).fontSize),
      "14px",
    );
    assert.match(
      await message.evaluate((el) => getComputedStyle(el).fontFamily),
      /Urbanist/,
    );
    const modelRequest = await app.evaluate(() =>
      globalThis.onlineSmoke.localRequests.findLast(
        (request) => request.messages?.length,
      ),
    );
    assert.ok(!JSON.stringify(modelRequest).includes("data:image"));
    assert.ok(
      await panel
        .locator(".chat-thread")
        .evaluate((el) => el.style.backgroundImage.includes("data:image/png")),
    );
    assert.ok(
      await panel
        .locator(".chat-profile-banner")
        .evaluate((el) => el.style.backgroundImage.includes("data:image/png")),
    );
    const profileGeometry = await panel.evaluate((el) => {
      const banner = el
        .querySelector(".chat-profile-banner")
        .getBoundingClientRect();
      const avatar = el
        .querySelector(".chat-profile .agent-avatar")
        .getBoundingClientRect();
      const menus = el.querySelector(".chat-top-menus").getBoundingClientRect();
      const toolbar = el.querySelector(".chat-header").getBoundingClientRect();
      return {
        avatarSize: avatar.width,
        overlapCenter: avatar.top + avatar.height / 2,
        bannerBottom: banner.bottom,
        menusBottom: menus.bottom,
        toolbarBottom: toolbar.bottom,
        bannerTop: banner.top,
      };
    });
    assert.equal(profileGeometry.avatarSize, 88);
    assert.ok(
      Math.abs(profileGeometry.overlapCenter - profileGeometry.bannerBottom) <
        1,
    );
    assert.ok(
      profileGeometry.toolbarBottom <= profileGeometry.bannerTop &&
        profileGeometry.menusBottom <= profileGeometry.bannerTop,
    );
    const conversation = (
      await page.evaluate(() => window.orbistryDesktop.ai.listConversations())
    )[0];
    assert.equal(conversation.messages.at(-1).content, answer);
    assert.equal(conversation.messages.at(-1).sources[0].relativePath, "a.md");
    const composer = await panel.locator(".chat-composer").boundingBox();
    await panel.locator(".chat-thread").evaluate((el) => {
      el.scrollTop = 0;
    });
    const after = await panel.locator(".chat-composer").boundingBox();
    assert.equal(Math.round(composer.y), Math.round(after.y));
    await fs.mkdir("test-results", { recursive: true });
    await page.screenshot({ path: "test-results/chat-appearance.png" });
    await assertBannerEdge(panel.locator(".chat-profile-banner"));
    await page
      .getByRole("button", { name: "PLANET VIEW", exact: true })
      .click();
    const floatingHeader = page.locator(
      ".chat-panel-floating .chat-profile-banner",
    );
    await floatingHeader.waitFor();
    await assertBannerEdge(floatingHeader);
    await page.screenshot({ path: "test-results/chat-profile-floating.png" });
    await page
      .getByRole("button", { name: "Minimize chat window", exact: true })
      .click();
    await page
      .locator(".chat-panel-floating .chat-profile")
      .waitFor({ state: "hidden" });
    await page
      .getByRole("button", { name: "Restore chat window", exact: true })
      .click();
    await page.locator(".chat-panel-floating .chat-profile").waitFor();
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    await app.close();
    app = null;
    await launch();
    assert.ok((await get()).appearance.wallpaperUrl);
    studio = page.getByRole("region", {
      name: "Agent Construction Studio",
      exact: true,
    });
    assert.equal(
      await page
        .locator(".chat-message-assistant strong")
        .filter({ hasText: "25%" })
        .count(),
      1,
    );
    await open();
    await studio
      .getByText("Profile banner & chat appearance", { exact: true })
      .click();
    await studio
      .getByRole("button", { name: "Remove banner", exact: true })
      .click();
    await studio
      .getByRole("button", { name: "Remove wallpaper", exact: true })
      .click();
    await studio
      .getByRole("button", { name: "Save & apply", exact: true })
      .click();
    await studio
      .getByText(
        "Configuration applied. It will be used on the next request.",
        { exact: true },
      )
      .waitFor();
    assert.equal((await get()).appearance.wallpaperUrl, null);
    assert.equal((await get()).appearance.bannerUrl, null);
    await close();
    assert.deepEqual(errors, []);
    assert.ok(!requests.some((url) => url.includes("example.invalid")));
    await fs.writeFile(
      "test-results/appearance.json",
      JSON.stringify(
        {
          passed: true,
          transport: "synthetic",
          checks: [
            "Native banner/wallpaper upload and managed local refs",
            "Draft/apply isolation, other-agent isolation and restart",
            "Profile/header/banner and timeline wallpaper update",
            "Bold, lists, code and tables render while saved content/provenance stay unchanged",
            "Raw HTML and remote images remain inert; unsafe links are not clickable",
            "Text sizing and independent timeline/composer scrolling",
            "Banner/wallpaper removal",
          ],
        },
        null,
        2,
      ),
    );
    console.log(
      "PASS: local banners/wallpapers, readable safe Markdown bubbles, draft/apply/restart, agent isolation and removal",
    );
  } catch (error) {
    await fs.mkdir("test-results", { recursive: true });
    await page
      ?.screenshot({ path: "test-results/appearance-failure.png" })
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
