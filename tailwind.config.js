/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        base: '1.125rem',  // 18px as base font size
        lg: '1.25rem',    // 20px
        xl: '1.375rem',   // 22px
        '2xl': '1.5rem',  // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
      },
      lineHeight: {
        relaxed: '1.6',
        loose: '1.8',
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
      },
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#f4f5f7',
          200: '#e5e7eb',
          300: '#d2d6dc',
          400: '#9fa6b2',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#e25858',
          700: '#e67373',
          800: '#d75f5f',
          900: '#c85252',
        },
      },
      boxShadow: {
        'focus': '0 0 0 3px rgba(226, 88, 88, 0.5)',
      },
      borderRadius: {
        'md': '0.375rem',
        'lg': '0.5rem',
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'html': { fontSize: '18px' },
        'body': { 
          lineHeight: '1.6',
          color: '#111827',  // Higher contrast text
        },
        'h1, h2, h3, h4, h5, h6': { lineHeight: '1.3' },
        'p': { marginBottom: '1rem' },
        'a:focus': { 
          outline: '3px solid rgba(226, 88, 88, 0.5)',
          outlineOffset: '2px' 
        },
        'button:focus': { 
          outline: '3px solid rgba(226, 88, 88, 0.5)',
          outlineOffset: '2px' 
        },
      })
    }
  ],
} 