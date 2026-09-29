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
      .filter(field => field.value && !(field.tagName === 'SELECT' && field.selectedIndex === 0))
      .map(field => `${field.placeholder || 'Service'}: ${field.value}`)
      .join('\n');
    const subject = document.title.includes('Classic')
      ? 'MTS classic car shipping enquiry'
      : 'MTS shipping enquiry';
    window.location.href = `mailto:info@mtsonline.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(details)}`;
  });
});

document.body.insertAdjacentHTML('beforeend', `
  <aside class="mts-floating" aria-label="Quick contact options">
    <a class="mts-whatsapp" href="https://wa.me/494081978530?text=Hello%20MTS%2C%20I%20would%20like%20a%20shipping%20quote." target="_blank" rel="noopener noreferrer" aria-label="Chat with MTS on WhatsApp" title="WhatsApp"><img src="assets/icons/whatsapp.svg" alt=""><span>WhatsApp</span></a>
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
