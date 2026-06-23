/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* ---- New semantic design system ---- */
        ink: {
          DEFAULT: '#0B2545',   // deep navy — primary text / trust
          soft: '#13315C',
          muted: '#3E5879',
        },
        primary: {
          DEFAULT: '#1E6FD9',   // confident brand blue
          dark: '#1657AD',
          light: '#4F95E8',
          soft: '#E8F1FC',      // tint surface
        },
        sky: {
          DEFAULT: '#2F95D0',   // legacy brand-continuity blue
          light: '#60B4DE',
        },
        accent: {
          DEFAULT: '#F5A524',   // aspirational amber/gold
          dark: '#D98A0B',
          soft: '#FEF3E0',
        },
        canvas: {
          DEFAULT: '#F7F9FC',   // warm off-white page background
          alt: '#EEF3FA',
        },
        line: '#E2E8F2',        // hairline borders

        /* ---- Legacy brand aliases (kept so older refs don't break) ---- */
        brand: {
          blue: '#1E6FD9',
          'blue-light': '#4F95E8',
          red: '#E11D48',
          'red-light': '#FB7185',
          dark: '#0B2545',
          light: '#EEF3FA',
          gray: '#5E6C84',
          'gray-light': '#94A3B8',
        },
      },
      fontFamily: {
        heading: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 4px 20px -4px rgba(11, 37, 69, 0.08)',
        card: '0 8px 30px -8px rgba(11, 37, 69, 0.12)',
        lift: '0 20px 50px -12px rgba(11, 37, 69, 0.18)',
        glow: '0 10px 40px -8px rgba(30, 111, 217, 0.35)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(11,37,69,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,37,69,0.04) 1px, transparent 1px)',
      },
      animation: {
        'marquee-left': 'marquee-left 40s linear infinite',
        'marquee-right': 'marquee-right 40s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
        'float-slow': 'float-slow 9s ease-in-out infinite',
      },
      keyframes: {
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
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
};
