<template>
  <div class="c-div">
    <div>
      <h1>
        An amazing experience, <br />
        not a tour
      </h1>
      <ul
        class="w-full flex snap-x gap-x-4 snap-mandatory overflow-x-auto scroll-smooth laptop:rounded-3xl"
        id="slider"
      >
        <li
          v-for="(review, i) in data.reviews"
          :key="i"
          class="snap-center laptop:last:snap-end laptop:first:snap-start first:ml-4 last:mr-4 laptop:first:ml-0 laptop:last:mr-0"
        >
          <div
            class="relative overflow-hidden m-auto transition-all rounded-3xl overflow-hidden"
          >
            <img
              :src="review.img"
              alt=""
              class="absolute inset-0 w-full h-full object-cover object-center"
              v-show="isImageLoaded[i]"
              @load="isImageLoaded[i] = true"
            />
            <div
              class="absolute inset-0 w-full h-full bg-gray-500 opacity-30 animate-pulse rounded-3xl"
              v-if="!isImageLoaded[i]"
            />
            <div
              class="absolute inset-0 h-full w-full bg-gradient-radial-to-t from-black via-black/30"
              v-else
            />
            <div
              class="relative h-[400px] w-[300px] tablet:w-[400px] laptop:w-[550px] pb-4 flex flex-col-reverse justify-between items-center max-w-[70%] m-auto"
            >
              <div class="grid justify-center w-full">
                <div class="flex justify-center gap-2">
                  <StarIcon
                    v-for="n in 5"
                    :key="n"
                    class="h-6 w-6 text-yellow-600 drop-shadow-md"
                  />
                </div>
                <h3 class="mt-2 text-gray-200 text-center drop-shadow-2xl">
                  <a :href="review.ref" target="_blank">“{{ review.title }}”</a>
                </h3>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!-- slider arrows -->
      <div class="relative -top-[200px] hidden laptop:flex justify-between">
        <button
          @click="scrollBack()"
          class="grid items-center justify-center h-6 w-6 rounded-full opacity-40 hover:opacity-100 transition-all text-stone-900 dark:text-gray-200 dark:bg-black bg-gray-100 ml-4"
        >
          <ChevronLeftIcon class="w-6 h-6 pr-[1px]" />
        </button>
        <button
          @click="scrollNext()"
          class="grid items-center justify-center h-6 w-6 rounded-full opacity-40 hover:opacity-100 transition-all text-stone-900 dark:text-gray-200 dark:bg-black bg-gray-100 mr-4"
        >
          <ChevronRigthIcon class="w-6 h-6 pl-[1px]" />
        </button>
      </div>
      <div class="p-div mt-8 laptop:mt-2">
        <p
          v-for="paragraph of data.desc"
          :key="paragraph"
          class="last:font-semibold"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
    <div>
      <h1>We help you discover the best of Mexico</h1>
      <div class="grid px-4">
        <ul
          class="gap-y-4 grid tablet:flex flex-wrap justify-center tablet:px-0"
        >
          <li
            v-for="benefit of data.list"
            :key="benefit"
            class="flex items-center"
          >
            <CheckCircleIcon class="h-5 w-5 mr-2 tablet:mx-2 mb-1" />
            <p>{{ benefit }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <h1>Frequently asked questions</h1>
      <div class="grid gap-y-4 mb-4">
        <details
          class="mx-4 laptop:mx-0 group"
          v-for="question of data.faq"
          :key="question"
        >
          <summary
            class="flex items-center gap-x-2 transition-all group cursor-pointer"
          >
            <ArrowCircleIcon
              class="h-5 w-5 transition-all group-open:rotate-90"
            />
            <span class="mt-1">{{ question.question }}</span>
          </summary>
          <div class="flex">
            <p
              class="border-l-2 border-gray-800 dark:border-gray-300 ml-[9px] pl-4 py-4 mt-1"
            >
              {{ question.answer }}
            </p>
          </div>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from "#imports";
import data from "../assets/json/inicio.json";
import ChevronRigthIcon from "assets/icons/ChevronRigthIcon.vue";
import ChevronLeftIcon from "assets/icons/ChevronLeftIcon";
import StarIcon from "assets/icons/StarIcon";
import CheckCircleIcon from "assets/icons/CheckCircleIcon";
import ArrowCircleIcon from "assets/icons/ArrowCircleIcon";

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
    const scroll = (slider.scrollLeft -= 800);
    if (scroll < -400) {
      slider.scrollLeft = 800 * Object.keys(data.reviews).length;
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
