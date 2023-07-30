/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        dark: {
          0: '#857eb6',
          50: '#4f48be',
          150: '#1e1751',
          100: '#322780',
          200: '#19124f',
          300: '#150e44',
          400: '#0d0730',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
