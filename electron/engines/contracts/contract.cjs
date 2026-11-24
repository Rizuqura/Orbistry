const { z } = require("zod");
const { createHash } = require("node:crypto");
const PROTOCOL = "orbistry.engine/1";
const LIMITS = Object.freeze({
  files: 128,
  fileBytes: 4 * 1024 * 1024,
  packageBytes: 16 * 1024 * 1024,
  inputBytes: 65536,
  outputBytes: 1024 * 1024,
});
const id = z
  .string()
  .regex(/^[a-z][a-z0-9-]{1,63}$/)
  .refine(
    (value) =>
      !["constructor", "prototype", "con", "prn", "aux", "nul"].includes(
        value,
      ) && !/^(com|lpt)\d$/.test(value),
  );
const version = z
  .string()
  .regex(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[a-zA-Z0-9.-]+)?$/);
const jsonSchema = z.record(z.string(), z.unknown());
const operation = z
  .object({
    id,
    description: z.string().min(1).max(1000),
    input_schema: jsonSchema,
    output_schema: jsonSchema,
    read_only: z.literal(true),
    network: z.enum(["none", "outbound"]),
    timeout_ms: z.number().int().min(100).max(120000).default(10000),
  })
  .strict();
const signatureSchema = z
  .object({
    signature_version: z.literal(1),
    algorithm: z.literal("Ed25519"),
    key_id: z.string().regex(/^sha256:[a-f0-9]{64}$/),
    public_key: z.string().max(1024),
    manifest_digest: z.string().regex(/^[a-f0-9]{64}$/),
    value: z.string().regex(/^[A-Za-z0-9+/]{86}==$/),
  })
  .strict();
const manifestSchema = z
  .object({
    schema_version: z.literal(2),
    protocol: z.literal(PROTOCOL),
    engine_id: id,
    engine_version: version,
    name: z.string().min(1).max(120),
    description: z.string().min(1).max(1000),
    entry: z.string().max(200),
    operations: z.array(operation).min(1).max(32),
    files: z.record(z.string(), z.string().regex(/^[a-f0-9]{64}$/)),
    signature: signatureSchema.optional(),
  })
  .strict();
const allowed = new Set([
  "$schema",
  "title",
  "description",
  "type",
  "properties",
  "required",
  "additionalProperties",
  "items",
  "enum",
  "minimum",
  "maximum",
  "minLength",
  "maxLength",
  "minItems",
  "maxItems",
]);
const types = [
  "object",
  "array",
  "string",
  "number",
  "integer",
  "boolean",
  "null",
];

/** Makes protocol failures identifiable without including package output, credentials or input values. */
function fail(code, message) {
  throw Object.assign(new Error(message), { code });
}

/** Hashes exact bytes for content integrity. Hashes attest to reviewed bytes, not publisher identity. */
function sha(value) {
  return createHash("sha256").update(value).digest("hex");
}

/** Allows portable relative package files only; traversal, links, hidden metadata and device/stream names never become installation targets. */
function filePath(value) {
  if (
    typeof value !== "string" ||
    value.length > 200 ||
    !/^[a-zA-Z0-9._/-]+$/.test(value)
  )
    fail(
      "ENGINE_PATH_INVALID",
      "Package paths must be portable relative paths.",
    );
  if (
    value
      .split("/")
      .some(
        (part) =>
          !part ||
          part.startsWith(".") ||
          part.endsWith(".") ||
          /^(con|prn|aux|nul|com\d|lpt\d)(\.|$)/i.test(part),
      )
  )
    fail("ENGINE_PATH_INVALID", "Package path contains a restricted segment.");
  return value;
}

