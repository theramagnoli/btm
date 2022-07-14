<template>
  <div id="colorMode">
    <div class="s-div">
      <navigation-comp @changeMode="changeMode" />
      <NuxtPage class="pt-20" />
      <footer-comp />
      <booking-button />
    </div>
  </div>
</template>

<script>
import "./assets/css/tailwind.css";
export default {
  head: {
    title: "Boutique Tours Mexico • Premiere Archeology & History Tours",
    meta: [
      { charset: "utf-8" },
      {
        hid: "description",
        name: "description",
        content:
          "Specialist in perzonalized flexible, small-group and private tours to the most amazing cenotes and impressive archeological áreas such as Tulum, Coba and Chichen-Itza. We help you discover the best of Mexico!",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "tours, tour, private tours, vacation, tour mexico, cancun, tulum",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/static/favicon.svg" }],
    script: [{ src: "https://fareharbor.com/embeds/api/v1/" }],
  },
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
