<template>
  <div class="tablet:mx-auto w-full laptop:max-w-3xl relative">
    <div
      class="transition-all w-full text-gray-200 grid gap-2 mt-8 pb-[90px] tablet:pb-8 laptop:pb-8 rounded-t-0 laptop:rounded-t-lg p-4 laptop:p-8 absolute overflow-hidden"
      id="footer"
    >
      <div class="-z-10 bg-green-700 dark:bg-green-800 inset-0 absolute">
        <div
          class="footer-circle bg-gradient-to-t from from-emerald-600 to-emerald-700 dark:to-emerald-800 -right-24 -top-64 opacity-100 animate-interchange-l"
        />
        <div
          class="footer-circle bg-gradient-to-t from-sky-600 to-sky-500 dark:to-sky-700 -left-40 -top-64 opacity-100 animate-interchange-r"
        />
      </div>
      <div
        class="grid tablet:flex justify-between items-center tablet:items-start gap-6 w-full z-10 tablet:h-28"
      >
        <div class="grid items-center space-y-4 w-full">
          <h2 class="font-semibold text-xl text-gray-200 w-full">
            Get in touch with us
          </h2>

          <div class="flex items-center gap-2">
            <TelephoneIcon />+52 984 190 0856
          </div>

          <div class="flex items-center gap-2">
            <AtIcon />sergeitravel22@gmail.com
          </div>
        </div>
        <div class="grid gap-4">
          <div class="flex gap-4">
            <a
              href="https://www.instagram.com/boutiquetoursmexico/"
              target="_blank"
              class="social-link group pl-1 pb-1 bg-gradient-to-bl from-indigo-600 via-pink-600 to-yellow-500"
              ><InstagramLogo class="social-logo"
            /></a>
            <a
              href="https://www.tripadvisor.com.mx/Attraction_Review-g150812-d12246056-Reviews-Boutique_Tours_Mexico-Playa_del_Carmen_Yucatan_Peninsula.html"
              target="_blank"
              class="social-link group bg-green-700"
              ><TripAdvisorLogo class="social-logo" />
            </a>
            <a
              href="https://www.facebook.com/BoutiqueToursMexico/"
              target="_blank"
              class="social-link group bg-blue-700"
              ><FacebookLogo class="social-logo"
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
import TelephoneIcon from "/assets/icons/TelephoneIcon";
import AtIcon from "/assets/icons/AtIcon";
import TagIcon from "/assets/icons/TagIcon";
</script>

<style lang="postcss">
.social-link {
  @apply border-2 border-gray-200 rounded-lg justify-center grid aspect-square items-center h-12 w-12;
}
.social-logo {
  @apply w-10 h-10 p-1 invert;
}
.footer-circle {
  @apply absolute h-[28rem] tablet:h-[50rem] aspect-square rounded-full filter blur-[150px] opacity-70;
}
</style>
