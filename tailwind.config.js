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
      animation: {
        blob: "blob 8s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0, 0) scale(1)",
          },
          "25%": {
            transform: "translate(5vw, 5vh) scale(1.2)",
          },
          "50%": {
            transform: "translate(5vw, -5vh) scale(1)",
          },
          "75%": {
            transform: "translate(-5vw, -5vh), scale(1.2)",
          },
          "100%": {
            transform: "translate(0, 0) scale(1)",
          },
        },
      },
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
