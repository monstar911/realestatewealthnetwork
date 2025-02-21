/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,vue}", // adjust paths based on your project structure
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: { max: "640px" },
        md: { min: "641px", max: "768px" },
        lg: { min: "769px", max: "1024px" },
        xl: { min: "1025px", max: "1280px" },
        "2xl": { min: "1281px", max: "1440px" },
        "3xl": { min: "1441px" },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        "patrick-hand": [
          '"Patrick Hand"',
          "Helvetica",
          "sans-serif",
          "!important",
        ],
      },
      backgroundColor: {
        "custom-dark": "#1a3a3a",
      },
      // Add custom colors if needed
      colors: {
        "chat-button": "var(--chat-button-bg-color)",
        "chat-shadow": "var(--chat-button-shadow-color)",
        "chat-text": "var(--chat-button-text-color)",
        "client-bubble": "var(--client-bubble-bg)",
        "client-transparent": "var(--client-transparent-bubble-bg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
