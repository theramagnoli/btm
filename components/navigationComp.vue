<script setup lang="ts">
import { useRoute } from "nuxt/app";
import { onMounted, onUnmounted, ref, watch } from "#imports";
import { awaitExpression } from "@babel/types";

defineProps<{ prefersDarkMode: Boolean }>();

const route = useRoute();
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const selectedLink = ref<HTMLAnchorElement | null>();
const selectedMarker = ref<HTMLDivElement | null>();
const selectedLinkWidth = ref<number | null>();
const selectedLinkXPosition = ref<number | null>();
const navbar = ref<HTMLElement | null>();

const watchWidth = new ResizeObserver(() => {
  changeSelectedMarkerPosition();
});

function changeSelectedMarkerPosition() {
  if (selectedLink.value && selectedMarker.value) {
    selectedLinkWidth.value = selectedLink.value.clientWidth;
    selectedLinkXPosition.value = selectedLink.value.offsetLeft;

    selectedMarker.value.style.width = selectedLinkWidth.value
      ? selectedLinkWidth.value + "px"
      : "0px";

    selectedMarker.value.style.left = selectedLinkXPosition.value
      ? selectedLinkXPosition.value + "px"
      : "0px";
  }
}

onMounted(async () => {
  await sleep(10);

  selectedLink.value = document.getElementById(
    route.path
  ) as HTMLAnchorElement | null;
  selectedMarker.value = document.getElementById(
    "marker"
  ) as HTMLDivElement | null;

  changeSelectedMarkerPosition();

  navbar.value = document.getElementById("navbar");

  if (navbar.value) {
    console.log("observing, bro");
    watchWidth.observe(navbar.value);
  }
});

onUnmounted(() => {
  if (navbar.value) watchWidth.unobserve(navbar.value);
});

watch(route, (to) => {
  selectedLink.value = document.getElementById(
    to.path
  ) as HTMLAnchorElement | null;
  if (selectedLink.value === null) {
    if (selectedMarker.value) {
      selectedMarker.value.style.width = "0px";
    }
  }
  changeSelectedMarkerPosition();
});
</script>

<template>
  <div
    class="fixed w-full z-50 bg-gray-200/70 dark:bg-black/70 text-gray-900 dark:text-gray-200 shadow-lg dark:shadow-gray-800/50 transition-all backdrop-blur-md"
    id="navbar"
  >
    <div
      class="flex justify-between items-center max-w-3xl m-auto px-4 laptop:px-0"
    >
      <div class="flex">
        <NuxtLink to="/"
          ><img
            src="../assets/icons/logo.png"
            alt="logo"
            class="h-10 tablet:h-12 brightness-[.20] dark:brightness-100"
        /></NuxtLink>
      </div>
      <div class="gap-8 flex items-center" id="menu">
        <div class="selected-marker" id="marker" />
        <NuxtLink
          to="/"
          class="w-[100%] tracking-wider py-7 flex flex-col relative"
          id="/"
          ><div class="items-center flex">Home</div>
        </NuxtLink>
        <NuxtLink
          to="/tours"
          id="/tours"
          class="w-[100%] tracking-wider py-7 flex flex-col relative"
          ><div class="items-center flex">Tours</div>
        </NuxtLink>
        <button
          @click="$emit('changeMode')"
          class="rounded-full text-gray-900 dark:text-gray-200 hover:scale-110 opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            v-if="prefersDarkMode"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            v-else
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.selected-marker {
  @apply h-1.5 bg-gradient-to-r from-sky-500 to-emerald-700 dark:from-sky-700 dark:to-emerald-900 rounded-lg absolute bottom-5 transition-all;
}
</style>
