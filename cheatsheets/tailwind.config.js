import { createPreset } from "fumadocs-ui/tailwind-plugin";

/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        stroke: "stroke 5s linear infinite",
        light: "light 2s ease-in-out infinite",
        updown: "updown 3s ease-in-out infinite",
      },
      keyframes: {
        updown: {
          "from, to": {
            transform: "translateY(-20px)",
          },
          "50%": {
            transform: "translateY(20px)",
          },
        },
        light: {
          "from, to": {
            opacity: 0.7,
          },
          "50%": {
            opacity: 1,
          },
        },
        stroke: {
          from: {
            "stroke-dasharray": 1000,
          },
          to: {
            "stroke-dasharray": 1000,
            "stroke-dashoffset": 2000,
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
    },
  },

  presets: [createPreset()],
  // Remove the line below
}; //satisfies Config;

export default config;
