// Optimize and convert all images in public/Services to compressed WebP and optimized JPG
// Usage:
//   node scripts/optimize-services-images.mjs
// Requires: npm i -D sharp

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ROOT = path.resolve(process.cwd());
const SRC_DIR = path.join(ROOT, 'public', 'Services');
const OUTPUT_DIR = SRC_DIR; // write next to originals

// Configuration
const MAX_WIDTH = 1600; // cap width for large headers
const JPG_QUALITY = 82; // visually lossless for headers
const WEBP_QUALITY = 75; // good balance for webp

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true }).catch(() => {});
}

function baseNameNoExt(filename) {
  const ext = path.extname(filename);
  return filename.slice(0, -ext.length);
}

async function optimizeOne(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const inputPath = path.join(SRC_DIR, file);
  const base = baseNameNoExt(file);

  const image = sharp(inputPath).rotate();
  const metadata = await image.metadata();
  const width = metadata.width || MAX_WIDTH;
  const targetWidth = Math.min(width, MAX_WIDTH);

  // Prepare pipeline
  const resized = image.resize({ width: targetWidth, withoutEnlargement: true });

  // Output paths
  const outJpg = path.join(OUTPUT_DIR, `${base}.jpg`); // overwrite jpg with optimized
  const outWebp = path.join(OUTPUT_DIR, `${base}.webp`);

  // Write optimized JPG
  await resized
    .jpeg({ quality: JPG_QUALITY, mozjpeg: true })
    .toFile(outJpg);

  // Write WEBP
  await resized
    .webp({ quality: WEBP_QUALITY })
    .toFile(outWebp);

  return { file, outJpg, outWebp, targetWidth };
}

async function main() {
  await ensureDir(OUTPUT_DIR);
  const files = await fs.promises.readdir(SRC_DIR);
  const candidates = files.filter(f => /\.(jpe?g|png)$/i.test(f));
  if (candidates.length === 0) {
    console.log('No images found in', SRC_DIR);
    return;
  }

  console.log(`Optimizing ${candidates.length} images in ${SRC_DIR} ...`);
  for (const f of candidates) {
    try {
      const res = await optimizeOne(f);
      if (res) {
        console.log(`✓ ${f} -> ${path.basename(res.outJpg)}, ${path.basename(res.outWebp)} (width=${res.targetWidth})`);
      }
    } catch (err) {
      console.error(`✗ Failed to optimize ${f}:`, err.message);
    }
  }
  console.log('Done.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
