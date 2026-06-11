/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ictim: {
          navy: "#0A1628",
          deep: "#0B1D3A",
          primary: "#1E40AF",
          secondary: "#3B82F6",
          accent: "#38BDF8",
          light: "#EFF6FF",
          muted: "#93C5FD",
        },
      },
      fontFamily: {
        serif: ["Crimson Pro", "Georgia", "serif"],
        heading: ["Exo", "system-ui", "sans-serif"],
        body: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
