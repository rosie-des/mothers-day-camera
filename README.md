# ♡ Mom's Y2K Photobooth ♡

A digital Mother's Day gift — a tiny, lovingly-crafted website with a
2000s-style digital camera. Click the camera and out drops a polaroid-style
photo strip with **four photos** and a **handwritten love note** from a pool
of motherly affirmations. Every click is a new strip, a new quote.

Built as a static site — no build step, no dependencies. Just open
`index.html`, or host it free on **GitHub Pages**.

---

## ✦ Live preview, locally

```bash
# 1. clone (or download) this repo
git clone https://github.com/<your-username>/mothers-day-camera.git
cd mothers-day-camera

# 2. open index.html in any browser — that's literally it
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

Or run a tiny local server (recommended so SVGs load cleanly):

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

---

## ✦ Hosting it on GitHub Pages (so Mom gets a real link)

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, pick the `main` branch and the `/ (root)` folder.
4. Save. After a minute, your site is live at
   `https://<your-username>.github.io/mothers-day-camera/`.
5. Text Mom the link. Watch her smile.

---

## ✦ Make it personal (the fun part)

The repo ships with 8 cute pastel SVG placeholder photos. Swap them for
real ones — childhood pics, favorite vacation shots, the photo of you two
that lives on her fridge.

### Option A — Drop in real photos

1. Put your photos (`.jpg`, `.png`, or `.webp`) into `images/photos/`.
2. Open `assets/script.js` and replace the `PHOTO_FILES` list with your
   filenames:

   ```js
   const PHOTO_FILES = [
     "images/photos/mom-and-me-2003.jpg",
     "images/photos/beach-trip.jpg",
     "images/photos/birthday-cake.jpg",
     "images/photos/sunday-morning.jpg",
     "images/photos/grandma-hug.jpg"
     // add as many as you want
   ];
   ```

3. Each click randomly picks **4 of those photos** for the strip. More
   photos = more variety per click.

> Tip: square-ish photos look best. If a photo is wide or tall, the strip
> will crop the center — feel free to crop them yourself first to control
> what's visible.

### Option B — Customize the affirmations

Open `assets/quotes.js` and edit the `QUOTES` array. Add inside jokes,
specific memories, things she's said to you that you want to give back.
The more personal, the better.

```js
const QUOTES = [
  "you are the heart of this family ♡",
  "thank you for the spaghetti incident, we don't talk about it",
  "remember when you sang taylor swift in the car? icon.",
  // ...
];
```

### Option C — Change the title or signature

Edit `index.html` — the `<h1>` says "Happy Mother's Day" but it can say
"Happy Birthday Mom", "Te Amo Mamá", or whatever fits. The footer
(`<footer class="footer">`) is also easy to personalize.

---

## ✦ Project structure

```
mothers-day-camera/
├── index.html              ← the page
├── assets/
│   ├── style.css           ← all styling (Y2K aesthetic, animations)
│   ├── script.js           ← camera click → photo strip logic
│   └── quotes.js           ← the affirmation pool (edit me!)
├── images/
│   └── photos/             ← drop real photos here
│       ├── photo-01.svg    ← (placeholders — replace)
│       └── ...
└── README.md
```

---

## ✦ What it does

- **Click the camera** → screen flashes white, shutter sound plays
  (WebAudio, no asset needed), camera does a little shake.
- A new **photo strip** drops into the gallery below with 4 randomly-picked
  photos, a random affirmation, and today's date stamp.
- Each strip lands at a slightly random angle, like it just printed.
- Click again. And again. And again. Every strip is unique.

---

## ✦ Browser support

Modern browsers (Chrome, Firefox, Safari, Edge — anything from the last
few years). No build tools, no transpilation, no dependencies.

Respects `prefers-reduced-motion` for users sensitive to animation.

---

## ✦ Made with love

If you fork this for someone else (a partner, a friend, a grandparent,
a sibling), just swap the title, photos, and quotes. The bones work for
any "you mean a lot to me" gift.

♡
