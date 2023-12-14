/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '420px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'base': ['adobe-jenson-pro', 'serif'],
        'cursive': ['var(--cursive-font)', ...fontFamily.sans]
      },
      colors:{
        'primary-dark': '#1B1464',
        'primary-light': '#11A5E1',
        'secondary-action': '#F5D06F',
        'secondary-trim': '#BA7802'
      }
    },
  },
  plugins: [],
}
