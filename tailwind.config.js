const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': {transform: `translate(0%)`},
          '100%': {transform: `translate(-100%)`},
        },
      },
      animation: {
        sliding: 'slide 10s linear infinite',
      },
      colors: {
        background: {
          DEFAULT: "#110a03",
        },
        primary: {
          light: colors.orange[300],
          DEFAULT: "#ff8000",
          dark: "#321a01",
        },
        text: {
          light: "#f3dbbe",
          DEFAULT: "#9b8f80",
          dark: colors.stone[500],
        }
      },
      spacing: {
        break: '80px',
        space: '16px',
      },
      keyframes: {
        disappear: {
          '0%': {transform: `translate(0)`},
          '100%': {transform: `translate(-100%)`},
        },
      },
      animation: {
        sliding: 'disappear 10s linear infinite',
        delay: 'disappear 10s linear infinite 10s',
      }
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".rounded": {
          "@apply rounded-lg": {}
        },
        ".button-primary": {
          "@apply px-4 py-2 border-2 border-primary-dark rounded bg-primary text-primary-dark font-bold": {}
        },
        ".button-secondary": {
          "@apply px-4 py-2 border-2 border-text-light rounded bg-transparent text-text-light font-bold": {}
        },
      });
    },
  ],
}

