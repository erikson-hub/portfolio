/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        GraphikLight: ['GraphikLight', 'sans-serif'],
        GraphikLightItalic: ['GraphikLightItalic', 'sans-serif'],
        GraphikMedium: ['GraphikMedium', 'sans-serif'],
        GraphikMediumItalic: ['GraphikMediumItalic', 'sans-serif'],
        GraphikExtraLight: ['GraphikExtraLight', 'sans-serif'],
        GraphikRegular: ['GraphikRegular', 'sans-serif'],
      },
      gridTemplateColumns: {
        // Simple  column grid
        test: 'repeat(auto-fit, minmax(200px, .8fr))',
      },
    },
  },
  plugins: [],
};
