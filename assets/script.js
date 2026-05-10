/* =========================================================
   Mom's Y2K Photobooth — interaction
   ========================================================= */

(() => {
  const cameraBtn  = document.getElementById("camera");
  const flash      = document.getElementById("flash");
  const gallery    = document.getElementById("gallery");

  // ---- photo pool ----
  // All 18 of Mom's photos! ♡
  const PHOTO_FILES = [
    // — originally JPG —
    "images/photos/1cc2cc4b-1773-4896-ad38-6c9044ba97e5.jpg",
    "images/photos/1d36710e-4509-4664-9922-e0ea1f25395a.jpg",
    "images/photos/12a30bce-b2af-4a88-ad04-a07188d0736f.jpg",
    "images/photos/0320eba0-823e-4930-921f-06c918043304.jpg",
    "images/photos/e06997a7-9a73-451b-afa9-1e4b0d9f1db1.jpg",
    "images/photos/f9672b0f-9a81-4a32-8f3c-06024bcd7baa.jpg",
    "images/photos/f78470f6-3bc7-4ab4-a942-33095794caea.jpg",
    "images/photos/IMG_4255.jpg",
    "images/photos/IMG_4466.jpg",
    "images/photos/IMG_7770.jpg",
    "images/photos/IMG_8204.jpg",
    "images/photos/IMG_9822.jpg",
    "images/photos/Resized_20220718_194059.jpg",
    // — converted from HEIC —
    "images/photos/IMG_0474.jpg",
    "images/photos/IMG_5050.jpg",
    "images/photos/IMG_7074.jpg",
    "images/photos/IMG_9895.jpg",
    "images/photos/IMG_9915.jpg"
  ];

  /** Pick 4 distinct photos at random. */
  function pickFourPhotos() {
    const shuffled = [...PHOTO_FILES].sort(() => Math.random() - 0.5);
    const out = [];
    for (let i = 0; i < 4; i++) {
      out.push(shuffled[i % shuffled.length]);
    }
    return out;
  }

  /** Format the date stamp like 05·11·2025 (camera-style). */
  function formatStamp() {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const yy = d.getFullYear();
    return `${mm}·${dd}·${yy}`;
  }

  /** Build a single photo strip element. */
  function buildStrip() {
    const photos = pickFourPhotos();
    const quote  = getRandomQuote();
    const stamp  = formatStamp();
    const rotate = (Math.random() * 8 - 4).toFixed(2); // -4° to +4°

    const strip = document.createElement("div");
    strip.className = "strip";
    strip.style.setProperty("--strip-rotate", `${rotate}deg`);

    photos.forEach((src, i) => {
      const wrap = document.createElement("div");
      wrap.className = `strip__photo strip__photo--ph${i + 1}`;
      const img = document.createElement("img");
      img.src = src;
      img.alt = "";
      img.loading = "lazy";
      wrap.appendChild(img);
      strip.appendChild(wrap);
    });

    const q = document.createElement("p");
    q.className = "strip__quote";
    q.textContent = quote;
    strip.appendChild(q);

    const date = document.createElement("span");
    date.className = "strip__date";
    date.textContent = stamp;
    strip.appendChild(date);

    return strip;
  }

  /* =========================================================
     SOUND: vintage shutter click + film printing whir
     ========================================================= */
  const shutterSound = new Audio("assets/sounds/shutter.mp3");
  const printSound   = new Audio("assets/sounds/print.mp3");

  // tweak these to taste — 0.0 (silent) to 1.0 (full volume)
  shutterSound.volume = 0.7;
  printSound.volume   = 0.5;

  // preload so there's no delay on first click
  shutterSound.preload = "auto";
  printSound.preload   = "auto";

  function playSounds() {
    try {
      // shutter fires immediately on click
      shutterSound.currentTime = 0;
      shutterSound.play().catch(() => {});

      // printing/whir sound starts a moment later, as the strip emerges
      setTimeout(() => {
        printSound.currentTime = 0;
        printSound.play().catch(() => {});
      }, 250); // ms delay between shutter and print sound
    } catch (_) { /* audio is a nice-to-have */ }
  }

  /** Main click handler. */
  let isCapturing = false;
  function takePhoto() {
    if (isCapturing) return;
    isCapturing = true;

    cameraBtn.classList.add("is-shaking");
    flash.classList.add("is-firing");
    playSounds();

    setTimeout(() => {
      cameraBtn.classList.remove("is-shaking");
      flash.classList.remove("is-firing");

      // remove the empty placeholder once a strip exists
      const empty = gallery.querySelector(".gallery__empty");
      if (empty) empty.remove();

      const strip = buildStrip();
      // append → newest strip ends up at the BOTTOM of the gallery,
      // i.e. closest to the camera (visually emerging from it)
      gallery.appendChild(strip);

      // smoothly scroll the new strip into view
      strip.scrollIntoView({ behavior: "smooth", block: "center" });

      isCapturing = false;
    }, 500);
  }

  cameraBtn.addEventListener("click", takePhoto);

  // keyboard accessibility — space/enter on focused camera fires too
  cameraBtn.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      takePhoto();
    }
  });
})();
