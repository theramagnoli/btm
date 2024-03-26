<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/16/solid';
import { ref } from 'vue';
import { useMediaQuery } from '@vueuse/core';

const isMobile = useMediaQuery('(max-width: 520px)');

const props = defineProps<{
  images: {
    src: string;
    alt: string;
    ar: '4:3' | '3:4';
  }[];
  orientation: 'horizontal' | 'vertical';
}>();

const sliderIsPlaying = true;
const sliderInterval = ref<NodeJS.Timer | null>();
const msBetweenSlides = 4000;
const verticalSlideLengthInPx = 350;
const horizontalSlideLengthInPx = 200;
const verticalSliderOffset = 100;
const horizontalSliderOffset = 300;
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
  const slider = document.getElementById('slider');
  if (slider) {
    if (props.orientation === 'horizontal') {
      let width = slider.scrollWidth - horizontalSlideLengthInPx;
      const scroll = (slider.scrollLeft += horizontalSlideLengthInPx);
      if (scroll > width - horizontalSliderOffset) {
        slider.scrollLeft = 0;
      }
    } else {
      let height = slider.scrollHeight - verticalSlideLengthInPx;
      const scroll = (slider.scrollTop += verticalSlideLengthInPx);
      if (scroll > height - verticalSliderOffset) {
        slider.scrollTop = 0;
      }
    }
    restartInterval();
  }
}

function scrollBack() {
  const slider = document.getElementById('slider');
  if (slider) {
    if (props.orientation === 'horizontal') {
      let width = slider.scrollWidth - horizontalSlideLengthInPx;
      const scroll = (slider.scrollLeft -= horizontalSlideLengthInPx);
      if (scroll <= -horizontalSlideLengthInPx) {
        slider.scrollLeft = width;
      }
    } else {
      let height = slider.scrollHeight - verticalSlideLengthInPx;
      const scroll = (slider.scrollTop -= verticalSlideLengthInPx);
      if (scroll < -verticalSliderOffset) {
        slider.scrollTop = height;
      }
    }
    restartInterval();
  }
}

function restartInterval() {
  if (sliderInterval.value) clearInterval(sliderInterval.value);
  autoplaySlider();
}

function autoplaySlider() {
  sliderInterval.value = setInterval(() => {
    if (window.matchMedia('(min-width: 1000px)').matches && sliderIsPlaying) {
      scrollNext();
    }
  }, msBetweenSlides);
}

onMounted(() => {
  autoplaySlider();
});

onUnmounted(() => {
  if (sliderInterval.value) {
    clearInterval(sliderInterval.value);
  }
});
</script>

<template>
  <div class="relative w-full">
    <ul
      class="flex snap-mandatory overflow-hidden scroll-smooth laptop:rounded-[35px]"
      :class="{
        'snap-x gap-x-6 overflow-x-auto': props.orientation === 'horizontal',
        'pointer-events-none snap-y flex-col gap-y-6 overflow-y-auto laptop:h-[90dvh] laptop:max-h-[725px]':
          props.orientation === 'vertical',
      }"
      id="slider"
    >
      <li
        v-for="(img, i) of images"
        :key="i"
        class="max-w-[75dvw] snap-center first:ml-6 last:mr-6 laptop:snap-start laptop:first:ml-0 laptop:last:mr-0"
        :class="{
          'h-[320px]': props.orientation === 'horizontal',
        }"
      >
        <div
          class="relative h-full w-full overflow-hidden rounded-[35px] transition-all"
          :class="{
            'aspect-[4/4]': img.ar === '4:3',
            'aspect-[3/4]': img.ar === '3:4',
          }"
        >
          <!-- TODO: Fix transition -->
          <NuxtImg
            :src="img.src"
            :alt="img.alt"
            format="webp"
            :lazy="true"
            class="absolute inset-0 h-full w-full object-cover object-center"
            v-if="isImageLoaded[i]"
          />
          <div
            class="h-full w-full animate-pulse rounded-[35px] bg-gray-500 opacity-30 laptop:rounded-none"
            v-else
          />
        </div>
      </li>
    </ul>
    <div
      class="absolute right-10 top-4 flex-row gap-2 rounded-full bg-stone-100/40 p-1 backdrop-blur-xl tablet:flex laptop:right-4 laptop:flex-col dark:bg-stone-800/40"
      v-if="!isMobile"
    >
      <button
        @click="scrollBack"
        class="grid size-6 items-center justify-center rounded-full bg-gray-100/40 text-stone-900 transition-all hover:bg-stone-200 dark:bg-black/40 dark:text-stone-200 dark:hover:bg-black"
      >
        <ChevronLeftIcon
          class="size-6 laptop:rotate-90"
          :class="props.orientation === 'vertical' ? 'mb-[3px]' : 'mr-[2px]'"
        />
      </button>
      <button
        @click="scrollNext"
        class="grid size-6 items-center justify-center rounded-full bg-gray-100/40 text-stone-900 transition-all hover:bg-stone-200 dark:bg-black/40 dark:text-stone-200 dark:hover:bg-black"
      >
        <ChevronRightIcon
          class="size-6 laptop:rotate-90"
          :class="props.orientation === 'vertical' ? 'mb-[3px]' : 'ml-[2px]'"
        />
      </button>
    </div>
  </div>
</template>