/** Validates the deliberately bounded JSON Schema subset supported by protocol v1. Unsupported keywords fail rather than being silently ignored; no remote refs or evaluated code. */
function checkSchema(schema, depth = 0) {
  if (
    !schema ||
    Array.isArray(schema) ||
    typeof schema !== "object" ||
    depth > 8 ||
    !types.includes(schema.type)
  )
    fail(
      "ENGINE_SCHEMA_INVALID",
      "Unsupported or excessively nested JSON Schema.",
    );
  if (Object.keys(schema).some((key) => !allowed.has(key)))
    fail("ENGINE_SCHEMA_INVALID", "Unsupported JSON Schema keyword.");
  if (
    schema.$schema !== undefined &&
    schema.$schema !== "https://json-schema.org/draft/2020-12/schema"
  )
    fail("ENGINE_SCHEMA_INVALID", "Only JSON Schema 2020-12 is supported.");
  for (const key of ["title", "description", "$schema"])
    if (
      schema[key] !== undefined &&
      (typeof schema[key] !== "string" || schema[key].length > 1000)
    )
      fail("ENGINE_SCHEMA_INVALID", "Invalid schema annotation.");
  const specific = {
    properties: ["object"],
    required: ["object"],
    additionalProperties: ["object"],
    items: ["array"],
    minItems: ["array"],
    maxItems: ["array"],
    minLength: ["string"],
    maxLength: ["string"],
    minimum: ["number", "integer"],
    maximum: ["number", "integer"],
  };
  for (const [keyword, permittedTypes] of Object.entries(specific))
    if (Object.hasOwn(schema, keyword) && !permittedTypes.includes(schema.type))
      fail(
        "ENGINE_SCHEMA_INVALID",
        "Schema keyword does not apply to its type.",
      );
  if (schema.type === "object") {
    const properties = schema.properties;
    if (
      !properties ||
      Array.isArray(properties) ||
      typeof properties !== "object" ||
      Object.keys(properties).length > 64 ||
      schema.additionalProperties !== false ||
      !Array.isArray(schema.required) ||
      new Set(schema.required).size !== schema.required.length ||
      schema.required.some(
        (key) => typeof key !== "string" || !Object.hasOwn(properties, key),
      )
    )
      fail(
        "ENGINE_SCHEMA_INVALID",
        "Object schemas require properties, required and additionalProperties=false.",
      );
    for (const [key, value] of Object.entries(properties)) {
      if (
        !/^[a-zA-Z][a-zA-Z0-9_]{0,63}$/.test(key) ||
        ["constructor", "prototype", "__proto__"].includes(key)
      )
        fail("ENGINE_SCHEMA_INVALID", "Invalid schema property.");
      checkSchema(value, depth + 1);
    }
  }
  if (schema.type === "array") checkSchema(schema.items, depth + 1);
  for (const key of [
    "minimum",
    "maximum",
    "minLength",
    "maxLength",
    "minItems",
    "maxItems",
  ])
    if (
      schema[key] !== undefined &&
      (!Number.isFinite(schema[key]) ||
        ((key.includes("Length") || key.includes("Items")) &&
          (!Number.isInteger(schema[key]) || schema[key] < 0)))
    )
      fail("ENGINE_SCHEMA_INVALID", "Invalid schema bound.");
  for (const [min, max] of [
    ["minimum", "maximum"],
    ["minLength", "maxLength"],
    ["minItems", "maxItems"],
  ])
    if (
      schema[min] !== undefined &&
      schema[max] !== undefined &&
      schema[min] > schema[max]
    )
      fail("ENGINE_SCHEMA_INVALID", "Schema bounds are inverted.");
  if (Object.hasOwn(schema, "enum")) {
    if (
      !Array.isArray(schema.enum) ||
      !schema.enum.length ||
      schema.enum.length > 128 ||
      new Set(schema.enum.map((value) => JSON.stringify(value))).size !==
        schema.enum.length
    )
      fail("ENGINE_SCHEMA_INVALID", "Invalid schema enum.");
    const { enum: values, ...withoutEnum } = schema;
    try {
      for (const value of values) validateData(withoutEnum, value);
    } catch {
      fail(
        "ENGINE_SCHEMA_INVALID",
        "Schema enum does not match its type or bounds.",
      );
    }
  }
  return schema;
}

