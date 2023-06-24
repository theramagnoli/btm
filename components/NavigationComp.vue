<script setup lang="ts">
import { useRoute } from "nuxt/app";
import { onMounted, onUnmounted, ref, watch, nextTick } from "#imports";
import {Transition} from "@vue/runtime-dom";
import FareHarborLogo from "/assets/icons/FareHaborLogo";
import {
  Bars3Icon,
  XMarkIcon,
  CalendarDaysIcon,
} from "@heroicons/vue/24/solid";

import useAppStateStore from "~/store/appStateStore";
import ResponsiveModal from "~/components/ResponsiveModal.vue";
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
const isNotMobile = computed(() => !appState.isTablet);
const isDropdownOpen = computed(() => appState.isDropdownOpen);
const tourId = computed(() => route.params.id);
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
    route.path
  ) as HTMLAnchorElement | null;

  changeSelectedMarkerPosition();

  if (navbar.value) {
    widthWatcher.observe(navbar.value);
  }

  setTimeout(() => {
    changeSelectedMarkerPosition();
  }, 150);

  !FH.autoLightframe({
    callback: () => {
      console.log("closed");
    },
  });
});

onUnmounted(() => {
  if (navbar.value) widthWatcher.unobserve(navbar.value);
});

watch([route], (to) => {
  const [route] = to;

  nextTick(() => {
    selectedLink.value = document.getElementById(
      route.path
    ) as HTMLAnchorElement | null;

    if (selectedLink.value === null) {
      if (marker.value) {
        marker.value.style.width = "0px";
      }
    }
    changeSelectedMarkerPosition();
  });
});

function toFareHarbor() {
  return !FH.open({ shortname: "boutiquetoursmexico", flow: 278797 });
}
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const isInTour = computed(() => appState.isInToursPage);
</script>

