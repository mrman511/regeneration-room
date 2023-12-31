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
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
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
        'transparent-black': '#00000080',
        'almost-black': '#0a0724',
        'extra-dark': '#100c3a',
        'primary-dark': '#1B1464',
        'primary-light': '#11A5E1',
        'secondary-action': '#F5D06F',
        'secondary-trim': '#BA7802',
        'success': '#3DE111',
        'error': '#E14D11',
      }
    },
  },
  plugins: [],
}
