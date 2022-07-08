<template>
  <ul
    class="w-full flex gap-x-6 snap-x snap-mandatory overflow-x-auto scroll-smooth laptop:rounded-md"
    id="slider"
  >
    <li
      v-for="n in 5"
      :num-labels="5"
      :key="n"
      class="snap-center first:ml-20 last:mr-20 laptop:first:ml-0 laptop:last:mr-0"
    >
      <div class="relative overflow-hidden transition-all rounded-md">
        <div
          class="relative h-[250px] w-[250px] tablet:w-[444.4px] bg-gray-500 opacity-30 animate-pulse"
        ></div>
      </div>
    </li>
  </ul>
</template>
