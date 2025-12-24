import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Exact brand colors from Shelfie app
        "cream": "#FFF8F0",        // warmCream - inviting, home-like
        "charcoal": "#1A1A1A",     // darkBackground - sophisticated
        "tomato": "#E62828",       // brandPrimary - energetic, appetizing
        "stem": "#007e3e",         // brandSecondary - natural, trustworthy
        "spice": "#E07A5F",        // brandTertiary - exciting, passionate

        // Status colors (from app)
        "fresh": "#34C759",        // >7 days - solid iOS green
        "warning": "#FFCC00",      // 3-7 days - solid yellow
        "urgent": "#FF6B40",       // 1-3 days - solid coral

        // Surface colors
        "surface": "#FFFFFF",
        "surface-elevated": "#F5F5F5",

        // Text colors
        "text-main": "#1F2937",
        "text-muted": "#6B7280",
        "text-tertiary": "#667080",

        // Additional
        "border": "#E5E7EB",
        "shadow": "rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        "display": "var(--font-display)",
        "body": "var(--font-body)",
        "hand": "var(--font-hand)",
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.10)',
        'elevated': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
export default config;
