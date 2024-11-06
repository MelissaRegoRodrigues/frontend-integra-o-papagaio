/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        green: '#3C793A',
        dark_green: '#274C24',
        light_green: '#BED366',
        yellow: '#FFDC25',
        dark_yellow: '#EFA90B',
        dark_blue: '#2B3551',
        light_blue: '#188393'

      },
    },
  },
  plugins: [],
};
