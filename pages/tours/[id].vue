<script setup lang="ts">
import { useRoute, useRouter } from "nuxt/app";
import { getTourById } from "assets/json/tours";
import { CalendarIcon, ArrowLeftIcon } from "@heroicons/vue/16/solid";
import ImageSlider from "~/components/tours/ImageSlider.vue";
import { useMediaQuery } from "@vueuse/core";
import { Tour, emptyTour } from "assets/entities/Tour";

const route = useRoute();
const router = useRouter();
let id = route.params.id as string;
const tour = ref<Tour>(emptyTour);
const isTablet = useMediaQuery("(max-width: 1000px)");

const untypedTour = getTourById(id);
if (untypedTour) {
  tour.value = untypedTour;
} else {
  router.push({ path: "/404" });
}

useHeadSafe({
  title: `${tour.value?.title} Tour | Boutique Tours Mexico`,
  meta: [{ name: "description", content: tour.value?.desc[0] }],
});

onErrorCaptured(() => {
  router.push({ path: "/404" });
});

function toFareHarborItem(itemId: string) {
  return !FH.open({
    shortname: "boutiquetoursmexico",
    flow: 278797,
    view: { item: Number(itemId) },
  });
}
</script>

<template>
  <div class="container-div">
    <div
      class="justify-start laptop:gap-8 laptop:mt-8 px-0 laptop:px-6"
      :class="{
        'grid grid-cols-[6fr_4fr]': !isTablet,
        'flex flex-col': isTablet,
      }"
    >
      <div class="flex flex-col gap-4 pt-4 pb-8 px-6 laptop:px-0 w-full">
        <div class="flex gap-8">
          <NuxtLink
            to="/tours"
            class="flex items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-30"
          >
            <ArrowLeftIcon class="size-5" /> Return
          </NuxtLink>
          <button
            @click="toFareHarborItem(tour.book)"
            class="flex items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-30"
          >
            <CalendarIcon class="size-5" /> Book this tour
          </button>
        </div>
        <h1>{{ tour.title }} Tour</h1>
        <div class="paragraph-div px-0 mt-4 text-left" v-if="!isTablet">
          <p
            v-for="paragraph of tour.desc"
            :key="paragraph"
            class="hyphens-auto"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
      <ImageSlider
        :images="tour.imgs"
        :orientation="isTablet ? 'horizontal' : 'vertical'"
      />
      <div class="paragraph-div mt-6 text-left text-stone-200" v-if="isTablet">
        <p v-for="paragraph of tour.desc" :key="paragraph" class="hyphens-auto">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.background {
  background-color: green !important;
}
</style>
