<script setup lang="ts">
defineProps<{
  paragraphs: string | string[];
}>();
</script>

<template>
  <div
    class="flex max-w-3xl flex-col gap-4 text-base/relaxed tracking-wide text-stone-800 child:hyphens-auto dark:text-stone-200"
  >
    <p v-if="typeof paragraphs === 'string'">{{ paragraphs }}</p>
    <p v-else v-for="(paragraph, idx) in paragraphs" :key="idx">
      {{ paragraph }}
    </p>
  </div>
</template>
