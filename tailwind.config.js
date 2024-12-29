/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: 'media',
   theme: {
     extend: {
       colors: {
        'primary-color': '#646464',
        'secondary-color': '#eb598e',
        'accent-900': '#ff1569',
        'accent-800': '#e8135f',
        'accent-700': '#c21050',
        'accent-600': '#8f0b3a',
        'accent-500': '#750930',
        'background': '#262626',
        'text': '#333333',
       },
       fontFamily: {
         sans: ['Montserrat', 'sans-serif'],
       },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
}

