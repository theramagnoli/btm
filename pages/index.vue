<template>
  <div class="c-div">
    <h1>Enjoy an amazing experience, not a tour</h1>
    <!-- slider -->
    <ul
      class="w-full flex gap-x-2 snap-x snap-mandatory overflow-x-auto scroll-smooth laptop:rounded-md"
      id="slider"
    >
      <li
        v-for="(review, i) in data.reviews"
        :key="i"
        class="snap-center laptop:last:snap-end laptop:first:snap-start"
      >
        <div class="relative overflow-hidden m-auto transition-all">
          <img
            :src="review.img"
            alt=""
            class="absolute inset-0 w-full h-full object-cover object-center"
            v-show="imgLoaded[i]"
            @load="imgLoaded[i] = true"
          />
          <div
            class="absolute inset-0 w-full h-full bg-gray-500 opacity-30 animate-pulse"
            v-if="!imgLoaded[i]"
          />
          <div
            class="absolute inset-0 h-full w-full bg-gradient-radial-to-t from-black via-transparent"
            v-else
          />
          <div
            class="relative h-[250px] w-[300px] tablet:w-[444.4px] p-2 flex flex-col justify-between items-center"
          >
            <span></span>
            <div class="grid justify-center w-full">
              <div class="flex justify-center">
                <svg
                  v-for="n in 5"
                  :num-labels="5"
                  :key="n"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-yellow-600 drop-shadow-md"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3
                class="leading-tight mt-1 text-gray-200 text-center drop-shadow-lg"
              >
                <a :href="review.ref" target="_blank">"{{ review.titulo }}"</a>
              </h3>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- slider arrows -->
    <div class="relative -top-[139px] hidden laptop:flex justify-between">
      <button @click="scrollback()" class="w-10 grid justify-end items-center">
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

    <div>
      <div class="p-div laptop:-mt-2">
        <p v-for="p of data.desc" :key="p" class="last:font-semibold">
          {{ p }}
        </p>
      </div>
      <h1>We help you discover the best of Mexico</h1>
      <div class="grid px-5">
        <ul
          class="gap-y-3 grid tablet:flex flex-wrap justify-center tablet:px-0"
        >
          <li
            v-for="benefit of data.list"
            :key="benefit"
            class="flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-2 tablet:mx-2 mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>{{ benefit }}</p>
          </li>
        </ul>
      </div>
    </div>

    <h1>Frequently asked questions</h1>
    <div class="grid gap-y-4">
      <details
        class="mx-5 laptop:mx-0 group"
        v-for="question of data.faq"
        :key="question"
      >
        <summary class="flex items-center gap-x-4 transition-all group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mb-1 transition-all group-open:rotate-90"
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
          <p class="">{{ question.question }}</p>
        </summary>
        <div class="flex">
          <p class="border-l-2 border-gray-500/50 ml-[6.5px] pl-3 py-3">
            {{ question.answer }}
          </p>
        </div>
      </details>
    </div>
  </div>
</template>

<script setup>
const { data: data } = await useAsyncData("data", () =>
  $fetch("/data/inicio.json")
);
if (typeof data.value.desc === "string" || data.value.desc instanceof String) {
  data.value.desc = data.value.desc.split("#");
}
</script>

<script>
export default {
  name: "Home",
  data() {
    return {
      play: true,
      playing: null,
      imgLoaded: [],
    };
  },
  methods: {
    scrollnext() {
      let width = document.getElementById("slider").scrollWidth - 444;
      const scroll = (document.getElementById("slider").scrollLeft += 444);
      if (scroll > width) {
        document.getElementById("slider").scrollLeft = 0;
      }
      this.reestartInvertal();
    },
    scrollback() {
      const scroll = (document.getElementById("slider").scrollLeft -= 444);
      if (scroll < -140) {
        document.getElementById("slider").scrollLeft =
          444 * Object.keys(this.data.reviews).length;
      }
      this.reestartInvertal();
    },
    reestartInvertal() {
      clearInterval(this.playing);
      this.autoplay();
    },
    autoplay() {
      this.playing = setInterval(() => {
        if (
          window.matchMedia("(min-width: 800px)").matches &&
          this.play === true
        ) {
          this.scrollnext();
        }
      }, 4200);
    },
  },
  mounted() {
    this.autoplay();
  },
  unmounted() {
    clearInterval(this.playing);
  },
  beforeUnmount() {},
};
</script>

<style>
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
</style>
