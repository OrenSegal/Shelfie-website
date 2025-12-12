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
        "cream": "#FFFBF2",
        "cream-dark": "#F2EBE0",
        "charcoal": "#1A1A1A",
        "tomato": "#E53E3E",
        "stem": "#48BB78",
        "text-main": "#2D2D2D",
        "text-muted": "#5A5A5A",
        "card-bg": "#FFFFFF",
      },
      fontFamily: {
        "display": "var(--font-display)",
        "body": "var(--font-body)",
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "full": "9999px" },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'glow': '0 0 20px rgba(229, 62, 62, 0.3)',
        'hard': '4px 4px 0px 0px rgba(26,26,26,1)'
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
