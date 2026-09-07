/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#07090c',
        surface: '#0d1117',
        'surface-2': '#131a22',
        line: '#1e2833',
        ink: '#e8edf2',
        'ink-dim': '#9aa7b4',
        'ink-faint': '#5c6b7a',
        accent: '#4ade80',
        'accent-dim': '#2f9e5c',
      },
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(74, 222, 128, 0.35)',
        'glow-sm': '0 0 20px -6px rgba(74, 222, 128, 0.3)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-in': 'fade-in 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
