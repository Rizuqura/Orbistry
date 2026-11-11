"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Move presentation into a native window while the workspace keeps ownership
 * of the draft, conversation, live request, and trusted desktop bridge. */
export function useChatPopout(title: string) {
  const child = useRef<Window | null>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  const attach = useCallback(() => {
    const popup = child.current;
    child.current = null;
    setContainer(null);
    popup?.close();
    window.focus();
  }, []);

  const open = useCallback(() => {
    if (child.current && !child.current.closed) {
      child.current.focus();
      return;
    }
    let popup: Window | null = null;
    try {
      popup = window.open(
        "about:blank",
        "orbistry-chat-window",
        "popup,width=560,height=820",
      );
      if (!popup) {
        throw new Error(
          "The chat window could not be opened. Try again from WorldView.",
        );
      }
      const target = popup.document;
      target.title = title;
      target.documentElement.lang = document.documentElement.lang;
      const base = target.createElement("base");
      base.href = document.baseURI;
      target.head.appendChild(base);
      // Copy only presentation resources. No Next bootstrap or app scripts run
      // in the child, and both documents use the same local asset origin.
      for (const source of document.querySelectorAll(
        'link[rel="stylesheet"], style',
      )) {
        const copy = source.cloneNode(true) as HTMLElement;
        if (source.tagName === "LINK") {
          (copy as HTMLLinkElement).href = (source as HTMLLinkElement).href;
        }
        target.head.appendChild(copy);
      }
      const host = target.createElement("div");
      target.body.appendChild(host);
      child.current = popup;
      setContainer(host);
      setError(null);
      popup.focus();
    } catch (reason) {
      popup?.close();
      setError(
        reason instanceof Error
          ? reason.message
          : "Unable to open the chat window.",
      );
    }
  }, [title]);

  useEffect(() => {
    if (!container) {
      return;
    }
    const popup = child.current;
    if (!popup) {
      return;
    }
    const restore = () => {
      if (child.current === popup) {
        child.current = null;
        setContainer(null);
      }
    };
    popup.addEventListener("pagehide", restore);
    // Some native close paths do not deliver pagehide to the opener reliably.
    const timer = window.setInterval(() => {
      if (popup.closed) {
        restore();
      }
    }, 500);
    return () => {
      popup.removeEventListener("pagehide", restore);
      window.clearInterval(timer);
    };
  }, [container]);

  useEffect(() => {
    if (child.current && !child.current.closed) {
      child.current.document.title = title;
    }
  }, [title, container]);

  useEffect(() => {
    const closeChild = () => {
      child.current?.close();
      child.current = null;
    };
    window.addEventListener("pagehide", closeChild);
    return () => {
      window.removeEventListener("pagehide", closeChild);
      closeChild();
    };
  }, []);

  return { container, open, attach, error };
}
