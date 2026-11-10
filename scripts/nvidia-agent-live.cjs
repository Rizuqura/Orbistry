// Opt-in normal Agent Chat verification: real NVIDIA + public synthetic archive.
// All application state lives in a disposable profile/vault. Never uses a personal source.
const { _electron: electron } = require("playwright");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
const assert = require("node:assert/strict");
async function main() {
  const tenPoints = process.argv.includes("--ten-points");
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-nvidia-agent-"),
  );
  const artifacts = path.resolve("test-results/nvidia-thinking");
  await fs.mkdir(artifacts, { recursive: true });
  let app, page;
  const checkpoint = (name) =>
    console.log(JSON.stringify({ checkpoint: name }));
  try {
    const env = {
      ...process.env,
      QT_NVIDIA_UI: "1",
      QT_NVIDIA_TEST_MODEL:
        process.argv.find((a) => a.startsWith("--model="))?.slice(8) ??
        process.env.QT_NVIDIA_TEST_MODEL,
      QT_NVIDIA_TEN_POINTS: tenPoints ? "1" : "0",
      QT_NVIDIA_PROBE_PROFILE: path.join(root, "profile"),
      ORBISTRY_VAULT_PATH: path.join(root, "vault"),
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    await fs.mkdir(env.ORBISTRY_VAULT_PATH, { recursive: true });
    app = await electron.launch({
      args: [
        path.resolve("scripts/nvidia-thinking-probe-main.cjs"),
        "--hidden",
      ],
      env,
      timeout: 30000,
    });
    page = await app.firstWindow();
    page.setDefaultTimeout(30000);
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    const stopChecks = async () => {
      await page.getByRole("button", { name: "SETTINGS", exact: true }).click();
      const details = page
        .locator("details")
        .filter({
          has: page
            .locator("summary")
            .filter({ hasText: /^LLM Backend \/ Front Office$/ }),
        })
        .first();
      if ((await details.getAttribute("open")) === null)
        await page
          .getByText("LLM Backend / Front Office", { exact: true })
          .click();
      await page
        .getByRole("button", {
          name: "Refresh NVIDIA capabilities",
          exact: true,
        })
        .click();
      await page
        .getByRole("button", {
          name: "Refresh NVIDIA capabilities",
          exact: true,
        })
        .waitFor({ state: "visible" });
      await page.waitForFunction(
        () =>
          ![...document.querySelectorAll("button")].find(
            (b) => b.textContent.trim() === "Refresh NVIDIA capabilities",
          )?.disabled,
      );
    };
    checkpoint("CANCEL_BACKGROUND_CHECKS");
    await stopChecks();
    const source = await app.evaluate(() => globalThis.nvidiaProbe.sourceText);
    await fs.writeFile(path.join(env.ORBISTRY_VAULT_PATH, "archive.md"), source);
    await page.evaluate(() => window.orbistryDesktop.vault.rescan());
    await page.evaluate(async () => {
      await window.orbistryDesktop.ai.editContextBox({
        action: "create",
        name: "Public NVIDIA archive",
        paths: ["archive.md"],
      });
    });
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await stopChecks();
    checkpoint("CREATE_NORMAL_AGENT_CHAT");
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    await page
      .getByRole("button", { name: "+ New Chat", exact: true })
      .first()
      .click();
    const picker = page.getByRole("dialog", { name: "New Orbistry Agent chat" });
    await picker.getByRole("radio", { name: /Public NVIDIA archive/ }).check();
    await picker
      .getByRole("button", { name: "Start Chat", exact: true })
      .click();
    await picker.waitFor({ state: "hidden" });
    checkpoint("SEND_REAL_NVIDIA");
    await page
      .getByRole("textbox", { name: "Chat question", exact: true })
      .fill(
        tenPoints
          ? "Read archive.md and give exactly 10 important points from its ten numbered financial statement facts. Use a numbered list, include the stated values, and do not invent financial information."
          : "From archive.md, give the verification marker only.",
      );
    await page
      .getByRole("button", { name: "Send message", exact: true })
      .click();
    // Wait on the actual final answer; an IPC list poll alone is not rendering proof.
    const bubble = tenPoints
      ? page.locator(".chat-message-assistant[data-message-id]").last()
      : page
          .locator(".chat-message-assistant[data-message-id]")
          .filter({ hasText: "ORBISTRY_OK" });
    await bubble.waitFor({ state: "visible", timeout: 120000 });
    const conversation = await page.evaluate(
      async () => (await window.orbistryDesktop.ai.listConversations())[0],
    );
    const attempt = conversation.attempts.at(-1);
    const run = await require("../electron/ai/run-store.cjs").readModelRun(
      env.ORBISTRY_VAULT_PATH,
      attempt.runId,
    );
    const visible = await bubble.isVisible().catch(() => false);
    const numberedItems = tenPoints
      ? await bubble.locator(".chat-rich-text ol > li").count()
      : null;
    const pointLines = tenPoints
      ? [
          ...String(run.response).matchAll(
            /(?:^|\n)\s*(?:Financial fact\s+)?\d{1,2}[.:)]/gi,
          ),
        ].length
      : 0;
    const financialPointCount = tenPoints
      ? Math.max(numberedItems, pointLines)
      : null;
    const selected = await app.evaluate(() => globalThis.nvidiaProbe.selected);
    const result = {
      capturedAt: new Date().toISOString(),
      status:
        attempt.status === "succeeded" &&
        visible &&
        (!tenPoints || financialPointCount === 10) &&
        run.model === selected.modelId
          ? "PASS"
          : "FAIL",
      task: tenPoints
        ? "Ten financial statement points from fictional public test facts"
        : "Verification marker",
      numberedItems,
      financialPointCount,
      ...(tenPoints ? { publicTestAnswer: run.response } : {}),
      selected,
      wireRequests: await app.evaluate(
        () => globalThis.nvidiaProbe.wireRequests,
      ),
      contextFile: "public synthetic archive.md",
      contextCharacters: source.length,
      visibleExpectedText: visible,
      finishReason: run.finishReason ?? null,
      usage: run.usage ?? null,
      provider: run.provider ?? null,
      errorCode: run.error?.code ?? null,
      diagnostics: {
        preflightPromptTokens: run.diagnostics?.preflightPromptTokens,
        provider: run.diagnostics?.provider,
        baseline: run.diagnostics?.frontOffice,
      },
      screenshot: "normal-agent-nvidia.png",
    };
    await fs.writeFile(
      path.join(artifacts, "normal-agent-nvidia.json"),
      JSON.stringify(result, null, 2),
    );
    if (visible) await bubble.scrollIntoViewIfNeeded();
    await page.screenshot({
      path: path.join(artifacts, "normal-agent-nvidia.png"),
    });
    console.log(JSON.stringify(result));
    assert.equal(
      result.status,
      "PASS",
      "Real NVIDIA final answer must be visible in normal Agent Chat",
    );
  } catch (error) {
    await page
      ?.screenshot({ path: path.join(artifacts, "failure.png") })
      .catch(() => {});
    console.error(
      JSON.stringify({
        status: "FAIL",
        errorCode: error.code ?? error.name,
        message: String(error.message).split("\n")[0],
      }),
    );
    process.exitCode = 1;
  } finally {
    await app?.close();
    if (!path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep))
      throw Error("Unsafe cleanup");
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch(() => {
  console.error("Isolated NVIDIA UI test failed.");
  process.exitCode = 1;
});
