# Technology Stack — Orbistry V0.0.1-Amadeus

## 1. Purpose

This document defines the technology stack for Orbistry V0.0.1-Amadeus.

It describes:

- What each technology is.
- Why Amadeus uses it.
- Which architectural layer it belongs to.
- What function it performs.
- What the founder needs to understand.
- What the MVP should prove through testing.
- Which technologies are selected, proposed, or intentionally excluded.

This document is a technical reference for both the founder and AI coding agents.

---

# 2. Technology Philosophy

## 2.1 Requirement Before Technology

Technology must follow product and architecture requirements.

Do not introduce a technology simply because it is:

- Popular.
- Modern.
- Powerful.
- Common in other projects.
- Recommended by an AI model.

A technology should have a clear responsibility within Amadeus.

---

## 2.2 Simple Before Advanced

Prefer:

- Simple architecture.
- Small dependencies.
- Understandable code.
- Local-first infrastructure.
- Explicit interfaces.
- Minimal external services.

Avoid premature:

- Databases.
- Distributed systems.
- Vector databases.
- Multi-agent systems.
- Cloud infrastructure.
- Microservices.

---

## 2.3 Requirement ≠ Implementation

A product requirement does not automatically determine a specific technology.

For example:

```text
Requirement:
Amadeus needs local filesystem access.

Possible implementations:
- Electron
- Tauri
- Other local runtime
````

Therefore:

> Requirements should be stable; implementation choices may change.

---

## 2.4 AI-Assisted Development

AI will generate and modify a significant portion of the application.

However, the technology stack must remain understandable to the founder.

AI-generated implementation must not introduce a dependency without explaining:

1. What the dependency does.
2. Why it is required.
3. Which layer it belongs to.
4. What problem it solves.
5. Whether it can be replaced.
6. Whether it introduces additional architectural complexity.

---

# 3. V0.0.1 Technology Stack

| Layer           | Technology                 | Function                                     | Status              | Learning Depth |
| --------------- | -------------------------- | -------------------------------------------- | ------------------- | -------------- |
| Language        | TypeScript                 | Application programming language             | Selected            | Basic–Medium   |
| UI              | React                      | Component-based interface                    | Selected            | Medium         |
| Framework       | Next.js                    | Application framework                        | Selected            | Medium         |
| Styling         | Tailwind CSS               | UI styling and layout                        | Selected            | Basic–Medium   |
| Runtime         | Node.js                    | Local JavaScript runtime                     | Selected            | Basic          |
| Desktop Runtime | Electron                   | Local filesystem-capable application runtime | Proposed            | Basic          |
| Filesystem      | Node.js File System API    | Read and discover local files                | Selected            | Basic          |
| Markdown        | Markdown                   | Human-readable knowledge format              | Selected            | Basic          |
| Markdown Parser | Markdown parser / renderer | Parse and display Markdown                   | Required capability | Basic          |
| CSV             | CSV                        | Structured tabular data format               | Selected            | Basic          |
| CSV Parser      | CSV parser library         | Convert CSV into structured data             | Required capability | Basic          |
| Search          | Simple local search        | Find relevant information                    | Selected            | Basic          |
| Search Library  | Fuse.js or equivalent      | Optional fuzzy search                        | Proposed            | Basic          |
| Context         | Custom Context Engine      | Assemble relevant model context              | Selected            | Medium         |
| AI Gateway      | OpenRouter                 | Access multiple AI models                    | Selected            | Medium         |
| API             | HTTP / REST                | External service communication               | Selected            | Medium         |
| Data Format     | JSON                       | Structured data exchange                     | Selected            | Medium         |
| Configuration   | Environment Variables      | Manage secrets/configuration                 | Selected            | Basic          |
| Version Control | Git                        | Version control                              | Selected            | Medium         |
| Repository      | GitHub                     | Remote repository                            | Selected            | Basic–Medium   |
| Testing         | Manual + Automated Tests   | Validate behavior                            | Selected            | Basic          |

---

# 4. Architecture Relationship

The technology stack implements the following architecture:

```text
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
```

When a task requires both Knowledge and AI:

```text
Knowledge Interface
↓
Search / Retrieval
↓
Context Engine
↓
Model Interface
↓
Model Provider
↓
Response
```

The fundamental architectural relationship is:

```text
KNOWLEDGE ≠ MODEL

