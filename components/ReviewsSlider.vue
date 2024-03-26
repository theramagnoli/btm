<script setup lang="ts">
import { onUnmounted, ref } from '#imports';
import reviews from 'assets/json/reviews';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from '@heroicons/vue/16/solid';
import { Review } from '~/types/Review';

const emit = defineEmits<{
  (event: 'review-clicked', data: Review): void;
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
    img.src = typedReviews.value[i].img ?? '';
    isImageLoaded.value.push(false);
    img.onload = () => {
      isImageLoaded.value[i] = true;
    };
  }
}

preloadImages();

function scrollNext() {
  const slider = document.getElementById('slider:reviews');
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
  const slider = document.getElementById('slider:reviews');
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
    if (window.matchMedia('(min-width: 1000px)').matches && sliderIsPlaying) {
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
      class="desktop::mt-0 mt-6 flex max-w-[100dvw] snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth laptop:max-w-[545px] laptop:gap-8 laptop:rounded-[30px]"
      id="slider:reviews"
    >
      <li
        v-for="(review, index) in typedReviews"
        :key="index"
        class="group cursor-pointer snap-center first:ml-6 last:mr-6 laptop:snap-start laptop:first:snap-start laptop:last:snap-end"
        @click="emit('review-clicked', review)"
      >
        <div
          class="relative m-auto overflow-hidden rounded-[30px] transition-all"
        >
          <Transition name="fade" :duration="400">
            <NuxtImg
              format="webp"
              :src="review.img ?? ''"
              :lazy="true"
              class="absolute inset-0 h-full w-full object-cover object-center transition-all duration-300 ease-in-out"
              v-if="isImageLoaded[index]"
            />
            <div
              class="dark:stone-600 absolute inset-0 h-full w-full animate-pulse rounded-[30px] bg-stone-300 opacity-30 laptop:rounded-none"
              v-else
            />
          </Transition>
          <div
            class="absolute inset-0 h-full w-full bg-gradient-radial-to-t from-black via-black/30"
            v-if="isImageLoaded[index]"
          />
          <div
            class="relative m-auto flex h-[27.5rem] w-[22rem] max-w-[75dvw] flex-col-reverse items-center justify-between px-6 pb-8 laptop:h-[27.5rem] laptop:w-[22rem]"
          >
            <div class="grid w-full justify-center">
              <div class="flex justify-center gap-1">
                <StarIcon
                  v-for="n in 5"
                  :key="n"
                  class="size-5 fill-amber-400 drop-shadow-md dark:fill-amber-600"
                />
              </div>
              <p
                class="tracking-loose mt-2 text-center font-medium leading-snug text-stone-100 drop-shadow-xl laptop:text-xl"
              >
                {{ review.headline }}
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div
      class="desktop::mt-0 absolute right-10 top-4 mt-6 hidden gap-2 rounded-full bg-stone-100/40 p-1 backdrop-blur-xl tablet:flex laptop:right-4 dark:bg-stone-800/40"
    >
      <button
        @click="scrollBack"
        class="grid h-6 w-6 items-center justify-center rounded-full bg-gray-100/40 text-stone-900 transition-all hover:bg-stone-200 dark:bg-black/40 dark:text-stone-200 dark:hover:bg-black"
      >
        <ChevronLeftIcon class="h-6 w-6" />
      </button>
      <button
        @click="scrollNext"
        class="grid h-6 w-6 items-center justify-center rounded-full bg-gray-100/40 text-stone-900 transition-all hover:bg-stone-200 dark:bg-black/40 dark:text-stone-200 dark:hover:bg-black"
      >
        <ChevronRightIcon class="h-6 w-6" />
      </button>
    </div>
  </div>
</template>
