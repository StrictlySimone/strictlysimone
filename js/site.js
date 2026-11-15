// Theme (light/dark) and draft look picker. Runs in <head> so there is no flash.
(function () {
  var root = document.documentElement;
  var get = function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } };
  var set = function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} };

  var theme = get('ss-theme');
  if (theme === 'light' || theme === 'dark') root.setAttribute('data-theme', theme);

  var looks = ['club', 'sound', 'y2k'];
  var look = get('ss-look');
  if (looks.indexOf(look) !== -1) root.setAttribute('data-look', look);

  function currentTheme() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function markLook() {
    var active = root.getAttribute('data-look');
    document.querySelectorAll('[data-set-look]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-look') === active));
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var next = currentTheme() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        set('ss-theme', next);
      });
    }
    document.querySelectorAll('[data-set-look]').forEach(function (b) {
      b.addEventListener('click', function () {
        var l = b.getAttribute('data-set-look');
        root.setAttribute('data-look', l);
        set('ss-look', l);
        markLook();
      });
    });
    markLook();
    var y = document.getElementById('year');
    if (y) y.textContent = String(new Date().getFullYear());
  });
})();
