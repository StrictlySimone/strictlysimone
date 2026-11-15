# Strictly Simone

The website for Strictly Simone, served by GitHub Pages at www.strictlysimone.com.

It is plain HTML, CSS and a little JavaScript. There is no build step. Anything pushed to the `main` branch goes live in a minute or two.

## Clips

The site has no clips right now, so there is no Clips page. If Simone wants to publish mixes again, talk it through first: mixes of other people's songs need the right permissions, and the safest route is to embed them from a service that has music licences.

## When you add or change a page

Keep `sitemap.xml` and `llms.txt` in step with the site: every public page has an entry in both (not `404.html`), and a page's `<lastmod>` date in the sitemap changes when the page does. Every web address in those files, and in each page's `<head>`, starts with `https://www.strictlysimone.com`.

## Where things are

| File | What it is |
|---|---|
| `index.html` | Home |
| `about.html` | About |
| `privacy.html` | Privacy |
| `data/week.js` | The Playing this week list |
| `js/week.js` | Draws the Playing this week list on the page |
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

## Playing this week

Edit `data/week.js`: set `updated` to the Monday (YYYY-MM-DD) and list up to ten songs as `"Song name by Artist"`, most played first. Leave `tracks` empty to hide the section. Only publish a list Simone has approved.
