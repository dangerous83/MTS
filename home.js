const memberSet = document.querySelector('.hm-members-set');
if (memberSet) {
  const duplicate = memberSet.cloneNode(true);
  duplicate.setAttribute('aria-hidden', 'true');
  duplicate.querySelectorAll('img').forEach(img => img.alt = '');
  memberSet.parentElement.append(duplicate);
  memberSet.parentElement.classList.add('is-looping');
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

