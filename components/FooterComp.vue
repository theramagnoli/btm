<template>
  <div class="tablet:mx-auto relative">
    <div
      class="transition-all w-full text-gray-200 grid gap-2 mt-8 tablet:pb-8 laptop:pb-8 py-4 absolute overflow-hidden tablet:justify-center tablet:items-center"
      id="footer"
    >
      <div class="-z-10 bg-green-800 inset-0 absolute">
        <div
          class="footer-circle bg-gradient-to-t from-green-700 to-green-800 -right-24 -top-64 opacity-100 animate-interchange-l"
        />
        <div
          class="footer-circle bg-gradient-to-t from-sky-600 to-sky-700 -left-40 -top-64 opacity-100 animate-interchange-r"
        />
      </div>
      <div
        class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 px-4 gap-8 laptop:gap-x-16 items-center z-10 max-w-5xl"
      >
        <div class="grid space-y-2 mb-auto">
          <h2 class="font-semibold text-xl text-gray-200 w-full">
            About our company
          </h2>
          <p class="text-gray-200 text-sm">
            We are a boutique tour company that specializes in personalized,
            flexible, private tours to the most amazing destinations in Mexico.
            We are committed to providing our clients with an unforgettable
            travel experience.
          </p>
        </div>

        <div class="grid space-y-2 mb-auto">
          <h2 class="font-semibold text-xl text-gray-200 w-full">Awards</h2>
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
            <h2 class="font-semibold text-xl text-gray-200 w-full">
              Get in touch with us
            </h2>

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
              ><FacebookLogo class="social-logo"
            /></a>
            <a
              href="https://www.tripadvisor.com.mx/Attraction_Review-g150812-d12246056-Reviews-Boutique_Tours_Mexico-Playa_del_Carmen_Yucatan_Peninsula.html"
              target="_blank"
              class="social-link group bg-green-700"
              ><TripAdvisorLogo class="social-logo stroke-black" />
            </a>
            <a
              href="https://www.instagram.com/boutiquetoursmexico/"
              target="_blank"
              class="social-link group bg-gradient-to-bl from-indigo-600 via-pink-600 to-yellow-500"
              ><InstagramLogo class="social-logo"
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
import { PhoneIcon, AtSymbolIcon, TrophyIcon } from "@heroicons/vue/20/solid";
</script>

<style lang="postcss">
.social-link {
  @apply border-2 border-gray-200 rounded-sm flex justify-center aspect-square items-center h-10 w-10;
}
.social-logo {
  @apply w-6 fill-white stroke-transparent;
}
.footer-circle {
  @apply absolute h-[28rem] tablet:h-[50rem] aspect-square rounded-full filter blur-[150px] opacity-70;
}
</style>
