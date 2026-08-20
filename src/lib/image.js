import manifest from '../data/imageManifest.json';

// `base` is a manifest key, e.g. 'assets/images/products/relaxed-ivory-front'
// (no extension) — matches the filenames written by gen-responsive.mjs.
export function srcSet(base, ext) {
  const entry = manifest[base];
  if (!entry) return undefined;
  return entry.widths.map((w) => `${base}-${w}.${ext} ${w}w`).join(', ');
}

export function fallbackSrc(base) {
  const entry = manifest[base];
  if (!entry) return `${base}.jpg`;
  return `${base}-${entry.widths[entry.widths.length - 1]}.jpg`;
}
