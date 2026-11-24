# Orbistry — Modular Monolith Architecture Contract

**Document:** `AGENTS.md`  
**Specification:** `ORB-ARCH-001`  
**Version:** `0.1.0`  
**Status:** Engineering Instruction Contract  
**Scope:** Orbistry / Wonton (Work & Thought)  
**Primary implementation:** Electron, Node.js, JavaScript/TypeScript

---

## 1. Purpose

This document establishes the persistent engineering contract for AI coding agents working on Orbistry.

Orbistry is an entity-centric operational intelligence platform built upon the Wonton (Work & Thought) architecture.

Its core infrastructure must remain functional independently of large language models, external AI providers, and autonomous agents.

All generated, modified, or refactored code MUST preserve the architectural boundaries, authorization model, existing functionality, and operational reliability defined here.

**Primary engineering objective:**

Build a secure, maintainable, resource-efficient modular monolith with explicit interfaces, deterministic execution boundaries, and optional AI integration.

This document is an architectural contract, not authorization to rewrite the repository.

## 2. Architectural Principles

The following principles are mandatory.

### 2.1 Modular Monolith First

Orbistry SHALL use a modular monolith architecture unless a documented engineering decision explicitly authorizes another deployment model.

A modular monolith consists of independently organized modules deployed within a shared application environment.

Modules MUST communicate through explicit interfaces and contracts rather than arbitrary internal imports.

Do not introduce microservices, distributed queues, network service boundaries, or additional runtime processes without demonstrated operational necessity.

### 2.2 LLM-Independent Core

The following capabilities MUST remain operational without an LLM:

- WorldView and Entity management.
- Vault and source-data access.
- Knowledge Card navigation.
- Deterministic indexing and search.
- Engine capability execution.
- Connector-based data integration.
- Authorization and approval enforcement.
- Operational dashboards and monitoring.

LLM inference, RAG generation, and Assigned Agents are optional enhancements.

No foundational business logic may depend on successful model inference.

### 2.3 WorldView Is Not the Vault

**WorldView** represents the operational world through Entities, their relationships, and associated capabilities.

**Vault** stores source files and raw information.

These are separate architectural concepts.

An Entity may reference Vault resources, but must not be implemented merely as a filesystem folder.

Knowledge Cards present indexed and organized Entity knowledge without requiring duplication of all source files.

### 2.4 Human Authority

Humans retain ultimate operational authority.

The system MUST distinguish:

1. User intent.
2. Proposed action.
3. Authorized action.
4. Executed action.
5. Verified result.

A model-generated instruction is never sufficient authorization.

## 3. Module Responsibilities

### 3.1 Portal

Responsible for:

- Human interaction.
- WorldView visualization.
- Knowledge Card presentation.
- Conversation interface.
- Approval requests.
- Execution status and evidence presentation.

Portal MUST NOT independently enforce backend security or directly invoke privileged operating-system capabilities.

Electron renderer code must interact with privileged functionality through narrowly defined, validated IPC interfaces.

### 3.2 WorldView

Responsible for:

- World and Entity representation.
- Entity identity and metadata.
- Entity relationships.
- Entity selection and navigation.
- Knowledge Card associations.
- Assigned Agent associations.

WorldView MUST NOT become a replacement for raw file storage.

### 3.3 Vault

Responsible for:

- Source-file persistence.
- Source identity and metadata.
- File integrity.
- Storage references.
- Controlled source retrieval.

Vault MUST NOT independently decide Entity permissions or operational workflows.

### 3.4 Engine

Responsible for:

- Deterministic capabilities.
- Data transformation.
- External service integration.
- Authorized operations.
- Execution lifecycle.
- Structured results.
- Execution receipts and audit evidence.

Engine capabilities MUST be callable without an LLM when authorized by the application.

### 3.5 Connectors

Responsible for:

- Explicit data relationships.
- Input/output integration semantics.
- Data transfer between authorized endpoints.
- Transformation or routing references.

A Connector does not automatically grant access to either endpoint.

Connector relationships MUST NOT bypass Entity jurisdiction or authorization policies.

### 3.6 AI Runtime

Responsible for:

- Model-provider adapters.
- Inference requests.
- Context assembly.
- Retrieval augmentation.
- Structured model outputs.
- Optional tool-use proposals.

The AI Runtime MUST NOT be the authority for filesystem access, Engine permissions, Entity scope, or user approval.

### 3.7 Assigned Agents

Assigned Agents are optional workers operating within delegated Entity jurisdictions.

An Assigned Agent MUST NOT:

- Access another Entity's private knowledge without explicit authorization.
- Expand its own jurisdiction.
- Create new permissions.
- Bypass Engine authorization.
- Treat generated text as execution evidence.

Agent Assignment metadata may exist independently of an active model provider.

### 3.8 Universe Gateway

When enabled, the Universe Gateway coordinates human instructions across authorized Entity scopes.

It is responsible for:

- Intent interpretation.
- Entity resolution.
- Operation planning.
- Authorized dispatch.
- Result aggregation.
- Fulfillment reporting.

Gateway orchestration MUST NOT bypass Engine authorization or alter Entity jurisdiction.

## 4. Dependency and Boundary Rules

The architecture SHALL follow these principles:

- Domain logic must not depend on Electron UI components.
- Domain logic must not directly depend on a specific LLM provider.
- Domain logic must not directly depend on a specific market-data provider.
- Engine implementations must not import Portal presentation components.
- Vault persistence implementations must not define Entity business rules.
- AI adapters must not directly mutate privileged application state.
- Authorization must be enforced at execution boundaries.

Prefer dependency inversion through explicit interfaces.

Recommended logical organization:

```text
src/
  domain/
    entities/
    worlds/
    knowledge/
    permissions/

  application/
    commands/
    queries/
    workflows/
    approvals/

  infrastructure/
    persistence/
    filesystem/
    external-apis/
    model-providers/

  engine/
    contracts/
    registry/
    capabilities/
    execution/
    receipts/

  retrieval/
    ingestion/
    parsing/
    indexing/
    search/
    context/

  portal/
    ipc/
    presentation/
    worldview/
    knowledge-cards/
```

This is a **reference structure**, not an instruction to move existing files.

