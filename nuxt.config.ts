// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from "nuxt/config";
import untypedTours from "./assets/json/tours.json";
import { Tours } from "assets/entities/Tour";
const tours: Tours = untypedTours;

let tourRoutes = [];
for (const tour in tours) {
  tourRoutes.push(`/tours/${tours[tour].id}`);
}

export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: tourRoutes,
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
    pageTransition: { name: "page", mode: "out-in" },
    head: {
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
            "tours, tour, private tours, vacation, tour mexico, cancun, tulum, chichen, playa del carmen, private, mexico, mexico tours",
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
});
