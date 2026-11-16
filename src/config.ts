// 全局站点配置（Buddha Park / Wat Xieng Khouane Luang / 香昆寺）
// 站点域名单一来源：Canonical / sitemap / JSON-LD / OG 全部引用 DOMAIN，避免硬编码错误地址
const DOMAIN = 'https://buddhaparkvientiane.com';

// Google Maps 分享短链（全站唯一来源：Hero / Gallery / Reviews / Map / Footer / JSON-LD）
const MAPS_SHARE_URL = 'https://maps.app.goo.gl/MdKTSwWw5H6PmDGJ7';

// 当地官方旅游局权威外链（.org）：用于地图区 / 资料来源 / JSON-LD sameAs
const GOVT_TOURISM_URL = 'https://www.tourismlaos.org';

// Google Maps 嵌入（精确 pb 参数，保留定位坐标）
const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.4243636554374!2d102.76224151231291!3d17.912350382996497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31246186d2e52a2d%3A0xe3fe2c89b49a77ed!2z6aaZ5piG5a-677yI5LiH5L2b5YWs5Zut77yJ!5e0!3m2!1szh-CN!2sus!4v1784710869725!5m2!1szh-CN!2sus';

export const siteConfig = {
  // ── 景点名称（多语言）
  name: {
    th: 'วัดเซียนคูน (Buddha Park)',
    en: 'Buddha Park (Wat Xieng Khouane Luang)',
    zh: '香昆寺（万佛公园）',
    fr: 'Parc de Bouddha (Wat Xieng Khouane Luang)',
    ko: '불상공원(왓 씽쿠안 루앙)',
    ja: 'ブッダパーク（ワット・シエンクアン・ルアン）',
  },

  // ── SEO 实体绑定（ENTITY BINDING）唯一数据源
  entity: {
    // 官方全称
    fullName: {
      th: 'Buddha Park (Wat Xieng Khouane Luang)',
      en: 'Buddha Park (Wat Xieng Khouane Luang)',
      zh: '香昆寺（Buddha Park · Wat Xieng Khouane Luang）',
      fr: 'Parc de Bouddha (Wat Xieng Khouane Luang)',
      ko: '불상공원(Buddha Park · 왓 씽쿠안 루앙)',
      ja: 'ブッダパーク（Buddha Park · ワット・シエンクアン・ルアン）',
    },
    // 常用俗称 / 域名对应含义
    shortName: {
      th: 'Buddha Park',
      en: 'Buddha Park',
      zh: '香昆寺',
      fr: 'Parc de Bouddha',
      ko: '불상공원',
      ja: 'ブッダパーク',
    },
    // 老挝语本地名
    localName: 'ວັດຊຽງຄູນ',
    // 城市 / 省（州）/ 国家
    city: {
      th: 'เวียงจันทน์',
      en: 'Vientiane',
      zh: '万象',
      fr: 'Vientiane',
      ko: '비엔티안',
      ja: 'ビエンチャン',
    },
    province: {
      th: 'นครหลวงเวียงจันทน์',
      en: 'Vientiane Capital',
      zh: '万象首都',
      fr: 'Préfecture de Vientiane',
      ko: '비엔티안 수도',
      ja: 'ビエンチャン都',
    },
    country: {
      th: 'ประเทศลาว',
      en: 'Laos',
      zh: '老挝',
      fr: 'Laos',
      ko: '라오스',
      ja: 'ラオス',
    },
    countryCode: 'LA',
    postalCode: '01000',
    // 周边核心地标（语义集群）
    nearbyLandmark1: {
      th: 'พระธาตุหลวง',
      en: 'Pha That Luang',
      zh: '塔銮',
      fr: 'Pha That Luang',
      ko: '파 탓 루앙',
      ja: 'タート・ルアン',
    },
    nearbyLandmark2: {
      th: 'ประตูชัย',
      en: 'Patuxai',
      zh: '凯旋门',
      fr: 'Patuxai',
      ko: '빠뚜싸이',
      ja: 'パトゥーサイ',
    },
  },

  // 站点域名（用于 Canonical / sitemap / JSON-LD）
  domain: DOMAIN,

  // 简短描述（备用；页面实际描述来自 i18n meta）
  description: {
    th: 'วัดเซียนคูน (Buddha Park) สวนประติมากรรมริมแม่น้ำโขง ทางตะวันออกของเวียงจันทน์ สาธารณรัฐประชาธิปไตยประชาชนลาว',
    en: 'Buddha Park (Wat Xieng Khouane Luang) — a riverside sculpture garden of 200+ Buddhas and Hindu gods on the Mekong, Vientiane, Laos.',
    zh: '香昆寺（万佛公园）—— 老挝万象湄公河畔的雕塑花园，200 余尊佛像与印度教神像静立其间。',
    fr: 'Parc de Bouddha (Wat Xieng Khouane Luang) — un jardin de sculptures au bord du Mékong à Vientiane, au Laos, réunissant plus de 200 statues de bouddhas et de divinités hindoues.',
    ko: '불상공원(왓 씽쿠안 루앙) — 라오스 비엔티안 메콩강변의 조각 공원으로, 200여 점의 불상과 힌두 신상이 모여 있습니다.',
    ja: 'ブッダパーク（ワット・シエンクアン・ルアン）——ラオス・ビエンチャンのメコン川沿いに広がる彫刻庭園。200体以上の仏像とヒンドゥー神が並びます。',
  },

  // ── 联系方式 / NAP
  // 联系电话（Google 商家资料未提供公开电话，留空）
  phone: '',
  phoneDisplay: '',
  streetAddress: 'Ban Xieng Khuan, Hadxayfong District, Vientiane Capital, Laos',

  // ── 评分与评价数（Google 商家资料 · 同步时间 2026 年 10 月）
  // 注意：仅用于页面展示；按合规要求不写入 JSON-LD
  rating: 4.3,
  reviewCount: '5,491',
  reviewSyncDate: '2026-10',

  // 实时天气/日落 API 坐标（Buddha Park, Deua, Vientiane, Laos）
  coords: {
    lat: Number(import.meta.env.PUBLIC_LAT) || 17.9123504,
    lng: Number(import.meta.env.PUBLIC_LNG) || 102.7622415,
  },

  // Google Maps 跳转链接 / 嵌入
  mapsUrl: import.meta.env.PUBLIC_MAPS_URL || MAPS_SHARE_URL,
  mapsEmbedSrc: import.meta.env.PUBLIC_MAPS_EMBED || MAPS_EMBED_SRC,
  // 兼容旧字段名
  googleMapsEmbed: import.meta.env.PUBLIC_MAPS_EMBED || MAPS_EMBED_SRC,

  // 官方旅游局权威外链
  govtTourismUrl: GOVT_TOURISM_URL,
  govtTourismName: {
    th: 'การท่องเที่ยวลาว (หน่วยงานส่งเสริมการท่องเที่ยวแห่งชาติ)',
    en: 'Tourism Laos — National Tourism Administration',
    zh: '老挝国家旅游局',
    fr: 'Tourism Laos — Administration nationale du tourisme',
    ko: '라오스 관광청(Tourism Laos)',
    ja: 'ラオス観光局（Tourism Laos）',
  },

  // 地址与 Plus Code
  address: import.meta.env.PUBLIC_ADDRESS || 'Deua, Thanon Tha District, Vientiane, Laos',
  plusCode: import.meta.env.PUBLIC_PLUS_CODE || 'WQ67+WW',

  // 画廊图片前缀（配合 public/gallery/buddha-park-wat-xieng-khouane-luang-1..N.jpg 使用）
  galleryPrefix: 'buddha-park-wat-xieng-khouane-luang-',

  // 首图（Hero / OG / JSON-LD image / PWA 图标）
  heroImage: `/gallery/buddha-park-wat-xieng-khouane-luang-1.jpg`,

  // 内容最后更新日期（E-E-A-T）
  lastUpdated: '2026-10-12',

  // JSON-LD sameAs（权威实体外链）
  sameAs: [
    MAPS_SHARE_URL,
    GOVT_TOURISM_URL,
    'https://en.wikipedia.org/wiki/Buddha_Park',
  ],

  // 页脚引用来源
  sources: [
    {
      name: {
        th: 'การท่องเที่ยวลาว (หน่วยงานส่งเสริมการท่องเที่ยวแห่งชาติ)',
        en: 'Tourism Laos (National Tourism Administration)',
        zh: '老挝国家旅游局',
        fr: 'Tourisme Laos (Administration nationale du tourisme)',
        ko: '라오스 관광청(국가관광청)',
        ja: 'ラオス観光局（国家観光庁）',
      },
      url: GOVT_TOURISM_URL,
    },
    {
      name: {
        th: 'เทศบาลนครเวียงจันทน์',
        en: 'Vientiane Capital Administration',
        zh: '万象市政府',
        fr: 'Administration de la capitale Vientiane',
        ko: '비엔티안 수도 행정청',
        ja: 'ビエンチャン都行政庁',
      },
      url: 'https://vientianecapital.gov.la',
    },
    {
      name: {
        th: 'Google Maps — วัดเซียนคูน (Buddha Park)',
        en: 'Google Maps listing — Buddha Park',
        zh: 'Google 地图商家页 — 香昆寺',
        fr: 'Google Maps — Parc de Bouddha',
        ko: 'Google 지도 — 불상공원',
        ja: 'Google マップ — ブッダパーク',
      },
      url: MAPS_SHARE_URL,
    },
  ],
};

export type SiteConfig = typeof siteConfig;
