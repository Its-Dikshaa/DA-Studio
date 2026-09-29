const currentPage = document.body.dataset.page || '';
const links = [
  ['work.html', 'Work', 'work'],
  ['services.html', 'Services', 'services'],
  ['about.html', 'About', 'about'],
];

const header = document.querySelector('[data-site-header]');
const footer = document.querySelector('[data-site-footer]');
const menu = document.querySelector('[data-mobile-menu]');

const navMarkup = links.map(([url, label, key]) => `<a ${currentPage === key ? 'aria-current="page"' : ''} href="${url}">${label}</a>`).join('');

if (header) {
  header.innerHTML = `
    <a class="brand" href="index.html" aria-label="DA home"><span>DA</span><span class="brand-flower" aria-hidden="true">✺</span></a>
    <nav class="desktop-nav" aria-label="Main navigation">${navMarkup}</nav>
    <a class="header-cta" href="contact.html">Let's talk <span aria-hidden="true">↗</span></a>
    <button class="menu-toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu"><span></span><span></span></button>`;
}

if (menu) {
  menu.innerHTML = `<nav aria-label="Mobile navigation">
    ${links.map(([url, label, key], index) => `<a ${currentPage === key ? 'aria-current="page"' : ''} href="${url}">${label}<span>0${index + 1}</span></a>`).join('')}
    <a href="contact.html">Start a project <span>04</span></a>
  </nav>`;
}

if (footer) {
  footer.innerHTML = `
    <div class="footer-top"><a class="brand" href="index.html" aria-label="Back to home">DA<span class="brand-flower" aria-hidden="true">✺</span></a><p>Design and development with<br />a little more feeling.</p><a class="footer-up" href="#top" aria-label="Back to top">↑</a></div>
    <div class="footer-bottom"><span>© <span id="year"></span> DA🌻</span><div><a href="#" aria-label="Instagram placeholder">Instagram</a><a href="#" aria-label="LinkedIn placeholder">LinkedIn</a><a href="#" aria-label="Behance placeholder">Behance</a></div><span>Made with intent in India</span></div>`;
}
