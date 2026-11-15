# Strictly Simone

Static site served by GitHub Pages at **https://www.strictlysimone.com** (see `CNAME`). Simone is a DJ who mixes short clips at home, some of them mashups, with no fixed genre. Plain hand-written HTML, no build step.

## Site rules

- Every absolute URL (canonical, `og:url`, `og:image`, JSON-LD, sitemap, `robots.txt`, `llms.txt`) uses `https://www.strictlysimone.com`, never the bare domain.
- British spelling ("colour").
- Link to the homepage as `/`, never `index.html`.
- Text contrast is at least 4.5:1 in light and dark mode.

## Do not mislead visitors

Say only what is true today. Check this on every page, `llms.txt`, JSON-LD and metadata.

- **TikTok:** Simone does not post there. Do not mention it or link to it. The `tiktok` field in `data/clips.js` stays empty until Simone says otherwise.
- **Instagram:** the account is private for now. Do not link to it, and do not imply visitors can follow or watch there, until Simone says it is public.
- **Bookings:** Simone is not taking bookings. No "book me", "hire", "enquire", "availability", pricing or event-DJ wording, no booking form or button, and no `Offer`, `Event` or `Service` structured data.
- Do not invent gigs, followers, press, testimonials or numbers.

When any of these changes, Simone will say so. Then update every page, `llms.txt` and the JSON-LD together.

## Weekly "Playing this week" list

- The list lives in `data/week.js`. Empty `tracks` keeps the section hidden.
- Never publish a list Simone has not approved. Draft it on a branch, show her the tracks, and wait for a yes.
- Only use tracks Simone gave you or confirmed. Do not guess her listening.
- When a list goes live, set `updated` to that Monday and update `<lastmod>` for `/` in `sitemap.xml`.

## SEO and behind-the-scenes files

These run quietly in the background, so they are easy to forget. Treat them as part of every page change.

- **Per page `<head>`:** a unique `<title>` and meta description, a canonical URL, `og:*` and `twitter:*` tags, and `<meta name="robots" content="index, follow">` (`404.html` is `noindex` and stays out of the sitemap). The `og:image` points at a file that exists.
- **One `<h1>` per page**, headings in order, descriptive `alt` text on content images (empty `alt` on decorative ones), and descriptive link text.
- **JSON-LD** matches the visible page, with ISO 8601 dates.
- **`robots.txt`** keeps pointing at `https://www.strictlysimone.com/sitemap.xml`.
- **`sitemap.xml`:** every public page has a `<url>`; update `<lastmod>` when a page changes in a way readers would notice.
- **`llms.txt`:** keep its summary and page list in step with the site.
- **Both XML files stay valid.** Check with `python3 -c "import xml.dom.minidom as m; m.parse('sitemap.xml')"`.
- **Repo-only files** (this file, `README.md`, skills folders) must not be published; list them in `_config.yml` `exclude` if one exists, or add one.

## Before you publish

1. Open every changed page at 320, 375, 768 and 1280px wide, in light and dark mode: no sideways scrolling, no console errors.
2. Run an axe-core scan on every changed page and fix every violation.
3. Check internal links and image paths resolve, and `sitemap.xml` parses.
4. Show Simone the changes and wait for her to confirm, naming strictlysimone.com, before merging to `main`. Never merge without it.
