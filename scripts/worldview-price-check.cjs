const assert = require("node:assert/strict");
const path = require("node:path");

/** Verifies ticker persistence, charts, keyboard/range controls and explicit offline cache status in an isolated Electron Universe using an injected synthetic market client. */
async function verifyDailyPrices({ app, page, vault, createChip }) {
  console.log("Checking daily price Engine and Knowledge Card charts...");
  await app.evaluate((_, repository) => {
    const require = process
      .getBuiltinModule("node:module")
      .createRequire(repository + "/package.json");
    const service = require(
      require("node:path").join(repository, "electron/daily-price-service.cjs"),
    );
    const now = Date.now();
    globalThis.dailyPriceSmoke = { requests: 0, offline: false };
    const fixture = service.createDailyPriceService({
      /** Supplies test-only observations through the production cache implementation. */
      async price(symbol) {
        globalThis.dailyPriceSmoke.requests++;
        if (globalThis.dailyPriceSmoke.offline)
          throw new Error("synthetic provider outage");
        return {
          schemaVersion: 1,
          engineVersion: "0.1.0",
          provider: "Yahoo Finance",
          symbol,
          currency: "IDR",
          exchangeTimezone: "Asia/Jakarta",
          price: 12345.67,
          previousClose: 12000,
          marketTime: new Date(now - 3600000).toISOString(),
          marketState: "CLOSED",
          delayMinutes: 15,
          fetchedAt: new Date(now).toISOString(),
          historyFetchedAt: new Date(now).toISOString(),
          history: Array.from({ length: 90 }, (_, index) => ({
            date: new Date(now - (90 - index) * 86400000)
              .toISOString()
              .slice(0, 10),
            close: 11000 + index * 15 + (index % 7) * 30,
          })),
        };
      },
    });
    service.dailyPriceService.get = fixture.get;
  }, path.resolve("."));
  await createChip(page, "Price Engine");
  await page.waitForFunction(
    () =>
      !/Saving|Loading/.test(
        document.querySelector(".worldview-save-status").textContent,
      ),
  );
  await page
    .getByRole("button", { name: "View Knowledge Card", exact: true })
    .click();
  const card = page.locator(".knowledge-card");
  const pricesButton = card.getByRole("button", {
    name: "Banking",
    exact: true,
  });
  await page.waitForFunction(
    () =>
      document.querySelector(".knowledge-menu-title") &&
      !document.querySelector(".knowledge-write-index")?.disabled,
  );
  assert.equal(
    await card.getByRole("button", { name: "Prices", exact: true }).count(),
    0,
  );
  await card.getByRole("button", { name: "Write Index", exact: true }).click();
  const editor = card.getByRole("textbox", {
    name: "Index declarations",
    exact: true,
  });
  await editor.fill('# Banking\nsource: yahooPrice("../bad")');
  await card
    .getByRole("button", { name: "Validate Index", exact: true })
    .click();
  await card.locator(".knowledge-index-errors").waitFor();
  assert.equal(
    await app.evaluate(() => globalThis.dailyPriceSmoke.requests),
    0,
  );
  await editor.fill(
    '# Banking\nsource: yahooPrice()\n# Semiconductor\nsource: yahooPrice("NVDA")\nsource: yahooPrice("AMD")\n# Notes',
  );
  await card.getByRole("button", { name: "Apply Index", exact: true }).click();
  const panel = card.locator(".daily-price").first();
  const ticker = panel.getByRole("textbox", {
    name: "Yahoo Finance ticker",
    exact: true,
  });
  assert.equal(
    await app.evaluate(() => globalThis.dailyPriceSmoke.requests),
    0,
  );
  await ticker.fill("../bad");
  await panel.getByRole("button", { name: "Save ticker", exact: true }).click();
  await panel
    .getByRole("alert")
    .filter({ hasText: "Use a Yahoo ticker" })
    .waitFor();
  assert.equal(
    await app.evaluate(() => globalThis.dailyPriceSmoke.requests),
    0,
  );
  await ticker.fill("test.jk");
  await app.evaluate(() => {
    globalThis.dailyPriceSmoke.offline = true;
  });
  await panel.getByRole("button", { name: "Save ticker", exact: true }).click();
  await panel
    .getByRole("alert")
    .filter({ hasText: "could not be loaded" })
    .waitFor();
  assert.equal(await panel.locator("canvas").count(), 0);
  await app.evaluate(() => {
    globalThis.dailyPriceSmoke.offline = false;
  });
  await panel
    .getByRole("button", { name: "Refresh prices", exact: true })
    .click();
  await panel.locator(".daily-price-value").waitFor();
  assert.match(
    await panel.locator(".daily-price-value").innerText(),
    /12,345.67 IDR/,
  );
  assert.match(await panel.innerText(), /Asia\/Jakarta/);
  assert.match(await panel.innerText(), /reported delay 15 min/);
  const chart = panel.locator("canvas");
  assert.match(await chart.getAttribute("aria-label"), /90 observations/);
  const raster = await chart.evaluate((element) =>
    Array.from(
      element.getContext("2d").getImageData(0, 0, element.width, element.height)
        .data,
    ).some((value) => value > 0),
  );
  assert.equal(raster, true);
  await panel.getByRole("button", { name: "1M", exact: true }).click();
  assert.equal(
    await panel
      .getByRole("button", { name: "1M", exact: true })
      .getAttribute("aria-pressed"),
    "true",
  );
  assert.match(await chart.getAttribute("aria-label"), /31 observations/);
  await chart.focus();
  assert.equal(
    await chart.evaluate((element) => getComputedStyle(element).boxShadow),
    "none",
  );
  assert.equal(
    await panel
      .locator(".daily-price-value")
      .evaluate((element) => getComputedStyle(element).fontSize),
    "28px",
  );
  await chart.press("ArrowLeft");
  assert.match(
    await panel.locator(".daily-price-chart p").innerText(),
    /\d{4}-\d{2}-\d{2}.*IDR/,
  );
  await page.screenshot({ path: "test-results/worldview-daily-price.png" });
  await app.evaluate(() => {
    globalThis.dailyPriceSmoke.offline = true;
  });
  await panel
    .getByRole("button", { name: "Refresh prices", exact: true })
    .click();
  await panel
    .getByRole("status")
    .filter({ hasText: "Showing saved prices" })
    .waitFor();
  assert.match(await panel.locator(".daily-price-value").innerText(), /IDR/);
  await card
    .getByRole("button", { name: "Close Knowledge Card", exact: true })
    .click();
  await page
    .getByRole("button", { name: "View Knowledge Card", exact: true })
    .click();
  await pricesButton.click();
  await panel.locator(".daily-price-value").waitFor();
  assert.equal(await ticker.inputValue(), "TEST.JK");
  await ticker.fill("");
  await panel
    .getByRole("button", { name: "Remove ticker", exact: true })
    .click();
  await panel.locator("canvas").waitFor({ state: "hidden" });
  await app.evaluate(() => {
    globalThis.dailyPriceSmoke.offline = false;
  });
  await card
    .getByRole("button", { name: "Semiconductor", exact: true })
    .click();
  await card.locator(".daily-price").nth(1).locator("canvas").waitFor();
  assert.equal(await card.locator(".daily-price canvas").count(), 2);
  assert.deepEqual(
    await card.locator(".daily-price-quote strong").allTextContents(),
    ["NVDA", "AMD"],
  );
  assert.equal(
    await card
      .getByRole("textbox", { name: "Yahoo Finance ticker", exact: true })
      .count(),
    0,
  );
  await page.screenshot({ path: "test-results/worldview-indexed-prices.png" });
  await card.getByRole("button", { name: "Notes", exact: true }).click();
  assert.equal(await card.locator(".daily-price").count(), 0);
  await card
    .getByRole("button", { name: "Close Knowledge Card", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Deselect entity", exact: true })
    .click();
  await page.getByRole("button", { name: "Reset view", exact: true }).click();
  return {
    status: "passed",
    tickerValidation: true,
    tickerPersistence: true,
    chart: true,
    range: true,
    keyboard: true,
    timestamp: true,
    offlineCache: true,
    removal: true,
    indexedSources: true,
    industrySections: true,
    multipleTickers: true,
  };
}
module.exports = { verifyDailyPrices };
