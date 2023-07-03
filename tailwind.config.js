/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "search-hero":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://images.pexels.com/photos/1770812/pexels-photo-1770812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      height: {
        "search-hero": "33.5rem",
      },
      width: {
        "search-bar": "32rem",
      },
    },
  },
  plugins: [],
};