/** Validates JSON data against a checked contract. Extra properties, type coercion and prototype-bearing inputs are rejected; errors never include values. */
function validateData(schema, value, depth = 0) {
  if (depth > 8) fail("ENGINE_DATA_INVALID", "Data exceeds protocol depth.");
  const actual =
    value === null ? "null" : Array.isArray(value) ? "array" : typeof value;
  if (
    schema.type === "integer"
      ? !Number.isSafeInteger(value)
      : actual !== schema.type
  )
    fail("ENGINE_DATA_INVALID", "Data does not match its declared type.");
  if (
    (actual === "number" && !Number.isFinite(value)) ||
    (schema.enum &&
      !schema.enum.some(
        (item) => JSON.stringify(item) === JSON.stringify(value),
      ))
  )
    fail("ENGINE_DATA_INVALID", "Data violates its declared constraints.");
  if (actual === "object") {
    if (
      ![Object.prototype, null].includes(Object.getPrototypeOf(value)) ||
      Object.keys(value).some(
        (key) => !Object.hasOwn(schema.properties, key),
      ) ||
      schema.required.some((key) => !Object.hasOwn(value, key))
    )
      fail("ENGINE_DATA_INVALID", "Object fields do not match the contract.");
    for (const key of Object.keys(value))
      validateData(schema.properties[key], value[key], depth + 1);
  }
  if (actual === "array") {
    if (
      value.length > (schema.maxItems ?? 10000) ||
      value.length < (schema.minItems ?? 0)
    )
      fail("ENGINE_DATA_INVALID", "Array bounds exceeded.");
    for (const item of value) validateData(schema.items, item, depth + 1);
  }
  if (
    actual === "string" &&
    (value.length < (schema.minLength ?? 0) ||
      value.length > (schema.maxLength ?? LIMITS.outputBytes))
  )
    fail("ENGINE_DATA_INVALID", "String bounds exceeded.");
  if (
    actual === "number" &&
    (value < (schema.minimum ?? -Infinity) ||
      value > (schema.maximum ?? Infinity))
  )
    fail("ENGINE_DATA_INVALID", "Numeric bounds exceeded.");
  return value;
}

/** Parses a manifest without loading its entry. Requires exact integrity coverage and unique operations; public validation errors contain no source snippets. */
function manifest(value) {
  const parsed = manifestSchema.safeParse(value);
  if (!parsed.success)
    fail("ENGINE_MANIFEST_INVALID", "Invalid Orbistry Engine manifest v2.");
  const data = parsed.data;
  if (
    new Set(data.operations.map((item) => item.id)).size !==
    data.operations.length
  )
    fail("ENGINE_MANIFEST_INVALID", "Operation IDs must be unique.");
  const files = Object.keys(data.files);
  if (
    !files.length ||
    files.length > LIMITS.files ||
    new Set(files.map((file) => file.toLowerCase())).size !== files.length
  )
    fail("ENGINE_MANIFEST_INVALID", "Invalid package file list.");
  files.forEach(filePath);
  filePath(data.entry);
  if (
    !data.entry.endsWith(".cjs") ||
    !Object.hasOwn(data.files, data.entry) ||
    files.includes("engine_manifest.json")
  )
    fail(
      "ENGINE_MANIFEST_INVALID",
      "Entry must be an integrity-listed CommonJS module; manifest cannot hash itself.",
    );
  for (const op of data.operations) {
    checkSchema(op.input_schema);
    checkSchema(op.output_schema);
    if (op.input_schema.type !== "object")
      fail("ENGINE_SCHEMA_INVALID", "Tool input must be an object.");
  }
  return data;
}
module.exports = {
  PROTOCOL,
  LIMITS,
  manifestSchema,
  signatureSchema,
  manifest,
  checkSchema,
  validateData,
  filePath,
  fail,
  sha,
  id,
  version,
};
