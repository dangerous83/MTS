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

const memberSet = document.querySelector('.hm-members-set');
if (memberSet) {
  const duplicate = memberSet.cloneNode(true);
  duplicate.setAttribute('aria-hidden', 'true');
  duplicate.querySelectorAll('img').forEach(img => img.alt = '');
  memberSet.parentElement.append(duplicate);
  memberSet.parentElement.classList.add('is-looping');
}

const slides = [
  { kicker: '01 / HAMBURG LOGISTICS HUB', title: 'Your customs, container and vehicle hub in the Port of Hamburg.', copy: 'One Hamburg team for the careful handling and worldwide movement of your cargo.' },
  { kicker: '02 / VEHICLE LOGISTICS', title: 'Careful handling for vehicles with places to go.', copy: 'Secure container loading and export coordination for everyday, classic and premium vehicles.' },
  { kicker: '03 / INTERNATIONAL FREIGHT', title: 'Hamburg connections to the world.', copy: 'Sea, air, road and rail options planned around your cargo and destination.' },
];
const hero = document.querySelector('.hm-hero');
const heroContent = document.querySelector('.hm-hero-content');
const slideElements = [...document.querySelectorAll('.hm-slide')];
const slideButtons = [...document.querySelectorAll('[data-go]')];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function startHeroParticles() {
  const canvas = hero.querySelector('.hm-hero-particles');
  const context = canvas?.getContext('2d');
  if (!context) return;
  let width = 0;
  let height = 0;
  let particles = [];
  let frame = 0;
  let visible = true;

  function resize() {
    width = hero.clientWidth;
    height = hero.clientHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    let seed = 73453;
    const random = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
    particles = Array.from({ length: Math.min(100, Math.max(25, Math.round(width / 18))) }, () => ({
      x: random(),
      y: random(),
      phase: random() * Math.PI * 2,
      speed: 10 + random() * 19,
      sway: 8 + random() * 24,
      radius: .7 + random() * 1.6,
      alpha: .18 + random() * .38,
    }));
  }

  function draw(seconds) {
    context.clearRect(0, 0, width, height);
    particles.forEach(particle => {
      const x = ((particle.x * (width + 80) + seconds * particle.speed) % (width + 80)) - 40;
      const y = height * (.18 + particle.y * .67) + Math.sin(seconds * .55 + particle.phase + x * .008) * particle.sway;
      const alpha = particle.alpha * (x < width * .43 ? .46 : 1);
      context.strokeStyle = `rgba(171,226,244,${alpha * .42})`;
      context.lineWidth = .8;
      context.beginPath();
      context.moveTo(x - 9, y + 2);
      context.lineTo(x, y);
      context.stroke();
      context.fillStyle = `rgba(223,248,255,${alpha})`;
      context.beginPath();
      context.arc(x, y, particle.radius, 0, Math.PI * 2);
      context.fill();
    });
  }

  function animate(time) {
    draw(time / 1000);
    frame = requestAnimationFrame(animate);
  }

  function sync() {
    cancelAnimationFrame(frame);
    draw(0);
    if (visible && !document.hidden && !reduceMotion.matches) frame = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => { resize(); sync(); }, { passive: true });
  document.addEventListener('visibilitychange', sync);
  reduceMotion.addEventListener('change', sync);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      sync();
    }, { threshold: 0 }).observe(hero);
  }
  resize();
  sync();
}
startHeroParticles();

let activeSlide = 0;
let timer;
let transitionTimer;

function setSlide(index) {
  const nextSlide = (index + slides.length) % slides.length;
  if (nextSlide === activeSlide) return;
  clearTimeout(transitionTimer);
  const previous = slideElements[activeSlide];
  const incoming = slideElements[nextSlide];
  slideElements.forEach(slide => slide.classList.remove('is-entering', 'is-exiting'));
  previous.classList.add('is-exiting');
  incoming.classList.add('is-entering');
  activeSlide = nextSlide;
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
  heroContent.classList.remove('is-animating');
  void heroContent.offsetWidth;
  heroContent.classList.add('is-animating');
  transitionTimer = setTimeout(() => {
    previous.classList.remove('is-exiting');
    incoming.classList.remove('is-entering');
    heroContent.classList.remove('is-animating');
  }, 1300);
}

function startSlider() {
  if (reduceMotion.matches || document.hidden) return;
  hero.classList.remove('is-paused');
  clearInterval(timer);
  timer = setInterval(() => setSlide(activeSlide + 1), 7000);
}

function pauseSlider() {
  clearInterval(timer);
  hero.classList.add('is-paused');
}

function moveSlide(index) {
  setSlide(index);
  startSlider();
}

slideButtons.forEach((button, n) => button.addEventListener('click', () => moveSlide(n)));
document.querySelector('#slide-prev').addEventListener('click', () => moveSlide(activeSlide - 1));
document.querySelector('#slide-next').addEventListener('click', () => moveSlide(activeSlide + 1));
hero.addEventListener('mouseenter', pauseSlider);
hero.addEventListener('mouseleave', startSlider);
hero.addEventListener('focusin', pauseSlider);
hero.addEventListener('focusout', startSlider);
document.addEventListener('visibilitychange', () => document.hidden ? pauseSlider() : startSlider());
reduceMotion.addEventListener('change', () => reduceMotion.matches ? pauseSlider() : startSlider());
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
const floatStack = document.querySelector('.hm-float-stack');
const guidePanel = guide.querySelector('.hm-guide-panel');
const guideToggle = guide.querySelector('.hm-guide-toggle');
if ('IntersectionObserver' in window) {
  new IntersectionObserver(entries => {
    floatStack.classList.toggle('is-suppressed', entries[0].isIntersecting);
  }, { threshold: 0 }).observe(document.querySelector('#lead-form'));
}
function setGuideOpen(open) {
  guidePanel.hidden = !open;
  guideToggle.setAttribute('aria-expanded', String(open));
  guideToggle.setAttribute('aria-label', open ? 'Close MTS shipment guide' : 'Open MTS shipment guide');
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
