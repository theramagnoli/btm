<template>
  <div class="tablet:w-full">
    <div
      class="fixed bottom-0 tablet:justify-end grid tablet:pb-6 tablet:px-0 w-full px-4 pb-4 pt-6 bg-gradient-radial-to-t tablet:bg-none from-stone-900 via-stone-900/70 z-50"
    >
      <button
        class="tablet:border-r-0 tablet:rounded-l-full items-center justify-center rounded-xl tablet:pr-[18px] uppercase transition-all flex backdrop-blur-lg text-lg w-full bg-stone-900 dark:bg-gray-200 p-2 tablet:hover:pr-8"
        @click="toFareHarbor"
      >
        <FareHarborLogo
          class="h-5 w-5 tablet:h-8 tablet:w-8 mr-3 invert dark:invert-0"
        />
        <p class="font-display text-gray-200 dark:text-stone-900">Book now</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import FareHarborLogo from "/assets/icons/FareHaborLogo";

function toFareHarbor() {
  return !FH.open({ shortname: "boutiquetoursmexico", flow: 278797 });
}
</script>
