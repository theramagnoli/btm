<script setup lang="ts">
import { getTourById } from 'assets/json/tours';
import { CalendarIcon, ArrowLeftIcon } from '@heroicons/vue/16/solid';
import { useMediaQuery } from '@vueuse/core';
import { Tour, emptyTour } from '~/types/Tour';
import ImageSlider from '~/components/tours/ImageSlider.vue';
import { tourColorDictionary } from 'assets/json/tourColorDictionary';

const route = useRoute();
const router = useRouter();
let id = route.params.id as string;
const tour = ref<Tour>(emptyTour);
const isWidthBellow1000px = useMediaQuery('(max-width: 1000px)');

const untypedTour = getTourById(id);
if (untypedTour) tour.value = untypedTour;
else router.push({ path: '/404' });

useHeadSafe({
  title: `${tour.value?.title} Tour | Boutique Tours Mexico`,
  meta: [{ name: 'description', content: tour.value?.desc[0] }],
});

onErrorCaptured(() => {
  router.push({ path: '/404' });
});

function toFareHarborItem(itemId: string) {
  return !FH.open({
    shortname: 'boutiquetoursmexico',
    flow: 278797,
    view: { item: Number(itemId) },
  });
}
</script>

<template>
  <div
    class="m-auto flex min-h-[calc(100vh-234px)] flex-col overflow-hidden pb-16 pt-[120px] text-stone-900 laptop:max-w-5xl laptop:pt-[100px] dark:text-stone-200"
  >
    <div
      class="justify-start px-0 laptop:mt-8 laptop:gap-8 laptop:px-6"
      :class="{
        'grid grid-cols-[6fr_4fr]': !isWidthBellow1000px,
        'flex flex-col': isWidthBellow1000px,
      }"
    >
      <div class="flex w-full flex-col gap-4 px-6 pb-8 laptop:px-0">
        <div class="flex gap-4">
          <NuxtLink
            to="/tours"
            :class="`flex aspect-square size-10 items-center justify-center rounded-full bg-opacity-50 p-2 transition-all duration-300 hover:bg-opacity-80 dark:bg-opacity-50 bg-${tourColorDictionary[tour.id]}-50 dark:bg-${tourColorDictionary[tour.id]}-900`"
          >
            <ArrowLeftIcon class="size-5" />
          </NuxtLink>
          <button
            @click="toFareHarborItem(tour.book)"
            :class="`flex h-10 items-center gap-2 rounded-full bg-opacity-50 p-2 pl-3 pr-4 transition-all duration-300 hover:bg-opacity-80 dark:bg-opacity-50 bg-${tourColorDictionary[tour.id]}-50 dark:bg-${tourColorDictionary[tour.id]}-900`"
          >
            <CalendarIcon class="size-5" /> Book this tour
          </button>
        </div>
        <h1>{{ tour.title }} Tour</h1>
        <Paragraphs :paragraphs="tour.desc" v-if="!isWidthBellow1000px" />
      </div>
      <ImageSlider
        :images="tour.images"
        :orientation="isWidthBellow1000px ? 'horizontal' : 'vertical'"
      />
      <Paragraphs
        :paragraphs="tour.desc"
        v-if="isWidthBellow1000px"
        class="mt-6 px-6"
      />
    </div>
  </div>
</template>
