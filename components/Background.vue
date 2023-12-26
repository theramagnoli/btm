<template>
  <div
    class="-z-50 fixed w-full h-[100dvh]"
    :class="{
      'bg-gray-50 dark:bg-black': !isInTour,
      'bg-green-300 dark:bg-green-700':
        isInTour && (tourId === 'ChichenItza' || tourId === 'MayanAdventure'),
      'bg-lime-300 dark:bg-lime-700': isInTour && tourId === 'YolasBiking',
      'bg-sky-300 dark:bg-sky-700': isInTour && tourId === 'Tulum',
      'bg-stone-300 dark:bg-stone-700': isInTour && tourId === 'Coba',
      'bg-emerald-300 dark:bg-emerald-700': isInTour && tourId === 'EkBalam',
      'bg-cyan-300 dark:bg-cyan-700': isInTour && tourId === 'Akumal',
      'bg-yellow-300 dark:bg-yellow-700':
        isInTour && tourId === 'SianKaan&Muyil',
      'bg-slate-300 dark:bg-slate-700':
        isInTour && (tourId === 'Cenotes' || tourId === 'Kayaking&Snorkeling'),
      'bg-blue-300 dark:bg-blue-700':
        isInTour && tourId === 'SianKaan&PuntaAllen',
    }"
  >
    <div class="blur-[60px]">
      <div
        class="absolute h-[40rem] aspect-square rounded-full filter opacity-10 animate-blob bg-emerald-800 dark:bg-emerald-500 top-0 right-1/2"
      />
      <div
        class="absolute h-[40rem] aspect-square rounded-full filter opacity-10 animate-blob bg-sky-900 dark:bg-sky-600 top-0 left-1/2 animation-delay-2000"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import useAppStateStore from "~/store/appStateStore";

const appStateStore = useAppStateStore();
const isInTour = computed(() => appStateStore.isInToursPage);
const route = useRoute();
const tourId = computed(() => route.params.id);
</script>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2000ms;
}
</style>
