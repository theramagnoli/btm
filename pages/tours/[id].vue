<template>
  <div class="container-div">
    <div class="flex items-center">
      <NuxtLink
        to="/tours"
        class="ml-4 laptop:ml-0 flex items-center gap-2 text-stone-900 dark:text-gray-200 rounded-full mt-2"
      >
        <ArrowLeftIcon class="w-6 h-6" />
      </NuxtLink>
      <h1 class="text-left">{{ tour.title }} Tour</h1>
    </div>

    <ul
      class="w-full flex gap-x-4 snap-x snap-mandatory overflow-x-auto scroll-smooth laptop:rounded-lg"
      id="slider"
    >
      <li
        v-for="(img, i) of tour.imgs"
        :key="i"
        class="snap-center laptop:snap-start first:ml-4 last:mr-4 laptop:first:ml-0 laptop:last:mr-0"
      >
        <div class="relative transition-all rounded-lg overflow-hidden">
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
    <div class="grid tablet:justify-end mt-8 laptop:mt-0 mx-4 laptop:mx-0">
      <button
        class="rounded-lg items-center justify-center font-semibold transition-all flex bg-stone-900 dark:bg-gray-200 py-2 px-4 text-gray-200 dark:text-stone-900 flex gap-x-2 align-middle text-left"
        @click="toFareHarborItem(tour.book)"
      >
        <CalendarIcon class="h-4 w-4 float-left" />
        <span class="font-normal -mb-1"> Book the {{ tour.title }} tour </span>
      </button>
    </div>

    <div class="paragraph-div text-left">
      <p v-for="paragraph of tour.desc" :key="paragraph">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead, useRoute, useRouter } from "nuxt/app";
import untypedTours from "assets/json/tours.json";
import { ref } from "#imports";
import { Tours } from "assets/entities/Tour";
import CalendarIcon from "assets/icons/CalendarIcon.vue";
import ChevronRightIcon from "assets/icons/ChevronRightIcon.vue";
import ChevronLeftIcon from "assets/icons/ChevronLeftIcon.vue";
import ArrowLeftIcon from "assets/icons/ArrowLeftIcon.vue";

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
    view: { item: +itemNo },
  });
}
</script>

<style scoped lang="postcss">
.arrow-button {
  @apply grid items-center justify-center h-6 w-6 rounded-full opacity-40 hover:opacity-100 transition-all text-stone-900 dark:text-gray-200 dark:bg-black bg-gray-100;
}
</style>
