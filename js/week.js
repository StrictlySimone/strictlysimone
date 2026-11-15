// Draws the "Playing this week" list from data/week.js. The section stays hidden when there are no tracks.
(function () {
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  // "Toast by Koffee" becomes a title and an artist.
  // A song is "Song by Artist", or { text: "Song by Artist", url: "https://..." } for a Play link.
  function song(entry, n) {
    var text = typeof entry === 'string' ? entry : entry.text;
    var url = typeof entry === 'string' ? '' : entry.url;
    var li = el('li');
    var cut = text.lastIndexOf(' by ');
    var num = el('span', 'setlist__n', String(n));
    num.setAttribute('aria-hidden', 'true');
    li.appendChild(num);
    if (cut === -1) {
      li.appendChild(el('span', 'setlist__t', text));
    } else {
      li.appendChild(el('span', 'setlist__t', text.slice(0, cut)));
      var artist = el('span', 'setlist__a');
      artist.appendChild(el('span', 'visually-hidden', 'by '));
      artist.appendChild(document.createTextNode(text.slice(cut + 4)));
      li.appendChild(artist);
    }
    if (url) {
      var play = el('a', 'setlist__p', 'Play');
      play.href = url;
      play.target = '_blank';
      play.rel = 'noopener';
      play.setAttribute('aria-label', 'Play ' + text + ' on YouTube (opens in a new tab)');
      li.appendChild(play);
    }
    return li;
  }

  // Fills <section data-week-section> from data/week.js, and keeps it hidden when there are no tracks.
  function drawWeek() {
    var week = window.WEEK || {};
    var tracks = (week.tracks || []).slice(0, 10);
    var section = document.querySelector('[data-week-section]');
    if (!section || !tracks.length) return;
    var ol = el('ol', 'setlist');
    ol.setAttribute('aria-label', 'Songs played most this week');
    tracks.forEach(function (s, i) { ol.appendChild(song(s, i + 1)); });
    var box = section.querySelector('[data-week]');
    box.textContent = '';
    box.appendChild(ol);
    var when = week.updated && new Date(week.updated + 'T00:00:00');
    var label = section.querySelector('[data-week-date]');
    if (label && when && !isNaN(when)) {
      label.textContent = 'Week of ' + when.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    }
    section.hidden = false;
  }

  document.addEventListener('DOMContentLoaded', function () {
    drawWeek();
    if (window.revealShare) window.revealShare();
  });
})();
