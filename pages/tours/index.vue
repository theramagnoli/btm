<script setup lang="ts">
import { useHead } from "nuxt/app";
import {
  adventureToursBrief,
  archaeologicalToursBrief,
} from "assets/json/tours";

import ToursShowcase from "~/components/tours/ToursShowcase.vue";
import { useMediaQuery } from "@vueuse/core";

useHead({
  title: "Tours | Boutique Tours Mexico",
  meta: [
    {
      name: "description",
      content:
        "Discover our tour catalogue. From the most popular destinations to the most remote and unknown places in Mexico. We are sure you will find the perfect tour for you.",
    },
  ],
});

const isTablet = useMediaQuery("(max-width: 1000px)");
</script>

<template>
  <div class="container-div">
    <div class="grid px-4 gap-4 mt-4 laptop:mt-0">
      <h1
        class="text-4xl tracking-tight bg-gradient-to-t from-yellow-700 to-emerald-700 bg-clip-text text-transparent dark:text-transparent"
      >
        Find your <br />perfect <br />
        destination
      </h1>

      <div class="grid gap-4 mt-4">
        <ToursShowcase
          :tours="archaeologicalToursBrief.concat(adventureToursBrief)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
