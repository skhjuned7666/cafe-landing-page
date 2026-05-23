import { cafeImages } from "@/utils/cafeImage";

export const galleryImages = cafeImages.gallery.map((item, index) => ({
  id: index + 1,
  ...item,
}));
