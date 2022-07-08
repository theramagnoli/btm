<template>
  <div>
    <div class="c-div">
      <div class="flex items-center">
        <nuxt-link
          to="/tours"
          class="hover:-translate-x-1 transition-transform mt-3 ml-5 mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </nuxt-link>
        <h1 class="text-left">{{ tour.titulo }} Tour</h1>
      </div>

      <!-- skeleton slider loader -->
      <ul
        class="w-full flex gap-x-2 snap-x snap-mandatory overflow-x-auto scroll-smooth laptop:rounded-md"
        id="slider"
      >
        <li
          v-for="img in tour.imgs"
          :key="img"
          class="snap-center laptop:snap-start"
        >
          <div
            class="relative overflow-hidden transition-all rounded-md first:rounded-l-none last:rounded-r-none"
          >
            <div
              class="relative"
              :class="
                img.ar == '4:3'
                  ? 'h-[250px] w-[333.3px]'
                  : 'h-[250px] w-[188px]'
              "
            >
              <img
                :src="img.src"
                :alt="img.alt"
                class="h-full rounded-md first:rounded-l-none last:rounded-r-none"
              />
            </div>
          </div>
        </li>
      </ul>
      <div class="relative -top-[139px] hidden laptop:flex justify-between">
        <button
          @click="scrollback()"
          class="w-10 grid justify-end items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 p-1 rounded-full hover:scale-110 transition-all bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          @click="scrollnext()"
          class="w-10 grid justify-start items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 p-1 rounded-full hover:scale-110 transition-all bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <!-- description -->
      <div class="p-div text-left laptop:-mt-2">
        <p v-for="parrafo of tour.desc" :key="parrafo">{{ parrafo }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
let tourID = useRoute().params.id;
let { data: tour } = await useAsyncData("tour", () =>
  $fetch("/data/tours.json")
);
tour = tour.value[tourID];
if (typeof tour.desc === "string" || tour.desc instanceof String) {
  tour.desc = tour.desc.split("#");
}
useHead({
  title: `${tour.titulo} Tour • Boutique Tours Mexico`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: tour.desc[0] }],
});
</script>

<script>
export default {
  methods: {
    scrollnext() {
      let width = document.getElementById("slider").scrollWidth - 200;
      const scroll = (document.getElementById("slider").scrollLeft += 200);
      if (scroll > width - 400) {
        document.getElementById("slider").scrollLeft = 0;
      }
    },
    scrollback() {
      const scroll = (document.getElementById("slider").scrollLeft -= 200);
      if (scroll < -140) {
        document.getElementById("slider").scrollLeft =
          444 * this.tour.imgs.length;
      }
    },
  },
};
</script>
