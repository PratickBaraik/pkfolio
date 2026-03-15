/** @type {import('tailwindcss').Config} */

import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      /* Audio waveform animation */
      keyframes: {
        wave: {
          "0%": { transform: "scaleY(0.4)" },
          "50%": { transform: "scaleY(1.3)" },
          "100%": { transform: "scaleY(0.4)" },
        },
      },

      animation: {
        wave: "wave 0.9s ease-in-out infinite",
      },
    },
  },

  plugins: [forms, typography],
};
