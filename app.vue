<script setup lang="ts">
const { isLargeMobile } = useScreenSizes();
/*
 TODO: Work on dark mode color scheme, to implement dark mode, use the following code:
 Define in script: ```const { prefersDarkMode } = usePrefersDarkMode();```
 Add property to 'main' tag: ```:class="prefersDarkMode && 'dark'"``` or apply directly to the body tag
*/
</script>

<template>
  <main>
    <Background />
    <NavigationComp />
    <NuxtPage />
    <FooterComp />
    <BookingButton v-if="isLargeMobile" />
  </main>
</template>

<style></style>
