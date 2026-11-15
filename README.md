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

## Where things are

| File | What it is |
|---|---|
| `index.html` | Home |
| `clips.html` | Clips |
| `about.html` | About |
| `contact.html` | Contact |
| `data/clips.js` | The clips list |
| `css/style.css` | Colours, sizes and layout |
| `fonts/` | Montserrat, hosted here |
| `CNAME` | Tells GitHub the site's domain. Do not delete. |

## Accessibility rules for this site

- Dark theme only. Text is at least 18 px with a contrast of 7 to 1 or better.
- Buttons and links are large, with space between them.
- Every image needs alt text. Every video needs a text description.
- Nothing autoplays with sound. Nothing flashes.
