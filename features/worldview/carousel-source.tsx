"use client";
import { useEffect, useState } from "react";
import type { KnowledgeSourcePreview } from "../../types/worldview";
import { requireWorldViewBridge } from "./chip-session";

/** Resolves one applied source through the existing read-only Vault preview boundary. Discards stale results and performs no processing. */
export function useCarouselSource(
  vaultPath: string,
  entityId: string,
  sourceId: string,
) {
  const [preview, setPreview] = useState<KnowledgeSourcePreview | null>(null);
  const [error, setError] = useState("");
  useEffect(
    function loadOriginal() {
      let current = true;
      setPreview(null);
      setError("");
      void requireWorldViewBridge()
        .request<KnowledgeSourcePreview>("knowledge-preview", {
          vaultPath,
          id: entityId,
          sourceId,
        })
        .then(
          /** Accepts original image data for the current slide. */ (value) => {
            if (current) {
              if (value.kind === "image") setPreview(value);
              else setError("This source is not a supported image.");
            }
          },
          /** Reports unavailable originals independently of navigation. */ (
            cause,
          ) => {
            if (current) setError(cause.message);
          },
        );
      /** Ignores an earlier slide response after switching or unmounting. */
      return function discardOriginal() {
        current = false;
      };
    },
    [vaultPath, entityId, sourceId],
  );
  return { preview, error };
}

/** Renders a resolved original with browser decoding feedback. Source access stays in the dedicated resolver hook. */
export function CarouselImage({
  vaultPath,
  entityId,
  sourceId,
  name,
}: Readonly<{
  vaultPath: string;
  entityId: string;
  sourceId: string;
  name: string;
}>) {
  const { preview, error } = useCarouselSource(vaultPath, entityId, sourceId);
  const [decodeError, setDecodeError] = useState(false);
  /** Reports browser decoding failure while keeping other slides usable. */
  function failedImage(): void {
    setDecodeError(true);
  }
  if (error || decodeError)
    return (
      <p role="alert">
        {error || "Image could not be decoded. Use Locate Original."}
      </p>
    );
  if (preview?.kind !== "image") return <p role="status">Loading image…</p>;
  return (
    <img
      className="carousel-image"
      src={preview.dataUrl}
      alt={name}
      onError={failedImage}
    />
  );
}
