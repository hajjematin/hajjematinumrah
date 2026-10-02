// محتوای صفحه‌ها — فقط اطلاعاتی که مالک سایت تأیید کرده؛ هیچ آمار یا نظر ساختگی در اینجا نیست.
import {
  site, prices, reviews, fa, money, mil, esc, href, abs, wa, tel, ctaRow, jalaliFa,
  orgSchema, websiteSchema, faqSchema, articleSchema,
} from './lib.mjs';

const T = money(prices.tehran);
const O = money(prices.other);
const TM = mil(prices.tehran);
const OM = mil(prices.other);
const CUR = prices.currency;
const UPD = jalaliFa(prices.updatedJalali);

const home = { name: 'حج متین', path: '/' };
const trailOf = (name, p) => [home, { name, path: p }];

// ---------- محتوای مشترک ----------
const priceNote = `<p class="note">قیمت‌ها نرخ روز است و ممکن است تغییر کند. آخرین به‌روزرسانی: <b>${UPD}</b>. قبل از واریز، مبلغ نهایی و مراحل را با پشتیبانی تأیید کنید.</p>`;

const docsBlock = `<ul class="checks">
  <li>عکس واضح صفحهٔ اول شناسنامه</li>
  <li>عکس روی کارت ملی</li>
</ul>
<p class="muted small">با گوشی عکس بگیرید و در واتساپ یا بله بفرستید؛ نیازی به اسکن نیست.</p>`;

const waTehran = `سلام، متقاضی خرید فیش حج عمره تهران (${TM} میلیون تومان) هستم. لطفاً راهنمایی بفرمایید.`;
const waOther = `سلام، متقاضی خرید فیش حج عمره شهرستان (${OM} میلیون تومان) هستم. لطفاً راهنمایی بفرمایید.`;
const waPrice = 'سلام، قیمت امروز فیش حج عمره را می‌خواستم.';
const waGeneral = 'سلام، جهت خرید فیش حج عمره و ارسال مدارک پیام می‌دهم.';

const priceCards = `<div class="grid grid-2">
  <div class="card price-card">
    <span class="tag">تهران</span>
    <h3>فیش حج عمره تهران</h3>
    <p class="muted small">حضوری در دفتر یا غیرحضوری</p>
    <div class="price"><span>قیمت امروز</span><b>${T}</b><span>${CUR}</span></div>
    <ul class="checks">
      <li>می‌توانید به دفتر ما (میدان شهدا) بیایید یا غیرحضوری انجام دهید</li>
      <li>انتقال و دریافت مجوز، حدود ۱ تا ۲ روز کاری</li>
      <li>پرداخت: یک‌جا، یا بیعانه و تسویه پس از رسیدن مجوز</li>
    </ul>
    <a class="btn btn-wa btn-block" href="${esc(wa(waTehran))}" target="_blank" rel="noopener" data-cta="whatsapp-card-tehran">درخواست خرید فیش تهران</a>
    <p class="small" style="margin:10px 0 0;text-align:center"><a href="${href('/tehran/')}">جزئیات خرید برای تهران</a></p>
  </div>
  <div class="card price-card alt">
    <span class="tag">سایر استان‌ها</span>
    <h3>فیش حج عمره شهرستان</h3>
    <p class="muted small">کاملاً غیرحضوری، بدون سفر به تهران</p>
    <div class="price"><span>قیمت امروز</span><b>${O}</b><span>${CUR}</span></div>
    <ul class="checks">
      <li>همهٔ کارها را خودمان انجام می‌دهیم؛ لازم نیست به تهران بیایید</li>
      <li>سند برایتان پست می‌شود</li>
      <li>انجام کار و ارسال، حدود ۱ تا ۲ روز کاری</li>
    </ul>
    <a class="btn btn-gold btn-block" href="${esc(wa(waOther))}" target="_blank" rel="noopener" data-cta="whatsapp-card-shahrestan">درخواست خرید فیش شهرستان</a>
    <p class="small" style="margin:10px 0 0;text-align:center"><a href="${href('/shahrestan/')}">جزئیات خرید برای شهرستان‌ها</a></p>
  </div>
</div>`;

const stepsTehran = `<ol class="steps">
  <li><b>ارسال مدارک</b>عکس صفحهٔ اول شناسنامه و روی کارت ملی را در واتساپ یا بله بفرستید (یا حضوری به دفتر بیایید).</li>
  <li><b>پرداخت اولیه</b>یا مبلغ را یک‌جا بدهید، یا ابتدا بیعانه واریز کنید.</li>
  <li><b>بررسی سند و گرفتن مجوز</b>سند فروشنده مشخص است و استعلام آن را خودمان می‌گیریم؛ مجوز نقل‌وانتقال از سازمان حج و زیارت دریافت می‌شود.</li>
  <li><b>تسویه و تبدیل سند بانکی</b>اگر بیعانه داده‌اید، پس از رسیدن مجوز تسویه می‌کنید. سپس تبدیل سند بانکی و دریافت فیش به نام شما انجام می‌شود.</li>
</ol>`;

