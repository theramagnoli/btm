<script setup lang="ts">
import ToursShowcase from "~/components/tours/ToursShowcase.vue";

useHeadSafe({
  title: "Tours | Boutique Tours Mexico",
  meta: [
    {
      name: "description",
      content:
        "Discover our tour catalogue. From the most popular destinations to the most remote and unknown places in Mexico. We are sure you will find the perfect tour for you.",
    },
  ],
});
</script>

<template>
  <div class="container-div">
    <div class="grid px-6 gap-4 mt-4">
      <h1
        class="text-3xl tablet:text-4xl tracking-tight bg-gradient-to-t from-yellow-600 to-emerald-600 bg-clip-text text-transparent dark:text-transparent"
      >
        Find your <br />
        perfect <br />
        destination
      </h1>

      <div class="grid gap-4 mt-4">
        <ToursShowcase />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
