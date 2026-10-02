// ساخت سایت: node build.mjs
// ورودی: پوشهٔ _src (داده‌ها، قالب‌ها، تصاویر)
// خروجی: پوشهٔ dist — همهٔ فایل‌ها کنار هم، بدون زیرپوشه؛ محتوای dist را در ریشهٔ ریپوی GitHub Pages آپلود کنید.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, site, prices, layout, abs, href, money, flat, NAV } from './_src/lib.mjs';
import { pages, articles } from './_src/pages.mjs';

const DIST = path.join(ROOT, 'dist');
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });
const w = (name, content) => fs.writeFileSync(path.join(DIST, name), content);

const css = fs.readFileSync(path.join(ROOT, '_src/style.css'), 'utf8');
w('style.css', css);

// تصاویر (و فونت اگر گذاشته باشید) مستقیم در ریشه
const assetDir = path.join(ROOT, '_src/assets');
for (const f of fs.readdirSync(assetDir, { recursive: true })) {
  const full = path.join(assetDir, f);
  if (fs.statSync(full).isFile()) fs.copyFileSync(full, path.join(DIST, path.basename(f)));
}

// صفحه‌ها
const list = pages();
for (const p of list) {
  const name = p.path === '/' ? 'index.html' : flat(p.path).slice(1);
  w(name, layout(p, css));
}

// 404
w(
  '404.html',
  layout(
    {
      path: '/404.html',
      title: 'صفحه پیدا نشد | حج متین',
      description: 'این صفحه پیدا نشد. به صفحهٔ اصلی حج متین برگردید.',
      noindex: true,
      body: `<section class="hero wrap"><h1>صفحه‌ای که دنبالش بودید پیدا نشد</h1>
<p class="lead">ممکن است آدرس تغییر کرده باشد. از لینک‌های زیر ادامه دهید یا مستقیم با ما تماس بگیرید.</p>
<div class="cta-row" style="justify-content:center">
<a class="btn" href="${href('/')}">صفحهٔ اصلی</a>
<a class="btn btn-ghost" href="${href('/price/')}">قیمت روز</a>
<a class="btn btn-call" href="tel:${site.phone}">تماس: <bdi dir="ltr">${site.phoneDisplay}</bdi></a>
</div></section>`,
    },
    css
  )
);

// robots.txt
const bots = ['Googlebot', 'Bingbot', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'Applebot'];
w('robots.txt', `User-agent: *\nAllow: /\n\n${bots.map((b) => `User-agent: ${b}\nAllow: /\n`).join('\n')}\nSitemap: ${abs('/sitemap.xml')}\n`);

// sitemap.xml (فقط صفحه‌های واقعی)
w(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${list
    .map((p) => {
      const last = p.path === '/price/' || p.path === '/' ? prices.updatedISO : site.contentUpdated;
      return `  <url><loc>${abs(p.path)}</loc><lastmod>${last}</lastmod></url>`;
    })
    .join('\n')}\n</urlset>\n`
);

// prices.json عمومی
w(
  'prices.json',
  JSON.stringify(
    {
      note: 'نرخ روز فیش حج عمره — حج متین. قیمت‌ها ممکن است تغییر کند.',
      updated: prices.updatedISO,
      updatedJalali: prices.updatedJalali,
      currency: 'IRT',
      tehran: prices.tehran,
      otherProvinces: prices.other,
      url: abs('/price/'),
    },
    null,
    2
  ) + '\n'
);

// llms.txt
w(
  'llms.txt',
  `# حج متین

> دفتر حج متین در تهران (${site.address.street}) خرید و انتقال فیش حج عمره را برای تهران (حضوری یا غیرحضوری) و سایر استان‌ها (کاملاً غیرحضوری) انجام می‌دهد. ساعت کاری: ${site.hours.text}. تلفن، واتساپ و بله: ${site.phoneDisplay}. اینستاگرام: @hajjematin.

## اطلاعات کلیدی (به‌روزرسانی ${prices.updatedJalali})
- قیمت فیش حج عمره تهران: ${money(prices.tehran)} تومان
- قیمت فیش حج عمره سایر استان‌ها: ${money(prices.other)} تومان
- قیمت‌ها نرخ روز است و ممکن است تغییر کند؛ نرخ‌های جاری همیشه در ${abs('/price/')} و ${abs('/prices.json')} است.
- مدارک لازم: عکس صفحهٔ اول شناسنامه و روی کارت ملی.
- زمان انجام کار: حدود ۱ تا ۲ روز کاری.
- پرداخت تهران: یک‌جا، یا بیعانه و تسویه پس از رسیدن مجوز از سازمان حج و زیارت. پرداخت شهرستان: پس از تأیید مدارک.
- اگر انتقال انجام نشود، وجه به خریدار عودت داده می‌شود.

## صفحه‌ها
${NAV.map((n) => `- [${n.label}](${abs(n.path)})`).join('\n')}

## مقالات
${articles.map((a) => `- [${a.title}](${abs(a.path)}): ${a.summary}`).join('\n')}
`
);

// فایل‌های کمکی
w('.nojekyll', '');
if (site.customDomain) w('CNAME', site.customDomain + '\n');
fs.copyFileSync(path.join(ROOT, '_src/google483bdaf9ddf4793d.html'), path.join(DIST, 'google483bdaf9ddf4793d.html'));
fs.copyFileSync(path.join(ROOT, '_src/README-site.md'), path.join(DIST, 'README.md'));

const n = fs.readdirSync(DIST).length;
console.log(`ساخته شد: ${list.length} صفحه + 404 + robots + sitemap + llms.txt + prices.json — کل ${n} فایل در dist/`);