CONTEXT = BRIDGE
```

Knowledge and Model capabilities should remain independently replaceable.

---

# 5. TypeScript

## What It Is

TypeScript is a programming language built on top of JavaScript that adds static typing.

It allows developers to explicitly describe the expected structure of data and functions.

Example:

```ts
interface Document {
  id: string;
  path: string;
  content: string;
}
```

## Function in Amadeus

TypeScript is the primary application programming language.

It is used for:

* UI logic.
* Application logic.
* Data structures.
* Interfaces.
* API communication.
* Context construction.
* File metadata.
* Model requests.
* Error handling.

## Architecture Layer

```text
All Application Layers
```

## Why We Use It

Amadeus uses the React / Next.js ecosystem.

TypeScript also makes AI-generated code easier to inspect because expected data structures are explicit.

## Founder Learning Target

Understand:

* Variables.
* Functions.
* Objects.
* Arrays.
* Types.
* Interfaces.
* Imports.
* Async functions.
* Error handling.
* Basic generics.

Advanced TypeScript is not required for V0.0.1.

## Target Test

Given:

```ts
interface Dataset {
  name: string;
  columns: string[];
  rows: Record<string, unknown>[];
}
```

The founder should be able to explain:

* What `Dataset` represents.
* What each property means.
* Why `columns` is an array.
* Why `rows` contains structured objects.
* What `string[]` means.
* What `Record<string, unknown>` approximately represents.

---

# 6. React

## What It Is

React is a component-based UI library.

It allows interfaces to be constructed from reusable components.

## Function in Amadeus

React builds the interactive interface.

Potential components include:

```text
App
├── Sidebar
├── VaultSelector
├── FileBrowser
├── SearchBar
├── FileViewer
├── ChatWindow
├── Message
└── ModelSelector
```

## Architecture Layer

```text
Presentation Layer
```

## Why We Use It

Amadeus requires an interactive interface containing multiple independent UI areas.

React provides a component-based structure suitable for this.

## Founder Learning Target

Understand:

* Components.
* Props.
* State.
* Events.
* Conditional rendering.
* Lists.
* Component composition.

## Target Test

The founder should understand:

```text
VaultSelector
      ↓
selectedFolder
      ↓
FileBrowser
```

and explain how information moves between components.

---

# 7. Next.js

## What It Is

Next.js is an application framework built around React.

It provides application structure and capabilities around React.

## Function in Amadeus

Next.js provides:

* Application structure.
* Routing.
* Layouts.
* Page organization.
* Server-side capabilities where appropriate.

## Architecture Layer

```text
Application / Presentation Layer
```

## Why We Use It

Amadeus is a complete application rather than a collection of isolated React components.

Next.js provides an organized application structure.

## Founder Learning Target

Understand:

* App structure.
* Routes.
* Layouts.
* Pages.
* Server vs client concepts.
* How UI connects to application logic.

## Target Test

The founder should be able to:

1. Find the route responsible for a page.
2. Find the relevant layout.
3. Identify whether a component requires client-side behavior.
4. Understand where application logic is executed.

---

# 8. Tailwind CSS

## What It Is

Tailwind CSS is a utility-first CSS framework.

It allows styling to be composed through utility classes.

## Function in Amadeus

Used for:

* Layout.
* Spacing.
* Typography.
* Colors.
* Borders.
* Responsive behavior.
* Component styling.

## Architecture Layer

```text
Presentation Layer
```

## Why We Use It

Amadeus requires a consistent UI system that can also be efficiently modified through AI-assisted development.

## Founder Learning Target

Understand:

* Flexbox.
* Grid.
* Spacing.
* Width / height.
* Typography.
* Responsive breakpoints.
* Basic utility classes.

## Target Test

The founder should understand approximately what the following concepts do:

```text
flex
grid
gap
p-*
m-*
w-*
h-*
text-*
md:*
lg:*
```

Detailed memorization is not required.

---

# 9. Node.js

## What It Is

Node.js is a JavaScript runtime that allows JavaScript / TypeScript code to execute outside the browser.

## Function in Amadeus

Node.js provides runtime capabilities for operations that need local machine access.

It may handle:

* Filesystem access.
* File discovery.
* File reading.
* Parsing.
* Local application logic.
* Environment variables.

## Architecture Layer

```text
Local Runtime
```

## Why We Use It

The browser is intentionally restricted from arbitrary filesystem access.

Amadeus requires OpenCode-like interaction with user-selected local folders.

## Founder Learning Target

Understand:

* Runtime.
* Process.
* Filesystem.
* Paths.
* File reading.
* Environment variables.
* Async operations.
* Errors.

## Target Test

The founder should understand:

```text
Folder Path
↓
Node Runtime
↓
Filesystem API
↓
File
↓
Content
```

---

# 10. Electron

## What It Is

Electron is a desktop application framework that allows web technologies to run as a desktop application with access to local runtime capabilities.

## Function in Amadeus

Electron is a proposed runtime for:

* Local application execution.
* Filesystem access.
* Web-based UI.
* Communication between UI and local runtime.

## Architecture Layer

```text
Desktop / Local Runtime
```

## Conceptual Architecture

```text
Electron
├── UI
│   └── React / Next.js
│
└── Local Runtime
    └── Node.js
        └── Filesystem
