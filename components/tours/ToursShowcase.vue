<script setup lang="ts">
import { ref } from "#imports";
import { SparklesIcon } from "@heroicons/vue/16/solid";
import { useMediaQuery } from "@vueuse/core";
import { tours } from "assets/json/tours";

const isMobile = useMediaQuery("(max-width: 600px)");
const isImageLoaded = ref<Boolean[]>([]);

function preloadImages() {
  for (let i = 0; i < tours.length; i++) {
    const img = new Image();
    img.src = tours[i].cover ?? "";
    isImageLoaded.value.push(false);
    img.onload = () => {
      isImageLoaded.value[i] = true;
    };
  }
}

preloadImages();
</script>

<template>
  <div
    class="grid gap-6 pb-0"
    :class="{
      'grid-cols-1': isMobile,
      'grid-cols-2': !isMobile,
    }"
  >
    <NuxtLink
      :to="`/tours/${tour.id}`"
      v-for="(tour, i) of tours"
      :key="tour"
      class="h-[300px] grid group relative"
    >
      <div
        class="relative h-full overflow-hidden rounded-md border-green-50/20"
      >
        <Transition name="fade" :duration="400">
          <NuxtImg
            format="webp"
            :src="tour.cover ?? ''"
            :lazy="true"
            class="absolute inset-0 w-full h-full object-cover object-center"
            v-if="isImageLoaded[i]"
          />
          <div
            class="absolute inset-0 w-full h-full bg-gray-500 opacity-30 animate-pulse rounded-md laptop:rounded-none"
            v-else
          />
        </Transition>
        <div
          class="rounded-b-sm rounded-t-sm p-4 absolute bottom-0 left-0 right-0 w-auto overflow-hidden h-32 bg-gradient-radial-to-t from-gray-900"
        >
          <p
            class="rounded-md p-4 absolute bottom-4 left-4 right-4 transition-all font-medium flex items-center justify-between bg-opacity-75 backdrop-blur-lg"
            :class="{
              'bg-green-300 dark:bg-green-700':
                tour.id === 'ChichenItza' || tour.id === 'MayanAdventure',
              'bg-lime-300 dark:bg-lime-700': tour.id === 'YolasBiking',
              'bg-sky-300 dark:bg-sky-700': tour.id === 'Tulum',
              'bg-stone-300 dark:bg-stone-700': tour.id === 'Coba',
              'bg-emerald-300 dark:bg-emerald-700': tour.id === 'EkBalam',
              'bg-cyan-300 dark:bg-cyan-700': tour.id === 'Akumal',
              'bg-yellow-300 dark:bg-yellow-700': tour.id === 'SianKaan&Muyil',
              'bg-slate-300 dark:bg-slate-900':
                tour.id === 'Cenotes' || tour.id === 'Kayaking&Snorkeling',
              'bg-blue-300 dark:bg-blue-700': tour.id === 'SianKaan&PuntaAllen',
            }"
          >
            {{ tour.title }}
          </p>
        </div>
        <div
          v-if="tour.id === 'YolasBiking'"
          class="absolute top-0 right-4 bg-yellow-500 dark:bg-yellow-600 p-1 px-2 rounded-b-md flex items-center text-sm font-bold"
        >
          <SparklesIcon class="w-3 h-3 mr-2" /> NEW
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="postcss"></style>
