const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!isExpanded));
  navMenu.classList.toggle('show');
});

// Close nav menu when a link is clicked (mobile UX)
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});
