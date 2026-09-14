// 纯 Node 标准库生成 PWA 图标（不依赖 sharp / canvas）
// 用法：node scripts/make-pwa-icons.mjs
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '../public/icons');

const BG = [58, 107, 99]; // #3a6b63 teak
const GOLD = [212, 175, 55]; // #d4af37
const IVORY = [244, 238, 226];

function crc32(buf) {
  let c,
    crc = 0xffffffff;
  for (let n = 0; n < buf.length; n++) {
    c = (crc ^ buf[n]) & 0xff;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crc = c ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const t = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, crcBuf]);
}

function encodePng(size, painter) {
  const raw = Buffer.alloc((size * 4 + 1) * size);
  let o = 0;
  for (let y = 0; y < size; y++) {
    raw[o++] = 0; // filter: none
    for (let x = 0; x < size; x++) {
      const [r, g, b, a] = painter(x, y, size);
      raw[o++] = r;
      raw[o++] = g;
      raw[o++] = b;
      raw[o++] = a;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// 金色佛塔/圆相剪影：外圈金环 + 中心塔身 + 基座
function buddhaPainter(x, y, size) {
  const cx = size / 2;
  const cy = size / 2;
  const dx = x - cx;
  const dy = y - cy;
  const d = Math.sqrt(dx * dx + dy * dy);
  const R = size * 0.46;

  if (d > R) return [BG[0], BG[1], BG[2], 255];

  // 金色外环
  if (d > R * 0.9) return [GOLD[0], GOLD[1], GOLD[2], 255];
  if (d > R * 0.82) return [BG[0], BG[1], BG[2], 255];

  // 塔尖（倒三角）
  const inSpire = Math.abs(dx) < (size * 0.055) * (1 - (y - size * 0.2) / (size * 0.35)) && y > size * 0.2 && y < size * 0.55;
  if (inSpire) return [GOLD[0], GOLD[1], GOLD[2], 255];

  // 塔身（中部圆腹）
  const bodyCy = size * 0.63;
  const bodyRx = size * 0.19;
  const bodyRy = size * 0.15;
  const bdx = (x - cx) / bodyRx;
  const bdy = (y - bodyCy) / bodyRy;
  if (bdx * bdx + bdy * bdy <= 1) return [GOLD[0], GOLD[1], GOLD[2], 255];

  // 基座
  if (y > size * 0.76 && y < size * 0.82 && Math.abs(dx) < size * 0.28) {
    return [IVORY[0], IVORY[1], IVORY[2], 255];
  }
  if (y >= size * 0.82 && y < size * 0.86 && Math.abs(dx) < size * 0.34) {
    return [GOLD[0], GOLD[1], GOLD[2], 255];
  }
  return [BG[0], BG[1], BG[2], 255];
}

// maskable：留出安全区（内容缩到 80%）
function maskablePainter(x, y, size) {
  const s = size / 0.8;
  return buddhaPainter(x - (size - s) / 2, y - (size - s) / 2, s);
}

mkdirSync(OUT, { recursive: true });
const targets = [
  ['icon-192.png', 192, buddhaPainter],
  ['icon-512.png', 512, buddhaPainter],
  ['maskable-512.png', 512, maskablePainter],
];
for (const [name, size, painter] of targets) {
  const png = encodePng(size, painter);
  writeFileSync(resolve(OUT, name), png);
  console.log(`${name} ${size}x${size} — ${(png.length / 1024).toFixed(1)} KB`);
}
console.log('PWA icons written to public/icons/');