const stepsOther = `<ol class="steps">
  <li><b>ارسال مدارک</b>عکس صفحهٔ اول شناسنامه و روی کارت ملی را در واتساپ یا بله بفرستید.</li>
  <li><b>تأیید مدارک و واریز</b>پس از تأیید مدارک، مبلغ به حساب مجموعه واریز می‌شود.</li>
  <li><b>بررسی سند و گرفتن مجوز</b>سند فروشنده مشخص است و استعلام آن را خودمان می‌گیریم؛ مجوز نقل‌وانتقال از سازمان حج و زیارت دریافت می‌شود.</li>
  <li><b>تبدیل سند و ارسال</b>تبدیل سند بانکی را ما انجام می‌دهیم و سند برایتان پست می‌شود.</li>
</ol>`;

const refundLine = 'اگر به هر دلیل انتقال انجام نشود، وجه به خریدار عودت داده می‌شود.';

const trustFacts = `<ul class="facts">
  <li><b>دفتر حضوری</b><span>تهران، ${esc(site.address.street)} — ${esc(site.hours.text)}</span></li>
  <li><b>سابقه</b><span>${site.experience} سابقهٔ فعالیت</span></li>
  <li><b>مسیر انجام کار</b><span>از طریق دفتر زیارتی، سازمان حج و زیارت و بانک</span></li>
  <li><b>استعلام سند</b><span>سند فروشنده مشخص است و استعلام آن را خودمان می‌گیریم</span></li>
  <li><b>عودت وجه</b><span>${refundLine}</span></li>
  <li><b>شبکه‌های رسمی</b><span>اینستاگرام <a href="${site.instagram}" target="_blank" rel="noopener">@hajjematin</a> با ${site.instagramFollowers} دنبال‌کننده</span></li>
</ul>`;

// ---------- پرسش‌های متداول ----------
export const faqs = [
  {
    q: 'فیش حج عمره چیست؟',
    a: '<p>فیش حج عمره سندی است که نوبت و سابقهٔ ثبت‌نام عمره را نشان می‌دهد و انتقال آن به نام خریدار از مسیر رسمی (دفتر زیارتی، سازمان حج و زیارت و بانک) انجام می‌شود. دربارهٔ جزئیات نوبت و اولویت، پیش از خرید با پشتیبانی صحبت کنید.</p>',
  },
  {
    q: 'قیمت فیش حج عمره امروز چقدر است؟',
    a: `<p>نرخ امروز (به‌روزرسانی ${UPD}): فیش تهران ${T} ${CUR} و فیش سایر استان‌ها ${O} ${CUR}. قیمت‌ها ممکن است تغییر کند؛ <a href="${href('/price/')}">صفحهٔ قیمت روز</a> همیشه آخرین نرخ را نشان می‌دهد.</p>`,
  },
  {
    q: 'چه مدارکی برای خرید لازم است؟',
    a: '<p>فقط عکس واضح صفحهٔ اول شناسنامه و عکس روی کارت ملی. با گوشی عکس بگیرید و در واتساپ یا بله بفرستید.</p>',
  },
  {
    q: 'انتقال فیش چقدر طول می‌کشد؟',
    a: '<p>به‌طور کلی حدود ۱ تا ۲ روز کاری. برای تهران، این زمان شامل نقل‌وانتقال و گرفتن مجوز است؛ برای شهرستان‌ها شامل انجام کار و ارسال سند.</p>',
  },
  {
    q: 'پول چه زمانی و چگونه پرداخت می‌شود؟',
    a: '<p><b>تهران:</b> یا از همان ابتدا مبلغ را یک‌جا می‌دهید، یا ابتدا بیعانه واریز می‌کنید و پس از رسیدن مجوز از سازمان حج و زیارت تسویه می‌کنید.</p><p><b>شهرستان:</b> پس از تأیید مدارک، مبلغ به حساب مجموعه واریز می‌شود.</p>',
  },
  {
    q: 'اگر انتقال انجام نشد چه می‌شود؟',
    a: `<p>${refundLine}</p>`,
  },
  {
    q: 'اگر ساکن شهرستان هستم، باید به تهران بیایم؟',
    a: '<p>نه. برای سایر استان‌ها همهٔ کارها غیرحضوری است و خودمان پیگیری می‌کنیم. سند هم برایتان پست می‌شود.</p>',
  },
  {
    q: 'در تهران می‌توانم حضوری مراجعه کنم؟',
    a: `<p>بله. می‌توانید به دفتر ما در تهران، ${esc(site.address.street)} بیایید (${esc(site.hours.text)}) یا غیرحضوری انجام دهید.</p>`,
  },
  {
    q: 'مجوز نقل‌وانتقال از کجا می‌آید؟',
    a: '<p>مجوز نقل‌وانتقال را سازمان حج و زیارت صادر می‌کند و ما آن را پیگیری و دریافت می‌کنیم. سند فروشنده نیز پیش از انتقال استعلام می‌شود.</p>',
  },
  {
    q: 'چطور با حج متین تماس بگیرم؟',
    a: `<p>تلفن و واتساپ و بله: <bdi dir="ltr">${site.phoneDisplay}</bdi> — اینستاگرام: @hajjematin. ساعت پاسخگویی دفتر: ${esc(site.hours.text)}.</p>`,
  },
];

