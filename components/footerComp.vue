<template>
  <div class="tablet:mx-auto max-w-3xl">
    <div
      class="transition-all text-stone-900 dark:text-gray-200 grif gap-2 mt-8 mx-5 laptop:mx-0 tablet:pb-8 pb-[75px]"
      id="footer"
    >
      <div class="h-[2px] bg-stone-900 dark:bg-gray-200 mb-6 mx-5" />
      <div
        class="laptop:grid-cols-4 grid-cols-10 grid justify-between items-center tablet:items-start"
      >
        <div
          class="grid items-center col-span-8 tablet:col-span-6 laptop:col-span-3 space-y-2"
        >
          <h2
            class="font-semibold text-xl text-stone-900 dark:text-gray-200 w-full"
          >
            Get in touch with us
          </h2>
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
            +52 984 190 0856
          </div>
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clip-rule="evenodd"
              />
            </svg>
            sergeitravel22@gmail.com
          </div>
        </div>
        <div
          class="grid justify-self-end col-span-2 tablet:col-span-4 laptop:col-auto"
        >
          <div class="grid tablet:flex gap-2">
            <a
              href="https://www.instagram.com/boutiquetoursmexico/"
              target="_blank"
              class="border-2 border-gray-200 rounded-md justify-center grid aspect-square items-center group bg-gradient-to-bl from-indigo-600 via-pink-600 to-yellow-500"
              ><InstagramLogo
                class="w-10 h-10 p-1 aspect-square invert group-hover:scale-110 transition-transform"
            /></a>
            <a
              href="https://www.tripadvisor.com.mx/Attraction_Review-g150812-d12246056-Reviews-Boutique_Tours_Mexico-Playa_del_Carmen_Yucatan_Peninsula.html"
              target="_blank"
              class="border-2 border-gray-200 rounded-md justify-center grid aspect-square items-center group bg-green-700"
              ><TripAdvisorLogo
                class="w-10 h-10 p-1 aspect-square invert group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.facebook.com/BoutiqueToursMexico/"
              target="_blank"
              class="border-2 border-gray-300 rounded-md justify-center grid aspect-square items-baseline group bg-blue-700"
              ><FacebookLogo
                class="w-10 h-10 p-1 aspect-square invert group-hover:scale-110 transition-transform"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import FacebookLogo from "/assets/icons/FacebookLogo";
import InstagramLogo from "/assets/icons/InstagramLogo";
import TripAdvisorLogo from "/assets/icons/TripAdvisorLogo";
</script>
