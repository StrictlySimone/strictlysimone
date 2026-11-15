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

// Share buttons ([data-share]): the phone's share sheet where there is one, otherwise copy the link.
// Optional data-share-title and data-share-url override the page title and canonical URL.
(function () {
  var canShare = !!navigator.share;
  var canCopy = !!(navigator.clipboard && navigator.clipboard.writeText);
  var status;

  function announce(text) {
    if (!status) {
      status = document.createElement('div');
      status.className = 'visually-hidden';
      status.setAttribute('role', 'status');
      document.body.appendChild(status);
    }
    status.textContent = text;
  }

  // Buttons start hidden and only show when sharing can work. Called again after the weekly list is drawn.
  window.revealShare = function () {
    if (!canShare && !canCopy) return;
    document.querySelectorAll('[data-share][hidden]').forEach(function (b) { b.hidden = false; });
  };

  document.addEventListener('DOMContentLoaded', window.revealShare);

  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('[data-share]');
    if (!btn) return;
    var canonical = document.querySelector('link[rel="canonical"]');
    var url = btn.getAttribute('data-share-url') || (canonical ? canonical.href : location.href);
    var title = btn.getAttribute('data-share-title') || document.title;
    if (canShare) {
      navigator.share({ title: title, url: url }).catch(function () {});
      return;
    }
    var label = btn.textContent;
    navigator.clipboard.writeText(url).then(function () {
      btn.textContent = 'Link copied';
      announce('Link copied');
      setTimeout(function () { btn.textContent = label; announce(''); }, 2500);
    }).catch(function () {});
  });
})();
