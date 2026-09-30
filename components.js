(function () {
  const themeKey = 'mts-color-theme';
  const langKey = 'mts-lang';

  const T = {
    en: {
      // Top utility bar
      'top.phone': '+49 (0)40 819 78 530',
      'top.email': 'info@mtsonline.de',
      'top.downloads': 'Downloads',
      'top.follow': 'Follow us',
      // Nav
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.classic': 'Classic & Premium Cars',
      'nav.destinations': 'Destinations',
      'nav.about': 'About Us',
      'nav.news': 'News',
      'nav.contact': 'Contact',
      'nav.quote': 'Request a quote',
      // Downloads modal
      'dl.title': 'Downloads',
      'dl.subtitle': 'Documents you may need when working with MTS. Click any card to download the PDF.',
      'dl.close': 'Close',
      'dl.adsp.title': 'ADSp — German Freight Forwarders&#39; Standard Terms &amp; Conditions',
      'dl.adsp.desc': 'The 2003 English edition of the ADSp, the standard terms under which we contract as a German freight forwarder.',
      'dl.order.title': 'MTS Transport Order Form',
      'dl.order.desc': 'Proforma invoice / Auftragformular for vehicle transport orders. Print, fill in and return with your enquiry.',
      'dl.incoterms.title': 'Incoterms® 2010 — Overview',
      'dl.incoterms.desc': 'One-page reference chart of Incoterms® 2010 clauses, transport modes and the point where risk and cost pass.',
      'dl.download': 'Download PDF',
      'dl.pages': 'pages',
      'dl.page': 'page',
      // Footer
      'ft.services': 'SERVICES',
      'ft.company': 'COMPANY',
      'ft.contact': 'GET IN TOUCH',
      'ft.customs': 'Customs warehousing',
      'ft.vehicle': 'Vehicle logistics',
      'ft.container': 'Container terminal',
      'ft.freight': 'International freight',
      'ft.classic': 'Classic & premium cars',
      'ft.address': 'Billstrasse 158<br>20539 Hamburg, Germany',
      'ft.rights': '© {year} Mangal Transport & Shipping GmbH',
      'ft.city': 'Hamburg, Germany',
    },
    de: {
      'top.phone': '+49 (0)40 819 78 530',
      'top.email': 'info@mtsonline.de',
      'top.downloads': 'Downloads',
      'top.follow': 'Folgen Sie uns',
      'nav.home': 'Startseite',
      'nav.services': 'Leistungen',
      'nav.classic': 'Oldtimer & Premiumfahrzeuge',
      'nav.destinations': 'Destinationen',
      'nav.about': 'Über uns',
      'nav.news': 'Aktuelles',
      'nav.contact': 'Kontakt',
      'nav.quote': 'Angebot anfordern',
      'dl.title': 'Downloads',
      'dl.subtitle': 'Dokumente, die Sie in der Zusammenarbeit mit MTS benötigen. Klicken Sie auf eine Karte, um das PDF herunterzuladen.',
      'dl.close': 'Schließen',
      'dl.adsp.title': 'ADSp — Allgemeine Deutsche Spediteurbedingungen',
      'dl.adsp.desc': 'Die englische Fassung 2003 der ADSp — Grundlage unserer Speditionsverträge.',
      'dl.order.title': 'MTS Transportauftrag',
      'dl.order.desc': 'Auftragformular / Proforma Invoice für Fahrzeugtransporte. Ausdrucken, ausfüllen und Ihrer Anfrage beilegen.',
      'dl.incoterms.title': 'Incoterms® 2010 — Übersicht',
      'dl.incoterms.desc': 'Einseitige Übersicht der Incoterms® 2010: Klauseln, Transportarten sowie der Gefahren- und Kostenübergang.',
      'dl.download': 'PDF herunterladen',
      'dl.pages': 'Seiten',
      'dl.page': 'Seite',
      'ft.services': 'LEISTUNGEN',
      'ft.company': 'UNTERNEHMEN',
      'ft.contact': 'KONTAKT',
      'ft.customs': 'Zolllager',
      'ft.vehicle': 'Fahrzeuglogistik',
      'ft.container': 'Container-Terminal',
      'ft.freight': 'Internationale Spedition',
      'ft.classic': 'Oldtimer & Premiumfahrzeuge',
      'ft.address': 'Billstrasse 158<br>20539 Hamburg, Deutschland',
      'ft.rights': '© {year} Mangal Transport & Shipping GmbH',
      'ft.city': 'Hamburg, Deutschland',
    },
  };

  let currentLang = 'en';
  try {
    const saved = localStorage.getItem(langKey);
    if (saved === 'de' || saved === 'en') currentLang = saved;
    else if ((navigator.language || '').toLowerCase().startsWith('de')) currentLang = 'de';
  } catch (_) {}

  try {
    if (localStorage.getItem(themeKey) === 'dark') document.documentElement.dataset.theme = 'dark';
  } catch (_) {}

  function tr(key) {
    return (T[currentLang] && T[currentLang][key]) || (T.en[key] || key);
  }

  function applyTranslations() {
    document.documentElement.lang = currentLang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const raw = T[currentLang]?.[key];
      if (raw !== undefined) el.innerHTML = raw;
      else if (T.en[key] !== undefined) el.innerHTML = T.en[key];
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      // format: "attr:key;attr2:key2"
      el.getAttribute('data-i18n-attr').split(';').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (!attr || !key) return;
        const val = (T[currentLang] && T[currentLang][key]) || T.en[key];
        if (val !== undefined) el.setAttribute(attr, val.replace(/<[^>]+>/g, ''));
      });
    });
    document.querySelectorAll('.mts-lang-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.lang === currentLang);
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === currentLang));
    });
  }

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'de') return;
    currentLang = lang;
    try { localStorage.setItem(langKey, lang); } catch (_) {}
    applyTranslations();
    renderTopbar();
    renderFooter();
  }

  function renderTopbar() {
    let bar = document.querySelector('.mts-topbar');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'mts-topbar';
      document.body.insertBefore(bar, document.body.firstChild);
    }
    bar.innerHTML = `
      <div class="mts-topbar-inner">
        <div class="mts-topbar-contact">
          <a href="tel:+494081978530"><img src="assets/icons/phone-call.svg" alt=""><span>${tr('top.phone')}</span></a>
          <a href="mailto:info@mtsonline.de"><img src="assets/icons/mail.svg" alt=""><span>${tr('top.email')}</span></a>
        </div>
        <div class="mts-topbar-actions">
          <div class="mts-topbar-social" aria-label="${tr('top.follow')}">
            <a href="https://www.instagram.com/mts_gmbh?igshid=8u4w9e23s97k" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><img src="assets/icons/instagram.svg" alt=""></a>
            <a href="https://www.facebook.com/mtshamburg/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"><img src="assets/icons/facebook.svg" alt=""></a>
            <a href="https://www.youtube.com/channel/UCoRZqOU6EyD5YDcyQ8VnFCQ?view_as=subscriber" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube"><img src="assets/icons/youtube.svg" alt=""></a>
          </div>
          <button type="button" class="mts-topbar-downloads" data-downloads-open>
            <img src="assets/icons/file-text.svg" alt=""><span>${tr('top.downloads')}</span>
          </button>
          <div class="mts-topbar-lang" role="group" aria-label="Language">
            <button type="button" class="mts-lang-btn" data-lang="en" aria-pressed="${currentLang==='en'}">EN</button>
            <span aria-hidden="true">/</span>
            <button type="button" class="mts-lang-btn" data-lang="de" aria-pressed="${currentLang==='de'}">DE</button>
          </div>
        </div>
      </div>`;
    bar.querySelectorAll('.mts-lang-btn').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
    bar.querySelector('[data-downloads-open]').addEventListener('click', openDownloads);
  }

  function renderDownloadsModal() {
    if (document.querySelector('.mts-dl-dialog')) return;
    const dlg = document.createElement('dialog');
    dlg.className = 'mts-dl-dialog';
    dlg.innerHTML = `
      <form method="dialog" class="mts-dl-inner">
        <header class="mts-dl-head">
          <div><span class="eyebrow" style="color:#377c89">MTS · PDF</span><h2 data-i18n="dl.title">${tr('dl.title')}</h2><p data-i18n="dl.subtitle">${tr('dl.subtitle')}</p></div>
          <button type="submit" class="mts-dl-close" aria-label="${tr('dl.close')}" value="close">✕</button>
        </header>
        <div class="mts-dl-grid">
          <a class="mts-dl-card" href="assets/downloads/ADSp-2003-english.pdf" download>
            <span class="mts-dl-icon"><img src="assets/icons/file-text.svg" alt=""></span>
            <span class="mts-dl-meta"><small>PDF · 12 <span data-i18n="dl.pages">${tr('dl.pages')}</span> · 50 KB</small></span>
            <h3 data-i18n="dl.adsp.title">${tr('dl.adsp.title')}</h3>
            <p data-i18n="dl.adsp.desc">${tr('dl.adsp.desc')}</p>
            <span class="mts-dl-cta" data-i18n="dl.download">${tr('dl.download')}</span>
          </a>
          <a class="mts-dl-card" href="assets/downloads/MTS-transport-order-form.pdf" download>
            <span class="mts-dl-icon"><img src="assets/icons/file-text.svg" alt=""></span>
            <span class="mts-dl-meta"><small>PDF · 1 <span data-i18n="dl.page">${tr('dl.page')}</span> · 58 KB</small></span>
            <h3 data-i18n="dl.order.title">${tr('dl.order.title')}</h3>
            <p data-i18n="dl.order.desc">${tr('dl.order.desc')}</p>
            <span class="mts-dl-cta" data-i18n="dl.download">${tr('dl.download')}</span>
          </a>
          <a class="mts-dl-card" href="assets/downloads/Incoterms-2010.pdf" download>
            <span class="mts-dl-icon"><img src="assets/icons/file-text.svg" alt=""></span>
            <span class="mts-dl-meta"><small>PDF · 1 <span data-i18n="dl.page">${tr('dl.page')}</span> · 9 KB</small></span>
            <h3 data-i18n="dl.incoterms.title">${tr('dl.incoterms.title')}</h3>
            <p data-i18n="dl.incoterms.desc">${tr('dl.incoterms.desc')}</p>
            <span class="mts-dl-cta" data-i18n="dl.download">${tr('dl.download')}</span>
          </a>
        </div>
      </form>`;
    document.body.appendChild(dlg);
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  }

  function openDownloads() {
    renderDownloadsModal();
    const dlg = document.querySelector('.mts-dl-dialog');
    if (typeof dlg.showModal === 'function') dlg.showModal();
    else dlg.setAttribute('open', '');
    applyTranslations();
  }

  function renderFooter() {
    const footer = document.querySelector('[data-site-footer]');
    if (!footer) return;
    footer.className = 'site-footer';
    footer.innerHTML = `
      <div class="site-footer-inner">
        <div class="site-footer-grid">
          <div class="site-footer-brand"><a href="index.html" aria-label="MTS home"><img src="assets/mts-logo.png" alt="MTS"></a></div>
          <div class="site-footer-column"><strong>${tr('ft.services')}</strong><a href="customs-warehousing.html">${tr('ft.customs')}</a><a href="vehicle-logistics.html">${tr('ft.vehicle')}</a><a href="container-terminal.html">${tr('ft.container')}</a><a href="international-freight.html">${tr('ft.freight')}</a></div>
          <div class="site-footer-column"><strong>${tr('ft.company')}</strong><a href="about.html">${tr('nav.about')}</a><a href="classic-cars.html">${tr('ft.classic')}</a><a href="destinations.html">${tr('nav.destinations')}</a><a href="news.html">${tr('nav.news')}</a><a href="contact.html">${tr('nav.contact')}</a></div>
          <div class="site-footer-column site-footer-contact"><strong>${tr('ft.contact')}</strong><a href="tel:+494081978530">+49 (0)40 819 78 530</a><a href="mailto:info@mtsonline.de">info@mtsonline.de</a><address>${tr('ft.address')}</address><div class="site-social" aria-label="Social media"><a href="https://www.instagram.com/mts_gmbh?igshid=8u4w9e23s97k" target="_blank" rel="noopener noreferrer" aria-label="MTS on Instagram" title="Instagram"><img src="assets/icons/instagram.svg" alt=""></a><a href="https://www.facebook.com/mtshamburg/" target="_blank" rel="noopener noreferrer" aria-label="MTS on Facebook" title="Facebook"><img src="assets/icons/facebook.svg" alt=""></a><a href="https://www.youtube.com/channel/UCoRZqOU6EyD5YDcyQ8VnFCQ?view_as=subscriber" target="_blank" rel="noopener noreferrer" aria-label="MTS on YouTube" title="YouTube"><img src="assets/icons/youtube.svg" alt=""></a></div></div>
        </div>
        <div class="site-footer-bottom"><span>${tr('ft.rights').replace('{year}', new Date().getFullYear())}</span><span>${tr('ft.city')}</span></div>
      </div>`;
  }

  function renderThemeToggle() {
    const nav = document.querySelector('.hm-nav, .nav');
    const quote = nav?.querySelector('.hm-nav-cta, .quote');
    if (!nav || !quote || nav.querySelector('.site-theme-toggle')) return;
    const button = document.createElement('button');
    button.className = 'site-theme-toggle';
    button.type = 'button';
    button.innerHTML = '<img class="theme-moon" src="assets/icons/moon.svg" alt=""><img class="theme-sun" src="assets/icons/sun.svg" alt="">';
    const sync = () => {
      const dark = document.documentElement.dataset.theme === 'dark';
      button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
      button.setAttribute('aria-pressed', String(dark));
      button.title = dark ? 'Light mode' : 'Dark mode';
    };
    sync();
    button.addEventListener('click', () => {
      const dark = document.documentElement.dataset.theme !== 'dark';
      if (dark) document.documentElement.dataset.theme = 'dark';
      else delete document.documentElement.dataset.theme;
      try { localStorage.setItem(themeKey, dark ? 'dark' : 'light'); } catch (_) {}
      sync();
    });
    quote.before(button);
  }

  function render() {
    renderTopbar();
    renderFooter();
    renderThemeToggle();
    renderDownloadsModal();
    applyTranslations();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render, { once: true });
  else render();
})();
