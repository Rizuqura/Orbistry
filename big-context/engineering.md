> Current model integration design: [task-model-integration-architecture.md](./task-model-integration-architecture.md). Implementation and ownership: [model-integration-handoff.md](./model-integration-handoff.md). The earlier milestone narrative below is preserved as historical context; its next-step suggestions and implementation status may be superseded.

# Engineering Context — Orbistry V0.0.1-Amadeus

## 1. Engineering Objective

Orbistry V0.0.1-Amadeus is an internal AI-native knowledge and data workspace.

The engineering objective is not to build a large-scale production system immediately.

The objective is to build a small, understandable, extensible MVP that allows the founder to:

- Understand the architecture.
- Read AI-generated code.
- Debug AI-generated code.
- Maintain the project.
- Understand APIs and data flow.
- Understand local filesystem interaction.
- Understand how AI models connect to application context.
- Build the MVP through AI-assisted development.

The founder should become technically capable enough to lead and maintain the system without needing to become a professional software engineer.

This follows the original curriculum principle:

> Learn enough engineering to build products. Do not become an engineer unless your mission requires it.

---

# 2. Engineering Philosophy

## 2.1 Product-Driven Engineering

Technology choices must follow product requirements.

Do not introduce a technology simply because it is popular, modern, or potentially useful.

---

## 2.2 Simple Before Advanced

Prefer:

- Simple architecture
- Small dependencies
- Understandable code
- Local-first implementation
- Explicit interfaces
- Minimal infrastructure

Avoid premature:

- Databases
- Distributed systems
- Vector databases
- Agents
- Cloud infrastructure
- Microservices

---

## 2.3 AI-Assisted but Human-Understandable

AI may generate a significant portion of the implementation.

However, generated code must remain understandable to the founder.

The founder should be able to answer:

- What does this component do?
- Where does this data come from?
- Where does this function send the data?
- What happens when it fails?
- Why does this dependency exist?
- What architectural layer does this belong to?

---

## 2.4 Model Independence

The application must not become fundamentally dependent on a single AI provider.

The model interface should remain replaceable.

Conceptually:

Orbistry
↓
Model Interface
↓
Model Gateway
↓
GPT / Claude / Gemini / Qwen / DeepSeek

---

## 2.5 Knowledge Independence

Knowledge operations should not require an AI model.

The system should be able to:

- Discover files
- Read files
- Display files
- Search files

without calling an AI model.

---

# 3. Engineering Architecture

The V0.0.1 engineering architecture is:

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

When Knowledge and AI are both required:

Knowledge Interface
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

---

# 4. Technology Stack

## MVP Technology Stack

| Layer | Technology | Purpose | V0.0.1 Requirement | Learning Depth |
|---|---|---|---|---|
| Language | TypeScript | Application programming language | Required | Basic–Medium |
| UI | React | Build interface components | Required | Medium |
| Framework | Next.js | Application framework and routing | Required | Medium |
| Styling | Tailwind CSS | UI styling and layout | Required | Basic–Medium |
| Local Runtime | Node.js | Local application/runtime logic | Required | Basic |
| Desktop Runtime | Electron | Provide local filesystem-capable application environment | Proposed / Architecture-dependent | Basic |
| Filesystem | Node.js File System API | Discover and read local files | Required | Basic |
| Markdown | Markdown parser/renderer | Read and render Markdown | Required | Basic |
| CSV | CSV parser | Read structured CSV data | Required | Basic |
| Search | Simple search / Fuse.js | Find relevant files and content | Required | Basic |
| Context | Custom Context Engine | Select and assemble relevant context | Required | Medium |
| AI Gateway | OpenRouter API | Access multiple AI models | Required | Medium |
| API | HTTP / REST | Communication between application and external services | Required | Medium |
| Data Format | JSON | Represent structured application/API data | Required | Medium |
| Secrets | Environment Variables | Store API credentials/configuration | Required | Basic |
| Version Control | Git | Track project changes | Required | Medium |
| Repository | GitHub | Remote repository and collaboration | Required | Basic–Medium |
| Testing | Manual + Basic Automated Tests | Validate MVP behavior | Required | Basic |

### Important

Electron, Fuse.js, and specific Markdown/CSV parser libraries are engineering recommendations for Amadeus.

They were not explicitly specified in the original curriculum document.

The curriculum explicitly establishes the conceptual areas of:

- JSON
- APIs
- HTTP
- React
- Next.js
- Tailwind
- Filesystems
- Markdown
- Database concepts
- Knowledge graphs
- OpenRouter
- LLM architecture
- RAG
- Context Engineering

---

# 5. Technology Layer Details

## 5.1 TypeScript

### Function

TypeScript is the primary programming language for the application.

### Used For

- UI logic
- Application logic
- Interfaces
- Data structures
- API communication
- Context construction
- File metadata
- Model requests

### Founder Learning Target

Understand:

- Variables
- Functions
- Objects
- Arrays
- Types
- Interfaces
- Imports
- Basic generics
- Async functions
- Error handling

The founder does not need advanced TypeScript expertise for V0.0.1.

### Target Test

The founder should be able to read code such as:

```ts
interface Document {
  id: string;
  path: string;
  content: string;
}