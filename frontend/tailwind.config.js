/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0C2141",
          "secondary": "#feae6f",
          "accent": "#DD2076",
          "neutral": "#fff",
          "base-100": "#ffffff",
        },
      },
    ],
    base: false,
  },
}