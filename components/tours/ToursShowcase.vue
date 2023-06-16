<script setup lang="ts">
import { onUnmounted, ref } from "#imports";
import { ArrowLongRightIcon } from "@heroicons/vue/24/solid";

defineProps<{
  tours: {
    title: string;
    id: string;
    cover: string;
  }[];
}>();

const isImageLoaded = ref<Boolean[]>([]);
</script>

<template>
  <div class="grid gap-6 pb-0 grid-cols-300px">
    <NuxtLink
      :to="`/tours/${tour.id}`"
      v-for="(tour, i) of tours"
      :key="tour"
      class="h-[250px] grid group relative"
    >
      <div class="relative h-full overflow-hidden rounded-sm">
        <NuxtImg
          :alt="tour.title"
          :src="tour.cover"
          format="webp"
          quality="50"
          fit="cover"
          class="inset-0 w-full h-[250px] object-cover object-center"
          @load="isImageLoaded[i] = true"
          v-show="isImageLoaded[i]"
        />
        <div
          class="inset-0 w-full h-[250px] bg-gray-500 opacity-30 animate-pulse rounded-sm"
          v-if="!isImageLoaded[i]"
        />
        <div
          class="rounded-b-sm rounded-t-sm p-4 absolute bottom-0 left-0 right-0 w-auto overflow-hidden h-32 bg-gradient-radial-to-t from-gray-900"
        >
          <p
            class="rounded-b-sm rounded-t-sm p-4 absolute bottom-4 left-4 right-4 transition-all text-stone-200 font-medium flex items-center justify-between"
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
            {{ tour.title }}
            <ArrowLongRightIcon
              class="inline w-5 h-5 opacity-0 group-hover:opacity-100 transition-all"
            />
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="postcss"></style>
