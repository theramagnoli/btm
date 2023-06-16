<script setup lang="ts">
import { useHead, useRoute, useRouter } from "nuxt/app";
import { getTourById } from "assets/json/tours";
import { CalendarIcon, ArrowLeftIcon } from "@heroicons/vue/20/solid";
import ImageSlider from "~/components/tours/ImageSlider.vue";

const route = useRoute();
const router = useRouter();
let id = route.params.id as string;
const tour = ref(getTourById(id));

if (tour === null) {
  router.push({ path: "/404" });
} else {
  useHead({
    title: `${tour.value?.title} Tour | Boutique Tours Mexico`,
    meta: [{ name: "description", content: tour.value?.desc[0] }],
  });
}

function toFareHarborItem(itemNo: string) {
  return !FH.open({
    shortname: "boutiquetoursmexico",
    flow: 278797,
    view: { item: +itemNo },
  });
}
</script>

<template>
  <div class="container-div">
    <div
      class="flex flex-col laptop:flex-row justify-start items-center laptop:gap-8 laptop:mt-8 px-0 laptop:px-4"
    >
      <div class="flex flex-col gap-4 pt-4 pb-8 px-4 laptop:px-0 w-full">
        <div class="flex gap-8">
          <NuxtLink
            to="/tours"
            class="flex items-center gap-2 text-stone-200 opacity-60 hover:opacity-100 transition-all duration-30"
          >
            <ArrowLeftIcon class="w-5 h-5" /> Return
          </NuxtLink>
          <button
            @click="toFareHarborItem(tour.book)"
            class="flex items-center gap-2 text-stone-200 opacity-60 hover:opacity-100 transition-all duration-30"
          >
            <CalendarIcon class="w-5 h-5" /> Book this tour
          </button>
        </div>
        <h1 class="text-stone-200">{{ tour.title }} Tour</h1>
      </div>
      <ImageSlider :images="tour.imgs" />
    </div>
    <div class="paragraph-div text-left text-stone-200 px-4">
      <p v-for="paragraph of tour.desc" :key="paragraph" class="hyphens-auto">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<style lang="postcss">
.background {
  background-color: green !important;
}
</style>
