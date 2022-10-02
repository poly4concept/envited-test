/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#240D57',
        'purple-light': '#501FC1',
        'purple-envited': '#8456EC',
        'pink': '#8456EC',
        'gray-1': '#4F4F4F',
        'gray-2': '#828282',
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)',
        'button-gradient': 'linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)',
      },
      dropShadow: {
        'image': '0px 0px 33.1283px rgba(0, 0, 0, 0.05)',
      },
      boxShadow: {
        'icon': '0px 0px 5px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}
