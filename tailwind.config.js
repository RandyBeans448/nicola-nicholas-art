/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
  themes: [
    {
      mytheme: {
        "primary": "#ffffff",
        "secondary": "#ffffff",
        "accent": "#ffffff",
        "neutral": "#ffffff",
        "base-100": "#ffffff",
      },
    },

  ],
},
  plugins: [require("daisyui")],
}

