# Architecture Context — Orbistry V0.0.1-Amadeus

## 1. Architecture Objective

Orbistry V0.0.1-Amadeus is an internal AI-native knowledge and data workspace.

The architecture should enable the system to:

- Access user-selected folders.
- Discover supported files.
- Read Markdown and CSV files.
- Represent file contents in a form usable by the application and AI models.
- Search and retrieve relevant information.
- Provide selected information as context to AI models.
- Connect to multiple external AI model providers.
- Maintain a model-agnostic interface.
- Keep the underlying information environment independent from any specific AI model.

The architecture should prioritize:

> Simple, local-first, model-agnostic infrastructure that can evolve without prematurely introducing unnecessary complexity.

---

## 2. Architectural Philosophy

Orbistry should not be designed around a single AI model.

The broader product architecture is based on the principle:

> AI models should be replaceable. Knowledge should be permanent.

The conceptual relationship is:

User
↓
Knowledge Infrastructure
↓
Knowledge / Research / Data
↓
Model Interface
↓
Multiple AI Models
↓
User Intelligence

For V0.0.1, this philosophy is implemented through independent Knowledge and Model interfaces.

---

## 3. V0.0.1 Architectural Boundary

V0.0.1 supports two primary capabilities.

### Knowledge / Data Interaction

Local Folder
↓
Markdown / CSV
↓
Read
↓
Search / Retrieval

### Model Interaction

Context
↓
Model Interface
↓
External Model Provider
↓
Response

The two capabilities should remain conceptually independent.

The Knowledge system should not fundamentally depend on a specific AI model.

The Model system should not fundamentally depend on a specific knowledge storage implementation.

---

## 4. High-Level Architecture

The core V0.0.1 architecture is:

                         USER
                           │
                           ▼
                    ┌────────────┐
                    │     UI     │
                    └─────┬──────┘
                          │
             ┌────────────┴────────────┐
             │                         │
             ▼                         ▼
      KNOWLEDGE INTERFACE       MODEL INTERFACE
             │                         │
             ▼                         ▼
       LOCAL KNOWLEDGE            MODEL GATEWAY
             │                         │
       ┌─────┴─────┐            ┌─────┴─────┐
       ▼           ▼            ▼           ▼
    Markdown      CSV         GPT        Claude
                                  │
                                  ▼
                               Gemini

The Knowledge Interface and Model Interface are peer capabilities.

They are not required to depend directly on one another.

When a task requires both knowledge and AI reasoning, the Context Engine connects them.

---

## 5. Core Architectural Components

Orbistry V0.0.1 consists of the following major components:

1. Presentation / UI
2. Knowledge Interface
3. Knowledge Sources
4. File Readers
5. Knowledge Representation
6. Search / Retrieval
7. Context Engine
8. Model Interface
9. Model Gateway
10. External Model Providers

---

## 6. Presentation Layer

The Presentation Layer is responsible for user interaction.

Initial capabilities:

- Vault / Folder Selection
- File Browser
- Search
- File Viewer
- Chat
- Model Selection

The UI should not directly implement:

- CSV parsing
- Markdown parsing
- File indexing
- Model-provider API logic
- Context construction

The UI requests capabilities from the appropriate application interfaces.

---

## 7. Knowledge Interface

The Knowledge Interface represents Orbistry's connection to the user's information environment.

Its responsibility is:

> Make user-owned information accessible to the rest of the application.

Conceptually, the interface should support operations such as:

- Discover
- Read
- Search
- Metadata retrieval

Basic flow:

User selects folder
↓
Knowledge Interface
↓
Discover files
↓
Identify supported files
↓
Read relevant content
↓
Return normalized information

The Knowledge Interface should not care which AI model will eventually consume the information.

---

## 8. Knowledge Sources

V0.0.1 supports the following initial knowledge sources:

- Local filesystem
- Markdown files
- CSV files

Example:

/research/
├── TSMC.md
├── semiconductor.md
├── macro.md
└── data/
    ├── revenue.csv
    └── returns.csv

The local filesystem is the initial persistent storage layer.

A database is not required simply to satisfy V0.0.1 requirements.

---

## 9. File Readers

The Knowledge Interface delegates format-specific interpretation to file readers.

File Reader
├── Markdown Reader
└── CSV Reader

### Markdown Reader

Input:

TSMC.md

Output:

Document
├── id
├── path
├── name
├── content
└── metadata

### CSV Reader

Input:

financials.csv

Output:

Dataset
├── id
├── path
├── name
├── columns
├── rows
└── metadata

The application should work with normalized information rather than requiring every downstream component to understand raw file formats.

---

## 10. Knowledge Representation

V0.0.1 does not require a full knowledge graph.

