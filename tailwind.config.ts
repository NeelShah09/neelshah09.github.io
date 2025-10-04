import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        "glass-border": "hsl(var(--glass-border))",
        "cyber-yellow": {
          50: "hsl(50, 100%, 95%)",
          100: "hsl(50, 100%, 90%)",
          200: "hsl(50, 100%, 85%)",
          300: "hsl(50, 100%, 80%)",
          400: "hsl(50, 100%, 75%)",
          500: "hsl(50, 100%, 70%)",
          600: "hsl(50, 100%, 65%)",
          700: "hsl(50, 100%, 60%)",
          800: "hsl(50, 100%, 55%)",
          900: "hsl(50, 100%, 50%)",
        },
        "cyber-gold": {
          50: "hsl(45, 100%, 95%)",
          100: "hsl(45, 100%, 90%)",
          200: "hsl(45, 100%, 85%)",
          300: "hsl(45, 100%, 80%)",
          400: "hsl(45, 100%, 75%)",
          500: "hsl(45, 100%, 70%)",
          600: "hsl(45, 100%, 65%)",
          700: "hsl(45, 100%, 60%)",
          800: "hsl(45, 100%, 55%)",
          900: "hsl(45, 100%, 50%)",
        },
        "tech-gray": {
          50: "hsl(0, 0%, 95%)",
          100: "hsl(0, 0%, 85%)",
          200: "hsl(0, 0%, 75%)",
          300: "hsl(0, 0%, 65%)",
          400: "hsl(0, 0%, 45%)",
          500: "hsl(0, 0%, 25%)",
          600: "hsl(0, 0%, 20%)",
          700: "hsl(0, 0%, 15%)",
          800: "hsl(0, 0%, 10%)",
          900: "hsl(0, 0%, 5%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--accent) / 0.4)",
          },
        },
        "cyber-scan": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
        },
        "terminal-cursor": {
          "0%, 50%": {
            opacity: "1",
          },
          "51%, 100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "cyber-scan": "cyber-scan 3s ease-in-out infinite",
        "terminal-cursor": "terminal-cursor 1s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
