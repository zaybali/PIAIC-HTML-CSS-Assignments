/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primaryGreen: '#8EC63F',
        darkGreen: '#678E19',
        navDark: '#212121',
        navIcons: '#303030',
        navButton: '#A2D84C',
        paleYellow: 'hsl(43, 99%, 55%)',
      }
    },
  },
  plugins: [],
}
