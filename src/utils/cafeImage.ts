/** Public /cafe-img assets with GitHub Pages base URL support. */
export function cafeImg(filename: string): string {
  return `${import.meta.env.BASE_URL}cafe-img/${encodeURIComponent(filename)}`;
}

export const cafeImages = {
  /** Hero cup shot — portrait, brand-forward */
  hero: cafeImg("unnamed (6).jpg"),

  about: [
    cafeImg("2025-11-14 (2).jpg"),
    cafeImg("2025-11-21 (1).jpg"),
    cafeImg("unnamed (3).jpg"),
    cafeImg("2025-11-21 (6).jpg"),
  ],

  categories: {
    espresso: cafeImg("unnamed (6).jpg"),
    cappuccino: cafeImg("2025-11-21 (8).jpg"),
    latte: cafeImg("unnamed (11).jpg"),
    mocha: cafeImg("unnamed (7).jpg"),
    coldBrew: cafeImg("2025-11-14.jpg"),
    desserts: cafeImg("unnamed (4).jpg"),
  },

  products: [
    cafeImg("unnamed (11).jpg"),
    cafeImg("unnamed (6).jpg"),
    cafeImg("2025-11-21 (8).jpg"),
    cafeImg("unnamed (10).jpg"),
    cafeImg("unnamed (7).jpg"),
    cafeImg("2025-11-14 (4).jpg"),
  ],

  gallery: [
    { src: cafeImg("unnamed (10).jpg"), alt: "Barista serving at Belfry & Co. counter", category: "barista" as const, tall: true },
    { src: cafeImg("2025-11-14 (2).jpg"), alt: "Spacious Belfry & Co. dining area", category: "interior" as const, tall: false },
    { src: cafeImg("unnamed (7).jpg"), alt: "Handcrafted dessert at Belfry & Co.", category: "desserts" as const, tall: false },
    { src: cafeImg("unnamed (6).jpg"), alt: "Signature Belfry & Co. coffee cup", category: "coffee" as const, tall: true },
    { src: cafeImg("2025-11-21.jpg"), alt: "Modern cafe seating and bar", category: "interior" as const, tall: false },
    { src: cafeImg("2025-11-21 (8).jpg"), alt: "Espresso bar with pastry display", category: "barista" as const, tall: false },
    { src: cafeImg("2025-11-14.jpg"), alt: "Fresh pizzas and burgers on the table", category: "desserts" as const, tall: true },
    { src: cafeImg("2025-11-21 (1).jpg"), alt: "Gaming lounge — Eat Play Repeat", category: "interior" as const, tall: false },
  ],

  /** Small square-friendly shots for testimonial avatars */
  avatars: [
    cafeImg("unnamed (10).jpg"),
    cafeImg("unnamed (8).jpg"),
    cafeImg("unnamed (2).jpg"),
    cafeImg("unnamed.jpg"),
    cafeImg("unnamed (6).jpg"),
    cafeImg("unnamed (7).jpg"),
  ],
} as const;
