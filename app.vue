<template>
  <div id="colorMode">
    <div class="s-div">
      <NavigationComp
        @changeMode="prefersDarkMode = !prefersDarkMode"
        :prefers-dark-mode="prefersDarkMode"
      />
      <div class="h-20"></div>
      <NuxtPage />
      <FooterComp />
      <BookingButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "nuxt/app";
import { watch, ref, onMounted } from "#imports";

const prefersDarkMode = ref(false);

const route = useRoute();
watch(route, () => {
  setTimeout(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, 200);
});

watch(prefersDarkMode, (to) => {
  const colorModeDiv = document.querySelector("#colorMode");
  if (colorModeDiv) {
    if (to) {
      colorModeDiv.classList.add("dark");
    } else {
      colorModeDiv.classList.remove("dark");
    }
  }
});

onMounted(() => {
  let matched = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (matched) prefersDarkMode.value = true;
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
