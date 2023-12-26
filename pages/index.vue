<script setup lang="ts">
import { description, benefits, testimonials, faq } from "assets/json/home";
import { StarIcon } from "@heroicons/vue/16/solid";
import MainSlider from "../components/ReviewsSlider.vue";
import { useMediaQuery } from "@vueuse/core";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/vue/16/solid";
import { watch, ref } from "#imports";
import { Review } from "~/types/Review";

const testimonialChunks = ref<Review[][]>([]);
const isMobile = useMediaQuery("(max-width: 768px)");
const isTablet = useMediaQuery("(max-width: 1000px)");
const areQuestionsOpen = ref<boolean[]>([false, false]);

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
  { immediate: true },
);

const selectedReview = ref<Review | null>(null);
</script>

<template>
  <div class="container-div">
    <ResponsiveModal :is-open="!selectedReview" @close="selectedReview = null">
      <div class="grid gap-4">
        <p class="text-base/[1.4]">
          {{ selectedReview?.headline! }}
        </p>
        <div class="flex justify-start gap-1 -mt-2">
          <StarIcon
            v-for="n in 5"
            :key="n"
            class="size-5 fill-amber-400 dark:fill-amber-600"
          />
        </div>
        <a
          class="p-4 pl-5 text-base/snug flex justify-between items-center gap-2 rounded-md cursor-pointer bg-green-300 dark:bg-green-600 fine:bg-opacity-75 fine:dark:bg-opacity-75 fine:hover:bg-opacity-100 transition-all duration-300 ease-in-out"
          :href="selectedReview?.url"
          target="_blank"
        >
          <span> Read full review on Trip Advisor </span>
          <ArrowTopRightOnSquareIcon class="size-5 min-w-5 fill-contrast" />
        </a>
      </div>
    </ResponsiveModal>
    <section
      class="grid laptop:flex justify-around items-end gap-x-8 desktop:gap-x-16 mt-4 px-6"
    >
      <div
        class="self-center w-full laptop:max-w-[47%] space-y-6 mb-8 laptop:mb-20 m-auto px-6 laptop:px-0"
      >
        <h1
          class="text-3xl tablet:text-4xl tracking-tight bg-gradient-to-tl from-sky-500 to-green-500 brightness-[.85] bg-clip-text text-transparent dark:text-transparent"
        >
          Not a tour, <br />
          but an amazing <br />
          experience
        </h1>
        <p>
          In
          <span class="font-medium">Boutique Tours Mexico</span> we offer you
          extraordinary experiences for your adventures in Mexico.
        </p>
        <NuxtLink
          to="/tours"
          class="p-4 pl-5 text-base/snug flex justify-between items-center gap-2 rounded-md cursor-pointer bg-green-300 dark:bg-green-600 fine:bg-opacity-75 dark:fine:bg-opacity-75 fine:hover:bg-opacity-100 transition-all duration-300 ease-in-out"
        >
          Discover our destinations
          <ArrowRightIcon class="size-5" />
        </NuxtLink>
      </div>
      <MainSlider
        @review-clicked="(clickedReview) => (selectedReview = clickedReview)"
      />
    </section>
    <Separator class="mt-0" v-if="!isMobile" />
    <div class="h-10 w-full" v-else />
    <section class="mx-auto w-full">
      <h1 class="text-center mb-8 px-6">
        We help you discover <br />
        the best of Mexico!
      </h1>
      <div class="grid gap-6">
        <div class="paragraph-div m-auto">
          <p
            class="max-w-3xl"
            v-for="paragraph of description"
            :key="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
      <div class="gap-8 grid tablet:grid-cols-3 px-6 mt-10">
        <div
          v-for="(benefit, index) of benefits"
          :key="index"
          class="relative flex flex-col justify-start gap-6 rounded-md items-center w-full aspect-[3/4]"
        >
          <img
            :src="benefit.image"
            alt="img"
            class="w-full h-full rounded-md object-cover object-center"
          />
          <div
            class="absolute bottom-4 inset-x-4 top-auto bg-sky-200 dark:bg-sky-600 bg-opacity-85 fine:hover:bg-opacity-100 p-4 rounded-md flex items-center justify-center gap-2 text-sm/snug transition-all duration-300 ease-in-out backdrop-blur-lg"
          >
            <p class="line-clamp-3 hover:line-clamp-none">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <Separator />
    <section class="mx-auto">
      <h1 class="text-center mb-4 px-6">
        And don't just take <br />
        our word for it
      </h1>
      <h4
        class="text-center mb-8 px-6 flex justify-center items-center flex-wrap normal-case font-medium font-sans tracking-normal"
      >
        We count with over 500 5-star reviews on TripAdvisor.
      </h4>
      <div
        class="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6 px-6 desktop-px-0"
      >
        <ul
          v-for="(testimonialChunk, index) in testimonialChunks"
          :key="index"
          class="space-y-6"
        >
          <li
            v-for="(testimonial, idx) in testimonialChunk"
            :key="idx"
            class="p-4 grid gap-2 rounded-md text-sm/snug cursor-pointer bg-btm-green fine:hover:brightness-95 transition-all duration-300 ease-in-out"
            @click="selectedReview = testimonial"
          >
            <p>
              {{ testimonial.headline }}
            </p>
            <p
              class="font-medium text-stone-950 dark:text-stone-100 w-full text-right mt-2"
            >
              {{ testimonial.author }}
            </p>
          </li>
        </ul>
      </div>
    </section>
    <Separator />
    <section>
      <h1 class="text-center mb-8 px-4">
        Frequently asked <br />
        questions
      </h1>
      <ul class="mx-6 grid gap-6">
        <li
          v-for="(question, index) in faq"
          @click="areQuestionsOpen[index] = !areQuestionsOpen[index]"
          :class="
            areQuestionsOpen[index]
              ? 'bg-emerald-300/70 dark:bg-emerald-700/70'
              : 'bg-emerald-300/30 dark:bg-emerald-600/30 fine:hover:bg-emerald-300/70 dark:fine:hover:bg-emerald-700/70'
          "
          class="p-4 text-base/snug grid rounded-md cursor-pointer transition-all duration-300 ease-in-out"
        >
          <div class="flex items-center justify-start gap-2">
            <ChevronRightIcon
              class="h-5 w-5 transform transition-all duration-300 ease-in-out"
              :class="{
                'rotate-90': areQuestionsOpen[index],
              }"
            />
            <p class="font-medium text-stone-950 dark:text-stone-100 w-full">
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
              <p class="pt-2 text-sm">{{ question.answer }}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
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
