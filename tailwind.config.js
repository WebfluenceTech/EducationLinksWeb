/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0E84C9',
          'blue-dark': '#0A6BA3',
          'blue-light': '#5BA9DA',
          red: '#E14B4B',
          'red-dark': '#C73B3B',
          'red-light': '#EB7A7F',
          dark: '#15181F',
          ink: '#0F1115',
          light: '#ECEBEC',
          gray: '#5B6573',
          'gray-light': '#98A1AE',
          navy: '#0F1B2D',
        },
        surface: {
          DEFAULT: '#F7F8FA',
          soft: '#F1F6FB',
          warm: '#FAFAF9',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Nunito', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'Nunito', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Nunito', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        serif: ['"Plus Jakarta Sans"', 'sans-serif'],
        script: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 14px 40px -20px rgba(15, 23, 42, 0.16)',
        card: '0 1px 3px rgba(15, 23, 42, 0.04), 0 6px 20px -12px rgba(15, 23, 42, 0.10)',
        'card-hover': '0 18px 44px -22px rgba(15, 23, 42, 0.20)',
        'blue-glow': '0 12px 30px -14px rgba(14, 132, 201, 0.40)',
      },
      animation: {
        'marquee-left': 'marquee-left 40s linear infinite',
        'marquee-right': 'marquee-right 40s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
