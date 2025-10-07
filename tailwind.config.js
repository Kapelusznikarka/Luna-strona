/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        latte: {
          50: '#faf7f3',
          100: '#f7f2ea',
          200: '#f4ede3',
          300: '#ece1d1'
        },
        espresso: {
          700: '#3b2f2f',
          800: '#302626',
          900: '#261e1e'
        },
        caramel: {
          400: '#d6a56f',
          500: '#c9975d',
          600: '#b88452',
          700: '#9d6d43'
        },
        cream: {
          50: '#fffdfa',
          100: '#fdf9f2',
          200: '#faf7f3'
        }
      },
      borderRadius: {
        xl2: '1.25rem'
      },
      boxShadow: {
        soft: '0 6px 20px rgba(0,0,0,0.08)'
      },
      transitionDuration: {
        250: '250ms'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
