<script setup lang="ts">
import { ref } from '#imports';
import { SparklesIcon } from '@heroicons/vue/16/solid';
import { useMediaQuery } from '@vueuse/core';
import { tours } from 'assets/json/tours';
import { tourColorDict } from 'assets/json/tourColorDict';

const isMobile = useMediaQuery('(max-width: 600px)');
const isImageLoaded = ref<Boolean[]>([]);

function preloadImages() {
  for (let i = 0; i < tours.length; i++) {
    const img = new Image();
    img.src = tours[i].cover ?? '';
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
      class="group relative grid h-[300px]"
    >
      <div
        class="relative h-full overflow-hidden rounded-[30px] border-green-50/20"
      >
        <Transition name="fade" :duration="400">
          <NuxtImg
            format="webp"
            :src="tour.cover ?? ''"
            :lazy="true"
            class="absolute inset-0 h-full w-full object-cover object-center transition-all group-hover:scale-105"
            v-if="isImageLoaded[i]"
          />
          <div
            class="absolute inset-0 h-full w-full animate-pulse rounded-[30px] bg-gray-500 opacity-30 laptop:rounded-none"
            v-else
          />
        </Transition>
        <div
          class="absolute bottom-0 left-0 right-0 h-32 w-auto overflow-hidden rounded-b-sm rounded-t-sm bg-gradient-radial-to-t from-gray-900 p-4"
        >
          <p
            :class="`absolute inset-x-4 bottom-4 flex items-center justify-between rounded-[20px] p-4 font-medium backdrop-blur-lg transition-all bg-${tourColorDict[tour.id]}-300 dark:bg-${tourColorDict[tour.id]}-700`"
          >
            {{ tour.title }}
          </p>
        </div>
        <div
          v-if="tour.id === 'YolasBiking'"
          class="absolute right-4 top-4 flex items-center rounded-[20px] bg-yellow-500 px-3 py-2 text-sm font-semibold dark:bg-yellow-600"
        >
          <SparklesIcon class="mr-2 h-3 w-3" /> NEW
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