The initial representation should be simple and extensible.

Conceptually:

Source
├── id
├── path
├── name
├── type
├── content
└── metadata

Markdown sources are represented as Documents.

CSV sources are represented as Datasets.

The representation should preserve enough metadata to identify the source and allow future relationships to be established.

The long-term product may evolve toward connected knowledge structures such as:

Source
↓
Observation
↓
Concept
↓
Claim
↓
Assumption
↓
Model
↓
Conclusion
↓
Decision

However, the full knowledge graph is outside the V0.0.1 implementation scope.

---

## 11. Search / Retrieval

The Search / Retrieval layer determines which information is relevant to the current task.

Basic flow:

User Question
↓
Search / Retrieval
↓
Relevant Sources
↓
Relevant Content

Initial search mechanisms may include:

- Filename matching
- Metadata filtering
- Keyword search
- Content search

Semantic / vector retrieval is not mandatory for V0.0.1.

It should only be introduced if basic retrieval proves insufficient for actual usage.

---

## 12. Context Engine

The Context Engine is the bridge between the Knowledge Interface and the Model Interface.

Its responsibility is:

> Convert relevant user-owned information into context appropriate for a model request.

Basic flow:

User Request
↓
Relevant Sources
↓
Context Builder
↓
Model Request

The Context Engine may combine:

- User request
- Relevant Markdown content
- Relevant CSV information
- File metadata
- Search results
- System instructions
- Other relevant context

The model should not automatically receive the entire knowledge vault.

The Context Engine should determine what information is relevant and should be provided to the model.

---

## 13. Model Interface

The Model Interface represents Orbistry's connection to AI reasoning systems.

Its responsibility is:

> Provide a consistent interface for communicating with different AI models.

Conceptually:

Model Interface
├── Generate
├── Stream
└── Model Information

The application should be able to request model reasoning without needing to know the implementation details of the underlying provider.

The application should not fundamentally depend on whether the model is:

- GPT
- Claude
- Gemini
- Qwen
- DeepSeek
- Another future model

---

## 14. Model Gateway

For V0.0.1, OpenRouter can serve as the initial model gateway.

Conceptually:

Orbistry Model Interface
↓
OpenRouter
↓
Multiple Models

Potential models include:

- GPT
- Claude
- Gemini
- Qwen
- DeepSeek

The gateway exists to support the model-agnostic architecture.

Future versions may support direct provider adapters if required.

---

## 15. Relationship Between Knowledge and Models

Knowledge and Models are independent capabilities.

They should not be represented as a mandatory linear chain such as:

Knowledge
↓
AI

Instead:

                     ORBISTRY
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
   KNOWLEDGE         CONTEXT          MODEL
   INTERFACE          ENGINE         INTERFACE
        │               │               │
        ▼               │               ▼
 Local Knowledge        │         External Models
 Markdown / CSV         │
        └───────────────┴───────────────┘

The Context Engine connects Knowledge and Models when a task requires both.

This allows:

- Knowledge operations without AI.
- AI operations without local knowledge.
- Knowledge + AI reasoning when required.

---

## 16. Example: User Reads a File

User opens:

TSMC.md

Flow:

UI
↓
Knowledge Interface
↓
Markdown Reader
↓
Document
↓
UI

No AI model is required.

---

## 17. Example: User Asks a General AI Question

User asks:

> Explain what a semiconductor foundry is.

No local knowledge is required.

Flow:

UI
↓
Model Interface
↓
Model Gateway
↓
AI Model
↓
Response
↓
UI

The Knowledge Interface is not required.

---

## 18. Example: User Asks About Local Knowledge

User asks:

> What is the relationship between TSMC and semiconductor manufacturing?

Flow:

UI
↓
Knowledge Interface
↓
Search / Retrieval
↓
Relevant Files
↓
Context Engine
↓
Model Interface
↓
Model Gateway
↓
AI Model
↓
Response
↓
UI

---

## 19. Example: User Asks About CSV Data

User asks:

> What is the average quarterly revenue in this dataset?

V0.0.1 flow:

UI
↓
Knowledge Interface
↓
CSV Reader
↓
Dataset
↓
Context Engine
↓
Model Interface
↓
Model
↓
Response

The initial goal is contextual understanding of the dataset.

Advanced statistical computation is not part of V0.0.1.

---

## 20. Future Data Analysis Architecture

A future version may introduce an Analysis Engine.

Potential V0.2 flow:

CSV
↓
Knowledge Interface
↓
Dataset
↓
Analysis Engine
↓
Basic Statistics
↓
Context Engine
↓
Model
↓
Conversational Explanation

Potential basic operations:

- Mean
- Median
- Standard deviation
- Minimum
- Maximum
- Observation count

