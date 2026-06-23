/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Aztec brand system
        ink: {
          DEFAULT: '#0E0E0E',
          900: '#0A0A0A',
          800: '#141414',
          700: '#1C1C1C',
          600: '#262626',
        },
        bone: {
          DEFAULT: '#F6F5F2',
          200: '#EFEDE8',
          300: '#E4E1DA',
        },
        accent: {
          DEFAULT: '#FFD400',
          400: '#FFDE33',
          600: '#E6BE00',
        },
        muted: '#6B6B6B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Archivo"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        wide: '1440px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
