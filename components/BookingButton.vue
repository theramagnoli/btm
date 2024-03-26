<script setup lang="ts">
import FareHarborLogo from 'assets/icons/FareHarborLogo.vue';
import { useHasScrolledToBottom } from '~/composables/useHasScrolledToBottom';

const { hasScrolledToBottom } = useHasScrolledToBottom();
function goToFareHarbor() {
  return !FH.open({ shortname: 'boutiquetoursmexico', flow: 278797 });
}
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed bottom-0 left-0 right-0 z-30 flex justify-center px-4 pb-6"
    >
      <button
        @click="goToFareHarbor"
        class="flex items-center justify-center whitespace-nowrap rounded-full bg-sky-200 p-2 pl-4 text-base font-medium uppercase drop-shadow-[0px_10px_25px_rgba(0,0,0,0.20)] tablet:pr-2 dark:bg-sky-600"
      >
        Book now
        <FareHarborLogo class="ml-3 h-8 w-8 fill-stone-200" />
      </button>
    </div>
  </Teleport>
</template>
