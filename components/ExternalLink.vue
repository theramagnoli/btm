<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/16/solid';
</script>

<template>
  <a
    target="_blank"
    rel="noopener noreferrer"
    class="cursor-pointer text-emerald-800 opacity-80 transition-all duration-300 ease-in-out hover:opacity-100 dark:text-emerald-200"
  >
    <slot />
  </a>
</template>
