
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('show');
  });

  // Optional: Close menu when a nav link is clicked (good for UX)
  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
