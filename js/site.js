// Sections ease in once as they scroll into view. Without scripting they are simply there.
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('js');
  document.addEventListener('DOMContentLoaded', function () {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    document.querySelectorAll('main > section:not(.hero):not(.banner), .foot').forEach(function (s) {
      if (s.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      s.classList.add('reveal');
      io.observe(s);
    });
  });
})();
