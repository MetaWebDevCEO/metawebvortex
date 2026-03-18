import fs from "node:fs";

import bounds from "svg-path-bounds";

const inputPath = "public/isotipo.svg";
const outputPath = "src/app/icon.svg";

const svg = fs.readFileSync(inputPath, "utf8");

const pathTags = Array.from(svg.matchAll(/<path\b[^>]*>/g), (m) => m[0]);
const ds = Array.from(
  svg.matchAll(/<path\b[^>]*\sd="([^"]+)"[^>]*>/g),
  (m) => m[1],
);

if (ds.length === 0) {
  throw new Error("No <path d=...> found in input SVG");
}

let minX = Infinity;
let minY = Infinity;
let maxX = -Infinity;
let maxY = -Infinity;

for (const d of ds) {
  const b = bounds(d);
  const [x0, y0, x1, y1] = b;
  minX = Math.min(minX, x0);
  minY = Math.min(minY, y0);
  maxX = Math.max(maxX, x1);
  maxY = Math.max(maxY, y1);
}

const padPct = 0.01;
const w = maxX - minX;
const h = maxY - minY;
const pad = Math.max(w, h) * padPct;
const cx = (minX + maxX) / 2;
const cy = (minY + maxY) / 2;
const size = Math.max(w, h) + pad * 2;
const viewBox = [cx - size / 2, cy - size / 2, size, size]
  .map((n) => Number(n.toFixed(3)))
  .join(" ");

const outputSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${pathTags.join(
  "",
)}</svg>\n`;

fs.writeFileSync(outputPath, outputSvg, "utf8");
console.log(`Generated ${outputPath} with viewBox="${viewBox}" (${pathTags.length} paths)`);
