# Strictly Simone

The website for Strictly Simone, served by GitHub Pages at www.strictlysimone.com.

It is plain HTML, CSS and a little JavaScript. There is no build step. Anything pushed to the `main` branch goes live in a minute or two.

## How to add a clip

All clips live in one file: `data/clips.js`. The Home page shows the first clip in that file. The Clips page shows all of them.

1. Put the video in the `clips` folder, for example `clips/02-second-mix.mp4`. Use the smaller phone copy. Keep each file well under 100 MB.
2. If you have a thumbnail, put it in the same folder, for example `clips/02-second-mix.jpg`.
3. Open `data/clips.js`. Copy the block below and paste it at the **top** of the list, straight after `window.CLIPS = [`.
4. Fill it in. Leave `""` for anything you do not have yet.
5. Save, commit and push.

```js
  {
    title: "Second mix",
    description: "One or two plain sentences saying what happens in the video.",
    songs: [
      "Song name by Artist",
      "Song name by Artist"
    ],
    video: "clips/02-second-mix.mp4",
    poster: "clips/02-second-mix.jpg",
    tiktok: "https://www.tiktok.com/...",
    instagram: "https://www.instagram.com/..."
  },
```

Keep the comma after the closing `}`. The description matters: it is the text version of the video for anyone who cannot see it.

## When you add or change a page

Keep `sitemap.xml` and `llms.txt` in step with the site: every public page has an entry in both (not `404.html`), and a page's `<lastmod>` date in the sitemap changes when the page does. Every web address in those files, and in each page's `<head>`, starts with `https://www.strictlysimone.com`.

## Where things are

| File | What it is |
|---|---|
| `index.html` | Home |
| `clips.html` | Clips |
| `about.html` | About |
| `privacy.html` | Privacy |
| `data/clips.js` | The clips list |
| `js/clips.js` | Draws the clips list on the page |
| `css/tokens.css` | Every colour, font and size, in one place |
| `css/base.css`, `css/style.css` | Layout and components |
| `img/` | Logo, portrait, icons and the link preview image |
| `fonts/` | Boska and Geist, hosted here |
| `sitemap.xml`, `robots.txt`, `llms.txt` | For search engines and AI assistants |
| `CNAME` | Tells GitHub the site's domain. Do not delete. |

## Design

The look was built with the Hallmark design skill (theme: Kiln, recoloured to berry and pale blush). The stamp at the top of `css/style.css` records the choices.

## Accessibility rules for this site

- Dark theme only: cream text on deep berry, with high contrast.
- No text smaller than 18 px. Body text is 20 px.
- Buttons and links are large, with space between them, and show a clear outline when reached by keyboard.
- Every image needs alt text. Every video needs a text description.
- Nothing autoplays with sound. Nothing flashes. The intro animation plays once and is switched off for anyone who has asked their device for less motion.
