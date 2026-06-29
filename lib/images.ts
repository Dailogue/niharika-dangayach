// Centralized placeholder imagery (warm-toned interiors from Unsplash).
// Replace these URLs with your own images later — structure stays the same.

const u = (id: string, w = 1200, h = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: u("photo-1616594039964-ae9021a400a0", 1600, 1000),

  // Virtual makeover moodboard cards
  moodboard1: u("photo-1618221195710-dd6b41faaea6", 800, 1000),
  moodboard2: u("photo-1567016432779-094069958ea5", 800, 1000),
  moodboard3: u("photo-1583847268964-b28dc8f51f92", 800, 1000),

  aboutPortrait: u("photo-1544005313-94ddf0286df2", 900, 1100),

  // Instagram grid
  insta1: u("photo-1586023492125-27b2c045efd7", 600, 600),
  insta2: u("photo-1556228453-efd6c1ff04f6", 600, 600),
  insta3: u("photo-1493809842364-78817add7ffb", 600, 600),
  insta4: u("photo-1505691938895-1758d7feb511", 600, 600),
  insta5: u("photo-1522708323590-d24dbb6b0267", 600, 600),

  // Product gallery
  product1: u("photo-1616486338812-3dadae4b4ace", 1000, 1000),
  product2: u("photo-1616137466211-f939a420be84", 1000, 1000),
  product3: u("photo-1615873968403-89e068629265", 1000, 1000),
  product4: u("photo-1615874959474-d609969a20ed", 1000, 1000),

  // Before / after
  moodboardBefore: u("photo-1556910103-1c02745aae4d", 900, 700),
  after: u("photo-1600121848594-d8644e57abab", 900, 700),

  // Finished spaces
  space1: u("photo-1600210492493-0946911123ea", 800, 800),
  space2: u("photo-1600585154340-be6161a56a0c", 800, 800),
  space3: u("photo-1600566753086-00f18fb6b3ea", 800, 800),
  space4: u("photo-1616046229478-9901c5536a45", 800, 800),

  introVideoPoster: u("photo-1618219908412-a29a1bb7b86e", 1400, 900),
};
