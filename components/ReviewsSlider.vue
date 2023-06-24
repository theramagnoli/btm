<script setup lang="ts">
import { onUnmounted, ref } from "#imports";
import reviews from "../assets/json/reviews.json";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/vue/20/solid";

const sliderIsPlaying = ref(true);
const sliderInterval = ref<NodeJS.Timer | null>();
const isImageLoaded = ref<Boolean[]>([]);
const msBetweenSlides = 3500;
const slideDesktopPx = 400;
const typedReviews = ref<{ img: string; title: string; ref: string }[]>(
  Object.values(reviews)
);

function preloadImages() {
  for (let i = 0; i < typedReviews.value.length; i++) {
    const img = new Image();
    img.src = typedReviews.value[i].img;
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
    let width = slider.scrollWidth - slideDesktopPx;
    const scroll = (slider.scrollLeft += slideDesktopPx);
    if (scroll > width) {
      slider.scrollLeft = 0;
    }
    if (width - 1500 < scroll) {
      typedReviews.value.concat(Object.values(reviews));
    }
    restartInterval();
  }
}

function scrollBack() {
  const slider = document.getElementById("slider");
  if (slider) {
    const scroll = (slider.scrollLeft -= slideDesktopPx);
    if (scroll < -400) {
      slider.scrollLeft = slideDesktopPx * typedReviews.value.length;
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

onUnmounted(() => {
  if (sliderInterval.value) {
    clearInterval(sliderInterval.value);
  }
});

autoplaySlider();
</script>

<template>
  <div class="relative">
    <ul
      class="flex snap-x snap-mandatory overflow-x-auto laptop:rounded-sm max-w-[100dvw] laptop:max-w-[550px] gap-6 laptop:gap-8 scroll-smooth"
      id="slider"
    >
      <li
        v-for="(review, index) in typedReviews"
        :key="index"
        class="snap-center laptop:snap-start laptop:last:snap-end laptop:first:snap-start first:ml-4 last:mr-4"
      >
        <div class="relative overflow-hidden m-auto transition-all rounded-sm">
          <NuxtImg
            format="webp"
            :src="review.img"
            :lazy="true"
            class="absolute inset-0 w-full h-full object-cover object-center"
            v-if="isImageLoaded[index]"
          />
          <div
            class="absolute inset-0 w-full h-full bg-gray-500 opacity-30 animate-pulse rounded-sm laptop:rounded-none"
            v-if="!isImageLoaded[index]"
          />
          <div
            class="absolute inset-0 h-full w-full bg-gradient-radial-to-t from-black via-black/30"
            v-else
          />
          <div
            class="relative h-[27.5rem] laptop:h-[27.5rem] w-[22rem] max-w-[75dvw] laptop:w-[22rem] pb-8 flex flex-col-reverse justify-between items-center m-auto"
          >
            <div class="grid justify-center w-full">
              <div class="flex justify-center gap-1">
                <StarIcon
                  v-for="n in 5"
                  :key="n"
                  class="h-6 w-6 text-yellow-600 drop-shadow-md"
                />
              </div>
              <p
                class="mt-2 text-gray-200 text-center laptop:text-xl drop-shadow-xl font-medium leading-snug tracking-loose"
              >
                <a :href="review.ref" target="_blank">{{ review.title }}</a>
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div
      class="hidden absolute tablet:flex justify-between top-4 right-4 gap-4"
    >
      <button
        @click="scrollBack"
        class="grid items-center justify-center h-6 w-6 rounded-full transition-all text-stone-900 dark:text-gray-200 dark:bg-black/40 bg-gray-100/40 hover:bg-stone-200 dark:hover:bg-black"
      >
        <ChevronLeftIcon class="w-6 h-6" />
      </button>
      <button
        @click="scrollNext"
        class="grid items-center justify-center h-6 w-6 rounded-full transition-all text-stone-900 dark:text-gray-200 dark:bg-black/40 bg-gray-100/40 hover:bg-stone-200 dark:hover:bg-black"
      >
        <ChevronRightIcon class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>
