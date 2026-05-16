// ハンバーガーメニュー制御
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', function () {
    const isOpen = this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    this.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

// ヘッダースクロール時の影
const header = document.querySelector('[data-section="header"]');

if (header) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 2px 20px rgba(92, 64, 51, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
}
