/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#7C3AED',
          light: '#8B5CF6',
          dark: '#6D28D9',
          deeper: '#4C1D95',
        },
        app: {
          bg: '#0A0618',
          card: '#130D2E',
          cardHover: '#1C1440',
          border: 'rgba(139,92,246,0.2)',
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '70%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        starSpin: {
          '0%': { transform: 'rotate(0deg) scale(0)', opacity: '0' },
          '60%': { transform: 'rotate(540deg) scale(1.2)', opacity: '1' },
          '100%': { transform: 'rotate(720deg) scale(1)', opacity: '1' },
        },
        confettiFall: {
          '0%': { transform: 'translateY(-20px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
        },
        xpFill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--xp-percent)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(139,92,246,0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(139,92,246,0.9), 0 0 40px rgba(139,92,246,0.4)' },
        },
        bounce2: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-6px)' },
          '40%, 80%': { transform: 'translateX(6px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out',
        float: 'float 3s ease-in-out infinite',
        pop: 'pop 0.4s ease-out forwards',
        starSpin: 'starSpin 0.8s ease-out forwards',
        confettiFall: 'confettiFall linear forwards',
        glow: 'glow 2s ease-in-out infinite',
        bounce2: 'bounce2 1.5s ease-in-out infinite',
        slideUp: 'slideUp 0.3s ease-out forwards',
        shake: 'shake 0.4s ease-in-out',
      },
    },
  },
  plugins: [],
}
