<template>
  <div class="c-div">
    <div>
      <div class="flex items-center">
        <nuxt-link
          to="/tours"
          class="ml-4 laptop:ml-0 flex items-center gap-2 bg-stone-900 dark:bg-gray-200 text-gray-200 dark:text-stone-900 px-2 rounded-full mt-2 py-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clip-rule="evenodd"
            />
          </svg>
        </nuxt-link>
        <h1 class="text-left">{{ tour.title }} Tour</h1>
      </div>

      <ul
        class="w-full flex gap-x-4 snap-x snap-mandatory overflow-x-auto scroll-smooth laptop:rounded-3xl"
        id="slider"
      >
        <li
          v-for="(img, i) of tour.imgs"
          :key="i"
          class="snap-center laptop:snap-start first:ml-4 last:mr-4 laptop:first:ml-0 laptop:last:mr-0"
        >
          <div class="relative transition-all rounded-3xl overflow-hidden">
            <div
              class="relative"
              :class="
                img.ar === '4:3'
                  ? 'h-[320px] aspect-[4/4] tablet:aspect-[4/3]'
                  : 'h-[320px] aspect-[3/4]'
              "
            >
              <img
                :src="img.src"
                :alt="img.alt"
                class="h-full object-cover"
                @load="isImageLoaded[i] = true"
                v-show="isImageLoaded[i]"
              />
              <div
                class="bg-gray-500 opacity-30 animate-pulse"
                :class="
                  img.ar === '4:3'
                    ? 'h-[320px] aspect-[4/4] tablet:aspect-[4/3]'
                    : 'h-[320px] aspect-[3/4]'
                "
                v-if="!isImageLoaded[i]"
              />
            </div>
          </div>
        </li>
      </ul>
      <div class="relative -top-[164px] hidden laptop:flex justify-between">
        <button @click="scrollBack()" class="arrow-button ml-4">
          <ChevronLeftIcon class="w-6 h-6 pr-[1px]" />
        </button>
        <button @click="scrollNext()" class="arrow-button mr-4">
          <ChevronRightIcon class="w-6 h-6 pl-[1px]" />
        </button>
      </div>
      <div
        class="grid tablet:justify-end mt-5 laptop:-mt-2 mt-8 mx-4 laptop:mx-0"
      >
        <button
          class="rounded-full items-center justify-center font-semibold transition-all flex bg-stone-900 dark:bg-gray-200 p-1 px-4 text-gray-200 dark:text-stone-900 flex gap-x-2 align-middle"
          @click="toFareHarborItem(tour.book)"
        >
          <CalendarIcon
            class="h-4 w-4 border-r-2 border-stone-900 dark:border-gray-200"
          />
          <span class="mt-1 font-normal">Book the {{ tour.title }} tour</span>
        </button>
      </div>

      <div class="p-div text-left">
        <p v-for="paragraph of tour.desc" :key="paragraph">{{ paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead, useRoute, useRouter } from "nuxt/app";
import untypedTours from "assets/json/tours.json";
import { ref } from "#imports";
import { Tours } from "assets/entities/Tour";
import CalendarIcon from "assets/icons/CalendarIcon";
import ChevronRightIcon from "assets/icons/ChevronRightIcon.vue";
import ChevronLeftIcon from "assets/icons/ChevronLeftIcon";

const tours: Tours = untypedTours;
const route = useRoute();
const router = useRouter();
let id = route.params.id as string;
const tour = tours[id];
const isImageLoaded = ref<Boolean[]>([]);
const slideWidthInPx = 300;

if (tour === undefined) {
  router.push({ path: "/404" });
} else {
  useHead({
    title: `${tour.title} Tour | Boutique Tours Mexico`,
    meta: [{ name: "description", content: tour.desc[0] }],
  });
}

function scrollNext() {
  const slider = document.getElementById("slider");
  if (slider) {
    let width = slider.scrollWidth - slideWidthInPx;
    const scroll = (slider.scrollLeft += slideWidthInPx);
    if (scroll > width - 400) {
      slider.scrollLeft = 0;
    }
  }
}

function scrollBack() {
  const slider = document.getElementById("slider");
  if (slider) {
    const scroll = (slider.scrollLeft -= 300);
    if (scroll < -140) {
      slider.scrollLeft = 300 * tour.imgs.length;
    }
  }
}

function toFareHarborItem(itemNo: string) {
  return !FH.open({
    shortname: "boutiquetoursmexico",
    flow: 278797,
    view: { item: itemNo },
  });
}
</script>

<style scoped lang="postcss">
.arrow-button {
  @apply grid items-center justify-center h-6 w-6 rounded-full opacity-40 hover:opacity-100 transition-all text-stone-900 dark:text-gray-200 dark:bg-black bg-gray-100;
}
</style>
