import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          magenta: '#B00052',
          magenta_hover: '#90084A',
          green: '#A2C13A',
        },
        secondary: {
          dark_turquoise: '#2D6F76',
          light_turquoise: '#86A1A7',
          lime_daiquiri: '#DCEBDB',
        },
        page_fill: {
          neutral: '#F9F9F9',
          white: '#ffffff',
          lime: '#F8F9FA',
        },
        visualisation: {
          dark: '#2D6F76',
          light: '#86A1A7',
          green: '#A2C13A',
          magenta: '#AB0052',
        },
        semantics: {
          success: '#617763',
          pending: '#BF6E12',
          error: '#BB3E45',
          success_5: 'rgba(97, 119, 99, 0.05)',
          pending_5: 'rgba(163, 98, 24, 0.05)',
          error_5: 'rgba(187, 62, 69, 0.05)',
        },
        neutral: {
          500: '#585A5C',
          400: '#71767A',
          300: '#9299A0',
          200: '#CED4DA',
          100: '#EEF1F3',
          50: '#F9F9F9',
        },
        dark: '#222222',
        white: '#FFFFFF',
      },
      boxShadow: {
        cart_shadow: '0px 8px 24px rgba(88, 90, 92, 0.05)',
        data_hover: '0px 4px 16px rgba(88, 90, 92, 0.2)',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
      screens: {
        sm: { max: '640px' },
        md: { max: '770px', min: '641px' },
        lg: { max: '1024px', min: '771px' },
        xl: { max: '1300px', min: '1025px' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
