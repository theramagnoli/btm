<script setup lang="ts">
import { useRoute } from 'nuxt/app';
import { useColor } from '~/composables/useColor';
import FareHarborLogo from 'assets/icons/FareHarborLogo.vue';
import { useIsScrollY0 } from '~/composables/useIsScrollY0';
import { useScreenSizes } from '~/composables/useScreenSizes';
import { useIsInTour } from '~/composables/useIsInTour';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/tours', name: 'Tours' },
];

const route = useRoute();
const { colorClass } = useColor();
const marker = ref<HTMLElement | null>(null);
const navbar = ref<HTMLElement | null>(null);
const selectedLink = ref<HTMLElement | null>(null);
const selectedLinkWidth = ref<number | null>(null);
const selectedLinkXPosition = ref<number | null>(null);
const { isScrollY0 } = useIsScrollY0();
const { isLargeMobile } = useScreenSizes();
const { isInTour } = useIsInTour();
const isModalOpen = ref(false);

const widthWatcher = new ResizeObserver(() => {
  changeSelectedMarkerPosition();
});

function changeSelectedMarkerPosition() {
  if (selectedLink.value && marker.value) {
    selectedLinkWidth.value = selectedLink.value.clientWidth;
    selectedLinkXPosition.value = selectedLink.value.offsetLeft;
    marker.value.style.width = selectedLinkWidth.value
      ? selectedLinkWidth.value + 'px'
      : '0px';
    marker.value.style.left = selectedLinkXPosition.value
      ? selectedLinkXPosition.value + 'px'
      : '0px';
  }
}

function setupMarker() {
  selectedLink.value = document.getElementById(route.path);
  if (selectedLink.value === null && route.path.includes('tours')) {
    selectedLink.value = document.getElementById('/tours');
  }
  changeSelectedMarkerPosition();
  if (navbar.value) widthWatcher.observe(navbar.value);
  setTimeout(() => {
    changeSelectedMarkerPosition();
  }, 150);
}

onMounted(async () => {
  setupMarker();
  !FH.autoLightframe({});
});

onUnmounted(() => {
  if (navbar.value) widthWatcher.unobserve(navbar.value);
});

watch(
  () => route.fullPath,
  async () => {
    await nextTick();
    selectedLink.value = document.getElementById(route.path);
    if (selectedLink.value === null && route.path.includes('tours')) {
      selectedLink.value = document.getElementById('/tours');
    } else if (selectedLink.value === null && marker.value) {
      marker.value.style.width = '0px';
    }
    changeSelectedMarkerPosition();
  },
);

function toFareHarbor() {
  return !FH.open({ shortname: 'boutiquetoursmexico', flow: 278797 });
}
</script>

<template>
  <div
    class="fixed z-50 -ml-[50px] -mt-[60px] h-[200px] w-[calc(100%+100px)] bg-opacity-99 blur-xl transition-all duration-200 ease-in-out"
    :class="!isScrollY0 && colorClass"
  />
  <div class="fixed z-50 w-full" ref="navbar">
    <div
      class="relative m-auto flex h-20 max-w-5xl items-center justify-between px-6 py-4 laptop:grid laptop:grid-cols-3"
    >
      <div class="flex gap-8">
        <NuxtLink to="/">
          <img
            src="../assets/logos/logo.png"
            alt="Boutique Tours Mexico Logo"
            class="h-10 brightness-[.20] transition-all tablet:h-12 dark:brightness-100"
            :class="{
              'dark:opacity-[.80] dark:brightness-[20]':
                isInTour && !isModalOpen,
            }"
          />
        </NuxtLink>
      </div>

      <nav class="flex justify-center gap-4 laptop:gap-8" id="menu">
        <div
          class="absolute bottom-5 h-1 rounded-[35px] bg-opacity-85 transition-all tablet:bottom-6 dark:bg-opacity-85"
          :class="{
            'bg-sky-300 dark:bg-sky-600': !isInTour,
            'bg-stone-950 dark:bg-stone-100': isInTour,
          }"
          ref="marker"
        />
        <ul class="flex gap-6">
          <li
            v-for="route in routes"
            :key="route.path"
            :id="route.path"
            class="pb-1 pt-1 uppercase tracking-wider text-stone-950 dark:text-stone-100"
          >
            <NuxtLink :to="route.path" class="relative font-medium">
              {{ route.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center justify-end gap-4" v-if="!isLargeMobile">
        <button
          @click="toFareHarbor"
          class="group flex items-center justify-center whitespace-nowrap rounded-full bg-sky-200 p-2 pl-4 text-base font-medium uppercase drop-shadow-[0px_10px_25px_rgba(0,0,0,0.20)] transition-all duration-300 ease-in-out tablet:pr-2 fine:bg-opacity-70 dark:bg-sky-600"
        >
          Book now
          <FareHarborLogo
            class="ml-3 h-8 w-8 fill-stone-200 transition-all group-hover:rotate-90"
          />
        </button>
      </div>
    </div>
  </div>
</template>
