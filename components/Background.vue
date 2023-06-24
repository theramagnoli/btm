<template>
  <div
    class="-z-50 fixed w-full h-[100dvh]"
    :class="{
      'bg-gray-100 dark:bg-black': !isInTour,
      'bg-green-900':
        isInTour && (tourId === 'ChichenItza' || tourId === 'MayanAdventure'),
      'bg-sky-900': isInTour && tourId === 'Tulum',
      'bg-stone-900': isInTour && tourId === 'Coba',
      'bg-emerald-900': isInTour && tourId === 'EkBalam',
      'bg-yellow-900': isInTour && tourId === 'SianKaan&Muyil',
      'bg-slate-900':
        isInTour && (tourId === 'Cenotes' || tourId === 'Kayaking&Snorkeling'),
      'bg-blue-900': isInTour && tourId === 'SianKaan&PuntaAllen',
    }"
  >
    <div class="blur-[50px]">
      <div class="circle bg-emerald-950 dark:bg-emerald-700 top-0 right-1/2" />
      <div class="circle bg-sky-950 dark:bg-sky-700 top-0 left-1/2 animation-delay-2000" />
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
.circle {
  @apply absolute h-[40rem] aspect-square rounded-full filter blur-[0px] opacity-10 animate-blob;
}

.animation-delay-2000 {
  animation-delay: 2000ms;
}
</style>
