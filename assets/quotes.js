/* =========================================================
   Affirmations & quotes for Mom
   Mix of motherly love, motivational, and gentle affirmations.
   Add or edit freely — keep them shortish (fits on a strip).
   ========================================================= */

const QUOTES = [
  // — motherly love —
  "you are the heart of this family ♡",
  "thank you for every quiet sacrifice",
  "your love made me who i am",
  "i learned softness from you",
  "every good thing in me started with you",
  "you are my safe place, always",
  "the way you love is its own kind of magic",
  "no one's hugs feel like yours",
  "you are my first home",
  "i hope i make you as proud as you make me",
  "you taught me how to love by loving me",
  "your warmth is the recipe i'm still learning",

  // — affirmations for her —
  "you are radiant today, mom",
  "you are doing more than enough",
  "you deserve the softest day",
  "you are seen. you are appreciated.",
  "rest is yours to take, not earn",
  "you are beautiful in every era",
  "your laugh is a love language",
  "you are allowed to be the main character today",
  "your kindness has changed people you'll never know about",
  "you carry strength like it's nothing — but it's everything",

  // — motivational / strong-mama —
  "the world is luckier because you're in it",
  "your story is still being written, and it's beautiful",
  "you bloom, always — even in the hard seasons",
  "you make hard things look easy and easy things feel like home",
  "soft is strong. you are proof.",
  "your dreams are not too late, ever",
  "you are powerful. quietly, steadily, undeniably.",
  "mountains move because you ask them politely",

  // — sweet & playful —
  "best mom alive ★ official certified ★",
  "you + me = forever ♡",
  "↳ scientifically the coolest mom",
  "you're my favorite human (don't tell anyone)",
  "★彡 mom of the year 彡★",
  "moms like you are the rarest kind",
  "you smell like home and feel like sunday",
  "if love had a face it would look like yours",

  // — gratitude —
  "thank you for the late nights and early mornings",
  "thank you for showing up, every single time",
  "thank you for the small things i never said thank you for",
  "i see everything you do. i always have.",
  "thank you for being my biggest fan"
];

/** Returns a random quote, avoiding immediate repeats. */
let _lastQuoteIndex = -1;
function getRandomQuote() {
  if (QUOTES.length <= 1) return QUOTES[0] || "";
  let idx;
  do {
    idx = Math.floor(Math.random() * QUOTES.length);
  } while (idx === _lastQuoteIndex);
  _lastQuoteIndex = idx;
  return QUOTES[idx];
}
