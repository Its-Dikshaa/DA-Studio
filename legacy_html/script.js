const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.mobile-menu a');

function toggleMenu(force) {
  const open = typeof force === 'boolean' ? force : !menuButton.classList.contains('is-open');
  menuButton.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  mobileMenu.classList.toggle('is-open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  document.body.style.overflow = open ? 'hidden' : '';
}

menuButton?.addEventListener('click', () => toggleMenu());
navLinks.forEach((link) => link.addEventListener('click', () => toggleMenu(false)));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  if (glow && event.pointerType === 'mouse') {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('lead-form');
if (form) {
const status = form.querySelector('.form-status');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    status.textContent = 'A few required details are missing.';
    status.className = 'form-status error';
    return;
  }
  const submit = form.querySelector('button[type="submit"]');
  submit.disabled = true;
  submit.innerHTML = 'Sending <span>…</span>';
  const data = new URLSearchParams(new FormData(form)).toString();
  try {
    // Netlify captures submissions automatically after deployment. Static previews use the same polished success state.
    if (location.protocol !== 'file:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
      const response = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: data });
      if (!response.ok) throw new Error('Form service unavailable');
    }
    form.reset();
    status.textContent = 'Lovely. Your note is on its way — we’ll reply in 1–2 working days.';
    status.className = 'form-status success';
  } catch (error) {
    status.textContent = 'Could not send this just now. Please email hello@da-studio.in instead.';
    status.className = 'form-status error';
  } finally {
    submit.disabled = false;
    submit.innerHTML = 'Send it over <span>↗</span>';
  }
});
}
