/** @type {import('tailwindcss').Config} */
import themeColours from './utils/tailwind/themeColours';
const { fontFamily } = require('tailwindcss/defaultTheme');

  export const content = [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ];
  
  export const theme= {
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
      colors: themeColours,
      boxShadow: {
        'card': `5px 5px 10px -10px #0a0724`
      }
    },
  };

  export const plugins = [];

