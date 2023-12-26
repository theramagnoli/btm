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
  </div>
</template>

<script setup lang="ts">
import useAppStateStore from "~/store/appStateStore";
const appState = useAppStateStore();
const prefersDarkMode = computed<boolean>(() => appState.prefersDarkMode);
const isDropdownOpen = computed(() => appState.isDropdownOpen);

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
  { immediate: true }
);
</script>

<style>
@import "assets/css/animations.css";
@import "assets/css/utils.css";
</style>
