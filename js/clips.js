// Draws the clips from data/clips.js.
// <div data-clips="newest"> shows the first clip. <div data-clips="all"> shows every clip.
(function () {
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  // "Toast by Koffee" becomes a title and an artist.
  function song(text, n) {
    var cut = text.lastIndexOf(' by ');
    var li = el('li');
    var num = el('span', 'setlist__n', String(n));
    num.setAttribute('aria-hidden', 'true');
    li.appendChild(num);
    if (cut === -1) {
      li.appendChild(el('span', 'setlist__t', text));
      return li;
    }
    li.appendChild(el('span', 'setlist__t', text.slice(0, cut)));
    var artist = el('span', 'setlist__a');
    artist.appendChild(el('span', 'visually-hidden', 'by '));
    artist.appendChild(document.createTextNode(text.slice(cut + 4)));
    li.appendChild(artist);
    return li;
  }

  function card(clip, headingTag) {
    var art = el('article', 'release');

    var screen = el('div', 'release__screen');
    if (clip.video) {
      var v = document.createElement('video');
      v.controls = true;
      v.preload = 'metadata';
      v.playsInline = true;
      v.src = clip.video;
      if (clip.poster) v.poster = clip.poster;
      v.setAttribute('aria-label', 'Video: ' + clip.title);
      screen.appendChild(v);
    } else if (clip.poster) {
      var img = document.createElement('img');
      img.src = clip.poster;
      img.alt = 'Thumbnail for ' + clip.title;
      screen.appendChild(img);
    } else {
      screen.className += ' release__screen--wait';
      var mark = document.createElement('img');
      mark.src = (document.documentElement.getAttribute('data-root') || '') + 'img/logo.png';
      mark.alt = '';
      screen.appendChild(mark);
      screen.appendChild(el('p', 'release__wait', 'Video coming soon'));
    }
    art.appendChild(screen);

    var body = el('div', 'release__body');
    body.appendChild(el(headingTag, 'release__title', clip.title));
    if (clip.description) body.appendChild(el('p', 'release__desc', clip.description));

    if (clip.songs && clip.songs.length) {
      var ol = el('ol', 'setlist');
      ol.setAttribute('aria-label', 'Songs in order');
      clip.songs.forEach(function (s, i) { ol.appendChild(song(s, i + 1)); });
      body.appendChild(ol);
    }

    var links = [['tiktok', 'Watch on TikTok'], ['instagram', 'Watch on Instagram']]
      .filter(function (l) { return clip[l[0]]; });
    if (links.length) {
      var p = el('p', 'actions');
      links.forEach(function (l) {
        var a = el('a', 'btn btn--ghost', l[1]);
        a.href = clip[l[0]];
        a.setAttribute('aria-label', l[1] + ': ' + clip.title);
        p.appendChild(a);
      });
      body.appendChild(p);
    }
    art.appendChild(body);
    return art;
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
    var clips = window.CLIPS || [];
    document.querySelectorAll('[data-clips]').forEach(function (box) {
      var tag = box.getAttribute('data-heading') || 'h3';
      box.textContent = '';
      if (!clips.length) {
        box.appendChild(el('p', '', 'No clips here yet. They are on their way.'));
        return;
      }
      var list = box.getAttribute('data-clips') === 'newest' ? clips.slice(0, 1) : clips;
      list.forEach(function (c) { box.appendChild(card(c, tag)); });
    });
  });
})();
