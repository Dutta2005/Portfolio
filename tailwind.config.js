/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
        steam: {
          '0%, 100%': { transform: 'translateY(0)', opacity: 1 },
          '50%': { transform: 'translateY(-5px)', opacity: 0.5 },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 4px #facc15, 0 0 8px #facc15' },
          '50%': { textShadow: '0 0 8px #facc15, 0 0 16px #facc15' },
        },
      },
      animation: {
        heartbeat: 'heartbeat 1.5s infinite',
        steam: 'steam 2s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

