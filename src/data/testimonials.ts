import { cafeImages } from "@/utils/cafeImage";

export const testimonials = [
  {
    id: 1,
    name: "Elena Vasquez",
    role: "Creative Director",
    avatar: cafeImages.avatars[0],
    rating: 5,
    text: "Belfry & Co. redefined my morning ritual. Every sip feels like a cinematic experience — warm, bold, unforgettable.",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Tech Founder",
    avatar: cafeImages.avatars[1],
    rating: 5,
    text: "The Nitro Cold Brew is liquid innovation. Smooth, complex, and the ambiance is pure luxury startup energy.",
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Fashion Editor",
    avatar: cafeImages.avatars[2],
    rating: 5,
    text: "From the latte art to the velvet seating — this cafe feels like stepping into a future-forward Parisian salon.",
  },
  {
    id: 4,
    name: "James Okonkwo",
    role: "Architect",
    avatar: cafeImages.avatars[3],
    rating: 4,
    text: "Impeccable design meets world-class coffee. The Golden Ember Latte is my weekly creative fuel.",
  },
  {
    id: 5,
    name: "Aria Nakamura",
    role: "Photographer",
    avatar: cafeImages.avatars[4],
    rating: 5,
    text: "Every corner is Instagram-worthy, but the coffee is the real star. Ethically sourced and explosively flavorful.",
  },
  {
    id: 6,
    name: "David Müller",
    role: "Barista Champion",
    avatar: cafeImages.avatars[5],
    rating: 5,
    text: "As a professional, I'm blown away by their extraction precision. Belfry & Co. sets the 2026 standard.",
  },
] as const;
