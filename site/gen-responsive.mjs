// Regenerates responsive WebP/JPEG variants from the full-resolution
// originals in image-sources/ into public/assets/images/ (mirrored folder
// structure). Run with `node gen-responsive.mjs` then `node gen-manifest.mjs`
// whenever a source photo is added or replaced.
import sharp from 'sharp';
import { readdirSync, statSync, mkdirSync } from 'fs';
import { join, extname, basename, relative, dirname } from 'path';

const SRC_ROOT = 'image-sources';
const OUT_ROOT = 'public/assets/images';
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

for (const file of walk(SRC_ROOT)) {
  const relDir = relative(SRC_ROOT, dirname(file));
  const outDir = join(OUT_ROOT, relDir);
  mkdirSync(outDir, { recursive: true });
  const name = basename(file, '.jpg');

  const meta = await sharp(file).rotate().metadata();

  for (const w of WIDTHS) {
    if (w > meta.width) continue;
    await sharp(file).rotate().resize({ width: w }).webp({ quality: 80 }).toFile(join(outDir, `${name}-${w}.webp`));
    await sharp(file).rotate().resize({ width: w }).jpeg({ quality: 78, mozjpeg: true }).toFile(join(outDir, `${name}-${w}.jpg`));
  }
  const maxW = Math.min(meta.width, 1800);
  await sharp(file).rotate().resize({ width: maxW }).webp({ quality: 82 }).toFile(join(outDir, `${name}-${maxW}.webp`));
  await sharp(file).rotate().resize({ width: maxW }).jpeg({ quality: 80, mozjpeg: true }).toFile(join(outDir, `${name}-${maxW}.jpg`));
}

console.log('done');
