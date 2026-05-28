/* Brasil Te Ama — UX enhancements
   - Scroll-reveal for .fade-up / .fade-in (replaces page-load animation)
   - Parallax for any [data-parallax="<speed>"] element
   - Tap-to-flip on .flip-card (touch fallback for :hover)
*/
(function () {
  var html = document.documentElement;
  html.classList.add('js-ready');

  var prefersReduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Scroll reveal ───────────────────────────────────────── */
  var revealEls = document.querySelectorAll('.fade-up, .fade-in');

  // Anything already on screen at load: show it right away (no wait).
  function isOnScreen(el) {
    var r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  }
  revealEls.forEach(function (el) {
    if (isOnScreen(el)) el.classList.add('is-visible');
  });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) {
      if (!el.classList.contains('is-visible')) io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Safety net: if IO never fires (some embed contexts), force-show everything
  // after a short delay so content can never be permanently hidden.
  setTimeout(function () {
    document.querySelectorAll('.fade-up:not(.is-visible), .fade-in:not(.is-visible)')
      .forEach(function (el) { el.classList.add('is-visible'); });
  }, 1500);

  /* ── Parallax ────────────────────────────────────────────── */
  if (!prefersReduced) {
    var targets = document.querySelectorAll('[data-parallax]');
    if (targets.length) {
      var ticking = false;
      var update = function () {
        var sy = window.scrollY || window.pageYOffset;
        targets.forEach(function (el) {
          var speed = parseFloat(el.getAttribute('data-parallax')) || 0.3;
          // Distance from element to top of document
          var rect = el.getBoundingClientRect();
          var elTop = rect.top + sy;
          var rel = sy - elTop + window.innerHeight;
          if (rel < 0 || rect.top > window.innerHeight) {
            el.style.transform = '';
            return;
          }
          el.style.transform = 'translate3d(0,' + (sy * speed) + 'px,0)';
        });
        ticking = false;
      };
      window.addEventListener('scroll', function () {
        if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
      }, { passive: true });
      window.addEventListener('resize', update, { passive: true });
      update();
    }
  }

  /* ── Flip cards (tap on touch devices) ───────────────────── */
  document.querySelectorAll('.flip-card').forEach(function (card) {
    // Make focusable for keyboard
    if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');
    card.addEventListener('click', function (e) {
      // Don't intercept clicks on real links inside the card
      if (e.target.closest('a, button')) return;
      card.classList.toggle('is-flipped');
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('is-flipped');
      }
    });
  });
})();
