module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%': {
            transform: 'perspective(400px) rotateY(90deg)'
          },
          '40%': {
            transform: 'perspective(400px) rotateY(-20deg)',
          },
          '60%': {
            transform: 'perspective(400px) rotateY(10deg)'
          },
          '80%': {
            transform: 'perspective(400px) rotateY(-5deg)',
          },
          '100%': {
            transform: 'perspective(400px) rotateY(0deg)',
          },
        },
      },
      animation: {
        flip: 'flip 1s linear 0s 1',
      },
      fontFamily: {
        sans: ['Another Typewriter', 'sans-serif']
      },
      backgroundImage: {
        'home-background': "url('./images/Home/TopPaper.png')"
      },
      screens: {
        'lg-1': '1280px',
        '2xl-1': '1920px',
        'sm-h-1': {'raw': '(min-height: 700px)'},
        'sm-h': {'raw': '(min-height: 640px)'},
        'md-h': {'raw': '(min-height: 768px)'},
        'lg-h': {'raw': '(min-height: 1024px)'},
        'xl-h': {'raw': '(min-height: 1280px)'},
        '2xl-h': {'raw': '(min-height: 1536px)'},
      },
      colors: {
        background: '#e8e8e7'
      },
      width: {
        160: '40rem',
        '70/100': '70%'
      },
      height: {
        '15/100': '15%',
        '13/100w': '13vh',
        '87/100w': '87vh'
      },
      inset: {
        '40/100': '40%',
        '15/100': '15%',
        '20/100': '20%'
      },
      minWidth: {
        '10/100': '10%',
        '15/100': '15%',
        'house-width': '300px',
      },
      minHeight: {
        '20': '100px',
      },
      flex: {
        'rigid':'1 0',
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
