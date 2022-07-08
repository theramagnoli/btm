module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      tablet: "520px",
      laptop: "800px",
    },
    extend: {
      backgroundImage: () => ({
        "gradient-radial-to-tr":
          "radial-gradient(100% 60% at 0% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-l":
          "radial-gradient(90% 80% at 100% 50%, var(--tw-gradient-stops))",
        "gradient-radial-to-r":
          "radial-gradient(90% 80% at 0% 50%, var(--tw-gradient-stops))",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
