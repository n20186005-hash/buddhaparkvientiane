// 生成 sitemap.xml：收录各语言主页 + 英文长尾专题页；
// 法律/隐私/Cookie 页（已 noindex）不进 sitemap，避免抓取预算浪费与索引污染。
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const cfg = fs.readFileSync(path.join(root, 'astro.config.mjs'), 'utf8');
const siteMatch = cfg.match(/site:\s*['"]([^'"]+)['"]/);
const localesMatch = cfg.match(/locales:\s*\[([^\]]+)\]/);

const domain = (siteMatch ? siteMatch[1] : 'https://buddhaparkvientiane.com').replace(/\/$/, '');
const langs = localesMatch
  ? (localesMatch[1].match(/['"]([^'"]+)['"]/g) || []).map((s) => s.replace(/['"]/g, ''))
  : ['th', 'en', 'zh'];

const configTs = fs.readFileSync(path.join(root, 'src', 'config.ts'), 'utf8');
const updatedMatch = configTs.match(/lastUpdated:\s*['"]([^'"]+)['"]/);
const lastmod = updatedMatch ? updatedMatch[1] : new Date().toISOString().slice(0, 10);

const urls = langs.map((l) => `${domain}/${l}/`);

// 英文长尾专题页（2026-10 新增；仅英文，hreflang en + x-default）
const TOPIC_PATHS = ['/en/entrance-fee/', '/en/how-to-get-there/', '/en/sculptures/', '/en/history/', '/en/visit-itinerary/', '/en/photography-guide/', '/en/vientiane-day-trip/'];
urls.push(...TOPIC_PATHS.map((p) => `${domain}${p}`));
const NEARBY_PATHS = ['pha-that-luang', 'patuxai', 'wat-si-saket', 'ho-phra-keo'].map((slug) => `/en/nearby/${slug}/`);
urls.push(...NEARBY_PATHS.map((p) => `${domain}${p}`));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (loc) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(root, 'public', 'sitemap.xml'), xml, 'utf8');
console.log(`[sitemap] ${urls.length} URLs (lastmod ${lastmod}): ${urls.join(', ')}`);
