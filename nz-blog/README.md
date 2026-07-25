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

## 4. Preview locally (optional)

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
about.md             about page
_layouts/            page templates (default, post)
_includes/           header & footer
_posts/              published posts  ← add files here
_drafts/TEMPLATE.md  copy this to start a new post
assets/css/style.css the earthy theme
assets/js/main.js    the EN/FR language toggle
assets/img/          your photos
```

Kia ora, and enjoy the year. 🇳🇿
