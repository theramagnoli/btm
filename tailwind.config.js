module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Lexend', 'sans-serif'],
      display: ['Lexend', 'sans-serif'],
    },
    screens: {
      tablet: '550px',
      laptop: '1000px',
      desktop: '1400px',
      '[700px]': '700px',
      '[768px]': '768px',
      coarse: { raw: '(pointer: coarse)' },
      fine: { raw: '(pointer: fine)' },
    },
    extend: {
      opacity: {
        99: '0.99',
      },
      gridTemplateColumns: {
        '300px': 'repeat(auto-fill, minmax(300px, 1fr))',
        '350px': 'repeat(auto-fill, minmax(350px, 1fr))',
      },
      backgroundImage: {
        'gradient-radial-to-t':
          'radial-gradient(110% 100% at 50% 115%, var(--tw-gradient-stops))',
      },
      animationDirection: {
        reverse: 'reverse',
      },
      animation: {
        blob: 'blob 10s infinite',
        'interchange-r': 'interchange-r 20s infinite',
        'interchange-l': 'interchange-l 20s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '25%': {
            transform: 'translate(5vw, 5vh) scale(1.2)',
          },
          '50%': {
            transform: 'translate(-10vw, 5vh) scale(1)',
          },
          '75%': {
            transform: 'translate(10vw, -20vh), scale(1.2)',
          },
          '100%': {
            transform: 'translate(0, 0) scale(1)',
          },
        },
        'interchange-l': {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '50%': {
            transform: 'translate(-60%, 0)',
          },
          '100%': {
            transform: 'translate(0, 0)',
          },
        },
        'interchange-r': {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '50%': {
            transform: 'translate(60%, 0)',
          },
          '100%': {
            transform: 'translate(0, 0)',
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
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
  safelist: [
    {
      pattern:
        /bg-(green|lime|sky|stone|emerald|cyan|yellow|slate|blue)-(50|300|700|900)/,
      variants: ['dark'],
    },
    {
      pattern: /bg-stone-(50|950)/,
      variants: ['dark'],
    },
  ],
};
