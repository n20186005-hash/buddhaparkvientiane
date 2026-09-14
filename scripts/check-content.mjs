// 内容扩展自检：新增 section / 导航锚点 / FAQ 数量 / 汇率组件
import fs from 'node:fs';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist');
const read = (p) => fs.readFileSync(path.join(dist, p), 'utf8');
let fail = 0;
const ok = (label, cond, extra = '') => {
  if (!cond) fail++;
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${label}${extra ? '  -> ' + extra : ''}`);
};

const NEW_SECTIONS = ['sculptures', 'transport', 'parkmap', 'currency', 'itinerary'];

for (const l of ['th', 'en', 'zh']) {
  const html = read(`${l}/index.html`);
  console.log(`\n--- /${l}/ ---`);

  for (const id of NEW_SECTIONS) {
    ok(`#${id} 存在`, html.includes(`id="${id}"`));
  }

  // 导航锚点必须有对应 section id
  const navHrefs = [...html.matchAll(/href="#([a-z-]+)"/g)].map((m) => m[1]);
  const uniqNav = [...new Set(navHrefs)];
  const missing = uniqNav.filter((a) => !html.includes(`id="${a}"`) && a !== 'home');
  ok('导航锚点全部命中', missing.length === 0, `导航 ${uniqNav.length} 项 缺失[${missing}]`);

  // FAQ：可见 details 数量 == JSON-LD FAQPage 问答数
  const details = (html.match(/<details/g) || []).length;
  const raw = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  let faqCount = 0;
  if (raw) {
    const ld = JSON.parse(raw[1]);
    const faq = (ld['@graph'] || []).find((n) => n['@type'] === 'FAQPage');
    faqCount = faq ? faq.mainEntity.length : 0;
  }
  ok('FAQPage >= 12 问', faqCount >= 12, `${faqCount} 问`);
  ok('可见 details 与 FAQ 一致', details === faqCount, `details ${details} / schema ${faqCount}`);
  ok('FAQ 含无人机问句', /drone|โดรน|无人机/i.test(html));
  ok('FAQ 含无障碍问句', /wheelchair|รถเข็น|轮椅/i.test(html));

  if (l === 'en') {
    ok('汇率组件请求实时汇率', html.includes('open.er-api.com'));
    ok('卧佛/南瓜塔实体词入正文', /Giant Pumpkin/.test(html) && /Reclining Buddha/.test(html));
    ok('Bus 14 频次入正文', /15–20 minutes/.test(html));
    ok('Sala Keoku 姊妹公园入正文', /Sala Keoku/.test(html));
  }
}

console.log(`\n${fail === 0 ? 'ALL PASS' : fail + ' CHECK(S) FAILED'}`);
process.exit(fail === 0 ? 0 : 1);
