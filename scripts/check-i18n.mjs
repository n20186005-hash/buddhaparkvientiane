// 多语 i18n 结构校验：解析 + 全量叶子路径 parity + 关键数组长度一致
import fs from 'node:fs';

const LANGS = ['th', 'en', 'zh', 'fr', 'ko', 'ja'];
const docs = {};
let fail = 0;
const ok = (label, cond, extra = '') => {
  if (!cond) fail++;
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${label}${extra ? '  -> ' + extra : ''}`);
};

for (const l of LANGS) {
  try {
    docs[l] = JSON.parse(fs.readFileSync('src/i18n/' + l + '.json', 'utf8'));
  } catch (e) {
    ok(`${l}.json 可解析`, false, e.message);
  }
}

const ref = docs.en;
const keys = Object.keys(ref);
for (const l of LANGS) {
  const k = Object.keys(docs[l] || {});
  const missing = keys.filter((x) => !k.includes(x));
  const extra = k.filter((x) => !keys.includes(x));
  ok(`${l} 顶层键与 en 一致`, missing.length === 0 && extra.length === 0, `缺[${missing}] 多[${extra}]`);
}

// 全量叶子路径 parity（递归）
const leafPaths = (o, prefix = '', out = []) => {
  if (o && typeof o === 'object') {
    for (const [k, v] of Object.entries(o)) {
      if (Array.isArray(v)) {
        v.forEach((item, i) => {
          if (item && typeof item === 'object') leafPaths(item, `${prefix}${k}[${i}].`, out);
          else out.push(`${prefix}${k}[${i}]`);
        });
      } else if (v && typeof v === 'object') {
        leafPaths(v, `${prefix}${k}.`, out);
      } else {
        out.push(`${prefix}${k}`);
      }
    }
  }
  return out;
};

const refLeaves = leafPaths(ref).sort();
for (const l of LANGS) {
  const leaves = leafPaths(docs[l] || {}).sort();
  const missing = refLeaves.filter((x) => !leaves.includes(x));
  const extra = leaves.filter((x) => !refLeaves.includes(x));
  ok(
    `${l} 叶子键与 en 完全一致 (${leaves.length})`,
    missing.length === 0 && extra.length === 0,
    `缺[${missing.slice(0, 5).join(', ')}] 多[${extra.slice(0, 5).join(', ')}]`
  );
}

// 新增模块字段与数组长度
const shape = {
  sculptures: { items: 6 },
  transport: { options: 4 },
  itinerary: { items: 3 },
  parkmap: { legend: 7 },
  currency: { unitLabels: 4, presets: 3 },
  extraFaq: { items: 4 },
};
for (const [block, fields] of Object.entries(shape)) {
  for (const [f, n] of Object.entries(fields)) {
    const lens = LANGS.map((l) => docs[l]?.[block]?.[f]?.length ?? -1);
    ok(`${block}.${f} 三语均为 ${n}`, lens.every((x) => x === n), lens.join('/'));
  }
}

// sculptures.items 字段完整性
for (const l of LANGS) {
  const bad = (docs[l]?.sculptures?.items || []).filter(
    (i) => !i.tag || !i.name || !i.alt || !i.meta || !i.desc || !i.photoTip
  );
  ok(`${l} sculptures.items 字段齐全`, bad.length === 0, `缺字段 ${bad.length} 项`);
}

// extraFaq 并入 FAQ 后总数
for (const l of LANGS) {
  const base = docs[l]?.guide?.faqs?.length ?? 0;
  const extra = docs[l]?.extraFaq?.items?.length ?? 0;
  ok(`${l} FAQ 合计 >= 11`, base + extra >= 11, `${base}+${extra}`);
}

console.log(`\n${fail === 0 ? 'ALL PASS' : fail + ' CHECK(S) FAILED'}`);
process.exit(fail === 0 ? 0 : 1);
