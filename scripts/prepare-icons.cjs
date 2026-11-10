const fs = require("node:fs");
const path = require("node:path");
const { createCanvas, loadImage } = require("@napi-rs/canvas");
async function main() {
  const root = path.resolve(__dirname, "..");
  const source = await loadImage(path.join(root, "public/orbistry-icon"));
  const png = (size, white = false) => {
    const c = createCanvas(size, size),
      ctx = c.getContext("2d");
    const scale = Math.min(size / source.width, size / source.height),
      w = source.width * scale,
      h = source.height * scale;
    ctx.drawImage(source, (size - w) / 2, (size - h) / 2, w, h);
    if (white) {
      ctx.globalCompositeOperation = "source-in";
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, size, size);
    }
    return c.toBuffer("image/png");
  };
  fs.mkdirSync(path.join(root, "build"), { recursive: true });
  const large = png(512);
  for (const file of ["public/icon.png", "app/icon.png", "build/icon.png"])
    fs.writeFileSync(path.join(root, file), large);
  fs.writeFileSync(
    path.join(root, "build/orbistry-window-icon.png"),
    png(512, true),
  );
  const sizes = [16, 24, 32, 48, 64, 128, 256],
    images = sizes.map((size) => png(size, true)),
    header = Buffer.alloc(6 + 16 * sizes.length);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(sizes.length, 4);
  let offset = header.length;
  sizes.forEach((size, index) => {
    const at = 6 + 16 * index;
    header[at] = size === 256 ? 0 : size;
    header[at + 1] = header[at];
    header.writeUInt16LE(1, at + 4);
    header.writeUInt16LE(32, at + 6);
    header.writeUInt32LE(images[index].length, at + 8);
    header.writeUInt32LE(offset, at + 12);
    offset += images[index].length;
  });
  const ico = Buffer.concat([header, ...images]);
  for (const name of ["icon.ico", "orb-terminal.ico"]) {
    fs.writeFileSync(path.join(root, "build", name), ico);
  }
  console.log(
    "Prepared desktop, Windows and web icons from public/orbistry-icon.",
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
