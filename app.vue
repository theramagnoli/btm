<template>
  <div id="colorMode">
    <div class="s-div relative">
      <div class="background">
        <div class="circle bg-emerald-900 top-1/2 right-1/2" />
        <div
          class="circle bg-green-200 dark:bg-green-900 bottom-1-2 left-1/2 animation-delay-1000"
        />
        <div
          class="circle bg-cyan-200 dark:bg-cyan-900 bottom-1/2 right-1/2 animation-delay-2000"
        />
        <div
          class="circle bg-teal-200 dark:bg-teal-900 top-1/2 left-1/2 animation-delay-3000"
        />
      </div>

      <NavigationComp
        @changeMode="prefersDarkMode = !prefersDarkMode"
        :prefers-dark-mode="prefersDarkMode"
      />
      <div class="h-20" />
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
.circle {
  @apply absolute h-[40rem] aspect-square rounded-full filter blur-[100px] opacity-10 dark:opacity-30 animate-blob;
}

.animation-delay-1000 {
  animation-delay: 2s;
}
.animation-delay-2000 {
  animation-delay: 4s;
}
.animation-delay-3000 {
  animation-delay: 6s;
}
</style>