Codex MUST inspect the actual repository structure before proposing migrations.

Do not reorganize working modules solely to match this example.

## 5. Code Design Standards

### 5.1 Single Responsibility

Each module should have one clearly defined responsibility.

Avoid modules that simultaneously perform:

- UI rendering.
- Business logic.
- Provider communication.
- Database operations.
- Authorization.
- LLM inference.

### 5.2 Functional Core, Imperative Shell

Prefer pure, deterministic functions for:

- Entity identity resolution.
- Scope validation.
- Input normalization.
- Operation planning.
- Permission evaluation.
- Result classification.

Keep side effects in explicit adapters and execution services.

### 5.3 Ports and Adapters

External dependencies MUST be isolated behind stable interfaces wherever practical.

Examples:

- Market data provider.
- LLM provider.
- File storage.
- Database.
- Embedding provider.
- IoT transport.

Replacing an adapter SHOULD NOT require changing domain rules.

### 5.4 Explicit Contracts

Public module interfaces MUST have documented inputs, outputs, errors, and side effects.

Prefer schema validation at trust boundaries.

Use TypeScript types where available, but remember that static typing does not replace runtime validation.

### 5.5 Dependency Discipline

Avoid circular dependencies.

Avoid importing another module's private implementation.

Do not introduce generic abstraction frameworks without a demonstrated reuse requirement.

Prefer simple, explicit code over unnecessary architectural indirection.

## 6. Engine Capability Contract

Every Engine capability SHOULD declare:

```text
Capability Identity
Capability Version
Input Schema
Output Schema
Entity Scope
Required Permissions
Approval Policy
Execution Adapter
Timeout Policy
Retry Policy
Idempotency Semantics
Result Provenance
Error Classification
Audit Requirements
```

Capabilities MUST distinguish:

- Registered.
- Available.
- Authorized.
- Executable.
- Executed.
- Verified.

Registration does not imply authorization or successful execution.

### 6.1 Execution Lifecycle

Recommended lifecycle:

```text
REQUESTED
    ↓
VALIDATED
    ↓
AUTHORIZED
    ↓
RUNNING
    ↓
SUCCEEDED / FAILED / CANCELLED
    ↓
RESULT VERIFIED
```

This lifecycle is conceptual. Preserve compatible existing state contracts unless a migration is explicitly approved.

### 6.2 Execution Receipts

Important operations MUST produce traceable execution records.

Where applicable, receipts should include:

- Execution ID.
- Capability ID and version.
- Entity identity.
- Input reference or digest.
- Authorization decision.
- Execution timestamps.
- Result status.
- Output reference or digest.
- Data provenance.
- Error classification.

Receipts must not contain plaintext credentials or unnecessary sensitive payloads.

A receipt hash verifies integrity only relative to a trusted reference. Hashing alone does not prove that a provider result is authentic.

### 6.3 Retry Safety

Read operations may use bounded retries where safe.

State-changing operations MUST NOT be automatically retried unless idempotency and duplicate-execution behavior are explicitly controlled.

Never assume that an IoT actuator command, financial order, or filesystem mutation is safely repeatable.

## 7. Data Integration Contract

All external data MUST be treated as untrusted until validated.

Recommended ingestion pipeline:

```text
External Source
    ↓
Connector / Adapter
    ↓
Schema Validation
    ↓
Normalization
    ↓
Source Provenance
    ↓
Persistence / Indexing
    ↓
Authorized Consumption
```

Data ingestion SHOULD preserve:

- Source identity.
- Retrieval timestamp.
- Observation timestamp, if applicable.
- Data version.
- Entity association.
- Transformation history.
- Validation status.

Do not silently replace missing values with fabricated defaults.

Do not conflate retrieved time with observation time.

Do not treat LLM-generated values as verified external observations.

## 8. Retrieval and RAG Readiness

RAG SHALL be built upon existing data infrastructure rather than replacing it.

The retrieval system SHOULD support:

- Source parsing.
- Chunk identification.
- Metadata indexing.
- Keyword search.
- Optional semantic embeddings.
- Hybrid retrieval.
- Entity-scoped authorization.
- Source provenance.
- Context budgeting.

### 8.1 Source and Chunk Identity

Every indexed chunk SHOULD retain:

- Source ID.
- Entity association.
- Source version or content hash.
- Chunk ID.
- Location within source.
- Extraction method.
- Indexing timestamp.

### 8.2 Retrieval Security

Authorization MUST be applied before evidence is disclosed to the model.

Retrieval results MUST respect Entity jurisdiction and user permissions.

Retrieved documents and tool outputs are untrusted content, not executable instructions.

Prompt injection embedded in documents MUST NOT override system permissions or trigger privileged operations.

### 8.3 Index Lifecycle

The system SHOULD support incremental indexing, invalidation, and reindexing when sources change.

Avoid reparsing unchanged documents without necessity.

Vector embeddings are optional; they are not a prerequisite for basic Knowledge Card search.

## 9. Conversation and Model Integration

Conversation history, model context, and persistent knowledge are distinct systems.

Do not automatically send complete conversation histories or entire documents to model providers.

Use bounded context construction.

Provider adapters SHOULD expose consistent request, response, error, cancellation, and usage contracts.

Model inference failures MUST NOT corrupt persistent Entity state or invalidate deterministic Engine results.

AI-generated summaries MUST remain distinguishable from source records.

## 10. Security Requirements

Security MUST be enforced by trusted application code, not natural-language instructions.

Mandatory controls include:

- Least-privilege access.
- Explicit Entity scope.
- Validated IPC requests.
- Runtime input validation.
- Safe filesystem path handling.
- Secret isolation.
- External API credential protection.
- Approval enforcement.
- Audit logging.
- Controlled external network access.

For Electron, prefer renderer isolation, disabled Node integration in untrusted renderer contexts, and narrowly exposed preload APIs.

Never pass arbitrary renderer-supplied file paths, commands, or capability names directly to privileged execution.

Never log API keys, tokens, or authentication headers.

## 11. Performance and Memory Efficiency

Performance optimization MUST be evidence-driven.

Before changing performance-sensitive code:

1. Establish a reproducible baseline.
2. Measure memory, CPU, latency, and I/O.
3. Identify the actual bottleneck.
4. Implement a bounded change.
5. Re-measure under comparable conditions.
6. Verify functional equivalence.

