import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: ['assets/css/main.css', 'assets/css/animations.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Boutique Tours Mexico | Premiere Archeology & History Tours',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'description',
          content:
            'Specialist in personalized flexible, small-group and private tours to the most amazing cenotes and impressive archaeological areas. We help you discover the best of Mexico!',
        },
        {
          name: 'viewport',
          content: 'width=device-width, height=device-height',
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'keywords',
          content:
            'tours, tour, private tours, vacation, tour mexico, cancun, tulum, chichenitza, playa del carmen, private, mexico, mexico tours, world wonders, beach, cenote, cenotes, private tour, vacations, ruins, maya, mayan',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
          type: 'image/x-icon',
          sizes: 'any',
        },
        {
          rel: 'icon',
          href: '/favicon.svg',
          type: 'image/svg+xml',
        },
      ],
      script: [{ src: 'https://fareharbor.com/embeds/api/v1/' }],
    },
  },
  modules: ['@pinia/nuxt', '@nuxt/image-edge'],
  nitro: {
    prerender: {
      routes: [
        '/tours/ChichenItza',
        '/tours/Coba',
        '/tours/Tulum',
        '/tours/Cenotes',
        '/tours/EkBalam',
        '/tours/SianKaan&Muyil',
        '/tours/SianKaan&PuntaAllen',
        '/tours/Kayaking&Snorkeling',
        '/tours/MayanAdventure',
        '/tours/YolasBiking',
      ],
    },
  },
  postcss: {
    plugins: { tailwindcss: {}, autoprefixer: {} },
  },
  ssr: false,
});
