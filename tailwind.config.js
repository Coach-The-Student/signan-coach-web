/** @type {import('tailwindcss').Config} */
import { BREAK_POINTS } from "./src/constants"

module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        primary: "#0052CC",
        secondary: "#EBF2FB",
        input: '#F2F2F2CC',
        "input-text": '#3C3C43',
        "dark-text": '#17171B',
        "grey-text": '#3C3C43',
        "border-grey": '#BDBDC6',
        "grey-light": "#F4F4F7",
        "grey-card": "#F7F7FA"
      }
  	},
    screens: {
      'sm': `${BREAK_POINTS.sm}px`,
      'md': `${BREAK_POINTS.md}px`,
      'lg': `${BREAK_POINTS.lg}px`,
      'xl': `${BREAK_POINTS.xl}px`,
    }

  },
  plugins: [require("tailwindcss-animate")],
}
