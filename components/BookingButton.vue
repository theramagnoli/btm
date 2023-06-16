<template>
  <button
    class="rounded-lg tablet:rounded-full items-center justify-center tablet:pl-1 tablet:pr-3 uppercase transition-all flex backdrop-blur-lg text-md bg-gray-300 dark:bg-stone-800 p-2 tablet:p-1"
  >
    <FareHarborLogo
      @click="toFareHarbor"
      class="h-5 w-5 tablet:h-8 tablet:w-8 mr-2 dark:invert invert-0"
    />

    <span class="font-display dark:text-gray-200 text-stone-900">
      Book now
    </span>
  </button>
</template>

<script setup lang="ts">
import FareHarborLogo from "/assets/icons/FareHaborLogo";

function toFareHarbor() {
  return !FH.open({ shortname: "boutiquetoursmexico", flow: 278797 });
}
</script>
