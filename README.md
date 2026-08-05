# jurisandersons.com

A single static page. Plain HTML and CSS — no JavaScript of its own, no build
step, no dependencies, no `node_modules`.

## Layout

Everything served lives in `dist/`:

- `dist/index.html` — the whole site.
- `dist/css/main.css` — the whole stylesheet.
- `dist/img/` — portrait and the Coreteam icon (used as a CSS mask).
- `dist/CNAME` — custom domain for GitHub Pages.
- `dist/app-ads.txt` — ad-network verification.

Not linked from the front page, kept because they are reachable by direct URL:

- `dist/cv.html` — self-contained CV, carries its own `<style>`.
- `dist/privacy.html`, `dist/morebands/privacy.html` — privacy policies linked
  from App Store listings. Do not delete without checking those listings first.

`_design/` holds Affinity source files for the logos; it is not deployed.

The one external request is the Font Awesome kit, which draws the LinkedIn and
Bandcamp glyphs. Drop the `<script>` tag and those two icons disappear; the
link text stays.

## Editing

Open `dist/index.html` and edit it. To view it, either open the file directly
or serve the folder:

```bash
python3 -m http.server 8000 --directory dist
```

## Deploying

Publishes `dist/` to the `gh-pages` branch:

```bash
npx gh-pages -d dist
```
