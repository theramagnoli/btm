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
      animationDirection: {
        reverse: "reverse",
      },
      animation: {
        blob: "blob 8s infinite",
        "interchange-r": "interchange-r 20s infinite",
        "interchange-l": "interchange-l 20s infinite",
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
            transform: "translate(-10vw, 5vh) scale(1)",
          },
          "75%": {
            transform: "translate(10vw, -10vh), scale(1.2)",
          },
          "100%": {
            transform: "translate(0, 0) scale(1)",
          },
        },
        "interchange-l": {
          "0%": {
            transform: "translate(0, 0)",
          },
          "50%": {
            transform: "translate(-60%, 0)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
        "interchange-r": {
          "0%": {
            transform: "translate(0, 0)",
          },
          "50%": {
            transform: "translate(60%, 0)",
          },
          "100%": {
            transform: "translate(0, 0)",
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
