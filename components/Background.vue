<template>
  <div
    class="-z-50 fixed w-full h-[100vh] filter"
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
    <div class="blur-[35px]">
      <div class="circle bg-emerald-700 top-1/2 right-1/2" />
      <div
        class="circle bg-green-600 dark:bg-green-900 bottom-1-2 left-1/2 animation-delay-1000"
      />
      <div
        class="circle bg-cyan-600 dark:bg-cyan-900 bottom-1/2 right-1/2 animation-delay-3000"
      />
      <div class="circle bg-teal-700 top-1/2 left-1/2 animation-delay-2000" />
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
  @apply absolute h-[40rem] aspect-square rounded-full filter blur-[0px] opacity-10 dark:opacity-[0.15] animate-blob;
}
.animation-delay-1000 {
  animation-delay: 1000ms;
}

.animation-delay-2000 {
  animation-delay: 2000ms;
}

.animation-delay-3000 {
  animation-delay: 3000ms;
}
</style>
