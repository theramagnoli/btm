<template>
  <div>
    <div class="c-div">
      <h1>Enjoy an amazing experience, not a tour</h1>

      <!-- slider -->
      <ul
        class="w-full flex gap-x-6 snap-x snap-mandatory overflow-x-auto scroll-smooth laptop:rounded-md"
        id="slider"
      >
        <li
          v-for="(review, i) in data.reviews"
          :key="i"
          class="snap-center laptop:last:snap-end laptop:first:snap-start first:ml-20 laptop:first:ml-0 last:mr-20 laptop:last:mr-0"
        >
          <div
            class="relative overflow-hidden m-auto grayscale transition-all rounded-md"
            :id="i"
          >
            <img
              :src="review.img"
              alt=""
              class="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div
              class="absolute inset-0 h-full w-full bg-gradient-radial-to-tr from-gray-900"
            ></div>
            <div
              class="relative h-[250px] w-[250px] tablet:w-[444.4px] p-3 flex flex-col justify-between items-start"
            >
              <span></span>
              <div>
                <div class="flex">
                  <svg
                    v-for="n in 5"
                    :num-labels="5"
                    :key="n"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-500"
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
                <h3 class="leading-tight mt-1">"{{ review.titulo }}"</h3>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!-- slider arrows -->
      <div class="relative -top-[139px] hidden laptop:flex justify-between">
        <button
          @click="scrollback()"
          class="bg-gray-200/70 dark:bg-gray-800/80 rounded-r-full w-10 p-1 grid justify-end items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 rounded-full hover:scale-110 transition-all bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
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
          class="bg-gray-200/70 dark:bg-gray-800/80 rounded-l-full w-10 p-1 grid justify-start items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 rounded-full hover:scale-110 transition-all bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
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
            class="gap-y-3 grid laptop:flex flex-wrap justify-center laptop:px-0"
          >
            <li
              v-for="benefit of data.list"
              :key="benefit"
              class="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mx-2 mb-1"
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
      <details
        class="pr-3 ml-5 group"
        v-for="question of data.faq"
        :key="question"
      >
        <summary class="flex items-center gap-x-4 transition-all group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 transition-all group-open:rotate-90"
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
        <p class="p-3 mt-3">
          {{ question.answer }}
        </p>
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
      inFocus: 1,
      play: true,
      playing: null,
    };
  },
  methods: {
    scrollnext() {
      let width = document.getElementById("slider").scrollWidth - 444;
      const scroll = (document.getElementById("slider").scrollLeft += 444);
      if (scroll > width) {
        document.getElementById("slider").scrollLeft = 0;
      }
    },
    scrollback() {
      const scroll = (document.getElementById("slider").scrollLeft -= 444);
      if (scroll < -140) {
        document.getElementById("slider").scrollLeft =
          444 * Object.keys(this.data.reviews).length;
      }
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
    onScroll() {
      let sliderLeft = document.getElementById("slider").scrollLeft;
      this.inFocus =
        Math.round(
          window.matchMedia("(min-width: 500px)").matches
            ? sliderLeft / 444
            : sliderLeft / 274
        ) + 1;
    },
  },
  mounted() {
    setTimeout(() => {
      document.getElementById("1").classList.remove("grayscale");
      document
        .getElementById("slider")
        .addEventListener("scroll", this.onScroll, true);
    }, 50);

    this.autoplay();
  },
  unmounted() {
    document
      .getElementById("slider")
      .removeEventListener("scroll", this.onScroll, true);
    clearInterval(this.playing);
  },
  beforeUnmount() {},
  watch: {
    inFocus(a, de) {
      const properties = "grayscale";
      document.getElementById(de).classList.add(properties);
      document.getElementById(a).classList.remove(properties);
    },
  },
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
