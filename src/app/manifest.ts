import type { MetadataRoute } from "next";
import { SITE } from "@/lib/i18n/config";

// Logo CDN'da joylashgan; manifest ikonkasi sifatida ishlatamiz.

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "START21 — Ingliz tili kurslari",
    short_name: "START21",
    description: "Namangandagi natija beradigan ingliz tili o'quv markazi.",
    start_url: "/uz",
    display: "standalone",
    background_color: "#001413",
    theme_color: "#001413",
    lang: "uz",
    categories: ["education"],
    icons: [
      { src: SITE.logo, sizes: "any", type: "image/webp" },
    ],
  };
}
