// توابع کمکی و قالب مشترک همهٔ صفحه‌ها
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const readJson = (f) => JSON.parse(fs.readFileSync(path.join(ROOT, '_src/data', f), 'utf8'));
export const site = readJson('site.json');
export const prices = readJson('prices.json');
export const reviews = readJson('reviews.json');

// ---------- قالب‌بندی عدد و متن ----------
const FA = '۰۱۲۳۴۵۶۷۸۹';
export const fa = (v) => String(v).replace(/\d/g, (d) => FA[d]);
export const money = (n) => fa(String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '٬'));
export const mil = (n) => fa(n / 1_000_000); // 26000000 -> ۲۶
export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const jalaliFa = (s) => fa(s); // 1405/07/10 -> ۱۴۰۵/۰۷/۱۰

// ---------- آدرس‌ها ----------
// خروجی «تخت» است (بدون پوشه) تا آپلود در GitHub فقط با انتخاب فایل‌ها ممکن باشد.
// مسیر منطقی صفحه (مثل /tehran/ یا /articles/safe-purchase/) به نام فایل واقعی تبدیل می‌شود.
export const flat = (p = '/') => {
  if (p === '/') return '/';
  const segs = p.split('/').filter(Boolean);
  const last = segs[segs.length - 1];
  if (last.includes('.')) return '/' + last; // فایل (css، png، xml، ...) در ریشه
  return '/' + last + '.html';
};
export const href = (p = '/') => (site.basePath || '') + flat(p);
export const abs = (p = '/') => site.baseUrl + (site.basePath || '') + flat(p);

// ---------- لینک‌های تماس ----------
export const wa = (text) => `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(text)}`;
export const tel = `tel:${site.phone}`;

const ICON = {
  wa: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.700 6.700 0 0 1-3.300-2.900c-.2-.4.2-.4.700-1.300.1-.2 0-.3 0-.5l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.200 5.300 5.300 0 0 0 1.100 2.800 12 12 0 0 0 4.600 4.100c1.700.7 2.400.8 3.200.7a2.700 2.700 0 0 0 1.800-1.300 2.200 2.200 0 0 0 .2-1.300c-.1-.1-.3-.2-.6-.3z"/></svg>',
  call: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.200 2 19.800 19.800 0 0 1-8.600-3.100 19.500 19.500 0 0 1-6-6A19.800 19.800 0 0 1 2.100 4.200 2 2 0 0 1 4.100 2h3a2 2 0 0 1 2 1.700c.1 1 .4 1.900.7 2.800a2 2 0 0 1-.5 2.100L8.100 9.900a16 16 0 0 0 6 6l1.300-1.300a2 2 0 0 1 2.100-.4c.9.3 1.800.6 2.800.7a2 2 0 0 1 1.700 2z"/></svg>',
  bale: '<b aria-hidden="true">بله</b>',
};

// ردیف دکمه‌های تماس؛ msg = متن پیش‌فرض واتساپ متناسب با همان صفحه
export function ctaRow(msg, { where = 'page' } = {}) {
  return `<div class="cta-row">
  <a class="btn btn-wa" href="${esc(wa(msg))}" target="_blank" rel="noopener" data-cta="whatsapp-${where}">${ICON.wa}<span>ارسال مدارک در واتساپ</span></a>
  <a class="btn btn-bale" href="${esc(site.bale)}" target="_blank" rel="noopener" data-cta="bale-${where}">${ICON.bale}<span>ارسال در پیام‌رسان بله</span></a>
  <a class="btn btn-call" href="${tel}" data-cta="call-${where}">${ICON.call}<span>تماس: <bdi dir="ltr">${site.phoneDisplay}</bdi></span></a>
</div>`;
}

// ---------- JSON-LD ----------
const ldScript = (obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;

export function orgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': abs('/') + '#organization',
    name: site.name,
    url: abs('/'),
    logo: abs('/assets/logo-512.png'),
    image: abs('/assets/og-image.png'),
    telephone: '+' + site.phoneIntl,
    description:
      'دفتر حج متین در تهران، میدان شهدا؛ خرید و انتقال فیش حج عمره برای تهران (حضوری یا غیرحضوری) و سایر استان‌ها (غیرحضوری).',
    priceRange: `${money(prices.tehran)} تا ${money(prices.other)} ${prices.currency}`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: site.address.country,
      addressLocality: site.address.locality,
      streetAddress: site.address.street,
    },
    areaServed: { '@type': 'Country', name: 'ایران' },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: site.hours.days,
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
    sameAs: [site.instagram, site.bale],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': abs('/') + '#website',
    url: abs('/'),
    name: site.name,
    inLanguage: 'fa-IR',
    publisher: { '@id': abs('/') + '#organization' },
  };
}

export function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: abs(t.path),
    })),
  };
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: { '@type': 'Answer', text: q.a.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() },
    })),
  };
}

export function articleSchema(a) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    inLanguage: 'fa-IR',
    datePublished: a.published,
    dateModified: a.modified || a.published,
    mainEntityOfPage: abs(a.path),
    image: abs('/assets/og-image.png'),
    author: { '@type': 'Organization', name: site.name, url: abs('/') },
    publisher: { '@id': abs('/') + '#organization' },
  };
}

// ---------- فونت ----------
const localFont = fs.existsSync(path.join(ROOT, '_src/assets/fonts/Vazirmatn.woff2'));
const GFONT =
  'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;700;800;900&display=swap';