Preferred techniques where appropriate:

- Streaming file processing.
- Incremental indexing.
- Bounded caches.
- Lazy initialization.
- Avoiding duplicate document copies.
- Releasing unused references.
- Cancellation of abandoned operations.
- Bounded concurrency.
- Avoiding repeated parsing.

Do not claim a percentage improvement without measured evidence.

Do not sacrifice authorization, correctness, or auditability for memory savings.

## 12. Reliability and Error Handling

Use structured error categories.

Distinguish:

- Validation failure.
- Authorization failure.
- Entity not found.
- Entity outside scope.
- Capability unavailable.
- Provider failure.
- Timeout.
- Execution failure.
- Evidence verification failure.
- Partial fulfillment.

Do not collapse unrelated failures into a generic successful response.

A completed model response does not imply completed Engine execution.

A completed Engine execution does not automatically imply task fulfillment.

Independent operations SHOULD retain independent outcomes.

## 13. Testing Contract

Changes MUST include tests appropriate to their risk.

### Unit Tests

Validate deterministic domain behavior and contracts.

### Integration Tests

Validate module boundaries, persistence, authorization, and adapter behavior.

### End-to-End Tests

Validate complete user workflows and persisted outcomes.

### Regression Tests

Preserve previously fixed incidents.

### Security Tests

Test unauthorized Entity access, malformed inputs, approval bypass attempts, and untrusted retrieved content.

### Performance Tests

Measure representative workloads when changing caching, indexing, concurrency, or memory management.

Mocks MUST be explicitly identified.

Passing deterministic mocks must not be presented as proof of live provider availability.

## 14. Change Management

Before modifying existing code, Codex MUST:

1. Inspect the affected implementation.
2. Identify the owning module.
3. Identify public interfaces and dependencies.
4. Review relevant tests.
5. Explain the intended change.
6. Identify compatibility and security risks.

During implementation, Codex MUST:

- Prefer minimal, localized changes.
- Preserve existing functionality unless explicitly authorized otherwise.
- Avoid unrelated refactoring.
- Avoid duplicating existing services.
- Preserve existing authorization boundaries.
- Add or update relevant tests.
- Keep changes reviewable.

After implementation, Codex MUST:

- Run relevant tests where possible.
- Report tests actually executed.
- Identify tests not executed.
- Report changed files.
- Explain behavioral differences.
- Disclose remaining risks.

Never claim that a test passed unless it was executed and its result observed.

## 15. Prohibited Engineering Practices

Codex MUST NOT:

- Introduce an LLM dependency into deterministic core functionality.
- Give Agents unrestricted access to all Entities.
- Treat Connectors as permission grants.
- Bypass Engine authorization.
- Allow model-generated text to impersonate execution receipts.
- Replace validated data with invented values.
- Introduce microservices without explicit approval.
- Rewrite large portions of the repository without necessity.
- Remove tests to make a failing suite pass.
- Suppress errors merely to produce successful-looking output.
- Store secrets in logs or source code.
- Change existing features silently.
- Treat documentation as proof of implementation.

## 16. Architecture Decision Records

Significant architectural changes SHOULD be documented as Architecture Decision Records (ADRs).

Each ADR should include:

```text
Title
Status
Context
Decision
Alternatives Considered
Consequences
Migration Requirements
Verification Plan
```

ADRs document decisions; they do not override this contract unless the contract is explicitly amended.

## 17. Codex Response Requirements

For architecture-sensitive changes, provide:

**Assessment**
- Existing behavior.
- Affected modules.
- Identified issue.

**Implementation**
- Proposed changes.
- Contract implications.
- Security considerations.

**Verification**
- Tests executed.
- Observed results.
- Remaining limitations.

**Performance**
- Measurements, when relevant.
- Any unverified performance claims clearly labeled.

Do not present assumptions as repository facts.

## 18. Final Engineering Principle

**Orbistry must remain useful without AI, secure when AI is present, and understandable when AI fails.**

The Wonton architecture must preserve:

- Human authority.
- Entity jurisdiction.
- Deterministic Engine execution.
- Explicit data relationships.
- Traceable evidence.
- Modular maintainability.
- Operational reliability.

Every engineering decision should strengthen these properties.

---

**End of ORB-ARCH-001 — Version 0.1.0**

# Wonton Engine Architecture
## Orbistry Universal Package & Capability System

**Document ID:** ORB-ENG-001  
**Status:** Proposed Target Architecture  
**Version:** 1.0 — Conceptual Specification  
**Platform:** Orbistry  
**Framework:** Wonton (Work & Thought)  
**Audience:** Orbistry maintainers, Codex, package developers, and architecture reviewers

---

# 1. Purpose

This document defines what an **Engine** means within Orbistry and Wonton.

It establishes the architectural responsibilities, extension model, capability contracts, package isolation, Entity integration, Dashboard integration, indexing, AI interoperability, security expectations, and migration principles.

The primary purpose is to prevent the implementation from diverging from the intended product architecture.

**This document is not an instruction to immediately refactor existing code.**

Existing implementations must first be audited and compared against this specification.

## 1.1 Foundational Principle

> Orbistry provides the world. Packages provide capabilities. Entities provide context. Dashboards provide representation. Agents provide optional intelligence.

Orbistry is intended to be a universal operational platform, not a collection of hardcoded industry applications.

Its industry-specific functionality should be supplied through independently developed and installable packages.

The platform must remain functional even when no AI provider or LLM is available.

---

# 2. Definitions

## 2.1 Orbistry Core

Orbistry Core provides universal infrastructure shared by all industries and extensions.

Its responsibilities include:

- Universe and workspace management.
- WorldView and Entity representation.
- Knowledge Cards.
- Source indexing and references.
- Dashboard construction and rendering.
- Package registration and discovery.
- Authorization and permission enforcement.
- Shared data contracts and storage interfaces.
- Execution orchestration.
- Auditability and execution history.
- Optional access for agents and AI systems.

Orbistry Core must not need to understand the implementation details of Yahoo Finance, soil-moisture sensors, quantitative models, or any other industry-specific capability.

It only needs to understand the contracts through which these capabilities participate in the platform.

