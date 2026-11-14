/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: '#07080B',
          900: '#0A0B10',
          850: '#0F111A',
          800: '#161824',
          750: '#1D2030',
          700: '#25293D',
        },
        brand: {
          violet: '#7C3AED',
          indigo: '#6366F1',
          purple: '#8B5CF6',
          fuchsia: '#C026D3',
          emerald: '#10B981',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7C3AED 0%, #6366F1 50%, #4F46E5 100%)',
        'brand-glow': 'radial-gradient(circle at center, rgba(124, 58, 237, 0.18) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)',
        'border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.03) 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(124, 58, 237, 0.3)',
        'glow-md': '0 0 35px -5px rgba(124, 58, 237, 0.45)',
        'glow-lg': '0 0 60px -10px rgba(99, 102, 241, 0.5)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.4)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}
