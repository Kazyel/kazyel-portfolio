module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',,
  ],
  theme: {
    
    extend: {
      colors: {
        darkmode: '#121212'
      },
      dropShadow: {
        '3xl': '0 3px 3px rgba(0, 0, 0, 0.35)'
      }
    },
  }, 
  darkMode: 'class',
  plugins: [],
}
