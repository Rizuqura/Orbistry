const { z } = require("zod");

const entityKey = z.string().regex(/^[a-zA-Z0-9_-]{1,128}$/);
const knowledgeMenus = z
  .array(
    z.object({
      id: entityKey,
      title: z.string().trim().min(1).max(80),
    }),
  )
  .min(1)
  .max(100)
  .refine(
    /** Overview is protected and each menu has an Entity-local key. */
    (menus) =>
      menus.some((menu) => menu.id === "overview") &&
      new Set(menus.map((menu) => menu.id)).size === menus.length,
    "Knowledge menus require a protected Overview and unique IDs.",
  );

// The installed schema stores custom PNGs inline. A filesystem path supplied
// by a renderer has never been a valid appearance value.
const metadataSchema = z.object({
  name: z.string().trim().min(1).max(80),
  icon: z.string().max(32).default(""),
  iconImage: z
    .string()
    .max(500000)
    .regex(/^data:image\/png;base64,[A-Za-z0-9+/=]+$/)
    .optional(),
  color: z.string().regex(/^#[a-f0-9]{6}$/i),
  category: z.string().max(80).optional(),
  tags: z.array(z.string().max(500)).max(100),
  knowledgeMenus: knowledgeMenus.optional(),
});

// Only known reference fields enter the logical snapshot. The repository
// preserves extension fields on the original YAML objects when writing.
const sourceReference = z
  .object({
    source_id: z.string().min(1).max(32768),
    source_ref: z.string().min(1).max(32768),
    filename: z.string().min(1),
    extension: z.string(),
    size_bytes: z
      .number()
      .int()
      .nonnegative()
      .max(Number.MAX_SAFE_INTEGER)
      .nullable(),
    origin: z.literal("universe"),
  })
  .refine(
    /** The v1 record uses the same portable Vault reference as identity and locator. */
    (source) => source.source_id === source.source_ref,
  );

module.exports = { entityKey, metadataSchema, sourceReference };
