const menuButton = document.querySelector('.hm-menu-toggle');
const menu = document.querySelector('.hm-menu');

menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const slides = [
  { kicker: '01 / HAMBURG LOGISTICS HUB', title: 'Your customs, container and vehicle hub in the Port of Hamburg.', copy: 'One Hamburg team for the careful handling and worldwide movement of your cargo.' },
  { kicker: '02 / VEHICLE LOGISTICS', title: 'Careful handling for vehicles with places to go.', copy: 'Secure container loading and export coordination for everyday, classic and premium vehicles.' },
  { kicker: '03 / INTERNATIONAL FREIGHT', title: 'Hamburg connections to the world.', copy: 'Sea, air, road and rail options planned around your cargo and destination.' },
];
const hero = document.querySelector('.hm-hero');
const slideElements = [...document.querySelectorAll('.hm-slide')];
const slideButtons = [...document.querySelectorAll('[data-go]')];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let activeSlide = 0;
let timer;

function setSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  slideElements.forEach((slide, n) => {
    const active = n === activeSlide;
    slide.classList.toggle('is-active', active);
    slide.setAttribute('aria-hidden', String(!active));
  });
  slideButtons.forEach((button, n) => {
    button.classList.toggle('is-active', n === activeSlide);
    button.setAttribute('aria-current', n === activeSlide ? 'true' : 'false');
  });
  document.querySelector('#hero-kicker').textContent = slides[activeSlide].kicker;
  document.querySelector('#hero-title').textContent = slides[activeSlide].title;
  document.querySelector('#hero-copy').textContent = slides[activeSlide].copy;
  document.querySelector('#slide-count').innerHTML = `0${activeSlide + 1} <span>/ 03</span>`;
}

function startSlider() {
  if (reduceMotion.matches || document.hidden) return;
  clearInterval(timer);
  timer = setInterval(() => setSlide(activeSlide + 1), 7000);
}

function moveSlide(index) {
  setSlide(index);
  startSlider();
}

slideButtons.forEach((button, n) => button.addEventListener('click', () => moveSlide(n)));
document.querySelector('#slide-prev').addEventListener('click', () => moveSlide(activeSlide - 1));
document.querySelector('#slide-next').addEventListener('click', () => moveSlide(activeSlide + 1));
hero.addEventListener('mouseenter', () => clearInterval(timer));
hero.addEventListener('mouseleave', startSlider);
hero.addEventListener('focusin', () => clearInterval(timer));
hero.addEventListener('focusout', startSlider);
document.addEventListener('visibilitychange', () => document.hidden ? clearInterval(timer) : startSlider());
reduceMotion.addEventListener('change', () => reduceMotion.matches ? clearInterval(timer) : startSlider());
startSlider();

const revealElements = [...document.querySelectorAll('.hm-reveal')];
if (reduceMotion.matches || !('IntersectionObserver' in window)) {
  revealElements.forEach(element => element.classList.add('is-visible'));
} else {
  document.documentElement.classList.add('hm-motion');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealElements.forEach(element => observer.observe(element));
}

document.querySelector('#lead-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `MTS quote request: ${data.get('service')}`;
  const message = [
    `Service: ${data.get('service')}`,
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Phone: ${data.get('phone') || 'Not provided'}`,
    `From: ${data.get('origin') || 'Not specified'}`,
    `To: ${data.get('destination') || 'Not specified'}`,
    '',
    'Shipment details:',
    data.get('details') || 'Not specified',
  ].join('\n');
  window.location.href = `mailto:info@mtsonline.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
});

const guide = document.querySelector('.hm-guide');
const guidePanel = guide.querySelector('.hm-guide-panel');
const guideToggle = guide.querySelector('.hm-guide-toggle');
if ('IntersectionObserver' in window) {
  new IntersectionObserver(entries => {
    guide.classList.toggle('is-ready', !entries[0].isIntersecting);
  }, { threshold: 0 }).observe(hero);
} else {
  guide.classList.add('is-ready');
}
function setGuideOpen(open) {
  guidePanel.hidden = !open;
  guideToggle.setAttribute('aria-expanded', String(open));
  guideToggle.setAttribute('aria-label', open ? 'Close shipment guide' : 'Open shipment guide');
}
guideToggle.addEventListener('click', () => setGuideOpen(guidePanel.hidden));
guide.querySelector('.hm-guide-close').addEventListener('click', () => setGuideOpen(false));
guide.querySelectorAll('[data-service]').forEach(button => button.addEventListener('click', () => {
  guide.querySelectorAll('[data-service]').forEach(option => option.classList.remove('is-selected'));
  button.classList.add('is-selected');
  const service = button.dataset.service;
  const form = document.querySelector('#lead-form');
  form.elements.service.value = service;
  guide.querySelector('.hm-guide-result').innerHTML = `We can help with ${service.toLowerCase()}. <a href="#quote">Continue to the quote form →</a>`;
}));
guide.querySelector('.hm-guide-result').addEventListener('click', event => {
  if (event.target.closest('a')) setGuideOpen(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setGuideOpen(false);
});
