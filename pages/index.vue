<script setup lang="ts">
import { description, benefits, testimonials } from "assets/json/home";
import { CheckCircleIcon } from "@heroicons/vue/20/solid";
import MainSlider from "../components/ReviewsSlider.vue";
import { useMediaQuery } from "@vueuse/core";
import { ArrowLongRightIcon } from "@heroicons/vue/24/solid";
import { watch } from "#imports";

const testimonialChunks = ref<Array<any>>([]);
const isMobile = useMediaQuery("(max-width: 768px)");
const isTablet = useMediaQuery("(max-width: 1000px)");

watch(
  isTablet,
  () => {
    const numberOfChunks = isTablet.value ? 2 : 3;
    const chunkSize = Math.ceil(testimonials.length / numberOfChunks);
    testimonialChunks.value = [];
    for (let i = 0; i < testimonials.length; i += chunkSize) {
      testimonialChunks.value.push(testimonials.slice(i, i + chunkSize));
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="container-div">
    <section
      class="grid laptop:flex justify-around items-end gap-x-8 desktop:gap-x-16 mt-4 px-4"
    >
      <div
        class="self-center laptop:px-0 laptop:max-w-[47%] space-y-6 mb-8 px-4"
      >
        <h1
          class="text-4xl tracking-tight bg-gradient-to-tl from-sky-700 to-green-700 dark:from-sky-600 dark:to-green-700 bg-clip-text text-transparent dark:text-transparent"
        >
          Not a tour, <br />
          but an amazing <br />
          experience
        </h1>
        <p
          class="font-sans text-stone-900 dark:text-stone-200 text-base hyphens-auto"
        >
          In
          <span class="font-medium">Boutique Tours Mexico</span> we offer you
          extraordinary experiences for your adventures in Mexico.
        </p>
        <NuxtLink
          to="/tours"
          class="mb-8 inline-flex items-center justify-center text-base font-medium text-stone-800 dark:text-stone-200 transition-all duration-300 ease-in-out border-b-2 border-stone-800 dark:border-stone-200 hover:border-sky-600 dark:hover:border-sky-600 hover:pl-4"
        >
          Discover our tours
          <ArrowLongRightIcon class="h-5 w-5 ml-2 mt-1" />
        </NuxtLink>
      </div>
      <MainSlider />
    </section>
    <Separator class="mt-0" v-if="!isMobile" />
    <div class="h-10 w-full" v-else />
    <section>
      <h1 class="text-center mb-8 px-4">
        We help you discover <br />
        the best of Mexico!
      </h1>
      <div class="grid gap-8">
        <div class="paragraph-div max-w-3xl m-auto">
          <p
            v-for="paragraph of description"
            :key="paragraph"
            class="hyphens-auto"
          >
            {{ paragraph }}
          </p>
        </div>
        <ul
          class="gap-y-4 tablet:flex grid flex-wrap justify-center tablet:px-0 max-w-3xl m-auto px-4"
        >
          <li
            v-for="benefit of benefits"
            :key="benefit"
            class="flex items-center"
          >
            <CheckCircleIcon class="h-4 w-4 mr-2 tablet:mx-2 min-w-[1.25rem]" />
            <p class="hyphens-auto">{{ benefit }}</p>
          </li>
        </ul>
      </div>
    </section>
    <Separator />
    <section>
      <h1 class="text-center mb-4 px-4">And don't just take our word for it</h1>
      <h1
        class="text-center mb-8 px-4 flex justify-center items-center flex-wrap normal-case font-medium text-lg font-sans tracking-normal"
      >
        We count with over 500 5-star reviews on TripAdvisor.
      </h1>
      <div
        class="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6 px-4 desktop-px-0"
      >
        <ul
          v-for="(testimonialChunk, index) in testimonialChunks"
          :key="index"
          class="space-y-6"
        >
          <li
            v-for="testimonial of testimonialChunk"
            :key="testimonial.title"
            class="bg-stone-100 dark:bg-stone-950 p-4 grid gap-2 rounded-sm dark:shadow-gray-800/50 text-sm"
          >
            <p>{{ testimonial.review }}</p>

            <div class="grid grid-cols-[auto_1fr]">
              <p class="font-medium text-stone-700 dark:text-stone-200">
                {{ testimonial.author }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
</style>
