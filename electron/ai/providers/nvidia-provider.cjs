const {
  OpenAIChatProvider,
  remoteError,
} = require("./openai-chat-provider.cjs");
const INSTRUCT_MODE_MODELS = new Set([
  "nvidia/nemotron-3.5-lightning-30b-a3b",
  "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
]);
class NvidiaProvider extends OpenAIChatProvider {
  /** Ordinary Orbistry chat requests ask for final answers, not hidden thinking.
   * These documented NIM deployments enable thinking with a 16K reasoning
   * budget, which can exhaust a smaller max_tokens before emitting any content.
   * Use its documented switch; do not increase user caps or guess other models.
   * https://build.nvidia.com/playbooks/nim-llm/instructions
   * https://docs.api.nvidia.com/nim/reference/nvidia-nemotron-3-nano-omni-30b-a3b-reasoning */
  generationParameters(model) {
    return INSTRUCT_MODE_MODELS.has(model)
      ? { chat_template_kwargs: { enable_thinking: false } }
      : {};
  }
}
module.exports = { NvidiaProvider, remoteError };
