<script setup lang="ts">
import { testimonials, faq, benefits, pitch } from 'assets/json/home';
import { StarIcon } from '@heroicons/vue/16/solid';
import MainSlider from '../components/ReviewsSlider.vue';
import { useMediaQuery } from '@vueuse/core';
import {
  ArrowRightIcon,
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/vue/16/solid';
import { watch, ref } from 'vue';
import { Review } from '~/types/Review';

const testimonialChunks = ref<Review[][]>([]);
const isTablet = useMediaQuery('(max-width: 999px)');
const areQuestionsOpen = ref<boolean[]>([false, false]);
const selectedReview = ref<Review | null>(null);

function adjustTestimonialChunks() {
  const chunkSize = isTablet.value ? 4 : 3;
  testimonialChunks.value = [];
  for (let i = 0; i < (isTablet.value ? 2 : 3); i++) {
    testimonialChunks.value.push(
      testimonials.slice(i * chunkSize, (i + 1) * chunkSize),
    );
  }
}

watch(isTablet, adjustTestimonialChunks, { immediate: true });
</script>

<template>
  <div
    class="m-auto flex min-h-[calc(100vh-234px)] flex-col overflow-hidden pb-16 pt-[120px] text-stone-900 laptop:max-w-5xl laptop:pt-[100px] dark:text-stone-200"
  >
    <section
      class="grid items-end justify-around gap-x-8 laptop:flex desktop:mt-4 desktop:gap-x-16 laptop:mx-6"
    >
      <div class="m-auto w-full space-y-6 px-6 laptop:px-0">
        <h1
          class="bg-gradient-to-tl from-sky-500 to-green-500 bg-clip-text text-4xl tracking-tight text-transparent brightness-[.85] tablet:text-5xl dark:text-transparent"
        >
          Not a tour, <br />
          but an amazing <br />
          experience
        </h1>
        <p>
          In <span class="font-medium">Boutique Tours Mexico</span> we offer you
          extraordinary experiences for your adventures in Mexico.
        </p>
        <NuxtLink
          to="/tours"
          class="group relative flex cursor-pointer items-center justify-between gap-2 overflow-hidden rounded-[20px] bg-green-300 p-4 pl-5 text-base/snug transition-all duration-300 ease-in-out fine:bg-opacity-85 fine:hover:bg-opacity-100 dark:bg-green-600 dark:fine:bg-opacity-85"
        >
          <WavesPatternGradient
            class="absolute right-0 opacity-10 transition-all duration-700 ease-in-out group-hover:translate-x-4 group-hover:scale-110 group-hover:opacity-40"
          />
          Discover our destinations
          <ArrowRightIcon class="size-5" />
        </NuxtLink>
      </div>
      <MainSlider
        @review-clicked="(clickedReview) => (selectedReview = clickedReview)"
      />
    </section>
    <Separator />
    <section class="flex w-full flex-col items-center justify-center">
      <ul
        class="mx-6 mb-8 flex max-w-2xl flex-row flex-wrap items-center gap-2 child:flex child:items-center child:gap-x-2 tablet:justify-center"
      >
        <li v-for="benefit in benefits">
          <span class="-my-4 text-6xl font-bold text-sky-300 dark:text-sky-700"
            >·</span
          >
          {{ benefit }}
        </li>
      </ul>
      <h1
        class="mb-6 bg-gradient-to-tl from-emerald-500 to-sky-500 bg-clip-text px-6 text-center tracking-tight text-transparent brightness-[.85] dark:text-transparent"
      >
        We help you discover the best of Mexico!
      </h1>
      <Paragraphs class="mx-auto px-6 text-center" :paragraphs="pitch" />
    </section>
    <Separator />
    <section>
      <h1
        class="mb-4 bg-gradient-to-tl from-green-500 to-emerald-500 bg-clip-text px-6 text-center tracking-tight text-transparent brightness-[.85] dark:text-transparent"
      >
        Don't just take our word for it
      </h1>
      <p class="mb-6 px-6 text-center">
        We count with over 500 five-star reviews on TripAdvisor
      </p>

      <div
        class="desktop-px-0 grid gap-6 px-6 tablet:grid-cols-2 laptop:grid-cols-3"
      >
        <ul
          v-for="(testimonialChunk, index) in testimonialChunks"
          :key="index"
          class="space-y-6"
        >
          <li
            v-for="(testimonial, idx) in testimonialChunk"
            :key="idx"
            class="grid cursor-pointer items-center justify-center gap-2 rounded-[20px] bg-green-300 p-4 fine:bg-opacity-85 dark:bg-green-600 dark:fine:bg-opacity-85"
            @click="selectedReview = testimonial"
          >
            <p>
              {{ testimonial.headline }}
            </p>
            <p
              class="mt-2 w-full text-right font-medium text-stone-950 dark:text-stone-100"
            >
              {{ testimonial.author }}
            </p>
          </li>
        </ul>
      </div>
    </section>
    <Separator />
    <section>
      <h1
        class="mb-6 bg-gradient-to-tl from-sky-500 to-green-500 bg-clip-text px-6 text-center tracking-tight text-transparent brightness-[.85] dark:text-transparent"
      >
        Frequently asked questions
      </h1>
      <ul class="mx-6 grid gap-6">
        <li
          v-for="(question, index) in faq"
          @click="areQuestionsOpen[index] = !areQuestionsOpen[index]"
          :class="
            areQuestionsOpen[index]
              ? 'bg-sky-200 dark:bg-sky-700'
              : 'bg-sky-200/85 fine:hover:bg-sky-200 dark:bg-sky-600/85 dark:fine:hover:bg-sky-700'
          "
          class="grid cursor-pointer rounded-[20px] p-4 text-base/snug transition-all duration-300 ease-in-out"
        >
          <div class="flex items-center justify-start gap-2">
            <ChevronRightIcon
              class="h-5 w-5 transform transition-all duration-300 ease-in-out"
              :class="{ 'rotate-90': areQuestionsOpen[index] }"
            />
            <p class="w-full font-medium text-stone-950 dark:text-stone-100">
              {{ question.question }}
            </p>
          </div>
          <div
            class="grid transition-all duration-300 ease-in-out"
            :class="{
              'grid-rows-[1fr]': areQuestionsOpen[index],
              'grid-rows-[0fr]': !areQuestionsOpen[index],
            }"
          >
            <div class="overflow-hidden">
              <p class="mb-2 pl-7 pt-2">{{ question.answer }}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <ResponsiveModal
      :is-open="selectedReview !== null"
      @close="selectedReview = null"
    >
      <div class="grid gap-4">
        <p class="text-base/[1.4]">
          {{ selectedReview?.headline }}
        </p>
        <div class="-mt-2 flex justify-start gap-1">
          <StarIcon
            v-for="n in 5"
            :key="n"
            class="size-5 fill-amber-400 dark:fill-amber-600"
          />
        </div>
        <a
          class="flex cursor-pointer items-center justify-between gap-2 rounded-[20px] bg-green-300 p-4 pl-5 text-base/snug transition-all duration-300 ease-in-out fine:bg-opacity-85 fine:hover:bg-opacity-100 dark:bg-green-600 fine:dark:bg-opacity-85"
          :href="selectedReview?.url"
          target="_blank"
        >
          <span>Read full review on Trip Advisor</span>
          <ArrowTopRightOnSquareIcon class="fill-contrast size-5 min-w-5" />
        </a>
      </div>
    </ResponsiveModal>
  </div>
</template>

<style>
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
</style>
