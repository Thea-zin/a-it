/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundSize:{'100':'100% 100%'},
      backgroundImage:{
        'triangle':'linear-gradient(to bottom right,#000 60%,#fff 50%)',

      },
      fontFamily:{
        dmsan:["dmsan"]
      },
      colors:{
        cyan:'#1dcdfe',
        darkblue:'#2f455c',
        white:"#ffffff",
        darkgray:"#4a4a4a",
        red:"#ff3535",
        gray:"#D9D9D9",
        base:"#f7f8fa",
        basedark:"#4a4a4a",
        divider:"#eeebeb",
        stroke:"#e3e6ea",
        baselight:"#ababab",
        link:"#005FC1"

      },
      screens:{
        'xsm':'100px',
        'sm':'640px',
        'md':'900px',
        'lg':'1024px'
      },
      fontSize:{
        'display-lg':'56px',
        'display-md':'32px',
        'display-sm':'24px',
        'title-lg':'24px',
        'title-md':'20px',
        'body-lg':'18px',
        'body-md':'16px',
        'body-sm':'12px',
        'label-lg':'18px',
        'label-md':'16px',
        'label-sm':'12px',
        'body-xsm':'6px'
      }
      
    },
  },
  plugins: [],
}
