const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sat)', ...fontFamily.sans],
        serif: ['var(--font-crim)', ...fontFamily.serif],
      },
      colors: {
        theme: '#fe3737',
        green: '#30b66e',
        brown: '#e4ba79',
        black: '#140b05',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
