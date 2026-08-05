# jurisandersons.eu

A single static page. Plain HTML and CSS — no JavaScript of its own, no build
step, no dependencies, no `node_modules`.

## Layout

Everything served lives in `docs/`. GitHub Pages is configured to serve this
folder directly from `master`, so there is no separate deploy step — a push to
`master` is the deployment.

- `docs/index.html` — the whole site.
- `docs/css/main.css` — the whole stylesheet.
- `docs/img/` — portrait and the Coreteam icon (used as a CSS mask).
- `docs/CNAME` — custom domain for GitHub Pages.
- `docs/app-ads.txt` — ad-network verification.

Not linked from the front page, kept because they are reachable by direct URL:

- `docs/cv.html` — self-contained CV, carries its own `<style>`.
- `docs/privacy.html`, `docs/morebands/privacy.html` — privacy policies linked
  from App Store listings. Do not delete without checking those listings first.

`_design/` holds Affinity source files for the logos; it is not deployed.

The one external request is the Font Awesome kit, which draws the LinkedIn and
Bandcamp glyphs. Drop the `<script>` tag and those two icons disappear; the
link text stays.

## Editing

Open `docs/index.html` and edit it. To preview, either open the file directly
or serve the folder:

```bash
python3 -m http.server 8000 --directory docs
```

## Deploying

There isn't a deploy command. Commit and push to `master`:

```bash
git push
```

GitHub Pages picks up `docs/` from `master` automatically.