```

## Why It May Be Used

Amadeus should allow users to select folders and inspect local files similarly to local developer tools.

A pure browser environment may impose restrictions around arbitrary filesystem access.

## Founder Learning Target

Understand conceptually:

* Desktop runtime.
* Renderer process.
* Main process.
* IPC.
* Local filesystem boundary.

Advanced Electron development is not required.

## Target Test

The founder should be able to explain:

> Why can't a normal browser application simply access any arbitrary folder on the user's computer?

and:

> Why might Amadeus require a local runtime?

## Status

**Proposed — not frozen.**

Electron is an implementation option, not a permanent architectural requirement.

---

# 11. Filesystem API

## What It Is

The filesystem API allows the application to interact with files and directories on the local machine.

## Function in Amadeus

Used for:

* Folder discovery.
* File discovery.
* File metadata.
* File reading.
* Path management.

## Architecture Layer

```text
Knowledge Interface
↓
Filesystem
```

## Basic Flow

```text
User Folder
↓
Discover Files
↓
Filter Supported Types
↓
Read File
↓
Normalize Content
```

## Founder Learning Target

Understand:

* Paths.
* Directories.
* Files.
* Extensions.
* Read operations.
* Metadata.
* Permissions.
* File errors.

## Target Test

Given:

```text
/research/
├── TSMC.md
├── Macro.md
├── Oil.md
└── data.csv
```

the founder should understand how the application:

1. Finds the files.
2. Determines their types.
3. Chooses the appropriate reader.
4. Reads their content.

---

# 12. Markdown

## What It Is

Markdown is a lightweight text format commonly used for structured notes and documentation.

Example:

```md
# TSMC

## Thesis

TSMC has a strong position in advanced semiconductor manufacturing.
```

## Function in Amadeus

Markdown is the primary human-readable knowledge format for V0.0.1.

It is used for:

* Research notes.
* Concepts.
* Thesis.
* Observations.
* Documentation.

## Architecture Layer

```text
Knowledge Source
↓
Markdown Reader
↓
Knowledge Representation
```

## Why We Use It

Markdown is:

* Human-readable.
* Easy to version with Git.
* Easy for AI models to process.
* Easy to create and edit.
* Suitable for structured research notes.

## Founder Learning Target

Understand:

* Headings.
* Paragraphs.
* Lists.
* Tables.
* Links.
* Code blocks.
* Frontmatter conceptually.

## Target Test

The founder should be able to trace:

```text
TSMC.md
↓
Markdown Reader
↓
Document
↓
File Viewer
```

and:

```text
TSMC.md
↓
Markdown Reader
↓
Document
↓
Context Engine
```

---

# 13. Markdown Parser / Renderer

## What It Is

A parser interprets Markdown syntax.

A renderer converts parsed Markdown into a visual representation.

## Function in Amadeus

Used to:

* Display Markdown files.
* Render readable knowledge content.
* Provide normalized content to other layers.

## Architecture Layer

```text
Markdown Reader
```

## Processing

```text
Raw Markdown
↓
Parsed Content
↓
Rendered Content
```

## Founder Learning Target

Understand the difference between:

* Raw source.
* Parsed representation.
* Rendered representation.

Parser implementation details are not required.

---

# 14. CSV

## What It Is

CSV is a simple tabular data format.

Example:

```csv
Company,Revenue,Margin
TSMC,592.6,53.1
Intel,128.0,42.0
```

## Function in Amadeus

CSV is the initial structured data format.

It is used for:

* Financial datasets.
* Returns.
* Portfolio data.
* Research datasets.
* Other structured information.

## Architecture Layer

```text
Knowledge Source
↓
CSV Reader
↓
Dataset Representation
```

---

# 15. CSV Parser

## What It Is

A CSV parser converts CSV text into structured application data.

Example:

```text
CSV
↓
Parser
↓
Columns + Rows
```

Conceptually:

```text
columns:
[
  "Company",
  "Revenue",
  "Margin"
]

