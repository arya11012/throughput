/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "./src/*.js",
  ],
  theme: {
    extend: {
      width: {
        '32': '8rem', // Add larger margin value
        '70': '14rem', // Add even larger margin value
        '60':'13rem',
        '50':'12rem',
        '90':'90rem'
      },

      height:{
        '80':'36.3rem',
        '50':'20.3rem'
      },
      padding:{
        '30':'8rem',
        '40':'16rem'
      }
    },
  },
  plugins: [],
}

