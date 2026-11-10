# Orbistry v1.0.1 Victoria Beta

This source update consolidates backend adjustments and verified provider repairs. The application keeps the Orbistry name and Victoria Beta codename; package version is 1.0.1.

## Backend adjustments

- Explicit NVIDIA instruct-mode controls for the verified Lightning and Nano Omni deployments, preventing hidden reasoning from consuming the output allowance before an answer is produced. User output caps stay unchanged; unsupported model options are not guessed.
- Provider inactivity timing recognizes reasoning/heartbeat network activity while retaining the absolute deadline. Safe diagnostics distinguish reasoning-only truncation without exposing reasoning text.
- OpenRouter routing accepts advertised `max_tokens` and `max_completion_tokens` aliases and preserves the configured cap on the wire.
- Experimental settings/chat coordinate with normal model-check cancellation and cleanup instead of racing the shared admission slot. Structured public event errors retain their diagnostic codes across the Electron bridge.
- A true experimental non-streaming JSON completion option, alongside existing SSE consumption, output validation and cancellation.
- Opt-in Front Office modules for capability metadata, manual pins, explicit automatic routing/fallback policy, full-history budgets, bounded retries/deadlines/circuits, content-free traces and JSON/CSV exports.
- Deterministic A/B/C evaluation tooling, diagnostic scripts, source-reviewed real-provider evidence and reproducible audit reports.

## Existing workspace changes included

The pending Markdown editor and vault-write adjustments are preserved: editable Markdown, save/conflict handling and unsaved-change guards. These changes were already present in the working tree before the provider audit.

## Compatibility and limits

- Desktop API remains version 18. Restart Electron after updating main/preload/provider code. OS-encrypted provider credentials and personal vaults are not included in source control.
- Experimental conversations/runs use schema 5/schema 3; preserve newer records before reverting to builds that cannot read them.
- Provider fixes cover the explicitly tested NVIDIA deployments, not every NVIDIA model. Real OpenRouter generation and normal NVIDIA Agent Chat have recorded UI proof; test sources and scope are documented in the reports.
- LiteLLM remains optional and externally managed. A real enabled proxy has not been verified; mocked gateway checks are labeled separately.
- Full-PDF input compression/retrieval and an Agent Chat comparison dashboard are not delivered. Normal NVIDIA SSE usage can remain unknown. No end-to-end credit savings or historical 126K context success is claimed.

## Verification

Release validation runs the complete Node suite, TypeScript, a hardened static build and isolated Electron checks for Front Office, normal agent/context behavior, Markdown editing and clean startup/version branding. Prior real-provider evidence is retained without spending additional provider quota for a version-label change. Final check results are recorded in the [v1.0.1 validation report](../report/Orbistry_v1.0.1_Validation.md).

This request publishes source commits and a Git tag; it does not itself create an installer or GitHub binary release.

See [provider RCA](../docs/backend/PROVIDER_RCA.md), [Nano Omni repair](../report/Orbistry_NVIDIA_Omni_Fix_QT-RCA-003.md), and [token/credit comparison limits](../report/Orbistry_Token_Credit_Comparison_Status.md).
