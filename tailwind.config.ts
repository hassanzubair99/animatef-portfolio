import type {Config} from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'welcome': {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
         'spin-slow-very': {
            'from': {
                transform: 'rotate(0deg) scale(1)',
            },
            'to': {
                transform: 'rotate(360deg) scale(1.1)',
            },
        },
        'text-glow': {
          '0%, 100%': { 'text-shadow': '0 0 5px hsl(var(--accent)), 0 0 10px hsl(var(--accent))' },
          '50%': { 'text-shadow': '0 0 10px hsl(var(--accent)), 0 0 20px hsl(var(--accent))' },
        },
        'welcome-glow': {
            '0%': { 'text-shadow': '0 0 15px hsl(0, 100%, 50%), 0 0 5px hsl(var(--foreground) / 0.5)' },
            '16%': { 'text-shadow': '0 0 15px hsl(60, 100%, 50%), 0 0 5px hsl(var(--foreground) / 0.5)' },
            '33%': { 'text-shadow': '0 0 15px hsl(120, 100%, 50%), 0 0 5px hsl(var(--foreground) / 0.5)' },
            '50%': { 'text-shadow': '0 0 15px hsl(180, 100%, 50%), 0 0 5px hsl(var(--foreground) / 0.5)' },
            '66%': { 'text-shadow': '0 0 15px hsl(240, 100%, 50%), 0 0 5px hsl(var(--foreground) / 0.5)' },
            '83%': { 'text-shadow': '0 0 15px hsl(300, 100%, 50%), 0 0 5px hsl(var(--foreground) / 0.5)' },
            '100%': { 'text-shadow': '0 0 15px hsl(360, 100%, 50%), 0 0 5px hsl(var(--foreground) / 0.5)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 1s ease-in-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'welcome': 'welcome 1.5s cubic-bezier(0.25, 1, 0.5, 1)',
        'spin-slow-very': 'spin-slow-very 120s linear infinite alternate',
        'text-glow': 'text-glow 2s ease-in-out infinite alternate',
        'welcome-glow': 'welcome-glow 4s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addUtilities, theme }: { addUtilities: any, theme: any}) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 0 15px hsl(var(--accent) / 0.8)',
        },
        '.text-shadow-strong': {
          textShadow: '0 0 25px hsl(var(--accent)), 0 0 5px hsl(var(--foreground) / 0.5)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
} satisfies Config;