## 2.2 Package

A **Package** is an independently distributable extension containing one or more capabilities.

A package may provide:

- Tools and executable operations.
- External-service connectors.
- Data readers and processors.
- Computational models.
- Data schema definitions.
- Indexing adapters.
- Dashboard view contributions.
- Entity-specific storage schemas.
- AI tool descriptions and reading instructions.
- Optional authorized workflows.

A package may provide only one of these categories or several of them.

A package must not require modifying Orbistry Core source code to register its own supported capabilities.

## 2.3 Engine

The term **Engine** refers to the executable capability system within Wonton.

An Engine is not necessarily equivalent to a single operation, one integration, one industry, or one package.

For implementation clarity:

- **Package:** Unit of installation and distribution.
- **Capability:** Functionality made available by a package.
- **Tool/Operation:** Executable entry point for a capability.
- **Engine Runtime:** Infrastructure used to execute supported operations.
- **Engine Registry:** Infrastructure used to install, discover, validate, authorize, and manage Engine packages.

This distinction is important because a single package can supply many different tools.

## 2.4 Tool

A Tool is an operation exposed through a declared contract.

Examples:

- `market.get_price_history`
- `market.get_financial_statements`
- `quant.run_regression`
- `dataset.read_csv`
- `farm.read_soil_moisture`
- `farm.get_reservoir_status`

Tool names are illustrative. The exact identifier convention must be specified and validated by the package protocol.

Each tool must have a machine-readable description of its supported inputs and outputs.

## 2.5 Entity

An Entity is an operational unit represented within a WorldView.

Examples:

- A company.
- A portfolio.
- A greenhouse.
- A water reservoir.
- A manufacturing station.
- A research subject.

Entities provide operational context for data and capabilities.

An Entity may be associated with multiple packages simultaneously.

A package is not an Entity, and an Entity is not owned by any specific package.

## 2.6 Universe

A Universe is a workspace containing Entities, data references, configuration, packages, and operational views.

Package installation may be scoped to a Universe.

An installed package may serve several Entities, subject to authorization and configuration.

---

# 3. Core Architectural Philosophy

## 3.1 Platform Independence

Industry-specific capabilities should not be hardcoded into Orbistry Core.

For example, Orbistry should not require an application-source modification whenever a developer introduces:

- A new financial data provider.
- An additional quantitative model.
- A new IoT device.
- A different environmental sensor.
- A manufacturing analytics capability.
- An alternative dashboard visualization.

Such capabilities should be delivered through packages and registered using stable extension interfaces.

## 3.2 Industry Independence

Packages must not restrict the Universe to a predefined industry.

A farming Universe may install a finance package.

A finance-oriented Universe may install an agriculture package.

A manufacturing workspace may use financial, environmental, and operational packages simultaneously.

Package compatibility should be determined by contracts, permissions, and actual data requirements—not by an industry label.

## 3.3 Composability

Capabilities from different packages should be usable together.

For example:

- Oldmcdonald provides greenhouse telemetry.
- Laurence provides agricultural futures market data.
- A Universe Dashboard displays both data sources.
- An optional Agent analyzes the combined information.

Cross-package composition should occur through standardized platform interfaces.

Packages must not be required to directly import each other's internal implementation files.

## 3.4 Non-AI-First Operation

All ordinary package capabilities must remain accessible without an LLM.

An operation that retrieves prices or analyzes sensor data must not require an Agent or model inference unless AI is inherently part of that specific operation.

AI may consume capabilities but must not be the mandatory execution gateway for general-purpose Engine operations.

## 3.5 Extensibility Without Core Modification

A developer should be able to author, package, validate, install, configure, and execute a supported extension without adding package-specific adapters to Orbistry application source.

New package categories may require new generic extension contracts, but ordinary installation of an extension that conforms to existing contracts must not require application changes.

---

# 4. Reference Architecture

The intended high-level architecture is:

```text
                        ORBISTRY CORE
┌─────────────────────────────────────────────────┐
│                                                 │
│  Universe / WorldView / Entity Management       │
│                                                 │
│  Indexing / Knowledge Card / Dashboard          │
│                                                 │
│  Storage / Authorization / Audit                │
│                                                 │
│  Optional Agent & AI Integration                │
│                                                 │
└──────────────────────┬──────────────────────────┘
                       │
              EXTENSION INTERFACES
                       │
┌──────────────────────▼──────────────────────────┐
│             PACKAGE INFRASTRUCTURE              │
│                                                 │
│  Package Registry                               │
│  Manifest & Contract Validation                 │
│  Capability Discovery                           │
│  Package Lifecycle                              │
│  Execution Runtime                              │
│  Authorization                                  │
│  Data & View Adapters                           │
│  Entity Storage Interfaces                      │
│  AI Capability Descriptors                      │
└──────────────┬──────────────────┬───────────────┘
               │                  │
       ┌───────▼───────┐  ┌───────▼────────┐
       │ LAURENCE      │  │ OLDMCDONALD    │
       │ Finance       │  │ Agriculture    │
       │               │  │                │
       │ Market Data   │  │ Sensors        │
       │ Quant Models  │  │ Telemetry      │
       │ Dashboards    │  │ Farm Dashboard │
       │ Data Readers  │  │ Alerts         │
       └───────────────┘  └────────────────┘
```

These package names represent envisioned examples, not claims about completed or installed packages.

The exact implementation layering may differ, but the separation of responsibilities must be preserved.

---

# 5. Package Contribution Model

A package may contribute several classes of capabilities.

## 5.1 Executable Tool Contributions

Tools provide operations that can be invoked through the platform.

Examples include:

- Retrieving market prices.
- Reading datasets.
- Running statistical calculations.
- Parsing documents.
- Reading connected devices.
- Producing analytical reports.

Each operation should declare:

- Stable operation identifier.
- Human-readable name and description.
- Input contract.
- Output contract.
- Declared effects and resource requirements.
- Permissions required.
- Execution limits.
- Supported invocation context.
- Error contract.

Package operations must be discoverable through a generic registry interface.

## 5.2 Data Adapter Contributions

Data adapters define how package-specific information is converted to standardized data representations.

For example:

