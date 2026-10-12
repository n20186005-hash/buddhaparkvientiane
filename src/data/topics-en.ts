// 英文长尾专题页内容（2026-10 新增，仅英文）
// 目标词：buddha park vientiane entrance fee / how to get to buddha park vientiane / buddha park vientiane statues
// 原则：信息比首页对应板块更完整；价格仅引用有日期的游客报告并标注"以现场为准"；不杜撰未证实数据。

export interface TopicSection {
  h2?: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface Topic {
  slug: string;
  /** 规范路径（带尾斜杠） */
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** 内容核查日期 */
  checked: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
  related: { slug: string; title: string; desc: string }[];
}

export const TOPICS_EN: Topic[] = [
  {
    slug: 'entrance-fee',
    path: '/en/entrance-fee/',
    metaTitle: 'Buddha Park Vientiane Entrance Fee 2026 | Tickets & Camera Fee',
    metaDescription:
      'How much is the Buddha Park Vientiane entrance fee? Recent visitor reports (February 2026) put foreign-visitor tickets at around 60,000 LAK, plus a camera fee. What to know before you pay at the gate.',
    h1: 'Buddha Park Vientiane Entrance Fee & Tickets (2026)',
    intro:
      'Buddha Park (Wat Xieng Khouane Luang / Xieng Khuan) charges an entrance fee collected at the gate. This page tracks what visitors have actually reported paying, explains what is and is not confirmed, and helps you arrive with the right cash — because there is no official online tariff, the posted price at the booth is the only figure that counts.',
    checked: 'Price reports reviewed October 2026',
    sections: [
      {
        h2: 'The short answer',
        paragraphs: [
          'Recent visitor reports from February 2026 put the entrance fee for foreign visitors at around 60,000 LAK per person. Older travel guides — including the figure this site previously carried — still list 15,000 LAK, which appears to be outdated.',
          'Treat 60,000 LAK as the most recent dated visitor report, not as an officially confirmed tariff: Buddha Park has no public online ticket page, and fees are set locally and can change without notice. Budget for roughly 60,000 LAK per adult, bring a little extra, and pay whatever is posted at the gate on the day.',
        ],
      },
      {
        h2: 'What visitors have reported',
        paragraphs: [
          'The table below lists the figures we could trace to a date. Where confirmation is missing we say so rather than guessing.',
        ],
        table: {
          headers: ['Item', 'Reported amount', 'Status'],
          rows: [
            ['Foreign-visitor entrance fee', '≈ 60,000 LAK', 'Visitor reports, February 2026 — most recent we found'],
            ['Foreign-visitor entrance fee', '15,000 LAK', 'Older guides and this site\'s previous figure — treat as outdated'],
            ['Camera fee', '≈ 5,000 LAK', 'Widely reported, but no recent confirmation — pay only if posted'],
            ['Giant pumpkin tower climb', 'No separate charge reported', 'Included with entry according to visitor reports'],
            ['Lao-citizen / local rate', 'Lower than the foreigner rate', 'Commonly reported; amount not published — ask at the booth'],
            ['Children', 'Discounts reported', 'No official published rate — confirm at the gate'],
          ],
        },
      },
      {
        h2: 'How to pay at the gate',
        bullets: [
          'Cash only in practice — Lao kip (LAK) in small notes is the safest choice',
          'Thai baht (THB) is sometimes accepted, but the exchange rate offered is usually poor',
          'Card payment has not been reported at the entrance booth; assume cash',
          'Pay at the official ticket booth and keep your ticket if one is issued',
          'Bring a little more than the expected fee in case the posted price has moved',
        ],
      },
      {
        h2: 'Avoiding problems at the gate',
        paragraphs: [
          'The entrance area can be busy with drivers and touts. Pay only at the official booth, count your change before moving away, and be politely firm with anyone offering a "cheaper" way in — unofficial payments do not support the park\'s upkeep and can turn into an argument.',
          'If the posted price differs from the figures on this page, the posted price wins. Fee changes are normal in Laos and are usually announced at the gate first.',
        ],
      },
      {
        h2: 'How much cash to bring for a visit',
        bullets: [
          'Entrance: budget around 60,000 LAK per adult (see the report status above)',
          'Camera fee: around 5,000 LAK if you bring a camera and a charge is posted',
          'Food and drinks: roughly 10,000–25,000 LAK per item at the stalls and café',
          'Return Bus 14 fare: around 18,000 LAK per person (reported 2025–2026)',
          'A total of about 150,000–200,000 LAK per person covers a comfortable half-day',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much is the entrance fee for Buddha Park Vientiane?',
        a: 'The most recent dated visitor reports (February 2026) put the foreign-visitor fee at around 60,000 LAK. Older guides still show 15,000 LAK, which looks outdated. Fees change without notice — pay the price posted at the gate.',
      },
      {
        q: 'Is there a camera fee at Buddha Park?',
        a: 'A camera fee of roughly 5,000 LAK has been widely reported, but we could not confirm it recently. If a camera charge is posted at the booth, budget for it; phone cameras have generally not been charged in visitor reports.',
      },
      {
        q: 'Can I pay the entrance fee by card?',
        a: 'Card payment has not been reported at the entrance. Bring Lao kip in small notes; Thai baht is sometimes accepted at a poor rate.',
      },
      {
        q: 'Do children pay the full entrance fee?',
        a: 'Discounts for children have been reported, but no official rate is published. Ask at the ticket booth before paying.',
      },
      {
        q: 'Do Lao citizens pay a different price?',
        a: 'Yes — a lower local rate for Lao citizens is commonly reported. The amount is not published, so confirm at the gate.',
      },
      {
        q: 'Is the giant pumpkin tower included in the ticket?',
        a: 'Visitor reports indicate the pumpkin tower climb is included with entry and has no separate charge. If a separate fee is posted on the day, it will be collected at the tower.',
      },
      {
        q: 'Why do different websites list different entrance fees?',
        a: 'Because the fee is set locally and has risen over time, and many guides copy older figures without a date. That is why this page shows the amount, the date it was reported, and its confirmation status instead of a single unqualified number.',
      },
      {
        q: 'Where exactly do I buy the ticket?',
        a: 'At the official ticket booth by the park entrance on Thadeua Road, before you walk onto the sculpture lawns. Ignore anyone elsewhere offering entry "deals".',
      },
    ],
    related: [
      { slug: 'how-to-get-there', title: 'How to Get to Buddha Park', desc: 'Bus 14 from Talat Sao, tuk-tuks, ride-hailing, the airport and the Friendship Bridge.' },
      { slug: 'sculptures', title: 'The Sculptures & What They Mean', desc: 'The pumpkin tower, reclining Buddha, three-headed elephant and the Hindu figures.' },
    ],
  },
  {
    slug: 'how-to-get-there',
    path: '/en/how-to-get-there/',
    metaTitle: 'How to Get to Buddha Park Vientiane | Bus 14, Taxi & Airport',
    metaDescription:
      'Directions to Buddha Park (Xieng Khuan) from Vientiane: Bus 14 from Talat Sao (about 18,000 LAK reported), tuk-tuk, ride-hailing apps, Wattay Airport and the Thai–Lao Friendship Bridge — with a map and tips.',
    h1: 'How to Get to Buddha Park from Vientiane (2026)',
    intro:
      'Buddha Park sits about 25 km east of central Vientiane on Thadeua Road, a few minutes from the First Thai–Lao Friendship Bridge. It is an easy half-day trip: the classic way in is Bus 14 from the Talat Sao bus terminal, but tuk-tuks, ride-hailing apps, rented motorbikes and hotel shuttles all work too. Here is every option, with the costs visitors have actually reported.',
    checked: 'Directions and fares reviewed October 2026',
    sections: [
      {
        h2: 'Where the park is',
        bullets: [
          'About 25 km east of central Vientiane, on Thadeua Road (Route 13 south)',
          'Deua village, Thanon Tha District, Vientiane Capital, Laos',
          'A short drive from the First Thai–Lao Friendship Bridge to Nong Khai, Thailand',
          'Plus Code: WQ67+WW · Coordinates: 17.9124°N, 102.7622°E',
          'Bus 14\'s final stop is the park itself — no walk from the road',
        ],
      },
      {
        h2: 'Bus 14 — the classic budget route',
        paragraphs: [
          'Public Bus 14 is the cheapest and most backpacker-friendly way to reach Buddha Park. It starts at the Talat Sao (Morning Market) bus terminal in central Vientiane and its terminus is the park entrance on Thadeua Road.',
          'Fares have risen: recent reports from 2025–2026 put the one-way fare at around 18,000 LAK (older guides, including this site\'s previous figure of 6,000 LAK, are outdated). Buses run roughly every 15–20 minutes and the ride takes about 45–60 minutes. Pay cash on board and keep small notes.',
        ],
        bullets: [
          'Board at Talat Sao bus terminal, central Vientiane',
          'Ask for "Wat Xieng Khouane" / "Buddha Park" — the terminus is hard to miss',
          'Return buses run until the late afternoon; confirm the last departure before the park closes at 17:00',
          'The bus can be hot and slow — budget the full hour each way',
        ],
      },
      {
        h2: 'Tuk-tuk or chartered car',
        paragraphs: [
          'Tuk-tuks and chartered cars will take you door to door, and most drivers near the city centre know the park. There is no meter: agree the round-trip price and the waiting time before you leave, and have the driver wait or fix a pick-up hour in advance — finding a return ride at the park can take time.',
        ],
      },
      {
        h2: 'Ride-hailing apps',
        paragraphs: [
          'Ride-hailing apps such as Loca and KokKok Move operate in Vientiane and give upfront pricing. Coverage is strongest in the city centre and thinner out by the park, so pin your pick-up point at the park gate for the return trip and allow extra waiting time.',
        ],
      },
      {
        h2: 'Rented motorbike',
        paragraphs: [
          'Independent riders can follow Thadeua Road east for about 25 km. Traffic is mixed and the surface changes along the way — wear a helmet, ride in daylight, and lock the bike at the gate area. Fuel stations line the Friendship Bridge road if you need to top up before heading back.',
        ],
      },
      {
        h2: 'From Wattay International Airport (VTE)',
        bullets: [
          'The airport is about 30 km from the park — roughly 40–60 minutes by road',
          'Take an airport taxi or a ride-hailing app straight to the gate, or',
          'Save money: get into the city first, then catch Bus 14 from Talat Sao',
        ],
      },
      {
        h2: 'From Nong Khai, Thailand (Friendship Bridge)',
        paragraphs: [
          'The park is the natural first stop after crossing into Laos. Clear immigration and any visa-on-arrival formalities at the First Thai–Lao Friendship Bridge, then continue about 10 minutes by road to the entrance. Check current visa-on-arrival rules and fees with official Lao immigration before you travel.',
        ],
      },
      {
        h2: 'Tours and hotel shuttles',
        paragraphs: [
          'Many Vientiane guesthouses and hotels run or book a half-day trip that pairs Buddha Park with other eastern sights. It costs more than Bus 14 but removes the logistics — useful if you are short on time or travelling in a small group.',
        ],
      },
      {
        h2: 'Map',
        paragraphs: [
          'The park is easy to find once you are on Thadeua Road: follow the road east past the Friendship Bridge turn-offs and the Bus 14 terminus is the entrance.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How far is Buddha Park from central Vientiane?',
        a: 'About 25 km east of the city centre, on Thadeua Road (Route 13 south), near the First Thai–Lao Friendship Bridge.',
      },
      {
        q: 'How much does Bus 14 to Buddha Park cost?',
        a: 'Around 18,000 LAK one way according to 2025–2026 visitor reports. Older guides still show 6,000 LAK, which is outdated. Fares change — confirm at the terminal.',
      },
      {
        q: 'Where do I catch Bus 14 to Buddha Park?',
        a: 'At the Talat Sao (Morning Market) bus terminal in central Vientiane. Bus 14\'s final stop is Buddha Park itself.',
      },
      {
        q: 'Can I get to Buddha Park by tuk-tuk?',
        a: 'Yes. Agree the round-trip price and waiting time before departing, as there is no meter and return rides at the park are less frequent.',
      },
      {
        q: 'Is there parking at Buddha Park?',
        a: 'Yes — open-air parking for cars, tour vans and motorbikes sits by the gate. Shaded spaces fill early on weekends and holidays.',
      },
      {
        q: 'How do I get to Buddha Park from Wattay Airport?',
        a: 'It is about 30 km (40–60 minutes). Take an airport taxi or ride-hailing app directly, or reach Talat Sao first and transfer to Bus 14.',
      },
      {
        q: 'Can I visit Buddha Park coming from Nong Khai?',
        a: 'Yes. Cross the First Thai–Lao Friendship Bridge, complete Lao entry formalities, and continue about 10 minutes by road to the park.',
      },
      {
        q: 'What time is the last bus back from Buddha Park?',
        a: 'Return buses leave in the late afternoon, but timetables change without notice. Aim to be heading back well before the park closes at 17:00, and confirm the last departure locally.',
      },
    ],
    related: [
      { slug: 'entrance-fee', title: 'Entrance Fee & Tickets', desc: 'What the ticket costs in 2026, the camera fee, and how to pay at the gate.' },
      { slug: 'sculptures', title: 'The Sculptures & What They Mean', desc: 'The pumpkin tower, reclining Buddha, three-headed elephant and the Hindu figures.' },
    ],
  },
  {
    slug: 'sculptures',
    path: '/en/sculptures/',
    metaTitle: 'Buddha Park Vientiane Sculptures | 200+ Statues & Their Meanings',
    metaDescription:
      'A guide to the 200+ concrete sculptures of Buddha Park (Xieng Khuan), Vientiane: the giant pumpkin tower, the 40-metre reclining Buddha, the three-headed elephant, Shiva, Vishnu and what they mean.',
    h1: 'Buddha Park Vientiane: The Sculptures and What They Mean',
    intro:
      'More than 200 concrete figures share the lawns of Buddha Park — Buddhas, Hindu gods, demons and heroes from the Indian epics, all cast on site by untrained local workers. This guide explains the statues visitors ask about most, the symbolism behind them, and how to photograph each one.',
    checked: 'Content reviewed October 2026',
    sections: [
      {
        h2: 'A garden cast in concrete',
        paragraphs: [
          'Buddha Park was founded in 1958 by Luang Pu Bunleua Sulilat, a mystic priest who blended Buddhist and Hindu teaching. Rather than carving stone, he gathered local craftsmen to mould more than 200 figures in reinforced concrete on the riverbank — a cheap, fast medium that gave the park its raw, exaggerated, surreal character.',
          'Nothing here is finely polished marble. The surfaces are rough, the proportions wild, and the weather of the Mekong shows on every statue — which is exactly what makes the collection a unique record of mid-20th-century folk religious imagination in Laos.',
        ],
      },
      {
        h2: 'The six statues you should not miss',
        paragraphs: [
          'These are the figures visitors ask about most, with the background and the best angle for each.',
        ],
        bullets: [
          'The Giant Pumpkin (Three Realms Tower) — a three-storey sphere you enter through a demon\'s mouth, climbing past scenes of hell and the human realm to a rooftop terrace standing for heaven. Shoot upward at the demon\'s mouth from the base, then use the terrace for the only full-park panorama.',
          'The Reclining Buddha — roughly 40 metres long, among the largest reclining figures in Laos. Shoot low from the feet for depth; late-afternoon side light picks out the robe folds.',
          'The Three-headed Elephant (Erawan) — Indra\'s mount, covered in small carved faces and the park\'s emblem. Stand slightly below the heads and shoot wide so the scale reads true.',
          'Shiva — the destroyer and transformer, shown with his traditional attributes; a reminder that the founder drew freely on Hindu as well as Buddhist sources. Frame the upper body against open sky.',
          'Vishnu — the preserver, balancing Shiva on the same lawn: the two faiths literally side by side. Morning light from the east softens the concrete.',
          'Arjuna — the archer hero of the Mahabharata, among the epic figures cast here. Shoot from a low angle with the bow arm leading into the frame.',
        ],
      },
      {
        h2: 'Why Hindu gods stand beside Buddhas',
        paragraphs: [
          'The mix is the point. Luang Pu Bunleua Sulilat studied both traditions, and the park lays them out without hierarchy: Buddhist statues, Hindu deities and animist spirit shrines share the same lawns. For visitors, the park reads as a physical map of the religious layering that characterises Laos.',
          'Local guides sometimes give different names for the same figure, and the park\'s own signage is limited — treat individual identifications as the widely used descriptions rather than official labels.',
        ],
      },
      {
        h2: 'The Three Realms tower explained',
        paragraphs: [
          'The giant pumpkin mirrors the Buddhist cosmology of the Three Realms (Traiphum): you enter through a demon\'s mouth, grope up narrow dark stairs past scenes of hell and the human world, and emerge at the top into daylight — a walk-through metaphor for leaving the cycle of rebirth. The stair is narrow, dark and steep; hold the rail, watch your head, and skip it if you are unsteady on steps.',
        ],
      },
      {
        h2: 'Photographing the statues',
        bullets: [
          'Morning light (about 08:00–10:00) is soft and cool — the best all-round window',
          'Late afternoon (about 16:00–17:00) gives warm side light before the 17:00 closing',
          'Sunset and blue-hour times you see elsewhere are astronomical values — the park itself closes at 17:00, so plan in-park shooting within opening hours',
          'Overcast days give even, shadow-free light on the concrete — excellent for detail',
          'Golden hour: f/8, ISO 100, around 1/250s · late afternoon: f/5.6, ISO 400, around 1/60s',
          'Wipe the lens if morning mist rolls off the Mekong, and keep voices low near shrines',
        ],
      },
      {
        h2: 'Visiting respectfully',
        paragraphs: [
          'Buddha Park is a working religious site as well as an attraction. Dress modestly, remove shoes where asked, do not climb on the statues or lean on them for photos, and admire small shrines and offerings from a distance. The concrete is old and fragile in places — barriers exist for a reason.',
        ],
      },
      {
        h2: 'Names and spellings',
        bullets: [
          'Buddha Park — the common English name and the one used on bus destinations',
          'Wat Xieng Khouane Luang — the fuller official name',
          'Xieng Khuan / Xieng Khouane — short local forms; "xieng" means city and "khouane" means spirit, giving "City of Spirits"',
          'Sala Keoku, Nong Khai — the sister sculpture park across the river in Thailand, built by the same founder after 1975',
        ],
      },
    ],
    faqs: [
      {
        q: 'How many statues are in Buddha Park?',
        a: 'More than 200 concrete figures — Buddhas, Hindu deities, demons and heroes from the Indian epics — were cast on site starting in 1958.',
      },
      {
        q: 'Who created the sculptures at Buddha Park?',
        a: 'Luang Pu Bunleua Sulilat, a mystic priest who blended Buddhist and Hindu teaching, founded the park in 1958 and had local craftsmen cast the figures in reinforced concrete.',
      },
      {
        q: 'What is the giant pumpkin sculpture?',
        a: 'It is the Three Realms Tower: a three-storey sphere you enter through a demon\'s mouth, climbing from hell through the human world to a rooftop terrace that stands for heaven.',
      },
      {
        q: 'Can you climb on the statues at Buddha Park?',
        a: 'No. The concrete is old and fragile, and the park is a working religious site. The only structure meant for climbing is the pumpkin tower\'s internal stair.',
      },
      {
        q: 'What does Xieng Khuan mean?',
        a: 'Roughly "City of Spirits" — "xieng" means city and "khouane" means spirit or soul, a reference to the animist beliefs woven through the park.',
      },
      {
        q: 'Is Buddha Park suitable for children?',
        a: 'Yes — the flat lawns and playful statues suit families. Supervise children on the pumpkin tower\'s narrow, dark stair and keep them off the fragile concrete figures.',
      },
      {
        q: 'How is Buddha Park different from Sala Keoku in Nong Khai?',
        a: 'Both were created by the same mystic and mix Hindu and Buddhist figures in concrete. Buddha Park came first, in 1958 on the Lao bank; Sala Keoku followed after 1975 on the Thai bank, with taller and more elaborate structures.',
      },
      {
        q: 'When is the best light for photographing the sculptures?',
        a: 'Morning (about 08:00–10:00) for soft, cool light and empty paths, or late afternoon (about 16:00–17:00) for warm side light. The park closes at 17:00, so in-park photography has to fit inside opening hours.',
      },
    ],
    related: [
      { slug: 'entrance-fee', title: 'Entrance Fee & Tickets', desc: 'What the ticket costs in 2026, the camera fee, and how to pay at the gate.' },
      { slug: 'how-to-get-there', title: 'How to Get to Buddha Park', desc: 'Bus 14 from Talat Sao, tuk-tuks, ride-hailing, the airport and the Friendship Bridge.' },
    ],
  },
];

export const getTopicEn = (slug: string): Topic | undefined => TOPICS_EN.find((t) => t.slug === slug);

// 首页专题入口区块共用文案（英文）
const TOPIC_CARD_COPY: Record<string, { title: string; desc: string }> = {
  'entrance-fee': {
    title: 'Entrance Fee & Tickets (2026)',
    desc: 'What the ticket costs now, the camera fee, how to pay at the gate, and how much cash to bring.',
  },
  'how-to-get-there': {
    title: 'How to Get There',
    desc: 'Bus 14 from Talat Sao, tuk-tuks, ride-hailing apps, Wattay Airport and the Friendship Bridge.',
  },
  sculptures: {
    title: 'The Sculptures & Their Meanings',
    desc: 'The pumpkin tower, the 40-metre reclining Buddha, the three-headed elephant and the Hindu gods.',
  },
};

export const TOPIC_LINKS_UI = {
  label: 'In-depth guides',
  heading: 'Plan the practical details',
  intro:
    'Three focused guides that go deeper than the overview below — tickets and fees, every way to get there, and the stories behind the statues.',
  cards: TOPICS_EN.map((t) => ({ slug: t.slug, path: t.path, ...TOPIC_CARD_COPY[t.slug] })),
  cta: 'Read the guide →',
  backHome: '← Back to the full Buddha Park guide',
  faqTitle: 'Frequently asked questions',
  relatedTitle: 'Related guides',
  updatedLabel: 'Last reviewed',
  breadcrumbHome: 'Home',
  disclaimer:
    'This is an independent, non-commercial visitor guide — not an official site of the park or any agency. Prices and timetables change; please verify on site.',
};
