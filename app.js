const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuButton?.setAttribute('aria-label', 'Open navigation');
menuButton?.setAttribute('aria-expanded', 'false');
menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('[data-form]').forEach(form => {
  const name = form.querySelector('input[placeholder="Your name"]');
  const email = form.querySelector('input[type="email"]');
  name?.setAttribute('required', '');
  email?.setAttribute('required', '');

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const details = [...form.querySelectorAll('input, select, textarea')]
      .filter(field => field.value && field.type !== 'checkbox' && (field.type !== 'radio' || field.checked) && !(field.tagName === 'SELECT' && field.selectedIndex === 0))
      .map(field => {
        const label = field.name === 'service' || field.tagName === 'SELECT' ? 'Service' : field.closest('label')?.textContent.trim() || field.placeholder || 'Details';
        return `${label}: ${field.value}`;
      })
      .join('\n');
    const subject = document.title.includes('Classic')
      ? 'MTS classic car shipping enquiry'
      : 'MTS shipping enquiry';
    window.location.href = `mailto:info@mtsonline.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(details)}`;
  });
});

document.body.insertAdjacentHTML('beforeend', `
  <aside class="mts-floating" aria-label="Quick contact options">
    <button class="mts-guide-toggle" type="button" aria-label="Open MTS shipment guide" aria-expanded="false" aria-controls="mts-guide-panel" title="Shipment guide"><img src="assets/icons/bot-message-square.svg" alt=""><span>Ask MTS</span></button>
    <div class="mts-guide-panel" id="mts-guide-panel" hidden>
      <div class="mts-guide-head"><strong>MTS shipment guide</strong><button type="button" class="mts-guide-close" aria-label="Close guide"><img src="assets/icons/x.svg" alt=""></button></div>
      <p>What can we help you move?</p>
      <div class="mts-guide-options"><a href="customs-warehousing.html">Customs cargo</a><a href="vehicle-logistics.html">A vehicle</a><a href="container-terminal.html">A container</a><a href="international-freight.html">Other freight</a></div>
      <a class="mts-guide-quote" href="contact.html">Request a quote &rarr;</a>
    </div>
  </aside>
`);

const guideToggle = document.querySelector('.mts-guide-toggle');
const guidePanel = document.querySelector('.mts-guide-panel');
function setGuideOpen(open) {
  guidePanel.hidden = !open;
  guideToggle.setAttribute('aria-expanded', String(open));
  guideToggle.setAttribute('aria-label', open ? 'Close MTS shipment guide' : 'Open MTS shipment guide');
}
guideToggle.addEventListener('click', () => setGuideOpen(guidePanel.hidden));
document.querySelector('.mts-guide-close').addEventListener('click', () => setGuideOpen(false));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setGuideOpen(false);
});

const pageHero = document.querySelector('.page-hero');
if (pageHero && !pageHero.querySelector('.contact-hero-next')) {
  const nextSection = pageHero.nextElementSibling;
  if (nextSection) {
    if (!nextSection.id) nextSection.id = 'page-content';
    const nextTitle = nextSection.querySelector('h2')?.textContent.trim() || 'Explore more';
    const cue = document.createElement('a');
    cue.className = 'page-hero-next';
    cue.href = `#${nextSection.id}`;
    const label = document.createElement('span');
    label.textContent = nextTitle;
    const arrow = document.createElement('span');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↓';
    cue.append(label, arrow);
    pageHero.append(cue);
  }
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const quoteForm = document.querySelector('[data-form]');
if (quoteForm && 'IntersectionObserver' in window) {
  new IntersectionObserver(entries => {
    document.querySelector('.mts-floating').classList.toggle('is-suppressed', entries[0].isIntersecting);
  }, { threshold: 0 }).observe(quoteForm);
}
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const targets = [...document.querySelectorAll('main > section:not(.page-hero), .contact-path, .contact-form, .contact-location img, .service-card, .region, .news-item, .process > div')];
  document.documentElement.classList.add('has-scroll-motion');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
  targets.forEach(target => {
    target.classList.add('scroll-reveal');
    observer.observe(target);
  });
}
