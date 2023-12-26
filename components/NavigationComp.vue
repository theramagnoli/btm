<script setup lang="ts">
import { useRoute } from "nuxt/app";
import { onMounted, onUnmounted, ref, watch, nextTick } from "#imports";
import { Transition } from "@vue/runtime-dom";
import FareHarborLogo from "../assets/icons/FareHaborLogo";
import CloseTransformableIcon from "./CloseTransformableIcon.vue";
import useAppStateStore from "~/store/appStateStore";

const route = useRoute();
const routes = [
  { path: "/", name: "Home" },
  { path: "/tours", name: "Tours" },
];

const prefersDarkMode = computed<boolean>(() => appState.prefersDarkMode);
const appState = useAppStateStore();
const marker = ref<HTMLElement | null>(null);
const navbar = ref<HTMLElement | null>(null);
const selectedLink = ref<HTMLAnchorElement | null>();
const selectedLinkWidth = ref<number | null>();
const selectedLinkXPosition = ref<number | null>();
const isScrollYZero = computed(() => appState.scrollYEqualToZero);
const isNotMobile = computed(() => !appState.isMobile);
const isDropdownOpen = computed(() => appState.isDropdownOpen);
const isModalOpen = ref(false);

const widthWatcher = new ResizeObserver(() => {
  changeSelectedMarkerPosition();
});

function changeSelectedMarkerPosition() {
  if (selectedLink.value && marker.value) {
    selectedLinkWidth.value = selectedLink.value.clientWidth;
    selectedLinkXPosition.value = selectedLink.value.offsetLeft;

    marker.value.style.width = selectedLinkWidth.value
      ? selectedLinkWidth.value + "px"
      : "0px";

    marker.value.style.left = selectedLinkXPosition.value
      ? selectedLinkXPosition.value + "px"
      : "0px";
  }
}

onMounted(async () => {
  selectedLink.value = document.getElementById(
    route.path,
  ) as HTMLAnchorElement | null;

  if (selectedLink.value === null && route.path.includes("tours")) {
    selectedLink.value = document.getElementById(
      "/tours",
    ) as HTMLAnchorElement | null;

    if (marker.value) {
      marker.value.style.backgroundColor = "#e7e5e4";
    }
  }

  changeSelectedMarkerPosition();

  if (navbar.value) {
    widthWatcher.observe(navbar.value);
  }

  setTimeout(() => {
    changeSelectedMarkerPosition();
  }, 150);

  !FH.autoLightframe({
    callback: () => {},
  });
});

onUnmounted(() => {
  if (navbar.value) widthWatcher.unobserve(navbar.value);
});

watch(
  () => route.fullPath,
  async () => {
    await nextTick();
    selectedLink.value = document.getElementById(
      route.path,
    ) as HTMLAnchorElement | null;

    if (selectedLink.value === null && route.path.includes("tours")) {
      selectedLink.value = document.getElementById(
        "/tours",
      ) as HTMLAnchorElement | null;
    } else if (selectedLink.value === null) {
      if (marker.value) {
        marker.value.style.width = "0px";
      }
    }
    changeSelectedMarkerPosition();
  },
);

function toFareHarbor() {
  return !FH.open({ shortname: "boutiquetoursmexico", flow: 278797 });
}

const isInTour = computed(() => appState.isInToursPage);
</script>

<template>
  <div
    class="fixed w-full z-50 text-stone-950 dark:text-stone-100 backdrop-blur-3xl transition-colors duration-200"
    :class="{
      'bg-stone-100/90 dark:bg-stone-950/90':
        !isScrollYZero && !isDropdownOpen && !isInTour,
      'bg-stone-950/10': !isScrollYZero && !isDropdownOpen && isInTour,
    }"
    id="navbar"
    ref="navbar"
  >
    <div
      class="flex justify-between laptop:grid laptop:grid-cols-3 items-center max-w-5xl m-auto py-4 px-6 relative"
    >
      <div class="flex gap-8">
        <NuxtLink to="/">
          <img
            src="../assets/logos/logo.png"
            alt="Boutique Tours Mexico Logo"
            class="h-8 laptop:h-12 brightness-[.20] dark:brightness-100 transition-all"
            :class="{
              'dark:brightness-[20] dark:opacity-[.80]':
                isInTour && !isModalOpen,
            }"
          />
        </NuxtLink>
      </div>

      <nav class="gap-8 flex justify-center" id="menu">
        <div
          class="h-1 absolute bottom-4 tablet:bottom-6 transition-all rounded-md bg-opacity-50 dark:bg-opacity-50"
          :class="{
            'bg-sky-300 dark:bg-sky-600': !isInTour,
            'bg-stone-950 dark:bg-stone-100': isInTour,
          }"
          id="marker"
          ref="marker"
        />
        <ul class="flex gap-8">
          <li
            v-for="route in routes"
            :key="route.path"
            :id="route.path"
            class="tracking-wider pt-1 pb-1 text-stone-950 dark:text-stone-100 uppercase"
          >
            <NuxtLink :to="route.path" class="relative font-semibold">
              {{ route.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex justify-end gap-4 items-center" v-if="isNotMobile">
        <button
          @click="toFareHarbor"
          class="rounded-full font-medium items-center justify-center tablet:pr-2 uppercase flex text-lg p-2 pl-4 bg-sky-300 dark:bg-sky-600 fine:bg-opacity-50 fine:dark:bg-opacity-50 fine:hover:bg-opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap"
        >
          Book now
          <FareHarborLogo class="h-8 w-8 ml-3 fill-stone-200" />
        </button>
      </div>
    </div>
  </div>
</template>