const faqHtml = (list) =>
  `<div class="faq">${list.map((f) => `<details><summary>${esc(f.q)}</summary><div>${f.a}</div></details>`).join('')}</div>`;

// ---------- مقالات ----------
export const articles = [
  {
    slug: 'gheymat-fish-hajj-omreh',
    title: `قیمت فیش حج عمره امروز؛ نرخ تهران و شهرستان و نکات مقایسهٔ قیمت`,
    description: `نرخ روز فیش حج عمره (به‌روزرسانی ${UPD}): تهران ${TM} و سایر استان‌ها ${OM} میلیون تومان؛ به‌علاوه نکاتی برای مقایسهٔ درست قیمت‌ها.`,
    summary: 'نرخ امروز و چند نکتهٔ ساده برای اینکه قیمت‌های مختلف را درست مقایسه کنید.',
    published: '2026-10-02',
    body: () => `
<p>یکی از اولین سؤال‌های خریداران این است: «قیمت فیش حج عمره امروز چقدر است؟» در این صفحه نرخ فعلی حج متین و نکاتی برای مقایسهٔ درست قیمت‌ها را می‌خوانید.</p>
<h2>قیمت امروز (${UPD})</h2>
<div class="tbl-wrap"><table>
  <thead><tr><th>نوع خرید</th><th>قیمت</th></tr></thead>
  <tbody>
    <tr><td>فیش حج عمره تهران (حضوری یا غیرحضوری)</td><td>${T} ${CUR}</td></tr>
    <tr><td>فیش حج عمره سایر استان‌ها (غیرحضوری)</td><td>${O} ${CUR}</td></tr>
  </tbody>
</table></div>
${priceNote}
<h2>برای مقایسهٔ قیمت‌ها چه چیزهایی را بپرسید؟</h2>
<p>فقط به عدد نگاه نکنید. پیش از واریز از هر مجموعه‌ای که می‌خواهید خرید کنید، این‌ها را بپرسید و پاسخ را مکتوب نگه دارید:</p>
<ul>
  <li>مبلغ نهایی دقیقاً چقدر است و چه چیزی را شامل می‌شود؟</li>
  <li>پرداخت چه زمانی و چگونه انجام می‌شود (یک‌جا، یا بیعانه و تسویه بعد از مجوز)؟</li>
  <li>مجوز نقل‌وانتقال از کجا و چه زمانی می‌رسد؟</li>
  <li>اگر انتقال انجام نشد، پول چه می‌شود؟</li>
  <li>آدرس و دفتر حضوری دارند یا فقط یک شماره تلفن؟</li>
</ul>
<h2>در حج متین چه می‌دهیم؟</h2>
<p>در حج متین، قیمت تهران و شهرستان جدا اعلام می‌شود و قبل از واریز، مراحل را برایتان توضیح می‌دهیم. ${refundLine} مراحل را در <a href="${href('/process/')}">صفحهٔ مراحل کار</a> ببینید.</p>
${ctaRow(waPrice, { where: 'article-price' })}`,
  },
  {
    slug: 'safe-purchase',
    title: 'فیش حج عمرهٔ مطمئن را از کجا بخرم؟ ۷ نکته برای جلوگیری از کلاهبرداری',
    description: 'چطور هنگام خرید فیش حج عمره از مجموعهٔ مطمئن خرید کنیم؟ هفت نکتهٔ کاربردی دربارهٔ آدرس، مجوز، شیوهٔ پرداخت، مدارک و عودت وجه.',
    summary: 'هفت نکتهٔ کاربردی که پیش از واریز پول باید بررسی کنید.',
    published: '2026-10-02',
    body: () => `
<p>خرید فیش حج عمره یک تصمیم مهم و پرهزینه است و متأسفانه در هر بازاری که تقاضا زیاد باشد، افراد سودجو هم پیدا می‌شوند. این هفت نکته را پیش از هر واریزی بررسی کنید؛ برای هر مجموعه‌ای که می‌خواهید خرید کنید مفید است.</p>
<h2>۱. آدرس و دفتر حضوری</h2>
<p>ببینید مجموعه آدرس مشخص و دفتر قابل مراجعه دارد یا نه. حج متین در تهران، ${esc(site.address.street)} دفتر دارد (${esc(site.hours.text)}).</p>
<h2>۲. مسیر رسمی انتقال را بپرسید</h2>
<p>انتقال باید از مسیر رسمی انجام شود؛ یعنی دفتر زیارتی، سازمان حج و زیارت و بانک. بپرسید مجوز نقل‌وانتقال از کجا صادر می‌شود و چه زمانی می‌رسد.</p>
<h2>۳. سند فروشنده و استعلام</h2>
<p>بپرسید سند فروشنده مشخص است یا نه و استعلام آن را چه کسی و چگونه می‌گیرد. در حج متین استعلام سند فروشنده را خودمان می‌گیریم.</p>
<h2>۴. شیوهٔ پرداخت باید روشن باشد</h2>
<p>پیش از واریز بدانید پول کی و چگونه پرداخت می‌شود: یک‌جا، یا بیعانه و تسویه بعد از مجوز. شیوهٔ پرداخت حج متین را در <a href="${href('/process/')}">صفحهٔ مراحل کار</a> ببینید.</p>
<h2>۵. شماره حساب را از کانال رسمی بگیرید</h2>
<p>شماره حساب را فقط از شمارهٔ رسمی مجموعه یا تماس تلفنی بگیرید و قبل از واریز، نام صاحب حساب را بررسی کنید. شمارهٔ رسمی حج متین: <bdi dir="ltr">${site.phoneDisplay}</bdi>.</p>
<h2>۶. فقط مدارک لازم را بفرستید</h2>
<p>برای شروع کار فقط عکس صفحهٔ اول شناسنامه و روی کارت ملی لازم است. مدارک بیشتر را بدون دلیل روشن ندهید.</p>
<h2>۷. شرایط عودت وجه را بپرسید</h2>
<p>بپرسید اگر انتقال انجام نشد پول چه می‌شود. در حج متین: ${refundLine}</p>
<div class="note green"><b>کانال‌های رسمی حج متین:</b> تلفن، واتساپ و بله <bdi dir="ltr">${site.phoneDisplay}</bdi> — اینستاگرام <a href="${site.instagram}" target="_blank" rel="noopener">@hajjematin</a>. اگر کسی با نام حج متین از شمارهٔ دیگری با شما تماس گرفت، پیش از هر اقدامی با همین شماره تأیید بگیرید.</div>
${ctaRow(waGeneral, { where: 'article-safe' })}`,
  },
  {
    slug: 'shahrestan-guide',
    title: 'خرید غیرحضوری فیش حج عمره از شهرستان؛ چه چیزهایی باید بدانید؟',
    description: 'اگر ساکن تهران نیستید، چطور فیش حج عمره را کاملاً غیرحضوری بخرید؟ مدارک لازم، مراحل، زمان تقریبی و نکاتی برای اطمینان بیشتر.',
    summary: 'مدارک، مراحل و نکات اطمینان برای کسانی که ساکن تهران نیستند.',
    published: '2026-10-02',
    body: () => `
<p>بسیاری از خریداران ساکن شهرستان‌ها هستند و می‌پرسند: «آیا بدون سفر به تهران هم می‌شود فیش عمره خرید؟» پاسخ در حج متین بله است؛ برای سایر استان‌ها همهٔ کارها غیرحضوری انجام می‌شود.</p>
<h2>چه مدارکی لازم است؟</h2>
${docsBlock}
<h2>مراحل کار</h2>
${stepsOther}
<h2>چقدر طول می‌کشد؟</h2>
<p>انجام کار و ارسال، حدود ۱ تا ۲ روز کاری است. نرخ امروز فیش سایر استان‌ها ${O} ${CUR} است (به‌روزرسانی ${UPD}).</p>
<h2>برای اطمینان بیشتر چه کار کنید؟</h2>
<ul>
  <li>پیش از واریز، مراحل و شیوهٔ پرداخت را مکتوب در واتساپ یا بله بگیرید.</li>
  <li>شماره حساب را فقط از شمارهٔ رسمی (<bdi dir="ltr">${site.phoneDisplay}</bdi>) دریافت کنید.</li>
  <li>رسید واریز و پیام‌ها را نگه دارید.</li>
  <li>اگر خواستید، پیش از واریز تماس بگیرید و دربارهٔ شرایط عودت وجه بپرسید. ${refundLine}</li>
</ul>
<p>نکات بیشتر را در <a href="${href('/articles/safe-purchase/')}">راهنمای جلوگیری از کلاهبرداری</a> بخوانید.</p>
${ctaRow(waOther, { where: 'article-shahrestan' })}`,
  },
].map((a) => ({ ...a, path: `/articles/${a.slug}/` }));

