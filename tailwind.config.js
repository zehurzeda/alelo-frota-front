module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      '3xl': '0px 1px 4px rgba(0, 0, 0, 0.25)'
    },
    extend: {
      colors: {
        neutral: {
          black: '#000000',
          800: '#282828',
          700: '#555550',
          600: '#888888',
          500: '#A3A3A3',
          400: '#C0C0C0',
          300: '#DDDDDD',
          200: '#EDEDED',
          100: '#F7F7F7',
          white: '#FFFFFF'
        },
        nav: '#0e7f61',
        darkGreen: '#0E7F61',
        success: '#BDD654',
        error: '#BC2F6C',
        info: '#43A4E6',
        warning: '#FACC05',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};