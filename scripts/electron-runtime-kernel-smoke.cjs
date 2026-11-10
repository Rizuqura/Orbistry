const { _electron: electron } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises"),
  path = require("node:path"),
  os = require("node:os");
const {
  canonical,
  canonicalHash,
} = require("../electron/ai/runtime-context.cjs");
async function main() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "orbistry-kernel-"));
  let app, page;
  const errors = [];
  try {
    await fs.writeFile(path.join(root, "policy.md"), canonical);
    await fs.writeFile(
      path.join(root, "research.md"),
      "ALPHA allocation is 25%.",
    );
    await fs.writeFile(
      path.join(root, "style.md"),
      "STYLE_REFERENCE_SENTINEL: Use concise paragraphs.",
    );
    const env = {
      ...process.env,
      ORBISTRY_VAULT_PATH: root,
      ORBISTRY_SMOKE_DATA: path.join(root, ".wonnyy", "app-data"),
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
    page.setDefaultTimeout(30000);
    page.on("pageerror", (e) => errors.push(e.message));
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    const box = await page.evaluate(async () => {
      const ai = window.orbistryDesktop.ai;
      await ai.settings({ contextWindow: 32768 });
      const box = await ai.editContextBox({
        action: "create",
        name: "Kernel research",
        paths: ["policy.md", "research.md"],
      });
      const agent = await ai.getAgent("wonnyy-agent");
      const config = structuredClone(agent.construction.draft);
      const policy = (
        await ai.previewConstructionFile({ relativePath: "policy.md" })
      ).binding;
      const style = (
        await ai.previewConstructionFile({ relativePath: "style.md" })
      ).binding;
      config.nodes.find((n) => n.kind === "Skill").config.contextFile = policy;
      config.nodes.push({
        id: "personality",
        kind: "Personality",
        x: 64,
        y: 368,
        config: { contextFile: style },
      });
      config.edges.push({ from: "personality", to: "llm" });
      await ai.saveAgentConstruction({
        id: agent.id,
        action: "apply",
        expectedRevision: 0,
        config,
      });
      return box;
    });
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    await page.getByRole("button", { name: "AGENT", exact: true }).click();
    await page
      .getByRole("button", { name: "+ New Chat", exact: true })
      .first()
      .click();
    const picker = page.getByRole("dialog", { name: "New Orbistry Agent chat" });
    await picker.getByRole("radio", { name: /Kernel research/ }).check();
    await picker
      .getByRole("button", { name: "Start Chat", exact: true })
      .click();
    await picker.waitFor({ state: "hidden" });
    const send = async (text, count) => {
      await page
        .getByRole("textbox", { name: "Chat question", exact: true })
        .fill(text);
      await page
        .getByRole("button", { name: "Send message", exact: true })
        .click();
      await page.waitForFunction(async (n) => {
        const c = (await window.orbistryDesktop.ai.listConversations())[0];
        return (
          c?.attempts.length === n && c.attempts.at(-1).status === "succeeded"
        );
      }, count);
    };
    await send("What is ALPHA's allocation?", 1);
    const recordedRequests = async (question) => {
      for (let i = 0; i < 100; i++) {
        const result = JSON.parse(
          await app.evaluate(() =>
            JSON.stringify(globalThis.onlineSmoke.localRequests),
          ),
        );
        if (result.at(-1)?.messages.at(-1)?.content === question) return result;
        await new Promise((resolve) => setTimeout(resolve, 20));
      }
      throw Error("Synthetic provider request was not recorded");
    };
    let requests = await recordedRequests("What is ALPHA's allocation?");
    const first = requests.at(-1);
    assert.doesNotMatch(
      JSON.stringify(first.messages),
      /## 30\. FINAL OPERATING PRINCIPLES/,
    );
    assert.match(JSON.stringify(first.messages), /STYLE_REFERENCE_SENTINEL/);
    assert.ok(first.messages[0].content.length < 3500);
    const envelopes = first.messages
      .filter((m) => m.role === "user")
      .flatMap((m) => {
        try {
          return [JSON.parse(m.content)];
        } catch {
          return [];
        }
      });
    assert.deepEqual(
      envelopes
        .filter((e) => e.kind === "wonnyy-approved-source")
        .map((e) => e.sourceId),
      ["research.md"],
    );
    const compacted = envelopes.find(
      (e) => e.kind === "agent-construction-reference" && e.role === "Skill",
    ).sources[0];
    assert.equal(compacted.content, undefined);
    assert.equal(compacted.policyReference.canonicalHash, canonicalHash);
    const chat = (
      await page.evaluate(() => window.orbistryDesktop.ai.listConversations())
    )[0];
    const run = await require("../electron/ai/run-store.cjs").readModelRun(
      root,
      chat.attempts[0].runId,
    );
    assert.deepEqual(run.diagnostics.evidenceSourceIds, ["research.md"]);
    assert.equal(run.diagnostics.runtimePolicy.canonicalHash, canonicalHash);
    await send("Summarize section 17 of the policy.", 2);
    requests = await recordedRequests("Summarize section 17 of the policy.");
    assert.match(
      JSON.stringify(requests.at(-1).messages),
      /## 30\. FINAL OPERATING PRINCIPLES/,
    );
    await send("Why?", 3);
    requests = await recordedRequests("Why?");
    assert.match(
      JSON.stringify(requests.at(-1).messages),
      /## 30\. FINAL OPERATING PRINCIPLES/,
    );
    await page.reload();
    await page.locator(".startup-screen").waitFor({ state: "hidden" });
    const restored = (
      await page.evaluate(() => window.orbistryDesktop.ai.listConversations())
    )[0];
    assert.equal(restored.messages.length, 6);
    assert.equal(restored.contextBoxId, box.id);
    const savedBox = await page.evaluate(
      (id) => window.orbistryDesktop.ai.inspectContextBox(id),
      box.id,
    );
    assert.deepEqual(
      savedBox.items.map((s) => s.relativePath),
      ["policy.md", "research.md"],
    );
    assert.deepEqual(errors, []);
    console.log(
      "PASS: actual Electron prompts use kernel and compact canonical references; ordinary guidance/evidence preserved; full policy analysis and follow-up restored; diagnostics, bindings and restart intact. Synthetic model responses.",
    );
  } catch (error) {
    await page
      ?.screenshot({ path: "test-results/runtime-kernel-failure.png" })
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