```text
Yahoo Provider Response
          ↓
Laurence Data Adapter
          ↓
Normalized Time Series
          ↓
Orbistry Indexing
          ↓
Dashboard / Knowledge Card / Agent
```

Adapters must preserve relevant metadata, including source identity, units, timestamps, and provenance.

A standardized representation does not mean discarding original information.

Where necessary, packages may expose both:

1. A canonical representation for general platform interoperability.
2. A package-specific representation for specialized functionality.

## 5.3 Dashboard View Contributions

Packages may provide specialized visual representations.

Examples:

**Laurence**
- Financial charts.
- Price watchlists.
- Valuation tables.
- Portfolio analytics.
- Financial dashboards.
- Market-data carousels.

**Oldmcdonald**
- Soil-moisture indicators.
- Reservoir monitoring.
- Temperature charts.
- Device status panels.
- Farm monitoring dashboards.

Orbistry owns the Dashboard Construction interface and its layout infrastructure.

Packages may contribute:

- Widget/view types.
- Input data contracts.
- Configuration schemas.
- Presentation metadata.
- Optional reviewed rendering components.

A package dashboard contribution must be compatible with the common dashboard composition system.

Package-specific visualization must not require modifying Orbistry's general Dashboard Builder for every new view.

**Security constraint:** loading arbitrary package UI code into the privileged renderer is not acceptable by default.

A safe extension contract must define trusted UI components, declarative view descriptors, or appropriately isolated rendering environments.

## 5.4 Indexing Contributions

Packages may define how their outputs should be indexed.

Examples:

- A price-history tool exposes timestamps, prices, currencies, and adjusted-value metadata.
- A financial-statement parser exposes accounting periods, line items, and units.
- A moisture sensor exposes measurement values, units, timestamps, and sensor identifiers.

Package indexing metadata should describe the meaning and structure of data.

The platform remains responsible for the indexing infrastructure, source-reference management, authorization, and data lifecycle.

## 5.5 Entity Integration Contributions

A package may declare how its data or capability instances are associated with an Entity.

For example:

```text
Entity: Greenhouse A
    ├── Oldmcdonald / Soil Sensor
    ├── Oldmcdonald / Temperature Sensor
    └── Laurence / Commodity Prices
```

The Entity may consume several package-defined capability instances.

Package-specific Entity data should use a namespaced storage contract.

A package must not arbitrarily edit internal Entity persistence structures.

---

# 6. Dashboard Architecture

Orbistry supports two Dashboard contexts:

1. **Knowledge Card Dashboard**
2. **Universe Dashboard**

Both use the same general indexing and dashboard-construction mechanisms.

## 6.1 Knowledge Card Dashboard

A Knowledge Card Dashboard represents selected information associated with an Entity.

Examples:

- TSMC price history and financial statements.
- Greenhouse soil moisture and temperature.
- Reservoir status and water level.

The Dashboard uses authorized sources and capabilities within the Entity context.

## 6.2 Universe Dashboard

A Universe Dashboard can reference sources across multiple Entities.

It may:

- Combine historical prices from several companies.
- Compare selected attributes across Entities.
- Display a watchlist.
- Combine environmental telemetry with market data.
- Render information from unrelated packages.
- Open as an independent application window.

Opening a Dashboard in another window should reference the same dashboard definition rather than silently duplicating its configuration.

## 6.3 Index-Based Construction

Dashboard Construction is conceptually an extension of the existing indexing workflow.

The expected user workflow is:

```text
Select Sources
      ↓
Index / Resolve Data
      ↓
Select Fields
      ↓
Configure Composition
      ↓
Choose Representation
      ↓
Save Dashboard Definition
      ↓
Render
```

The indexing system should support references to:

- Files and indexed documents.
- Engine results.
- External data through package adapters.
- Individual Entity data.
- Multiple Entities in a Universe.

Data extraction, composition, and rendering should remain separable responsibilities.

Changing a chart type should not inherently require rerunning the original source-processing operation.

## 6.4 Cross-Package Composition

A Dashboard may consume sources produced by different packages.

This requires common metadata for:

- Data type.
- Unit.
- Entity identity.
- Source identity.
- Observation timestamp.
- Retrieval timestamp.
- Data freshness.
- Missing values.
- Permission scope.

Packages do not need prior knowledge of each other.

Orbistry resolves their data through shared contracts.

---

# 7. Package Lifecycle

The long-term package lifecycle should include:

```text
Author
  ↓
Declare Contracts
  ↓
Build Package
  ↓
Validate
  ↓
Seal / Verify Integrity
  ↓
Review and Establish Trust
  ↓
Install
  ↓
Configure
  ↓
Link Capabilities to Entities
  ↓
Discover
  ↓
Authorize
  ↓
Execute
  ↓
Index / Store / Present Results
  ↓
Audit
```

Package registration must not imply automatic execution authorization.

Package installation must not imply unrestricted access to all Entities.

A package must be able to provide multiple tools with separately declared permissions.

Package identity and versioning should be stable.

Updates must not silently replace a previously approved implementation with new executable code.

### 7.1 Package Independence

An installable package should supply its own implementation and required package-owned resources.

It should not rely on hidden package-specific functions located elsewhere in Orbistry application source.

Shared platform APIs are permitted.

For example, a package may call an officially supported Orbistry storage API.

It must not directly import an undocumented internal storage function.

### 7.2 Dependency Management

The package specification must define:

- Supported runtime environment.
- Dependency packaging.
- Compatible platform API versions.
- Package version requirements.
- Supported inter-package dependencies, if introduced.
- Resource limits.

External dependency resolution must not silently execute unreviewed installation scripts.

---

# 8. Package Manifest Specification

A package manifest describes the package's identity and contributions.

The following is a **conceptual target format**, not the currently implemented Engine Registry schema.

```json
{
  "package_id": "laurence",
  "package_version": "1.0.0",
  "platform_api": "orbistry.package/next",
  "name": "Laurence",
  "description": "Financial research and analytics",

  "contributions": {
    "tools": [
      "market.get_price_history",
      "quant.run_regression"
    ],
    "data_adapters": [
      "market.timeseries"
    ],
    "views": [
      "market.price_chart",
      "market.watchlist"
    ],
    "entity_schemas": [
      "market.security_data"
    ],
    "ai_descriptors": [
      "market.get_price_history"
    ]
  }
}
```

