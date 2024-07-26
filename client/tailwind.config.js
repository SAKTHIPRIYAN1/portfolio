import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors:{
        'divclr':'#1d1d1d',
        'fntclr':'rgb(224,229,239)',
        'hdclr':'#fff',
      },
      screens: {
        'sm': { 'max': '600px' },  // Mobile screens
        'md': { 'min': '600px', 'max': '1023px' }, // Tablet screens
        'lg': { 'min': '1024px' },  // Large screens and up
        'blmd':{'min': '600px','max': '721px' }
      },
      backgroundImage: {
        'custom': 'radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)',
      },
      filter: {
        'blur-100': 'blur(100px)',
      },
      rotate: {
        '230': '230deg',
      },
      zIndex: {
        '-1': '-1',
      },
      animation: {
        'spc': 'moveRandom 10s linear infinite',
        'spc2': 'moveRandom2 10s linear infinite',
      },
      keyframes: {
        moveRandom: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-70px, -70px)' },
          '50%': { transform: 'translate(50px, -50px)' },
          '75%': { transform: 'translate(70px, 70px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        moveRandom2: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(70px, 70px)' },
          '50%': { transform: 'translate(-50px, 50px)' },
          '75%': { transform: 'translate(-70px, -70px)' },
          '100%': { transform: 'translate(0,0)' },
        },
      },

    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}