module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Another Typewriter', 'sans-serif']
      },
      backgroundImage: {
        'home-background': "url('./images/Home/TopPaper.png')"
      },
      screens: {
        'lg-1': '1280px',
        '2xl-1': '1920px'
      },
      colors: {
        background: '#e8e8e7'
      },
      width: {
        160: '40rem',
        '70/100': '70%',
        '55/100': '55%',
        '3/8': '37.5%'
      },
      height: {
        '15/100': '15%',
        '13/100': '13%',
        '87/100': '87%'
      },
      inset: {
        '40/100': '40%',
        '15/100': '15%',
        '20/100': '20%'
      },
      minWidth: {
        '10/100': '10%',
        '15/100': '15%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
