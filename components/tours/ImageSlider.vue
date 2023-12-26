<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/20/solid";

const props = defineProps<{
  images: {
    src: string;
    alt: string;
    ar: "4:3" | "3:4";
  }[];
}>();

const slideWidthInPx = 300;
const sliderOffset = computed(() => 100);
const isImageLoaded = ref<boolean[]>([]);

function preloadImages() {
  for (let i = 0; i < props.images.length; i++) {
    const img = new Image();
    img.src = props.images[i].src;
    isImageLoaded.value.push(false);
    img.onload = () => {
      isImageLoaded.value[i] = true;
    };
  }
}

preloadImages();

function scrollNext() {
  const slider = document.getElementById("slider");
  if (slider) {
    let width = slider.scrollWidth - slideWidthInPx;
    const scroll = (slider.scrollLeft += slideWidthInPx);
    if (scroll > width - sliderOffset.value) {
      slider.scrollLeft = 0;
    }
  }
}

function scrollBack() {
  const slider = document.getElementById("slider");
  if (slider) {
    const scroll = (slider.scrollLeft -= slideWidthInPx);
    if (scroll < -140) {
      slider.scrollLeft = slideWidthInPx * props.images.length;
    }
  }
}
</script>

<template>
  <div class="relative w-full">
    <ul
      class="w-full laptop:max-w-[600px] flex gap-x-6 snap-x snap-mandatory overflow-x-auto scroll-smooth laptop:rounded-sm"
      id="slider"
    >
      <li
        v-for="(img, i) of images"
        :key="i"
        class="snap-center laptop:snap-start first:ml-4 last:mr-4 laptop:first:ml-0 laptop:last:mr-0 max-w-[75dvw]"
      >
        <div class="transition-all rounded-sm overflow-hidden">
          <div
            :class="{
              'h-[320px] aspect-[4/4] tablet:aspect-[4/3]': img.ar === '4:3',
              'h-[320px] aspect-[3/4]': img.ar === '3:4',
            }"
          >
            <NuxtImg
              :src="img.src"
              :alt="img.alt"
              format="webp"
              :lazy="true"
              class="h-full object-cover"
              v-show="isImageLoaded[i]"
            />
            <div
              class="bg-gray-500 opacity-30 animate-pulse"
              :class="{
                'h-[320px] aspect-[4/4] tablet:aspect-[4/3]': img.ar === '4:3',
                'h-[320px] aspect-[3/4]': img.ar === '3:4',
              }"
              v-if="!isImageLoaded[i]"
            />
          </div>
        </div>
      </li>
    </ul>
    <div
      class="absolute w-full top-[calc(50%-13.5px)] hidden laptop:flex justify-between"
    >
      <button @click="scrollBack" class="arrow-button ml-4">
        <ChevronLeftIcon class="w-6 h-6 pr-[1px]" />
      </button>
      <button @click="scrollNext" class="arrow-button mr-4">
        <ChevronRightIcon class="w-6 h-6 pl-[1px]" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.arrow-button {
  @apply grid items-center justify-center h-6 w-6 rounded-full opacity-40 hover:opacity-100 transition-all text-stone-900 dark:text-gray-200 dark:bg-black bg-gray-100;
}
</style>
