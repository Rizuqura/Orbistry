const { _electron: electron } = require("playwright");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
const assert = require("node:assert/strict");

async function main() {
  const root = await fs.mkdtemp(
    path.join(os.tmpdir(), "orbistry-front-office-ui-"),
  );
  const artifacts = path.resolve("test-results/front-office");
  await fs.mkdir(artifacts, { recursive: true });
  let app;
  const errors = [];
  try {
    const env = {
      ...process.env,
      ORBISTRY_VAULT_PATH: root,
      ORBISTRY_SMOKE_DATA: path.join(root, ".wonnyy", "app-data"),
    };
    delete env.ELECTRON_RUN_AS_NODE;
    delete env.ELECTRON_START_URL;
    app = await electron.launch({
      args: [
        path.resolve("scripts/electron-front-office-smoke-main.cjs"),
        "--hidden",
      ],
      env,
      timeout: 30000,
    });
    const page = await app.firstWindow();
    await page.setViewportSize({ width: 1440, height: 1000 });
    page.setDefaultTimeout(20000);
    page.on("pageerror", (e) => errors.push(e.message));
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page.getByRole("button", { name: "SETTINGS", exact: true }).click();
    await page.getByText("LLM Backend / Front Office", { exact: true }).click();
    await page.evaluate(async () => {
      await window.orbistryDesktop.ai.saveCredential({
        providerId: "openrouter",
        apiKey: "synthetic-front-office-key",
      });
    });
    await page
      .getByRole("button", {
        name: "Refresh OpenRouter capabilities",
        exact: true,
      })
      .click();
    const catalog = page.getByRole("region", {
      name: "Capability model catalog",
    });
    await catalog
      .getByRole("button", { name: "Inspect vendor/alpha", exact: true })
      .waitFor();
    await page.getByLabel("Enable experimental chat", { exact: true }).check();
    await page
      .getByLabel("Experimental model", { exact: true })
      .selectOption("openrouter:vendor/alpha");
    await page
      .getByRole("button", { name: "Save backend settings", exact: true })
      .click();
    await page
      .getByRole("button", {
        name: "New experiment / reset history",
        exact: true,
      })
      .click();
    const send = async (text) => {
      const before = await page.evaluate(
        async () =>
          (await window.orbistryDesktop.ai.frontOfficeList())[0]?.attempts
            .length ?? 0,
      );
      await page.getByLabel("Experiment question", { exact: true }).fill(text);
      await page
        .getByRole("button", { name: "Send experiment", exact: true })
        .click();
      await page.waitForFunction(async (count) => {
        const list = await window.orbistryDesktop.ai.frontOfficeList();
        return (
          list[0]?.attempts.length === count + 1 &&
          list[0]?.attempts.at(-1)?.status === "succeeded"
        );
      }, before);
    };
    await send("Reply with a synthetic fixture answer.");
    await page
      .getByLabel("Experiment messages")
      .getByText("FRONT OFFICE OK", { exact: true })
      .waitFor();
    let captured = await app.evaluate(
      () => globalThis.frontOfficeSmoke.requests,
    );
    assert.deepEqual(captured[0].body.messages, [
      { role: "user", content: "Reply with a synthetic fixture answer." },
    ]);
    assert.equal(captured[0].body.model, "vendor/alpha");
    await send("A second turn includes the complete experiment history.");
    captured = await app.evaluate(() => globalThis.frontOfficeSmoke.requests);
    assert.equal(captured.at(-1).body.messages.length, 3);
    await page
      .getByLabel("Catalog capability", { exact: true })
      .selectOption("vision");
    assert.equal(
      await catalog.getByRole("button", { name: /^Inspect / }).count(),
      1,
    );
    await page
      .getByLabel("Catalog capability", { exact: true })
      .selectOption("all");
    await page
      .getByLabel("Catalog sort", { exact: true })
      .selectOption("price");
    assert.match(
      await catalog.locator("tbody tr").first().innerText(),
      /Beta text/,
    );
    await page
      .getByLabel("Catalog sample budget USD", { exact: true })
      .fill("0");
    assert.equal(
      await catalog.getByRole("button", { name: /^Inspect / }).count(),
      1,
    );
    await page
      .getByLabel("Catalog sample budget USD", { exact: true })
      .fill("");
    await catalog
      .getByRole("button", { name: "Inspect vendor/alpha", exact: true })
      .click();
    await page
      .getByLabel("Model override JSON", { exact: true })
      .fill('{"contextTokens":65536,"structuredOutput":true}');
    await page
      .getByRole("button", { name: "Apply model override", exact: true })
      .click();
    await page
      .getByRole("region", { name: "Model detail inspector" })
      .getByText("local-override", { exact: true })
      .waitFor();
    await catalog.screenshot({
      path: path.join(artifacts, "capability-catalog.png"),
    });
    await app.evaluate(() => {
      globalThis.frontOfficeSmoke.mode = "partial-failure";
    });
    await page
      .getByLabel("Experiment question", { exact: true })
      .fill("Try a bounded partial failure.");
    await page
      .getByRole("button", { name: "Send experiment", exact: true })
      .click();
    await page
      .getByRole("alert")
      .filter({ hasText: /server error/ })
      .waitFor();
    const failedCount = (
      await app.evaluate(() => globalThis.frontOfficeSmoke.requests)
    ).length;
    await app.evaluate(() => {
      globalThis.frontOfficeSmoke.mode = "success";
    });
    await page
      .getByRole("button", { name: "Retry failed turn", exact: true })
      .click();
    await page.waitForFunction(async () => {
      const c = (await window.orbistryDesktop.ai.frontOfficeList())[0];
      return c.attempts.at(-1).status === "succeeded";
    });
    assert.equal(
      (await app.evaluate(() => globalThis.frontOfficeSmoke.requests)).length,
      failedCount + 1,
    );
    const conversation = await page.evaluate(
      async () => (await window.orbistryDesktop.ai.frontOfficeList())[0],
    );
    assert.equal(
      conversation.messages.filter((m) => m.role === "user").length,
      3,
    );
    await page
      .getByLabel("Experiment question", { exact: true })
      .scrollIntoViewIfNeeded();
    await page.screenshot({
      path: path.join(artifacts, "experimental-chat.png"),
    });
    // Exercise the authenticated loopback adapter with a mocked gateway, explicitly
    // not claiming this fixture server is a real LiteLLM performance result.
    await page.evaluate(async () => {
      const ai = window.orbistryDesktop.ai;
      await ai.saveCredential({
        providerId: "litellm",
        apiKey: "synthetic-local-gateway-key",
      });
      const { config } = await ai.frontOfficeState();
      config.gateway.enabled = true;
      await ai.frontOfficeConfig(config);
      const c = await ai.frontOfficeCreate();
      const result = await ai.frontOfficeChat({
        conversationId: c.id,
        requestId: crypto.randomUUID(),
        userMessage: "Gateway fixture parity",
        transport: "litellm",
      });
      if (result.run.diagnostics.frontOffice.mode !== "experiment")
        throw Error("Missing trace");
    });
    captured = await app.evaluate(() => globalThis.frontOfficeSmoke.requests);
    assert.equal(captured.at(-1).transport, "litellm-fixture");
    assert.equal(captured.at(-1).body.model, "openrouter/vendor/alpha");
    const exported = await page.evaluate(() =>
      window.orbistryDesktop.ai.frontOfficeExport("json"),
    );
    assert.doesNotMatch(
      exported,
      /synthetic-front-office-key|synthetic-local-gateway-key|Reply with a synthetic|PRIVATE_ERROR_BODY/,
    );
    await page
      .getByText("Advanced tuning and gateway", { exact: true })
      .click();
    await page
      .getByLabel("Advanced backend configuration", { exact: true })
      .fill('{"PRIVATE_JSON_INPUT":');
    await page
      .getByRole("button", {
        name: "Apply advanced configuration",
        exact: true,
      })
      .click();
    const invalidJsonAlert = page
      .getByRole("alert")
      .filter({ hasText: "Invalid JSON" });
    await invalidJsonAlert.waitFor();
    assert.doesNotMatch(
      await invalidJsonAlert.innerText(),
      /PRIVATE_JSON_INPUT/,
    );
    // Deterministic admission regression: an actual manual model check owns the
    // normal ChatService lock while the experiment UI starts a new conversation.
    await page.evaluate(async () => {
      await window.orbistryDesktop.ai.saveCredential({
        providerId: "nvidia",
        apiKey: "nvapi-synthetic-smoke-key",
      });
    });
    await page
      .getByRole("navigation", { name: "AI providers" })
      .getByRole("button", { name: /NVIDIA/ })
      .click();
    await page
      .getByRole("button", { name: "Refresh models", exact: true })
      .click();
    await page
      .getByRole("region", { name: "NVIDIA models", exact: true })
      .locator("article")
      .first()
      .waitFor();
    await app.evaluate(() => {
      globalThis.frontOfficeSmoke.backgroundState.checkDelayMs = 10000;
    });
    await page
      .getByRole("region", { name: "NVIDIA models", exact: true })
      .getByRole("button", { name: "Check model", exact: true })
      .first()
      .click();
    await page
      .getByRole("button", { name: "Stop checks", exact: true })
      .waitFor();
    await page
      .getByRole("button", {
        name: "New experiment / reset history",
        exact: true,
      })
      .click();
    await page
      .getByRole("button", { name: "Stop checks", exact: true })
      .waitFor({ state: "hidden" });
    assert.equal(
      await page.getByRole("alert").filter({ hasText: "MODEL_BUSY" }).count(),
      0,
    );

    const evidence = {
      source: "synthetic Electron UI fixtures; not live provider proof",
      admission: "PASS",
      failures: [],
      fallback: null,
    };
    // A backend finish proves dispatch, not rendering. Observe the visible
    // alert/final assistant separately with the same request identity.
    const frontendObservation = (event) => ({
      timestamp: new Date().toISOString(),
      requestId: event.requestId,
      stage: "FRONTEND_RESPONSE_DELIVERED",
      status: "ok",
      elapsedMs: Date.now() - Date.parse(event.trace.startedAt),
    });
    const applyConfig = async (edit) => {
      const c = await page.evaluate(
        async () => (await window.orbistryDesktop.ai.frontOfficeState()).config,
      );
      edit(c);
      await page
        .getByLabel("Advanced backend configuration", { exact: true })
        .fill(JSON.stringify(c));
      await page
        .getByRole("button", {
          name: "Apply advanced configuration",
          exact: true,
        })
        .click();
      await page
        .getByText("Backend configuration saved.", { exact: true })
        .waitFor();
      const previous = await page
        .getByLabel("Saved experiment", { exact: true })
        .inputValue();
      await page
        .getByRole("button", {
          name: "New experiment / reset history",
          exact: true,
        })
        .click();
      await page.waitForFunction((old) => {
        const id = document.querySelector(
          '[aria-label="Saved experiment"]',
        )?.value;
        return id && id !== old;
      }, previous);
    };
    const terminal = async (text) => {
      await page.evaluate(() => {
        globalThis.fixtureTerminal = null;
        globalThis.fixtureUnsubscribe?.();
        globalThis.fixtureUnsubscribe =
          window.orbistryDesktop.ai.onFrontOfficeEvent((e) => {
            if (["finish", "error", "cancelled"].includes(e.type))
              globalThis.fixtureTerminal = e;
          });
      });
      await page.getByLabel("Experiment question", { exact: true }).fill(text);
      await page
        .getByRole("button", { name: "Send experiment", exact: true })
        .click();
      await page.waitForFunction(() => globalThis.fixtureTerminal !== null);
      return page.evaluate(() => globalThis.fixtureTerminal);
    };
    const base = (c) => {
      c.gateway.enabled = false;
      c.enabled = true;
      c.routing.mode = "manual";
      c.routing.selectedDeploymentId = "openrouter:vendor/alpha";
      c.routing.allowedProviders = ["openrouter"];
      c.routing.allowFallback = false;
      c.generation.streaming = true;
      c.reliability.maxAttempts = 1;
      c.reliability.deadlineMs = 1000;
      c.reliability.backoffMs = 0;
      c.reliability.circuitThreshold = 10;
    };
    for (const [mode, code] of [
      ["auth", "AUTH_INVALID"],
      ["unavailable", "MODEL_UNAVAILABLE"],
      ["rate", "RATE_LIMITED"],
      ["network", "PROVIDER_OFFLINE"],
      ["timeout", "MODEL_TIMEOUT"],
    ]) {
      await applyConfig(base);
      await app.evaluate((_, m) => {
        globalThis.frontOfficeSmoke.mode = m;
      }, mode);
      console.log(`Fixture failure: ${mode}`);
      const event = await terminal("Synthetic failure visibility test.");
      assert.equal(event.type, "error");
      await page.getByRole("alert").filter({ hasText: code }).waitFor();
      assert.doesNotMatch(
        await page.getByRole("alert").filter({ hasText: code }).innerText(),
        /PRIVATE_/,
      );
      evidence.failures.push({
        mode,
        code,
        visible: true,
        status: "PASS",
        trace: event.trace,
        frontendObservation: frontendObservation(event),
      });
    }
    await applyConfig((c) => {
      base(c);
      c.routing.selectedDeploymentId = "openrouter:vendor/missing";
    });
    const count = await app.evaluate(
      () => globalThis.frontOfficeSmoke.requests.length,
    );
    const ineligibleEvent = await terminal(
      "Synthetic no eligible deployment test.",
    );
    await page
      .getByRole("alert")
      .filter({ hasText: "MODEL_UNAVAILABLE" })
      .waitFor();
    assert.equal(
      await app.evaluate(() => globalThis.frontOfficeSmoke.requests.length),
      count,
    );
    evidence.failures.push({
      mode: "no-eligible",
      code: "MODEL_UNAVAILABLE",
      visible: true,
      providerCalls: 0,
      status: "PASS",
      trace: ineligibleEvent.trace,
      frontendObservation: frontendObservation(ineligibleEvent),
    });
    await applyConfig((c) => {
      base(c);
      c.routing.mode = "auto";
      c.routing.priority = "quality";
      c.routing.allowFallback = true;
      c.routing.allowModelSwitch = true;
      c.reliability.maxAttempts = 2;
      c.reliability.deadlineMs = 5000;
    });
    await app.evaluate(() => {
      globalThis.frontOfficeSmoke.mode = "primary-failure";
    });
    const fallbackEvent = await terminal("Synthetic controlled fallback test.");
    assert.equal(fallbackEvent.type, "finish");
    const assistant = page
      .getByLabel("Experiment messages")
      .locator("article")
      .filter({
        has: page.locator("strong").filter({ hasText: /^assistant$/ }),
      });
    await assistant.getByText("FRONT OFFICE OK", { exact: true }).waitFor();
    const trace = fallbackEvent.trace;
    assert.equal(trace.providerCallCount, 2);
    assert.equal(trace.routing.fallbackUsed, true);
    assert.equal(trace.usageCoverage, "partial");
    assert.equal(trace.estimatedCostUsd, null);
    evidence.fallback = {
      status: "PASS",
      trace,
      frontendObservation: frontendObservation(fallbackEvent),
    };
    await fs.writeFile(
      path.join(artifacts, "failure-fallback-admission.json"),
      JSON.stringify(evidence, null, 2),
    );
    await page.screenshot({
      path: path.join(artifacts, "controlled-fallback.png"),
    });
    assert.deepEqual(errors, []);
    console.log(
      "PASS: isolated Electron experiment UI, complete history, capability filters, partial-stream retry, model-check admission, six visible safe failures, two-attempt controlled fallback, mocked gateway and privacy-safe metrics. No live inference or real LiteLLM measurement.",
    );
  } finally {
    if (app) await app.close();
    await fs.rm(root, { recursive: true, force: true });
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
