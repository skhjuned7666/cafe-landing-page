import { cafeImages } from "@/utils/cafeImage";

export const products = [
  {
    id: 1,
    name: "Midnight Velvet",
    description: "Ethiopian Yirgacheffe · dark chocolate · jasmine",
    price: 8.5,
    rating: 4.9,
    image: cafeImages.products[0],
  },
  {
    id: 2,
    name: "Golden Ember Latte",
    description: "Caramelized honey · oat milk · cinnamon dust",
    price: 7.25,
    rating: 4.8,
    image: cafeImages.products[1],
  },
  {
    id: 3,
    name: "Nebula Nitro",
    description: "Nitro-infused cold brew · vanilla bean cream",
    price: 9.0,
    rating: 5.0,
    image: cafeImages.products[2],
  },
  {
    id: 4,
    name: "Belfry Cortado",
    description: "Double ristretto · steamed milk · gold leaf",
    price: 6.75,
    rating: 4.7,
    image: cafeImages.products[3],
  },
  {
    id: 5,
    name: "Cosmic Mocha",
    description: "72% cacao · espresso · smoked sea salt",
    price: 8.0,
    rating: 4.9,
    image: cafeImages.products[4],
  },
  {
    id: 6,
    name: "Solar Flare Affogato",
    description: "Espresso over artisan gelato · amaretto",
    price: 10.5,
    rating: 5.0,
    image: cafeImages.products[5],
  },
] as const;
