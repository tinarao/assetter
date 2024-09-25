/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: "#4a38d5",
        text: "#09061d",
        background: "#f5f4fd",
        secondary: "#e68790",
        accent: "#dfa565"
      }
    },
  },
  plugins: [],
}

