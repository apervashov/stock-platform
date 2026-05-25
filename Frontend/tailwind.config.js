/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightBlue: 'hsl(215.02, 98.39%, 51.18%)',
        darkBlue: 'hsl(213.86, 58.82%, 46.67%)',
        lightGreen: 'hsl(156.62, 73.33%, 58.82%)',
        brandLink: 'hsl(215.02, 98.39%, 51.18%)',
        brandAccent: 'hsl(156.62, 73.33%, 58.82%)',
        surface: '#ffffff',
        surfaceMuted: '#f1f5f9',
        surfaceCanvas: '#f8fafc',
        line: '#e2e8f0',
        contentPrimary: '#0f172a',
        contentSecondary: '#475569',
        contentMuted: '#94a3b8',
        veryDarkViolet: '#0f172a',
        veryDarkBlue: '#1e293b',
        blueGray: {
          100: '#f1f5f9',
          400: '#94a3b8',
          500: '#64748b',
          700: '#334155',
        },
        feedbackError: '#dc2626',
        feedbackSuccess: 'hsl(156.62, 73.33%, 58.82%)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        card: '0.75rem',
        btn: '0.5rem',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(15 23 42 / 0.08), 0 1px 2px -1px rgb(15 23 42 / 0.06)',
      },
      spacing: {
        180: '32rem',
      },
    },
  },
  plugins: [],
};
