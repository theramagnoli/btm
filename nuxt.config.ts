import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
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
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  ssr: false,
});
