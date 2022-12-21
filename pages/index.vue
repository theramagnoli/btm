<template>
  <div class="c-div">
    <h1>Enjoy an amazing experience, not a tour</h1>
    <ul
      class="w-full flex gap-x-2 snap-x snap-mandatory overflow-x-auto scroll-smooth laptop:rounded-lg"
      id="slider"
    >
      <li
        v-for="(review, i) in data.reviews"
        :key="i"
        class="snap-center laptop:last:snap-end laptop:first:snap-start"
      >
        <div class="relative overflow-hidden m-auto transition-all">
          <img
            :src="review.img"
            alt=""
            class="absolute inset-0 w-full h-full object-cover object-center"
            v-show="isImageLoaded[i]"
            @load="isImageLoaded[i] = true"
          />
          <div
            class="absolute inset-0 w-full h-full bg-gray-500 opacity-30 animate-pulse"
            v-if="!isImageLoaded[i]"
          />
          <div
            class="absolute inset-0 h-full w-full bg-gradient-radial-to-t from-black via-transparent"
            v-else
          />
          <div
            class="relative h-[250px] w-[300px] tablet:w-[444.4px] p-2 flex flex-col justify-between items-center"
          >
            <span></span>
            <div class="grid justify-center w-full">
              <div class="flex justify-center">
                <StarIcon
                  v-for="n in 5"
                  :key="n"
                  class="h-5 w-5 text-yellow-600 drop-shadow-md"
                />
              </div>
              <h3
                class="leading-tight mt-1 text-gray-200 text-center drop-shadow-lg"
              >
                <a :href="review.ref" target="_blank">"{{ review.title }}"</a>
              </h3>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- slider arrows -->
    <div class="relative -top-[139px] hidden laptop:flex justify-between">
      <button
        @click="scrollBack()"
        class="grid items-center justify-center h-7 w-7 rounded-full hover:scale-110 transition-all text-stone-900 dark:text-gray-200 dark:bg-black bg-gray-100 ml-2"
      >
        <ChevronLeftIcon class="w-7 h-7" />
      </button>
      <button
        @click="scrollNext()"
        class="grid items-center justify-center h-7 w-7 rounded-full hover:scale-110 transition-all text-stone-900 dark:text-gray-200 dark:bg-black bg-gray-100 mr-2"
      >
        <ChevronRigthIcon class="w-7 h-7" />
      </button>
    </div>

    <div>
      <div class="p-div laptop:-mt-2">
        <p
          v-for="paragraph of description"
          :key="paragraph"
          class="last:font-semibold laptop:px-5"
        >
          {{ paragraph }}
        </p>
      </div>
      <h1>We help you discover the best of Mexico</h1>
      <div class="grid px-5">
        <ul
          class="gap-y-3 grid tablet:flex flex-wrap justify-center tablet:px-0"
        >
          <li
            v-for="benefit of data.list"
            :key="benefit"
            class="flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-2 tablet:mx-2 mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>{{ benefit }}</p>
          </li>
        </ul>
      </div>
    </div>

    <h1>Frequently asked questions</h1>
    <div class="grid gap-y-4">
      <details
        class="mx-5 laptop:mx-0 group"
        v-for="question of data.faq"
        :key="question"
      >
        <summary class="flex items-center gap-x-4 transition-all group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mb-1 transition-all group-open:rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <p>{{ question.question }}</p>
        </summary>
        <div class="flex">
          <p
            class="border-l-2 border-gray-800 dark:border-gray-300 ml-[7px] pl-3 py-3"
          >
            {{ question.answer }}
          </p>
        </div>
      </details>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from "#imports";
import data from "../assets/json/inicio.json";
import ChevronRigthIcon from "assets/icons/ChevronRigthIcon.vue";
import ChevronLeftIcon from "assets/icons/ChevronLeftIcon";
import StarIcon from "assets/icons/StarIcon";

const description = data.desc.split("#");
const sliderIsPlaying = ref(true);
const sliderInterval = ref<NodeJS.Timer | null>();
const isImageLoaded = ref<Boolean[]>([]);

function scrollNext() {
  const slider = document.getElementById("slider");
  if (slider) {
    let width = slider.scrollWidth - 444;
    const scroll = (slider.scrollLeft += 444);
    if (scroll > width) {
      slider.scrollLeft = 0;
    }
    restartInterval();
  }
}

function scrollBack() {
  const slider = document.getElementById("slider");
  if (slider) {
    const scroll = (slider.scrollLeft -= 444);
    if (scroll < -400) {
      slider.scrollLeft = 444 * Object.keys(data.reviews).length;
    }
    restartInterval();
  }
}

function restartInterval() {
  if (sliderInterval.value) {
    clearInterval(sliderInterval.value);
  }
  autoplaySlider();
}

function autoplaySlider() {
  sliderInterval.value = setInterval(() => {
    if (window.matchMedia("(min-width: 800px)").matches && sliderIsPlaying) {
      scrollNext();
    }
  }, 5000);
}

onUnmounted(() => {
  if (sliderInterval.value) {
    clearInterval(sliderInterval.value);
  }
});

autoplaySlider();
</script>

<style>
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
</style>