rows:
[
  {
    "Company": "TSMC",
    "Revenue": 592.6,
    "Margin": 53.1
  }
]
```

## Function in Amadeus

Allows the application and Context Engine to work with structured datasets.

## Founder Learning Target

Understand:

* Rows.
* Columns.
* Headers.
* Values.
* Arrays.
* Objects.
* Structured data.

## Target Test

The founder should be able to explain how raw CSV becomes structured data usable by the application.

---

# 16. Search / Retrieval

## What It Is

Search / Retrieval determines which stored information is relevant to a user's request.

## Function in Amadeus

Used for:

* Filename search.
* Content search.
* Metadata filtering.
* Context retrieval.

## V0.0.1 Strategy

Start with simple retrieval:

* Filename matching.
* Keyword matching.
* Content search.
* Metadata filtering.

Vector / semantic search is not required for V0.0.1.

## Architecture Layer

```text
Knowledge Interface
↓
Search / Retrieval
↓
Context Engine
```

## Why We Start Simple

V0.0.1 is intended to validate the information workflow.

A more sophisticated retrieval system should only be introduced if real usage demonstrates that simple retrieval is insufficient.

## Founder Learning Target

Understand:

```text
Query
↓
Search
↓
Matching Sources
↓
Relevant Content
```

## Target Test

Query:

```text
TSMC margin
```

Expected relevant sources may include:

```text
TSMC.md
TSMC_Financials.csv
TSMC_Research.md
```

---

# 17. Fuse.js / Search Library

## What It Is

Fuse.js is an example of a lightweight fuzzy-search library that can search local structured data.

## Function in Amadeus

It may improve:

* Filename search.
* Content search.
* Approximate matching.
* Result ranking.

## Architecture Layer

```text
Search / Retrieval
```

## Why It May Be Used

It can provide better search behavior than naive exact string matching without requiring a vector database.

## Founder Learning Target

Understand conceptually:

* Query.
* Search index.
* Matching.
* Relevance.
* Ranking.

The founder does not need to understand the internal search algorithm.

## Status

**Proposed.**

Fuse.js is not an architectural requirement.

An equivalent implementation may be used if it better fits the project.

---

# 18. Context Engine

## What It Is

The Context Engine determines what information should be provided to an AI model for a particular task.

## Function in Amadeus

It connects the Knowledge Interface and Model Interface.

## Core Flow

```text
User Request
↓
Search / Retrieval
↓
Relevant Sources
↓
Content Selection
↓
Context Assembly
↓
Model Request
```

## Context May Contain

* User request.
* Relevant Markdown.
* Relevant CSV data.
* File metadata.
* Search results.
* System instructions.
* Model instructions.

## Why It Exists

The model should not automatically receive the entire knowledge vault.

The Context Engine controls:

* Relevance.
* Context size.
* Source selection.
* Information grounding.

## Architecture Layer

```text
Bridge between Knowledge and Model capabilities
```

## Founder Learning Target

Understand:

* Context.
* Retrieval.
* Context selection.
* Prompt structure.
* Evidence.
* Context limits.
* Context quality.
* RAG fundamentals.

## Target Test

Given:

```text
100 files in the vault
```

and:

```text
Why did TSMC margins improve?
```

the founder should understand why the Context Engine should retrieve a smaller set of relevant sources instead of sending all 100 files.

---

# 19. OpenRouter

## What It Is

OpenRouter is the initial API gateway for accessing multiple AI models through a common interface.

## Function in Amadeus

Used for:

* Multi-model access.
* Model selection.
* Model routing.
* AI API communication.

Potential models include:

* GPT.
* Claude.
* Gemini.
* Qwen.
* DeepSeek.

## Architecture Layer

```text
Model Interface
↓
OpenRouter
↓
Model Provider
```

## Why We Use It

Orbistry's architecture requires model independence.

OpenRouter allows the initial implementation to experiment with multiple models without hard-coding the application around one provider.

## Founder Learning Target

Understand:

* API endpoint.
* Request.
* Response.
* Authentication.
* API key.
* Model identifier.
* Rate limits.
* Errors.
* Cost conceptually.

## Target Test

The founder should be able to trace:

```text
User Question
↓
Context Engine
↓
HTTP Request
↓
OpenRouter
↓
Selected Model
↓
HTTP Response
↓
Orbistry
↓
UI
```

---

# 20. HTTP / REST API

## What It Is

HTTP is the communication protocol used by web applications and APIs.

REST is a common architectural style for HTTP-based APIs.

## Function in Amadeus

Primarily used for communication with external AI services.

## Required Concepts

### HTTP Methods

* GET
* POST
* PUT
* DELETE

### Request

A request may contain:

* URL.
* Method.
* Headers.
* Authentication.
* Body.

### Response

A response may contain:

* Status code.
* Headers.
* Body.
* Error information.

## Architecture Layer

```text
Application
↓
HTTP
↓
External API
```

## Founder Learning Target

The key question is:

> What goes into the request, what comes back, and what can go wrong?

## Target Test

Given an API request, the founder should be able to identify:

```text
Endpoint
Method
Headers
Authentication
Request body
Response body
Status code
Error state
```

---

# 21. JSON

## What It Is

JSON is a structured data format used heavily for API communication and application data.

## Function in Amadeus

Used for:

* API requests.
* API responses.
* Model messages.
* Configuration.
* Metadata.
* Internal structured data.

## Architecture Layer

```text
Data Representation
```

## Example

```json
{
  "model": "example-model",
  "messages": [
    {
      "role": "user",
      "content": "Explain TSMC margins."
    }
  ]
}
```

## Founder Learning Target

Understand:

* Objects.
* Arrays.
* Key-value pairs.
* Nested structures.
* Strings.
* Numbers.
* Boolean.
* Null.

## Target Test

The founder should be able to identify:

* Object.
* Array.
* Key.
* Value.
* Nested object.
* Nested array.

and understand how JSON moves through an API.

---

# 22. Environment Variables

## What They Are

Environment variables are configuration values provided to an application at runtime instead of being hard-coded into source code.

## Function in Amadeus

Used for:

* API keys.
* Local configuration.
* Environment-specific settings.

Example:

```text
OPENROUTER_API_KEY=...
```

## Why We Use Them

Secrets must not be embedded directly into source code or committed to GitHub.

## Architecture Layer

```text
Runtime Configuration
```

## Founder Learning Target

Understand:

```text
Secret
↓
Environment Variable
↓
Runtime
↓
API Request
```

## Target Test

The founder should understand why this is unsafe:

```ts
const apiKey = "sk-actual-secret";
```

and why the key should instead be provided through runtime configuration.

---

# 23. Git

## What It Is

Git is the project's version control system.

## Function in Amadeus

Used for:

* Version history.
* Commits.
* Branches.
* Reverts.
* Experimentation.
* Recovery.

## Architecture Layer

```text
Engineering Infrastructure
```

## Founder Learning Target

The founder already understands:

* init.
* clone.
* add.
* commit.
* push.
* pull.
* branch.
* merge.
* revert.

## Target Test

Given a broken AI-generated change, the founder should know how to:

```text
Inspect Change
↓
Identify Commit
↓
Revert / Restore
↓
Continue Development
```

---

# 24. GitHub

## What It Is

GitHub hosts the Git repository remotely.

## Function in Amadeus

Used for:

* Remote backup.
* Repository hosting.
* Version history.
* Issues.
* Pull requests when useful.
* Documentation.

## Architecture Layer

```text
Engineering Infrastructure
```

## Founder Learning Target

Understand:

```text
Local Repository
↓
Git
↓
Remote Repository
↓
GitHub
```

Advanced GitHub administration is not required for V0.0.1.

---

# 25. Testing

## What It Is

Testing verifies that implementation behaves according to product and architecture requirements.

## Function in Amadeus

Used for:

* Feature validation.
* Regression prevention.
* Architecture verification.
* Debugging.

## V0.0.1 Testing Strategy

Start with:

1. Manual testing.
2. Basic automated tests.
3. Integration tests where useful.

Testing should be introduced alongside feature development.

## Architecture Layer

```text
Cross-Cutting Engineering Layer
```

## Founder Learning Target

Understand:

* Test case.
* Expected result.
* Actual result.
* Pass / fail.
* Regression.
* Unit test.
* Integration test.

---

# 26. Technology Dependencies

The major dependency relationship is:

```text
React
↓
Next.js
↓
Application