The exact schema, locations, version identifiers, and validation rules must be developed through a separate protocol proposal.

Do not treat this example as executable under Registry v1.

The currently implemented manifest and execution protocol must remain supported until an explicit compatibility or migration strategy is approved.

---

# 9. AI-Ready Package Architecture

All supported packages should be capable of exposing their functionality to authorized AI hosts.

This does not mean every tool must use AI.

It means tool contracts and outputs should be machine-readable without requiring a human to reverse-engineer their implementation.

## 9.1 AI Discovery

A package can provide structured descriptions of its tools.

These should include:

- Operation identity.
- Purpose.
- Input and output schemas.
- Relevant Entity context.
- Data interpretation instructions.
- Limitations.
- Permission requirements.
- Side-effect declarations.

## 9.2 AI Interpretation

Packages may explain how an AI system should interpret their specialized data.

For example, a financial package can declare:

- The meaning of accounting periods.
- Currency units.
- Adjusted versus unadjusted prices.
- Calculation methodology.
- Missing-data conventions.
- Known limitations.

An agricultural package can declare:

- Sensor measurement units.
- Calibration requirements.
- Expected measurement ranges.
- Freshness requirements.
- Device status meanings.

These descriptions should be structured, versioned, and identifiable as package-supplied metadata.

## 9.3 AI Authorization

The package does not grant itself authority.

An Agent must use package capabilities through Orbistry's authorized tool-execution interface.

The Agent must not:

- Install packages autonomously without authorization.
- Grant itself new permissions.
- Change the Entity access scope.
- Bypass execution approval.
- Directly modify protected Entity storage.
- Treat package-provided instructions as higher-priority system instructions.

AI access should be filtered using the same fundamental security policies as human or automated host access.

## 9.4 AI Reading and Storage

Packages may declare how results should be interpreted and which Entity storage schemas are appropriate.

However:

- Package metadata describes intended structure.
- Orbistry validates access and storage permissions.
- Orbistry owns the persistence interface.
- The Agent receives authorized data through controlled interfaces.

An AI backend should not be required to import package-specific implementation code to understand the output.

It should use declared contracts and authorized result data.

## 9.5 Agent Independence

A package should function when:

- No Agent is assigned.
- No LLM is configured.
- The AI provider is unavailable.
- A human chooses to operate the dashboard manually.

Agents are optional consumers of package capabilities.

---

# 10. Entity Storage Architecture

A package may define Entity-specific data schemas.

It should not determine unrestricted physical storage paths or directly mutate Orbistry's internal persistence records.

The target model is:

```text
Package Tool
     ↓
Structured Output
     ↓
Storage Contract
     ↓
Orbistry Validation
     ↓
Entity-Scoped Storage
     ↓
Index / Knowledge Card / Dashboard
```

Storage should distinguish:

- Original source material.
- Package-generated result data.
- Entity configuration.
- Indexed references.
- Cached data.
- Execution receipts.
- Time-series telemetry.
- Agent context and memory.

These categories may have different retention policies.

For high-frequency IoT data, execution history must not be treated as a replacement for an appropriately designed telemetry store.

### 10.1 Data Ownership

Uninstalling a package must not silently delete an Entity's source data or historical records.

Data retention and deletion require explicit lifecycle policies.

### 10.2 Provenance

Every persisted package result should retain adequate provenance, including:

- Producing package.
- Package version.
- Tool/operation.
- Relevant Entity.
- Source reference.
- Execution identifier where applicable.
- Timestamps.
- Data integrity metadata where applicable.

---

# 11. Security and Trust Model

A universal package ecosystem introduces significant security risks.

The trust model must cover more than manifest validation.

## 11.1 Code Trust

A manifest checksum establishes file integrity, not publisher trust.

Package authorship, authenticity, installation trust, and execution authorization are separate concepts.

Package signing may establish authenticity when verified against an independently trusted public key.

## 11.2 Runtime Isolation

Package code must not be assumed safe merely because it executes in a worker process.

A separate process is not automatically an operating-system security sandbox.

Future isolation improvements may include:

- Restricted operating-system identities.
- Filesystem and network controls.
- Capability-based resource access.
- Bounded execution.
- Resource accounting.
- Safe cancellation.
- Separate policies for untrusted packages.

## 11.3 Permission Categories

The target contract should distinguish permissions such as:

- Read approved Entity data.
- Write package-owned Entity data.
- Access approved external services.
- Read specified files.
- Request external network access.
- Create persistent outputs.
- Use restricted computation resources.
- Control supported devices.

Device control, transaction execution, file mutation, and other operations with real-world side effects require stricter authorization than ordinary read-only operations.

## 11.4 Industrial Control

Industrial device commands must not inherit permission from a generic monitoring dashboard.

For IoT and robotics integrations, distinguish:

- Observation.
- Analysis.
- Recommendation.
- Command preparation.
- Authorized command execution.
- Verification and audit.

Safety-critical equipment requires controls beyond ordinary plugin execution, including hardware interlocks and appropriate human or deterministic supervisory mechanisms.

## 11.5 Package UI Security

Custom UI contributions must not automatically gain access to privileged Electron or Node.js APIs.

The view extension specification must define a restricted and reviewable rendering interface.

---

# 12. Current Implementation Versus Target Architecture

The current Engine Registry v1 is a foundation, not the complete implementation of this specification.

Based on the existing Orbistry Engine Registry documentation:

## 12.1 Existing Registry v1 Capabilities

The documented implementation provides:

- Standardized package manifests.
- Package installation.
- Versioned package records.
- File checksum validation.
- Explicit package trust.
- Entity linking.
- Operation discovery.
- Input/output validation.
- CLI/API execution.
- Worker-based execution.
- Persistent execution receipts.
- Historical result retrieval.
- Compatibility paths for built-in integrations.

The documented protocol uses:

- Manifest schema version 2.
- Execution protocol `orbistry.engine/1`.
- CommonJS `.cjs` execution entry.
- Read-only operations in the initial contract.

## 12.2 Current Architectural Gaps

The following target capabilities are not established as universally supported by Registry v1:

