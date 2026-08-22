/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
          DEFAULT: '#2563eb',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          DEFAULT: '#10b981',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          DEFAULT: '#f59e0b',
        },
        dark: {
          50: '#f8fafc',
          800: '#1e293b',
          900: '#0f172a',
          950: '#030712',
          DEFAULT: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.700'),
            maxWidth: '65ch',
            a: {
              color: theme('colors.primary.600'),
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': { color: theme('colors.primary.700') },
            },
            h1: { color: theme('colors.slate.900'), fontFamily: theme('fontFamily.heading').join(', '), fontWeight: '800' },
            h2: { color: theme('colors.slate.900'), fontFamily: theme('fontFamily.heading').join(', '), fontWeight: '700' },
            h3: { color: theme('colors.slate.900'), fontFamily: theme('fontFamily.heading').join(', '), fontWeight: '600' },
            strong: { color: theme('colors.slate.900') },
            code: { color: theme('colors.primary.600') },
            blockquote: {
              borderLeftColor: theme('colors.primary.500'),
              color: theme('colors.slate.600'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.300'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': { color: theme('colors.primary.300') },
            },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            strong: { color: theme('colors.white') },
            blockquote: {
              borderLeftColor: theme('colors.primary.400'),
              color: theme('colors.slate.400'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
