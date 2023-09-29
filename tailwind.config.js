/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        dmsan:["dmsan"]
      },
      colors:{
        cyan:'#1dcdfe',
        darkblue:'#2f455c',
        white:"#ffffff",
        darkgray:"#4a4a4a",
        red:"#ff3535"

      },
      screens:{
        'xsm':'100px',
        'sm':'640px',
        'md':'900px',
        'lg':'1024px'
      }
      
    },
  },
  plugins: [],
}
