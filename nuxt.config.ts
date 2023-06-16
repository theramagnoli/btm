import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  //@ts-ignore
  css: ["assets/css/tailwind.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Boutique Tours Mexico | Premiere Archeology & History Tours",
      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content:
            "Specialist in personalized flexible, small-group and private tours to the most amazing cenotes and impressive archaeological areas. We help you discover the best of Mexico!",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "tours, tour, private tours, vacation, tour mexico, cancun, tulum, chichenitza, playa del carmen, private, mexico, mexico tours",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "/assets/icons/favicon.icon",
          sizes: "any",
        },
        {
          rel: "icon",
          href: "/assets/icons/favicon.svg",
          type: "image/svg+xml",
        },
      ],
      script: [{ src: "https://fareharbor.com/embeds/api/v1/" }],
    },
  },

  modules: ["@pinia/nuxt", "@nuxt/image-edge"],
  nitro: {
    prerender: {
      routes: [
        "/tours/ChichenItza",
        "/tours/Coba",
        "/tours/Tulum",
        "/tours/Cenotes",
        "/tours/EkBalam",
        "/tours/SianKaan&Muyil",
        "/tours/SianKaan&PuntaAllen",
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
  ssr: false,
});