// ---------- ناوبری ----------
export const NAV = [
  { path: '/tehran/', label: 'فیش عمره تهران' },
  { path: '/shahrestan/', label: 'فیش عمره شهرستان' },
  { path: '/price/', label: 'قیمت روز' },
  { path: '/process/', label: 'مراحل کار' },
  { path: '/articles/', label: 'مقالات' },
  { path: '/faq/', label: 'پرسش‌ها' },
  { path: '/about/', label: 'درباره و تماس' },
];

const cssHash = (css) => crypto.createHash('md5').update(css).digest('hex').slice(0, 8);

// ---------- صفحهٔ کامل ----------
export function layout(page, cssText) {
  const {
    path: p,
    title,
    description,
    body,
    schemas = [],
    ogType = 'website',
    trail = null,
    waMsg = 'سلام، جهت خرید فیش حج عمره و ارسال مدارک پیام می‌دهم.',
    noindex = false,
  } = page;

  const url = abs(p);
  const crumbs = trail
    ? `<nav class="crumbs wrap" aria-label="مسیر صفحه"><ol>${trail
        .map((t, i) =>
          i === trail.length - 1
            ? `<li aria-current="page">${esc(t.name)}</li>`
            : `<li><a href="${href(t.path)}">${esc(t.name)}</a></li>`
        )
        .join('')}</ol></nav>`
    : '';
  const allSchemas = [...schemas];
  if (trail) allSchemas.push(breadcrumbSchema(trail));

  const navLinks = (cls) =>
    NAV.map(
      (n) => `<a href="${href(n.path)}"${p.startsWith(n.path) ? ' aria-current="page"' : ''}>${n.label}</a>`
    ).join('');

  const fontHead = localFont
    ? `<style>@font-face{font-family:'Vazirmatn';src:url('${href('/assets/fonts/Vazirmatn.woff2')}') format('woff2');font-weight:100 900;font-display:swap}</style>`
    : `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${GFONT}" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="${GFONT}"></noscript>`;

  return `<!doctype html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}">
<meta name="theme-color" content="#064E3B">
<meta property="og:locale" content="fa_IR">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${abs('/assets/og-image.png')}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${abs('/assets/og-image.png')}">
<link rel="icon" type="image/png" sizes="32x32" href="${href('/assets/favicon-32.png')}">
<link rel="icon" type="image/png" sizes="48x48" href="${href('/assets/favicon-48.png')}">
<link rel="apple-touch-icon" href="${href('/assets/apple-touch-icon.png')}">
${fontHead}
<link rel="stylesheet" href="${href('/assets/style.css')}?v=${cssHash(cssText)}">
${allSchemas.map(ldScript).join('\n')}
</head>
<body>
<a class="skip" href="#main">رفتن به محتوا</a>
<header class="site-header">
  <div class="wrap bar">
    <a class="brand" href="${href('/')}" aria-label="${esc(site.name)} — صفحهٔ اصلی">
      <img src="${href('/assets/logo-512.webp')}" width="44" height="44" alt="لوگوی ${esc(site.name)}">
      <span><b>${esc(site.name)}</b><small>خرید و انتقال فیش حج عمره</small></span>
    </a>
    <nav class="nav" aria-label="منوی اصلی">${navLinks()}</nav>
    <a class="btn btn-call btn-sm head-call" href="${tel}" data-cta="call-header" aria-label="تماس با ${esc(site.name)}: ${site.phoneDisplay}">${ICON.call}<bdi class="num" dir="ltr">${site.phoneDisplay}</bdi></a>
    <details class="menu">
      <summary aria-label="باز کردن منو"><span></span></summary>
      <nav aria-label="منوی موبایل">${navLinks()}<a href="${href('/')}">صفحهٔ اصلی</a></nav>
    </details>
  </div>
</header>
${crumbs}
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <h2>${esc(site.name)}</h2>
        <p>دفتر حج متین در تهران، ${esc(site.address.street)}.<br>${esc(site.hours.text)}</p>
        <p>تلفن و واتساپ: <a href="${tel}"><bdi dir="ltr">${site.phoneDisplay}</bdi></a><br>
        اینستاگرام: <a href="${site.instagram}" target="_blank" rel="noopener">@hajjematin</a></p>
      </div>
      <div>
        <h3>صفحه‌ها</h3>
        <ul>${NAV.map((n) => `<li><a href="${href(n.path)}">${n.label}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h3>قیمت امروز</h3>
        <p>تهران: ${money(prices.tehran)} ${prices.currency}<br>سایر استان‌ها: ${money(prices.other)} ${prices.currency}<br>
        <span class="small">به‌روزرسانی: ${jalaliFa(prices.updatedJalali)}</span></p>
      </div>
    </div>
    <div class="foot-bottom">
      قیمت‌ها نرخ روز است و ممکن است تغییر کند؛ قبل از واریز، مبلغ نهایی و مراحل را با پشتیبانی تأیید کنید.
      شماره و حساب‌های رسمی حج متین فقط همین‌هایی است که در این سایت و صفحهٔ اینستاگرام اعلام شده است.
    </div>
  </div>
</footer>
<div class="sticky-bar" role="region" aria-label="دسترسی سریع">
  <a class="btn btn-wa" href="${esc(wa(waMsg))}" target="_blank" rel="noopener" data-cta="whatsapp-sticky">${ICON.wa}<span>واتساپ</span></a>
  <a class="btn btn-bale" href="${esc(site.bale)}" target="_blank" rel="noopener" data-cta="bale-sticky">${ICON.bale}<span>ارسال مدارک</span></a>
  <a class="btn btn-call" href="${tel}" data-cta="call-sticky">${ICON.call}<span>تماس</span></a>
</div>
</body>
</html>
`;
}
