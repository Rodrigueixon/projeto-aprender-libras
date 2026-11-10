import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#4F46E5",
          foreground: "#FFFFFF",
          hover: "#4338CA",
          light: "#EEF2FF",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#F59E0B",
          foreground: "#FFFFFF",
          light: "#FEF3C7",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
          light: "#FFF1F2",
        },
        success: {
          DEFAULT: "#10B981",
          foreground: "#FFFFFF",
          light: "#ECFDF5",
          dark: "#059669",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "3d-primary": "0 4px 0 #4338CA",
        "3d-accent": "0 4px 0 #D97706",
        "3d-success": "0 4px 0 #059669",
        "3d-danger": "0 4px 0 #DC2626",
        "3d-neutral": "0 4px 0 #CBD5E1",
      },
    },
  },
  plugins: [],
};

export default config;