- A unified package contribution model beyond executable operations.
- Generic dashboard-view registration.
- Universal package-defined indexing adapters.
- Namespaced Entity storage contribution contracts.
- Unified assigned-Agent tool integration.
- Fully package-contained versions of existing built-in integrations.
- Standardized writable and device-control operations.
- Security-isolated arbitrary third-party UI rendering.
- Generic cross-package workflow composition.

These gaps must be verified against the current repository before implementation planning.

Do not assume that documentation alone proves the presence or absence of code.

## 12.3 Compatibility Requirements

Any future architecture changes must preserve:

- Existing Engine Registry behavior.
- Existing built-in integration functionality.
- Existing Entity assignments.
- Agent Assignment behavior.
- Historical execution records.
- Current WorldView functionality.
- Indexing and Knowledge Card workflows.
- Existing user data.
- Stable public APIs unless explicitly versioned.

A successful conceptual redesign is not sufficient justification to break existing working features.

---

# 13. Migration Strategy

The intended destination is a self-contained, installable package ecosystem.

Existing built-in integrations should be evaluated as migration candidates.

However, the migration must be incremental.

## Phase 0 — Implementation Audit

Before changing code, identify:

1. All built-in Engine definitions.
2. Their implementation files.
3. Their runtime entry points.
4. Their operation contracts.
5. Their dependencies.
6. Their package-specific storage behavior.
7. Their current UI integration.
8. Their Entity links.
9. Their AI/Agent integration paths.
10. Their test coverage.

Identify all Engine-specific logic embedded in application source.

Do not automatically classify generic infrastructure as package-specific logic.

## Phase 1 — Package Contract Design

Define the target extension interfaces for:

- Tools.
- Data adapters.
- Indexing.
- Views.
- Entity storage.
- AI descriptors.

Determine which contributions should be part of the initial migration and which require a later protocol version.

Document backward compatibility.

## Phase 2 — Package Extraction

Migrate one suitable built-in integration as a pilot.

For the pilot:

- Move package-specific logic into an independently distributable package.
- Define its manifest.
- Declare operations and contracts.
- Remove hidden dependence on application-owned adapters.
- Preserve its existing behavior.
- Keep compatibility interfaces where required.

A package is not considered independent if its operation fails without package-specific code embedded in Orbistry Core.

## Phase 3 — Generic Host Integration

Verify that the extracted package can be:

- Installed.
- Validated.
- Trusted.
- Linked to an Entity.
- Discovered.
- Executed.
- Read through historical results.
- Consumed by the relevant indexing and dashboard systems.

Agent access must be added through generic authorized discovery, not an Engine-specific hardcoded adapter.

## Phase 4 — Remaining Package Migration

After the pilot succeeds, evaluate the remaining integrations individually.

Do not force unrelated functions into a single package merely because they were previously grouped in application source.

Package boundaries should reflect:

- Cohesive responsibilities.
- Shared dependencies.
- Versioning requirements.
- Security and permission boundaries.
- Developer ownership.
- Reusability.

## Phase 5 — Architecture Enforcement

Introduce automated checks that flag:

- Undocumented package-specific imports from Core.
- New hardcoded Engine dispatch paths.
- Forbidden dependencies on AI runtime from core package execution.
- Use of internal storage APIs by external packages.
- Unregistered capability definitions.
- Missing or incompatible operation contracts.

---

# 14. Package Independence Criteria

A migrated package should satisfy the following conditions.

### Distribution

- The package contains its required implementation.
- The package can be versioned independently.
- It can be installed through the standard package lifecycle.
- It does not require patching Orbistry Core for its supported contributions.

### Execution

- Operations are discoverable through standard contracts.
- Inputs and outputs are validated.
- Execution uses the standard authorized runtime.
- Failure behavior is documented.
- Execution history and provenance are available.

### Integration

- Entity association uses supported APIs.
- Data outputs can be interpreted through documented contracts.
- Indexing does not require package-specific hardcoded application logic.
- Dashboard integration uses standard view/data contracts.
- AI integration does not require proprietary direct access to package internals.

### Safety

- Permissions are explicit.
- Secrets are not embedded in package manifests or logs.
- Package execution is appropriately isolated for its trust level.
- Side effects require appropriate authorization.
- Uninstall and update behavior does not unexpectedly destroy user data.

A package may be considered **partially migrated** when only its executable operations meet these criteria.

Do not label an entire integration fully migrated while its other required capabilities still depend on application-specific code.

---

# 15. Example Package: Laurence

Laurence is a proposed finance-oriented package.

Its potential capabilities include:

- Yahoo Finance connectivity.
- Financial statement retrieval.
- Market price history.
- Web scraping.
- Dataset reading.
- Quantitative modeling.
- Alternative data analysis.
- Price watchlists.
- Financial dashboards.
- Financial chart and table views.

These tools may be invoked independently and combined.

For example:

```text
Entity: TSMC
     ↓
Laurence / Market Data
     ↓
Normalized Price Series
     ↓
Orbistry Index
     ↓
Knowledge Card Dashboard
```

Or:

```text
Entities: TSMC, GOOGL, MSTR
     ↓
Laurence / Price History
     ↓
Cross-Entity Data Composition
     ↓
Universe Dashboard
```

Laurence must not own or replace the core Orbistry Dashboard Builder.

It may provide specialized finance views through the common extension interface.

---

# 16. Example Package: Oldmcdonald

Oldmcdonald is a proposed agricultural and mini-farm package.

Its potential capabilities include:

- Sensor connectivity.
- Soil-moisture readings.
- Temperature monitoring.
- Reservoir monitoring.
- Device telemetry.
- Agricultural data indexing.
- Monitoring alerts.
- Farm dashboard views.

Example:

```text
Entity: Greenhouse A
     ↓
Oldmcdonald / Sensor Adapter
     ↓
Structured Telemetry
     ↓
Orbistry Data Interface
     ↓
Entity Dashboard
```

Any future actuator functionality must use an explicitly authorized control contract.

Monitoring and control must remain separate capabilities.

---

# 17. Cross-Industry Composition Example

Consider a Universe for a commercial farm.

Installed packages:

- Oldmcdonald.
- Laurence.

The operator wants to monitor both operating conditions and commodity-market information.

The Universe Dashboard may display:

