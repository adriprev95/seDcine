/* @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        mypallete: {
          100: '#4a506a',
          200: '#c58d91',
          300: '#dfb7ab',
          400: '#f0d9b6',
          500: '#d3c5ae'
        },
        'coral-red': {
          DEFAULT: '#FF3847',
          50: '#FFF6F0',
          100: '#FFE8DB',
          200: '#FFC5B2',
          300: '#FF998A',
          400: '#FF6561',
          500: '#FF3847',
          600: '#FA002D',
          700: '#BD0036',
          800: '#7F0032',
          900: '#420021',
          950: '#240014'
        }
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FF3847",
          "secondary": "#BD0036",
          "accent": "#FF998A",
          "base-100": "#FFE8DB",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}
