"use client";

import { useState } from "react";
import { ChatMarkdown } from "../chat/chat-markdown";
import { structureDocument } from "./indexed-document";

/** Presents explicit document sections as attributed widgets, with the complete original rendering available on demand. */
export function IndexedDocument({
  content,
  filename,
  sourceRef,
}: Readonly<{
  content: string;
  filename: string;
  sourceRef: string;
}>) {
  const sections = structureDocument(content);
  const [originalOpen, setOriginalOpen] = useState(false);
  return (
    <div className="knowledge-document">
      <div className="knowledge-content-caption">
        <span>Indexed document</span>
        <span>Source excerpts · unverified</span>
      </div>
      <div className="knowledge-document-grid">
        {sections.map((section, index) => (
          <section
            className="knowledge-widget knowledge-document-section"
            key={`${section.line}:${index}`}
          >
            <header>
              <h3>{section.title}</h3>
              <span>Local source</span>
            </header>
            {section.fields.length > 0 && (
              <dl className="knowledge-facts">
                {section.fields.map((field) => (
                  <div key={field.line}>
                    <dt>{field.label}</dt>
                    <dd>
                      <ChatMarkdown content={field.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            )}
            {section.content && (
              <div className="knowledge-markdown">
                <ChatMarkdown content={section.content} />
              </div>
            )}
            <footer title={sourceRef}>
              {filename} · line {section.line} · source excerpt
            </footer>
          </section>
        ))}
      </div>
      <details
        className="knowledge-original-document"
        onToggle={(event) => setOriginalOpen(event.currentTarget.open)}
      >
        <summary>View original document</summary>
        {originalOpen && (
          <div className="knowledge-markdown">
            <ChatMarkdown content={content} />
          </div>
        )}
      </details>
    </div>
  );
}