---

## 21. Future Data Science Architecture

A later version may introduce Python-based analysis.

Potential architecture:

Dataset
↓
Python / Pandas
↓
Statistical Analysis
↓
Matplotlib
↓
Visualization
↓
AI Explanation

This is intentionally beyond V0.0.1.

The architecture should allow this capability to be added later without making Python a mandatory dependency for the initial product.

---

## 22. Local Runtime Consideration

Amadeus is intended to provide OpenCode-like interaction with user-selected folders and files.

This requires meaningful access to the local filesystem.

A pure browser environment may impose restrictions around arbitrary local filesystem access.

Potential runtime architectures include:

### Option A — Browser-First

Web UI
↓
Browser APIs
↓
Local Files

### Option B — Desktop Application

Desktop UI
↓
Local Runtime
↓
Filesystem

### Option C — Web UI + Local Runtime

Web UI
↓
Local Runtime
├── Filesystem Access
├── File Readers
├── Search
└── Context Engine
        ↓
   Model Interface
        ↓
   External Model API

The runtime decision should be made before implementation because it affects filesystem access, project structure, and the application boundary.

---

## 23. V0.0.1 Scope Guardrails

The following are intentionally not required for V0.0.1:

- PostgreSQL
- Redis
- Vector database
- Knowledge graph database
- Kubernetes
- Microservices
- Multi-agent architecture
- Python analytics runtime
- Matplotlib
- Cloud synchronization
- Collaboration infrastructure
- Corporate multi-tenancy

These technologies may become relevant in future versions, but they should not be introduced without a product requirement.

---

## 24. Architecture Rules

### Rule 1 — Model Independence

Do not couple the Knowledge system to a specific AI provider.

### Rule 2 — UI Independence

Do not couple UI components directly to model-provider APIs.

### Rule 3 — Knowledge Independence

Knowledge operations should work without requiring an AI model.

### Rule 4 — Model Independence

Model operations should be capable of working without requiring local knowledge.

### Rule 5 — Context as Bridge

When Knowledge and AI need to work together, the Context Engine should mediate the relationship.

### Rule 6 — Simple Storage

Use the filesystem when it satisfies the current V0.0.1 requirement.

### Rule 7 — Simple Search First

Do not introduce vector search until basic retrieval proves insufficient.

### Rule 8 — Delayed Analytics

Do not introduce Python-based analytics before data-analysis requirements are validated.

### Rule 9 — Replaceable Providers

AI providers must remain replaceable.

### Rule 10 — Avoid Premature Infrastructure

Do not introduce infrastructure solely because it may be useful at a larger scale.

### Rule 11 — Understandable Architecture

The architecture should remain understandable and maintainable by the founder using AI-assisted development.

### Rule 12 — Product-Driven Architecture

Architecture decisions must follow product requirements rather than technology trends.

---

## 25. Architecture Evolution

### V0.0.1

Local Files
↓
Knowledge Interface
↓
Search / Retrieval
↓
Context Engine
↓
Model Interface
↓
External Models

### V0.2

Local Files
↓
Knowledge Interface
↓
Data Analysis
↓
Basic Statistics
↓
Context Engine
↓
Model Interface
↓
External Models

### V0.3+

Knowledge
Research
Data
↓
Knowledge Engine
├── Search
├── Analysis
└── Relationships
↓
Context Engine
↓
Model Interface
↓
Multiple Models

### Future Corporate Architecture

Organization
↓
Knowledge
├── Research
├── Data
└── Documents
↓
Organizational Knowledge Layer
↓
Context Engine
↓
Model Interface
↓
Multiple AI Models

Corporate infrastructure is a future expansion and is not part of V0.0.1.

---

## 26. Architecture Summary

The fundamental V0.0.1 architecture is:

                         USER
                           │
                           ▼
                    ┌────────────┐
                    │     UI     │
                    └─────┬──────┘
                          │
             ┌────────────┴────────────┐
             │                         │
             ▼                         ▼
      KNOWLEDGE INTERFACE       MODEL INTERFACE
             │                         │
             ▼                         ▼
       LOCAL KNOWLEDGE            MODEL GATEWAY
             │                         │
       ┌─────┴─────┐            ┌─────┴─────┐
       ▼           ▼            ▼           ▼
    Markdown      CSV         GPT        Claude
                                  │
                                  ▼
                               Gemini

When both capabilities are required:

Knowledge
↓
Search / Retrieval
↓
Context Engine
↓
Model Interface
↓
Model
↓
Response

The central architectural principle is:

> **Knowledge and AI are independent capabilities. The Context Engine connects them when necessary.**

This preserves the core Orbistry philosophy:

> **The model is the engine. The knowledge system is the infrastructure.**