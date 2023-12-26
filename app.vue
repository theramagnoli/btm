<template>
  <div
    class="superior-div"
    :class="{
      'overflow-hidden': isDropdownOpen,
    }"
  >
    <Background />
    <NavigationComp />
    <NuxtPage />
    <FooterComp />
    <BookingButton v-if="isMobile" />
  </div>
</template>

<script setup lang="ts">
import useAppStateStore from "~/store/appStateStore";
import BookingButton from "~/components/BookingButton.vue";

const appState = useAppStateStore();
const prefersDarkMode = computed<boolean>(() => appState.prefersDarkMode);
const isDropdownOpen = computed(() => appState.isDropdownOpen);
const isMobile = computed(() => appState.isMobile);

watch(isDropdownOpen, (val) => {
  if (val) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";
});

watch(
  prefersDarkMode,
  (val) => {
    if (val) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
    appState.setTheme(val);
  },
  { immediate: true },
);
</script>

<style>
@import "assets/css/animations.css";
</style>
