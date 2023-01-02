<script setup lang="ts">
import { useRoute } from "nuxt/app";
import { onMounted, onUnmounted, ref, watch } from "#imports";
import SunIcon from "icons/SunIcon";
import MoonIcon from "icons/MoonIcon";

defineProps<{ prefersDarkMode: Boolean }>();

const route = useRoute();

const selectedLink = ref<HTMLAnchorElement | null>();
const selectedMarker = ref<HTMLDivElement | null>();
const selectedLinkWidth = ref<number | null>();
const selectedLinkXPosition = ref<number | null>();
const navbar = ref<HTMLElement | null>();

const widthWatcher = new ResizeObserver(() => {
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
  selectedLink.value = document.getElementById(
    route.path
  ) as HTMLAnchorElement | null;
  selectedMarker.value = document.getElementById(
    "marker"
  ) as HTMLDivElement | null;

  changeSelectedMarkerPosition();

  navbar.value = document.getElementById("navbar");

  if (navbar.value) {
    widthWatcher.observe(navbar.value);
  }

  setTimeout(() => {
    changeSelectedMarkerPosition();
  }, 150);
});

onUnmounted(() => {
  if (navbar.value) widthWatcher.unobserve(navbar.value);
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
            src="../assets/logos/logo.png"
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
          <Component
            :is="prefersDarkMode ? SunIcon : MoonIcon"
            class="h-4 w-4"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.selected-marker {
  @apply h-1.5 bg-sky-500 dark:bg-sky-700 rounded-xl absolute bottom-5 transition-all;
}
</style>
