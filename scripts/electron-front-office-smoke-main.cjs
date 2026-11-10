// Dedicated hidden acceptance entry: synthetic vault/profile and mocked endpoints only.
const { app } = require("electron");
const fs = require("node:fs"),
  path = require("node:path");
if (!process.env.ORBISTRY_SMOKE_DATA)
  throw new Error("Isolated profile required");
app.setPath("userData", process.env.ORBISTRY_SMOKE_DATA);
fs.mkdirSync(process.env.ORBISTRY_SMOKE_DATA, { recursive: true });
const { createOnlineSmokeFetch } = require("./fixtures/online-smoke-fetch.cjs");
const fallback = createOnlineSmokeFetch();
const state = {
  requests: [],
  mode: "success",
  delayMs: 80,
  backgroundState: fallback.state,
};
globalThis.frontOfficeSmoke = state;
globalThis.fetch = async (url, init = {}) => {
  const endpoint = new URL(url);
  const isGateway =
    endpoint.hostname === "127.0.0.1" && endpoint.port === "4000";
  if (
    endpoint.hostname === "openrouter.ai" &&
    endpoint.pathname === "/api/v1/models"
  ) {
    if (init.headers?.Authorization !== "Bearer synthetic-front-office-key")
      return new Response("Unauthorized", { status: 401 });
    return Response.json({
      data: [
        {
          id: "vendor/alpha",
          name: "Alpha vision",
          context_length: 65536,
          top_provider: { max_completion_tokens: 8192 },
          architecture: {
            input_modalities: ["text", "image"],
            output_modalities: ["text"],
          },
          supported_parameters: [
            "temperature",
            "max_tokens",
            "tools",
            "structured_outputs",
          ],
          pricing: { prompt: "0.000001", completion: "0.000002" },
        },
        {
          id: "vendor/beta",
          name: "Beta text",
          context_length: 32768,
          top_provider: { max_completion_tokens: 4096 },
          architecture: {
            input_modalities: ["text"],
            output_modalities: ["text"],
          },
          supported_parameters: ["temperature", "max_tokens"],
          pricing: { prompt: "0", completion: "0" },
        },
      ],
    });
  }
  if (init.body && (endpoint.hostname === "openrouter.ai" || isGateway)) {
    const body = JSON.parse(init.body);
    if (body.messages?.every((m) => m.role !== "system")) {
      const expected = isGateway
        ? "Bearer synthetic-local-gateway-key"
        : "Bearer synthetic-front-office-key";
      if (init.headers?.Authorization !== expected)
        return new Response("Unauthorized", { status: 401 });
      state.requests.push({
        body,
        transport: isGateway ? "litellm-fixture" : "direct-fixture",
      });
      if (state.mode === "auth")
        return new Response("PRIVATE_ERROR_BODY", { status: 401 });
      if (state.mode === "unavailable")
        return new Response("PRIVATE_ERROR_BODY", { status: 404 });
      if (state.mode === "rate")
        return new Response("PRIVATE_ERROR_BODY", { status: 429 });
      if (state.mode === "network") throw new TypeError("PRIVATE_NETWORK_BODY");
      if (state.mode === "timeout")
        return new Promise((_, reject) => {
          if (init.signal.aborted) reject(init.signal.reason);
          else
            init.signal.addEventListener(
              "abort",
              () => reject(init.signal.reason),
              { once: true },
            );
        });
      if (state.mode === "primary-failure" && body.model === "vendor/alpha")
        return new Response("PRIVATE_ERROR_BODY", { status: 503 });
      if (!body.stream)
        return Response.json({
          model: body.model,
          choices: [
            { message: { content: "FRONT OFFICE OK" }, finish_reason: "stop" },
          ],
          usage: { prompt_tokens: 15, completion_tokens: 4 },
        });
      let timer;
      const encoder = new TextEncoder();
      const event = (value) =>
        encoder.encode(`data: ${JSON.stringify(value)}\n\n`);
      return new Response(
        new ReadableStream({
          start(controller) {
            controller.enqueue(
              event({
                model: body.model.replace(/^openrouter\//, ""),
                choices: [
                  { delta: { content: "FRONT " }, finish_reason: null },
                ],
              }),
            );
            timer = setTimeout(() => {
              if (state.mode === "partial-failure") {
                controller.enqueue(
                  event({
                    error: { code: 500, message: "PRIVATE_ERROR_BODY" },
                  }),
                );
                controller.close();
                return;
              }
              controller.enqueue(
                event({
                  model: body.model.replace(/^openrouter\//, ""),
                  choices: [
                    { delta: { content: "OFFICE OK" }, finish_reason: "stop" },
                  ],
                }),
              );
              controller.enqueue(
                event({
                  choices: [],
                  usage: { prompt_tokens: 15, completion_tokens: 4 },
                }),
              );
              controller.enqueue(encoder.encode("data: [DONE]\n\n"));
              controller.close();
            }, state.delayMs);
            init.signal?.addEventListener(
              "abort",
              () => {
                clearTimeout(timer);
                try {
                  controller.error(init.signal.reason);
                } catch {}
              },
              { once: true },
            );
          },
          cancel() {
            clearTimeout(timer);
          },
        }),
        { headers: { "Content-Type": "text/event-stream" } },
      );
    }
  }
  if (isGateway && endpoint.pathname === "/health/liveliness")
    return Response.json({ status: "ok" });
  return fallback.fetchImpl(url, init);
};
app.on("browser-window-created", (_, window) =>
  window.webContents.setBackgroundThrottling(false),
);
require("../electron/main.cjs");
