/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*/.{html,js}',
    './index.html',
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    extend: {
      flexBasis: {
        '2/12': '16.16666667%',
        '8/12': '80.8333333%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      gridTemplateColumns: {
        // 250px for the first column, auto for the second column
        'layout': '225px repeat(1, minmax(0, 1fr))',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

