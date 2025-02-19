/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,vue}", // adjust paths based on your project structure
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
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
