/** Diagnostic orchestrator: launch actual Orbistry with real fetch and existing encrypted keys,
 * confined to a disposable profile/vault. Only fixed, non-private test output is persisted. */
const { _electron: electron } = require("playwright");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
let lastStage = "START";
const checkpoint = (name) => {
  lastStage = name;
  console.log(JSON.stringify({ checkpoint: name }));
};
async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "qt-rca-001-"));
  const artifacts = path.resolve("test-results/qt-rca-001");
  await fs.mkdir(artifacts, { recursive: true });
  let app, page;
  try {
    const env = {
      ...process.env,
      QT_RCA_PROFILE: path.join(root, "app-data"),
      ORBISTRY_VAULT_PATH: path.join(root, "vault"),
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    await fs.mkdir(env.ORBISTRY_VAULT_PATH, { recursive: true });
    app = await electron.launch({
      args: [path.resolve("scripts/provider-rca-main.cjs"), "--hidden"],
      env,
      timeout: 30000,
    });
    page = await app.firstWindow();
    page.setDefaultTimeout(30000);
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    const discovery = await app.evaluate(() => globalThis.qtRca.discover());
    console.log(JSON.stringify({ stage: "discovery", providers: discovery }));
    if (!process.argv.includes("--ui"))
      for (const provider of ["openrouter", "nvidia"]) {
        const info = discovery[provider];
        if (info.configured && info.candidateModel) {
          const result = await app.evaluate(
            async (_, input) =>
              globalThis.qtRca.direct(input.provider, input.model),
            { provider, model: info.candidateModel },
          );
          console.log(JSON.stringify(result));
        }
      }
    if (process.argv.includes("--ui")) {
      const provider = "openrouter",
        model = discovery.openrouter.candidateModel;
      if (!model) throw new Error("No verified-access OpenRouter candidate");
      checkpoint("OPEN_SETTINGS");
      await page.getByRole("button", { name: "SETTINGS", exact: true }).click();
      await page
        .getByText("LLM Backend / Front Office", { exact: true })
        .click();
      checkpoint("REFRESH_AND_SAVE_ISOLATED_CONFIG");
      await page
        .getByRole("button", {
          name: "Refresh OpenRouter capabilities",
          exact: true,
        })
        .click();
      await page
        .getByLabel("Experimental model", { exact: true })
        .locator(`option[value="${provider}:${model}"]`)
        .waitFor({ state: "attached" });
      const config = await page.evaluate(
        async () => (await window.orbistryDesktop.ai.frontOfficeState()).config,
      );
      config.enabled = true;
      config.routing.mode = "manual";
      config.routing.selectedDeploymentId = `${provider}:${model}`;
      config.routing.allowedProviders = [provider];
      config.routing.allowFallback = false;
      config.reliability.maxAttempts = 1;
      config.reliability.deadlineMs = 60000;
      config.generation.maxOutputTokens = 256;
      config.generation.contextWindow = 8192;
      config.generation.format = "text";
      config.generation.streaming = !process.argv.includes("--nonstream");
      await page
        .getByText("Advanced tuning and gateway", { exact: true })
        .click();
      await page
        .getByLabel("Advanced backend configuration", { exact: true })
        .fill(JSON.stringify(config));
      await page
        .getByRole("button", {
          name: "Apply advanced configuration",
          exact: true,
        })
        .click();
      await page
        .getByText("Backend configuration saved.", { exact: true })
        .waitFor();
      checkpoint("CREATE_EXPERIMENT");
      await page
        .getByRole("button", {
          name: "New experiment / reset history",
          exact: true,
        })
        .click();
      await page
        .waitForFunction(
          () =>
            document.querySelector('[aria-label="Saved experiment"]')?.value ||
            document.querySelector('[role="alert"]'),
          undefined,
          { timeout: 10000 },
        )
        .catch(() => {});
      const admission = await page.evaluate(async () => {
        const ai = window.orbistryDesktop.ai;
        let list;
        try {
          list = (await ai.frontOfficeList()).map((c) => ({
            id: c.id,
            attempts: c.attempts.length,
          }));
        } catch (error) {
          list = { errorCode: error.code };
        }
        return {
          selectedConversation:
            document.querySelector('[aria-label="Saved experiment"]')?.value ??
            null,
          alerts: [...document.querySelectorAll('[role="alert"]')].map(
            (e) => e.textContent,
          ),
          conversations: list,
        };
      });
      console.log(JSON.stringify({ admission }));
      await fs.writeFile(
        path.join(artifacts, "verified-ui-admission.json"),
        JSON.stringify(admission, null, 2),
      );
      if (!admission.selectedConversation)
        throw new Error("UI conversation admission failed before inference.");
      await page.evaluate(() => {
        globalThis.rcaEvents = [];
        globalThis.rcaUnsubscribe = window.orbistryDesktop.ai.onFrontOfficeEvent(
          (event) =>
            globalThis.rcaEvents.push({
              requestId: event.requestId,
              runId: event.runId,
              type: event.type,
              deltaCharacters: event.delta?.length ?? 0,
              errorCode: event.error?.code ?? null,
              trace: event.trace ?? null,
            }),
        );
      });
      checkpoint("SUBMIT_UI");
      await page
        .getByLabel("Experiment question", { exact: true })
        .fill("Reply with exactly: ORBISTRY_OK");
      await page
        .getByRole("button", { name: "Send experiment", exact: true })
        .click();
      checkpoint("WAIT_TERMINAL_EVENT");
      await page.waitForFunction(
        () =>
          globalThis.rcaEvents?.some((e) =>
            ["finish", "error", "cancelled"].includes(e.type),
          ),
        undefined,
        { timeout: 90000 },
      );
      const events = await page.evaluate(() => globalThis.rcaEvents);
      const assistant = page
        .getByLabel("Experiment messages")
        .locator("article")
        .filter({
          has: page.locator("strong").filter({ hasText: /^assistant$/ }),
        });
      const marker = assistant.getByText("ORBISTRY_OK", { exact: true });
      await marker
        .waitFor({ state: "visible", timeout: 10000 })
        .catch(() => {});
      const visible = await marker.isVisible().catch(() => false);
      const result = {
        test: process.argv.includes("--nonstream") ? "C-E" : "D-E",
        streaming: !process.argv.includes("--nonstream"),
        provider,
        model,
        status:
          visible && events.some((e) => e.type === "finish") ? "PASS" : "FAIL",
        visibleText: visible ? "ORBISTRY_OK" : "",
        events,
        stages: [],
      };
      const terminal = events.find(
        (e) => e.type === "finish" || e.type === "error",
      );
      if (terminal?.trace?.stages)
        result.stages = terminal.trace.stages.filter(
          (s) => s.stage !== "REQUEST_COMPLETED",
        );
      if (terminal) {
        const elapsedMs =
          Date.now() -
          Date.parse(terminal.trace?.startedAt ?? new Date().toISOString());
        result.stages.push({
          timestamp: new Date().toISOString(),
          requestId: terminal.requestId,
          stage: "FRONTEND_RESPONSE_DELIVERED",
          elapsedMs,
          provider,
          model,
          status: visible ? "ok" : "error",
          observation: "Actual assistant DOM visibility, not IPC dispatch",
        });
        result.stages.push({
          timestamp: new Date().toISOString(),
          requestId: terminal.requestId,
          stage: "REQUEST_COMPLETED",
          elapsedMs,
          provider,
          model,
          status: result.status,
        });
      }
      const suffix = process.argv.includes("--nonstream")
        ? "nonstreaming"
        : "streaming";
      await fs.writeFile(
        path.join(artifacts, `verified-ui-${suffix}.json`),
        JSON.stringify(result, null, 2) + "\n",
      );
      if (visible) await marker.scrollIntoViewIfNeeded();
      await page.screenshot({
        path: path.join(artifacts, `verified-ui-${suffix}.png`),
      });
      console.log(
        JSON.stringify({
          test: result.test,
          status: result.status,
          visibleText: result.visibleText,
          eventTypes: events.map((e) => e.type),
          errorCode: events.find((e) => e.type === "error")?.errorCode ?? null,
        }),
      );
      if (result.status !== "PASS")
        throw new Error(
          "Real provider text did not appear in the actual assistant DOM.",
        );
      if (process.argv.includes("--multi-turn")) {
        checkpoint("LIVE_MULTI_TURN");
        const history = [];
        for (const prompt of [
          "Remember this temporary test word within our conversation: ORBITAL.",
          "What temporary test word did I give you?",
        ]) {
          const before = await assistant.count();
          await page.evaluate(() => {
            globalThis.rcaEvents = [];
          });
          await page
            .getByLabel("Experiment question", { exact: true })
            .fill(prompt);
          await page
            .getByRole("button", { name: "Send experiment", exact: true })
            .click();
          await page.waitForFunction(
            () =>
              globalThis.rcaEvents.some((e) =>
                ["finish", "error", "cancelled"].includes(e.type),
              ),
            undefined,
            { timeout: 90000 },
          );
          const turnEvents = await page.evaluate(() => globalThis.rcaEvents);
          const succeeded = turnEvents.some((e) => e.type === "finish");
          if (succeeded)
            await page.waitForFunction(
              (count) =>
                [
                  ...document.querySelectorAll(
                    '[aria-label="Experiment messages"] article strong',
                  ),
                ].filter((e) => e.textContent === "assistant").length > count,
              before,
            );
          const text = succeeded ? await assistant.last().innerText() : "";
          const terminalTurn = turnEvents.find(
            (e) => e.type === "finish" || e.type === "error",
          );
          const frontendObservation = {
            timestamp: new Date().toISOString(),
            requestId: terminalTurn?.requestId,
            stage: "FRONTEND_RESPONSE_DELIVERED",
            provider,
            model,
            elapsedMs:
              Date.now() -
              Date.parse(
                terminalTurn?.trace?.startedAt ?? new Date().toISOString(),
              ),
            status: succeeded && text.trim() ? "ok" : "error",
          };
          history.push({
            requestId: turnEvents.at(-1)?.requestId,
            status: succeeded && text.trim() ? "PASS" : "FAIL",
            containsTemporaryWord: /ORBITAL/.test(text),
            contentCharacters: text.length,
            frontendObservation,
            trace:
              turnEvents.find((e) => e.type === "finish" || e.type === "error")
                ?.trace ?? null,
          });
        }
        const multi = {
          test: "F",
          provider,
          model,
          status:
            history.every((t) => t.status === "PASS") &&
            history[1].containsTemporaryWord
              ? "PASS"
              : "FAIL",
          visibleText: history[1].containsTemporaryWord ? "ORBITAL" : "",
          turns: history,
        };
        await fs.writeFile(
          path.join(artifacts, "verified-multi-turn.json"),
          JSON.stringify(multi, null, 2),
        );
        await assistant.last().scrollIntoViewIfNeeded();
        await page.screenshot({
          path: path.join(artifacts, "verified-multi-turn.png"),
        });
        console.log(
          JSON.stringify({
            test: "F",
            status: multi.status,
            visibleText: multi.visibleText,
          }),
        );
        if (multi.status !== "PASS")
          throw new Error("Live multi-turn continuity failed.");
      }
      if (process.argv.includes("--probe-nvidia")) {
        checkpoint("NVIDIA_ISOLATED_AFTER_CHECKS_CANCELLED");
        console.log(
          JSON.stringify({
            backgroundChecks: await app.evaluate(
              () => globalThis.qtRca.report.backgroundChecks,
            ),
          }),
        );
        const selectedResult = await app.evaluate(
          async (_, model) => globalThis.qtRca.direct("nvidia", model),
          discovery.nvidia.selectedModel,
        );
        console.log(JSON.stringify(selectedResult));
        if (
          selectedResult.status !== "PASS" &&
          discovery.nvidia.alternateModelCandidates.includes(
            "mistralai/mistral-7b-instruct-v0.3",
          )
        )
          console.log(
            JSON.stringify(
              await app.evaluate(() =>
                globalThis.qtRca.direct(
                  "nvidia",
                  "mistralai/mistral-7b-instruct-v0.3",
                  128,
                ),
              ),
            ),
          );
      }
    }
    const report = await app.evaluate(() => globalThis.qtRca.report);
    await fs.writeFile(
      path.join(
        artifacts,
        process.argv.includes("--ui")
          ? process.argv.includes("--nonstream")
            ? "verified-ui-nonstreaming-discovery.json"
            : "verified-ui-streaming-discovery.json"
          : "baseline-live.json",
      ),
      JSON.stringify(report, null, 2) + "\n",
    );
  } catch (error) {
    const message = String(error?.message ?? "Unknown diagnostic failure")
      .split("\n")[0]
      .slice(0, 350)
      .replace(
        /(?:Bearer\s+\S+|sk-[A-Za-z0-9_-]+|nvapi-[A-Za-z0-9_-]+)/g,
        "[redacted]",
      );
    await fs.writeFile(
      path.join(artifacts, "diagnostic-failure.json"),
      JSON.stringify(
        {
          stage: lastStage,
          errorCode: error?.code ?? error?.name ?? "UNKNOWN",
          message,
        },
        null,
        2,
      ),
    );
    await page
      ?.screenshot({ path: path.join(artifacts, "diagnostic-failure.png") })
      .catch(() => {});
    throw error;
  } finally {
    await app?.close();
    if (!path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep))
      throw Error("Unsafe cleanup");
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((error) => {
  console.error(
    JSON.stringify({
      audit: "QT-RCA-001",
      stage: lastStage,
      errorCode: error?.code ?? error?.name ?? "UNKNOWN",
      status: "FAIL",
      artifact: "test-results/qt-rca-001/diagnostic-failure.json",
    }),
  );
  process.exitCode = 1;
});
