<script setup lang="ts">
import ToursShowcase from '~/components/tours/ToursShowcase.vue';

useHeadSafe({
  title: 'Tours | Boutique Tours Mexico',
  meta: [
    {
      name: 'description',
      content:
        'Discover our tour catalogue. From the most popular destinations to the most remote and unknown places in Mexico. We are sure you will find the perfect tour for you.',
    },
  ],
});
</script>

<template>
  <div
    class="m-auto flex min-h-[calc(100vh-234px)] flex-col overflow-hidden pb-16 pt-[120px] text-stone-900 laptop:max-w-5xl laptop:pt-[100px] dark:text-stone-200"
  >
    <div class="grid gap-4 px-6 laptop:pt-6 desktop:mt-4">
      <h1
        class="bg-gradient-to-t from-yellow-600 to-emerald-600 bg-clip-text text-4xl tracking-tight text-transparent tablet:text-5xl laptop:mb-4 dark:text-transparent"
      >
        Find your <br />
        perfect <br />
        destination
      </h1>

      <div class="mt-2 grid gap-4">
        <ToursShowcase />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
