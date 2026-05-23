import { cafeImages } from "@/utils/cafeImage";

export const categories = [
  {
    id: "espresso",
    title: "Espresso",
    description: "Bold, concentrated shots pulled to perfection.",
    price: "$4 – $6",
    image: cafeImages.categories.espresso,
  },
  {
    id: "cappuccino",
    title: "Cappuccino",
    description: "Silky microfoam layered over rich espresso.",
    price: "$5 – $7",
    image: cafeImages.categories.cappuccino,
  },
  {
    id: "latte",
    title: "Latte",
    description: "Velvety steamed milk with artisan latte art.",
    price: "$5 – $8",
    image: cafeImages.categories.latte,
  },
  {
    id: "mocha",
    title: "Mocha",
    description: "Dark chocolate meets single-origin espresso.",
    price: "$6 – $9",
    image: cafeImages.categories.mocha,
  },
  {
    id: "cold-brew",
    title: "Cold Brew",
    description: "18-hour steeped, smooth and naturally sweet.",
    price: "$5 – $8",
    image: cafeImages.categories.coldBrew,
  },
  {
    id: "desserts",
    title: "Desserts",
    description: "Handcrafted pastries paired with your brew.",
    price: "$4 – $12",
    image: cafeImages.categories.desserts,
  },
] as const;
