<template>
  <div class="tablet:w-full">
    <div
      class="fixed bottom-0 tablet:justify-end grid tablet:pb-6 tablet:px-0 w-full px-4 pb-4 pt-6 bg-gradient-radial-to-t tablet:bg-none from-black via-black/50"
    >
      <button
        class="border-[2px] tablet:border-r-0 tablet:rounded-l-full items-center justify-center rounded-xl tablet:p-1 tablet:pr-[18px] uppercase dark:border-gray-200 border-stone-900 text-stone-900 dark:text-gray-200 transition-all flex backdrop-blur-lg text-lg w-full bg-gray-200/70 dark:bg-black/70 py-1 tablet:hover:pr-8"
        @click="toFareHarbor"
      >
        <FareHarborLogo
          class="h-5 w-5 tablet:h-8 tablet:w-8 mr-3 dark:invert"
        />
        <span class="font-display">Book now</span>
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
