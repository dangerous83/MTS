(function () {
  const themeKey = 'mts-color-theme';
  try {
    if (localStorage.getItem(themeKey) === 'dark') document.documentElement.dataset.theme = 'dark';
  } catch (_) {
    // The site still works when browser storage is unavailable.
  }

  function render() {
    const footer = document.querySelector('[data-site-footer]');
    if (footer) {
      footer.className = 'site-footer';
      footer.innerHTML = `
        <div class="site-footer-inner">
          <div class="site-footer-grid">
            <div class="site-footer-brand"><a href="index.html" aria-label="MTS home"><img src="assets/mts-logo.png" alt="MTS"></a></div>
            <div class="site-footer-column"><strong>SERVICES</strong><a href="customs-warehousing.html">Customs warehousing</a><a href="vehicle-logistics.html">Vehicle logistics</a><a href="container-terminal.html">Container terminal</a><a href="international-freight.html">International freight</a></div>
            <div class="site-footer-column"><strong>COMPANY</strong><a href="about.html">About us</a><a href="classic-cars.html">Classic & premium cars</a><a href="destinations.html">Destinations</a><a href="news.html">News</a><a href="contact.html">Contact</a></div>
            <div class="site-footer-column site-footer-contact"><strong>GET IN TOUCH</strong><a href="tel:+494081978530">+49 (0)40 819 78 530</a><a href="mailto:info@mtsonline.de">info@mtsonline.de</a><address>Billstrasse 158<br>20539 Hamburg, Germany</address><div class="site-social" aria-label="Social media"><a href="https://www.instagram.com/mts_gmbh?igshid=8u4w9e23s97k" target="_blank" rel="noopener noreferrer" aria-label="MTS on Instagram" title="Instagram"><img src="assets/icons/instagram.svg" alt=""></a><a href="https://www.facebook.com/mtshamburg/" target="_blank" rel="noopener noreferrer" aria-label="MTS on Facebook" title="Facebook"><img src="assets/icons/facebook.svg" alt=""></a><a href="https://www.youtube.com/channel/UCoRZqOU6EyD5YDcyQ8VnFCQ?view_as=subscriber" target="_blank" rel="noopener noreferrer" aria-label="MTS on YouTube" title="YouTube"><img src="assets/icons/youtube.svg" alt=""></a></div></div>
          </div>
          <div class="site-footer-bottom"><span>© ${new Date().getFullYear()} Mangal Transport & Shipping GmbH</span><span>Hamburg, Germany</span></div>
        </div>`;
    }

    const nav = document.querySelector('.hm-nav, .nav');
    const quote = nav?.querySelector('.hm-nav-cta, .quote');
    if (!nav || !quote) return;
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

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render, { once: true });
  else render();
})();
