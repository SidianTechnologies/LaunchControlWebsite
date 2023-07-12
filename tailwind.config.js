const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.orange[600],
        },
        text: {
          light: colors.orange[200],
          DEFAULT: colors.stone[400],
          datk: colors.stone[500],
        }
      },
      spacing: {
        break: '80px',
        space: '16px',
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
          "@apply px-4 py-2 border-2 border-text-light rounded bg-primary text-text-light": {}
        },
      });
    },
  ],
}

