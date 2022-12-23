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
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
      display: ["Unbounded", "sans-serif"],
    },
    screens: {
      tablet: "520px",
      laptop: "1000px",
    },
    extend: {
      backgroundImage: () => ({
        "gradient-radial-to-t":
          "radial-gradient(110% 100% at 50% 115%, var(--tw-gradient-stops))",
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
