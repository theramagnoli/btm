<script setup lang="ts">
const { colorClass } = useColor();
</script>

<template>
  <div class="fixed -z-50 h-[100dvh] w-full" :class="colorClass"></div>
</template>
