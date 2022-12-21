// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from "nuxt/config";
import Tours from "./assets/json/tours.json";

for (const tour in Tours) {
  // @ts-ignore
  console.log(Tours[tour]);
}

export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: [
        "/tours",
        "/tours/ChichenItza",
        "/tours/Tulum",
        "/tours/Cenotes",
        "/tours/Coba",
        "/tours/Akumal",
        "/tours/EkBalam",
        "/tours/SianKaan&PuntaAllen",
        "/tours/SianKaan&Muyil",
        "/tours/Kayaking&Snorkeling",
        "/tours/MayanAdventure",
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["assets/css/tailwind.css"],
  ssr: false,
  app: {
    head: {
      title: "Boutique Tours Mexico | Premiere Archeology & History Tours",
      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content:
            "Specialist in personalized flexible, small-group and private tours to the most amazing cenotes and impressive archeological areas. We help you discover the best of Mexico!",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "tours, tour, private tours, vacation, tour mexico, cancun, tulum",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "/static/favicon.ico",
          sizes: "any",
        },
        {
          rel: "icon",
          href: "/static/favicon.svg",
          type: "image/svg+xml",
        },
      ],
      script: [{ src: "https://fareharbor.com/embeds/api/v1/" }],
    },
  },
});
