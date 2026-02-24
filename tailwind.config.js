/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nude: {
          50:  '#fdf8f4',
          100: '#f9ede3',
          200: '#f2d9c5',
          300: '#e8c0a0',
          400: '#dba07a',
          500: '#c8825a',
        },
        rose: {
          petal: '#f4b8c8',
          soft:  '#e8a0b4',
          deep:  '#d4789a',
        },
        peach: {
          light: '#fce4d6',
          mid:   '#f5c4aa',
          warm:  '#eda882',
        },
        cream: '#fdfaf7',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
