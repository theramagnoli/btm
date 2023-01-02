<template>
  <div class="container-div">
    <div>
      <h1>Explore our tour catalogue</h1>
      <div class="grid tablet:grid-cols-2 gap-4 mx-4 laptop:mx-0 pb-0">
        <nuxt-link
          :to="'/tours/' + tour.id"
          v-for="(tour, i) of tours"
          :key="tour"
          class="h-[250px] grid group relative"
        >
          <div class="relative w-full h-full overflow-hidden rounded-lg">
            <img
              :alt="tour.title"
              :src="tour.portada"
              class="inset-0 w-full h-[250px] object-cover group-hover:scale-105 transition-all object-center laptop:delay-100"
              @load="isImageLoaded[i] = true"
              v-show="isImageLoaded[i]"
            />
            <div
              class="inset-0 w-full h-[250px] bg-gray-500 opacity-30 animate-pulse rounded-lg"
              v-if="!isImageLoaded[i]"
            />
          </div>

          <div
            class="tour-name"
            :class="
              tour.id === 'ChichenItza'
                ? 'bg-green-700 dark:bg-green-800'
                : tour.id === 'Tulum'
                ? 'bg-sky-600 dark:bg-sky-700'
                : tour.id === 'Cenotes'
                ? 'bg-slate-600 dark:bg-slate-800'
                : tour.id === 'Coba'
                ? 'bg-stone-600 dark:bg-stone-700'
                : tour.id === 'Akumal'
                ? 'bg-cyan-600 dark:bg-cyan-700'
                : tour.id === 'SianKaan&PuntaAllen'
                ? 'bg-blue-600 dark:bg-blue-700'
                : tour.id === 'SianKaan&Muyil'
                ? 'bg-yellow-600 dark:bg-yellow-700'
                : tour.id === 'Kayaking&Snorkeling'
                ? 'bg-slate-600 dark:bg-slate-700'
                : tour.id === 'MayanAdventure'
                ? 'bg-green-600 dark:bg-green-800'
                : 'bg-emerald-600 dark:bg-emerald-800'
            "
          >
            <h3 class="">
              {{ tour.title }}
            </h3>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "nuxt/app";
import tours from "/assets/json/tours.json";
import { ref } from "#imports";

useHead({
  title: "Tours | Boutique Tours Mexico",
  meta: [{ name: "description", content: "Discover our tour catalogue" }],
});

const isImageLoaded = ref<Boolean[]>([]);
</script>

<style scoped lang="postcss">
.tour-name {
  @apply rounded-l-lg p-4 absolute bottom-4 left-8 group-hover:left-4 right-0 w-auto transition-all grid gap-2 laptop:delay-100 overflow-hidden;
}
</style>
