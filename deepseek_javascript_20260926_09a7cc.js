// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Header Shadow on Scroll =====
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ===== Contact Form =====
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button');
  const original = btn.textContent;
  btn.textContent = '⏳ در حال ارسال...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = '✅ درخواست شما ثبت شد!';
    btn.style.background = 'linear-gradient(45deg,#11998e,#38ef7d)';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 2500);
  }, 1500);
});

// ===== Scroll Reveal =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .feature, .price-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});