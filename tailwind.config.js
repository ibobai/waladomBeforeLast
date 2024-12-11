/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        waladom: {
          green: '#4CAF50',
          'green-dark': '#388E3C',
          'green-light': '#81C784',
        }
      }
    },
  },
  plugins: [],
};