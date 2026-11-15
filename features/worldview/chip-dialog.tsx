"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type SyntheticEvent,
  type MouseEvent,
} from "react";
import {
  DEFAULT_CHIP_COLOR,
  parseChipTags,
  suggestChipTags,
  type ChipDraft,
  type WorldViewChip,
} from "./chips";
import { normalizeChipColor } from "./chip-colors";
import { readChipIcon } from "./chip-icon";
import { ColorWheel } from "./color-wheel";

/** Stages a stable entity key, editable local tag suggestions, icon and color before confirmed creation/editing. */
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
  const [entityKey, setEntityKey] = useState(chip?.id ?? "");
  const [tags, setTags] = useState(chip?.tags.join(", ") ?? "");
  const [generationStatus, setGenerationStatus] = useState("");

  /** Opens with focus containment; cleanup invalidates pending image reads and restores prior focus. */
  useEffect(function openDialog() {
    const dialog = dialogRef.current!;
    const previous = document.activeElement;
    if (!chip) setEntityKey(crypto.randomUUID());
    dialog.showModal();
    /** Discards late icon reads and restores focus when creation/editing ends. */
    return function closeDialog() {
      uploadVersion.current += 1;
      dialog.close();
      if (previous instanceof HTMLElement && previous.isConnected)
        previous.focus({ preventScroll: true });
    };
  }, []);

  /** Validates the staged key and metadata, then submits once; errors preserve the current draft and suggestions. */
  function saveChip(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (submitted.current || readingImage || !entityKey) return;
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
        id: entityKey,
        name,
        icon: "",
        iconImage,
        color: validColor,
        category: String(data.get("category") ?? "").trim() || undefined,
        tags: parseChipTags(tags),
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

  /** Adds local suggestions from the current form and assigned filename metadata; writes stay staged until Save/Create. */
  function generateTags(event: MouseEvent<HTMLButtonElement>): void {
    const data = new FormData(event.currentTarget.form!);
    const current = parseChipTags(tags);
    const next = suggestChipTags(
      String(data.get("name") ?? ""),
      String(data.get("category") ?? ""),
      chip?.sources?.map(
        /** Uses assigned filename metadata without loading source contents. */ (
          source,
        ) => source.filename,
      ) ?? [],
      current,
    );
    setTags(next.join(", "));
    const added = next.length - current.length;
    setGenerationStatus(
      added
        ? `Added ${added} suggested tag${added === 1 ? "" : "s"}. Review and edit before saving.`
        : "No new suggestions. Add a name, category or assigned files, or edit tags directly.",
    );
  }

  /** Keeps generated/manual tags editable and clears stale generation feedback. */
  function editTags(event: ChangeEvent<HTMLInputElement>): void {
    setTags(event.target.value);
    setGenerationStatus("");
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
        <label>
          Entity key
          <input
            name="entityKey"
            value={entityKey}
            readOnly
            spellCheck={false}
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
              value={tags}
              onChange={editTags}
              placeholder="Separate tags with commas"
            />
          </label>
        </div>
        <div className="worldview-tag-generation">
          <button type="button" onClick={generateTags}>
            Generate tags
          </button>
          <small>Uses the name, category and assigned filenames.</small>
        </div>
        {generationStatus && <p role="status">{generationStatus}</p>}
        {error && (
          <p className="worldview-form-error" role="alert">
            {error}
          </p>
        )}
        <div className="worldview-dialog-actions">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" disabled={readingImage || !entityKey}>
            {chip ? "Save Changes" : "Create Chip"}
          </button>
        </div>
      </form>
    </dialog>
  );
}
