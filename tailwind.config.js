/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-color": "#ddd",
        "background-light": "#fff",
        "base-text": "#331a00",
        "base-alt-text": "aquamarine",
        "white-denser": "#cccc00",
        "closer-white": "#f2f2f2",
        "base-border": "#33331a",
        success: "#004d00",
      },
    },
  },
  plugins: [],
};
