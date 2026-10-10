const memberSet = document.querySelector('.hm-members-set');
if (memberSet) {
  const duplicate = memberSet.cloneNode(true);
  duplicate.setAttribute('aria-hidden', 'true');
  duplicate.querySelectorAll('img').forEach(img => img.alt = '');
  memberSet.parentElement.append(duplicate);
  memberSet.parentElement.classList.add('is-looping');
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

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

