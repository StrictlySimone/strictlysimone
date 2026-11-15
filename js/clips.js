// Draws the clips from data/clips.js.
// <div data-clips="newest"> shows the first clip. <div data-clips="all"> shows every clip.
(function () {
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function card(clip, headingTag) {
    var art = el('article', 'clip');

    var frame = el('div', 'frame');
    if (clip.video) {
      var v = document.createElement('video');
      v.controls = true;
      v.preload = 'metadata';
      v.playsInline = true;
      v.src = clip.video;
      if (clip.poster) v.poster = clip.poster;
      v.setAttribute('aria-label', 'Video: ' + clip.title);
      frame.appendChild(v);
    } else if (clip.poster) {
      var img = document.createElement('img');
      img.src = clip.poster;
      img.alt = 'Thumbnail for ' + clip.title;
      frame.appendChild(img);
    } else {
      frame.appendChild(el('p', 'frame-note', 'Video coming soon'));
    }
    art.appendChild(frame);

    var info = el('div', 'clip-info');
    info.appendChild(el(headingTag, 'clip-title', clip.title));
    if (clip.description) info.appendChild(el('p', 'clip-desc', clip.description));

    if (clip.songs && clip.songs.length) {
      info.appendChild(el('p', 'label', 'Songs in order'));
      var ol = el('ol', 'songs');
      clip.songs.forEach(function (s) { ol.appendChild(el('li', '', s)); });
      info.appendChild(ol);
    }

    var links = [['tiktok', 'Watch on TikTok'], ['instagram', 'Watch on Instagram']]
      .filter(function (l) { return clip[l[0]]; });
    if (links.length) {
      var p = el('p', 'watch');
      links.forEach(function (l) {
        var a = el('a', 'btn', l[1]);
        a.href = clip[l[0]];
        a.setAttribute('aria-label', l[1] + ': ' + clip.title);
        p.appendChild(a);
      });
      info.appendChild(p);
    }
    art.appendChild(info);
    return art;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var clips = window.CLIPS || [];
    document.querySelectorAll('[data-clips]').forEach(function (box) {
      var tag = box.getAttribute('data-heading') || 'h3';
      box.textContent = '';
      if (!clips.length) {
        box.appendChild(el('p', '', 'No clips yet. The first one is on its way.'));
        return;
      }
      var list = box.getAttribute('data-clips') === 'newest' ? clips.slice(0, 1) : clips;
      list.forEach(function (c) { box.appendChild(card(c, tag)); });
    });
  });
})();
