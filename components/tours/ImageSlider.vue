<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/16/solid";
import { ref } from "#imports";
import { useMediaQuery } from "@vueuse/core";

const isMobile = useMediaQuery("(max-width: 520px)");

const props = defineProps<{
  images: {
    src: string;
    alt: string;
    ar: "4:3" | "3:4";
  }[];
  orientation: "horizontal" | "vertical";
}>();

const sliderIsPlaying = true;
const sliderInterval = ref<NodeJS.Timer | null>();
const msBetweenSlides = 3500;
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
  const slider = document.getElementById("slider");
  if (slider) {
    if (props.orientation === "horizontal") {
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
  const slider = document.getElementById("slider");
  if (slider) {
    if (props.orientation === "horizontal") {
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
    if (window.matchMedia("(min-width: 1000px)").matches && sliderIsPlaying) {
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
  <div class="w-full relative">
    <ul
      class="flex snap-mandatory scroll-smooth laptop:rounded-md overflow-hidden"
      :class="{
        'snap-x gap-x-6 overflow-x-auto': props.orientation === 'horizontal',
        'snap-y gap-y-6 laptop:h-[90dvh] laptop:max-h-[725px] flex-col pointer-events-none overflow-y-auto':
          props.orientation === 'vertical',
      }"
      id="slider"
    >
      <li
        v-for="(img, i) of images"
        :key="i"
        class="snap-center laptop:snap-start first:ml-6 last:mr-6 laptop:first:ml-0 laptop:last:mr-0 max-w-[75dvw]"
      >
        <div
          class="overflow-hidden transition-all rounded-md"
          :class="{
            'aspect-[4/4] tablet:aspect-[4/4]': img.ar === '4:3',
            'aspect-[3/4]': img.ar === '3:4',
            'h-[320px]': props.orientation === 'horizontal',
          }"
        >
          <!-- TODO: Fix transition -->
          <NuxtImg
            :src="img.src"
            :alt="img.alt"
            format="webp"
            :lazy="true"
            class="w-full h-full object-cover object-center"
            v-if="isImageLoaded[i]"
          />
          <div
            class="w-full h-full bg-gray-500 opacity-30 animate-pulse rounded-md laptop:rounded-none"
            v-else
          />
        </div>
      </li>
    </ul>
    <div
      class="absolute top-4 right-10 laptop:right-4 gap-2 p-1 rounded-full bg-stone-100/60 dark:bg-stone-800/60 tablet:flex flex-row laptop:flex-col"
      v-if="!isMobile"
    >
      <button
        @click="scrollBack"
        class="grid items-center justify-center h-6 w-6 rounded-full transition-all text-stone-900 dark:text-stone-200 dark:bg-black/40 bg-gray-100/40 hover:bg-stone-200 dark:hover:bg-black"
      >
        <ChevronLeftIcon
          class="w-6 h-6 laptop:rotate-90"
          :class="props.orientation === 'vertical' ? 'mb-[3px]' : 'mr-[2px]'"
        />
      </button>
      <button
        @click="scrollNext"
        class="grid items-center justify-center h-6 w-6 rounded-full transition-all text-stone-900 dark:text-stone-200 dark:bg-black/40 bg-gray-100/40 hover:bg-stone-200 dark:hover:bg-black"
      >
        <ChevronRightIcon
          class="w-6 h-6 laptop:rotate-90"
          :class="props.orientation === 'vertical' ? 'mb-[3px]' : 'ml-[2px]'"
        />
      </button>
    </div>
  </div>
</template>