Node.js
↓
Filesystem
↓
Knowledge Interface

Markdown Parser
↓
Markdown Reader

CSV Parser
↓
CSV Reader

Search
↓
Retrieval

Knowledge + Retrieval
↓
Context Engine

Context Engine
↓
Model Interface
↓
OpenRouter
↓
AI Models
```

If Electron is selected:

```text
Electron
↓
Local Runtime
↓
Node.js
↓
Filesystem
```

---

# 27. Technology Boundaries

The following boundaries must remain explicit.

## UI → Application Logic

The UI requests capabilities.

The UI should not directly implement domain logic.

---

## Application → Filesystem

Filesystem access belongs to the local runtime / Knowledge layer.

UI components should not directly read arbitrary files.

---

## Knowledge → Context

Knowledge provides information.

The Context Engine determines which information is relevant to the current model task.

---

## Context → Model

The Context Engine prepares model input.

The Model Interface sends it to the selected provider.

---

## Model → UI

The model response returns through the application layer before being rendered.

The UI should not contain provider-specific API logic.

---

# 28. MVP Technology Tests

## 28.1 Folder Access

### A1 — Select Folder

Input:

```text
/research/
```

Expected:

```text
Folder successfully selected.
```

### A2 — Discover Files

Expected:

```text
TSMC.md
Macro.md
Oil.md
data.csv
```

### A3 — Unsupported File

Given:

```text
image.png
```

Expected:

```text
File is identified as unsupported.
Application does not crash.
```

---

# 29. Markdown Tests

## M1 — Read Markdown

Input:

```text
TSMC.md
```

Expected:

* File opens.
* Content is readable.
* Markdown renders correctly.

## M2 — Metadata

Expected:

* File name.
* Path.
* File type.

## M3 — Context Access

Given a relevant user query, relevant Markdown content can be retrieved and passed to the Context Engine.

---

# 30. CSV Tests

## C1 — Read CSV

Input:

```text
financials.csv
```

Expected:

* Columns detected.
* Rows detected.
* Dataset loaded.

## C2 — Basic Structure

Given:

```csv
Company,Revenue,Margin
TSMC,592.6,53.1
```

Expected conceptual representation:

```text
columns:
Company
Revenue
Margin

