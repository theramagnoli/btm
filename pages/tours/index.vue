<template>
  <div class="c-div">
    <div>
      <h1>Explore our tour catalogue</h1>
      <!-- tour catalogue -->
      <div class="grid tablet:grid-cols-2 gap-4 mx-4 laptop:mx-0 pb-0 mb-4">
        <nuxt-link
          :to="'/tours/' + tour.id"
          v-for="(tour, i) of tours"
          :key="tour"
          class="h-[250px] grid group relative"
        >
          <div class="relative w-full h-full overflow-hidden rounded-2xl">
            <img
              :alt="tour.title"
              :src="tour.portada"
              class="inset-0 w-full h-[250px] object-cover group-hover:scale-110 transition-all delay-100 object-center"
              @load="isImageLoaded[i] = true"
              v-show="isImageLoaded[i]"
            />
            <div
              class="inset-0 w-full h-[250px] bg-gray-500 opacity-30 animate-pulse rounded-2xl"
              v-if="!isImageLoaded[i]"
            />
          </div>

          <div
            class="tour-name"
            :class="
              tour.id === 'ChichenItza'
                ? 'from-green-600 dark:from-green-800 to-green-600 dark:to-green-800'
                : tour.id === 'Tulum'
                ? 'from-sky-600 dark:from-sky-700 to-sky-600 dark:to-sky-800'
                : tour.id === 'Cenotes'
                ? 'from-slate-600 dark:from-slate-800 to-slate-600 dark:to-slate-800'
                : tour.id === 'Coba'
                ? 'from-stone-500 dark:from-stone-700 to-stone-600 dark:to-stone-800'
                : tour.id === 'Akumal'
                ? 'from-cyan-600 dark:from-cyan-700 to-cyan-600 dark:to-cyan-800'
                : tour.id === 'SianKaan&PuntaAllen'
                ? 'from-blue-600 dark:from-blue-800 to-blue-600 dark:to-blue-800'
                : tour.id === 'SianKaan&Muyil'
                ? 'from-yellow-500 dark:from-yellow-700 to-yellow-600 dark:to-yellow-800'
                : tour.id === 'Kayaking&Snorkeling'
                ? 'from-slate-600 dark:from-slate-700 to-slate-600 dark:to-slate-800'
                : tour.id === 'MayanAdventure'
                ? 'from-green-600 dark:from-green-800 to-green-600 dark:to-green-800'
                : 'from-emerald-600 dark:from-emerald-800 to-emerald-600 dark:to-emerald-800'
            "
          >
            <h3 class="w-full transition-all delay-100">
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
  @apply rounded-xl p-4 absolute bg-gradient-to-r bottom-3.5 left-3.5 right-3.5 w-auto group-hover:pb-8 transition-all grid gap-2;
}
</style>
