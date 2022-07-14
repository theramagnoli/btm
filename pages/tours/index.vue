<template>
  <div class="c-div">
    <h1>Explore our tour catalogue</h1>
    <!-- tour catalogue -->
    <div class="grid tablet:grid-cols-2 gap-5 mx-5 laptop:mx-0 pb-0">
      <nuxt-link
        :to="'/tours/' + tour.id"
        v-for="(tour, i) of tours"
        :key="tour"
        class="h-[200px] grid group"
      >
        <div class="relative w-full h-full overflow-hidden rounded-t-md">
          <img
            :src="tour.portada"
            class="inset-0 w-full h-[150px] object-cover group-hover:scale-110 transition-all delay-100 object-center"
            @load="imgLoaded[i] = true"
            v-show="imgLoaded[i]"
          />
          <div
            class="inset-0 w-full h-[150px] bg-gray-500 opacity-30 animate-pulse rounded-t-md"
            v-if="!imgLoaded[i]"
          />
        </div>

        <div
          class="rounded-b-md flex items-center h-full w-full p-3"
          :class="
            tour.id === 'ChichenItza'
              ? 'bg-green-600 dark:bg-green-800'
              : tour.id === 'Tulum'
              ? 'bg-sky-500 dark:bg-sky-700'
              : tour.id === 'Cenotes'
              ? 'bg-slate-700 dark:bg-slate-800'
              : tour.id === 'Coba'
              ? 'bg-stone-500 dark:bg-stone-700'
              : tour.id === 'Akumal'
              ? 'bg-cyan-500 dark:bg-cyan-700'
              : tour.id === 'SianKaan&PuntaAllen'
              ? 'bg-blue-600 dark:bg-blue-800'
              : tour.id === 'SianKaan&Muyil'
              ? 'bg-yellow-500 dark:bg-yellow-700'
              : tour.id === 'Kayaking&Snorkeling'
              ? 'bg-slate-500 dark:bg-slate-700'
              : tour.id === 'MayanAdventure'
              ? 'bg-green-600 dark:bg-green-800'
              : 'bg-emerald-600 dark:bg-emerald-800'
          "
        >
          <h2
            class="italic text-xl w-full group-hover:translate-x-2 transition-all delay-100"
          >
            {{ tour.titulo }}
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-200 transition-all laptop:opacity-0 laptop:group-hover:opacity-100 mr-2 delay-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { data: tours } = await useAsyncData("tours", () =>
  $fetch("/data/tours.json")
);
useHead({
  title: "Tours • Boutique Tours Mexico",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "Discover our tour catalogue" }],
});
</script>

<script>
export default {
  data() {
    return {
      imgLoaded: [],
    };
  },
};
</script>
