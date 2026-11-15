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

// "Share this site": the phone's share sheet where there is one, otherwise copy the link.
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var canShare = !!navigator.share;
    var canCopy = !!(navigator.clipboard && navigator.clipboard.writeText);
    if (!canShare && !canCopy) return;
    var canonical = document.querySelector('link[rel="canonical"]');
    var url = canonical ? canonical.href : location.href;
    document.querySelectorAll('[data-share]').forEach(function (btn) {
      var status = btn.parentNode.querySelector('[data-share-status]');
      var label = btn.textContent;
      btn.hidden = false;
      btn.addEventListener('click', function () {
        if (canShare) {
          navigator.share({ title: document.title, url: url }).catch(function () {});
          return;
        }
        navigator.clipboard.writeText(url).then(function () {
          btn.textContent = 'Link copied';
          if (status) status.textContent = 'Link copied';
          setTimeout(function () { btn.textContent = label; if (status) status.textContent = ''; }, 2500);
        }).catch(function () {});
      });
    });
  });
})();
