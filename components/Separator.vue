<template>
  <div class="gradient dark:dark-stops h-10 rotate-180 mt-8" />
</template>

<style>
:root {
  --gradient-stops: #a8a29e70, transparent, transparent;
}
.dark .dark\:dark-stops {
  --gradient-stops: rgb(31 41 55 / 0.9), transparent, transparent;
}
.gradient {
  background-image: radial-gradient(
    110% 100% at 50% 115%,
    var(--gradient-stops)
  );
}
</style>
