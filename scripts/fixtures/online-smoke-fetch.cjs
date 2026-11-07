// Synthetic transports for the dedicated hidden Electron test entry only.
function createOnlineSmokeFetch() {
  const nativeFetch = globalThis.fetch;
  const state = {
    requests: [],
    localRequests: [],
    status: 200,
    nvidiaModelStatuses: {},
    checkDelayMs: 0,
    openrouterCatalogStatus: 200,
    usageStatus: 200,
    usageRequests: 0,
    engineToolMode: "mock",
    usageData: {
      limit: 100,
      limit_remaining: 74.5,
      limit_reset: "weekly",
      usage_weekly: 25.5,
    },
  };
  const datasetPlan = (body) => {
    const system =
      body?.messages?.[0]?.content ??
      body?.systemInstruction?.parts?.[0]?.text ??
      "";
    return system.includes("You plan read-only CSV analysis")
      ? {
          task: "Inspect approved CSV rows.",
          queries: [{ sourceId: "details.csv", operation: "rows", limit: 100 }],
        }
      : null;
  };
  const fetchImpl = async (url, init = {}) => {
    const endpoint = new URL(url);
    const body = init.body ? JSON.parse(init.body) : null;
    if (
      body?.tools &&
      endpoint.hostname === "127.0.0.1" &&
      endpoint.pathname === "/api/chat"
    ) {
      state.localRequests.push(body);
      if (state.engineToolMode === "live") return nativeFetch(url, init);
      return Response.json({
        model: body.model,
        done: true,
        done_reason: "stop",
        message: {
          role: "assistant",
          content: "",
          tool_calls: [
            {
              function: {
                name: "chronoz_get_report",
                arguments: { month: "2026-10" },
              },
            },
          ],
        },
        prompt_eval_count: 100,
        eval_count: 20,
      });
    }
    if (endpoint.hostname === "openrouter.ai") {
      if (init.headers.Authorization !== "Bearer sk-or-v1-synthetic-smoke-key")
        return new Response("Invalid key", { status: 401 });
      if (endpoint.pathname === "/api/v1/key") {
        state.usageRequests++;
        return state.usageStatus === 200
          ? Response.json({ data: state.usageData })
          : new Response("Synthetic usage failure", {
              status: state.usageStatus,
            });
      }
      if (!body && state.openrouterCatalogStatus !== 200)
        return new Response("Synthetic catalog outage", {
          status: state.openrouterCatalogStatus,
        });
      if (!body)
        return Response.json({
          data: [
            {
              id: "~vendor/model-latest",
              name: "Router Alias",
              context_length: 32768,
            },
            { id: "invalid catalog row with spaces" },
            {
              id: "vendor/route-smoke:free",
              name: "Router Smoke",
              context_length: 32768,
              architecture: {
                input_modalities: ["text"],
                output_modalities: ["text"],
              },
              top_provider: { max_completion_tokens: 8192 },
            },
            {
              id: "vendor/route-second",
              name: "Router Second",
              context_length: 32768,
              architecture: {
                input_modalities: ["text"],
                output_modalities: ["text"],
              },
            },
          ],
        });
      state.requests.push(body);
      if (state.status !== 200)
        return new Response("Synthetic provider failure", {
          status: state.status,
        });
      const source = JSON.parse(body.messages[1].content);
      const answer = datasetPlan(body)
        ? JSON.stringify(datasetPlan(body))
        : source.sourceId === "wonnyy-model-check"
          ? "40%"
          : "ALPHA allocation is 25%.";
      const encoder = new TextEncoder();
      let timer;
      return new Response(
        new ReadableStream({
          start(controller) {
            const event = (value) =>
              encoder.encode(`data: ${JSON.stringify(value)}\n\n`);
            controller.enqueue(encoder.encode(": OPENROUTER PROCESSING\n\n"));
            controller.enqueue(
              event({
                model: body.model,
                choices: [
                  {
                    delta: {
                      reasoning: "Hidden reasoning",
                      content: answer.slice(0, 6),
                    },
                    finish_reason: null,
                  },
                ],
              }),
            );
            timer = setTimeout(
              () => {
                controller.enqueue(
                  event({
                    model: body.model,
                    choices: [
                      {
                        delta: { content: answer.slice(6) },
                        finish_reason: "stop",
                      },
                    ],
                  }),
                );
                controller.enqueue(
                  event({
                    choices: [{ delta: {}, finish_reason: "stop" }],
                    usage: { prompt_tokens: 99, completion_tokens: 12 },
                  }),
                );
                controller.enqueue(encoder.encode("data: [DONE]\n\n"));
                controller.close();
              },
              source.sourceId === "wonnyy-model-check"
                ? 50
                : state.checkDelayMs || 250,
            );
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
        { headers: { "content-type": "text/event-stream" } },
      );
    }
    if (endpoint.hostname === "integrate.api.nvidia.com") {
      if (init.headers.Authorization !== "Bearer nvapi-synthetic-smoke-key")
        return new Response("Invalid key", { status: 401 });
      if (!body)
        return Response.json({
          data: [
            { id: "nvidia/nemotron-smoke" },
            { id: "deepseek-ai/deepseek-smoke" },
          ],
        });
      state.requests.push(body);
      if (state.nvidiaModelStatuses[body.model])
        return new Response("Unavailable", {
          status: state.nvidiaModelStatuses[body.model],
        });
      if (state.status !== 200)
        return new Response("Provider error", { status: state.status });
      const probe = body.messages[0].content.includes("NVIDIA ONLINE");
      const source = probe ? null : JSON.parse(body.messages[1].content);
      if (source?.sourceId === "wonnyy-model-check" && state.checkDelayMs) {
        await new Promise((resolve, reject) => {
          const abort = () => {
            clearTimeout(timer);
            reject(init.signal.reason);
          };
          const timer = setTimeout(() => {
            init.signal.removeEventListener("abort", abort);
            resolve();
          }, state.checkDelayMs);
          init.signal.addEventListener("abort", abort, { once: true });
        });
      }
      const answer = probe
        ? "NVIDIA ONLINE"
        : source.sourceId === "wonnyy-model-check"
          ? "40%"
          : source.content.includes("ALPHA")
            ? "ALPHA allocation is 25%."
            : "BETA allocation is 40%.";
      const events = [
        {
          choices: [
            {
              delta: { reasoning_content: "Hidden reasoning" },
              finish_reason: null,
            },
          ],
        },
        {
          model: body.model,
          choices: [
            {
              delta: {
                content: datasetPlan(body)
                  ? JSON.stringify(datasetPlan(body))
                  : answer,
              },
              finish_reason: "stop",
            },
          ],
        },
      ];
      return new Response(
        events.map((event) => `data: ${JSON.stringify(event)}\n\n`).join(""),
        { headers: { "content-type": "text/event-stream" } },
      );
    }
    if (endpoint.hostname === "generativelanguage.googleapis.com") {
      if (init.headers["x-goog-api-key"] !== "AQ.synthetic-smoke-key")
        return Response.json(
          { error: { message: "API_KEY_INVALID" } },
          { status: 400 },
        );
      if (!body)
        return Response.json({
          models: [
            {
              name: "models/gemini-smoke",
              displayName: "Gemini Smoke",
              supportedGenerationMethods: ["generateContent"],
              inputTokenLimit: 32768,
              outputTokenLimit: 8192,
            },
          ],
        });
      state.requests.push(body);
      if (state.status !== 200)
        return new Response("Provider error", {
          status: state.status,
          headers: { "retry-after": "1" },
        });
      const source = JSON.parse(body.contents[0].parts[0].text);
      const answer =
        source.sourceId === "wonnyy-model-check"
          ? "40%"
          : source.content.includes("ALPHA")
            ? "ALPHA allocation is 25%."
            : "BETA allocation is 40%.";
      const encoded = JSON.stringify(datasetPlan(body) ?? { answer });
      const encoder = new TextEncoder();
      return new Response(
        new ReadableStream({
          start(controller) {
            const event = (text, finishReason) =>
              encoder.encode(
                `data: ${JSON.stringify({ candidates: [{ content: { parts: [{ text }] }, ...(finishReason ? { finishReason } : {}) }], modelVersion: "gemini-smoke-001" })}\n\n`,
              );
            controller.enqueue(event(encoded.slice(0, -2)));
            const timer = setTimeout(() => {
              controller.enqueue(event(encoded.slice(-2), "STOP"));
              controller.close();
            }, 250);
            init.signal.addEventListener(
              "abort",
              () => {
                clearTimeout(timer);
                controller.error(init.signal.reason);
              },
              { once: true },
            );
          },
        }),
        { headers: { "content-type": "text/event-stream" } },
      );
    }
    if (endpoint.hostname !== "127.0.0.1")
      throw new Error("Unexpected test destination");
    if (endpoint.pathname === "/api/tags")
      return Response.json({ models: [{ name: "qwen3:4b", size: 1000 }] });
    if (endpoint.pathname === "/api/show")
      return Response.json({
        capabilities: ["completion"],
        model_info: { "test.context_length": 32768 },
      });
    if (endpoint.pathname === "/api/generate")
      return Response.json({ done: true });
    if (endpoint.pathname === "/api/chat") state.localRequests.push(body);
    return new Response(
      JSON.stringify({
        model: body.model,
        done: true,
        done_reason: "stop",
        message: {
          content: JSON.stringify(
            datasetPlan(body) ?? {
              answer: state.localAnswer ?? "ALPHA allocation is 25%.",
            },
          ),
        },
      }) + "\n",
      { headers: { "content-type": "application/x-ndjson" } },
    );
  };
  return { state, fetchImpl };
}
module.exports = { createOnlineSmokeFetch };
