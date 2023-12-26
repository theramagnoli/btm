<script setup lang="ts">
import { onUnmounted, ref } from "#imports";
import reviews from "assets/json/reviews";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/vue/16/solid";
import { Review } from "~/types/Review";

const emit = defineEmits<{
  (event: "review-clicked", data: Review): void;
}>();

const sliderIsPlaying = ref(true);
const sliderInterval = ref<NodeJS.Timer | null>();
const isImageLoaded = ref<Boolean[]>([]);
const msBetweenSlides = 3500;
const slideDesktopPx = 440;
const typedReviews = ref<Review[]>(Object.values(reviews));

function preloadImages() {
  for (let i = 0; i < typedReviews.value.length; i++) {
    const img = new Image();
    img.src = typedReviews.value[i].img ?? "";
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
      class="flex snap-x snap-mandatory overflow-x-auto laptop:rounded-md max-w-[100dvw] laptop:max-w-[550px] gap-6 laptop:gap-8 scroll-smooth"
      id="slider"
    >
      <li
        v-for="(review, index) in typedReviews"
        :key="index"
        class="snap-center laptop:snap-start laptop:last:snap-end laptop:first:snap-start first:ml-6 last:mr-6 cursor-pointer group"
        @click="emit('review-clicked', review)"
      >
        <div class="relative overflow-hidden m-auto transition-all rounded-md">
          <Transition name="fade" :duration="400">
            <NuxtImg
              format="webp"
              :src="review.img ?? ''"
              :lazy="true"
              class="absolute inset-0 w-full h-full object-cover object-center fine:group-hover:brightness-[0.8] transition-all duration-300 ease-in-out"
              v-if="isImageLoaded[index]"
            />
            <div
              class="absolute inset-0 w-full h-full bg-stone-300 dark:stone-600 opacity-30 animate-pulse rounded-md laptop:rounded-none"
              v-else
            />
          </Transition>
          <div
            class="absolute inset-0 h-full w-full bg-gradient-radial-to-t from-black via-black/30"
            v-if="isImageLoaded[index]"
          />
          <div
            class="relative h-[27.5rem] laptop:h-[27.5rem] w-[22rem] max-w-[75dvw] laptop:w-[22rem] pb-8 flex flex-col-reverse justify-between items-center m-auto px-6"
          >
            <div class="grid justify-center w-full">
              <div class="flex justify-center gap-1">
                <StarIcon
                  v-for="n in 5"
                  :key="n"
                  class="size-5 fill-amber-400 dark:fill-amber-600 drop-shadow-md"
                />
              </div>
              <p
                class="mt-2 text-stone-100 text-center laptop:text-xl drop-shadow-xl font-medium leading-snug tracking-loose"
              >
                {{ review.headline }}
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div
      class="hidden tablet:flex absolute top-4 right-10 laptop:right-4 gap-2 p-1 rounded-full bg-stone-100/60 dark:bg-stone-800/60"
    >
      <button
        @click="scrollBack"
        class="grid items-center justify-center h-6 w-6 rounded-full transition-all text-stone-900 dark:text-stone-200 dark:bg-black/40 bg-gray-100/40 hover:bg-stone-200 dark:hover:bg-black"
      >
        <ChevronLeftIcon class="w-6 h-6" />
      </button>
      <button
        @click="scrollNext"
        class="grid items-center justify-center h-6 w-6 rounded-full transition-all text-stone-900 dark:text-stone-200 dark:bg-black/40 bg-gray-100/40 hover:bg-stone-200 dark:hover:bg-black"
      >
        <ChevronRightIcon class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>
