<script setup lang="ts">
defineProps<{
  rounded?: "top" | "full";
}>();
import FareHarborLogo from "~/assets/icons/FareHaborLogo";

function toFareHarbor() {
  return !FH.open({ shortname: "boutiquetoursmexico", flow: 278797 });
}
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed bottom-0 right-0 left-0 flex justify-center pb-4 px-4 z-30"
    >
      <button
        @click="toFareHarbor"
        class="rounded-full font-medium items-center justify-center tablet:pr-3 uppercase flex text-xl p-2 pl-5 bg-btm-blue text-contrast whitespace-nowrap drop-shadow-[0px_10px_25px_rgba(0,0,0,0.5)]"
      >
        Book now
        <FareHarborLogo class="h-8 w-8 ml-3 fill-stone-200" />
      </button>
    </div>
  </Teleport>
</template>
