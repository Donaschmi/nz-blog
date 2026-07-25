# Kia Ora — my New Zealand WHV blog 🌿

A warm, earthy travel journal built with Jekyll and hosted free on GitHub Pages.
You *write* it by talking — a voice note becomes a nicely rewritten story — but readers only ever see the finished text, in **English and French** with a one-click language toggle. The audio itself is never published.

---

## 1. Put it online (one-time setup)

You already have a GitHub account, so:

1. **Create the repository.**
   Go to <https://github.com/new>.
   - For a site at `https://YOURNAME.github.io` → name the repo exactly **`YOURNAME.github.io`**.
   - For a site at `https://YOURNAME.github.io/nz-blog` → name it anything, e.g. **`nz-blog`**.
   - Keep it **Public**. Don't add a README (this folder already has one).

2. **Upload these files.**
   Easiest: on the new repo page click **“uploading an existing file”**, then drag in *everything inside this `nz-blog` folder* (not the folder itself). Commit.
   *(Or, if you use git: `git init`, `git add .`, `git commit -m "first post"`, `git remote add origin ...`, `git push -u origin main`.)*

3. **Turn on Pages.**
   Repo → **Settings** → **Pages** → under *Build and deployment* set **Source: Deploy from a branch**, **Branch: `main` / `root`**, Save.

4. **Wait ~1 minute**, then open your URL. 🎉
   - If you used the `nz-blog`-style name, open `_config.yml` and set
     `baseurl: "/nz-blog"` and `url: "https://YOURNAME.github.io"` so links work. (Leave both empty for a `YOURNAME.github.io` repo.)

---

## 2. Add a new post

The audio → transcript → rewrite happens **outside** the blog (see section 3). Once you have the text:

1. Copy `_drafts/TEMPLATE.md` into `_posts/` and rename it
   **`YYYY-MM-DD-a-short-slug.md`** — e.g. `_posts/2026-08-03-glowworm-caves.md`.
   *(The date and this naming are what make it a published post.)*
2. Fill in the front matter (titles, location, excerpts) and write the two language versions between the `lang-en` / `lang-fr` blocks.
3. **Photos:** drop them in `assets/img/`, set a `cover:` or use `![](/assets/img/photo.jpg)` in the text.
4. Commit / upload. GitHub rebuilds automatically in about a minute.

Your voice note stays on your side — don't put it in the repo. Readers see only the written post.

Anything left in `_drafts/` stays private — handy for half-finished posts.

---

## 3. The audio-to-post workflow

Two ways to go from a voice note to a finished bilingual post:

- **Hand it to me (Claude).** Give me the audio file. I'll transcribe it, rewrite it warmly in both languages, and hand back a ready-to-drop `_posts/…md` file.
- **Do it yourself.** Transcribe with any tool you like (phone dictation, a transcription app, etc.), then write the two story blocks straight into the post. The template shows exactly where everything goes.

Either way the audio and transcript are only your raw material — they never go into the repo. The published site is a plain written blog.

---

## 4. Adding photos and videos

Put your media files in `assets/img/` (photos) or `assets/video/` (clips) first, then use these snippets inside the `lang-en` / `lang-fr` blocks of a post. The `_drafts/TEMPLATE.md` file has all of them ready to copy.

**One photo:**

```markdown
![Lake Tekapo at dusk](/assets/img/tekapo.jpg)
```

**A gallery** — click any photo to open it full-size. Add as many as you like:

```html
<div class="gallery">
  <img src="/assets/img/day1.jpg" alt="Morning fog">
  <img src="/assets/img/day2.jpg" alt="The summit">
  <img src="/assets/img/day3.jpg" alt="Emerald lakes">
</div>
```

For bigger tiles use `class="gallery cols-2"` (two per row) or `cols-3`.

**A short clip you filmed** (self-hosted). Keep it small — GitHub blocks files over 100 MB, so trim or compress first:

```html
<video class="post-video" controls src="/assets/video/tongariro.mp4"></video>
```

**A YouTube video** (best for anything longer — no storage limits). Take the ID from the URL (after `v=` or `youtu.be/`):

```html
<div class="embed"><iframe src="https://www.youtube.com/embed/VIDEO_ID" title="video" allowfullscreen></iframe></div>
```

Everything is responsive and styled to match. Or just tell me "add these photos as a gallery" / "embed this clip" and I'll handle it.

---

## 5. The Map page

The site has a **Map** page (`/map/`) that drops a pin for every post and links each pin back to its story. It uses free OpenStreetMap tiles — no account or API key.

A post appears on the map only if it has coordinates in its front matter:

```yaml
lat: -45.0312
lng: 168.6626
```

To find them: open Google Maps, right-click the spot, and click the two numbers at the top of the menu to copy them (latitude first, then longitude). Paste them as `lat` and `lng`. Posts without coordinates simply don't show a pin — everything else still works.

When I build a post for you, I'll add the coordinates automatically from the location.

---

## 6. Preview locally (optional)

Not required — you can edit straight on GitHub. But if you want a local preview:

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

Needs Ruby installed. On GitHub, none of this matters — Pages builds it for you.

---

## Folder map

```
_config.yml          site settings (title, taglines, default language)
index.html           home page (list of posts)
map.html             map of all posts (pins → stories)
about.md             about page
_layouts/            page templates (default, post)
_includes/           header & footer
_posts/              published posts  ← add files here
_drafts/TEMPLATE.md  copy this to start a new post
assets/css/style.css the earthy theme
assets/js/main.js    language toggle + photo lightbox
assets/img/          your photos
assets/video/        your self-hosted clips
```

Kia ora, and enjoy the year. 🇳🇿
