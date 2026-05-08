/* =============================
   NAV SCROLL & MOBILE TOGGLE
   ============================= */
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

burger.addEventListener('click', () => {
  const open = nav.classList.toggle('nav--open');
  burger.classList.toggle('open', open);
});

// Close mobile nav on link click
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--open');
    burger.classList.remove('open');
  });
});

/* =============================
   INTERSECTION OBSERVER — FADE IN
   ============================= */
const fadeEls = document.querySelectorAll(
  '.value__card, .service__card, .specialism, .process__step, .stat, .about__image, .about__content'
);

fadeEls.forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

fadeEls.forEach(el => observer.observe(el));

/* =============================
   CONTACT FORM
   ============================= */
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');
const errorMsg = document.getElementById('formError');

function showMsg(el, duration = 5000) {
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), duration);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  try {
    const res = await fetch('https://formspree.io/f/mzdovpko', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form),
    });

    if (res.ok) {
      form.reset();
      showMsg(successMsg);
    } else {
      showMsg(errorMsg);
    }
  } catch {
    showMsg(errorMsg);
  } finally {
    btn.textContent = 'Send Message';
    btn.disabled = false;
  }
});

/* =============================
   SMOOTH ACTIVE NAV HIGHLIGHT
   ============================= */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${entry.target.id}`
            ? 'white'
            : 'rgba(255,255,255,0.7)';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));

/* =============================
   TESTIMONIALS CAROUSEL
   ============================= */
(function () {
  const slides = document.querySelectorAll('.testimonial__slide');
  const thumbs = document.querySelectorAll('.testimonials__thumb');
  let current = 0;
  let autoTimer;

  function goTo(index) {
    slides[current].classList.remove('active');
    thumbs[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    thumbs[current].classList.add('active');
  }

  function startAuto() {
    autoTimer = setInterval(() => goTo(current + 1), 6000);
  }

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      clearInterval(autoTimer);
      goTo(i);
      startAuto();
    });
  });

  startAuto();
}());
