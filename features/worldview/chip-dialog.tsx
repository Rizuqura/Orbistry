"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type SyntheticEvent,
} from "react";
import {
  DEFAULT_CHIP_COLOR,
  parseChipTags,
  type ChipDraft,
  type WorldViewChip,
} from "./chips";
import { normalizeChipColor } from "./chip-colors";
import { readChipIcon } from "./chip-icon";
import { ColorWheel } from "./color-wheel";

/** Collects metadata, an optional uploaded icon, and block color; changes apply only on Create/Save. */
export function ChipDialog({
  chip,
  onSave,
  onClose,
}: Readonly<{
  chip?: WorldViewChip;
  onSave: (draft: ChipDraft) => void;
  onClose: () => void;
}>) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const submitted = useRef(false);
  const uploadVersion = useRef(0);
  const [error, setError] = useState("");
  const [iconImage, setIconImage] = useState(chip?.iconImage);
  const [color, setColor] = useState(chip?.color ?? DEFAULT_CHIP_COLOR);
  const [readingImage, setReadingImage] = useState(false);

  /** Opens with focus containment; cleanup invalidates pending image reads and restores prior focus. */
  useEffect(function openDialog() {
    const dialog = dialogRef.current!;
    const previous = document.activeElement;
    dialog.showModal();
    /** Discards late icon reads and restores focus when creation/editing ends. */
    return function closeDialog() {
      uploadVersion.current += 1;
      dialog.close();
      if (previous instanceof HTMLElement && previous.isConnected)
        previous.focus({ preventScroll: true });
    };
  }, []);

  /** Validates a staged draft and submits exactly once; errors preserve the user's current inputs. */
  function saveChip(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (submitted.current || readingImage) return;
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    if (!name) {
      setError("Enter a chip name.");
      return;
    }
    try {
      const validColor = normalizeChipColor(String(data.get("color") ?? ""));
      submitted.current = true;
      onSave({
        name,
        icon: "",
        iconImage,
        color: validColor,
        category: String(data.get("category") ?? "").trim() || undefined,
        tags: parseChipTags(String(data.get("tags") ?? "")),
      });
      onClose();
    } catch (cause) {
      submitted.current = false;
      setError(
        cause instanceof Error ? cause.message : "Could not save this chip.",
      );
    }
  }

  /** Makes Escape discard all staged edits just like Cancel. */
  function cancelDialog(event: SyntheticEvent<HTMLDialogElement>): void {
    event.preventDefault();
    onClose();
  }
  /** Clears stale validation feedback while the user edits the form. */
  function clearError(): void {
    if (error) setError("");
  }

  /** Decodes the latest chosen image locally; older reads and reads after closing are ignored. */
  async function uploadIcon(
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> {
    const file = event.target.files?.[0];
    if (!file) return;
    const version = ++uploadVersion.current;
    setReadingImage(true);
    setError("");
    try {
      const image = await readChipIcon(file);
      if (version === uploadVersion.current) setIconImage(image);
    } catch (cause) {
      if (version === uploadVersion.current)
        setError(
          cause instanceof Error ? cause.message : "Could not read this image.",
        );
    } finally {
      if (version === uploadVersion.current) setReadingImage(false);
    }
  }

  /** Removes the staged image and resets the native field so the same file can be chosen again. */
  function removeImage(): void {
    uploadVersion.current += 1;
    setReadingImage(false);
    setIconImage(undefined);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  return (
    <dialog
      ref={dialogRef}
      className="worldview-chip-dialog"
      aria-labelledby="chip-dialog-title"
      aria-describedby="chip-session-notice"
      onCancel={cancelDialog}
    >
      <form onSubmit={saveChip} onInput={clearError}>
        <h2 id="chip-dialog-title">{chip ? "Edit Chip" : "Add Chip"}</h2>
        <p id="chip-session-notice">
          Chips and file assignments are saved in Universe.
        </p>
        <label>
          Chip name
          <input
            name="name"
            autoFocus
            required
            maxLength={80}
            defaultValue={chip?.name ?? ""}
            placeholder="Name your chip"
          />
        </label>
        <fieldset>
          <div className="worldview-icon-upload">
            <label>
              Upload icon
              <input
                ref={fileInputRef}
                type="file"
                aria-label="Upload icon"
                accept="image/png,image/jpeg,image/webp"
                onChange={uploadIcon}
                disabled={readingImage}
              />
              <small>PNG, JPEG, WebP · up to 5 MB</small>
            </label>
          </div>
          {iconImage && (
            <div className="worldview-upload-preview">
              <img
                src={iconImage}
                alt="Custom chip icon preview"
                width={40}
                height={40}
              />
              <button type="button" onClick={removeImage}>
                Remove image
              </button>
            </div>
          )}
          {readingImage && <span role="status">Reading icon…</span>}
        </fieldset>
        <ColorWheel value={color} onChange={setColor} />
        <div className="worldview-chip-metadata">
          <label>
            Category (optional)
            <input
              name="category"
              maxLength={80}
              defaultValue={chip?.category ?? ""}
              placeholder="e.g. Research"
            />
          </label>
          <label>
            Tags (optional)
            <input
              name="tags"
              maxLength={500}
              defaultValue={chip?.tags.join(", ") ?? ""}
              placeholder="Separate tags with commas"
            />
          </label>
        </div>
        {error && (
          <p className="worldview-form-error" role="alert">
            {error}
          </p>
        )}
        <div className="worldview-dialog-actions">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" disabled={readingImage}>
            {chip ? "Save Changes" : "Create Chip"}
          </button>
        </div>
      </form>
    </dialog>
  );
}
