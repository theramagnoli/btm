<template>
  <div>
    <div class="c-div">
      <div class="flex items-center">
        <nuxt-link
          to="/tours"
          class="hover:-translate-x-1 transition-transform mt-1 ml-5 laptop:ml-0 mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </nuxt-link>
        <h1 class="text-left">{{ tour.titulo }} Tour</h1>
      </div>

      <!-- slider -->
      <ul
        class="w-full flex gap-x-2 snap-x snap-mandatory overflow-x-auto scroll-smooth laptop:rounded-md"
        id="slider"
      >
        <li
          v-for="(img, i) of tour.imgs"
          :key="i"
          class="snap-center laptop:snap-start"
        >
          <div
            class="relative overflow-hidden transition-all rounded-md first:rounded-l-none last:rounded-r-none"
          >
            <div
              class="relative"
              :class="
                img.ar == '4:3'
                  ? 'h-[250px] w-[333.3px]'
                  : 'h-[250px] w-[188px]'
              "
            >
              <img
                :src="img.src"
                :alt="img.alt"
                class="h-full"
                @load="imgLoaded[i] = true"
                v-show="imgLoaded[i]"
              />
              <div
                class="bg-gray-500 opacity-30 animate-pulse"
                :class="
                  img.ar == '4:3'
                    ? 'h-[250px] w-[333.3px]'
                    : 'h-[250px] w-[188px]'
                "
                v-if="!imgLoaded[i]"
              />
            </div>
          </div>
        </li>
      </ul>
      <div class="relative -top-[139px] hidden laptop:flex justify-between">
        <button
          @click="scrollback()"
          class="w-10 grid justify-end items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 p-[2px] rounded-full hover:scale-110 transition-al text-stone-900 dark:text-gray-200 dark:bg-black bg-gray-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          @click="scrollnext()"
          class="w-10 grid justify-start items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 p-[2px] rounded-full hover:scale-110 transition-all text-stone-900 dark:text-gray-200 dark:bg-black bg-gray-100"
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
        </button>
      </div>
      <div class="grid tablet:justify-end laptop:-mt-2 mt-8 mx-5 laptop:mx-0">
        <button
          class="border-[2px] rounded-md items-center justify-center font-semibold transition-all flex border-stone-900 dark:border-gray-200 px-2"
          @click="toFareharborItem(tour.book)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 pr-2 mr-2 border-r-2 border-stone-900 dark:border-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p class="pt-1 w-full leading-tight">
            Book the {{ tour.titulo }} tour
          </p>
        </button>
      </div>
      <!-- description -->
      <div class="p-div text-left">
        <p v-for="parrafo of tour.desc" :key="parrafo">{{ parrafo }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useAsyncData, useHead, useRoute, useRouter} from "nuxt/app";
let route = useRoute();
let router = useRouter();

let id = route.params.id;
let { data: tour } = await useAsyncData("tour", () =>
  $fetch("/data/tours.json")
);
tour = tour.value[id];
if (tour === undefined) {
  router.push({ path: "/404" });
} else {
  if (typeof tour.desc === "string" || tour.desc instanceof String) {
    tour.desc = tour.desc.split("#");
  }
  useHead({
    title: `${tour.titulo} Tour | Boutique Tours Mexico`,
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    charset: "utf-8",
    meta: [{ name: "description", content: tour.desc[0] }],
  });
}
</script>

<script>
export default {
  data() {
    return {
      imgLoaded: [],
    };
  },
  methods: {
    scrollnext() {
      let width = document.getElementById("slider").scrollWidth - 200;
      const scroll = (document.getElementById("slider").scrollLeft += 200);
      if (scroll > width - 400) {
        document.getElementById("slider").scrollLeft = 0;
      }
    },
    scrollback() {
      const scroll = (document.getElementById("slider").scrollLeft -= 200);
      if (scroll < -140) {
        document.getElementById("slider").scrollLeft =
          200 * this.tour.imgs.length;
      }
    },
    toFareharborItem(itemNo) {
      return !FH.open({
        shortname: "boutiquetoursmexico",
        flow: 278797,
        view: { item: itemNo },
      });
    },
  },
};
</script>