- Greenhouse temperature.
- Soil moisture.
- Reservoir capacity.
- Commodity futures prices.
- Historical commodity market trends.

The Dashboard should not require a special hardcoded integration between the two packages.

Orbistry resolves their outputs through standard source and data contracts.

An optional Agent may analyze the relationship between agricultural conditions and market information, subject to data availability and permitted capabilities.

This example illustrates the central value of Orbistry's universal platform model.

---

# 18. Development Principles

The following principles should guide all future Engine development.

**ENG-001 — Core Independence**  
Industry-specific implementations belong in packages, not the universal Core.

**ENG-002 — Package Self-Containment**  
Packages supply their own implementation and declared dependencies.

**ENG-003 — Multiple Capabilities**  
One package may provide many tools and additional extension contributions.

**ENG-004 — Generic Discovery**  
Capabilities are discovered through registry contracts rather than hardcoded application references.

**ENG-005 — Entity Context**  
Packages operate within authorized Entity and Universe contexts.

**ENG-006 — Cross-Industry Composition**  
Unrelated packages may be installed and used together.

**ENG-007 — Non-AI Dependency**  
Ordinary Engine execution must not require an LLM.

**ENG-008 — AI Readiness**  
Supported capability contracts should be machine-readable for optional AI integration.

**ENG-009 — Storage Ownership**  
Orbistry owns storage interfaces and permission enforcement; packages declare schemas and intended storage behavior.

**ENG-010 — View Extensibility**  
Packages may contribute specialized views without replacing the general Dashboard system.

**ENG-011 — Explicit Authorization**  
Installation, trust, Entity access, execution, and side effects require appropriate independent policy checks.

**ENG-012 — Provenance**  
Outputs should retain sufficient origin and execution metadata.

**ENG-013 — Compatibility**  
Existing working functionality must survive migrations.

**ENG-014 — Stable Contracts**  
Public extension APIs must be versioned and documented.

**ENG-015 — No Hidden Coupling**  
Packages should not depend on undocumented Core implementation details.

**ENG-016 — Safe Failure**  
Failure of a package must not silently corrupt Entity data or disable unrelated platform functionality.

**ENG-017 — Independent Versioning**  
Package updates should not require synchronized updates to unrelated packages.

**ENG-018 — Controlled AI Instructions**  
Package-provided AI metadata is untrusted descriptive content, not privileged behavioral authority.

---

# 19. Responsibilities Matrix

| Responsibility | Orbistry Core | Package | Agent |
|---|---|---|---|
| Universe management | Owner | No | Optional consumer |
| Entity management | Owner | Via authorized API | Via authorized API |
| Package installation | Owner | Supplies files | No autonomous authority |
| Tool implementation | Runtime host | Owner | Consumer |
| Tool contracts | Validates | Declares | Reads |
| Dashboard layout | Owner | May contribute views | Optional consumer |
| Indexing infrastructure | Owner | May contribute adapters | Optional consumer |
| Data interpretation | Generic contracts | Domain semantics | Reasons over data |
| Storage infrastructure | Owner | Declares schemas | Authorized consumer |
| Execution approval | Enforces | Declares needs | Cannot self-grant |
| AI descriptions | Validates/exposes | Supplies metadata | Reads |
| Package business logic | No | Owner | No |

---

# 20. Acceptance Criteria for the Target Architecture

A generic package architecture can be considered proven when the following scenario works:

1. A developer creates a new package outside the Orbistry source repository.
2. The package defines multiple operations.
3. The package contains its own executable implementation.
4. The developer builds and validates it using the official toolchain.
5. The user installs it without editing Orbistry Core.
6. Orbistry discovers its contracts.
7. The user links selected operations to an Entity.
8. The operations execute with proper authorization.
9. Their outputs can be indexed through supported contracts.
10. A Dashboard can represent those outputs.
11. An optional Agent can discover and invoke authorized operations.
12. Removing the Agent does not disable ordinary tool use.
13. The package can coexist with an unrelated package.
14. Cross-package data can be composed in a Universe Dashboard.
15. Package failure does not corrupt unrelated entities or packages.

For security-sensitive capabilities, passing these functional tests does not substitute for appropriate security verification.

---

# 21. Instructions for Codex

When using this document for future implementation work:

1. Treat this document as the **target architectural intent**, not proof of the current repository structure.
2. Read the existing Engine Registry implementation and authoring documentation first.
3. Inventory every existing Engine before proposing migration.
4. Identify which logic is platform-generic and which is package-specific.
5. Never equate moving files with completing a package migration.
6. Do not remove working adapters before replacement behavior has been verified.
7. Preserve Entity data, historical records, and public compatibility paths.
8. Do not add new Engine-specific dispatch branches when a generic extension contract is appropriate.
9. Preserve separation between Orbistry Core and optional AI systems.
10. Document any mismatch between this specification and the current implementation.
11. Propose contract changes explicitly rather than silently modifying the existing protocol.
12. Test every migration independently and run relevant regression suites.
13. Do not begin large-scale repository restructuring as a side effect of implementing package support.
14. Produce an architecture impact report before making breaking changes.

## Required Audit Output

Before migration, produce:

- Current Engine inventory.
- Current package and built-in dependency map.
- Embedded package-specific implementation list.
- Proposed package ownership boundaries.
- Protocol compatibility assessment.
- Data persistence and migration risks.
- Security impact assessment.
- Migration priority and effort estimates.
- Test and rollback strategy.

**Do not begin migrating all existing Engines simultaneously.**

---

# 22. Final Architectural Statement

Orbistry is a universal workspace and operational infrastructure.

It does not need to contain the implementation of every industry-specific capability.

Instead, developers can distribute self-contained packages that add tools, data processing, specialized views, indexing adapters, and machine-readable capability descriptions.

The same Universe may use multiple packages from unrelated domains.

Packages contribute functionality. Orbistry provides the infrastructure that makes the functionality discoverable, authorized, composable, and accessible.

Entities provide operational context.

Dashboards provide visual representation.

Agents remain optional, authorized consumers of the same capabilities.

**The long-term objective is an open, composable, non-AI-dependent software platform whose capabilities can evolve independently from its Core.**

---

**End of specification — ORB-ENG-001**