<template>
  <ResponsiveModal
    title="Book Now"
    @close="isModalOpen = !isModalOpen"
    :isOpen="isModalOpen"
  >
    <div class="grid gap-4 grid-cols-2">
      <p class="col-span-2">
        <span class="font-medium">With one of our partners </span>
        - recommended if you are booking a tour in our catalogue.
      </p>
      <button
        class="relative overflow-hidden rounded-sm p-4 bg-[#0a6ece] col-span-2 hover:brightness-90 transition-all text-stone-200"
        @click="toFareHarbor"
      >
        Book trough FareHarbor
        <FareHarborLogo
          class="h-14 absolute -right-2 top-1.5 fill-stone-200"
        />
      </button>
      <p class="col-span-2">
        <span class="font-medium">Directly with us </span>
        - recommended if you are looking for a more personalized experience.
      </p>
      <a href="https://m.me/BoutiqueToursMexico" target="_blank"
         class="relative overflow-hidden rounded-sm p-4 bg-blue-700 text-base/[1.12] hover:brightness-90 transition-all text-stone-200 text-center"
      >
        DM us on Facebook
      </a>
      <a href="https://ig.me/m/boutiquetoursmexico" target="_blank"
        class="relative overflow-hidde rounded-sm p-4 bg-gradient-to-bl from-indigo-600 via-pink-600 to-yellow-500 text-base/[1.12] hover:brightness-90 transition-all text-stone-200 text-center"
      >
        DM us on Instagram
      </a>
    </div>
  </ResponsiveModal>
  <div
    class="fixed w-full z-50 text-gray-900 dark:text-gray-200 h-16 laptop:h-20 backdrop-blur-md transition-colors duration-300"
    :class="{
      'shadow-xl': !isScrollYZero && !isDropdownOpen,
      'bg-stone-200/90 dark:bg-black/90': !isScrollYZero && !isDropdownOpen && !isInTour,
      'bg-stone-950/50': !isScrollYZero && !isDropdownOpen && isInTour,
    }"
    id="navbar"
    ref="navbar"
  >
    <div
      class="flex justify-start laptop:justify-between laptop:grid laptop:grid-cols-3 items-center max-w-5xl m-auto p-4 relative"
    >
      <div class="flex gap-8">
        <NuxtLink to="/">
          <img
            src="../assets/logos/logo.png"
            alt="Boutique Tours Mexico Logo"
            class="h-8 laptop:h-12 brightness-[.20] dark:brightness-100"
            :class="{
              'brightness-[20] dark:brightness-[20] opacity-[.80]': isInTour && !isModalOpen,
            }"
          />
        </NuxtLink>
      </div>

      <nav
        class="gap-8 flex justify-center w-full"
        id="menu"
        v-if="isNotMobile"
      >
        <div
          class="h-1 bg-sky-500 dark:bg-sky-700 absolute bottom-6 transition-all"
          id="marker"
          ref="marker"
        />
        <ul class="flex gap-8">
          <li
            v-for="route in routes"
            :key="route.path"
            :id="route.path"
            class="tracking-wider pt-1 pb-1 uppercase text-stone-700 dark:text-stone-300"
          >
            <NuxtLink
              :to="route.path"
              class="relative"
              :class="{
                'text-stone-200': isInTour && !isModalOpen,
              }"
            >
              {{ route.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex justify-end gap-4 items-center" v-if="isNotMobile">
        <button
          @click="toggleModal"
          class="rounded-full items-center justify-center tablet:pl-1 tablet:pr-3 uppercase transition-all flex backdrop-blur-lg text-md bg-stone-300/70 p-1 font-display opacity-90 hover:opacity-100"
          :class="
            isInTour
              ? 'dark:bg-stone-300/70 dark:text-stone-800'
              : 'dark:bg-stone-800/50'
          "
        >
          <FareHarborLogo
            class="h-5 w-5 tablet:h-8 tablet:w-8 mr-2 dark:fill-stone-200"
          />
          Book now
        </button>
      </div>

      <div v-else>
        <Component
          :is="isDropdownOpen ? markRaw(XMarkIcon) : markRaw(Bars3Icon)"
          class="w-6 h-6 fill-stone-800 dark:fill-stone-200 cursor-pointer absolute right-4 top-[calc(50%-0.75rem)]"
          :class="{
            'brightness-[20] opacity-90': isInTour && !isModalOpen,
          }"
          @click="appState.toggleDropdown"
        />
      </div>

      <Teleport to="body" :disabled="isNotMobile" v-if="!isNotMobile">
        <Transition name="page">
          <div
            class="fixed top-0 left-0 w-full h-[100dvh] pt-16 pb-4 bg-gradient-to-t from-black/80 via-black/50 backdrop-blur-lg z-40"
            :class="{
              'to-stone-100/90': !isInTour && !prefersDarkMode,
              'to-black/90': !isInTour && prefersDarkMode,
              'to-green-900/80':
                isInTour &&
                (tourId === 'ChichenItza' || tourId === 'MayanAdventure'),
              'to-sky-900/80': isInTour && tourId === 'Tulum',
              'to-stone-900/80': isInTour && tourId === 'Coba',
              'to-emerald-900/80': isInTour && tourId === 'EkBalam',
              'to-yellow-900/80': isInTour && tourId === 'SianKaan&Muyil',
              'to-slate-900/80':
                isInTour &&
                (tourId === 'Cenotes' || tourId === 'Kayaking&Snorkeling'),
              'to-blue-900/80': isInTour && tourId === 'SianKaan&PuntaAllen',
            }"
            v-if="isDropdownOpen"
            @click="appState.toggleDropdown"
          >
            <div class="flex flex-col h-full px-4 pt-10 justify-between">
              <ul class="menu flex flex-col gap-6 mb-6">
                <li v-for="route in routes" :key="route.path" class="flex">
                  <NuxtLink
                    class="items-center px-4 uppercase transition-all flex text-lg/6 pb-1 border-l-4 border-transparent"
                    :class="{
                      'text-stone-200': isInTour,
                      'text-stone-800 dark:text-stone-200': !isInTour,
                    }"
                    :to="route.path"
                  >
                    {{ route.name }}
                  </NuxtLink>
                </li>
              </ul>
              <div class="actions grid gap-6 text-xl">
                <button
                    @click="toggleModal"
                    class="rounded-t-sm items-center justify-center tablet:pl-1 tablet:pr-3 uppercase transition-all flex backdrop-blur-lg text-md bg-stone-200/80 py-4 active:scale-90 p-1 font-display dark:bg-stone-900 text-stone-800 dark:text-stone-200"
                >
                  <FareHarborLogo
                      class="h-8 w-8 mr-2 dark:fill-stone-200"
                  />
                  Book now
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  @apply font-semibold laptop:text-stone-900 laptop:dark:text-stone-200 border-l-sky-600 opacity-100;
}
</style>
