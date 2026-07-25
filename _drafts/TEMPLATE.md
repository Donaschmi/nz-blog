---
layout: post
date: 2026-01-01               # ← the date of the post
location: "Where I was"        # ← shows as a little green tag
lat: -41.2865                  # ← optional: drops a pin on the Map page
lng: 174.7762                  #    (look up on Google Maps → right-click → copy the two numbers)

title_en: "English title"
title_fr: "Titre en français"

excerpt_en: "One-line teaser for the home page."
excerpt_fr: "Petite accroche pour la page d'accueil."

# cover: /assets/img/my-photo.jpg          # optional
---

<!--
  The audio note and its transcript are just YOUR source material — they are
  NOT published. Keep them wherever you like (your phone, a notes app, or hand
  them to Claude). Readers only ever see the written story below.
-->


<div class="lang-en" markdown="1">
Write the nice, rewritten English story here. Normal Markdown works:
**bold**, *italic*, links, and images like `![alt](/assets/img/photo.jpg)`.
</div>

<div class="lang-fr" markdown="1">
Écris ici le récit réécrit en français. Le Markdown fonctionne normalement :
**gras**, *italique*, liens, et images comme `![texte](/assets/img/photo.jpg)`.
</div>

<!--
  ═══ ADDING PHOTOS & VIDEOS ═══
  Put photo/video files in assets/img/ or assets/video/ first, then use these
  snippets anywhere inside the lang-en / lang-fr blocks above.

  ── One photo (inline) ──
  ![Lake Tekapo at dusk](/assets/img/tekapo.jpg)

  ── A gallery (click any photo to view it full-size) ──
  Use a plain HTML block. Add as many <img> as you like; the grid arranges them.
  <div class="gallery" markdown="0">
    <img src="/assets/img/day1.jpg" alt="Morning fog">
    <img src="/assets/img/day2.jpg" alt="The summit">
    <img src="/assets/img/day3.jpg" alt="Emerald lakes">
  </div>
  Want bigger tiles? Use class="gallery cols-2" (two per row) or "gallery cols-3".

  ── A short clip you filmed (self-hosted) ──
  Keep files small — GitHub blocks anything over 100 MB, so trim/compress first.
  <video class="post-video" controls src="/assets/video/tongariro.mp4"></video>

  ── A YouTube video (best for anything longer) ──
  Grab the ID from the URL (the part after v= or youtu.be/), then:
  <div class="embed"><iframe src="https://www.youtube.com/embed/VIDEO_ID"
    title="video" allowfullscreen></iframe></div>

  Tip: if you put a gallery/video inside a lang block, keep markdown="1" on the
  block — the HTML still renders fine alongside your text.
-->

<!--
  HOW TO PUBLISH THIS POST
  1. Rename the file: _posts/YYYY-MM-DD-a-short-slug.md
     e.g. _posts/2026-08-03-glowworm-caves.md
  2. Fill in everything above.
  3. Commit & push — GitHub Pages rebuilds automatically in ~1 minute.
  Files left in _drafts/ are NOT published.
-->
