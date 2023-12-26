<template>
  <div class="tablet:mx-auto relative">
    <div
      class="transition-all w-full grid gap-2 mt-8 pb-24 tablet:pb-8 py-6 absolute overflow-hidden tablet:justify-center tablet:items-center"
      id="footer"
    >
      <div class="-z-10 bg-green-400 dark:bg-green-600 inset-0 absolute">
        <div
          class="footer-circle bg-gradient-to-t from-emerald-300 dark:from-emerald-700 to-green-300 dark:to-green-600 -right-24 -top-64 opacity-100 animate-interchange-l"
        />
        <div
          class="footer-circle bg-gradient-to-t from-sky-300 dark:from-sky-600 to-sky-400 dark:to-sky-700 -left-40 -top-64 opacity-100 animate-interchange-r"
        />
      </div>
      <div
        class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 px-6 gap-8 items-center z-10 max-w-5xl"
      >
        <div class="grid space-y-2 mb-auto">
          <h2 class="font-semibold text-xl w-full">About</h2>
          <p class="text-sm">
            We are a boutique tour company that specializes in personalized,
            flexible, private tours to the most amazing destinations in Mexico.
          </p>
          <a
            class="flex w-full text-sm underline items-center cursor-pointer font-medium text-emerald-800 dark:text-emerald-200"
            href="https://twitter.com/theramagnoli"
            target="_blank"
          >
            Website by Sergio Ramagnoli &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <ExternalLinkIcon class="h-3 -ml-3" />
          </a>
        </div>

        <div class="grid space-y-2 mb-auto">
          <h2 class="font-semibold text-xl w-full">Awards</h2>
          <div class="flex items-center gap-2 text-sm">
            <TrophyIcon class="h-4" />TripAdvisor's Travellers' Choice 2023
          </div>
          <div class="flex items-center gap-2 text-sm">
            <TrophyIcon class="h-4" />TripAdvisor's Travellers' Choice 2020
          </div>
          <div class="flex items-center gap-2 text-sm">
            <TrophyIcon class="h-4" />TripAdvisor's Certificate of Excellence
            2019
          </div>
          <div class="flex items-center gap-2 text-sm">
            <TrophyIcon class="h-4" />TripAdvisor's Certificate of Excellence
            2018
          </div>
        </div>

        <div
          class="grid space-y-2 tablet:grid-cols-2 laptop:grid-cols-1 mb-auto tablet:col-span-2 laptop:col-span-1 tablet:gap-8 laptop:gap-0"
        >
          <div class="grid space-y-2">
            <h2 class="font-semibold text-xl w-full">Get in touch with us</h2>

            <div class="flex items-center gap-2 text-sm">
              <PhoneIcon class="h-4" />+52 984 190 0856
            </div>
            <div class="flex items-center gap-2 text-sm">
              <AtSymbolIcon class="h-4" />sergeitravel22@gmail.com
            </div>
          </div>

          <div
            class="flex flex-row gap-4 pt-2 tablet:justify-start items-center"
          >
            <a
              href="https://www.facebook.com/BoutiqueToursMexico/"
              target="_blank"
              class="social-link group bg-blue-700"
            >
              <FacebookLogo class="social-logo" />
            </a>
            <a
              href="https://www.tripadvisor.com.mx/Attraction_Review-g150812-d12246056-Reviews-Boutique_Tours_Mexico-Playa_del_Carmen_Yucatan_Peninsula.html"
              target="_blank"
              class="social-link group bg-green-700"
            >
              <TripAdvisorLogo class="social-logo stroke-black" />
            </a>
            <a
              href="https://www.instagram.com/boutiquetoursmexico/"
              target="_blank"
              class="social-link group bg-gradient-to-bl from-indigo-600 via-pink-600 to-yellow-500"
            >
              <InstagramLogo class="social-logo" />
            </a>
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
import { PhoneIcon, AtSymbolIcon, TrophyIcon } from "@heroicons/vue/16/solid";
import ExternalLinkIcon from "assets/icons/ExternalLinkIcon.vue";
</script>

<style lang="postcss">
.social-link {
  @apply border-2 border-gray-200 rounded-md flex justify-center aspect-square items-center h-10;
}
.social-logo {
  @apply w-6 fill-white stroke-transparent;
}
.footer-circle {
  @apply absolute h-[28rem] tablet:h-[50rem] aspect-square rounded-full filter blur-[150px] opacity-70;
}
</style>
