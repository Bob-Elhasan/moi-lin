// Rebuilds src/data/imageManifest.json from image-sources/ — run after
// gen-responsive.mjs whenever a source photo is added, replaced, or removed.
import sharp from 'sharp';
import { readdirSync, statSync, writeFileSync } from 'fs';
import { join, extname, basename, relative } from 'path';

const SRC_ROOT = 'image-sources';
const WIDTHS = [480, 900, 1400];

function walk(dir) {
  let files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) files = files.concat(walk(full));
    else if (extname(entry).toLowerCase() === '.jpg') files.push(full);
  }
  return files;
}

const manifest = {};
for (const file of walk(SRC_ROOT)) {
  const meta = await sharp(file).rotate().metadata();
  const widths = WIDTHS.filter((w) => w <= meta.width);
  const maxW = Math.min(meta.width, 1800);
  if (!widths.includes(maxW)) widths.push(maxW);
  const rel = relative(SRC_ROOT, file).replace(/\.jpg$/, '').replace(/\\/g, '/');
  manifest[`assets/images/${rel}`] = { widths: widths.sort((a, b) => a - b), aspect: Number((meta.width / meta.height).toFixed(4)) };
}

writeFileSync('src/data/imageManifest.json', JSON.stringify(manifest, null, 2));
console.log(Object.keys(manifest).length, 'entries written');
