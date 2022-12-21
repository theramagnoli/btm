<template>
  <div id="colorMode">
    <div class="s-div">
      <NavigationComp @changeMode="changeMode" />
      <div class="h-20"></div>
      <NuxtPage />
      <FooterComp />
      <BookingButton />
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      setTimeout(() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, 200);
    },
    darkMode(a) {
      if (a == true) {
        document.querySelector("#colorMode").classList.add("dark");
      } else {
        document.querySelector("#colorMode").classList.remove("dark");
      }
    },
  },
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    changeMode() {
      if (this.darkMode == false) {
        this.darkMode = true;
      } else {
        this.darkMode = false;
      }
    },
  },
  mounted() {
    let matched = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (matched) this.darkMode = true;
  },
};
</script>
