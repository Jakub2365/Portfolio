document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  function checkSections() {
    const triggerBottom = window.innerHeight * 0.9;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }

  checkSections(); // Zkontrolujeme hned po načtení stránky

  window.addEventListener('scroll', checkSections);
});

document.addEventListener('DOMContentLoaded', function () {
  const contactBox = document.querySelector('.contact-box');

  function checkVisibility() {
    const rect = contactBox.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      contactBox.classList.add('visible');
    } else {
      contactBox.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Zavolat při načtení stránky
});