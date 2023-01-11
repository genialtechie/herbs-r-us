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
        sans: ['var(--font-rubik)', ...fontFamily.sans],
        serif: ['var(--font-roboto)', ...fontFamily.serif],
      },
      colors: {
        'custom-theme': '#a128b7',
        'custom-gray': '#2d2e33',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