// ---------- صفحه‌ها ----------
export function pages() {
  const out = [];

  // --- خانه ---
  out.push({
    path: '/',
    title: 'حج متین | خرید و انتقال فیش حج عمره، تهران و سراسر ایران',
    description: `خرید فیش حج عمره از دفتر حج متین (تهران، میدان شهدا). قیمت امروز: تهران ${TM} میلیون و سایر استان‌ها ${OM} میلیون تومان. ارسال مدارک در واتساپ یا بله.`,
    schemas: [orgSchema(), websiteSchema()],
    waMsg: waGeneral,
    body: `
<section class="hero wrap">
  <span class="pill">دفتر حج متین — تهران، ${esc(site.address.street)}</span>
  <h1>خرید و انتقال فیش حج عمره با حج متین</h1>
  <p class="lead">فیش حج عمره را برای تهران حضوری یا غیرحضوری و برای سایر استان‌ها کاملاً غیرحضوری تهیه می‌کنیم. مدارک را در واتساپ یا بله بفرستید؛ مراحل را خودمان پیگیری می‌کنیم و کار حدود ۱ تا ۲ روز کاری طول می‌کشد.</p>
  ${ctaRow(waGeneral, { where: 'hero' })}
</section>

<section class="section wrap" id="pricing">
  <div class="section-head"><h2>قیمت امروز فیش حج عمره</h2><p>به‌روزرسانی: ${UPD}</p></div>
  ${priceCards}
  <div style="margin-top:16px">${priceNote}</div>
</section>

<section class="section wrap">
  <div class="section-head"><h2>مراحل کار چطور است؟</h2><p>خلاصهٔ مسیر خرید؛ جزئیات هر مسیر در صفحهٔ مراحل کار آمده است.</p></div>
  <div class="grid grid-2">
    <div><h3>تهران</h3>${stepsTehran}</div>
    <div><h3>سایر استان‌ها</h3>${stepsOther}</div>
  </div>
  <p style="text-align:center;margin-top:16px"><a class="btn btn-ghost" href="${href('/process/')}">جزئیات مراحل کار</a></p>
</section>

<section class="section wrap">
  <div class="section-head"><h2>مدارک لازم</h2></div>
  <div class="card" style="max-width:520px;margin-inline:auto">${docsBlock}</div>
</section>

<section class="section wrap">
  <div class="section-head"><h2>چرا حج متین؟</h2><p>این موارد را می‌توانید خودتان راستی‌آزمایی کنید.</p></div>
  <div class="card">${trustFacts}</div>
  <p style="text-align:center;margin-top:16px"><a class="btn btn-ghost" href="${href('/about/')}">درباره حج متین و راه‌های تماس</a></p>
</section>

${
  reviews.length
    ? `<section class="section wrap"><div class="section-head"><h2>تجربهٔ خریداران</h2></div><div class="grid grid-2">${reviews
        .map(
          (r) =>
            `<figure class="card" style="margin:0"><blockquote style="margin:0 0 10px">${esc(r.text)}</blockquote><figcaption class="muted small">${esc(r.name)}${r.city ? ' — ' + esc(r.city) : ''}${r.date ? ' — ' + esc(r.date) : ''}</figcaption></figure>`
        )
        .join('')}</div></section>`
    : ''
}

<section class="section wrap">
  <div class="section-head"><h2>پرسش‌های پرتکرار</h2></div>
  ${faqHtml(faqs.slice(0, 5))}
  <p style="text-align:center"><a href="${href('/faq/')}">همهٔ پرسش‌ها</a></p>
</section>

<section class="section wrap">
  <div class="section-head"><h2>مقالات و راهنماها</h2></div>
  <div class="grid grid-3">
    ${articles
      .map(
        (a) =>
          `<a class="card art-card" href="${href(a.path)}"><h3>${esc(a.title)}</h3><p>${esc(a.summary)}</p></a>`
      )
      .join('')}
  </div>
</section>

<section class="section wrap">
  <div class="card" style="text-align:center">
    <h2>آماده‌اید؟ مدارک را بفرستید</h2>
    <p class="muted">عکس صفحهٔ اول شناسنامه و روی کارت ملی؛ بقیه را ما پیگیری می‌کنیم.</p>
    ${ctaRow(waGeneral, { where: 'footer-cta' })}
  </div>
</section>`,
  });

  // --- تهران ---
  out.push({
    path: '/tehran/',
    title: 'خرید فیش حج عمره تهران | قیمت امروز و مراحل | حج متین',
    description: `خرید فیش حج عمره تهران: قیمت امروز ${TM} میلیون تومان. حضوری در دفتر میدان شهدا یا غیرحضوری؛ پرداخت یک‌جا یا بیعانه و تسویه پس از مجوز.`,
    trail: trailOf('فیش حج عمره تهران', '/tehran/'),
    waMsg: waTehran,
    body: `
<section class="hero wrap">
  <h1>خرید فیش حج عمره تهران</h1>
  <p class="lead">اگر ساکن تهران هستید، می‌توانید به دفتر ما در میدان شهدا بیایید یا کار را غیرحضوری انجام دهید. انتقال و گرفتن مجوز حدود ۱ تا ۲ روز کاری طول می‌کشد.</p>
</section>
<section class="section wrap">
  <div class="card price-card" style="max-width:520px;margin-inline:auto">
    <span class="tag">تهران</span>
    <h2 style="margin-top:6px">قیمت امروز</h2>
    <div class="price"><span>فیش حج عمره تهران</span><b>${T}</b><span>${CUR}</span></div>
    <p class="small muted" style="text-align:center">به‌روزرسانی: ${UPD}</p>
    <a class="btn btn-wa btn-block" href="${esc(wa(waTehran))}" target="_blank" rel="noopener" data-cta="whatsapp-tehran-main">درخواست خرید در واتساپ</a>
  </div>
  <div style="margin-top:16px">${priceNote}</div>
</section>
<section class="section wrap">
  <div class="section-head"><h2>مراحل خرید برای تهران</h2></div>
  ${stepsTehran}
</section>
<section class="section wrap">
  <div class="grid grid-2">
    <div class="card"><h3>پرداخت</h3>
      <p>دو حالت وجود دارد:</p>
      <ul><li>پرداخت یک‌جا از همان ابتدا؛</li><li>یا ابتدا بیعانه، و تسویه پس از رسیدن مجوز از سازمان حج و زیارت.</li></ul>
      <p class="small muted" style="margin:0">پول به حساب خود مجموعه واریز می‌شود. شماره حساب را از شمارهٔ رسمی بگیرید.</p>
    </div>
    <div class="card"><h3>مدارک لازم</h3>${docsBlock}</div>
  </div>
</section>
<section class="section wrap">
  <div class="card"><h3>مراجعهٔ حضوری</h3>
    <p>تهران، ${esc(site.address.street)} — ${esc(site.hours.text)}. پیش از آمدن، تماس بگیرید یا در واتساپ پیام بدهید تا هماهنگ کنیم.</p>
    <p style="margin:0"><b>عودت وجه:</b> ${refundLine}</p>
  </div>
  ${ctaRow(waTehran, { where: 'tehran' })}
  <p>می‌خواهید فیش‌های سایر استان‌ها را هم ببینید؟ <a href="${href('/shahrestan/')}">فیش حج عمره شهرستان</a> · <a href="${href('/price/')}">قیمت روز</a></p>
</section>`,
  });

  // --- شهرستان ---
  out.push({
    path: '/shahrestan/',
    title: 'خرید غیرحضوری فیش حج عمره شهرستان | بدون سفر به تهران | حج متین',
    description: `خرید غیرحضوری فیش حج عمره برای سایر استان‌ها: قیمت امروز ${OM} میلیون تومان. مدارک را در واتساپ یا بله بفرستید؛ سند برایتان پست می‌شود.`,
    trail: trailOf('فیش حج عمره شهرستان', '/shahrestan/'),
    waMsg: waOther,
    body: `
<section class="hero wrap">
  <h1>خرید غیرحضوری فیش حج عمره برای شهرستان‌ها</h1>
  <p class="lead">اگر ساکن تهران نیستید، لازم نیست سفر کنید. مدارک را در واتساپ یا بله می‌فرستید، همهٔ کارها را خودمان انجام می‌دهیم و سند برایتان پست می‌شود. انجام کار و ارسال حدود ۱ تا ۲ روز کاری است.</p>
</section>
<section class="section wrap">
  <div class="card price-card alt" style="max-width:520px;margin-inline:auto">
    <span class="tag">سایر استان‌ها</span>
    <h2 style="margin-top:6px">قیمت امروز</h2>
    <div class="price"><span>فیش حج عمره شهرستان</span><b>${O}</b><span>${CUR}</span></div>
    <p class="small muted" style="text-align:center">به‌روزرسانی: ${UPD}</p>
    <a class="btn btn-gold btn-block" href="${esc(wa(waOther))}" target="_blank" rel="noopener" data-cta="whatsapp-shahrestan-main">درخواست خرید در واتساپ</a>
  </div>
  <div style="margin-top:16px">${priceNote}</div>
</section>
<section class="section wrap">
  <div class="section-head"><h2>مراحل خرید برای شهرستان</h2></div>
  ${stepsOther}
</section>
<section class="section wrap">
  <div class="grid grid-2">
    <div class="card"><h3>پرداخت</h3>
      <p>پس از تأیید مدارک، مبلغ به حساب مجموعه واریز می‌شود.</p>
      <p class="small muted" style="margin:0">شماره حساب را فقط از شمارهٔ رسمی (<bdi dir="ltr">${site.phoneDisplay}</bdi>) بگیرید و رسید واریز را نگه دارید.</p>
    </div>
    <div class="card"><h3>مدارک لازم</h3>${docsBlock}</div>
  </div>
</section>
<section class="section wrap">
  <div class="card"><p style="margin:0"><b>عودت وجه:</b> ${refundLine}</p></div>
  ${ctaRow(waOther, { where: 'shahrestan' })}
  <p>راهنمای کامل‌تر: <a href="${href('/articles/shahrestan-guide/')}">خرید غیرحضوری از شهرستان</a> · <a href="${href('/articles/safe-purchase/')}">جلوگیری از کلاهبرداری</a></p>
</section>`,
  });

  // --- قیمت ---
  out.push({
    path: '/price/',
    title: `قیمت فیش حج عمره امروز (${UPD}) | تهران و شهرستان | حج متین`,
    description: `قیمت روز فیش حج عمره: تهران ${TM} میلیون و سایر استان‌ها ${OM} میلیون تومان. آخرین به‌روزرسانی ${UPD}.`,
    trail: trailOf('قیمت روز', '/price/'),
    waMsg: waPrice,
    body: `
<section class="hero wrap">
  <h1>قیمت فیش حج عمره امروز</h1>
  <p class="lead">نرخ روز حج متین؛ آخرین به‌روزرسانی: <b>${UPD}</b></p>
</section>
<section class="section wrap">
  <div class="tbl-wrap"><table>
    <thead><tr><th>نوع خرید</th><th>شیوهٔ انجام</th><th>قیمت</th></tr></thead>
    <tbody>
      <tr><td><a href="${href('/tehran/')}">فیش حج عمره تهران</a></td><td>حضوری یا غیرحضوری</td><td><b>${T}</b> ${CUR}</td></tr>
      <tr><td><a href="${href('/shahrestan/')}">فیش حج عمره سایر استان‌ها</a></td><td>کاملاً غیرحضوری</td><td><b>${O}</b> ${CUR}</td></tr>
    </tbody>
  </table></div>
  <div style="margin-top:16px">${priceNote}</div>
</section>
<section class="section wrap">
  <h2>پرداخت چطور انجام می‌شود؟</h2>
  <ul>
    <li><b>تهران:</b> یک‌جا، یا ابتدا بیعانه و تسویه پس از رسیدن مجوز از سازمان حج و زیارت.</li>
    <li><b>شهرستان:</b> پس از تأیید مدارک، مبلغ به حساب مجموعه واریز می‌شود.</li>
  </ul>
  <p>${refundLine}</p>
  ${ctaRow(waPrice, { where: 'price' })}
  <p>برای مقایسهٔ درست قیمت‌ها، مقالهٔ <a href="${href('/articles/gheymat-fish-hajj-omreh/')}">قیمت فیش حج عمره و نکات مقایسه</a> را بخوانید.</p>
</section>`,
  });

  // --- مراحل ---
  out.push({
    path: '/process/',
    title: 'مراحل خرید و انتقال فیش حج عمره | تهران و شهرستان | حج متین',
    description: 'مراحل گام‌به‌گام خرید فیش حج عمره در حج متین: ارسال مدارک، پرداخت، استعلام سند فروشنده، مجوز سازمان حج و زیارت، تبدیل سند بانکی و تحویل.',
    trail: trailOf('مراحل کار', '/process/'),
    waMsg: waGeneral,
    body: `
<section class="hero wrap">
  <h1>مراحل خرید و انتقال فیش حج عمره</h1>
  <p class="lead">مسیر خرید برای تهران و سایر استان‌ها کمی متفاوت است. هر دو حدود ۱ تا ۲ روز کاری طول می‌کشند.</p>
</section>
<section class="section wrap">
  <h2>اگر ساکن تهران هستید</h2>
  <p>می‌توانید حضوری به دفتر بیایید (تهران، ${esc(site.address.street)}) یا غیرحضوری انجام دهید.</p>
  ${stepsTehran}
</section>
<section class="section wrap">
  <h2>اگر ساکن سایر استان‌ها هستید</h2>
  <p>همهٔ کارها غیرحضوری است و لازم نیست به تهران بیایید.</p>
  ${stepsOther}
</section>
<section class="section wrap">
  <div class="card"><h3>مدارک لازم برای هر دو مسیر</h3>${docsBlock}</div>
  <div class="note green" style="margin-top:16px">${refundLine}</div>
  ${ctaRow(waGeneral, { where: 'process' })}
</section>`,
  });

  // --- پرسش‌ها ---
  out.push({
    path: '/faq/',
    title: 'پرسش‌های متداول خرید فیش حج عمره | حج متین',
    description: 'پاسخ پرسش‌های پرتکرار خریداران: فیش حج عمره چیست، قیمت امروز، مدارک، زمان انتقال، شیوهٔ پرداخت، عودت وجه و خرید غیرحضوری.',
    trail: trailOf('پرسش‌های متداول', '/faq/'),
    schemas: [faqSchema(faqs)],
    waMsg: waGeneral,
    body: `
<section class="hero wrap"><h1>پرسش‌های متداول خریداران</h1></section>
<section class="section wrap">
  ${faqHtml(faqs)}
  <p>پاسخ پرسش‌تان را پیدا نکردید؟ بپرسید:</p>
  ${ctaRow(waGeneral, { where: 'faq' })}
</section>`,
  });

  // --- درباره ---
  out.push({
    path: '/about/',
    title: 'درباره حج متین و راه‌های تماس | دفتر تهران، میدان شهدا',
    description: `اطلاعات تماس و دفتر حج متین: تهران، ${site.address.street}؛ ${site.hours.text}. تلفن و واتساپ ${site.phoneDisplay}.`,
    trail: trailOf('درباره و تماس', '/about/'),
    schemas: [orgSchema()],
    waMsg: waGeneral,
    body: `
<section class="hero wrap">
  <h1>درباره حج متین</h1>
  <p class="lead">حج متین مجموعه‌ای است با ${site.experience} سابقهٔ فعالیت که خرید و انتقال فیش حج عمره را از مسیر دفتر زیارتی، سازمان حج و زیارت و بانک انجام می‌دهد. پاسخگوی شما حاج‌آقا شیرازی متین (حاج‌آقا متین) و همکارانشان هستند.</p>
</section>
<section class="section wrap">
  <div class="card">
    <ul class="facts">
      <li><b>نام</b><span>حج متین</span></li>
      <li><b>آدرس</b><span>تهران، ${esc(site.address.street)}</span></li>
      <li><b>ساعت کاری</b><span>${esc(site.hours.text)}</span></li>
      <li><b>تلفن، واتساپ و بله</b><span><a href="${tel}"><bdi dir="ltr">${site.phoneDisplay}</bdi></a></span></li>
      <li><b>اینستاگرام</b><span><a href="${site.instagram}" target="_blank" rel="noopener">@hajjematin</a> (${site.instagramFollowers} دنبال‌کننده)</span></li>
    </ul>
  </div>
  ${ctaRow(waGeneral, { where: 'about' })}
  <div class="note green">شمارهٔ رسمی و صفحهٔ اینستاگرام بالا تنها کانال‌های رسمی حج متین‌اند. اگر کسی با نام حج متین از شمارهٔ دیگری تماس گرفت، پیش از هر اقدامی با همین شماره تأیید بگیرید.</div>
</section>
<section class="section wrap">
  <h2>خدمات</h2>
  <ul>
    <li><a href="${href('/tehran/')}">خرید فیش حج عمره تهران</a> (حضوری یا غیرحضوری)</li>
    <li><a href="${href('/shahrestan/')}">خرید غیرحضوری فیش حج عمره برای سایر استان‌ها</a></li>
  </ul>
  <p>در حال حاضر تمرکز ما روی فیش حج عمره است. ${refundLine}</p>
</section>`,
  });

  // --- مقالات ---
  out.push({
    path: '/articles/',
    title: 'مقالات و راهنمای خرید فیش حج عمره | حج متین',
    description: 'راهنماهای خرید فیش حج عمره: قیمت روز و نکات مقایسه، جلوگیری از کلاهبرداری و خرید غیرحضوری از شهرستان.',
    trail: trailOf('مقالات', '/articles/'),
    waMsg: waGeneral,
    body: `
<section class="hero wrap"><h1>مقالات و راهنمای خرید</h1></section>
<section class="section wrap">
  <div class="grid grid-3">
    ${articles
      .map(
        (a) =>
          `<a class="card art-card" href="${href(a.path)}"><h2 style="font-size:1.1rem">${esc(a.title)}</h2><p>${esc(a.summary)}</p></a>`
      )
      .join('')}
  </div>
</section>`,
  });

  // --- هر مقاله ---
  for (const a of articles) {
    out.push({
      path: a.path,
      title: `${a.title} | حج متین`,
      description: a.description,
      ogType: 'article',
      trail: [home, { name: 'مقالات', path: '/articles/' }, { name: a.title, path: a.path }],
      schemas: [articleSchema(a)],
      waMsg: waGeneral,
      body: `
<article class="wrap article" style="padding-block:20px 28px">
  <h1>${esc(a.title)}</h1>
  <p class="meta">منتشر شده: ${jalaliFa('1405/07/10')} — حج متین</p>
  ${a.body()}
</article>`,
    });
  }

  return out;
}
