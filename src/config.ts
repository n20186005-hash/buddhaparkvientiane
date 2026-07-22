// 全局站点配置（Buddha Park / Wat Xieng Khouane Luang / 香昆寺）
// 站点域名单一来源：Canonical / sitemap / JSON-LD / OG 全部引用 self.DOMAIN，避免硬编码错误地址
const DOMAIN = 'https://buddhaparkvientiane.com';

export const siteConfig = {
  // 景点名称（多语言）
  name: {
    th: 'วัดเซียนคูน (Buddha Park)',
    en: 'Buddha Park (Wat Xieng Khouane Luang)',
    zh: '香昆寺（万佛公园）',
  },

  // 站点域名（用于 Canonical / sitemap / JSON-LD）
  domain: DOMAIN,

  // 简短描述（备用；页面实际描述来自 i18n meta）
  description: {
    th: 'วัดเซียนคูน (Buddha Park) สวนประติมากรรมริมแม่น้ำโขง ทางตะวันออกของเวียงจันทน์ สาธารณรัฐประชาธิปไตยประชาชนลาว',
    en: 'Buddha Park (Wat Xieng Khouane Luang) — a riverside sculpture garden of 200+ Buddhas and Hindu gods on the Mekong, Vientiane, Laos.',
    zh: '香昆寺（万佛公园）—— 老挝万象湄公河畔的雕塑花园，200 余尊佛像与印度教神像静立其间。',
  },

  // 联系电话（Google 商家资料；Buddha Park 未提供公开电话，留空）
  phone: '',
  phoneDisplay: '',

  // 评分与评论数（Google 商家资料）
  rating: 4.3,
  reviewCount: '5,400',

  // 实时天气/日落 API 坐标（Buddha Park, Deua, Vientiane, Laos）
  coords: {
    lat: Number(import.meta.env.PUBLIC_LAT) || 17.9123504,
    lng: Number(import.meta.env.PUBLIC_LNG) || 102.7622415,
  },

  // Google Maps 跳转链接
  mapsUrl: import.meta.env.PUBLIC_MAPS_URL || 'https://maps.app.goo.gl/MdKTSwWw5H6PmDGJ7',

  // Google Maps 嵌入
  googleMapsEmbed:
    import.meta.env.PUBLIC_MAPS_EMBED ||
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.4243636554374!2d102.76224151231291!3d17.912350382996497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31246186d2e52a2d%3A0xe3fe2c89b49a77ed!2z6aaZ5piG5a-677yI5LiH5L2b5YWs5Zut77yJ!5e0!3m2!1szh-CN!2sus!4v1784710869725!5m2!1szh-CN!2sus',

  // 地址与 Plus Code（已剔除无关的湄卡运河信息，避免 SEO 数据污染）
  address: import.meta.env.PUBLIC_ADDRESS || 'Deua, Thanon Tha District, Vientiane, Laos',
  plusCode: import.meta.env.PUBLIC_PLUS_CODE || 'WQ67+WW',

  // 画廊图片前缀（配合 public/gallery/buddha-park-wat-xieng-khouane-luang-1..N.jpg 使用）
  galleryPrefix: 'buddha-park-wat-xieng-khouane-luang-',

  // JSON-LD sameAs
  sameAs: [
    'https://maps.app.goo.gl/MdKTSwWw5H6PmDGJ7',
    DOMAIN,
  ],

  // 页脚引用来源
  sources: [
    {
      name: {
        th: 'การท่องเที่ยวลาว (หน่วยงานส่งเสริมการท่องเที่ยวแห่งชาติ)',
        en: 'Tourism Laos (National Tourism Administration)',
        zh: '老挝国家旅游局',
      },
      url: 'https://www.tourismlaos.org',
    },
    {
      name: {
        th: 'เทศบาลนครเวียงจันทน์',
        en: 'Vientiane Capital Administration',
        zh: '万象市政府',
      },
      url: 'https://vientianecapital.gov.la',
    },
    {
      name: {
        th: 'Google Maps (วัดเซียนคูน)',
        en: 'Google Maps listing',
        zh: 'Google 地图商家页',
      },
      url: 'https://maps.app.goo.gl/MdKTSwWw5H6PmDGJ7',
    },
  ],
};

export type SiteConfig = typeof siteConfig;
