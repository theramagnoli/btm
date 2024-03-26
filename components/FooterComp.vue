<script setup>
import FacebookLogo from '/assets/icons/FacebookLogo';
import InstagramLogo from '/assets/icons/InstagramLogo';
import TripAdvisorLogo from '/assets/icons/TripAdvisorLogo';
import { PhoneIcon, AtSymbolIcon } from '@heroicons/vue/16/solid';
</script>

<template>
  <div class="relative tablet:mx-auto">
    <div
      class="absolute mt-8 grid w-full gap-2 overflow-hidden pb-24 pt-12 transition-all tablet:items-center tablet:justify-center"
      id="footer"
    >
      <div class="absolute inset-0 -z-10 bg-green-300 dark:bg-green-600">
        <div
          class="absolute -right-24 -top-64 aspect-square h-[28rem] animate-interchange-l rounded-full bg-gradient-to-t from-emerald-300 to-green-300 opacity-70 blur-[150px] filter tablet:h-[50rem] dark:from-emerald-700 dark:to-green-600"
        />
        <div
          class="absolute -left-40 -top-64 aspect-square h-[28rem] animate-interchange-r rounded-full bg-gradient-to-t from-sky-200 to-sky-300 opacity-70 blur-[150px] filter tablet:h-[50rem] dark:from-sky-600 dark:to-sky-700"
        />
      </div>
      <div
        class="z-10 grid max-w-5xl items-center justify-between gap-8 px-6 laptop:flex laptop:justify-start"
      >
        <div class="mb-auto grid gap-2 laptop:max-w-[calc(66%)]">
          <h2 class="mb-2 text-xl font-semibold">About us</h2>
          <p>
            <span class="font-medium">Boutique Tours Mexico</span>
            is a wonderful family-owned business that treat you like family.
            There tours are uniquely planned and executed. It is pure perfection
            from start to finish.
            <ExternalLink
              :href="`https://www.tripadvisor.com.mx/Attraction_Review-g150812-d12246056-Reviews-Boutique_Tours_Mexico-Playa_del_Carmen_Yucatan_Peninsula.html`"
            >
              — Amy P on TripAdvisor
            </ExternalLink>
          </p>
          <p class="">
            We have been recognized by TripAdvisor for outstanding traveler
            reviews: Certificate of Excellence 2018 & 2019, Travellers' Choice
            2020 & 2023.
          </p>
        </div>

        <div
          class="flex flex-col gap-x-10 gap-y-4 tablet:flex-row laptop:flex-col"
        >
          <div class="grid gap-4">
            <h2 class="w-full text-xl font-semibold">Get in touch with us</h2>
            <div class="flex items-center gap-2">
              <PhoneIcon class="h-4" />+52 984 190 0856
            </div>
            <div class="flex items-center gap-2">
              <AtSymbolIcon class="h-4" />sergeitravel22@gmail.com
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <h2
              class="hidden text-nowrap text-xl font-semibold tablet:block laptop:hidden"
            >
              Find us on...
            </h2>
            <div
              class="mt-2 flex w-fit flex-row items-center gap-4 tablet:justify-start"
            >
              <a
                href="https://www.facebook.com/BoutiqueToursMexico/"
                target="_blank"
                class="flex size-10 items-center justify-center rounded-[15px] border-stone-200 bg-blue-600"
              >
                <FacebookLogo class="size-6 fill-white stroke-transparent" />
              </a>
              <a
                href="https://www.tripadvisor.com.mx/Attraction_Review-g150812-d12246056-Reviews-Boutique_Tours_Mexico-Playa_del_Carmen_Yucatan_Peninsula.html"
                target="_blank"
                class="flex size-10 items-center justify-center rounded-[15px] border-stone-200 bg-green-700"
              >
                <TripAdvisorLogo class="size-6 fill-white stroke-transparent" />
              </a>
              <a
                href="https://www.instagram.com/boutiquetoursmexico/"
                target="_blank"
                class="flex size-10 items-center justify-center rounded-[15px] border-stone-200 bg-gradient-to-bl from-indigo-600 via-pink-600 to-yellow-500"
              >
                <InstagramLogo class="size-6 fill-white stroke-transparent" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
