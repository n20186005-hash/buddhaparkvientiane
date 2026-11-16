// 构建产物 SEO 自检：TDK / canonical / robots / JSON-LD / sitemap
import fs from 'node:fs';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist');
const read = (p) => fs.readFileSync(path.join(dist, p), 'utf8');
const pick = (re, s) => {
  const m = s.match(re);
  return m ? m[1] : 'MISSING';
};

const langs = ['th', 'en', 'zh'];
let fail = 0;
const check = (label, ok, extra = '') => {
  if (!ok) fail++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${extra ? '  -> ' + extra : ''}`);
};

for (const l of langs) {
  const html = read(`${l}/index.html`);
  const title = pick(/<title>([^<]+)<\/title>/, html);
  const desc = pick(/name="description" content="([^"]+)"/, html);
  const canon = pick(/rel="canonical" href="([^"]+)"/, html);
  const robots = pick(/name="robots" content="([^"]+)"/, html);
  console.log(`\n--- /${l}/ ---`);
  console.log(`title(${title.length}): ${title}`);
  console.log(`desc(${desc.length}): ${desc}`);
  check('canonical', canon === `https://buddhaparkvientiane.com/${l}/`, canon);
  check('robots=index,follow', robots === 'index, follow', robots);
  check('title<=70', title.length <= 70, `${title.length}`);
  check('desc<=160', desc.length <= 160, `${desc.length}`);
  check('title 含 Buddha Park', /Buddha Park/i.test(title));
  check('desc 含门票/交通词', /(fee|ticket|entrance|门票|ค่าเข้า)/i.test(desc));

  const raw = pick(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/, html);
  let ld = null;
  try {
    ld = JSON.parse(raw);
  } catch (e) {
    check('JSON-LD 可解析', false, e.message);
  }
  if (ld) {
    const nodes = ld['@graph'] || [ld];
    const attr = nodes.find((n) => String(n['@type'] || '').includes('TouristAttraction'));
    const faq = nodes.find((n) => n['@type'] === 'FAQPage');
    check('TouristAttraction', !!attr);
    if (attr) {
      check('alternateName>=6', attr.alternateName.length >= 6, `${attr.alternateName.length}`);
      check('aggregateRating', String(attr.aggregateRating?.ratingValue) === '4.3', JSON.stringify(attr.aggregateRating));
      check('openingHours', attr.openingHoursSpecification?.[0]?.opens === '08:00');
      check('hasMap', /maps\.app\.goo\.gl/.test(attr.hasMap || ''));
      check('geo', !!attr.geo?.latitude);
    }
    if (l === 'en') {
      check('FAQPage', !!faq);
      if (faq) {
        const qs = faq.mainEntity.map((q) => q.name);
        check('FAQ 含门票问句', qs.some((q) => /entrance fee/i.test(q)));
        check('FAQ 含交通问句', qs.some((q) => /How do I get to Buddha Park/i.test(q)));
        console.log('  FAQ:', qs.length, '条');
      }
    }
  }
}

console.log('\n--- 法律页 noindex ---');
for (const p of ['privacy-policy', 'terms-of-service', 'cookie-settings']) {
  for (const l of langs) {
    const f = path.join(dist, l, p, 'index.html');
    if (!fs.existsSync(f)) {
      check(`${l}/${p} 存在`, false);
      continue;
    }
    const r = pick(/name="robots" content="([^"]+)"/, read(path.join(l, p, 'index.html')));
    check(`${l}/${p} noindex`, r === 'noindex, follow', r);
  }
}

console.log('\n--- sitemap ---');
const sm = path.join(dist, 'sitemap.xml');
check('sitemap.xml 存在', fs.existsSync(sm));
if (fs.existsSync(sm)) {
  const xml = fs.readFileSync(sm, 'utf8');
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const expected = [
    ...['th', 'en', 'zh', 'fr', 'ko', 'ja'].map((l) => `https://buddhaparkvientiane.com/${l}/`),
    ...['entrance-fee', 'how-to-get-there', 'sculptures', 'history', 'visit-itinerary', 'photography-guide', 'vientiane-day-trip'].map((slug) => `https://buddhaparkvientiane.com/en/${slug}/`),
  ];
  check('六语主页与七篇英文专题均进入 sitemap', urls.length === expected.length && expected.every((u) => urls.includes(u)), urls.join(', '));
  check('无法律页', !urls.some((u) => /privacy|terms|cookie/.test(u)));
}

console.log(`\n${fail === 0 ? 'ALL PASS' : fail + ' CHECK(S) FAILED'}`);
process.exit(fail === 0 ? 0 : 1);
