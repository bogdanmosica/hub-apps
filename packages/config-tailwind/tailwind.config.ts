import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

// We want each package to be responsible for its own content.
const defaultConfig: Omit<Config, "content"> = {
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        "blue-action-button": "#1947E5",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "gradient-background": "var(--gradient-background)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "text-change": {
          "0%": { content: "Powerful", opacity: 0.1 },
          "25%": { content: "Simple" },
          "50%": { content: "Unique" },
          "75%": { content: "Creative", opacity: 1 },
        },
        "emoji-change": {
          "0%": { content: "💣", opacity: 0.1 },
          "75%": { content: "🔥", opacity: 1 },
        },
        "text-up": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0,
            display: "block",
          },
          "100%": { transform: "translateY(0)", opacity: 1, display: "block" },
        },
        "text-down": {
          "0%": { transform: "translateY(0)", opacity: 1, display: "block" },
          "100%": {
            transform: "translateY(-100%)",
            opacity: 0,
            display: "block",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        wiggle: "wiggle 1s ease-in-out infinite",
        "text-change": "text-change 8s infinite",
        "emoji-change": "emoji-change 2s infinite",
        "text-up": "text-up 1s infinite",
        "text-down": "text-down 1s infinite",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default defaultConfig;