rows:
TSMC
592.6
53.1
```

## C3 — Context Access

Relevant CSV information can be selected and passed to the Context Engine.

---

# 31. Search Tests

## S1 — Filename Search

Query:

```text
TSMC
```

Expected:

```text
TSMC.md
TSMC_Financials.csv
```

## S2 — Content Search

Query:

```text
gross margin
```

Expected:

Relevant files containing the concept are returned.

## S3 — No Results

Query:

```text
random-nonexistent-topic
```

Expected:

```text
No relevant results found.
```

The system should not fabricate a result.

---

# 32. Context Engine Tests

## CE1 — Relevant Context

Question:

```text
Why did TSMC margins improve?
```

Expected:

The Context Engine identifies relevant TSMC research and financial data.

---

## CE2 — Irrelevant Context Exclusion

A large unrelated file should not automatically be included in model context.

---

## CE3 — Source Awareness

The model request should preserve enough source information to identify where retrieved context came from.

---

## CE4 — Empty Retrieval

If no relevant local source is found:

Expected:

* Clearly indicate insufficient local evidence.
* Do not fabricate local knowledge.
* Allow general model knowledge only when explicitly supported by product behavior.

---

# 33. Model Interface Tests

## AI1 — Model Request

Expected:

```text
Application
↓
Model Interface
↓
Provider
↓
Model
```

## AI2 — Response

Expected:

```text
Model Response
↓
Application
↓
UI
```

## AI3 — Provider Independence

Changing the selected model should not require rewriting the Knowledge Interface.

## AI4 — API Failure

If the provider fails:

Expected:

* Error is captured.
* UI remains functional.
* User receives understandable feedback.

---

# 34. End-to-End MVP Tests

## E2E1 — Knowledge Question

User:

> What is the relationship between TSMC and semiconductor manufacturing?

Expected:

```text
Question
↓
Search
↓
Relevant Files
↓
Context
↓
Model
↓
Answer
```

The answer should be grounded in retrieved local context when relevant sources exist.

---

## E2E2 — CSV Question

User:

> What companies are included in this dataset?

Expected:

```text
CSV
↓
Dataset
↓
Context
↓
Model
↓
Answer
```

---

## E2E3 — Mixed Knowledge Question

User:

> Compare TSMC's revenue growth with the semiconductor industry's growth.

Expected:

```text
Question
↓
Search
├── TSMC.md
├── Industry.md
└── Revenue.csv
↓
Context Engine
↓
Model
↓
Comparative Answer
```

---

# 35. V0.0.1 Acceptance Criteria

Amadeus V0.0.1 should be considered functional when it can:

* [ ] Access a user-selected knowledge folder.
* [ ] Discover files.
* [ ] Identify supported file types.
* [ ] Read Markdown files.
* [ ] Read CSV files.
* [ ] Display relevant files.
* [ ] Search local knowledge.
* [ ] Retrieve relevant information.
* [ ] Build model context from retrieved information.
* [ ] Connect to an external AI model through an API.
* [ ] Support model selection through the Model Interface.
* [ ] Return model responses to the UI.
* [ ] Handle basic file errors.
* [ ] Handle basic API errors.
* [ ] Avoid exposing API keys in source code.
* [ ] Maintain separation between Knowledge and Model interfaces.
* [ ] Allow Knowledge operations without requiring an AI model.
* [ ] Avoid introducing unnecessary infrastructure.

---

# 36. Founder Engineering Competency Target

After working through the V0.0.1 technology stack, the founder should be able to:

## Understand

* Project structure.
* Application architecture.
* React components.
* Next.js routes.
* TypeScript structures.
* Filesystem concepts.
* Markdown.
* CSV.
* JSON.
* HTTP.
* APIs.
* Authentication.
* AI model interfaces.
* Context construction.
* Basic RAG concepts.

## Read

The founder should be able to read AI-generated code relevant to the MVP and identify:

* What it does.
* What data it receives.
* What it returns.
* What dependency it uses.
* Which architecture layer it belongs to.
* Where errors may occur.

## Debug

The founder should be able to interpret:

* Console errors.
* Build errors.
* API errors.
* File access errors.
* Type errors.
* Runtime errors.

## Architect

The founder should be able to explain:

```text
UI
↓
Knowledge Interface
↓
File / Search Layer
↓
Context Engine
↓
Model Interface
↓
Model Provider
```

and explain why each boundary exists.

## Build

The founder should be able to use AI-assisted development to implement and maintain the MVP without blindly accepting generated architecture.

---

# 37. Learning Priority

## Tier A — Must Understand Before / During MVP

1. JSON
2. HTTP
3. APIs
4. Authentication / API Keys
5. JavaScript / TypeScript reading
6. React fundamentals
7. Next.js fundamentals
8. Filesystem concepts
9. Markdown
10. CSV / structured data
11. Context Engineering
12. RAG fundamentals
13. Model interfaces
14. Error logs and debugging
15. Architecture and scope control

---

## Tier B — Learn Just in Time

1. Node.js filesystem APIs
2. Electron
3. Markdown parser
4. CSV parser
5. Search library
6. Streaming responses
7. Basic automated testing
8. IPC if Electron is selected

---

## Tier C — Not Required for V0.0.1

* Advanced TypeScript.
* Advanced React.
* Advanced backend engineering.
* PostgreSQL.
* SQL optimization.
* Redis.
* Docker.
* Kubernetes.
* Microservices.
* Vector databases.
* Advanced RAG.
* Autonomous agents.
* Multi-agent systems.
* Python data science.
* Matplotlib.
* Cloud synchronization.
* Corporate infrastructure.

These may become relevant in later versions.

---

# 38. Technology Evolution

## V0.0.1

```text
React / Next.js / Tailwind
            ↓
       Local Runtime
            ↓
        Filesystem
       ┌────┴────┐
       ▼         ▼
   Markdown     CSV
       │         │
       └────┬────┘
            ▼
     Search / Retrieval
            ↓
      Context Engine
            ↓
      Model Interface
            ↓
       OpenRouter
            ↓
    Multiple AI Models
