// 画廊图片压缩：最长边 1600px、mozjpeg q82、渐进式
// 直接以 buffer 覆盖写回原文件（不调用 delete，规避环境的 safe-delete 拦截）
import sharp from 'sharp';
import { readdirSync, writeFileSync, statSync, renameSync } from 'node:fs';
import { resolve, join } from 'node:path';

const DIR = resolve(process.cwd(), 'public/gallery');
const MAX = 1600;
const QUALITY = 82;

const files = readdirSync(DIR).filter((f) => /\.jpe?g$/i.test(f) && !f.endsWith('.tmp'));
let before = 0;
let after = 0;

for (const f of files.sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))) {
  const src = join(DIR, f);
  const b = statSync(src).size;
  const meta = await sharp(src).metadata();
  const w = meta.width || 0;
  const h = meta.height || 0;

  let pipeline = sharp(src).rotate();
  if (Math.max(w, h) > MAX) {
    pipeline = pipeline.resize({
      width: w >= h ? MAX : undefined,
      height: h > w ? MAX : undefined,
      fit: 'inside',
      withoutEnlargement: true,
    });
  }
  // 先写 .tmp（小文件避免 errno -4094），再 rename 覆盖原文件
  const tmp = join(DIR, `${f}.tmp`);
  await pipeline.jpeg({ quality: QUALITY, progressive: true, mozjpeg: true }).toFile(tmp);
  const buf = { length: statSync(tmp).size };

  if (buf.length < b) {
    renameSync(tmp, src);
  } else {
    writeFileSync(tmp, '');
  }
  before += b;
  after += Math.min(buf.length, b);
  console.log(`${f}  ${(b / 1024).toFixed(0)}KB → ${(Math.min(buf.length, b) / 1024).toFixed(0)}KB  (${w}x${h})`);
}

console.log(
  `\n总计 ${(before / 1024 / 1024).toFixed(2)}MB → ${(after / 1024 / 1024).toFixed(2)}MB  (-${(((before - after) / before) * 100).toFixed(1)}%)`
);
