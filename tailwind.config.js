/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      fontSize: {
        "5.5xl": [
          "3.5rem",
          {
            lineHeight: "1.2",
            letterSpacing: '0.04rem',
          },
        ],
      },
    },
    fontFamily: {
      dmsan: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