```

---

## V0.2

Add:

```text
Dataset
↓
Analysis Engine
↓
Basic Statistics
↓
Context Engine
```

Potential basic operations:

* Mean.
* Median.
* Standard deviation.
* Minimum.
* Maximum.
* Observation count.

---

## V0.3+

Potentially add:

```text
Python / Pandas
↓
Statistical Analysis
↓
Matplotlib
↓
Visualization
```

---

## Future

Potentially add:

```text
Knowledge Graph
Database
Advanced Retrieval
Agents
Automation
Corporate Infrastructure
```

Only when validated by product requirements.

---

# 39. Technology Decision Status

| Technology / Capability  | Status              | Reason                                     |
| ------------------------ | ------------------- | ------------------------------------------ |
| TypeScript               | Selected            | Primary application language               |
| React                    | Selected            | UI component system                        |
| Next.js                  | Selected            | Application framework                      |
| Tailwind CSS             | Selected            | UI styling                                 |
| Node.js                  | Selected            | Local runtime capabilities                 |
| Local filesystem         | Selected            | Core knowledge source                      |
| Markdown                 | Selected            | Primary human-readable knowledge format    |
| CSV                      | Selected            | Initial structured data format             |
| Simple search            | Selected            | Initial retrieval mechanism                |
| Custom Context Engine    | Selected            | Bridge between Knowledge and Model         |
| OpenRouter               | Selected            | Initial multi-model gateway                |
| HTTP / REST              | Selected            | External API communication                 |
| JSON                     | Selected            | Structured data exchange                   |
| Environment Variables    | Selected            | Secret/configuration management            |
| Git                      | Selected            | Version control                            |
| GitHub                   | Selected            | Remote repository                          |
| Basic testing            | Selected            | MVP validation                             |
| Electron                 | Proposed            | Possible local desktop runtime             |
| Fuse.js                  | Proposed            | Possible lightweight search implementation |
| Markdown parser          | Required capability | Implementation detail not yet frozen       |
| CSV parser               | Required capability | Implementation detail not yet frozen       |
| Database                 | Out of scope        | Not required for V0.0.1                      |
| Vector database          | Out of scope        | Basic retrieval is sufficient initially    |
| Python                   | Out of scope        | Reserved for later data analysis           |
| Matplotlib               | Out of scope        | Reserved for later visualization           |
| Agents                   | Out of scope        | Not required for MVP                       |
| Multi-agent systems      | Out of scope        | Not required for MVP                       |
| Corporate infrastructure | Future              | Intended for later product evolution       |

---

# 40. Engineering North Star

The engineering objective is not to maximize technical sophistication.

The objective is:

> **Build the smallest technology stack capable of proving Orbistry's core thesis.**

The system should demonstrate:

```text
User-Owned Information
        ↓
Persistent Information Bank
        ↓
Relevant Context
        ↓
Replaceable AI Models
        ↓
Useful Intelligence
```

The technology stack should preserve two fundamental boundaries:

```text
KNOWLEDGE ≠ MODEL

CONTEXT = BRIDGE
```

The model is the reasoning engine.

The knowledge environment is the persistent infrastructure.

The Context Engine determines how the two interact.

---

# 41. Final Technology Principle

> **Do not add technology because we might need it. Add technology when a validated requirement proves that we need it.**

Amadeus V0.0.1 should remain:

```text
Simple
Local
Understandable
Model-Agnostic
Context-Aware
AI-Assisted
Testable
Extensible
```

The purpose of the MVP is not to demonstrate how many technologies can be used.

The purpose is to demonstrate:

```text
Knowledge
+
Context
+
Replaceable Models
=
Persistent AI-Assisted Intelligence
```

```

This one is now specifically structured as **`tech-stack.md`**, rather than mixing the technology reference with the broader engineering curriculum.
```
