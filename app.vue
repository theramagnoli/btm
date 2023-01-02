<template>
  <div :class="{ dark: prefersDarkMode }">
    <div class="superior-div">
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

onMounted(() => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    prefersDarkMode.value = true;
});
</script>

<style>
@import "assets/css/animations.css";
.circle {
  @apply absolute h-[40rem] aspect-square rounded-full filter blur-[100px] opacity-10 dark:opacity-30 animate-blob;
}
</style>
