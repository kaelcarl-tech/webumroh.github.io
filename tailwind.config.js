/** @type {import('tailwindcss').Config} */
import tailwindAnimated from 'tailwindcss-animated';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Osans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindAnimated],
};
