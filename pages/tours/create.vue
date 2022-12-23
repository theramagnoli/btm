<template>
  <div class="c-div">
    <h1>Create your own tour</h1>
    <div class="mx-4 laptop:mx-0">
      <p>Select your first destination</p>
      <div v-for="place of places" class="flex gap-4 items-center">
        <h3>{{ place.name }}</h3>
        <p class="bold">Average time:</p>
        <p>{{ hoursToTimeString(place.averageVisitHrs) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import untypedPlaces from "assets/json/places.json";
import { Place } from "assets/entities/Place";
const places: Place[] = untypedPlaces;

function hoursToTimeString(hours: number): string {
  // Calculate the number of whole hours
  const numHours = Math.floor(hours);

  // Calculate the number of minutes by taking the decimal part of the number
  // of hours, multiplying it by 60, and rounding it to the nearest whole number
  const numMinutes = Math.round((hours - numHours) * 60);

  let timeString = "";
  if (numHours > 0) {
    timeString += `${numHours} hour${numHours === 1 ? "" : "s"}`;
  }
  if (numMinutes > 0) {
    timeString += ` ${numMinutes} minute${numMinutes === 1 ? "" : "s"}`;
  }

  return timeString;
}
</script>
